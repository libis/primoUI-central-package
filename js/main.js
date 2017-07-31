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
let app = angular.module('centralCustom',['ngMaterial'])
                 .constant('feedbackServiceURL', 'https://services.libis.be/feedback')
                 .run(($templateCache) => {
                   //$templateCache.put('components/search/fullView/full-view.html', fullViewHTML);
                 })
                 .factory('FeedService', feedService)
                 .service('MessageService', MessageService);


//Contains the after component selectors that will be injected
let afterComponents = {};

//Create all components and determine in which after component these need to be
//injected
console.log('Loading centralCustom components');
Components.all.forEach((component) => {
  if (component.appendTo) {
    let elements = afterComponents[component.appendTo] || [];
    elements.push(component.name);
    afterComponents[component.appendTo] = elements;
  }

  console.log(`\t\t${component.name}`);
  app.component(component.name.toCamelCase(), component.config);
});

//Inject place holders into the after components
Object.keys(afterComponents).forEach((component,i) => {
  let subComponents = afterComponents[component];

  app.component(component.toCamelCase(), {
    bindings:{
      parentCtrl: '<'
    },
    template: subComponents.map(m => `<${m} parent-ctrl="$ctrl"></${m}>`).join("")
  });
});
