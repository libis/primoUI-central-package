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

//import {removeOpenAccessConfig} from './components/prmFacetAfter/removeOpenAccess'

require('./utils');

var _experiment = require('./components/general/experiment');

var _homeIcon = require('./components/prmLogoAfter/homeIcon');

var _newSearchButton = require('./components/prmLogoAfter/newSearchButton');

var _languageDependentLogo = require('./components/prmLogoAfter/languageDependentLogo');

var _viewLogo = require('./components/prmLogoAfter/viewLogo');

var _betaSwitch = require('./components/prmLogoAfter/betaSwitch');

var _sourceIcon = require('./components/prmBriefResultAfter/sourceIcon');

var _altmetric = require('./components/prmBriefResultAfter/altmetric');

var _altmetricsBadge = require('./components/prmFullViewAfter/altmetricsBadge');

var _pnxXml = require('./components/prmSearchResultThumbnailContainerAfter/pnxXml');

var _payMyFines = require('./components/prmFinesOverviewAfter/payMyFines');

var _feedback = require('./components/prmMainMenuAfter/feedback');

var _searchTip = require('./components/general/searchTip');

var _disclaimer = require('./components/general/disclaimer');

var _ConfigLanguageSelection = require('./components/general/ConfigLanguageSelection');

var _reportAProblem = require('./components/prmServiceHeaderAfter/reportAProblem');

var _requestACopy = require('./components/prmServiceHeaderAfter/requestACopy');

var _finesMessage = require('./components/prmTopBarBefore/finesMessage');

var _announcements = require('./components/prmTopBarBefore/announcements');

var _PromoteLogin = require('./components/prmPromoteLogin/PromoteLogin');

var _feedbackAnnouncement = require('./components/prmTopBarBefore/feedbackAnnouncement');

var _staticFooter = require('./components/general/staticFooter');

var _removeAlerts = require('./components/general/removeAlerts');

var _illRequestForm = require('./components/prmRequestsAfter/illRequestForm');

var _recommendationItem = require('./components/prmRecommendationItemAfter/recommendationItem');

var _databaseLink = require('./components/general/databaseLink');

var _searchAlso = require('./components/prmFacetAfter/searchAlso');

var _searchAlsoBody = require('./components/prmFacetExactAfter/searchAlsoBody');

var _browzine = require('./components/prmSearchResultAvailabilityLineAfterController/browzine');

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
                  return [{ name: 'libis-experiment', config: _experiment.experimentConfig, enabled: false, appendTo: 'prm-messages-and-blocks-overview-after', enableInView: '.*' }, { name: 'home-icon', config: _homeIcon.homeIconConfig, enabled: false, appendTo: null, enableInView: '' }, { name: 'beta-switch', config: _betaSwitch.betaSwitchConfig, enabled: false, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'language-dependent-logo', config: _languageDependentLogo.languageDependentLogoConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'view-logo', config: _viewLogo.viewLogoConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'source-icon', config: _sourceIcon.sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^(?!Lirias)' }, { name: 'altmetric', config: _altmetric.altmetricConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB' }, { name: 'altmetrics-badge', config: _altmetricsBadge.altmetricsBadgeConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB' }, { name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after', enableInView: '.*' }, { name: 'pay-my-fines', config: _payMyFines.payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after', enableInView: '.*' }, { name: 'feedback', config: _feedback.feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'language-selection', config: _ConfigLanguageSelection.LanguageSelectionConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'new-search-button', config: _newSearchButton.newSearchButtonConfig, enabled: true, appendTo: 'prm-top-nav-bar-links-after', enableInView: '^(?!ECB)' }, { name: 'report-a-problem', config: _reportAProblem.reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '.*' },
                  // {name: 'request-a-copy-head', config: requestACopyConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '^Lirias'}, 
                  { name: 'request-a-copy', config: _requestACopy.requestACopyConfig, enabled: true, appendTo: 'prm-full-view-service-container-after', enableInView: '^Lirias' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'prm-disclaimer', config: _disclaimer.disclaimerConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'static-footer', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-explore-footer-after', enableInView: '.*' },
                  //{name: 'static-footer-account', config: staticFooterConfig, enabled: true, appendTo: 'prm-account-after', enableInView: '.*'},
                  { name: 'remove-alerts', config: _removeAlerts.removeAlertsConfig, enabled: true, appendTo: 'prm-add-query-to-saved-searches-after', enableInView: '.*' }, { name: 'prm-dblink', config: _databaseLink.databaseLinkConfig, enabled: false, appendTo: null, enableInView: '.*' },

                  /* lbs-components used in html-templates of the package */
                  { name: 'promote-login-static-footer', config: _PromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView: '^KULeuven' }, { name: 'ill-request-form-overview', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-overview-after', enableInView: '.*' }, { name: 'ill-request-form', config: _illRequestForm.illRequestFormConfig, enabled: true, appendTo: 'prm-requests-after', enableInView: '^KULeuven|^VIVES' }, { name: 'announcement-feedback', config: _feedbackAnnouncement.feedbackAnnouncementConfig, enabled: false, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'override-getlink-recommendation', config: _recommendationItem.recommendationItemConfig, enabled: true, appendTo: 'prm-recomendation-item-after', enableInView: '.*' }, { name: 'announcement', config: _announcements.announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'pay-my-fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven' },
                  //  {name: 'remove-open-access', config: removeOpenAccessConfig, enabled: false, appendTo: 'prm-facet-after', enableInView: '.*'},
                  { name: 'search-also', config: _searchAlso.searchAlsoConfig, enabled: true, appendTo: 'prm-facet-after', enableInView: '^KULeuven' }, { name: 'search-also-body', config: _searchAlsoBody.searchAlsoBodyConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^KULeuven' }, { name: 'browzine', config: _browzine.browzineConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '^ECB' }].filter(function (component) {
                        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
                  });
            }
      }]);

      return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/ConfigLanguageSelection":2,"./components/general/databaseLink":3,"./components/general/disclaimer":5,"./components/general/experiment":6,"./components/general/removeAlerts":7,"./components/general/searchTip":8,"./components/general/staticFooter":9,"./components/prmBriefResultAfter/altmetric":10,"./components/prmBriefResultAfter/sourceIcon":11,"./components/prmFacetAfter/searchAlso":12,"./components/prmFacetExactAfter/searchAlsoBody":13,"./components/prmFinesOverviewAfter/payMyFines":14,"./components/prmFullViewAfter/altmetricsBadge":15,"./components/prmLogoAfter/betaSwitch":16,"./components/prmLogoAfter/homeIcon":17,"./components/prmLogoAfter/languageDependentLogo":18,"./components/prmLogoAfter/newSearchButton":19,"./components/prmLogoAfter/viewLogo":20,"./components/prmMainMenuAfter/feedback":21,"./components/prmPromoteLogin/PromoteLogin":22,"./components/prmRecommendationItemAfter/recommendationItem":23,"./components/prmRequestsAfter/illRequestForm":24,"./components/prmSearchResultAvailabilityLineAfterController/browzine":25,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":26,"./components/prmServiceHeaderAfter/reportAProblem":27,"./components/prmServiceHeaderAfter/requestACopy":28,"./components/prmTopBarBefore/announcements":29,"./components/prmTopBarBefore/feedbackAnnouncement":30,"./components/prmTopBarBefore/finesMessage":32,"./utils":48}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LanguageSelectionConfigController = function LanguageSelectionConfigController($scope) {
    _classCallCheck(this, LanguageSelectionConfigController);

    var self = this;
    var scope = $scope;
    var onlyshow_fr_FR_in_vid = ['ACV', 'BPB', 'FARO', 'FODFIN', 'KBC', 'RBINS', 'RMCA', 'KMKG', 'LIBAR', 'NBB', 'OFO', 'VDIC'];
    var parentEl = angular.element(document.querySelector('primo-explore'));
    if (!onlyshow_fr_FR_in_vid.includes(window.appConfig.vid)) {
        parentEl.append("<style>prm-language-selection md-list-item[value='fr_FR']{display:none!important;}</style>");
    }
};

LanguageSelectionConfigController.$inject = ['$scope'];

var LanguageSelectionConfig = exports.LanguageSelectionConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: LanguageSelectionConfigController,
    template: ''
};

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var disclaimerDialogHTML = '\uFEFF<md-dialog aria-label="Disclaimer">\r\n    <md-dialog-content id="disclaimerDialog">\r\n        <md-toolbar md-autofocus >\r\n            <div class="md-toolbar-tools">\r\n                <h2>Cookiebeleid Limo</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-content>\r\n            Limo gebruikt cookies die het gebruik van de zoekmachine vergemakkelijken.\r\n\r\n            <h3>WAT IS EEN COOKIE?</h3>\r\n            Cookies zijn kleine tekstbestanden die je voorkeuren tijdens het surfen onthouden en opslaan op je eigen computer of toestel.\r\n\r\n            <h3>COOKIEGEBRUIK IN LIMO</h3>\r\n            <p>\r\n                Enerzijds zijn er functionele cookies. Deze cookies onthouden bepaalde keuzes en instellingen die je een eerste keer hebt\r\n                gekozen om bij volgende bezoeken effici\xEBnter, sneller en eenvoudiger te kunnen zoeken in Limo. Deze cookies\r\n                onthouden voorkeursinstellingen,\u2026\r\n            </p>\r\n            <p>\r\n                Voor gebruikers van de de KU Leuven Associatie kunnen loginnamen onthouden worden bij het aanmelden via de Centrale login.\r\n            </p>\r\n            <p>\r\n                Anderzijds worden cookies ook gebruikt om bezoek- en klikgedrag te onthouden. Hiermee worden geanonimiseerde rapporten gemaakt\r\n                van het gebruik van Limo.\r\n            </p>\r\n            <!--                \r\n                KU Leuven gebruikt onder andere volgende cookies op de centraal beheerde websites:\r\n                <ul>\r\n                    <li>\r\n                    NSC_* : Deze cookies worden gebruikt door de netscaler om de loadbalancing te sturen\r\n                    </li>\r\n                <li>_ga* en _utm*: Dit zijn Google Analytics cookies, gebruikt voor user-tracking (meer info over Google Analytics)\r\n                 </li>\r\n                <li>\t_pk_id* : piwik cookies die gebruikt worden door de user-tracking omgeving van KU Leuven\r\n                 </li>\r\n                <li>\tJSESSIONID: cookies die gebruikt worden in toledo en kuloket\r\n                 </li>\r\n                <li>\tPHPSESSID: cookies die gebruikt voor de lamp omgeving (php)\r\n                 </li>\r\n                <li>\t_shibsession* en _saml*: cookies die nodig zijn voor de centrale login van KU Leuven\r\n                </li>\r\n                </ul>\r\n            -->\r\n            <h3>WIJZIGINGEN VAN BROWSERINSTELLINGEN</h3>\r\n            <p>\r\n                Cookies kan je via de browserinstellingen op je computer weigeren of verwijderen. De wijze hoe dit kan gebeuren verschilt\r\n                van browser tot browser. Raadpleeg indien nodig de helpfunctie van je browser. Deze instellingen moet je\r\n                steeds per browser en per computer apart instellen!\r\n            </p>\r\n            <ul>\r\n                <li>\r\n                    <a href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies#ie=ie-10-win-7" target="_blank">Cookie-instellingen in Internet Explorer</a>\r\n                </li>\r\n                <li>\r\n                    <a href="https://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Cookie-instellingen in Chrome</a>\r\n                </li>\r\n                <li>\r\n                    <a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies"\r\n                        target="_blank">Cookie-instellingen in Firefox</a>\r\n                </li>\r\n                <li>\r\n                    <a href="https://support.apple.com/kb/PH19214?locale=nl_BE" target="_blank">Cookie-instellingen in Safari</a>\r\n                </li>\r\n            </ul>\r\n            <p>\r\n                Het niet-aanvaarden of verwijderen of uitzetten van cookies kan tot gevolg hebben dat bepaalde functionaliteiten van Limo\r\n                niet meer toegankelijk zijn of slecht functioneren. Daardoor kan de beleving van de site tegenvallen.\r\n            </p>\r\n            <h3>SOCIALE MEDIA EN DE BIJHORENDE PLUG-INS</h3>\r\n            <p>\r\n                Facebook ontvangt heel wat informatie over je surfgedrag via deze social plug-in op hun websites (via bijvoorbeeld de knoppen\r\n                \u201CVind ik leuk\u201D of \u201CDelen\u201D).\r\n            </p>\r\n            <p>\r\n                Deze knoppen kunnen zich ook bevinden op de resultatenpagina van Limo.\r\n            </p>\r\n            <p>\r\n                Indien je je hiertegen wilt beschermen, dan wordt er (door onder meer het Centrum voor de Bescherming van de Persoonlijke\r\n                Levenssfeer) aangeraden om \xE9\xE9n van de onderstaande maatregelen te nemen.\r\n            </p>\r\n\r\n            <ol>\r\n                <li>Installeer een browser add-on die tracking blokkeert. Voorbeelden van dergelijke browser add-ons zijn:\r\n                    <ul>\r\n                        <li>Privacy Badger (\r\n                            <a href="http://www.eff.org/privacybadger" target="_blank">http://www.eff.org/privacybadger</a>)</li>\r\n                        <li>Ghostery (\r\n                            <a href="https://www.ghostery.com/" target="_blank">https://www.ghostery.com</a>)</li>\r\n                        <li>Disconnect (\r\n                            <a href="https://disconnect.me/disconnect" target="_blank">https://disconnect.me/disconnect</a>)</li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <li>Maak gebruik van de incognito of \u201Cprivate nagivation\u201D-modus van uw browser. Recente versies van de meest\r\n                    courante browsers bieden zo\u2019n priv\xE9-modus als functionaliteit aan:\r\n                    <ul>\r\n                        <li> Internet Explorer </li>\r\n                        <li>Firefox</li>\r\n                        <li>Chrome</li>\r\n                        <li> Safari</li>\r\n                    </ul>\r\n                </li>\r\n            </ol>\r\n\r\n\r\n            <p>Deze functie dwingt de browser om sporen van je surfgedrag (cookies, historiek, enz.) te wissen nadat het venster\r\n                wordt gesloten en beschermt je aldus om door derden gevolgd te worden (opgelet: deze functie maakt jou niet\r\n                anoniem op het web). Er bestaan ook speciale privacybeschermende browsers, zoals Epic Privacy Browser (\r\n                <a href="http://www.epicbrowser.com/" target="_blank">www.epicbrowser.com</a>).</p>\r\n\r\n            <p>Sociale media en andere websites gebruiken informatie over het surfgedrag van zijn gebruikers om hen gerichte\r\n                reclame aan te bieden. Wil je niet meer gevolgd worden voor gerichte reclame dan kan je je\r\n                <strong>uitschrijven voor gerichte advertenties</strong> via de opt-out website van de European Interactive Digital\r\n                Advertising Alliance (\r\n                <a href="http://www.youronlinechoices.eu/" target="_blank">www.youronlinechoices.eu</a>).\r\n            </p>\r\n                <p>\r\n                <br> Uitschrijven voor gerichte advertenties betekent niet dat er geen informatie meer verzameld wordt over je\r\n                surfgedrag. Indien je je ook wil beschermen tegen de inzameling van deze informatie wordt er geadviseerd\r\n                om daarnaast ook gebruik te maken van de incognito-modus van uw browser of \xE9\xE9n van de bovenvermelde browser\r\n                add-ons te gebruiken..</p>\r\n\r\n            <h3>MEER WETEN?</h3>\r\n\r\n            <p>Meer info vind je onder andere op volgende websites:\r\n                <a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a>&nbsp;en\r\n                <a href="http://www.youronlinechoices.com/be-nl/" target="_blank">www.youronlinechoices.com/be-nl</a>\r\n            </p>.\r\n\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button class="md-primary" ng-click="closeDialog()">\r\n                        Sluiten\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>';
var cookiePolicyDialogHTML = '<md-dialog aria-label="Disclaimer">\r\n\t\t<md-dialog-content id="disclaimerDialog">\r\n\t\t\t<md-toolbar md-autofocus >\r\n\t\t\t\t<div class="md-toolbar-tools">\r\n\t\t\t\t\t<h2>LIMO COOKIE POLICY</h2>\r\n\t\t\t\t\t<span flex></span>\r\n\t\t\t\t\t<md-button  class="md-icon-button" ng-click="closeDialog()">\r\n\t\t\t\t\t\t<md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n\t\t\t\t\t</md-button>\r\n\t\t\t\t</div>\r\n\t\t\t</md-toolbar>\r\n\t\t\t<md-content>\r\n\t\t\t\t\tLimo uses cookies that facilitate the use of the search engine.\r\n\t\r\n\t\t\t\t<h3>WHAT IS A COOKIE?</h3>\r\n\t\t\t\tCookies are small text files that record your preferences during your browser activities and are saved on your own computer or device.\r\n\t\r\n\t\t\t\t<h3>USE OF COOKIES IN LIMO</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tCookies can on the one hand be <u>functional</u>. These cookies record certain of the choices and settings made on your first visit to allow you to navigate more efficiently, quickly and simply on subsequent visits. These cookies record for example preference settings.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tFor users of the KU Leuven Association, login names can be recorded when logging in via the Central Login page.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tOn the other hand, cookies can also be used to record <u>visit and click activity</u>. This can be used to make anonimised reports of the user of Limo.\r\n\t\t\t\t</p>\r\n\t\t\t\t<!--                \r\n\t\t\t\t\tKU Leuven gebruikt onder andere volgende cookies op de centraal beheerde websites:\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\tNSC_* : Deze cookies worden gebruikt door de netscaler om de loadbalancing te sturen\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>_ga* en _utm*: Dit zijn Google Analytics cookies, gebruikt voor user-tracking (meer info over Google Analytics)\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\t_pk_id* : piwik cookies die gebruikt worden door de user-tracking omgeving van KU Leuven\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\tJSESSIONID: cookies die gebruikt worden in toledo en kuloket\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\tPHPSESSID: cookies die gebruikt voor de lamp omgeving (php)\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\t_shibsession* en _saml*: cookies die nodig zijn voor de centrale login van KU Leuven\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t-->\r\n\t\t\t\t<h3>CHANGING BROWSER SETTINGS</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tYou can enable or delete cookies on your computer through your browser settings. \r\n\t\t\t\t\t\tThe way in which this works varies from browser to browser. Consult your browser\u2019s help function if necessary. You must always make this adjustment per browser and per computer!\r\n\t\t\t\t</p>\r\n\t\t\t\r\n\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies#ie=ie-10-win-7" target="_blank">Cookie settings in Internet Explorer</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="https://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Cookie settings in Chrome</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies"\r\n\t\t\t\t\t\t\ttarget="_blank">Cookie settings in Firefox</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="https://support.apple.com/kb/PH19214?locale=nl_BE" target="_blank">Cookie settings in Safari</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tNot accepting, disabling or deleting cookies may result in certain functionalities of the Limo website being no longer accessible or operating normally. \r\n\t\t\t\t\t\tThis may make your website experience unsatisfactory.\r\n\t\t\t\t</p>\r\n\t\t\t\t<h3>SOCIAL MEDIA AND THE CORRESPONDING PLUG-INS</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tMany social media (such as, Facebook, Linkedin, Twitter, Google+, Tumblr, etc.) \r\n\t\t\t\t\t\treceive a lot of information on your browsing habits through social plug-ins on their websites (for example by way of the Like or Share buttons).\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tThese buttons may also be found on the web pages of the Limo results list.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tIf you want to protect yourself from these, then you are advised (by, among other agencies, the Belgian Commission for the Protection of Privacy) to take one of the steps below.\r\n\t\t\t\t</p>\r\n\t\r\n\t\t\t\t<ol>\r\n\t\t\t\t\t<li>Install a browser that blocks add-on tracking. Examples of such browser add-ons are:\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>Privacy Badger (\r\n\t\t\t\t\t\t\t\t<a href="http://www.eff.org/privacybadger" target="_blank">http://www.eff.org/privacybadger</a>)</li>\r\n\t\t\t\t\t\t\t<li>Ghostery (\r\n\t\t\t\t\t\t\t\t<a href="https://www.ghostery.com/" target="_blank">https://www.ghostery.com</a>)</li>\r\n\t\t\t\t\t\t\t<li>Disconnect (\r\n\t\t\t\t\t\t\t\t<a href="https://disconnect.me/disconnect" target="_blank">https://disconnect.me/disconnect</a>)</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t<li>Make use of your browser\u2019s incognito or private navigation mode. \r\n\t\t\t\t\t\tRecent versions of the most popular browsers provide such a private navigation mode:\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href="https://support.microsoft.com/en-us/products/windows?os=windows-10">Internet Explorer</a></li>\r\n\t\t\t\t\t\t\t<li><a href="https://support.mozilla.org/nl/kb/privenavigatie-firefox-gebruiken-zonder-geschiedenis">Firefox</a></li>\r\n\t\t\t\t\t\t\t<li><a href="https://support.google.com/chrome/answer/95464?hl=nl">Chrome</a></li>\r\n\t\t\t\t\t\t\t<li><a href="https://support.apple.com/kb/PH19216?locale=nl_NL">Safari</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ol>\r\n\t\r\n\t\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tThis function forces your browser to erase all tracks of your browsing activity (cookies, history, etc.) after you have closed the window and therefore protects you from being tracked by third parties (please note: this function does not make you anonymous on the web). \r\n\t\t\t\t\t\tThere are also special browsers that protect privacy, such as Privacy Browser  \r\n\t\t\t\t\t\t(<a href="http://www.epicbrowser.com/" target="_blank">www.epicbrowser.com</a>).</p>\r\n\t\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tSocial media and other websites use information about the browsing activity of its users to provide them with targeted advertising. If you no longer want to be tracked by targeted advertising, \r\n\t\t\t\t\t\tyou can choose to opt out of targeted advertisements via the opt-out website of the European Interactive Digital Advertising Alliance \r\n\t\t\t\t\t (<a href="http://www.youronlinechoices.eu/" target="_blank">www.youronlinechoices.eu</a>).\r\n\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\tOpting out of targeted advertisements does not mean that information is no longer collected on your browsing activities. If you also want to protect yourself from the collection of this information, \r\n\t\t\t\t\t\t\tyou are advised to also use the incognito mode of your browser or one of the above-mentioned browser add-ons..</p>\r\n\t\r\n\t\t\t\t<h3>WANT MORE INFORMATION?</h3>\r\n\t\r\n\t\t\t\t<p>You will find more information on the following websites: \r\n\t\t\t\t\t<a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a> and \r\n\t\t\t\t\t<a href="http://www.youronlinechoices.com/be-nl/" target="_blank">www.youronlinechoices.com/be-nl</a>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\tLIBIS reserves the right to amend this policy at any time. You will always find the most recent version of the Cookie Statement on this page.\r\n\t\t\t</p>\r\n\r\n\t\t\t\t<md-dialog-actions>\r\n\t\t\t\t\t<div layout="row" class="demo-dialog-button">\r\n\t\t\t\t\t\t<md-button class="md-primary" ng-click="closeDialog()">\r\n\t\t\t\t\t\t\tClose\r\n\t\t\t\t\t\t</md-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</md-dialog-actions>\r\n\t\t\t\t\r\n\t\t\t</md-content>\r\n\t\t</md-dialog-content>\r\n\t</md-dialog>';
var disclaimerDialog_frFR_HTML = '<md-dialog aria-label="Disclaimer">\r\n\t\t<md-dialog-content id="disclaimerDialog">\r\n\t\t\t<md-toolbar md-autofocus >\r\n\t\t\t\t<div class="md-toolbar-tools">\r\n\t\t\t\t\t<h2>LIMO COOKIE POLICY</h2>\r\n\t\t\t\t\t<span flex></span>\r\n\t\t\t\t\t<md-button  class="md-icon-button" ng-click="closeDialog()">\r\n\t\t\t\t\t\t<md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n\t\t\t\t\t</md-button>\r\n\t\t\t\t</div>\r\n\t\t\t</md-toolbar>\r\n\t\t\t<md-content>\r\n\t\t\t\t\tLimo uses cookies that facilitate the use of the search engine.\r\n\t\r\n\t\t\t\t<h3>WHAT IS A COOKIE?</h3>\r\n\t\t\t\tCookies are small text files that record your preferences during your browser activities and are saved on your own computer or device.\r\n\t\r\n\t\t\t\t<h3>USE OF COOKIES IN LIMO</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tCookies can on the one hand be <u>functional</u>. These cookies record certain of the choices and settings made on your first visit to allow you to navigate more efficiently, quickly and simply on subsequent visits. These cookies record for example preference settings.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tFor users of the KU Leuven Association, login names can be recorded when logging in via the Central Login page.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tOn the other hand, cookies can also be used to record <u>visit and click activity</u>. This can be used to make anonimised reports of the user of Limo.\r\n\t\t\t\t</p>\r\n\t\t\t\t<!--                \r\n\t\t\t\t\tKU Leuven gebruikt onder andere volgende cookies op de centraal beheerde websites:\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\tNSC_* : Deze cookies worden gebruikt door de netscaler om de loadbalancing te sturen\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>_ga* en _utm*: Dit zijn Google Analytics cookies, gebruikt voor user-tracking (meer info over Google Analytics)\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\t_pk_id* : piwik cookies die gebruikt worden door de user-tracking omgeving van KU Leuven\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\tJSESSIONID: cookies die gebruikt worden in toledo en kuloket\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\tPHPSESSID: cookies die gebruikt voor de lamp omgeving (php)\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\t_shibsession* en _saml*: cookies die nodig zijn voor de centrale login van KU Leuven\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t-->\r\n\t\t\t\t<h3>CHANGING BROWSER SETTINGS</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tYou can enable or delete cookies on your computer through your browser settings. \r\n\t\t\t\t\t\tThe way in which this works varies from browser to browser. Consult your browser\u2019s help function if necessary. You must always make this adjustment per browser and per computer!\r\n\t\t\t\t</p>\r\n\t\t\t\r\n\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies#ie=ie-10-win-7" target="_blank">Cookie settings in Internet Explorer</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="https://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Cookie settings in Chrome</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies"\r\n\t\t\t\t\t\t\ttarget="_blank">Cookie settings in Firefox</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="https://support.apple.com/kb/PH19214?locale=nl_BE" target="_blank">Cookie settings in Safari</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tNot accepting, disabling or deleting cookies may result in certain functionalities of the Limo website being no longer accessible or operating normally. \r\n\t\t\t\t\t\tThis may make your website experience unsatisfactory.\r\n\t\t\t\t</p>\r\n\t\t\t\t<h3>SOCIAL MEDIA AND THE CORRESPONDING PLUG-INS</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tMany social media (such as, Facebook, Linkedin, Twitter, Google+, Tumblr, etc.) \r\n\t\t\t\t\t\treceive a lot of information on your browsing habits through social plug-ins on their websites (for example by way of the Like or Share buttons).\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tThese buttons may also be found on the web pages of the Limo results list.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tIf you want to protect yourself from these, then you are advised (by, among other agencies, the Belgian Commission for the Protection of Privacy) to take one of the steps below.\r\n\t\t\t\t</p>\r\n\t\r\n\t\t\t\t<ol>\r\n\t\t\t\t\t<li>Install a browser that blocks add-on tracking. Examples of such browser add-ons are:\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>Privacy Badger (\r\n\t\t\t\t\t\t\t\t<a href="http://www.eff.org/privacybadger" target="_blank">http://www.eff.org/privacybadger</a>)</li>\r\n\t\t\t\t\t\t\t<li>Ghostery (\r\n\t\t\t\t\t\t\t\t<a href="https://www.ghostery.com/" target="_blank">https://www.ghostery.com</a>)</li>\r\n\t\t\t\t\t\t\t<li>Disconnect (\r\n\t\t\t\t\t\t\t\t<a href="https://disconnect.me/disconnect" target="_blank">https://disconnect.me/disconnect</a>)</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t<li>Make use of your browser\u2019s incognito or private navigation mode. \r\n\t\t\t\t\t\tRecent versions of the most popular browsers provide such a private navigation mode:\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href="https://support.microsoft.com/en-us/products/windows?os=windows-10">Internet Explorer</a></li>\r\n\t\t\t\t\t\t\t<li><a href="https://support.mozilla.org/nl/kb/privenavigatie-firefox-gebruiken-zonder-geschiedenis">Firefox</a></li>\r\n\t\t\t\t\t\t\t<li><a href="https://support.google.com/chrome/answer/95464?hl=nl">Chrome</a></li>\r\n\t\t\t\t\t\t\t<li><a href="https://support.apple.com/kb/PH19216?locale=nl_NL">Safari</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ol>\r\n\t\r\n\t\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tThis function forces your browser to erase all tracks of your browsing activity (cookies, history, etc.) after you have closed the window and therefore protects you from being tracked by third parties (please note: this function does not make you anonymous on the web). \r\n\t\t\t\t\t\tThere are also special browsers that protect privacy, such as Privacy Browser  \r\n\t\t\t\t\t\t(<a href="http://www.epicbrowser.com/" target="_blank">www.epicbrowser.com</a>).</p>\r\n\t\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tSocial media and other websites use information about the browsing activity of its users to provide them with targeted advertising. If you no longer want to be tracked by targeted advertising, \r\n\t\t\t\t\t\tyou can choose to opt out of targeted advertisements via the opt-out website of the European Interactive Digital Advertising Alliance \r\n\t\t\t\t\t (<a href="http://www.youronlinechoices.eu/" target="_blank">www.youronlinechoices.eu</a>).\r\n\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\tOpting out of targeted advertisements does not mean that information is no longer collected on your browsing activities. If you also want to protect yourself from the collection of this information, \r\n\t\t\t\t\t\t\tyou are advised to also use the incognito mode of your browser or one of the above-mentioned browser add-ons..</p>\r\n\t\r\n\t\t\t\t<h3>WANT MORE INFORMATION?</h3>\r\n\t\r\n\t\t\t\t<p>You will find more information on the following websites: \r\n\t\t\t\t\t<a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a> and \r\n\t\t\t\t\t<a href="http://www.youronlinechoices.com/be-nl/" target="_blank">www.youronlinechoices.com/be-nl</a>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\tLIBIS reserves the right to amend this policy at any time. You will always find the most recent version of the Cookie Statement on this page.\r\n\t\t\t</p>\r\n\r\n\t\t\t\t<md-dialog-actions>\r\n\t\t\t\t\t<div layout="row" class="demo-dialog-button">\r\n\t\t\t\t\t\t<md-button class="md-primary" ng-click="closeDialog()">\r\n\t\t\t\t\t\t\tClose\r\n\t\t\t\t\t\t</md-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</md-dialog-actions>\r\n\t\t\t\t\r\n\t\t\t</md-content>\r\n\t\t</md-dialog-content>\r\n\t</md-dialog>';
var disclaimerDialog_nlBE_HTML = '<md-dialog aria-label="Disclaimer">\r\n\t\t<md-dialog-content id="disclaimerDialog">\r\n\t\t\t<md-toolbar md-autofocus >\r\n\t\t\t\t<div class="md-toolbar-tools">\r\n\t\t\t\t\t<h2>Cookiebeleid Limo</h2>\r\n\t\t\t\t\t<span flex></span>\r\n\t\t\t\t\t<md-button class="md-icon-button" ng-click="closeDialog()">\r\n\t\t\t\t\t\t<md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n\t\t\t\t\t</md-button>\r\n\t\t\t\t</div>\r\n\t\t\t</md-toolbar>\r\n\t\t\t<md-content>\r\n\t\t\t\tLimo gebruikt cookies die het gebruik van de zoekmachine vergemakkelijken.\r\n\t\r\n\t\t\t\t<h3>WAT IS EEN COOKIE?</h3>\r\n\t\t\t\tCookies zijn kleine tekstbestanden die je voorkeuren tijdens het surfen onthouden en opslaan op je eigen computer of toestel.\r\n\t\r\n\t\t\t\t<h3>COOKIEGEBRUIK IN LIMO</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tEnerzijds zijn er functionele cookies. Deze cookies onthouden bepaalde keuzes en instellingen die je een eerste keer hebt\r\n\t\t\t\t\tgekozen om bij volgende bezoeken effici\xEBnter, sneller en eenvoudiger te kunnen zoeken in Limo. Deze cookies\r\n\t\t\t\t\tonthouden ondermeer voorkeursinstellingen.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tVoor gebruikers van de KU Leuven Associatie kunnen loginnamen onthouden worden bij het aanmelden via de Centrale login.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tAnderzijds worden cookies ook gebruikt om bezoek- en klikgedrag te onthouden. Hiermee worden geanonimiseerde rapporten gemaakt\r\n\t\t\t\t\tvan het gebruik van Limo.\r\n\t\t\t\t</p>\r\n\t\t\t\t<!--                \r\n\t\t\t\t\tKU Leuven gebruikt onder andere volgende cookies op de centraal beheerde websites:\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\tNSC_* : Deze cookies worden gebruikt door de netscaler om de loadbalancing te sturen\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>_ga* en _utm*: Dit zijn Google Analytics cookies, gebruikt voor user-tracking (meer info over Google Analytics)\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\t_pk_id* : piwik cookies die gebruikt worden door de user-tracking omgeving van KU Leuven\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\tJSESSIONID: cookies die gebruikt worden in toledo en kuloket\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\tPHPSESSID: cookies die gebruikt voor de lamp omgeving (php)\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\t_shibsession* en _saml*: cookies die nodig zijn voor de centrale login van KU Leuven\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t-->\r\n\t\t\t\t<h3>WIJZIGINGEN VAN BROWSERINSTELLINGEN</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tCookies kan je via de browserinstellingen op je computer weigeren of verwijderen. De wijze waarop dit kan gebeuren verschilt\r\n\t\t\t\t\tvan browser tot browser. Raadpleeg indien nodig de helpfunctie van je browser. Deze instellingen moet je\r\n\t\t\t\t\tsteeds per browser en per computer apart instellen!\r\n\t\t\t\t</p>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies#ie=ie-10-win-7" target="_blank">Cookie-instellingen in Internet Explorer</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="https://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Cookie-instellingen in Chrome</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies"\r\n\t\t\t\t\t\t\ttarget="_blank">Cookie-instellingen in Firefox</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="https://support.apple.com/kb/PH19214?locale=nl_BE" target="_blank">Cookie-instellingen in Safari</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tHet niet-aanvaarden of verwijderen of uitzetten van cookies kan tot gevolg hebben dat bepaalde functionaliteiten van Limo\r\n\t\t\t\t\tniet meer toegankelijk zijn of slecht functioneren. Daardoor kan de beleving van de site tegenvallen.\r\n\t\t\t\t</p>\r\n\t\t\t\t<h3>SOCIALE MEDIA EN DE BIJHORENDE PLUG-INS</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tFacebook ontvangt heel wat informatie over je surfgedrag via deze social plug-in op hun websites (via bijvoorbeeld de knoppen\r\n\t\t\t\t\t\u201CVind ik leuk\u201D of \u201CDelen\u201D).\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tDeze knoppen kunnen zich ook bevinden op de resultatenpagina van Limo.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tIndien je je hiertegen wilt beschermen, dan wordt er (door onder meer het Centrum voor de Bescherming van de Persoonlijke\r\n\t\t\t\t\tLevenssfeer) aangeraden om \xE9\xE9n van de onderstaande maatregelen te nemen.\r\n\t\t\t\t</p>\r\n\t\r\n\t\t\t\t<ol>\r\n\t\t\t\t\t<li>Installeer een browser add-on die tracking blokkeert. Voorbeelden van dergelijke browser add-ons zijn:\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>Privacy Badger (\r\n\t\t\t\t\t\t\t\t<a href="http://www.eff.org/privacybadger" target="_blank">http://www.eff.org/privacybadger</a>)</li>\r\n\t\t\t\t\t\t\t<li>Ghostery (\r\n\t\t\t\t\t\t\t\t<a href="https://www.ghostery.com/" target="_blank">https://www.ghostery.com</a>)</li>\r\n\t\t\t\t\t\t\t<li>Disconnect (\r\n\t\t\t\t\t\t\t\t<a href="https://disconnect.me/disconnect" target="_blank">https://disconnect.me/disconnect</a>)</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t<li>Maak gebruik van de incognito of \u201Cprivate nagivation\u201D-modus van uw browser. Recente versies van de meest\r\n\t\t\t\t\t\tcourante browsers bieden zo\u2019n priv\xE9-modus als functionaliteit aan:\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li> Internet Explorer </li>\r\n\t\t\t\t\t\t\t<li>Firefox</li>\r\n\t\t\t\t\t\t\t<li>Chrome</li>\r\n\t\t\t\t\t\t\t<li> Safari</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ol>\r\n\t\r\n\t\r\n\t\t\t\t<p>Deze functie dwingt de browser om sporen van je surfgedrag (cookies, historiek, enz.) te wissen nadat het venster\r\n\t\t\t\t\twordt gesloten en beschermt je aldus om door derden gevolgd te worden (opgelet: deze functie maakt jou niet\r\n\t\t\t\t\tanoniem op het web). Er bestaan ook speciale privacybeschermende browsers, zoals Epic Privacy Browser (\r\n\t\t\t\t\t<a href="http://www.epicbrowser.com/" target="_blank">www.epicbrowser.com</a>).</p>\r\n\t\r\n\t\t\t\t<p>Sociale media en andere websites gebruiken informatie over het surfgedrag van hun gebruikers om hen gerichte\r\n\t\t\t\t\treclame aan te bieden. Wil je niet meer gevolgd worden voor gerichte reclame dan kan je je\r\n\t\t\t\t\t<strong>uitschrijven voor gerichte advertenties</strong> via de opt-out website van de European Interactive Digital\r\n\t\t\t\t\tAdvertising Alliance (\r\n\t\t\t\t\t<a href="http://www.youronlinechoices.eu/" target="_blank">www.youronlinechoices.eu</a>).\r\n\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t<br> Uitschrijven voor gerichte advertenties betekent niet dat er geen informatie meer verzameld wordt over je\r\n\t\t\t\t\tsurfgedrag. Indien je je ook wil beschermen tegen de inzameling van deze informatie wordt er geadviseerd\r\n\t\t\t\t\tom daarnaast ook gebruik te maken van de incognito-modus van uw browser of \xE9\xE9n van de bovenvermelde browser\r\n\t\t\t\t\tadd-ons te gebruiken..</p>\r\n\t\r\n\t\t\t\t<h3>MEER WETEN?</h3>\r\n\t\r\n\t\t\t\t<p>Meer info vind je onder andere op volgende websites:\r\n\t\t\t\t\t<a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a>&nbsp;en\r\n\t\t\t\t\t<a href="http://www.youronlinechoices.com/be-nl/" target="_blank">www.youronlinechoices.com/be-nl</a>\r\n\t\t\t\t</p>\r\n<p>\r\n\t\t\t\tLIBIS behoudt zich het recht voor om deze cookieverklaring op ieder moment te wijzigen. De meest recente versie van de cookieverklaring vind je altijd op deze pagina.\r\n\t\t\t</p>\r\n\t\t\t\t<md-dialog-actions>\r\n\t\t\t\t\t<div layout="row" class="demo-dialog-button">\r\n\t\t\t\t\t\t<md-button class="md-primary" ng-click="closeDialog()">\r\n\t\t\t\t\t\t\tSluiten\r\n\t\t\t\t\t\t</md-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</md-dialog-actions>\r\n\t\t\t</md-content>\r\n\t\t</md-dialog-content>\r\n\t</md-dialog>';
var disclaimerDialog_enUS_HTML = '<md-dialog aria-label="Disclaimer">\r\n\t\t<md-dialog-content id="disclaimerDialog">\r\n\t\t\t<md-toolbar md-autofocus >\r\n\t\t\t\t<div class="md-toolbar-tools">\r\n\t\t\t\t\t<h2>LIMO COOKIE POLICY</h2>\r\n\t\t\t\t\t<span flex></span>\r\n\t\t\t\t\t<md-button  class="md-icon-button" ng-click="closeDialog()">\r\n\t\t\t\t\t\t<md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n\t\t\t\t\t</md-button>\r\n\t\t\t\t</div>\r\n\t\t\t</md-toolbar>\r\n\t\t\t<md-content>\r\n\t\t\t\t\tLimo uses cookies that facilitate the use of the search engine.\r\n\t\r\n\t\t\t\t<h3>WHAT IS A COOKIE?</h3>\r\n\t\t\t\tCookies are small text files that record your preferences during your browser activities and are saved on your own computer or device.\r\n\t\r\n\t\t\t\t<h3>USE OF COOKIES IN LIMO</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tCookies can on the one hand be <u>functional</u>. These cookies record certain of the choices and settings made on your first visit to allow you to navigate more efficiently, quickly and simply on subsequent visits. These cookies record for example preference settings.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tFor users of the KU Leuven Association, login names can be recorded when logging in via the Central Login page.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tOn the other hand, cookies can also be used to record <u>visit and click activity</u>. This can be used to make anonimised reports of the user of Limo.\r\n\t\t\t\t</p>\r\n\t\t\t\t<!--                \r\n\t\t\t\t\tKU Leuven gebruikt onder andere volgende cookies op de centraal beheerde websites:\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\tNSC_* : Deze cookies worden gebruikt door de netscaler om de loadbalancing te sturen\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>_ga* en _utm*: Dit zijn Google Analytics cookies, gebruikt voor user-tracking (meer info over Google Analytics)\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\t_pk_id* : piwik cookies die gebruikt worden door de user-tracking omgeving van KU Leuven\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\tJSESSIONID: cookies die gebruikt worden in toledo en kuloket\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\tPHPSESSID: cookies die gebruikt voor de lamp omgeving (php)\r\n\t\t\t\t\t </li>\r\n\t\t\t\t\t<li>\t_shibsession* en _saml*: cookies die nodig zijn voor de centrale login van KU Leuven\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t-->\r\n\t\t\t\t<h3>CHANGING BROWSER SETTINGS</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tYou can enable or delete cookies on your computer through your browser settings. \r\n\t\t\t\t\t\tThe way in which this works varies from browser to browser. Consult your browser\u2019s help function if necessary. You must always make this adjustment per browser and per computer!\r\n\t\t\t\t</p>\r\n\t\t\t\r\n\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies#ie=ie-10-win-7" target="_blank">Cookie settings in Internet Explorer</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="https://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Cookie settings in Chrome</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies"\r\n\t\t\t\t\t\t\ttarget="_blank">Cookie settings in Firefox</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="https://support.apple.com/kb/PH19214?locale=nl_BE" target="_blank">Cookie settings in Safari</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tNot accepting, disabling or deleting cookies may result in certain functionalities of the Limo website being no longer accessible or operating normally. \r\n\t\t\t\t\t\tThis may make your website experience unsatisfactory.\r\n\t\t\t\t</p>\r\n\t\t\t\t<h3>SOCIAL MEDIA AND THE CORRESPONDING PLUG-INS</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tMany social media (such as, Facebook, Linkedin, Twitter, Google+, Tumblr, etc.) \r\n\t\t\t\t\t\treceive a lot of information on your browsing habits through social plug-ins on their websites (for example by way of the Like or Share buttons).\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tThese buttons may also be found on the web pages of the Limo results list.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tIf you want to protect yourself from these, then you are advised (by, among other agencies, the Belgian Commission for the Protection of Privacy) to take one of the steps below.\r\n\t\t\t\t</p>\r\n\t\r\n\t\t\t\t<ol>\r\n\t\t\t\t\t<li>Install a browser that blocks add-on tracking. Examples of such browser add-ons are:\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>Privacy Badger (\r\n\t\t\t\t\t\t\t\t<a href="http://www.eff.org/privacybadger" target="_blank">http://www.eff.org/privacybadger</a>)</li>\r\n\t\t\t\t\t\t\t<li>Ghostery (\r\n\t\t\t\t\t\t\t\t<a href="https://www.ghostery.com/" target="_blank">https://www.ghostery.com</a>)</li>\r\n\t\t\t\t\t\t\t<li>Disconnect (\r\n\t\t\t\t\t\t\t\t<a href="https://disconnect.me/disconnect" target="_blank">https://disconnect.me/disconnect</a>)</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t<li>Make use of your browser\u2019s incognito or private navigation mode. \r\n\t\t\t\t\t\tRecent versions of the most popular browsers provide such a private navigation mode:\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href="https://support.microsoft.com/en-us/products/windows?os=windows-10">Internet Explorer</a></li>\r\n\t\t\t\t\t\t\t<li><a href="https://support.mozilla.org/nl/kb/privenavigatie-firefox-gebruiken-zonder-geschiedenis">Firefox</a></li>\r\n\t\t\t\t\t\t\t<li><a href="https://support.google.com/chrome/answer/95464?hl=nl">Chrome</a></li>\r\n\t\t\t\t\t\t\t<li><a href="https://support.apple.com/kb/PH19216?locale=nl_NL">Safari</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ol>\r\n\t\r\n\t\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tThis function forces your browser to erase all tracks of your browsing activity (cookies, history, etc.) after you have closed the window and therefore protects you from being tracked by third parties (please note: this function does not make you anonymous on the web). \r\n\t\t\t\t\t\tThere are also special browsers that protect privacy, such as Privacy Browser  \r\n\t\t\t\t\t\t(<a href="http://www.epicbrowser.com/" target="_blank">www.epicbrowser.com</a>).</p>\r\n\t\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\tSocial media and other websites use information about the browsing activity of its users to provide them with targeted advertising. If you no longer want to be tracked by targeted advertising, \r\n\t\t\t\t\t\tyou can choose to opt out of targeted advertisements via the opt-out website of the European Interactive Digital Advertising Alliance \r\n\t\t\t\t\t (<a href="http://www.youronlinechoices.eu/" target="_blank">www.youronlinechoices.eu</a>).\r\n\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\tOpting out of targeted advertisements does not mean that information is no longer collected on your browsing activities. If you also want to protect yourself from the collection of this information, \r\n\t\t\t\t\t\t\tyou are advised to also use the incognito mode of your browser or one of the above-mentioned browser add-ons..</p>\r\n\t\r\n\t\t\t\t<h3>WANT MORE INFORMATION?</h3>\r\n\t\r\n\t\t\t\t<p>You will find more information on the following websites: \r\n\t\t\t\t\t<a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a> and \r\n\t\t\t\t\t<a href="http://www.youronlinechoices.com/be-nl/" target="_blank">www.youronlinechoices.com/be-nl</a>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\tLIBIS reserves the right to amend this policy at any time. You will always find the most recent version of the Cookie Statement on this page.\r\n\t\t\t</p>\r\n\r\n\t\t\t\t<md-dialog-actions>\r\n\t\t\t\t\t<div layout="row" class="demo-dialog-button">\r\n\t\t\t\t\t\t<md-button class="md-primary" ng-click="closeDialog()">\r\n\t\t\t\t\t\t\tClose\r\n\t\t\t\t\t\t</md-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</md-dialog-actions>\r\n\t\t\t\t\r\n\t\t\t</md-content>\r\n\t\t</md-dialog-content>\r\n\t</md-dialog>';
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

      /* Todo Refactory disclaimerDialog / cookiePolicy ??? */
      //    let disclaimerDialog = disclaimerDialogHTML; 
    };var disclaimerDialog = cookiePolicyDialogHTML;
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchTipHTML = '<a aria-label="{{title_label}}" title="{{title_label}}" ng-click="showSearchTips()">\r\n  <span class ="md-headline" id="ContentSearchTips">\r\n    {{title}}\r\n  </span>\r\n</a>\r\n';
var tip_enUS_HTML = '<md-dialog aria-label="Search tips">\r\n    <md-dialog-content id="searchtips">\r\n\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Search tips</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n\r\n        <md-content>\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        Limo assumes that you are searching for all of the words unless you type OR or NOT between words and phrases.\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        For phrases use quotes: "global warming"\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        For truncated searches use an asterisk: gun* will retrieve gun, guns, gunners, gunnery, gunning, etc.\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        As a wildcard for one character, use ?:  wom?n will retrieve woman and women.\r\n                    </div>\r\n                </md-list-item>\r\n\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        To exclude a term use NOT (in uppercase): celtic NOT Irish\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        To group terms use brackets: Shakespeare (tragedy OR sonnet). OR is in uppercase\r\n                   </div>\r\n                </md-list-item>\r\n            </md-list>\r\n<!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                        For users of Internet Explorer:<br/>\r\n                        Limo should be viewed with version 9 or higher.<br />\r\n                        If you have an earlier version, it is a good idea to upgrade your browser. <br />\r\n                    </div>\r\n                </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button class="md-primary" ng-click="closeDialog()">\r\n                        Close\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';
var tip_frFR_HTML = '<md-dialog aria-label="Zoektips">\r\n    <md-dialog-content id="searchtips">\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Trucs & astuces</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-content>\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Limo suppose que vous recherchez tous les mots, sauf si vous tapez OR ou NOT entre des mots et des phrases.\r\n                        </div>\r\n                    </md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        utilisez des guillemets pour les phrases/expressions exactes: "r\xE9chauffement global"\r\n                    </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez un ast\xE9risque pour les recherches tronqu\xE9es: vin* donnera vinage, vinaigre, vinasse, vineux etc.\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez ? comme caract\xE8re de remplacement: fe?me donnera femme et ferme\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez NOT (en capitales) pour exclure un mot: celtique NOT irlandais\r\n                        </div>\r\n                    </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        utilisez des parenth\xE8ses pour grouper les termes: Shakespeare (trag\xE9die OR sonnet). OR est \xE9crit en capitales\r\n                    </div>\r\n                </md-list-item>\r\n            </md-list>\r\n            <!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                Pour les utilisateurs d\'Internet Explorer:<br/>\r\nIl est recommand\xE9 d\'utiliser la version 9 ou ult\xE9rieure.<br/>\r\nSi vous avez une version plus ancienne, il est conseill\xE9 de mettre \xE0 jour votre navigateur.<br/>\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button class="md-primary" ng-click="closeDialog()">\r\n                        Astuces\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';
var tip_nlBE_HTML = '<md-dialog aria-label="Zoektips">\r\n    <md-dialog-content id="searchtips">\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Zoektips</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-content>\r\n            <md-list class="md-dense" flex>                \r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Limo zoekt op alle woorden die je ingeeft, tenzij je OR of NOT zet tussen de zoektermen.\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        Gebruik "" om te zoeken op exacte woordcombinatie: "global warming"\r\n                    </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik een * of ? om te zoeken op delen van woorden:\r\n                            <p style="padding-left:1em;">\r\n                                gun* vindt gun, guns, gunners, gunnery, gunning, enz.<br />\r\n                                wom?n vindt woman en women\r\n                            </p>\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik NOT (in hoofdletters) om een zoekterm uit te sluiten: celtic NOT Irish\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik haakjes om termen te groeperen: Shakespeare (tragedy OR sonnet). OR is in hoofletters\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n            <!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                        Voor gebruikers van Internet Explorer:<br />\r\n                        Limo wordt best bekeken via version 9 of hoger.<br />\r\n                        Gelieve uw browser te upgraden indien u over een lagere versie beschikt.<br />\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button class="md-primary" ng-click="closeDialog()">\r\n                        Sluiten\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';

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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var altmetricHTML = '<div  id="altmetrics_{{$ctrl.recordid}}">\r\n<div ng-if="$ctrl.doi" class="altmetric-embed" style="padding-top:0.5em"\r\n    data-badge-popover="right" data-badge-type="2" data-hide-no-mentions="true" data-link-target="_blank" class="altmetric-embed"\r\n    data-doi="{{$ctrl.doi}}"\r\n    aria-label="Social Popularity Statistics (AltMetrics)">\r\n</div>\r\n</div>';

var AltMetricController = function AltMetricController($scope, $element, $compile, $window, $timeout, AltmetricsService) {
  _classCallCheck(this, AltMetricController);

  var self = this;
  var item = self.parentCtrl.parentCtrl.item;
  /*
      this.element = $element;
      this.window = $window;
  */
  self.doi = '';
  self.recordid = self.parentCtrl.parentCtrl.item.pnx.control.recordid[0];
  if (item && item.pnx && item.pnx.addata && item.pnx.addata.doi) {
    self.doi = self.parentCtrl.parentCtrl.item.pnx.addata.doi[0];

    this.recordid = self.recordid;
    AltmetricsService.addAltmetrics('#altmetrics_' + self.recordid).then(function (result) {});
  }
};

var altmetricConfig = exports.altmetricConfig = {
  bindings: { parentCtrl: '<' },
  controller: AltMetricController,
  template: altmetricHTML
};

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sourceIconHTML = '<style>\r\n  div.sourceid {\r\n    display: inline-flex;\r\n    /* margin-left: 1em; */\r\n     /* margin-top: -2px; */\r\n    position: relative; \r\n  }\r\n\r\n\r\n  div.sourceid img.source-icon {\r\n    display: inline-block;\r\n    max-height: 18px;\r\n    width: auto;\r\n    height: auto;\r\n    transform: none;\r\n    min-width: auto;\r\n    min-height: auto;\r\n    vertical-align: bottom;\r\n  }\r\n\r\n  div.sourceid span.source-text {\r\n    font-size: small;\r\n    margin-left: 0.4em;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n  }\r\n</style>\r\n\r\n<div ng-if="$ctrl.sourceid" class="sourceid">\r\n  <img ng-src="{{$ctrl.icon.iconUrl}}" class="source-icon">\r\n  <span class="source-text">{{$ctrl.icon.iconText}}</span>\r\n</div>\r\n';

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
    self.sourceid = parentCtrl.item.pnx.control.sourceid[0].toLowerCase();

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

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//facets.facet.facet_search_also in "facet labels"
var SearchAlsoController = function SearchAlsoController($scope) {
  var _this = this;

  _classCallCheck(this, SearchAlsoController);

  $scope.$watch(function () {
    return _this.parentCtrl.parentCtrl.facetService.results;
  }, function (n, o) {
    if (n != o) {
      if (_this.parentCtrl.parentCtrl.facetService.results.filter(function (f) {
        return f.name == 'search_also';
      }).length == 0) {
        _this.parentCtrl.parentCtrl.facetService.results.unshift({
          name: 'search_also',
          displayedType: 'exact',
          limitCount: 0,
          facetGroupCollapsed: false,
          values: undefined
        });
      }
    }
  });
};

SearchAlsoController.$inject = ['$scope'];

var searchAlsoConfig = exports.searchAlsoConfig = {
  bindings: { parentCtrl: '<' },
  controller: SearchAlsoController
};

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchAlsoBodyHTML = '<div ng-if="$ctrl.name === \'search_also\'" class="lbs-search-also">\r\n  <div ng-hide="$ctrl.parentCtrl.parentCtrl.facetGroup.facetGroupCollapsed">\r\n    <div class="section-content animate-max-height-variable">\r\n      <div class="md-chips md-chips-wrap">\r\n        <div ng-repeat="target in $ctrl.targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">\r\n          <div class="md-chip-content layout-row" role="button" tabindex="9">\r\n            <strong dir="auto" title="{{ target.name }}">\r\n              <a ng-href="{{ target.url + target.mapping($ctrl.search) }}" target="_blank"  title="{{ (target.tooltip | translate )}}">\r\n                <img ng-src="{{ target.img }}" width="22" height="22" style="vertical-align:middle;padding-right:2px;"> {{ target.name }}\r\n              </a>\r\n            </strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

var SearchAlsoBodyController = function () {
  function SearchAlsoBodyController($location) {
    _classCallCheck(this, SearchAlsoBodyController);

    this.location = $location;
    this.targets = this._targets();
  }

  _createClass(SearchAlsoBodyController, [{
    key: '_targets',
    value: function _targets() {
      return [{
        "name": "UniCat",
        "url": "https://unicat.be/uniCat?func=search&uiLanguage=en&query=",
        "img": "/primo-explore/custom/CENTRAL_PACKAGE/img/unicat_icon.png",
        "tooltip": "lbs.nui.search_also.tooltip.unicat",
        mapping: function mapping(search) {
          var terms = search.split(",");
          return terms[2] || "";
        }
      },
      // {
      //   "name": "Google Scholar",
      //   "url": "https://scholar.google.com/scholar?q=",
      //   "img": "/primo-explore/custom/CENTRAL_PACKAGE/img/google_icon.png",
      //   "tooltip": "lbs.nui.search_also.tooltip.google_scolar",
      //   mapping: function mapping(search) {
      //     var terms = search.split(",");
      //     return terms[2] || "";
      //   }
      // },
      {
        "name": "Worldcat",
        "url": "https://www.worldcat.org/search?q=",
        "img": "/primo-explore/custom/CENTRAL_PACKAGE/img/worldcat_icon.png",
        "tooltip": "lbs.nui.search_also.tooltip.worldcat",
        mapping: function mapping(search) {
          var type_mappings = {
            "any": "kw",
            "title": "ti",
            "creator": "au",
            "subject": "su"
          };
          var terms = search.split(",");
          var type = type_mappings[terms[0]] || "kw";
          var query = terms[2] || "";
          return type + ':' + query;
        }
      }];
    }
  }, {
    key: 'search',
    get: function get() {
      return this.location.search().query || '';
    }
  }, {
    key: 'name',
    get: function get() {
      return this.parentCtrl.parentCtrl.facetGroup.name;
    }
  }]);

  return SearchAlsoBodyController;
}();

SearchAlsoBodyController.$inject = ['$location'];

var searchAlsoBodyConfig = exports.searchAlsoBodyConfig = {
  bindings: { parentCtrl: '<' },
  controller: SearchAlsoBodyController,
  template: searchAlsoBodyHTML
};

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The altmetrics component controller. (https://github.com/Det-Kongelige-Bibliotek/primo-explore-rex/blob/master/js/altmetrics.component.js)
 *
 */
var AltmetricsBadgeHTML = '\r\n<div  id="full_altmetrics_{{$ctrl.recordid}}">\r\n    <div ng-if="$ctrl.doi" class="altmetric-embed" style="padding-top:0.5em"\r\n        data-badge-type=\'donut\' \r\n        data-badge-details=\'right\'\r\n\r\n        data-link-target="_blank" \r\n        data-doi="{{$ctrl.doi}}"\r\n\r\n\r\n          data-condensed=\'true\' \r\n\r\n\r\n        aria-label="Social Popularity Statistics (AltMetrics)">\r\n    </div>\r\n</div>\r\n';

var AltmetricsBadgeController = function () {
  function AltmetricsBadgeController($scope, $element, $compile, $rootScope, $window, $timeout, AltmetricsService) {
    _classCallCheck(this, AltmetricsBadgeController);

    var self = this;
    self.$element = $element;
    self.$scope = $scope;
    self.AltmetricsService = AltmetricsService;
  }

  _createClass(AltmetricsBadgeController, [{
    key: '$onInit',
    value: function $onInit() {
      var self = this;
      self.parentCtrl = this.parentCtrl.parentCtrl;
      self.item = self.parentCtrl.item;
      self.recordid = self.item.pnx.control.recordid[0];
      self.doi = '';

      //polyfill
      if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      if (!Element.prototype.closest) Element.prototype.closest = function (s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
          if (el.matches(s)) return el;
          el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
      };
      //end polyfill

      if (self.item && self.item.pnx && self.item.pnx.addata && self.item.pnx.addata.doi) {
        self.doi = self.item.pnx.addata.doi[0];
        self.AltmetricsService.addAltmetrics('#full_altmetrics_' + self.recordid).then(function (result) {

          if (result) {
            var altmetricsSection = {
              scrollId: "altmetrics",
              serviceName: "altmetrics",
              title: "brief.results.tabs.Altmetrics"
            };

            Promise.resolve(self.parentCtrl.fullViewService.getServices(self.parentCtrl.item, self.parentCtrl.originator)).then(function (services) {
              // Add to services if not alread in the list
              if (services.findIndex(function (service) {
                return service.scrollId === "altmetrics";
              }) < 0) {
                services.splice(services.length, 10, altmetricsSection);
              }
            });
          }
        });
      }

      if (self.doi !== '') {
        var unbindWatcher = this.$scope.$watch(function () {
          //return self.$element[0].parentElement.parentElement.querySelector('h4[translate="brief.results.tabs.Altmetrics"]');
          return self.$element[0].closest('#fullView').querySelector('h4[translate="brief.results.tabs.Altmetrics"]');
        }, function (newVal, oldVal) {
          if (newVal) {
            //Get the section body associated with the value we're watching
            var altmetricsContainer = newVal.closest('prm-full-view-service-container').querySelector('div.section-body');
            var altmetricsResult = self.$element[0];
            if (altmetricsContainer && altmetricsContainer.appendChild && altmetricsResult) {
              altmetricsContainer.appendChild(altmetricsResult);
              window._altmetric_embed_init(altmetricsContainer);
            }
            unbindWatcher();
          }
        });
      }
    }
  }]);

  return AltmetricsBadgeController;
}();

;

var altmetricsBadgeConfig = exports.altmetricsBadgeConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: AltmetricsBadgeController,
  template: AltmetricsBadgeHTML
};

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LanguageDependentLogoController = function LanguageDependentLogoController($scope, $element, $compile, $http, $rootScope) {
  _classCallCheck(this, LanguageDependentLogoController);

  var self = this;
  self.scope = $scope;
  self.rootScope = $rootScope;

  Primo.view.then(function (view) {
    var vid = view.code;

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
  });
};

LanguageDependentLogoController.$inject = ['$scope', '$element', '$compile', '$http', '$rootScope'];

var languageDependentLogoConfig = exports.languageDependentLogoConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: LanguageDependentLogoController,
  template: ''
};

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newSearchButtonHTML = "<a class=\"zero-margin flex-button multi-line-button button-over-dark md-button md-primoExplore-theme md-ink-ripple layout-align-center-center layout-column\"\r\nhref=\"{{ $ctrl.homePageLink }}\"  layout=\"column\" layout-align=\"center center\" (click)=\"::$ctrl.removeStickyFacets()\" \r\n    aria-label=\"New Search\" aria-hidden=\"false\" tabindex=\"0\">\r\n    <span class=\"item-content\" translate=\"lbs.nui.default.nui.new_search\">New Search</span>\r\n</a>\r\n";

var NewSearchButtonController = function NewSearchButtonController($scope, $element, $compile, $http, $rootScope) {
  _classCallCheck(this, NewSearchButtonController);

  var self = this;
  self.scope = $scope;
  self.rootScope = $rootScope;
  $element.parent().parent().prepend($compile(newSearchButtonHTML)($scope));

  Primo.view.then(function (view) {
    var vid = view.code;
    if (vid == "ECB") {
      self.linktype = "newSearchButton";
    }
    var locale = view.interfaceLanguage; //window.Primo.explore.helper.userSessionManagerService().i18nService.getLanguage();

    self.homePageLink = '/primo-explore/search?vid=' + vid + "&lang=" + locale;

    self.removeStickyFacets = function () {
      var prmAdvancedSearch = Primo.explore.components.get('prm-advanced-search');
      if (prmAdvancedSearch) {
        var c = prmAdvancedSearch[0].ctrl();
        c.clearSearchForm();
        c.$scope.$apply();
      }

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

NewSearchButtonController.$inject = ['$scope', '$element', '$compile', '$http', '$rootScope'];

var newSearchButtonConfig = exports.newSearchButtonConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: NewSearchButtonController,
  template: ''
};

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var viewLogoHTML = '\r\n <div class="product-logo" id="banner" aria-label="{{ \'nui.aria.logo.link.open\' | translate}}">\r\n  <a ng-href="{{ $ctrl.homePageLink }}" ng-click=" $ctrl.logoClick() " href="{{ $ctrl.homePageLink }} "> \r\n    <img class="logo-image" translate-attr="{ alt: \'nui.header.LogoAlt\' }" ng-src="{{  $ctrl.localeLibraryLogo }}" src="{{  $ctrl.localeLibraryLogo }}" />\r\n  </a>\r\n</div>\r\n';

var ViewLogoController = function ViewLogoController($scope, $translate, $element, $compile, $http, $rootScope) {
  _classCallCheck(this, ViewLogoController);

  var self = this;
  self.scope = $scope;
  self.rootScope = $rootScope;
  $element.parent().parent()[0].firstChild.parentNode.removeChild($element.parent().parent()[0].firstChild);

  $translate('limo.instituteUrl').then(function (message) {
    self.homePageLink = message;
  });

  Primo.view.then(function (view) {
    var vid = view.code;
    var locale = view.interfaceLanguage; //window.Primo.explore.helper.userSessionManagerService().i18nService.getLanguage();
    var localeLibraryLogo = 'custom/' + vid + '/img/library-logo-' + locale + '.png';
    self.homePageLink = '/primo-explore/search?vid=' + vid + "&lang=" + locale;
    self.localeLibraryLogo = window.appConfig.customization.libraryLogo;

    if (self.localeLibraryLogo !== localeLibraryLogo) {
      $http({
        method: 'GET',
        url: localeLibraryLogo
      }).then(function (response) {
        window.appConfig.customization.libraryLogo = localeLibraryLogo;
        self.localeLibraryLogo = localeLibraryLogo;
      });
    }
  });
};

ViewLogoController.$inject = ['$scope', '$translate', '$element', '$compile', '$http', '$rootScope'];

var viewLogoConfig = exports.viewLogoConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: ViewLogoController,
  template: viewLogoHTML
};

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var feedbackHTML = '<!--\r\n  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\r\n             class="zero-margin flex-button multi-line-button button-over-dark"\r\n             layout="column" layout-align="center center" (click)="$ctrl.showFeedbackForm($event)"\r\n             aria-label="mainmenu.label.feedback">\r\n\r\n      <span class="item-content" translate="mainmenu.label.feedback"></span>\r\n      <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\r\n        <span class="item-description popover animate-popover"\r\n              translate="nui.mainmenu.description.feedback"></span>\r\n      </md-tooltip>\r\n  </md-button>\r\n-->\r\n\r\n<style>\r\n  #mainMenu #mainMenuHelp {\r\n    display: none;\r\n  }\r\n\r\n  #mainMenu #mainMenuFeedback,\r\n  #mainMenu #mainMenuHelp {\r\n    max-width: 60px;\r\n    min-width: 55px;\r\n  }\r\n\r\n  #mainMenu #mainMenuFeedback {\r\n    margin-left: 3em !important;\r\n    box-shadow: 1px 0 0 0 rgba(0, 0, 0, .1), -1px 0 0 0 rgba(0, 0, 0, .1);\r\n  }\r\n\r\n  @media (max-width : 959px) {\r\n    #mainMenu #mainMenuFeedback,\r\n    #mainMenu #mainMenuHelp {\r\n      padding-left: 0.2em;\r\n      padding-right: 0.2em;\r\n    }\r\n  }\r\n\r\n  @media (max-width : 750px) {\r\n    #mainMenu #mainMenuFeedback,\r\n    #mainMenu #mainMenuHelp {\r\n      display: none;\r\n    }\r\n  }\r\n</style>\r\n\r\n<md-button id=\'mainMenuFeedback\' tabindex="0" role="listitem" tabindex="0" ng-href="" class="zero-margin flex-button multi-line-button button-over-dark"\r\n  layout="column" layout-align="center center" (click)="$ctrl.showFeedbackForm($event)" aria-label="mainmenu.label.feedback">\r\n  <!--\r\n        <span class="item-content" translate="mainmenu.label.feedback"></span>\r\n                -->\r\n  <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_announcement_24px"></prm-icon>\r\n\r\n  <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\r\n    <span class="item-description popover animate-popover" translate="nui.mainmenu.description.feedback"></span>\r\n  </md-tooltip>\r\n</md-button>\r\n\r\n\r\n<md-button id=\'mainMenuHelp\' tabindex="0" role="listitem" tabindex="0" ng-href="https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/050New_Primo_User_Interface/End_User_Help_-_New_UI"\r\n  class="zero-margin flex-button multi-line-button button-over-dark" layout="column" layout-align="center center" aria-label="mainmenu.label.help"\r\n  target="_blank">\r\n  <!--\r\n        <span class="item-content" translate="mainmenu.label.help"></span>\r\n                -->\r\n  <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="help-circle-outline"></prm-icon>\r\n\r\n  <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\r\n    <span class="item-description popover animate-popover" translate="nui.mainmenu.description.help"></span>\r\n  </md-tooltip>\r\n</md-button>';
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var browzineHTML = 'browzine';

var BrowzineController = function BrowzineController($scope) {
    _classCallCheck(this, BrowzineController);

    var self = this;
    var item = self.parentCtrl.parentCtrl.result;

    console.log("-------->", self, item, $scope);

    self.recordid = '';

    if (item && item.pnx && item.pnx.addata) {
        self.recordid = item.pnx.control.recordid[0];
    }

    var browzineWatcher = $scope.$watch(function () {
        return _typeof(browzine.primo) === 'object';
    }, function (n, o) {
        if (n == true) {
            console.log("trigger browzine for:", self.recordid);
            var scope = {
                $ctrl: self.parentCtrl
            };
            window.browzine.primo.searchResult(scope);
            browzineWatcher();
        }
    });
};

BrowzineController.$inject = ['$scope'];

var browzineConfig = exports.browzineConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: BrowzineController
};

},{}],26:[function(require,module,exports){
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

      if (document.querySelectorAll('pnx-xml-trigger').length == 0) {
        var div = document.createElement('pnx-xml-trigger');
        div.setAttribute('style', 'position:fixed;left:0;bottom:0;height:20px;width:20px;z-index:1000;background-color:black;opacity:.03');
        div.onclick = function (event) {
          self.visible = !self.visible;

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = Array.from(document.querySelectorAll('.pnx-xml'))[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var element = _step2.value;

              element.style.display = self.visible ? 'flex' : 'none';
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        };
        document.body.appendChild(div);
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

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reportAProblemHTML = '  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\r\n             class="zero-margin button-link md-button md-primoExplore-theme md-ink-ripple"\r\n             layout="column" layout-align="center center" (click)="$ctrl.showReportAProblemForm($event)"\r\n             aria-label="lbs.nui.details.report_a_problem">\r\n\r\n      <span class="item-content" translate="lbs.nui.details.report_a_problem"></span>\r\n      <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\r\n        <span class="item-description popover animate-popover"\r\n              translate="lbs.nui.details.description.report_a_problem"></span>\r\n      </md-tooltip>\r\n  </md-button>\r\n';
var reportAProblemDialogHTML = '<!-- translations in CODE TABLES -> View Labels -->\r\n<md-dialog id=\'lbsReportAProblemForm\' aria-label=\'Report a problem\'>\r\n    <md-toolbar>\r\n        <div class="md-toolbar-tools">\r\n            <h2><span translate="lbs.nui.details.report_a_problem"></span></h2>\r\n            <span flex></span>\r\n            <md-button class="md-icon-button" ng-click="cancelReport()">\r\n                <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\r\n            </md-button>\r\n        </div>\r\n    </md-toolbar>\r\n    <md-dialog-content>\r\n      <form name=\'reportAProblemForm\'>\r\n        <div class="md-dialog-content">\r\n            <input type="hidden" name=\'subject\' ng-model=\'report.subject\'>\r\n            <md-input-container class="md-block">\r\n                <label><span translate="lbs.nui.details.email"></span></label>\r\n                <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'report.replyTo\' ng-pattern="/^.+@.+\\..+$/">\r\n                <div ng-if=\'reportAProblemForm.replyTo.$error.required\' role="alert">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\r\n                </div>\r\n                <div ng-if=\'reportAProblemForm.replyTo.$error.email\' role="error">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\r\n                </div>\r\n            </md-input-container>\r\n            <md-input-container>\r\n                <label><span translate="lbs.nui.details.message.description.label"></span></label>\r\n                <textarea name="message" placeholder="{{ \'lbs.nui.details.message.description\' | translate }}" md-maxlength="5000" required md-no-asterisk rows="5" cols="80" ng-model="report.message"></textarea>\r\n                <div ng-if=\'reportAProblemForm.message.$error.required\' role="error">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.message.mandatory"></span></div>\r\n                </div>\r\n            </md-input-container>\r\n        </div>\r\n      </form>\r\n    </md-dialog-content>\r\n    <md-dialog-actions layout="row">\r\n        <md-button class="md-raised" ng-click="cancelReport()">Cancel</md-button>\r\n        <md-button class="md-raised md-primary " ng-click=\'sendReport()\'>Submit</md-button>\r\n    </md-dialog-actions>\r\n</md-dialog>\r\n';

var ReportAProblemController = function () {
  function ReportAProblemController($element, $compile, $scope, $mdDialog, $mdToast, $http, reportAProblemURL) {
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
                      url: reportAProblemURL,
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
        // console.log(elementCtrl);
        return elementCtrl.item;
      }
      return null;
    }
  }]);

  return ReportAProblemController;
}();

ReportAProblemController.$inject = ['$element', '$compile', '$scope', '$mdDialog', '$mdToast', '$http', 'reportAProblemURL'];

var reportAProblemConfig = exports.reportAProblemConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: ReportAProblemController,
  template: ''
};

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestACopyHTML = '  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\r\n             class="zero-margin button-link md-button md-primoExplore-theme md-ink-ripple request-a-copy"\r\n             layout="column" layout-align="center center" (click)="$ctrl.showRequestACopyForm($event)"\r\n             aria-label="lbs.nui.details.request_a_copy">\r\n\r\n                  \r\n <!--       \r\n      <span class="item-content" translate="lbs.nui.details.request_a_copy"> <i class="material-icons">shopping_cart</i></span>\r\n-->\r\n<span class="item-content" ><i class="material-icons">shopping_cart</i> Request a copy</span>\r\n            <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\r\n        <span class="item-description popover animate-popover"\r\n              translate="lbs.nui.details.description.request_a_copy"></span>\r\n       </md-tooltip>\r\n  </md-button>\r\n\r\n\r\n  <style>\r\n.md-button.request-a-copy{\r\n      /* background-color: blueviolet; */\r\n      width: fit-content;\r\n      color: #265f8d;\r\n      background-color: rgba(92, 146, 189, 0.1);\r\n}\r\n\r\n\r\n.md-button.button-link.request-a-copy:hover:not([disabled]) {\r\n      color: #fff;\r\n      background-color: #08a7eb;\r\n}\r\n\r\n\r\n  </style>';
var requestACopyDialogHTML = '<!-- translations in CODE TABLES -> View Labels -->\r\n\r\n\r\n<md-dialog id=\'lbsRequestACopyForm\' aria-label=\'Request a copy\'>\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>\r\n                    <span translate="lbs.nui.details.request_a_copy"></span>\r\n                </h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="cancelRequest()">\r\n                    <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-dialog-content>\r\n          <form name=\'requestACopyForm\'>\r\n            <div class="md-dialog-content">\r\n                <md-container class="md-block">\r\n                    <div style="font-size:0.8rem; border-bottom: #e9e9e9 1px solid; margin-bottom: 18px">\r\n                                <span ng-bind="request.title"></span><br>\r\n                                <span ng-bind="request.creator"></span> <span ng-bind="request.contributorsr"></span><br>\r\n                                <span ng-bind="request. ispartof"></span>\r\n                     </div>\r\n                </md-container>\r\n                <input type="hidden" name=\'subject\' ng-model=\'request.subject\'>\r\n                \r\n                <md-input-container class="md-block" style="margin-top: 36px;">\r\n                    <label><span translate="lbs.nui.details.email"></span></label>\r\n                    <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'request.replyTo\' ng-pattern="/^.+@.+\\..+$/">\r\n                    <div ng-if=\'requestACopyForm.replyTo.$error.required\' role="alert">\r\n                      <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\r\n                    </div>\r\n                    <div ng-if=\'requestACopyForm.replyTo.$error.email\' role="error">\r\n                      <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\r\n                    </div>\r\n                </md-input-container>\r\n                <md-input-container lass="md-block" style="margin-top: 36px;">\r\n                    <label><span translate="lbs.nui.request_a_copy.motivation.label"></span></label>\r\n                    <textarea name="motivation" placeholder="{{ \'lbs.nui.request_a_copy.motivation.description\' | translate }}" \r\n                    md-maxlength="5000" required md-no-asterisk rows="5" cols="80" ng-model="request.motivation"></textarea>\r\n                    <div ng-if=\'requestACopyForm.motivation.$error.required\' role="error">\r\n                      <div style=\'color:tomato;\'><span translate="lbs.nui.request_a_copy.motivation.mandatory"></span></div>\r\n                    </div>\r\n                </md-input-container>\r\n\r\n                <md-input-container class="md-block">\r\n                        <div vc-recaptcha key="capchaPublicKey" on-create="setWidgetId(widgetId)" on-success="setResponse(response)"\r\n                            on-expire="cbExpiration()"></div>\r\n                    </md-input-container>\r\n\r\n            </div>\r\n          </form>\r\n        </md-dialog-content>\r\n        <md-dialog-actions layout="row">\r\n            <md-button class="md-raised" ng-click="cancelRequest()">Cancel</md-button>\r\n            <md-button class="md-raised md-primary " ng-click=\'sendRequest()\' ng-disabled="requestACopyForm.$invalid">Submit</md-button>\r\n        </md-dialog-actions>\r\n    </md-dialog>\r\n';

var RequestACopyController = function () {
  function RequestACopyController($element, $compile, $scope, $mdDialog, $mdToast, $http, $rootScope, requestACopyURL, MessageService) {
    _classCallCheck(this, RequestACopyController);

    var self = this;
    self.$rootScope = $rootScope;
    // If you want to add the button to the title (like report a problem)
    //let serviceTitleCode = self.parentCtrl.parentCtrl.title
    //let appendButtonTo = $element.parent().parent().find('h4');

    var serviceTitleCode = self.parentCtrl.parentCtrl.service.title;
    var appendButtonTo = $element.parent();
    var recordData = self.currentRecord;
    /* captcha implementation (Already used in )
     https://github.com/VividCortex/angular-recaptcha
     */
    var capchaPublicKey = window.appConfig["system-configuration"]["Public Captcha Key"];

    var TypesShowRequestACopy = ['chapter', 'journal-article', 'thesis-dissertation', 'conference', 'report', 'dataset', 'c-bookreview', 'media', 'software'];

    if (/^nui\.getit\./.test(serviceTitleCode)) {
      var ShowRequestACopyType = recordData.pnx.facets.lfc16.filter(function (value) {
        return -1 !== TypesShowRequestACopy.indexOf(value);
      });

      if (!/^nui\.getit\.tab1_onl_norestrict/.test(serviceTitleCode) && ShowRequestACopyType.length > 0) {

        Primo.user.then(function (user) {
          self.user = user;
          Primo.view.then(function (view) {
            self.view = view;

            self.onCampus = self.user.isOnCampus();
            console.log(serviceTitleCode);
            if (!/^nui\.getit\.tab1_onl_mayrestrict/.test(serviceTitleCode) || /^nui\.getit\.tab1_onl_mayrestrict/.test(serviceTitleCode) && !self.onCampus) {
              appendButtonTo.after($compile(requestACopyHTML)($scope));
            }

            self.showRequestACopyForm = function ($event) {
              $mdDialog.show({
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: false,
                targetEvent: $event,
                template: requestACopyDialogHTML,
                controller: function controller($scope, $mdDialog) {

                  var pnxDisplay = recordData.pnx.display;
                  $scope.gCaptchaResponse = '';
                  $scope.capchaPublicKey = capchaPublicKey;
                  $scope.request = {
                    replyTo: self.user.email,
                    motivation: '',
                    title: pnxDisplay.title[0],
                    contributor: function () {
                      pnxDisplay.contributor ? pnxDisplay.contributor[0] : '';
                    }(),
                    creator: pnxDisplay.creator ? pnxDisplay.creator[0] : '',
                    ispartof: pnxDisplay.ispartof ? pnxDisplay.ispartof[0] : '',
                    subject: 'request a copy'
                  };

                  $scope.setWidgetId = function (widgetId) {
                    console.info('Created widget ID: %s', widgetId);
                    $scope.widgetId = widgetId;
                  };
                  $scope.setResponse = function (response) {
                    console.log("Get response from capture:" + response);
                    $scope.gCaptchaResponse = response;
                  };
                  $scope.cbExpiration = function () {
                    console.info('Expiration Disable Submit');
                    $scope.gCaptchaResponse = '';
                  };

                  $scope.cancelRequest = function () {
                    $mdDialog.cancel();
                  };

                  $scope.sendRequest = function (answer) {

                    var data = {
                      'g-recaptcha-response': $scope.gCaptchaResponse,
                      sessionId: user.id,
                      sourceId: recordData.pnx.control.sourceid[0],
                      recordId: recordData.pnx.control.recordid[0],
                      sourceRecordId: recordData.pnx.control.sourcerecordid[0],
                      title: pnxDisplay.title[0],
                      contributor: function () {
                        pnxDisplay.contributor ? pnxDisplay.contributor[0] : '';
                      }(),
                      creator: pnxDisplay.creator ? pnxDisplay.creator[0] : '',
                      ispartof: pnxDisplay.ispartof ? pnxDisplay.ispartof[0] : '',

                      replyTo: $scope.request.replyTo || self.user.email,
                      motivation: $scope.request.motivation
                    };

                    //  console.log ( data )


                    if ($scope.request.replyTo.length > 0 && $scope.request.motivation.length > 0) {
                      $mdDialog.hide();

                      $http({
                        method: 'POST',
                        url: requestACopyURL,
                        headers: {
                          'Content-Type': 'application/json',
                          'X-From-ExL-API-Gateway': undefined
                        },
                        cache: false,
                        data: data
                      }).then(function (response) {
                        var message = self.$rootScope.$$childHead.$ctrl.$translate.instant('lbs.nui.feedback.success') || 'Thank you the request had been send!';
                        MessageService.__show({
                          message: message,
                          scope: $scope,
                          hideDelay: 5000
                        });
                      }, function (response) {
                        var message = self.$rootScope.$$childHead.$ctrl.$translate.instant('lbs.nui.feedback.fail') || 'Unable to submit the request.';
                        console.log(message);
                        MessageService.__show({
                          message: message,
                          scope: $scope,
                          hideDelay: 5000
                        });
                      });
                    }
                  };
                }
              });
            }; //showRequestACopyForm
          });
        });
      } //if ( ( ! /^nui\.getit\.tab1_onl_norestrict/.test(serviceTitleCode)  ) ){
    } // if (/^nui\.getit\./.test(serviceTitleCode))  
  }

  _createClass(RequestACopyController, [{
    key: 'currentRecord',
    get: function get() {
      var selector = 'prm-full-view-service-container'; //'prm-full-view-service-container'
      var element = angular.element(document.querySelector(selector));
      if (element) {
        var elementCtrl = element.controller(selector);
        // console.log(elementCtrl);
        return elementCtrl.item;
      }
      return null;
    }
  }]);

  return RequestACopyController;
}();

RequestACopyController.$inject = ['$element', '$compile', '$scope', '$mdDialog', '$mdToast', '$http', '$rootScope', 'requestACopyURL', 'MessageService'];

var requestACopyConfig = exports.requestACopyConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: RequestACopyController,
  template: ''
};

},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{"./feedbackAnnouncementDialog":31}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AltmetricsService = function () {
    function AltmetricsService($rootScope, $compile, $mdToast, $timeout, $window) {
        _classCallCheck(this, AltmetricsService);

        this.rootScope = $rootScope;
        this.compile = $compile;
        this.mdToast = $mdToast;
        this.timeout = $timeout;
        this.window = $window;
        var counter = 0;

        this.checkAltmetricscripts = function () {
            var interval = 200;
            var endTime = Number(new Date()) + 15000; // stop control after 5 seconds

            var wait_until_altmetrics_loaded = function wait_until_altmetrics_loaded(resolve, reject) {
                // If the condition is met, we're done! 
                var result = typeof window._altmetric_embed_init === 'function';
                if (result) {
                    resolve(result);
                }
                // If the condition isn't met but the timeout hasn't elapsed, go again
                else if (Number(new Date()) < endTime) {
                        setTimeout(wait_until_altmetrics_loaded, interval, resolve, reject);
                    }
                    // Didn't match and too much time, reject!
                    else {
                            reject(new Error('Wait until altmetrics is loaded timed out'));
                        }
            };
            return new Promise(wait_until_altmetrics_loaded);
        };
    }

    _createClass(AltmetricsService, [{
        key: 'addAltmetrics',
        value: function addAltmetrics(altmetricsElementSelector) {
            return this.checkAltmetricscripts().then(function (result) {
                // console.log('Loading altmetrics: We kunnen starten');
                window._altmetric_embed_init(altmetricsElementSelector);
                return result;
            });
        }
    }]);

    return AltmetricsService;
}();

exports.default = AltmetricsService;
;

AltmetricsService.$inject = ['$rootScope', '$compile', '$mdToast', '$timeout', '$window'];

},{}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

},{"../components/general/dialog":4}],36:[function(require,module,exports){
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

    // this.messageServiceEventHandler = this.rootScope.$on('$translateLoadingEnd', (event) => {
    // console.log("=========> translation loaded <==========");
    // });
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
      var messageKey = 'lbs.generalMessage';

      self.translate(messageKey).then(function (m) {
        message = m == messageKey || m <= 1 ? '' : m;

        self.__show({
          message: message,
          scope: scope,
          hideDelay: hideDelay,
          action: action,
          actionLabel: actionLabel
        });
      });
    }
  }, {
    key: '__show',
    value: function __show() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var self = this;
      var scope = options.scope;
      var hideDelay = options.hideDelay;
      var action = options.action;
      var actionLabel = options.actionLabel;
      var message = options.message;

      // if (message.length == 0) {
      //   // code table entries can not have empty descriptions.
      //   // message <= 1 will not be displayed!!!!
      //   let messageKey = 'lbs.generalMessage';
      //   message = self.translate.instant(messageKey);
      //   message = (message == messageKey || message <= 1) ? '' : message;
      // }

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
    }
  }]);

  return MessageService;
}();

exports.default = MessageService;


MessageService.$inject = ['$rootScope', '$compile', '$mdToast', '$sce', '$translate', '$timeout'];

},{}],37:[function(require,module,exports){
'use strict';

var _primo = require('./primo-explore-dom/js/primo');

var _primo2 = _interopRequireDefault(_primo);

var _helper = require('./primo-explore-dom/js/primo/explore/helper');

var _helper2 = _interopRequireDefault(_helper);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _templates = require('./templates');

var _templates2 = _interopRequireDefault(_templates);

var _feedService = require('./factories/feedService');

var _messageService = require('./factories/messageService');

var _messageService2 = _interopRequireDefault(_messageService);

var _feedbackService = require('./factories/feedbackService');

var _feedbackService2 = _interopRequireDefault(_feedbackService);

var _altmetricsService = require('./factories/altmetricsService');

var _altmetricsService2 = _interopRequireDefault(_altmetricsService);

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
if (window.appConfig.vid == 'ECB') {
  window.browzine = {
    api: "https://public-api.thirdiron.com/public/v1/libraries/1624",
    apiKey: "e71d1c31-7938-470a-8be2-a6e351e0c001",
    journalBrowZineWebLinkText: "View Journal Contents",
    articleBrowZineWebLinkText: "View Issue Contents",
    articlePDFDownloadLinkEnabled: true,
    articlePDFDownloadLinkText: "Download PDF"
  };
}
//let servicesHost = 'http://192.168.100.101:9292/';
var servicesHost = 'https://services.libis.be/';

var app = angular.module('centralCustom', ['ngMaterial', 'vcRecaptcha'])
/*
//.constant('servicesHost', 'https://services.libis.be/')
  .constant('feedbackServiceURL', 'https://services.libis.be/feedback')
  .constant('reportAProblemURL', 'https://services.libis.be/report_a_problem')
  .constant('requestACopyURL', 'http://192.168.100.101:9292//request_a_copy')
*/
.constant('feedbackServiceURL', servicesHost + 'feedback').constant('reportAProblemURL', servicesHost + 'report_a_problem').constant('requestACopyURL', servicesHost + 'request_a_copy').config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
}).run(function ($templateCache, $rootScope) {
  //$templateCache.put('components/search/fullView/full-view.html', fullViewHTML);
  _helper2.default.loadScript('https://unpkg.com/hotkeys-js@2.0.8/dist/hotkeys.min.js').then(function () {
    console.log('hotkeys.js loaded');
  });
  _helper2.default.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
    console.log('altmerics embed.js loaded');
  });
  if (window.appConfig.vid == 'ECB') {
    _helper2.default.loadScript('https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js').then(function () {
      console.log('browzine-primo-adapter.js loaded');
    });
  }
}).factory('FeedService', _feedService.feedService).service('AltmetricsService', _altmetricsService2.default).service('MessageService', _messageService2.default).service('FeedbackService', _feedbackService2.default).factory('apiCallInterceptor', [function () {
  var apiCallInterceptor = {
    response: function response(_response) {
      //"Assessing Gospel Quotations in Justin Martyr"
      var fixDisplayData = function fixDisplayData(pnxData) {
        if (pnxData) {
          try {
            /*
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
            */
          } catch (e) {
            console.log(e);
            console.log('no data');
          }
        }
        return pnxData;
      };

      if (/^\/primo_library\/libweb\/webservices\/rest\/primo-explore\/v1\/pnxs/.test(_response.config.url)) {
        var data = _response.data;
        try {
          if (Object.keys(data).includes('docs')) {
            data.docs.map(function (p) {
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
        //Remove open access from facets
        try {
          if (Object.keys(data).includes('facets')) {
            data["facets"] = data["facets"].map(function (m) {
              if (m.name == "tlevel") {
                m.values = m.values.filter(function (t) {
                  return t.value !== 'open_access';
                });
              }
              return m;
            });
          }
        } catch (e) {
          console.log('no data', e.message);
        }

        _response.data = data;
      }

      return _response;
    }
  };
  return apiCallInterceptor;
}]).config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('apiCallInterceptor');
}]);

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
_templates2.default.all.forEach(function (template) {
  console.log(template.id);
  app.run(function ($templateCache) {
    $templateCache.put(template.id, template.template);
  });
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

},{"./components":1,"./factories/altmetricsService":33,"./factories/feedService":34,"./factories/feedbackService":35,"./factories/messageService":36,"./primo-explore-dom/js/primo":38,"./primo-explore-dom/js/primo/explore/helper":41,"./templates":47}],38:[function(require,module,exports){
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

},{"./primo/explore":39,"./primo/explore/helper":41,"./primo/facets":42,"./primo/records":43,"./primo/user":44,"./primo/view":45}],39:[function(require,module,exports){
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

},{"./explore/components":40,"./explore/helper":41}],40:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":46,"./helper":41}],41:[function(require,module,exports){
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

},{}],42:[function(require,module,exports){
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

},{"./explore/components":40,"./explore/helper":41}],43:[function(require,module,exports){
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

},{"./explore/components":40,"./explore/helper":41}],44:[function(require,module,exports){
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

},{"./explore/helper":41}],45:[function(require,module,exports){
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

},{"./explore/helper":41}],46:[function(require,module,exports){
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

},{}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Replace templates.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Replace the default primo templates http://localhost:8003/primo-explore/lib/templates.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       with custom templates
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       KULeuven/LIBIS (c) 2018
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Tom Vanmechelen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


require('./utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* import your templates */

var changeLangWithoutUserAreaHTML = '<style>\r\n\r\nprm-user-area {\r\n    background-color: transparent;\r\n    display: flex;\r\n}\r\n\r\nprm-change-lang{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n</style>\r\n\r\n<span id="loggedInIndicator" role="alert" class="accessible-only hidden" ng-style="{\'display\': $ctrl.isBlocked}">{{$ctrl.getRoleAlertMessage()}}</span>\r\n<md-button tabindex="-1" class="user-menu-button accessible-only" aria-label="{{($ctrl.userName().length==0 ?  \'nui.clisckSignIn.tooltip\'  : \'nui.clisckSignOut.tooltip\') | translate}}"\r\n    ng-click="$event.stopPropagation();$ctrl.enableMobileMenu()" hide-xs>\r\n</md-button>\r\n<md-button style="display:none" class="user-menu-button accessible-only" aria-label="{{($ctrl.userName().length==0 ?  \'nui.clisckSignIn.tooltip\'  : \'nui.clisckSignOut.tooltip\') | translate}}"\r\n    (click)="$ctrl.changUserStatus()" hide-xs>\r\n</md-button>\r\n\r\n<prm-change-lang aria-label="{{\'eshelf.signin.title\' | translate}}" \r\nng-if="$ctrl.displayLanguage && $ctrl.userName().length == 0 && !$ctrl.detectMobile()"\r\nlabel-type="icon"></prm-change-lang>';
var prmLoanBugFixHTML = '<div class="md-list-item-text md-list-item-with-checkbox" layout="row" layout-wrap flex aria-live="assertive">\r\n    <md-checkbox ng-model="$ctrl.selectedIds[$ctrl.item.loanid]" aria-label="Checkbox {{$index}}" ng-change="$ctrl.toggleSelected($ctrl.item.loanid)"\r\n        ng-if="$ctrl.item[$ctrl.selector]"></md-checkbox>\r\n    <span class="item-index">{{$ctrl.index}}</span>\r\n    <div flex="40" flex-xs="100">\r\n        <div layout="row" class="title-row" ng-class="{\'is-hovered\': isHovered && $ctrl.item[$ctrl.selector]}" ng-mouseenter="isHovered = true"\r\n            ng-mouseleave="isHovered = false">\r\n            <h3 ng-if="::$ctrl.item.title" title="{{::$ctrl.item.title}}">\r\n                    {{::$ctrl.item.title}} \r\n                <span ng-if="!$ctrl.item[$ctrl.selector]">{{::$ctrl.item.title}}</span>\r\n            </h3>\r\n        </div>\r\n        <h4 ng-class="{\'loans-brief-display\':!$ctrl.isExpanded}">\r\n            <span translate="nui.loan.brief.1"></span> {{::($ctrl.item.getBriefDisplayLine(1))}}</h4>\r\n    </div>\r\n    <div flex="40" flex-xs="100" class="weak-text">\r\n        <div ng-if="::$ctrl.item.isActiveLoan()">\r\n            <p class="normal-text" ng-style="$ctrl.item.isDueAlert() && {\'color\':\'tomato\'}">\r\n                <prm-icon ng-if="::$ctrl.item.isDueAlert()" class="alert-red" icon-type="{{::$ctrl.accountIcons.timerIcon.type}}"\r\n                    svg-icon-set="{{::$ctrl.accountIcons.timerIcon.iconSet}}" icon-definition="{{::$ctrl.accountIcons.timerIcon.icon}}"></prm-icon>\r\n                <span translate="{{$ctrl.item.getCodeAlert()}}"></span>: {{($ctrl.item.getDateForBriefDisplay())}}.\r\n                <span ng-if="::($ctrl.item.isFine())">\r\n                    <span translate="nui.loan.fine"></span>: {{::$ctrl.item.fine}}</span>\r\n            </p>\r\n        </div>\r\n        <div ng-if="::(!$ctrl.item.isActiveLoan())">\r\n            <span translate="loans.return_date"></span> {{::($ctrl.item.getDateForBriefDisplay())}}</div>\r\n        <p class="normal-text" ng-class="{\'loans-brief-display\':!$ctrl.isExpanded}">\r\n            <span translate="nui.loan.brief.2"></span>{{::($ctrl.item.getBriefDisplayLine(2))}}</p>\r\n        <div ng-if="$ctrl.isExpanded">\r\n            <p ng-repeat="line in ::$ctrl.item.fullDisplayValues" class="normal-text">\r\n                <span translate="loans.{{::line.key}}"></span> {{::line.value}}</p>\r\n        </div>\r\n    </div>\r\n    <div layout-align="end center" layout="row" flex="20" flex-xs="100" ng-class="{\'not-clickable\': $ctrl.renewAllInProgress}"\r\n        class="list-item-actions">\r\n        <div ng-if="$ctrl.isRenewable && !$ctrl.isRenewed && !$ctrl.renewInProgress">\r\n            <md-button class="button-with-icon zero-margin button-link" (click)="$ctrl.renewLoan()" aria-label="{{\'nui.loans.renew\' | translate}}">\r\n                <prm-icon class="h-flipped" icon-type="{{::$ctrl.accountIcons.renewLoanIcon.type}}" svg-icon-set="{{::$ctrl.accountIcons.renewLoanIcon.iconSet}}"\r\n                    icon-definition="{{::$ctrl.accountIcons.renewLoanIcon.icon}}"></prm-icon>\r\n                <span translate="nui.loans.renew"></span>\r\n            </md-button>\r\n        </div>\r\n        <prm-spinner class="inline-loader half-transparent no-text" layout="row" layout-align="center center" ng-if="$ctrl.renewInProgress"></prm-spinner>\r\n        <div class="item-respond" ng-if="$ctrl.isRenewed">\r\n            <span ng-style="$ctrl.renewResponse.renewed === \'N\' && {\'color\':\'tomato\'} || $ctrl.renewResponse.renewed === \'Y\' && {\'color\':\'green\'}">\r\n                <span translate="{{$ctrl.renewResponse.response || \'loans.renewed.\' + $ctrl.renewResponse.renewed}}"></span>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="align-self-stretch" flex-xs="100">\r\n    <md-button class="item-expand-button" aria-label="{{\'nui.aria.account.requests.expandcollapse\' | translate:\'{title: $ctrl.item.title}\'}}"\r\n        (click)="$ctrl.toggleDisplayMode()">\r\n        <prm-icon ng-class="{\'rotate-180\':$ctrl.isExpanded}" icon-type="{{::$ctrl.accountIcons.expandIcon.type}}" svg-icon-set="{{::$ctrl.accountIcons.expandIcon.iconSet}}"\r\n            icon-definition="{{::$ctrl.accountIcons.expandIcon.icon}}"></prm-icon>\r\n    </md-button>\r\n    <div ng-init="messageAdded = \'open\' ;\\r\\n                      messageRemoved = \'close\' " class="accessible-only"\r\n        aria-label="{{$ctrl.isExpanded ? messageAdded : messageRemoved}}" aria-live="assertive">{{$ctrl.isExpanded ? messageAdded : messageRemoved}}</div>\r\n</div>\r\n<prm-loan-after parent-ctrl="$ctrl"></prm-loan-after>';

var Templates = function () {
    function Templates() {
        _classCallCheck(this, Templates);
    }

    _createClass(Templates, null, [{
        key: 'all',
        get: function get() {
            /*
              id = templateId in the templateCache 
              template = the imported tempalte
              enabled = true/false should the component be created
              enableInView = regex to define in which views the template has to be replaced.
                    ex. {id: 'components/search/topbar/userArea/user-area.html', template: userAreaHTML, enabled: true, enableInView: '.*'}
              results in:
                $templateCache.put('components/search/topbar/userArea/user-area.html',userAreaHTML);
            */
            return [{
                id: 'components/search/topbar/userArea/user-area.html',
                template: changeLangWithoutUserAreaHTML,
                enabled: true,
                enableInView: 'VDIC'
            }, {
                id: 'components/account/loans/loan.html',
                template: prmLoanBugFixHTML,
                enabled: true,
                enableInView: '.*'
            }].filter(function (template) {
                return template.enabled && new RegExp(template.enableInView).test(window.appConfig.vid);
            });
        }
    }]);

    return Templates;
}();

exports.default = Templates;

},{"./utils":48}],48:[function(require,module,exports){
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

},{}]},{},[37])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXENvbmZpZ0xhbmd1YWdlU2VsZWN0aW9uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxkYXRhYmFzZUxpbmsuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGRpYWxvZy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGlzY2xhaW1lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwZXJpbWVudC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxccmVtb3ZlQWxlcnRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxzZWFyY2hUaXAuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHN0YXRpY0Zvb3Rlci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQnJpZWZSZXN1bHRBZnRlclxcYWx0bWV0cmljLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1CcmllZlJlc3VsdEFmdGVyXFxzb3VyY2VJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GYWNldEFmdGVyXFxzZWFyY2hBbHNvLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GYWNldEV4YWN0QWZ0ZXJcXHNlYXJjaEFsc29Cb2R5LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GaW5lc092ZXJ2aWV3QWZ0ZXJcXHBheU15RmluZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUZ1bGxWaWV3QWZ0ZXJcXGFsdG1ldHJpY3NCYWRnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxiZXRhU3dpdGNoLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGhvbWVJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGxhbmd1YWdlRGVwZW5kZW50TG9nby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxuZXdTZWFyY2hCdXR0b24uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcdmlld0xvZ28uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybU1haW5NZW51QWZ0ZXJcXGZlZWRiYWNrLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Qcm9tb3RlTG9naW5cXFByb21vdGVMb2dpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtUmVjb21tZW5kYXRpb25JdGVtQWZ0ZXJcXHJlY29tbWVuZGF0aW9uSXRlbS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtUmVxdWVzdHNBZnRlclxcaWxsUmVxdWVzdEZvcm0uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlYXJjaFJlc3VsdEF2YWlsYWJpbGl0eUxpbmVBZnRlckNvbnRyb2xsZXJcXGJyb3d6aW5lLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlclxccG54WG1sLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcG9ydEFQcm9ibGVtLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcXVlc3RBQ29weS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxhbm5vdW5jZW1lbnRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZlZWRiYWNrQW5ub3VuY2VtZW50LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZpbmVzTWVzc2FnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxhbHRtZXRyaWNzU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkYmFja1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcbWVzc2FnZVNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXG1haW4uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW8uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmVcXGNvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmVcXGhlbHBlci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZmFjZXRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFxyZWNvcmRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFx1c2VyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFx2aWV3LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHZlbmRvclxcY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcdGVtcGxhdGVzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFx1dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxakJDQUE7Ozs7Ozs7Ozs7O0FBV0E7O0FBb0NBOztBQXRDQTs7QUFHQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFHQTs7QUFDQTs7QUFFQTs7OztJQUVx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dUJBQWUsU0FBUyxPQUFULElBQW9CLElBQUksTUFBSixDQUFXLFNBQVMsWUFBcEIsRUFBa0MsSUFBbEMsQ0FBdUMsT0FBTyxTQUFQLENBQWlCLEdBQXhELENBQW5DO0FBQUEsYUFaRixDQUFQO0FBYUg7Ozs7OztrQkF6QmdCLFM7Ozs7O0FDaEJyQjs7Ozs7O0FBTUEsT0FBTyxTQUFQLENBQWlCLFdBQWpCLEdBQStCLFlBQVk7QUFDekMsU0FBTyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLENBQW9CLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQUEsV0FBYSxJQUFJLENBQUosR0FBUSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVksV0FBWixLQUE0QixFQUFFLEtBQUYsQ0FBUSxDQUFSLENBQXBDLEdBQWlELENBQTlEO0FBQUEsR0FBcEIsRUFBcUYsSUFBckYsQ0FBMEYsRUFBMUYsQ0FBUDtBQUNELENBRkQ7O0FBSUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcclxuICBEZWNsYXJlIHlvdXIgY29tcG9uZW50cyBoZXJlLlxyXG5cclxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XHJcbiAgaHR0cDovLzJhbGl0eS5jb20vMjAxNy8wMS9pbXBvcnQtb3BlcmF0b3IuaHRtbFxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5pbXBvcnQgJy4vdXRpbHMnXHJcblxyXG4vKiBpbXBvcnQgeW91ciBjb21wb25lbnQgY29uZmlndXJhdGlvbiovXHJcbmltcG9ydCB7ZXhwZXJpbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvZXhwZXJpbWVudCdcclxuXHJcbmltcG9ydCB7aG9tZUljb25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvaG9tZUljb24nXHJcblxyXG5pbXBvcnQge25ld1NlYXJjaEJ1dHRvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9uZXdTZWFyY2hCdXR0b24nXHJcbmltcG9ydCB7bGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL2xhbmd1YWdlRGVwZW5kZW50TG9nbydcclxuaW1wb3J0IHt2aWV3TG9nb0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci92aWV3TG9nbydcclxuXHJcblxyXG5pbXBvcnQge2JldGFTd2l0Y2hDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvYmV0YVN3aXRjaCdcclxuaW1wb3J0IHtzb3VyY2VJY29uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9zb3VyY2VJY29uJ1xyXG5pbXBvcnQge2FsdG1ldHJpY0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUJyaWVmUmVzdWx0QWZ0ZXIvYWx0bWV0cmljJ1xyXG5pbXBvcnQge2FsdG1ldHJpY3NCYWRnZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZ1bGxWaWV3QWZ0ZXIvYWx0bWV0cmljc0JhZGdlJ1xyXG5cclxuaW1wb3J0IHtwbnhYbWxDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlci9wbnhYbWwnXHJcbmltcG9ydCB7cGF5TXlGaW5lc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZpbmVzT3ZlcnZpZXdBZnRlci9wYXlNeUZpbmVzJ1xyXG5pbXBvcnQge2ZlZWRiYWNrQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTWFpbk1lbnVBZnRlci9mZWVkYmFjaydcclxuaW1wb3J0IHtzZWFyY2hUaXBDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3NlYXJjaFRpcCdcclxuaW1wb3J0IHtkaXNjbGFpbWVyQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9kaXNjbGFpbWVyJ1xyXG5cclxuaW1wb3J0IHtMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvQ29uZmlnTGFuZ3VhZ2VTZWxlY3Rpb24nXHJcblxyXG5pbXBvcnQge3JlcG9ydEFQcm9ibGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VydmljZUhlYWRlckFmdGVyL3JlcG9ydEFQcm9ibGVtJ1xyXG5pbXBvcnQge3JlcXVlc3RBQ29weUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlcnZpY2VIZWFkZXJBZnRlci9yZXF1ZXN0QUNvcHknXHJcblxyXG5pbXBvcnQge2ZpbmVzTWVzc2FnZUNvbmZpZyBhcyBwYXlNeUZpbmVzTWVzc2FnZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9maW5lc01lc3NhZ2UnXHJcbmltcG9ydCB7YW5ub3VuY2VtZW50c0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9hbm5vdW5jZW1lbnRzJ1xyXG5pbXBvcnQge3Byb21vdGVMb2dpbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVByb21vdGVMb2dpbi9Qcm9tb3RlTG9naW4nXHJcbmltcG9ydCB7ZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmVlZGJhY2tBbm5vdW5jZW1lbnQnXHJcbmltcG9ydCB7c3RhdGljRm9vdGVyQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9zdGF0aWNGb290ZXInXHJcbmltcG9ydCB7cmVtb3ZlQWxlcnRzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9yZW1vdmVBbGVydHMnXHJcbmltcG9ydCB7aWxsUmVxdWVzdEZvcm1Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1SZXF1ZXN0c0FmdGVyL2lsbFJlcXVlc3RGb3JtJ1xyXG5pbXBvcnQge3JlY29tbWVuZGF0aW9uSXRlbUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVJlY29tbWVuZGF0aW9uSXRlbUFmdGVyL3JlY29tbWVuZGF0aW9uSXRlbSdcclxuXHJcbmltcG9ydCB7ZGF0YWJhc2VMaW5rQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9kYXRhYmFzZUxpbmsnXHJcbi8vaW1wb3J0IHtyZW1vdmVPcGVuQWNjZXNzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9yZW1vdmVPcGVuQWNjZXNzJ1xyXG5cclxuaW1wb3J0IHtzZWFyY2hBbHNvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9zZWFyY2hBbHNvJ1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRFeGFjdEFmdGVyL3NlYXJjaEFsc29Cb2R5J1xyXG5cclxuaW1wb3J0IHticm93emluZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdEF2YWlsYWJpbGl0eUxpbmVBZnRlckNvbnRyb2xsZXIvYnJvd3ppbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlckNvbXBvbmVudHMge1xyXG5cclxuICBzdGF0aWMgZ2V0IGFsbCgpIHtcclxuICAgIC8qXHJcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcclxuICAgICAgY29uZmlnID0gdGhlIGltcG9ydGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcclxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxyXG5cclxuICAgICAgZXguIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9XHJcbiAgICAgIHJlc3VsdHMgaW46XHJcbiAgICAgICAgPHBybS1sb2dvLWFmdGVyIHBhcmVudEN0cmw9JyRjdHJsJz5cclxuICAgICAgICAgIDxob21lLWljb24gcGFyZW50Q3RybD0nJGN0cmwnPjwvaG9tZS1pY29uPlxyXG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge25hbWU6ICdsaWJpcy1leHBlcmltZW50JywgY29uZmlnOiBleHBlcmltZW50Q29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tbWVzc2FnZXMtYW5kLWJsb2Nrcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2hvbWUtaWNvbicsIGNvbmZpZzogaG9tZUljb25Db25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnJ30sXHJcbiAgICAgIHtuYW1lOiAnYmV0YS1zd2l0Y2gnLCBjb25maWc6IGJldGFTd2l0Y2hDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnbGFuZ3VhZ2UtZGVwZW5kZW50LWxvZ28nLCBjb25maWc6IGxhbmd1YWdlRGVwZW5kZW50TG9nb0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3ZpZXctbG9nbycsIGNvbmZpZzogdmlld0xvZ29Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG5cclxuICAgICAge25hbWU6ICdzb3VyY2UtaWNvbicsIGNvbmZpZzogc291cmNlSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUxpcmlhcyknfSxcclxuICAgICAge25hbWU6ICdhbHRtZXRyaWMnLCBjb25maWc6IGFsdG1ldHJpY0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhc3xeS1VMZXV2ZW58XlZESUN8XlVDTEx8XlRNT1JFQU18XlRNT1JFS3xeU0VSVnxeTkJCJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2FsdG1ldHJpY3MtYmFkZ2UnLCBjb25maWc6IGFsdG1ldHJpY3NCYWRnZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZnVsbC12aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhc3xeS1VMZXV2ZW58XlZESUN8XlVDTEx8XlRNT1JFQU18XlRNT1JFS3xeU0VSVnxeTkJCJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3BueC14bWwnLCBjb25maWc6IHBueFhtbENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzJywgY29uZmlnOiBwYXlNeUZpbmVzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1maW5lcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1tYWluLW1lbnUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG4gICAgICB7bmFtZTogJ2xhbmd1YWdlLXNlbGVjdGlvbicsIGNvbmZpZzogTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ25ldy1zZWFyY2gtYnV0dG9uJywgY29uZmlnOiBuZXdTZWFyY2hCdXR0b25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1uYXYtYmFyLWxpbmtzLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuXHJcbiAgICAgIHtuYW1lOiAncmVwb3J0LWEtcHJvYmxlbScsIGNvbmZpZzogcmVwb3J0QVByb2JsZW1Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXNlcnZpY2UtaGVhZGVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAvLyB7bmFtZTogJ3JlcXVlc3QtYS1jb3B5LWhlYWQnLCBjb25maWc6IHJlcXVlc3RBQ29weUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VydmljZS1oZWFkZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeTGlyaWFzJ30sIFxyXG4gICAgICB7bmFtZTogJ3JlcXVlc3QtYS1jb3B5JywgY29uZmlnOiByZXF1ZXN0QUNvcHlDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lci1hZnRlcicsIGVuYWJsZUluVmlldzogJ15MaXJpYXMnfSwgXHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIHtuYW1lOiAncHJtLXNlYXJjaHRpcHMnLCBjb25maWc6IHNlYXJjaFRpcENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGwsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncHJtLWRpc2NsYWltZXInLCBjb25maWc6IGRpc2NsYWltZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3N0YXRpYy1mb290ZXInLCBjb25maWc6IHN0YXRpY0Zvb3RlckNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZXhwbG9yZS1mb290ZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICAvL3tuYW1lOiAnc3RhdGljLWZvb3Rlci1hY2NvdW50JywgY29uZmlnOiBzdGF0aWNGb290ZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWFjY291bnQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3JlbW92ZS1hbGVydHMnLCBjb25maWc6IHJlbW92ZUFsZXJ0c0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYWRkLXF1ZXJ5LXRvLXNhdmVkLXNlYXJjaGVzLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdwcm0tZGJsaW5rJywgY29uZmlnOiBkYXRhYmFzZUxpbmtDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuXHJcbiAgICAgIC8qIGxicy1jb21wb25lbnRzIHVzZWQgaW4gaHRtbC10ZW1wbGF0ZXMgb2YgdGhlIHBhY2thZ2UgKi9cclxuICAgICAge25hbWU6ICdwcm9tb3RlLWxvZ2luLXN0YXRpYy1mb290ZXInLCBjb25maWc6IHByb21vdGVMb2dpbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdsYnMtcHJvbW90ZS1sb2dpbicsIGVuYWJsZUluVmlldzogICdeS1VMZXV2ZW4nfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnaWxsLXJlcXVlc3QtZm9ybS1vdmVydmlldycsIGNvbmZpZzogaWxsUmVxdWVzdEZvcm1Db25maWcsIGVuYWJsZWQ6ZmFsc2UsIGFwcGVuZFRvOiAncHJtLXJlcXVlc3RzLW92ZXJ2aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdpbGwtcmVxdWVzdC1mb3JtJywgY29uZmlnOiBpbGxSZXF1ZXN0Rm9ybUNvbmZpZywgZW5hYmxlZDp0cnVlLCBhcHBlbmRUbzogJ3BybS1yZXF1ZXN0cy1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbnxeVklWRVMnfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnYW5ub3VuY2VtZW50LWZlZWRiYWNrJywgY29uZmlnOiBmZWVkYmFja0Fubm91bmNlbWVudENvbmZpZywgZW5hYmxlZDpmYWxzZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG5cclxuICAgICAge25hbWU6ICdvdmVycmlkZS1nZXRsaW5rLXJlY29tbWVuZGF0aW9uJywgY29uZmlnOiByZWNvbW1lbmRhdGlvbkl0ZW1Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXJlY29tZW5kYXRpb24taXRlbS1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2Fubm91bmNlbWVudCcsIGNvbmZpZzogYW5ub3VuY2VtZW50c0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3BheS1teS1maW5lcy1tZXNzYWdlJywgY29uZmlnOiBwYXlNeUZpbmVzTWVzc2FnZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW4nfSxcclxuICAgICAvLyAge25hbWU6ICdyZW1vdmUtb3Blbi1hY2Nlc3MnLCBjb25maWc6IHJlbW92ZU9wZW5BY2Nlc3NDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAge25hbWU6ICdzZWFyY2gtYWxzbycsIGNvbmZpZzogc2VhcmNoQWxzb0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZmFjZXQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW4nfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1hbHNvLWJvZHknLCBjb25maWc6IHNlYXJjaEFsc29Cb2R5Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbid9LFxyXG4gICAge25hbWU6ICdicm93emluZScsIGNvbmZpZzogYnJvd3ppbmVDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXNlYXJjaC1yZXN1bHQtYXZhaWxhYmlsaXR5LWxpbmUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeRUNCJ31cclxuICAgIF0uZmlsdGVyKCAoY29tcG9uZW50KSA9PiAoIGNvbXBvbmVudC5lbmFibGVkICYmIG5ldyBSZWdFeHAoY29tcG9uZW50LmVuYWJsZUluVmlldykudGVzdCh3aW5kb3cuYXBwQ29uZmlnLnZpZCkgKSApO1xyXG4gIH1cclxufVxyXG4iLCJcclxuY2xhc3MgTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWdDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIG9ubHlzaG93X2ZyX0ZSX2luX3ZpZCA9IFsnQUNWJywgJ0JQQicsICdGQVJPJywgJ0ZPREZJTicsICdLQkMnLCAnUkJJTlMnLCAnUk1DQScsICdLTUtHJywgJ0xJQkFSJywgJ05CQicsICdPRk8nLCAnVkRJQyddO1xyXG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmltby1leHBsb3JlJykpO1xyXG4gICAgICAgIGlmICghIG9ubHlzaG93X2ZyX0ZSX2luX3ZpZC5pbmNsdWRlcyggd2luZG93LmFwcENvbmZpZy52aWQgICkgKSB7XHJcbiAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZCggXCI8c3R5bGU+cHJtLWxhbmd1YWdlLXNlbGVjdGlvbiBtZC1saXN0LWl0ZW1bdmFsdWU9J2ZyX0ZSJ117ZGlzcGxheTpub25lIWltcG9ydGFudDt9PC9zdHlsZT5cIiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkxhbmd1YWdlU2VsZWN0aW9uQ29uZmlnQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXVxyXG5cclxuZXhwb3J0IGxldCBMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWdDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG59XHJcbiIsImltcG9ydCBkYXRhYmFzZUxpbmtIVE1MIGZyb20gJy4vZGF0YWJhc2VMaW5rLmh0bWwnXHJcblxyXG5jbGFzcyBEYXRhYmFzZUxpbmtDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICRzY29wZS50aXRsZSA9ICdkYXRhYmFzZXMnO1xyXG4gICAgJHNjb3BlLnRpdGxlX2xhYmVsID0gJ3NlYXJjaCBkYXRhYmFzZXMnO1xyXG4gICAgJHNjb3BlLmRhdGFiYXNlTGluayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS1kYXRhYmFzZVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwpXHJcblxyXG4gICAgICAgIHZhciBkYXRhYmFzZUZhY2V0ID0ge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjpcInJ0eXBlXCIsXHJcbiAgICAgICAgICAgIFwidHlwZVwiOlwiaW5jbHVkZVwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6XCJkYXRhYmFzZXNcIixcclxuICAgICAgICAgICAgXCJkaXNwbGF5VmFsdWVcIjpcImRhdGFiYXNlc1wiLFxyXG4gICAgICAgICAgICBcImRpc3BsYXllZFR5cGVcIjpcImV4YWN0XCIsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjpcIkRhdGFiYW5rZW5cIixcclxuICAgICAgICAgICAgXCJpc011bHRpRmFjZXRcIjpmYWxzZSxcclxuICAgICAgICAgICAgXCJ0b29sdGlwXCI6XCJWZXJ3aWpkZXIgVHlwZSBicm9uIERhdGFiYW5rZW5cIixcclxuICAgICAgICAgICAgXCIkJGhhc2hLZXlcIjpcIm9iamVjdDoyODA4XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFN0YXRlU2VydmljZS5zZWFyY2hPYmplY3QgKVxyXG5cclxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4gICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tZWhtZXRjL3ByaW1vLWV4cGxvcmUtY29sbGVjdGlvbi12aWV3ZXIvYmxvYi9tYXN0ZXIvanMvbmctcHJpbW8uanNcclxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLnNldFNvcnRCeSgndGl0bGUnKTtcclxuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLmZhY2V0U2VydmljZS5hZGRTdGlja3lGYWNldChkYXRhYmFzZUZhY2V0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU3RhdGVTZXJ2aWNlLnNlYXJjaE9iamVjdCApXHJcbiAgICAgICAgJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU2VydmljZS5zZWFyY2goKTtcclxuLypcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwic3RpY2t5RmFjZXRzXCIsXHJcbiAgICAgICAnW3tcIm5hbWVcIjpcInJ0eXBlXCIsXCJ0eXBlXCI6XCJpbmNsdWRlXCIsXCJ2YWx1ZVwiOlwiZGF0YWJhc2VzXCIsXCJkaXNwbGF5VmFsdWVcIjpcImRhdGFiYXNlc1wiLFwiZGlzcGxheWVkVHlwZVwiOlwiZXhhY3RcIixcImxhYmVsXCI6XCJEYXRhYmFua2VuXCIsXCJpc011bHRpRmFjZXRcIjpmYWxzZSxcInRvb2x0aXBcIjpcIlZlcndpamRlciBUeXBlIGJyb24gRGF0YWJhbmtlblwiLFwiJCRoYXNoS2V5XCI6XCJvYmplY3Q6MjgwOFwiLFwicGVyc2lzdGVudFwiOnRydWUsXCJvcGVyYXRpb25cIjpcImFkZFwifV0nKTtcclxuICAgICAgICovXHJcbiAgICAgLy8gICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDMvcHJpbW8tZXhwbG9yZS9zZWFyY2g/cXVlcnk9YW55LGNvbnRhaW5zLGRhdGFiYXNlcyZ0YWI9YWxsX2NvbnRlbnRfdGFiJnNlYXJjaF9zY29wZT1BTExfQ09OVEVOVCZcIlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuRGF0YWJhc2VMaW5rQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJ11cclxuXHJcbmV4cG9ydCBsZXQgZGF0YWJhc2VMaW5rQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IERhdGFiYXNlTGlua0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGRhdGFiYXNlTGlua0hUTUxcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwLCAkdHJhbnNsYXRlLCBmZWVkYmFja1NlcnZpY2VVUkwsIE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5tZERpYWxvZyA9ICRtZERpYWxvZztcclxuICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgdGhpcy5odHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCA9IGZlZWRiYWNrU2VydmljZVVSTDtcclxuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuXHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgJHNjb3BlLmNhbmNlbEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLm1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5zZW5kRmVlZGJhY2sgPSB0aGlzLnNlbmRGZWVkYmFjaztcclxuICAgICRzY29wZS5zZW5kRmVlZGJhY2sgPSAoYW5zd2VyKSA9PiB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHN1YmplY3Q6ICRzY29wZS5mZWVkYmFjay5zdWJqZWN0LFxyXG4gICAgICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcclxuICAgICAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXHJcbiAgICAgICAgICAgIGxvZ2dlZEluOiBzZWxmLnVzZXIuaXNMb2dnZWRJbigpLFxyXG4gICAgICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgdHlwZTogJ2ZlZWRiYWNrJyxcclxuICAgICAgICAgICAgZmVlZGJhY2s6ICRzY29wZS5mZWVkYmFjay5tZXNzYWdlLFxyXG4gICAgICAgICAgICBlbWFpbDogJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8ubGVuZ3RoID4gMCAmJiAkc2NvcGUuZmVlZGJhY2subWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNlbGYubWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5odHRwKHtcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICB1cmw6IHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnKTtcclxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJztcclxuICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJyk7XHJcbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLmZhaWwnKSB8fCAnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nO1xyXG4gICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgICRzY29wZS5mZWVkYmFjayA9IHtcclxuICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgc3ViamVjdDogJ2ZlZWRiYWNrJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5EaWFsb2dDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJGh0dHAnLCAnJHRyYW5zbGF0ZScsICdmZWVkYmFja1NlcnZpY2VVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuIiwiaW1wb3J0IGRpc2NsYWltZXJEaWFsb2dIVE1MIGZyb20gJy4uLy4uLy4uL2h0bWwvdGVtcGxhdGVzL2Rpc2NsYWltZXJEaWFsb2cuaHRtbCdcclxuaW1wb3J0IGNvb2tpZVBvbGljeURpYWxvZ0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9lbl9VUy5odG1sJ1xyXG5pbXBvcnQgZGlzY2xhaW1lckRpYWxvZ19mckZSX0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9lbl9VUy5odG1sJ1xyXG5pbXBvcnQgZGlzY2xhaW1lckRpYWxvZ19ubEJFX0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9ubF9CRS5odG1sJ1xyXG5pbXBvcnQgZGlzY2xhaW1lckRpYWxvZ19lblVTX0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9lbl9VUy5odG1sJ1xyXG5cclxuaW1wb3J0IGRpc2NsYWltZXJMaW5rSFRNTCBmcm9tICdkaXNjbGFpbWVyLmh0bWwnXHJcblxyXG5jbGFzcyBkaXNjbGFpbWVyQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJG1kRGlhbG9nKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuXHJcbiAgICAgIGxldCBsb2NhbGVfdGV4dCA9IHtcclxuICAgICAgICAnbmxfQkUnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQ29va2llYmVsZWlkJyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQ29va2llYmVsZWlkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgICdlbl9VUyc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdDb29raWUgUG9saWN5JyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQ29va2llIFBvbGljeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZnJfRlInOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQ29va2llIFBvbGljeScsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIkNvb2tpZSBQb2xpY3lcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuXHJcbi8qIFRvZG8gUmVmYWN0b3J5IGRpc2NsYWltZXJEaWFsb2cgLyBjb29raWVQb2xpY3kgPz8/ICovXHJcbi8vICAgIGxldCBkaXNjbGFpbWVyRGlhbG9nID0gZGlzY2xhaW1lckRpYWxvZ0hUTUw7IFxyXG4gICAgICBsZXQgZGlzY2xhaW1lckRpYWxvZyA9IGNvb2tpZVBvbGljeURpYWxvZ0hUTUw7XHJcbiAgICAgIHN3aXRjaCAobG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZnJfRlInOlxyXG4gICAgICAgIGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nX2ZyRlJfSFRNTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25sX0JFJzpcclxuICAgICAgICBkaXNjbGFpbWVyRGlhbG9nID0gZGlzY2xhaW1lckRpYWxvZ19ubEJFX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nX2VuVVNfSFRNTDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJHNjb3BlLnRpdGxlID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGUnXTtcclxuICAgICAgJHNjb3BlLnRpdGxlX2xhYmVsID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGVfbGFiZWwnXTtcclxuXHJcbiAgICAgICRzY29wZS5zaG93RGlzY2xhaW1lckRpYWxvZyA9IGZ1bmN0aW9uKCRldmVudCkge1xyXG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudEVsLFxyXG4gICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgIHRlbXBsYXRlOiBkaXNjbGFpbWVyRGlhbG9nLFxyXG4gICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAkc2NvcGUuaXRlbXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIERpYWxvZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2csIGl0ZW1zKSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5kaXNjbGFpbWVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJ11cclxuXHJcbmV4cG9ydCBsZXQgZGlzY2xhaW1lckNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBkaXNjbGFpbWVyQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogZGlzY2xhaW1lckxpbmtIVE1MXHJcbn0iLCIvKiBjb21wb25lbnQgdG8gZG8gYWxsIHlvdXIgZXhwZXJpbWVudGFsIHN0dWZmICovXHJcbi8qIFtlbnxkaXNdYWJsZSBpbiBjb21wb25lbnRzKi9cclxuXHJcbmNsYXNzIEV4cGVyaW1lbnRDb250cm9sbGVyIHtcclxuIFxyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsJHRlbXBsYXRlQ2FjaGUsICRjb21waWxlLCRpbmplY3Rvciwkcm9vdFNjb3BlLCR0cmFuc2xhdGUsICR3aW5kb3cpIHtcclxuICAgIGNvbnNvbGUubG9nKCdFeHBlcmltZW50OicpO1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgdGhpcy4kdGVtcGxhdGVDYWNoZSA9ICR0ZW1wbGF0ZUNhY2hlO1xyXG4gICAgdGhpcy4kY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgdGhpcy53aW5kb3cgPSAkd2luZG93O1xyXG4gICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJyc7IFxyXG5cclxuICAgIGNvbnNvbGUubG9nKHNlbGYpXHJcbiAgICBjb25zb2xlLmxvZygncm9vdFNjb3BlOicpXHJcbiAgICBjb25zb2xlLmxvZygkcm9vdFNjb3BlKVxyXG4gICAgY29uc29sZS5sb2coJ3RlbXBsYXRlQ2FjaGUnKVxyXG4gICAgY29uc29sZS5sb2coJHRlbXBsYXRlQ2FjaGUpICAgXHJcbiAgICB2YXIgdGVtcGxhdGUgPSAkdGVtcGxhdGVDYWNoZS5nZXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnKTtcclxuICAgIC8vIHZhciB0ZW1wbGF0ZSA9IHRlbXBsYXRlICsgXCI8SDEgaWQ9J29tdGVsYWNodGVuJz5MQUxBTEE8aWxsLXJlcXVlc3QtZm9ybS1vdmVydmlldz48L2lsbC1yZXF1ZXN0LWZvcm0tb3ZlcnZpZXc+PC9IMT5cIjtcclxuICAgIHZhciB0ZW1wbGF0ZSA9IHRlbXBsYXRlICsgXCI8SDEgaWQ9J29tdGVsYWNodGVuJz5MQUxBTEE8L0gxPlwiO1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL2FjY291bnQvb3ZlcnZpZXcvcmVxdWVzdHNPdmVydmlldy9yZXF1ZXN0cy1vdmVydmlldy5odG1sJywgdGVtcGxhdGUpO1xyXG4gICAgY29uc29sZS5sb2coJHRlbXBsYXRlQ2FjaGUuZ2V0KCdjb21wb25lbnRzL2FjY291bnQvb3ZlcnZpZXcvcmVxdWVzdHNPdmVydmlldy9yZXF1ZXN0cy1vdmVydmlldy5odG1sJykpXHJcbn07XHJcblxyXG4gIHRvSWxsUmVxdWVzdFVybCgpIHtcclxuICAgICAgdmFyIGluc3RpdHV0aW9uQ29kZSA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnJlcXVlc3RzU2VydmljZS5hY2NvdW50U2VydmljZS5saW5rZWRVc2VyU2VsZWN0b3JTZXJ2aWNlLnNlbGVjdGVkSW5zdGl0dXRpb24uaW5zdGl0dXRpb25Db2RlO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdpbnN0aXR1dGlvbkNvZGU6JyArIGluc3RpdHV0aW9uQ29kZSlcclxuICAgICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJ2h0dHBzOi8vbGV1dmVuLXByaW1vLmhvc3RlZC5leGxpYnJpc2dyb3VwLmNvbS9wZHM/ZnVuYz1zc28mdXJsPWh0dHA6Ly9ldS5hbG1hLmV4bGlicmlzZ3JvdXAuY29tL3ZpZXcvdXJlc29sdmVyLycrIGluc3RpdHV0aW9uQ29kZSArJy9vcGVudXJsP3N2Y19kYXQ9Z2V0aXQmc3ZjLnByb2ZpbGU9Z2V0aXQmZGlyZWN0UmVzb3VyY2VTaGFyaW5nUmVxdWVzdD10cnVlJm5ld1VJPXRydWUnXHJcbiAgICAgIHRoaXMud2luZG93Lm9wZW4odGhpcy5pbGxSZXF1ZXN0VXJsLCAnX2ZyZWVJbGwnKTtcclxuICB9O1xyXG4gICAgXHJcbiAgJG9uSW5pdCgpIHsgIFxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyAoJ25ld0VsZW1lbnQ6JylcclxuICAvLyAgY29uc29sZS5sb2cgKGFuZ3VsYXIuZWxlbWVudCggJyNvbXRlbGFjaHRlbicpLmxlbmd0aClcclxuICAgLy8gaWYgKCBhbmd1bGFyLmVsZW1lbnQoICdIMScpLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICBjb25zb2xlLmxvZyAoJ1xcJ3QgSXMgbmkgb20gdGUgbGFjaHRlbicpXHJcbiAgICAgICB2YXIgZWxlbWVudE5hbWUgPSAncHJtLXJlcXVlc3RzLW92ZXJ2aWV3J1xyXG4gICAgICAgLy9sZXQgZWxlbWVudCA9ICRlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50TmFtZSkpO1xyXG4gICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgbGV0IGVsZW1lbnRTY29wZSA9IGVsZW1lbnQuc2NvcGUoKTtcclxuICAgICAgICAgY29uc29sZS5sb2cgKGVsZW1lbnRTY29wZSlcclxuICAgICAgICAgdGhpcy4kY29tcGlsZShlbGVtZW50KShlbGVtZW50U2NvcGUpO1xyXG4gICAgICAgICAvL2VsZW1lbnRTY29wZS4kYXBwbHkoKVxyXG4gICAgICAgfSAgICAgXHJcbiAgLy8gICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkV4cGVyaW1lbnRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICAnJHRlbXBsYXRlQ2FjaGUnLCAnJGNvbXBpbGUnLCckaW5qZWN0b3InLCckcm9vdFNjb3BlJywnJHRyYW5zbGF0ZScsICckd2luZG93J11cclxuXHJcbmV4cG9ydCBsZXQgZXhwZXJpbWVudENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBFeHBlcmltZW50Q29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJcclxuY2xhc3MgUmVtb3ZlQWxlcnRzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAgJHRyYW5zbGF0ZSwgJGVsZW1lbnQsICR0ZW1wbGF0ZUNhY2hlKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIGxvY2FsZSA9IFwiZW5fVVNcIlxyXG4gICAgICAgIGxvY2FsZSA9IHNjb3BlLiRyb290LiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC9zYXZlZFF1ZXJpZXMvYWRkQWxlcnRUb2FzdC9hZGQtYWxlcnQtdG9hc3QuaHRtbCcsYFxyXG4gICAgICAgIDxtZC10b2FzdCBuZy1jbGFzcz1cIntcXCdtb2JpbGUtZGVmaW5lXFwnOiRjdHJsLmRldGVjdE1vYmlsZSgpLFxcJ2xheW91dC1jb2x1bW5cXCc6JGN0cmwuZGV0ZWN0TW9iaWxlKCl9XCIgY2xhc3M9XCJtZC10b2FzdC1jb250ZW50XCI+XHJcbiAgICA8ZGl2IGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm1kLXRvYXN0LWNvbnRlbnRcIiBuZy1jbGFzcz1cIntcXCdlbmQtY29udGVudFxcJzohJGN0cmwuZGV0ZWN0TW9iaWxlKCl9XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZC10b2FzdC10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIG5nLWlmPVwiISRjdHJsLmFkZE1vZGVcIiB0cmFuc2xhdGU9XCJudWkuZmF2b3JpdGVzLnNlYXJjaC5hbGVydC5tZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBuZy1pZj1cIiRjdHJsLmFkZE1vZGVcIiB0cmFuc2xhdGU9XCJudWkuc2F2ZXNlYXJjaC5tZXNzYWdlLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Ryb25nIG5nLWlmPVwiISRjdHJsLmFkZE1vZGVcIj57eyRjdHJsLmVtYWlsfX08L3N0cm9uZz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIiBjbGFzcz1cIm1kLXRvYXN0LWNvbnRlbnRcIiBuZy1jbGFzcz1cIntcXCdzdGFydC1jb250ZW50XFwnOiEkY3RybC5kZXRlY3RNb2JpbGUoKX1cIj5cclxuICAgICAgICA8bWQtYnV0dG9uIG5nLWNsaWNrPVwiJGN0cmwub25EaXNtaXNzKClcIiBhcmlhLWxhYmVsPVwie3s6OihcXCdudWkubWVzc2FnZS5kaXNtaXNzXFwnIHwgdHJhbnNsYXRlKX19IFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5nLXNjb3BlXCIgdHJhbnNsYXRlPVwibnVpLm1lc3NhZ2UuZGlzbWlzc1wiPjwvc3Bhbj5cclxuICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L21kLXRvYXN0PlxyXG48cHJtLWFkZC1hbGVydC10b2FzdC1hZnRlciBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC9wcm0tYWRkLWFsZXJ0LXRvYXN0LWFmdGVyPlxyXG4gICAgICAgIGApO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZW1vdmVBbGVydHNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckdHJhbnNsYXRlJywgJyRlbGVtZW50JywgJyR0ZW1wbGF0ZUNhY2hlJyBdXHJcblxyXG5leHBvcnQgbGV0IHJlbW92ZUFsZXJ0c0NvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogUmVtb3ZlQWxlcnRzQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnPHN0eWxlPm1kLXRlbXBsYXRlIHBybS1hZGQtYWxlcnQtdG9hc3QgbWQtdG9hc3QgKlthcmlhLWxhYmVsPVwie3tcXCdudWkuYXJpYS5zYXZlZFF1ZXJpZXNMaXN0LmFsZXJ0XFwnIHwgdHJhbnNsYXRlfX1cIl0geyAgZGlzcGxheTogbm9uZTsgfTwvc3R5bGU+J1xyXG59XHJcbiIsImltcG9ydCBzZWFyY2hUaXBIVE1MIGZyb20gJy4vc2VhcmNoVGlwLmh0bWwnXHJcbmltcG9ydCB0aXBfZW5VU19IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2VuVVMuaHRtbCdcclxuaW1wb3J0IHRpcF9mckZSX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvZnJGUi5odG1sJ1xyXG5pbXBvcnQgdGlwX25sQkVfSFRNTCBmcm9tICcuL3NlYXJjaFRpcC9ubEJFLmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hUaXBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG5cclxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICdubF9CRSc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdab2VrdGlwcycsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIlpvZWt0aXBzIHdlZXJnZXZlblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZW5fVVMnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnU2VhcmNoIFRpcHMnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJTZWFyY2ggVGlwc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZnJfRlInOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQXN0dWNlcz8nLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJBc3R1Y2VzP1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHRpcHNIVE1MID0gdGlwX2VuVVNfSFRNTDtcclxuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdmcl9GUic6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9mckZSX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdubF9CRSc6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9ubEJFX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfZW5VU19IVE1MO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2NvcGUudGl0bGUgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZSddO1xyXG4gICAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZV9sYWJlbCddO1xyXG5cclxuICAgICAgJHNjb3BlLnNob3dTZWFyY2hUaXBzID0gZnVuY3Rpb24oJGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IHRpcHNIVE1MLFxyXG4gICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAkc2NvcGUuaXRlbXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIERpYWxvZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2csIGl0ZW1zKSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hUaXBDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hUaXBDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoVGlwQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoVGlwSFRNTFxyXG59XHJcbiIsIlxyXG5jbGFzcyBTdGF0aWNGb290ZXJDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZywgJGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSBcImVuX1VTXCJcclxuXHJcbiAgICAgICAgdmFyIHZpZXdXaXRoQ3VzdG9tRm9vdGVyID0gWydMaXJpYXMnLCd3ZXJlbGR3aWp6ZXInLCdFQ0InXVxyXG4vKlxyXG4gICAgICAgIGNvbnNvbGUubG9nIChzZWxmIClcclxuICAgICAgICBjb25zb2xlLmxvZyAoc2NvcGUgKVxyXG4gICAgICAgIGNvbnNvbGUubG9nIChzY29wZS4kcm9vdC4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlIClcclxuKi9cclxuICAgICAgICBsb2NhbGUgPSBzY29wZS4kcm9vdC4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgdmlkID0gd2luZG93LmFwcENvbmZpZ1sndmlkJ107XHJcbiAgICAgICAvLyAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoc3RhdGljRm9vdGVyVGVtcGxhdGVOYW1lLCAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIGxvY2FsZSArICcuaHRtbCcpO1xyXG4qL1xyXG4gICAgICAgIHZhciB2aWQgPSB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcclxuICAgICAgICB2YXIgdGVtcGxhdGVVcmwgPSAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIGxvY2FsZSArICcuaHRtbCc7XHJcbiAgICAgICAgaWYgKCB2aWV3V2l0aEN1c3RvbUZvb3Rlci5pbmNsdWRlcyh2aWQpICkgIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmwgPSAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIHZpZCArICdfJyArIGxvY2FsZSArICcuaHRtbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkc2NvcGUuZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZVVybDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblN0YXRpY0Zvb3RlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyRtZERpYWxvZycsICckZWxlbWVudCddXHJcblxyXG5leHBvcnQgbGV0IHN0YXRpY0Zvb3RlckNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogU3RhdGljRm9vdGVyQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnPG5nLWluY2x1ZGUgc3JjPVwiZ2V0VGVtcGxhdGVVcmwoKVwiLz4nLFxyXG59XHJcbiIsImltcG9ydCBhbHRtZXRyaWNIVE1MIGZyb20gJy4vYWx0bWV0cmljLmh0bWwnXHJcblxyXG5jbGFzcyBBbHRNZXRyaWNDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJHdpbmRvdywgJHRpbWVvdXQsIEFsdG1ldHJpY3NTZXJ2aWNlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgaXRlbSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW07XHJcbiAgICAvKlxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcclxuICAgICovXHJcbiAgICBzZWxmLmRvaSA9ICcnO1xyXG4gICAgc2VsZi5yZWNvcmRpZCA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICBpZiAoaXRlbSAmJiBpdGVtLnBueCAmJiBpdGVtLnBueC5hZGRhdGEgJiYgaXRlbS5wbnguYWRkYXRhLmRvaSkge1xyXG4gICAgICBzZWxmLmRvaSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmFkZGF0YS5kb2lbMF07XHJcblxyXG4gICAgICB0aGlzLnJlY29yZGlkID0gc2VsZi5yZWNvcmRpZDtcclxuICAgICAgQWx0bWV0cmljc1NlcnZpY2UuYWRkQWx0bWV0cmljcygnI2FsdG1ldHJpY3NfJyArIHNlbGYucmVjb3JkaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYWx0bWV0cmljQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7IHBhcmVudEN0cmw6ICc8JyB9LFxyXG4gIGNvbnRyb2xsZXI6IEFsdE1ldHJpY0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGFsdG1ldHJpY0hUTUxcclxufVxyXG4iLCJpbXBvcnQgc291cmNlSWNvbkhUTUwgZnJvbSAnLi9zb3VyY2VJY29uLmh0bWwnXHJcblxyXG5jbGFzcyBTb3VyY2VJY29uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBwYXJlbnRDdHJsID0gJHNjb3BlLiRwYXJlbnQuJGN0cmwucGFyZW50Q3RybDtcclxuICAgIHZhciBpY29uQ29uZiA9IFt7XHJcbiAgICAgICdzb3VyY2VpZCc6ICdsaXJpYXMnLFxyXG4gICAgICAnaWNvblVybCc6ICcvL2xpbW8ubGliaXMuYmUvcHJpbW9fbGlicmFyeS9saWJ3ZWIvbGliaXMvaW1hZ2VzL2xpcmlhcy5qcGcnLFxyXG4gICAgICAnaWNvblRleHQnOiAnTGlyaWFzJ1xyXG4gICAgfV07XHJcblxyXG4gICAgdmFyIGljb25Db25mU291cmNlcyA9IGljb25Db25mLm1hcChvYmogPT4gb2JqLnNvdXJjZWlkKTtcclxuXHJcbiAgICBzZWxmLnNvdXJjZWlkID0gbnVsbDtcclxuICAgIGlmICgnc291cmNlaWQnIGluIHBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbCkge1xyXG4gICAgICBzZWxmLnNvdXJjZWlkID0gcGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnNvdXJjZWlkWzBdLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICBpZiAoaWNvbkNvbmZTb3VyY2VzLmluY2x1ZGVzKHNlbGYuc291cmNlaWQpKSB7XHJcbiAgICAgICAgc2VsZi5pY29uID0gaWNvbkNvbmYuZmluZChmdW5jdGlvbih4KSB7XHJcbiAgICAgICAgICByZXR1cm4geC5zb3VyY2VpZCA9PT0gc2VsZi5zb3VyY2VpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2RpdicpLmFwcGVuZCgkY29tcGlsZShzb3VyY2VJY29uSFRNTCkoJHNjb3BlKSk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuU291cmNlSWNvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJ107XHJcblxyXG5leHBvcnQgbGV0IHNvdXJjZUljb25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogU291cmNlSWNvbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiLy9mYWNldHMuZmFjZXQuZmFjZXRfc2VhcmNoX2Fsc28gaW4gXCJmYWNldCBsYWJlbHNcIlxyXG5jbGFzcyBTZWFyY2hBbHNvQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKXtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHM7XHJcbiAgICB9LCAobixvKSA9PiB7XHJcbiAgICAgIGlmIChuICE9IG8pIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMuZmlsdGVyKGYgPT4ge3JldHVybiBmLm5hbWUgPT0gJ3NlYXJjaF9hbHNvJ30pLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9hbHNvJyxcclxuICAgICAgICAgICAgZGlzcGxheWVkVHlwZTogJ2V4YWN0JyxcclxuICAgICAgICAgICAgbGltaXRDb3VudDogMCxcclxuICAgICAgICAgICAgZmFjZXRHcm91cENvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlczogdW5kZWZpbmVkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOntwYXJlbnRDdHJsOic8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0NvbnRyb2xsZXJcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQWxzb0JvZHlIVE1MIGZyb20gJy4vc2VhcmNoQWxzb0JvZHkuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaEFsc29Cb2R5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcclxuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XHJcbiAgfVxyXG5cclxuICBfdGFyZ2V0cygpIHtcclxuICAgIHJldHVybiBbe1xyXG4gICAgICBcIm5hbWVcIjogXCJVbmlDYXRcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3VuaWNhdC5iZS91bmlDYXQ/ZnVuYz1zZWFyY2gmdWlMYW5ndWFnZT1lbiZxdWVyeT1cIixcclxuICAgICAgXCJpbWdcIjogXCIvcHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2ltZy91bmljYXRfaWNvbi5wbmdcIixcclxuICAgICAgXCJ0b29sdGlwXCI6IFwibGJzLm51aS5zZWFyY2hfYWxzby50b29sdGlwLnVuaWNhdFwiLFxyXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xyXG4gICAgICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XHJcbiAgICAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIFwibmFtZVwiOiBcIkdvb2dsZSBTY2hvbGFyXCIsXHJcbiAgICAvLyAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zY2hvbGFyLmdvb2dsZS5jb20vc2Nob2xhcj9xPVwiLFxyXG4gICAgLy8gICBcImltZ1wiOiBcIi9wcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaW1nL2dvb2dsZV9pY29uLnBuZ1wiLFxyXG4gICAgLy8gICBcInRvb2x0aXBcIjogXCJsYnMubnVpLnNlYXJjaF9hbHNvLnRvb2x0aXAuZ29vZ2xlX3Njb2xhclwiLFxyXG4gICAgLy8gICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xyXG4gICAgLy8gICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIldvcmxkY2F0XCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cud29ybGRjYXQub3JnL3NlYXJjaD9xPVwiLFxyXG4gICAgICBcImltZ1wiOiBcIi9wcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaW1nL3dvcmxkY2F0X2ljb24ucG5nXCIsXHJcbiAgICAgIFwidG9vbHRpcFwiOiBcImxicy5udWkuc2VhcmNoX2Fsc28udG9vbHRpcC53b3JsZGNhdFwiLFxyXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xyXG4gICAgICAgIHZhciB0eXBlX21hcHBpbmdzID0ge1xyXG4gICAgICAgICAgXCJhbnlcIjogXCJrd1wiLFxyXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcInRpXCIsXHJcbiAgICAgICAgICBcImNyZWF0b3JcIjogXCJhdVwiLFxyXG4gICAgICAgICAgXCJzdWJqZWN0XCI6IFwic3VcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICB2YXIgdHlwZSA9IHR5cGVfbWFwcGluZ3NbdGVybXNbMF1dIHx8IFwia3dcIjtcclxuICAgICAgICB2YXIgcXVlcnkgPSB0ZXJtc1syXSB8fCBcIlwiO1xyXG4gICAgICAgIHJldHVybiB0eXBlICsgJzonICsgcXVlcnk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XTtcclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Cb2R5Q29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0JvZHlDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Cb2R5Q29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoQWxzb0JvZHlIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHBheU15RmluZXNIVE1MIGZyb20gJy4vcGF5TXlGaW5lcy5odG1sJ1xyXG5cclxuY2xhc3MgUGF5TXlGaW5lc0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5zaG93UGF5TXlGaW5lcyA9IGZhbHNlOyAgXHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBpZiAoL15LVUxldXZlbi8udGVzdCh2aWV3LmNvZGUpKSB7XHJcbiAgICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQYXlNeUZpbmVzID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBwYXlNeUZpbmVzQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOntcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUGF5TXlGaW5lc0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHBheU15RmluZXNIVE1MXHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoZSBhbHRtZXRyaWNzIGNvbXBvbmVudCBjb250cm9sbGVyLiAoaHR0cHM6Ly9naXRodWIuY29tL0RldC1Lb25nZWxpZ2UtQmlibGlvdGVrL3ByaW1vLWV4cGxvcmUtcmV4L2Jsb2IvbWFzdGVyL2pzL2FsdG1ldHJpY3MuY29tcG9uZW50LmpzKVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IEFsdG1ldHJpY3NCYWRnZUhUTUwgZnJvbSAnLi9hbHRtZXRyaWNzQmFkZ2UuaHRtbCdcclxuXHJcbmNsYXNzIEFsdG1ldHJpY3NCYWRnZUNvbnRyb2xsZXIge1xyXG5cclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHRpbWVvdXQsIEFsdG1ldHJpY3NTZXJ2aWNlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICBzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHNlbGYuQWx0bWV0cmljc1NlcnZpY2UgPSBBbHRtZXRyaWNzU2VydmljZTtcclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybDtcclxuICAgIHNlbGYuaXRlbSA9IHNlbGYucGFyZW50Q3RybC5pdGVtO1xyXG4gICAgc2VsZi5yZWNvcmRpZCA9IHNlbGYuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcclxuICAgIHNlbGYuZG9pID0gJyc7XHJcblxyXG4gICAgLy9wb2x5ZmlsbFxyXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihzKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKGVsKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5tYXRjaGVzKHMpKSByZXR1cm4gZWw7XHJcbiAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQgfHwgZWwucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoZWwgIT09IG51bGwgJiYgZWwubm9kZVR5cGUgPT09IDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgLy9lbmQgcG9seWZpbGxcclxuXHJcbiAgICBpZiAoc2VsZi5pdGVtICYmIHNlbGYuaXRlbS5wbnggJiYgc2VsZi5pdGVtLnBueC5hZGRhdGEgJiYgc2VsZi5pdGVtLnBueC5hZGRhdGEuZG9pKSB7XHJcbiAgICAgICAgc2VsZi5kb2kgPSBzZWxmLml0ZW0ucG54LmFkZGF0YS5kb2lbMF07XHJcbiAgICAgICAgc2VsZi5BbHRtZXRyaWNzU2VydmljZS5hZGRBbHRtZXRyaWNzKCcjZnVsbF9hbHRtZXRyaWNzXycgKyBzZWxmLnJlY29yZGlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgdmFyIGFsdG1ldHJpY3NTZWN0aW9uID0ge1xyXG4gICAgICAgICAgICBzY3JvbGxJZDogXCJhbHRtZXRyaWNzXCIsXHJcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBcImFsdG1ldHJpY3NcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiYnJpZWYucmVzdWx0cy50YWJzLkFsdG1ldHJpY3NcIlxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoIHNlbGYucGFyZW50Q3RybC5mdWxsVmlld1NlcnZpY2UuZ2V0U2VydmljZXMoIHNlbGYucGFyZW50Q3RybC5pdGVtLCBzZWxmLnBhcmVudEN0cmwub3JpZ2luYXRvcikgKS50aGVuKFxyXG4gICAgICAgICAgICBmdW5jdGlvbihzZXJ2aWNlcykge1xyXG4gICAgICAgICAgICAgIC8vIEFkZCB0byBzZXJ2aWNlcyBpZiBub3QgYWxyZWFkIGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgaWYgKCBzZXJ2aWNlcy5maW5kSW5kZXgoc2VydmljZSA9PiBzZXJ2aWNlLnNjcm9sbElkID09PSBcImFsdG1ldHJpY3NcIikgPCAwICl7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlcy5zcGxpY2Uoc2VydmljZXMubGVuZ3RoLCAxMCwgYWx0bWV0cmljc1NlY3Rpb24pOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIHNlbGYuZG9pICE9PSAnJyApIHtcclxuICAgICAgdmFyIHVuYmluZFdhdGNoZXIgPSB0aGlzLiRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vcmV0dXJuIHNlbGYuJGVsZW1lbnRbMF0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2g0W3RyYW5zbGF0ZT1cImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJdJyk7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuJGVsZW1lbnRbMF0uY2xvc2VzdCgnI2Z1bGxWaWV3JykucXVlcnlTZWxlY3RvcignaDRbdHJhbnNsYXRlPVwiYnJpZWYucmVzdWx0cy50YWJzLkFsdG1ldHJpY3NcIl0nKVxyXG4gICAgICB9LCBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgICBpZiAobmV3VmFsKSB7XHJcbiAgICAgICAgICAvL0dldCB0aGUgc2VjdGlvbiBib2R5IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmFsdWUgd2UncmUgd2F0Y2hpbmdcclxuICAgICAgICAgIGxldCBhbHRtZXRyaWNzQ29udGFpbmVyID0gbmV3VmFsLmNsb3Nlc3QoJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCdkaXYuc2VjdGlvbi1ib2R5Jyk7XHJcbiAgICAgICAgICBsZXQgYWx0bWV0cmljc1Jlc3VsdCA9IHNlbGYuJGVsZW1lbnRbMF07XHJcbiAgICAgICAgICBpZiAoYWx0bWV0cmljc0NvbnRhaW5lciAmJiBhbHRtZXRyaWNzQ29udGFpbmVyLmFwcGVuZENoaWxkICYmIGFsdG1ldHJpY3NSZXN1bHQpIHtcclxuICAgICAgICAgICAgYWx0bWV0cmljc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhbHRtZXRyaWNzUmVzdWx0KTtcclxuICAgICAgICAgICAgd2luZG93Ll9hbHRtZXRyaWNfZW1iZWRfaW5pdChhbHRtZXRyaWNzQ29udGFpbmVyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVuYmluZFdhdGNoZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWx0bWV0cmljc0JhZGdlQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEFsdG1ldHJpY3NCYWRnZUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IEFsdG1ldHJpY3NCYWRnZUhUTUxcclxufVxyXG4iLCJpbXBvcnQgYmV0YVN3aXRjaEhUTUwgZnJvbSAnLi9iZXRhU3dpdGNoLmh0bWwnXHJcblxyXG5jbGFzcyBCZXRhU3dpdGNoQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuXHJcbiAgICAkc2NvcGUuc2hvd0JldGFTd2l0Y2ggPSB0cnVlO1xyXG4gICAgJHNjb3BlLnVzZUJldGEgPSB0cnVlOyAgXHJcblxyXG4gICAgJHNjb3BlLm9uQ2hhbmdlVXNlQmV0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCEgJHNjb3BlLnVzZUJldGEpe1xyXG4gICAgICAgIHNlbGYuZ29Ub09sZFVJKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnb1RvT2xkVUkoKSB7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPScvcHJpbW9fbGlicmFyeS9saWJ3ZWIvYWN0aW9uL3NlYXJjaC5kbz92aWQ9JysgdGhpcy5vbGRWaWQ7XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgdmFyIExpbmtUb0JldGFWaWV3cyA9IHtcclxuICAgICAgJ0FDVic6J0FDVicsXHJcbiAgICAgICdCUEInOidCUEInLFxyXG4gICAgICAnRkFSTyc6J0ZBUk8nLFxyXG4gICAgICAnRk9ERklOJzonRk9ERklOJyAsXHJcbiAgICAgICdHQ0xEJzonR0NMRCcsXHJcbiAgICAgICdHU0InOidHU0InLFxyXG4gICAgICAnR1NHJzonR1NHJyxcclxuICAgICAgJ0lNRUMnOidJTUVDJyxcclxuICAgICAgJ0tBRE9DJzonS0FET0MnLFxyXG4gICAgICAnS0JDJzonS0JDJyxcclxuICAgICAgJ0tNS0cnOidLTUtHJyxcclxuICAgICAgJ0tVTGV1dmVuJzonS1VMZXV2ZW5fVVgnLFxyXG4gICAgICAnTElCQVInOidMSUJBUicsXHJcbiAgICAgICdMVUNBJzonTFVDQV9VWCcsXHJcbiAgICAgICdOQkInOidOQkInLFxyXG4gICAgICAnT0RJU0VFJzonT0RJU0VFX1VYJyxcclxuICAgICAgJ09GTyc6J09GTycsXHJcbiAgICAgICdSQklOUyc6J1JCSU5TJyxcclxuICAgICAgJ1JFTEknOidSRUxJJyxcclxuICAgICAgJ1JNQ0EnOidSTUNBJyxcclxuICAgICAgJ1NFUlYnOidTRVJWJyxcclxuICAgICAgJ1RNT1JFSyc6J1RNT1JFS19VWCcsXHJcbiAgICAgICdUTU9SRU0nOidUTU9SRU1BX1VYJyxcclxuICAgICAgJ1ZESUMnOidWRElDJyxcclxuICAgICAgJ1ZJVkVTX0tBVEhPJzonVklWRVNfS0FUSE9fVVgnLFxyXG4gICAgICAnVklWRVNfS0hCTyc6J1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnVkxQJzonVkxQJyxcclxuICAgICAgJ0tVTGV1dmVuX1RNT1JFTSc6J0tVTGV1dmVuX1RNT1JFTV9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9VQ0xMJzonS1VMZXV2ZW5fVUNMTF9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9UTU9SRUsnOidLVUxldXZlbl9UTU9SRUtfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fTFVDQSc6J0tVTGV1dmVuX0xVQ0FfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fVklWRVNfS0hCTyc6J0tVTGV1dmVuX1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fT0RJU0VFJzonS1VMZXV2ZW5fT0RJU0VFX1VYJyxcclxuICAgICAgJ0tITElNJzonVUNMTF9MSU1CVVJHX1VYJyxcclxuICAgICAgJ0tITCc6J1VDTExfTEVVVkVOX1VYJ1xyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eRUNCLy50ZXN0KHZpZXcuY29kZSkpIHtcclxuICAgICAgICB0aGlzLnNob3dCZXRhU3dpdGNoID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbGRWaWQgPSBPYmplY3Qua2V5cyhMaW5rVG9CZXRhVmlld3MpLmZpbmQoa2V5ID0+IExpbmtUb0JldGFWaWV3c1trZXldID09PSB2aWV3LmNvZGUpIHx8IHZpZXcuY29kZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYmV0YVN3aXRjaENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBCZXRhU3dpdGNoQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogYmV0YVN3aXRjaEhUTUxcclxufVxyXG4iLCJpbXBvcnQgaG9tZUljb25IVE1MIGZyb20gJy4vaG9tZUljb24uaHRtbCdcclxuXHJcbmNsYXNzIEhvbWVJY29uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgc2VsZi5saW5rdHlwZSA9ICdob21lSWNvbic7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKCh2aWV3KSA9PiB7XHJcbiAgICAgIGxldCB2aWQgPSB2aWV3LmNvZGU7XHJcbiAgICAgIGlmICh2aWQgPT0gXCJFQ0JcIikge1xyXG4gICAgICAgIHNlbGYubGlua3R5cGUgPSBcIm5ld1NlYXJjaEJ1dHRvblwiO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlOyAvL3dpbmRvdy5Qcmltby5leHBsb3JlLmhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuICAgICAgbGV0IGxvY2FsZUxpYnJhcnlMb2dvID0gJ2N1c3RvbS8nICsgdmlkICsgJy9pbWcvbGlicmFyeS1sb2dvLScgKyBsb2NhbGUgKyAnLnBuZyc7XHJcblxyXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgJGNvbXBpbGUoJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkpKCRzY29wZSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcclxuXHJcbiAgICAgICRzY29wZS5yZW1vdmVTdGlja3lGYWNldHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZhY2V0cyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldCcpO1xyXG4gICAgICAgIGlmIChmYWNldHMpIHtcclxuICAgICAgICAgIHZhciBzdGlja3lGYWNldHMgPSBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5nZXRTdGlja3lGYWNldHMoKVxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGlja3lGYWNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UucmVtb3ZlU3RpY2t5RmFjZXQoc3RpY2t5RmFjZXRzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuSG9tZUljb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICckY29tcGlsZScsICckaHR0cCcsICckcm9vdFNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGhvbWVJY29uQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEhvbWVJY29uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogaG9tZUljb25IVE1MXHJcbn0iLCJjbGFzcyBMYW5ndWFnZURlcGVuZGVudExvZ29Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHAsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKCh2aWV3KSA9PiB7XHJcbiAgICAgIGxldCB2aWQgPSB2aWV3LmNvZGU7XHJcblxyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICBsZXQgbGlicmFyeUxvZ28gPSB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ287XHJcbiAgICAgIGxldCBsb2NhbGVMaWJyYXJ5TG9nbyA9ICdjdXN0b20vJyArIHZpZCArICcvaW1nL2xpYnJhcnktbG9nby0nICsgbG9jYWxlICsgJy5wbmcnO1xyXG5cclxuICAgICAgaWYgKGxpYnJhcnlMb2dvICE9PSBsb2NhbGVMaWJyYXJ5TG9nbykge1xyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICB1cmw6IGxvY2FsZUxpYnJhcnlMb2dvLFxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsb2NhbGVMaWJyYXJ5TG9nbztcclxuICAgICAgICAgICRjb21waWxlKCRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpKSgkc2NvcGUpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvID0gbGlicmFyeUxvZ287XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkxhbmd1YWdlRGVwZW5kZW50TG9nb0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRodHRwJywgJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgbGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IExhbmd1YWdlRGVwZW5kZW50TG9nb0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0iLCJpbXBvcnQgbmV3U2VhcmNoQnV0dG9uSFRNTCBmcm9tICcuL25ld1NlYXJjaEJ1dHRvbi5odG1sJ1xyXG5cclxuY2xhc3MgTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkucHJlcGVuZCgkY29tcGlsZShuZXdTZWFyY2hCdXR0b25IVE1MKSgkc2NvcGUpKTtcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgaWYgKHZpZCA9PSBcIkVDQlwiKSB7XHJcbiAgICAgICAgc2VsZi5saW5rdHlwZSA9IFwibmV3U2VhcmNoQnV0dG9uXCI7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7IC8vd2luZG93LlByaW1vLmV4cGxvcmUuaGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcclxuXHJcbiAgICAgIHNlbGYucmVtb3ZlU3RpY2t5RmFjZXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBwcm1BZHZhbmNlZFNlYXJjaCA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1hZHZhbmNlZC1zZWFyY2gnKTtcclxuICAgICAgICBpZihwcm1BZHZhbmNlZFNlYXJjaCl7XHJcbiAgICAgICAgICBsZXQgYyA9IHBybUFkdmFuY2VkU2VhcmNoWzBdLmN0cmwoKTtcclxuICAgICAgICAgIGMuY2xlYXJTZWFyY2hGb3JtKCk7XHJcbiAgICAgICAgICBjLiRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmYWNldHMgPSBQcmltby5leHBsb3JlLmNvbXBvbmVudHMuZ2V0KCdwcm0tZmFjZXQnKTtcclxuICAgICAgICBpZiAoZmFjZXRzKSB7XHJcbiAgICAgICAgICBsZXQgc3RpY2t5RmFjZXRzID0gZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UuZ2V0U3RpY2t5RmFjZXRzKClcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RpY2t5RmFjZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZhY2V0c1swXS5jdHJsKCkuZmFjZXRTZXJ2aWNlLnJlbW92ZVN0aWNreUZhY2V0KHN0aWNreUZhY2V0c1tpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbk5ld1NlYXJjaEJ1dHRvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRodHRwJywgJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgbmV3U2VhcmNoQnV0dG9uQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IE5ld1NlYXJjaEJ1dHRvbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IHZpZXdMb2dvSFRNTCBmcm9tICcuL3ZpZXdMb2dvLmh0bWwnXHJcblxyXG5jbGFzcyBWaWV3TG9nb0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRyYW5zbGF0ZSwgJGVsZW1lbnQsICRjb21waWxlLCAkaHR0cCwgJHJvb3RTY29wZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5zY29wZSA9ICRzY29wZTtcclxuICAgIHNlbGYucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpWzBdLmZpcnN0Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCgkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKVswXS5maXJzdENoaWxkKTtcclxuXHJcblxyXG4gICAgJHRyYW5zbGF0ZSgnbGltby5pbnN0aXR1dGVVcmwnKS50aGVuKFxyXG4gICAgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSBtZXNzYWdlXHJcbiAgICB9KTtcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7IC8vd2luZG93LlByaW1vLmV4cGxvcmUuaGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG4gICAgICBsZXQgbG9jYWxlTGlicmFyeUxvZ28gPSAnY3VzdG9tLycgKyB2aWQgKyAnL2ltZy9saWJyYXJ5LWxvZ28tJyArIGxvY2FsZSArICcucG5nJztcclxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcclxuICAgICAgc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuXHJcbiAgICAgICBpZiAoIHNlbGYubG9jYWxlTGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbyA9ICBsb2NhbGVMaWJyYXJ5TG9nb1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblZpZXdMb2dvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckZWxlbWVudCcsICckY29tcGlsZScsICckaHR0cCcsICckcm9vdFNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IHZpZXdMb2dvQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFZpZXdMb2dvQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogdmlld0xvZ29IVE1MXHJcbn1cclxuIiwiaW1wb3J0IGZlZWRiYWNrSFRNTCBmcm9tICcuL2ZlZWRiYWNrLmh0bWwnXHJcbmltcG9ydCBmZWVkYmFja0RpYWxvZ0hUTUwgZnJvbSAnLi9mZWVkYmFja0RpYWxvZy5odG1sJ1xyXG5cclxuY2xhc3MgRmVlZGJhY2tDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgRmVlZGJhY2tTZXJ2aWNlKXtcclxuICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2RpdicpLmFwcGVuZCgkY29tcGlsZShmZWVkYmFja0hUTUwpKCRzY29wZSkpO1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UgPSBGZWVkYmFja1NlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBzaG93RmVlZGJhY2tGb3JtKCRldmVudCkge1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2Uuc2hvdygkZXZlbnQsIGZlZWRiYWNrRGlhbG9nSFRNTCk7XHJcbiAgfVxyXG59XHJcblxyXG5GZWVkYmFja0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJ0ZlZWRiYWNrU2VydmljZSddO1xyXG5cclxuZXhwb3J0IGxldCBmZWVkYmFja0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBGZWVkYmFja0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IHByb21vdGVMb2dpbkhUTUwgZnJvbSAnLi9wcm9tb3RlTG9naW5Db25maWcuaHRtbCdcclxuXHJcbmNsYXNzIFByb21vdGVMb2dpbkNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5zaG93QXV0b21hdGljTG9naW4gPSBmYWxzZTsgIFxyXG4vKiBSZW1vdmUgdGhlIGxvY2FsU3RvcmFnZSBwYXJhbWV0ZXIgcHJpbW9Qcm9tb3RlTG9naW4gaWYgdGhlIHVybCBjb250YWlucyBjbGVhckxvZ2luICovXHJcbiAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB2YXIgdXJsUGFyYW0gPSBcImNsZWFyTG9naW5cIjtcclxuICAgIHVybFBhcmFtID0gdXJsUGFyYW0ucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgdXJsUGFyYW0gKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxyXG4gICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuICAgIGlmIChyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIGlmIChkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94ID0gZmFsc2U7XHJcbiAgICBzZWxmLmFsd2F5c1NpZ25pbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJpbW9Qcm9tb3RlTG9naW5cIik7XHJcbiAgICBpZiAoc2VsZi5hbHdheXNTaWduaW4pIHtcclxuICAgICAgc2VsZi5hbHdheXNTaWduaW5DaGVja0JveCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmFsd2F5c1NpZ25pbkNoZWNrZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKCBzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94ICl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJywgJ2Fsd2F5c1NpZ25pbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcmltb1Byb21vdGVMb2dpbicpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eS1VMZXV2ZW4vLnRlc3Qodmlldy5jb2RlKSkge1xyXG4gICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgIHRoaXMuc2hvd0F1dG9tYXRpY0xvZ2luID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNob3dBdXRvbWF0aWNMb2dpbiA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHByb21vdGVMb2dpbkNvbmZpZyA9IHtcclxuICBiaW5kaW5nczp7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFByb21vdGVMb2dpbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHByb21vdGVMb2dpbkhUTUxcclxufVxyXG4iLCIvKiBjb21wb25lbnQgdG8gZG8gYWxsIHlvdXIgZXhwZXJpbWVudGFsIHN0dWZmICovXHJcbi8qIFtlbnxkaXNdYWJsZSBpbiBjb21wb25lbnRzICovXHJcblxyXG5jbGFzcyBSZWNvbW1lbmRhdGlvbkl0ZW1Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcclxuLypcclxuICAgIGNvbnNvbGUubG9nKHNlbGYpXHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLmNvbmZpZ3VyYXRpb25VdGlsLnZpZCApO1xyXG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnZpZCApO1xyXG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmluc3QgKTtcclxuICAgIGNvbnNvbGUubG9nKCBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS51c2VySW5zdGl0dXRpb24gKTtcclxuKi9cclxuICAgIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLm9yZ0dldExpbmsgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5nZXRMaW5rO1xyXG4gICAgdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZ2V0TGluayA9IGZ1bmN0aW9uKCkgeyBcclxuICAgICAgdmFyIGdldEl0TGluayA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLm9yZ0dldExpbmsoKTtcclxuICAgICAgcmV0dXJuIGdldEl0TGluay5yZXBsYWNlKC9cXC9vcGVudXJsXFwvW14vXSpcXC9bXj9dKi8sIFwiL29wZW51cmxcXC9cIisgc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudXNlckluc3RpdHV0aW9uICtcIlxcL1wiKyBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UuY29uZmlndXJhdGlvblV0aWwudmlkKSBcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5SZWNvbW1lbmRhdGlvbkl0ZW1Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCddXHJcblxyXG5leHBvcnQgbGV0IHJlY29tbWVuZGF0aW9uSXRlbUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBSZWNvbW1lbmRhdGlvbkl0ZW1Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCBpbGxSZXF1ZXN0Rm9ybUhUTUwgZnJvbSAnLi9pbGxSZXF1ZXN0Rm9ybS5odG1sJ1xyXG5cclxuY2xhc3MgaWxsUmVxdWVzdEZvcm1Db250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRyYW5zbGF0ZSwgJHdpbmRvdywgJHJvb3RTY29wZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHRoaXMucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICAgICAgdGhpcy53aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIHRoaXMuaWxsUmVxdWVzdFVybCA9ICcnO1xyXG4gICAgICAgIHRoaXMuc2hvd0xpbmtUb0lsbFJlcXVlc3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluc3RpdHV0aW9uQ29kZSA9IFwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgICRvbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnJlcXVlc3RzU2VydmljZS5hY2NvdW50U2VydmljZS5saW5rZWRVc2VyU2VsZWN0b3JTZXJ2aWNlLnNlbGVjdGVkSW5zdGl0dXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0aXR1dGlvbkNvZGUgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5yZXF1ZXN0c1NlcnZpY2UuYWNjb3VudFNlcnZpY2UubGlua2VkVXNlclNlbGVjdG9yU2VydmljZS5zZWxlY3RlZEluc3RpdHV0aW9uLmluc3RpdHV0aW9uQ29kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYWxtYV9jb2RlcyA9IHRoaXMucm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UubWFwcGluZ1RhYmxlc0NhY2hlLk1BUFBJTkdfVEFCTEVTX0NBQ0hFW1wiQWxtYSBJbnN0aXR1dGlvbiBDb2Rlc1wiXTtcclxuICAgICAgICAgICAgdmFyIHVzZXJfaW5zdCA9IHRoaXMucm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudXNlckluc3RpdHV0aW9uO1xyXG4gICAgICAgICAgICB2YXIgYWxtYV9jb2RlID0gYWxtYV9jb2Rlcy5maWx0ZXIoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLnRhcmdldCA9PSB1c2VyX2luc3Q7IH0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyAoYWxtYV9jb2RlWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0aXR1dGlvbkNvZGUgPSBhbG1hX2NvZGVbMF0uc291cmNlMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnaW5zdGl0dXRpb25Db2RlOicgKyBpbnN0aXR1dGlvbkNvZGUpXHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGl0dXRpb25Db2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpbmtUb0lsbFJlcXVlc3QgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b0lsbFJlcXVlc3RVcmwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGl0dXRpb25Db2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpbmtUb0lsbFJlcXVlc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnaHR0cHM6Ly9sZXV2ZW4tcHJpbW8uaG9zdGVkLmV4bGlicmlzZ3JvdXAuY29tL3Bkcz9mdW5jPXNzbyZ1cmw9aHR0cDovL2V1LmFsbWEuZXhsaWJyaXNncm91cC5jb20vdmlldy91cmVzb2x2ZXIvJyArIHRoaXMuaW5zdGl0dXRpb25Db2RlICsgJy9vcGVudXJsP3N2Y19kYXQ9Z2V0aXQmc3ZjLnByb2ZpbGU9Z2V0aXQmZGlyZWN0UmVzb3VyY2VTaGFyaW5nUmVxdWVzdD10cnVlJm5ld1VJPXRydWUnXHJcbiAgICAgICAgICAgIHRoaXMud2luZG93Lm9wZW4odGhpcy5pbGxSZXF1ZXN0VXJsLCAnX2ZyZWVJbGwnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuaWxsUmVxdWVzdEZvcm1Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckdHJhbnNsYXRlJywgJyR3aW5kb3cnLCckcm9vdFNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGlsbFJlcXVlc3RGb3JtQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBpbGxSZXF1ZXN0Rm9ybUNvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogaWxsUmVxdWVzdEZvcm1IVE1MXHJcbn1cclxuIiwiaW1wb3J0IGJyb3d6aW5lSFRNTCBmcm9tICcuL2Jyb3d6aW5lLmh0bWwnXHJcblxyXG5jbGFzcyBCcm93emluZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBpdGVtID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVzdWx0O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tPlwiLHNlbGYsIGl0ZW0sICRzY29wZSk7XHJcblxyXG4gICAgICAgIHNlbGYucmVjb3JkaWQgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5wbnggJiYgaXRlbS5wbnguYWRkYXRhKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVjb3JkaWQgPSBpdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJyb3d6aW5lV2F0Y2hlciA9ICRzY29wZS4kd2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGJyb3d6aW5lLnByaW1vID09PSAnb2JqZWN0J1xyXG4gICAgICAgIH0sIChuLCBvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJpZ2dlciBicm93emluZSBmb3I6XCIsIHNlbGYucmVjb3JkaWQpXHJcbiAgICAgICAgICAgICAgICBsZXQgc2NvcGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGN0cmw6IHNlbGYucGFyZW50Q3RybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmJyb3d6aW5lLnByaW1vLnNlYXJjaFJlc3VsdChzY29wZSk7XHJcbiAgICAgICAgICAgICAgICBicm93emluZVdhdGNoZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkJyb3d6aW5lQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgYnJvd3ppbmVDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IEJyb3d6aW5lQ29udHJvbGxlclxyXG59IiwiaW1wb3J0IHBueFhtbEhUTUwgZnJvbSAnLi9wbnhYbWwuaHRtbCdcclxuY2xhc3MgUG54WG1sQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnJlY29yZGlkID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy5yZWNvcmRpZCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKGhvdGtleXMpIHtcclxuICAgICAgaG90a2V5cyhcImN0cmwrZW50ZXJcIiwgKGUpID0+IHtcclxuICAgICAgICBzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcclxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYudmlzaWJsZSA/ICdmbGV4JyA6ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwbngteG1sLXRyaWdnZXInKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncG54LXhtbC10cmlnZ2VyJyk7XHJcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtoZWlnaHQ6MjBweDt3aWR0aDoyMHB4O3otaW5kZXg6MTAwMDtiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO29wYWNpdHk6LjAzJyk7XHJcbiAgICAgIGRpdi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2VsZi52aXNpYmxlID0gIXNlbGYudmlzaWJsZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbngteG1sJykpKSB7XHJcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLnZpc2libGUgPyAnZmxleCcgOiAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgcG54WG1sQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFBueFhtbENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHBueFhtbEhUTUxcclxufVxyXG4iLCJpbXBvcnQgcmVwb3J0QVByb2JsZW1IVE1MIGZyb20gJy4vcmVwb3J0QVByb2JsZW0uaHRtbCdcclxuaW1wb3J0IHJlcG9ydEFQcm9ibGVtRGlhbG9nSFRNTCBmcm9tICcuL3JlcG9ydEFQcm9ibGVtRGlhbG9nLmh0bWwnXHJcblxyXG5jbGFzcyBSZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRlbGVtZW50LCAkY29tcGlsZSwgJHNjb3BlLCAkbWREaWFsb2csICRtZFRvYXN0LCAkaHR0cCxyZXBvcnRBUHJvYmxlbVVSTCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKC9ebnVpXFwuZ2V0aXRcXC4vLnRlc3QodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwudGl0bGUpKSB7XHJcbiAgICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2g0JykuYWZ0ZXIoJGNvbXBpbGUocmVwb3J0QVByb2JsZW1IVE1MKSgkc2NvcGUpKTtcclxuXHJcbiAgICAgIGxldCByZWNvcmREYXRhID0gc2VsZi5jdXJyZW50UmVjb3JkO1xyXG5cclxuICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgc2VsZi52aWV3ID0gdmlldztcclxuXHJcbiAgICAgICAgICBzZWxmLnNob3dSZXBvcnRBUHJvYmxlbUZvcm0gPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgICAgICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgICAgICAgICAgdGVtcGxhdGU6IHJlcG9ydEFQcm9ibGVtRGlhbG9nSFRNTCxcclxuICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRtZERpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlcG9ydCA9IHtcclxuICAgICAgICAgICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgc3ViamVjdDogJ3JlcG9ydCBhIHByb2JsZW0nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2FuY2VsUmVwb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5zZW5kUmVwb3J0ID0gZnVuY3Rpb24oYW5zd2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZElkOiByZWNvcmREYXRhLnBueC5jb250cm9sLnJlY29yZGlkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUeXBlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uSWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVjb3JkRGF0YS5wbnguZGlzcGxheS50aXRsZVswXSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVzb3VyY2VfcHJvYmxlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJHNjb3BlLnJlcG9ydC5zdWJqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGluc3Q6IHNlbGYudmlldy5pbnN0aXR1dGlvbi5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlZEluOiBzZWxmLnVzZXIuaXNMb2dnZWRJbigpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHNlbGYudXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJHNjb3BlLnJlcG9ydC5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcGx5VG86ICRzY29wZS5yZXBvcnQucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucmVwb3J0LnJlcGx5VG8ubGVuZ3RoID4gMCAmJiAkc2NvcGUucmVwb3J0Lm1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXBvcnRBUHJvYmxlbVVSTCxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtRnJvbS1FeEwtQVBJLUdhdGV3YXknOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrISc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9OyAvL3Nob3dSZXBvcnRBUHJvYmxlbUZvcm1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY3VycmVudFJlY29yZCgpIHtcclxuICAgIGxldCBzZWxlY3RvciA9ICdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJzsgLy8ncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcidcclxuICAgIGxldCBlbGVtZW50ID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKTtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIGxldCBlbGVtZW50Q3RybCA9IGVsZW1lbnQuY29udHJvbGxlcihzZWxlY3Rvcik7XHJcbiAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudEN0cmwpO1xyXG4gICAgICByZXR1cm4gZWxlbWVudEN0cmwuaXRlbTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuUmVwb3J0QVByb2JsZW1Db250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJGh0dHAnLCdyZXBvcnRBUHJvYmxlbVVSTCddO1xyXG5cclxuZXhwb3J0IGxldCByZXBvcnRBUHJvYmxlbUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBSZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IHJlcXVlc3RBQ29weUhUTUwgZnJvbSAnLi9yZXF1ZXN0QUNvcHkuaHRtbCdcclxuaW1wb3J0IHJlcXVlc3RBQ29weURpYWxvZ0hUTUwgZnJvbSAnLi9yZXF1ZXN0QUNvcHlEaWFsb2cuaHRtbCdcclxuXHJcbmNsYXNzIFJlcXVlc3RBQ29weUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRlbGVtZW50LCAkY29tcGlsZSwgJHNjb3BlLCAkbWREaWFsb2csICRtZFRvYXN0LCAkaHR0cCwgJHJvb3RTY29wZSwgcmVxdWVzdEFDb3B5VVJMLCBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgIC8vIElmIHlvdSB3YW50IHRvIGFkZCB0aGUgYnV0dG9uIHRvIHRoZSB0aXRsZSAobGlrZSByZXBvcnQgYSBwcm9ibGVtKVxyXG4gICAgLy9sZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnRpdGxlXHJcbiAgICAvL2xldCBhcHBlbmRCdXR0b25UbyA9ICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2g0Jyk7XHJcblxyXG4gICAgbGV0IHNlcnZpY2VUaXRsZUNvZGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5zZXJ2aWNlLnRpdGxlO1xyXG4gICAgbGV0IGFwcGVuZEJ1dHRvblRvID0gJGVsZW1lbnQucGFyZW50KCk7XHJcbiAgICBsZXQgcmVjb3JkRGF0YSA9IHNlbGYuY3VycmVudFJlY29yZDtcclxuICAgICAgIC8qIGNhcHRjaGEgaW1wbGVtZW50YXRpb24gKEFscmVhZHkgdXNlZCBpbiApXHJcbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL1ZpdmlkQ29ydGV4L2FuZ3VsYXItcmVjYXB0Y2hhXHJcbiAgICAgICAgKi9cclxuICAgIGxldCBjYXBjaGFQdWJsaWNLZXkgPSB3aW5kb3cuYXBwQ29uZmlnW1wic3lzdGVtLWNvbmZpZ3VyYXRpb25cIl1bXCJQdWJsaWMgQ2FwdGNoYSBLZXlcIl07XHJcblxyXG4gICAgbGV0IFR5cGVzU2hvd1JlcXVlc3RBQ29weSA9IFsnY2hhcHRlcicsJ2pvdXJuYWwtYXJ0aWNsZScsJ3RoZXNpcy1kaXNzZXJ0YXRpb24nLCdjb25mZXJlbmNlJywncmVwb3J0JywnZGF0YXNldCcsJ2MtYm9va3JldmlldycsJ21lZGlhJywnc29mdHdhcmUnXTtcclxuXHJcbiAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkge1xyXG4gICAgICB2YXIgU2hvd1JlcXVlc3RBQ29weVR5cGUgPSByZWNvcmREYXRhLnBueC5mYWNldHMubGZjMTYuZmlsdGVyKHZhbHVlID0+IC0xICE9PSBUeXBlc1Nob3dSZXF1ZXN0QUNvcHkuaW5kZXhPZih2YWx1ZSkpO1xyXG5cclxuICAgICAgaWYgKCghL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX25vcmVzdHJpY3QvLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkpICYmIFNob3dSZXF1ZXN0QUNvcHlUeXBlLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cclxuICAgICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgICAgc2VsZi5vbkNhbXB1cyA9IHNlbGYudXNlci5pc09uQ2FtcHVzKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBzZXJ2aWNlVGl0bGVDb2RlIClcclxuICAgICAgICAgICAgaWYgKCAhIC9ebnVpXFwuZ2V0aXRcXC50YWIxX29ubF9tYXlyZXN0cmljdC8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSAgfHwgL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX21heXJlc3RyaWN0Ly50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpICYmICEgc2VsZi5vbkNhbXB1cyApIHtcclxuICAgICAgICAgICAgICBhcHBlbmRCdXR0b25Uby5hZnRlcigkY29tcGlsZShyZXF1ZXN0QUNvcHlIVE1MKSgkc2NvcGUpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHNlbGYuc2hvd1JlcXVlc3RBQ29weUZvcm0gPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXHJcbiAgICAgICAgICAgICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVlc3RBQ29weURpYWxvZ0hUTUwsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkbWREaWFsb2cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGxldCBwbnhEaXNwbGF5ID0gIHJlY29yZERhdGEucG54LmRpc3BsYXk7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5nQ2FwdGNoYVJlc3BvbnNlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5jYXBjaGFQdWJsaWNLZXkgPSBjYXBjaGFQdWJsaWNLZXk7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5yZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBtb3RpdmF0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcG54RGlzcGxheS50aXRsZVswXSxcclxuICAgICAgICAgICAgICAgICAgICBjb250cmlidXRvcjogKCgpID0+IHsgKCBwbnhEaXNwbGF5LmNvbnRyaWJ1dG9yID8gcG54RGlzcGxheS5jb250cmlidXRvclswXSA6ICcnICkgfSkoKSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdG9yOiBwbnhEaXNwbGF5LmNyZWF0b3IgPyBwbnhEaXNwbGF5LmNyZWF0b3JbMF0gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBpc3BhcnRvZjogcG54RGlzcGxheS5pc3BhcnRvZiA/IHBueERpc3BsYXkuaXNwYXJ0b2ZbMF0gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAncmVxdWVzdCBhIGNvcHknXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZXRXaWRnZXRJZCA9IGZ1bmN0aW9uICh3aWRnZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnQ3JlYXRlZCB3aWRnZXQgSUQ6ICVzJywgd2lkZ2V0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS53aWRnZXRJZCA9IHdpZGdldElkO1xyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2V0UmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldCByZXNwb25zZSBmcm9tIGNhcHR1cmU6XCIgKyByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdDYXB0Y2hhUmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNiRXhwaXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0V4cGlyYXRpb24gRGlzYWJsZSBTdWJtaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ0NhcHRjaGFSZXNwb25zZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNhbmNlbFJlcXVlc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VuZFJlcXVlc3QgPSBmdW5jdGlvbiAoYW5zd2VyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ2ctcmVjYXB0Y2hhLXJlc3BvbnNlJzogJHNjb3BlLmdDYXB0Y2hhUmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uSWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5zb3VyY2VpZFswXSxcclxuICAgICAgICAgICAgICAgICAgICAgIHJlY29yZElkOiByZWNvcmREYXRhLnBueC5jb250cm9sLnJlY29yZGlkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlUmVjb3JkSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wuc291cmNlcmVjb3JkaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcG54RGlzcGxheS50aXRsZVswXSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dG9yOiAoKCkgPT4geyAoIHBueERpc3BsYXkuY29udHJpYnV0b3IgPyBwbnhEaXNwbGF5LmNvbnRyaWJ1dG9yWzBdIDogJycgKSB9KSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRvcjogcG54RGlzcGxheS5jcmVhdG9yID8gcG54RGlzcGxheS5jcmVhdG9yWzBdIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc3BhcnRvZjogcG54RGlzcGxheS5pc3BhcnRvZiA/IHBueERpc3BsYXkuaXNwYXJ0b2ZbMF0gOiAnJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXBseVRvOiAkc2NvcGUucmVxdWVzdC5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1vdGl2YXRpb246ICRzY29wZS5yZXF1ZXN0Lm1vdGl2YXRpb25cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nICggZGF0YSApXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnJlcXVlc3QucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5yZXF1ZXN0Lm1vdGl2YXRpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6cmVxdWVzdEFDb3B5VVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi4kcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLiR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSB0aGUgcmVxdWVzdCBoYWQgYmVlbiBzZW5kISc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLl9fc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogJHNjb3BlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVEZWxheTogNTAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYuJHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC4kdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IHRoZSByZXF1ZXN0Lic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBtZXNzYWdlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2UuX19zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiAkc2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURlbGF5OiA1MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07IC8vc2hvd1JlcXVlc3RBQ29weUZvcm1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IC8vaWYgKCAoICEgL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX25vcmVzdHJpY3QvLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkgICkgKXtcclxuICAgIH0gLy8gaWYgKC9ebnVpXFwuZ2V0aXRcXC4vLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkpICBcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50UmVjb3JkKCkge1xyXG4gICAgbGV0IHNlbGVjdG9yID0gJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInOyAvLydwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJ1xyXG4gICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgbGV0IGVsZW1lbnRDdHJsID0gZWxlbWVudC5jb250cm9sbGVyKHNlbGVjdG9yKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudEN0cmwpO1xyXG4gICAgICByZXR1cm4gZWxlbWVudEN0cmwuaXRlbTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuUmVxdWVzdEFDb3B5Q29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyRodHRwJywgJyRyb290U2NvcGUnLCAncmVxdWVzdEFDb3B5VVJMJywgJ01lc3NhZ2VTZXJ2aWNlJ107XHJcblxyXG5leHBvcnQgbGV0IHJlcXVlc3RBQ29weUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBSZXF1ZXN0QUNvcHlDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59IiwiY2xhc3MgQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coJycsICRzY29wZSk7XHJcbiAgfVxyXG59XHJcblxyXG5Bbm5vdW5jZW1lbnRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgYW5ub3VuY2VtZW50c0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGZlZWRiYWNrQW5ub3VuY2VtZW50SFRNTCBmcm9tICcuL2ZlZWRiYWNrQW5ub3VuY2VtZW50Lmh0bWwnXHJcbmltcG9ydCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0hUTUwgZnJvbSAnLi9mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZy5odG1sJ1xyXG5pbXBvcnQgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyIGZyb20gJy4vZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2cnXHJcblxyXG5jbGFzcyBGZWVkYmFja0Fubm91bmNlbWVudENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRyYW5zbGF0ZSwgJHRpbWVvdXQsIEZlZWRiYWNrU2VydmljZSwgTWVzc2FnZVNlcnZpY2UsIGFjdGlvbkljb25zKSB7XHJcblxyXG4gICAgLy8kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vbGV0IG1lc3NhZ2UgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuc3VydmV5LmFubm91bmNlbWVudCcpO1xyXG4gICAgICBsZXQgc2hvd0ZlZWRiYWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByaW1vRmVlZGJhY2snKTtcclxuICAgICAgaWYgKHNob3dGZWVkYmFjayA9PSBudWxsKSB7XHJcbiAgICAgICAgJHRyYW5zbGF0ZSgnbGJzLm51aS5zdXJ2ZXkuYW5ub3VuY2VtZW50JykudGhlbigobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhmZWVkYmFja0Fubm91bmNlbWVudEhUTUwucmVwbGFjZSgne3ttZXNzYWdlfX0nLCBtZXNzYWdlKSwge1xyXG4gICAgICAgICAgICBzY29wZTogJHNjb3BlLFxyXG4gICAgICAgICAgICBoaWRlRGVsYXk6IDAsXHJcbiAgICAgICAgICAgIGFjdGlvbkxhYmVsOiAkdHJhbnNsYXRlLmluc3RhbnQoJ21haW5tZW51LmxhYmVsLmZlZWRiYWNrJykgfHwgJ0ZlZWRiYWNrJyxcclxuICAgICAgICAgICAgYWN0aW9uOlxyXG4gICAgICAgICAgICAgICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIEZlZWRiYWNrU2VydmljZS5zaG93KCRldmVudCwgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dIVE1MLCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAvL30sIDIwMDApO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbkZlZWRiYWNrQW5ub3VuY2VtZW50Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCcsICdGZWVkYmFja1NlcnZpY2UnLCAnTWVzc2FnZVNlcnZpY2UnLCAnYWN0aW9uSWNvbnMnXTtcclxuXHJcbmV4cG9ydCBsZXQgZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmVlZGJhY2tBbm5vdW5jZW1lbnRDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkbWREaWFsb2csICRtZFRvYXN0LCAkdHJhbnNsYXRlLCAkaHR0cCwgZmVlZGJhY2tTZXJ2aWNlVVJMLCBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5zY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XHJcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgIHRoaXMuaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwgPSBmZWVkYmFja1NlcnZpY2VVUkw7XHJcblxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICRzY29wZS5jYW5jZWxGZWVkYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5tZERpYWxvZy5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gKGFuc3dlcikgPT4ge1xyXG4gICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICBzdWJqZWN0OiAkc2NvcGUuZmVlZGJhY2suc3ViamVjdCxcclxuICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcclxuICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcclxuICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXHJcbiAgICAgICAgdHlwZTogJ3N1cnZleScsXHJcbiAgICAgICAgZmVlZGJhY2s6ICRzY29wZS5mZWVkYmFjay5hbnN3ZXJzLFxyXG4gICAgICAgIGVtYWlsOiAkc2NvcGUuZmVlZGJhY2sucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgdXNlcklkOiBzZWxmLnVzZXIuaWQgfHwgJycsXHJcbiAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNlbGYubWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICBzZWxmLmh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICB1cmw6IHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9GZWVkYmFjaycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrISc7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLic7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcbiAgICAgICAgJHNjb3BlLmZlZWRiYWNrID0ge1xyXG4gICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgYW5zd2VyczogW10sXHJcbiAgICAgICAgICBzdWJqZWN0OiAnZmVlZGJhY2snXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJHRyYW5zbGF0ZScsICckaHR0cCcsICdmZWVkYmFja1NlcnZpY2VVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuIiwiY2xhc3MgRmluZXNNZXNzYWdlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoTWVzc2FnZVNlcnZpY2UsICR0cmFuc2xhdGUsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vVE9ETzpleHRyYWN0IGh0bWwgdG8gaXRzIG93biBmaWxlLiBmaW5kIG91dCBob3cgdG8gcmVzb2x2ZSB7e319XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnlvdUhhdmVGaW5lcycpO1xyXG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xcJDAvLCB1c2VyLmZpbmVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGxldCBwYXkgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkueW91SGF2ZUZpbmVzLnBheScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coYFxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImFsaWduLXNlbGY6Y2VudGVyO1wiPiR7bWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO2NvbG9yOiB3aGl0ZTtcIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtc2VjdW5kYXJ5XCIgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvcGF5X215X2ZpbmVzJz4ke3BheX08L2E+XHJcbiAgICAgICAgICBgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5GaW5lc01lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ01lc3NhZ2VTZXJ2aWNlJywgJyR0cmFuc2xhdGUnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBmaW5lc01lc3NhZ2VDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmluZXNNZXNzYWdlQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbHRtZXRyaWNzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkY29tcGlsZSwgJG1kVG9hc3QsICR0aW1lb3V0LCAkd2luZG93KSB7XHJcbiAgICAgICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMuY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgICAgIHRoaXMudGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tBbHRtZXRyaWNzY3JpcHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSAyMDA7XHJcbiAgICAgICAgICAgIHZhciBlbmRUaW1lID0gTnVtYmVyKG5ldyBEYXRlKCkpICsgMTUwMDA7IC8vIHN0b3AgY29udHJvbCBhZnRlciA1IHNlY29uZHNcclxuXHJcbiAgICAgICAgICAgIHZhciB3YWl0X3VudGlsX2FsdG1ldHJpY3NfbG9hZGVkID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbmRpdGlvbiBpcyBtZXQsIHdlJ3JlIGRvbmUhIFxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHR5cGVvZiB3aW5kb3cuX2FsdG1ldHJpY19lbWJlZF9pbml0ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb25kaXRpb24gaXNuJ3QgbWV0IGJ1dCB0aGUgdGltZW91dCBoYXNuJ3QgZWxhcHNlZCwgZ28gYWdhaW5cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKE51bWJlcihuZXcgRGF0ZSgpKSA8IGVuZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRfdW50aWxfYWx0bWV0cmljc19sb2FkZWQsIGludGVydmFsLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRGlkbid0IG1hdGNoIGFuZCB0b28gbXVjaCB0aW1lLCByZWplY3QhXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdXYWl0IHVudGlsIGFsdG1ldHJpY3MgaXMgbG9hZGVkIHRpbWVkIG91dCcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHdhaXRfdW50aWxfYWx0bWV0cmljc19sb2FkZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRBbHRtZXRyaWNzKGFsdG1ldHJpY3NFbGVtZW50U2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FsdG1ldHJpY3NjcmlwdHMoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTG9hZGluZyBhbHRtZXRyaWNzOiBXZSBrdW5uZW4gc3RhcnRlbicpO1xyXG4gICAgICAgICAgICB3aW5kb3cuX2FsdG1ldHJpY19lbWJlZF9pbml0KGFsdG1ldHJpY3NFbGVtZW50U2VsZWN0b3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbkFsdG1ldHJpY3NTZXJ2aWNlLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJGNvbXBpbGUnLCAnJG1kVG9hc3QnLCAnJHRpbWVvdXQnLCAnJHdpbmRvdyddO1xyXG4iLCJleHBvcnQgbGV0IGZlZWRTZXJ2aWNlID0gWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XHJcbiAgdmFyIGZlZWRBbnRpQ2FjaGUgPSBcIj8mdD1cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcmFuZG9tTnVtO1xyXG4gIHZhciByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCArIDEpO1xyXG4gIHZhciBmZWVkZGF5c29sZCA9IDYwO1xyXG5cclxuICB2YXIgZG0gPSBuZXcgRGF0ZSgpO1xyXG4gIGRtLnNldEhvdXJzKDI0LCAwLCAwLCAwKTtcclxuXHJcbiAgdmFyIGFwaV9lbmRwb2ludCA9ICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRfYWdncmVnYXRvcj8nO1xyXG5cclxuICBmdW5jdGlvbiByZWFkRmVlZENvbmZpZyh1cmwpIHtcclxuICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLUZyb20tRXhMLUFQSS1HYXRld2F5XCI6IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlYWRGZWVkKHVybCkge1xyXG4gICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgdXJsOiBhcGlfZW5kcG9pbnQgKyB1cmwsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIlgtRnJvbS1FeEwtQVBJLUdhdGV3YXlcIjogdW5kZWZpbmVkXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VGZWVkKGNvbmYpIHtcclxuICAgIHJldHVybiByZWFkRmVlZChjb25mLmZlZWRVcmwpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29uZi5mZWVkVXJsKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhjb25mLmZlZWRGaWx0ZXIpO1xyXG4gICAgICB2YXIgcGF0dCA9IC9eZW50cnlcXC58Xml0ZW1cXC4vaTtcclxuICAgICAgdmFyIGZpbHRlcmVkUmVzdWx0cyA9IHJlcy5kYXRhLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHZhciByZXR2YWwgPSBmYWxzZTtcclxuICAgICAgICBpZiAoaXRlbS5wdWJEYXRlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICBpdGVtLnB1YkRhdGUgPSBkbTtcclxuICAgICAgICAgIHJlcy5kYXRhLml0ZW1zW2luZGV4XS5wdWJEYXRlID0gZG07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIG5vIGZpbHRlciBjb25maWd1cmVkICovXHJcbiAgICAgICAgaWYgKGNvbmYuZmVlZEZpbHRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmYuZmVlZEZpbHRlci5mb3JFYWNoKGZ1bmN0aW9uKGYpIHtcclxuICAgICAgICAgIGlmIChwYXR0LnRlc3QoZi5wYXJhbSkpIHtcclxuICAgICAgICAgICAgdmFyIGZmID0gZi5wYXJhbS5yZXBsYWNlKHBhdHQsIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtW2ZmXSkpIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbVtmZl0uaW5kZXhPZihmLnZhbHVlKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW1bZmZdID09IGYudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyogZmlsdGVyIG9sZCBpdGVtcyAqL1xyXG4gICAgICAgIGlmIChmZWVkZGF5c29sZCA8IE1hdGguY2VpbChkbS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShpdGVtLnB1YkRhdGUpLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpIHtcclxuICAgICAgICAgIHJldHZhbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldHZhbDtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZFJlc3VsdHM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNvcnRGZWVkKGZlZWRzKSB7XHJcbiAgICAvL3JldHVybiBmZWVkcy5zb3J0KGNvbXBhcmVEYXRlcyk7XHJcbiAgICByZXR1cm4gZmVlZHMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEucHViRGF0ZSk7XHJcbiAgICAgIHZhciBkYXRlQiA9IG5ldyBEYXRlKGIucHViRGF0ZSk7XHJcbiAgICAgIGlmIChkYXRlQS5nZXRUaW1lKCkgPT09IGRtLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGRhdGVBID0gbmV3IERhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGVCLmdldFRpbWUoKSA9PT0gZG0uZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZSgwKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlYWRGZWVkQ29uZmlnOiByZWFkRmVlZENvbmZpZyxcclxuICAgIHJlYWRGZWVkOiByZWFkRmVlZCxcclxuICAgIHBhcnNlRmVlZDogcGFyc2VGZWVkLFxyXG4gICAgc29ydEZlZWQ6IHNvcnRGZWVkXHJcbiAgfTtcclxufV07XHJcbiIsImltcG9ydCBmZWVkYmFja1NlcnZpY2VIVE1MIGZyb20gJy4vZmVlZGJhY2tTZXJ2aWNlLmh0bWwnXHJcbmltcG9ydCBEaWFsb2dDb250cm9sbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9kaWFsb2cnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVlZGJhY2tTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigkbWREaWFsb2cpIHtcclxuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XHJcbiAgfVxyXG5cclxuICBzaG93KCRldmVudCA9IG51bGwsIGZlZWRiYWNrRGlhbG9nSFRNTCA9IG51bGwsIGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlciA9IG51bGwpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmIChmZWVkYmFja0RpYWxvZ0hUTUwgPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBkaWFsb2cgaW5zdGFudGlhdGVkJyk7XHJcbiAgICAgIGZlZWRiYWNrRGlhbG9nSFRNTCA9IGZlZWRiYWNrU2VydmljZUhUTUw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlciA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IGRpYWxvZyBjb250cm9sbGVyIGluc3RhbnRpYXRlZCcpO1xyXG4gICAgICBmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPSBEaWFsb2dDb250cm9sbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWREaWFsb2cuc2hvdyh7XHJcbiAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxyXG4gICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgdGVtcGxhdGU6IGZlZWRiYWNrRGlhbG9nSFRNTCxcclxuICAgICAgY29udHJvbGxlcjogZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkZlZWRiYWNrU2VydmljZS4kaW5qZWN0ID0gWyckbWREaWFsb2cnXTtcclxuIiwiaW1wb3J0IG1lc3NhZ2VTZXJ2aWNlSFRNTCBmcm9tICcuL21lc3NhZ2VTZXJ2aWNlLmh0bWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJGNvbXBpbGUsICRtZFRvYXN0LCAkc2NlLCAkdHJhbnNsYXRlLCAkdGltZW91dCkge1xyXG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XHJcbiAgICB0aGlzLnNjZSA9ICRzY2U7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgIHRoaXMuY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG5cclxuICAgIC8vIHRoaXMubWVzc2FnZVNlcnZpY2VFdmVudEhhbmRsZXIgPSB0aGlzLnJvb3RTY29wZS4kb24oJyR0cmFuc2xhdGVMb2FkaW5nRW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT4gdHJhbnNsYXRpb24gbG9hZGVkIDw9PT09PT09PT09XCIpO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBzaG93KG1lc3NhZ2UgPSAnJywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IG51bGw7XHJcbiAgICBsZXQgaGlkZURlbGF5ID0gb3B0aW9ucy5oaWRlRGVsYXkgfHwgMDtcclxuICAgIGxldCBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbiB8fCBudWxsO1xyXG4gICAgbGV0IGFjdGlvbkxhYmVsID0gb3B0aW9ucy5hY3Rpb25MYWJlbCB8fCAndW5rbm93bic7XHJcbiAgICBsZXQgbWVzc2FnZUtleSA9ICdsYnMuZ2VuZXJhbE1lc3NhZ2UnO1xyXG5cclxuICAgIHNlbGYudHJhbnNsYXRlKG1lc3NhZ2VLZXkpLnRoZW4oKG0pID0+IHtcclxuICAgICAgbWVzc2FnZSA9IChtID09IG1lc3NhZ2VLZXkgfHwgbSA8PSAxKSA/ICcnIDogbTtcclxuXHJcbiAgICAgIHNlbGYuX19zaG93KHtcclxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgIHNjb3BlOiBzY29wZSxcclxuICAgICAgICBoaWRlRGVsYXk6IGhpZGVEZWxheSxcclxuICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICBhY3Rpb25MYWJlbDogYWN0aW9uTGFiZWxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9fc2hvdyhvcHRpb25zID0ge30pIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBzY29wZSA9IG9wdGlvbnMuc2NvcGU7XHJcbiAgICBsZXQgaGlkZURlbGF5ID0gb3B0aW9ucy5oaWRlRGVsYXk7XHJcbiAgICBsZXQgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb247XHJcbiAgICBsZXQgYWN0aW9uTGFiZWwgPSBvcHRpb25zLmFjdGlvbkxhYmVsO1xyXG4gICAgbGV0IG1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2U7XHJcblxyXG4gICAgLy8gaWYgKG1lc3NhZ2UubGVuZ3RoID09IDApIHtcclxuICAgIC8vICAgLy8gY29kZSB0YWJsZSBlbnRyaWVzIGNhbiBub3QgaGF2ZSBlbXB0eSBkZXNjcmlwdGlvbnMuXHJcbiAgICAvLyAgIC8vIG1lc3NhZ2UgPD0gMSB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQhISEhXHJcbiAgICAvLyAgIGxldCBtZXNzYWdlS2V5ID0gJ2xicy5nZW5lcmFsTWVzc2FnZSc7XHJcbiAgICAvLyAgIG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KG1lc3NhZ2VLZXkpO1xyXG4gICAgLy8gICBtZXNzYWdlID0gKG1lc3NhZ2UgPT0gbWVzc2FnZUtleSB8fCBtZXNzYWdlIDw9IDEpID8gJycgOiBtZXNzYWdlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHRvYXN0Q29uZmlnID0ge1xyXG4gICAgICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcclxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRoaXMuYWN0aW9uTGFiZWwgPSBhY3Rpb25MYWJlbDtcclxuXHJcbiAgICAgICAgICB0aGlzLm9uQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5vbkFjdGlvbiA9ICgkZXZlbnQgPSBudWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWN0aW9uLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgc2VsZi5tZFRvYXN0LmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChzY29wZSkge1xyXG4gICAgICAgICAgICAvL3RoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKHNlbGYuY29tcGlsZShgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKShzZWxmLnJvb3RTY29wZSkuaHRtbCgpKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwoc2VsZi5jb21waWxlKGA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPmApKHNjb3BlKS5odG1sKCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwobWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6IG1lc3NhZ2VTZXJ2aWNlSFRNTCxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCBjZW50ZXInLFxyXG4gICAgICAgIGhpZGVEZWxheTogaGlkZURlbGF5XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYubWRUb2FzdC5zaG93KHRvYXN0Q29uZmlnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdObyBtZXNzYWdlIHRvIGRpc3BsYXknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5NZXNzYWdlU2VydmljZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRjb21waWxlJywgJyRtZFRvYXN0JywgJyRzY2UnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCddO1xyXG4iLCIvKlxyXG4gIENlbnRyYWwgUGFja2FnZSBMb2FkZXJcclxuXHJcbiAgRG8gTk9UIGVkaXQgdGhpcyBmaWxlLlxyXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5pbXBvcnQgUHJpbW8gZnJvbSAnLi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltbydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXHJcbmltcG9ydCBUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMnXHJcblxyXG5pbXBvcnQge2ZlZWRTZXJ2aWNlfSBmcm9tICcuL2ZhY3Rvcmllcy9mZWVkU2VydmljZSdcclxuaW1wb3J0IE1lc3NhZ2VTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL21lc3NhZ2VTZXJ2aWNlJ1xyXG5pbXBvcnQgRmVlZGJhY2tTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL2ZlZWRiYWNrU2VydmljZSdcclxuaW1wb3J0IEFsdG1ldHJpY3NTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL2FsdG1ldHJpY3NTZXJ2aWNlJ1xyXG5cclxuLy9tYWtlIFByaW1vIHB1YmxpY1xyXG53aW5kb3cuUHJpbW8gPSBQcmltbztcclxuLy9sb2FkIFByaW1vRXhwbG9yZXIgVUkgaWYgYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKCkgaXMgcmFuXHJcbndpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICBpZiAoUHJpbW8uaXNEZWJ1Z0VuYWJsZWQoKSkge1xyXG4gICAgbGV0IHVpVVJMID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vbWVobWV0Yy9wcmltby1leHBsb3JlLWRvbS11aS9mYzA4NjhkZi9qcy9jdXN0b20uanMnO1xyXG4gICAgLy9sZXQgdWlVUkwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2pzL2N1c3RvbS5qcyc7XHJcblxyXG4gICAgSGVscGVyLmxvYWRTY3JpcHQodWlVUkwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5qZWN0aW5nIFVJJyk7XHJcbiAgICAgIFByaW1vLmV4cGxvcmUudWkudG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0sIDIwMDApO1xyXG5cclxuLy9DcmVhdGUgdGhlIGNlbnRyYWxDdXN0b20gbW9kdWxlO1xyXG5pZiAod2luZG93LmFwcENvbmZpZy52aWQgPT0gJ0VDQicpIHtcclxuICB3aW5kb3cuYnJvd3ppbmUgPSB7XHJcbiAgICBhcGk6IFwiaHR0cHM6Ly9wdWJsaWMtYXBpLnRoaXJkaXJvbi5jb20vcHVibGljL3YxL2xpYnJhcmllcy8xNjI0XCIsXHJcbiAgICBhcGlLZXk6IFwiZTcxZDFjMzEtNzkzOC00NzBhLThiZTItYTZlMzUxZTBjMDAxXCIsXHJcbiAgICBqb3VybmFsQnJvd1ppbmVXZWJMaW5rVGV4dDogXCJWaWV3IEpvdXJuYWwgQ29udGVudHNcIixcclxuICAgIGFydGljbGVCcm93WmluZVdlYkxpbmtUZXh0OiBcIlZpZXcgSXNzdWUgQ29udGVudHNcIixcclxuICAgIGFydGljbGVQREZEb3dubG9hZExpbmtFbmFibGVkOiB0cnVlLFxyXG4gICAgYXJ0aWNsZVBERkRvd25sb2FkTGlua1RleHQ6IFwiRG93bmxvYWQgUERGXCIsXHJcbiAgfTtcclxufVxyXG4vL2xldCBzZXJ2aWNlc0hvc3QgPSAnaHR0cDovLzE5Mi4xNjguMTAwLjEwMTo5MjkyLyc7XHJcbmxldCBzZXJ2aWNlc0hvc3QgPSAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS8nO1xyXG5cclxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdjZW50cmFsQ3VzdG9tJywgWyduZ01hdGVyaWFsJywgJ3ZjUmVjYXB0Y2hhJ10pXHJcbiAgLypcclxuICAvLy5jb25zdGFudCgnc2VydmljZXNIb3N0JywgJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvJylcclxuICAgIC5jb25zdGFudCgnZmVlZGJhY2tTZXJ2aWNlVVJMJywgJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvZmVlZGJhY2snKVxyXG4gICAgLmNvbnN0YW50KCdyZXBvcnRBUHJvYmxlbVVSTCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL3JlcG9ydF9hX3Byb2JsZW0nKVxyXG4gICAgLmNvbnN0YW50KCdyZXF1ZXN0QUNvcHlVUkwnLCAnaHR0cDovLzE5Mi4xNjguMTAwLjEwMTo5MjkyLy9yZXF1ZXN0X2FfY29weScpXHJcbiAgKi9cclxuICAuY29uc3RhbnQoJ2ZlZWRiYWNrU2VydmljZVVSTCcsIHNlcnZpY2VzSG9zdCArICdmZWVkYmFjaycpXHJcbiAgLmNvbnN0YW50KCdyZXBvcnRBUHJvYmxlbVVSTCcsIHNlcnZpY2VzSG9zdCArICdyZXBvcnRfYV9wcm9ibGVtJylcclxuICAuY29uc3RhbnQoJ3JlcXVlc3RBQ29weVVSTCcsIHNlcnZpY2VzSG9zdCArICdyZXF1ZXN0X2FfY29weScpXHJcblxyXG4gIC5jb25maWcoKCRzY2VEZWxlZ2F0ZVByb3ZpZGVyKSA9PiB7XHJcbiAgICAkc2NlRGVsZWdhdGVQcm92aWRlci5yZXNvdXJjZVVybFdoaXRlbGlzdChbXHJcbiAgICAgICcqKidcclxuICAgIF0pO1xyXG4gIH0pXHJcbiAgLnJ1bigoJHRlbXBsYXRlQ2FjaGUsICRyb290U2NvcGUpID0+IHtcclxuICAgIC8vJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC9mdWxsVmlldy9mdWxsLXZpZXcuaHRtbCcsIGZ1bGxWaWV3SFRNTCk7XHJcbiAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vaG90a2V5cy1qc0AyLjAuOC9kaXN0L2hvdGtleXMubWluLmpzJykudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdob3RrZXlzLmpzIGxvYWRlZCcpO1xyXG4gICAgfSk7XHJcbiAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly9kMWJ4aDh1YXMxbW53Ny5jbG91ZGZyb250Lm5ldC9hc3NldHMvZW1iZWQuanM/JyArIERhdGUubm93KCkpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnYWx0bWVyaWNzIGVtYmVkLmpzIGxvYWRlZCcpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAod2luZG93LmFwcENvbmZpZy52aWQgPT0gJ0VDQicpIHtcclxuICAgICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9icm93emluZS1hZGFwdGVycy9wcmltby9icm93emluZS1wcmltby1hZGFwdGVyLmpzJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Jyb3d6aW5lLXByaW1vLWFkYXB0ZXIuanMgbG9hZGVkJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgLmZhY3RvcnkoJ0ZlZWRTZXJ2aWNlJywgZmVlZFNlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ0FsdG1ldHJpY3NTZXJ2aWNlJywgQWx0bWV0cmljc1NlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ01lc3NhZ2VTZXJ2aWNlJywgTWVzc2FnZVNlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ0ZlZWRiYWNrU2VydmljZScsIEZlZWRiYWNrU2VydmljZSlcclxuICAuZmFjdG9yeSgnYXBpQ2FsbEludGVyY2VwdG9yJywgWygpID0+IHtcclxuICAgIHZhciBhcGlDYWxsSW50ZXJjZXB0b3IgPSB7XHJcbiAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvL1wiQXNzZXNzaW5nIEdvc3BlbCBRdW90YXRpb25zIGluIEp1c3RpbiBNYXJ0eXJcIlxyXG4gICAgICAgIGxldCBmaXhEaXNwbGF5RGF0YSA9IGZ1bmN0aW9uIChwbnhEYXRhKSB7XHJcbiAgICAgICAgICBpZiAocG54RGF0YSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgaWYgKHBueERhdGEuZGlzcGxheSAmJiBwbnhEYXRhLmRpc3BsYXkuY3JlYXRvcikge1xyXG4gICAgICAgICAgICAgICAgcG54RGF0YS5kaXNwbGF5LmNyZWF0b3IgPSBwbnhEYXRhLmRpc3BsYXkuY3JlYXRvci5tYXAoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCByZWxhdG9yID0gYy5tYXRjaCgvXFwoLio/XFwpL2kpO1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGMuc3BsaXQoL1xcKC4qP1xcKS9pKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjPWAke2N9ICQkUSR7ZGF0YX1gO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAocG54RGF0YS5kaXNwbGF5ICYmIHBueERhdGEuZGlzcGxheS5jb250cmlidXRvcikge1xyXG4gICAgICAgICAgICAgICAgcG54RGF0YS5kaXNwbGF5LmNvbnRyaWJ1dG9yID0gcG54RGF0YS5kaXNwbGF5LmNvbnRyaWJ1dG9yLm1hcChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgbGV0IHJlbGF0b3IgPSBjLm1hdGNoKC9cXCguKj9cXCkvaSk7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYy5zcGxpdCgvXFwoLio/XFwpL2kpLmpvaW4oXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAocmVsYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGM9YCR7Y30gJCRRJHtkYXRhfWA7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBwbnhEYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKC9eXFwvcHJpbW9fbGlicmFyeVxcL2xpYndlYlxcL3dlYnNlcnZpY2VzXFwvcmVzdFxcL3ByaW1vLWV4cGxvcmVcXC92MVxcL3BueHMvLnRlc3QocmVzcG9uc2UuY29uZmlnLnVybCkpIHtcclxuICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcygnZG9jcycpKSB7XHJcbiAgICAgICAgICAgICAgZGF0YS5kb2NzLm1hcChwID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaXhEaXNwbGF5RGF0YShwLnBueCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmluY2x1ZGVzKCdwbngnKSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wbnggPSBmaXhEaXNwbGF5RGF0YShkYXRhLnBueCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vUmVtb3ZlIG9wZW4gYWNjZXNzIGZyb20gZmFjZXRzXHJcbiAgICAgICAgICB0cnkgeyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmluY2x1ZGVzKCdmYWNldHMnKSkgeyAgICAgICAgXHJcbiAgICAgICAgICAgICAgZGF0YVtcImZhY2V0c1wiXSA9IGRhdGFbXCJmYWNldHNcIl0ubWFwKG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG0ubmFtZSA9PSBcInRsZXZlbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIG0udmFsdWVzID0gbS52YWx1ZXMuZmlsdGVyKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnZhbHVlICE9PSAnb3Blbl9hY2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEnLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICByZXNwb25zZS5kYXRhID0gZGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFwaUNhbGxJbnRlcmNlcHRvcjtcclxuICB9XSkuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsICgkaHR0cFByb3ZpZGVyKSA9PiB7XHJcbiAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdhcGlDYWxsSW50ZXJjZXB0b3InKTtcclxuICB9XSk7XHJcblxyXG5cclxuXHJcbi8vQ29udGFpbnMgdGhlIGFmdGVyIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIGluamVjdGVkXHJcbmxldCBhZnRlckNvbXBvbmVudHMgPSB7fTtcclxuXHJcbi8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcclxuLy9pbmplY3RlZFxyXG5jb25zb2xlLmxvZygnTG9hZGluZyBjZW50cmFsQ3VzdG9tIGNvbXBvbmVudHMnKTtcclxuQ29tcG9uZW50cy5hbGwuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY29tcG9uZW50Lm5hbWUpXHJcbiAgaWYgKGNvbXBvbmVudC5lbmFibGVkKSB7XHJcbiAgICBpZiAoY29tcG9uZW50LmFwcGVuZFRvKSB7XHJcbiAgICAgIGxldCBlbGVtZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dIHx8IFtdO1xyXG4gICAgICAvL2VsZW1lbnRzLnB1c2goY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgICBlbGVtZW50cy5wdXNoKHtcclxuICAgICAgICAnbmFtZSc6IGNvbXBvbmVudC5uYW1lLFxyXG4gICAgICAgICdlbmFibGVJblZpZXcnOiBjb21wb25lbnQuZW5hYmxlSW5WaWV3XHJcbiAgICAgIH0pO1xyXG4gICAgICBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSA9IGVsZW1lbnRzO1xyXG5cclxuICAgIH1cclxuICAgIGFwcC5jb25zdGFudCgnYWZ0ZXJDb21wb25lbnRzJywgYWZ0ZXJDb21wb25lbnRzKTtcclxuICAgIGFwcC5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUudG9DYW1lbENhc2UoKSwgY29tcG9uZW50LmNvbmZpZyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnNvbGUubG9nKCdSZXBsYWNlIFRlbXBsYXRlcycpO1xyXG5UZW1wbGF0ZXMuYWxsLmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XHJcbiAgY29uc29sZS5sb2codGVtcGxhdGUuaWQpXHJcbiAgYXBwLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCh0ZW1wbGF0ZS5pZCwgdGVtcGxhdGUudGVtcGxhdGUpO1xyXG4gIH0pXHJcbn0pXHJcblxyXG4vL0luamVjdCBwbGFjZSBob2xkZXJzIGludG8gdGhlIGFmdGVyIGNvbXBvbmVudHNcclxuT2JqZWN0LmtleXMoYWZ0ZXJDb21wb25lbnRzKS5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcclxuICBsZXQgc3ViQ29tcG9uZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnRdO1xyXG5cclxuICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC50b0NhbWVsQ2FzZSgpLCB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogc3ViQ29tcG9uZW50cy5tYXAobSA9PiBgPCR7bS5uYW1lfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke20ubmFtZX0+YCkuam9pbihcIlwiKVxyXG4gIH0pO1xyXG59KTsiLCJpbXBvcnQgRXhwbG9yZSBmcm9tICcuL3ByaW1vL2V4cGxvcmUnXHJcbmltcG9ydCBSZWNvcmRzIGZyb20gJy4vcHJpbW8vcmVjb3JkcydcclxuaW1wb3J0IEZhY2V0cyBmcm9tICcuL3ByaW1vL2ZhY2V0cydcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi9wcmltby92aWV3J1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL3ByaW1vL3VzZXInXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9wcmltby9leHBsb3JlL2hlbHBlcidcclxuXHJcbi8qKlxyXG4gKiBQcmltbyBtYWluIGVudHJ5IGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmltbyB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIHZlcnNpb24gaW5mb3JtYXRpb25cclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCB2ZXJzaW9uKCkge1xyXG4gICAgbGV0IF92ZXJzaW9uID0gXCIwLjAuMTBcIjtcclxuICAgIHJldHVybiBgTGlicmFyeToke192ZXJzaW9ufSAtIFByaW1vOiR7d2luZG93LmFwcENvbmZpZ1snc3lzdGVtLWNvbmZpZ3VyYXRpb24nXS5Qcmltb19WZXJzaW9uX051bWJlcn06JHt3aW5kb3cuYXBwQ29uZmlnWydzeXN0ZW0tY29uZmlndXJhdGlvbiddLlByaW1vX0hvdEZpeF9OdW1iZXJ9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGhhcyByYW5cclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCgpIHtcclxuICAgIHJldHVybiBIZWxwZXIuaXNEZWJ1Z0VuYWJsZWQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZCB0aGUgc2NyaXB0IHJhbiBvbiBhIFByaW1vIHNpdGVcclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc1ByaW1vQXZhaWxhYmxlKCkge1xyXG4gICAgcmV0dXJuIEhlbHBlci5pc1ByaW1vQXZhaWxhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGlzIGEgcHJveHkgY2xhc3NcclxuICAgKiBAcmV0dXJuIHtFeHBsb3JlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgZXhwbG9yZSgpIHtcclxuICAgIHJldHVybiBFeHBsb3JlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byBhdmFpbGFibGUgcmVjb3Jkc1xyXG4gICAqIEByZXR1cm4ge1JlY29yZHN9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCByZWNvcmRzKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZXNvbHZlKG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XHJcbiAgICB9KVxyXG4gICAgLy9yZXR1cm4gbmV3IFJlY29yZHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byBhdmFpbGFibGUgZmFjZXRzXHJcbiAgICogQHJldHVybiB7RmFjZXRzfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgZmFjZXRzKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZXNvbHZlKG5ldyBGYWNldHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpKTtcclxuICAgIH0pXHJcbiAgICAvL3JldHVybiBuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gdmlldyByZWxhdGVkIG1ldGFkYXRhXHJcbiAgICogQHJldHVybiB7Vmlld31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHZpZXcoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZXNvbHZlKG5ldyBWaWV3KCkpO1xyXG4gICAgfSlcclxuICAgIC8vcmV0dXJuIG5ldyBWaWV3KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHVzZXIgcmVsYXRlZCBtZXRhZGF0YVxyXG4gICAqIEByZXR1cm4ge1VzZXJ9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCB1c2VyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgSGVscGVyLnVzZXJEZXRhaWxzSFRUUCgpLnRoZW4oKHVzZXJEZXRhaWxzKT0+e1xyXG4gICAgICAgIEhlbHBlci51c2VyRmluZXNIVFRQKCkudGhlbigodXNlckZpbmVzKSA9PiB7XHJcbiAgICAgICAgICBIZWxwZXIudXNlckxvYW5zSFRUUCgpLnRoZW4oKHVzZXJMb2FucykgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUobmV3IFVzZXIoe2RldGFpbHM6IHVzZXJEZXRhaWxzLCBmaW5lczogdXNlckZpbmVzLCBsb2FuczogdXNlckxvYW5zfSkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG4vL3RoaXMgaXMgcHJveHkgY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9yZSB7XHJcbiAgc3RhdGljIGdldCBjb21wb25lbnRzKCkge1xyXG4gICAgbGV0IGMgPSBuZXcgQ29tcG9uZW50cygpO1xyXG4gICAgSGVscGVyLmNvbXBvbmVudE5hbWVzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XHJcbiAgICAgIGMuYWRkKHNlbGVjdG9yKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHVpKCkge1xyXG4gICAgaWYgKHRoaXMuX3VpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhpcyBpcyBhIHN0dWIgZnVuY3Rpb24gY2FsbCBcImFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpXCIgdG8gYWN0aXZhdGUgVUknKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl91aTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaGVscGVyKCkge1xyXG4gICAgcmV0dXJuIEhlbHBlcjtcclxuICB9XHJcbn1cclxuIiwidmFyIGNzc1NlbGVjdG9yR2VuZXJhdG9yID0gbmV3KHJlcXVpcmUoJy4uLy4uL3ZlbmRvci9jc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzJykpLkNzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG5cclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcidcclxuXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCl7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYmxpbmsoKXtcclxuICAgIEhlbHBlci5ibGluayh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCBjc3NQYXRoKCl7XHJcbiAgICByZXR1cm4gY3NzU2VsZWN0b3JHZW5lcmF0b3IuZ2V0U2VsZWN0b3IodGhpcy5lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCl7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmxvY2FsTmFtZTtcclxuICB9XHJcblxyXG4gIHNjb3BlKCl7XHJcbiAgICBpZiAoSGVscGVyLmlzRGVidWdFbmFibGVkKCkpe1xyXG4gICAgICByZXR1cm4gYW5ndWxhci5lbGVtZW50KHRoaXMuZWxlbWVudCkuc2NvcGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBydW4gXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIGZpcnN0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjdHJsKCl7XHJcbiAgICBsZXQgYyA9IGFuZ3VsYXIuZWxlbWVudCh0aGlzLmVsZW1lbnQpLmNvbnRyb2xsZXIodGhpcy5uYW1lKTtcclxuICAgIGlmIChjKSB7XHJcbiAgICAgIHJldHVybiBjO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VzaW5nIGFsdGVybmF0aXZlIG1ldGhvZCB0byBnZXQgY29udHJvbGxlcicpO1xyXG4gICAgICBsZXQgc2NvcGUgPSB0aGlzLnNjb3BlKCk7XHJcbiAgICAgIGlmIChzY29wZSkge1xyXG4gICAgICAgIGxldCBzY29wZUNoaWxkID0gc2NvcGUuJCRjaGlsZFRhaWw7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnJGN0cmwnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGUuJGN0cmxcclxuICAgICAgICB9IGVsc2UgaWYoT2JqZWN0LmtleXMoc2NvcGUpLmluY2x1ZGVzKCdjdHJsJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLmN0cmxcclxuICAgICAgICB9IGVsc2UgaWYgKHNjb3BlQ2hpbGQgJiYgT2JqZWN0LmtleXMoc2NvcGVDaGlsZCkuaW5jbHVkZXMoJyRjdHJsJykpe1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC4kY3RybDtcclxuICAgICAgICB9IGVsc2UgaWYgKHNjb3BlQ2hpbGQgJiYgT2JqZWN0LmtleXMoc2NvcGVDaGlsZCkuaW5jbHVkZXMoJ2N0cmwnKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZUNoaWxkLmN0cmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gJGN0cmwgZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50cyB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSB7fTtcclxuICB9XHJcblxyXG4gIGFkZChzZWxlY3Rvcikge1xyXG4gICAgbGV0IGVsZW1lbnRzID0gSGVscGVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgbGV0IGVsZW1lbnRzQXJyYXkgPSB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSB8fCBbXTtcclxuXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICAgICBlbGVtZW50c0FycmF5LnB1c2gobmV3IENvbXBvbmVudChlbGVtZW50KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSA9IGVsZW1lbnRzQXJyYXk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRzQXJyYXk7XHJcbiAgfVxyXG5cclxuICBnZXQoc2VsZWN0b3IpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAga2V5cygpe1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudHMpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVyIHtcclxuICAgIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Lm5hbWUgPT09ICdOR19FTkFCTEVfREVCVUdfSU5GTyEnIHx8IHR5cGVvZihhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJtLWxvZ28nKSkuc2NvcGUoKSkgIT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XHJcbiAgICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2Yod2luZG93LmFuZ3VsYXIpKSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmltby1leHBsb3JlJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGNvbXBvbmVudE5hbWVzKCkge1xyXG4gICAgICAgIGxldCB0YWdzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKTtcclxuICAgICAgICBsZXQgY29tcG9uZW50TmFtZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0YWcgb2YgdGFncykge1xyXG4gICAgICAgICAgICBsZXQgdGFnTmFtZSA9IHRhZy5sb2NhbE5hbWU7XHJcbiAgICAgICAgICAgIGlmICgvXnBybS0vLnRlc3QodGFnTmFtZSkgfHwgL15wcmltby0vLnRlc3QodGFnTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50TmFtZXMuaW5jbHVkZXModGFnTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lcy5wdXNoKHRhZ05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnROYW1lcyA9IGNvbXBvbmVudE5hbWVzLnNvcnQoKS5maWx0ZXIoKGUsIGksIGEpID0+IGkgPT09IGEuZmluZEluZGV4KChlMikgPT4gZSA9PT0gZTIpKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50TmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluamVjdG9yKCkge1xyXG4gICAgICBsZXQgYyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3ByaW1vLWV4cGxvcmUnKTtcclxuICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgcHJpbW9FeHBsb3JlID0gYW5ndWxhci5lbGVtZW50KGNbMF0uZWxlbWVudCk7XHJcbiAgICAgICAgICBsZXQgaW5qZWN0b3IgICAgID0gcHJpbW9FeHBsb3JlLmluamVjdG9yKCk7XHJcbiAgICAgICAgICBpZiAoaW5qZWN0b3Ipe1xyXG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0b3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaHR0cCgpIHtcclxuICAgICAgbGV0IGluamVjdG9yID0gdGhpcy5pbmplY3RvcigpO1xyXG4gICAgICBpZiAoaW5qZWN0b3IpIHtcclxuICAgICAgICBsZXQgaCA9IGluamVjdG9yLmdldCgnJGh0dHAnKTtcclxuICAgICAgICBpZiAoaCkge1xyXG4gICAgICAgICAgcmV0dXJuIGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGxvYWRTY3JpcHQoc2NyaXB0VVJMKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuYW5ndWxhcikge1xyXG4gICAgICAgICAgbGV0IGFwcEluamVjdG9yID0gYW5ndWxhci5pbmplY3RvcihbJ25nJywnYW5ndWxhckxvYWQnXSk7XHJcbiAgICAgICAgICBpZiAoYXBwSW5qZWN0b3IpIHtcclxuICAgICAgICAgICAgICBsZXQgYW5ndWxhckxvYWQgPSBhcHBJbmplY3Rvci5nZXQoJ2FuZ3VsYXJMb2FkJyk7XHJcbiAgICAgICAgICAgICAgaWYgKGFuZ3VsYXJMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5ndWxhckxvYWQubG9hZFNjcmlwdChzY3JpcHRVUkwpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb290U2NvcGUoKSB7XHJcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcclxuICAgICAgaWYgKGluamVjdG9yKSB7XHJcbiAgICAgICAgICBsZXQgcm9vdFNjb3BlICAgID0gaW5qZWN0b3IuZ2V0KCckcm9vdFNjb3BlJyk7XHJcbiAgICAgICAgICBpZiAocm9vdFNjb3BlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByb290U2NvcGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkge1xyXG4gICAgICBsZXQgcm9vdFNjb3BlID0gdGhpcy5yb290U2NvcGUoKTtcclxuICAgICAgaWYgKHJvb3RTY29wZSkge1xyXG4gICAgICAgIHJldHVybiByb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGp3dERhdGEoKSB7XHJcbiAgICAgIGxldCB1U01TID0gdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XHJcbiAgICAgIGlmICh1U01TKSB7XHJcbiAgICAgICAgbGV0IGp3dERhdGEgPSB1U01TLmp3dFV0aWxTZXJ2aWNlLmdldERlY29kZWRUb2tlbigpIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiBqd3REYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLiRsb2NhbEZvcmFnZS5nZXRJdGVtKCd1c2VyRGV0YWlscycpLnRoZW4odXNlckRldGFpbHMgPT4gcmVzb2x2ZSh1c2VyRGV0YWlscykpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckRldGFpbHNIVFRQKCkge1xyXG4gICAgICBsZXQgdmlld0NvZGUgPSB0aGlzLmp3dERhdGEoKS52aWV3SWQgfHwgd2luZG93LmFwcENvbmZpZ1sndmlkJ107XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUscmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldChgL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvdXNlcnNldHRpbmdzP3ZpZD0ke3ZpZXdDb2RlfWApLnRoZW4odXNlckRldGFpbHMgPT4gcmVzb2x2ZSh1c2VyRGV0YWlscy5kYXRhKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyRmluZXNIVFRQKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL215YWNjb3VudC9maW5lcycpLnRoZW4odXNlckZpbmVzID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckZpbmVzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmluZXMgPSBkYXRhLmRhdGEuZmluZXM7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmVzLmZpbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBmaW5lcycpO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckxvYW5zSFRUUCgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvbG9hbnMnKS50aGVuKHVzZXJMb2FucyA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJMb2Fucy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYW5zID0gZGF0YS5kYXRhLmxvYW5zO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2Fucy5sb2FuKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbG9hbnMnKTtcclxuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJsaW5rKGNvbXBvbmVudCwgbnVtYmVyT2ZCbGlua3MgPSA0KSB7XHJcbiAgICAgICAgbGV0IGludGVydmFsSWQgPSBudWxsO1xyXG4gICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArIDE7XHJcbiAgICAgICAgbGV0IGJvcmRlclNlbGVjdG9yID0gY29tcG9uZW50LmVsZW1lbnQuY3NzUGF0aCArIGluZGV4ICsgJ1JlY3QnO1xyXG5cclxuICAgICAgICBsZXQgY3JlYXRlQm9yZGVyRWxlbWVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRSZWN0ID0gY29tcG9uZW50LmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9yZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYm9yZGVyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnM3B4IHNvbGlkIHJlZCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUudG9wID0gZWxlbWVudFJlY3QudG9wICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gZWxlbWVudFJlY3QuaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUud2lkdGggPSBlbGVtZW50UmVjdC53aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9yZGVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYm9yZGVyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZW1vdmVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGJvcmRlckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBibGlua0JvcmRlckVsZW1lbnQgPSAobnVtYmVyT2ZCbGlua3MgPSA0KSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQmxpbmtzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQm9yZGVyRWxlbWVudCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKChudW1iZXJPZkJsaW5rcyAlIDIpID09IDApID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIG51bWJlck9mQmxpbmtzLS07XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKGJsaW5rQm9yZGVyRWxlbWVudCwgMTAwMCwgbnVtYmVyT2ZCbGlua3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib3JkZXJFbGVtZW50ID0gY3JlYXRlQm9yZGVyRWxlbWVudCgpO1xyXG4gICAgICAgIGJsaW5rQm9yZGVyRWxlbWVudChudW1iZXJPZkJsaW5rcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2V0cyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9mYWNldHMoY29tcG9uZW50cyk7XHJcbiAgICB9XHJcbiAgICBfZmFjZXRzKGNvbXBvbmVudHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLWZhY2V0LWFmdGVyJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3RybCA9IGNbMF0uY3RybDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5mYWNldFNlcnZpY2UucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IGZhY2V0cyB0aHJvdWdoIHRoZSByb290U2NvcGUnKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuc2VhcmNoU3RhdGVTZXJ2aWNlLnJlc3VsdE9iamVjdC5mYWNldHM7XHJcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gcmV0cmlldmUgZmFjZXRzJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZHMge1xyXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50cykge1xyXG4gICAgICByZXR1cm4gdGhpcy5faXRlbXMoY29tcG9uZW50cyk7XHJcbiAgICB9XHJcbiAgICBfaXRlbXMoY29tcG9uZW50cykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tc2VhcmNoLXJlc3VsdC1saXN0LWFmdGVyJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3RybCA9IGNbMF0uY3RybCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLml0ZW1saXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcInRyeSBhZ2FpblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBnZXQgcmVjb3JkcyB0aHJvdWdoIHRoZSByb290U2NvcGUnKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuc2VhcmNoU3RhdGVTZXJ2aWNlLnJlc3VsdE9iamVjdC5kYXRhO1xyXG4gICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGl0ZW1zJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XHJcbiAgY29uc3RydWN0b3IodXNlciA9IF9za2VsVXNlcikge1xyXG4gICAgbGV0IHVTbXMgPSBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xyXG4gICAgbGV0IGp3dERhdGEgPSBIZWxwZXIuand0RGF0YSgpO1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGp3dERhdGEudXNlciB8fCAnJyxcclxuICAgICAgICBlbWFpbDogdXNlci5kZXRhaWxzLmVtYWlsIHx8ICcnLFxyXG4gICAgICAgIG5hbWU6IGp3dERhdGEudXNlck5hbWUgfHwgJ0d1ZXN0JyxcclxuICAgICAgICBkaXNwbGF5X25hbWU6IHVTbXMuZ2V0VXNlck5hbWVGb3JEaXNwbGF5KCksXHJcbiAgICAgICAgaXNMb2dnZWRJbjogKCkgPT4gdVNtcy5nZXRVc2VyTmFtZSgpLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgaXNPbkNhbXB1czogKCkgPT4gand0RGF0YS5vbkNhbXB1cyA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICBmaW5lczogdXNlci5maW5lcyxcclxuICAgICAgICBsb2FuczogdXNlci5sb2Fuc1xyXG4gICAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9za2VsVXNlcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRldGFpbHM6IHt9LFxyXG4gICAgICBmaW5lczoge30sXHJcbiAgICAgIGxvYW5zOiB7fVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XHJcbiAgICAgIGxldCBqd3REYXRhID0gSGVscGVyLmp3dERhdGEoKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogand0RGF0YS52aWV3SWQgfHwgd2luZG93LmFwcENvbmZpZ1sndmlkJ10sXHJcbiAgICAgICAgaW5zdGl0dXRpb246IHtcclxuICAgICAgICAgICAgY29kZTogand0RGF0YS52aWV3SW5zdGl0dXRpb25Db2RlLFxyXG4gICAgICAgICAgICBuYW1lOiB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW5zdGl0dXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGludGVyZmFjZUxhbmd1YWdlOiB1U21zLmdldFVzZXJMYW5ndWFnZSgpIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnRlcmZhY2VMYW5ndWFnZSxcclxuICAgICAgICBpcDoge1xyXG4gICAgICAgICAgYWRkcmVzczogand0RGF0YS5pcFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIihmdW5jdGlvbigpIHtcclxuICB2YXIgQ3NzU2VsZWN0b3JHZW5lcmF0b3IsIHJvb3QsXHJcbiAgICBpbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XHJcblxyXG4gIENzc1NlbGVjdG9yR2VuZXJhdG9yID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmRlZmF1bHRfb3B0aW9ucyA9IHtcclxuICAgICAgc2VsZWN0b3JzOiBbJ2lkJywgJ2NsYXNzJywgJ3RhZycsICdudGhjaGlsZCddXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIENzc1NlbGVjdG9yR2VuZXJhdG9yKG9wdGlvbnMpIHtcclxuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcclxuICAgICAgdGhpcy5zZXRPcHRpb25zKHRoaXMuZGVmYXVsdF9vcHRpb25zKTtcclxuICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICB2YXIga2V5LCByZXN1bHRzLCB2YWw7XHJcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcclxuICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0cyA9IFtdO1xyXG4gICAgICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFsID0gb3B0aW9uc1trZXldO1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRfb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5vcHRpb25zW2tleV0gPSB2YWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5pc0VsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiAhISgoZWxlbWVudCAhPSBudWxsID8gZWxlbWVudC5ub2RlVHlwZSA6IHZvaWQgMCkgPT09IDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0UGFyZW50cyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGN1cnJlbnRfZWxlbWVudCwgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgaWYgKHRoaXMuaXNFbGVtZW50KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgY3VycmVudF9lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB3aGlsZSAodGhpcy5pc0VsZW1lbnQoY3VycmVudF9lbGVtZW50KSkge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudF9lbGVtZW50KTtcclxuICAgICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGN1cnJlbnRfZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0VGFnU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplSXRlbShlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5zYW5pdGl6ZUl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIHZhciBjaGFyYWN0ZXJzO1xyXG4gICAgICBjaGFyYWN0ZXJzID0gKGl0ZW0uc3BsaXQoJycpKS5tYXAoZnVuY3Rpb24oY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJzonKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyAoJzonLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpICsgXCIgXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvWyAhXCIjJCUmJygpKissLlxcLzs8PT4/QFxcW1xcXFxcXF1eYHt8fX5dLy50ZXN0KGNoYXJhY3RlcikpIHtcclxuICAgICAgICAgIHJldHVybiBcIlxcXFxcIiArIGNoYXJhY3RlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGVzY2FwZShjaGFyYWN0ZXIpLnJlcGxhY2UoL1xcJS9nLCAnXFxcXCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjaGFyYWN0ZXJzLmpvaW4oJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0SWRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGlkLCBzYW5pdGl6ZWRfaWQ7XHJcbiAgICAgIGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgIGlmICgoaWQgIT0gbnVsbCkgJiYgKGlkICE9PSAnJykgJiYgISgvXFxzLy5leGVjKGlkKSkgJiYgISgvXlxcZC8uZXhlYyhpZCkpKSB7XHJcbiAgICAgICAgc2FuaXRpemVkX2lkID0gXCIjXCIgKyAodGhpcy5zYW5pdGl6ZUl0ZW0oaWQpKTtcclxuICAgICAgICBpZiAoZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2FuaXRpemVkX2lkKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIHJldHVybiBzYW5pdGl6ZWRfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0Q2xhc3NTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBjbGFzc19zdHJpbmcsIGl0ZW0sIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgIGNsYXNzX3N0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICBpZiAoY2xhc3Nfc3RyaW5nICE9IG51bGwpIHtcclxuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xyXG4gICAgICAgIGNsYXNzX3N0cmluZyA9IGNsYXNzX3N0cmluZy5yZXBsYWNlKC9eXFxzfFxccyQvZywgJycpO1xyXG4gICAgICAgIGlmIChjbGFzc19zdHJpbmcgIT09ICcnKSB7XHJcbiAgICAgICAgICByZXN1bHQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBrLCBsZW4sIHJlZiwgcmVzdWx0cztcclxuICAgICAgICAgICAgcmVmID0gY2xhc3Nfc3RyaW5nLnNwbGl0KC9cXHMrLyk7XHJcbiAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgICAgICAgaXRlbSA9IHJlZltrXTtcclxuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goXCIuXCIgKyAodGhpcy5zYW5pdGl6ZUl0ZW0oaXRlbSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgICAgICAgIH0pLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBhdHRyaWJ1dGUsIGJsYWNrbGlzdCwgaywgbGVuLCByZWYsIHJlZjEsIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgIGJsYWNrbGlzdCA9IFsnaWQnLCAnY2xhc3MnXTtcclxuICAgICAgcmVmID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBhdHRyaWJ1dGUgPSByZWZba107XHJcbiAgICAgICAgaWYgKHJlZjEgPSBhdHRyaWJ1dGUubm9kZU5hbWUsIGluZGV4T2YuY2FsbChibGFja2xpc3QsIHJlZjEpIDwgMCkge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goXCJbXCIgKyBhdHRyaWJ1dGUubm9kZU5hbWUgKyBcIj1cIiArIGF0dHJpYnV0ZS5ub2RlVmFsdWUgKyBcIl1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXROdGhDaGlsZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgY291bnRlciwgaywgbGVuLCBwYXJlbnRfZWxlbWVudCwgc2libGluZywgc2libGluZ3M7XHJcbiAgICAgIHBhcmVudF9lbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICBpZiAocGFyZW50X2VsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHNpYmxpbmdzID0gcGFyZW50X2VsZW1lbnQuY2hpbGROb2RlcztcclxuICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSBzaWJsaW5ncy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgICAgc2libGluZyA9IHNpYmxpbmdzW2tdO1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNFbGVtZW50KHNpYmxpbmcpKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCI6bnRoLWNoaWxkKFwiICsgY291bnRlciArIFwiKVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcclxuICAgICAgdmFyIGlzX3VuaXF1ZSwgcmVzdWx0O1xyXG4gICAgICBpc191bmlxdWUgPSBmYWxzZTtcclxuICAgICAgaWYgKChzZWxlY3RvciAhPSBudWxsKSAmJiBzZWxlY3RvciAhPT0gJycpIHtcclxuICAgICAgICByZXN1bHQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEgJiYgcmVzdWx0WzBdID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICBpc191bmlxdWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXNfdW5pcXVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QWxsU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSB7XHJcbiAgICAgICAgdDogbnVsbCxcclxuICAgICAgICBpOiBudWxsLFxyXG4gICAgICAgIGM6IG51bGwsXHJcbiAgICAgICAgYTogbnVsbCxcclxuICAgICAgICBuOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ3RhZycpID49IDApIHtcclxuICAgICAgICByZXN1bHQudCA9IHRoaXMuZ2V0VGFnU2VsZWN0b3IoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnaWQnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LmkgPSB0aGlzLmdldElkU2VsZWN0b3IoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnY2xhc3MnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LmMgPSB0aGlzLmdldENsYXNzU2VsZWN0b3JzKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2F0dHJpYnV0ZScpID49IDApIHtcclxuICAgICAgICByZXN1bHQuYSA9IHRoaXMuZ2V0QXR0cmlidXRlU2VsZWN0b3JzKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ250aGNoaWxkJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5uID0gdGhpcy5nZXROdGhDaGlsZFNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0VW5pcXVlbmVzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICAgIHZhciBmb3VuZF9lbGVtZW50cywgcGFyZW50O1xyXG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgIGZvdW5kX2VsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICByZXR1cm4gZm91bmRfZWxlbWVudHMubGVuZ3RoID09PSAxICYmIGZvdW5kX2VsZW1lbnRzWzBdID09PSBlbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdENvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGl0ZW1zLCB0YWcpIHtcclxuICAgICAgdmFyIGl0ZW0sIGssIGwsIGxlbiwgbGVuMSwgcmVmLCByZWYxO1xyXG4gICAgICByZWYgPSB0aGlzLmdldENvbWJpbmF0aW9ucyhpdGVtcyk7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIGl0ZW0gPSByZWZba107XHJcbiAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGFnICE9IG51bGwpIHtcclxuICAgICAgICByZWYxID0gaXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgIHJldHVybiB0YWcgKyBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAobCA9IDAsIGxlbjEgPSByZWYxLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xyXG4gICAgICAgICAgaXRlbSA9IHJlZjFbbF07XHJcbiAgICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBpdGVtKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRVbmlxdWVTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGZvdW5kX3NlbGVjdG9yLCBrLCBsZW4sIHJlZiwgc2VsZWN0b3JfdHlwZSwgc2VsZWN0b3JzO1xyXG4gICAgICBzZWxlY3RvcnMgPSB0aGlzLmdldEFsbFNlbGVjdG9ycyhlbGVtZW50KTtcclxuICAgICAgcmVmID0gdGhpcy5vcHRpb25zLnNlbGVjdG9ycztcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgc2VsZWN0b3JfdHlwZSA9IHJlZltrXTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yX3R5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ2lkJzpcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy5pICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLmk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICd0YWcnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIHNlbGVjdG9ycy50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NsYXNzJzpcclxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYyAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYywgc2VsZWN0b3JzLnQpO1xyXG4gICAgICAgICAgICAgIGlmIChmb3VuZF9zZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZSc6XHJcbiAgICAgICAgICAgIGlmICgoc2VsZWN0b3JzLmEgIT0gbnVsbCkgJiYgc2VsZWN0b3JzLmEubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmEsIHNlbGVjdG9ycy50KTtcclxuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZF9zZWxlY3RvcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdudGhjaGlsZCc6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMubiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnKic7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGFsbF9zZWxlY3RvcnMsIGl0ZW0sIGssIGwsIGxlbiwgbGVuMSwgcGFyZW50cywgcmVzdWx0LCBzZWxlY3Rvciwgc2VsZWN0b3JzO1xyXG4gICAgICBhbGxfc2VsZWN0b3JzID0gW107XHJcbiAgICAgIHBhcmVudHMgPSB0aGlzLmdldFBhcmVudHMoZWxlbWVudCk7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHBhcmVudHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBpdGVtID0gcGFyZW50c1trXTtcclxuICAgICAgICBzZWxlY3RvciA9IHRoaXMuZ2V0VW5pcXVlU2VsZWN0b3IoaXRlbSk7XHJcbiAgICAgICAgaWYgKHNlbGVjdG9yICE9IG51bGwpIHtcclxuICAgICAgICAgIGFsbF9zZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdG9ycyA9IFtdO1xyXG4gICAgICBmb3IgKGwgPSAwLCBsZW4xID0gYWxsX3NlbGVjdG9ycy5sZW5ndGg7IGwgPCBsZW4xOyBsKyspIHtcclxuICAgICAgICBpdGVtID0gYWxsX3NlbGVjdG9yc1tsXTtcclxuICAgICAgICBzZWxlY3RvcnMudW5zaGlmdChpdGVtKTtcclxuICAgICAgICByZXN1bHQgPSBzZWxlY3RvcnMuam9pbignID4gJyk7XHJcbiAgICAgICAgaWYgKHRoaXMudGVzdFNlbGVjdG9yKGVsZW1lbnQsIHJlc3VsdCkpIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0Q29tYmluYXRpb25zID0gZnVuY3Rpb24oaXRlbXMpIHtcclxuICAgICAgdmFyIGksIGosIGssIGwsIHJlZiwgcmVmMSwgcmVzdWx0O1xyXG4gICAgICBpZiAoaXRlbXMgPT0gbnVsbCkge1xyXG4gICAgICAgIGl0ZW1zID0gW107XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0ID0gW1tdXTtcclxuICAgICAgZm9yIChpID0gayA9IDAsIHJlZiA9IGl0ZW1zLmxlbmd0aCAtIDE7IDAgPD0gcmVmID8gayA8PSByZWYgOiBrID49IHJlZjsgaSA9IDAgPD0gcmVmID8gKytrIDogLS1rKSB7XHJcbiAgICAgICAgZm9yIChqID0gbCA9IDAsIHJlZjEgPSByZXN1bHQubGVuZ3RoIC0gMTsgMCA8PSByZWYxID8gbCA8PSByZWYxIDogbCA+PSByZWYxOyBqID0gMCA8PSByZWYxID8gKytsIDogLS1sKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChyZXN1bHRbal0uY29uY2F0KGl0ZW1zW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdC5zaGlmdCgpO1xyXG4gICAgICByZXN1bHQgPSByZXN1bHQuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXN1bHQgPSByZXN1bHQubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5qb2luKCcnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBDc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsID8gZGVmaW5lLmFtZCA6IHZvaWQgMCkge1xyXG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIENzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJvb3QgPSB0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBleHBvcnRzICE9PSBudWxsID8gZXhwb3J0cyA6IHRoaXM7XHJcbiAgICByb290LkNzc1NlbGVjdG9yR2VuZXJhdG9yID0gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcbiAgfVxyXG5cclxufSkuY2FsbCh0aGlzKTtcclxuIiwiLypcclxuICBSZXBsYWNlIHRlbXBsYXRlcy5cclxuXHJcbiAgUmVwbGFjZSB0aGUgZGVmYXVsdCBwcmltbyB0ZW1wbGF0ZXMgaHR0cDovL2xvY2FsaG9zdDo4MDAzL3ByaW1vLWV4cGxvcmUvbGliL3RlbXBsYXRlcy5qc1xyXG4gIHdpdGggY3VzdG9tIHRlbXBsYXRlc1xyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxOFxyXG4gIFRvbSBWYW5tZWNoZWxlblxyXG4qL1xyXG5pbXBvcnQgJy4vdXRpbHMnXHJcblxyXG4vKiBpbXBvcnQgeW91ciB0ZW1wbGF0ZXMgKi9cclxuXHJcbmltcG9ydCBjaGFuZ2VMYW5nV2l0aG91dFVzZXJBcmVhSFRNTCBmcm9tICcuLi9odG1sL3RlbXBsYXRlcy9jaGFuZ2UtbGFuZy13aXRob3V0LXVzZXItYXJlYS5odG1sJ1xyXG5pbXBvcnQgcHJtTG9hbkJ1Z0ZpeEhUTUwgZnJvbSAnLi4vaHRtbC90ZW1wbGF0ZXMvcHJtLWxvYW4tYnVnLWZpeC5odG1sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVzIHtcclxuICAgIHN0YXRpYyBnZXQgYWxsKCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICBpZCA9IHRlbXBsYXRlSWQgaW4gdGhlIHRlbXBsYXRlQ2FjaGUgXHJcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHRoZSBpbXBvcnRlZCB0ZW1wYWx0ZVxyXG4gICAgICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxyXG4gICAgICAgICAgZW5hYmxlSW5WaWV3ID0gcmVnZXggdG8gZGVmaW5lIGluIHdoaWNoIHZpZXdzIHRoZSB0ZW1wbGF0ZSBoYXMgdG8gYmUgcmVwbGFjZWQuXHJcbiAgICBcclxuICAgICAgICAgIGV4LiB7aWQ6ICdjb21wb25lbnRzL3NlYXJjaC90b3BiYXIvdXNlckFyZWEvdXNlci1hcmVhLmh0bWwnLCB0ZW1wbGF0ZTogdXNlckFyZWFIVE1MLCBlbmFibGVkOiB0cnVlLCBlbmFibGVJblZpZXc6ICcuKid9XHJcbiAgICAgICAgICByZXN1bHRzIGluOlxyXG4gICAgICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL3RvcGJhci91c2VyQXJlYS91c2VyLWFyZWEuaHRtbCcsdXNlckFyZWFIVE1MKTtcclxuICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb21wb25lbnRzL3NlYXJjaC90b3BiYXIvdXNlckFyZWEvdXNlci1hcmVhLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGNoYW5nZUxhbmdXaXRob3V0VXNlckFyZWFIVE1MLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVuYWJsZUluVmlldzogJ1ZESUMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnY29tcG9uZW50cy9hY2NvdW50L2xvYW5zL2xvYW4uaHRtbCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcHJtTG9hbkJ1Z0ZpeEhUTUwsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLmZpbHRlcigodGVtcGxhdGUpID0+ICh0ZW1wbGF0ZS5lbmFibGVkICYmIG5ldyBSZWdFeHAodGVtcGxhdGUuZW5hYmxlSW5WaWV3KS50ZXN0KHdpbmRvdy5hcHBDb25maWcudmlkKSkpO1xyXG4gICAgfVxyXG59IiwiLypcclxuICBHZW5lcmFsIFxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5TdHJpbmcucHJvdG90eXBlLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLnNwbGl0KCctJykubWFwKChkLCBpLCBhKSA9PiBpID4gMCA/IGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkLnNsaWNlKDEpIDogZCkuam9pbignJyk7XHJcbn1cclxuXHJcbi8qXHJcbmFuZ3VsYXIuZWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdENsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gIHJldHVybiAoZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGlmIChlbGVtZW50WzBdLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjbG9zZXN0KGVsZW1lbnQucGFyZW50KCksIGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfSkodGhpcywgY2xhc3NOYW1lKTtcclxufTtcclxuXHJcbmFuZ3VsYXIuZWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdE5vZGUgPSBmdW5jdGlvbiAobm9kZU5hbWUpIHtcclxuICByZXR1cm4gKGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgbm9kZU5hbWUpIHtcclxuICAgIGlmIChlbGVtZW50WzBdLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnRbMF0ubm9kZU5hbWUgPT0gbm9kZU5hbWUudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjbG9zZXN0KGVsZW1lbnQucGFyZW50KCksIG5vZGVOYW1lKTtcclxuICAgIH1cclxuICB9KSh0aGlzLCBub2RlTmFtZSk7XHJcbn07XHJcbiovIl19
