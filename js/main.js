/*
  Central Package Loader

  Do NOT edit this file.
  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
import Primo from './primo-explore-dom/js/primo'
import Helper from './primo-explore-dom/js/primo/explore/helper'
import Components from './components'

import {feedService} from './factories/feedService'
import MessageService from './factories/messageService'
import FeedbackService from './factories/feedbackService'
import AltmetricsService from './factories/altmetricsService'

//make Primo public
window.Primo = Primo;
//load PrimoExplorer UI if angular.reloadWithDebugInfo() is ran
window.setTimeout(function() {
  if (Primo.isDebugEnabled()) {
    let uiURL = 'https://cdn.rawgit.com/mehmetc/primo-explore-dom-ui/fc0868df/js/custom.js';
    //let uiURL = 'http://127.0.0.1:8000/js/custom.js';

    Helper.loadScript(uiURL).then(() => {
      console.log('Injecting UI');
      Primo.explore.ui.toggle();
    });
  }
}, 2000);

//Create the centralCustom module;
let app = angular.module('centralCustom', ['ngMaterial'])
  .constant('feedbackServiceURL', 'https://services.libis.be/feedback')
  .config(($sceDelegateProvider) => {
    $sceDelegateProvider.resourceUrlWhitelist([
      '**'
    ]);
  })
  .run(($templateCache, $rootScope) => {
    //$templateCache.put('components/search/fullView/full-view.html', fullViewHTML);
    Helper.loadScript('https://unpkg.com/hotkeys-js@2.0.8/dist/hotkeys.min.js').then(() => {
      console.log('hotkeys.js loaded');
    });
    Helper.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function() {
      console.log('altmerics embed.js loaded');
    });
  })
  .factory('FeedService', feedService)
  .service('AltmetricsService', AltmetricsService)
  .service('MessageService', MessageService)
  .service('FeedbackService', FeedbackService)
  .factory('apiCallInterceptor', [() => {
    var apiCallInterceptor = {
      response: function(response) {
        //"Assessing Gospel Quotations in Justin Martyr"
        let fixDisplayData = function(pnxData) {
          if (pnxData) {
            try {
              if (pnxData.display && pnxData.display.creator) {
                pnxData.display.creator = pnxData.display.creator.map(c => {
                  let relator = c.match(/\(.*?\)/i);
                  let data = c.split(/\(.*?\)/i).join("");

                  if (relator) {
                    c=`${c} $$Q${data}`;
                  }
                  return c;
                });
              }

              if (pnxData.display && pnxData.display.contributor) {
                pnxData.display.contributor = pnxData.display.contributor.map(c => {
                  let relator = c.match(/\(.*?\)/i);
                  let data = c.split(/\(.*?\)/i).join("");

                  if (relator) {
                    c=`${c} $$Q${data}`;
                  }
                  return c;
                });
              }

            } catch (e) {
              console.log(e);
              console.log('no data');
            }
          }
          return pnxData;
        }

        if (/^\/primo_library\/libweb\/webservices\/rest\/primo-explore\/v1\/pnxs/.test(response.config.url)) {
          var data = response.data;
          try {
            if (Object.keys(data).includes('docs')) {
              data.docs.map(p => {
                return fixDisplayData(p.pnx);
              });
            } else {
              if (Object.keys(data).includes('pnx')) {
                data.pnx = fixDisplayData(data.pnx);
              }
            }

          } catch (e) {
            console.log(e);
            console.log('no data');
          }
          response.data = data;
        }

        return response;
      }
    }

    return apiCallInterceptor;
  }])
  .config(['$httpProvider', ($httpProvider) => {
    $httpProvider.interceptors.push('apiCallInterceptor');
  }]);


//Contains the after component selectors that will be injected
let afterComponents = {};

//Create all components and determine in which after component these need to be
//injected
console.log('Loading centralCustom components');
Components.all.forEach((component) => {
  console.log(component.name)
  if (component.enabled) {
    if (component.appendTo) {
      let elements = afterComponents[component.appendTo] || [];
      //elements.push(component.name);
      elements.push({
        'name': component.name,
        'enableInView': component.enableInView
      });
      afterComponents[component.appendTo] = elements;

    }
    app.constant('afterComponents', afterComponents);
    app.component(component.name.toCamelCase(), component.config);
  }
});


//Inject place holders into the after components
Object.keys(afterComponents).forEach((component, i) => {
  let subComponents = afterComponents[component];

  app.component(component.toCamelCase(), {
    bindings: {
      parentCtrl: '<'
    },
    template: subComponents.map(m => `<${m.name} parent-ctrl="$ctrl"></${m.name}>`).join("")
  });
});
