/*
  General

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
String.prototype.toCamelCase = function () {
  return this.split('-').map((d, i, a) => i > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d).join('');
}

angular.module('googleAnalytics', []);
angular.module('googleAnalytics').run(function ($rootScope, $interval, analyticsOptions) {
	if(analyticsOptions.hasOwnProperty("enabled") && analyticsOptions.enabled) {
		if(analyticsOptions.hasOwnProperty("siteId") && analyticsOptions.siteId != '') {
			
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',analyticsOptions.siteId);
        }

        const inlineScriptTag = document.createElement('noscript');
        inlineScriptTag.type = 'text/javascript';

        const inlineCode = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WR259MX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';

        // Methods of adding inner text sometimes don't work across browsers.
        try {
          inlineScriptTag.appendChild(document.createTextNode(inlineCode));
        } catch (e) {
          inlineScriptTag.text = inlineCode;
        }

        document.querySelector('body').appendChild(inlineScriptTag);		
	}
});
angular.module('googleAnalytics').value('analyticsOptions', {
	enabled: false,
	siteId: '',
	defaultTitle: ''
});

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
