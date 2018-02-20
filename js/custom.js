(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Declare your components here.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Rewrite this when imports can be done dynamically
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       http://2ality.com/2017/01/import-operator.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       KULeuven/LIBIS (c) 2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Mehmet Celik
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


/* import your component configuration*/


require('./utils');

var _experiment = require('./components/general/experiment');

var _homeIcon = require('./components/prmLogoAfter/homeIcon');

var _betaSwitch = require('./components/prmLogoAfter/betaSwitch');

var _sourceIcon = require('./components/prmBriefResultAfter/sourceIcon');

var _pnxXml = require('./components/prmSearchResultThumbnailContainerAfter/pnxXml');

var _payMyFines = require('./components/prmFinesOverviewAfter/payMyFines');

var _feedback = require('./components/prmMainMenuAfter/feedback');

var _searchTip = require('./components/general/searchTip');

var _disclaimer = require('./components/general/disclaimer');

var _reportAProblem = require('./components/prmServiceHeaderAfter/reportAProblem');

var _finesMessage = require('./components/prmTopBarBefore/finesMessage');

var _announcements = require('./components/prmTopBarBefore/announcements');

var _PromoteLogin = require('./components/prmPromoteLogin/PromoteLogin');

var _feedbackAnnouncement = require('./components/prmTopBarBefore/feedbackAnnouncement');

var _staticFooter = require('./components/general/staticFooter');

var _removeAlerts = require('./components/general/removeAlerts');

var _illRequestForm = require('./components/prmRequestsAfter/illRequestForm');

var _recommendationItem = require('./components/prmRecommendationItemAfter/recommendationItem');

var _databaseLink = require('./components/general/databaseLink');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AfterComponents = function () {
  function AfterComponents() {
    _classCallCheck(this, AfterComponents);
  }

  _createClass(AfterComponents, null, [{
    key: 'all',
    get: function get() {
      /*
        name = the sub element in the after element
        config = the imported configuration object
        enabled = true/false should the component be created
        appendTo = The component should be created in this after component.
          ex. {name: 'home-icon', config: homeIconConfig, enabled: true, appendTo: 'prm-logo-after'}
        results in:
          <prm-logo-after parentCtrl='$ctrl'>
            <home-icon parentCtrl='$ctrl'></home-icon>
          </prm-logo-after>
      */
      return [{ name: 'libis-experiment', config: _experiment.experimentConfig, enabled: false, appendTo: 'prm-messages-and-blocks-overview-after', enableInView: '.*' }, { name: 'home-icon', config: _homeIcon.homeIconConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '.*' }, { name: 'beta-switch', config: _betaSwitch.betaSwitchConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '.*' }, { name: 'source-icon', config: _sourceIcon.sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '.*' }, { name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after', enableInView: '.*' }, { name: 'pay-my-fines', config: _payMyFines.payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after', enableInView: '.*' }, { name: 'feedback', config: _feedback.feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '.*' }, { name: 'report-a-problem', config: _reportAProblem.reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '.*' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'prm-disclaimer', config: _disclaimer.disclaimerConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'static-footer', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-explore-main-after', enableInView: '.*' }, { name: 'static-footer-account', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-account-after', enableInView: '.*' }, { name: 'remove-alerts', config: _removeAlerts.removeAlertsConfig, enabled: true, appendTo: 'prm-add-query-to-saved-searches-after', enableInView: '.*' }, { name: 'prm-dblink', config: _databaseLink.databaseLinkConfig, enabled: false, appendTo: null, enableInView: '.*' },

      /* lbs-components used in html-templates of the package */
      { name: 'promote-login-static-footer', config: _PromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView: '^KULeuven' }, { name: 'ill-request-form-overview', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-overview-after', enableInView: '.*' }, { name: 'ill-request-form', config: _illRequestForm.illRequestFormConfig, enabled: true, appendTo: 'prm-requests-after', enableInView: '^KULeuven|^VIVES' }, { name: 'announcement-feedback', config: _feedbackAnnouncement.feedbackAnnouncementConfig, enabled: false, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'override-getlink-recommendation', config: _recommendationItem.recommendationItemConfig, enabled: true, appendTo: 'prm-recomendation-item-after', enableInView: '.*' }, { name: 'announcement', config: _announcements.announcementsConfig, enabled: false, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'pay-my-fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven' }].filter(function (component) {
        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/databaseLink":2,"./components/general/disclaimer":4,"./components/general/experiment":5,"./components/general/removeAlerts":6,"./components/general/searchTip":7,"./components/general/staticFooter":8,"./components/prmBriefResultAfter/sourceIcon":9,"./components/prmFinesOverviewAfter/payMyFines":10,"./components/prmLogoAfter/betaSwitch":11,"./components/prmLogoAfter/homeIcon":12,"./components/prmMainMenuAfter/feedback":13,"./components/prmPromoteLogin/PromoteLogin":14,"./components/prmRecommendationItemAfter/recommendationItem":15,"./components/prmRequestsAfter/illRequestForm":16,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":17,"./components/prmServiceHeaderAfter/reportAProblem":18,"./components/prmTopBarBefore/announcements":19,"./components/prmTopBarBefore/feedbackAnnouncement":20,"./components/prmTopBarBefore/finesMessage":22,"./utils":36}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var databaseLinkHTML = '\r\n<a aria-label="{{title_label}}" title="{{title_label}}" ng-click="databaseLink()">\r\n  <span class ="md-headline" id="ContentDatabasLink">\r\n    {{title}}\r\n  </span>\r\n</a>\r\n';

var DatabaseLinkController = function DatabaseLinkController($scope, $http, $mdDialog) {
  _classCallCheck(this, DatabaseLinkController);

  var self = this;
  $scope.title = 'databases';
  $scope.title_label = 'search databases';
  $scope.databaseLink = function () {
    console.log("--------------database");
    console.log($scope);
    console.log($scope.$parent.$parent.$parent.$parent.$ctrl);

    var databaseFacet = {
      "name": "rtype",
      "type": "include",
      "value": "databases",
      "displayValue": "databases",
      "displayedType": "exact",
      "label": "Databanken",
      "isMultiFacet": false,
      "tooltip": "Verwijder Type bron Databanken",
      "$$hashKey": "object:2808"
    };
    console.log($scope.$parent.$parent.$parent.$parent.$ctrl.searchStateService.searchObject);

    /********************************************** */
    https: //github.com/mehmetc/primo-explore-collection-viewer/blob/master/js/ng-primo.js
    /********************************************** */

    $scope.$parent.$parent.$parent.$parent.$ctrl.searchService.setSortBy('title');
    $scope.$parent.$parent.$parent.$parent.$ctrl.searchService.facetService.addStickyFacet(databaseFacet);
    console.log($scope.$parent.$parent.$parent.$parent.$ctrl.searchStateService.searchObject);
    $scope.$parent.$parent.$parent.$parent.$ctrl.searchService.search();
    /*
            sessionStorage.setItem("stickyFacets",
           '[{"name":"rtype","type":"include","value":"databases","displayValue":"databases","displayedType":"exact","label":"Databanken","isMultiFacet":false,"tooltip":"Verwijder Type bron Databanken","$$hashKey":"object:2808","persistent":true,"operation":"add"}]');
           */
    //   document.location.href = "http://localhost:8003/primo-explore/search?query=any,contains,databases&tab=all_content_tab&search_scope=ALL_CONTENT&"
  };
};

DatabaseLinkController.$inject = ['$scope', '$http', '$mdDialog'];

var databaseLinkConfig = exports.databaseLinkConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: DatabaseLinkController,
  template: databaseLinkHTML
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DialogController = function DialogController($scope, $mdDialog, $mdToast, $http, $translate, feedbackServiceURL, MessageService) {
  var _this = this;

  _classCallCheck(this, DialogController);

  this.scope = $scope;
  this.mdDialog = $mdDialog;
  this.mdToast = $mdToast;
  this.http = $http;
  this.feedbackServiceURL = feedbackServiceURL;
  this.translate = $translate;

  var self = this;

  $scope.cancelFeedback = function () {
    _this.mdDialog.cancel();
  };

  $scope.sendFeedback = this.sendFeedback;
  $scope.sendFeedback = function (answer) {
    var self = _this;

    Primo.user.then(function (user) {
      self.user = user;
      Primo.view.then(function (view) {
        self.view = view;

        var data = {
          subject: $scope.feedback.subject,
          view: self.view.code,
          inst: self.view.institution.code,
          loggedIn: self.user.isLoggedIn(),
          onCampus: self.user.isOnCampus(),
          user: self.user.name,
          ip: self.view.ip.address,
          type: 'feedback',
          feedback: $scope.feedback.message,
          email: $scope.feedback.replyTo || self.user.email,
          userAgent: navigator.userAgent
        };
        if ($scope.feedback.replyTo.length > 0 && $scope.feedback.message.length > 0) {
          self.mdDialog.hide();

          self.http({
            method: 'POST',
            url: _this.feedbackServiceURL,
            headers: {
              'Content-Type': 'application/json',
              'X-From-ExL-API-Gateway': undefined
            },
            cache: false,
            data: data
          }).then(function (response) {
            //self.mdToast.showSimple('Thank you for your feedback!');
            var message = self.translate.instant('lbs.nui.feedback.success') || 'Thank you for your feedback!';
            MessageService.show(message, { scope: $scope, hideDelay: 5000 });
          }, function (response) {
            //self.mdToast.showSimple('Unable to submit feedback.');
            var message = self.translate.instant('lbs.nui.feedback.fail') || 'Unable to submit feedback.';
            MessageService.show(message, { scope: $scope, hideDelay: 5000 });
          });
        }
      });
    });
  };

  Primo.user.then(function (user) {
    self.user = user;
    Primo.view.then(function (view) {
      self.view = view;
      $scope.feedback = {
        replyTo: self.user.email,
        message: '',
        subject: 'feedback'
      };
    });
  });
};

exports.default = DialogController;


DialogController.$inject = ['$scope', '$mdDialog', '$mdToast', '$http', '$translate', 'feedbackServiceURL', 'MessageService'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var disclaimerDialogHTML = '\uFEFF<md-dialog aria-label="Disclaimer">\r\n    <md-dialog-content id="disclaimerDialog">\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Cookiebeleid Limo</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-content>\r\n            Limo gebruikt cookies die het gebruik van de zoekmachine vergemakkelijken.\r\n\r\n            <h3>WAT IS EEN COOKIE?</h3>\r\n            Cookies zijn kleine tekstbestanden die je voorkeuren tijdens het surfen onthouden en opslaan op je eigen computer of toestel.\r\n\r\n            <h3>COOKIEGEBRUIK IN LIMO</h3>\r\n            <p>\r\n                Enerzijds zijn er functionele cookies. Deze cookies onthouden bepaalde keuzes en instellingen die je een eerste keer hebt\r\n                gekozen om bij volgende bezoeken effici\xEBnter, sneller en eenvoudiger te kunnen zoeken in Limo. Deze cookies\r\n                onthouden voorkeursinstellingen,\u2026\r\n            </p>\r\n            <p>\r\n                Voor gebruikers van de de KU Leuven Associatie kunnen loginnamen onthouden worden bij het aanmelden via de Centrale login.\r\n            </p>\r\n            <p>\r\n                Anderzijds worden cookies ook gebruikt om bezoek- en klikgedrag te onthouden. Hiermee worden geanonimiseerde rapporten gemaakt\r\n                van het gebruik van Limo.\r\n            </p>\r\n            <!--                \r\n                KU Leuven gebruikt onder andere volgende cookies op de centraal beheerde websites:\r\n                <ul>\r\n                    <li>\r\n                    NSC_* : Deze cookies worden gebruikt door de netscaler om de loadbalancing te sturen\r\n                    </li>\r\n                <li>_ga* en _utm*: Dit zijn Google Analytics cookies, gebruikt voor user-tracking (meer info over Google Analytics)\r\n                 </li>\r\n                <li>\t_pk_id* : piwik cookies die gebruikt worden door de user-tracking omgeving van KU Leuven\r\n                 </li>\r\n                <li>\tJSESSIONID: cookies die gebruikt worden in toledo en kuloket\r\n                 </li>\r\n                <li>\tPHPSESSID: cookies die gebruikt voor de lamp omgeving (php)\r\n                 </li>\r\n                <li>\t_shibsession* en _saml*: cookies die nodig zijn voor de centrale login van KU Leuven\r\n                </li>\r\n                </ul>\r\n            -->\r\n            <h3>WIJZIGINGEN VAN BROWSERINSTELLINGEN</h3>\r\n            <p>\r\n                Cookies kan je via de browserinstellingen op je computer weigeren of verwijderen. De wijze hoe dit kan gebeuren verschilt\r\n                van browser tot browser. Raadpleeg indien nodig de helpfunctie van je browser. Deze instellingen moet je\r\n                steeds per browser en per computer apart instellen!\r\n            </p>\r\n            <ul>\r\n                <li>\r\n                    <a href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies#ie=ie-10-win-7" target="_blank">Cookie-instellingen in Internet Explorer</a>\r\n                </li>\r\n                <li>\r\n                    <a href="https://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Cookie-instellingen in Chrome</a>\r\n                </li>\r\n                <li>\r\n                    <a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies"\r\n                        target="_blank">Cookie-instellingen in Firefox</a>\r\n                </li>\r\n                <li>\r\n                    <a href="https://support.apple.com/kb/PH19214?locale=nl_BE" target="_blank">Cookie-instellingen in Safari</a>\r\n                </li>\r\n            </ul>\r\n            <p>\r\n                Het niet-aanvaarden of verwijderen of uitzetten van cookies kan tot gevolg hebben dat bepaalde functionaliteiten van Limo\r\n                niet meer toegankelijk zijn of slecht functioneren. Daardoor kan de beleving van de site tegenvallen.\r\n            </p>\r\n            <h3>SOCIALE MEDIA EN DE BIJHORENDE PLUG-INS</h3>\r\n            <p>\r\n                Facebook ontvangt heel wat informatie over je surfgedrag via deze social plug-in op hun websites (via bijvoorbeeld de knoppen\r\n                \u201CVind ik leuk\u201D of \u201CDelen\u201D).\r\n            </p>\r\n            <p>\r\n                Deze knoppen kunnen zich ook bevinden op de resultatenpagina van Limo.\r\n            </p>\r\n            <p>\r\n                Indien je je hiertegen wilt beschermen, dan wordt er (door onder meer het Centrum voor de Bescherming van de Persoonlijke\r\n                Levenssfeer) aangeraden om \xE9\xE9n van de onderstaande maatregelen te nemen.\r\n            </p>\r\n\r\n            <ol>\r\n                <li>Installeer een browser add-on die tracking blokkeert. Voorbeelden van dergelijke browser add-ons zijn:\r\n                    <ul>\r\n                        <li>Privacy Badger (\r\n                            <a href="http://www.eff.org/privacybadger" target="_blank">http://www.eff.org/privacybadger</a>)</li>\r\n                        <li>Ghostery (\r\n                            <a href="https://www.ghostery.com/" target="_blank">https://www.ghostery.com</a>)</li>\r\n                        <li>Disconnect (\r\n                            <a href="https://disconnect.me/disconnect" target="_blank">https://disconnect.me/disconnect</a>)</li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <li>Maak gebruik van de incognito of \u201Cprivate nagivation\u201D-modus van uw browser. Recente versies van de meest\r\n                    courante browsers bieden zo\u2019n priv\xE9-modus als functionaliteit aan:\r\n                    <ul>\r\n                        <li> Internet Explorer </li>\r\n                        <li>Firefox</li>\r\n                        <li>Chrome</li>\r\n                        <li> Safari</li>\r\n                    </ul>\r\n                </li>\r\n            </ol>\r\n\r\n\r\n            <p>Deze functie dwingt de browser om sporen van je surfgedrag (cookies, historiek, enz.) te wissen nadat het venster\r\n                wordt gesloten en beschermt je aldus om door derden gevolgd te worden (opgelet: deze functie maakt jou niet\r\n                anoniem op het web). Er bestaan ook speciale privacybeschermende browsers, zoals Epic Privacy Browser (\r\n                <a href="http://www.epicbrowser.com/" target="_blank">www.epicbrowser.com</a>).</p>\r\n\r\n            <p>Sociale media en andere websites gebruiken informatie over het surfgedrag van zijn gebruikers om hen gerichte\r\n                reclame aan te bieden. Wil je niet meer gevolgd worden voor gerichte reclame dan kan je je\r\n                <strong>uitschrijven voor gerichte advertenties</strong> via de opt-out website van de European Interactive Digital\r\n                Advertising Alliance (\r\n                <a href="http://www.youronlinechoices.eu/" target="_blank">www.youronlinechoices.eu</a>).\r\n            </p>\r\n                <p>\r\n                <br> Uitschrijven voor gerichte advertenties betekent niet dat er geen informatie meer verzameld wordt over je\r\n                surfgedrag. Indien je je ook wil beschermen tegen de inzameling van deze informatie wordt er geadviseerd\r\n                om daarnaast ook gebruik te maken van de incognito-modus van uw browser of \xE9\xE9n van de bovenvermelde browser\r\n                add-ons te gebruiken..</p>\r\n\r\n            <h3>MEER WETEN?</h3>\r\n\r\n            <p>Meer info vind je onder andere op volgende websites:\r\n                <a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a>&nbsp;en\r\n                <a href="http://www.youronlinechoices.com/be-nl/" target="_blank">www.youronlinechoices.com/be-nl</a>\r\n            </p>.\r\n\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button md-autofocus class="md-primary" ng-click="closeDialog()">\r\n                        Sluiten\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>';
var disclaimerLinkHTML = '<a aria-label="{{title_label}}" title="{{title_label}}" ng-click="showDisclaimerDialog()">\r\n  <span id="FooterDisclaimer">\r\n    {{title}}\r\n  </span>\r\n</a>\r\n';

var disclaimerController = function disclaimerController($scope, $http, $mdDialog) {
  _classCallCheck(this, disclaimerController);

  var self = this;

  Primo.view.then(function (view) {
    var locale = view.interfaceLanguage;
    var vid = view.code;

    var locale_text = {
      'nl_BE': {
        'title': 'Cookiebeleid',
        'title_label': "Cookiebeleid"
      },
      'en_US': {
        'title': 'Cookie Policy',
        'title_label': "Cookie Policy"
      },
      'fr_FR': {
        'title': 'Cookie Policy',
        'title_label': "Cookie Policy"
      }
    };

    var disclaimerDialog = disclaimerDialogHTML;
    /*
    switch (locale) {
      case 'fr_FR':
      disclaimerDialog = disclaimerDialog_frFR_HTML;
        break;
      case 'nl_BE':
      disclaimerDialog = disclaimerDialog_nlBE_HTML;
        break;
      default:
      disclaimerDialog = disclaimerDialog_enUS_HTML;
    }
    */
    $scope.title = locale_text[locale]['title'];
    $scope.title_label = locale_text[locale]['title_label'];

    $scope.showDisclaimerDialog = function ($event) {
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        targetEvent: $event,
        template: disclaimerDialog,
        locals: {
          items: $scope.items
        },
        controller: DialogController
      });
    };

    function DialogController($scope, $mdDialog, items) {
      $scope.items = items;
      $scope.closeDialog = function () {
        $mdDialog.hide();
      };
    }
  });
};

disclaimerController.$inject = ['$scope', '$http', '$mdDialog'];

var disclaimerConfig = exports.disclaimerConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: disclaimerController,
  template: disclaimerLinkHTML
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* component to do all your experimental stuff */
/* [en|dis]able in components*/

var ExperimentController = function () {
  function ExperimentController($scope, $element, $templateCache, $compile, $injector, $rootScope, $translate, $window) {
    _classCallCheck(this, ExperimentController);

    console.log('Experiment:');
    var self = this;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$element = $element;
    this.$templateCache = $templateCache;
    this.$compile = $compile;
    this.translate = $translate;
    this.window = $window;
    this.illRequestUrl = '';

    console.log(self);
    console.log('rootScope:');
    console.log($rootScope);
    console.log('templateCache');
    console.log($templateCache);
    var template = $templateCache.get('components/account/overview/requestsOverview/requests-overview.html');
    // var template = template + "<H1 id='omtelachten'>LALALA<ill-request-form-overview></ill-request-form-overview></H1>";
    var template = template + "<H1 id='omtelachten'>LALALA</H1>";
    $templateCache.put('components/account/overview/requestsOverview/requests-overview.html', template);
    console.log($templateCache.get('components/account/overview/requestsOverview/requests-overview.html'));
  }

  _createClass(ExperimentController, [{
    key: 'toIllRequestUrl',
    value: function toIllRequestUrl() {
      var institutionCode = this.parentCtrl.parentCtrl.requestsService.accountService.linkedUserSelectorService.selectedInstitution.institutionCode;
      //console.log('institutionCode:' + institutionCode)
      this.illRequestUrl = 'https://leuven-primo.hosted.exlibrisgroup.com/pds?func=sso&url=http://eu.alma.exlibrisgroup.com/view/uresolver/' + institutionCode + '/openurl?svc_dat=getit&svc.profile=getit&directResourceSharingRequest=true&newUI=true';
      this.window.open(this.illRequestUrl, '_freeIll');
    }
  }, {
    key: '$onInit',
    value: function $onInit() {

      console.log('newElement:');
      //  console.log (angular.element( '#omtelachten').length)
      // if ( angular.element( 'H1').length == 0 ) {
      console.log('\'t Is ni om te lachten');
      var elementName = 'prm-requests-overview';
      //let element = $element.parentElement.parentElement
      var element = angular.element(document.querySelector(elementName));
      if (element) {
        var elementScope = element.scope();
        console.log(elementScope);
        this.$compile(element)(elementScope);
        //elementScope.$apply()
      }
      //   }
    }
  }]);

  return ExperimentController;
}();

ExperimentController.$inject = ['$scope', '$element', '$templateCache', '$compile', '$injector', '$rootScope', '$translate', '$window'];

var experimentConfig = exports.experimentConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: ExperimentController,
  template: ''
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RemoveAlertsController = function RemoveAlertsController($scope, $http, $translate, $element, $templateCache) {
    _classCallCheck(this, RemoveAlertsController);

    this.translate = $translate;
    var self = this;
    var scope = $scope;
    var locale = "en_US";
    locale = scope.$root.$$childHead.$ctrl.userSessionManagerService.i18nService.getLanguage();

    $templateCache.put('components/search/savedQueries/addAlertToast/add-alert-toast.html', '\n        <md-toast ng-class="{\'mobile-define\':$ctrl.detectMobile(),\'layout-column\':$ctrl.detectMobile()}" class="md-toast-content">\n    <div layout="row" layout-align="center center" class="md-toast-content" ng-class="{\'end-content\':!$ctrl.detectMobile()}">\n        <span class="md-toast-text">\n            <span ng-if="!$ctrl.addMode" translate="nui.favorites.search.alert.message"></span>\n            <span ng-if="$ctrl.addMode" translate="nui.savesearch.message.description"></span>\n            <strong ng-if="!$ctrl.addMode">{{$ctrl.email}}</strong>\n        </span>\n    </div>\n    <div layout="row" layout-align="start start" class="md-toast-content" ng-class="{\'start-content\':!$ctrl.detectMobile()}">\n        <md-button ng-click="$ctrl.onDismiss()" aria-label="{{::(\'nui.message.dismiss\' | translate)}} ">\n            <span class="ng-scope" translate="nui.message.dismiss"></span>\n        </md-button>\n    </div>\n</md-toast>\n<prm-add-alert-toast-after parent-ctrl="$ctrl"></prm-add-alert-toast-after>\n        ');
};

RemoveAlertsController.$inject = ['$scope', '$http', '$translate', '$element', '$templateCache'];

var removeAlertsConfig = exports.removeAlertsConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: RemoveAlertsController,
    template: '<style>md-template prm-add-alert-toast md-toast *[aria-label="{{\'nui.aria.savedQueriesList.alert\' | translate}}"] {  display: none; }</style>'
};

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchTipHTML = '<a aria-label="{{title_label}}" title="{{title_label}}" ng-click="showSearchTips()">\r\n  <span class ="md-headline" id="ContentSearchTips">\r\n    {{title}}\r\n  </span>\r\n</a>\r\n';
var tip_enUS_HTML = '<md-dialog aria-label="Search tips">\r\n    <md-dialog-content id="searchtips">\r\n\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Search tips</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n\r\n        <md-content>\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        For phrases use quotes: "global warming"\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        For truncated searches use an asterisk: gun* will retrieve gun, guns, gunners, gunnery, gunning, etc.\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        As a wildcard for one character, use ?:  wom?n will retrieve woman and women.\r\n                    </div>\r\n                </md-list-item>\r\n\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        To exclude a term use NOT (in uppercase): celtic NOT Irish\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        To group terms use brackets: Shakespeare (tragedy OR sonnet). OR is in uppercase\r\n                   </div>\r\n                </md-list-item>\r\n            </md-list>\r\n<!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                        For users of Internet Explorer:<br/>\r\n                        Limo should be viewed with version 9 or higher.<br />\r\n                        If you have an earlier version, it is a good idea to upgrade your browser. <br />\r\n                    </div>\r\n                </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button md-autofocus  class="md-primary" ng-click="closeDialog()">\r\n                        Close\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';
var tip_frFR_HTML = '<md-dialog aria-label="Zoektips">\r\n    <md-dialog-content id="searchtips">\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Trucs & astuces</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-content>\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        utilisez des guillemets pour les phrases/expressions exactes: "r\xE9chauffement global"\r\n                    </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez un ast\xE9risque pour les recherches tronqu\xE9es: vin* donnera vinage, vinaigre, vinasse, vineux etc.\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez ? comme caract\xE8re de remplacement: fe?me donnera femme et ferme\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez NOT (en capitales) pour exclure un mot: celtique NOT irlandais\r\n                        </div>\r\n                    </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        utilisez des parenth\xE8ses pour grouper les termes: Shakespeare (trag\xE9die OR sonnet). OR est \xE9crit en capitales\r\n                    </div>\r\n                </md-list-item>\r\n            </md-list>\r\n            <!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                Pour les utilisateurs d\'Internet Explorer:<br/>\r\nIl est recommand\xE9 d\'utiliser la version 9 ou ult\xE9rieure.<br/>\r\nSi vous avez une version plus ancienne, il est conseill\xE9 de mettre \xE0 jour votre navigateur.<br/>\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button md-autofocus class="md-primary" ng-click="closeDialog()">\r\n                        Sluiten\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';
var tip_nlBE_HTML = '<md-dialog aria-label="Zoektips">\r\n    <md-dialog-content id="searchtips">\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Zoektips</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-content>\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        Gebruik "" om te zoeken op exacte woordcombinatie: "global warming"\r\n                    </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik een * of ? om te zoeken op delen van woorden:\r\n                            <p style="padding-left:1em;">\r\n                                gun* vindt gun, guns, gunners, gunnery, gunning, enz.<br />\r\n                                wom?n vindt woman en women\r\n                            </p>\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik NOT (in hoofdletters) om een zoekterm uit te sluiten: celtic NOT Irish\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik haakjes om termen te groeperen: Shakespeare (tragedy OR sonnet). OR is in hoofletters\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n            <!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                        Voor gebruikers van Internet Explorer:<br />\r\n                        Limo wordt best bekeken via version 9 of hoger.<br />\r\n                        Gelieve uw browser te upgraden indien u over een lagere versie beschikt.<br />\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button md-autofocus class="md-primary" ng-click="closeDialog()">\r\n                        Sluiten\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';

var SearchTipController = function SearchTipController($scope, $http, $mdDialog) {
  _classCallCheck(this, SearchTipController);

  var self = this;

  Primo.view.then(function (view) {
    var locale = view.interfaceLanguage;
    var vid = view.code;

    var locale_text = {
      'nl_BE': {
        'title': 'Zoektips',
        'title_label': "Zoektips weergeven"
      },
      'en_US': {
        'title': 'Search Tips',
        'title_label': "Search Tips"
      },
      'fr_FR': {
        'title': 'Astuces?',
        'title_label': "Astuces?"
      }
    };

    var tipsHTML = tip_enUS_HTML;
    switch (locale) {
      case 'fr_FR':
        tipsHTML = tip_frFR_HTML;
        break;
      case 'nl_BE':
        tipsHTML = tip_nlBE_HTML;
        break;
      default:
        tipsHTML = tip_enUS_HTML;
    }

    $scope.title = locale_text[locale]['title'];
    $scope.title_label = locale_text[locale]['title_label'];

    $scope.showSearchTips = function ($event) {
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        targetEvent: $event,
        template: tipsHTML,
        locals: {
          items: $scope.items
        },
        controller: DialogController
      });
    };

    function DialogController($scope, $mdDialog, items) {
      $scope.items = items;
      $scope.closeDialog = function () {
        $mdDialog.hide();
      };
    }
  });
};

SearchTipController.$inject = ['$scope', '$http', '$mdDialog'];

var searchTipConfig = exports.searchTipConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: SearchTipController,
  template: searchTipHTML
};

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StaticFooterController = function StaticFooterController($scope, $http, $mdDialog, $element) {
    _classCallCheck(this, StaticFooterController);

    var self = this;
    var scope = $scope;
    var locale = "en_US";

    var viewWithCustomFooter = ['Lirias', 'wereldwijzer', 'ECB'];
    /*
            console.log (self )
            console.log (scope )
            console.log (scope.$root.$$childHead.$ctrl.userSessionManagerService )
    */
    locale = scope.$root.$$childHead.$ctrl.userSessionManagerService.i18nService.getLanguage();
    /*
    var vid = window.appConfig['vid'];
    //       $templateCache.put(staticFooterTemplateName, 'custom/CENTRAL_PACKAGE/html/templates/footer_' + locale + '.html');
    */
    var vid = window.appConfig['vid'];
    var templateUrl = 'custom/CENTRAL_PACKAGE/html/templates/footer_' + locale + '.html';
    if (viewWithCustomFooter.includes(vid)) {
        templateUrl = 'custom/CENTRAL_PACKAGE/html/templates/footer_' + vid + '_' + locale + '.html';
    }

    $scope.getTemplateUrl = function () {
        return templateUrl;
    };
};

StaticFooterController.$inject = ['$scope', '$http', '$mdDialog', '$element'];

var staticFooterConfig = exports.staticFooterConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: StaticFooterController,
    template: '<ng-include src="getTemplateUrl()"/>'
};

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sourceIconHTML = '<style>\r\n  div.sourceid {\r\n    display: inline-flex;\r\n    /* margin-left: 1em; */\r\n     /* margin-top: -2px; */\r\n    position: relative; \r\n  }\r\n\r\n\r\n  div.sourceid img.source-icon {\r\n    display: inline-block;\r\n    max-height: 18px;\r\n    width: auto;\r\n    height: auto;\r\n    transform: none;\r\n    min-width: auto;\r\n    min-height: auto;\r\n    vertical-align: bottom;\r\n  }\r\n\r\n  div.sourceid span.source-text {\r\n    font-size: small;\r\n    margin-left: 0.4em;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n  }\r\n</style>\r\n\r\n<div ng-if="$ctrl.sourceid" class="sourceid">\r\n  <img src="{{$ctrl.icon.iconUrl}}" class="source-icon">\r\n  <span class="source-text">{{$ctrl.icon.iconText}}</span>\r\n</div>\r\n';

var SourceIconController = function SourceIconController($scope, $element, $compile) {
  _classCallCheck(this, SourceIconController);

  var self = this;
  var parentCtrl = $scope.$parent.$ctrl.parentCtrl;
  var iconConf = [{
    'sourceid': 'lirias',
    'iconUrl': '//limo.libis.be/primo_library/libweb/libis/images/lirias.jpg',
    'iconText': 'Lirias'
  }];

  var iconConfSources = iconConf.map(function (obj) {
    return obj.sourceid;
  });

  self.sourceid = null;
  if ('sourceid' in parentCtrl.item.pnx.control) {
    self.sourceid = parentCtrl.item.pnx.control.sourceid[0];

    if (iconConfSources.includes(self.sourceid)) {
      self.icon = iconConf.find(function (x) {
        return x.sourceid === self.sourceid;
      });
    }
  }

  $element.parent().parent().parent().find('div').append($compile(sourceIconHTML)($scope));
};

SourceIconController.$inject = ['$scope', '$element', '$compile'];

var sourceIconConfig = exports.sourceIconConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: SourceIconController,
  template: ''
};

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var payMyFinesHTML = '<style>\r\n  .md-button[id=payFinesNow] {\r\n    color: white;\r\n    background-color: tomato;\r\n  }\r\n\r\n  .md-button[id=payFinesNow]:hover {\r\n    background-color: tomato;\r\n    filter: brightness(80%);\r\n    color: white;\r\n  }\r\n</style>\r\n\r\n<div layout="row" layout-align="center center" ng-show=\'$ctrl.showPayMyFines\'>\r\n  <a id=\'payFinesNow\' class="md-button md-raised md-secundary" target=\'_blank\' href=\'https://services.libis.be/pay_my_fines\'>Pay fines</a>\r\n</div>\r\n';

var PayMyFinesController = function () {
  function PayMyFinesController() {
    _classCallCheck(this, PayMyFinesController);

    var self = this;
    this.showPayMyFines = false;
  }

  _createClass(PayMyFinesController, [{
    key: '$onInit',
    value: function $onInit() {
      var _this = this;

      Primo.view.then(function (view) {
        if (/^KULeuven/.test(view.code)) {
          Primo.user.then(function (user) {
            if (user.fines.length > 0) {
              _this.showPayMyFines = true;
            }
          });
        }
      });
    }
  }]);

  return PayMyFinesController;
}();

var payMyFinesConfig = exports.payMyFinesConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: PayMyFinesController,
  template: payMyFinesHTML
};

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var betaSwitchHTML = '<div id="beta-switch">\r\n    <span data-ribbon="Beta">\r\n        <span ng-click="useBeta=false; onChangeUseBeta();"> \r\n                <span translate="lbs.nui.default.nui.beta_switch"></span>\r\n        </span>\r\n    </span>\r\n</div>\r\n';

var BetaSwitchController = function () {
  function BetaSwitchController($scope) {
    _classCallCheck(this, BetaSwitchController);

    var self = this;
    self.$scope = $scope;

    $scope.showBetaSwitch = true;
    $scope.useBeta = true;

    $scope.onChangeUseBeta = function () {
      if (!$scope.useBeta) {
        self.goToOldUI();
      }
    };
  }

  _createClass(BetaSwitchController, [{
    key: 'goToOldUI',
    value: function goToOldUI() {
      document.location.href = '/primo_library/libweb/action/search.do?vid=' + this.oldVid;
    }
  }, {
    key: '$onInit',
    value: function $onInit() {
      var _this = this;

      var LinkToBetaViews = {
        'ACV': 'ACV',
        'BPB': 'BPB',
        'FARO': 'FARO',
        'FODFIN': 'FODFIN',
        'GCLD': 'GCLD',
        'GSB': 'GSB',
        'GSG': 'GSG',
        'IMEC': 'IMEC',
        'KADOC': 'KADOC',
        'KBC': 'KBC',
        'KMKG': 'KMKG',
        'KULeuven': 'KULeuven_UX',
        'LIBAR': 'LIBAR',
        'LUCA': 'LUCA_UX',
        'NBB': 'NBB',
        'ODISEE': 'ODISEE_UX',
        'OFO': 'OFO',
        'RBINS': 'RBINS',
        'RELI': 'RELI',
        'RMCA': 'RMCA',
        'SERV': 'SERV',
        'TMOREK': 'TMOREK_UX',
        'TMOREM': 'TMOREMA_UX',
        'VDIC': 'VDIC',
        'VIVES_KATHO': 'VIVES_KATHO_UX',
        'VIVES_KHBO': 'VIVES_KHBO_UX',
        'VLP': 'VLP',
        'KULeuven_TMOREM': 'KULeuven_TMOREM_UX',
        'KULeuven_UCLL': 'KULeuven_UCLL_UX',
        'KULeuven_TMOREK': 'KULeuven_TMOREK_UX',
        'KULeuven_LUCA': 'KULeuven_LUCA_UX',
        'KULeuven_VIVES_KHBO': 'KULeuven_VIVES_KHBO_UX',
        'KULeuven_ODISEE': 'KULeuven_ODISEE_UX',
        'KHLIM': 'UCLL_LIMBURG_UX',
        'KHL': 'UCLL_LEUVEN_UX'
      };

      Primo.view.then(function (view) {
        if (/^ECB/.test(view.code)) {
          _this.showBetaSwitch = false;
        }
        _this.oldVid = Object.keys(LinkToBetaViews).find(function (key) {
          return LinkToBetaViews[key] === view.code;
        }) || view.code;
      });
    }
  }]);

  return BetaSwitchController;
}();

var betaSwitchConfig = exports.betaSwitchConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: BetaSwitchController,
  template: betaSwitchHTML
};

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var homeIconHTML = '<div id="home-buttons-holder" ng-class="{\'fixed-to-top\': $ctrl.fixedToTop()}" \r\n  layout="row" layout-align="center center" class="layout-align-center-center layout-row"\r\n  ng-switch on="$ctrl.linktype">\r\n\r\n  <a ng-click="removeStickyFacets()" class="zero-margin flex-button multi-line-button button-over-dark md-button md-primoExplore-theme md-ink-ripple layout-align-center-center layout-column" \r\n    id="new-search-button" aria-label="Go to startpage"\r\n    href="{{ $ctrl.homePageLink }}" ng-switch-when="newSearchButton">\r\n      <span layout="row" layout-align="start center" class="layout-align-start-center layout-row">\r\n          <span translate="lbs.nui.default.nui.new_search">New Search</span>\r\n      </span>\r\n\r\n  </a>\r\n\r\n  <a ng-click="removeStickyFacets()" class="md-icon-button button-over-dark md-button md-primoExplore-theme" id="home-button"\r\n    aria-label="Go to startpage" href="{{ $ctrl.homePageLink }}" ng-switch-default>\r\n    <md-icon class="md-primoExplore-theme">\r\n      <svg id="prm_home" width="100%" height="100%" viewBox="0 0 24 24" y="0" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet"\r\n        focusable="false">\r\n        <path d="M10,20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />\r\n        <path d="M0 0h24v24H0z" fill="none" />\r\n      </svg>\r\n    </md-icon>\r\n  </a>\r\n</div>';

var HomeIconController = function HomeIconController($scope, $element, $compile, $http, $rootScope) {
  _classCallCheck(this, HomeIconController);

  var self = this;
  self.scope = $scope;
  self.rootScope = $rootScope;
  self.linktype = 'homeIcon';

  Primo.view.then(function (view) {
    var vid = view.code;
    if (vid == "ECB") {
      self.linktype = "newSearchButton";
    }
    var locale = view.interfaceLanguage; //window.Primo.explore.helper.userSessionManagerService().i18nService.getLanguage();

    var libraryLogo = window.appConfig.customization.libraryLogo;
    var localeLibraryLogo = 'custom/' + vid + '/img/library-logo-' + locale + '.png';

    if (libraryLogo !== localeLibraryLogo) {
      $http({
        method: 'GET',
        url: localeLibraryLogo
      }).then(function (response) {
        window.appConfig.customization.libraryLogo = localeLibraryLogo;
        $compile($element.parent().parent())($scope);
      }, function (response) {
        window.appConfig.customization.libraryLogo = libraryLogo;
      });
    }
    self.homePageLink = '/primo-explore/search?vid=' + vid + "&lang=" + locale;

    $scope.removeStickyFacets = function () {
      var facets = Primo.explore.components.get('prm-facet');
      if (facets) {
        var stickyFacets = facets[0].ctrl().facetService.getStickyFacets();
        for (var i = 0; i < stickyFacets.length; i++) {
          facets[0].ctrl().facetService.removeStickyFacet(stickyFacets[i]);
        }
      }
    };
  });
};

HomeIconController.$inject = ['$scope', '$element', '$compile', '$http', '$rootScope'];

var homeIconConfig = exports.homeIconConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: HomeIconController,
  template: homeIconHTML
};

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var feedbackHTML = '\r\n  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\r\n             class="zero-margin flex-button multi-line-button button-over-dark"\r\n             layout="column" layout-align="center center" (click)="$ctrl.showFeedbackForm($event)"\r\n             aria-label="mainmenu.label.feedback">\r\n\r\n      <span class="item-content" translate="mainmenu.label.feedback"></span>\r\n      <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\r\n        <span class="item-description popover animate-popover"\r\n              translate="nui.mainmenu.description.feedback"></span>\r\n      </md-tooltip>\r\n  </md-button>\r\n';
var feedbackDialogHTML = '<!-- translations in CODE TABLES -> View Labels -->\r\n<md-dialog id=\'lbsFeedbackForm\' aria-label=\'feedback\'>\r\n    <md-toolbar>\r\n        <div class="md-toolbar-tools">\r\n            <h2><span translate=\'mainmenu.label.feedback\'></span></h2>\r\n            <span flex></span>\r\n            <md-button class="md-icon-button" ng-click="cancelFeedback()">\r\n                <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\r\n            </md-button>\r\n        </div>\r\n    </md-toolbar>\r\n    <md-dialog-content>\r\n      <form name=\'feedbackForm\'>\r\n        <div class="md-dialog-content">\r\n            <input type="hidden" name=\'subject\' ng-model=\'feedback.subject\'>\r\n            <md-input-container class="md-block">\r\n                <label><span translate="lbs.nui.details.email"></span></label>\r\n                <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'feedback.replyTo\' ng-pattern="/^.+@.+\\..+$/">\r\n                <div ng-if=\'feedbackForm.replyTo.$error.required\' role="alert">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\r\n                </div>\r\n                <div ng-if=\'feedbackForm.replyTo.$error.email\' role="error">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\r\n                </div>\r\n            </md-input-container>\r\n            <md-input-container>\r\n                <label><span translate="lbs.nui.details.message.description.label"></span></label>\r\n                <textarea name="message" placeholder="{{ \'lbs.nui.details.message.description\' | translate }}" md-maxlength="5000" required md-no-asterisk rows="5" cols="80" ng-model="feedback.message"></textarea>\r\n                <div ng-if=\'feedbackForm.message.$error.required\' role="error">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.message.mandatory"></span></div>\r\n                </div>\r\n            </md-input-container>\r\n        </div>\r\n      </form>\r\n    </md-dialog-content>\r\n    <md-dialog-actions layout="row">\r\n        <md-button class="md-raised" ng-click="cancelFeedback()"><span translate="lbs.nui.survey.cancel"></span></md-button>\r\n        <md-button class="md-raised md-primary " ng-click=\'sendFeedback()\'><span translate="lbs.nui.survey.submit"></span></md-button>\r\n    </md-dialog-actions>\r\n</md-dialog>\r\n';

var FeedbackController = function () {
  function FeedbackController($element, $compile, $scope, FeedbackService) {
    _classCallCheck(this, FeedbackController);

    $element.parent().parent().find('div').append($compile(feedbackHTML)($scope));
    this.feedbackService = FeedbackService;
  }

  _createClass(FeedbackController, [{
    key: 'showFeedbackForm',
    value: function showFeedbackForm($event) {
      this.feedbackService.show($event, feedbackDialogHTML);
    }
  }]);

  return FeedbackController;
}();

FeedbackController.$inject = ['$element', '$compile', '$scope', 'FeedbackService'];

var feedbackConfig = exports.feedbackConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: FeedbackController,
  template: ''
};

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var promoteLoginHTML = "<!--\r\n<md-card class=\"default-card _md md-primoExplore-theme flex-xs-100 flex-sm-100\" flex-sm=\"100\" flex-xs=\"100\" ng-show='$ctrl.showAutomaticLogin'>\r\n  <md-card-content layout=\"column\" layout-align=\"space-around center\" class=\"layout-align-space-around-center layout-column\">\r\n    <prm-primo-login label-type=\"text\" layout=\"column\" class=\"layout-column\">\r\n    -->\r\n      <!--\r\n      <div>\r\n        <span translate=\"lbs.nui.mypref.automatic_login.title\">Always Sign In</span>\r\n      </div>\r\n    -->\r\n      <md-checkbox tabindex=\"-1\" disabled=\"disabled\" \r\n      class=\"has-small-text zero-margin ng-pristine ng-untouched ng-valid md-primoExplore-theme ng-not-empty md-checked\"\r\n       role=\"checkbox\" aria-checked=\"true\" aria-disabled=\"true\" aria-invalid=\"false\" \r\n       type=\"checkbox\" ng-model=\"$ctrl.alwaysSigninCheckBox\" ng-change=\"alwaysSigninChecked()\"\r\n       ng-disabled=\"$ctrl.formMode == 'View'\">\r\n       <div class=\"layout-column\" layout=\"column\">\r\n          <span class=\"item-content\" translate=\"lbs.nui.mypref.automatic_login.alwaysSigninOption\"></span>\r\n       </div>\r\n      </md-checkbox>\r\n<!--\r\n    </prm-primo-login>\r\n    <md-divider class=\"card-divider layout-margin md-primoExplore-theme\" layout-margin=\"\"></md-divider>\r\n  </md-card-content>\r\n</md-card>\r\n-->\r\n\r\n";

var PromoteLoginController = function () {
  function PromoteLoginController($scope) {
    _classCallCheck(this, PromoteLoginController);

    var self = this;
    this.showAutomaticLogin = false;
    /* Remove the localStorage parameter primoPromoteLogin if the url contains clearLogin */
    var url = window.location.href;
    var urlParam = "clearLogin";
    urlParam = urlParam.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + urlParam + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (results) {
      if (decodeURIComponent(results[2].replace(/\+/g, " "))) {
        localStorage.removeItem('primoPromoteLogin');
      }
    }

    self.alwaysSigninCheckBox = false;
    self.alwaysSignin = localStorage.getItem("primoPromoteLogin");
    if (self.alwaysSignin) {
      self.alwaysSigninCheckBox = true;
    }

    $scope.alwaysSigninChecked = function () {
      if (self.alwaysSigninCheckBox) {
        localStorage.setItem('primoPromoteLogin', 'alwaysSignin');
      } else {
        localStorage.removeItem('primoPromoteLogin');
      }
    };
  }

  _createClass(PromoteLoginController, [{
    key: "$onInit",
    value: function $onInit() {
      var _this = this;

      Primo.view.then(function (view) {
        if (/^KULeuven/.test(view.code)) {
          Primo.user.then(function (user) {
            _this.showAutomaticLogin = true;
          });
        }
      });
      this.showAutomaticLogin = true;
    }
  }]);

  return PromoteLoginController;
}();

var promoteLoginConfig = exports.promoteLoginConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: PromoteLoginController,
  template: promoteLoginHTML
};

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* component to do all your experimental stuff */
/* [en|dis]able in components */

var RecommendationItemController = function RecommendationItemController($scope, $element) {
  _classCallCheck(this, RecommendationItemController);

  var self = this;
  this.$scope = $scope;
  this.$element = $element;
  /*
      console.log(self)
      console.log( self.parentCtrl.parentCtrl.primolyticsService.configurationUtil.vid );
      console.log( self.parentCtrl.parentCtrl.primolyticsService.userSessionManagerService.vid );
      console.log( self.parentCtrl.parentCtrl.primolyticsService.userSessionManagerService.inst );
      console.log( self.parentCtrl.parentCtrl.primolyticsService.userSessionManagerService.userInstitution );
  */
  this.parentCtrl.parentCtrl.orgGetLink = this.parentCtrl.parentCtrl.getLink;
  this.parentCtrl.parentCtrl.getLink = function () {
    var getItLink = self.parentCtrl.parentCtrl.orgGetLink();
    return getItLink.replace(/\/openurl\/[^/]*\/[^?]*/, "/openurl\/" + self.parentCtrl.parentCtrl.primolyticsService.userSessionManagerService.userInstitution + "\/" + self.parentCtrl.parentCtrl.primolyticsService.configurationUtil.vid);
  };
};

RecommendationItemController.$inject = ['$scope', '$element'];

var recommendationItemConfig = exports.recommendationItemConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: RecommendationItemController,
  template: ''
};

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var illRequestFormHTML = '<style>\r\n  /*\r\n  .md-button[id=illRequest] {\r\n    color: white;\r\n    background-color: tomato;\r\n  }\r\n\r\n  .md-button[id=illRequest]:hover {\r\n    background-color: tomato;\r\n    filter: brightness(80%);\r\n    color: white;\r\n  }\r\n  */\r\n</style>\r\n\r\n<a id=\'illRequest\' target=\'_blank\'  ng-click="$ctrl.toIllRequestUrl()" ng-show=\'$ctrl.showLinkToIllRequest\'><span translate="lbs.nui.default.nui.order_in_another_library"></span></a>\r\n\r\n\r\n';

var illRequestFormController = function () {
    function illRequestFormController($scope, $translate, $window, $rootScope) {
        _classCallCheck(this, illRequestFormController);

        var self = this;
        this.scope = $scope;
        this.rootScope = $rootScope;
        this.translate = $translate;
        this.window = $window;
        this.illRequestUrl = '';
        this.showLinkToIllRequest = false;
        this.institutionCode = "";
    }

    _createClass(illRequestFormController, [{
        key: '$onInit',
        value: function $onInit() {
            if (this.parentCtrl.parentCtrl.requestsService.accountService.linkedUserSelectorService.selectedInstitution) {
                this.institutionCode = this.parentCtrl.parentCtrl.requestsService.accountService.linkedUserSelectorService.selectedInstitution.institutionCode;
            } else {
                var alma_codes = this.rootScope.$$childHead.$ctrl.userSessionManagerService.mappingTablesCache.MAPPING_TABLES_CACHE["Alma Institution Codes"];
                var user_inst = this.rootScope.$$childHead.$ctrl.userSessionManagerService.userInstitution;
                var alma_code = alma_codes.filter(function (obj) {
                    return obj.target == user_inst;
                });
                // console.log (alma_code[0]);
                this.institutionCode = alma_code[0].source1;
            }
            //console.log('institutionCode:' + institutionCode)
            if (this.institutionCode) {
                this.showLinkToIllRequest = true;
            }
        }
    }, {
        key: 'toIllRequestUrl',
        value: function toIllRequestUrl() {
            if (this.institutionCode) {
                this.showLinkToIllRequest = true;
                this.illRequestUrl = 'https://leuven-primo.hosted.exlibrisgroup.com/pds?func=sso&url=http://eu.alma.exlibrisgroup.com/view/uresolver/' + this.institutionCode + '/openurl?svc_dat=getit&svc.profile=getit&directResourceSharingRequest=true&newUI=true';
                this.window.open(this.illRequestUrl, '_freeIll');
            }
        }
    }]);

    return illRequestFormController;
}();

;

illRequestFormController.$inject = ['$scope', '$translate', '$window', '$rootScope'];

var illRequestFormConfig = exports.illRequestFormConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: illRequestFormController,
    template: illRequestFormHTML
};

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pnxXmlHTML = '<style>\r\n  .pnx-xml {\r\n    font-size:0.5em;\r\n    display:none;\r\n    justify-content:space-around;    \r\n  }\r\n</style>\r\n\r\n<div class=\'pnx-xml\'>\r\n  <a target="_blank" ng-href="/primo_library/libweb/jqp/record/{{ $ctrl.recordid }}.xml?needSession=0">XML</a> |\r\n  <a target="_blank" ng-href="/primo_library/libweb/jqp/record/{{ $ctrl.recordid }}.pnx?needSession=0">PNX</a>\r\n</div>\r\n';

var PnxXmlController = function () {
  function PnxXmlController() {
    _classCallCheck(this, PnxXmlController);

    try {
      this.recordid = this.parentCtrl.parentCtrl.item.pnx.control.recordid[0];
    } catch (e) {
      this.recordid = null;
    }
  }

  _createClass(PnxXmlController, [{
    key: '$onInit',
    value: function $onInit() {
      var self = this;
      if (hotkeys) {
        hotkeys("ctrl+enter", function (e) {
          self.visible = !self.visible;

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = Array.from(document.querySelectorAll('.pnx-xml'))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var element = _step.value;

              element.style.display = self.visible ? 'flex' : 'none';
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });
      }
    }
  }]);

  return PnxXmlController;
}();

var pnxXmlConfig = exports.pnxXmlConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: PnxXmlController,
  template: pnxXmlHTML
};

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reportAProblemHTML = '  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\r\n             class="zero-margin button-link md-button md-primoExplore-theme md-ink-ripple"\r\n             layout="column" layout-align="center center" (click)="$ctrl.showReportAProblemForm($event)"\r\n             aria-label="lbs.nui.details.report_a_problem">\r\n\r\n      <span class="item-content" translate="lbs.nui.details.report_a_problem"></span>\r\n      <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\r\n        <span class="item-description popover animate-popover"\r\n              translate="lbs.nui.details.description.report_a_problem"></span>\r\n      </md-tooltip>\r\n  </md-button>\r\n';
var reportAProblemDialogHTML = '<!-- translations in CODE TABLES -> View Labels -->\r\n<md-dialog id=\'lbsReportAProblemForm\' aria-label=\'Report a problem\'>\r\n    <md-toolbar>\r\n        <div class="md-toolbar-tools">\r\n            <h2><span translate="lbs.nui.details.report_a_problem"></span></h2>\r\n            <span flex></span>\r\n            <md-button class="md-icon-button" ng-click="cancelReport()">\r\n                <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\r\n            </md-button>\r\n        </div>\r\n    </md-toolbar>\r\n    <md-dialog-content>\r\n      <form name=\'reportAProblemForm\'>\r\n        <div class="md-dialog-content">\r\n            <input type="hidden" name=\'subject\' ng-model=\'report.subject\'>\r\n            <md-input-container class="md-block">\r\n                <label><span translate="lbs.nui.details.email"></span></label>\r\n                <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'report.replyTo\' ng-pattern="/^.+@.+\\..+$/">\r\n                <div ng-if=\'reportAProblemForm.replyTo.$error.required\' role="alert">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\r\n                </div>\r\n                <div ng-if=\'reportAProblemForm.replyTo.$error.email\' role="error">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\r\n                </div>\r\n            </md-input-container>\r\n            <md-input-container>\r\n                <label><span translate="lbs.nui.details.message.description.label"></span></label>\r\n                <textarea name="message" placeholder="{{ \'lbs.nui.details.message.description\' | translate }}" md-maxlength="5000" required md-no-asterisk rows="5" cols="80" ng-model="report.message"></textarea>\r\n                <div ng-if=\'reportAProblemForm.message.$error.required\' role="error">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.message.mandatory"></span></div>\r\n                </div>\r\n            </md-input-container>\r\n        </div>\r\n      </form>\r\n    </md-dialog-content>\r\n    <md-dialog-actions layout="row">\r\n        <md-button class="md-raised" ng-click="cancelReport()">Cancel</md-button>\r\n        <md-button class="md-raised md-primary " ng-click=\'sendReport()\'>Submit</md-button>\r\n    </md-dialog-actions>\r\n</md-dialog>\r\n';

var ReportAProblemController = function () {
  function ReportAProblemController($element, $compile, $scope, $mdDialog, $mdToast, $http) {
    _classCallCheck(this, ReportAProblemController);

    var self = this;
    if (/^nui\.getit\./.test(this.parentCtrl.parentCtrl.title)) {
      $element.parent().parent().find('h4').after($compile(reportAProblemHTML)($scope));

      var recordData = self.currentRecord;

      Primo.user.then(function (user) {
        self.user = user;
        Primo.view.then(function (view) {
          self.view = view;

          self.showReportAProblemForm = function ($event) {
            $mdDialog.show({
              parent: angular.element(document.body),
              clickOutsideToClose: true,
              fullscreen: false,
              targetEvent: $event,
              template: reportAProblemDialogHTML,
              controller: function controller($scope, $mdDialog) {
                $scope.report = {
                  replyTo: self.user.email,
                  message: '',
                  subject: 'report a problem'
                };
                $scope.cancelReport = function () {
                  $mdDialog.cancel();
                };
                $scope.sendReport = function (answer) {
                  var data = {
                    recordId: recordData.pnx.control.recordid[0],
                    index: 0,
                    page: 0,
                    scope: '',
                    query: '',
                    searchType: '',
                    sessionId: user.id,
                    tab: '',
                    title: recordData.pnx.display.title[0],
                    type: 'resource_problem',
                    subject: $scope.report.subject,
                    view: self.view.code,
                    inst: self.view.institution.code,
                    loggedIn: self.user.isLoggedIn(),
                    onCampus: self.user.isOnCampus(),
                    user: self.user.name,
                    fe: '',
                    ip: self.view.ip.address,
                    message: $scope.report.message,
                    replyTo: $scope.report.replyTo || self.user.email,
                    userAgent: navigator.userAgent
                  };
                  if ($scope.report.replyTo.length > 0 && $scope.report.message.length > 0) {
                    $mdDialog.hide();

                    $http({
                      method: 'POST',
                      url: "https://services.libis.be/report_a_problem",
                      headers: {
                        'Content-Type': 'application/json',
                        'X-From-ExL-API-Gateway': undefined
                      },
                      cache: false,
                      data: data
                    }).then(function (response) {
                      var message = self.translate.instant('lbs.nui.feedback.success') || 'Thank you for your feedback!';
                      MessageService.show(message, { scope: $scope, hideDelay: 5000 });
                    }, function (response) {
                      var message = self.translate.instant('lbs.nui.feedback.fail') || 'Unable to submit feedback.';
                      MessageService.show(message, { scope: $scope, hideDelay: 5000 });
                    });
                  }
                };
              }
            });
          }; //showReportAProblemForm
        });
      });
    }
  }

  _createClass(ReportAProblemController, [{
    key: 'currentRecord',
    get: function get() {
      var selector = 'prm-full-view-service-container'; //'prm-full-view-service-container'
      var element = angular.element(document.querySelector(selector));
      if (element) {
        var elementCtrl = element.controller(selector);
        console.log(elementCtrl);
        return elementCtrl.item;
      }
      return null;
    }
  }]);

  return ReportAProblemController;
}();

ReportAProblemController.$inject = ['$element', '$compile', '$scope', '$mdDialog', '$mdToast', '$http'];

var reportAProblemConfig = exports.reportAProblemConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: ReportAProblemController,
  template: ''
};

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnnouncementsController = function AnnouncementsController($scope, MessageService) {
  _classCallCheck(this, AnnouncementsController);

  MessageService.show('', $scope);
};

AnnouncementsController.$inject = ['$scope', 'MessageService'];

var announcementsConfig = exports.announcementsConfig = {
  bindings: { parentCtrl: '<' },
  controller: AnnouncementsController,
  template: ''
};

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feedbackAnnouncementConfig = undefined;

var _feedbackAnnouncementDialog = require('./feedbackAnnouncementDialog');

var _feedbackAnnouncementDialog2 = _interopRequireDefault(_feedbackAnnouncementDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var feedbackAnnouncementHTML = '<span layout=\'center\'>\r\n  <span>{{message}}</span>  \r\n</span>\r\n';
var feedbackAnnouncementDialogHTML = '<md-dialog id=\'lbsFeedbackForm\' aria-label=\'feedback\'>\r\n  <md-toolbar>\r\n    <div class="md-toolbar-tools">\r\n      <h2>\r\n        <span translate="lbs.nui.survey.title"></span>\r\n      </h2>\r\n      <span flex></span>\r\n      <md-button class="md-icon-button" ng-click="cancelFeedback()">\r\n        <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\r\n      </md-button>\r\n    </div>\r\n  </md-toolbar>\r\n  <md-dialog-content>\r\n    <form name=\'feedbackAnnouncementForm\' style="padding:20px;background-color:white;">\r\n      <input type="hidden" name=\'subject\' ng-model=\'feedback.subject\'>\r\n      <p><span translate="lbs.nui.survey.email"></span></p>\r\n      <md-input-container class="md-block">\r\n        <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'feedback.replyTo\' ng-pattern="/^.+@.+\\..+$/">\r\n        <div ng-if=\'feedbackAnnouncementForm.replyTo.$error.required\' role="alert">\r\n          <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\r\n        </div>\r\n        <div ng-if=\'feedbackAnnouncementForm.replyTo.$error.email\' role="error">\r\n          <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\r\n        </div>\r\n      </md-input-container>\r\n\r\n      <br /><br />\r\n\r\n      <p><span translate="lbs.nui.survey.description"></span></p>\r\n      <div>\r\n        <ol>\r\n          <li>\r\n            <p><span translate="lbs.nui.survey.q1"></span></p>\r\n            <md-radio-group ng-model="feedback.answers[0]" class="md-block">\r\n              <md-radio-button value="1"><span translate="lbs.nui.survey.q1.a1"></span></md-radio-button>\r\n              <md-radio-button value="2"><span translate="lbs.nui.survey.q1.a2"></span></md-radio-button>\r\n              <md-radio-button value="3"><span translate="lbs.nui.survey.q1.a3"></span></md-radio-button>\r\n              <md-radio-button value="4"><span translate="lbs.nui.survey.q1.a4"></span></md-radio-button>\r\n            </md-radio-group>\r\n          </li>\r\n          <li>\r\n            <p><span translate="lbs.nui.survey.q2"></span></p>\r\n            <md-radio-group ng-model=\'feedback.answers[1]\' class="md-block">\r\n              <md-radio-button value="1"><span translate="lbs.nui.survey.q2.a1"></span></md-radio-button>\r\n              <md-radio-button value="2"><span translate="lbs.nui.survey.q2.a2"></span></md-radio-button>\r\n            </md-radio-group>\r\n          </li>\r\n          <li>\r\n            <p><span translate="lbs.nui.survey.q3"></span></p>\r\n            <md-input-container class="md-block" class="md-block">\r\n              <textarea ng-model="feedback.answers[2]" md-maxlength="5000" rows="5" style="border: 1px dashed gray;padding: 5px;"></textarea>\r\n            </md-input-container>\r\n          </li>\r\n        </ol>\r\n      </div>\r\n    </form>\r\n\r\n  </md-dialog-content>\r\n  <md-dialog-actions layout="row">\r\n    <md-button class="md-raised" ng-click="cancelFeedback()"><span translate="lbs.nui.survey.cancel"></span></md-button>\r\n    <md-button class="md-raised md-primary" ng-click=\'sendFeedback()\'><span translate="lbs.nui.survey.submit"></span></md-button>\r\n  </md-dialog-actions>\r\n</md-dialog>\r\n';

var FeedbackAnnouncementController = function FeedbackAnnouncementController($scope, $translate, $timeout, FeedbackService, MessageService, actionIcons) {
  _classCallCheck(this, FeedbackAnnouncementController);

  //$timeout(() => {
  //let message = $translate.instant('lbs.nui.survey.announcement');
  var showFeedback = localStorage.getItem('primoFeedback');
  if (showFeedback == null) {
    $translate('lbs.nui.survey.announcement').then(function (message) {
      MessageService.show(feedbackAnnouncementHTML.replace('{{message}}', message), {
        scope: $scope,
        hideDelay: 0,
        actionLabel: $translate.instant('mainmenu.label.feedback') || 'Feedback',
        action: function action($event) {
          FeedbackService.show($event, feedbackAnnouncementDialogHTML, _feedbackAnnouncementDialog2.default);
        }
      });
    });
  }
  //}, 2000);
};

FeedbackAnnouncementController.$inject = ['$scope', '$translate', '$timeout', 'FeedbackService', 'MessageService', 'actionIcons'];

var feedbackAnnouncementConfig = exports.feedbackAnnouncementConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: FeedbackAnnouncementController,
  template: ''
};

},{"./feedbackAnnouncementDialog":21}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var feedbackAnnouncementDialogController = function feedbackAnnouncementDialogController($scope, $mdDialog, $mdToast, $translate, $http, feedbackServiceURL, MessageService) {
  var _this = this;

  _classCallCheck(this, feedbackAnnouncementDialogController);

  this.scope = $scope;
  this.mdDialog = $mdDialog;
  this.mdToast = $mdToast;
  this.http = $http;
  this.translate = $translate;
  this.feedbackServiceURL = feedbackServiceURL;

  var self = this;

  $scope.cancelFeedback = function () {
    _this.mdDialog.cancel();
  };

  $scope.sendFeedback = function (answer) {
    var data = {
      subject: $scope.feedback.subject,
      view: self.view.code,
      inst: self.view.institution.code,
      loggedIn: self.user.isLoggedIn(),
      onCampus: self.user.isOnCampus(),
      user: self.user.name,
      ip: self.view.ip.address,
      type: 'survey',
      feedback: $scope.feedback.answers,
      email: $scope.feedback.replyTo || self.user.email,
      userId: self.user.id || '',
      userAgent: navigator.userAgent
    };

    if ($scope.feedback.replyTo.length > 0) {
      self.mdDialog.hide();

      self.http({
        method: 'POST',
        url: _this.feedbackServiceURL,
        headers: {
          'Content-Type': 'application/json',
          'X-From-ExL-API-Gateway': undefined
        },
        cache: false,
        data: data
      }).then(function (response) {
        localStorage.setItem('primoFeedback', new Date());
        var message = self.translate.instant('lbs.nui.feedback.success') || 'Thank you for your feedback!';
        MessageService.show(message, { scope: $scope, hideDelay: 5000 });
        //self.mdToast.showSimple('Thank you for your feedback!');
      }, function (response) {
        var message = self.translate.instant('lbs.nui.feedback.fail') || 'Unable to submit feedback.';
        MessageService.show(message, { scope: $scope, hideDelay: 5000 });
        //self.mdToast.showSimple('Unable to submit feedback.');
      });
    }
  };

  Primo.user.then(function (user) {
    self.user = user;
    Primo.view.then(function (view) {
      self.view = view;
      $scope.feedback = {
        replyTo: self.user.email,
        answers: [],
        subject: 'feedback'
      };
    });
  });
};

exports.default = feedbackAnnouncementDialogController;


feedbackAnnouncementDialogController.$inject = ['$scope', '$mdDialog', '$mdToast', '$translate', '$http', 'feedbackServiceURL', 'MessageService'];

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FinesMessageController = function FinesMessageController(MessageService, $translate, $rootScope) {
  _classCallCheck(this, FinesMessageController);

  var self = this;
  Primo.user.then(function (user) {
    self.user = user;
    if (user.fines.length > 0) {
      //TODO:extract html to its own file. find out how to resolve {{}}

      var message = $translate.instant('lbs.nui.youHaveFines');
      message = message.replace(/\$0/, user.fines.length);

      var pay = $translate.instant('lbs.nui.youHaveFines.pay');

      MessageService.show('\n            <span style="align-self:center;">' + message + '</span>\n            <a style="background-color: tomato;color: white;"\n               class="md-button md-raised md-secundary" target=\'_blank\'\n               href=\'https://services.libis.be/pay_my_fines\'>' + pay + '</a>\n          ');
    }
  });
};

FinesMessageController.$inject = ['MessageService', '$translate', '$rootScope'];

var finesMessageConfig = exports.finesMessageConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: FinesMessageController,
  template: ''
};

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var feedService = exports.feedService = ['$http', function ($http) {
  var feedAntiCache = "?&t=" + new Date().getTime() + randomNum;
  var randomNum = Math.floor(Math.random() * 10000 + 1);
  var feeddaysold = 60;

  var dm = new Date();
  dm.setHours(24, 0, 0, 0);

  var api_endpoint = 'https://services.libis.be/feed_aggregator?';

  function readFeedConfig(url) {
    return $http({
      url: url,
      headers: {
        "X-From-ExL-API-Gateway": undefined
      }
    });
  }

  function readFeed(url) {
    return $http({
      url: api_endpoint + url,
      headers: {
        "X-From-ExL-API-Gateway": undefined
      }
    });
  }

  function parseFeed(conf) {
    return readFeed(conf.feedUrl).then(function (res) {
      //   console.log(conf.feedUrl);
      //   console.log(conf.feedFilter);
      var patt = /^entry\.|^item\./i;
      var filteredResults = res.data.items.filter(function (item, index) {
        var retval = false;
        if (item.pubDate === "") {
          item.pubDate = dm;
          res.data.items[index].pubDate = dm;
        }
        /* no filter configured */
        if (conf.feedFilter.length === 0) {
          retval = true;
        }
        conf.feedFilter.forEach(function (f) {
          if (patt.test(f.param)) {
            var ff = f.param.replace(patt, "");
            if (Array.isArray(item[ff])) {
              if (item[ff].indexOf(f.value) != -1) {
                retval = true;
              }
            } else {
              if (item[ff] == f.value) {
                retval = true;
              }
            }
          }
        });
        /* filter old items */
        if (feeddaysold < Math.ceil(dm.getTime() - new Date(item.pubDate).getTime()) / (1000 * 60 * 60 * 24)) {
          retval = false;
        }

        return retval;
      });
      return filteredResults;
    });
  }

  function sortFeed(feeds) {
    //return feeds.sort(compareDates);
    return feeds.sort(function (a, b) {
      var dateA = new Date(a.pubDate);
      var dateB = new Date(b.pubDate);
      if (dateA.getTime() === dm.getTime()) {
        dateA = new Date(0);
      }
      if (dateB.getTime() === dm.getTime()) {
        dateB = new Date(0);
      }
      return dateB - dateA;
    });
  }

  return {
    readFeedConfig: readFeedConfig,
    readFeed: readFeed,
    parseFeed: parseFeed,
    sortFeed: sortFeed
  };
}];

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dialog = require('../components/general/dialog');

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var feedbackServiceHTML = '<!-- translations in CODE TABLES -> View Labels -->\r\n<md-dialog id=\'lbsFeedbackForm\' aria-label=\'feedback\'>\r\n    <md-toolbar>\r\n        <div class="md-toolbar-tools">\r\n            <h2><span translate=\'mainmenu.label.feedback\'></span></h2>\r\n            <span flex></span>\r\n            <md-button class="md-icon-button" ng-click="cancelFeedback()">\r\n                <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\r\n            </md-button>\r\n        </div>\r\n    </md-toolbar>\r\n    <md-dialog-content>\r\n      <form name=\'feedbackForm\'>\r\n        <div class="md-dialog-content">\r\n            <input type="hidden" name=\'subject\' ng-model=\'feedback.subject\'>\r\n            <md-input-container class="md-block">\r\n                <label><span translate="lbs.nui.details.email"></span></label>\r\n                <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'feedback.replyTo\' ng-pattern="/^.+@.+\\..+$/">\r\n                <div ng-if=\'feedbackForm.replyTo.$error.required\' role="alert">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\r\n                </div>\r\n                <div ng-if=\'feedbackForm.replyTo.$error.email\' role="error">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\r\n                </div>\r\n            </md-input-container>\r\n            <md-input-container>\r\n                <label><span translate="lbs.nui.details.message.description.label"></span></label>\r\n                <textarea name="message" placeholder="{{ \'lbs.nui.details.message.description\' | translate }}" md-maxlength="5000" required md-no-asterisk rows="5" cols="80" ng-model="feedback.message"></textarea>\r\n                <div ng-if=\'feedbackForm.message.$error.required\' role="error">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.message.mandatory"></span></div>\r\n                </div>\r\n            </md-input-container>\r\n        </div>\r\n      </form>\r\n    </md-dialog-content>\r\n    <md-dialog-actions layout="row">\r\n        <md-button class="md-raised" ng-click="cancelFeedback()">Cancel</md-button>\r\n        <md-button class="md-raised md-primary " ng-click=\'sendFeedback()\'>Submit</md-button>\r\n    </md-dialog-actions>\r\n</md-dialog>\r\n';

var FeedbackService = function () {
  function FeedbackService($mdDialog) {
    _classCallCheck(this, FeedbackService);

    this.mdDialog = $mdDialog;
  }

  _createClass(FeedbackService, [{
    key: 'show',
    value: function show() {
      var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var feedbackDialogHTML = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var feedbackDialogController = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var self = this;
      if (feedbackDialogHTML == null) {
        console.log('default dialog instantiated');
        feedbackDialogHTML = feedbackServiceHTML;
      }

      if (feedbackDialogController == null) {
        console.log('default dialog controller instantiated');
        feedbackDialogController = _dialog2.default;
      }

      this.mdDialog.show({
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        fullscreen: false,
        targetEvent: $event,
        template: feedbackDialogHTML,
        controller: feedbackDialogController
      });
    }
  }]);

  return FeedbackService;
}();

exports.default = FeedbackService;


FeedbackService.$inject = ['$mdDialog'];

},{"../components/general/dialog":3}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var messageServiceHTML = '<div layout="row" class="bar alert-bar lbs-message-service" layout-align="center center">\r\n  <span class="bar-text" ng-bind-html="ctrl.message" style="display:flex"></span>\r\n  <md-button ng-show="ctrl.onAction" (click)="ctrl.onAction()" class="dismiss-alert-button zero-margin" ng-class="md-icon-button">\r\n    <span hide-xs>{{ctrl.actionLabel}}</span>\r\n  </md-button>\r\n  <md-divider></md-divider>\r\n  <md-button aria-label="{{::(\'nui.message.dismiss\' | translate)}}" (click)="ctrl.onClose()" class="dismiss-alert-button zero-margin" ng-class="md-icon-button">\r\n    <span translate="nui.message.dismiss" hide-xs></span>\r\n  </md-button>\r\n</div>\r\n';

var MessageService = function () {
  function MessageService($rootScope, $compile, $mdToast, $sce, $translate, $timeout) {
    _classCallCheck(this, MessageService);

    this.mdToast = $mdToast;
    this.sce = $sce;
    this.translate = $translate;
    this.timeout = $timeout;
    this.compile = $compile;
    this.rootScope = $rootScope;
  }

  _createClass(MessageService, [{
    key: 'show',
    value: function show() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var self = this;
      var scope = options.scope || null;
      var hideDelay = options.hideDelay || 0;
      var action = options.action || null;
      var actionLabel = options.actionLabel || 'unknown';

      this.timeout(function () {
        if (message.length == 0) {
          // code table entries can not have empty descriptions.
          // message <= 1 will not be displayed!!!!
          var messageKey = 'lbs.generalMessage';
          message = self.translate.instant(messageKey);
          message = message == messageKey || message <= 1 ? '' : message;
        }

        if (message.length > 0) {
          var toastConfig = {
            parent: document.body,
            controllerAs: 'ctrl',
            controller: function controller() {
              var _this = this;

              this.actionLabel = actionLabel;

              this.onClose = function () {
                self.mdToast.hide();
              };

              if (action) {
                this.onAction = function () {
                  var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  action.call(_this);
                  self.mdToast.hide();
                };
              }

              if (scope) {
                //this.message = self.sce.trustAsHtml(self.compile(`<span>${message}</span>`)(self.rootScope).html());
                this.message = self.sce.trustAsHtml(self.compile('<span>' + message + '</span>')(scope).html());
              } else {
                this.message = self.sce.trustAsHtml(message);
              }
            },
            template: messageServiceHTML,
            position: 'top center',
            hideDelay: hideDelay
          };

          self.mdToast.show(toastConfig);
        } else {
          console.log('No message to display');
        }
      }, 2000);
    }
  }]);

  return MessageService;
}();

exports.default = MessageService;


MessageService.$inject = ['$rootScope', '$compile', '$mdToast', '$sce', '$translate', '$timeout'];

},{}],26:[function(require,module,exports){
'use strict';

var _primo = require('./primo-explore-dom/js/primo');

var _primo2 = _interopRequireDefault(_primo);

var _helper = require('./primo-explore-dom/js/primo/explore/helper');

var _helper2 = _interopRequireDefault(_helper);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _feedService = require('./factories/feedService');

var _messageService = require('./factories/messageService');

var _messageService2 = _interopRequireDefault(_messageService);

var _feedbackService = require('./factories/feedbackService');

var _feedbackService2 = _interopRequireDefault(_feedbackService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//make Primo public
/*
  Central Package Loader

  Do NOT edit this file.
  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
window.Primo = _primo2.default;
//load PrimoExplorer UI if angular.reloadWithDebugInfo() is ran
window.setTimeout(function () {
  if (_primo2.default.isDebugEnabled()) {
    var uiURL = 'https://cdn.rawgit.com/mehmetc/primo-explore-dom-ui/fc0868df/js/custom.js';
    //let uiURL = 'http://127.0.0.1:8000/js/custom.js';

    _helper2.default.loadScript(uiURL).then(function () {
      console.log('Injecting UI');
      _primo2.default.explore.ui.toggle();
    });
  }
}, 2000);

//Create the centralCustom module;
var app = angular.module('centralCustom', ['ngMaterial']).constant('feedbackServiceURL', 'https://services.libis.be/feedback').config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
}).run(function ($templateCache) {
  //$templateCache.put('components/search/fullView/full-view.html', fullViewHTML);
  _helper2.default.loadScript('https://unpkg.com/hotkeys-js@2.0.8/dist/hotkeys.min.js').then(function () {
    console.log('hotkeys.js loaded');
  });
}).factory('FeedService', _feedService.feedService).service('MessageService', _messageService2.default).service('FeedbackService', _feedbackService2.default);

//Contains the after component selectors that will be injected
var afterComponents = {};

//Create all components and determine in which after component these need to be
//injected
console.log('Loading centralCustom components');
_components2.default.all.forEach(function (component) {
  console.log(component.name);
  if (component.enabled) {
    if (component.appendTo) {
      var elements = afterComponents[component.appendTo] || [];
      //elements.push(component.name);
      elements.push({ 'name': component.name, 'enableInView': component.enableInView });
      afterComponents[component.appendTo] = elements;
    }
    app.constant('afterComponents', afterComponents);
    app.component(component.name.toCamelCase(), component.config);
  }
});

//Inject place holders into the after components
Object.keys(afterComponents).forEach(function (component, i) {
  var subComponents = afterComponents[component];

  app.component(component.toCamelCase(), {
    bindings: {
      parentCtrl: '<'
    },
    template: subComponents.map(function (m) {
      return '<' + m.name + ' parent-ctrl="$ctrl"></' + m.name + '>';
    }).join("")
  });
});

},{"./components":1,"./factories/feedService":23,"./factories/feedbackService":24,"./factories/messageService":25,"./primo-explore-dom/js/primo":27,"./primo-explore-dom/js/primo/explore/helper":30}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _explore = require('./primo/explore');

var _explore2 = _interopRequireDefault(_explore);

var _records = require('./primo/records');

var _records2 = _interopRequireDefault(_records);

var _facets = require('./primo/facets');

var _facets2 = _interopRequireDefault(_facets);

var _view = require('./primo/view');

var _view2 = _interopRequireDefault(_view);

var _user = require('./primo/user');

var _user2 = _interopRequireDefault(_user);

var _helper = require('./primo/explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Primo main entry class
 */
var Primo = function () {
  function Primo() {
    _classCallCheck(this, Primo);
  }

  _createClass(Primo, null, [{
    key: 'isDebugEnabled',


    /**
     * Check if angular.reloadWithDebugInfo() has ran
     * @return {boolean}
     */
    value: function isDebugEnabled() {
      return _helper2.default.isDebugEnabled();
    }

    /**
     * Did the script ran on a Primo site
     * @return {boolean}
     */

  }, {
    key: 'isPrimoAvailable',
    value: function isPrimoAvailable() {
      return _helper2.default.isPrimoAvailable();
    }

    /**
     * This is a proxy class
     * @return {Explore}
     */

  }, {
    key: 'version',

    /**
     * Return version information
     * @return {string}
     */
    get: function get() {
      var _version = "0.0.10";
      return 'Library:' + _version + ' - Primo:' + window.appConfig['system-configuration'].Primo_Version_Number + ':' + window.appConfig['system-configuration'].Primo_HotFix_Number;
    }
  }, {
    key: 'explore',
    get: function get() {
      return _explore2.default;
    }

    /**
     * Get a pointer to available records
     * @return {Records}
     */

  }, {
    key: 'records',
    get: function get() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        resolve(new _records2.default(_this.explore.components));
      });
      //return new Records(this.explore.components);
    }

    /**
     * Get a pointer to available facets
     * @return {Facets}
     */

  }, {
    key: 'facets',
    get: function get() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        resolve(new _facets2.default(_this2.explore.components));
      });
      //return new Facets(this.explore.components);
    }

    /**
     * Get a pointer to view related metadata
     * @return {View}
     */

  }, {
    key: 'view',
    get: function get() {
      return new Promise(function (resolve, reject) {
        resolve(new _view2.default());
      });
      //return new View();
    }

    /**
     * Get a pointer to user related metadata
     * @return {User}
     */

  }, {
    key: 'user',
    get: function get() {
      return new Promise(function (resolve, reject) {
        _helper2.default.userDetailsHTTP().then(function (userDetails) {
          _helper2.default.userFinesHTTP().then(function (userFines) {
            _helper2.default.userLoansHTTP().then(function (userLoans) {
              resolve(new _user2.default({ details: userDetails, fines: userFines, loans: userLoans }));
            });
          });
        });
      });
    }
  }]);

  return Primo;
}();

exports.default = Primo;

},{"./primo/explore":28,"./primo/explore/helper":30,"./primo/facets":31,"./primo/records":32,"./primo/user":33,"./primo/view":34}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require('./explore/components');

var _components2 = _interopRequireDefault(_components);

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//this is proxy class
var Explore = function () {
  function Explore() {
    _classCallCheck(this, Explore);
  }

  _createClass(Explore, null, [{
    key: 'components',
    get: function get() {
      var c = new _components2.default();
      _helper2.default.componentNames.forEach(function (selector) {
        c.add(selector);
      });

      return c;
    }
  }, {
    key: 'ui',
    get: function get() {
      if (this._ui === undefined) {
        console.error('This is a stub function call "angular.reloadWithDebugInfo()" to activate UI');
      }
      return this._ui;
    }
  }, {
    key: 'helper',
    get: function get() {
      return _helper2.default;
    }
  }]);

  return Explore;
}();

exports.default = Explore;

},{"./explore/components":29,"./explore/helper":30}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require('./helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cssSelectorGenerator = new (require('../../vendor/css-selector-generator.js').CssSelectorGenerator)();

var Component = function () {
  function Component(element) {
    _classCallCheck(this, Component);

    this.element = element;
  }

  _createClass(Component, [{
    key: 'blink',
    value: function blink() {
      _helper2.default.blink(this);
    }
  }, {
    key: 'scope',
    value: function scope() {
      if (_helper2.default.isDebugEnabled()) {
        return angular.element(this.element).scope();
      } else {
        console.error('Please run "angular.reloadWithDebugInfo()" first');
      }
    }
  }, {
    key: 'ctrl',
    value: function ctrl() {
      var c = angular.element(this.element).controller(this.name);
      if (c) {
        return c;
      } else {
        console.log('using alternative method to get controller');
        var scope = this.scope();
        if (scope) {
          var scopeChild = scope.$$childTail;
          if (Object.keys(scope).includes('$ctrl')) {
            return scope.$ctrl;
          } else if (Object.keys(scope).includes('ctrl')) {
            return scope.ctrl;
          } else if (scopeChild && Object.keys(scopeChild).includes('$ctrl')) {
            return scopeChild.$ctrl;
          } else if (scopeChild && Object.keys(scopeChild).includes('ctrl')) {
            return scopeChild.ctrl;
          } else {
            console.error('No $ctrl defined');
          }
        }
      }

      return null;
    }
  }, {
    key: 'cssPath',
    get: function get() {
      return cssSelectorGenerator.getSelector(this.element);
    }
  }, {
    key: 'name',
    get: function get() {
      return this.element.localName;
    }
  }]);

  return Component;
}();

var Components = function () {
  function Components() {
    _classCallCheck(this, Components);

    this._components = {};
  }

  _createClass(Components, [{
    key: 'add',
    value: function add(selector) {
      var elements = _helper2.default.querySelectorAll(selector);
      var elementsArray = this._components[selector] || [];

      elements.forEach(function (element) {
        elementsArray.push(new Component(element));
      });

      this._components[selector] = elementsArray;

      return elementsArray;
    }
  }, {
    key: 'get',
    value: function get(selector) {
      return this._components[selector] || null;
    }
  }, {
    key: 'keys',
    value: function keys() {
      return Object.keys(this._components);
    }
  }]);

  return Components;
}();

exports.default = Components;

},{"../../vendor/css-selector-generator.js":35,"./helper":30}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, null, [{
        key: 'isDebugEnabled',
        value: function isDebugEnabled() {
            return window.name === 'NG_ENABLE_DEBUG_INFO!' || typeof angular.element(document.querySelector('prm-logo')).scope() != 'undefined' ? true : false;
        }
    }, {
        key: 'isPrimoAvailable',
        value: function isPrimoAvailable() {
            if ('undefined' !== typeof window.angular) {
                if (document.querySelector('primo-explore') !== null) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'querySelectorAll',
        value: function querySelectorAll(selector) {
            return Array.from(document.querySelectorAll(selector));
        }
    }, {
        key: 'injector',
        value: function injector() {
            var c = Primo.explore.components.get('primo-explore');
            if (c && c.length > 0) {
                var primoExplore = angular.element(c[0].element);
                var injector = primoExplore.injector();
                if (injector) {
                    return injector;
                }
            }

            return null;
        }
    }, {
        key: 'loadScript',
        value: function loadScript(scriptURL) {
            if (window.angular) {
                var appInjector = angular.injector(['ng', 'angularLoad']);
                if (appInjector) {
                    var angularLoad = appInjector.get('angularLoad');
                    if (angularLoad) {
                        return angularLoad.loadScript(scriptURL);
                    }
                }
            }
        }
    }, {
        key: 'rootScope',
        value: function rootScope() {
            var injector = this.injector();
            if (injector) {
                var rootScope = injector.get('$rootScope');
                if (rootScope) {
                    return rootScope;
                }
            }

            return null;
        }
    }, {
        key: 'userSessionManagerService',
        value: function userSessionManagerService() {
            var rootScope = this.rootScope();
            if (rootScope) {
                return rootScope.$$childHead.$ctrl.userSessionManagerService;
            }

            return null;
        }
    }, {
        key: 'jwtData',
        value: function jwtData() {
            var uSMS = this.userSessionManagerService();
            if (uSMS) {
                var jwtData = uSMS.jwtUtilService.getDecodedToken() || {};
                return jwtData;
            }
        }
    }, {
        key: 'userDetails',
        value: function userDetails() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.userSessionManagerService().$localForage.getItem('userDetails').then(function (userDetails) {
                    return resolve(userDetails);
                });
            });
        }
    }, {
        key: 'userDetailsHTTP',
        value: function userDetailsHTTP() {
            var _this2 = this;

            var viewCode = this.jwtData().viewId || window.appConfig['vid'];
            return new Promise(function (resolve, reject) {
                _this2.http.get('/primo_library/libweb/webservices/rest/v1/usersettings?vid=' + viewCode).then(function (userDetails) {
                    return resolve(userDetails.data);
                });
            });
        }
    }, {
        key: 'userFinesHTTP',
        value: function userFinesHTTP() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                _this3.http.get('/primo_library/libweb/webservices/rest/v1/myaccount/fines').then(function (userFines) {
                    try {
                        var data = userFines.data;
                        if (data.status == 'ok') {
                            var fines = data.data.fines;
                            resolve(fines.fine);
                        } else {
                            console.log('No fines');
                            resolve([]);
                        }
                    } catch (error) {
                        resolve([]);
                    }
                });
            });
        }
    }, {
        key: 'userLoansHTTP',
        value: function userLoansHTTP() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
                _this4.http.get('/primo_library/libweb/webservices/rest/v1/myaccount/loans').then(function (userLoans) {
                    try {
                        var data = userLoans.data;
                        if (data.status == 'ok') {
                            var loans = data.data.loans;
                            resolve(loans.loan);
                        } else {
                            console.log('No loans');
                            resolve([]);
                        }
                    } catch (error) {
                        resolve([]);
                    }
                });
            });
        }
    }, {
        key: 'blink',
        value: function blink(component) {
            var numberOfBlinks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

            var intervalId = null;
            var borderElement = null;
            var index = Math.floor(Math.random() * (1000 - 1)) + 1;
            var borderSelector = component.element.cssPath + index + 'Rect';

            var createBorderElement = function createBorderElement() {
                if (component && component.element) {
                    var elementRect = component.element.getBoundingClientRect();
                    var _borderElement = document.createElement('div');
                    var _index = Math.floor(Math.random() * (1000 - 1)) + 1;
                    _borderElement.setAttribute('id', borderSelector);
                    _borderElement.style.border = '3px solid red';
                    _borderElement.style.position = 'absolute';
                    _borderElement.style.top = elementRect.top + 'px';
                    _borderElement.style.height = elementRect.height + 'px';
                    _borderElement.style.width = elementRect.width + 'px';
                    _borderElement.style.left = elementRect.left + 'px';
                    document.body.appendChild(_borderElement);

                    return document.querySelector('#' + borderSelector);
                }

                return null;
            };

            var removeBorderElement = function removeBorderElement() {
                if (borderElement) {
                    borderElement.remove();
                }
            };

            var blinkBorderElement = function blinkBorderElement() {
                var numberOfBlinks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;

                window.clearInterval(intervalId);

                if (numberOfBlinks < 0) {
                    removeBorderElement();
                } else {
                    borderElement.style.display = numberOfBlinks % 2 == 0 ? 'none' : 'block';
                    numberOfBlinks--;
                    intervalId = window.setInterval(blinkBorderElement, 1000, numberOfBlinks);
                }
            };

            borderElement = createBorderElement();
            blinkBorderElement(numberOfBlinks);
        }
    }, {
        key: 'componentNames',
        get: function get() {
            var tags = Array.from(document.getElementsByTagName('*'));
            var componentNames = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var tag = _step.value;

                    var tagName = tag.localName;
                    if (/^prm-/.test(tagName) || /^primo-/.test(tagName)) {
                        if (!componentNames.includes(tagName)) {
                            componentNames.push(tagName);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            componentNames = componentNames.sort().filter(function (e, i, a) {
                return i === a.findIndex(function (e2) {
                    return e === e2;
                });
            });
            return componentNames;
        }
    }, {
        key: 'http',
        get: function get() {
            var injector = this.injector();
            if (injector) {
                var h = injector.get('$http');
                if (h) {
                    return h;
                }
            }

            return null;
        }
    }]);

    return Helper;
}();

exports.default = Helper;

},{}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require('./explore/components');

var _components2 = _interopRequireDefault(_components);

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Facets = function () {
    function Facets(components) {
        _classCallCheck(this, Facets);

        return this._facets(components);
    }

    _createClass(Facets, [{
        key: '_facets',
        value: function _facets(components) {
            try {
                if (components) {
                    var c = components.get('prm-facet-after');
                    if (c && c.length > 0) {
                        var ctrl = c[0].ctrl;
                        return ctrl.facetService.results;
                    }
                }
            } catch (e) {
                console.log('trying to get facets through the rootScope');
                try {
                    return _helper2.default.userSessionManagerService().searchStateService.resultObject.facets;
                } catch (e) {
                    console.error('unable to retrieve facets');
                }
            }

            return [];
        }
    }]);

    return Facets;
}();

exports.default = Facets;

},{"./explore/components":29,"./explore/helper":30}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require('./explore/components');

var _components2 = _interopRequireDefault(_components);

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Records = function () {
    function Records(components) {
        _classCallCheck(this, Records);

        return this._items(components);
    }

    _createClass(Records, [{
        key: '_items',
        value: function _items(components) {
            try {
                if (components) {
                    var c = components.get('prm-search-result-list-after');
                    if (c && c.length > 0) {
                        var ctrl = c[0].ctrl();
                        if (ctrl) {
                            return ctrl.itemlist;
                        }
                        throw "try again";
                    }
                }
            } catch (e) {
                console.log('trying to get records through the rootScope');
                try {
                    return _helper2.default.userSessionManagerService().searchStateService.resultObject.data;
                } catch (e) {
                    console.error('unable to retrieve items');
                }
            }

            return [];
        }
    }]);

    return Records;
}();

exports.default = Records;

},{"./explore/components":29,"./explore/helper":30}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  function User() {
    var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _skelUser;

    _classCallCheck(this, User);

    var uSms = _helper2.default.userSessionManagerService();
    var jwtData = _helper2.default.jwtData();
    var self = this;

    return {
      id: jwtData.user || '',
      email: user.details.email || '',
      name: jwtData.userName || 'Guest',
      display_name: uSms.getUserNameForDisplay(),
      isLoggedIn: function isLoggedIn() {
        return uSms.getUserName().length > 0;
      },
      isOnCampus: function isOnCampus() {
        return jwtData.onCampus == "true" ? true : false;
      },
      fines: user.fines,
      loans: user.loans
    };
  }

  _createClass(User, [{
    key: '_skelUser',
    get: function get() {
      return {
        details: {},
        fines: {},
        loans: {}
      };
    }
  }]);

  return User;
}();

exports.default = User;

},{"./explore/helper":30}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helper = require('./explore/helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function View() {
  _classCallCheck(this, View);

  var uSms = _helper2.default.userSessionManagerService();
  var jwtData = _helper2.default.jwtData();

  return {
    code: jwtData.viewId || window.appConfig['vid'],
    institution: {
      code: jwtData.viewInstitutionCode,
      name: window.appConfig['primo-view']['attributes-map'].institution
    },
    interfaceLanguage: uSms.getUserLanguage() || window.appConfig['primo-view']['attributes-map'].interfaceLanguage,
    ip: {
      address: jwtData.ip
    }
  };
};

exports.default = View;

},{"./explore/helper":30}],35:[function(require,module,exports){
'use strict';

(function () {
  var CssSelectorGenerator,
      root,
      indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i;
    }return -1;
  };

  CssSelectorGenerator = function () {
    CssSelectorGenerator.prototype.default_options = {
      selectors: ['id', 'class', 'tag', 'nthchild']
    };

    function CssSelectorGenerator(options) {
      if (options == null) {
        options = {};
      }
      this.options = {};
      this.setOptions(this.default_options);
      this.setOptions(options);
    }

    CssSelectorGenerator.prototype.setOptions = function (options) {
      var key, results, val;
      if (options == null) {
        options = {};
      }
      results = [];
      for (key in options) {
        val = options[key];
        if (this.default_options.hasOwnProperty(key)) {
          results.push(this.options[key] = val);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    CssSelectorGenerator.prototype.isElement = function (element) {
      return !!((element != null ? element.nodeType : void 0) === 1);
    };

    CssSelectorGenerator.prototype.getParents = function (element) {
      var current_element, result;
      result = [];
      if (this.isElement(element)) {
        current_element = element;
        while (this.isElement(current_element)) {
          result.push(current_element);
          current_element = current_element.parentNode;
        }
      }
      return result;
    };

    CssSelectorGenerator.prototype.getTagSelector = function (element) {
      return this.sanitizeItem(element.tagName.toLowerCase());
    };

    CssSelectorGenerator.prototype.sanitizeItem = function (item) {
      var characters;
      characters = item.split('').map(function (character) {
        if (character === ':') {
          return "\\" + ':'.charCodeAt(0).toString(16).toUpperCase() + " ";
        } else if (/[ !"#$%&'()*+,.\/;<=>?@\[\\\]^`{|}~]/.test(character)) {
          return "\\" + character;
        } else {
          return escape(character).replace(/\%/g, '\\');
        }
      });
      return characters.join('');
    };

    CssSelectorGenerator.prototype.getIdSelector = function (element) {
      var id, sanitized_id;
      id = element.getAttribute('id');
      if (id != null && id !== '' && !/\s/.exec(id) && !/^\d/.exec(id)) {
        sanitized_id = "#" + this.sanitizeItem(id);
        if (element.ownerDocument.querySelectorAll(sanitized_id).length === 1) {
          return sanitized_id;
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.getClassSelectors = function (element) {
      var class_string, item, result;
      result = [];
      class_string = element.getAttribute('class');
      if (class_string != null) {
        class_string = class_string.replace(/\s+/g, ' ');
        class_string = class_string.replace(/^\s|\s$/g, '');
        if (class_string !== '') {
          result = function () {
            var k, len, ref, results;
            ref = class_string.split(/\s+/);
            results = [];
            for (k = 0, len = ref.length; k < len; k++) {
              item = ref[k];
              results.push("." + this.sanitizeItem(item));
            }
            return results;
          }.call(this);
        }
      }
      return result;
    };

    CssSelectorGenerator.prototype.getAttributeSelectors = function (element) {
      var attribute, blacklist, k, len, ref, ref1, result;
      result = [];
      blacklist = ['id', 'class'];
      ref = element.attributes;
      for (k = 0, len = ref.length; k < len; k++) {
        attribute = ref[k];
        if (ref1 = attribute.nodeName, indexOf.call(blacklist, ref1) < 0) {
          result.push("[" + attribute.nodeName + "=" + attribute.nodeValue + "]");
        }
      }
      return result;
    };

    CssSelectorGenerator.prototype.getNthChildSelector = function (element) {
      var counter, k, len, parent_element, sibling, siblings;
      parent_element = element.parentNode;
      if (parent_element != null) {
        counter = 0;
        siblings = parent_element.childNodes;
        for (k = 0, len = siblings.length; k < len; k++) {
          sibling = siblings[k];
          if (this.isElement(sibling)) {
            counter++;
            if (sibling === element) {
              return ":nth-child(" + counter + ")";
            }
          }
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.testSelector = function (element, selector) {
      var is_unique, result;
      is_unique = false;
      if (selector != null && selector !== '') {
        result = element.ownerDocument.querySelectorAll(selector);
        if (result.length === 1 && result[0] === element) {
          is_unique = true;
        }
      }
      return is_unique;
    };

    CssSelectorGenerator.prototype.getAllSelectors = function (element) {
      var result;
      result = {
        t: null,
        i: null,
        c: null,
        a: null,
        n: null
      };
      if (indexOf.call(this.options.selectors, 'tag') >= 0) {
        result.t = this.getTagSelector(element);
      }
      if (indexOf.call(this.options.selectors, 'id') >= 0) {
        result.i = this.getIdSelector(element);
      }
      if (indexOf.call(this.options.selectors, 'class') >= 0) {
        result.c = this.getClassSelectors(element);
      }
      if (indexOf.call(this.options.selectors, 'attribute') >= 0) {
        result.a = this.getAttributeSelectors(element);
      }
      if (indexOf.call(this.options.selectors, 'nthchild') >= 0) {
        result.n = this.getNthChildSelector(element);
      }
      return result;
    };

    CssSelectorGenerator.prototype.testUniqueness = function (element, selector) {
      var found_elements, parent;
      parent = element.parentNode;
      found_elements = parent.querySelectorAll(selector);
      return found_elements.length === 1 && found_elements[0] === element;
    };

    CssSelectorGenerator.prototype.testCombinations = function (element, items, tag) {
      var item, k, l, len, len1, ref, ref1;
      ref = this.getCombinations(items);
      for (k = 0, len = ref.length; k < len; k++) {
        item = ref[k];
        if (this.testUniqueness(element, item)) {
          return item;
        }
      }
      if (tag != null) {
        ref1 = items.map(function (item) {
          return tag + item;
        });
        for (l = 0, len1 = ref1.length; l < len1; l++) {
          item = ref1[l];
          if (this.testUniqueness(element, item)) {
            return item;
          }
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.getUniqueSelector = function (element) {
      var found_selector, k, len, ref, selector_type, selectors;
      selectors = this.getAllSelectors(element);
      ref = this.options.selectors;
      for (k = 0, len = ref.length; k < len; k++) {
        selector_type = ref[k];
        switch (selector_type) {
          case 'id':
            if (selectors.i != null) {
              return selectors.i;
            }
            break;
          case 'tag':
            if (selectors.t != null) {
              if (this.testUniqueness(element, selectors.t)) {
                return selectors.t;
              }
            }
            break;
          case 'class':
            if (selectors.c != null && selectors.c.length !== 0) {
              found_selector = this.testCombinations(element, selectors.c, selectors.t);
              if (found_selector) {
                return found_selector;
              }
            }
            break;
          case 'attribute':
            if (selectors.a != null && selectors.a.length !== 0) {
              found_selector = this.testCombinations(element, selectors.a, selectors.t);
              if (found_selector) {
                return found_selector;
              }
            }
            break;
          case 'nthchild':
            if (selectors.n != null) {
              return selectors.n;
            }
        }
      }
      return '*';
    };

    CssSelectorGenerator.prototype.getSelector = function (element) {
      var all_selectors, item, k, l, len, len1, parents, result, selector, selectors;
      all_selectors = [];
      parents = this.getParents(element);
      for (k = 0, len = parents.length; k < len; k++) {
        item = parents[k];
        selector = this.getUniqueSelector(item);
        if (selector != null) {
          all_selectors.push(selector);
        }
      }
      selectors = [];
      for (l = 0, len1 = all_selectors.length; l < len1; l++) {
        item = all_selectors[l];
        selectors.unshift(item);
        result = selectors.join(' > ');
        if (this.testSelector(element, result)) {
          return result;
        }
      }
      return null;
    };

    CssSelectorGenerator.prototype.getCombinations = function (items) {
      var i, j, k, l, ref, ref1, result;
      if (items == null) {
        items = [];
      }
      result = [[]];
      for (i = k = 0, ref = items.length - 1; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
        for (j = l = 0, ref1 = result.length - 1; 0 <= ref1 ? l <= ref1 : l >= ref1; j = 0 <= ref1 ? ++l : --l) {
          result.push(result[j].concat(items[i]));
        }
      }
      result.shift();
      result = result.sort(function (a, b) {
        return a.length - b.length;
      });
      result = result.map(function (item) {
        return item.join('');
      });
      return result;
    };

    return CssSelectorGenerator;
  }();

  if (typeof define !== "undefined" && define !== null ? define.amd : void 0) {
    define([], function () {
      return CssSelectorGenerator;
    });
  } else {
    root = typeof exports !== "undefined" && exports !== null ? exports : this;
    root.CssSelectorGenerator = CssSelectorGenerator;
  }
}).call(undefined);

},{}],36:[function(require,module,exports){
'use strict';

/*
  General 

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
String.prototype.toCamelCase = function () {
  return this.split('-').map(function (d, i, a) {
    return i > 0 ? d.charAt(0).toUpperCase() + d.slice(1) : d;
  }).join('');
};

},{}]},{},[26])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGRhdGFiYXNlTGluay5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGlhbG9nLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxkaXNjbGFpbWVyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxleHBlcmltZW50LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxyZW1vdmVBbGVydHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHNlYXJjaFRpcC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcc3RhdGljRm9vdGVyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1CcmllZlJlc3VsdEFmdGVyXFxzb3VyY2VJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GaW5lc092ZXJ2aWV3QWZ0ZXJcXHBheU15RmluZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcYmV0YVN3aXRjaC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxob21lSWNvbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTWFpbk1lbnVBZnRlclxcZmVlZGJhY2suanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVByb21vdGVMb2dpblxcUHJvbW90ZUxvZ2luLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1SZWNvbW1lbmRhdGlvbkl0ZW1BZnRlclxccmVjb21tZW5kYXRpb25JdGVtLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1SZXF1ZXN0c0FmdGVyXFxpbGxSZXF1ZXN0Rm9ybS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXJcXHBueFhtbC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtU2VydmljZUhlYWRlckFmdGVyXFxyZXBvcnRBUHJvYmxlbS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxhbm5vdW5jZW1lbnRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZlZWRiYWNrQW5ub3VuY2VtZW50LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZpbmVzTWVzc2FnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkYmFja1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcbWVzc2FnZVNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXG1haW4uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW8uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmVcXGNvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmVcXGhlbHBlci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZmFjZXRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFxyZWNvcmRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFx1c2VyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFx2aWV3LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHZlbmRvclxcY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7cWpCQ0FBOzs7Ozs7Ozs7OztBQVdBOzs7QUFGQTs7QUFHQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7OztJQUdxQixlOzs7Ozs7O3dCQUVGO0FBQ2Y7Ozs7Ozs7Ozs7O0FBWUEsYUFBTyxDQUNMLEVBQUMsTUFBTSxrQkFBUCxFQUEyQixvQ0FBM0IsRUFBcUQsU0FBUyxLQUE5RCxFQUFxRSxVQUFVLHdDQUEvRSxFQUF5SCxjQUFjLElBQXZJLEVBREssRUFFTCxFQUFDLE1BQU0sV0FBUCxFQUFvQixnQ0FBcEIsRUFBNEMsU0FBUyxJQUFyRCxFQUEyRCxVQUFVLGdCQUFyRSxFQUF1RixjQUFjLElBQXJHLEVBRkssRUFHTCxFQUFDLE1BQU0sYUFBUCxFQUFzQixvQ0FBdEIs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LENBQVMsQ0FBVCxFQUFZLFdBQVosS0FBNEIsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFwQyxHQUFnRCxDQUE1RDtBQUFBLEdBQXBCLEVBQW1GLElBQW5GLENBQXdGLEVBQXhGLENBQVA7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXHJcbiAgRGVjbGFyZSB5b3VyIGNvbXBvbmVudHMgaGVyZS5cclxuXHJcbiAgUmV3cml0ZSB0aGlzIHdoZW4gaW1wb3J0cyBjYW4gYmUgZG9uZSBkeW5hbWljYWxseVxyXG4gIGh0dHA6Ly8yYWxpdHkuY29tLzIwMTcvMDEvaW1wb3J0LW9wZXJhdG9yLmh0bWxcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuaW1wb3J0ICcuL3V0aWxzJ1xyXG5cclxuLyogaW1wb3J0IHlvdXIgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24qL1xyXG5pbXBvcnQge2V4cGVyaW1lbnRDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2V4cGVyaW1lbnQnXHJcblxyXG5pbXBvcnQge2hvbWVJY29uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL2hvbWVJY29uJ1xyXG5pbXBvcnQge2JldGFTd2l0Y2hDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvYmV0YVN3aXRjaCdcclxuaW1wb3J0IHtzb3VyY2VJY29uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9zb3VyY2VJY29uJ1xyXG5pbXBvcnQge3BueFhtbENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyL3BueFhtbCdcclxuaW1wb3J0IHtwYXlNeUZpbmVzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmluZXNPdmVydmlld0FmdGVyL3BheU15RmluZXMnXHJcbmltcG9ydCB7ZmVlZGJhY2tDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1NYWluTWVudUFmdGVyL2ZlZWRiYWNrJ1xyXG5pbXBvcnQge3NlYXJjaFRpcENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvc2VhcmNoVGlwJ1xyXG5pbXBvcnQge2Rpc2NsYWltZXJDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2Rpc2NsYWltZXInXHJcbmltcG9ydCB7cmVwb3J0QVByb2JsZW1Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZXJ2aWNlSGVhZGVyQWZ0ZXIvcmVwb3J0QVByb2JsZW0nXHJcbmltcG9ydCB7ZmluZXNNZXNzYWdlQ29uZmlnIGFzIHBheU15RmluZXNNZXNzYWdlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2ZpbmVzTWVzc2FnZSdcclxuaW1wb3J0IHthbm5vdW5jZW1lbnRzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2Fubm91bmNlbWVudHMnXHJcbmltcG9ydCB7cHJvbW90ZUxvZ2luQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtUHJvbW90ZUxvZ2luL1Byb21vdGVMb2dpbidcclxuaW1wb3J0IHtmZWVkYmFja0Fubm91bmNlbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9mZWVkYmFja0Fubm91bmNlbWVudCdcclxuaW1wb3J0IHtzdGF0aWNGb290ZXJDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3N0YXRpY0Zvb3RlcidcclxuaW1wb3J0IHtyZW1vdmVBbGVydHNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3JlbW92ZUFsZXJ0cydcclxuaW1wb3J0IHtpbGxSZXF1ZXN0Rm9ybUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVJlcXVlc3RzQWZ0ZXIvaWxsUmVxdWVzdEZvcm0nXHJcbmltcG9ydCB7cmVjb21tZW5kYXRpb25JdGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtUmVjb21tZW5kYXRpb25JdGVtQWZ0ZXIvcmVjb21tZW5kYXRpb25JdGVtJ1xyXG5cclxuaW1wb3J0IHtkYXRhYmFzZUxpbmtDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2RhdGFiYXNlTGluaydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlckNvbXBvbmVudHMge1xyXG5cclxuICBzdGF0aWMgZ2V0IGFsbCgpIHtcclxuICAgIC8qXHJcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcclxuICAgICAgY29uZmlnID0gdGhlIGltcG9ydGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcclxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxyXG5cclxuICAgICAgZXguIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9XHJcbiAgICAgIHJlc3VsdHMgaW46XHJcbiAgICAgICAgPHBybS1sb2dvLWFmdGVyIHBhcmVudEN0cmw9JyRjdHJsJz5cclxuICAgICAgICAgIDxob21lLWljb24gcGFyZW50Q3RybD0nJGN0cmwnPjwvaG9tZS1pY29uPlxyXG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge25hbWU6ICdsaWJpcy1leHBlcmltZW50JywgY29uZmlnOiBleHBlcmltZW50Q29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tbWVzc2FnZXMtYW5kLWJsb2Nrcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnYmV0YS1zd2l0Y2gnLCBjb25maWc6IGJldGFTd2l0Y2hDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3NvdXJjZS1pY29uJywgY29uZmlnOiBzb3VyY2VJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3BueC14bWwnLCBjb25maWc6IHBueFhtbENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzJywgY29uZmlnOiBwYXlNeUZpbmVzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1maW5lcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1tYWluLW1lbnUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3JlcG9ydC1hLXByb2JsZW0nLCBjb25maWc6IHJlcG9ydEFQcm9ibGVtQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1zZXJ2aWNlLWhlYWRlci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncHJtLXNlYXJjaHRpcHMnLCBjb25maWc6IHNlYXJjaFRpcENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGwsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncHJtLWRpc2NsYWltZXInLCBjb25maWc6IGRpc2NsYWltZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3N0YXRpYy1mb290ZXInLCBjb25maWc6IHN0YXRpY0Zvb3RlckNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZXhwbG9yZS1tYWluLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdzdGF0aWMtZm9vdGVyLWFjY291bnQnLCBjb25maWc6IHN0YXRpY0Zvb3RlckNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYWNjb3VudC1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncmVtb3ZlLWFsZXJ0cycsIGNvbmZpZzogcmVtb3ZlQWxlcnRzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1hZGQtcXVlcnktdG8tc2F2ZWQtc2VhcmNoZXMtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3BybS1kYmxpbmsnLCBjb25maWc6IGRhdGFiYXNlTGlua0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG5cclxuICAgICAgLyogbGJzLWNvbXBvbmVudHMgdXNlZCBpbiBodG1sLXRlbXBsYXRlcyBvZiB0aGUgcGFja2FnZSAqL1xyXG4gICAgICB7bmFtZTogJ3Byb21vdGUtbG9naW4tc3RhdGljLWZvb3RlcicsIGNvbmZpZzogcHJvbW90ZUxvZ2luQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ2xicy1wcm9tb3RlLWxvZ2luJywgZW5hYmxlSW5WaWV3OiAgJ15LVUxldXZlbid9LFxyXG4gICAgIFxyXG4gICAgICB7bmFtZTogJ2lsbC1yZXF1ZXN0LWZvcm0tb3ZlcnZpZXcnLCBjb25maWc6IGlsbFJlcXVlc3RGb3JtQ29uZmlnLCBlbmFibGVkOmZhbHNlLCBhcHBlbmRUbzogJ3BybS1yZXF1ZXN0cy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnaWxsLXJlcXVlc3QtZm9ybScsIGNvbmZpZzogaWxsUmVxdWVzdEZvcm1Db25maWcsIGVuYWJsZWQ6dHJ1ZSwgYXBwZW5kVG86ICdwcm0tcmVxdWVzdHMtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW58XlZJVkVTJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2Fubm91bmNlbWVudC1mZWVkYmFjaycsIGNvbmZpZzogZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWcsIGVuYWJsZWQ6ZmFsc2UsIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnb3ZlcnJpZGUtZ2V0bGluay1yZWNvbW1lbmRhdGlvbicsIGNvbmZpZzogcmVjb21tZW5kYXRpb25JdGVtQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1yZWNvbWVuZGF0aW9uLWl0ZW0tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG5cclxuICAgICAge25hbWU6ICdhbm5vdW5jZW1lbnQnLCBjb25maWc6IGFubm91bmNlbWVudHNDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJy4qJ30sICAgICAgXHJcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzLW1lc3NhZ2UnLCBjb25maWc6IHBheU15RmluZXNNZXNzYWdlQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbid9XHJcbiAgICBdLmZpbHRlciggKGNvbXBvbmVudCkgPT4gKCBjb21wb25lbnQuZW5hYmxlZCAmJiBuZXcgUmVnRXhwKGNvbXBvbmVudC5lbmFibGVJblZpZXcpLnRlc3Qod2luZG93LmFwcENvbmZpZy52aWQpICkgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGRhdGFiYXNlTGlua0hUTUwgZnJvbSAnLi9kYXRhYmFzZUxpbmsuaHRtbCdcclxuXHJcbmNsYXNzIERhdGFiYXNlTGlua0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZykge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgJHNjb3BlLnRpdGxlID0gJ2RhdGFiYXNlcyc7XHJcbiAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSAnc2VhcmNoIGRhdGFiYXNlcyc7XHJcbiAgICAkc2NvcGUuZGF0YWJhc2VMaW5rID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLWRhdGFiYXNlXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybClcclxuXHJcbiAgICAgICAgdmFyIGRhdGFiYXNlRmFjZXQgPSB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwicnR5cGVcIixcclxuICAgICAgICAgICAgXCJ0eXBlXCI6XCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjpcImRhdGFiYXNlc1wiLFxyXG4gICAgICAgICAgICBcImRpc3BsYXlWYWx1ZVwiOlwiZGF0YWJhc2VzXCIsXHJcbiAgICAgICAgICAgIFwiZGlzcGxheWVkVHlwZVwiOlwiZXhhY3RcIixcclxuICAgICAgICAgICAgXCJsYWJlbFwiOlwiRGF0YWJhbmtlblwiLFxyXG4gICAgICAgICAgICBcImlzTXVsdGlGYWNldFwiOmZhbHNlLFxyXG4gICAgICAgICAgICBcInRvb2x0aXBcIjpcIlZlcndpamRlciBUeXBlIGJyb24gRGF0YWJhbmtlblwiLFxyXG4gICAgICAgICAgICBcIiQkaGFzaEtleVwiOlwib2JqZWN0OjI4MDhcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyggJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU3RhdGVTZXJ2aWNlLnNlYXJjaE9iamVjdCApXHJcblxyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL21laG1ldGMvcHJpbW8tZXhwbG9yZS1jb2xsZWN0aW9uLXZpZXdlci9ibG9iL21hc3Rlci9qcy9uZy1wcmltby5qc1xyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFNlcnZpY2Uuc2V0U29ydEJ5KCd0aXRsZScpO1xyXG4gICAgICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFNlcnZpY2UuZmFjZXRTZXJ2aWNlLmFkZFN0aWNreUZhY2V0KGRhdGFiYXNlRmFjZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTdGF0ZVNlcnZpY2Uuc2VhcmNoT2JqZWN0IClcclxuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLnNlYXJjaCgpO1xyXG4vKlxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJzdGlja3lGYWNldHNcIixcclxuICAgICAgICdbe1wibmFtZVwiOlwicnR5cGVcIixcInR5cGVcIjpcImluY2x1ZGVcIixcInZhbHVlXCI6XCJkYXRhYmFzZXNcIixcImRpc3BsYXlWYWx1ZVwiOlwiZGF0YWJhc2VzXCIsXCJkaXNwbGF5ZWRUeXBlXCI6XCJleGFjdFwiLFwibGFiZWxcIjpcIkRhdGFiYW5rZW5cIixcImlzTXVsdGlGYWNldFwiOmZhbHNlLFwidG9vbHRpcFwiOlwiVmVyd2lqZGVyIFR5cGUgYnJvbiBEYXRhYmFua2VuXCIsXCIkJGhhc2hLZXlcIjpcIm9iamVjdDoyODA4XCIsXCJwZXJzaXN0ZW50XCI6dHJ1ZSxcIm9wZXJhdGlvblwiOlwiYWRkXCJ9XScpO1xyXG4gICAgICAgKi9cclxuICAgICAvLyAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMy9wcmltby1leHBsb3JlL3NlYXJjaD9xdWVyeT1hbnksY29udGFpbnMsZGF0YWJhc2VzJnRhYj1hbGxfY29udGVudF90YWImc2VhcmNoX3Njb3BlPUFMTF9DT05URU5UJlwiXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5EYXRhYmFzZUxpbmtDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBkYXRhYmFzZUxpbmtDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRGF0YWJhc2VMaW5rQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogZGF0YWJhc2VMaW5rSFRNTFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJGh0dHAsICR0cmFuc2xhdGUsIGZlZWRiYWNrU2VydmljZVVSTCwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLm1kRGlhbG9nID0gJG1kRGlhbG9nO1xyXG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XHJcbiAgICB0aGlzLmh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMID0gZmVlZGJhY2tTZXJ2aWNlVVJMO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG5cclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAkc2NvcGUuY2FuY2VsRmVlZGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IHRoaXMuc2VuZEZlZWRiYWNrO1xyXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IChhbnN3ZXIpID0+IHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgc2VsZi52aWV3ID0gdmlldztcclxuXHJcbiAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgc3ViamVjdDogJHNjb3BlLmZlZWRiYWNrLnN1YmplY3QsXHJcbiAgICAgICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxyXG4gICAgICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxyXG4gICAgICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICAgICAgaXA6IHNlbGYudmlldy5pcC5hZGRyZXNzLFxyXG4gICAgICAgICAgICB0eXBlOiAnZmVlZGJhY2snLFxyXG4gICAgICAgICAgICBmZWVkYmFjazogJHNjb3BlLmZlZWRiYWNrLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGVtYWlsOiAkc2NvcGUuZmVlZGJhY2sucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmICgkc2NvcGUuZmVlZGJhY2sucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5mZWVkYmFjay5tZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2VsZi5tZERpYWxvZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmh0dHAoe1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIHVybDogdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwsXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xyXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnO1xyXG4gICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nKTtcclxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLic7XHJcbiAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcbiAgICAgICAgJHNjb3BlLmZlZWRiYWNrID0ge1xyXG4gICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICBzdWJqZWN0OiAnZmVlZGJhY2snXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkRpYWxvZ0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckaHR0cCcsICckdHJhbnNsYXRlJywgJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdNZXNzYWdlU2VydmljZSddO1xyXG4iLCJpbXBvcnQgZGlzY2xhaW1lckRpYWxvZ0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvZGlzY2xhaW1lckRpYWxvZy5odG1sJ1xyXG5pbXBvcnQgZGlzY2xhaW1lckxpbmtIVE1MIGZyb20gJ2Rpc2NsYWltZXIuaHRtbCdcclxuXHJcbmNsYXNzIGRpc2NsYWltZXJDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG5cclxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICdubF9CRSc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdDb29raWViZWxlaWQnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJDb29raWViZWxlaWRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2VuX1VTJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ0Nvb2tpZSBQb2xpY3knLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJDb29raWUgUG9saWN5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgICdmcl9GUic6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdDb29raWUgUG9saWN5JyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQ29va2llIFBvbGljeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nSFRNTDtcclxuICAgICAgLypcclxuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdmcl9GUic6XHJcbiAgICAgICAgZGlzY2xhaW1lckRpYWxvZyA9IGRpc2NsYWltZXJEaWFsb2dfZnJGUl9IVE1MO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmxfQkUnOlxyXG4gICAgICAgIGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nX25sQkVfSFRNTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZGlzY2xhaW1lckRpYWxvZyA9IGRpc2NsYWltZXJEaWFsb2dfZW5VU19IVE1MO1xyXG4gICAgICB9XHJcbiovXHJcbiAgICAgICRzY29wZS50aXRsZSA9IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ3RpdGxlJ107XHJcbiAgICAgICRzY29wZS50aXRsZV9sYWJlbCA9IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ3RpdGxlX2xhYmVsJ107XHJcblxyXG4gICAgICAkc2NvcGUuc2hvd0Rpc2NsYWltZXJEaWFsb2cgPSBmdW5jdGlvbigkZXZlbnQpIHtcclxuICAgICAgICBsZXQgcGFyZW50RWwgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnRFbCxcclxuICAgICAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogZGlzY2xhaW1lckRpYWxvZyxcclxuICAgICAgICAgIGxvY2Fsczoge1xyXG4gICAgICAgICAgICBpdGVtczogJHNjb3BlLml0ZW1zXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBEaWFsb2dDb250cm9sbGVyKCRzY29wZSwgJG1kRGlhbG9nLCBpdGVtcykge1xyXG4gICAgICAgICRzY29wZS5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgICRzY29wZS5jbG9zZURpYWxvZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZGlzY2xhaW1lckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyRtZERpYWxvZyddXHJcblxyXG5leHBvcnQgbGV0IGRpc2NsYWltZXJDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogZGlzY2xhaW1lckNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGRpc2NsYWltZXJMaW5rSFRNTFxyXG59XHJcbiIsIi8qIGNvbXBvbmVudCB0byBkbyBhbGwgeW91ciBleHBlcmltZW50YWwgc3R1ZmYgKi9cclxuLyogW2VufGRpc11hYmxlIGluIGNvbXBvbmVudHMqL1xyXG5cclxuY2xhc3MgRXhwZXJpbWVudENvbnRyb2xsZXIge1xyXG4gXHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwkdGVtcGxhdGVDYWNoZSwgJGNvbXBpbGUsJGluamVjdG9yLCRyb290U2NvcGUsJHRyYW5zbGF0ZSwgJHdpbmRvdykge1xyXG4gICAgY29uc29sZS5sb2coJ0V4cGVyaW1lbnQ6Jyk7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlID0gJHRlbXBsYXRlQ2FjaGU7XHJcbiAgICB0aGlzLiRjb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnJzsgXHJcblxyXG4gICAgY29uc29sZS5sb2coc2VsZilcclxuICAgIGNvbnNvbGUubG9nKCdyb290U2NvcGU6JylcclxuICAgIGNvbnNvbGUubG9nKCRyb290U2NvcGUpXHJcbiAgICBjb25zb2xlLmxvZygndGVtcGxhdGVDYWNoZScpXHJcbiAgICBjb25zb2xlLmxvZygkdGVtcGxhdGVDYWNoZSkgICBcclxuICAgIHZhciB0ZW1wbGF0ZSA9ICR0ZW1wbGF0ZUNhY2hlLmdldCgnY29tcG9uZW50cy9hY2NvdW50L292ZXJ2aWV3L3JlcXVlc3RzT3ZlcnZpZXcvcmVxdWVzdHMtb3ZlcnZpZXcuaHRtbCcpO1xyXG4gICAgLy8gdmFyIHRlbXBsYXRlID0gdGVtcGxhdGUgKyBcIjxIMSBpZD0nb210ZWxhY2h0ZW4nPkxBTEFMQTxpbGwtcmVxdWVzdC1mb3JtLW92ZXJ2aWV3PjwvaWxsLXJlcXVlc3QtZm9ybS1vdmVydmlldz48L0gxPlwiO1xyXG4gICAgdmFyIHRlbXBsYXRlID0gdGVtcGxhdGUgKyBcIjxIMSBpZD0nb210ZWxhY2h0ZW4nPkxBTEFMQTwvSDE+XCI7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnLCB0ZW1wbGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZygkdGVtcGxhdGVDYWNoZS5nZXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnKSlcclxufTtcclxuXHJcbiAgdG9JbGxSZXF1ZXN0VXJsKCkge1xyXG4gICAgICB2YXIgaW5zdGl0dXRpb25Db2RlID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbi5pbnN0aXR1dGlvbkNvZGU7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ2luc3RpdHV0aW9uQ29kZTonICsgaW5zdGl0dXRpb25Db2RlKVxyXG4gICAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnaHR0cHM6Ly9sZXV2ZW4tcHJpbW8uaG9zdGVkLmV4bGlicmlzZ3JvdXAuY29tL3Bkcz9mdW5jPXNzbyZ1cmw9aHR0cDovL2V1LmFsbWEuZXhsaWJyaXNncm91cC5jb20vdmlldy91cmVzb2x2ZXIvJysgaW5zdGl0dXRpb25Db2RlICsnL29wZW51cmw/c3ZjX2RhdD1nZXRpdCZzdmMucHJvZmlsZT1nZXRpdCZkaXJlY3RSZXNvdXJjZVNoYXJpbmdSZXF1ZXN0PXRydWUmbmV3VUk9dHJ1ZSdcclxuICAgICAgdGhpcy53aW5kb3cub3Blbih0aGlzLmlsbFJlcXVlc3RVcmwsICdfZnJlZUlsbCcpO1xyXG4gIH07XHJcbiAgICBcclxuICAkb25Jbml0KCkgeyAgXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nICgnbmV3RWxlbWVudDonKVxyXG4gIC8vICBjb25zb2xlLmxvZyAoYW5ndWxhci5lbGVtZW50KCAnI29tdGVsYWNodGVuJykubGVuZ3RoKVxyXG4gICAvLyBpZiAoIGFuZ3VsYXIuZWxlbWVudCggJ0gxJykubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nICgnXFwndCBJcyBuaSBvbSB0ZSBsYWNodGVuJylcclxuICAgICAgIHZhciBlbGVtZW50TmFtZSA9ICdwcm0tcmVxdWVzdHMtb3ZlcnZpZXcnXHJcbiAgICAgICAvL2xldCBlbGVtZW50ID0gJGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnROYW1lKSk7XHJcbiAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICBsZXQgZWxlbWVudFNjb3BlID0gZWxlbWVudC5zY29wZSgpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyAoZWxlbWVudFNjb3BlKVxyXG4gICAgICAgICB0aGlzLiRjb21waWxlKGVsZW1lbnQpKGVsZW1lbnRTY29wZSk7XHJcbiAgICAgICAgIC8vZWxlbWVudFNjb3BlLiRhcHBseSgpXHJcbiAgICAgICB9ICAgICBcclxuICAvLyAgIH1cclxuICAgIH1cclxufVxyXG5cclxuRXhwZXJpbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgICckdGVtcGxhdGVDYWNoZScsICckY29tcGlsZScsJyRpbmplY3RvcicsJyRyb290U2NvcGUnLCckdHJhbnNsYXRlJywgJyR3aW5kb3cnXVxyXG5cclxuZXhwb3J0IGxldCBleHBlcmltZW50Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEV4cGVyaW1lbnRDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsIlxyXG5jbGFzcyBSZW1vdmVBbGVydHNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICAkdHJhbnNsYXRlLCAkZWxlbWVudCwgJHRlbXBsYXRlQ2FjaGUpIHtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB2YXIgbG9jYWxlID0gXCJlbl9VU1wiXHJcbiAgICAgICAgbG9jYWxlID0gc2NvcGUuJHJvb3QuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL3NhdmVkUXVlcmllcy9hZGRBbGVydFRvYXN0L2FkZC1hbGVydC10b2FzdC5odG1sJyxgXHJcbiAgICAgICAgPG1kLXRvYXN0IG5nLWNsYXNzPVwie1xcJ21vYmlsZS1kZWZpbmVcXCc6JGN0cmwuZGV0ZWN0TW9iaWxlKCksXFwnbGF5b3V0LWNvbHVtblxcJzokY3RybC5kZXRlY3RNb2JpbGUoKX1cIiBjbGFzcz1cIm1kLXRvYXN0LWNvbnRlbnRcIj5cclxuICAgIDxkaXYgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibWQtdG9hc3QtY29udGVudFwiIG5nLWNsYXNzPVwie1xcJ2VuZC1jb250ZW50XFwnOiEkY3RybC5kZXRlY3RNb2JpbGUoKX1cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kLXRvYXN0LXRleHRcIj5cclxuICAgICAgICAgICAgPHNwYW4gbmctaWY9XCIhJGN0cmwuYWRkTW9kZVwiIHRyYW5zbGF0ZT1cIm51aS5mYXZvcml0ZXMuc2VhcmNoLmFsZXJ0Lm1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIG5nLWlmPVwiJGN0cmwuYWRkTW9kZVwiIHRyYW5zbGF0ZT1cIm51aS5zYXZlc2VhcmNoLm1lc3NhZ2UuZGVzY3JpcHRpb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgbmctaWY9XCIhJGN0cmwuYWRkTW9kZVwiPnt7JGN0cmwuZW1haWx9fTwvc3Ryb25nPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJzdGFydCBzdGFydFwiIGNsYXNzPVwibWQtdG9hc3QtY29udGVudFwiIG5nLWNsYXNzPVwie1xcJ3N0YXJ0LWNvbnRlbnRcXCc6ISRjdHJsLmRldGVjdE1vYmlsZSgpfVwiPlxyXG4gICAgICAgIDxtZC1idXR0b24gbmctY2xpY2s9XCIkY3RybC5vbkRpc21pc3MoKVwiIGFyaWEtbGFiZWw9XCJ7ezo6KFxcJ251aS5tZXNzYWdlLmRpc21pc3NcXCcgfCB0cmFuc2xhdGUpfX0gXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmctc2NvcGVcIiB0cmFuc2xhdGU9XCJudWkubWVzc2FnZS5kaXNtaXNzXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvbWQtdG9hc3Q+XHJcbjxwcm0tYWRkLWFsZXJ0LXRvYXN0LWFmdGVyIHBhcmVudC1jdHJsPVwiJGN0cmxcIj48L3BybS1hZGQtYWxlcnQtdG9hc3QtYWZ0ZXI+XHJcbiAgICAgICAgYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlbW92ZUFsZXJ0c0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyR0cmFuc2xhdGUnLCAnJGVsZW1lbnQnLCAnJHRlbXBsYXRlQ2FjaGUnIF1cclxuXHJcbmV4cG9ydCBsZXQgcmVtb3ZlQWxlcnRzQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBSZW1vdmVBbGVydHNDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6ICc8c3R5bGU+bWQtdGVtcGxhdGUgcHJtLWFkZC1hbGVydC10b2FzdCBtZC10b2FzdCAqW2FyaWEtbGFiZWw9XCJ7e1xcJ251aS5hcmlhLnNhdmVkUXVlcmllc0xpc3QuYWxlcnRcXCcgfCB0cmFuc2xhdGV9fVwiXSB7ICBkaXNwbGF5OiBub25lOyB9PC9zdHlsZT4nXHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaFRpcEhUTUwgZnJvbSAnLi9zZWFyY2hUaXAuaHRtbCdcclxuaW1wb3J0IHRpcF9lblVTX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvZW5VUy5odG1sJ1xyXG5pbXBvcnQgdGlwX2ZyRlJfSFRNTCBmcm9tICcuL3NlYXJjaFRpcC9mckZSLmh0bWwnXHJcbmltcG9ydCB0aXBfbmxCRV9IVE1MIGZyb20gJy4vc2VhcmNoVGlwL25sQkUuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaFRpcENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZykge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7XHJcbiAgICAgIGxldCB2aWQgPSB2aWV3LmNvZGU7XHJcblxyXG4gICAgICBsZXQgbG9jYWxlX3RleHQgPSB7XHJcbiAgICAgICAgJ25sX0JFJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ1pvZWt0aXBzJyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiWm9la3RpcHMgd2VlcmdldmVuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgICdlbl9VUyc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdTZWFyY2ggVGlwcycsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIlNlYXJjaCBUaXBzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgICdmcl9GUic6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdBc3R1Y2VzPycsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIkFzdHVjZXM/XCJcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdGlwc0hUTUwgPSB0aXBfZW5VU19IVE1MO1xyXG4gICAgICBzd2l0Y2ggKGxvY2FsZSkge1xyXG4gICAgICAgIGNhc2UgJ2ZyX0ZSJzpcclxuICAgICAgICAgIHRpcHNIVE1MID0gdGlwX2ZyRlJfSFRNTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25sX0JFJzpcclxuICAgICAgICAgIHRpcHNIVE1MID0gdGlwX25sQkVfSFRNTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9lblVTX0hUTUw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRzY29wZS50aXRsZSA9IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ3RpdGxlJ107XHJcbiAgICAgICRzY29wZS50aXRsZV9sYWJlbCA9IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ3RpdGxlX2xhYmVsJ107XHJcblxyXG4gICAgICAkc2NvcGUuc2hvd1NlYXJjaFRpcHMgPSBmdW5jdGlvbigkZXZlbnQpIHtcclxuICAgICAgICBsZXQgcGFyZW50RWwgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnRFbCxcclxuICAgICAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogdGlwc0hUTUwsXHJcbiAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgaXRlbXM6ICRzY29wZS5pdGVtc1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXJcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gRGlhbG9nQ29udHJvbGxlcigkc2NvcGUsICRtZERpYWxvZywgaXRlbXMpIHtcclxuICAgICAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICAkc2NvcGUuY2xvc2VEaWFsb2cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblNlYXJjaFRpcENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyRtZERpYWxvZyddXHJcblxyXG5leHBvcnQgbGV0IHNlYXJjaFRpcENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBTZWFyY2hUaXBDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBzZWFyY2hUaXBIVE1MXHJcbn1cclxuIiwiXHJcbmNsYXNzIFN0YXRpY0Zvb3RlckNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJG1kRGlhbG9nLCAkZWxlbWVudCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIGxvY2FsZSA9IFwiZW5fVVNcIlxyXG5cclxuICAgICAgICB2YXIgdmlld1dpdGhDdXN0b21Gb290ZXIgPSBbJ0xpcmlhcycsJ3dlcmVsZHdpanplcicsJ0VDQiddXHJcbi8qXHJcbiAgICAgICAgY29uc29sZS5sb2cgKHNlbGYgKVxyXG4gICAgICAgIGNvbnNvbGUubG9nIChzY29wZSApXHJcbiAgICAgICAgY29uc29sZS5sb2cgKHNjb3BlLiRyb290LiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UgKVxyXG4qL1xyXG4gICAgICAgIGxvY2FsZSA9IHNjb3BlLiRyb290LiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIHZhciB2aWQgPSB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcclxuICAgICAgIC8vICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChzdGF0aWNGb290ZXJUZW1wbGF0ZU5hbWUsICdjdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2h0bWwvdGVtcGxhdGVzL2Zvb3Rlcl8nICsgbG9jYWxlICsgJy5odG1sJyk7XHJcbiovXHJcbiAgICAgICAgdmFyIHZpZCA9IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZVVybCA9ICdjdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2h0bWwvdGVtcGxhdGVzL2Zvb3Rlcl8nICsgbG9jYWxlICsgJy5odG1sJztcclxuICAgICAgICBpZiAoIHZpZXdXaXRoQ3VzdG9tRm9vdGVyLmluY2x1ZGVzKHZpZCkgKSAge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybCA9ICdjdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2h0bWwvdGVtcGxhdGVzL2Zvb3Rlcl8nICsgdmlkICsgJ18nICsgbG9jYWxlICsgJy5odG1sJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRzY29wZS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlVXJsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuU3RhdGljRm9vdGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJywgJyRlbGVtZW50J11cclxuXHJcbmV4cG9ydCBsZXQgc3RhdGljRm9vdGVyQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBTdGF0aWNGb290ZXJDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6ICc8bmctaW5jbHVkZSBzcmM9XCJnZXRUZW1wbGF0ZVVybCgpXCIvPicsXHJcbn1cclxuIiwiaW1wb3J0IHNvdXJjZUljb25IVE1MIGZyb20gJy4vc291cmNlSWNvbi5odG1sJ1xyXG5cclxuY2xhc3MgU291cmNlSWNvbkNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgcGFyZW50Q3RybCA9ICRzY29wZS4kcGFyZW50LiRjdHJsLnBhcmVudEN0cmw7XHJcbiAgICB2YXIgaWNvbkNvbmYgPSBbe1xyXG4gICAgICAnc291cmNlaWQnOiAnbGlyaWFzJyxcclxuICAgICAgJ2ljb25VcmwnOiAnLy9saW1vLmxpYmlzLmJlL3ByaW1vX2xpYnJhcnkvbGlid2ViL2xpYmlzL2ltYWdlcy9saXJpYXMuanBnJyxcclxuICAgICAgJ2ljb25UZXh0JzogJ0xpcmlhcydcclxuICAgIH1dO1xyXG5cclxuICAgIHZhciBpY29uQ29uZlNvdXJjZXMgPSBpY29uQ29uZi5tYXAob2JqID0+IG9iai5zb3VyY2VpZCk7XHJcblxyXG4gICAgc2VsZi5zb3VyY2VpZCA9IG51bGw7XHJcbiAgICBpZiAoJ3NvdXJjZWlkJyBpbiBwYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wpIHtcclxuICAgICAgc2VsZi5zb3VyY2VpZCA9IHBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5zb3VyY2VpZFswXTtcclxuXHJcbiAgICAgIGlmIChpY29uQ29uZlNvdXJjZXMuaW5jbHVkZXMoc2VsZi5zb3VyY2VpZCkpIHtcclxuICAgICAgICBzZWxmLmljb24gPSBpY29uQ29uZi5maW5kKGZ1bmN0aW9uKHgpIHtcclxuICAgICAgICAgIHJldHVybiB4LnNvdXJjZWlkID09PSBzZWxmLnNvdXJjZWlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnZGl2JykuYXBwZW5kKCRjb21waWxlKHNvdXJjZUljb25IVE1MKSgkc2NvcGUpKTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5Tb3VyY2VJY29uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgc291cmNlSWNvbkNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBTb3VyY2VJY29uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgcGF5TXlGaW5lc0hUTUwgZnJvbSAnLi9wYXlNeUZpbmVzLmh0bWwnXHJcblxyXG5jbGFzcyBQYXlNeUZpbmVzQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLnNob3dQYXlNeUZpbmVzID0gZmFsc2U7ICBcclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGlmICgvXktVTGV1dmVuLy50ZXN0KHZpZXcuY29kZSkpIHtcclxuICAgICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICBpZiAodXNlci5maW5lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1BheU15RmluZXMgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IHBheU15RmluZXNDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6e1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBQYXlNeUZpbmVzQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogcGF5TXlGaW5lc0hUTUxcclxufVxyXG4iLCJpbXBvcnQgYmV0YVN3aXRjaEhUTUwgZnJvbSAnLi9iZXRhU3dpdGNoLmh0bWwnXHJcblxyXG5jbGFzcyBCZXRhU3dpdGNoQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuXHJcbiAgICAkc2NvcGUuc2hvd0JldGFTd2l0Y2ggPSB0cnVlO1xyXG4gICAgJHNjb3BlLnVzZUJldGEgPSB0cnVlOyAgXHJcblxyXG4gICAgJHNjb3BlLm9uQ2hhbmdlVXNlQmV0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCEgJHNjb3BlLnVzZUJldGEpe1xyXG4gICAgICAgIHNlbGYuZ29Ub09sZFVJKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnb1RvT2xkVUkoKSB7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPScvcHJpbW9fbGlicmFyeS9saWJ3ZWIvYWN0aW9uL3NlYXJjaC5kbz92aWQ9JysgdGhpcy5vbGRWaWQ7XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgdmFyIExpbmtUb0JldGFWaWV3cyA9IHtcclxuICAgICAgJ0FDVic6J0FDVicsXHJcbiAgICAgICdCUEInOidCUEInLFxyXG4gICAgICAnRkFSTyc6J0ZBUk8nLFxyXG4gICAgICAnRk9ERklOJzonRk9ERklOJyAsXHJcbiAgICAgICdHQ0xEJzonR0NMRCcsXHJcbiAgICAgICdHU0InOidHU0InLFxyXG4gICAgICAnR1NHJzonR1NHJyxcclxuICAgICAgJ0lNRUMnOidJTUVDJyxcclxuICAgICAgJ0tBRE9DJzonS0FET0MnLFxyXG4gICAgICAnS0JDJzonS0JDJyxcclxuICAgICAgJ0tNS0cnOidLTUtHJyxcclxuICAgICAgJ0tVTGV1dmVuJzonS1VMZXV2ZW5fVVgnLFxyXG4gICAgICAnTElCQVInOidMSUJBUicsXHJcbiAgICAgICdMVUNBJzonTFVDQV9VWCcsXHJcbiAgICAgICdOQkInOidOQkInLFxyXG4gICAgICAnT0RJU0VFJzonT0RJU0VFX1VYJyxcclxuICAgICAgJ09GTyc6J09GTycsXHJcbiAgICAgICdSQklOUyc6J1JCSU5TJyxcclxuICAgICAgJ1JFTEknOidSRUxJJyxcclxuICAgICAgJ1JNQ0EnOidSTUNBJyxcclxuICAgICAgJ1NFUlYnOidTRVJWJyxcclxuICAgICAgJ1RNT1JFSyc6J1RNT1JFS19VWCcsXHJcbiAgICAgICdUTU9SRU0nOidUTU9SRU1BX1VYJyxcclxuICAgICAgJ1ZESUMnOidWRElDJyxcclxuICAgICAgJ1ZJVkVTX0tBVEhPJzonVklWRVNfS0FUSE9fVVgnLFxyXG4gICAgICAnVklWRVNfS0hCTyc6J1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnVkxQJzonVkxQJyxcclxuICAgICAgJ0tVTGV1dmVuX1RNT1JFTSc6J0tVTGV1dmVuX1RNT1JFTV9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9VQ0xMJzonS1VMZXV2ZW5fVUNMTF9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9UTU9SRUsnOidLVUxldXZlbl9UTU9SRUtfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fTFVDQSc6J0tVTGV1dmVuX0xVQ0FfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fVklWRVNfS0hCTyc6J0tVTGV1dmVuX1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fT0RJU0VFJzonS1VMZXV2ZW5fT0RJU0VFX1VYJyxcclxuICAgICAgJ0tITElNJzonVUNMTF9MSU1CVVJHX1VYJyxcclxuICAgICAgJ0tITCc6J1VDTExfTEVVVkVOX1VYJ1xyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eRUNCLy50ZXN0KHZpZXcuY29kZSkpIHtcclxuICAgICAgICB0aGlzLnNob3dCZXRhU3dpdGNoID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbGRWaWQgPSBPYmplY3Qua2V5cyhMaW5rVG9CZXRhVmlld3MpLmZpbmQoa2V5ID0+IExpbmtUb0JldGFWaWV3c1trZXldID09PSB2aWV3LmNvZGUpIHx8IHZpZXcuY29kZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYmV0YVN3aXRjaENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBCZXRhU3dpdGNoQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogYmV0YVN3aXRjaEhUTUxcclxufVxyXG4iLCJpbXBvcnQgaG9tZUljb25IVE1MIGZyb20gJy4vaG9tZUljb24uaHRtbCdcclxuXHJcbmNsYXNzIEhvbWVJY29uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgc2VsZi5saW5rdHlwZSA9ICdob21lSWNvbic7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKCh2aWV3KSA9PiB7XHJcbiAgICAgIGxldCB2aWQgPSB2aWV3LmNvZGU7XHJcbiAgICAgIGlmICh2aWQgPT0gXCJFQ0JcIikge1xyXG4gICAgICAgIHNlbGYubGlua3R5cGUgPSBcIm5ld1NlYXJjaEJ1dHRvblwiO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlOyAvL3dpbmRvdy5Qcmltby5leHBsb3JlLmhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuICAgICAgbGV0IGxvY2FsZUxpYnJhcnlMb2dvID0gJ2N1c3RvbS8nICsgdmlkICsgJy9pbWcvbGlicmFyeS1sb2dvLScgKyBsb2NhbGUgKyAnLnBuZyc7XHJcblxyXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgJGNvbXBpbGUoJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkpKCRzY29wZSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcclxuXHJcbiAgICAgICRzY29wZS5yZW1vdmVTdGlja3lGYWNldHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZhY2V0cyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldCcpO1xyXG4gICAgICAgIGlmIChmYWNldHMpIHtcclxuICAgICAgICAgIHZhciBzdGlja3lGYWNldHMgPSBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5nZXRTdGlja3lGYWNldHMoKVxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGlja3lGYWNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UucmVtb3ZlU3RpY2t5RmFjZXQoc3RpY2t5RmFjZXRzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuSG9tZUljb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICckY29tcGlsZScsICckaHR0cCcsICckcm9vdFNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGhvbWVJY29uQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEhvbWVJY29uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogaG9tZUljb25IVE1MXHJcbn0iLCJpbXBvcnQgZmVlZGJhY2tIVE1MIGZyb20gJy4vZmVlZGJhY2suaHRtbCdcclxuaW1wb3J0IGZlZWRiYWNrRGlhbG9nSFRNTCBmcm9tICcuL2ZlZWRiYWNrRGlhbG9nLmh0bWwnXHJcblxyXG5jbGFzcyBGZWVkYmFja0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRlbGVtZW50LCAkY29tcGlsZSwgJHNjb3BlLCBGZWVkYmFja1NlcnZpY2Upe1xyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnZGl2JykuYXBwZW5kKCRjb21waWxlKGZlZWRiYWNrSFRNTCkoJHNjb3BlKSk7XHJcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZSA9IEZlZWRiYWNrU2VydmljZTtcclxuICB9XHJcblxyXG4gIHNob3dGZWVkYmFja0Zvcm0oJGV2ZW50KSB7XHJcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zaG93KCRldmVudCwgZmVlZGJhY2tEaWFsb2dIVE1MKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5GZWVkYmFja0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJ0ZlZWRiYWNrU2VydmljZSddO1xyXG5cclxuZXhwb3J0IGxldCBmZWVkYmFja0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBGZWVkYmFja0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IHByb21vdGVMb2dpbkhUTUwgZnJvbSAnLi9wcm9tb3RlTG9naW5Db25maWcuaHRtbCdcclxuXHJcbmNsYXNzIFByb21vdGVMb2dpbkNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5zaG93QXV0b21hdGljTG9naW4gPSBmYWxzZTsgIFxyXG4vKiBSZW1vdmUgdGhlIGxvY2FsU3RvcmFnZSBwYXJhbWV0ZXIgcHJpbW9Qcm9tb3RlTG9naW4gaWYgdGhlIHVybCBjb250YWlucyBjbGVhckxvZ2luICovXHJcbiAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB2YXIgdXJsUGFyYW0gPSBcImNsZWFyTG9naW5cIjtcclxuICAgIHVybFBhcmFtID0gdXJsUGFyYW0ucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgdXJsUGFyYW0gKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxyXG4gICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuICAgIGlmIChyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIGlmIChkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94ID0gZmFsc2U7XHJcbiAgICBzZWxmLmFsd2F5c1NpZ25pbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJpbW9Qcm9tb3RlTG9naW5cIik7XHJcbiAgICBpZiAoc2VsZi5hbHdheXNTaWduaW4pIHtcclxuICAgICAgc2VsZi5hbHdheXNTaWduaW5DaGVja0JveCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmFsd2F5c1NpZ25pbkNoZWNrZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKCBzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94ICl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJywgJ2Fsd2F5c1NpZ25pbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcmltb1Byb21vdGVMb2dpbicpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eS1VMZXV2ZW4vLnRlc3Qodmlldy5jb2RlKSkge1xyXG4gICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgIHRoaXMuc2hvd0F1dG9tYXRpY0xvZ2luID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNob3dBdXRvbWF0aWNMb2dpbiA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHByb21vdGVMb2dpbkNvbmZpZyA9IHtcclxuICBiaW5kaW5nczp7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFByb21vdGVMb2dpbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHByb21vdGVMb2dpbkhUTUxcclxufVxyXG4iLCIvKiBjb21wb25lbnQgdG8gZG8gYWxsIHlvdXIgZXhwZXJpbWVudGFsIHN0dWZmICovXHJcbi8qIFtlbnxkaXNdYWJsZSBpbiBjb21wb25lbnRzICovXHJcblxyXG5jbGFzcyBSZWNvbW1lbmRhdGlvbkl0ZW1Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcclxuLypcclxuICAgIGNvbnNvbGUubG9nKHNlbGYpXHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLmNvbmZpZ3VyYXRpb25VdGlsLnZpZCApO1xyXG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnZpZCApO1xyXG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmluc3QgKTtcclxuICAgIGNvbnNvbGUubG9nKCBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS51c2VySW5zdGl0dXRpb24gKTtcclxuKi9cclxuICAgIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLm9yZ0dldExpbmsgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5nZXRMaW5rO1xyXG4gICAgdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZ2V0TGluayA9IGZ1bmN0aW9uKCkgeyBcclxuICAgICAgdmFyIGdldEl0TGluayA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLm9yZ0dldExpbmsoKTtcclxuICAgICAgcmV0dXJuIGdldEl0TGluay5yZXBsYWNlKC9cXC9vcGVudXJsXFwvW14vXSpcXC9bXj9dKi8sIFwiL29wZW51cmxcXC9cIisgc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudXNlckluc3RpdHV0aW9uICtcIlxcL1wiKyBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UuY29uZmlndXJhdGlvblV0aWwudmlkKSBcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5SZWNvbW1lbmRhdGlvbkl0ZW1Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCddXHJcblxyXG5leHBvcnQgbGV0IHJlY29tbWVuZGF0aW9uSXRlbUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBSZWNvbW1lbmRhdGlvbkl0ZW1Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCBpbGxSZXF1ZXN0Rm9ybUhUTUwgZnJvbSAnLi9pbGxSZXF1ZXN0Rm9ybS5odG1sJ1xyXG5cclxuY2xhc3MgaWxsUmVxdWVzdEZvcm1Db250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRyYW5zbGF0ZSwgJHdpbmRvdywgJHJvb3RTY29wZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHRoaXMucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICAgICAgdGhpcy53aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIHRoaXMuaWxsUmVxdWVzdFVybCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2hvd0xpbmtUb0lsbFJlcXVlc3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluc3RpdHV0aW9uQ29kZSA9IFwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgICRvbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnJlcXVlc3RzU2VydmljZS5hY2NvdW50U2VydmljZS5saW5rZWRVc2VyU2VsZWN0b3JTZXJ2aWNlLnNlbGVjdGVkSW5zdGl0dXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0aXR1dGlvbkNvZGUgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5yZXF1ZXN0c1NlcnZpY2UuYWNjb3VudFNlcnZpY2UubGlua2VkVXNlclNlbGVjdG9yU2VydmljZS5zZWxlY3RlZEluc3RpdHV0aW9uLmluc3RpdHV0aW9uQ29kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYWxtYV9jb2RlcyA9IHRoaXMucm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UubWFwcGluZ1RhYmxlc0NhY2hlLk1BUFBJTkdfVEFCTEVTX0NBQ0hFW1wiQWxtYSBJbnN0aXR1dGlvbiBDb2Rlc1wiXTtcclxuICAgICAgICAgICAgdmFyIHVzZXJfaW5zdCA9IHRoaXMucm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudXNlckluc3RpdHV0aW9uO1xyXG4gICAgICAgICAgICB2YXIgYWxtYV9jb2RlID0gYWxtYV9jb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLnRhcmdldCA9PSB1c2VyX2luc3Q7IH0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyAoYWxtYV9jb2RlWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0aXR1dGlvbkNvZGUgPSBhbG1hX2NvZGVbMF0uc291cmNlMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnaW5zdGl0dXRpb25Db2RlOicgKyBpbnN0aXR1dGlvbkNvZGUpXHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGl0dXRpb25Db2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpbmtUb0lsbFJlcXVlc3QgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b0lsbFJlcXVlc3RVcmwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGl0dXRpb25Db2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpbmtUb0lsbFJlcXVlc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnaHR0cHM6Ly9sZXV2ZW4tcHJpbW8uaG9zdGVkLmV4bGlicmlzZ3JvdXAuY29tL3Bkcz9mdW5jPXNzbyZ1cmw9aHR0cDovL2V1LmFsbWEuZXhsaWJyaXNncm91cC5jb20vdmlldy91cmVzb2x2ZXIvJyArIHRoaXMuaW5zdGl0dXRpb25Db2RlICsgJy9vcGVudXJsP3N2Y19kYXQ9Z2V0aXQmc3ZjLnByb2ZpbGU9Z2V0aXQmZGlyZWN0UmVzb3VyY2VTaGFyaW5nUmVxdWVzdD10cnVlJm5ld1VJPXRydWUnXHJcbiAgICAgICAgICAgIHRoaXMud2luZG93Lm9wZW4odGhpcy5pbGxSZXF1ZXN0VXJsLCAnX2ZyZWVJbGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuaWxsUmVxdWVzdEZvcm1Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckdHJhbnNsYXRlJywgJyR3aW5kb3cnLCckcm9vdFNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGlsbFJlcXVlc3RGb3JtQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBpbGxSZXF1ZXN0Rm9ybUNvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogaWxsUmVxdWVzdEZvcm1IVE1MXHJcbn1cclxuIiwiaW1wb3J0IHBueFhtbEhUTUwgZnJvbSAnLi9wbnhYbWwuaHRtbCdcclxuY2xhc3MgUG54WG1sQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnJlY29yZGlkID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy5yZWNvcmRpZCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKGhvdGtleXMpIHtcclxuICAgICAgaG90a2V5cyhcImN0cmwrZW50ZXJcIiwgKGUpID0+IHtcclxuICAgICAgICBzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcclxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYudmlzaWJsZSA/ICdmbGV4JyA6ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwbnhYbWxDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUG54WG1sQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogcG54WG1sSFRNTFxyXG59XHJcbiIsImltcG9ydCByZXBvcnRBUHJvYmxlbUhUTUwgZnJvbSAnLi9yZXBvcnRBUHJvYmxlbS5odG1sJ1xyXG5pbXBvcnQgcmVwb3J0QVByb2JsZW1EaWFsb2dIVE1MIGZyb20gJy4vcmVwb3J0QVByb2JsZW1EaWFsb2cuaHRtbCdcclxuXHJcbmNsYXNzIFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdCh0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC50aXRsZSkpIHtcclxuICAgICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnaDQnKS5hZnRlcigkY29tcGlsZShyZXBvcnRBUHJvYmxlbUhUTUwpKCRzY29wZSkpO1xyXG5cclxuICAgICAgbGV0IHJlY29yZERhdGEgPSBzZWxmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgIHNlbGYuc2hvd1JlcG9ydEFQcm9ibGVtRm9ybSA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxyXG4gICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVwb3J0QVByb2JsZW1EaWFsb2dIVE1MLFxyXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJG1kRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucmVwb3J0ID0ge1xyXG4gICAgICAgICAgICAgICAgICByZXBseVRvOiBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICBzdWJqZWN0OiAncmVwb3J0IGEgcHJvYmxlbSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxSZXBvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbmRSZXBvcnQgPSBmdW5jdGlvbihhbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wucmVjb3JkaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzY29wZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFR5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25JZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0YWI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZWNvcmREYXRhLnBueC5kaXNwbGF5LnRpdGxlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZXNvdXJjZV9wcm9ibGVtJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAkc2NvcGUucmVwb3J0LnN1YmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAkc2NvcGUucmVwb3J0Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlUbzogJHNjb3BlLnJlcG9ydC5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yZXBvcnQucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5yZXBvcnQubWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9yZXBvcnRfYV9wcm9ibGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLmZhaWwnKSB8fCAnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfTsgLy9zaG93UmVwb3J0QVByb2JsZW1Gb3JtXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRSZWNvcmQoKSB7XHJcbiAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXHJcbiAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50Q3RybCk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Q3RybC5pdGVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5SZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckaHR0cCddO1xyXG5cclxuZXhwb3J0IGxldCByZXBvcnRBUHJvYmxlbUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBSZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiY2xhc3MgQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coJycsICRzY29wZSk7XHJcbiAgfVxyXG59XHJcblxyXG5Bbm5vdW5jZW1lbnRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgYW5ub3VuY2VtZW50c0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGZlZWRiYWNrQW5ub3VuY2VtZW50SFRNTCBmcm9tICcuL2ZlZWRiYWNrQW5ub3VuY2VtZW50Lmh0bWwnXHJcbmltcG9ydCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0hUTUwgZnJvbSAnLi9mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZy5odG1sJ1xyXG5pbXBvcnQgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyIGZyb20gJy4vZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2cnXHJcblxyXG5jbGFzcyBGZWVkYmFja0Fubm91bmNlbWVudENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRyYW5zbGF0ZSwgJHRpbWVvdXQsIEZlZWRiYWNrU2VydmljZSwgTWVzc2FnZVNlcnZpY2UsIGFjdGlvbkljb25zKSB7XHJcblxyXG4gICAgLy8kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vbGV0IG1lc3NhZ2UgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuc3VydmV5LmFubm91bmNlbWVudCcpO1xyXG4gICAgICBsZXQgc2hvd0ZlZWRiYWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByaW1vRmVlZGJhY2snKTtcclxuICAgICAgaWYgKHNob3dGZWVkYmFjayA9PSBudWxsKSB7XHJcbiAgICAgICAgJHRyYW5zbGF0ZSgnbGJzLm51aS5zdXJ2ZXkuYW5ub3VuY2VtZW50JykudGhlbigobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhmZWVkYmFja0Fubm91bmNlbWVudEhUTUwucmVwbGFjZSgne3ttZXNzYWdlfX0nLCBtZXNzYWdlKSwge1xyXG4gICAgICAgICAgICBzY29wZTogJHNjb3BlLFxyXG4gICAgICAgICAgICBoaWRlRGVsYXk6IDAsXHJcbiAgICAgICAgICAgIGFjdGlvbkxhYmVsOiAkdHJhbnNsYXRlLmluc3RhbnQoJ21haW5tZW51LmxhYmVsLmZlZWRiYWNrJykgfHwgJ0ZlZWRiYWNrJyxcclxuICAgICAgICAgICAgYWN0aW9uOlxyXG4gICAgICAgICAgICAgICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIEZlZWRiYWNrU2VydmljZS5zaG93KCRldmVudCwgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dIVE1MLCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAvL30sIDIwMDApO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbkZlZWRiYWNrQW5ub3VuY2VtZW50Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCcsICdGZWVkYmFja1NlcnZpY2UnLCAnTWVzc2FnZVNlcnZpY2UnLCAnYWN0aW9uSWNvbnMnXTtcclxuXHJcbmV4cG9ydCBsZXQgZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmVlZGJhY2tBbm5vdW5jZW1lbnRDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkbWREaWFsb2csICRtZFRvYXN0LCAkdHJhbnNsYXRlLCAkaHR0cCwgZmVlZGJhY2tTZXJ2aWNlVVJMLCBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5zY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XHJcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgIHRoaXMuaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwgPSBmZWVkYmFja1NlcnZpY2VVUkw7XHJcblxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICRzY29wZS5jYW5jZWxGZWVkYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5tZERpYWxvZy5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gKGFuc3dlcikgPT4ge1xyXG4gICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICBzdWJqZWN0OiAkc2NvcGUuZmVlZGJhY2suc3ViamVjdCxcclxuICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcclxuICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcclxuICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXHJcbiAgICAgICAgdHlwZTogJ3N1cnZleScsXHJcbiAgICAgICAgZmVlZGJhY2s6ICRzY29wZS5mZWVkYmFjay5hbnN3ZXJzLFxyXG4gICAgICAgIGVtYWlsOiAkc2NvcGUuZmVlZGJhY2sucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgdXNlcklkOiBzZWxmLnVzZXIuaWQgfHwgJycsXHJcbiAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNlbGYubWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICBzZWxmLmh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICB1cmw6IHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9GZWVkYmFjaycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrISc7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLic7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcbiAgICAgICAgJHNjb3BlLmZlZWRiYWNrID0ge1xyXG4gICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgYW5zd2VyczogW10sXHJcbiAgICAgICAgICBzdWJqZWN0OiAnZmVlZGJhY2snXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJHRyYW5zbGF0ZScsICckaHR0cCcsICdmZWVkYmFja1NlcnZpY2VVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuIiwiY2xhc3MgRmluZXNNZXNzYWdlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoTWVzc2FnZVNlcnZpY2UsICR0cmFuc2xhdGUsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vVE9ETzpleHRyYWN0IGh0bWwgdG8gaXRzIG93biBmaWxlLiBmaW5kIG91dCBob3cgdG8gcmVzb2x2ZSB7e319XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnlvdUhhdmVGaW5lcycpO1xyXG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xcJDAvLCB1c2VyLmZpbmVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGxldCBwYXkgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkueW91SGF2ZUZpbmVzLnBheScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coYFxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImFsaWduLXNlbGY6Y2VudGVyO1wiPiR7bWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO2NvbG9yOiB3aGl0ZTtcIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtc2VjdW5kYXJ5XCIgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvcGF5X215X2ZpbmVzJz4ke3BheX08L2E+XHJcbiAgICAgICAgICBgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5GaW5lc01lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ01lc3NhZ2VTZXJ2aWNlJywgJyR0cmFuc2xhdGUnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBmaW5lc01lc3NhZ2VDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmluZXNNZXNzYWdlQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJleHBvcnQgbGV0IGZlZWRTZXJ2aWNlID0gWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XHJcbiAgdmFyIGZlZWRBbnRpQ2FjaGUgPSBcIj8mdD1cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcmFuZG9tTnVtO1xyXG4gIHZhciByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCArIDEpO1xyXG4gIHZhciBmZWVkZGF5c29sZCA9IDYwO1xyXG5cclxuICB2YXIgZG0gPSBuZXcgRGF0ZSgpO1xyXG4gIGRtLnNldEhvdXJzKDI0LCAwLCAwLCAwKTtcclxuXHJcbiAgdmFyIGFwaV9lbmRwb2ludCA9ICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRfYWdncmVnYXRvcj8nO1xyXG5cclxuICBmdW5jdGlvbiByZWFkRmVlZENvbmZpZyh1cmwpIHtcclxuICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLUZyb20tRXhMLUFQSS1HYXRld2F5XCI6IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlYWRGZWVkKHVybCkge1xyXG4gICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgdXJsOiBhcGlfZW5kcG9pbnQgKyB1cmwsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIlgtRnJvbS1FeEwtQVBJLUdhdGV3YXlcIjogdW5kZWZpbmVkXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VGZWVkKGNvbmYpIHtcclxuICAgIHJldHVybiByZWFkRmVlZChjb25mLmZlZWRVcmwpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29uZi5mZWVkVXJsKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhjb25mLmZlZWRGaWx0ZXIpO1xyXG4gICAgICB2YXIgcGF0dCA9IC9eZW50cnlcXC58Xml0ZW1cXC4vaTtcclxuICAgICAgdmFyIGZpbHRlcmVkUmVzdWx0cyA9IHJlcy5kYXRhLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHZhciByZXR2YWwgPSBmYWxzZTtcclxuICAgICAgICBpZiAoaXRlbS5wdWJEYXRlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICBpdGVtLnB1YkRhdGUgPSBkbTtcclxuICAgICAgICAgIHJlcy5kYXRhLml0ZW1zW2luZGV4XS5wdWJEYXRlID0gZG07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIG5vIGZpbHRlciBjb25maWd1cmVkICovXHJcbiAgICAgICAgaWYgKGNvbmYuZmVlZEZpbHRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmYuZmVlZEZpbHRlci5mb3JFYWNoKGZ1bmN0aW9uKGYpIHtcclxuICAgICAgICAgIGlmIChwYXR0LnRlc3QoZi5wYXJhbSkpIHtcclxuICAgICAgICAgICAgdmFyIGZmID0gZi5wYXJhbS5yZXBsYWNlKHBhdHQsIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtW2ZmXSkpIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbVtmZl0uaW5kZXhPZihmLnZhbHVlKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW1bZmZdID09IGYudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyogZmlsdGVyIG9sZCBpdGVtcyAqL1xyXG4gICAgICAgIGlmIChmZWVkZGF5c29sZCA8IE1hdGguY2VpbChkbS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShpdGVtLnB1YkRhdGUpLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpIHtcclxuICAgICAgICAgIHJldHZhbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldHZhbDtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZFJlc3VsdHM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNvcnRGZWVkKGZlZWRzKSB7XHJcbiAgICAvL3JldHVybiBmZWVkcy5zb3J0KGNvbXBhcmVEYXRlcyk7XHJcbiAgICByZXR1cm4gZmVlZHMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEucHViRGF0ZSk7XHJcbiAgICAgIHZhciBkYXRlQiA9IG5ldyBEYXRlKGIucHViRGF0ZSk7XHJcbiAgICAgIGlmIChkYXRlQS5nZXRUaW1lKCkgPT09IGRtLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGRhdGVBID0gbmV3IERhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGVCLmdldFRpbWUoKSA9PT0gZG0uZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZSgwKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlYWRGZWVkQ29uZmlnOiByZWFkRmVlZENvbmZpZyxcclxuICAgIHJlYWRGZWVkOiByZWFkRmVlZCxcclxuICAgIHBhcnNlRmVlZDogcGFyc2VGZWVkLFxyXG4gICAgc29ydEZlZWQ6IHNvcnRGZWVkXHJcbiAgfTtcclxufV07XHJcbiIsImltcG9ydCBmZWVkYmFja1NlcnZpY2VIVE1MIGZyb20gJy4vZmVlZGJhY2tTZXJ2aWNlLmh0bWwnXHJcbmltcG9ydCBEaWFsb2dDb250cm9sbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9kaWFsb2cnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVlZGJhY2tTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigkbWREaWFsb2cpIHtcclxuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XHJcbiAgfVxyXG5cclxuICBzaG93KCRldmVudCA9IG51bGwsIGZlZWRiYWNrRGlhbG9nSFRNTCA9IG51bGwsIGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlciA9IG51bGwpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmIChmZWVkYmFja0RpYWxvZ0hUTUwgPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBkaWFsb2cgaW5zdGFudGlhdGVkJyk7XHJcbiAgICAgIGZlZWRiYWNrRGlhbG9nSFRNTCA9IGZlZWRiYWNrU2VydmljZUhUTUw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlciA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IGRpYWxvZyBjb250cm9sbGVyIGluc3RhbnRpYXRlZCcpO1xyXG4gICAgICBmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPSBEaWFsb2dDb250cm9sbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWREaWFsb2cuc2hvdyh7XHJcbiAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxyXG4gICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgdGVtcGxhdGU6IGZlZWRiYWNrRGlhbG9nSFRNTCxcclxuICAgICAgY29udHJvbGxlcjogZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkZlZWRiYWNrU2VydmljZS4kaW5qZWN0ID0gWyckbWREaWFsb2cnXTtcclxuIiwiaW1wb3J0IG1lc3NhZ2VTZXJ2aWNlSFRNTCBmcm9tICcuL21lc3NhZ2VTZXJ2aWNlLmh0bWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJGNvbXBpbGUsICRtZFRvYXN0LCAkc2NlLCAkdHJhbnNsYXRlLCAkdGltZW91dCkge1xyXG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XHJcbiAgICB0aGlzLnNjZSA9ICRzY2U7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgIHRoaXMuY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhtZXNzYWdlID0gJycsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IHNjb3BlID0gb3B0aW9ucy5zY29wZSB8fCBudWxsO1xyXG4gICAgbGV0IGhpZGVEZWxheSA9IG9wdGlvbnMuaGlkZURlbGF5IHx8IDA7XHJcbiAgICBsZXQgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24gfHwgbnVsbDtcclxuICAgIGxldCBhY3Rpb25MYWJlbCA9IG9wdGlvbnMuYWN0aW9uTGFiZWwgfHwgJ3Vua25vd24nO1xyXG5cclxuICAgIHRoaXMudGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoID09IDApIHtcclxuICAgICAgICAvLyBjb2RlIHRhYmxlIGVudHJpZXMgY2FuIG5vdCBoYXZlIGVtcHR5IGRlc2NyaXB0aW9ucy5cclxuICAgICAgICAvLyBtZXNzYWdlIDw9IDEgd2lsbCBub3QgYmUgZGlzcGxheWVkISEhIVxyXG4gICAgICAgIGxldCBtZXNzYWdlS2V5ID0gJ2xicy5nZW5lcmFsTWVzc2FnZSc7XHJcbiAgICAgICAgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQobWVzc2FnZUtleSk7XHJcbiAgICAgICAgbWVzc2FnZSA9IChtZXNzYWdlID09IG1lc3NhZ2VLZXkgfHwgbWVzc2FnZSA8PSAxKSA/ICcnIDogbWVzc2FnZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCB0b2FzdENvbmZpZyA9IHtcclxuICAgICAgICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcclxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnLFxyXG4gICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTGFiZWwgPSBhY3Rpb25MYWJlbDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICBzZWxmLm1kVG9hc3QuaGlkZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgIHRoaXMub25BY3Rpb24gPSAoJGV2ZW50ID0gbnVsbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgICAvL3RoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKHNlbGYuY29tcGlsZShgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKShzZWxmLnJvb3RTY29wZSkuaHRtbCgpKTtcclxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChzZWxmLmNvbXBpbGUoYDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+YCkoc2NvcGUpLmh0bWwoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IG1lc3NhZ2VTZXJ2aWNlSFRNTCxcclxuICAgICAgICAgIHBvc2l0aW9uOiAndG9wIGNlbnRlcicsXHJcbiAgICAgICAgICBoaWRlRGVsYXk6IGhpZGVEZWxheVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZi5tZFRvYXN0LnNob3codG9hc3RDb25maWcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBtZXNzYWdlIHRvIGRpc3BsYXknKTtcclxuICAgICAgfVxyXG4gICAgfSwgMjAwMCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuTWVzc2FnZVNlcnZpY2UuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckY29tcGlsZScsICckbWRUb2FzdCcsICckc2NlJywgJyR0cmFuc2xhdGUnLCAnJHRpbWVvdXQnXTtcclxuIiwiLypcclxuICBDZW50cmFsIFBhY2thZ2UgTG9hZGVyXHJcblxyXG4gIERvIE5PVCBlZGl0IHRoaXMgZmlsZS5cclxuICBBbGwgY29tcG9uZW50cyBhcmUgZGVjbGFyZWQgaW4gXCJjb21wb25lbnRzLmpzXCJcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuaW1wb3J0IFByaW1vIGZyb20gJy4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8nXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlL2hlbHBlcidcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xyXG5cclxuaW1wb3J0IHtmZWVkU2VydmljZX0gZnJvbSAnLi9mYWN0b3JpZXMvZmVlZFNlcnZpY2UnXHJcbmltcG9ydCBNZXNzYWdlU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9tZXNzYWdlU2VydmljZSdcclxuaW1wb3J0IEZlZWRiYWNrU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9mZWVkYmFja1NlcnZpY2UnXHJcblxyXG4vL21ha2UgUHJpbW8gcHVibGljXHJcbndpbmRvdy5QcmltbyA9IFByaW1vO1xyXG4vL2xvYWQgUHJpbW9FeHBsb3JlciBVSSBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBpcyByYW5cclxud2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgaWYgKFByaW1vLmlzRGVidWdFbmFibGVkKCkpIHtcclxuICAgIGxldCB1aVVSTCA9ICdodHRwczovL2Nkbi5yYXdnaXQuY29tL21laG1ldGMvcHJpbW8tZXhwbG9yZS1kb20tdWkvZmMwODY4ZGYvanMvY3VzdG9tLmpzJztcclxuICAgIC8vbGV0IHVpVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9qcy9jdXN0b20uanMnO1xyXG5cclxuICAgIEhlbHBlci5sb2FkU2NyaXB0KHVpVVJMKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0luamVjdGluZyBVSScpO1xyXG4gICAgICBQcmltby5leHBsb3JlLnVpLnRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59LCAyMDAwKTtcclxuXHJcbi8vQ3JlYXRlIHRoZSBjZW50cmFsQ3VzdG9tIG1vZHVsZTtcclxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdjZW50cmFsQ3VzdG9tJyxbJ25nTWF0ZXJpYWwnXSlcclxuICAgICAgICAgICAgICAgICAuY29uc3RhbnQoJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRiYWNrJylcclxuICAgICAgICAgICAgICAgICAuY29uZmlnKCgkc2NlRGVsZWdhdGVQcm92aWRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgJHNjZURlbGVnYXRlUHJvdmlkZXIucmVzb3VyY2VVcmxXaGl0ZWxpc3QoW1xyXG4gICAgICAgICAgICAgICAgICAgICAnKionXHJcbiAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIC5ydW4oKCR0ZW1wbGF0ZUNhY2hlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAvLyR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvZnVsbFZpZXcvZnVsbC12aWV3Lmh0bWwnLCBmdWxsVmlld0hUTUwpO1xyXG4gICAgICAgICAgICAgICAgICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL2hvdGtleXMtanNAMi4wLjgvZGlzdC9ob3RrZXlzLm1pbi5qcycpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hvdGtleXMuanMgbG9hZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgIC5mYWN0b3J5KCdGZWVkU2VydmljZScsIGZlZWRTZXJ2aWNlKVxyXG4gICAgICAgICAgICAgICAgIC5zZXJ2aWNlKCdNZXNzYWdlU2VydmljZScsIE1lc3NhZ2VTZXJ2aWNlKVxyXG4gICAgICAgICAgICAgICAgIC5zZXJ2aWNlKCdGZWVkYmFja1NlcnZpY2UnLCBGZWVkYmFja1NlcnZpY2UpO1xyXG5cclxuXHJcbi8vQ29udGFpbnMgdGhlIGFmdGVyIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIGluamVjdGVkXHJcbmxldCBhZnRlckNvbXBvbmVudHMgPSB7fTtcclxuXHJcbi8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcclxuLy9pbmplY3RlZFxyXG5jb25zb2xlLmxvZygnTG9hZGluZyBjZW50cmFsQ3VzdG9tIGNvbXBvbmVudHMnKTtcclxuQ29tcG9uZW50cy5hbGwuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY29tcG9uZW50Lm5hbWUpXHJcbiAgaWYgKGNvbXBvbmVudC5lbmFibGVkKSB7XHJcbiAgICBpZiAoY29tcG9uZW50LmFwcGVuZFRvKSB7XHJcbiAgICAgIGxldCBlbGVtZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dIHx8IFtdO1xyXG4gICAgICAvL2VsZW1lbnRzLnB1c2goY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgICBlbGVtZW50cy5wdXNoKHsgJ25hbWUnOiBjb21wb25lbnQubmFtZSwgJ2VuYWJsZUluVmlldyc6IGNvbXBvbmVudC5lbmFibGVJblZpZXcgfSk7XHJcbiAgICAgIGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dID0gZWxlbWVudHM7XHJcblxyXG4gICAgfVxyXG4gICAgYXBwLmNvbnN0YW50KCdhZnRlckNvbXBvbmVudHMnLCBhZnRlckNvbXBvbmVudHMpO1xyXG4gICAgYXBwLmNvbXBvbmVudChjb21wb25lbnQubmFtZS50b0NhbWVsQ2FzZSgpLCBjb21wb25lbnQuY29uZmlnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vSW5qZWN0IHBsYWNlIGhvbGRlcnMgaW50byB0aGUgYWZ0ZXIgY29tcG9uZW50c1xyXG5PYmplY3Qua2V5cyhhZnRlckNvbXBvbmVudHMpLmZvckVhY2goKGNvbXBvbmVudCxpKSA9PiB7XHJcbiAgbGV0IHN1YkNvbXBvbmVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50XTtcclxuXHJcbiAgYXBwLmNvbXBvbmVudChjb21wb25lbnQudG9DYW1lbENhc2UoKSwge1xyXG4gICAgYmluZGluZ3M6e1xyXG4gICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogc3ViQ29tcG9uZW50cy5tYXAobSA9PiBgPCR7bS5uYW1lfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke20ubmFtZX0+YCkuam9pbihcIlwiKVxyXG4gIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IEV4cGxvcmUgZnJvbSAnLi9wcmltby9leHBsb3JlJ1xyXG5pbXBvcnQgUmVjb3JkcyBmcm9tICcuL3ByaW1vL3JlY29yZHMnXHJcbmltcG9ydCBGYWNldHMgZnJvbSAnLi9wcmltby9mYWNldHMnXHJcbmltcG9ydCBWaWV3IGZyb20gJy4vcHJpbW8vdmlldydcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9wcmltby91c2VyJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vcHJpbW8vZXhwbG9yZS9oZWxwZXInXHJcblxyXG4vKipcclxuICogUHJpbW8gbWFpbiBlbnRyeSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbW8ge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybiB2ZXJzaW9uIGluZm9ybWF0aW9uXHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcclxuICAgIGxldCBfdmVyc2lvbiA9IFwiMC4wLjEwXCI7XHJcbiAgICByZXR1cm4gYExpYnJhcnk6JHtfdmVyc2lvbn0gLSBQcmltbzoke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fVmVyc2lvbl9OdW1iZXJ9OiR7d2luZG93LmFwcENvbmZpZ1snc3lzdGVtLWNvbmZpZ3VyYXRpb24nXS5Qcmltb19Ib3RGaXhfTnVtYmVyfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBoYXMgcmFuXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gSGVscGVyLmlzRGVidWdFbmFibGVkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaWQgdGhlIHNjcmlwdCByYW4gb24gYSBQcmltbyBzaXRlXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBzdGF0aWMgaXNQcmltb0F2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiBIZWxwZXIuaXNQcmltb0F2YWlsYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIHByb3h5IGNsYXNzXHJcbiAgICogQHJldHVybiB7RXhwbG9yZX1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGV4cGxvcmUoKSB7XHJcbiAgICByZXR1cm4gRXhwbG9yZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIHJlY29yZHNcclxuICAgKiBAcmV0dXJuIHtSZWNvcmRzfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgcmVjb3Jkcygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgUmVjb3Jkcyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cykpO1xyXG4gICAgfSlcclxuICAgIC8vcmV0dXJuIG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIGZhY2V0c1xyXG4gICAqIEByZXR1cm4ge0ZhY2V0c31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGZhY2V0cygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XHJcbiAgICB9KVxyXG4gICAgLy9yZXR1cm4gbmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHZpZXcgcmVsYXRlZCBtZXRhZGF0YVxyXG4gICAqIEByZXR1cm4ge1ZpZXd9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCB2aWV3KCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgVmlldygpKTtcclxuICAgIH0pXHJcbiAgICAvL3JldHVybiBuZXcgVmlldygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byB1c2VyIHJlbGF0ZWQgbWV0YWRhdGFcclxuICAgKiBAcmV0dXJuIHtVc2VyfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdXNlcigpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIEhlbHBlci51c2VyRGV0YWlsc0hUVFAoKS50aGVuKCh1c2VyRGV0YWlscyk9PntcclxuICAgICAgICBIZWxwZXIudXNlckZpbmVzSFRUUCgpLnRoZW4oKHVzZXJGaW5lcykgPT4ge1xyXG4gICAgICAgICAgSGVscGVyLnVzZXJMb2Fuc0hUVFAoKS50aGVuKCh1c2VyTG9hbnMpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKG5ldyBVc2VyKHtkZXRhaWxzOiB1c2VyRGV0YWlscywgZmluZXM6IHVzZXJGaW5lcywgbG9hbnM6IHVzZXJMb2Fuc30pKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuLy90aGlzIGlzIHByb3h5IGNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvcmUge1xyXG4gIHN0YXRpYyBnZXQgY29tcG9uZW50cygpIHtcclxuICAgIGxldCBjID0gbmV3IENvbXBvbmVudHMoKTtcclxuICAgIEhlbHBlci5jb21wb25lbnROYW1lcy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xyXG4gICAgICBjLmFkZChzZWxlY3Rvcik7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBjO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCB1aSgpIHtcclxuICAgIGlmICh0aGlzLl91aSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgaXMgYSBzdHViIGZ1bmN0aW9uIGNhbGwgXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIHRvIGFjdGl2YXRlIFVJJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fdWk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGhlbHBlcigpIHtcclxuICAgIHJldHVybiBIZWxwZXI7XHJcbiAgfVxyXG59XHJcbiIsInZhciBjc3NTZWxlY3RvckdlbmVyYXRvciA9IG5ldyhyZXF1aXJlKCcuLi8uLi92ZW5kb3IvY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcycpKS5Dc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXInXHJcblxyXG5jbGFzcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpe1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJsaW5rKCl7XHJcbiAgICBIZWxwZXIuYmxpbmsodGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgY3NzUGF0aCgpe1xyXG4gICAgcmV0dXJuIGNzc1NlbGVjdG9yR2VuZXJhdG9yLmdldFNlbGVjdG9yKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5sb2NhbE5hbWU7XHJcbiAgfVxyXG5cclxuICBzY29wZSgpe1xyXG4gICAgaWYgKEhlbHBlci5pc0RlYnVnRW5hYmxlZCgpKXtcclxuICAgICAgcmV0dXJuIGFuZ3VsYXIuZWxlbWVudCh0aGlzLmVsZW1lbnQpLnNjb3BlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgcnVuIFwiYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKClcIiBmaXJzdCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3RybCgpe1xyXG4gICAgbGV0IGMgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5jb250cm9sbGVyKHRoaXMubmFtZSk7XHJcbiAgICBpZiAoYykge1xyXG4gICAgICByZXR1cm4gYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2luZyBhbHRlcm5hdGl2ZSBtZXRob2QgdG8gZ2V0IGNvbnRyb2xsZXInKTtcclxuICAgICAgbGV0IHNjb3BlID0gdGhpcy5zY29wZSgpO1xyXG4gICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICBsZXQgc2NvcGVDaGlsZCA9IHNjb3BlLiQkY2hpbGRUYWlsO1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJyRjdHJsJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLiRjdHJsXHJcbiAgICAgICAgfSBlbHNlIGlmKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnY3RybCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZS5jdHJsXHJcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCckY3RybCcpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuJGN0cmw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCdjdHJsJykpe1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC5jdHJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vICRjdHJsIGRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudHMge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICB0aGlzLl9jb21wb25lbnRzID0ge307XHJcbiAgfVxyXG5cclxuICBhZGQoc2VsZWN0b3IpIHtcclxuICAgIGxldCBlbGVtZW50cyA9IEhlbHBlci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgIGxldCBlbGVtZW50c0FycmF5ID0gdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gfHwgW107XHJcblxyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgICAgZWxlbWVudHNBcnJheS5wdXNoKG5ldyBDb21wb25lbnQoZWxlbWVudCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gPSBlbGVtZW50c0FycmF5O1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50c0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0KHNlbGVjdG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIGtleXMoKXtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcclxuICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XHJcbiAgICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYW1lID09PSAnTkdfRU5BQkxFX0RFQlVHX0lORk8hJyB8fCB0eXBlb2YoYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1sb2dvJykpLnNjb3BlKCkpICE9ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1ByaW1vQXZhaWxhYmxlKCkge1xyXG4gICAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mKHdpbmRvdy5hbmd1bGFyKSkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJpbW8tZXhwbG9yZScpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBjb21wb25lbnROYW1lcygpIHtcclxuICAgICAgICBsZXQgdGFncyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSk7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudE5hbWVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGFnIG9mIHRhZ3MpIHtcclxuICAgICAgICAgICAgbGV0IHRhZ05hbWUgPSB0YWcubG9jYWxOYW1lO1xyXG4gICAgICAgICAgICBpZiAoL15wcm0tLy50ZXN0KHRhZ05hbWUpIHx8IC9ecHJpbW8tLy50ZXN0KHRhZ05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWVzLmluY2x1ZGVzKHRhZ05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZXMucHVzaCh0YWdOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50TmFtZXMgPSBjb21wb25lbnROYW1lcy5zb3J0KCkuZmlsdGVyKChlLCBpLCBhKSA9PiBpID09PSBhLmZpbmRJbmRleCgoZTIpID0+IGUgPT09IGUyKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudE5hbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbmplY3RvcigpIHtcclxuICAgICAgbGV0IGMgPSBQcmltby5leHBsb3JlLmNvbXBvbmVudHMuZ2V0KCdwcmltby1leHBsb3JlJyk7XHJcbiAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IHByaW1vRXhwbG9yZSA9IGFuZ3VsYXIuZWxlbWVudChjWzBdLmVsZW1lbnQpO1xyXG4gICAgICAgICAgbGV0IGluamVjdG9yICAgICA9IHByaW1vRXhwbG9yZS5pbmplY3RvcigpO1xyXG4gICAgICAgICAgaWYgKGluamVjdG9yKXtcclxuICAgICAgICAgICAgcmV0dXJuIGluamVjdG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGh0dHAoKSB7XHJcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcclxuICAgICAgaWYgKGluamVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGggPSBpbmplY3Rvci5nZXQoJyRodHRwJyk7XHJcbiAgICAgICAgaWYgKGgpIHtcclxuICAgICAgICAgIHJldHVybiBoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBsb2FkU2NyaXB0KHNjcmlwdFVSTCkge1xyXG4gICAgICBpZiAod2luZG93LmFuZ3VsYXIpIHtcclxuICAgICAgICAgIGxldCBhcHBJbmplY3RvciA9IGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsJ2FuZ3VsYXJMb2FkJ10pO1xyXG4gICAgICAgICAgaWYgKGFwcEluamVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGFuZ3VsYXJMb2FkID0gYXBwSW5qZWN0b3IuZ2V0KCdhbmd1bGFyTG9hZCcpO1xyXG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJMb2FkLmxvYWRTY3JpcHQoc2NyaXB0VVJMKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm9vdFNjb3BlKCkge1xyXG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XHJcbiAgICAgIGlmIChpbmplY3Rvcikge1xyXG4gICAgICAgICAgbGV0IHJvb3RTY29wZSAgICA9IGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgaWYgKHJvb3RTY29wZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9vdFNjb3BlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpIHtcclxuICAgICAgbGV0IHJvb3RTY29wZSA9IHRoaXMucm9vdFNjb3BlKCk7XHJcbiAgICAgIGlmIChyb290U2NvcGUpIHtcclxuICAgICAgICByZXR1cm4gcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqd3REYXRhKCkge1xyXG4gICAgICBsZXQgdVNNUyA9IHRoaXMudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xyXG4gICAgICBpZiAodVNNUykge1xyXG4gICAgICAgIGxldCBqd3REYXRhID0gdVNNUy5qd3RVdGlsU2VydmljZS5nZXREZWNvZGVkVG9rZW4oKSB8fCB7fTtcclxuICAgICAgICByZXR1cm4gand0RGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyRGV0YWlscygpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS4kbG9jYWxGb3JhZ2UuZ2V0SXRlbSgndXNlckRldGFpbHMnKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzSFRUUCgpIHtcclxuICAgICAgbGV0IHZpZXdDb2RlID0gdGhpcy5qd3REYXRhKCkudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoYC9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL3VzZXJzZXR0aW5ncz92aWQ9JHt2aWV3Q29kZX1gKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMuZGF0YSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckZpbmVzSFRUUCgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvZmluZXMnKS50aGVuKHVzZXJGaW5lcyA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJGaW5lcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbmVzID0gZGF0YS5kYXRhLmZpbmVzO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmaW5lcy5maW5lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gZmluZXMnKTtcclxuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJMb2Fuc0hUVFAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2xvYW5zJykudGhlbih1c2VyTG9hbnMgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyTG9hbnMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsb2FucyA9IGRhdGEuZGF0YS5sb2FucztcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobG9hbnMubG9hbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGxvYW5zJyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBibGluayhjb21wb25lbnQsIG51bWJlck9mQmxpbmtzID0gNCkge1xyXG4gICAgICAgIGxldCBpbnRlcnZhbElkID0gbnVsbDtcclxuICAgICAgICBsZXQgYm9yZGVyRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xyXG4gICAgICAgIGxldCBib3JkZXJTZWxlY3RvciA9IGNvbXBvbmVudC5lbGVtZW50LmNzc1BhdGggKyBpbmRleCArICdSZWN0JztcclxuXHJcbiAgICAgICAgbGV0IGNyZWF0ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UmVjdCA9IGNvbXBvbmVudC5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGJvcmRlclNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnRvcCA9IGVsZW1lbnRSZWN0LnRvcCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnRSZWN0LmhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLndpZHRoID0gZWxlbWVudFJlY3Qud2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudFJlY3QubGVmdCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvcmRlckVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJvcmRlclNlbGVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVtb3ZlQm9yZGVyRWxlbWVudCA9ICgpID0+IHtcclxuICAgICAgICAgIGlmIChib3JkZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGJvcmRlckVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmxpbmtCb3JkZXJFbGVtZW50ID0gKG51bWJlck9mQmxpbmtzID0gNCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkJsaW5rcyA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUJvcmRlckVsZW1lbnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICgobnVtYmVyT2ZCbGlua3MgJSAyKSA9PSAwKSA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkJsaW5rcy0tO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChibGlua0JvcmRlckVsZW1lbnQsIDEwMDAsIG51bWJlck9mQmxpbmtzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9yZGVyRWxlbWVudCA9IGNyZWF0ZUJvcmRlckVsZW1lbnQoKTtcclxuICAgICAgICBibGlua0JvcmRlckVsZW1lbnQobnVtYmVyT2ZCbGlua3MpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldHMge1xyXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50cykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZmFjZXRzKGNvbXBvbmVudHMpO1xyXG4gICAgfVxyXG4gICAgX2ZhY2V0cyhjb21wb25lbnRzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldC1hZnRlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCBmYWNldHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZmFjZXRzO1xyXG4gICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGZhY2V0cycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvcmRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zKGNvbXBvbmVudHMpO1xyXG4gICAgfVxyXG4gICAgX2l0ZW1zKGNvbXBvbmVudHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLXNlYXJjaC1yZXN1bHQtbGlzdC1hZnRlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmwoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3RybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5pdGVtbGlzdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJ0cnkgYWdhaW5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IHJlY29yZHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZGF0YTtcclxuICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBpdGVtcycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXIgPSBfc2tlbFVzZXIpIHtcclxuICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgIGxldCBqd3REYXRhID0gSGVscGVyLmp3dERhdGEoKTtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBqd3REYXRhLnVzZXIgfHwgJycsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZGV0YWlscy5lbWFpbCB8fCAnJyxcclxuICAgICAgICBuYW1lOiBqd3REYXRhLnVzZXJOYW1lIHx8ICdHdWVzdCcsXHJcbiAgICAgICAgZGlzcGxheV9uYW1lOiB1U21zLmdldFVzZXJOYW1lRm9yRGlzcGxheSgpLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46ICgpID0+IHVTbXMuZ2V0VXNlck5hbWUoKS5sZW5ndGggPiAwLFxyXG4gICAgICAgIGlzT25DYW1wdXM6ICgpID0+IGp3dERhdGEub25DYW1wdXMgPT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgZmluZXM6IHVzZXIuZmluZXMsXHJcbiAgICAgICAgbG9hbnM6IHVzZXIubG9hbnNcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBfc2tlbFVzZXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkZXRhaWxzOiB7fSxcclxuICAgICAgZmluZXM6IHt9LFxyXG4gICAgICBsb2Fuczoge31cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgbGV0IHVTbXMgPSBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xyXG4gICAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IGp3dERhdGEudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddLFxyXG4gICAgICAgIGluc3RpdHV0aW9uOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IGp3dERhdGEudmlld0luc3RpdHV0aW9uQ29kZSxcclxuICAgICAgICAgICAgbmFtZTogd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmluc3RpdHV0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnRlcmZhY2VMYW5ndWFnZTogdVNtcy5nZXRVc2VyTGFuZ3VhZ2UoKSB8fCB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW50ZXJmYWNlTGFuZ3VhZ2UsXHJcbiAgICAgICAgaXA6IHtcclxuICAgICAgICAgIGFkZHJlc3M6IGp3dERhdGEuaXBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIENzc1NlbGVjdG9yR2VuZXJhdG9yLCByb290LFxyXG4gICAgaW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xyXG5cclxuICBDc3NTZWxlY3RvckdlbmVyYXRvciA9IChmdW5jdGlvbigpIHtcclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5kZWZhdWx0X29wdGlvbnMgPSB7XHJcbiAgICAgIHNlbGVjdG9yczogWydpZCcsICdjbGFzcycsICd0YWcnLCAnbnRoY2hpbGQnXVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBDc3NTZWxlY3RvckdlbmVyYXRvcihvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcclxuICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vcHRpb25zID0ge307XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyh0aGlzLmRlZmF1bHRfb3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIGtleSwgcmVzdWx0cywgdmFsO1xyXG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHMgPSBbXTtcclxuICAgICAgZm9yIChrZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIHZhbCA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0X29wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMub3B0aW9uc1trZXldID0gdmFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuaXNFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gISEoKGVsZW1lbnQgIT0gbnVsbCA/IGVsZW1lbnQubm9kZVR5cGUgOiB2b2lkIDApID09PSAxKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFBhcmVudHMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBjdXJyZW50X2VsZW1lbnQsIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgIGlmICh0aGlzLmlzRWxlbWVudChlbGVtZW50KSkge1xyXG4gICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaXNFbGVtZW50KGN1cnJlbnRfZWxlbWVudCkpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRfZWxlbWVudCk7XHJcbiAgICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBjdXJyZW50X2VsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFRhZ1NlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZUl0ZW0oZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2FuaXRpemVJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICB2YXIgY2hhcmFjdGVycztcclxuICAgICAgY2hhcmFjdGVycyA9IChpdGVtLnNwbGl0KCcnKSkubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlcikge1xyXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09ICc6Jykge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgKCc6Jy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKSArIFwiIFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoL1sgIVwiIyQlJicoKSorLC5cXC87PD0+P0BcXFtcXFxcXFxdXmB7fH1+XS8udGVzdChjaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyBjaGFyYWN0ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBlc2NhcGUoY2hhcmFjdGVyKS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY2hhcmFjdGVycy5qb2luKCcnKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldElkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBpZCwgc2FuaXRpemVkX2lkO1xyXG4gICAgICBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICBpZiAoKGlkICE9IG51bGwpICYmIChpZCAhPT0gJycpICYmICEoL1xccy8uZXhlYyhpZCkpICYmICEoL15cXGQvLmV4ZWMoaWQpKSkge1xyXG4gICAgICAgIHNhbml0aXplZF9pZCA9IFwiI1wiICsgKHRoaXMuc2FuaXRpemVJdGVtKGlkKSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNhbml0aXplZF9pZCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gc2FuaXRpemVkX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENsYXNzU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgY2xhc3Nfc3RyaW5nLCBpdGVtLCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBjbGFzc19zdHJpbmcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKTtcclxuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXlxcc3xcXHMkL2csICcnKTtcclxuICAgICAgICBpZiAoY2xhc3Nfc3RyaW5nICE9PSAnJykge1xyXG4gICAgICAgICAgcmVzdWx0ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgaywgbGVuLCByZWYsIHJlc3VsdHM7XHJcbiAgICAgICAgICAgIHJlZiA9IGNsYXNzX3N0cmluZy5zcGxpdCgvXFxzKy8pO1xyXG4gICAgICAgICAgICByZXN1bHRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgICAgICAgIGl0ZW0gPSByZWZba107XHJcbiAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKFwiLlwiICsgKHRoaXMuc2FuaXRpemVJdGVtKGl0ZW0pKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgICB9KS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QXR0cmlidXRlU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgYXR0cmlidXRlLCBibGFja2xpc3QsIGssIGxlbiwgcmVmLCByZWYxLCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBibGFja2xpc3QgPSBbJ2lkJywgJ2NsYXNzJ107XHJcbiAgICAgIHJlZiA9IGVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgYXR0cmlidXRlID0gcmVmW2tdO1xyXG4gICAgICAgIGlmIChyZWYxID0gYXR0cmlidXRlLm5vZGVOYW1lLCBpbmRleE9mLmNhbGwoYmxhY2tsaXN0LCByZWYxKSA8IDApIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKFwiW1wiICsgYXR0cmlidXRlLm5vZGVOYW1lICsgXCI9XCIgKyBhdHRyaWJ1dGUubm9kZVZhbHVlICsgXCJdXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0TnRoQ2hpbGRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGNvdW50ZXIsIGssIGxlbiwgcGFyZW50X2VsZW1lbnQsIHNpYmxpbmcsIHNpYmxpbmdzO1xyXG4gICAgICBwYXJlbnRfZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgaWYgKHBhcmVudF9lbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICBzaWJsaW5ncyA9IHBhcmVudF9lbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgICAgICAgZm9yIChrID0gMCwgbGVuID0gc2libGluZ3MubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nc1trXTtcclxuICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudChzaWJsaW5nKSkge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiOm50aC1jaGlsZChcIiArIGNvdW50ZXIgKyBcIilcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICAgIHZhciBpc191bmlxdWUsIHJlc3VsdDtcclxuICAgICAgaXNfdW5pcXVlID0gZmFsc2U7XHJcbiAgICAgIGlmICgoc2VsZWN0b3IgIT0gbnVsbCkgJiYgc2VsZWN0b3IgIT09ICcnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxICYmIHJlc3VsdFswXSA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgaXNfdW5pcXVlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGlzX3VuaXF1ZTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEFsbFNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgIHQ6IG51bGwsXHJcbiAgICAgICAgaTogbnVsbCxcclxuICAgICAgICBjOiBudWxsLFxyXG4gICAgICAgIGE6IG51bGwsXHJcbiAgICAgICAgbjogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICd0YWcnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LnQgPSB0aGlzLmdldFRhZ1NlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2lkJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5pID0gdGhpcy5nZXRJZFNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2NsYXNzJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5jID0gdGhpcy5nZXRDbGFzc1NlbGVjdG9ycyhlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdhdHRyaWJ1dGUnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LmEgPSB0aGlzLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyhlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdudGhjaGlsZCcpID49IDApIHtcclxuICAgICAgICByZXN1bHQubiA9IHRoaXMuZ2V0TnRoQ2hpbGRTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFVuaXF1ZW5lc3MgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgICB2YXIgZm91bmRfZWxlbWVudHMsIHBhcmVudDtcclxuICAgICAgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICBmb3VuZF9lbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgcmV0dXJuIGZvdW5kX2VsZW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBmb3VuZF9lbGVtZW50c1swXSA9PT0gZWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihlbGVtZW50LCBpdGVtcywgdGFnKSB7XHJcbiAgICAgIHZhciBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHJlZiwgcmVmMTtcclxuICAgICAgcmVmID0gdGhpcy5nZXRDb21iaW5hdGlvbnMoaXRlbXMpO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBpdGVtID0gcmVmW2tdO1xyXG4gICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRhZyAhPSBudWxsKSB7XHJcbiAgICAgICAgcmVmMSA9IGl0ZW1zLm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGFnICsgaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGwgPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGwgPCBsZW4xOyBsKyspIHtcclxuICAgICAgICAgIGl0ZW0gPSByZWYxW2xdO1xyXG4gICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0VW5pcXVlU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBmb3VuZF9zZWxlY3RvciwgaywgbGVuLCByZWYsIHNlbGVjdG9yX3R5cGUsIHNlbGVjdG9ycztcclxuICAgICAgc2VsZWN0b3JzID0gdGhpcy5nZXRBbGxTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIHJlZiA9IHRoaXMub3B0aW9ucy5zZWxlY3RvcnM7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIHNlbGVjdG9yX3R5cGUgPSByZWZba107XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcl90eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdpZCc6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMuaSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAndGFnJzpcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBzZWxlY3RvcnMudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjbGFzcyc6XHJcbiAgICAgICAgICAgIGlmICgoc2VsZWN0b3JzLmMgIT0gbnVsbCkgJiYgc2VsZWN0b3JzLmMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmMsIHNlbGVjdG9ycy50KTtcclxuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZF9zZWxlY3RvcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdhdHRyaWJ1dGUnOlxyXG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5hICE9IG51bGwpICYmIHNlbGVjdG9ycy5hLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kX3NlbGVjdG9yID0gdGhpcy50ZXN0Q29tYmluYXRpb25zKGVsZW1lbnQsIHNlbGVjdG9ycy5hLCBzZWxlY3RvcnMudCk7XHJcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnbnRoY2hpbGQnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLm4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMubjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJyonO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0U2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBhbGxfc2VsZWN0b3JzLCBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHBhcmVudHMsIHJlc3VsdCwgc2VsZWN0b3IsIHNlbGVjdG9ycztcclxuICAgICAgYWxsX3NlbGVjdG9ycyA9IFtdO1xyXG4gICAgICBwYXJlbnRzID0gdGhpcy5nZXRQYXJlbnRzKGVsZW1lbnQpO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSBwYXJlbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgaXRlbSA9IHBhcmVudHNba107XHJcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLmdldFVuaXF1ZVNlbGVjdG9yKGl0ZW0pO1xyXG4gICAgICAgIGlmIChzZWxlY3RvciAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbGxfc2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RvcnMgPSBbXTtcclxuICAgICAgZm9yIChsID0gMCwgbGVuMSA9IGFsbF9zZWxlY3RvcnMubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XHJcbiAgICAgICAgaXRlbSA9IGFsbF9zZWxlY3RvcnNbbF07XHJcbiAgICAgICAgc2VsZWN0b3JzLnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLmpvaW4oJyA+ICcpO1xyXG4gICAgICAgIGlmICh0aGlzLnRlc3RTZWxlY3RvcihlbGVtZW50LCByZXN1bHQpKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XHJcbiAgICAgIHZhciBpLCBqLCBrLCBsLCByZWYsIHJlZjEsIHJlc3VsdDtcclxuICAgICAgaWYgKGl0ZW1zID09IG51bGwpIHtcclxuICAgICAgICBpdGVtcyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdCA9IFtbXV07XHJcbiAgICAgIGZvciAoaSA9IGsgPSAwLCByZWYgPSBpdGVtcy5sZW5ndGggLSAxOyAwIDw9IHJlZiA/IGsgPD0gcmVmIDogayA+PSByZWY7IGkgPSAwIDw9IHJlZiA/ICsrayA6IC0taykge1xyXG4gICAgICAgIGZvciAoaiA9IGwgPSAwLCByZWYxID0gcmVzdWx0Lmxlbmd0aCAtIDE7IDAgPD0gcmVmMSA/IGwgPD0gcmVmMSA6IGwgPj0gcmVmMTsgaiA9IDAgPD0gcmVmMSA/ICsrbCA6IC0tbCkge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2gocmVzdWx0W2pdLmNvbmNhdChpdGVtc1tpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXN1bHQuc2hpZnQoKTtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uam9pbignJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCA/IGRlZmluZS5hbWQgOiB2b2lkIDApIHtcclxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBDc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByb290ID0gdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cyAhPT0gbnVsbCA/IGV4cG9ydHMgOiB0aGlzO1xyXG4gICAgcm9vdC5Dc3NTZWxlY3RvckdlbmVyYXRvciA9IENzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG4gIH1cclxuXHJcbn0pLmNhbGwodGhpcyk7XHJcbiIsIi8qXHJcbiAgR2VuZXJhbCBcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuU3RyaW5nLnByb3RvdHlwZS50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB0aGlzLnNwbGl0KCctJykubWFwKChkLGksYSkgPT4gIGkgPiAwID8gZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGQuc2xpY2UoMSkgOmQpLmpvaW4oJycpO1xyXG59XHJcbiJdfQ==
