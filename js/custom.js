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
var AltmetricsBadgeHTML = '\r\n<!--\r\n<div ng-if="$ctrl.doi" class="altmetric-embed" data-badge-type="medium-donut" data-badge-details="right" data-doi="{{$ctrl.doi}}"></div>\r\n-->\r\n<!-- Brief results altmetrics -->\r\n<div  id="full_altmetrics_{{$ctrl.recordid}}">\r\n    <div ng-if="$ctrl.doi" class="altmetric-embed" style="padding-top:0.5em"\r\n        data-badge-type=\'donut\' \r\n        data-badge-details=\'right\'\r\n\r\n        data-link-target="_blank" \r\n        data-doi="{{$ctrl.doi}}"\r\n\r\n\r\n          data-condensed=\'true\' \r\n\r\n\r\n        aria-label="Social Popularity Statistics (AltMetrics)">\r\n    </div>\r\n</div>\r\n';

var AltmetricsBadgeController = function () {
  function AltmetricsBadgeController($scope, $element, $compile, $rootScope, $window, $timeout, AltmetricsService) {
    _classCallCheck(this, AltmetricsBadgeController);

    var self = this;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$element = $element;
    this.$window = $window;
    this.$timeout = $timeout;
    this.$scope = $scope;
    //    this.AltmetricsService = AltmetricsService;
    var parentCtrl = this.parentCtrl.parentCtrl;
    var item = parentCtrl.item;
    self.recordid = item.pnx.control.recordid[0];
    self.doi = '';

    if (item && item.pnx && item.pnx.addata && item.pnx.addata.doi) {
      self.doi = self.parentCtrl.parentCtrl.item.pnx.addata.doi[0];
      AltmetricsService.addAltmetrics('#full_altmetrics_' + self.recordid).then(function (result) {
        if (result) {
          var altmetricsSection = {
            scrollId: "altmetrics",
            serviceName: "altmetrics",
            title: "brief.results.tabs.Altmetrics"
          };
          Promise.resolve(parentCtrl.fullViewService.getServices(parentCtrl.item, parentCtrl.originator)).then(function (services) {
            services.splice(services.length, 10, altmetricsSection);
          });
        }
      });
    }
  }

  _createClass(AltmetricsBadgeController, [{
    key: '$onInit',
    value: function $onInit() {
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

      var doi = this.doi;
      var self = this;
      if (doi !== '') {
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
        // console.log(elementCtrl);
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

    if (/^nui\.getit\./.test(serviceTitleCode)) {
      if (!/^nui\.getit\.tab1_onl_norestrict/.test(serviceTitleCode)) {

        /* captcha implementation (Already used in )
         https://github.com/VividCortex/angular-recaptcha
           */
        var recordData = self.currentRecord;
        var capchaPublicKey = window.appConfig["system-configuration"]["Public Captcha Key"];

        Primo.user.then(function (user) {
          self.user = user;
          Primo.view.then(function (view) {
            self.view = view;

            self.onCampus = self.user.isOnCampus();
            //self.onCampus = false;
            if (!/^nui\.getit\.tab1_onl_mayrestrict/.test(serviceTitleCode) || /^nui\.getit\.tab1_onl_mayrestrict/.test(serviceTitleCode) && !self.onCampus) {
              appendButtonTo.after($compile(requestACopyHTML)($scope));
            }

            //console.log ( recordData.pnx )

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
                //  console.log('Loading altmetrics: We kunnen starten');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXENvbmZpZ0xhbmd1YWdlU2VsZWN0aW9uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxkYXRhYmFzZUxpbmsuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGRpYWxvZy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGlzY2xhaW1lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwZXJpbWVudC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxccmVtb3ZlQWxlcnRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxzZWFyY2hUaXAuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHN0YXRpY0Zvb3Rlci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQnJpZWZSZXN1bHRBZnRlclxcYWx0bWV0cmljLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1CcmllZlJlc3VsdEFmdGVyXFxzb3VyY2VJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GYWNldEFmdGVyXFxzZWFyY2hBbHNvLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GYWNldEV4YWN0QWZ0ZXJcXHNlYXJjaEFsc29Cb2R5LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GaW5lc092ZXJ2aWV3QWZ0ZXJcXHBheU15RmluZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUZ1bGxWaWV3QWZ0ZXJcXGFsdG1ldHJpY3NCYWRnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxiZXRhU3dpdGNoLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGhvbWVJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGxhbmd1YWdlRGVwZW5kZW50TG9nby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxuZXdTZWFyY2hCdXR0b24uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcdmlld0xvZ28uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybU1haW5NZW51QWZ0ZXJcXGZlZWRiYWNrLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Qcm9tb3RlTG9naW5cXFByb21vdGVMb2dpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtUmVjb21tZW5kYXRpb25JdGVtQWZ0ZXJcXHJlY29tbWVuZGF0aW9uSXRlbS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtUmVxdWVzdHNBZnRlclxcaWxsUmVxdWVzdEZvcm0uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlYXJjaFJlc3VsdEF2YWlsYWJpbGl0eUxpbmVBZnRlckNvbnRyb2xsZXJcXGJyb3d6aW5lLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlclxccG54WG1sLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcG9ydEFQcm9ibGVtLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcXVlc3RBQ29weS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxhbm5vdW5jZW1lbnRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZlZWRiYWNrQW5ub3VuY2VtZW50LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZpbmVzTWVzc2FnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxhbHRtZXRyaWNzU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkYmFja1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcbWVzc2FnZVNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXG1haW4uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW8uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmVcXGNvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmVcXGhlbHBlci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZmFjZXRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFxyZWNvcmRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFx1c2VyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFx2aWV3LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHZlbmRvclxcY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcdGVtcGxhdGVzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFx1dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxakJDQUE7Ozs7Ozs7Ozs7O0FBV0E7O0FBb0NBOztBQXRDQTs7QUFHQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFHQTs7QUFDQTs7QUFFQTs7OztJQUVx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dGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcclxuICBEZWNsYXJlIHlvdXIgY29tcG9uZW50cyBoZXJlLlxyXG5cclxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XHJcbiAgaHR0cDovLzJhbGl0eS5jb20vMjAxNy8wMS9pbXBvcnQtb3BlcmF0b3IuaHRtbFxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5pbXBvcnQgJy4vdXRpbHMnXHJcblxyXG4vKiBpbXBvcnQgeW91ciBjb21wb25lbnQgY29uZmlndXJhdGlvbiovXHJcbmltcG9ydCB7ZXhwZXJpbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvZXhwZXJpbWVudCdcclxuXHJcbmltcG9ydCB7aG9tZUljb25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvaG9tZUljb24nXHJcblxyXG5pbXBvcnQge25ld1NlYXJjaEJ1dHRvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9uZXdTZWFyY2hCdXR0b24nXHJcbmltcG9ydCB7bGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL2xhbmd1YWdlRGVwZW5kZW50TG9nbydcclxuaW1wb3J0IHt2aWV3TG9nb0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci92aWV3TG9nbydcclxuXHJcblxyXG5pbXBvcnQge2JldGFTd2l0Y2hDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvYmV0YVN3aXRjaCdcclxuaW1wb3J0IHtzb3VyY2VJY29uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9zb3VyY2VJY29uJ1xyXG5pbXBvcnQge2FsdG1ldHJpY0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUJyaWVmUmVzdWx0QWZ0ZXIvYWx0bWV0cmljJ1xyXG5pbXBvcnQge2FsdG1ldHJpY3NCYWRnZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZ1bGxWaWV3QWZ0ZXIvYWx0bWV0cmljc0JhZGdlJ1xyXG5cclxuaW1wb3J0IHtwbnhYbWxDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlci9wbnhYbWwnXHJcbmltcG9ydCB7cGF5TXlGaW5lc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZpbmVzT3ZlcnZpZXdBZnRlci9wYXlNeUZpbmVzJ1xyXG5pbXBvcnQge2ZlZWRiYWNrQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTWFpbk1lbnVBZnRlci9mZWVkYmFjaydcclxuaW1wb3J0IHtzZWFyY2hUaXBDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3NlYXJjaFRpcCdcclxuaW1wb3J0IHtkaXNjbGFpbWVyQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9kaXNjbGFpbWVyJ1xyXG5cclxuaW1wb3J0IHtMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvQ29uZmlnTGFuZ3VhZ2VTZWxlY3Rpb24nXHJcblxyXG5pbXBvcnQge3JlcG9ydEFQcm9ibGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VydmljZUhlYWRlckFmdGVyL3JlcG9ydEFQcm9ibGVtJ1xyXG5pbXBvcnQge3JlcXVlc3RBQ29weUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlcnZpY2VIZWFkZXJBZnRlci9yZXF1ZXN0QUNvcHknXHJcblxyXG5pbXBvcnQge2ZpbmVzTWVzc2FnZUNvbmZpZyBhcyBwYXlNeUZpbmVzTWVzc2FnZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9maW5lc01lc3NhZ2UnXHJcbmltcG9ydCB7YW5ub3VuY2VtZW50c0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9hbm5vdW5jZW1lbnRzJ1xyXG5pbXBvcnQge3Byb21vdGVMb2dpbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVByb21vdGVMb2dpbi9Qcm9tb3RlTG9naW4nXHJcbmltcG9ydCB7ZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmVlZGJhY2tBbm5vdW5jZW1lbnQnXHJcbmltcG9ydCB7c3RhdGljRm9vdGVyQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9zdGF0aWNGb290ZXInXHJcbmltcG9ydCB7cmVtb3ZlQWxlcnRzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9yZW1vdmVBbGVydHMnXHJcbmltcG9ydCB7aWxsUmVxdWVzdEZvcm1Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1SZXF1ZXN0c0FmdGVyL2lsbFJlcXVlc3RGb3JtJ1xyXG5pbXBvcnQge3JlY29tbWVuZGF0aW9uSXRlbUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVJlY29tbWVuZGF0aW9uSXRlbUFmdGVyL3JlY29tbWVuZGF0aW9uSXRlbSdcclxuXHJcbmltcG9ydCB7ZGF0YWJhc2VMaW5rQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9kYXRhYmFzZUxpbmsnXHJcbi8vaW1wb3J0IHtyZW1vdmVPcGVuQWNjZXNzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9yZW1vdmVPcGVuQWNjZXNzJ1xyXG5cclxuaW1wb3J0IHtzZWFyY2hBbHNvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9zZWFyY2hBbHNvJ1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRFeGFjdEFmdGVyL3NlYXJjaEFsc29Cb2R5J1xyXG5cclxuaW1wb3J0IHticm93emluZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdEF2YWlsYWJpbGl0eUxpbmVBZnRlckNvbnRyb2xsZXIvYnJvd3ppbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlckNvbXBvbmVudHMge1xyXG5cclxuICBzdGF0aWMgZ2V0IGFsbCgpIHtcclxuICAgIC8qXHJcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcclxuICAgICAgY29uZmlnID0gdGhlIGltcG9ydGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcclxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxyXG5cclxuICAgICAgZXguIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9XHJcbiAgICAgIHJlc3VsdHMgaW46XHJcbiAgICAgICAgPHBybS1sb2dvLWFmdGVyIHBhcmVudEN0cmw9JyRjdHJsJz5cclxuICAgICAgICAgIDxob21lLWljb24gcGFyZW50Q3RybD0nJGN0cmwnPjwvaG9tZS1pY29uPlxyXG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge25hbWU6ICdsaWJpcy1leHBlcmltZW50JywgY29uZmlnOiBleHBlcmltZW50Q29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tbWVzc2FnZXMtYW5kLWJsb2Nrcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2hvbWUtaWNvbicsIGNvbmZpZzogaG9tZUljb25Db25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnJ30sXHJcbiAgICAgIHtuYW1lOiAnYmV0YS1zd2l0Y2gnLCBjb25maWc6IGJldGFTd2l0Y2hDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnbGFuZ3VhZ2UtZGVwZW5kZW50LWxvZ28nLCBjb25maWc6IGxhbmd1YWdlRGVwZW5kZW50TG9nb0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3ZpZXctbG9nbycsIGNvbmZpZzogdmlld0xvZ29Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG5cclxuICAgICAge25hbWU6ICdzb3VyY2UtaWNvbicsIGNvbmZpZzogc291cmNlSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUxpcmlhcyknfSxcclxuICAgICAge25hbWU6ICdhbHRtZXRyaWMnLCBjb25maWc6IGFsdG1ldHJpY0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhc3xeS1VMZXV2ZW58XlZESUN8XlVDTEx8XlRNT1JFQU18XlRNT1JFS3xeU0VSVnxeTkJCJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2FsdG1ldHJpY3MtYmFkZ2UnLCBjb25maWc6IGFsdG1ldHJpY3NCYWRnZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZnVsbC12aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhc3xeS1VMZXV2ZW58XlZESUN8XlVDTEx8XlRNT1JFQU18XlRNT1JFS3xeU0VSVnxeTkJCJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3BueC14bWwnLCBjb25maWc6IHBueFhtbENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzJywgY29uZmlnOiBwYXlNeUZpbmVzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1maW5lcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1tYWluLW1lbnUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG4gICAgICB7bmFtZTogJ2xhbmd1YWdlLXNlbGVjdGlvbicsIGNvbmZpZzogTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ25ldy1zZWFyY2gtYnV0dG9uJywgY29uZmlnOiBuZXdTZWFyY2hCdXR0b25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1uYXYtYmFyLWxpbmtzLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuXHJcbiAgICAgIHtuYW1lOiAncmVwb3J0LWEtcHJvYmxlbScsIGNvbmZpZzogcmVwb3J0QVByb2JsZW1Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXNlcnZpY2UtaGVhZGVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAvLyB7bmFtZTogJ3JlcXVlc3QtYS1jb3B5LWhlYWQnLCBjb25maWc6IHJlcXVlc3RBQ29weUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VydmljZS1oZWFkZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeTGlyaWFzJ30sIFxyXG4gICAgICB7bmFtZTogJ3JlcXVlc3QtYS1jb3B5JywgY29uZmlnOiByZXF1ZXN0QUNvcHlDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lci1hZnRlcicsIGVuYWJsZUluVmlldzogJ15MaXJpYXMnfSwgXHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIHtuYW1lOiAncHJtLXNlYXJjaHRpcHMnLCBjb25maWc6IHNlYXJjaFRpcENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGwsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncHJtLWRpc2NsYWltZXInLCBjb25maWc6IGRpc2NsYWltZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3N0YXRpYy1mb290ZXInLCBjb25maWc6IHN0YXRpY0Zvb3RlckNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZXhwbG9yZS1mb290ZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICAvL3tuYW1lOiAnc3RhdGljLWZvb3Rlci1hY2NvdW50JywgY29uZmlnOiBzdGF0aWNGb290ZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWFjY291bnQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3JlbW92ZS1hbGVydHMnLCBjb25maWc6IHJlbW92ZUFsZXJ0c0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYWRkLXF1ZXJ5LXRvLXNhdmVkLXNlYXJjaGVzLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdwcm0tZGJsaW5rJywgY29uZmlnOiBkYXRhYmFzZUxpbmtDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuXHJcbiAgICAgIC8qIGxicy1jb21wb25lbnRzIHVzZWQgaW4gaHRtbC10ZW1wbGF0ZXMgb2YgdGhlIHBhY2thZ2UgKi9cclxuICAgICAge25hbWU6ICdwcm9tb3RlLWxvZ2luLXN0YXRpYy1mb290ZXInLCBjb25maWc6IHByb21vdGVMb2dpbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdsYnMtcHJvbW90ZS1sb2dpbicsIGVuYWJsZUluVmlldzogICdeS1VMZXV2ZW4nfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnaWxsLXJlcXVlc3QtZm9ybS1vdmVydmlldycsIGNvbmZpZzogaWxsUmVxdWVzdEZvcm1Db25maWcsIGVuYWJsZWQ6ZmFsc2UsIGFwcGVuZFRvOiAncHJtLXJlcXVlc3RzLW92ZXJ2aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdpbGwtcmVxdWVzdC1mb3JtJywgY29uZmlnOiBpbGxSZXF1ZXN0Rm9ybUNvbmZpZywgZW5hYmxlZDp0cnVlLCBhcHBlbmRUbzogJ3BybS1yZXF1ZXN0cy1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbnxeVklWRVMnfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnYW5ub3VuY2VtZW50LWZlZWRiYWNrJywgY29uZmlnOiBmZWVkYmFja0Fubm91bmNlbWVudENvbmZpZywgZW5hYmxlZDpmYWxzZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG5cclxuICAgICAge25hbWU6ICdvdmVycmlkZS1nZXRsaW5rLXJlY29tbWVuZGF0aW9uJywgY29uZmlnOiByZWNvbW1lbmRhdGlvbkl0ZW1Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXJlY29tZW5kYXRpb24taXRlbS1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2Fubm91bmNlbWVudCcsIGNvbmZpZzogYW5ub3VuY2VtZW50c0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3BheS1teS1maW5lcy1tZXNzYWdlJywgY29uZmlnOiBwYXlNeUZpbmVzTWVzc2FnZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW4nfSxcclxuICAgICAvLyAge25hbWU6ICdyZW1vdmUtb3Blbi1hY2Nlc3MnLCBjb25maWc6IHJlbW92ZU9wZW5BY2Nlc3NDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAge25hbWU6ICdzZWFyY2gtYWxzbycsIGNvbmZpZzogc2VhcmNoQWxzb0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZmFjZXQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW4nfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1hbHNvLWJvZHknLCBjb25maWc6IHNlYXJjaEFsc29Cb2R5Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbid9LFxyXG4gICAge25hbWU6ICdicm93emluZScsIGNvbmZpZzogYnJvd3ppbmVDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXNlYXJjaC1yZXN1bHQtYXZhaWxhYmlsaXR5LWxpbmUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeRUNCJ31cclxuICAgIF0uZmlsdGVyKCAoY29tcG9uZW50KSA9PiAoIGNvbXBvbmVudC5lbmFibGVkICYmIG5ldyBSZWdFeHAoY29tcG9uZW50LmVuYWJsZUluVmlldykudGVzdCh3aW5kb3cuYXBwQ29uZmlnLnZpZCkgKSApO1xyXG4gIH1cclxufVxyXG4iLCJcclxuY2xhc3MgTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWdDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIG9ubHlzaG93X2ZyX0ZSX2luX3ZpZCA9IFsnQUNWJywgJ0JQQicsICdGQVJPJywgJ0ZPREZJTicsICdLQkMnLCAnUkJJTlMnLCAnUk1DQScsICdLTUtHJywgJ0xJQkFSJywgJ05CQicsICdPRk8nLCAnVkRJQyddO1xyXG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmltby1leHBsb3JlJykpO1xyXG4gICAgICAgIGlmICghIG9ubHlzaG93X2ZyX0ZSX2luX3ZpZC5pbmNsdWRlcyggd2luZG93LmFwcENvbmZpZy52aWQgICkgKSB7XHJcbiAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZCggXCI8c3R5bGU+cHJtLWxhbmd1YWdlLXNlbGVjdGlvbiBtZC1saXN0LWl0ZW1bdmFsdWU9J2ZyX0ZSJ117ZGlzcGxheTpub25lIWltcG9ydGFudDt9PC9zdHlsZT5cIiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkxhbmd1YWdlU2VsZWN0aW9uQ29uZmlnQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXVxyXG5cclxuZXhwb3J0IGxldCBMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWdDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG59XHJcbiIsImltcG9ydCBkYXRhYmFzZUxpbmtIVE1MIGZyb20gJy4vZGF0YWJhc2VMaW5rLmh0bWwnXHJcblxyXG5jbGFzcyBEYXRhYmFzZUxpbmtDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICRzY29wZS50aXRsZSA9ICdkYXRhYmFzZXMnO1xyXG4gICAgJHNjb3BlLnRpdGxlX2xhYmVsID0gJ3NlYXJjaCBkYXRhYmFzZXMnO1xyXG4gICAgJHNjb3BlLmRhdGFiYXNlTGluayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS1kYXRhYmFzZVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwpXHJcblxyXG4gICAgICAgIHZhciBkYXRhYmFzZUZhY2V0ID0ge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjpcInJ0eXBlXCIsXHJcbiAgICAgICAgICAgIFwidHlwZVwiOlwiaW5jbHVkZVwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6XCJkYXRhYmFzZXNcIixcclxuICAgICAgICAgICAgXCJkaXNwbGF5VmFsdWVcIjpcImRhdGFiYXNlc1wiLFxyXG4gICAgICAgICAgICBcImRpc3BsYXllZFR5cGVcIjpcImV4YWN0XCIsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjpcIkRhdGFiYW5rZW5cIixcclxuICAgICAgICAgICAgXCJpc011bHRpRmFjZXRcIjpmYWxzZSxcclxuICAgICAgICAgICAgXCJ0b29sdGlwXCI6XCJWZXJ3aWpkZXIgVHlwZSBicm9uIERhdGFiYW5rZW5cIixcclxuICAgICAgICAgICAgXCIkJGhhc2hLZXlcIjpcIm9iamVjdDoyODA4XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFN0YXRlU2VydmljZS5zZWFyY2hPYmplY3QgKVxyXG5cclxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4gICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tZWhtZXRjL3ByaW1vLWV4cGxvcmUtY29sbGVjdGlvbi12aWV3ZXIvYmxvYi9tYXN0ZXIvanMvbmctcHJpbW8uanNcclxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLnNldFNvcnRCeSgndGl0bGUnKTtcclxuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLmZhY2V0U2VydmljZS5hZGRTdGlja3lGYWNldChkYXRhYmFzZUZhY2V0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU3RhdGVTZXJ2aWNlLnNlYXJjaE9iamVjdCApXHJcbiAgICAgICAgJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU2VydmljZS5zZWFyY2goKTtcclxuLypcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwic3RpY2t5RmFjZXRzXCIsXHJcbiAgICAgICAnW3tcIm5hbWVcIjpcInJ0eXBlXCIsXCJ0eXBlXCI6XCJpbmNsdWRlXCIsXCJ2YWx1ZVwiOlwiZGF0YWJhc2VzXCIsXCJkaXNwbGF5VmFsdWVcIjpcImRhdGFiYXNlc1wiLFwiZGlzcGxheWVkVHlwZVwiOlwiZXhhY3RcIixcImxhYmVsXCI6XCJEYXRhYmFua2VuXCIsXCJpc011bHRpRmFjZXRcIjpmYWxzZSxcInRvb2x0aXBcIjpcIlZlcndpamRlciBUeXBlIGJyb24gRGF0YWJhbmtlblwiLFwiJCRoYXNoS2V5XCI6XCJvYmplY3Q6MjgwOFwiLFwicGVyc2lzdGVudFwiOnRydWUsXCJvcGVyYXRpb25cIjpcImFkZFwifV0nKTtcclxuICAgICAgICovXHJcbiAgICAgLy8gICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDMvcHJpbW8tZXhwbG9yZS9zZWFyY2g/cXVlcnk9YW55LGNvbnRhaW5zLGRhdGFiYXNlcyZ0YWI9YWxsX2NvbnRlbnRfdGFiJnNlYXJjaF9zY29wZT1BTExfQ09OVEVOVCZcIlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuRGF0YWJhc2VMaW5rQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJ11cclxuXHJcbmV4cG9ydCBsZXQgZGF0YWJhc2VMaW5rQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IERhdGFiYXNlTGlua0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGRhdGFiYXNlTGlua0hUTUxcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwLCAkdHJhbnNsYXRlLCBmZWVkYmFja1NlcnZpY2VVUkwsIE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5tZERpYWxvZyA9ICRtZERpYWxvZztcclxuICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgdGhpcy5odHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCA9IGZlZWRiYWNrU2VydmljZVVSTDtcclxuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuXHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgJHNjb3BlLmNhbmNlbEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLm1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5zZW5kRmVlZGJhY2sgPSB0aGlzLnNlbmRGZWVkYmFjaztcclxuICAgICRzY29wZS5zZW5kRmVlZGJhY2sgPSAoYW5zd2VyKSA9PiB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHN1YmplY3Q6ICRzY29wZS5mZWVkYmFjay5zdWJqZWN0LFxyXG4gICAgICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcclxuICAgICAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXHJcbiAgICAgICAgICAgIGxvZ2dlZEluOiBzZWxmLnVzZXIuaXNMb2dnZWRJbigpLFxyXG4gICAgICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgdHlwZTogJ2ZlZWRiYWNrJyxcclxuICAgICAgICAgICAgZmVlZGJhY2s6ICRzY29wZS5mZWVkYmFjay5tZXNzYWdlLFxyXG4gICAgICAgICAgICBlbWFpbDogJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8ubGVuZ3RoID4gMCAmJiAkc2NvcGUuZmVlZGJhY2subWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNlbGYubWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5odHRwKHtcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICB1cmw6IHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnKTtcclxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJztcclxuICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJyk7XHJcbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLmZhaWwnKSB8fCAnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nO1xyXG4gICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgICRzY29wZS5mZWVkYmFjayA9IHtcclxuICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgc3ViamVjdDogJ2ZlZWRiYWNrJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5EaWFsb2dDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJGh0dHAnLCAnJHRyYW5zbGF0ZScsICdmZWVkYmFja1NlcnZpY2VVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuIiwiaW1wb3J0IGRpc2NsYWltZXJEaWFsb2dIVE1MIGZyb20gJy4uLy4uLy4uL2h0bWwvdGVtcGxhdGVzL2Rpc2NsYWltZXJEaWFsb2cuaHRtbCdcclxuaW1wb3J0IGNvb2tpZVBvbGljeURpYWxvZ0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9lbl9VUy5odG1sJ1xyXG5pbXBvcnQgZGlzY2xhaW1lckRpYWxvZ19mckZSX0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9lbl9VUy5odG1sJ1xyXG5pbXBvcnQgZGlzY2xhaW1lckRpYWxvZ19ubEJFX0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9ubF9CRS5odG1sJ1xyXG5pbXBvcnQgZGlzY2xhaW1lckRpYWxvZ19lblVTX0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9lbl9VUy5odG1sJ1xyXG5cclxuaW1wb3J0IGRpc2NsYWltZXJMaW5rSFRNTCBmcm9tICdkaXNjbGFpbWVyLmh0bWwnXHJcblxyXG5jbGFzcyBkaXNjbGFpbWVyQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJG1kRGlhbG9nKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuXHJcbiAgICAgIGxldCBsb2NhbGVfdGV4dCA9IHtcclxuICAgICAgICAnbmxfQkUnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQ29va2llYmVsZWlkJyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQ29va2llYmVsZWlkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgICdlbl9VUyc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdDb29raWUgUG9saWN5JyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQ29va2llIFBvbGljeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZnJfRlInOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQ29va2llIFBvbGljeScsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIkNvb2tpZSBQb2xpY3lcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuXHJcbi8qIFRvZG8gUmVmYWN0b3J5IGRpc2NsYWltZXJEaWFsb2cgLyBjb29raWVQb2xpY3kgPz8/ICovXHJcbi8vICAgIGxldCBkaXNjbGFpbWVyRGlhbG9nID0gZGlzY2xhaW1lckRpYWxvZ0hUTUw7IFxyXG4gICAgICBsZXQgZGlzY2xhaW1lckRpYWxvZyA9IGNvb2tpZVBvbGljeURpYWxvZ0hUTUw7XHJcbiAgICAgIHN3aXRjaCAobG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZnJfRlInOlxyXG4gICAgICAgIGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nX2ZyRlJfSFRNTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25sX0JFJzpcclxuICAgICAgICBkaXNjbGFpbWVyRGlhbG9nID0gZGlzY2xhaW1lckRpYWxvZ19ubEJFX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nX2VuVVNfSFRNTDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJHNjb3BlLnRpdGxlID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGUnXTtcclxuICAgICAgJHNjb3BlLnRpdGxlX2xhYmVsID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGVfbGFiZWwnXTtcclxuXHJcbiAgICAgICRzY29wZS5zaG93RGlzY2xhaW1lckRpYWxvZyA9IGZ1bmN0aW9uKCRldmVudCkge1xyXG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudEVsLFxyXG4gICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgIHRlbXBsYXRlOiBkaXNjbGFpbWVyRGlhbG9nLFxyXG4gICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAkc2NvcGUuaXRlbXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIERpYWxvZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2csIGl0ZW1zKSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5kaXNjbGFpbWVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJ11cclxuXHJcbmV4cG9ydCBsZXQgZGlzY2xhaW1lckNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBkaXNjbGFpbWVyQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogZGlzY2xhaW1lckxpbmtIVE1MXHJcbn0iLCIvKiBjb21wb25lbnQgdG8gZG8gYWxsIHlvdXIgZXhwZXJpbWVudGFsIHN0dWZmICovXHJcbi8qIFtlbnxkaXNdYWJsZSBpbiBjb21wb25lbnRzKi9cclxuXHJcbmNsYXNzIEV4cGVyaW1lbnRDb250cm9sbGVyIHtcclxuIFxyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsJHRlbXBsYXRlQ2FjaGUsICRjb21waWxlLCRpbmplY3Rvciwkcm9vdFNjb3BlLCR0cmFuc2xhdGUsICR3aW5kb3cpIHtcclxuICAgIGNvbnNvbGUubG9nKCdFeHBlcmltZW50OicpO1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgdGhpcy4kdGVtcGxhdGVDYWNoZSA9ICR0ZW1wbGF0ZUNhY2hlO1xyXG4gICAgdGhpcy4kY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgdGhpcy53aW5kb3cgPSAkd2luZG93O1xyXG4gICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJyc7IFxyXG5cclxuICAgIGNvbnNvbGUubG9nKHNlbGYpXHJcbiAgICBjb25zb2xlLmxvZygncm9vdFNjb3BlOicpXHJcbiAgICBjb25zb2xlLmxvZygkcm9vdFNjb3BlKVxyXG4gICAgY29uc29sZS5sb2coJ3RlbXBsYXRlQ2FjaGUnKVxyXG4gICAgY29uc29sZS5sb2coJHRlbXBsYXRlQ2FjaGUpICAgXHJcbiAgICB2YXIgdGVtcGxhdGUgPSAkdGVtcGxhdGVDYWNoZS5nZXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnKTtcclxuICAgIC8vIHZhciB0ZW1wbGF0ZSA9IHRlbXBsYXRlICsgXCI8SDEgaWQ9J29tdGVsYWNodGVuJz5MQUxBTEE8aWxsLXJlcXVlc3QtZm9ybS1vdmVydmlldz48L2lsbC1yZXF1ZXN0LWZvcm0tb3ZlcnZpZXc+PC9IMT5cIjtcclxuICAgIHZhciB0ZW1wbGF0ZSA9IHRlbXBsYXRlICsgXCI8SDEgaWQ9J29tdGVsYWNodGVuJz5MQUxBTEE8L0gxPlwiO1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL2FjY291bnQvb3ZlcnZpZXcvcmVxdWVzdHNPdmVydmlldy9yZXF1ZXN0cy1vdmVydmlldy5odG1sJywgdGVtcGxhdGUpO1xyXG4gICAgY29uc29sZS5sb2coJHRlbXBsYXRlQ2FjaGUuZ2V0KCdjb21wb25lbnRzL2FjY291bnQvb3ZlcnZpZXcvcmVxdWVzdHNPdmVydmlldy9yZXF1ZXN0cy1vdmVydmlldy5odG1sJykpXHJcbn07XHJcblxyXG4gIHRvSWxsUmVxdWVzdFVybCgpIHtcclxuICAgICAgdmFyIGluc3RpdHV0aW9uQ29kZSA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnJlcXVlc3RzU2VydmljZS5hY2NvdW50U2VydmljZS5saW5rZWRVc2VyU2VsZWN0b3JTZXJ2aWNlLnNlbGVjdGVkSW5zdGl0dXRpb24uaW5zdGl0dXRpb25Db2RlO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdpbnN0aXR1dGlvbkNvZGU6JyArIGluc3RpdHV0aW9uQ29kZSlcclxuICAgICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJ2h0dHBzOi8vbGV1dmVuLXByaW1vLmhvc3RlZC5leGxpYnJpc2dyb3VwLmNvbS9wZHM/ZnVuYz1zc28mdXJsPWh0dHA6Ly9ldS5hbG1hLmV4bGlicmlzZ3JvdXAuY29tL3ZpZXcvdXJlc29sdmVyLycrIGluc3RpdHV0aW9uQ29kZSArJy9vcGVudXJsP3N2Y19kYXQ9Z2V0aXQmc3ZjLnByb2ZpbGU9Z2V0aXQmZGlyZWN0UmVzb3VyY2VTaGFyaW5nUmVxdWVzdD10cnVlJm5ld1VJPXRydWUnXHJcbiAgICAgIHRoaXMud2luZG93Lm9wZW4odGhpcy5pbGxSZXF1ZXN0VXJsLCAnX2ZyZWVJbGwnKTtcclxuICB9O1xyXG4gICAgXHJcbiAgJG9uSW5pdCgpIHsgIFxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyAoJ25ld0VsZW1lbnQ6JylcclxuICAvLyAgY29uc29sZS5sb2cgKGFuZ3VsYXIuZWxlbWVudCggJyNvbXRlbGFjaHRlbicpLmxlbmd0aClcclxuICAgLy8gaWYgKCBhbmd1bGFyLmVsZW1lbnQoICdIMScpLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICBjb25zb2xlLmxvZyAoJ1xcJ3QgSXMgbmkgb20gdGUgbGFjaHRlbicpXHJcbiAgICAgICB2YXIgZWxlbWVudE5hbWUgPSAncHJtLXJlcXVlc3RzLW92ZXJ2aWV3J1xyXG4gICAgICAgLy9sZXQgZWxlbWVudCA9ICRlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50TmFtZSkpO1xyXG4gICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgbGV0IGVsZW1lbnRTY29wZSA9IGVsZW1lbnQuc2NvcGUoKTtcclxuICAgICAgICAgY29uc29sZS5sb2cgKGVsZW1lbnRTY29wZSlcclxuICAgICAgICAgdGhpcy4kY29tcGlsZShlbGVtZW50KShlbGVtZW50U2NvcGUpO1xyXG4gICAgICAgICAvL2VsZW1lbnRTY29wZS4kYXBwbHkoKVxyXG4gICAgICAgfSAgICAgXHJcbiAgLy8gICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkV4cGVyaW1lbnRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICAnJHRlbXBsYXRlQ2FjaGUnLCAnJGNvbXBpbGUnLCckaW5qZWN0b3InLCckcm9vdFNjb3BlJywnJHRyYW5zbGF0ZScsICckd2luZG93J11cclxuXHJcbmV4cG9ydCBsZXQgZXhwZXJpbWVudENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBFeHBlcmltZW50Q29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJcclxuY2xhc3MgUmVtb3ZlQWxlcnRzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAgJHRyYW5zbGF0ZSwgJGVsZW1lbnQsICR0ZW1wbGF0ZUNhY2hlKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIGxvY2FsZSA9IFwiZW5fVVNcIlxyXG4gICAgICAgIGxvY2FsZSA9IHNjb3BlLiRyb290LiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC9zYXZlZFF1ZXJpZXMvYWRkQWxlcnRUb2FzdC9hZGQtYWxlcnQtdG9hc3QuaHRtbCcsYFxyXG4gICAgICAgIDxtZC10b2FzdCBuZy1jbGFzcz1cIntcXCdtb2JpbGUtZGVmaW5lXFwnOiRjdHJsLmRldGVjdE1vYmlsZSgpLFxcJ2xheW91dC1jb2x1bW5cXCc6JGN0cmwuZGV0ZWN0TW9iaWxlKCl9XCIgY2xhc3M9XCJtZC10b2FzdC1jb250ZW50XCI+XHJcbiAgICA8ZGl2IGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm1kLXRvYXN0LWNvbnRlbnRcIiBuZy1jbGFzcz1cIntcXCdlbmQtY29udGVudFxcJzohJGN0cmwuZGV0ZWN0TW9iaWxlKCl9XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZC10b2FzdC10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIG5nLWlmPVwiISRjdHJsLmFkZE1vZGVcIiB0cmFuc2xhdGU9XCJudWkuZmF2b3JpdGVzLnNlYXJjaC5hbGVydC5tZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBuZy1pZj1cIiRjdHJsLmFkZE1vZGVcIiB0cmFuc2xhdGU9XCJudWkuc2F2ZXNlYXJjaC5tZXNzYWdlLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Ryb25nIG5nLWlmPVwiISRjdHJsLmFkZE1vZGVcIj57eyRjdHJsLmVtYWlsfX08L3N0cm9uZz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIiBjbGFzcz1cIm1kLXRvYXN0LWNvbnRlbnRcIiBuZy1jbGFzcz1cIntcXCdzdGFydC1jb250ZW50XFwnOiEkY3RybC5kZXRlY3RNb2JpbGUoKX1cIj5cclxuICAgICAgICA8bWQtYnV0dG9uIG5nLWNsaWNrPVwiJGN0cmwub25EaXNtaXNzKClcIiBhcmlhLWxhYmVsPVwie3s6OihcXCdudWkubWVzc2FnZS5kaXNtaXNzXFwnIHwgdHJhbnNsYXRlKX19IFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5nLXNjb3BlXCIgdHJhbnNsYXRlPVwibnVpLm1lc3NhZ2UuZGlzbWlzc1wiPjwvc3Bhbj5cclxuICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L21kLXRvYXN0PlxyXG48cHJtLWFkZC1hbGVydC10b2FzdC1hZnRlciBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC9wcm0tYWRkLWFsZXJ0LXRvYXN0LWFmdGVyPlxyXG4gICAgICAgIGApO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZW1vdmVBbGVydHNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckdHJhbnNsYXRlJywgJyRlbGVtZW50JywgJyR0ZW1wbGF0ZUNhY2hlJyBdXHJcblxyXG5leHBvcnQgbGV0IHJlbW92ZUFsZXJ0c0NvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogUmVtb3ZlQWxlcnRzQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnPHN0eWxlPm1kLXRlbXBsYXRlIHBybS1hZGQtYWxlcnQtdG9hc3QgbWQtdG9hc3QgKlthcmlhLWxhYmVsPVwie3tcXCdudWkuYXJpYS5zYXZlZFF1ZXJpZXNMaXN0LmFsZXJ0XFwnIHwgdHJhbnNsYXRlfX1cIl0geyAgZGlzcGxheTogbm9uZTsgfTwvc3R5bGU+J1xyXG59XHJcbiIsImltcG9ydCBzZWFyY2hUaXBIVE1MIGZyb20gJy4vc2VhcmNoVGlwLmh0bWwnXHJcbmltcG9ydCB0aXBfZW5VU19IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2VuVVMuaHRtbCdcclxuaW1wb3J0IHRpcF9mckZSX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvZnJGUi5odG1sJ1xyXG5pbXBvcnQgdGlwX25sQkVfSFRNTCBmcm9tICcuL3NlYXJjaFRpcC9ubEJFLmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hUaXBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG5cclxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICdubF9CRSc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdab2VrdGlwcycsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIlpvZWt0aXBzIHdlZXJnZXZlblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZW5fVVMnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnU2VhcmNoIFRpcHMnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJTZWFyY2ggVGlwc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZnJfRlInOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQXN0dWNlcz8nLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJBc3R1Y2VzP1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHRpcHNIVE1MID0gdGlwX2VuVVNfSFRNTDtcclxuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdmcl9GUic6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9mckZSX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdubF9CRSc6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9ubEJFX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfZW5VU19IVE1MO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2NvcGUudGl0bGUgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZSddO1xyXG4gICAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZV9sYWJlbCddO1xyXG5cclxuICAgICAgJHNjb3BlLnNob3dTZWFyY2hUaXBzID0gZnVuY3Rpb24oJGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IHRpcHNIVE1MLFxyXG4gICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAkc2NvcGUuaXRlbXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIERpYWxvZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2csIGl0ZW1zKSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hUaXBDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hUaXBDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoVGlwQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoVGlwSFRNTFxyXG59XHJcbiIsIlxyXG5jbGFzcyBTdGF0aWNGb290ZXJDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZywgJGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSBcImVuX1VTXCJcclxuXHJcbiAgICAgICAgdmFyIHZpZXdXaXRoQ3VzdG9tRm9vdGVyID0gWydMaXJpYXMnLCd3ZXJlbGR3aWp6ZXInLCdFQ0InXVxyXG4vKlxyXG4gICAgICAgIGNvbnNvbGUubG9nIChzZWxmIClcclxuICAgICAgICBjb25zb2xlLmxvZyAoc2NvcGUgKVxyXG4gICAgICAgIGNvbnNvbGUubG9nIChzY29wZS4kcm9vdC4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlIClcclxuKi9cclxuICAgICAgICBsb2NhbGUgPSBzY29wZS4kcm9vdC4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgdmlkID0gd2luZG93LmFwcENvbmZpZ1sndmlkJ107XHJcbiAgICAgICAvLyAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoc3RhdGljRm9vdGVyVGVtcGxhdGVOYW1lLCAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIGxvY2FsZSArICcuaHRtbCcpO1xyXG4qL1xyXG4gICAgICAgIHZhciB2aWQgPSB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcclxuICAgICAgICB2YXIgdGVtcGxhdGVVcmwgPSAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIGxvY2FsZSArICcuaHRtbCc7XHJcbiAgICAgICAgaWYgKCB2aWV3V2l0aEN1c3RvbUZvb3Rlci5pbmNsdWRlcyh2aWQpICkgIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmwgPSAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIHZpZCArICdfJyArIGxvY2FsZSArICcuaHRtbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkc2NvcGUuZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZVVybDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblN0YXRpY0Zvb3RlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyRtZERpYWxvZycsICckZWxlbWVudCddXHJcblxyXG5leHBvcnQgbGV0IHN0YXRpY0Zvb3RlckNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogU3RhdGljRm9vdGVyQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnPG5nLWluY2x1ZGUgc3JjPVwiZ2V0VGVtcGxhdGVVcmwoKVwiLz4nLFxyXG59XHJcbiIsImltcG9ydCBhbHRtZXRyaWNIVE1MIGZyb20gJy4vYWx0bWV0cmljLmh0bWwnXHJcblxyXG5jbGFzcyBBbHRNZXRyaWNDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJHdpbmRvdywgJHRpbWVvdXQsIEFsdG1ldHJpY3NTZXJ2aWNlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgaXRlbSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW07XHJcbiAgICAvKlxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcclxuICAgICovXHJcbiAgICBzZWxmLmRvaSA9ICcnO1xyXG4gICAgc2VsZi5yZWNvcmRpZCA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICBpZiAoaXRlbSAmJiBpdGVtLnBueCAmJiBpdGVtLnBueC5hZGRhdGEgJiYgaXRlbS5wbnguYWRkYXRhLmRvaSkge1xyXG4gICAgICBzZWxmLmRvaSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmFkZGF0YS5kb2lbMF07XHJcblxyXG4gICAgICB0aGlzLnJlY29yZGlkID0gc2VsZi5yZWNvcmRpZDtcclxuICAgICAgQWx0bWV0cmljc1NlcnZpY2UuYWRkQWx0bWV0cmljcygnI2FsdG1ldHJpY3NfJyArIHNlbGYucmVjb3JkaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYWx0bWV0cmljQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7IHBhcmVudEN0cmw6ICc8JyB9LFxyXG4gIGNvbnRyb2xsZXI6IEFsdE1ldHJpY0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGFsdG1ldHJpY0hUTUxcclxufVxyXG4iLCJpbXBvcnQgc291cmNlSWNvbkhUTUwgZnJvbSAnLi9zb3VyY2VJY29uLmh0bWwnXHJcblxyXG5jbGFzcyBTb3VyY2VJY29uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBwYXJlbnRDdHJsID0gJHNjb3BlLiRwYXJlbnQuJGN0cmwucGFyZW50Q3RybDtcclxuICAgIHZhciBpY29uQ29uZiA9IFt7XHJcbiAgICAgICdzb3VyY2VpZCc6ICdsaXJpYXMnLFxyXG4gICAgICAnaWNvblVybCc6ICcvL2xpbW8ubGliaXMuYmUvcHJpbW9fbGlicmFyeS9saWJ3ZWIvbGliaXMvaW1hZ2VzL2xpcmlhcy5qcGcnLFxyXG4gICAgICAnaWNvblRleHQnOiAnTGlyaWFzJ1xyXG4gICAgfV07XHJcblxyXG4gICAgdmFyIGljb25Db25mU291cmNlcyA9IGljb25Db25mLm1hcChvYmogPT4gb2JqLnNvdXJjZWlkKTtcclxuXHJcbiAgICBzZWxmLnNvdXJjZWlkID0gbnVsbDtcclxuICAgIGlmICgnc291cmNlaWQnIGluIHBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbCkge1xyXG4gICAgICBzZWxmLnNvdXJjZWlkID0gcGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnNvdXJjZWlkWzBdLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICBpZiAoaWNvbkNvbmZTb3VyY2VzLmluY2x1ZGVzKHNlbGYuc291cmNlaWQpKSB7XHJcbiAgICAgICAgc2VsZi5pY29uID0gaWNvbkNvbmYuZmluZChmdW5jdGlvbih4KSB7XHJcbiAgICAgICAgICByZXR1cm4geC5zb3VyY2VpZCA9PT0gc2VsZi5zb3VyY2VpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2RpdicpLmFwcGVuZCgkY29tcGlsZShzb3VyY2VJY29uSFRNTCkoJHNjb3BlKSk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuU291cmNlSWNvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJ107XHJcblxyXG5leHBvcnQgbGV0IHNvdXJjZUljb25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogU291cmNlSWNvbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiLy9mYWNldHMuZmFjZXQuZmFjZXRfc2VhcmNoX2Fsc28gaW4gXCJmYWNldCBsYWJlbHNcIlxyXG5jbGFzcyBTZWFyY2hBbHNvQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKXtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHM7XHJcbiAgICB9LCAobixvKSA9PiB7XHJcbiAgICAgIGlmIChuICE9IG8pIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMuZmlsdGVyKGYgPT4ge3JldHVybiBmLm5hbWUgPT0gJ3NlYXJjaF9hbHNvJ30pLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9hbHNvJyxcclxuICAgICAgICAgICAgZGlzcGxheWVkVHlwZTogJ2V4YWN0JyxcclxuICAgICAgICAgICAgbGltaXRDb3VudDogMCxcclxuICAgICAgICAgICAgZmFjZXRHcm91cENvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlczogdW5kZWZpbmVkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOntwYXJlbnRDdHJsOic8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0NvbnRyb2xsZXJcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQWxzb0JvZHlIVE1MIGZyb20gJy4vc2VhcmNoQWxzb0JvZHkuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaEFsc29Cb2R5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcclxuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XHJcbiAgfVxyXG5cclxuICBfdGFyZ2V0cygpIHtcclxuICAgIHJldHVybiBbe1xyXG4gICAgICBcIm5hbWVcIjogXCJVbmlDYXRcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3VuaWNhdC5iZS91bmlDYXQ/ZnVuYz1zZWFyY2gmdWlMYW5ndWFnZT1lbiZxdWVyeT1cIixcclxuICAgICAgXCJpbWdcIjogXCIvcHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2ltZy91bmljYXRfaWNvbi5wbmdcIixcclxuICAgICAgXCJ0b29sdGlwXCI6IFwibGJzLm51aS5zZWFyY2hfYWxzby50b29sdGlwLnVuaWNhdFwiLFxyXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xyXG4gICAgICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XHJcbiAgICAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIFwibmFtZVwiOiBcIkdvb2dsZSBTY2hvbGFyXCIsXHJcbiAgICAvLyAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zY2hvbGFyLmdvb2dsZS5jb20vc2Nob2xhcj9xPVwiLFxyXG4gICAgLy8gICBcImltZ1wiOiBcIi9wcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaW1nL2dvb2dsZV9pY29uLnBuZ1wiLFxyXG4gICAgLy8gICBcInRvb2x0aXBcIjogXCJsYnMubnVpLnNlYXJjaF9hbHNvLnRvb2x0aXAuZ29vZ2xlX3Njb2xhclwiLFxyXG4gICAgLy8gICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xyXG4gICAgLy8gICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIldvcmxkY2F0XCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cud29ybGRjYXQub3JnL3NlYXJjaD9xPVwiLFxyXG4gICAgICBcImltZ1wiOiBcIi9wcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaW1nL3dvcmxkY2F0X2ljb24ucG5nXCIsXHJcbiAgICAgIFwidG9vbHRpcFwiOiBcImxicy5udWkuc2VhcmNoX2Fsc28udG9vbHRpcC53b3JsZGNhdFwiLFxyXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xyXG4gICAgICAgIHZhciB0eXBlX21hcHBpbmdzID0ge1xyXG4gICAgICAgICAgXCJhbnlcIjogXCJrd1wiLFxyXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcInRpXCIsXHJcbiAgICAgICAgICBcImNyZWF0b3JcIjogXCJhdVwiLFxyXG4gICAgICAgICAgXCJzdWJqZWN0XCI6IFwic3VcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICB2YXIgdHlwZSA9IHR5cGVfbWFwcGluZ3NbdGVybXNbMF1dIHx8IFwia3dcIjtcclxuICAgICAgICB2YXIgcXVlcnkgPSB0ZXJtc1syXSB8fCBcIlwiO1xyXG4gICAgICAgIHJldHVybiB0eXBlICsgJzonICsgcXVlcnk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XTtcclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Cb2R5Q29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0JvZHlDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Cb2R5Q29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoQWxzb0JvZHlIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHBheU15RmluZXNIVE1MIGZyb20gJy4vcGF5TXlGaW5lcy5odG1sJ1xyXG5cclxuY2xhc3MgUGF5TXlGaW5lc0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5zaG93UGF5TXlGaW5lcyA9IGZhbHNlOyAgXHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBpZiAoL15LVUxldXZlbi8udGVzdCh2aWV3LmNvZGUpKSB7XHJcbiAgICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQYXlNeUZpbmVzID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBwYXlNeUZpbmVzQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOntcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUGF5TXlGaW5lc0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHBheU15RmluZXNIVE1MXHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoZSBhbHRtZXRyaWNzIGNvbXBvbmVudCBjb250cm9sbGVyLiAoaHR0cHM6Ly9naXRodWIuY29tL0RldC1Lb25nZWxpZ2UtQmlibGlvdGVrL3ByaW1vLWV4cGxvcmUtcmV4L2Jsb2IvbWFzdGVyL2pzL2FsdG1ldHJpY3MuY29tcG9uZW50LmpzKVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IEFsdG1ldHJpY3NCYWRnZUhUTUwgZnJvbSAnLi9hbHRtZXRyaWNzQmFkZ2UuaHRtbCdcclxuXHJcbmNsYXNzIEFsdG1ldHJpY3NCYWRnZUNvbnRyb2xsZXIge1xyXG5cclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHRpbWVvdXQsIEFsdG1ldHJpY3NTZXJ2aWNlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xyXG4gICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbi8vICAgIHRoaXMuQWx0bWV0cmljc1NlcnZpY2UgPSBBbHRtZXRyaWNzU2VydmljZTtcclxuICAgIHZhciBwYXJlbnRDdHJsID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmw7XHJcbiAgICBsZXQgaXRlbSA9IHBhcmVudEN0cmwuaXRlbTtcclxuICAgIHNlbGYucmVjb3JkaWQgPSBpdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xyXG4gICAgc2VsZi5kb2kgPSAnJztcclxuXHJcbiAgICBpZiAoaXRlbSAmJiBpdGVtLnBueCAmJiBpdGVtLnBueC5hZGRhdGEgJiYgaXRlbS5wbnguYWRkYXRhLmRvaSkge1xyXG4gICAgICBzZWxmLmRvaSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmFkZGF0YS5kb2lbMF07XHJcbiAgICAgIEFsdG1ldHJpY3NTZXJ2aWNlLmFkZEFsdG1ldHJpY3MoJyNmdWxsX2FsdG1ldHJpY3NfJyArIHNlbGYucmVjb3JkaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIHZhciBhbHRtZXRyaWNzU2VjdGlvbiA9IHtcclxuICAgICAgICAgICAgc2Nyb2xsSWQ6IFwiYWx0bWV0cmljc1wiLFxyXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogXCJhbHRtZXRyaWNzXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoICBwYXJlbnRDdHJsLmZ1bGxWaWV3U2VydmljZS5nZXRTZXJ2aWNlcyhwYXJlbnRDdHJsLml0ZW0sIHBhcmVudEN0cmwub3JpZ2luYXRvcikgKS50aGVuKGZ1bmN0aW9uKHNlcnZpY2VzKSB7XHJcbiAgICAgICAgICAgIHNlcnZpY2VzLnNwbGljZShzZXJ2aWNlcy5sZW5ndGgsIDEwLCBhbHRtZXRyaWNzU2VjdGlvbik7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgLy9wb2x5ZmlsbFxyXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKVxyXG4gICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG5cclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdClcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24ocykge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubWF0Y2hlcyhzKSkgcmV0dXJuIGVsO1xyXG4gICAgICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50IHx8IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICBsZXQgZG9pID0gdGhpcy5kb2lcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmIChkb2kgIT09ICcnKSB7XHJcbiAgICAgIHZhciB1bmJpbmRXYXRjaGVyID0gdGhpcy4kc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3JldHVybiBzZWxmLiRlbGVtZW50WzBdLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoNFt0cmFuc2xhdGU9XCJicmllZi5yZXN1bHRzLnRhYnMuQWx0bWV0cmljc1wiXScpO1xyXG4gICAgICAgIHJldHVybiBzZWxmLiRlbGVtZW50WzBdLmNsb3Nlc3QoJyNmdWxsVmlldycpLnF1ZXJ5U2VsZWN0b3IoJ2g0W3RyYW5zbGF0ZT1cImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJdJylcclxuICAgICAgfSwgZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbCkge1xyXG4gICAgICAgICAgLy9HZXQgdGhlIHNlY3Rpb24gYm9keSBhc3NvY2lhdGVkIHdpdGggdGhlIHZhbHVlIHdlJ3JlIHdhdGNoaW5nXHJcbiAgICAgICAgICBsZXQgYWx0bWV0cmljc0NvbnRhaW5lciA9IG5ld1ZhbC5jbG9zZXN0KCdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignZGl2LnNlY3Rpb24tYm9keScpO1xyXG4gICAgICAgICAgbGV0IGFsdG1ldHJpY3NSZXN1bHQgPSBzZWxmLiRlbGVtZW50WzBdO1xyXG5cclxuICAgICAgICAgIGlmIChhbHRtZXRyaWNzQ29udGFpbmVyICYmIGFsdG1ldHJpY3NDb250YWluZXIuYXBwZW5kQ2hpbGQgJiYgYWx0bWV0cmljc1Jlc3VsdCkge1xyXG4gICAgICAgICAgICBhbHRtZXRyaWNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsdG1ldHJpY3NSZXN1bHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdW5iaW5kV2F0Y2hlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhbHRtZXRyaWNzQmFkZ2VDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogQWx0bWV0cmljc0JhZGdlQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogQWx0bWV0cmljc0JhZGdlSFRNTFxyXG59XHJcbiIsImltcG9ydCBiZXRhU3dpdGNoSFRNTCBmcm9tICcuL2JldGFTd2l0Y2guaHRtbCdcclxuXHJcbmNsYXNzIEJldGFTd2l0Y2hDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuICAgICRzY29wZS5zaG93QmV0YVN3aXRjaCA9IHRydWU7XHJcbiAgICAkc2NvcGUudXNlQmV0YSA9IHRydWU7ICBcclxuXHJcbiAgICAkc2NvcGUub25DaGFuZ2VVc2VCZXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoISAkc2NvcGUudXNlQmV0YSl7XHJcbiAgICAgICAgc2VsZi5nb1RvT2xkVUkoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdvVG9PbGRVSSgpIHtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9Jy9wcmltb19saWJyYXJ5L2xpYndlYi9hY3Rpb24vc2VhcmNoLmRvP3ZpZD0nKyB0aGlzLm9sZFZpZDtcclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICB2YXIgTGlua1RvQmV0YVZpZXdzID0ge1xyXG4gICAgICAnQUNWJzonQUNWJyxcclxuICAgICAgJ0JQQic6J0JQQicsXHJcbiAgICAgICdGQVJPJzonRkFSTycsXHJcbiAgICAgICdGT0RGSU4nOidGT0RGSU4nICxcclxuICAgICAgJ0dDTEQnOidHQ0xEJyxcclxuICAgICAgJ0dTQic6J0dTQicsXHJcbiAgICAgICdHU0cnOidHU0cnLFxyXG4gICAgICAnSU1FQyc6J0lNRUMnLFxyXG4gICAgICAnS0FET0MnOidLQURPQycsXHJcbiAgICAgICdLQkMnOidLQkMnLFxyXG4gICAgICAnS01LRyc6J0tNS0cnLFxyXG4gICAgICAnS1VMZXV2ZW4nOidLVUxldXZlbl9VWCcsXHJcbiAgICAgICdMSUJBUic6J0xJQkFSJyxcclxuICAgICAgJ0xVQ0EnOidMVUNBX1VYJyxcclxuICAgICAgJ05CQic6J05CQicsXHJcbiAgICAgICdPRElTRUUnOidPRElTRUVfVVgnLFxyXG4gICAgICAnT0ZPJzonT0ZPJyxcclxuICAgICAgJ1JCSU5TJzonUkJJTlMnLFxyXG4gICAgICAnUkVMSSc6J1JFTEknLFxyXG4gICAgICAnUk1DQSc6J1JNQ0EnLFxyXG4gICAgICAnU0VSVic6J1NFUlYnLFxyXG4gICAgICAnVE1PUkVLJzonVE1PUkVLX1VYJyxcclxuICAgICAgJ1RNT1JFTSc6J1RNT1JFTUFfVVgnLFxyXG4gICAgICAnVkRJQyc6J1ZESUMnLFxyXG4gICAgICAnVklWRVNfS0FUSE8nOidWSVZFU19LQVRIT19VWCcsXHJcbiAgICAgICdWSVZFU19LSEJPJzonVklWRVNfS0hCT19VWCcsXHJcbiAgICAgICdWTFAnOidWTFAnLFxyXG4gICAgICAnS1VMZXV2ZW5fVE1PUkVNJzonS1VMZXV2ZW5fVE1PUkVNX1VYJyxcclxuICAgICAgJ0tVTGV1dmVuX1VDTEwnOidLVUxldXZlbl9VQ0xMX1VYJyxcclxuICAgICAgJ0tVTGV1dmVuX1RNT1JFSyc6J0tVTGV1dmVuX1RNT1JFS19VWCcsXHJcbiAgICAgICdLVUxldXZlbl9MVUNBJzonS1VMZXV2ZW5fTFVDQV9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9WSVZFU19LSEJPJzonS1VMZXV2ZW5fVklWRVNfS0hCT19VWCcsXHJcbiAgICAgICdLVUxldXZlbl9PRElTRUUnOidLVUxldXZlbl9PRElTRUVfVVgnLFxyXG4gICAgICAnS0hMSU0nOidVQ0xMX0xJTUJVUkdfVVgnLFxyXG4gICAgICAnS0hMJzonVUNMTF9MRVVWRU5fVVgnXHJcbiAgICB9XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBpZiAoL15FQ0IvLnRlc3Qodmlldy5jb2RlKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0JldGFTd2l0Y2ggPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9sZFZpZCA9IE9iamVjdC5rZXlzKExpbmtUb0JldGFWaWV3cykuZmluZChrZXkgPT4gTGlua1RvQmV0YVZpZXdzW2tleV0gPT09IHZpZXcuY29kZSkgfHwgdmlldy5jb2RlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGxldCBiZXRhU3dpdGNoQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEJldGFTd2l0Y2hDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBiZXRhU3dpdGNoSFRNTFxyXG59XHJcbiIsImltcG9ydCBob21lSWNvbkhUTUwgZnJvbSAnLi9ob21lSWNvbi5odG1sJ1xyXG5cclxuY2xhc3MgSG9tZUljb25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHAsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICBzZWxmLmxpbmt0eXBlID0gJ2hvbWVJY29uJztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgaWYgKHZpZCA9PSBcIkVDQlwiKSB7XHJcbiAgICAgICAgc2VsZi5saW5rdHlwZSA9IFwibmV3U2VhcmNoQnV0dG9uXCI7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7IC8vd2luZG93LlByaW1vLmV4cGxvcmUuaGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAgICAgbGV0IGxpYnJhcnlMb2dvID0gd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvO1xyXG4gICAgICBsZXQgbG9jYWxlTGlicmFyeUxvZ28gPSAnY3VzdG9tLycgKyB2aWQgKyAnL2ltZy9saWJyYXJ5LWxvZ28tJyArIGxvY2FsZSArICcucG5nJztcclxuXHJcbiAgICAgIGlmIChsaWJyYXJ5TG9nbyAhPT0gbG9jYWxlTGlicmFyeUxvZ28pIHtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgdXJsOiBsb2NhbGVMaWJyYXJ5TG9nbyxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvID0gbG9jYWxlTGlicmFyeUxvZ287XHJcbiAgICAgICAgICAkY29tcGlsZSgkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSkoJHNjb3BlKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxpYnJhcnlMb2dvO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9ICcvcHJpbW8tZXhwbG9yZS9zZWFyY2g/dmlkPScgKyB2aWQgKyBcIiZsYW5nPVwiICsgbG9jYWxlO1xyXG5cclxuICAgICAgJHNjb3BlLnJlbW92ZVN0aWNreUZhY2V0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZmFjZXRzID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJtLWZhY2V0Jyk7XHJcbiAgICAgICAgaWYgKGZhY2V0cykge1xyXG4gICAgICAgICAgdmFyIHN0aWNreUZhY2V0cyA9IGZhY2V0c1swXS5jdHJsKCkuZmFjZXRTZXJ2aWNlLmdldFN0aWNreUZhY2V0cygpXHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0aWNreUZhY2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5yZW1vdmVTdGlja3lGYWNldChzdGlja3lGYWNldHNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lSWNvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRodHRwJywgJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgaG9tZUljb25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogSG9tZUljb25Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBob21lSWNvbkhUTUxcclxufSIsImNsYXNzIExhbmd1YWdlRGVwZW5kZW50TG9nb0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlLCAkaHR0cCwgJHJvb3RTY29wZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5zY29wZSA9ICRzY29wZTtcclxuICAgIHNlbGYucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuXHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlOyAvL3dpbmRvdy5Qcmltby5leHBsb3JlLmhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuICAgICAgbGV0IGxvY2FsZUxpYnJhcnlMb2dvID0gJ2N1c3RvbS8nICsgdmlkICsgJy9pbWcvbGlicmFyeS1sb2dvLScgKyBsb2NhbGUgKyAnLnBuZyc7XHJcblxyXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgJGNvbXBpbGUoJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkpKCRzY29wZSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuTGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBsYW5ndWFnZURlcGVuZGVudExvZ29Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogTGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufSIsImltcG9ydCBuZXdTZWFyY2hCdXR0b25IVE1MIGZyb20gJy4vbmV3U2VhcmNoQnV0dG9uLmh0bWwnXHJcblxyXG5jbGFzcyBOZXdTZWFyY2hCdXR0b25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHAsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5wcmVwZW5kKCRjb21waWxlKG5ld1NlYXJjaEJ1dHRvbkhUTUwpKCRzY29wZSkpO1xyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbigodmlldykgPT4ge1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG4gICAgICBpZiAodmlkID09IFwiRUNCXCIpIHtcclxuICAgICAgICBzZWxmLmxpbmt0eXBlID0gXCJuZXdTZWFyY2hCdXR0b25cIjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9ICcvcHJpbW8tZXhwbG9yZS9zZWFyY2g/dmlkPScgKyB2aWQgKyBcIiZsYW5nPVwiICsgbG9jYWxlO1xyXG5cclxuICAgICAgc2VsZi5yZW1vdmVTdGlja3lGYWNldHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHBybUFkdmFuY2VkU2VhcmNoID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJtLWFkdmFuY2VkLXNlYXJjaCcpO1xyXG4gICAgICAgIGlmKHBybUFkdmFuY2VkU2VhcmNoKXtcclxuICAgICAgICAgIGxldCBjID0gcHJtQWR2YW5jZWRTZWFyY2hbMF0uY3RybCgpO1xyXG4gICAgICAgICAgYy5jbGVhclNlYXJjaEZvcm0oKTtcclxuICAgICAgICAgIGMuJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZhY2V0cyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldCcpO1xyXG4gICAgICAgIGlmIChmYWNldHMpIHtcclxuICAgICAgICAgIGxldCBzdGlja3lGYWNldHMgPSBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5nZXRTdGlja3lGYWNldHMoKVxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGlja3lGYWNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UucmVtb3ZlU3RpY2t5RmFjZXQoc3RpY2t5RmFjZXRzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBuZXdTZWFyY2hCdXR0b25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgdmlld0xvZ29IVE1MIGZyb20gJy4vdmlld0xvZ28uaHRtbCdcclxuXHJcbmNsYXNzIFZpZXdMb2dvQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KClbMF0uZmlyc3RDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpWzBdLmZpcnN0Q2hpbGQpO1xyXG5cclxuXHJcbiAgICAkdHJhbnNsYXRlKCdsaW1vLmluc3RpdHV0ZVVybCcpLnRoZW4oXHJcbiAgICAobWVzc2FnZSkgPT4ge1xyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9IG1lc3NhZ2VcclxuICAgIH0pO1xyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbigodmlldykgPT4ge1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcbiAgICAgIGxldCBsb2NhbGVMaWJyYXJ5TG9nbyA9ICdjdXN0b20vJyArIHZpZCArICcvaW1nL2xpYnJhcnktbG9nby0nICsgbG9jYWxlICsgJy5wbmcnO1xyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9ICcvcHJpbW8tZXhwbG9yZS9zZWFyY2g/dmlkPScgKyB2aWQgKyBcIiZsYW5nPVwiICsgbG9jYWxlO1xyXG4gICAgICBzZWxmLmxvY2FsZUxpYnJhcnlMb2dvID0gd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvO1xyXG5cclxuICAgICAgIGlmICggc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbyAhPT0gbG9jYWxlTGlicmFyeUxvZ28pIHtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgdXJsOiBsb2NhbGVMaWJyYXJ5TG9nbyxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvID0gbG9jYWxlTGlicmFyeUxvZ287XHJcbiAgICAgICAgICBzZWxmLmxvY2FsZUxpYnJhcnlMb2dvID0gIGxvY2FsZUxpYnJhcnlMb2dvXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuVmlld0xvZ29Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckdHJhbnNsYXRlJywgJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRodHRwJywgJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgdmlld0xvZ29Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogVmlld0xvZ29Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiB2aWV3TG9nb0hUTUxcclxufVxyXG4iLCJpbXBvcnQgZmVlZGJhY2tIVE1MIGZyb20gJy4vZmVlZGJhY2suaHRtbCdcclxuaW1wb3J0IGZlZWRiYWNrRGlhbG9nSFRNTCBmcm9tICcuL2ZlZWRiYWNrRGlhbG9nLmh0bWwnXHJcblxyXG5jbGFzcyBGZWVkYmFja0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRlbGVtZW50LCAkY29tcGlsZSwgJHNjb3BlLCBGZWVkYmFja1NlcnZpY2Upe1xyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnZGl2JykuYXBwZW5kKCRjb21waWxlKGZlZWRiYWNrSFRNTCkoJHNjb3BlKSk7XHJcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZSA9IEZlZWRiYWNrU2VydmljZTtcclxuICB9XHJcblxyXG4gIHNob3dGZWVkYmFja0Zvcm0oJGV2ZW50KSB7XHJcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zaG93KCRldmVudCwgZmVlZGJhY2tEaWFsb2dIVE1MKTtcclxuICB9XHJcbn1cclxuXHJcbkZlZWRiYWNrQ29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnRmVlZGJhY2tTZXJ2aWNlJ107XHJcblxyXG5leHBvcnQgbGV0IGZlZWRiYWNrQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEZlZWRiYWNrQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgcHJvbW90ZUxvZ2luSFRNTCBmcm9tICcuL3Byb21vdGVMb2dpbkNvbmZpZy5odG1sJ1xyXG5cclxuY2xhc3MgUHJvbW90ZUxvZ2luQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLnNob3dBdXRvbWF0aWNMb2dpbiA9IGZhbHNlOyAgXHJcbi8qIFJlbW92ZSB0aGUgbG9jYWxTdG9yYWdlIHBhcmFtZXRlciBwcmltb1Byb21vdGVMb2dpbiBpZiB0aGUgdXJsIGNvbnRhaW5zIGNsZWFyTG9naW4gKi9cclxuICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHZhciB1cmxQYXJhbSA9IFwiY2xlYXJMb2dpblwiO1xyXG4gICAgdXJsUGFyYW0gPSB1cmxQYXJhbS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyB1cmxQYXJhbSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXHJcbiAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xyXG4gICAgaWYgKHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgaWYgKGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpKXtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuYWx3YXlzU2lnbmluQ2hlY2tCb3ggPSBmYWxzZTtcclxuICAgIHNlbGYuYWx3YXlzU2lnbmluID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmltb1Byb21vdGVMb2dpblwiKTtcclxuICAgIGlmIChzZWxmLmFsd2F5c1NpZ25pbikge1xyXG4gICAgICBzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuYWx3YXlzU2lnbmluQ2hlY2tlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoIHNlbGYuYWx3YXlzU2lnbmluQ2hlY2tCb3ggKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nLCAnYWx3YXlzU2lnbmluJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBpZiAoL15LVUxldXZlbi8udGVzdCh2aWV3LmNvZGUpKSB7XHJcbiAgICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaG93QXV0b21hdGljTG9naW4gPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2hvd0F1dG9tYXRpY0xvZ2luID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgcHJvbW90ZUxvZ2luQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOntcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUHJvbW90ZUxvZ2luQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogcHJvbW90ZUxvZ2luSFRNTFxyXG59XHJcbiIsIi8qIGNvbXBvbmVudCB0byBkbyBhbGwgeW91ciBleHBlcmltZW50YWwgc3R1ZmYgKi9cclxuLyogW2VufGRpc11hYmxlIGluIGNvbXBvbmVudHMgKi9cclxuXHJcbmNsYXNzIFJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4vKlxyXG4gICAgY29uc29sZS5sb2coc2VsZilcclxuICAgIGNvbnNvbGUubG9nKCBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UuY29uZmlndXJhdGlvblV0aWwudmlkICk7XHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudmlkICk7XHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UuaW5zdCApO1xyXG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnVzZXJJbnN0aXR1dGlvbiApO1xyXG4qL1xyXG4gICAgdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwub3JnR2V0TGluayA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmdldExpbms7XHJcbiAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5nZXRMaW5rID0gZnVuY3Rpb24oKSB7IFxyXG4gICAgICB2YXIgZ2V0SXRMaW5rID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwub3JnR2V0TGluaygpO1xyXG4gICAgICByZXR1cm4gZ2V0SXRMaW5rLnJlcGxhY2UoL1xcL29wZW51cmxcXC9bXi9dKlxcL1teP10qLywgXCIvb3BlbnVybFxcL1wiKyBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS51c2VySW5zdGl0dXRpb24gK1wiXFwvXCIrIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS5jb25maWd1cmF0aW9uVXRpbC52aWQpIFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcblJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50J11cclxuXHJcbmV4cG9ydCBsZXQgcmVjb21tZW5kYXRpb25JdGVtQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGlsbFJlcXVlc3RGb3JtSFRNTCBmcm9tICcuL2lsbFJlcXVlc3RGb3JtLmh0bWwnXHJcblxyXG5jbGFzcyBpbGxSZXF1ZXN0Rm9ybUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkd2luZG93LCAkcm9vdFNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgICAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICAgICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5zdGl0dXRpb25Db2RlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgJG9uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uQ29kZSA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnJlcXVlc3RzU2VydmljZS5hY2NvdW50U2VydmljZS5saW5rZWRVc2VyU2VsZWN0b3JTZXJ2aWNlLnNlbGVjdGVkSW5zdGl0dXRpb24uaW5zdGl0dXRpb25Db2RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBhbG1hX2NvZGVzID0gdGhpcy5yb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5tYXBwaW5nVGFibGVzQ2FjaGUuTUFQUElOR19UQUJMRVNfQ0FDSEVbXCJBbG1hIEluc3RpdHV0aW9uIENvZGVzXCJdO1xyXG4gICAgICAgICAgICB2YXIgdXNlcl9pbnN0ID0gdGhpcy5yb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS51c2VySW5zdGl0dXRpb247XHJcbiAgICAgICAgICAgIHZhciBhbG1hX2NvZGUgPSBhbG1hX2NvZGVzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmoudGFyZ2V0ID09IHVzZXJfaW5zdDsgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nIChhbG1hX2NvZGVbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uQ29kZSA9IGFsbWFfY29kZVswXS5zb3VyY2UxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdpbnN0aXR1dGlvbkNvZGU6JyArIGluc3RpdHV0aW9uQ29kZSlcclxuICAgICAgICBpZiAodGhpcy5pbnN0aXR1dGlvbkNvZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvSWxsUmVxdWVzdFVybCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0aXR1dGlvbkNvZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaWxsUmVxdWVzdFVybCA9ICdodHRwczovL2xldXZlbi1wcmltby5ob3N0ZWQuZXhsaWJyaXNncm91cC5jb20vcGRzP2Z1bmM9c3NvJnVybD1odHRwOi8vZXUuYWxtYS5leGxpYnJpc2dyb3VwLmNvbS92aWV3L3VyZXNvbHZlci8nICsgdGhpcy5pbnN0aXR1dGlvbkNvZGUgKyAnL29wZW51cmw/c3ZjX2RhdD1nZXRpdCZzdmMucHJvZmlsZT1nZXRpdCZkaXJlY3RSZXNvdXJjZVNoYXJpbmdSZXF1ZXN0PXRydWUmbmV3VUk9dHJ1ZSdcclxuICAgICAgICAgICAgdGhpcy53aW5kb3cub3Blbih0aGlzLmlsbFJlcXVlc3RVcmwsICdfZnJlZUlsbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5pbGxSZXF1ZXN0Rm9ybUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJHdpbmRvdycsJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgaWxsUmVxdWVzdEZvcm1Db25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IGlsbFJlcXVlc3RGb3JtQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiBpbGxSZXF1ZXN0Rm9ybUhUTUxcclxufVxyXG4iLCJpbXBvcnQgYnJvd3ppbmVIVE1MIGZyb20gJy4vYnJvd3ppbmUuaHRtbCdcclxuXHJcbmNsYXNzIEJyb3d6aW5lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5yZXN1bHQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0+XCIsc2VsZiwgaXRlbSwgJHNjb3BlKTtcclxuXHJcbiAgICAgICAgc2VsZi5yZWNvcmRpZCA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnBueCAmJiBpdGVtLnBueC5hZGRhdGEpIHtcclxuICAgICAgICAgICAgc2VsZi5yZWNvcmRpZCA9IGl0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnJvd3ppbmVXYXRjaGVyID0gJHNjb3BlLiR3YXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYnJvd3ppbmUucHJpbW8gPT09ICdvYmplY3QnXHJcbiAgICAgICAgfSwgKG4sIG8pID0+IHtcclxuICAgICAgICAgICAgaWYgKG4gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyIGJyb3d6aW5lIGZvcjpcIiwgc2VsZi5yZWNvcmRpZClcclxuICAgICAgICAgICAgICAgIGxldCBzY29wZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAkY3RybDogc2VsZi5wYXJlbnRDdHJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYnJvd3ppbmUucHJpbW8uc2VhcmNoUmVzdWx0KHNjb3BlKTtcclxuICAgICAgICAgICAgICAgIGJyb3d6aW5lV2F0Y2hlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuQnJvd3ppbmVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBicm93emluZUNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogQnJvd3ppbmVDb250cm9sbGVyXHJcbn0iLCJpbXBvcnQgcG54WG1sSFRNTCBmcm9tICcuL3BueFhtbC5odG1sJ1xyXG5jbGFzcyBQbnhYbWxDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMucmVjb3JkaWQgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLnJlY29yZGlkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoaG90a2V5cykge1xyXG4gICAgICBob3RrZXlzKFwiY3RybCtlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG54LXhtbCcpKSkge1xyXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3BueC14bWwtdHJpZ2dlcicpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwbngteG1sLXRyaWdnZXInKTtcclxuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7ei1pbmRleDoxMDAwO2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouMDMnKTtcclxuICAgICAgZGl2Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcclxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYudmlzaWJsZSA/ICdmbGV4JyA6ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwbnhYbWxDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUG54WG1sQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogcG54WG1sSFRNTFxyXG59XHJcbiIsImltcG9ydCByZXBvcnRBUHJvYmxlbUhUTUwgZnJvbSAnLi9yZXBvcnRBUHJvYmxlbS5odG1sJ1xyXG5pbXBvcnQgcmVwb3J0QVByb2JsZW1EaWFsb2dIVE1MIGZyb20gJy4vcmVwb3J0QVByb2JsZW1EaWFsb2cuaHRtbCdcclxuXHJcbmNsYXNzIFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdCh0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC50aXRsZSkpIHtcclxuICAgICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnaDQnKS5hZnRlcigkY29tcGlsZShyZXBvcnRBUHJvYmxlbUhUTUwpKCRzY29wZSkpO1xyXG5cclxuICAgICAgbGV0IHJlY29yZERhdGEgPSBzZWxmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgIHNlbGYuc2hvd1JlcG9ydEFQcm9ibGVtRm9ybSA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxyXG4gICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVwb3J0QVByb2JsZW1EaWFsb2dIVE1MLFxyXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJG1kRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucmVwb3J0ID0ge1xyXG4gICAgICAgICAgICAgICAgICByZXBseVRvOiBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICBzdWJqZWN0OiAncmVwb3J0IGEgcHJvYmxlbSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxSZXBvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbmRSZXBvcnQgPSBmdW5jdGlvbihhbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wucmVjb3JkaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzY29wZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFR5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25JZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0YWI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZWNvcmREYXRhLnBueC5kaXNwbGF5LnRpdGxlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZXNvdXJjZV9wcm9ibGVtJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAkc2NvcGUucmVwb3J0LnN1YmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAkc2NvcGUucmVwb3J0Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlUbzogJHNjb3BlLnJlcG9ydC5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yZXBvcnQucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5yZXBvcnQubWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9yZXBvcnRfYV9wcm9ibGVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLmZhaWwnKSB8fCAnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfTsgLy9zaG93UmVwb3J0QVByb2JsZW1Gb3JtXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRSZWNvcmQoKSB7XHJcbiAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXHJcbiAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xyXG4gICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRDdHJsKTtcclxuICAgICAgcmV0dXJuIGVsZW1lbnRDdHJsLml0ZW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcblJlcG9ydEFQcm9ibGVtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyRodHRwJ107XHJcblxyXG5leHBvcnQgbGV0IHJlcG9ydEFQcm9ibGVtQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgcmVxdWVzdEFDb3B5SFRNTCBmcm9tICcuL3JlcXVlc3RBQ29weS5odG1sJ1xyXG5pbXBvcnQgcmVxdWVzdEFDb3B5RGlhbG9nSFRNTCBmcm9tICcuL3JlcXVlc3RBQ29weURpYWxvZy5odG1sJ1xyXG5cclxuY2xhc3MgUmVxdWVzdEFDb3B5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwLCAkcm9vdFNjb3BlLCByZXF1ZXN0QUNvcHlVUkwsIE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgLy8gSWYgeW91IHdhbnQgdG8gYWRkIHRoZSBidXR0b24gdG8gdGhlIHRpdGxlIChsaWtlIHJlcG9ydCBhIHByb2JsZW0pXHJcbiAgICAvL2xldCBzZXJ2aWNlVGl0bGVDb2RlID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwudGl0bGVcclxuICAgIC8vbGV0IGFwcGVuZEJ1dHRvblRvID0gJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnaDQnKTtcclxuXHJcbiAgICBsZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnNlcnZpY2UudGl0bGU7XHJcbiAgICBsZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKTtcclxuXHJcbiAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkge1xyXG4gICAgICBpZiAoKCEvXm51aVxcLmdldGl0XFwudGFiMV9vbmxfbm9yZXN0cmljdC8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkpIHtcclxuXHJcbiAgICAgICAvKiBjYXB0Y2hhIGltcGxlbWVudGF0aW9uIChBbHJlYWR5IHVzZWQgaW4gKVxyXG4gICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9WaXZpZENvcnRleC9hbmd1bGFyLXJlY2FwdGNoYVxyXG5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGxldCByZWNvcmREYXRhID0gc2VsZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgIGxldCBjYXBjaGFQdWJsaWNLZXkgPSB3aW5kb3cuYXBwQ29uZmlnW1wic3lzdGVtLWNvbmZpZ3VyYXRpb25cIl1bXCJQdWJsaWMgQ2FwdGNoYSBLZXlcIl07XHJcblxyXG4gICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgICBzZWxmLm9uQ2FtcHVzID0gc2VsZi51c2VyLmlzT25DYW1wdXMoKTtcclxuICAgICAgICAgICAgLy9zZWxmLm9uQ2FtcHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICggISAvXm51aVxcLmdldGl0XFwudGFiMV9vbmxfbWF5cmVzdHJpY3QvLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkgIHx8IC9ebnVpXFwuZ2V0aXRcXC50YWIxX29ubF9tYXlyZXN0cmljdC8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSAmJiAhIHNlbGYub25DYW1wdXMgKSB7XHJcbiAgICAgICAgICAgICAgYXBwZW5kQnV0dG9uVG8uYWZ0ZXIoJGNvbXBpbGUocmVxdWVzdEFDb3B5SFRNTCkoJHNjb3BlKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbi8vY29uc29sZS5sb2cgKCByZWNvcmREYXRhLnBueCApXHJcblxyXG4gICAgICAgICAgICBzZWxmLnNob3dSZXF1ZXN0QUNvcHlGb3JtID0gKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiByZXF1ZXN0QUNvcHlEaWFsb2dIVE1MLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSwgJG1kRGlhbG9nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICBsZXQgcG54RGlzcGxheSA9ICByZWNvcmREYXRhLnBueC5kaXNwbGF5O1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuZ0NhcHRjaGFSZXNwb25zZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuY2FwY2hhUHVibGljS2V5ID0gY2FwY2hhUHVibGljS2V5O1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUucmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICByZXBseVRvOiBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbW90aXZhdGlvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHBueERpc3BsYXkudGl0bGVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3I6ICgoKSA9PiB7ICggcG54RGlzcGxheS5jb250cmlidXRvciA/IHBueERpc3BsYXkuY29udHJpYnV0b3JbMF0gOiAnJyApIH0pKCksXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRvcjogcG54RGlzcGxheS5jcmVhdG9yID8gcG54RGlzcGxheS5jcmVhdG9yWzBdIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNwYXJ0b2Y6IHBueERpc3BsYXkuaXNwYXJ0b2YgPyBwbnhEaXNwbGF5LmlzcGFydG9mWzBdIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJ3JlcXVlc3QgYSBjb3B5J1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2V0V2lkZ2V0SWQgPSBmdW5jdGlvbiAod2lkZ2V0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0NyZWF0ZWQgd2lkZ2V0IElEOiAlcycsIHdpZGdldElkKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUud2lkZ2V0SWQgPSB3aWRnZXRJZDtcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNldFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXQgcmVzcG9uc2UgZnJvbSBjYXB0dXJlOlwiICsgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5nQ2FwdGNoYVJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5jYkV4cGlyYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdFeHBpcmF0aW9uIERpc2FibGUgU3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdDYXB0Y2hhUmVzcG9uc2UgPSAnJztcclxuICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxSZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbmRSZXF1ZXN0ID0gZnVuY3Rpb24gKGFuc3dlcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICdnLXJlY2FwdGNoYS1yZXNwb25zZSc6ICRzY29wZS5nQ2FwdGNoYVJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbklkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wuc291cmNlaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWNvcmRJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5yZWNvcmRpZFswXSxcclxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVJlY29yZElkOiByZWNvcmREYXRhLnBueC5jb250cm9sLnNvdXJjZXJlY29yZGlkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHBueERpc3BsYXkudGl0bGVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250cmlidXRvcjogKCgpID0+IHsgKCBwbnhEaXNwbGF5LmNvbnRyaWJ1dG9yID8gcG54RGlzcGxheS5jb250cmlidXRvclswXSA6ICcnICkgfSkoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3I6IHBueERpc3BsYXkuY3JlYXRvciA/IHBueERpc3BsYXkuY3JlYXRvclswXSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNwYXJ0b2Y6IHBueERpc3BsYXkuaXNwYXJ0b2YgPyBwbnhEaXNwbGF5LmlzcGFydG9mWzBdIDogJycsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVwbHlUbzogJHNjb3BlLnJlcXVlc3QucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtb3RpdmF0aW9uOiAkc2NvcGUucmVxdWVzdC5tb3RpdmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyAoIGRhdGEgKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yZXF1ZXN0LnJlcGx5VG8ubGVuZ3RoID4gMCAmJiAkc2NvcGUucmVxdWVzdC5tb3RpdmF0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOnJlcXVlc3RBQ29weVVSTCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ1gtRnJvbS1FeEwtQVBJLUdhdGV3YXknOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYuJHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC4kdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgdGhlIHJlcXVlc3QgaGFkIGJlZW4gc2VuZCEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5fX3Nob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICRzY29wZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRGVsYXk6IDUwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLiRyb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwuJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLmZhaWwnKSB8fCAnVW5hYmxlIHRvIHN1Ym1pdCB0aGUgcmVxdWVzdC4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggbWVzc2FnZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLl9fc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogJHNjb3BlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVEZWxheTogNTAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9OyAvL3Nob3dSZXF1ZXN0QUNvcHlGb3JtXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSAvL2lmICggKCAhIC9ebnVpXFwuZ2V0aXRcXC50YWIxX29ubF9ub3Jlc3RyaWN0Ly50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpICApICl7XHJcbiAgICB9IC8vIGlmICgvXm51aVxcLmdldGl0XFwuLy50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpKSAgXHJcbiAgfVxyXG5cclxuICBnZXQgY3VycmVudFJlY29yZCgpIHtcclxuICAgIGxldCBzZWxlY3RvciA9ICdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJzsgLy8ncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcidcclxuICAgIGxldCBlbGVtZW50ID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKTtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIGxldCBlbGVtZW50Q3RybCA9IGVsZW1lbnQuY29udHJvbGxlcihzZWxlY3Rvcik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRDdHJsKTtcclxuICAgICAgcmV0dXJuIGVsZW1lbnRDdHJsLml0ZW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcblJlcXVlc3RBQ29weUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckaHR0cCcsICckcm9vdFNjb3BlJywgJ3JlcXVlc3RBQ29weVVSTCcsICdNZXNzYWdlU2VydmljZSddO1xyXG5cclxuZXhwb3J0IGxldCByZXF1ZXN0QUNvcHlDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUmVxdWVzdEFDb3B5Q29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufSIsImNsYXNzIEFubm91bmNlbWVudHNDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsIE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICBNZXNzYWdlU2VydmljZS5zaG93KCcnLCAkc2NvcGUpO1xyXG4gIH1cclxufVxyXG5cclxuQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJ01lc3NhZ2VTZXJ2aWNlJ107XHJcblxyXG5leHBvcnQgbGV0IGFubm91bmNlbWVudHNDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxyXG4gIGNvbnRyb2xsZXI6IEFubm91bmNlbWVudHNDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCBmZWVkYmFja0Fubm91bmNlbWVudEhUTUwgZnJvbSAnLi9mZWVkYmFja0Fubm91bmNlbWVudC5odG1sJ1xyXG5pbXBvcnQgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dIVE1MIGZyb20gJy4vZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2cuaHRtbCdcclxuaW1wb3J0IGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlciBmcm9tICcuL2ZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nJ1xyXG5cclxuY2xhc3MgRmVlZGJhY2tBbm5vdW5jZW1lbnRDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICR0cmFuc2xhdGUsICR0aW1lb3V0LCBGZWVkYmFja1NlcnZpY2UsIE1lc3NhZ2VTZXJ2aWNlLCBhY3Rpb25JY29ucykge1xyXG5cclxuICAgIC8vJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvL2xldCBtZXNzYWdlID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnN1cnZleS5hbm5vdW5jZW1lbnQnKTtcclxuICAgICAgbGV0IHNob3dGZWVkYmFjayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmltb0ZlZWRiYWNrJyk7XHJcbiAgICAgIGlmIChzaG93RmVlZGJhY2sgPT0gbnVsbCkge1xyXG4gICAgICAgICR0cmFuc2xhdGUoJ2xicy5udWkuc3VydmV5LmFubm91bmNlbWVudCcpLnRoZW4oKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coZmVlZGJhY2tBbm5vdW5jZW1lbnRIVE1MLnJlcGxhY2UoJ3t7bWVzc2FnZX19JywgbWVzc2FnZSksIHtcclxuICAgICAgICAgICAgc2NvcGU6ICRzY29wZSxcclxuICAgICAgICAgICAgaGlkZURlbGF5OiAwLFxyXG4gICAgICAgICAgICBhY3Rpb25MYWJlbDogJHRyYW5zbGF0ZS5pbnN0YW50KCdtYWlubWVudS5sYWJlbC5mZWVkYmFjaycpIHx8ICdGZWVkYmFjaycsXHJcbiAgICAgICAgICAgIGFjdGlvbjpcclxuICAgICAgICAgICAgICAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBGZWVkYmFja1NlcnZpY2Uuc2hvdygkZXZlbnQsIGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nSFRNTCwgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgLy99LCAyMDAwKTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5GZWVkYmFja0Fubm91bmNlbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJHRpbWVvdXQnLCAnRmVlZGJhY2tTZXJ2aWNlJywgJ01lc3NhZ2VTZXJ2aWNlJywgJ2FjdGlvbkljb25zJ107XHJcblxyXG5leHBvcnQgbGV0IGZlZWRiYWNrQW5ub3VuY2VtZW50Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEZlZWRiYWNrQW5ub3VuY2VtZW50Q29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJHRyYW5zbGF0ZSwgJGh0dHAsIGZlZWRiYWNrU2VydmljZVVSTCwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLm1kRGlhbG9nID0gJG1kRGlhbG9nO1xyXG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XHJcbiAgICB0aGlzLmh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMID0gZmVlZGJhY2tTZXJ2aWNlVVJMO1xyXG5cclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAkc2NvcGUuY2FuY2VsRmVlZGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IChhbnN3ZXIpID0+IHtcclxuICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgc3ViamVjdDogJHNjb3BlLmZlZWRiYWNrLnN1YmplY3QsXHJcbiAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXHJcbiAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXHJcbiAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXHJcbiAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXHJcbiAgICAgICAgaXA6IHNlbGYudmlldy5pcC5hZGRyZXNzLFxyXG4gICAgICAgIHR5cGU6ICdzdXJ2ZXknLFxyXG4gICAgICAgIGZlZWRiYWNrOiAkc2NvcGUuZmVlZGJhY2suYW5zd2VycyxcclxuICAgICAgICBlbWFpbDogJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgIHVzZXJJZDogc2VsZi51c2VyLmlkIHx8ICcnLFxyXG4gICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKCRzY29wZS5mZWVkYmFjay5yZXBseVRvLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZWxmLm1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgc2VsZi5odHRwKHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgdXJsOiB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ1gtRnJvbS1FeEwtQVBJLUdhdGV3YXknOiB1bmRlZmluZWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByaW1vRmVlZGJhY2snLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnO1xyXG4gICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnKTtcclxuICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLmZhaWwnKSB8fCAnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nO1xyXG4gICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgICRzY29wZS5mZWVkYmFjayA9IHtcclxuICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgIGFuc3dlcnM6IFtdLFxyXG4gICAgICAgICAgc3ViamVjdDogJ2ZlZWRiYWNrJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyR0cmFuc2xhdGUnLCAnJGh0dHAnLCAnZmVlZGJhY2tTZXJ2aWNlVVJMJywgJ01lc3NhZ2VTZXJ2aWNlJ107XHJcbiIsImNsYXNzIEZpbmVzTWVzc2FnZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKE1lc3NhZ2VTZXJ2aWNlLCAkdHJhbnNsYXRlLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgIGlmICh1c2VyLmZpbmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvL1RPRE86ZXh0cmFjdCBodG1sIHRvIGl0cyBvd24gZmlsZS4gZmluZCBvdXQgaG93IHRvIHJlc29sdmUge3t9fVxyXG5cclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS55b3VIYXZlRmluZXMnKTtcclxuICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKC9cXCQwLywgdXNlci5maW5lcy5sZW5ndGgpO1xyXG5cclxuICAgICAgICBsZXQgcGF5ID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnlvdUhhdmVGaW5lcy5wYXknKTtcclxuICAgICAgICBcclxuICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KGBcclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJhbGlnbi1zZWxmOmNlbnRlcjtcIj4ke21lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRvbWF0bztjb2xvcjogd2hpdGU7XCJcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1idXR0b24gbWQtcmFpc2VkIG1kLXNlY3VuZGFyeVwiIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICBocmVmPSdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL3BheV9teV9maW5lcyc+JHtwYXl9PC9hPlxyXG4gICAgICAgICAgYCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuRmluZXNNZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWydNZXNzYWdlU2VydmljZScsICckdHJhbnNsYXRlJywgJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgZmluZXNNZXNzYWdlQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEZpbmVzTWVzc2FnZUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWx0bWV0cmljc1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJGNvbXBpbGUsICRtZFRvYXN0LCAkdGltZW91dCwgJHdpbmRvdykge1xyXG4gICAgICAgIHRoaXMucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgICAgICB0aGlzLmNvbXBpbGUgPSAkY29tcGlsZTtcclxuICAgICAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgICAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrQWx0bWV0cmljc2NyaXB0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGludGVydmFsID0gMjAwO1xyXG4gICAgICAgICAgICB2YXIgZW5kVGltZSA9IE51bWJlcihuZXcgRGF0ZSgpKSArIDE1MDAwOyAvLyBzdG9wIGNvbnRyb2wgYWZ0ZXIgNSBzZWNvbmRzXHJcblxyXG4gICAgICAgICAgICB2YXIgd2FpdF91bnRpbF9hbHRtZXRyaWNzX2xvYWRlZCA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb25kaXRpb24gaXMgbWV0LCB3ZSdyZSBkb25lISBcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0eXBlb2Ygd2luZG93Ll9hbHRtZXRyaWNfZW1iZWRfaW5pdCA9PT0gJ2Z1bmN0aW9uJztcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29uZGl0aW9uIGlzbid0IG1ldCBidXQgdGhlIHRpbWVvdXQgaGFzbid0IGVsYXBzZWQsIGdvIGFnYWluXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChOdW1iZXIobmV3IERhdGUoKSkgPCBlbmRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh3YWl0X3VudGlsX2FsdG1ldHJpY3NfbG9hZGVkLCBpbnRlcnZhbCwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIERpZG4ndCBtYXRjaCBhbmQgdG9vIG11Y2ggdGltZSwgcmVqZWN0IVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignV2FpdCB1bnRpbCBhbHRtZXRyaWNzIGlzIGxvYWRlZCB0aW1lZCBvdXQnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSh3YWl0X3VudGlsX2FsdG1ldHJpY3NfbG9hZGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWx0bWV0cmljcyhhbHRtZXRyaWNzRWxlbWVudFNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbHRtZXRyaWNzY3JpcHRzKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coJ0xvYWRpbmcgYWx0bWV0cmljczogV2Uga3VubmVuIHN0YXJ0ZW4nKTtcclxuICAgICAgICAgICAgd2luZG93Ll9hbHRtZXRyaWNfZW1iZWRfaW5pdChhbHRtZXRyaWNzRWxlbWVudFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5BbHRtZXRyaWNzU2VydmljZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRjb21waWxlJywgJyRtZFRvYXN0JywgJyR0aW1lb3V0JywgJyR3aW5kb3cnXTtcclxuIiwiZXhwb3J0IGxldCBmZWVkU2VydmljZSA9IFsnJGh0dHAnLCBmdW5jdGlvbigkaHR0cCkge1xyXG4gIHZhciBmZWVkQW50aUNhY2hlID0gXCI/JnQ9XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHJhbmRvbU51bTtcclxuICB2YXIgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAgKyAxKTtcclxuICB2YXIgZmVlZGRheXNvbGQgPSA2MDtcclxuXHJcbiAgdmFyIGRtID0gbmV3IERhdGUoKTtcclxuICBkbS5zZXRIb3VycygyNCwgMCwgMCwgMCk7XHJcblxyXG4gIHZhciBhcGlfZW5kcG9pbnQgPSAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9mZWVkX2FnZ3JlZ2F0b3I/JztcclxuXHJcbiAgZnVuY3Rpb24gcmVhZEZlZWRDb25maWcodXJsKSB7XHJcbiAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiWC1Gcm9tLUV4TC1BUEktR2F0ZXdheVwiOiB1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWFkRmVlZCh1cmwpIHtcclxuICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgIHVybDogYXBpX2VuZHBvaW50ICsgdXJsLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLUZyb20tRXhMLUFQSS1HYXRld2F5XCI6IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhcnNlRmVlZChjb25mKSB7XHJcbiAgICByZXR1cm4gcmVhZEZlZWQoY29uZi5mZWVkVXJsKS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGNvbmYuZmVlZFVybCk7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29uZi5mZWVkRmlsdGVyKTtcclxuICAgICAgdmFyIHBhdHQgPSAvXmVudHJ5XFwufF5pdGVtXFwuL2k7XHJcbiAgICAgIHZhciBmaWx0ZXJlZFJlc3VsdHMgPSByZXMuZGF0YS5pdGVtcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICB2YXIgcmV0dmFsID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGl0ZW0ucHViRGF0ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgaXRlbS5wdWJEYXRlID0gZG07XHJcbiAgICAgICAgICByZXMuZGF0YS5pdGVtc1tpbmRleF0ucHViRGF0ZSA9IGRtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBubyBmaWx0ZXIgY29uZmlndXJlZCAqL1xyXG4gICAgICAgIGlmIChjb25mLmZlZWRGaWx0ZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR2YWwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25mLmZlZWRGaWx0ZXIuZm9yRWFjaChmdW5jdGlvbihmKSB7XHJcbiAgICAgICAgICBpZiAocGF0dC50ZXN0KGYucGFyYW0pKSB7XHJcbiAgICAgICAgICAgIHZhciBmZiA9IGYucGFyYW0ucmVwbGFjZShwYXR0LCBcIlwiKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbVtmZl0pKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW1bZmZdLmluZGV4T2YoZi52YWx1ZSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtW2ZmXSA9PSBmLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR2YWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qIGZpbHRlciBvbGQgaXRlbXMgKi9cclxuICAgICAgICBpZiAoZmVlZGRheXNvbGQgPCBNYXRoLmNlaWwoZG0uZ2V0VGltZSgpIC0gbmV3IERhdGUoaXRlbS5wdWJEYXRlKS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSB7XHJcbiAgICAgICAgICByZXR2YWwgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXR2YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzb3J0RmVlZChmZWVkcykge1xyXG4gICAgLy9yZXR1cm4gZmVlZHMuc29ydChjb21wYXJlRGF0ZXMpO1xyXG4gICAgcmV0dXJuIGZlZWRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnB1YkRhdGUpO1xyXG4gICAgICB2YXIgZGF0ZUIgPSBuZXcgRGF0ZShiLnB1YkRhdGUpO1xyXG4gICAgICBpZiAoZGF0ZUEuZ2V0VGltZSgpID09PSBkbS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBkYXRlQSA9IG5ldyBEYXRlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRlQi5nZXRUaW1lKCkgPT09IGRtLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGRhdGVCID0gbmV3IERhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZWFkRmVlZENvbmZpZzogcmVhZEZlZWRDb25maWcsXHJcbiAgICByZWFkRmVlZDogcmVhZEZlZWQsXHJcbiAgICBwYXJzZUZlZWQ6IHBhcnNlRmVlZCxcclxuICAgIHNvcnRGZWVkOiBzb3J0RmVlZFxyXG4gIH07XHJcbn1dO1xyXG4iLCJpbXBvcnQgZmVlZGJhY2tTZXJ2aWNlSFRNTCBmcm9tICcuL2ZlZWRiYWNrU2VydmljZS5odG1sJ1xyXG5pbXBvcnQgRGlhbG9nQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYWwvZGlhbG9nJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWRiYWNrU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJG1kRGlhbG9nKSB7XHJcbiAgICB0aGlzLm1kRGlhbG9nID0gJG1kRGlhbG9nO1xyXG4gIH1cclxuXHJcbiAgc2hvdygkZXZlbnQgPSBudWxsLCBmZWVkYmFja0RpYWxvZ0hUTUwgPSBudWxsLCBmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPSBudWxsKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoZmVlZGJhY2tEaWFsb2dIVE1MID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgZGlhbG9nIGluc3RhbnRpYXRlZCcpO1xyXG4gICAgICBmZWVkYmFja0RpYWxvZ0hUTUwgPSBmZWVkYmFja1NlcnZpY2VIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBkaWFsb2cgY29udHJvbGxlciBpbnN0YW50aWF0ZWQnKTtcclxuICAgICAgZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyID0gRGlhbG9nQ29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1kRGlhbG9nLnNob3coe1xyXG4gICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcclxuICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgIHRlbXBsYXRlOiBmZWVkYmFja0RpYWxvZ0hUTUwsXHJcbiAgICAgIGNvbnRyb2xsZXI6IGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlclxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5GZWVkYmFja1NlcnZpY2UuJGluamVjdCA9IFsnJG1kRGlhbG9nJ107XHJcbiIsImltcG9ydCBtZXNzYWdlU2VydmljZUhUTUwgZnJvbSAnLi9tZXNzYWdlU2VydmljZS5odG1sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICRjb21waWxlLCAkbWRUb2FzdCwgJHNjZSwgJHRyYW5zbGF0ZSwgJHRpbWVvdXQpIHtcclxuICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgdGhpcy5zY2UgPSAkc2NlO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgdGhpcy50aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICB0aGlzLmNvbXBpbGUgPSAkY29tcGlsZTtcclxuICAgIHRoaXMucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuXHJcbiAgICAvLyB0aGlzLm1lc3NhZ2VTZXJ2aWNlRXZlbnRIYW5kbGVyID0gdGhpcy5yb290U2NvcGUuJG9uKCckdHJhbnNsYXRlTG9hZGluZ0VuZCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT0+IHRyYW5zbGF0aW9uIGxvYWRlZCA8PT09PT09PT09PVwiKTtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhtZXNzYWdlID0gJycsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IHNjb3BlID0gb3B0aW9ucy5zY29wZSB8fCBudWxsO1xyXG4gICAgbGV0IGhpZGVEZWxheSA9IG9wdGlvbnMuaGlkZURlbGF5IHx8IDA7XHJcbiAgICBsZXQgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24gfHwgbnVsbDtcclxuICAgIGxldCBhY3Rpb25MYWJlbCA9IG9wdGlvbnMuYWN0aW9uTGFiZWwgfHwgJ3Vua25vd24nO1xyXG4gICAgbGV0IG1lc3NhZ2VLZXkgPSAnbGJzLmdlbmVyYWxNZXNzYWdlJztcclxuXHJcbiAgICBzZWxmLnRyYW5zbGF0ZShtZXNzYWdlS2V5KS50aGVuKChtKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UgPSAobSA9PSBtZXNzYWdlS2V5IHx8IG0gPD0gMSkgPyAnJyA6IG07XHJcblxyXG4gICAgICBzZWxmLl9fc2hvdyh7XHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICBzY29wZTogc2NvcGUsXHJcbiAgICAgICAgaGlkZURlbGF5OiBoaWRlRGVsYXksXHJcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgYWN0aW9uTGFiZWw6IGFjdGlvbkxhYmVsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfX3Nob3cob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgc2NvcGUgPSBvcHRpb25zLnNjb3BlO1xyXG4gICAgbGV0IGhpZGVEZWxheSA9IG9wdGlvbnMuaGlkZURlbGF5O1xyXG4gICAgbGV0IGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uO1xyXG4gICAgbGV0IGFjdGlvbkxhYmVsID0gb3B0aW9ucy5hY3Rpb25MYWJlbDtcclxuICAgIGxldCBtZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlO1xyXG5cclxuICAgIC8vIGlmIChtZXNzYWdlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAvLyAgIC8vIGNvZGUgdGFibGUgZW50cmllcyBjYW4gbm90IGhhdmUgZW1wdHkgZGVzY3JpcHRpb25zLlxyXG4gICAgLy8gICAvLyBtZXNzYWdlIDw9IDEgd2lsbCBub3QgYmUgZGlzcGxheWVkISEhIVxyXG4gICAgLy8gICBsZXQgbWVzc2FnZUtleSA9ICdsYnMuZ2VuZXJhbE1lc3NhZ2UnO1xyXG4gICAgLy8gICBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudChtZXNzYWdlS2V5KTtcclxuICAgIC8vICAgbWVzc2FnZSA9IChtZXNzYWdlID09IG1lc3NhZ2VLZXkgfHwgbWVzc2FnZSA8PSAxKSA/ICcnIDogbWVzc2FnZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCB0b2FzdENvbmZpZyA9IHtcclxuICAgICAgICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLmFjdGlvbkxhYmVsID0gYWN0aW9uTGFiZWw7XHJcblxyXG4gICAgICAgICAgdGhpcy5vbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLm1kVG9hc3QuaGlkZSgpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25BY3Rpb24gPSAoJGV2ZW50ID0gbnVsbCkgPT4ge1xyXG4gICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgLy90aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChzZWxmLmNvbXBpbGUoYDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+YCkoc2VsZi5yb290U2NvcGUpLmh0bWwoKSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKHNlbGYuY29tcGlsZShgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKShzY29wZSkuaHRtbCgpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiBtZXNzYWdlU2VydmljZUhUTUwsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AgY2VudGVyJyxcclxuICAgICAgICBoaWRlRGVsYXk6IGhpZGVEZWxheVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLm1kVG9hc3Quc2hvdyh0b2FzdENvbmZpZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnTm8gbWVzc2FnZSB0byBkaXNwbGF5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuTWVzc2FnZVNlcnZpY2UuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckY29tcGlsZScsICckbWRUb2FzdCcsICckc2NlJywgJyR0cmFuc2xhdGUnLCAnJHRpbWVvdXQnXTtcclxuIiwiLypcclxuICBDZW50cmFsIFBhY2thZ2UgTG9hZGVyXHJcblxyXG4gIERvIE5PVCBlZGl0IHRoaXMgZmlsZS5cclxuICBBbGwgY29tcG9uZW50cyBhcmUgZGVjbGFyZWQgaW4gXCJjb21wb25lbnRzLmpzXCJcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuaW1wb3J0IFByaW1vIGZyb20gJy4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8nXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlL2hlbHBlcidcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzJ1xyXG5cclxuaW1wb3J0IHtmZWVkU2VydmljZX0gZnJvbSAnLi9mYWN0b3JpZXMvZmVlZFNlcnZpY2UnXHJcbmltcG9ydCBNZXNzYWdlU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9tZXNzYWdlU2VydmljZSdcclxuaW1wb3J0IEZlZWRiYWNrU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9mZWVkYmFja1NlcnZpY2UnXHJcbmltcG9ydCBBbHRtZXRyaWNzU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9hbHRtZXRyaWNzU2VydmljZSdcclxuXHJcbi8vbWFrZSBQcmltbyBwdWJsaWNcclxud2luZG93LlByaW1vID0gUHJpbW87XHJcbi8vbG9hZCBQcmltb0V4cGxvcmVyIFVJIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGlzIHJhblxyXG53aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKFByaW1vLmlzRGVidWdFbmFibGVkKCkpIHtcclxuICAgIGxldCB1aVVSTCA9ICdodHRwczovL2Nkbi5yYXdnaXQuY29tL21laG1ldGMvcHJpbW8tZXhwbG9yZS1kb20tdWkvZmMwODY4ZGYvanMvY3VzdG9tLmpzJztcclxuICAgIC8vbGV0IHVpVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9qcy9jdXN0b20uanMnO1xyXG5cclxuICAgIEhlbHBlci5sb2FkU2NyaXB0KHVpVVJMKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0luamVjdGluZyBVSScpO1xyXG4gICAgICBQcmltby5leHBsb3JlLnVpLnRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59LCAyMDAwKTtcclxuXHJcbi8vQ3JlYXRlIHRoZSBjZW50cmFsQ3VzdG9tIG1vZHVsZTtcclxuaWYgKHdpbmRvdy5hcHBDb25maWcudmlkID09ICdFQ0InKSB7XHJcbiAgd2luZG93LmJyb3d6aW5lID0ge1xyXG4gICAgYXBpOiBcImh0dHBzOi8vcHVibGljLWFwaS50aGlyZGlyb24uY29tL3B1YmxpYy92MS9saWJyYXJpZXMvMTYyNFwiLFxyXG4gICAgYXBpS2V5OiBcImU3MWQxYzMxLTc5MzgtNDcwYS04YmUyLWE2ZTM1MWUwYzAwMVwiLFxyXG4gICAgam91cm5hbEJyb3daaW5lV2ViTGlua1RleHQ6IFwiVmlldyBKb3VybmFsIENvbnRlbnRzXCIsXHJcbiAgICBhcnRpY2xlQnJvd1ppbmVXZWJMaW5rVGV4dDogXCJWaWV3IElzc3VlIENvbnRlbnRzXCIsXHJcbiAgICBhcnRpY2xlUERGRG93bmxvYWRMaW5rRW5hYmxlZDogdHJ1ZSxcclxuICAgIGFydGljbGVQREZEb3dubG9hZExpbmtUZXh0OiBcIkRvd25sb2FkIFBERlwiLFxyXG4gIH07XHJcbn1cclxuLy9sZXQgc2VydmljZXNIb3N0ID0gJ2h0dHA6Ly8xOTIuMTY4LjEwMC4xMDE6OTI5Mi8nO1xyXG5sZXQgc2VydmljZXNIb3N0ID0gJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvJztcclxuXHJcbmxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnY2VudHJhbEN1c3RvbScsIFsnbmdNYXRlcmlhbCcsICd2Y1JlY2FwdGNoYSddKVxyXG4gIC8qXHJcbiAgLy8uY29uc3RhbnQoJ3NlcnZpY2VzSG9zdCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlLycpXHJcbiAgICAuY29uc3RhbnQoJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRiYWNrJylcclxuICAgIC5jb25zdGFudCgncmVwb3J0QVByb2JsZW1VUkwnLCAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9yZXBvcnRfYV9wcm9ibGVtJylcclxuICAgIC5jb25zdGFudCgncmVxdWVzdEFDb3B5VVJMJywgJ2h0dHA6Ly8xOTIuMTY4LjEwMC4xMDE6OTI5Mi8vcmVxdWVzdF9hX2NvcHknKVxyXG4gICovXHJcbiAgLmNvbnN0YW50KCdmZWVkYmFja1NlcnZpY2VVUkwnLCBzZXJ2aWNlc0hvc3QgKyAnZmVlZGJhY2snKVxyXG4gIC5jb25zdGFudCgncmVwb3J0QVByb2JsZW1VUkwnLCBzZXJ2aWNlc0hvc3QgKyAncmVwb3J0X2FfcHJvYmxlbScpXHJcbiAgLmNvbnN0YW50KCdyZXF1ZXN0QUNvcHlVUkwnLCBzZXJ2aWNlc0hvc3QgKyAncmVxdWVzdF9hX2NvcHknKVxyXG5cclxuICAuY29uZmlnKCgkc2NlRGVsZWdhdGVQcm92aWRlcikgPT4ge1xyXG4gICAgJHNjZURlbGVnYXRlUHJvdmlkZXIucmVzb3VyY2VVcmxXaGl0ZWxpc3QoW1xyXG4gICAgICAnKionXHJcbiAgICBdKTtcclxuICB9KVxyXG4gIC5ydW4oKCR0ZW1wbGF0ZUNhY2hlLCAkcm9vdFNjb3BlKSA9PiB7XHJcbiAgICAvLyR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvZnVsbFZpZXcvZnVsbC12aWV3Lmh0bWwnLCBmdWxsVmlld0hUTUwpO1xyXG4gICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL2hvdGtleXMtanNAMi4wLjgvZGlzdC9ob3RrZXlzLm1pbi5qcycpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnaG90a2V5cy5qcyBsb2FkZWQnKTtcclxuICAgIH0pO1xyXG4gICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vZDFieGg4dWFzMW1udzcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL2VtYmVkLmpzPycgKyBEYXRlLm5vdygpKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2FsdG1lcmljcyBlbWJlZC5qcyBsb2FkZWQnKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHdpbmRvdy5hcHBDb25maWcudmlkID09ICdFQ0InKSB7XHJcbiAgICAgIEhlbHBlci5sb2FkU2NyaXB0KCdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vYnJvd3ppbmUtYWRhcHRlcnMvcHJpbW8vYnJvd3ppbmUtcHJpbW8tYWRhcHRlci5qcycpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdicm93emluZS1wcmltby1hZGFwdGVyLmpzIGxvYWRlZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KVxyXG4gIC5mYWN0b3J5KCdGZWVkU2VydmljZScsIGZlZWRTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCdBbHRtZXRyaWNzU2VydmljZScsIEFsdG1ldHJpY3NTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCdNZXNzYWdlU2VydmljZScsIE1lc3NhZ2VTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCdGZWVkYmFja1NlcnZpY2UnLCBGZWVkYmFja1NlcnZpY2UpXHJcbiAgLmZhY3RvcnkoJ2FwaUNhbGxJbnRlcmNlcHRvcicsIFsoKSA9PiB7XHJcbiAgICB2YXIgYXBpQ2FsbEludGVyY2VwdG9yID0ge1xyXG4gICAgICByZXNwb25zZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy9cIkFzc2Vzc2luZyBHb3NwZWwgUXVvdGF0aW9ucyBpbiBKdXN0aW4gTWFydHlyXCJcclxuICAgICAgICBsZXQgZml4RGlzcGxheURhdGEgPSBmdW5jdGlvbiAocG54RGF0YSkge1xyXG4gICAgICAgICAgaWYgKHBueERhdGEpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgIGlmIChwbnhEYXRhLmRpc3BsYXkgJiYgcG54RGF0YS5kaXNwbGF5LmNyZWF0b3IpIHtcclxuICAgICAgICAgICAgICAgIHBueERhdGEuZGlzcGxheS5jcmVhdG9yID0gcG54RGF0YS5kaXNwbGF5LmNyZWF0b3IubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcmVsYXRvciA9IGMubWF0Y2goL1xcKC4qP1xcKS9pKTtcclxuICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBjLnNwbGl0KC9cXCguKj9cXCkvaSkuam9pbihcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZWxhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYz1gJHtjfSAkJFEke2RhdGF9YDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKHBueERhdGEuZGlzcGxheSAmJiBwbnhEYXRhLmRpc3BsYXkuY29udHJpYnV0b3IpIHtcclxuICAgICAgICAgICAgICAgIHBueERhdGEuZGlzcGxheS5jb250cmlidXRvciA9IHBueERhdGEuZGlzcGxheS5jb250cmlidXRvci5tYXAoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCByZWxhdG9yID0gYy5tYXRjaCgvXFwoLio/XFwpL2kpO1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGMuc3BsaXQoL1xcKC4qP1xcKS9pKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjPWAke2N9ICQkUSR7ZGF0YX1gO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGF0YScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcG54RGF0YTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgvXlxcL3ByaW1vX2xpYnJhcnlcXC9saWJ3ZWJcXC93ZWJzZXJ2aWNlc1xcL3Jlc3RcXC9wcmltby1leHBsb3JlXFwvdjFcXC9wbnhzLy50ZXN0KHJlc3BvbnNlLmNvbmZpZy51cmwpKSB7XHJcbiAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoJ2RvY3MnKSkge1xyXG4gICAgICAgICAgICAgIGRhdGEuZG9jcy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZml4RGlzcGxheURhdGEocC5wbngpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcygncG54JykpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEucG54ID0gZml4RGlzcGxheURhdGEoZGF0YS5wbngpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL1JlbW92ZSBvcGVuIGFjY2VzcyBmcm9tIGZhY2V0c1xyXG4gICAgICAgICAgdHJ5IHsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcygnZmFjZXRzJykpIHsgICAgICAgIFxyXG4gICAgICAgICAgICAgIGRhdGFbXCJmYWNldHNcIl0gPSBkYXRhW1wiZmFjZXRzXCJdLm1hcChtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtLm5hbWUgPT0gXCJ0bGV2ZWxcIikge1xyXG4gICAgICAgICAgICAgICAgICBtLnZhbHVlcyA9IG0udmFsdWVzLmZpbHRlcih0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC52YWx1ZSAhPT0gJ29wZW5fYWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhJywgZS5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcGlDYWxsSW50ZXJjZXB0b3I7XHJcbiAgfV0pLmNvbmZpZyhbJyRodHRwUHJvdmlkZXInLCAoJGh0dHBQcm92aWRlcikgPT4ge1xyXG4gICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXBpQ2FsbEludGVyY2VwdG9yJyk7XHJcbiAgfV0pO1xyXG5cclxuXHJcblxyXG4vL0NvbnRhaW5zIHRoZSBhZnRlciBjb21wb25lbnQgc2VsZWN0b3JzIHRoYXQgd2lsbCBiZSBpbmplY3RlZFxyXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XHJcblxyXG4vL0NyZWF0ZSBhbGwgY29tcG9uZW50cyBhbmQgZGV0ZXJtaW5lIGluIHdoaWNoIGFmdGVyIGNvbXBvbmVudCB0aGVzZSBuZWVkIHRvIGJlXHJcbi8vaW5qZWN0ZWRcclxuY29uc29sZS5sb2coJ0xvYWRpbmcgY2VudHJhbEN1c3RvbSBjb21wb25lbnRzJyk7XHJcbkNvbXBvbmVudHMuYWxsLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbXBvbmVudC5uYW1lKVxyXG4gIGlmIChjb21wb25lbnQuZW5hYmxlZCkge1xyXG4gICAgaWYgKGNvbXBvbmVudC5hcHBlbmRUbykge1xyXG4gICAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcclxuICAgICAgLy9lbGVtZW50cy5wdXNoKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgZWxlbWVudHMucHVzaCh7XHJcbiAgICAgICAgJ25hbWUnOiBjb21wb25lbnQubmFtZSxcclxuICAgICAgICAnZW5hYmxlSW5WaWV3JzogY29tcG9uZW50LmVuYWJsZUluVmlld1xyXG4gICAgICB9KTtcclxuICAgICAgYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gPSBlbGVtZW50cztcclxuXHJcbiAgICB9XHJcbiAgICBhcHAuY29uc3RhbnQoJ2FmdGVyQ29tcG9uZW50cycsIGFmdGVyQ29tcG9uZW50cyk7XHJcbiAgICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLnRvQ2FtZWxDYXNlKCksIGNvbXBvbmVudC5jb25maWcpO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zb2xlLmxvZygnUmVwbGFjZSBUZW1wbGF0ZXMnKTtcclxuVGVtcGxhdGVzLmFsbC5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHRlbXBsYXRlLmlkKVxyXG4gIGFwcC5ydW4oKCR0ZW1wbGF0ZUNhY2hlKSA9PiB7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGUuaWQsIHRlbXBsYXRlLnRlbXBsYXRlKTtcclxuICB9KVxyXG59KVxyXG5cclxuLy9JbmplY3QgcGxhY2UgaG9sZGVycyBpbnRvIHRoZSBhZnRlciBjb21wb25lbnRzXHJcbk9iamVjdC5rZXlzKGFmdGVyQ29tcG9uZW50cykuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XHJcbiAgbGV0IHN1YkNvbXBvbmVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50XTtcclxuXHJcbiAgYXBwLmNvbXBvbmVudChjb21wb25lbnQudG9DYW1lbENhc2UoKSwge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IHN1YkNvbXBvbmVudHMubWFwKG0gPT4gYDwke20ubmFtZX0gcGFyZW50LWN0cmw9XCIkY3RybFwiPjwvJHttLm5hbWV9PmApLmpvaW4oXCJcIilcclxuICB9KTtcclxufSk7IiwiaW1wb3J0IEV4cGxvcmUgZnJvbSAnLi9wcmltby9leHBsb3JlJ1xyXG5pbXBvcnQgUmVjb3JkcyBmcm9tICcuL3ByaW1vL3JlY29yZHMnXHJcbmltcG9ydCBGYWNldHMgZnJvbSAnLi9wcmltby9mYWNldHMnXHJcbmltcG9ydCBWaWV3IGZyb20gJy4vcHJpbW8vdmlldydcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9wcmltby91c2VyJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vcHJpbW8vZXhwbG9yZS9oZWxwZXInXHJcblxyXG4vKipcclxuICogUHJpbW8gbWFpbiBlbnRyeSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbW8ge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybiB2ZXJzaW9uIGluZm9ybWF0aW9uXHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcclxuICAgIGxldCBfdmVyc2lvbiA9IFwiMC4wLjEwXCI7XHJcbiAgICByZXR1cm4gYExpYnJhcnk6JHtfdmVyc2lvbn0gLSBQcmltbzoke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fVmVyc2lvbl9OdW1iZXJ9OiR7d2luZG93LmFwcENvbmZpZ1snc3lzdGVtLWNvbmZpZ3VyYXRpb24nXS5Qcmltb19Ib3RGaXhfTnVtYmVyfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBoYXMgcmFuXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gSGVscGVyLmlzRGVidWdFbmFibGVkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaWQgdGhlIHNjcmlwdCByYW4gb24gYSBQcmltbyBzaXRlXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBzdGF0aWMgaXNQcmltb0F2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiBIZWxwZXIuaXNQcmltb0F2YWlsYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIHByb3h5IGNsYXNzXHJcbiAgICogQHJldHVybiB7RXhwbG9yZX1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGV4cGxvcmUoKSB7XHJcbiAgICByZXR1cm4gRXhwbG9yZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIHJlY29yZHNcclxuICAgKiBAcmV0dXJuIHtSZWNvcmRzfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgcmVjb3Jkcygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgUmVjb3Jkcyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cykpO1xyXG4gICAgfSlcclxuICAgIC8vcmV0dXJuIG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIGZhY2V0c1xyXG4gICAqIEByZXR1cm4ge0ZhY2V0c31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGZhY2V0cygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XHJcbiAgICB9KVxyXG4gICAgLy9yZXR1cm4gbmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHZpZXcgcmVsYXRlZCBtZXRhZGF0YVxyXG4gICAqIEByZXR1cm4ge1ZpZXd9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCB2aWV3KCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgVmlldygpKTtcclxuICAgIH0pXHJcbiAgICAvL3JldHVybiBuZXcgVmlldygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byB1c2VyIHJlbGF0ZWQgbWV0YWRhdGFcclxuICAgKiBAcmV0dXJuIHtVc2VyfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdXNlcigpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIEhlbHBlci51c2VyRGV0YWlsc0hUVFAoKS50aGVuKCh1c2VyRGV0YWlscyk9PntcclxuICAgICAgICBIZWxwZXIudXNlckZpbmVzSFRUUCgpLnRoZW4oKHVzZXJGaW5lcykgPT4ge1xyXG4gICAgICAgICAgSGVscGVyLnVzZXJMb2Fuc0hUVFAoKS50aGVuKCh1c2VyTG9hbnMpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKG5ldyBVc2VyKHtkZXRhaWxzOiB1c2VyRGV0YWlscywgZmluZXM6IHVzZXJGaW5lcywgbG9hbnM6IHVzZXJMb2Fuc30pKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuLy90aGlzIGlzIHByb3h5IGNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvcmUge1xyXG4gIHN0YXRpYyBnZXQgY29tcG9uZW50cygpIHtcclxuICAgIGxldCBjID0gbmV3IENvbXBvbmVudHMoKTtcclxuICAgIEhlbHBlci5jb21wb25lbnROYW1lcy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xyXG4gICAgICBjLmFkZChzZWxlY3Rvcik7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBjO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCB1aSgpIHtcclxuICAgIGlmICh0aGlzLl91aSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgaXMgYSBzdHViIGZ1bmN0aW9uIGNhbGwgXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIHRvIGFjdGl2YXRlIFVJJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fdWk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGhlbHBlcigpIHtcclxuICAgIHJldHVybiBIZWxwZXI7XHJcbiAgfVxyXG59XHJcbiIsInZhciBjc3NTZWxlY3RvckdlbmVyYXRvciA9IG5ldyhyZXF1aXJlKCcuLi8uLi92ZW5kb3IvY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcycpKS5Dc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXInXHJcblxyXG5jbGFzcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpe1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJsaW5rKCl7XHJcbiAgICBIZWxwZXIuYmxpbmsodGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgY3NzUGF0aCgpe1xyXG4gICAgcmV0dXJuIGNzc1NlbGVjdG9yR2VuZXJhdG9yLmdldFNlbGVjdG9yKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5sb2NhbE5hbWU7XHJcbiAgfVxyXG5cclxuICBzY29wZSgpe1xyXG4gICAgaWYgKEhlbHBlci5pc0RlYnVnRW5hYmxlZCgpKXtcclxuICAgICAgcmV0dXJuIGFuZ3VsYXIuZWxlbWVudCh0aGlzLmVsZW1lbnQpLnNjb3BlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgcnVuIFwiYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKClcIiBmaXJzdCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3RybCgpe1xyXG4gICAgbGV0IGMgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5jb250cm9sbGVyKHRoaXMubmFtZSk7XHJcbiAgICBpZiAoYykge1xyXG4gICAgICByZXR1cm4gYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2luZyBhbHRlcm5hdGl2ZSBtZXRob2QgdG8gZ2V0IGNvbnRyb2xsZXInKTtcclxuICAgICAgbGV0IHNjb3BlID0gdGhpcy5zY29wZSgpO1xyXG4gICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICBsZXQgc2NvcGVDaGlsZCA9IHNjb3BlLiQkY2hpbGRUYWlsO1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJyRjdHJsJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLiRjdHJsXHJcbiAgICAgICAgfSBlbHNlIGlmKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnY3RybCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZS5jdHJsXHJcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCckY3RybCcpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuJGN0cmw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCdjdHJsJykpe1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC5jdHJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vICRjdHJsIGRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudHMge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICB0aGlzLl9jb21wb25lbnRzID0ge307XHJcbiAgfVxyXG5cclxuICBhZGQoc2VsZWN0b3IpIHtcclxuICAgIGxldCBlbGVtZW50cyA9IEhlbHBlci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgIGxldCBlbGVtZW50c0FycmF5ID0gdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gfHwgW107XHJcblxyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgICAgZWxlbWVudHNBcnJheS5wdXNoKG5ldyBDb21wb25lbnQoZWxlbWVudCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gPSBlbGVtZW50c0FycmF5O1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50c0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0KHNlbGVjdG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIGtleXMoKXtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcclxuICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XHJcbiAgICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYW1lID09PSAnTkdfRU5BQkxFX0RFQlVHX0lORk8hJyB8fCB0eXBlb2YoYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1sb2dvJykpLnNjb3BlKCkpICE9ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1ByaW1vQXZhaWxhYmxlKCkge1xyXG4gICAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mKHdpbmRvdy5hbmd1bGFyKSkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJpbW8tZXhwbG9yZScpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBjb21wb25lbnROYW1lcygpIHtcclxuICAgICAgICBsZXQgdGFncyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSk7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudE5hbWVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGFnIG9mIHRhZ3MpIHtcclxuICAgICAgICAgICAgbGV0IHRhZ05hbWUgPSB0YWcubG9jYWxOYW1lO1xyXG4gICAgICAgICAgICBpZiAoL15wcm0tLy50ZXN0KHRhZ05hbWUpIHx8IC9ecHJpbW8tLy50ZXN0KHRhZ05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWVzLmluY2x1ZGVzKHRhZ05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZXMucHVzaCh0YWdOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50TmFtZXMgPSBjb21wb25lbnROYW1lcy5zb3J0KCkuZmlsdGVyKChlLCBpLCBhKSA9PiBpID09PSBhLmZpbmRJbmRleCgoZTIpID0+IGUgPT09IGUyKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudE5hbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbmplY3RvcigpIHtcclxuICAgICAgbGV0IGMgPSBQcmltby5leHBsb3JlLmNvbXBvbmVudHMuZ2V0KCdwcmltby1leHBsb3JlJyk7XHJcbiAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IHByaW1vRXhwbG9yZSA9IGFuZ3VsYXIuZWxlbWVudChjWzBdLmVsZW1lbnQpO1xyXG4gICAgICAgICAgbGV0IGluamVjdG9yICAgICA9IHByaW1vRXhwbG9yZS5pbmplY3RvcigpO1xyXG4gICAgICAgICAgaWYgKGluamVjdG9yKXtcclxuICAgICAgICAgICAgcmV0dXJuIGluamVjdG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGh0dHAoKSB7XHJcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcclxuICAgICAgaWYgKGluamVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGggPSBpbmplY3Rvci5nZXQoJyRodHRwJyk7XHJcbiAgICAgICAgaWYgKGgpIHtcclxuICAgICAgICAgIHJldHVybiBoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBsb2FkU2NyaXB0KHNjcmlwdFVSTCkge1xyXG4gICAgICBpZiAod2luZG93LmFuZ3VsYXIpIHtcclxuICAgICAgICAgIGxldCBhcHBJbmplY3RvciA9IGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsJ2FuZ3VsYXJMb2FkJ10pO1xyXG4gICAgICAgICAgaWYgKGFwcEluamVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGFuZ3VsYXJMb2FkID0gYXBwSW5qZWN0b3IuZ2V0KCdhbmd1bGFyTG9hZCcpO1xyXG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJMb2FkLmxvYWRTY3JpcHQoc2NyaXB0VVJMKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm9vdFNjb3BlKCkge1xyXG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XHJcbiAgICAgIGlmIChpbmplY3Rvcikge1xyXG4gICAgICAgICAgbGV0IHJvb3RTY29wZSAgICA9IGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgaWYgKHJvb3RTY29wZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9vdFNjb3BlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpIHtcclxuICAgICAgbGV0IHJvb3RTY29wZSA9IHRoaXMucm9vdFNjb3BlKCk7XHJcbiAgICAgIGlmIChyb290U2NvcGUpIHtcclxuICAgICAgICByZXR1cm4gcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqd3REYXRhKCkge1xyXG4gICAgICBsZXQgdVNNUyA9IHRoaXMudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xyXG4gICAgICBpZiAodVNNUykge1xyXG4gICAgICAgIGxldCBqd3REYXRhID0gdVNNUy5qd3RVdGlsU2VydmljZS5nZXREZWNvZGVkVG9rZW4oKSB8fCB7fTtcclxuICAgICAgICByZXR1cm4gand0RGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyRGV0YWlscygpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS4kbG9jYWxGb3JhZ2UuZ2V0SXRlbSgndXNlckRldGFpbHMnKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzSFRUUCgpIHtcclxuICAgICAgbGV0IHZpZXdDb2RlID0gdGhpcy5qd3REYXRhKCkudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoYC9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL3VzZXJzZXR0aW5ncz92aWQ9JHt2aWV3Q29kZX1gKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMuZGF0YSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckZpbmVzSFRUUCgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvZmluZXMnKS50aGVuKHVzZXJGaW5lcyA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJGaW5lcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbmVzID0gZGF0YS5kYXRhLmZpbmVzO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmaW5lcy5maW5lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gZmluZXMnKTtcclxuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJMb2Fuc0hUVFAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2xvYW5zJykudGhlbih1c2VyTG9hbnMgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyTG9hbnMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsb2FucyA9IGRhdGEuZGF0YS5sb2FucztcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobG9hbnMubG9hbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGxvYW5zJyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBibGluayhjb21wb25lbnQsIG51bWJlck9mQmxpbmtzID0gNCkge1xyXG4gICAgICAgIGxldCBpbnRlcnZhbElkID0gbnVsbDtcclxuICAgICAgICBsZXQgYm9yZGVyRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xyXG4gICAgICAgIGxldCBib3JkZXJTZWxlY3RvciA9IGNvbXBvbmVudC5lbGVtZW50LmNzc1BhdGggKyBpbmRleCArICdSZWN0JztcclxuXHJcbiAgICAgICAgbGV0IGNyZWF0ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UmVjdCA9IGNvbXBvbmVudC5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGJvcmRlclNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnRvcCA9IGVsZW1lbnRSZWN0LnRvcCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnRSZWN0LmhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLndpZHRoID0gZWxlbWVudFJlY3Qud2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudFJlY3QubGVmdCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvcmRlckVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJvcmRlclNlbGVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVtb3ZlQm9yZGVyRWxlbWVudCA9ICgpID0+IHtcclxuICAgICAgICAgIGlmIChib3JkZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGJvcmRlckVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmxpbmtCb3JkZXJFbGVtZW50ID0gKG51bWJlck9mQmxpbmtzID0gNCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkJsaW5rcyA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUJvcmRlckVsZW1lbnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICgobnVtYmVyT2ZCbGlua3MgJSAyKSA9PSAwKSA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkJsaW5rcy0tO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChibGlua0JvcmRlckVsZW1lbnQsIDEwMDAsIG51bWJlck9mQmxpbmtzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9yZGVyRWxlbWVudCA9IGNyZWF0ZUJvcmRlckVsZW1lbnQoKTtcclxuICAgICAgICBibGlua0JvcmRlckVsZW1lbnQobnVtYmVyT2ZCbGlua3MpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldHMge1xyXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50cykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZmFjZXRzKGNvbXBvbmVudHMpO1xyXG4gICAgfVxyXG4gICAgX2ZhY2V0cyhjb21wb25lbnRzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldC1hZnRlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCBmYWNldHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZmFjZXRzO1xyXG4gICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGZhY2V0cycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvcmRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zKGNvbXBvbmVudHMpO1xyXG4gICAgfVxyXG4gICAgX2l0ZW1zKGNvbXBvbmVudHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLXNlYXJjaC1yZXN1bHQtbGlzdC1hZnRlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmwoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3RybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5pdGVtbGlzdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJ0cnkgYWdhaW5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IHJlY29yZHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZGF0YTtcclxuICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBpdGVtcycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXIgPSBfc2tlbFVzZXIpIHtcclxuICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgIGxldCBqd3REYXRhID0gSGVscGVyLmp3dERhdGEoKTtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBqd3REYXRhLnVzZXIgfHwgJycsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZGV0YWlscy5lbWFpbCB8fCAnJyxcclxuICAgICAgICBuYW1lOiBqd3REYXRhLnVzZXJOYW1lIHx8ICdHdWVzdCcsXHJcbiAgICAgICAgZGlzcGxheV9uYW1lOiB1U21zLmdldFVzZXJOYW1lRm9yRGlzcGxheSgpLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46ICgpID0+IHVTbXMuZ2V0VXNlck5hbWUoKS5sZW5ndGggPiAwLFxyXG4gICAgICAgIGlzT25DYW1wdXM6ICgpID0+IGp3dERhdGEub25DYW1wdXMgPT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgZmluZXM6IHVzZXIuZmluZXMsXHJcbiAgICAgICAgbG9hbnM6IHVzZXIubG9hbnNcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBfc2tlbFVzZXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkZXRhaWxzOiB7fSxcclxuICAgICAgZmluZXM6IHt9LFxyXG4gICAgICBsb2Fuczoge31cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgbGV0IHVTbXMgPSBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xyXG4gICAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IGp3dERhdGEudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddLFxyXG4gICAgICAgIGluc3RpdHV0aW9uOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IGp3dERhdGEudmlld0luc3RpdHV0aW9uQ29kZSxcclxuICAgICAgICAgICAgbmFtZTogd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmluc3RpdHV0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnRlcmZhY2VMYW5ndWFnZTogdVNtcy5nZXRVc2VyTGFuZ3VhZ2UoKSB8fCB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW50ZXJmYWNlTGFuZ3VhZ2UsXHJcbiAgICAgICAgaXA6IHtcclxuICAgICAgICAgIGFkZHJlc3M6IGp3dERhdGEuaXBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIENzc1NlbGVjdG9yR2VuZXJhdG9yLCByb290LFxyXG4gICAgaW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xyXG5cclxuICBDc3NTZWxlY3RvckdlbmVyYXRvciA9IChmdW5jdGlvbigpIHtcclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5kZWZhdWx0X29wdGlvbnMgPSB7XHJcbiAgICAgIHNlbGVjdG9yczogWydpZCcsICdjbGFzcycsICd0YWcnLCAnbnRoY2hpbGQnXVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBDc3NTZWxlY3RvckdlbmVyYXRvcihvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcclxuICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vcHRpb25zID0ge307XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyh0aGlzLmRlZmF1bHRfb3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIGtleSwgcmVzdWx0cywgdmFsO1xyXG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHMgPSBbXTtcclxuICAgICAgZm9yIChrZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIHZhbCA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0X29wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMub3B0aW9uc1trZXldID0gdmFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuaXNFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gISEoKGVsZW1lbnQgIT0gbnVsbCA/IGVsZW1lbnQubm9kZVR5cGUgOiB2b2lkIDApID09PSAxKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFBhcmVudHMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBjdXJyZW50X2VsZW1lbnQsIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgIGlmICh0aGlzLmlzRWxlbWVudChlbGVtZW50KSkge1xyXG4gICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaXNFbGVtZW50KGN1cnJlbnRfZWxlbWVudCkpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRfZWxlbWVudCk7XHJcbiAgICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBjdXJyZW50X2VsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFRhZ1NlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZUl0ZW0oZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2FuaXRpemVJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICB2YXIgY2hhcmFjdGVycztcclxuICAgICAgY2hhcmFjdGVycyA9IChpdGVtLnNwbGl0KCcnKSkubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlcikge1xyXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09ICc6Jykge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgKCc6Jy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKSArIFwiIFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoL1sgIVwiIyQlJicoKSorLC5cXC87PD0+P0BcXFtcXFxcXFxdXmB7fH1+XS8udGVzdChjaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyBjaGFyYWN0ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBlc2NhcGUoY2hhcmFjdGVyKS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY2hhcmFjdGVycy5qb2luKCcnKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldElkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBpZCwgc2FuaXRpemVkX2lkO1xyXG4gICAgICBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICBpZiAoKGlkICE9IG51bGwpICYmIChpZCAhPT0gJycpICYmICEoL1xccy8uZXhlYyhpZCkpICYmICEoL15cXGQvLmV4ZWMoaWQpKSkge1xyXG4gICAgICAgIHNhbml0aXplZF9pZCA9IFwiI1wiICsgKHRoaXMuc2FuaXRpemVJdGVtKGlkKSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNhbml0aXplZF9pZCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gc2FuaXRpemVkX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENsYXNzU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgY2xhc3Nfc3RyaW5nLCBpdGVtLCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBjbGFzc19zdHJpbmcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKTtcclxuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXlxcc3xcXHMkL2csICcnKTtcclxuICAgICAgICBpZiAoY2xhc3Nfc3RyaW5nICE9PSAnJykge1xyXG4gICAgICAgICAgcmVzdWx0ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgaywgbGVuLCByZWYsIHJlc3VsdHM7XHJcbiAgICAgICAgICAgIHJlZiA9IGNsYXNzX3N0cmluZy5zcGxpdCgvXFxzKy8pO1xyXG4gICAgICAgICAgICByZXN1bHRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgICAgICAgIGl0ZW0gPSByZWZba107XHJcbiAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKFwiLlwiICsgKHRoaXMuc2FuaXRpemVJdGVtKGl0ZW0pKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgICB9KS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QXR0cmlidXRlU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgYXR0cmlidXRlLCBibGFja2xpc3QsIGssIGxlbiwgcmVmLCByZWYxLCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBibGFja2xpc3QgPSBbJ2lkJywgJ2NsYXNzJ107XHJcbiAgICAgIHJlZiA9IGVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgYXR0cmlidXRlID0gcmVmW2tdO1xyXG4gICAgICAgIGlmIChyZWYxID0gYXR0cmlidXRlLm5vZGVOYW1lLCBpbmRleE9mLmNhbGwoYmxhY2tsaXN0LCByZWYxKSA8IDApIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKFwiW1wiICsgYXR0cmlidXRlLm5vZGVOYW1lICsgXCI9XCIgKyBhdHRyaWJ1dGUubm9kZVZhbHVlICsgXCJdXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0TnRoQ2hpbGRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGNvdW50ZXIsIGssIGxlbiwgcGFyZW50X2VsZW1lbnQsIHNpYmxpbmcsIHNpYmxpbmdzO1xyXG4gICAgICBwYXJlbnRfZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgaWYgKHBhcmVudF9lbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICBzaWJsaW5ncyA9IHBhcmVudF9lbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgICAgICAgZm9yIChrID0gMCwgbGVuID0gc2libGluZ3MubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nc1trXTtcclxuICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudChzaWJsaW5nKSkge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiOm50aC1jaGlsZChcIiArIGNvdW50ZXIgKyBcIilcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICAgIHZhciBpc191bmlxdWUsIHJlc3VsdDtcclxuICAgICAgaXNfdW5pcXVlID0gZmFsc2U7XHJcbiAgICAgIGlmICgoc2VsZWN0b3IgIT0gbnVsbCkgJiYgc2VsZWN0b3IgIT09ICcnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxICYmIHJlc3VsdFswXSA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgaXNfdW5pcXVlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGlzX3VuaXF1ZTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEFsbFNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgIHQ6IG51bGwsXHJcbiAgICAgICAgaTogbnVsbCxcclxuICAgICAgICBjOiBudWxsLFxyXG4gICAgICAgIGE6IG51bGwsXHJcbiAgICAgICAgbjogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICd0YWcnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LnQgPSB0aGlzLmdldFRhZ1NlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2lkJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5pID0gdGhpcy5nZXRJZFNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2NsYXNzJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5jID0gdGhpcy5nZXRDbGFzc1NlbGVjdG9ycyhlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdhdHRyaWJ1dGUnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LmEgPSB0aGlzLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyhlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdudGhjaGlsZCcpID49IDApIHtcclxuICAgICAgICByZXN1bHQubiA9IHRoaXMuZ2V0TnRoQ2hpbGRTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFVuaXF1ZW5lc3MgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgICB2YXIgZm91bmRfZWxlbWVudHMsIHBhcmVudDtcclxuICAgICAgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICBmb3VuZF9lbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgcmV0dXJuIGZvdW5kX2VsZW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBmb3VuZF9lbGVtZW50c1swXSA9PT0gZWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihlbGVtZW50LCBpdGVtcywgdGFnKSB7XHJcbiAgICAgIHZhciBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHJlZiwgcmVmMTtcclxuICAgICAgcmVmID0gdGhpcy5nZXRDb21iaW5hdGlvbnMoaXRlbXMpO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBpdGVtID0gcmVmW2tdO1xyXG4gICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRhZyAhPSBudWxsKSB7XHJcbiAgICAgICAgcmVmMSA9IGl0ZW1zLm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGFnICsgaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGwgPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGwgPCBsZW4xOyBsKyspIHtcclxuICAgICAgICAgIGl0ZW0gPSByZWYxW2xdO1xyXG4gICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0VW5pcXVlU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBmb3VuZF9zZWxlY3RvciwgaywgbGVuLCByZWYsIHNlbGVjdG9yX3R5cGUsIHNlbGVjdG9ycztcclxuICAgICAgc2VsZWN0b3JzID0gdGhpcy5nZXRBbGxTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIHJlZiA9IHRoaXMub3B0aW9ucy5zZWxlY3RvcnM7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIHNlbGVjdG9yX3R5cGUgPSByZWZba107XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcl90eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdpZCc6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMuaSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAndGFnJzpcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBzZWxlY3RvcnMudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjbGFzcyc6XHJcbiAgICAgICAgICAgIGlmICgoc2VsZWN0b3JzLmMgIT0gbnVsbCkgJiYgc2VsZWN0b3JzLmMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmMsIHNlbGVjdG9ycy50KTtcclxuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZF9zZWxlY3RvcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdhdHRyaWJ1dGUnOlxyXG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5hICE9IG51bGwpICYmIHNlbGVjdG9ycy5hLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kX3NlbGVjdG9yID0gdGhpcy50ZXN0Q29tYmluYXRpb25zKGVsZW1lbnQsIHNlbGVjdG9ycy5hLCBzZWxlY3RvcnMudCk7XHJcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnbnRoY2hpbGQnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLm4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMubjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJyonO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0U2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBhbGxfc2VsZWN0b3JzLCBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHBhcmVudHMsIHJlc3VsdCwgc2VsZWN0b3IsIHNlbGVjdG9ycztcclxuICAgICAgYWxsX3NlbGVjdG9ycyA9IFtdO1xyXG4gICAgICBwYXJlbnRzID0gdGhpcy5nZXRQYXJlbnRzKGVsZW1lbnQpO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSBwYXJlbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgaXRlbSA9IHBhcmVudHNba107XHJcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLmdldFVuaXF1ZVNlbGVjdG9yKGl0ZW0pO1xyXG4gICAgICAgIGlmIChzZWxlY3RvciAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbGxfc2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RvcnMgPSBbXTtcclxuICAgICAgZm9yIChsID0gMCwgbGVuMSA9IGFsbF9zZWxlY3RvcnMubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XHJcbiAgICAgICAgaXRlbSA9IGFsbF9zZWxlY3RvcnNbbF07XHJcbiAgICAgICAgc2VsZWN0b3JzLnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLmpvaW4oJyA+ICcpO1xyXG4gICAgICAgIGlmICh0aGlzLnRlc3RTZWxlY3RvcihlbGVtZW50LCByZXN1bHQpKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XHJcbiAgICAgIHZhciBpLCBqLCBrLCBsLCByZWYsIHJlZjEsIHJlc3VsdDtcclxuICAgICAgaWYgKGl0ZW1zID09IG51bGwpIHtcclxuICAgICAgICBpdGVtcyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdCA9IFtbXV07XHJcbiAgICAgIGZvciAoaSA9IGsgPSAwLCByZWYgPSBpdGVtcy5sZW5ndGggLSAxOyAwIDw9IHJlZiA/IGsgPD0gcmVmIDogayA+PSByZWY7IGkgPSAwIDw9IHJlZiA/ICsrayA6IC0taykge1xyXG4gICAgICAgIGZvciAoaiA9IGwgPSAwLCByZWYxID0gcmVzdWx0Lmxlbmd0aCAtIDE7IDAgPD0gcmVmMSA/IGwgPD0gcmVmMSA6IGwgPj0gcmVmMTsgaiA9IDAgPD0gcmVmMSA/ICsrbCA6IC0tbCkge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2gocmVzdWx0W2pdLmNvbmNhdChpdGVtc1tpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXN1bHQuc2hpZnQoKTtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uam9pbignJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCA/IGRlZmluZS5hbWQgOiB2b2lkIDApIHtcclxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBDc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByb290ID0gdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cyAhPT0gbnVsbCA/IGV4cG9ydHMgOiB0aGlzO1xyXG4gICAgcm9vdC5Dc3NTZWxlY3RvckdlbmVyYXRvciA9IENzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG4gIH1cclxuXHJcbn0pLmNhbGwodGhpcyk7XHJcbiIsIi8qXHJcbiAgUmVwbGFjZSB0ZW1wbGF0ZXMuXHJcblxyXG4gIFJlcGxhY2UgdGhlIGRlZmF1bHQgcHJpbW8gdGVtcGxhdGVzIGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMy9wcmltby1leHBsb3JlL2xpYi90ZW1wbGF0ZXMuanNcclxuICB3aXRoIGN1c3RvbSB0ZW1wbGF0ZXNcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMThcclxuICBUb20gVmFubWVjaGVsZW5cclxuKi9cclxuaW1wb3J0ICcuL3V0aWxzJ1xyXG5cclxuLyogaW1wb3J0IHlvdXIgdGVtcGxhdGVzICovXHJcblxyXG5pbXBvcnQgY2hhbmdlTGFuZ1dpdGhvdXRVc2VyQXJlYUhUTUwgZnJvbSAnLi4vaHRtbC90ZW1wbGF0ZXMvY2hhbmdlLWxhbmctd2l0aG91dC11c2VyLWFyZWEuaHRtbCdcclxuaW1wb3J0IHBybUxvYW5CdWdGaXhIVE1MIGZyb20gJy4uL2h0bWwvdGVtcGxhdGVzL3BybS1sb2FuLWJ1Zy1maXguaHRtbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlcyB7XHJcbiAgICBzdGF0aWMgZ2V0IGFsbCgpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgaWQgPSB0ZW1wbGF0ZUlkIGluIHRoZSB0ZW1wbGF0ZUNhY2hlIFxyXG4gICAgICAgICAgdGVtcGxhdGUgPSB0aGUgaW1wb3J0ZWQgdGVtcGFsdGVcclxuICAgICAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcclxuICAgICAgICAgIGVuYWJsZUluVmlldyA9IHJlZ2V4IHRvIGRlZmluZSBpbiB3aGljaCB2aWV3cyB0aGUgdGVtcGxhdGUgaGFzIHRvIGJlIHJlcGxhY2VkLlxyXG4gICAgXHJcbiAgICAgICAgICBleC4ge2lkOiAnY29tcG9uZW50cy9zZWFyY2gvdG9wYmFyL3VzZXJBcmVhL3VzZXItYXJlYS5odG1sJywgdGVtcGxhdGU6IHVzZXJBcmVhSFRNTCwgZW5hYmxlZDogdHJ1ZSwgZW5hYmxlSW5WaWV3OiAnLionfVxyXG4gICAgICAgICAgcmVzdWx0cyBpbjpcclxuICAgICAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC90b3BiYXIvdXNlckFyZWEvdXNlci1hcmVhLmh0bWwnLHVzZXJBcmVhSFRNTCk7XHJcbiAgICAgICAgKi9cclxuICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgICAgICAgIGlkOiAnY29tcG9uZW50cy9zZWFyY2gvdG9wYmFyL3VzZXJBcmVhL3VzZXItYXJlYS5odG1sJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBjaGFuZ2VMYW5nV2l0aG91dFVzZXJBcmVhSFRNTCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVJblZpZXc6ICdWRElDJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbXBvbmVudHMvYWNjb3VudC9sb2Fucy9sb2FuLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHBybUxvYW5CdWdGaXhIVE1MLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXS5maWx0ZXIoKHRlbXBsYXRlKSA9PiAodGVtcGxhdGUuZW5hYmxlZCAmJiBuZXcgUmVnRXhwKHRlbXBsYXRlLmVuYWJsZUluVmlldykudGVzdCh3aW5kb3cuYXBwQ29uZmlnLnZpZCkpKTtcclxuICAgIH1cclxufSIsIi8qXHJcbiAgR2VuZXJhbCBcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuU3RyaW5nLnByb3RvdHlwZS50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5zcGxpdCgnLScpLm1hcCgoZCwgaSwgYSkgPT4gaSA+IDAgPyBkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZC5zbGljZSgxKSA6IGQpLmpvaW4oJycpO1xyXG59XHJcblxyXG4vKlxyXG5hbmd1bGFyLmVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3RDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICByZXR1cm4gKGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAoZWxlbWVudFswXS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY2xvc2VzdChlbGVtZW50LnBhcmVudCgpLCBjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH0pKHRoaXMsIGNsYXNzTmFtZSk7XHJcbn07XHJcblxyXG5hbmd1bGFyLmVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3ROb2RlID0gZnVuY3Rpb24gKG5vZGVOYW1lKSB7XHJcbiAgcmV0dXJuIChmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIG5vZGVOYW1lKSB7XHJcbiAgICBpZiAoZWxlbWVudFswXS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50WzBdLm5vZGVOYW1lID09IG5vZGVOYW1lLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY2xvc2VzdChlbGVtZW50LnBhcmVudCgpLCBub2RlTmFtZSk7XHJcbiAgICB9XHJcbiAgfSkodGhpcywgbm9kZU5hbWUpO1xyXG59O1xyXG4qLyJdfQ==
