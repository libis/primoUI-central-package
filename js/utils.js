/*
  General

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
String.prototype.toCamelCase = function () {
  return this.split('-').map((d, i, a) => i > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d).join('');
}

//intercept api calls for database search and change to KUL (only regional views)
  /*
var reg_views = ["KULeuven_TMOREM", "KULeuven_TMOREK", "KULeuven_UCLL", "KULeuven_LUCA", "KULeuven_ODISEE"];
if (reg_views.includes(window.appConfig.vid)) {
  let app = angular.module('viewCustom', [])
    .factory('httpCallInterceptor', [() => {
      var httpCallInterceptor = {
        request: function(config){
          if (config.url.includes('pnxs') && !config.url.includes('delivery') && config.params) {
            //console.log(config);

            if(config.params.databases){
              config.params.inst = 'KUL';
              config.params.vid = 'KULeuven';
            }

            return config;
          }
          return config;
        }
      }
      return httpCallInterceptor;
    }])
    .config(['$httpProvider', ($httpProvider) => {
      $httpProvider.interceptors.push('httpCallInterceptor');
    }]);
}
*/
/*
angular.element.prototype.closestClass = function (className) {
  return (function closest(element, className) {
    if (element[0].nodeName === 'HTML') {
      return null;
    } else if (element.hasClass(className)) {
      return element;
    } else {
      return closest(element.parent(), className);
    }
  })(this, className);
};

angular.element.prototype.closestNode = function (nodeName) {
  return (function closest(element, nodeName) {
    if (element[0].nodeName === 'HTML') {
      return null;
    } else if (element[0].nodeName == nodeName.toUpperCase()) {
      return element;
    } else {
      return closest(element.parent(), nodeName);
    }
  })(this, nodeName);
};
*/
