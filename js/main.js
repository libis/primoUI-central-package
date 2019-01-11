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
import Templates from './templates'

import {feedService} from './factories/feedService'
import {dbSearchHttpCallInterceptor} from './factories/dbSearchHttpCallInterceptor'
import {apiCallInterceptor} from './factories/apiCallInterceptor'
import MessageService from './factories/messageService'
import FeedbackService from './factories/feedbackService'
import AltmetricsService from './factories/altmetricsService'

//make Primo public
window.Primo = Primo;
//load PrimoExplorer UI if angular.reloadWithDebugInfo() is ran
window.setTimeout(function () {
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
if (window.appConfig.vid == 'ECB') {
  window.browzine = {
    api: "https://public-api.thirdiron.com/public/v1/libraries/1624",
    apiKey: "e71d1c31-7938-470a-8be2-a6e351e0c001",
    journalBrowZineWebLinkText: "View Journal Contents",
    articleBrowZineWebLinkText: "View Issue Contents",
    articlePDFDownloadLinkEnabled: true,
    articlePDFDownloadLinkText: "Download PDF",
  };
}
//let servicesHost = 'http://192.168.100.101:9292/';
let servicesHost = 'https://services.libis.be/';

let app = angular.module('centralCustom', ['ngMaterial', 'vcRecaptcha'])
  /*
  //.constant('servicesHost', 'https://services.libis.be/')
    .constant('feedbackServiceURL', 'https://services.libis.be/feedback')
    .constant('reportAProblemURL', 'https://services.libis.be/report_a_problem')
    .constant('requestACopyURL', 'http://192.168.100.101:9292//request_a_copy')
  */    
  .constant('feedbackServiceURL', servicesHost + 'feedback')
  .constant('reportAProblemURL', servicesHost + 'report_a_problem')
  .constant('requestACopyURL', servicesHost + 'request_a_copy')
  
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
    Helper.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
      console.log('altmerics embed.js loaded');
    });
    if (window.appConfig.vid == 'ECB') {
      Helper.loadScript('https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js').then(() => {
        console.log('browzine-primo-adapter.js loaded');
      });
    }
  })
  .factory('FeedService', feedService)
  .service('AltmetricsService', AltmetricsService)
  .service('MessageService', MessageService)
  .service('FeedbackService', FeedbackService)
  .factory('dbSearchHttpCallInterceptor', dbSearchHttpCallInterceptor)
  .factory('apiCallInterceptor', apiCallInterceptor)
  .config(['$httpProvider', ($httpProvider) => { $httpProvider.interceptors.push('apiCallInterceptor'); }]);

//intercept api calls for database search and change to KUL (only regional views)
var reg_views = ["KULeuven_TMOREM", "KULeuven_TMOREK", "KULeuven_UCLL", "KULeuven_LUCA", "KULeuven_ODISEE"];
if (reg_views.includes(window.appConfig.vid)) {
  app.config(['$httpProvider', ($httpProvider) => { $httpProvider.interceptors.push('dbSearchHttpCallInterceptor'); }]);
}



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

console.log('Replace Templates');
Templates.all.forEach((template) => {
  console.log(template.id)
  app.run(($templateCache) => {
    $templateCache.put(template.id, template.template);
  })
})

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