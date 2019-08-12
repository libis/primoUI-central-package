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

var _exploreSearchCollections = require('./components/prmCollectionGalleryHeaderAfter/exploreSearchCollections');

var _betaSwitch = require('./components/prmLogoAfter/betaSwitch');

var _sourceIcon = require('./components/prmBriefResultAfter/sourceIcon');

var _altmetric = require('./components/prmBriefResultAfter/altmetric');

var _altmetricsBadge = require('./components/prmFullViewAfter/altmetricsBadge');

var _pnxXml = require('./components/prmSearchResultThumbnailContainerAfter/pnxXml');

var _payMyFines = require('./components/prmFinesOverviewAfter/payMyFines');

var _feedback = require('./components/prmMainMenuAfter/feedback');

var _searchTip = require('./components/general/searchTip');

var _disclaimer = require('./components/general/disclaimer');

var _exposeJwt = require('./components/general/exposeJwt');

var _ConfigLanguageSelection = require('./components/general/ConfigLanguageSelection');

var _reportAProblem = require('./components/prmServiceHeaderAfter/reportAProblem');

var _requestACopy = require('./components/prmServiceHeaderAfter/requestACopy');

var _requestACopyOfEsDoc = require('./components/prmServiceHeaderAfter/requestACopyOfEsDoc');

var _finesMessage = require('./components/prmTopBarBefore/finesMessage');

var _announcements = require('./components/prmTopBarBefore/announcements');

var _autoPromoteLogin = require('./components/prmAutoPromoteLogin/autoPromoteLogin');

var _feedbackAnnouncement = require('./components/prmTopBarBefore/feedbackAnnouncement');

var _staticFooter = require('./components/general/staticFooter');

var _removeAlerts = require('./components/general/removeAlerts');

var _removeCheckLocations = require('./components/general/removeCheckLocations');

var _illRequestForm = require('./components/prmRequestsAfter/illRequestForm');

var _recommendationItem = require('./components/prmRecommendationItemAfter/recommendationItem');

var _databaseLink = require('./components/general/databaseLink');

var _searchAlso = require('./components/prmFacetAfter/searchAlso');

var _searchAlsoBody = require('./components/prmFacetExactAfter/searchAlsoBody');

var _searchAlsoBodyBib = require('./components/prmFacetExactAfter/searchAlsoBodyBib');

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
                  { name: 'request-a-copy', config: _requestACopy.requestACopyConfig, enabled: true, appendTo: 'prm-full-view-service-container-after', enableInView: '^Lirias' }, { name: 'request-a-copy-es-doc', config: _requestACopyOfEsDoc.requestACopyOfEsDocConfig, enabled: true, appendTo: 'prm-full-view-service-container-after', enableInView: '^VLP' }, { name: 'user-jwt', config: _exposeJwt.exposeJwtConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^VLP|^ECB' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'prm-disclaimer', config: _disclaimer.disclaimerConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'static-footer', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-explore-footer-after', enableInView: '.*' },
                  //{name: 'static-footer-account', config: staticFooterConfig, enabled: true, appendTo: 'prm-account-after', enableInView: '.*'},
                  { name: 'remove-alerts', config: _removeAlerts.removeAlertsConfig, enabled: false, appendTo: 'prm-add-query-to-saved-searches-after', enableInView: '.*' }, { name: 'remove-check-locations', config: _removeCheckLocations.removeCheckLocationsConfig, enabled: false, appendTo: 'prm-search-result-availability-line-after', enableInView: 'Lirias' }, { name: 'prm-dblink', config: _databaseLink.databaseLinkConfig, enabled: false, appendTo: null, enableInView: '.*' },

                  /* lbs-components used in html-templates of the package */
                  { name: 'auto-login-static-footer', config: _autoPromoteLogin.autoLoginCheckboxConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView: '^KULeuven$' }, { name: 'promote-login', config: _autoPromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'prm-authentication-after', enableInView: '^KULeuven$' }, { name: 'auto-login', config: _autoPromoteLogin.autoLoginConfig, enabled: true, appendTo: 'prm-authentication-after', enableInView: 'KULeuven_LUCA|KULeuven_ODISEE|KULeuven_TMOREK|KULeuven_TMOREM|KULeuven_UCLL' }, { name: 'ill-request-form-overview', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-overview-after', enableInView: '.*' }, { name: 'ill-request-form', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-after', enableInView: '^KULeuven|^VIVES' }, { name: 'announcement-feedback', config: _feedbackAnnouncement.feedbackAnnouncementConfig, enabled: false, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'override-getlink-recommendation', config: _recommendationItem.recommendationItemConfig, enabled: true, appendTo: 'prm-recomendation-item-after', enableInView: '.*' }, { name: 'announcement', config: _announcements.announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'pay-my-fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven' },
                  //  {name: 'remove-open-access', config: removeOpenAccessConfig, enabled: false, appendTo: 'prm-facet-after', enableInView: '.*'},
                  { name: 'search-also', config: _searchAlso.searchAlsoConfig, enabled: true, appendTo: 'prm-facet-after', enableInView: '^KULeuven|^VIVES_KATHO' }, { name: 'search-also-body', config: _searchAlsoBody.searchAlsoBodyConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^KULeuven' }, { name: 'search-also-body-bib', config: _searchAlsoBodyBib.searchAlsoBodyBibConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^VIVES_KATHO' }, { name: 'browzine', config: _browzine.browzineConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '^KULeuven|^ECB' }, { name: 'search-collections', config: _exploreSearchCollections.searchCollectionsConfig, enabled: true, appendTo: 'prm-collection-gallery-header-after', enableInView: '^KULeuven' }].filter(function (component) {
                        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
                  });
            }
      }]);

      return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/ConfigLanguageSelection":2,"./components/general/databaseLink":3,"./components/general/disclaimer":5,"./components/general/experiment":6,"./components/general/exposeJwt":7,"./components/general/removeAlerts":8,"./components/general/removeCheckLocations":9,"./components/general/searchTip":10,"./components/general/staticFooter":11,"./components/prmAutoPromoteLogin/autoPromoteLogin":12,"./components/prmBriefResultAfter/altmetric":13,"./components/prmBriefResultAfter/sourceIcon":14,"./components/prmCollectionGalleryHeaderAfter/exploreSearchCollections":15,"./components/prmFacetAfter/searchAlso":16,"./components/prmFacetExactAfter/searchAlsoBody":17,"./components/prmFacetExactAfter/searchAlsoBodyBib":18,"./components/prmFinesOverviewAfter/payMyFines":19,"./components/prmFullViewAfter/altmetricsBadge":20,"./components/prmLogoAfter/betaSwitch":21,"./components/prmLogoAfter/homeIcon":22,"./components/prmLogoAfter/languageDependentLogo":23,"./components/prmLogoAfter/newSearchButton":24,"./components/prmLogoAfter/viewLogo":25,"./components/prmMainMenuAfter/feedback":26,"./components/prmRecommendationItemAfter/recommendationItem":27,"./components/prmRequestsAfter/illRequestForm":28,"./components/prmSearchResultAvailabilityLineAfterController/browzine":29,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":30,"./components/prmServiceHeaderAfter/reportAProblem":31,"./components/prmServiceHeaderAfter/requestACopy":32,"./components/prmServiceHeaderAfter/requestACopyOfEsDoc":33,"./components/prmTopBarBefore/announcements":34,"./components/prmTopBarBefore/feedbackAnnouncement":35,"./components/prmTopBarBefore/finesMessage":37,"./utils":56}],2:[function(require,module,exports){
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

var exposeJwtController = function exposeJwtController(WindowEventListener) {
    _classCallCheck(this, exposeJwtController);

    var self = this;
    self.WindowEventListener = WindowEventListener;
};

exposeJwtController.$inject = ['WindowEventListener'];

var exposeJwtConfig = exports.exposeJwtConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: exposeJwtController,
    template: ''
};

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RemoveCheckLocationsController = function RemoveCheckLocationsController($scope, $http, $element, $templateCache) {
    _classCallCheck(this, RemoveCheckLocationsController);

    var displayedAvailability = $scope.$ctrl.parentCtrl.parentCtrl.displayedAvailability;
    if (displayedAvailability.indexOf("fulltext_unknown") > -1 || displayedAvailability.indexOf("may_be_restricted") > -1) {
        // console.log ( $scope.$parent.$parent.$parent.$ctrl.delivery )
        angular.forEach($scope.$ctrl.parentCtrl.parentCtrl.$element, function (el) {
            console.log(el);
            if (el.localName == 'prm-search-result-availability-line') {
                el.remove();
            }
        });
    }
};

RemoveCheckLocationsController.$inject = ['$scope', '$http', '$element', '$templateCache'];

var removeCheckLocationsConfig = exports.removeCheckLocationsConfig = {
    bindings: { parentCtrl: '<' },
    controller: RemoveCheckLocationsController
};

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchTipHTML = '<a aria-label="{{title_label}}" title="{{title_label}}" ng-click="showSearchTips()">\r\n  <span class ="md-headline" id="ContentSearchTips">\r\n    {{title}}\r\n  </span>\r\n</a>\r\n';
var tip_enUS_HTML = '<md-dialog aria-label="Search tips">\r\n    <md-dialog-content id="searchtips">\r\n\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Search tips</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                        <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n\r\n        <md-content>\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        Limo assumes that you are searching for all of the words unless you type OR or NOT between words and phrases.\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        For phrases use quotes: "global warming"\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        For truncated searches use an asterisk: gun* will retrieve gun, guns, gunners, gunnery, gunning, etc.\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        As a wildcard for one character, use ?:  wom?n will retrieve woman and women.\r\n                    </div>\r\n                </md-list-item>\r\n\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        To exclude a term use NOT (in uppercase): celtic NOT Irish\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        To group terms use brackets: Shakespeare (tragedy OR sonnet). OR is in uppercase\r\n                   </div>\r\n                </md-list-item>\r\n            </md-list>\r\n<!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                        For users of Internet Explorer:<br/>\r\n                        Limo should be viewed with version 9 or higher.<br />\r\n                        If you have an earlier version, it is a good idea to upgrade your browser. <br />\r\n                    </div>\r\n                </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button class="md-primary" ng-click="closeDialog()">\r\n                        Close\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';
var tip_frFR_HTML = '<md-dialog aria-label="Zoektips">\r\n    <md-dialog-content id="searchtips">\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Trucs & astuces</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                        <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-content>\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Limo suppose que vous recherchez tous les mots, sauf si vous tapez OR ou NOT entre des mots et des phrases.\r\n                        </div>\r\n                    </md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        utilisez des guillemets pour les phrases/expressions exactes: "r\xE9chauffement global"\r\n                    </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez un ast\xE9risque pour les recherches tronqu\xE9es: vin* donnera vinage, vinaigre, vinasse, vineux etc.\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez ? comme caract\xE8re de remplacement: fe?me donnera femme et ferme\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez NOT (en capitales) pour exclure un mot: celtique NOT irlandais\r\n                        </div>\r\n                    </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        utilisez des parenth\xE8ses pour grouper les termes: Shakespeare (trag\xE9die OR sonnet). OR est \xE9crit en capitales\r\n                    </div>\r\n                </md-list-item>\r\n            </md-list>\r\n            <!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                Pour les utilisateurs d\'Internet Explorer:<br/>\r\nIl est recommand\xE9 d\'utiliser la version 9 ou ult\xE9rieure.<br/>\r\nSi vous avez une version plus ancienne, il est conseill\xE9 de mettre \xE0 jour votre navigateur.<br/>\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button class="md-primary" ng-click="closeDialog()">\r\n                        Astuces\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';
var tip_nlBE_HTML = '<md-dialog aria-label="Zoektips">\r\n    <md-dialog-content id="searchtips">\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Zoektips</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                        <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-content>\r\n            <md-list class="md-dense" flex>                \r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Limo zoekt op alle woorden die je ingeeft, tenzij je OR of NOT zet tussen de zoektermen.\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        Gebruik "" om te zoeken op exacte woordcombinatie: "global warming"\r\n                    </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik een * of ? om te zoeken op delen van woorden:\r\n                            <p style="padding-left:1em;">\r\n                                gun* vindt gun, guns, gunners, gunnery, gunning, enz.<br />\r\n                                wom?n vindt woman en women\r\n                            </p>\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik NOT (in hoofdletters) om een zoekterm uit te sluiten: celtic NOT Irish\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik haakjes om termen te groeperen: Shakespeare (tragedy OR sonnet). OR is in hoofletters\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n            <!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                        Voor gebruikers van Internet Explorer:<br />\r\n                        Limo wordt best bekeken via version 9 of hoger.<br />\r\n                        Gelieve uw browser te upgraden indien u over een lagere versie beschikt.<br />\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button class="md-primary" ng-click="closeDialog()">\r\n                        Sluiten\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';

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

},{}],11:[function(require,module,exports){
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

    var viewWithCustomFooter = ['Lirias', 'wereldwijzer', 'ECB', 'VDIC'];
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

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var autoLoginCheckboxHTML = "<md-checkbox tabindex=\"-1\" disabled=\"disabled\" class=\"has-small-text zero-margin ng-pristine ng-untouched ng-valid md-primoExplore-theme ng-not-empty md-checked\"\r\n  role=\"checkbox\" aria-checked=\"true\" aria-disabled=\"true\" aria-invalid=\"false\" type=\"checkbox\" ng-model=\"$ctrl.alwaysSigninCheckBox\"\r\n  ng-change=\"alwaysSigninChecked()\" ng-disabled=\"$ctrl.formMode == 'View'\">\r\n  <div class=\"layout-column\" layout=\"column\">\r\n    <span class=\"item-content\" translate=\"lbs.nui.mypref.automatic_login.alwaysSigninOption\"></span>\r\n  </div>\r\n</md-checkbox>";

var AutoLoginCheckboxController = function AutoLoginCheckboxController($scope) {
  _classCallCheck(this, AutoLoginCheckboxController);

  var self = this;
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
};

var PromoteLoginController = function PromoteLoginController($scope, $element, $mdDialog) {
  var _this = this;

  _classCallCheck(this, PromoteLoginController);

  var self = this;
  var parentCtrl = self.parentCtrl.parentCtrl;
  //console.log (self)
  var locale = parentCtrl.primolyticsService.userSessionManagerService.i18nService.getLanguage();

  parentCtrl.primolyticsService.userSessionManagerService.signInObservable.subscribe(function () {
    if (_this.parentCtrl.parentCtrl.isLoggedIn == true) {
      $mdDialog.hide();
    }
  });

  $scope.primoPromoteLogin = '';
  $scope.showSignInPopup = function () {
    var parentEl = angular.element(document.body);

    $mdDialog.show({
      parent: parentEl,
      templateUrl: 'custom/CENTRAL_PACKAGE/html/templates/promote_login_' + locale + '.html',
      locals: {
        primoPromoteLogin: $scope.primoPromoteLogin
      },
      controller: DialogController
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.loginDialog = function () {
      parentCtrl.loginService.handleLoginClick();
    };

    $scope.closeDialog = function () {
      $mdDialog.hide();
    };
    $scope.changePromoteOption = function () {
      if ($scope.primoPromoteLogin === 'neverSignin' || $scope.primoPromoteLogin === 'alwaysSignin') {
        localStorage.setItem('primoPromoteLogin', $scope.primoPromoteLogin);
      } else {
        localStorage.removeItem('primoPromoteLogin');
        //sessionStorage.setItem('primoPromoteLogin', $scope.primoPromoteLogin);
      }
    };
  }

  /* Ignore this in prm-login-alma-mashup, only if parent is prm-user-area*/
  if ($element.nativeElement.closest('prm-user-area')) {
    if (!parentCtrl.isLoggedIn) {
      if (localStorage['primoPromoteLogin'] === 'alwaysSignin') {
        /* Sreiderict to login */;
        parentCtrl.loginService.handleLoginClick();
      } else {
        if (!sessionStorage['primoPromoteLogin'] && !localStorage['primoPromoteLogin']) {
          $scope.showSignInPopup();
          sessionStorage.setItem('primoPromoteLogin', 'SignInPopup');
        }
      }
    }
  }
};

var AutoLoginController = function AutoLoginController($element) {
  _classCallCheck(this, AutoLoginController);

  var self = this;
  var parentCtrl = self.parentCtrl.parentCtrl;
  // Ignore this in prm-login-alma-mashup, only if parent is prm-user-area
  if ($element.nativeElement.closest('prm-user-area')) {
    if (!parentCtrl.isLoggedIn) {
      var auth = window.appConfig.authentication[0];
      var loginUrl = parentCtrl.loginService.loginUrl(auth['profile-name'], auth['authentication-system']);
      document.location.href = loginUrl.replace(/institution=([^&])*/, "institution=KUL");
    }
  }
};

var autoLoginCheckboxConfig = exports.autoLoginCheckboxConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: AutoLoginCheckboxController,
  template: autoLoginCheckboxHTML
};

var promoteLoginConfig = exports.promoteLoginConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: PromoteLoginController,
  template: ''
};

var autoLoginConfig = exports.autoLoginConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: AutoLoginController,
  template: ''
};

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchCollectionsHTML = '<a class="md-button md-primoExplore-theme md-ink-ripple" href="/primo-explore/search?search_scope=KULEUVEN_COLLECTIONS&vid=KULeuven&offset=0">\r\n  <span translate="lbs.nui.search.collections.button">Search Curated Collections</span></a>\r\n<!--<a ng-if="!$ctrl.isGalleryLobby" class="md-button md-primoExplore-theme md-ink-ripple" href="/primo-explore/search?query=title,contains,{{$ctrl.getCollection()}}&search_scope=KULEUVEN_COLLECTIONS&sortby=rank&vid=KULeuven&offset=0" title="Search {{$ctrl.getCollection()}}">Search this collection</a>\r\n<!-- &facet=local4,include,Corble%20fencing%20collection$$IKUL -->\r\n';

var SearchCollectionsController = function () {
  function SearchCollectionsController($scope) {
    _classCallCheck(this, SearchCollectionsController);

    var self = this;
    //might be needed after next release
    /*self.$scope = $scope;
    this.isGalleryLobby= this.parentCtrl.parentCtrl.isGalleryLobby;
    this.getCollection = this.getCollection;*/
  }

  _createClass(SearchCollectionsController, [{
    key: '$onInit',
    value: function $onInit() {}

    /*getCollection() {
      if(!this.isGalleryLobby && this.parentCtrl.parentCtrl.currentCollection != undefined){
        return this.parentCtrl.parentCtrl.currentCollection.name;
      }
    };*/

  }]);

  return SearchCollectionsController;
}();

SearchCollectionsController.$inject = ['$scope'];

var searchCollectionsConfig = exports.searchCollectionsConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: SearchCollectionsController,
  template: searchCollectionsHTML
};

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchAlsoBodyHTML = '<div ng-if="$ctrl.name === \'search_also\'" class="lbs-search-also">\r\n  <div ng-hide="$ctrl.parentCtrl.parentCtrl.facetGroup.facetGroupCollapsed">\r\n    <div class="section-content animate-max-height-variable">\r\n      <div class="md-chips md-chips-wrap">\r\n        <div ng-repeat="target in $ctrl.targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">\r\n          <div class="md-chip-content layout-row" role="button" tabindex="9">\r\n            <strong dir="auto" title="{{ target.name }}">\r\n              <a ng-href="{{ target.url + target.mapping($ctrl.search) }}" target="_blank"  title="{{ (target.tooltip | translate )}}">\r\n                <img ng-src="{{ target.img }}" width="22" height="22" style="vertical-align:middle;padding-right:2px;"> {{ target.name }}\r\n              </a>\r\n            </strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

var SearchAlsoBodyBibController = function () {
  function SearchAlsoBodyBibController($location) {
    _classCallCheck(this, SearchAlsoBodyBibController);

    this.location = $location;
    this.targets = this._targets();
  }

  _createClass(SearchAlsoBodyBibController, [{
    key: '_targets',
    value: function _targets() {
      return [{
        "name": "Bibliotheek.be",
        "url": "https://www.bibliotheek.be/catalogus?q=",
        "img": "/primo-explore/custom/CENTRAL_PACKAGE/img/bib_be.png",
        "tooltip": "lbs.nui.search_also.tooltip.deBib",
        mapping: function mapping(search) {
          var terms = search.split(",");
          return terms[2] || "";
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

  return SearchAlsoBodyBibController;
}();

SearchAlsoBodyBibController.$inject = ['$location'];

var searchAlsoBodyBibConfig = exports.searchAlsoBodyBibConfig = {
  bindings: { parentCtrl: '<' },
  controller: SearchAlsoBodyBibController,
  template: searchAlsoBodyHTML
};

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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
      }, function (error) {
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

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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
    if (message != 'http://www.libis.be/') {
      self.homePageLink = message;
    }
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
      }, function (error) {
        self.localeLibraryLogo;
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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
    var StatusShowRequestACopy = ['published'];

    if (/^nui\.getit\./.test(serviceTitleCode)) {
      var ShowRequestACopyType = recordData.pnx.facets.lfc16.filter(function (value) {
        return -1 !== TypesShowRequestACopy.indexOf(value);
      });
      var ShowRequestACopyStatus = recordData.pnx.facets.lfc12.filter(function (value) {
        return -1 !== StatusShowRequestACopy.indexOf(value);
      });

      if (!/^nui\.getit\.tab1_onl_norestrict/.test(serviceTitleCode) && ShowRequestACopyType.length > 0 && ShowRequestACopyStatus.length > 0) {

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
                        var message = self.$rootScope.$$childHead.$ctrl.$translate.instant('lbs.nui.request_a_copy.success') || 'Thank you the request had been send!';
                        MessageService.__show({
                          message: message,
                          scope: $scope,
                          hideDelay: 5000
                        });
                      }, function (response) {
                        var message = self.$rootScope.$$childHead.$ctrl.$translate.instant('lbs.nui.request_a_copy.fail') || 'Unable to submit the request.';
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

},{}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestACopyOfEsDocHTML = "  <md-button tabindex=\"0\" role=\"listitem\" tabindex=\"0\" ng-href=\"\"\r\n             class=\"zero-margin button-link md-button md-primoExplore-theme md-ink-ripple request-a-copy\"\r\n             layout=\"column\" layout-align=\"center center\" (click)=\"$ctrl.openUrlToILL($event)\"\r\n             aria-label=\"lbs.nui.details.request_a_copy\">\r\n      <span class=\"item-content\" ><i class=\"material-icons\">shopping_cart</i> Request a copy</span>\r\n            <md-tooltip md-direction=\"down\" md-delay=\"400\" class=\"multi-row-tooltip slide-tooltip-anim\">\r\n        <span class=\"item-description popover animate-popover\"\r\n              translate=\"lbs.nui.details.description.request_a_copy\"></span>\r\n       </md-tooltip>\r\n  </md-button>\r\n\r\n\r\n  <style>\r\n.md-button.request-a-copy{\r\n      /* background-color: blueviolet; */\r\n      width: fit-content;\r\n      color: #265f8d;\r\n      background-color: rgba(92, 146, 189, 0.1);\r\n}\r\n\r\n\r\n.md-button.button-link.request-a-copy:hover:not([disabled]) {\r\n      color: #fff;\r\n      background-color: #08a7eb;\r\n}\r\n\r\n  </style>";

var RequestACopyOfEsDocController = function () {
    function RequestACopyOfEsDocController($element, $compile, $scope, requestACopyOfEsDocURL, $window, WindowEventListener) {
        _classCallCheck(this, RequestACopyOfEsDocController);

        var self = this;
        self.$rootScope = self.parentCtrl.parentCtrl.$rootScope;
        self.WindowEventListener = WindowEventListener;
        // If you want to add the button to the title (like report a problem)
        //let serviceTitleCode = self.parentCtrl.parentCtrl.title
        //let appendButtonTo = $element.parent().parent().find('h4');

        var serviceTitleCode = self.parentCtrl.parentCtrl.service.title;
        var appendButtonTo = $element.parent();
        var recordData = self.currentRecord;

        /*
        let TypesShowRequestACopyOfEsDoc = ['chapter', 'journal-article', 'thesis-dissertation', 'conference', 'report', 'dataset', 'c-bookreview', 'media', 'software'];
        let StatusShowRequestACopyOfEsDoc = ['published'];
        */

        if (/^nui\.getit\./.test(serviceTitleCode)) {
            //console.log( self )
            //console.log($scope)
            var primoExploreJwt = self.$rootScope.$$childHead.$ctrl.jwtUtilService.storageUtil.sessionStorage.primoExploreJwt;
            // console.log(self.$rootScope.$$childHead.$ctrl.jwtUtilService.storageUtil.sessionStorage.primoExploreJwt)

            Primo.user.then(function (user) {
                self.user = user;
                /*
                self.onCampus = self.user.isOnCampus();
                self.isLoggedIn = self.user.isLoggedIn();
                self.display_name = self.user.display_name
                self.email = self.user.email
                */

                if (user.isOnCampus || user.isLoggedIn) {
                    // console.log(user)
                    /* #### Check for  <scopeArchiv_fulltext>restricted</scopeArchiv_fulltext> ### */
                    var pnx = recordData.pnx;
                    appendButtonTo.after($compile(requestACopyOfEsDocHTML)($scope));
                }

                self.openUrlToILL = function ($event) {
                    /*
                    http://services.libis.be/illform/32KUL_SERV?rft.genre=book&rft.advisor=&rft.au=&rft.aucorp=&rft.aufirst=&rft.aulast=&rft.contributor=&rft.creator=&rft.atitle=&rft.btitle=Wood&rft.jtitle=&rft.stitle=&rft.title=Wood&rft.series=&rft.degree=&rft.description=&rft.edition=&rft.identifier=&rft.eisbn=&rft.eissn=&rft.isbn=9780714873480&rft.issn=&rft.pages=&rft.part=&rft.epage=&rft.spage=&rft.ssn=&rft.tpages=&rft.year=&rft.month=&rft.day=&rft.volume=&rft.issue=&rft.date=&rft.place=&rft.pub=&rft.pubdate=2017&rft.pubday=&rft.publisher=&rft.pubyear=&locale=nl_BE
                    sid/primo.exlibrisgroup.com:primo3-Article-ESVLP_scopeArchiv&rft_val_fmt=info:ofi/fmt:kev:mtx:
                    */

                    var openurl = "";
                    if (pnx.display.type) {
                        openurl += "&rft.genre=" + encodeURI(pnx.display.type[0]);
                    }
                    if (pnx.display.type[0] === "article") {
                        if (pnx.display.title) {
                            openurl += "&rft.atitle=" + encodeURI(pnx.display.title[0]);
                        }
                        if (pnx.display.ispartof) {
                            openurl += "&rft.jtitle=" + encodeURI(pnx.display.ispartof[0]);
                        }
                    } else {
                        if (pnx.display.title) {
                            openurl += "&rft.btitle=" + encodeURI(pnx.display.title[0]);
                        }
                    }
                    if (pnx.display.title) {
                        openurl += "&rft.btitle=" + encodeURI(pnx.display.title[0]);
                    }
                    if (pnx.display.lds26) {
                        openurl += "&rft.au=" + encodeURI(pnx.display.lds26[0]);
                    }
                    if (pnx.display.creationdate) {
                        openurl += "&rft.date=" + encodeURI(pnx.display.creationdate[0]);
                    }

                    /*
                    &rft.pages=
                    &rft.artnum=
                    &rft.issn=
                    &rft.eissn=
                    &rft.isbn=
                    &rft.sici=
                    &rft.eisbn=
                    &rft.coden=
                    &rft_id=info:doi/
                    &rft.object_id=
                    */
                    if (pnx.control) {
                        openurl += "&rft_dat=%3C" + encodeURI(pnx.control.sourceid[0]) + "%3E" + encodeURI(pnx.control.sourcerecordid[0]) + "%3C/" + encodeURI(pnx.control.sourceid[0]) + "%3E";
                    }

                    openurl = requestACopyOfEsDocURL + "/32KUL_VLP?" + openurl + "&access_token=" + primoExploreJwt;
                    $window.open(openurl, '_blank');
                };
            });
        }
    }

    _createClass(RequestACopyOfEsDocController, [{
        key: "currentRecord",
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

    return RequestACopyOfEsDocController;
}();

RequestACopyOfEsDocController.$inject = ['$element', '$compile', '$scope', 'requestACopyOfEsDocURL', '$window', 'WindowEventListener'];

var requestACopyOfEsDocConfig = exports.requestACopyOfEsDocConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: RequestACopyOfEsDocController,
    template: ''
};

},{}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

},{"./feedbackAnnouncementDialog":36}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
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

},{}],38:[function(require,module,exports){
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

},{}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var apiCallInterceptor = exports.apiCallInterceptor = [function () {
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
                /*
                try {
                    if (Object.keys(data).includes('facets')) {
                        data["facets"] = data["facets"].map(m => {
                            if (m.name == "tlevel") {
                                m.values = m.values.filter(t => {
                                    return t.value !== 'open_access'
                                })
                            }
                            return m
                        })
                    }
                } catch (e) {
                    console.log('no data', e.message);
                }
                */
                _response.data = data;
            }

            return _response;
        }
    };
    return apiCallInterceptor;
}];

},{}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dbSearchHttpCallInterceptor = exports.dbSearchHttpCallInterceptor = [function () {
  var httpCallInterceptor = {
    request: function request(config) {
      if (config.url.includes('pnxs') && !config.url.includes('delivery') && config.params) {
        //console.log(config);
        if (config.params.databases) {
          config.params.inst = 'KUL';
          config.params.vid = 'KULeuven';
        }
        return config;
      }
      return config;
    }
  };
  return httpCallInterceptor;
}];

},{}],41:[function(require,module,exports){
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
    }).catch(function () {
      // handle errors
    });;
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

},{}],42:[function(require,module,exports){
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

},{"../components/general/dialog":4}],43:[function(require,module,exports){
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

      if (message.length > 0) {
        self.__show({
          message: message,
          scope: scope,
          hideDelay: hideDelay,
          action: action,
          actionLabel: actionLabel
        });
      }

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

},{}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WindowEventListener = function WindowEventListener($rootScope, $window) {
    _classCallCheck(this, WindowEventListener);

    $window.addEventListener("message", receiveMessage, false);

    // TODO : Maak config hash van origin en event_id =>

    function receiveMessage(event) {
        console.log("receiveMessage !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //            console.log( $rootScope.$$childHead.$ctrl)

        var primoExploreJwt = $rootScope.$$childHead.$ctrl.jwtUtilService.storageUtil.sessionStorage.primoExploreJwt;

        if (event.data.event_id === "retrieve_user") {
            if (event.origin !== "http://localhost:9292" && event.origin !== "https://services.libis.be/") return;
            Primo.user.then(function (user) {
                event.source.postMessage({
                    event_id: "retrieve_user",
                    "data": {
                        "onCampus": user.isOnCampus(),
                        "isLoggedIn": user.isLoggedIn(),
                        "ubid": user.id,
                        "display_name": user.display_name,
                        "email": user.email
                    }
                }, event.origin);
                event.source.postMessage({
                    event_id: "jwt",
                    "data": primoExploreJwt
                }, event.origin);
            });
        }
    }
};

exports.default = WindowEventListener;
;

WindowEventListener.$inject = ['$rootScope', '$window'];

},{}],45:[function(require,module,exports){
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

var _dbSearchHttpCallInterceptor = require('./factories/dbSearchHttpCallInterceptor');

var _apiCallInterceptor = require('./factories/apiCallInterceptor');

var _messageService = require('./factories/messageService');

var _messageService2 = _interopRequireDefault(_messageService);

var _feedbackService = require('./factories/feedbackService');

var _feedbackService2 = _interopRequireDefault(_feedbackService);

var _altmetricsService = require('./factories/altmetricsService');

var _altmetricsService2 = _interopRequireDefault(_altmetricsService);

var _windowEventListener = require('./factories/windowEventListener');

var _windowEventListener2 = _interopRequireDefault(_windowEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//make Primo public
window.Primo = _primo2.default;
//load PrimoExplorer UI if angular.reloadWithDebugInfo() is ran
/*
  Central Package Loader

  Do NOT edit this file.
  All components are declared in "components.js"

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
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

//let servicesHost = 'http://192.168.100.101:9292/';
var servicesHost = 'http://localhost:9292/';
//let servicesHost = 'https://services.libis.be/';


var app = angular.module('centralCustom', ['ngMaterial', 'vcRecaptcha'])
/*
//.constant('servicesHost', 'https://services.libis.be/')
  .constant('feedbackServiceURL', 'https://services.libis.be/feedback')
  .constant('reportAProblemURL', 'https://services.libis.be/report_a_problem')
  .constant('requestACopyURL', 'http://192.168.100.101:9292//request_a_copy')
*/
.constant('feedbackServiceURL', servicesHost + 'feedback').constant('reportAProblemURL', servicesHost + 'report_a_problem').constant('requestACopyURL', servicesHost + 'request_a_copy').constant('requestACopyOfEsDocURL', servicesHost + 'illform').config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
}).run(function ($templateCache, $rootScope) {
  //$templateCache.put('components/search/fullView/full-view.html', fullViewHTML);
  _helper2.default.loadScript('https://unpkg.com/hotkeys-js@2.0.8/dist/hotkeys.min.js').then(function () {
    console.log('hotkeys.js loaded');
  });
  _helper2.default.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {
    console.log('altmerics embed.js loaded');
  });
  if (window.appConfig.vid == 'ECB' || window.appConfig.vid.includes('KULeuven')) {
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

    if (window.appConfig.vid.includes('KULeuven')) {
      var locale = window.appConfig['primo-view']['attributes-map'].interfaceLanguage;
      var locale_text = {
        'nl_BE': {
          'journal': "Trial: Bekijk de inhoud van het tijdschrift",
          'issue': "Trial: Bekijk de inhoud van het nummer",
          'download': "Trial: Download PDF"
        },
        'en_US': {
          'journal': "In trial: View Journal Contents",
          'issue': "In trial: View Issue Contents",
          'download': "In trial: Download PDF"
        }
      };

      window.browzine = {
        api: "https://public-api.thirdiron.com/public/v1/libraries/1781",
        apiKey: "10ed5d2a-4ff0-4541-857d-b8c36a01f3ed",
        journalBrowZineWebLinkText: locale_text[locale]['journal'],
        articleBrowZineWebLinkText: locale_text[locale]['issue'],
        articlePDFDownloadLinkEnabled: true,
        articlePDFDownloadLinkText: locale_text[locale]['download']
      };
    }
    _helper2.default.loadScript('https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js').then(function () {
      console.log('browzine-primo-adapter.js loaded');
    });
  }
}).factory('FeedService', _feedService.feedService).service('AltmetricsService', _altmetricsService2.default).service('MessageService', _messageService2.default).service('FeedbackService', _feedbackService2.default).service('WindowEventListener', _windowEventListener2.default).factory('dbSearchHttpCallInterceptor', _dbSearchHttpCallInterceptor.dbSearchHttpCallInterceptor).factory('apiCallInterceptor', _apiCallInterceptor.apiCallInterceptor).config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('apiCallInterceptor');
}]);

//intercept api calls for database search and change to KUL (only regional views)
var reg_views = ["KULeuven_TMOREM", "KULeuven_TMOREK", "KULeuven_UCLL", "KULeuven_LUCA", "KULeuven_ODISEE"];
if (reg_views.includes(window.appConfig.vid)) {
  app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('dbSearchHttpCallInterceptor');
  }]);
}

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

},{"./components":1,"./factories/altmetricsService":38,"./factories/apiCallInterceptor":39,"./factories/dbSearchHttpCallInterceptor":40,"./factories/feedService":41,"./factories/feedbackService":42,"./factories/messageService":43,"./factories/windowEventListener":44,"./primo-explore-dom/js/primo":46,"./primo-explore-dom/js/primo/explore/helper":49,"./templates":55}],46:[function(require,module,exports){
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

},{"./primo/explore":47,"./primo/explore/helper":49,"./primo/facets":50,"./primo/records":51,"./primo/user":52,"./primo/view":53}],47:[function(require,module,exports){
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

},{"./explore/components":48,"./explore/helper":49}],48:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":54,"./helper":49}],49:[function(require,module,exports){
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

},{}],50:[function(require,module,exports){
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

},{"./explore/components":48,"./explore/helper":49}],51:[function(require,module,exports){
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

},{"./explore/components":48,"./explore/helper":49}],52:[function(require,module,exports){
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

},{"./explore/helper":49}],53:[function(require,module,exports){
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

},{"./explore/helper":49}],54:[function(require,module,exports){
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

},{}],55:[function(require,module,exports){
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
var prmLoanBugFixHTML = '<div class="md-list-item-text md-list-item-with-checkbox" layout="row" layout-wrap flex aria-live="assertive">\r\n    <md-checkbox ng-model="$ctrl.selectedIds[$ctrl.item.loanid]" aria-label="Checkbox {{$index}}" ng-change="$ctrl.toggleSelected($ctrl.item.loanid)"\r\n        ng-if="$ctrl.item[$ctrl.selector]"></md-checkbox>\r\n    <span class="item-index">{{$ctrl.index}}</span>\r\n    <div flex="40" flex-xs="100">\r\n        <div layout="row" class="title-row">\r\n            <h3 ng-if="::$ctrl.item.title" title="{{::$ctrl.item.title}}">\r\n                    {{::$ctrl.item.title}} \r\n                <span ng-if="!$ctrl.item[$ctrl.selector]">{{::$ctrl.item.title}}</span>\r\n            </h3>\r\n        </div>\r\n        <h4 ng-class="{\'loans-brief-display\':!$ctrl.isExpanded}">\r\n            <span translate="nui.loan.brief.1"></span> {{::($ctrl.item.getBriefDisplayLine(1))}}</h4>\r\n    </div>\r\n    <div flex="40" flex-xs="100" class="weak-text">\r\n        <div ng-if="::$ctrl.item.isActiveLoan()">\r\n            <p class="normal-text" ng-style="$ctrl.item.isDueAlert() && {\'color\':\'tomato\'}">\r\n                <prm-icon ng-if="::$ctrl.item.isDueAlert()" class="alert-red" icon-type="{{::$ctrl.accountIcons.timerIcon.type}}"\r\n                    svg-icon-set="{{::$ctrl.accountIcons.timerIcon.iconSet}}" icon-definition="{{::$ctrl.accountIcons.timerIcon.icon}}"></prm-icon>\r\n                <span translate="{{$ctrl.item.getCodeAlert()}}"></span>: {{($ctrl.item.getDateForBriefDisplay())}}.\r\n                <span ng-if="::($ctrl.item.isFine())">\r\n                    <span translate="nui.loan.fine"></span>: {{::$ctrl.item.fine}}</span>\r\n            </p>\r\n        </div>\r\n        <div ng-if="::(!$ctrl.item.isActiveLoan())">\r\n            <span translate="loans.return_date"></span> {{::($ctrl.item.getDateForBriefDisplay())}}</div>\r\n        <p class="normal-text" ng-class="{\'loans-brief-display\':!$ctrl.isExpanded}">\r\n            <span translate="nui.loan.brief.2"></span>{{::($ctrl.item.getBriefDisplayLine(2))}}</p>\r\n        <div ng-if="$ctrl.isExpanded">\r\n            <p ng-repeat="line in ::$ctrl.item.fullDisplayValues" class="normal-text">\r\n                <span translate="loans.{{::line.key}}"></span> {{::line.value}}</p>\r\n        </div>\r\n    </div>\r\n    <div layout-align="end center" layout="row" flex="20" flex-xs="100" ng-class="{\'not-clickable\': $ctrl.renewAllInProgress}"\r\n        class="list-item-actions">\r\n        <div ng-if="$ctrl.isRenewable && !$ctrl.isRenewed && !$ctrl.renewInProgress">\r\n            <md-button class="button-with-icon zero-margin button-link" (click)="$ctrl.renewLoan()" aria-label="{{\'nui.loans.renew\' | translate}}">\r\n                <prm-icon class="h-flipped" icon-type="{{::$ctrl.accountIcons.renewLoanIcon.type}}" svg-icon-set="{{::$ctrl.accountIcons.renewLoanIcon.iconSet}}"\r\n                    icon-definition="{{::$ctrl.accountIcons.renewLoanIcon.icon}}"></prm-icon>\r\n                <span translate="nui.loans.renew"></span>\r\n            </md-button>\r\n        </div>\r\n        <prm-spinner class="inline-loader half-transparent no-text" layout="row" layout-align="center center" ng-if="$ctrl.renewInProgress"></prm-spinner>\r\n        <div class="item-respond" ng-if="$ctrl.isRenewed">\r\n            <span ng-style="$ctrl.renewResponse.renewed === \'N\' && {\'color\':\'tomato\'} || $ctrl.renewResponse.renewed === \'Y\' && {\'color\':\'green\'}">\r\n                <span translate="{{$ctrl.renewResponse.response || \'loans.renewed.\' + $ctrl.renewResponse.renewed}}"></span>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="align-self-stretch" flex-xs="100">\r\n    <md-button class="item-expand-button" aria-label="{{\'nui.aria.account.requests.expandcollapse\' | translate:\'{title: $ctrl.item.title}\'}}"\r\n        (click)="$ctrl.toggleDisplayMode()">\r\n        <prm-icon ng-class="{\'rotate-180\':$ctrl.isExpanded}" icon-type="{{::$ctrl.accountIcons.expandIcon.type}}" svg-icon-set="{{::$ctrl.accountIcons.expandIcon.iconSet}}"\r\n            icon-definition="{{::$ctrl.accountIcons.expandIcon.icon}}"></prm-icon>\r\n    </md-button>\r\n    <div ng-init="messageAdded = \'open\' ;\\r\\n                      messageRemoved = \'close\' " class="accessible-only"\r\n        aria-label="{{$ctrl.isExpanded ? messageAdded : messageRemoved}}" aria-live="assertive">{{$ctrl.isExpanded ? messageAdded : messageRemoved}}</div>\r\n</div>\r\n<prm-loan-after parent-ctrl="$ctrl"></prm-loan-after>';
var prmRequestBugFixHTML = '<div ng-if="!$ctrl.isLoadingRequests" class="tab-content-header" layout="row" layout-xs="column"\r\n    layout-align="space-between end" layout-align-xs="start stretch">\r\n    <div layout="column">\r\n        <div class="header-title" layout="row">\r\n            <h2 class="zero-margin" layout="row" layout-align="start center"><span\r\n                    translate="nui.requests.header"></span></h2>\r\n        </div>\r\n        <div class="header-subtitle"><span class="items-count margin-right-small"><em translate="nui.requests.counter"\r\n                    translate-values="$ctrl.getRequestsCountPlaceHolder()"\r\n                    ng-if="!$ctrl.isDefinedAnySelector() && $ctrl.requestsCounter"></em>\r\n                <prm-account-links tab-name="requests"></prm-account-links>\r\n            </span></div>\r\n        <div ng-if="(!$ctrl.requestsCounter || $ctrl.requestsCounter === \'0\')" ng-cloak class="message-with-icon"\r\n            layout="row" layout-align="center center" layout-padding layout-margin>\r\n            <prm-icon class="giant-icon bg-icon" icon-type="{{$ctrl.accountIcons.sun.type}}"\r\n                svg-icon-set="{{$ctrl.accountIcons.sun.iconSet}}" icon-definition="{{$ctrl.accountIcons.sun.icon}}">\r\n            </prm-icon>\r\n            <div><span translate="nui.overview.norequests"></span></div>\r\n        </div>\r\n    </div>\r\n    <div class="tab-header-actions" layout="row" layout-align="end center" layout-align-xs="space-between center"\r\n        ng-if="$ctrl.requestsCounter">\r\n        <div layout="row" layout-align="start center">\r\n            <md-input-container class="static-select empty-select-on-init" layout="row"><label\r\n                    class="md-container-ignore bold-text"><span translate="nui.librarycard.sortby"></span></label>\r\n                <md-select id="requests-focus" ng-model="$ctrl.sortBy" ng-change="$ctrl.sortRequestsDisplay()"\r\n                    aria-label="{{::(\'nui.librarycard.sortby\' | translate)}}">\r\n                    <md-option ng-repeat="sortOption in ::$ctrl.sortOptions" value="{{::sortOption.fieldName}}"><span\r\n                            translate="{{::sortOption.optionName}}"></span></md-option>\r\n                </md-select>\r\n            </md-input-container>\r\n        </div>\r\n        <md-divider class="vertical-divider transparent-divider"></md-divider>\r\n        <md-button class="md-icon-button header-action expand-collapse-button" (click)="$ctrl.toggleAllExpand()"\r\n            aria-label="epand all request items button">\r\n            <md-tooltip md-autohide="true"><span ng-if="$ctrl.isAllExpanded"\r\n                    translate="nui.librarycard.collapseall.tooltip"></span><span ng-if="!$ctrl.isAllExpanded"\r\n                    translate="nui.librarycard.expandall.tooltip"></span></md-tooltip><span\r\n                ng-if="!$ctrl.isAllExpanded">\r\n                <prm-icon icon-type="{{::$ctrl.accountIcons.expandAllIcon.type}}"\r\n                    svg-icon-set="{{::$ctrl.accountIcons.expandAllIcon.iconSet}}"\r\n                    icon-definition="{{::$ctrl.accountIcons.expandAllIcon.icon}}"></prm-icon>\r\n            </span><span ng-if="$ctrl.isAllExpanded">\r\n                <prm-icon icon-type="{{::$ctrl.accountIcons.collapseAllIcon.type}}"\r\n                    svg-icon-set="{{::$ctrl.accountIcons.collapseAllIcon.iconSet}}"\r\n                    icon-definition="{{::$ctrl.accountIcons.collapseAllIcon.icon}}"></prm-icon>\r\n            </span>\r\n        </md-button>\r\n    </div>\r\n</div>\r\n<div ng-if="$ctrl.isDefinedAnySelector() && !$ctrl.isLoadingRequests" layout="row"\r\n    style="height: 40px; position: relative" layout-align="start center">\r\n    <div class="header-count" style="padding-left: 10px;"><span class="items-count margin-right-small" layout="column">\r\n            <md-checkbox aria-label="Checkbox {{$index}}" ng-checked="$ctrl.isSelectAll"\r\n                md-indeterminate="$ctrl.indeterminateState" ng-click="$ctrl.toggleAll()"><span\r\n                    translate="nui.requests.counter" translate-values="$ctrl.getRequestsCountPlaceHolder()"></span>\r\n            </md-checkbox>\r\n        </span></div><span flex></span>\r\n    <div layout="row">\r\n        <md-button class="md-icon-button unpin-button" aria-label="{{$ctrl.isChosenFav() | translate}}"\r\n            (click)="$ctrl.updateFavorites($event)">\r\n            <md-tooltip md-delay="400"><span translate="nui.favorites.pin.tooltip"></span></md-tooltip>\r\n            <prm-icon class="h-flipped-25-icon" ng-class="{\'disabledFavTool\':!$ctrl.showButtons()}"\r\n                icon-type="{{::$ctrl.favoritesIcons.pin.type}}" svg-icon-set="{{::$ctrl.favoritesIcons.pin.iconSet}}"\r\n                icon-definition="{{::$ctrl.favoritesIcons.pin.icon}}"></prm-icon>\r\n        </md-button>\r\n        <md-button class="md-icon-button has-bottom-arrow"\r\n            ng-class="$ctrl.showPushtoActions ? \'arrow-showing\' : \'\' " aria-label="{{$ctrl.isChosenActions()}}"\r\n            (click)="$ctrl.switchShowPushtoActions($event);$ctrl.closeOpenTabs($event);$event.stopPropagation()">\r\n            <md-tooltip md-delay="400"><span translate="nui.favorites.pushto.tooltip"></span></md-tooltip>\r\n            <prm-icon icon-type="{{::$ctrl.favoritesIcons.favoriteActionsList.type}}"\r\n                ng-class="{\'disabledFavTool\':!$ctrl.showButtons()}"\r\n                svg-icon-set="{{::$ctrl.favoritesIcons.favoriteActionsList.iconSet}}"\r\n                icon-definition="{{::$ctrl.favoritesIcons.favoriteActionsList.icon}}"></prm-icon>\r\n        </md-button>\r\n        <div class="account-actions-list">\r\n            <div class="action-list-content" ng-if="$ctrl.showPushtoActions">\r\n                <prm-action-list [display-all]="false" [item]="$ctrl.selectedItems()"\r\n                    [selected-ids]="$ctrl.selectedIdsArray" [display-close-icon]="true" flex style="margin: 8px"\r\n                    (close-modal)="$ctrl.switchShowPushtoActions()"></prm-action-list>\r\n                <div flex="0" flex-md="25" flex-lg="25" flex-xl="30"\r\n                    ng-class="{\'flex-lgPlus-30\': $ctrl.mediaQueries.lgPlus}"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<md-list class="separate-list-items gapped-list" layout="column">\r\n    <md-list-item tabindex="0" class="md-3-line has-expand in-element-dialog-parent"\r\n        ng-repeat="requestDisplay in $ctrl.requestsDisplay | limitTo:200" ng-hide="actionSuccessful"\r\n        ng-class="requestDisplay.isExpanded?\'item-expanded\':\'\'">\r\n        <div class="in-element-dialog-context" layout="row" flex>\r\n            <div class="md-list-item-text md-list-item-with-checkbox" layout="row" layout-wrap flex\r\n                aria-live="assertive">\r\n                <md-checkbox ng-model="$ctrl.selectedIds[requestDisplay[$ctrl.REQUEST_ID]]"\r\n                    aria-label="Checkbox {{$index}}" ng-change="$ctrl.toggleSelected(requestDisplay[$ctrl.REQUEST_ID])"\r\n                    ng-if="requestDisplay[$ctrl.REQUEST_ID_SELECTOR]"></md-checkbox><span\r\n                    class="item-index">{{$index + 1}}</span>\r\n                <div flex="40" flex-xs="100">\r\n                    <div layout="row" class="title-row">\r\n                        <h3 ng-if="::requestDisplay.firstLineLeft" title="{{::requestDisplay.firstLineLeft}}">\r\n                            <span>{{::requestDisplay.firstLineLeft}}</span>\r\n                        </h3>\r\n                        <prm-icon external-link icon-type="{{$ctrl.availabilityLineIcons.externalLink.type}}"\r\n                            svg-icon-set="{{$ctrl.availabilityLineIcons.externalLink.iconSet}}"\r\n                            icon-definition="{{$ctrl.availabilityLineIcons.externalLink.icon}}"></prm-icon>\r\n                    </div>\r\n                    <h4 ng-if="::requestDisplay.secondLineLeft"><span translate="nui.request.brief.1"></span>\r\n                        {{::requestDisplay.secondLineLeft}}</h4>\r\n                </div>\r\n                <div flex flex-xs="100" class="weak-text">\r\n                    <p class="bold-text" ng-if="::requestDisplay.firstLineRight"\r\n                        ng-style="::(request.new && {\'color\':\'#5cb85c\'})">\r\n                        <prm-icon ng-if="::requestDisplay.isAlert" style="color: #5cb85c;"\r\n                            icon-type="{{::$ctrl.accountIcons.requestsAlertIcon.type}}"\r\n                            svg-icon-set="{{::$ctrl.accountIcons.requestsAlertIcon.iconSet}}"\r\n                            icon-definition="{{::$ctrl.accountIcons.requestsAlertIcon.icon}}"></prm-icon><span\r\n                            class="text-uppercase"><span\r\n                                translate="{{::(\'request.\'+requestDisplay.requestType+\'.request_type\')}}"></span></span>.{{requestDisplay.firstLineRight}}\r\n                    </p>\r\n                    <p ng-if="::requestDisplay.secondLineRight"><span translate="nui.request.brief.2"></span>\r\n                        {{::requestDisplay.secondLineRight}}</p>\r\n                    <div ng-if="requestDisplay.isExpanded">\r\n                        <p ng-repeat="line in ::requestDisplay.expandedDisplay"><span\r\n                                ng-if="line.label != \'request_id\'"><span translate="{{::(line.label)}}"></span>\r\n                                {{::line.data}}</span></p>\r\n                    </div>\r\n                </div>\r\n                <div layout-align="end center" layout="row" layout-wrap flex-xs="100" flex-sm="30" flex\r\n                    class="list-item-actions">\r\n                    <md-button ng-if="::(requestDisplay.isCancelable)" class="button-with-icon zero-margin button-link"\r\n                        ng-hide="$ctrl.cancelPromptDisplayId === requestDisplay.requestId || $ctrl.failedRequestId === requestDisplay.requestId"\r\n                        ng-disabled="$ctrl.isInCancelAction"\r\n                        (click)="$ctrl.showCancelPrompt($event,requestDisplay.requestId, requestDisplay.requestType)"\r\n                        aria-label="cancel request button">\r\n                        <prm-icon class="h-flipped" icon-type="{{::$ctrl.accountIcons.removeIcon.type}}"\r\n                            svg-icon-set="{{::$ctrl.accountIcons.removeIcon.iconSet}}"\r\n                            icon-definition="{{::$ctrl.accountIcons.removeIcon.icon}}"></prm-icon><span\r\n                            translate="nui.requests.cancel"></span>\r\n                    </md-button>\r\n                    <div class="item-respond" ng-if="$ctrl.failedRequestId === requestDisplay.requestId"><span\r\n                            class="error-response">{{$ctrl.failedRequestMessage}}</span></div>\r\n                </div>\r\n            </div>\r\n            <div class="align-self-stretch">\r\n                <md-button class="item-expand-button"\r\n                    aria-label="{{::(\'nui.aria.account.requests.expandcollapse\' | translate)}}"\r\n                    (click)="requestDisplay.isExpanded = !requestDisplay.isExpanded">\r\n                    <prm-icon ng-class="{\'rotate-180\':requestDisplay.isExpanded}"\r\n                        icon-type="{{::$ctrl.accountIcons.expandIcon.type}}"\r\n                        svg-icon-set="{{::$ctrl.accountIcons.expandIcon.iconSet}}"\r\n                        icon-definition="{{::$ctrl.accountIcons.expandIcon.icon}}"></prm-icon>\r\n                </md-button>\r\n                <div ng-init="messageAdded = \'open\';\\r\\n                      messageRemoved = \'close\' "\r\n                    class="accessible-only" aria-label="{{requestDisplay.isExpanded ? messageAdded : messageRemoved}}"\r\n                    aria-live="assertive">{{requestDisplay.isExpanded ? messageAdded : messageRemoved}}</div>\r\n            </div>\r\n        </div>\r\n    </md-list-item>\r\n</md-list>\r\n<prm-spinner ng-if="(!$ctrl.requestsCounter || $ctrl.requestsCounter === \'0\') && $ctrl.isLoadingRequests"\r\n    class="half-transparent no-text bottom-loader" layout="row" layout-align="center end" layout-margin></prm-spinner>\r\n<prm-requests-after parent-ctrl="$ctrl"></prm-requests-after>';
var prmLiriasBriefResultContainerHTML = '<div ng-click="$ctrl.handleDetails($ctrl.item,$event, true)" class="list-item-primary-content result-item-primary-content" ng-class="::{\'has-checkbox\': $ctrl.isfavorites, \'new-result-item\' : ($ctrl.index && $ctrl.newMetalibItem())}"\r\n  data-recordid="{{::$ctrl.recordId}}" id="SEARCH_RESULT_RECORDID_{{::$ctrl.recordId}}" layout="row"><span class="list-item-count" ng-if="!$ctrl.isFullView"><span>{{$ctrl.index}}</span>\r\n    <md-tooltip ng-if="::($ctrl.index && $ctrl.newMetalibItem())"><span translate="brief.New_Result"></span></md-tooltip>\r\n  </span>\r\n  <md-checkbox ng-if="::$ctrl.isfavorites" flex="5" aria-label="{{::(\'nui.aria.brief.select\' | translate)}}{{::$ctrl.index}}" ng-click="$event.stopPropagation()" ng-model="$ctrl.isChosen"></md-checkbox>\r\n  <div class="result-item-image" layout="column" ng-if="!$ctrl.mediaQueries.xs && (!$ctrl.isDBSearch() || $ctrl.isFullView)">\r\n    <div class="media-content-images">\r\n      <div class="media-thumbnail"><a tabindex="-1" ng-click="$event.preventDefault()" ng-href="{{::$ctrl.getDeepLinkPath()}}" class="a-tag-as-wrapper" ng-style="$ctrl.isFullView && {\'cursor\': \'default\'}">\r\n          <prm-search-result-thumbnail-container class="media-content-images" ng-class="::{\'dedup-images-holder\' : $ctrl.isMultipleVersions() && !$ctrl.isFavoriteState()}" [item]="$ctrl.item" [links]="$ctrl.links" [frbr]="::$ctrl.isMultipleVersions()"\r\n            [is-frbr-generic]="::$ctrl.isFrbrGeneric()"></prm-search-result-thumbnail-container>\r\n        </a></div>\r\n    </div>\r\n  </div>\r\n  <div class="text-selector-spacer"></div>\r\n  <div class="result-item-text" layout="column" layout-fill flex>\r\n    <div class="media-content-type align-self-start">\r\n      <!--OLD LINE:<span ng-if="::$ctrl.showItemType && (!$ctrl.isDBSearch() || $ctrl.isFullView)" translate="{{::$ctrl.getResourceTypeForDisplay()}}"></span>-->\r\n      <!-- NEW LINE-->\r\n      <span ng-if="::$ctrl.showItemType && (!$ctrl.isDBSearch() || $ctrl.isFullView)" translate="{{::(\'lbs.nui.lirias.type.\'+$ctrl.item.pnx.display.lds03[0])}}"></span>\r\n      <!-- END NEW LINE-->\r\n      <span ng-if="::($ctrl.isPc() && !$ctrl.isfavorites && $ctrl.isMultipleVersions() && !$ctrl.isFavoriteForDisplayFrbr)">\r\n        <prm-search-result-frbr-line [result]="::$ctrl.item" [is-full-view]="::$ctrl.isFullView" [index]="::$ctrl.index"></prm-search-result-frbr-line>\r\n      </span></div>\r\n    <div ng-if="::(!$ctrl.isPc() && !$ctrl.isFrbrGeneric() && !$ctrl.isfavorites && $ctrl.isMultipleVersions() && !$ctrl.isFavoriteForDisplayFrbr)">\r\n      <prm-search-result-frbr-line [result]="::$ctrl.item" [is-full-view]="::$ctrl.isFullView" [index]="::$ctrl.index"></prm-search-result-frbr-line>\r\n    </div>\r\n    <prm-brief-result class="result-item-details" [item]="$ctrl.item" [resource-type-for-display]="::$ctrl.getResourceTypeForDisplay()" [deep-link]="::$ctrl.getDeepLinkPath()" [is-full-view]="::$ctrl.isFullView" [is-collection-discovery-collection]="::$ctrl.isCollectionDiscoveryCollection"\r\n      layout="column"></prm-brief-result>\r\n    <prm-snippet [record]="::$ctrl.item"></prm-snippet>\r\n    <prm-search-result-journal-indication-line ng-if="$ctrl.isSuprima" [item]="::$ctrl.item"></prm-search-result-journal-indication-line>\r\n    <div ng-if="$ctrl.isDBSearch()" class="item-detail" style="z-index:100">{{$ctrl.getDescription()}}</div>\r\n    <div ng-if="::(!$ctrl.isSuprima && ($ctrl.isPeerDocument || $ctrl.isOpenAccessDocument))" class="badges" layout="row" layout-align="start start">\r\n      <div class="peer-reviewed-mark" ng-if="::$ctrl.isPeerDocument">\r\n        <prm-icon class="peer-reviewed-mark-icon" icon-type="{{$ctrl.actionsIcons.peerreviewed.type}}" svg-icon-set="{{$ctrl.actionsIcons.peerreviewed.iconSet}}" icon-definition="{{$ctrl.actionsIcons.peerreviewed.icon}}"></prm-icon><span translate="fulldisplay.constants.peer_reviewed_icon">\r\n          <md-tooltip><span>{{\'fulldisplay.constants.peer_reviewed_tooltip\' | translate}}</span></md-tooltip>\r\n        </span>\r\n      </div>\r\n      <div class="open-access-mark" ng-if="::$ctrl.isOpenAccessDocument"><span class="icon-after-icon" ng-if="::$ctrl.isPeerDocument"></span>\r\n        <prm-icon class="open-access-mark-icon" icon-type="{{$ctrl.actionsIcons.openaccess.type}}" svg-icon-set="{{$ctrl.actionsIcons.openaccess.iconSet}}" icon-definition="{{$ctrl.actionsIcons.openaccess.icon}}"></prm-icon><span translate="fulldisplay.constants.open_access_icon">\r\n          <md-tooltip><span>{{\'fulldisplay.constants.open_access_tooltip\' | translate}}</span></md-tooltip>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class="search-result-availability-line-wrapper">\r\n      <prm-search-result-availability-line ng-if="($ctrl.delivery &&(!$ctrl.isGenericRecord() || $ctrl.isPc()))" tabindex="-1" [result]="::$ctrl.item" [is-full-view]="::$ctrl.isFullView" [is-overlay-full-view]="$ctrl.isOverlayFullView"\r\n        [collection-discovery-data]="::$ctrl.collectionDiscoveryData" ng-click="$event.stopPropagation()" (open-full-display-with-getit1)="$ctrl.handleDetails($ctrl.item, $event, false);"></prm-search-result-availability-line>\r\n    </div>\r\n    <prm-search-result-frbr-line [result]="::$ctrl.item" [is-full-view]="::$ctrl.isFullView" [index]="::$ctrl.index" ng-if="::($ctrl.isFrbrGeneric() && !$ctrl.isfavorites && $ctrl.isMultipleVersions() && !$ctrl.isPc() && !$ctrl.isFavoriteForDisplayFrbr)"></prm-search-result-frbr-line>\r\n    <prm-favorites-record-labels [item]="::$ctrl.item" ng-if="::$ctrl.isfavorites"></prm-favorites-record-labels>\r\n    <form ng-if="$ctrl.displayCTOButton()" class="request-form" ng-cloak action="{{$ctrl.ctoUrl()}}" method="post" target="_blank"><input type="hidden" name="doc" id="doc" value="{{$ctrl.getItme()}}" />\r\n      <md-button type="submit"><span>DISPLAY CTO</span></md-button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div ng-if="((!$ctrl.isGenericRecord() || $ctrl.isPc()) && $ctrl.showTimer)" class="result-item-actions" layout="row" ng-keydown="$ctrl.keyDownSupport($event)">\r\n  <prm-citation-trails-indication-container ng-if="::($ctrl.isShowCitationTrails() && !$ctrl.isFullView)" [record]="::$ctrl.item"></prm-citation-trails-indication-container>\r\n  <md-button ng-repeat="action in ::$ctrl.upFrontActions" aria-label="{{::(\'nui.aria.action.nameTitle\' | translate: $ctrl.getNameTitleParams([\'name\',\'title\'],action))}}" ng-if="::(!$ctrl.isFullView)" class="md-icon-button custom-button prm-primary"\r\n    data-custom-button="action" (click)="$ctrl.openTab($event, action)" hide-xs>\r\n    <md-tooltip md-delay="400"><span translate="{{::(\'fulldisplay.command.\'+$ctrl.getActionLabel(action))}}"></span></md-tooltip>\r\n    <prm-icon class="md-icon-button-custom" icon-type="{{::$ctrl.actionsIcons[$ctrl.getActionIconName(action)].type}}" svg-icon-set="{{::$ctrl.actionsIcons[$ctrl.getActionIconName(action)].iconSet}}" icon-definition="{{::$ctrl.actionsIcons[$ctrl.getActionIconName(action)].icon}}"></prm-icon>\r\n  </md-button>\r\n  <prm-save-to-favorites-button [item]="::$ctrl.item" [index]="::$ctrl.index" [is-favorites]="::$ctrl.isFavorites"></prm-save-to-favorites-button>\r\n  <md-button id="briefResultMoreOptionsButton" ng-if="::!$ctrl.isFullView" class="md-icon-button more-options-button" aria-label="{{::(\'nui.aria.moreActions\' | translate)}}" (click)="$ctrl.closeOpenTabs($event);$ctrl.toggleItemMenu($event);$event.stopPropagation();"\r\n    hide-xs>\r\n    <md-tooltip md-delay="800" md-autohide="true"><span translate="eshelf.send_to.tooltip"></span></md-tooltip>\r\n    <prm-icon [icon-type]="::$ctrl.actionsIcons.moreActions.type" class="open-icon" [svg-icon-set]="::$ctrl.actionsIcons.moreActions.iconSet" [icon-definition]="::$ctrl.actionsIcons.moreActions.icon"></prm-icon>\r\n    <prm-icon [icon-type]="::$ctrl.actionsIcons.closeActions.type" class="close-icon" [svg-icon-set]="::$ctrl.actionsIcons.closeActions.iconSet" [icon-definition]="::$ctrl.actionsIcons.closeActions.icon"></prm-icon>\r\n  </md-button>\r\n</div>\r\n<div class="action-list-content" ng-style="{\'padding-top\': $ctrl.itemHeight}" ng-if="!$ctrl.isFullView" ng-keydown="$ctrl.keyDownSupport($event)">\r\n  <md-content ng-if="$ctrl.isExpanded" ng-class="::{\'secondary-content-holder\': !$ctrl.isFullView}">\r\n    <md-divider></md-divider>\r\n    <prm-action-list ng-if="$ctrl.isExpanded2 && !$ctrl.isGenericRecord() || $ctrl.isPc()" ng-class="{ \'visible\': $ctrl.isExpanded3 }" [display-all]="true" [display-close-icon]="false" [item]="::$ctrl.item" [(selected-action)]="$ctrl.selectedAction"\r\n      (close-modal)="$ctrl.closeOpenTabs($event);$ctrl.toggleItemMenu($event);$event.stopPropagation();$ctrl.focusOnXButton()"></prm-action-list>\r\n  </md-content>\r\n</div>\r\n<prm-brief-result-container-after parent-ctrl="$ctrl"></prm-brief-result-container-after>\r\n';

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
            }, {
                id: 'components/account/requests/requests.html',
                template: prmRequestBugFixHTML,
                enabled: true,
                enableInView: '.*'
            }, {
                id: 'components/search/briefResult/briefResultContainer.html',
                template: prmLiriasBriefResultContainerHTML,
                enabled: true,
                enableInView: 'Lirias'
            }].filter(function (template) {
                return template.enabled && new RegExp(template.enableInView).test(window.appConfig.vid);
            });
        }
    }]);

    return Templates;
}();

exports.default = Templates;

},{"./utils":56}],56:[function(require,module,exports){
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

},{}]},{},[45])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXENvbmZpZ0xhbmd1YWdlU2VsZWN0aW9uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxkYXRhYmFzZUxpbmsuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGRpYWxvZy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGlzY2xhaW1lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwZXJpbWVudC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwb3NlSnd0LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxyZW1vdmVBbGVydHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHJlbW92ZUNoZWNrTG9jYXRpb25zLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxzZWFyY2hUaXAuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHN0YXRpY0Zvb3Rlci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQXV0b1Byb21vdGVMb2dpblxcYXV0b1Byb21vdGVMb2dpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQnJpZWZSZXN1bHRBZnRlclxcYWx0bWV0cmljLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1CcmllZlJlc3VsdEFmdGVyXFxzb3VyY2VJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Db2xsZWN0aW9uR2FsbGVyeUhlYWRlckFmdGVyXFxleHBsb3JlU2VhcmNoQ29sbGVjdGlvbnNcXGluZGV4LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GYWNldEFmdGVyXFxzZWFyY2hBbHNvLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GYWNldEV4YWN0QWZ0ZXJcXHNlYXJjaEFsc29Cb2R5LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GYWNldEV4YWN0QWZ0ZXJcXHNlYXJjaEFsc29Cb2R5QmliLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GaW5lc092ZXJ2aWV3QWZ0ZXJcXHBheU15RmluZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUZ1bGxWaWV3QWZ0ZXJcXGFsdG1ldHJpY3NCYWRnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxiZXRhU3dpdGNoLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGhvbWVJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGxhbmd1YWdlRGVwZW5kZW50TG9nby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxuZXdTZWFyY2hCdXR0b24uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcdmlld0xvZ28uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybU1haW5NZW51QWZ0ZXJcXGZlZWRiYWNrLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1SZWNvbW1lbmRhdGlvbkl0ZW1BZnRlclxccmVjb21tZW5kYXRpb25JdGVtLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1SZXF1ZXN0c0FmdGVyXFxpbGxSZXF1ZXN0Rm9ybS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtU2VhcmNoUmVzdWx0QXZhaWxhYmlsaXR5TGluZUFmdGVyQ29udHJvbGxlclxcYnJvd3ppbmUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyXFxwbnhYbWwuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlcnZpY2VIZWFkZXJBZnRlclxccmVwb3J0QVByb2JsZW0uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlcnZpY2VIZWFkZXJBZnRlclxccmVxdWVzdEFDb3B5LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcXVlc3RBQ29weU9mRXNEb2MuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVRvcEJhckJlZm9yZVxcYW5ub3VuY2VtZW50cy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxmZWVkYmFja0Fubm91bmNlbWVudC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxmaW5lc01lc3NhZ2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcYWx0bWV0cmljc1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcYXBpQ2FsbEludGVyY2VwdG9yLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxmYWN0b3JpZXNcXGRiU2VhcmNoSHR0cENhbGxJbnRlcmNlcHRvci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkYmFja1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcbWVzc2FnZVNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcd2luZG93RXZlbnRMaXN0ZW5lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcbWFpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcaGVscGVyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFxmYWNldHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHJlY29yZHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHVzZXIuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHZpZXcuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xcdmVuZG9yXFxjc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFx0ZW1wbGF0ZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7Ozs7Ozs7Ozs7QUFXQTs7QUEwQ0E7O0FBNUNBOztBQUdBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUdBOztBQUNBOztBQUNBOztBQUVBOzs7O0lBRXFCLGU7Ozs7Ozs7Z0NBRUY7QUFDZjs7Ozs7Ozs7Ozs7QUFZQSx5QkFBTyxDQUNMLEVBQUMsTUFBTSxrQkFBUCxFQUEyQixvQ0FBM0IsRUFBcUQsU0FBUyxLQUE5RCxFQUFxRSxVQUFVLHdDQUEvRSxFQUF5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Ozs7a0JBckNnQixTOzs7OztBQ2xCckI7Ozs7OztBQU1BLE9BQU8sU0FBUCxDQUFpQixXQUFqQixHQUErQixZQUFZO0FBQ3pDLFNBQU8sS0FBSyxLQUFMLENBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFvQixVQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUFBLFdBQWEsSUFBSSxDQUFKLEdBQVEsRUFBRSxNQUFGLENBQVMsQ0FBVCxFQUFZLFdBQVosS0FBNEIsRUFBRSxLQUFGLENBQVEsQ0FBUixDQUFwQyxHQUFpRCxDQUE5RDtBQUFBLEdBQXBCLEVBQXFGLElBQXJGLENBQTBGLEVBQTFGLENBQVA7QUFDRCxDQUZEOztBQUlBO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcclxuICBEZWNsYXJlIHlvdXIgY29tcG9uZW50cyBoZXJlLlxyXG5cclxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XHJcbiAgaHR0cDovLzJhbGl0eS5jb20vMjAxNy8wMS9pbXBvcnQtb3BlcmF0b3IuaHRtbFxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5pbXBvcnQgJy4vdXRpbHMnXHJcblxyXG4vKiBpbXBvcnQgeW91ciBjb21wb25lbnQgY29uZmlndXJhdGlvbiovXHJcbmltcG9ydCB7ZXhwZXJpbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvZXhwZXJpbWVudCdcclxuXHJcbmltcG9ydCB7aG9tZUljb25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvaG9tZUljb24nXHJcblxyXG5pbXBvcnQge25ld1NlYXJjaEJ1dHRvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9uZXdTZWFyY2hCdXR0b24nXHJcbmltcG9ydCB7bGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL2xhbmd1YWdlRGVwZW5kZW50TG9nbydcclxuaW1wb3J0IHt2aWV3TG9nb0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci92aWV3TG9nbydcclxuXHJcbmltcG9ydCB7c2VhcmNoQ29sbGVjdGlvbnNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Db2xsZWN0aW9uR2FsbGVyeUhlYWRlckFmdGVyL2V4cGxvcmVTZWFyY2hDb2xsZWN0aW9ucydcclxuXHJcbmltcG9ydCB7YmV0YVN3aXRjaENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9iZXRhU3dpdGNoJ1xyXG5pbXBvcnQge3NvdXJjZUljb25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1CcmllZlJlc3VsdEFmdGVyL3NvdXJjZUljb24nXHJcbmltcG9ydCB7YWx0bWV0cmljQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9hbHRtZXRyaWMnXHJcbmltcG9ydCB7YWx0bWV0cmljc0JhZGdlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRnVsbFZpZXdBZnRlci9hbHRtZXRyaWNzQmFkZ2UnXHJcblxyXG5pbXBvcnQge3BueFhtbENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyL3BueFhtbCdcclxuaW1wb3J0IHtwYXlNeUZpbmVzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmluZXNPdmVydmlld0FmdGVyL3BheU15RmluZXMnXHJcbmltcG9ydCB7ZmVlZGJhY2tDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1NYWluTWVudUFmdGVyL2ZlZWRiYWNrJ1xyXG5pbXBvcnQge3NlYXJjaFRpcENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvc2VhcmNoVGlwJ1xyXG5pbXBvcnQge2Rpc2NsYWltZXJDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2Rpc2NsYWltZXInXHJcblxyXG5pbXBvcnQge2V4cG9zZUp3dENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvZXhwb3NlSnd0J1xyXG5cclxuaW1wb3J0IHtMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvQ29uZmlnTGFuZ3VhZ2VTZWxlY3Rpb24nXHJcblxyXG5pbXBvcnQge3JlcG9ydEFQcm9ibGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VydmljZUhlYWRlckFmdGVyL3JlcG9ydEFQcm9ibGVtJ1xyXG5pbXBvcnQge3JlcXVlc3RBQ29weUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlcnZpY2VIZWFkZXJBZnRlci9yZXF1ZXN0QUNvcHknXHJcbmltcG9ydCB7cmVxdWVzdEFDb3B5T2ZFc0RvY0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlcnZpY2VIZWFkZXJBZnRlci9yZXF1ZXN0QUNvcHlPZkVzRG9jJ1xyXG5cclxuaW1wb3J0IHtmaW5lc01lc3NhZ2VDb25maWcgYXMgcGF5TXlGaW5lc01lc3NhZ2VDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmluZXNNZXNzYWdlJ1xyXG5pbXBvcnQge2Fubm91bmNlbWVudHNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvYW5ub3VuY2VtZW50cydcclxuaW1wb3J0IHthdXRvTG9naW5DaGVja2JveENvbmZpZyxhdXRvTG9naW5Db25maWcscHJvbW90ZUxvZ2luQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQXV0b1Byb21vdGVMb2dpbi9hdXRvUHJvbW90ZUxvZ2luJ1xyXG5cclxuaW1wb3J0IHtmZWVkYmFja0Fubm91bmNlbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9mZWVkYmFja0Fubm91bmNlbWVudCdcclxuaW1wb3J0IHtzdGF0aWNGb290ZXJDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3N0YXRpY0Zvb3RlcidcclxuaW1wb3J0IHtyZW1vdmVBbGVydHNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3JlbW92ZUFsZXJ0cydcclxuaW1wb3J0IHtyZW1vdmVDaGVja0xvY2F0aW9uc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvcmVtb3ZlQ2hlY2tMb2NhdGlvbnMnXHJcbmltcG9ydCB7aWxsUmVxdWVzdEZvcm1Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1SZXF1ZXN0c0FmdGVyL2lsbFJlcXVlc3RGb3JtJ1xyXG5pbXBvcnQge3JlY29tbWVuZGF0aW9uSXRlbUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVJlY29tbWVuZGF0aW9uSXRlbUFmdGVyL3JlY29tbWVuZGF0aW9uSXRlbSdcclxuXHJcbmltcG9ydCB7ZGF0YWJhc2VMaW5rQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9kYXRhYmFzZUxpbmsnXHJcbi8vaW1wb3J0IHtyZW1vdmVPcGVuQWNjZXNzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9yZW1vdmVPcGVuQWNjZXNzJ1xyXG5cclxuaW1wb3J0IHtzZWFyY2hBbHNvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9zZWFyY2hBbHNvJ1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRFeGFjdEFmdGVyL3NlYXJjaEFsc29Cb2R5J1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5QmliQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRFeGFjdEFmdGVyL3NlYXJjaEFsc29Cb2R5QmliJ1xyXG5cclxuaW1wb3J0IHticm93emluZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdEF2YWlsYWJpbGl0eUxpbmVBZnRlckNvbnRyb2xsZXIvYnJvd3ppbmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlckNvbXBvbmVudHMge1xyXG5cclxuICBzdGF0aWMgZ2V0IGFsbCgpIHtcclxuICAgIC8qXHJcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcclxuICAgICAgY29uZmlnID0gdGhlIGltcG9ydGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcclxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxyXG5cclxuICAgICAgZXguIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9XHJcbiAgICAgIHJlc3VsdHMgaW46XHJcbiAgICAgICAgPHBybS1sb2dvLWFmdGVyIHBhcmVudEN0cmw9JyRjdHJsJz5cclxuICAgICAgICAgIDxob21lLWljb24gcGFyZW50Q3RybD0nJGN0cmwnPjwvaG9tZS1pY29uPlxyXG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge25hbWU6ICdsaWJpcy1leHBlcmltZW50JywgY29uZmlnOiBleHBlcmltZW50Q29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tbWVzc2FnZXMtYW5kLWJsb2Nrcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2hvbWUtaWNvbicsIGNvbmZpZzogaG9tZUljb25Db25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnJ30sXHJcbiAgICAgIHtuYW1lOiAnYmV0YS1zd2l0Y2gnLCBjb25maWc6IGJldGFTd2l0Y2hDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnbGFuZ3VhZ2UtZGVwZW5kZW50LWxvZ28nLCBjb25maWc6IGxhbmd1YWdlRGVwZW5kZW50TG9nb0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3ZpZXctbG9nbycsIGNvbmZpZzogdmlld0xvZ29Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG5cclxuICAgICAge25hbWU6ICdzb3VyY2UtaWNvbicsIGNvbmZpZzogc291cmNlSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUxpcmlhcyknfSxcclxuICAgICAge25hbWU6ICdhbHRtZXRyaWMnLCBjb25maWc6IGFsdG1ldHJpY0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhc3xeS1VMZXV2ZW58XlZESUN8XlVDTEx8XlRNT1JFQU18XlRNT1JFS3xeU0VSVnxeTkJCJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2FsdG1ldHJpY3MtYmFkZ2UnLCBjb25maWc6IGFsdG1ldHJpY3NCYWRnZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZnVsbC12aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhc3xeS1VMZXV2ZW58XlZESUN8XlVDTEx8XlRNT1JFQU18XlRNT1JFS3xeU0VSVnxeTkJCJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3BueC14bWwnLCBjb25maWc6IHBueFhtbENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzJywgY29uZmlnOiBwYXlNeUZpbmVzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1maW5lcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1tYWluLW1lbnUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG4gICAgICB7bmFtZTogJ2xhbmd1YWdlLXNlbGVjdGlvbicsIGNvbmZpZzogTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ25ldy1zZWFyY2gtYnV0dG9uJywgY29uZmlnOiBuZXdTZWFyY2hCdXR0b25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1uYXYtYmFyLWxpbmtzLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuICAgICAge25hbWU6ICdyZXBvcnQtYS1wcm9ibGVtJywgY29uZmlnOiByZXBvcnRBUHJvYmxlbUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VydmljZS1oZWFkZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgIC8vIHtuYW1lOiAncmVxdWVzdC1hLWNvcHktaGVhZCcsIGNvbmZpZzogcmVxdWVzdEFDb3B5Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1zZXJ2aWNlLWhlYWRlci1hZnRlcicsIGVuYWJsZUluVmlldzogJ15MaXJpYXMnfSxcclxuICAgICAge25hbWU6ICdyZXF1ZXN0LWEtY29weScsIGNvbmZpZzogcmVxdWVzdEFDb3B5Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeTGlyaWFzJ30sXHJcbiAgICAgIHtuYW1lOiAncmVxdWVzdC1hLWNvcHktZXMtZG9jJywgY29uZmlnOiByZXF1ZXN0QUNvcHlPZkVzRG9jQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeVkxQJ30sXHJcbiAgICAgIFxyXG4gICAgICB7bmFtZTogJ3VzZXItand0JywgY29uZmlnOiBleHBvc2VKd3RDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcicsIGVuYWJsZUluVmlldzogJ15WTFB8XkVDQid9LFxyXG5cclxuICAgICAge25hbWU6ICdwcm0tc2VhcmNodGlwcycsIGNvbmZpZzogc2VhcmNoVGlwQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdwcm0tZGlzY2xhaW1lcicsIGNvbmZpZzogZGlzY2xhaW1lckNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGwsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIFxyXG5cclxuICAgICAge25hbWU6ICdzdGF0aWMtZm9vdGVyJywgY29uZmlnOiBzdGF0aWNGb290ZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWV4cGxvcmUtZm9vdGVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAgLy97bmFtZTogJ3N0YXRpYy1mb290ZXItYWNjb3VudCcsIGNvbmZpZzogc3RhdGljRm9vdGVyQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1hY2NvdW50LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdyZW1vdmUtYWxlcnRzJywgY29uZmlnOiByZW1vdmVBbGVydHNDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1hZGQtcXVlcnktdG8tc2F2ZWQtc2VhcmNoZXMtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3JlbW92ZS1jaGVjay1sb2NhdGlvbnMnLCBjb25maWc6IHJlbW92ZUNoZWNrTG9jYXRpb25zQ29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tc2VhcmNoLXJlc3VsdC1hdmFpbGFiaWxpdHktbGluZS1hZnRlcicsIGVuYWJsZUluVmlldzogJ0xpcmlhcyd9LFxyXG4gICAgICB7bmFtZTogJ3BybS1kYmxpbmsnLCBjb25maWc6IGRhdGFiYXNlTGlua0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG5cclxuICAgICAgLyogbGJzLWNvbXBvbmVudHMgdXNlZCBpbiBodG1sLXRlbXBsYXRlcyBvZiB0aGUgcGFja2FnZSAqL1xyXG4gICAgICB7bmFtZTogJ2F1dG8tbG9naW4tc3RhdGljLWZvb3RlcicsIGNvbmZpZzogYXV0b0xvZ2luQ2hlY2tib3hDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAnbGJzLXByb21vdGUtbG9naW4nLCBlbmFibGVJblZpZXc6ICAnXktVTGV1dmVuJCd9LFxyXG4gICAgICB7bmFtZTogJ3Byb21vdGUtbG9naW4nLCBjb25maWc6IHByb21vdGVMb2dpbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYXV0aGVudGljYXRpb24tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICAnXktVTGV1dmVuJCd9LFxyXG4gICAgICB7bmFtZTogJ2F1dG8tbG9naW4nLCBjb25maWc6IGF1dG9Mb2dpbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYXV0aGVudGljYXRpb24tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICAnS1VMZXV2ZW5fTFVDQXxLVUxldXZlbl9PRElTRUV8S1VMZXV2ZW5fVE1PUkVLfEtVTGV1dmVuX1RNT1JFTXxLVUxldXZlbl9VQ0xMJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2lsbC1yZXF1ZXN0LWZvcm0tb3ZlcnZpZXcnLCBjb25maWc6IGlsbFJlcXVlc3RGb3JtQ29uZmlnLCBlbmFibGVkOmZhbHNlLCBhcHBlbmRUbzogJ3BybS1yZXF1ZXN0cy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnaWxsLXJlcXVlc3QtZm9ybScsIGNvbmZpZzogaWxsUmVxdWVzdEZvcm1Db25maWcsIGVuYWJsZWQ6ZmFsc2UsIGFwcGVuZFRvOiAncHJtLXJlcXVlc3RzLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVufF5WSVZFUyd9LFxyXG5cclxuICAgICAge25hbWU6ICdhbm5vdW5jZW1lbnQtZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQW5ub3VuY2VtZW50Q29uZmlnLCBlbmFibGVkOmZhbHNlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ292ZXJyaWRlLWdldGxpbmstcmVjb21tZW5kYXRpb24nLCBjb25maWc6IHJlY29tbWVuZGF0aW9uSXRlbUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tcmVjb21lbmRhdGlvbi1pdGVtLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnYW5ub3VuY2VtZW50JywgY29uZmlnOiBhbm5vdW5jZW1lbnRzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzLW1lc3NhZ2UnLCBjb25maWc6IHBheU15RmluZXNNZXNzYWdlQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbid9LFxyXG4gICAgIC8vICB7bmFtZTogJ3JlbW92ZS1vcGVuLWFjY2VzcycsIGNvbmZpZzogcmVtb3ZlT3BlbkFjY2Vzc0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1hbHNvJywgY29uZmlnOiBzZWFyY2hBbHNvQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbnxeVklWRVNfS0FUSE8nfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1hbHNvLWJvZHknLCBjb25maWc6IHNlYXJjaEFsc29Cb2R5Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbid9LFxyXG4gICAgIHtuYW1lOiAnc2VhcmNoLWFsc28tYm9keS1iaWInLCBjb25maWc6IHNlYXJjaEFsc29Cb2R5QmliQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15WSVZFU19LQVRITyd9LFxyXG4gICAgIHtuYW1lOiAnYnJvd3ppbmUnLCBjb25maWc6IGJyb3d6aW5lQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1zZWFyY2gtcmVzdWx0LWF2YWlsYWJpbGl0eS1saW5lLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVufF5FQ0InfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1jb2xsZWN0aW9ucycsIGNvbmZpZzogc2VhcmNoQ29sbGVjdGlvbnNDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWNvbGxlY3Rpb24tZ2FsbGVyeS1oZWFkZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW4nfVxyXG4gICAgXS5maWx0ZXIoIChjb21wb25lbnQpID0+ICggY29tcG9uZW50LmVuYWJsZWQgJiYgbmV3IFJlZ0V4cChjb21wb25lbnQuZW5hYmxlSW5WaWV3KS50ZXN0KHdpbmRvdy5hcHBDb25maWcudmlkKSApICk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5jbGFzcyBMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB2YXIgb25seXNob3dfZnJfRlJfaW5fdmlkID0gWydBQ1YnLCAnQlBCJywgJ0ZBUk8nLCAnRk9ERklOJywgJ0tCQycsICdSQklOUycsICdSTUNBJywgJ0tNS0cnLCAnTElCQVInLCAnTkJCJywgJ09GTycsICdWRElDJ107XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByaW1vLWV4cGxvcmUnKSk7XHJcbiAgICAgICAgaWYgKCEgb25seXNob3dfZnJfRlJfaW5fdmlkLmluY2x1ZGVzKCB3aW5kb3cuYXBwQ29uZmlnLnZpZCAgKSApIHtcclxuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kKCBcIjxzdHlsZT5wcm0tbGFuZ3VhZ2Utc2VsZWN0aW9uIG1kLWxpc3QtaXRlbVt2YWx1ZT0nZnJfRlInXXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50O308L3N0eWxlPlwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWdDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddXHJcblxyXG5leHBvcnQgbGV0IExhbmd1YWdlU2VsZWN0aW9uQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ0NvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbn1cclxuIiwiaW1wb3J0IGRhdGFiYXNlTGlua0hUTUwgZnJvbSAnLi9kYXRhYmFzZUxpbmsuaHRtbCdcclxuXHJcbmNsYXNzIERhdGFiYXNlTGlua0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZykge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgJHNjb3BlLnRpdGxlID0gJ2RhdGFiYXNlcyc7XHJcbiAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSAnc2VhcmNoIGRhdGFiYXNlcyc7XHJcbiAgICAkc2NvcGUuZGF0YWJhc2VMaW5rID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLWRhdGFiYXNlXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybClcclxuXHJcbiAgICAgICAgdmFyIGRhdGFiYXNlRmFjZXQgPSB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwicnR5cGVcIixcclxuICAgICAgICAgICAgXCJ0eXBlXCI6XCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjpcImRhdGFiYXNlc1wiLFxyXG4gICAgICAgICAgICBcImRpc3BsYXlWYWx1ZVwiOlwiZGF0YWJhc2VzXCIsXHJcbiAgICAgICAgICAgIFwiZGlzcGxheWVkVHlwZVwiOlwiZXhhY3RcIixcclxuICAgICAgICAgICAgXCJsYWJlbFwiOlwiRGF0YWJhbmtlblwiLFxyXG4gICAgICAgICAgICBcImlzTXVsdGlGYWNldFwiOmZhbHNlLFxyXG4gICAgICAgICAgICBcInRvb2x0aXBcIjpcIlZlcndpamRlciBUeXBlIGJyb24gRGF0YWJhbmtlblwiLFxyXG4gICAgICAgICAgICBcIiQkaGFzaEtleVwiOlwib2JqZWN0OjI4MDhcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyggJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU3RhdGVTZXJ2aWNlLnNlYXJjaE9iamVjdCApXHJcblxyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL21laG1ldGMvcHJpbW8tZXhwbG9yZS1jb2xsZWN0aW9uLXZpZXdlci9ibG9iL21hc3Rlci9qcy9uZy1wcmltby5qc1xyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFNlcnZpY2Uuc2V0U29ydEJ5KCd0aXRsZScpO1xyXG4gICAgICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFNlcnZpY2UuZmFjZXRTZXJ2aWNlLmFkZFN0aWNreUZhY2V0KGRhdGFiYXNlRmFjZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTdGF0ZVNlcnZpY2Uuc2VhcmNoT2JqZWN0IClcclxuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLnNlYXJjaCgpO1xyXG4vKlxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJzdGlja3lGYWNldHNcIixcclxuICAgICAgICdbe1wibmFtZVwiOlwicnR5cGVcIixcInR5cGVcIjpcImluY2x1ZGVcIixcInZhbHVlXCI6XCJkYXRhYmFzZXNcIixcImRpc3BsYXlWYWx1ZVwiOlwiZGF0YWJhc2VzXCIsXCJkaXNwbGF5ZWRUeXBlXCI6XCJleGFjdFwiLFwibGFiZWxcIjpcIkRhdGFiYW5rZW5cIixcImlzTXVsdGlGYWNldFwiOmZhbHNlLFwidG9vbHRpcFwiOlwiVmVyd2lqZGVyIFR5cGUgYnJvbiBEYXRhYmFua2VuXCIsXCIkJGhhc2hLZXlcIjpcIm9iamVjdDoyODA4XCIsXCJwZXJzaXN0ZW50XCI6dHJ1ZSxcIm9wZXJhdGlvblwiOlwiYWRkXCJ9XScpO1xyXG4gICAgICAgKi9cclxuICAgICAvLyAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMy9wcmltby1leHBsb3JlL3NlYXJjaD9xdWVyeT1hbnksY29udGFpbnMsZGF0YWJhc2VzJnRhYj1hbGxfY29udGVudF90YWImc2VhcmNoX3Njb3BlPUFMTF9DT05URU5UJlwiXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5EYXRhYmFzZUxpbmtDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBkYXRhYmFzZUxpbmtDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRGF0YWJhc2VMaW5rQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogZGF0YWJhc2VMaW5rSFRNTFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJGh0dHAsICR0cmFuc2xhdGUsIGZlZWRiYWNrU2VydmljZVVSTCwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLm1kRGlhbG9nID0gJG1kRGlhbG9nO1xyXG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XHJcbiAgICB0aGlzLmh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMID0gZmVlZGJhY2tTZXJ2aWNlVVJMO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG5cclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAkc2NvcGUuY2FuY2VsRmVlZGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IHRoaXMuc2VuZEZlZWRiYWNrO1xyXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IChhbnN3ZXIpID0+IHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgc2VsZi52aWV3ID0gdmlldztcclxuXHJcbiAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgc3ViamVjdDogJHNjb3BlLmZlZWRiYWNrLnN1YmplY3QsXHJcbiAgICAgICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxyXG4gICAgICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxyXG4gICAgICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICAgICAgaXA6IHNlbGYudmlldy5pcC5hZGRyZXNzLFxyXG4gICAgICAgICAgICB0eXBlOiAnZmVlZGJhY2snLFxyXG4gICAgICAgICAgICBmZWVkYmFjazogJHNjb3BlLmZlZWRiYWNrLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGVtYWlsOiAkc2NvcGUuZmVlZGJhY2sucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmICgkc2NvcGUuZmVlZGJhY2sucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5mZWVkYmFjay5tZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2VsZi5tZERpYWxvZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmh0dHAoe1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIHVybDogdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwsXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xyXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnO1xyXG4gICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nKTtcclxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLic7XHJcbiAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcbiAgICAgICAgJHNjb3BlLmZlZWRiYWNrID0ge1xyXG4gICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICBzdWJqZWN0OiAnZmVlZGJhY2snXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkRpYWxvZ0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckaHR0cCcsICckdHJhbnNsYXRlJywgJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdNZXNzYWdlU2VydmljZSddO1xyXG4iLCJpbXBvcnQgZGlzY2xhaW1lckRpYWxvZ0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvZGlzY2xhaW1lckRpYWxvZy5odG1sJ1xyXG5pbXBvcnQgY29va2llUG9saWN5RGlhbG9nSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X2VuX1VTLmh0bWwnXHJcbmltcG9ydCBkaXNjbGFpbWVyRGlhbG9nX2ZyRlJfSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X2VuX1VTLmh0bWwnXHJcbmltcG9ydCBkaXNjbGFpbWVyRGlhbG9nX25sQkVfSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X25sX0JFLmh0bWwnXHJcbmltcG9ydCBkaXNjbGFpbWVyRGlhbG9nX2VuVVNfSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X2VuX1VTLmh0bWwnXHJcblxyXG5pbXBvcnQgZGlzY2xhaW1lckxpbmtIVE1MIGZyb20gJ2Rpc2NsYWltZXIuaHRtbCdcclxuXHJcbmNsYXNzIGRpc2NsYWltZXJDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG5cclxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICdubF9CRSc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdDb29raWViZWxlaWQnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJDb29raWViZWxlaWRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2VuX1VTJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ0Nvb2tpZSBQb2xpY3knLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJDb29raWUgUG9saWN5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgICdmcl9GUic6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdDb29raWUgUG9saWN5JyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQ29va2llIFBvbGljeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuLyogVG9kbyBSZWZhY3RvcnkgZGlzY2xhaW1lckRpYWxvZyAvIGNvb2tpZVBvbGljeSA/Pz8gKi9cclxuLy8gICAgbGV0IGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nSFRNTDsgXHJcbiAgICAgIGxldCBkaXNjbGFpbWVyRGlhbG9nID0gY29va2llUG9saWN5RGlhbG9nSFRNTDtcclxuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdmcl9GUic6XHJcbiAgICAgICAgZGlzY2xhaW1lckRpYWxvZyA9IGRpc2NsYWltZXJEaWFsb2dfZnJGUl9IVE1MO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmxfQkUnOlxyXG4gICAgICAgIGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nX25sQkVfSFRNTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZGlzY2xhaW1lckRpYWxvZyA9IGRpc2NsYWltZXJEaWFsb2dfZW5VU19IVE1MO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2NvcGUudGl0bGUgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZSddO1xyXG4gICAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZV9sYWJlbCddO1xyXG5cclxuICAgICAgJHNjb3BlLnNob3dEaXNjbGFpbWVyRGlhbG9nID0gZnVuY3Rpb24oJGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IGRpc2NsYWltZXJEaWFsb2csXHJcbiAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgaXRlbXM6ICRzY29wZS5pdGVtc1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXJcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gRGlhbG9nQ29udHJvbGxlcigkc2NvcGUsICRtZERpYWxvZywgaXRlbXMpIHtcclxuICAgICAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICAkc2NvcGUuY2xvc2VEaWFsb2cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmRpc2NsYWltZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBkaXNjbGFpbWVyQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IGRpc2NsYWltZXJDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBkaXNjbGFpbWVyTGlua0hUTUxcclxufSIsIi8qIGNvbXBvbmVudCB0byBkbyBhbGwgeW91ciBleHBlcmltZW50YWwgc3R1ZmYgKi9cclxuLyogW2VufGRpc11hYmxlIGluIGNvbXBvbmVudHMqL1xyXG5cclxuY2xhc3MgRXhwZXJpbWVudENvbnRyb2xsZXIge1xyXG4gXHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwkdGVtcGxhdGVDYWNoZSwgJGNvbXBpbGUsJGluamVjdG9yLCRyb290U2NvcGUsJHRyYW5zbGF0ZSwgJHdpbmRvdykge1xyXG4gICAgY29uc29sZS5sb2coJ0V4cGVyaW1lbnQ6Jyk7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlID0gJHRlbXBsYXRlQ2FjaGU7XHJcbiAgICB0aGlzLiRjb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnJzsgXHJcblxyXG4gICAgY29uc29sZS5sb2coc2VsZilcclxuICAgIGNvbnNvbGUubG9nKCdyb290U2NvcGU6JylcclxuICAgIGNvbnNvbGUubG9nKCRyb290U2NvcGUpXHJcbiAgICBjb25zb2xlLmxvZygndGVtcGxhdGVDYWNoZScpXHJcbiAgICBjb25zb2xlLmxvZygkdGVtcGxhdGVDYWNoZSkgICBcclxuICAgIHZhciB0ZW1wbGF0ZSA9ICR0ZW1wbGF0ZUNhY2hlLmdldCgnY29tcG9uZW50cy9hY2NvdW50L292ZXJ2aWV3L3JlcXVlc3RzT3ZlcnZpZXcvcmVxdWVzdHMtb3ZlcnZpZXcuaHRtbCcpO1xyXG4gICAgLy8gdmFyIHRlbXBsYXRlID0gdGVtcGxhdGUgKyBcIjxIMSBpZD0nb210ZWxhY2h0ZW4nPkxBTEFMQTxpbGwtcmVxdWVzdC1mb3JtLW92ZXJ2aWV3PjwvaWxsLXJlcXVlc3QtZm9ybS1vdmVydmlldz48L0gxPlwiO1xyXG4gICAgdmFyIHRlbXBsYXRlID0gdGVtcGxhdGUgKyBcIjxIMSBpZD0nb210ZWxhY2h0ZW4nPkxBTEFMQTwvSDE+XCI7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnLCB0ZW1wbGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZygkdGVtcGxhdGVDYWNoZS5nZXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnKSlcclxufTtcclxuXHJcbiAgdG9JbGxSZXF1ZXN0VXJsKCkge1xyXG4gICAgICB2YXIgaW5zdGl0dXRpb25Db2RlID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbi5pbnN0aXR1dGlvbkNvZGU7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ2luc3RpdHV0aW9uQ29kZTonICsgaW5zdGl0dXRpb25Db2RlKVxyXG4gICAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnaHR0cHM6Ly9sZXV2ZW4tcHJpbW8uaG9zdGVkLmV4bGlicmlzZ3JvdXAuY29tL3Bkcz9mdW5jPXNzbyZ1cmw9aHR0cDovL2V1LmFsbWEuZXhsaWJyaXNncm91cC5jb20vdmlldy91cmVzb2x2ZXIvJysgaW5zdGl0dXRpb25Db2RlICsnL29wZW51cmw/c3ZjX2RhdD1nZXRpdCZzdmMucHJvZmlsZT1nZXRpdCZkaXJlY3RSZXNvdXJjZVNoYXJpbmdSZXF1ZXN0PXRydWUmbmV3VUk9dHJ1ZSdcclxuICAgICAgdGhpcy53aW5kb3cub3Blbih0aGlzLmlsbFJlcXVlc3RVcmwsICdfZnJlZUlsbCcpO1xyXG4gIH07XHJcbiAgICBcclxuICAkb25Jbml0KCkgeyAgXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nICgnbmV3RWxlbWVudDonKVxyXG4gIC8vICBjb25zb2xlLmxvZyAoYW5ndWxhci5lbGVtZW50KCAnI29tdGVsYWNodGVuJykubGVuZ3RoKVxyXG4gICAvLyBpZiAoIGFuZ3VsYXIuZWxlbWVudCggJ0gxJykubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nICgnXFwndCBJcyBuaSBvbSB0ZSBsYWNodGVuJylcclxuICAgICAgIHZhciBlbGVtZW50TmFtZSA9ICdwcm0tcmVxdWVzdHMtb3ZlcnZpZXcnXHJcbiAgICAgICAvL2xldCBlbGVtZW50ID0gJGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnROYW1lKSk7XHJcbiAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICBsZXQgZWxlbWVudFNjb3BlID0gZWxlbWVudC5zY29wZSgpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyAoZWxlbWVudFNjb3BlKVxyXG4gICAgICAgICB0aGlzLiRjb21waWxlKGVsZW1lbnQpKGVsZW1lbnRTY29wZSk7XHJcbiAgICAgICAgIC8vZWxlbWVudFNjb3BlLiRhcHBseSgpXHJcbiAgICAgICB9ICAgICBcclxuICAvLyAgIH1cclxuICAgIH1cclxufVxyXG5cclxuRXhwZXJpbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgICckdGVtcGxhdGVDYWNoZScsICckY29tcGlsZScsJyRpbmplY3RvcicsJyRyb290U2NvcGUnLCckdHJhbnNsYXRlJywgJyR3aW5kb3cnXVxyXG5cclxuZXhwb3J0IGxldCBleHBlcmltZW50Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEV4cGVyaW1lbnRDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImNsYXNzIGV4cG9zZUp3dENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoV2luZG93RXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLldpbmRvd0V2ZW50TGlzdGVuZXIgPSBXaW5kb3dFdmVudExpc3RlbmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvc2VKd3RDb250cm9sbGVyLiRpbmplY3QgPSBbJ1dpbmRvd0V2ZW50TGlzdGVuZXInXTtcclxuXHJcblxyXG5leHBvcnQgbGV0IGV4cG9zZUp3dENvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogZXhwb3NlSnd0Q29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnJ1xyXG59IiwiXHJcbmNsYXNzIFJlbW92ZUFsZXJ0c0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgICR0cmFuc2xhdGUsICRlbGVtZW50LCAkdGVtcGxhdGVDYWNoZSkge1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSBcImVuX1VTXCJcclxuICAgICAgICBsb2NhbGUgPSBzY29wZS4kcm9vdC4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvc2F2ZWRRdWVyaWVzL2FkZEFsZXJ0VG9hc3QvYWRkLWFsZXJ0LXRvYXN0Lmh0bWwnLGBcclxuICAgICAgICA8bWQtdG9hc3QgbmctY2xhc3M9XCJ7XFwnbW9iaWxlLWRlZmluZVxcJzokY3RybC5kZXRlY3RNb2JpbGUoKSxcXCdsYXlvdXQtY29sdW1uXFwnOiRjdHJsLmRldGVjdE1vYmlsZSgpfVwiIGNsYXNzPVwibWQtdG9hc3QtY29udGVudFwiPlxyXG4gICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJtZC10b2FzdC1jb250ZW50XCIgbmctY2xhc3M9XCJ7XFwnZW5kLWNvbnRlbnRcXCc6ISRjdHJsLmRldGVjdE1vYmlsZSgpfVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWQtdG9hc3QtdGV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBuZy1pZj1cIiEkY3RybC5hZGRNb2RlXCIgdHJhbnNsYXRlPVwibnVpLmZhdm9yaXRlcy5zZWFyY2guYWxlcnQubWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gbmctaWY9XCIkY3RybC5hZGRNb2RlXCIgdHJhbnNsYXRlPVwibnVpLnNhdmVzZWFyY2gubWVzc2FnZS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHN0cm9uZyBuZy1pZj1cIiEkY3RybC5hZGRNb2RlXCI+e3skY3RybC5lbWFpbH19PC9zdHJvbmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCIgY2xhc3M9XCJtZC10b2FzdC1jb250ZW50XCIgbmctY2xhc3M9XCJ7XFwnc3RhcnQtY29udGVudFxcJzohJGN0cmwuZGV0ZWN0TW9iaWxlKCl9XCI+XHJcbiAgICAgICAgPG1kLWJ1dHRvbiBuZy1jbGljaz1cIiRjdHJsLm9uRGlzbWlzcygpXCIgYXJpYS1sYWJlbD1cInt7OjooXFwnbnVpLm1lc3NhZ2UuZGlzbWlzc1xcJyB8IHRyYW5zbGF0ZSl9fSBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZy1zY29wZVwiIHRyYW5zbGF0ZT1cIm51aS5tZXNzYWdlLmRpc21pc3NcIj48L3NwYW4+XHJcbiAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9tZC10b2FzdD5cclxuPHBybS1hZGQtYWxlcnQtdG9hc3QtYWZ0ZXIgcGFyZW50LWN0cmw9XCIkY3RybFwiPjwvcHJtLWFkZC1hbGVydC10b2FzdC1hZnRlcj5cclxuICAgICAgICBgKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVtb3ZlQWxlcnRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJHRyYW5zbGF0ZScsICckZWxlbWVudCcsICckdGVtcGxhdGVDYWNoZScgXVxyXG5cclxuZXhwb3J0IGxldCByZW1vdmVBbGVydHNDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IFJlbW92ZUFsZXJ0c0NvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJzxzdHlsZT5tZC10ZW1wbGF0ZSBwcm0tYWRkLWFsZXJ0LXRvYXN0IG1kLXRvYXN0ICpbYXJpYS1sYWJlbD1cInt7XFwnbnVpLmFyaWEuc2F2ZWRRdWVyaWVzTGlzdC5hbGVydFxcJyB8IHRyYW5zbGF0ZX19XCJdIHsgIGRpc3BsYXk6IG5vbmU7IH08L3N0eWxlPidcclxufVxyXG4iLCJjbGFzcyBSZW1vdmVDaGVja0xvY2F0aW9uc0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJGVsZW1lbnQsICR0ZW1wbGF0ZUNhY2hlKSB7XHJcbiAgICAgICAgdmFyIGRpc3BsYXllZEF2YWlsYWJpbGl0eSA9ICRzY29wZS4kY3RybC5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZGlzcGxheWVkQXZhaWxhYmlsaXR5O1xyXG4gICAgICAgIGlmICggZGlzcGxheWVkQXZhaWxhYmlsaXR5LmluZGV4T2YoXCJmdWxsdGV4dF91bmtub3duXCIpID4gLTEgfHwgZGlzcGxheWVkQXZhaWxhYmlsaXR5LmluZGV4T2YoXCJtYXlfYmVfcmVzdHJpY3RlZFwiKSA+IC0xICkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyAoICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5kZWxpdmVyeSApXHJcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUuJGN0cmwucGFyZW50Q3RybC5wYXJlbnRDdHJsLiRlbGVtZW50LCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCBlbCApXHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubG9jYWxOYW1lID09ICdwcm0tc2VhcmNoLXJlc3VsdC1hdmFpbGFiaWxpdHktbGluZScgKXtcclxuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblJlbW92ZUNoZWNrTG9jYXRpb25zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJGVsZW1lbnQnLCAnJHRlbXBsYXRlQ2FjaGUnIF1cclxuXHJcbmV4cG9ydCBsZXQgcmVtb3ZlQ2hlY2tMb2NhdGlvbnNDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgICBjb250cm9sbGVyOiBSZW1vdmVDaGVja0xvY2F0aW9uc0NvbnRyb2xsZXJcclxufSIsImltcG9ydCBzZWFyY2hUaXBIVE1MIGZyb20gJy4vc2VhcmNoVGlwLmh0bWwnXHJcbmltcG9ydCB0aXBfZW5VU19IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2VuVVMuaHRtbCdcclxuaW1wb3J0IHRpcF9mckZSX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvZnJGUi5odG1sJ1xyXG5pbXBvcnQgdGlwX25sQkVfSFRNTCBmcm9tICcuL3NlYXJjaFRpcC9ubEJFLmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hUaXBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG5cclxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICdubF9CRSc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdab2VrdGlwcycsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIlpvZWt0aXBzIHdlZXJnZXZlblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZW5fVVMnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnU2VhcmNoIFRpcHMnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJTZWFyY2ggVGlwc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZnJfRlInOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQXN0dWNlcz8nLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJBc3R1Y2VzP1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHRpcHNIVE1MID0gdGlwX2VuVVNfSFRNTDtcclxuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdmcl9GUic6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9mckZSX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdubF9CRSc6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9ubEJFX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfZW5VU19IVE1MO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2NvcGUudGl0bGUgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZSddO1xyXG4gICAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZV9sYWJlbCddO1xyXG5cclxuICAgICAgJHNjb3BlLnNob3dTZWFyY2hUaXBzID0gZnVuY3Rpb24oJGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IHRpcHNIVE1MLFxyXG4gICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAkc2NvcGUuaXRlbXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIERpYWxvZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2csIGl0ZW1zKSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hUaXBDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hUaXBDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoVGlwQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoVGlwSFRNTFxyXG59XHJcbiIsIlxyXG5jbGFzcyBTdGF0aWNGb290ZXJDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZywgJGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSBcImVuX1VTXCJcclxuXHJcbiAgICAgICAgdmFyIHZpZXdXaXRoQ3VzdG9tRm9vdGVyID0gWydMaXJpYXMnLCd3ZXJlbGR3aWp6ZXInLCdFQ0InLCdWRElDJ11cclxuLypcclxuICAgICAgICBjb25zb2xlLmxvZyAoc2VsZiApXHJcbiAgICAgICAgY29uc29sZS5sb2cgKHNjb3BlIClcclxuICAgICAgICBjb25zb2xlLmxvZyAoc2NvcGUuJHJvb3QuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSApXHJcbiovXHJcbiAgICAgICAgbG9jYWxlID0gc2NvcGUuJHJvb3QuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdmFyIHZpZCA9IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xyXG4gICAgICAgLy8gICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KHN0YXRpY0Zvb3RlclRlbXBsYXRlTmFtZSwgJ2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaHRtbC90ZW1wbGF0ZXMvZm9vdGVyXycgKyBsb2NhbGUgKyAnLmh0bWwnKTtcclxuKi9cclxuICAgICAgICB2YXIgdmlkID0gd2luZG93LmFwcENvbmZpZ1sndmlkJ107XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlVXJsID0gJ2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaHRtbC90ZW1wbGF0ZXMvZm9vdGVyXycgKyBsb2NhbGUgKyAnLmh0bWwnO1xyXG4gICAgICAgIGlmICggdmlld1dpdGhDdXN0b21Gb290ZXIuaW5jbHVkZXModmlkKSApICB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsID0gJ2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaHRtbC90ZW1wbGF0ZXMvZm9vdGVyXycgKyB2aWQgKyAnXycgKyBsb2NhbGUgKyAnLmh0bWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHNjb3BlLmdldFRlbXBsYXRlVXJsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGF0aWNGb290ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnLCAnJGVsZW1lbnQnXVxyXG5cclxuZXhwb3J0IGxldCBzdGF0aWNGb290ZXJDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IFN0YXRpY0Zvb3RlckNvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1pbmNsdWRlIHNyYz1cImdldFRlbXBsYXRlVXJsKClcIi8+JyxcclxufVxyXG4iLCJpbXBvcnQgYXV0b0xvZ2luQ2hlY2tib3hIVE1MIGZyb20gJy4vYXV0b0xvZ2luQ2hlY2tib3guaHRtbCdcclxuXHJcbmNsYXNzIEF1dG9Mb2dpbkNoZWNrYm94Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAvKiBSZW1vdmUgdGhlIGxvY2FsU3RvcmFnZSBwYXJhbWV0ZXIgcHJpbW9Qcm9tb3RlTG9naW4gaWYgdGhlIHVybCBjb250YWlucyBjbGVhckxvZ2luICovXHJcbiAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB2YXIgdXJsUGFyYW0gPSBcImNsZWFyTG9naW5cIjtcclxuICAgIHVybFBhcmFtID0gdXJsUGFyYW0ucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgdXJsUGFyYW0gKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxyXG4gICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xyXG4gICAgaWYgKHJlc3VsdHMpIHtcclxuICAgICAgaWYgKGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94ID0gZmFsc2U7XHJcbiAgICBzZWxmLmFsd2F5c1NpZ25pbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJpbW9Qcm9tb3RlTG9naW5cIik7XHJcbiAgICBpZiAoc2VsZi5hbHdheXNTaWduaW4pIHtcclxuICAgICAgc2VsZi5hbHdheXNTaWduaW5DaGVja0JveCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmFsd2F5c1NpZ25pbkNoZWNrZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94KSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJywgJ2Fsd2F5c1NpZ25pbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcmltb1Byb21vdGVMb2dpbicpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUHJvbW90ZUxvZ2luQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJG1kRGlhbG9nKSB7XHJcblxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IHBhcmVudEN0cmwgPSAgc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmxcclxuICAgIC8vY29uc29sZS5sb2cgKHNlbGYpXHJcbiAgICB2YXIgbG9jYWxlID0gcGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG4gICBcclxuXHJcbiAgICBwYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnNpZ25Jbk9ic2VydmFibGUuc3Vic2NyaWJlKCgpPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXNMb2dnZWRJbiAgPT0gdHJ1ZSl7XHJcbiAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkc2NvcGUucHJpbW9Qcm9tb3RlTG9naW4gPSAnJztcclxuICAgICRzY29wZS5zaG93U2lnbkluUG9wdXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xyXG5cclxuICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9wcm9tb3RlX2xvZ2luXycgKyBsb2NhbGUgKyAnLmh0bWwnLFxyXG4gICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAgIHByaW1vUHJvbW90ZUxvZ2luOiAgJHNjb3BlLnByaW1vUHJvbW90ZUxvZ2luXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRGlhbG9nQ29udHJvbGxlcigkc2NvcGUsICRtZERpYWxvZykge1xyXG4gICAgICAgICRzY29wZS5sb2dpbkRpYWxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGFyZW50Q3RybC5sb2dpblNlcnZpY2UuaGFuZGxlTG9naW5DbGljaygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5jbG9zZURpYWxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgICRzY29wZS5jaGFuZ2VQcm9tb3RlT3B0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnByaW1vUHJvbW90ZUxvZ2luID09PSAnbmV2ZXJTaWduaW4nIHx8ICRzY29wZS5wcmltb1Byb21vdGVMb2dpbiA9PT0gJ2Fsd2F5c1NpZ25pbicpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmltb1Byb21vdGVMb2dpbicsICRzY29wZS5wcmltb1Byb21vdGVMb2dpbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nKTtcclxuICAgICAgICAgICAgICAgIC8vc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nLCAkc2NvcGUucHJpbW9Qcm9tb3RlTG9naW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICBcclxuICAgIC8qIElnbm9yZSB0aGlzIGluIHBybS1sb2dpbi1hbG1hLW1hc2h1cCwgb25seSBpZiBwYXJlbnQgaXMgcHJtLXVzZXItYXJlYSovXHJcbiAgICBpZiAoICgkZWxlbWVudC5uYXRpdmVFbGVtZW50KS5jbG9zZXN0KCdwcm0tdXNlci1hcmVhJykgKSB7XHJcbiAgICAgICAgaWYgKCFwYXJlbnRDdHJsLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZVsncHJpbW9Qcm9tb3RlTG9naW4nXSA9PT0gJ2Fsd2F5c1NpZ25pbicpIHtcclxuICAgICAgICAgICAgICAgIC8qIFNyZWlkZXJpY3QgdG8gbG9naW4gKi87XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRDdHJsLmxvZ2luU2VydmljZS5oYW5kbGVMb2dpbkNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlc3Npb25TdG9yYWdlWydwcmltb1Byb21vdGVMb2dpbiddICYmICFsb2NhbFN0b3JhZ2VbJ3ByaW1vUHJvbW90ZUxvZ2luJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd1NpZ25JblBvcHVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nLCAnU2lnbkluUG9wdXAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQXV0b0xvZ2luQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGxldCBwYXJlbnRDdHJsID0gIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsXHJcbiAgICAvLyBJZ25vcmUgdGhpcyBpbiBwcm0tbG9naW4tYWxtYS1tYXNodXAsIG9ubHkgaWYgcGFyZW50IGlzIHBybS11c2VyLWFyZWFcclxuICAgIGlmICgoJGVsZW1lbnQubmF0aXZlRWxlbWVudCkuY2xvc2VzdCgncHJtLXVzZXItYXJlYScpKSB7XHJcbiAgICAgICAgaWYgKCFwYXJlbnRDdHJsLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgdmFyIGF1dGggPSB3aW5kb3cuYXBwQ29uZmlnLmF1dGhlbnRpY2F0aW9uWzBdO1xyXG4gICAgICAgICAgICB2YXIgbG9naW5VcmwgPSBwYXJlbnRDdHJsLmxvZ2luU2VydmljZS5sb2dpblVybChhdXRoWydwcm9maWxlLW5hbWUnXSwgYXV0aFsnYXV0aGVudGljYXRpb24tc3lzdGVtJ10pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gbG9naW5VcmwucmVwbGFjZSgvaW5zdGl0dXRpb249KFteJl0pKi8sIFwiaW5zdGl0dXRpb249S1VMXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYXV0b0xvZ2luQ2hlY2tib3hDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogQXV0b0xvZ2luQ2hlY2tib3hDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBhdXRvTG9naW5DaGVja2JveEhUTUxcclxufVxyXG5cclxuZXhwb3J0IGxldCBwcm9tb3RlTG9naW5Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUHJvbW90ZUxvZ2luQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgYXV0b0xvZ2luQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEF1dG9Mb2dpbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGFsdG1ldHJpY0hUTUwgZnJvbSAnLi9hbHRtZXRyaWMuaHRtbCdcclxuXHJcbmNsYXNzIEFsdE1ldHJpY0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlLCAkd2luZG93LCAkdGltZW91dCwgQWx0bWV0cmljc1NlcnZpY2UpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGxldCBpdGVtID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbTtcclxuICAgIC8qXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy53aW5kb3cgPSAkd2luZG93O1xyXG4gICAgKi9cclxuICAgIHNlbGYuZG9pID0gJyc7XHJcbiAgICBzZWxmLnJlY29yZGlkID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcclxuICAgIGlmIChpdGVtICYmIGl0ZW0ucG54ICYmIGl0ZW0ucG54LmFkZGF0YSAmJiBpdGVtLnBueC5hZGRhdGEuZG9pKSB7XHJcbiAgICAgIHNlbGYuZG9pID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguYWRkYXRhLmRvaVswXTtcclxuXHJcbiAgICAgIHRoaXMucmVjb3JkaWQgPSBzZWxmLnJlY29yZGlkO1xyXG4gICAgICBBbHRtZXRyaWNzU2VydmljZS5hZGRBbHRtZXRyaWNzKCcjYWx0bWV0cmljc18nICsgc2VsZi5yZWNvcmRpZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBhbHRtZXRyaWNDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHsgcGFyZW50Q3RybDogJzwnIH0sXHJcbiAgY29udHJvbGxlcjogQWx0TWV0cmljQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogYWx0bWV0cmljSFRNTFxyXG59XHJcbiIsImltcG9ydCBzb3VyY2VJY29uSFRNTCBmcm9tICcuL3NvdXJjZUljb24uaHRtbCdcclxuXHJcbmNsYXNzIFNvdXJjZUljb25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIHBhcmVudEN0cmwgPSAkc2NvcGUuJHBhcmVudC4kY3RybC5wYXJlbnRDdHJsO1xyXG4gICAgdmFyIGljb25Db25mID0gW3tcclxuICAgICAgJ3NvdXJjZWlkJzogJ2xpcmlhcycsXHJcbiAgICAgICdpY29uVXJsJzogJy8vbGltby5saWJpcy5iZS9wcmltb19saWJyYXJ5L2xpYndlYi9saWJpcy9pbWFnZXMvbGlyaWFzLmpwZycsXHJcbiAgICAgICdpY29uVGV4dCc6ICdMaXJpYXMnXHJcbiAgICB9XTtcclxuXHJcbiAgICB2YXIgaWNvbkNvbmZTb3VyY2VzID0gaWNvbkNvbmYubWFwKG9iaiA9PiBvYmouc291cmNlaWQpO1xyXG5cclxuICAgIHNlbGYuc291cmNlaWQgPSBudWxsO1xyXG4gICAgaWYgKCdzb3VyY2VpZCcgaW4gcGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sKSB7XHJcbiAgICAgIHNlbGYuc291cmNlaWQgPSBwYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wuc291cmNlaWRbMF0udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIGlmIChpY29uQ29uZlNvdXJjZXMuaW5jbHVkZXMoc2VsZi5zb3VyY2VpZCkpIHtcclxuICAgICAgICBzZWxmLmljb24gPSBpY29uQ29uZi5maW5kKGZ1bmN0aW9uKHgpIHtcclxuICAgICAgICAgIHJldHVybiB4LnNvdXJjZWlkID09PSBzZWxmLnNvdXJjZWlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnZGl2JykuYXBwZW5kKCRjb21waWxlKHNvdXJjZUljb25IVE1MKSgkc2NvcGUpKTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5Tb3VyY2VJY29uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgc291cmNlSWNvbkNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBTb3VyY2VJY29uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQ29sbGVjdGlvbnNIVE1MIGZyb20gJy4vaHRtbC9zZWFyY2gtY29sbGVjdGlvbnMuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaENvbGxlY3Rpb25zQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAvL21pZ2h0IGJlIG5lZWRlZCBhZnRlciBuZXh0IHJlbGVhc2VcclxuICAgIC8qc2VsZi4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLmlzR2FsbGVyeUxvYmJ5PSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pc0dhbGxlcnlMb2JieTtcclxuICAgIHRoaXMuZ2V0Q29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbjsqL1xyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKmdldENvbGxlY3Rpb24oKSB7XHJcbiAgICBpZighdGhpcy5pc0dhbGxlcnlMb2JieSAmJiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5jdXJyZW50Q29sbGVjdGlvbiAhPSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuY3VycmVudENvbGxlY3Rpb24ubmFtZTtcclxuICAgIH1cclxuICB9OyovXHJcblxyXG59XHJcblxyXG5TZWFyY2hDb2xsZWN0aW9uc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IHNlYXJjaENvbGxlY3Rpb25zQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaENvbGxlY3Rpb25zQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoQ29sbGVjdGlvbnNIVE1MXHJcbn1cclxuIiwiLy9mYWNldHMuZmFjZXQuZmFjZXRfc2VhcmNoX2Fsc28gaW4gXCJmYWNldCBsYWJlbHNcIlxyXG5jbGFzcyBTZWFyY2hBbHNvQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKXtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHM7XHJcbiAgICB9LCAobixvKSA9PiB7XHJcbiAgICAgIGlmIChuICE9IG8pIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMuZmlsdGVyKGYgPT4ge3JldHVybiBmLm5hbWUgPT0gJ3NlYXJjaF9hbHNvJ30pLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9hbHNvJyxcclxuICAgICAgICAgICAgZGlzcGxheWVkVHlwZTogJ2V4YWN0JyxcclxuICAgICAgICAgICAgbGltaXRDb3VudDogMCxcclxuICAgICAgICAgICAgZmFjZXRHcm91cENvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlczogdW5kZWZpbmVkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOntwYXJlbnRDdHJsOic8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0NvbnRyb2xsZXJcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQWxzb0JvZHlIVE1MIGZyb20gJy4vc2VhcmNoQWxzb0JvZHkuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaEFsc29Cb2R5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcclxuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XHJcbiAgfVxyXG5cclxuICBfdGFyZ2V0cygpIHtcclxuICAgIHJldHVybiBbe1xyXG4gICAgICBcIm5hbWVcIjogXCJVbmlDYXRcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3VuaWNhdC5iZS91bmlDYXQ/ZnVuYz1zZWFyY2gmdWlMYW5ndWFnZT1lbiZxdWVyeT1cIixcclxuICAgICAgXCJpbWdcIjogXCIvcHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2ltZy91bmljYXRfaWNvbi5wbmdcIixcclxuICAgICAgXCJ0b29sdGlwXCI6IFwibGJzLm51aS5zZWFyY2hfYWxzby50b29sdGlwLnVuaWNhdFwiLFxyXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xyXG4gICAgICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XHJcbiAgICAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIFwibmFtZVwiOiBcIkdvb2dsZSBTY2hvbGFyXCIsXHJcbiAgICAvLyAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zY2hvbGFyLmdvb2dsZS5jb20vc2Nob2xhcj9xPVwiLFxyXG4gICAgLy8gICBcImltZ1wiOiBcIi9wcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaW1nL2dvb2dsZV9pY29uLnBuZ1wiLFxyXG4gICAgLy8gICBcInRvb2x0aXBcIjogXCJsYnMubnVpLnNlYXJjaF9hbHNvLnRvb2x0aXAuZ29vZ2xlX3Njb2xhclwiLFxyXG4gICAgLy8gICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xyXG4gICAgLy8gICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0sXHJcbiAgICB7XHJcbiAgICAgIFwibmFtZVwiOiBcIldvcmxkY2F0XCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cud29ybGRjYXQub3JnL3NlYXJjaD9xPVwiLFxyXG4gICAgICBcImltZ1wiOiBcIi9wcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaW1nL3dvcmxkY2F0X2ljb24ucG5nXCIsXHJcbiAgICAgIFwidG9vbHRpcFwiOiBcImxicy5udWkuc2VhcmNoX2Fsc28udG9vbHRpcC53b3JsZGNhdFwiLFxyXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xyXG4gICAgICAgIHZhciB0eXBlX21hcHBpbmdzID0ge1xyXG4gICAgICAgICAgXCJhbnlcIjogXCJrd1wiLFxyXG4gICAgICAgICAgXCJ0aXRsZVwiOiBcInRpXCIsXHJcbiAgICAgICAgICBcImNyZWF0b3JcIjogXCJhdVwiLFxyXG4gICAgICAgICAgXCJzdWJqZWN0XCI6IFwic3VcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICB2YXIgdHlwZSA9IHR5cGVfbWFwcGluZ3NbdGVybXNbMF1dIHx8IFwia3dcIjtcclxuICAgICAgICB2YXIgcXVlcnkgPSB0ZXJtc1syXSB8fCBcIlwiO1xyXG4gICAgICAgIHJldHVybiB0eXBlICsgJzonICsgcXVlcnk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyp7XHJcbiAgICAgIFwibmFtZVwiOiBcIkJpYmxpb3RoZWVrLmJlXCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuYmlibGlvdGhlZWsuYmUvY2F0YWxvZ3VzP3E9XCIsXHJcbiAgICAgIFwiaW1nXCI6IFwiL3ByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9pbWcvYmliX2JlLnBuZ1wiLFxyXG4gICAgICBcInRvb2x0aXBcIjogXCJsYnMubnVpLnNlYXJjaF9hbHNvLnRvb2x0aXAudW5pY2F0XCIsXHJcbiAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIG1hcHBpbmcoc2VhcmNoKSB7XHJcbiAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICByZXR1cm4gdGVybXNbMl0gfHwgXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSovXHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG5cclxuU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvbiddO1xyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQm9keUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBzZWFyY2hBbHNvQm9keUhUTUxcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQWxzb0JvZHlIVE1MIGZyb20gJy4vc2VhcmNoQWxzb0JvZHkuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcclxuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XHJcbiAgfVxyXG5cclxuICBfdGFyZ2V0cygpIHtcclxuICAgIHJldHVybiBbe1xyXG4gICAgICBcIm5hbWVcIjogXCJCaWJsaW90aGVlay5iZVwiLFxyXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmJpYmxpb3RoZWVrLmJlL2NhdGFsb2d1cz9xPVwiLFxyXG4gICAgICBcImltZ1wiOiBcIi9wcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaW1nL2JpYl9iZS5wbmdcIixcclxuICAgICAgXCJ0b29sdGlwXCI6IFwibGJzLm51aS5zZWFyY2hfYWxzby50b29sdGlwLmRlQmliXCIsXHJcbiAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIG1hcHBpbmcoc2VhcmNoKSB7XHJcbiAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICByZXR1cm4gdGVybXNbMl0gfHwgXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0JvZHlCaWJDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoQWxzb0JvZHlIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHBheU15RmluZXNIVE1MIGZyb20gJy4vcGF5TXlGaW5lcy5odG1sJ1xyXG5cclxuY2xhc3MgUGF5TXlGaW5lc0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5zaG93UGF5TXlGaW5lcyA9IGZhbHNlOyAgXHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBpZiAoL15LVUxldXZlbi8udGVzdCh2aWV3LmNvZGUpKSB7XHJcbiAgICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQYXlNeUZpbmVzID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBwYXlNeUZpbmVzQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOntcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUGF5TXlGaW5lc0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHBheU15RmluZXNIVE1MXHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoZSBhbHRtZXRyaWNzIGNvbXBvbmVudCBjb250cm9sbGVyLiAoaHR0cHM6Ly9naXRodWIuY29tL0RldC1Lb25nZWxpZ2UtQmlibGlvdGVrL3ByaW1vLWV4cGxvcmUtcmV4L2Jsb2IvbWFzdGVyL2pzL2FsdG1ldHJpY3MuY29tcG9uZW50LmpzKVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IEFsdG1ldHJpY3NCYWRnZUhUTUwgZnJvbSAnLi9hbHRtZXRyaWNzQmFkZ2UuaHRtbCdcclxuXHJcbmNsYXNzIEFsdG1ldHJpY3NCYWRnZUNvbnRyb2xsZXIge1xyXG5cclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHRpbWVvdXQsIEFsdG1ldHJpY3NTZXJ2aWNlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICBzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHNlbGYuQWx0bWV0cmljc1NlcnZpY2UgPSBBbHRtZXRyaWNzU2VydmljZTtcclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybDtcclxuICAgIHNlbGYuaXRlbSA9IHNlbGYucGFyZW50Q3RybC5pdGVtO1xyXG4gICAgc2VsZi5yZWNvcmRpZCA9IHNlbGYuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcclxuICAgIHNlbGYuZG9pID0gJyc7XHJcblxyXG4gICAgLy9wb2x5ZmlsbFxyXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihzKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKGVsKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5tYXRjaGVzKHMpKSByZXR1cm4gZWw7XHJcbiAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQgfHwgZWwucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoZWwgIT09IG51bGwgJiYgZWwubm9kZVR5cGUgPT09IDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgLy9lbmQgcG9seWZpbGxcclxuXHJcbiAgICBpZiAoc2VsZi5pdGVtICYmIHNlbGYuaXRlbS5wbnggJiYgc2VsZi5pdGVtLnBueC5hZGRhdGEgJiYgc2VsZi5pdGVtLnBueC5hZGRhdGEuZG9pKSB7XHJcbiAgICAgICAgc2VsZi5kb2kgPSBzZWxmLml0ZW0ucG54LmFkZGF0YS5kb2lbMF07XHJcbiAgICAgICAgc2VsZi5BbHRtZXRyaWNzU2VydmljZS5hZGRBbHRtZXRyaWNzKCcjZnVsbF9hbHRtZXRyaWNzXycgKyBzZWxmLnJlY29yZGlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgdmFyIGFsdG1ldHJpY3NTZWN0aW9uID0ge1xyXG4gICAgICAgICAgICBzY3JvbGxJZDogXCJhbHRtZXRyaWNzXCIsXHJcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBcImFsdG1ldHJpY3NcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiYnJpZWYucmVzdWx0cy50YWJzLkFsdG1ldHJpY3NcIlxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoIHNlbGYucGFyZW50Q3RybC5mdWxsVmlld1NlcnZpY2UuZ2V0U2VydmljZXMoIHNlbGYucGFyZW50Q3RybC5pdGVtLCBzZWxmLnBhcmVudEN0cmwub3JpZ2luYXRvcikgKS50aGVuKFxyXG4gICAgICAgICAgICBmdW5jdGlvbihzZXJ2aWNlcykge1xyXG4gICAgICAgICAgICAgIC8vIEFkZCB0byBzZXJ2aWNlcyBpZiBub3QgYWxyZWFkIGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgaWYgKCBzZXJ2aWNlcy5maW5kSW5kZXgoc2VydmljZSA9PiBzZXJ2aWNlLnNjcm9sbElkID09PSBcImFsdG1ldHJpY3NcIikgPCAwICl7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlcy5zcGxpY2Uoc2VydmljZXMubGVuZ3RoLCAxMCwgYWx0bWV0cmljc1NlY3Rpb24pOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIHNlbGYuZG9pICE9PSAnJyApIHtcclxuICAgICAgdmFyIHVuYmluZFdhdGNoZXIgPSB0aGlzLiRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vcmV0dXJuIHNlbGYuJGVsZW1lbnRbMF0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2g0W3RyYW5zbGF0ZT1cImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJdJyk7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuJGVsZW1lbnRbMF0uY2xvc2VzdCgnI2Z1bGxWaWV3JykucXVlcnlTZWxlY3RvcignaDRbdHJhbnNsYXRlPVwiYnJpZWYucmVzdWx0cy50YWJzLkFsdG1ldHJpY3NcIl0nKVxyXG4gICAgICB9LCBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgICBpZiAobmV3VmFsKSB7XHJcbiAgICAgICAgICAvL0dldCB0aGUgc2VjdGlvbiBib2R5IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmFsdWUgd2UncmUgd2F0Y2hpbmdcclxuICAgICAgICAgIGxldCBhbHRtZXRyaWNzQ29udGFpbmVyID0gbmV3VmFsLmNsb3Nlc3QoJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCdkaXYuc2VjdGlvbi1ib2R5Jyk7XHJcbiAgICAgICAgICBsZXQgYWx0bWV0cmljc1Jlc3VsdCA9IHNlbGYuJGVsZW1lbnRbMF07XHJcbiAgICAgICAgICBpZiAoYWx0bWV0cmljc0NvbnRhaW5lciAmJiBhbHRtZXRyaWNzQ29udGFpbmVyLmFwcGVuZENoaWxkICYmIGFsdG1ldHJpY3NSZXN1bHQpIHtcclxuICAgICAgICAgICAgYWx0bWV0cmljc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhbHRtZXRyaWNzUmVzdWx0KTtcclxuICAgICAgICAgICAgd2luZG93Ll9hbHRtZXRyaWNfZW1iZWRfaW5pdChhbHRtZXRyaWNzQ29udGFpbmVyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVuYmluZFdhdGNoZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWx0bWV0cmljc0JhZGdlQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEFsdG1ldHJpY3NCYWRnZUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IEFsdG1ldHJpY3NCYWRnZUhUTUxcclxufVxyXG4iLCJpbXBvcnQgYmV0YVN3aXRjaEhUTUwgZnJvbSAnLi9iZXRhU3dpdGNoLmh0bWwnXHJcblxyXG5jbGFzcyBCZXRhU3dpdGNoQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuXHJcbiAgICAkc2NvcGUuc2hvd0JldGFTd2l0Y2ggPSB0cnVlO1xyXG4gICAgJHNjb3BlLnVzZUJldGEgPSB0cnVlOyAgXHJcblxyXG4gICAgJHNjb3BlLm9uQ2hhbmdlVXNlQmV0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCEgJHNjb3BlLnVzZUJldGEpe1xyXG4gICAgICAgIHNlbGYuZ29Ub09sZFVJKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnb1RvT2xkVUkoKSB7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPScvcHJpbW9fbGlicmFyeS9saWJ3ZWIvYWN0aW9uL3NlYXJjaC5kbz92aWQ9JysgdGhpcy5vbGRWaWQ7XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgdmFyIExpbmtUb0JldGFWaWV3cyA9IHtcclxuICAgICAgJ0FDVic6J0FDVicsXHJcbiAgICAgICdCUEInOidCUEInLFxyXG4gICAgICAnRkFSTyc6J0ZBUk8nLFxyXG4gICAgICAnRk9ERklOJzonRk9ERklOJyAsXHJcbiAgICAgICdHQ0xEJzonR0NMRCcsXHJcbiAgICAgICdHU0InOidHU0InLFxyXG4gICAgICAnR1NHJzonR1NHJyxcclxuICAgICAgJ0lNRUMnOidJTUVDJyxcclxuICAgICAgJ0tBRE9DJzonS0FET0MnLFxyXG4gICAgICAnS0JDJzonS0JDJyxcclxuICAgICAgJ0tNS0cnOidLTUtHJyxcclxuICAgICAgJ0tVTGV1dmVuJzonS1VMZXV2ZW5fVVgnLFxyXG4gICAgICAnTElCQVInOidMSUJBUicsXHJcbiAgICAgICdMVUNBJzonTFVDQV9VWCcsXHJcbiAgICAgICdOQkInOidOQkInLFxyXG4gICAgICAnT0RJU0VFJzonT0RJU0VFX1VYJyxcclxuICAgICAgJ09GTyc6J09GTycsXHJcbiAgICAgICdSQklOUyc6J1JCSU5TJyxcclxuICAgICAgJ1JFTEknOidSRUxJJyxcclxuICAgICAgJ1JNQ0EnOidSTUNBJyxcclxuICAgICAgJ1NFUlYnOidTRVJWJyxcclxuICAgICAgJ1RNT1JFSyc6J1RNT1JFS19VWCcsXHJcbiAgICAgICdUTU9SRU0nOidUTU9SRU1BX1VYJyxcclxuICAgICAgJ1ZESUMnOidWRElDJyxcclxuICAgICAgJ1ZJVkVTX0tBVEhPJzonVklWRVNfS0FUSE9fVVgnLFxyXG4gICAgICAnVklWRVNfS0hCTyc6J1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnVkxQJzonVkxQJyxcclxuICAgICAgJ0tVTGV1dmVuX1RNT1JFTSc6J0tVTGV1dmVuX1RNT1JFTV9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9VQ0xMJzonS1VMZXV2ZW5fVUNMTF9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9UTU9SRUsnOidLVUxldXZlbl9UTU9SRUtfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fTFVDQSc6J0tVTGV1dmVuX0xVQ0FfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fVklWRVNfS0hCTyc6J0tVTGV1dmVuX1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fT0RJU0VFJzonS1VMZXV2ZW5fT0RJU0VFX1VYJyxcclxuICAgICAgJ0tITElNJzonVUNMTF9MSU1CVVJHX1VYJyxcclxuICAgICAgJ0tITCc6J1VDTExfTEVVVkVOX1VYJ1xyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eRUNCLy50ZXN0KHZpZXcuY29kZSkpIHtcclxuICAgICAgICB0aGlzLnNob3dCZXRhU3dpdGNoID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbGRWaWQgPSBPYmplY3Qua2V5cyhMaW5rVG9CZXRhVmlld3MpLmZpbmQoa2V5ID0+IExpbmtUb0JldGFWaWV3c1trZXldID09PSB2aWV3LmNvZGUpIHx8IHZpZXcuY29kZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYmV0YVN3aXRjaENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBCZXRhU3dpdGNoQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogYmV0YVN3aXRjaEhUTUxcclxufVxyXG4iLCJpbXBvcnQgaG9tZUljb25IVE1MIGZyb20gJy4vaG9tZUljb24uaHRtbCdcclxuXHJcbmNsYXNzIEhvbWVJY29uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgc2VsZi5saW5rdHlwZSA9ICdob21lSWNvbic7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKCh2aWV3KSA9PiB7XHJcbiAgICAgIGxldCB2aWQgPSB2aWV3LmNvZGU7XHJcbiAgICAgIGlmICh2aWQgPT0gXCJFQ0JcIikge1xyXG4gICAgICAgIHNlbGYubGlua3R5cGUgPSBcIm5ld1NlYXJjaEJ1dHRvblwiO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlOyAvL3dpbmRvdy5Qcmltby5leHBsb3JlLmhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuICAgICAgbGV0IGxvY2FsZUxpYnJhcnlMb2dvID0gJ2N1c3RvbS8nICsgdmlkICsgJy9pbWcvbGlicmFyeS1sb2dvLScgKyBsb2NhbGUgKyAnLnBuZyc7XHJcblxyXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsb2NhbGVMaWJyYXJ5TG9nbztcclxuICAgICAgICAgICAgJGNvbXBpbGUoJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkpKCRzY29wZSk7XHJcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvID0gbGlicmFyeUxvZ287XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9ICcvcHJpbW8tZXhwbG9yZS9zZWFyY2g/dmlkPScgKyB2aWQgKyBcIiZsYW5nPVwiICsgbG9jYWxlO1xyXG5cclxuICAgICAgJHNjb3BlLnJlbW92ZVN0aWNreUZhY2V0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZmFjZXRzID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJtLWZhY2V0Jyk7XHJcbiAgICAgICAgaWYgKGZhY2V0cykge1xyXG4gICAgICAgICAgdmFyIHN0aWNreUZhY2V0cyA9IGZhY2V0c1swXS5jdHJsKCkuZmFjZXRTZXJ2aWNlLmdldFN0aWNreUZhY2V0cygpXHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0aWNreUZhY2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5yZW1vdmVTdGlja3lGYWNldChzdGlja3lGYWNldHNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lSWNvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRodHRwJywgJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgaG9tZUljb25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogSG9tZUljb25Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBob21lSWNvbkhUTUxcclxufSIsImNsYXNzIExhbmd1YWdlRGVwZW5kZW50TG9nb0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlLCAkaHR0cCwgJHJvb3RTY29wZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5zY29wZSA9ICRzY29wZTtcclxuICAgIHNlbGYucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuXHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlOyAvL3dpbmRvdy5Qcmltby5leHBsb3JlLmhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuICAgICAgbGV0IGxvY2FsZUxpYnJhcnlMb2dvID0gJ2N1c3RvbS8nICsgdmlkICsgJy9pbWcvbGlicmFyeS1sb2dvLScgKyBsb2NhbGUgKyAnLnBuZyc7XHJcblxyXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgJGNvbXBpbGUoJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkpKCRzY29wZSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuTGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBsYW5ndWFnZURlcGVuZGVudExvZ29Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogTGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufSIsImltcG9ydCBuZXdTZWFyY2hCdXR0b25IVE1MIGZyb20gJy4vbmV3U2VhcmNoQnV0dG9uLmh0bWwnXHJcblxyXG5jbGFzcyBOZXdTZWFyY2hCdXR0b25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHAsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5wcmVwZW5kKCRjb21waWxlKG5ld1NlYXJjaEJ1dHRvbkhUTUwpKCRzY29wZSkpO1xyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbigodmlldykgPT4ge1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG4gICAgICBpZiAodmlkID09IFwiRUNCXCIpIHtcclxuICAgICAgICBzZWxmLmxpbmt0eXBlID0gXCJuZXdTZWFyY2hCdXR0b25cIjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9ICcvcHJpbW8tZXhwbG9yZS9zZWFyY2g/dmlkPScgKyB2aWQgKyBcIiZsYW5nPVwiICsgbG9jYWxlO1xyXG5cclxuICAgICAgc2VsZi5yZW1vdmVTdGlja3lGYWNldHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHBybUFkdmFuY2VkU2VhcmNoID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJtLWFkdmFuY2VkLXNlYXJjaCcpO1xyXG4gICAgICAgIGlmKHBybUFkdmFuY2VkU2VhcmNoKXtcclxuICAgICAgICAgIGxldCBjID0gcHJtQWR2YW5jZWRTZWFyY2hbMF0uY3RybCgpO1xyXG4gICAgICAgICAgYy5jbGVhclNlYXJjaEZvcm0oKTtcclxuICAgICAgICAgIGMuJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZhY2V0cyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldCcpO1xyXG4gICAgICAgIGlmIChmYWNldHMpIHtcclxuICAgICAgICAgIGxldCBzdGlja3lGYWNldHMgPSBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5nZXRTdGlja3lGYWNldHMoKVxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGlja3lGYWNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UucmVtb3ZlU3RpY2t5RmFjZXQoc3RpY2t5RmFjZXRzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBuZXdTZWFyY2hCdXR0b25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgdmlld0xvZ29IVE1MIGZyb20gJy4vdmlld0xvZ28uaHRtbCdcclxuXHJcbmNsYXNzIFZpZXdMb2dvQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KClbMF0uZmlyc3RDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpWzBdLmZpcnN0Q2hpbGQpO1xyXG5cclxuXHJcbiAgICAkdHJhbnNsYXRlKCdsaW1vLmluc3RpdHV0ZVVybCcpLnRoZW4oXHJcbiAgICAgIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlICAhPSAgJ2h0dHA6Ly93d3cubGliaXMuYmUvJyApe1xyXG4gICAgICAgIHNlbGYuaG9tZVBhZ2VMaW5rID0gbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7IC8vd2luZG93LlByaW1vLmV4cGxvcmUuaGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG4gICAgICBsZXQgbG9jYWxlTGlicmFyeUxvZ28gPSAnY3VzdG9tLycgKyB2aWQgKyAnL2ltZy9saWJyYXJ5LWxvZ28tJyArIGxvY2FsZSArICcucG5nJztcclxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcclxuICAgICAgc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuXHJcbiAgICAgICBpZiAoIHNlbGYubG9jYWxlTGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbyA9ICBsb2NhbGVMaWJyYXJ5TG9nb1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbztcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5WaWV3TG9nb0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCB2aWV3TG9nb0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBWaWV3TG9nb0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHZpZXdMb2dvSFRNTFxyXG59XHJcbiIsImltcG9ydCBmZWVkYmFja0hUTUwgZnJvbSAnLi9mZWVkYmFjay5odG1sJ1xyXG5pbXBvcnQgZmVlZGJhY2tEaWFsb2dIVE1MIGZyb20gJy4vZmVlZGJhY2tEaWFsb2cuaHRtbCdcclxuXHJcbmNsYXNzIEZlZWRiYWNrQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsIEZlZWRiYWNrU2VydmljZSl7XHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdkaXYnKS5hcHBlbmQoJGNvbXBpbGUoZmVlZGJhY2tIVE1MKSgkc2NvcGUpKTtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlID0gRmVlZGJhY2tTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgc2hvd0ZlZWRiYWNrRm9ybSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLnNob3coJGV2ZW50LCBmZWVkYmFja0RpYWxvZ0hUTUwpO1xyXG4gIH1cclxufVxyXG5cclxuRmVlZGJhY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICdGZWVkYmFja1NlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgZmVlZGJhY2tDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmVlZGJhY2tDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsIi8qIGNvbXBvbmVudCB0byBkbyBhbGwgeW91ciBleHBlcmltZW50YWwgc3R1ZmYgKi9cclxuLyogW2VufGRpc11hYmxlIGluIGNvbXBvbmVudHMgKi9cclxuXHJcbmNsYXNzIFJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4vKlxyXG4gICAgY29uc29sZS5sb2coc2VsZilcclxuICAgIGNvbnNvbGUubG9nKCBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UuY29uZmlndXJhdGlvblV0aWwudmlkICk7XHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudmlkICk7XHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UuaW5zdCApO1xyXG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnVzZXJJbnN0aXR1dGlvbiApO1xyXG4qL1xyXG4gICAgdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwub3JnR2V0TGluayA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmdldExpbms7XHJcbiAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5nZXRMaW5rID0gZnVuY3Rpb24oKSB7IFxyXG4gICAgICB2YXIgZ2V0SXRMaW5rID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwub3JnR2V0TGluaygpO1xyXG4gICAgICByZXR1cm4gZ2V0SXRMaW5rLnJlcGxhY2UoL1xcL29wZW51cmxcXC9bXi9dKlxcL1teP10qLywgXCIvb3BlbnVybFxcL1wiKyBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS51c2VySW5zdGl0dXRpb24gK1wiXFwvXCIrIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS5jb25maWd1cmF0aW9uVXRpbC52aWQpIFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcblJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50J11cclxuXHJcbmV4cG9ydCBsZXQgcmVjb21tZW5kYXRpb25JdGVtQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGlsbFJlcXVlc3RGb3JtSFRNTCBmcm9tICcuL2lsbFJlcXVlc3RGb3JtLmh0bWwnXHJcblxyXG5jbGFzcyBpbGxSZXF1ZXN0Rm9ybUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkd2luZG93LCAkcm9vdFNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgICAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICAgICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5zdGl0dXRpb25Db2RlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgJG9uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uQ29kZSA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnJlcXVlc3RzU2VydmljZS5hY2NvdW50U2VydmljZS5saW5rZWRVc2VyU2VsZWN0b3JTZXJ2aWNlLnNlbGVjdGVkSW5zdGl0dXRpb24uaW5zdGl0dXRpb25Db2RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBhbG1hX2NvZGVzID0gdGhpcy5yb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5tYXBwaW5nVGFibGVzQ2FjaGUuTUFQUElOR19UQUJMRVNfQ0FDSEVbXCJBbG1hIEluc3RpdHV0aW9uIENvZGVzXCJdO1xyXG4gICAgICAgICAgICB2YXIgdXNlcl9pbnN0ID0gdGhpcy5yb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS51c2VySW5zdGl0dXRpb247XHJcbiAgICAgICAgICAgIHZhciBhbG1hX2NvZGUgPSBhbG1hX2NvZGVzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmoudGFyZ2V0ID09IHVzZXJfaW5zdDsgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nIChhbG1hX2NvZGVbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uQ29kZSA9IGFsbWFfY29kZVswXS5zb3VyY2UxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdpbnN0aXR1dGlvbkNvZGU6JyArIGluc3RpdHV0aW9uQ29kZSlcclxuICAgICAgICBpZiAodGhpcy5pbnN0aXR1dGlvbkNvZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvSWxsUmVxdWVzdFVybCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0aXR1dGlvbkNvZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaWxsUmVxdWVzdFVybCA9ICdodHRwczovL2xldXZlbi1wcmltby5ob3N0ZWQuZXhsaWJyaXNncm91cC5jb20vcGRzP2Z1bmM9c3NvJnVybD1odHRwOi8vZXUuYWxtYS5leGxpYnJpc2dyb3VwLmNvbS92aWV3L3VyZXNvbHZlci8nICsgdGhpcy5pbnN0aXR1dGlvbkNvZGUgKyAnL29wZW51cmw/c3ZjX2RhdD1nZXRpdCZzdmMucHJvZmlsZT1nZXRpdCZkaXJlY3RSZXNvdXJjZVNoYXJpbmdSZXF1ZXN0PXRydWUmbmV3VUk9dHJ1ZSdcclxuICAgICAgICAgICAgdGhpcy53aW5kb3cub3Blbih0aGlzLmlsbFJlcXVlc3RVcmwsICdfZnJlZUlsbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5pbGxSZXF1ZXN0Rm9ybUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJHdpbmRvdycsJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgaWxsUmVxdWVzdEZvcm1Db25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IGlsbFJlcXVlc3RGb3JtQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiBpbGxSZXF1ZXN0Rm9ybUhUTUxcclxufVxyXG4iLCJpbXBvcnQgYnJvd3ppbmVIVE1MIGZyb20gJy4vYnJvd3ppbmUuaHRtbCdcclxuXHJcbmNsYXNzIEJyb3d6aW5lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5yZXN1bHQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0+XCIsc2VsZiwgaXRlbSwgJHNjb3BlKTtcclxuXHJcbiAgICAgICAgc2VsZi5yZWNvcmRpZCA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnBueCAmJiBpdGVtLnBueC5hZGRhdGEpIHtcclxuICAgICAgICAgICAgc2VsZi5yZWNvcmRpZCA9IGl0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnJvd3ppbmVXYXRjaGVyID0gJHNjb3BlLiR3YXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYnJvd3ppbmUucHJpbW8gPT09ICdvYmplY3QnXHJcbiAgICAgICAgfSwgKG4sIG8pID0+IHtcclxuICAgICAgICAgICAgaWYgKG4gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyIGJyb3d6aW5lIGZvcjpcIiwgc2VsZi5yZWNvcmRpZClcclxuICAgICAgICAgICAgICAgIGxldCBzY29wZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAkY3RybDogc2VsZi5wYXJlbnRDdHJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYnJvd3ppbmUucHJpbW8uc2VhcmNoUmVzdWx0KHNjb3BlKTtcclxuICAgICAgICAgICAgICAgIGJyb3d6aW5lV2F0Y2hlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuQnJvd3ppbmVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBicm93emluZUNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogQnJvd3ppbmVDb250cm9sbGVyXHJcbn0iLCJpbXBvcnQgcG54WG1sSFRNTCBmcm9tICcuL3BueFhtbC5odG1sJ1xyXG5jbGFzcyBQbnhYbWxDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMucmVjb3JkaWQgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLnJlY29yZGlkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoaG90a2V5cykge1xyXG4gICAgICBob3RrZXlzKFwiY3RybCtlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG54LXhtbCcpKSkge1xyXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3BueC14bWwtdHJpZ2dlcicpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwbngteG1sLXRyaWdnZXInKTtcclxuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7ei1pbmRleDoxMDAwO2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouMDMnKTtcclxuICAgICAgZGl2Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcclxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYudmlzaWJsZSA/ICdmbGV4JyA6ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwbnhYbWxDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUG54WG1sQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogcG54WG1sSFRNTFxyXG59XHJcbiIsImltcG9ydCByZXBvcnRBUHJvYmxlbUhUTUwgZnJvbSAnLi9yZXBvcnRBUHJvYmxlbS5odG1sJ1xyXG5pbXBvcnQgcmVwb3J0QVByb2JsZW1EaWFsb2dIVE1MIGZyb20gJy4vcmVwb3J0QVByb2JsZW1EaWFsb2cuaHRtbCdcclxuXHJcbmNsYXNzIFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwLHJlcG9ydEFQcm9ibGVtVVJMKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdCh0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC50aXRsZSkpIHtcclxuICAgICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnaDQnKS5hZnRlcigkY29tcGlsZShyZXBvcnRBUHJvYmxlbUhUTUwpKCRzY29wZSkpO1xyXG5cclxuICAgICAgbGV0IHJlY29yZERhdGEgPSBzZWxmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgIHNlbGYuc2hvd1JlcG9ydEFQcm9ibGVtRm9ybSA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxyXG4gICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVwb3J0QVByb2JsZW1EaWFsb2dIVE1MLFxyXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJG1kRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucmVwb3J0ID0ge1xyXG4gICAgICAgICAgICAgICAgICByZXBseVRvOiBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICBzdWJqZWN0OiAncmVwb3J0IGEgcHJvYmxlbSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxSZXBvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbmRSZXBvcnQgPSBmdW5jdGlvbihhbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wucmVjb3JkaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzY29wZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFR5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25JZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0YWI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZWNvcmREYXRhLnBueC5kaXNwbGF5LnRpdGxlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZXNvdXJjZV9wcm9ibGVtJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAkc2NvcGUucmVwb3J0LnN1YmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAkc2NvcGUucmVwb3J0Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlUbzogJHNjb3BlLnJlcG9ydC5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yZXBvcnQucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5yZXBvcnQubWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcG9ydEFQcm9ibGVtVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJztcclxuICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJztcclxuICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07IC8vc2hvd1JlcG9ydEFQcm9ibGVtRm9ybVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50UmVjb3JkKCkge1xyXG4gICAgbGV0IHNlbGVjdG9yID0gJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInOyAvLydwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJ1xyXG4gICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgbGV0IGVsZW1lbnRDdHJsID0gZWxlbWVudC5jb250cm9sbGVyKHNlbGVjdG9yKTtcclxuICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Q3RybCk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Q3RybC5pdGVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5SZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckaHR0cCcsJ3JlcG9ydEFQcm9ibGVtVVJMJ107XHJcblxyXG5leHBvcnQgbGV0IHJlcG9ydEFQcm9ibGVtQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgcmVxdWVzdEFDb3B5SFRNTCBmcm9tICcuL3JlcXVlc3RBQ29weS5odG1sJ1xyXG5pbXBvcnQgcmVxdWVzdEFDb3B5RGlhbG9nSFRNTCBmcm9tICcuL3JlcXVlc3RBQ29weURpYWxvZy5odG1sJ1xyXG5cclxuY2xhc3MgUmVxdWVzdEFDb3B5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwLCAkcm9vdFNjb3BlLCByZXF1ZXN0QUNvcHlVUkwsIE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgLy8gSWYgeW91IHdhbnQgdG8gYWRkIHRoZSBidXR0b24gdG8gdGhlIHRpdGxlIChsaWtlIHJlcG9ydCBhIHByb2JsZW0pXHJcbiAgICAvL2xldCBzZXJ2aWNlVGl0bGVDb2RlID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwudGl0bGVcclxuICAgIC8vbGV0IGFwcGVuZEJ1dHRvblRvID0gJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnaDQnKTtcclxuXHJcbiAgICBsZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnNlcnZpY2UudGl0bGU7XHJcbiAgICBsZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKTtcclxuICAgIGxldCByZWNvcmREYXRhID0gc2VsZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgLyogY2FwdGNoYSBpbXBsZW1lbnRhdGlvbiAoQWxyZWFkeSB1c2VkIGluIClcclxuICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vVml2aWRDb3J0ZXgvYW5ndWxhci1yZWNhcHRjaGFcclxuICAgICAgICAqL1xyXG4gICAgbGV0IGNhcGNoYVB1YmxpY0tleSA9IHdpbmRvdy5hcHBDb25maWdbXCJzeXN0ZW0tY29uZmlndXJhdGlvblwiXVtcIlB1YmxpYyBDYXB0Y2hhIEtleVwiXTtcclxuXHJcbiAgICBsZXQgVHlwZXNTaG93UmVxdWVzdEFDb3B5ID0gWydjaGFwdGVyJywnam91cm5hbC1hcnRpY2xlJywndGhlc2lzLWRpc3NlcnRhdGlvbicsJ2NvbmZlcmVuY2UnLCdyZXBvcnQnLCdkYXRhc2V0JywnYy1ib29rcmV2aWV3JywnbWVkaWEnLCdzb2Z0d2FyZSddO1xyXG4gICAgbGV0IFN0YXR1c1Nob3dSZXF1ZXN0QUNvcHkgPSBbJ3B1Ymxpc2hlZCddO1xyXG5cclxuICAgIGlmICgvXm51aVxcLmdldGl0XFwuLy50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpKSB7XHJcbiAgICAgIHZhciBTaG93UmVxdWVzdEFDb3B5VHlwZSA9IHJlY29yZERhdGEucG54LmZhY2V0cy5sZmMxNi5maWx0ZXIodmFsdWUgPT4gLTEgIT09IFR5cGVzU2hvd1JlcXVlc3RBQ29weS5pbmRleE9mKHZhbHVlKSk7XHJcbiAgICAgIHZhciBTaG93UmVxdWVzdEFDb3B5U3RhdHVzID0gcmVjb3JkRGF0YS5wbnguZmFjZXRzLmxmYzEyLmZpbHRlcih2YWx1ZSA9PiAtMSAhPT0gU3RhdHVzU2hvd1JlcXVlc3RBQ29weS5pbmRleE9mKHZhbHVlKSk7XHJcblxyXG4gICAgICBpZiAoKCEvXm51aVxcLmdldGl0XFwudGFiMV9vbmxfbm9yZXN0cmljdC8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkgJiYgU2hvd1JlcXVlc3RBQ29weVR5cGUubGVuZ3RoID4gMCAmJiBTaG93UmVxdWVzdEFDb3B5U3RhdHVzLmxlbmd0aCA+IDApIHtcclxuXHJcblxyXG4gICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgICBzZWxmLm9uQ2FtcHVzID0gc2VsZi51c2VyLmlzT25DYW1wdXMoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIHNlcnZpY2VUaXRsZUNvZGUgKVxyXG4gICAgICAgICAgICBpZiAoICEgL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX21heXJlc3RyaWN0Ly50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpICB8fCAvXm51aVxcLmdldGl0XFwudGFiMV9vbmxfbWF5cmVzdHJpY3QvLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkgJiYgISBzZWxmLm9uQ2FtcHVzICkge1xyXG4gICAgICAgICAgICAgIGFwcGVuZEJ1dHRvblRvLmFmdGVyKCRjb21waWxlKHJlcXVlc3RBQ29weUhUTUwpKCRzY29wZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgc2VsZi5zaG93UmVxdWVzdEFDb3B5Rm9ybSA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWVzdEFDb3B5RGlhbG9nSFRNTCxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRtZERpYWxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgbGV0IHBueERpc3BsYXkgPSAgcmVjb3JkRGF0YS5wbnguZGlzcGxheTtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmdDYXB0Y2hhUmVzcG9uc2UgPSAnJztcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNhcGNoYVB1YmxpY0tleSA9IGNhcGNoYVB1YmxpY0tleTtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdGl2YXRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwbnhEaXNwbGF5LnRpdGxlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dG9yOiAoKCkgPT4geyAoIHBueERpc3BsYXkuY29udHJpYnV0b3IgPyBwbnhEaXNwbGF5LmNvbnRyaWJ1dG9yWzBdIDogJycgKSB9KSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0b3I6IHBueERpc3BsYXkuY3JlYXRvciA/IHBueERpc3BsYXkuY3JlYXRvclswXSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzcGFydG9mOiBwbnhEaXNwbGF5LmlzcGFydG9mID8gcG54RGlzcGxheS5pc3BhcnRvZlswXSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICdyZXF1ZXN0IGEgY29weSdcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNldFdpZGdldElkID0gZnVuY3Rpb24gKHdpZGdldElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdDcmVhdGVkIHdpZGdldCBJRDogJXMnLCB3aWRnZXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLndpZGdldElkID0gd2lkZ2V0SWQ7XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZXRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IHJlc3BvbnNlIGZyb20gY2FwdHVyZTpcIiArIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ0NhcHRjaGFSZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuY2JFeHBpcmF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRXhwaXJhdGlvbiBEaXNhYmxlIFN1Ym1pdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5nQ2FwdGNoYVJlc3BvbnNlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuY2FuY2VsUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZW5kUmVxdWVzdCA9IGZ1bmN0aW9uIChhbnN3ZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAnZy1yZWNhcHRjaGEtcmVzcG9uc2UnOiAkc2NvcGUuZ0NhcHRjaGFSZXNwb25zZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25JZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkOiByZWNvcmREYXRhLnBueC5jb250cm9sLnNvdXJjZWlkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVjb3JkSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wucmVjb3JkaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VSZWNvcmRJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5zb3VyY2VyZWNvcmRpZFswXSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwbnhEaXNwbGF5LnRpdGxlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3I6ICgoKSA9PiB7ICggcG54RGlzcGxheS5jb250cmlidXRvciA/IHBueERpc3BsYXkuY29udHJpYnV0b3JbMF0gOiAnJyApIH0pKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yOiBwbnhEaXNwbGF5LmNyZWF0b3IgPyBwbnhEaXNwbGF5LmNyZWF0b3JbMF0gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzcGFydG9mOiBwbnhEaXNwbGF5LmlzcGFydG9mID8gcG54RGlzcGxheS5pc3BhcnRvZlswXSA6ICcnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcGx5VG86ICRzY29wZS5yZXF1ZXN0LnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbW90aXZhdGlvbjogJHNjb3BlLnJlcXVlc3QubW90aXZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2cgKCBkYXRhIClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucmVxdWVzdC5yZXBseVRvLmxlbmd0aCA+IDAgJiYgJHNjb3BlLnJlcXVlc3QubW90aXZhdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDpyZXF1ZXN0QUNvcHlVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLiRyb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwuJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnJlcXVlc3RfYV9jb3B5LnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IHRoZSByZXF1ZXN0IGhhZCBiZWVuIHNlbmQhJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2UuX19zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiAkc2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURlbGF5OiA1MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi4kcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLiR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5yZXF1ZXN0X2FfY29weS5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgdGhlIHJlcXVlc3QuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIG1lc3NhZ2UgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5fX3Nob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICRzY29wZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRGVsYXk6IDUwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTsgLy9zaG93UmVxdWVzdEFDb3B5Rm9ybVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gLy9pZiAoICggISAvXm51aVxcLmdldGl0XFwudGFiMV9vbmxfbm9yZXN0cmljdC8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSAgKSApe1xyXG4gICAgfSAvLyBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkgIFxyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRSZWNvcmQoKSB7XHJcbiAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXHJcbiAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Q3RybCk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Q3RybC5pdGVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5SZXF1ZXN0QUNvcHlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJGh0dHAnLCAnJHJvb3RTY29wZScsICdyZXF1ZXN0QUNvcHlVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgcmVxdWVzdEFDb3B5Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlcXVlc3RBQ29weUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0iLCJpbXBvcnQgcmVxdWVzdEFDb3B5T2ZFc0RvY0hUTUwgZnJvbSAnLi9yZXF1ZXN0QUNvcHlPZkVzRG9jLmh0bWwnXHJcblxyXG5jbGFzcyBSZXF1ZXN0QUNvcHlPZkVzRG9jQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgcmVxdWVzdEFDb3B5T2ZFc0RvY1VSTCwgJHdpbmRvdywgV2luZG93RXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLiRyb290U2NvcGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC4kcm9vdFNjb3BlO1xyXG4gICAgICAgIHNlbGYuV2luZG93RXZlbnRMaXN0ZW5lciA9IFdpbmRvd0V2ZW50TGlzdGVuZXI7XHJcbiAgICAgICAgLy8gSWYgeW91IHdhbnQgdG8gYWRkIHRoZSBidXR0b24gdG8gdGhlIHRpdGxlIChsaWtlIHJlcG9ydCBhIHByb2JsZW0pXHJcbiAgICAgICAgLy9sZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnRpdGxlXHJcbiAgICAgICAgLy9sZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdoNCcpO1xyXG5cclxuICAgICAgICBsZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnNlcnZpY2UudGl0bGU7XHJcbiAgICAgICAgbGV0IGFwcGVuZEJ1dHRvblRvID0gJGVsZW1lbnQucGFyZW50KCk7XHJcbiAgICAgICAgbGV0IHJlY29yZERhdGEgPSBzZWxmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGV0IFR5cGVzU2hvd1JlcXVlc3RBQ29weU9mRXNEb2MgPSBbJ2NoYXB0ZXInLCAnam91cm5hbC1hcnRpY2xlJywgJ3RoZXNpcy1kaXNzZXJ0YXRpb24nLCAnY29uZmVyZW5jZScsICdyZXBvcnQnLCAnZGF0YXNldCcsICdjLWJvb2tyZXZpZXcnLCAnbWVkaWEnLCAnc29mdHdhcmUnXTtcclxuICAgICAgICBsZXQgU3RhdHVzU2hvd1JlcXVlc3RBQ29weU9mRXNEb2MgPSBbJ3B1Ymxpc2hlZCddO1xyXG4gICAgICAgICovXHJcblxyXG4gICAgICAgIGlmICgvXm51aVxcLmdldGl0XFwuLy50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coIHNlbGYgKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZSlcclxuICAgICAgICAgICAgbGV0IHByaW1vRXhwbG9yZUp3dCA9IHNlbGYuJHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC5qd3RVdGlsU2VydmljZS5zdG9yYWdlVXRpbC5zZXNzaW9uU3RvcmFnZS5wcmltb0V4cGxvcmVKd3Q7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYuJHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC5qd3RVdGlsU2VydmljZS5zdG9yYWdlVXRpbC5zZXNzaW9uU3RvcmFnZS5wcmltb0V4cGxvcmVKd3QpXHJcblxyXG4gICAgICAgICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIHNlbGYub25DYW1wdXMgPSBzZWxmLnVzZXIuaXNPbkNhbXB1cygpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pc0xvZ2dlZEluID0gc2VsZi51c2VyLmlzTG9nZ2VkSW4oKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGlzcGxheV9uYW1lID0gc2VsZi51c2VyLmRpc3BsYXlfbmFtZVxyXG4gICAgICAgICAgICAgICAgc2VsZi5lbWFpbCA9IHNlbGYudXNlci5lbWFpbFxyXG4qL1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci5pc09uQ2FtcHVzIHx8IHVzZXIuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLyogIyMjIyBDaGVjayBmb3IgIDxzY29wZUFyY2hpdl9mdWxsdGV4dD5yZXN0cmljdGVkPC9zY29wZUFyY2hpdl9mdWxsdGV4dD4gIyMjICovXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBueCA9IHJlY29yZERhdGEucG54XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kQnV0dG9uVG8uYWZ0ZXIoJGNvbXBpbGUocmVxdWVzdEFDb3B5T2ZFc0RvY0hUTUwpKCRzY29wZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYub3BlblVybFRvSUxMID0gKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgaHR0cDovL3NlcnZpY2VzLmxpYmlzLmJlL2lsbGZvcm0vMzJLVUxfU0VSVj9yZnQuZ2VucmU9Ym9vayZyZnQuYWR2aXNvcj0mcmZ0LmF1PSZyZnQuYXVjb3JwPSZyZnQuYXVmaXJzdD0mcmZ0LmF1bGFzdD0mcmZ0LmNvbnRyaWJ1dG9yPSZyZnQuY3JlYXRvcj0mcmZ0LmF0aXRsZT0mcmZ0LmJ0aXRsZT1Xb29kJnJmdC5qdGl0bGU9JnJmdC5zdGl0bGU9JnJmdC50aXRsZT1Xb29kJnJmdC5zZXJpZXM9JnJmdC5kZWdyZWU9JnJmdC5kZXNjcmlwdGlvbj0mcmZ0LmVkaXRpb249JnJmdC5pZGVudGlmaWVyPSZyZnQuZWlzYm49JnJmdC5laXNzbj0mcmZ0LmlzYm49OTc4MDcxNDg3MzQ4MCZyZnQuaXNzbj0mcmZ0LnBhZ2VzPSZyZnQucGFydD0mcmZ0LmVwYWdlPSZyZnQuc3BhZ2U9JnJmdC5zc249JnJmdC50cGFnZXM9JnJmdC55ZWFyPSZyZnQubW9udGg9JnJmdC5kYXk9JnJmdC52b2x1bWU9JnJmdC5pc3N1ZT0mcmZ0LmRhdGU9JnJmdC5wbGFjZT0mcmZ0LnB1Yj0mcmZ0LnB1YmRhdGU9MjAxNyZyZnQucHViZGF5PSZyZnQucHVibGlzaGVyPSZyZnQucHVieWVhcj0mbG9jYWxlPW5sX0JFXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkL3ByaW1vLmV4bGlicmlzZ3JvdXAuY29tOnByaW1vMy1BcnRpY2xlLUVTVkxQX3Njb3BlQXJjaGl2JnJmdF92YWxfZm10PWluZm86b2ZpL2ZtdDprZXY6bXR4OlxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGVudXJsID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGlzcGxheS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0LmdlbnJlPVwiICsgZW5jb2RlVVJJKHBueC5kaXNwbGF5LnR5cGVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGlzcGxheS50eXBlWzBdID09PSBcImFydGljbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRpc3BsYXkudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0LmF0aXRsZT1cIiArIGVuY29kZVVSSShwbnguZGlzcGxheS50aXRsZVswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRpc3BsYXkuaXNwYXJ0b2YpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0Lmp0aXRsZT1cIiArIGVuY29kZVVSSShwbnguZGlzcGxheS5pc3BhcnRvZlswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGlzcGxheS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbnVybCArPSBcIiZyZnQuYnRpdGxlPVwiICsgZW5jb2RlVVJJKHBueC5kaXNwbGF5LnRpdGxlWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGlzcGxheS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5idGl0bGU9XCIgKyBlbmNvZGVVUkkocG54LmRpc3BsYXkudGl0bGVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGlzcGxheS5sZHMyNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5hdT1cIiArIGVuY29kZVVSSShwbnguZGlzcGxheS5sZHMyNlswXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5kaXNwbGF5LmNyZWF0aW9uZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5kYXRlPVwiICsgZW5jb2RlVVJJKHBueC5kaXNwbGF5LmNyZWF0aW9uZGF0ZVswXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgJnJmdC5wYWdlcz1cclxuICAgICAgICAgICAgICAgICAgICAmcmZ0LmFydG51bT1cclxuICAgICAgICAgICAgICAgICAgICAmcmZ0Lmlzc249XHJcbiAgICAgICAgICAgICAgICAgICAgJnJmdC5laXNzbj1cclxuICAgICAgICAgICAgICAgICAgICAmcmZ0LmlzYm49XHJcbiAgICAgICAgICAgICAgICAgICAgJnJmdC5zaWNpPVxyXG4gICAgICAgICAgICAgICAgICAgICZyZnQuZWlzYm49XHJcbiAgICAgICAgICAgICAgICAgICAgJnJmdC5jb2Rlbj1cclxuICAgICAgICAgICAgICAgICAgICAmcmZ0X2lkPWluZm86ZG9pL1xyXG4gICAgICAgICAgICAgICAgICAgICZyZnQub2JqZWN0X2lkPVxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5jb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0X2RhdD0lM0NcIiArIGVuY29kZVVSSShwbnguY29udHJvbC5zb3VyY2VpZFswXSkgKyBcIiUzRVwiICsgZW5jb2RlVVJJKHBueC5jb250cm9sLnNvdXJjZXJlY29yZGlkWzBdKSArIFwiJTNDL1wiICsgZW5jb2RlVVJJKHBueC5jb250cm9sLnNvdXJjZWlkWzBdKSArIFwiJTNFXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW51cmwgPSByZXF1ZXN0QUNvcHlPZkVzRG9jVVJMICsgXCIvMzJLVUxfVkxQP1wiICsgb3BlbnVybCArIFwiJmFjY2Vzc190b2tlbj1cIiArIHByaW1vRXhwbG9yZUp3dFxyXG4gICAgICAgICAgICAgICAgICAgICR3aW5kb3cub3BlbihvcGVudXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50UmVjb3JkKCkge1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9ICdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJzsgLy8ncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcidcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRDdHJsID0gZWxlbWVudC5jb250cm9sbGVyKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudEN0cmwpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudEN0cmwuaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlcXVlc3RBQ29weU9mRXNEb2NDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICdyZXF1ZXN0QUNvcHlPZkVzRG9jVVJMJywgJyR3aW5kb3cnLCAnV2luZG93RXZlbnRMaXN0ZW5lciddO1xyXG5cclxuZXhwb3J0IGxldCByZXF1ZXN0QUNvcHlPZkVzRG9jQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBSZXF1ZXN0QUNvcHlPZkVzRG9jQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnJ1xyXG59IiwiY2xhc3MgQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coJycsICRzY29wZSk7XHJcbiAgfVxyXG59XHJcblxyXG5Bbm5vdW5jZW1lbnRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgYW5ub3VuY2VtZW50c0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGZlZWRiYWNrQW5ub3VuY2VtZW50SFRNTCBmcm9tICcuL2ZlZWRiYWNrQW5ub3VuY2VtZW50Lmh0bWwnXHJcbmltcG9ydCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0hUTUwgZnJvbSAnLi9mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZy5odG1sJ1xyXG5pbXBvcnQgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyIGZyb20gJy4vZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2cnXHJcblxyXG5jbGFzcyBGZWVkYmFja0Fubm91bmNlbWVudENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRyYW5zbGF0ZSwgJHRpbWVvdXQsIEZlZWRiYWNrU2VydmljZSwgTWVzc2FnZVNlcnZpY2UsIGFjdGlvbkljb25zKSB7XHJcblxyXG4gICAgLy8kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vbGV0IG1lc3NhZ2UgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuc3VydmV5LmFubm91bmNlbWVudCcpO1xyXG4gICAgICBsZXQgc2hvd0ZlZWRiYWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByaW1vRmVlZGJhY2snKTtcclxuICAgICAgaWYgKHNob3dGZWVkYmFjayA9PSBudWxsKSB7XHJcbiAgICAgICAgJHRyYW5zbGF0ZSgnbGJzLm51aS5zdXJ2ZXkuYW5ub3VuY2VtZW50JykudGhlbigobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhmZWVkYmFja0Fubm91bmNlbWVudEhUTUwucmVwbGFjZSgne3ttZXNzYWdlfX0nLCBtZXNzYWdlKSwge1xyXG4gICAgICAgICAgICBzY29wZTogJHNjb3BlLFxyXG4gICAgICAgICAgICBoaWRlRGVsYXk6IDAsXHJcbiAgICAgICAgICAgIGFjdGlvbkxhYmVsOiAkdHJhbnNsYXRlLmluc3RhbnQoJ21haW5tZW51LmxhYmVsLmZlZWRiYWNrJykgfHwgJ0ZlZWRiYWNrJyxcclxuICAgICAgICAgICAgYWN0aW9uOlxyXG4gICAgICAgICAgICAgICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIEZlZWRiYWNrU2VydmljZS5zaG93KCRldmVudCwgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dIVE1MLCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAvL30sIDIwMDApO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbkZlZWRiYWNrQW5ub3VuY2VtZW50Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCcsICdGZWVkYmFja1NlcnZpY2UnLCAnTWVzc2FnZVNlcnZpY2UnLCAnYWN0aW9uSWNvbnMnXTtcclxuXHJcbmV4cG9ydCBsZXQgZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmVlZGJhY2tBbm5vdW5jZW1lbnRDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkbWREaWFsb2csICRtZFRvYXN0LCAkdHJhbnNsYXRlLCAkaHR0cCwgZmVlZGJhY2tTZXJ2aWNlVVJMLCBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5zY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XHJcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgIHRoaXMuaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwgPSBmZWVkYmFja1NlcnZpY2VVUkw7XHJcblxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICRzY29wZS5jYW5jZWxGZWVkYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5tZERpYWxvZy5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gKGFuc3dlcikgPT4ge1xyXG4gICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICBzdWJqZWN0OiAkc2NvcGUuZmVlZGJhY2suc3ViamVjdCxcclxuICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcclxuICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcclxuICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXHJcbiAgICAgICAgdHlwZTogJ3N1cnZleScsXHJcbiAgICAgICAgZmVlZGJhY2s6ICRzY29wZS5mZWVkYmFjay5hbnN3ZXJzLFxyXG4gICAgICAgIGVtYWlsOiAkc2NvcGUuZmVlZGJhY2sucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgdXNlcklkOiBzZWxmLnVzZXIuaWQgfHwgJycsXHJcbiAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNlbGYubWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICBzZWxmLmh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICB1cmw6IHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9GZWVkYmFjaycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrISc7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLic7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcbiAgICAgICAgJHNjb3BlLmZlZWRiYWNrID0ge1xyXG4gICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgYW5zd2VyczogW10sXHJcbiAgICAgICAgICBzdWJqZWN0OiAnZmVlZGJhY2snXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJHRyYW5zbGF0ZScsICckaHR0cCcsICdmZWVkYmFja1NlcnZpY2VVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuIiwiY2xhc3MgRmluZXNNZXNzYWdlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoTWVzc2FnZVNlcnZpY2UsICR0cmFuc2xhdGUsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vVE9ETzpleHRyYWN0IGh0bWwgdG8gaXRzIG93biBmaWxlLiBmaW5kIG91dCBob3cgdG8gcmVzb2x2ZSB7e319XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnlvdUhhdmVGaW5lcycpO1xyXG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xcJDAvLCB1c2VyLmZpbmVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGxldCBwYXkgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkueW91SGF2ZUZpbmVzLnBheScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coYFxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImFsaWduLXNlbGY6Y2VudGVyO1wiPiR7bWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO2NvbG9yOiB3aGl0ZTtcIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtc2VjdW5kYXJ5XCIgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvcGF5X215X2ZpbmVzJz4ke3BheX08L2E+XHJcbiAgICAgICAgICBgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5GaW5lc01lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ01lc3NhZ2VTZXJ2aWNlJywgJyR0cmFuc2xhdGUnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBmaW5lc01lc3NhZ2VDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmluZXNNZXNzYWdlQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbHRtZXRyaWNzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkY29tcGlsZSwgJG1kVG9hc3QsICR0aW1lb3V0LCAkd2luZG93KSB7XHJcbiAgICAgICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMuY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgICAgIHRoaXMudGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tBbHRtZXRyaWNzY3JpcHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSAyMDA7XHJcbiAgICAgICAgICAgIHZhciBlbmRUaW1lID0gTnVtYmVyKG5ldyBEYXRlKCkpICsgMTUwMDA7IC8vIHN0b3AgY29udHJvbCBhZnRlciA1IHNlY29uZHNcclxuXHJcbiAgICAgICAgICAgIHZhciB3YWl0X3VudGlsX2FsdG1ldHJpY3NfbG9hZGVkID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbmRpdGlvbiBpcyBtZXQsIHdlJ3JlIGRvbmUhIFxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHR5cGVvZiB3aW5kb3cuX2FsdG1ldHJpY19lbWJlZF9pbml0ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb25kaXRpb24gaXNuJ3QgbWV0IGJ1dCB0aGUgdGltZW91dCBoYXNuJ3QgZWxhcHNlZCwgZ28gYWdhaW5cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKE51bWJlcihuZXcgRGF0ZSgpKSA8IGVuZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRfdW50aWxfYWx0bWV0cmljc19sb2FkZWQsIGludGVydmFsLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRGlkbid0IG1hdGNoIGFuZCB0b28gbXVjaCB0aW1lLCByZWplY3QhXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdXYWl0IHVudGlsIGFsdG1ldHJpY3MgaXMgbG9hZGVkIHRpbWVkIG91dCcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHdhaXRfdW50aWxfYWx0bWV0cmljc19sb2FkZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRBbHRtZXRyaWNzKGFsdG1ldHJpY3NFbGVtZW50U2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FsdG1ldHJpY3NjcmlwdHMoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTG9hZGluZyBhbHRtZXRyaWNzOiBXZSBrdW5uZW4gc3RhcnRlbicpO1xyXG4gICAgICAgICAgICB3aW5kb3cuX2FsdG1ldHJpY19lbWJlZF9pbml0KGFsdG1ldHJpY3NFbGVtZW50U2VsZWN0b3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbkFsdG1ldHJpY3NTZXJ2aWNlLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJGNvbXBpbGUnLCAnJG1kVG9hc3QnLCAnJHRpbWVvdXQnLCAnJHdpbmRvdyddO1xyXG4iLCJleHBvcnQgbGV0IGFwaUNhbGxJbnRlcmNlcHRvciA9IFsoKSA9PiB7XHJcbiAgICB2YXIgYXBpQ2FsbEludGVyY2VwdG9yID0ge1xyXG4gICAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9cIkFzc2Vzc2luZyBHb3NwZWwgUXVvdGF0aW9ucyBpbiBKdXN0aW4gTWFydHlyXCJcclxuICAgICAgICAgICAgbGV0IGZpeERpc3BsYXlEYXRhID0gZnVuY3Rpb24gKHBueERhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwbnhEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueERhdGEuZGlzcGxheSAmJiBwbnhEYXRhLmRpc3BsYXkuY3JlYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBueERhdGEuZGlzcGxheS5jcmVhdG9yID0gcG54RGF0YS5kaXNwbGF5LmNyZWF0b3IubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbGF0b3IgPSBjLm1hdGNoKC9cXCguKj9cXCkvaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGMuc3BsaXQoL1xcKC4qP1xcKS9pKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM9YCR7Y30gJCRRJHtkYXRhfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueERhdGEuZGlzcGxheSAmJiBwbnhEYXRhLmRpc3BsYXkuY29udHJpYnV0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbnhEYXRhLmRpc3BsYXkuY29udHJpYnV0b3IgPSBwbnhEYXRhLmRpc3BsYXkuY29udHJpYnV0b3IubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbGF0b3IgPSBjLm1hdGNoKC9cXCguKj9cXCkvaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGMuc3BsaXQoL1xcKC4qP1xcKS9pKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM9YCR7Y30gJCRRJHtkYXRhfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBueERhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgvXlxcL3ByaW1vX2xpYnJhcnlcXC9saWJ3ZWJcXC93ZWJzZXJ2aWNlc1xcL3Jlc3RcXC9wcmltby1leHBsb3JlXFwvdjFcXC9wbnhzLy50ZXN0KHJlc3BvbnNlLmNvbmZpZy51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcygnZG9jcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZG9jcy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZml4RGlzcGxheURhdGEocC5wbngpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoJ3BueCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnBueCA9IGZpeERpc3BsYXlEYXRhKGRhdGEucG54KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vUmVtb3ZlIG9wZW4gYWNjZXNzIGZyb20gZmFjZXRzXHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoJ2ZhY2V0cycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbXCJmYWNldHNcIl0gPSBkYXRhW1wiZmFjZXRzXCJdLm1hcChtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLm5hbWUgPT0gXCJ0bGV2ZWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0udmFsdWVzID0gbS52YWx1ZXMuZmlsdGVyKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC52YWx1ZSAhPT0gJ29wZW5fYWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGF0YScsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBpQ2FsbEludGVyY2VwdG9yO1xyXG59XSIsImV4cG9ydCBsZXQgZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yID0gIFsoKSA9PiB7XHJcbiAgdmFyIGh0dHBDYWxsSW50ZXJjZXB0b3IgPSB7XHJcbiAgICByZXF1ZXN0OiBmdW5jdGlvbihjb25maWcpe1xyXG4gICAgICBpZiAoY29uZmlnLnVybC5pbmNsdWRlcygncG54cycpICYmICFjb25maWcudXJsLmluY2x1ZGVzKCdkZWxpdmVyeScpICYmIGNvbmZpZy5wYXJhbXMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNvbmZpZyk7XHJcbiAgICAgICAgaWYoY29uZmlnLnBhcmFtcy5kYXRhYmFzZXMpe1xyXG4gICAgICAgICAgY29uZmlnLnBhcmFtcy5pbnN0ID0gJ0tVTCc7XHJcbiAgICAgICAgICBjb25maWcucGFyYW1zLnZpZCA9ICdLVUxldXZlbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGh0dHBDYWxsSW50ZXJjZXB0b3I7XHJcbn1dO1xyXG4iLCJleHBvcnQgbGV0IGZlZWRTZXJ2aWNlID0gWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XHJcbiAgdmFyIGZlZWRBbnRpQ2FjaGUgPSBcIj8mdD1cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcmFuZG9tTnVtO1xyXG4gIHZhciByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCArIDEpO1xyXG4gIHZhciBmZWVkZGF5c29sZCA9IDYwO1xyXG5cclxuICB2YXIgZG0gPSBuZXcgRGF0ZSgpO1xyXG4gIGRtLnNldEhvdXJzKDI0LCAwLCAwLCAwKTtcclxuXHJcbiAgdmFyIGFwaV9lbmRwb2ludCA9ICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRfYWdncmVnYXRvcj8nO1xyXG5cclxuICBmdW5jdGlvbiByZWFkRmVlZENvbmZpZyh1cmwpIHtcclxuICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLUZyb20tRXhMLUFQSS1HYXRld2F5XCI6IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlYWRGZWVkKHVybCkge1xyXG4gICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgdXJsOiBhcGlfZW5kcG9pbnQgKyB1cmwsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIlgtRnJvbS1FeEwtQVBJLUdhdGV3YXlcIjogdW5kZWZpbmVkXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VGZWVkKGNvbmYpIHtcclxuICAgIHJldHVybiByZWFkRmVlZChjb25mLmZlZWRVcmwpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29uZi5mZWVkVXJsKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhjb25mLmZlZWRGaWx0ZXIpO1xyXG4gICAgICB2YXIgcGF0dCA9IC9eZW50cnlcXC58Xml0ZW1cXC4vaTtcclxuICAgICAgdmFyIGZpbHRlcmVkUmVzdWx0cyA9IHJlcy5kYXRhLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHZhciByZXR2YWwgPSBmYWxzZTtcclxuICAgICAgICBpZiAoaXRlbS5wdWJEYXRlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICBpdGVtLnB1YkRhdGUgPSBkbTtcclxuICAgICAgICAgIHJlcy5kYXRhLml0ZW1zW2luZGV4XS5wdWJEYXRlID0gZG07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIG5vIGZpbHRlciBjb25maWd1cmVkICovXHJcbiAgICAgICAgaWYgKGNvbmYuZmVlZEZpbHRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmYuZmVlZEZpbHRlci5mb3JFYWNoKGZ1bmN0aW9uKGYpIHtcclxuICAgICAgICAgIGlmIChwYXR0LnRlc3QoZi5wYXJhbSkpIHtcclxuICAgICAgICAgICAgdmFyIGZmID0gZi5wYXJhbS5yZXBsYWNlKHBhdHQsIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtW2ZmXSkpIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbVtmZl0uaW5kZXhPZihmLnZhbHVlKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW1bZmZdID09IGYudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyogZmlsdGVyIG9sZCBpdGVtcyAqL1xyXG4gICAgICAgIGlmIChmZWVkZGF5c29sZCA8IE1hdGguY2VpbChkbS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShpdGVtLnB1YkRhdGUpLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpIHtcclxuICAgICAgICAgIHJldHZhbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldHZhbDtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZFJlc3VsdHM7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbigpIHtcclxuICAgICAgLy8gaGFuZGxlIGVycm9yc1xyXG4gICAgfSk7O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc29ydEZlZWQoZmVlZHMpIHtcclxuICAgIC8vcmV0dXJuIGZlZWRzLnNvcnQoY29tcGFyZURhdGVzKTtcclxuICAgIHJldHVybiBmZWVkcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS5wdWJEYXRlKTtcclxuICAgICAgdmFyIGRhdGVCID0gbmV3IERhdGUoYi5wdWJEYXRlKTtcclxuICAgICAgaWYgKGRhdGVBLmdldFRpbWUoKSA9PT0gZG0uZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgZGF0ZUEgPSBuZXcgRGF0ZSgwKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0ZUIuZ2V0VGltZSgpID09PSBkbS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVhZEZlZWRDb25maWc6IHJlYWRGZWVkQ29uZmlnLFxyXG4gICAgcmVhZEZlZWQ6IHJlYWRGZWVkLFxyXG4gICAgcGFyc2VGZWVkOiBwYXJzZUZlZWQsXHJcbiAgICBzb3J0RmVlZDogc29ydEZlZWRcclxuICB9O1xyXG59XTtcclxuIiwiaW1wb3J0IGZlZWRiYWNrU2VydmljZUhUTUwgZnJvbSAnLi9mZWVkYmFja1NlcnZpY2UuaHRtbCdcclxuaW1wb3J0IERpYWxvZ0NvbnRyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9nZW5lcmFsL2RpYWxvZydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWVkYmFja1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCRtZERpYWxvZykge1xyXG4gICAgdGhpcy5tZERpYWxvZyA9ICRtZERpYWxvZztcclxuICB9XHJcblxyXG4gIHNob3coJGV2ZW50ID0gbnVsbCwgZmVlZGJhY2tEaWFsb2dIVE1MID0gbnVsbCwgZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyID0gbnVsbCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKGZlZWRiYWNrRGlhbG9nSFRNTCA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IGRpYWxvZyBpbnN0YW50aWF0ZWQnKTtcclxuICAgICAgZmVlZGJhY2tEaWFsb2dIVE1MID0gZmVlZGJhY2tTZXJ2aWNlSFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgZGlhbG9nIGNvbnRyb2xsZXIgaW5zdGFudGlhdGVkJyk7XHJcbiAgICAgIGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlciA9IERpYWxvZ0NvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZERpYWxvZy5zaG93KHtcclxuICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXHJcbiAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICB0ZW1wbGF0ZTogZmVlZGJhY2tEaWFsb2dIVE1MLFxyXG4gICAgICBjb250cm9sbGVyOiBmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXJcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuRmVlZGJhY2tTZXJ2aWNlLiRpbmplY3QgPSBbJyRtZERpYWxvZyddO1xyXG4iLCJpbXBvcnQgbWVzc2FnZVNlcnZpY2VIVE1MIGZyb20gJy4vbWVzc2FnZVNlcnZpY2UuaHRtbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkY29tcGlsZSwgJG1kVG9hc3QsICRzY2UsICR0cmFuc2xhdGUsICR0aW1lb3V0KSB7XHJcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgIHRoaXMuc2NlID0gJHNjZTtcclxuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgIHRoaXMudGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgdGhpcy5jb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICB0aGlzLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcblxyXG4gICAgLy8gdGhpcy5tZXNzYWdlU2VydmljZUV2ZW50SGFuZGxlciA9IHRoaXMucm9vdFNjb3BlLiRvbignJHRyYW5zbGF0ZUxvYWRpbmdFbmQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPT09PT09PT09PiB0cmFuc2xhdGlvbiBsb2FkZWQgPD09PT09PT09PT1cIik7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIHNob3cobWVzc2FnZSA9ICcnLCBvcHRpb25zID0ge30pIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBzY29wZSA9IG9wdGlvbnMuc2NvcGUgfHwgbnVsbDtcclxuICAgIGxldCBoaWRlRGVsYXkgPSBvcHRpb25zLmhpZGVEZWxheSB8fCAwO1xyXG4gICAgbGV0IGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uIHx8IG51bGw7XHJcbiAgICBsZXQgYWN0aW9uTGFiZWwgPSBvcHRpb25zLmFjdGlvbkxhYmVsIHx8ICd1bmtub3duJztcclxuICAgIGxldCBtZXNzYWdlS2V5ID0gJ2xicy5nZW5lcmFsTWVzc2FnZSc7XHJcblxyXG4gICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZWxmLl9fc2hvdyh7XHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICBzY29wZTogc2NvcGUsXHJcbiAgICAgICAgaGlkZURlbGF5OiBoaWRlRGVsYXksXHJcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgYWN0aW9uTGFiZWw6IGFjdGlvbkxhYmVsXHJcbiAgICAgIH0pOyAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNlbGYudHJhbnNsYXRlKG1lc3NhZ2VLZXkpLnRoZW4oKG0pID0+IHtcclxuICAgICAgbWVzc2FnZSA9IChtID09IG1lc3NhZ2VLZXkgfHwgbSA8PSAxKSA/ICcnIDogbTtcclxuXHJcbiAgICAgIHNlbGYuX19zaG93KHtcclxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgIHNjb3BlOiBzY29wZSxcclxuICAgICAgICBoaWRlRGVsYXk6IGhpZGVEZWxheSxcclxuICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICBhY3Rpb25MYWJlbDogYWN0aW9uTGFiZWxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9fc2hvdyhvcHRpb25zID0ge30pIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBzY29wZSA9IG9wdGlvbnMuc2NvcGU7XHJcbiAgICBsZXQgaGlkZURlbGF5ID0gb3B0aW9ucy5oaWRlRGVsYXk7XHJcbiAgICBsZXQgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb247XHJcbiAgICBsZXQgYWN0aW9uTGFiZWwgPSBvcHRpb25zLmFjdGlvbkxhYmVsO1xyXG4gICAgbGV0IG1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2U7XHJcblxyXG4gICAgLy8gaWYgKG1lc3NhZ2UubGVuZ3RoID09IDApIHtcclxuICAgIC8vICAgLy8gY29kZSB0YWJsZSBlbnRyaWVzIGNhbiBub3QgaGF2ZSBlbXB0eSBkZXNjcmlwdGlvbnMuXHJcbiAgICAvLyAgIC8vIG1lc3NhZ2UgPD0gMSB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQhISEhXHJcbiAgICAvLyAgIGxldCBtZXNzYWdlS2V5ID0gJ2xicy5nZW5lcmFsTWVzc2FnZSc7XHJcbiAgICAvLyAgIG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KG1lc3NhZ2VLZXkpO1xyXG4gICAgLy8gICBtZXNzYWdlID0gKG1lc3NhZ2UgPT0gbWVzc2FnZUtleSB8fCBtZXNzYWdlIDw9IDEpID8gJycgOiBtZXNzYWdlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHRvYXN0Q29uZmlnID0ge1xyXG4gICAgICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcclxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRoaXMuYWN0aW9uTGFiZWwgPSBhY3Rpb25MYWJlbDtcclxuXHJcbiAgICAgICAgICB0aGlzLm9uQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5vbkFjdGlvbiA9ICgkZXZlbnQgPSBudWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWN0aW9uLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgc2VsZi5tZFRvYXN0LmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChzY29wZSkge1xyXG4gICAgICAgICAgICAvL3RoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKHNlbGYuY29tcGlsZShgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKShzZWxmLnJvb3RTY29wZSkuaHRtbCgpKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwoc2VsZi5jb21waWxlKGA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPmApKHNjb3BlKS5odG1sKCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwobWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6IG1lc3NhZ2VTZXJ2aWNlSFRNTCxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCBjZW50ZXInLFxyXG4gICAgICAgIGhpZGVEZWxheTogaGlkZURlbGF5XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYubWRUb2FzdC5zaG93KHRvYXN0Q29uZmlnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdObyBtZXNzYWdlIHRvIGRpc3BsYXknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5NZXNzYWdlU2VydmljZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRjb21waWxlJywgJyRtZFRvYXN0JywgJyRzY2UnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCddO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dFdmVudExpc3RlbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICR3aW5kb3cpIHtcclxuICAgICAgICAkd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY2VpdmVNZXNzYWdlLCBmYWxzZSk7XHJcblxyXG4vLyBUT0RPIDogTWFhayBjb25maWcgaGFzaCB2YW4gb3JpZ2luIGVuIGV2ZW50X2lkID0+XHJcbiAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiByZWNlaXZlTWVzc2FnZShldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJyZWNlaXZlTWVzc2FnZSAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXCIpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coICRyb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwpXHJcblxyXG4gICAgICAgICAgICBsZXQgcHJpbW9FeHBsb3JlSnd0ID0gJHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC5qd3RVdGlsU2VydmljZS5zdG9yYWdlVXRpbC5zZXNzaW9uU3RvcmFnZS5wcmltb0V4cGxvcmVKd3Q7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5ldmVudF9pZCA9PT0gXCJyZXRyaWV2ZV91c2VyXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5vcmlnaW4gIT09IFwiaHR0cDovL2xvY2FsaG9zdDo5MjkyXCIgJiYgZXZlbnQub3JpZ2luICE9PSBcImh0dHBzOi8vc2VydmljZXMubGliaXMuYmUvXCIpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudF9pZDogXCJyZXRyaWV2ZV91c2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9uQ2FtcHVzXCI6IHVzZXIuaXNPbkNhbXB1cygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc0xvZ2dlZEluXCI6IHVzZXIuaXNMb2dnZWRJbigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1YmlkXCI6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlfbmFtZVwiOiB1c2VyLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIjogdXNlci5lbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZXZlbnQub3JpZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudF9pZDogXCJqd3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHByaW1vRXhwbG9yZUp3dFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGV2ZW50Lm9yaWdpbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5XaW5kb3dFdmVudExpc3RlbmVyLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHdpbmRvdyddOyIsIi8qXHJcbiAgQ2VudHJhbCBQYWNrYWdlIExvYWRlclxyXG5cclxuICBEbyBOT1QgZWRpdCB0aGlzIGZpbGUuXHJcbiAgQWxsIGNvbXBvbmVudHMgYXJlIGRlY2xhcmVkIGluIFwiY29tcG9uZW50cy5qc1wiXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XHJcbiAgTWVobWV0IENlbGlrXHJcbiovXHJcbmltcG9ydCBQcmltbyBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS9oZWxwZXInXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cydcclxuaW1wb3J0IFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcydcclxuXHJcbmltcG9ydCB7ZmVlZFNlcnZpY2V9IGZyb20gJy4vZmFjdG9yaWVzL2ZlZWRTZXJ2aWNlJ1xyXG5pbXBvcnQge2RiU2VhcmNoSHR0cENhbGxJbnRlcmNlcHRvcn0gZnJvbSAnLi9mYWN0b3JpZXMvZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yJ1xyXG5pbXBvcnQge2FwaUNhbGxJbnRlcmNlcHRvcn0gZnJvbSAnLi9mYWN0b3JpZXMvYXBpQ2FsbEludGVyY2VwdG9yJ1xyXG5pbXBvcnQgTWVzc2FnZVNlcnZpY2UgZnJvbSAnLi9mYWN0b3JpZXMvbWVzc2FnZVNlcnZpY2UnXHJcbmltcG9ydCBGZWVkYmFja1NlcnZpY2UgZnJvbSAnLi9mYWN0b3JpZXMvZmVlZGJhY2tTZXJ2aWNlJ1xyXG5pbXBvcnQgQWx0bWV0cmljc1NlcnZpY2UgZnJvbSAnLi9mYWN0b3JpZXMvYWx0bWV0cmljc1NlcnZpY2UnXHJcblxyXG5pbXBvcnQgV2luZG93RXZlbnRMaXN0ZW5lciBmcm9tICcuL2ZhY3Rvcmllcy93aW5kb3dFdmVudExpc3RlbmVyJ1xyXG5cclxuXHJcbi8vbWFrZSBQcmltbyBwdWJsaWNcclxud2luZG93LlByaW1vID0gUHJpbW87XHJcbi8vbG9hZCBQcmltb0V4cGxvcmVyIFVJIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGlzIHJhblxyXG53aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKFByaW1vLmlzRGVidWdFbmFibGVkKCkpIHtcclxuICAgIGxldCB1aVVSTCA9ICdodHRwczovL2Nkbi5yYXdnaXQuY29tL21laG1ldGMvcHJpbW8tZXhwbG9yZS1kb20tdWkvZmMwODY4ZGYvanMvY3VzdG9tLmpzJztcclxuICAgIC8vbGV0IHVpVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9qcy9jdXN0b20uanMnO1xyXG5cclxuICAgIEhlbHBlci5sb2FkU2NyaXB0KHVpVVJMKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0luamVjdGluZyBVSScpO1xyXG4gICAgICBQcmltby5leHBsb3JlLnVpLnRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59LCAyMDAwKTtcclxuXHJcbi8vbGV0IHNlcnZpY2VzSG9zdCA9ICdodHRwOi8vMTkyLjE2OC4xMDAuMTAxOjkyOTIvJztcclxubGV0IHNlcnZpY2VzSG9zdCA9ICdodHRwOi8vbG9jYWxob3N0OjkyOTIvJztcclxuLy9sZXQgc2VydmljZXNIb3N0ID0gJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvJztcclxuXHJcblxyXG5sZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2NlbnRyYWxDdXN0b20nLCBbJ25nTWF0ZXJpYWwnLCAndmNSZWNhcHRjaGEnXSlcclxuICAvKlxyXG4gIC8vLmNvbnN0YW50KCdzZXJ2aWNlc0hvc3QnLCAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS8nKVxyXG4gICAgLmNvbnN0YW50KCdmZWVkYmFja1NlcnZpY2VVUkwnLCAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9mZWVkYmFjaycpXHJcbiAgICAuY29uc3RhbnQoJ3JlcG9ydEFQcm9ibGVtVVJMJywgJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvcmVwb3J0X2FfcHJvYmxlbScpXHJcbiAgICAuY29uc3RhbnQoJ3JlcXVlc3RBQ29weVVSTCcsICdodHRwOi8vMTkyLjE2OC4xMDAuMTAxOjkyOTIvL3JlcXVlc3RfYV9jb3B5JylcclxuICAqL1xyXG4gIC5jb25zdGFudCgnZmVlZGJhY2tTZXJ2aWNlVVJMJywgc2VydmljZXNIb3N0ICsgJ2ZlZWRiYWNrJylcclxuICAuY29uc3RhbnQoJ3JlcG9ydEFQcm9ibGVtVVJMJywgc2VydmljZXNIb3N0ICsgJ3JlcG9ydF9hX3Byb2JsZW0nKVxyXG4gIC5jb25zdGFudCgncmVxdWVzdEFDb3B5VVJMJywgc2VydmljZXNIb3N0ICsgJ3JlcXVlc3RfYV9jb3B5JylcclxuICAuY29uc3RhbnQoJ3JlcXVlc3RBQ29weU9mRXNEb2NVUkwnLCBzZXJ2aWNlc0hvc3QgKyAnaWxsZm9ybScpXHJcblxyXG4gIC5jb25maWcoKCRzY2VEZWxlZ2F0ZVByb3ZpZGVyKSA9PiB7XHJcbiAgICAkc2NlRGVsZWdhdGVQcm92aWRlci5yZXNvdXJjZVVybFdoaXRlbGlzdChbXHJcbiAgICAgICcqKidcclxuICAgIF0pO1xyXG4gIH0pXHJcbiAgLnJ1bigoJHRlbXBsYXRlQ2FjaGUsICRyb290U2NvcGUpID0+IHtcclxuICAgIC8vJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC9mdWxsVmlldy9mdWxsLXZpZXcuaHRtbCcsIGZ1bGxWaWV3SFRNTCk7XHJcbiAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vaG90a2V5cy1qc0AyLjAuOC9kaXN0L2hvdGtleXMubWluLmpzJykudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdob3RrZXlzLmpzIGxvYWRlZCcpO1xyXG4gICAgfSk7XHJcbiAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly9kMWJ4aDh1YXMxbW53Ny5jbG91ZGZyb250Lm5ldC9hc3NldHMvZW1iZWQuanM/JyArIERhdGUubm93KCkpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnYWx0bWVyaWNzIGVtYmVkLmpzIGxvYWRlZCcpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAod2luZG93LmFwcENvbmZpZy52aWQgPT0gJ0VDQicgfHwgd2luZG93LmFwcENvbmZpZy52aWQuaW5jbHVkZXMoJ0tVTGV1dmVuJykpIHtcclxuICAgICAgLy9DcmVhdGUgdGhlIGNlbnRyYWxDdXN0b20gbW9kdWxlO1xyXG4gICAgICBpZiAod2luZG93LmFwcENvbmZpZy52aWQgPT0gJ0VDQicpIHtcclxuICAgICAgICB3aW5kb3cuYnJvd3ppbmUgPSB7XHJcbiAgICAgICAgICBhcGk6IFwiaHR0cHM6Ly9wdWJsaWMtYXBpLnRoaXJkaXJvbi5jb20vcHVibGljL3YxL2xpYnJhcmllcy8xNjI0XCIsXHJcbiAgICAgICAgICBhcGlLZXk6IFwiZTcxZDFjMzEtNzkzOC00NzBhLThiZTItYTZlMzUxZTBjMDAxXCIsXHJcbiAgICAgICAgICBqb3VybmFsQnJvd1ppbmVXZWJMaW5rVGV4dDogXCJWaWV3IEpvdXJuYWwgQ29udGVudHNcIixcclxuICAgICAgICAgIGFydGljbGVCcm93WmluZVdlYkxpbmtUZXh0OiBcIlZpZXcgSXNzdWUgQ29udGVudHNcIixcclxuICAgICAgICAgIGFydGljbGVQREZEb3dubG9hZExpbmtFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgYXJ0aWNsZVBERkRvd25sb2FkTGlua1RleHQ6IFwiRG93bmxvYWQgUERGXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHdpbmRvdy5hcHBDb25maWcudmlkLmluY2x1ZGVzKCdLVUxldXZlbicpKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsZSA9IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnRlcmZhY2VMYW5ndWFnZTtcclxuICAgICAgICB2YXIgbG9jYWxlX3RleHQgPSB7XHJcbiAgICAgICAgICAnbmxfQkUnOiB7XHJcbiAgICAgICAgICAgICdqb3VybmFsJzogXCJUcmlhbDogQmVraWprIGRlIGluaG91ZCB2YW4gaGV0IHRpamRzY2hyaWZ0XCIsXHJcbiAgICAgICAgICAgICdpc3N1ZSc6IFwiVHJpYWw6IEJla2lqayBkZSBpbmhvdWQgdmFuIGhldCBudW1tZXJcIixcclxuICAgICAgICAgICAgJ2Rvd25sb2FkJzogXCJUcmlhbDogRG93bmxvYWQgUERGXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnZW5fVVMnOiB7XHJcbiAgICAgICAgICAgICdqb3VybmFsJzogXCJJbiB0cmlhbDogVmlldyBKb3VybmFsIENvbnRlbnRzXCIsXHJcbiAgICAgICAgICAgICdpc3N1ZSc6IFwiSW4gdHJpYWw6IFZpZXcgSXNzdWUgQ29udGVudHNcIixcclxuICAgICAgICAgICAgJ2Rvd25sb2FkJzogXCJJbiB0cmlhbDogRG93bmxvYWQgUERGXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5icm93emluZSA9IHtcclxuICAgICAgICAgIGFwaTogXCJodHRwczovL3B1YmxpYy1hcGkudGhpcmRpcm9uLmNvbS9wdWJsaWMvdjEvbGlicmFyaWVzLzE3ODFcIixcclxuICAgICAgICAgIGFwaUtleTogXCIxMGVkNWQyYS00ZmYwLTQ1NDEtODU3ZC1iOGMzNmEwMWYzZWRcIixcclxuICAgICAgICAgIGpvdXJuYWxCcm93WmluZVdlYkxpbmtUZXh0OiBsb2NhbGVfdGV4dFtsb2NhbGVdWydqb3VybmFsJ10sXHJcbiAgICAgICAgICBhcnRpY2xlQnJvd1ppbmVXZWJMaW5rVGV4dDogbG9jYWxlX3RleHRbbG9jYWxlXVsnaXNzdWUnXSxcclxuICAgICAgICAgIGFydGljbGVQREZEb3dubG9hZExpbmtFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgYXJ0aWNsZVBERkRvd25sb2FkTGlua1RleHQ6IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ2Rvd25sb2FkJ10sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2Jyb3d6aW5lLWFkYXB0ZXJzL3ByaW1vL2Jyb3d6aW5lLXByaW1vLWFkYXB0ZXIuanMnKS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYnJvd3ppbmUtcHJpbW8tYWRhcHRlci5qcyBsb2FkZWQnKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAuZmFjdG9yeSgnRmVlZFNlcnZpY2UnLCBmZWVkU2VydmljZSlcclxuICAuc2VydmljZSgnQWx0bWV0cmljc1NlcnZpY2UnLCBBbHRtZXRyaWNzU2VydmljZSlcclxuICAuc2VydmljZSgnTWVzc2FnZVNlcnZpY2UnLCBNZXNzYWdlU2VydmljZSlcclxuICAuc2VydmljZSgnRmVlZGJhY2tTZXJ2aWNlJywgRmVlZGJhY2tTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCdXaW5kb3dFdmVudExpc3RlbmVyJywgV2luZG93RXZlbnRMaXN0ZW5lcilcclxuXHJcbiAgLmZhY3RvcnkoJ2RiU2VhcmNoSHR0cENhbGxJbnRlcmNlcHRvcicsIGRiU2VhcmNoSHR0cENhbGxJbnRlcmNlcHRvcilcclxuICAuZmFjdG9yeSgnYXBpQ2FsbEludGVyY2VwdG9yJywgYXBpQ2FsbEludGVyY2VwdG9yKVxyXG4gIC5jb25maWcoWyckaHR0cFByb3ZpZGVyJywgKCRodHRwUHJvdmlkZXIpID0+IHsgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXBpQ2FsbEludGVyY2VwdG9yJyk7IH1dKTtcclxuXHJcbi8vaW50ZXJjZXB0IGFwaSBjYWxscyBmb3IgZGF0YWJhc2Ugc2VhcmNoIGFuZCBjaGFuZ2UgdG8gS1VMIChvbmx5IHJlZ2lvbmFsIHZpZXdzKVxyXG52YXIgcmVnX3ZpZXdzID0gW1wiS1VMZXV2ZW5fVE1PUkVNXCIsIFwiS1VMZXV2ZW5fVE1PUkVLXCIsIFwiS1VMZXV2ZW5fVUNMTFwiLCBcIktVTGV1dmVuX0xVQ0FcIiwgXCJLVUxldXZlbl9PRElTRUVcIl07XHJcbmlmIChyZWdfdmlld3MuaW5jbHVkZXMod2luZG93LmFwcENvbmZpZy52aWQpKSB7XHJcbiAgYXBwLmNvbmZpZyhbJyRodHRwUHJvdmlkZXInLCAoJGh0dHBQcm92aWRlcikgPT4geyAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdkYlNlYXJjaEh0dHBDYWxsSW50ZXJjZXB0b3InKTsgfV0pO1xyXG59XHJcblxyXG4vL0NvbnRhaW5zIHRoZSBhZnRlciBjb21wb25lbnQgc2VsZWN0b3JzIHRoYXQgd2lsbCBiZSBpbmplY3RlZFxyXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XHJcblxyXG4vL0NyZWF0ZSBhbGwgY29tcG9uZW50cyBhbmQgZGV0ZXJtaW5lIGluIHdoaWNoIGFmdGVyIGNvbXBvbmVudCB0aGVzZSBuZWVkIHRvIGJlXHJcbi8vaW5qZWN0ZWRcclxuY29uc29sZS5sb2coJ0xvYWRpbmcgY2VudHJhbEN1c3RvbSBjb21wb25lbnRzJyk7XHJcbkNvbXBvbmVudHMuYWxsLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbXBvbmVudC5uYW1lKVxyXG4gIGlmIChjb21wb25lbnQuZW5hYmxlZCkge1xyXG4gICAgaWYgKGNvbXBvbmVudC5hcHBlbmRUbykge1xyXG4gICAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcclxuICAgICAgLy9lbGVtZW50cy5wdXNoKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgZWxlbWVudHMucHVzaCh7XHJcbiAgICAgICAgJ25hbWUnOiBjb21wb25lbnQubmFtZSxcclxuICAgICAgICAnZW5hYmxlSW5WaWV3JzogY29tcG9uZW50LmVuYWJsZUluVmlld1xyXG4gICAgICB9KTtcclxuICAgICAgYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gPSBlbGVtZW50cztcclxuXHJcbiAgICB9XHJcbiAgICBhcHAuY29uc3RhbnQoJ2FmdGVyQ29tcG9uZW50cycsIGFmdGVyQ29tcG9uZW50cyk7XHJcbiAgICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLnRvQ2FtZWxDYXNlKCksIGNvbXBvbmVudC5jb25maWcpO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zb2xlLmxvZygnUmVwbGFjZSBUZW1wbGF0ZXMnKTtcclxuVGVtcGxhdGVzLmFsbC5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHRlbXBsYXRlLmlkKVxyXG4gIGFwcC5ydW4oKCR0ZW1wbGF0ZUNhY2hlKSA9PiB7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGUuaWQsIHRlbXBsYXRlLnRlbXBsYXRlKTtcclxuICB9KVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL0luamVjdCBwbGFjZSBob2xkZXJzIGludG8gdGhlIGFmdGVyIGNvbXBvbmVudHNcclxuT2JqZWN0LmtleXMoYWZ0ZXJDb21wb25lbnRzKS5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcclxuICBsZXQgc3ViQ29tcG9uZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnRdO1xyXG5cclxuICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC50b0NhbWVsQ2FzZSgpLCB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogc3ViQ29tcG9uZW50cy5tYXAobSA9PiBgPCR7bS5uYW1lfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke20ubmFtZX0+YCkuam9pbihcIlwiKVxyXG4gIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IEV4cGxvcmUgZnJvbSAnLi9wcmltby9leHBsb3JlJ1xyXG5pbXBvcnQgUmVjb3JkcyBmcm9tICcuL3ByaW1vL3JlY29yZHMnXHJcbmltcG9ydCBGYWNldHMgZnJvbSAnLi9wcmltby9mYWNldHMnXHJcbmltcG9ydCBWaWV3IGZyb20gJy4vcHJpbW8vdmlldydcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9wcmltby91c2VyJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vcHJpbW8vZXhwbG9yZS9oZWxwZXInXHJcblxyXG4vKipcclxuICogUHJpbW8gbWFpbiBlbnRyeSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbW8ge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybiB2ZXJzaW9uIGluZm9ybWF0aW9uXHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcclxuICAgIGxldCBfdmVyc2lvbiA9IFwiMC4wLjEwXCI7XHJcbiAgICByZXR1cm4gYExpYnJhcnk6JHtfdmVyc2lvbn0gLSBQcmltbzoke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fVmVyc2lvbl9OdW1iZXJ9OiR7d2luZG93LmFwcENvbmZpZ1snc3lzdGVtLWNvbmZpZ3VyYXRpb24nXS5Qcmltb19Ib3RGaXhfTnVtYmVyfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBoYXMgcmFuXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gSGVscGVyLmlzRGVidWdFbmFibGVkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaWQgdGhlIHNjcmlwdCByYW4gb24gYSBQcmltbyBzaXRlXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBzdGF0aWMgaXNQcmltb0F2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiBIZWxwZXIuaXNQcmltb0F2YWlsYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIHByb3h5IGNsYXNzXHJcbiAgICogQHJldHVybiB7RXhwbG9yZX1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGV4cGxvcmUoKSB7XHJcbiAgICByZXR1cm4gRXhwbG9yZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIHJlY29yZHNcclxuICAgKiBAcmV0dXJuIHtSZWNvcmRzfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgcmVjb3Jkcygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgUmVjb3Jkcyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cykpO1xyXG4gICAgfSlcclxuICAgIC8vcmV0dXJuIG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIGZhY2V0c1xyXG4gICAqIEByZXR1cm4ge0ZhY2V0c31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGZhY2V0cygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XHJcbiAgICB9KVxyXG4gICAgLy9yZXR1cm4gbmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHZpZXcgcmVsYXRlZCBtZXRhZGF0YVxyXG4gICAqIEByZXR1cm4ge1ZpZXd9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCB2aWV3KCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgVmlldygpKTtcclxuICAgIH0pXHJcbiAgICAvL3JldHVybiBuZXcgVmlldygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byB1c2VyIHJlbGF0ZWQgbWV0YWRhdGFcclxuICAgKiBAcmV0dXJuIHtVc2VyfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdXNlcigpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIEhlbHBlci51c2VyRGV0YWlsc0hUVFAoKS50aGVuKCh1c2VyRGV0YWlscyk9PntcclxuICAgICAgICBIZWxwZXIudXNlckZpbmVzSFRUUCgpLnRoZW4oKHVzZXJGaW5lcykgPT4ge1xyXG4gICAgICAgICAgSGVscGVyLnVzZXJMb2Fuc0hUVFAoKS50aGVuKCh1c2VyTG9hbnMpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKG5ldyBVc2VyKHtkZXRhaWxzOiB1c2VyRGV0YWlscywgZmluZXM6IHVzZXJGaW5lcywgbG9hbnM6IHVzZXJMb2Fuc30pKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuLy90aGlzIGlzIHByb3h5IGNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvcmUge1xyXG4gIHN0YXRpYyBnZXQgY29tcG9uZW50cygpIHtcclxuICAgIGxldCBjID0gbmV3IENvbXBvbmVudHMoKTtcclxuICAgIEhlbHBlci5jb21wb25lbnROYW1lcy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xyXG4gICAgICBjLmFkZChzZWxlY3Rvcik7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBjO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCB1aSgpIHtcclxuICAgIGlmICh0aGlzLl91aSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgaXMgYSBzdHViIGZ1bmN0aW9uIGNhbGwgXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIHRvIGFjdGl2YXRlIFVJJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fdWk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGhlbHBlcigpIHtcclxuICAgIHJldHVybiBIZWxwZXI7XHJcbiAgfVxyXG59XHJcbiIsInZhciBjc3NTZWxlY3RvckdlbmVyYXRvciA9IG5ldyhyZXF1aXJlKCcuLi8uLi92ZW5kb3IvY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcycpKS5Dc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXInXHJcblxyXG5jbGFzcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpe1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJsaW5rKCl7XHJcbiAgICBIZWxwZXIuYmxpbmsodGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgY3NzUGF0aCgpe1xyXG4gICAgcmV0dXJuIGNzc1NlbGVjdG9yR2VuZXJhdG9yLmdldFNlbGVjdG9yKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5sb2NhbE5hbWU7XHJcbiAgfVxyXG5cclxuICBzY29wZSgpe1xyXG4gICAgaWYgKEhlbHBlci5pc0RlYnVnRW5hYmxlZCgpKXtcclxuICAgICAgcmV0dXJuIGFuZ3VsYXIuZWxlbWVudCh0aGlzLmVsZW1lbnQpLnNjb3BlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgcnVuIFwiYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKClcIiBmaXJzdCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3RybCgpe1xyXG4gICAgbGV0IGMgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5jb250cm9sbGVyKHRoaXMubmFtZSk7XHJcbiAgICBpZiAoYykge1xyXG4gICAgICByZXR1cm4gYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2luZyBhbHRlcm5hdGl2ZSBtZXRob2QgdG8gZ2V0IGNvbnRyb2xsZXInKTtcclxuICAgICAgbGV0IHNjb3BlID0gdGhpcy5zY29wZSgpO1xyXG4gICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICBsZXQgc2NvcGVDaGlsZCA9IHNjb3BlLiQkY2hpbGRUYWlsO1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJyRjdHJsJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLiRjdHJsXHJcbiAgICAgICAgfSBlbHNlIGlmKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnY3RybCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZS5jdHJsXHJcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCckY3RybCcpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuJGN0cmw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCdjdHJsJykpe1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC5jdHJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vICRjdHJsIGRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudHMge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICB0aGlzLl9jb21wb25lbnRzID0ge307XHJcbiAgfVxyXG5cclxuICBhZGQoc2VsZWN0b3IpIHtcclxuICAgIGxldCBlbGVtZW50cyA9IEhlbHBlci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgIGxldCBlbGVtZW50c0FycmF5ID0gdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gfHwgW107XHJcblxyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgICAgZWxlbWVudHNBcnJheS5wdXNoKG5ldyBDb21wb25lbnQoZWxlbWVudCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gPSBlbGVtZW50c0FycmF5O1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50c0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0KHNlbGVjdG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIGtleXMoKXtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcclxuICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XHJcbiAgICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYW1lID09PSAnTkdfRU5BQkxFX0RFQlVHX0lORk8hJyB8fCB0eXBlb2YoYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1sb2dvJykpLnNjb3BlKCkpICE9ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1ByaW1vQXZhaWxhYmxlKCkge1xyXG4gICAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mKHdpbmRvdy5hbmd1bGFyKSkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJpbW8tZXhwbG9yZScpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBjb21wb25lbnROYW1lcygpIHtcclxuICAgICAgICBsZXQgdGFncyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSk7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudE5hbWVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGFnIG9mIHRhZ3MpIHtcclxuICAgICAgICAgICAgbGV0IHRhZ05hbWUgPSB0YWcubG9jYWxOYW1lO1xyXG4gICAgICAgICAgICBpZiAoL15wcm0tLy50ZXN0KHRhZ05hbWUpIHx8IC9ecHJpbW8tLy50ZXN0KHRhZ05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWVzLmluY2x1ZGVzKHRhZ05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZXMucHVzaCh0YWdOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50TmFtZXMgPSBjb21wb25lbnROYW1lcy5zb3J0KCkuZmlsdGVyKChlLCBpLCBhKSA9PiBpID09PSBhLmZpbmRJbmRleCgoZTIpID0+IGUgPT09IGUyKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudE5hbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbmplY3RvcigpIHtcclxuICAgICAgbGV0IGMgPSBQcmltby5leHBsb3JlLmNvbXBvbmVudHMuZ2V0KCdwcmltby1leHBsb3JlJyk7XHJcbiAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IHByaW1vRXhwbG9yZSA9IGFuZ3VsYXIuZWxlbWVudChjWzBdLmVsZW1lbnQpO1xyXG4gICAgICAgICAgbGV0IGluamVjdG9yICAgICA9IHByaW1vRXhwbG9yZS5pbmplY3RvcigpO1xyXG4gICAgICAgICAgaWYgKGluamVjdG9yKXtcclxuICAgICAgICAgICAgcmV0dXJuIGluamVjdG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGh0dHAoKSB7XHJcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcclxuICAgICAgaWYgKGluamVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGggPSBpbmplY3Rvci5nZXQoJyRodHRwJyk7XHJcbiAgICAgICAgaWYgKGgpIHtcclxuICAgICAgICAgIHJldHVybiBoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBsb2FkU2NyaXB0KHNjcmlwdFVSTCkge1xyXG4gICAgICBpZiAod2luZG93LmFuZ3VsYXIpIHtcclxuICAgICAgICAgIGxldCBhcHBJbmplY3RvciA9IGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsJ2FuZ3VsYXJMb2FkJ10pO1xyXG4gICAgICAgICAgaWYgKGFwcEluamVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGFuZ3VsYXJMb2FkID0gYXBwSW5qZWN0b3IuZ2V0KCdhbmd1bGFyTG9hZCcpO1xyXG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJMb2FkLmxvYWRTY3JpcHQoc2NyaXB0VVJMKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm9vdFNjb3BlKCkge1xyXG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XHJcbiAgICAgIGlmIChpbmplY3Rvcikge1xyXG4gICAgICAgICAgbGV0IHJvb3RTY29wZSAgICA9IGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgaWYgKHJvb3RTY29wZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9vdFNjb3BlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpIHtcclxuICAgICAgbGV0IHJvb3RTY29wZSA9IHRoaXMucm9vdFNjb3BlKCk7XHJcbiAgICAgIGlmIChyb290U2NvcGUpIHtcclxuICAgICAgICByZXR1cm4gcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqd3REYXRhKCkge1xyXG4gICAgICBsZXQgdVNNUyA9IHRoaXMudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xyXG4gICAgICBpZiAodVNNUykge1xyXG4gICAgICAgIGxldCBqd3REYXRhID0gdVNNUy5qd3RVdGlsU2VydmljZS5nZXREZWNvZGVkVG9rZW4oKSB8fCB7fTtcclxuICAgICAgICByZXR1cm4gand0RGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyRGV0YWlscygpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS4kbG9jYWxGb3JhZ2UuZ2V0SXRlbSgndXNlckRldGFpbHMnKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzSFRUUCgpIHtcclxuICAgICAgbGV0IHZpZXdDb2RlID0gdGhpcy5qd3REYXRhKCkudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoYC9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL3VzZXJzZXR0aW5ncz92aWQ9JHt2aWV3Q29kZX1gKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMuZGF0YSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckZpbmVzSFRUUCgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvZmluZXMnKS50aGVuKHVzZXJGaW5lcyA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJGaW5lcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbmVzID0gZGF0YS5kYXRhLmZpbmVzO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmaW5lcy5maW5lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gZmluZXMnKTtcclxuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJMb2Fuc0hUVFAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2xvYW5zJykudGhlbih1c2VyTG9hbnMgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyTG9hbnMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsb2FucyA9IGRhdGEuZGF0YS5sb2FucztcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobG9hbnMubG9hbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGxvYW5zJyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBibGluayhjb21wb25lbnQsIG51bWJlck9mQmxpbmtzID0gNCkge1xyXG4gICAgICAgIGxldCBpbnRlcnZhbElkID0gbnVsbDtcclxuICAgICAgICBsZXQgYm9yZGVyRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xyXG4gICAgICAgIGxldCBib3JkZXJTZWxlY3RvciA9IGNvbXBvbmVudC5lbGVtZW50LmNzc1BhdGggKyBpbmRleCArICdSZWN0JztcclxuXHJcbiAgICAgICAgbGV0IGNyZWF0ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UmVjdCA9IGNvbXBvbmVudC5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGJvcmRlclNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnRvcCA9IGVsZW1lbnRSZWN0LnRvcCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnRSZWN0LmhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLndpZHRoID0gZWxlbWVudFJlY3Qud2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudFJlY3QubGVmdCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvcmRlckVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJvcmRlclNlbGVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVtb3ZlQm9yZGVyRWxlbWVudCA9ICgpID0+IHtcclxuICAgICAgICAgIGlmIChib3JkZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGJvcmRlckVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmxpbmtCb3JkZXJFbGVtZW50ID0gKG51bWJlck9mQmxpbmtzID0gNCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkJsaW5rcyA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUJvcmRlckVsZW1lbnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICgobnVtYmVyT2ZCbGlua3MgJSAyKSA9PSAwKSA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkJsaW5rcy0tO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChibGlua0JvcmRlckVsZW1lbnQsIDEwMDAsIG51bWJlck9mQmxpbmtzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9yZGVyRWxlbWVudCA9IGNyZWF0ZUJvcmRlckVsZW1lbnQoKTtcclxuICAgICAgICBibGlua0JvcmRlckVsZW1lbnQobnVtYmVyT2ZCbGlua3MpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldHMge1xyXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50cykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZmFjZXRzKGNvbXBvbmVudHMpO1xyXG4gICAgfVxyXG4gICAgX2ZhY2V0cyhjb21wb25lbnRzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldC1hZnRlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCBmYWNldHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZmFjZXRzO1xyXG4gICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGZhY2V0cycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvcmRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zKGNvbXBvbmVudHMpO1xyXG4gICAgfVxyXG4gICAgX2l0ZW1zKGNvbXBvbmVudHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLXNlYXJjaC1yZXN1bHQtbGlzdC1hZnRlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmwoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3RybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5pdGVtbGlzdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJ0cnkgYWdhaW5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IHJlY29yZHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZGF0YTtcclxuICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBpdGVtcycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXIgPSBfc2tlbFVzZXIpIHtcclxuICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgIGxldCBqd3REYXRhID0gSGVscGVyLmp3dERhdGEoKTtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBqd3REYXRhLnVzZXIgfHwgJycsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZGV0YWlscy5lbWFpbCB8fCAnJyxcclxuICAgICAgICBuYW1lOiBqd3REYXRhLnVzZXJOYW1lIHx8ICdHdWVzdCcsXHJcbiAgICAgICAgZGlzcGxheV9uYW1lOiB1U21zLmdldFVzZXJOYW1lRm9yRGlzcGxheSgpLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46ICgpID0+IHVTbXMuZ2V0VXNlck5hbWUoKS5sZW5ndGggPiAwLFxyXG4gICAgICAgIGlzT25DYW1wdXM6ICgpID0+IGp3dERhdGEub25DYW1wdXMgPT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgZmluZXM6IHVzZXIuZmluZXMsXHJcbiAgICAgICAgbG9hbnM6IHVzZXIubG9hbnNcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBfc2tlbFVzZXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkZXRhaWxzOiB7fSxcclxuICAgICAgZmluZXM6IHt9LFxyXG4gICAgICBsb2Fuczoge31cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgbGV0IHVTbXMgPSBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xyXG4gICAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IGp3dERhdGEudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddLFxyXG4gICAgICAgIGluc3RpdHV0aW9uOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IGp3dERhdGEudmlld0luc3RpdHV0aW9uQ29kZSxcclxuICAgICAgICAgICAgbmFtZTogd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmluc3RpdHV0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnRlcmZhY2VMYW5ndWFnZTogdVNtcy5nZXRVc2VyTGFuZ3VhZ2UoKSB8fCB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW50ZXJmYWNlTGFuZ3VhZ2UsXHJcbiAgICAgICAgaXA6IHtcclxuICAgICAgICAgIGFkZHJlc3M6IGp3dERhdGEuaXBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIENzc1NlbGVjdG9yR2VuZXJhdG9yLCByb290LFxyXG4gICAgaW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xyXG5cclxuICBDc3NTZWxlY3RvckdlbmVyYXRvciA9IChmdW5jdGlvbigpIHtcclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5kZWZhdWx0X29wdGlvbnMgPSB7XHJcbiAgICAgIHNlbGVjdG9yczogWydpZCcsICdjbGFzcycsICd0YWcnLCAnbnRoY2hpbGQnXVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBDc3NTZWxlY3RvckdlbmVyYXRvcihvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcclxuICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vcHRpb25zID0ge307XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyh0aGlzLmRlZmF1bHRfb3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIGtleSwgcmVzdWx0cywgdmFsO1xyXG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHMgPSBbXTtcclxuICAgICAgZm9yIChrZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIHZhbCA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0X29wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMub3B0aW9uc1trZXldID0gdmFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuaXNFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gISEoKGVsZW1lbnQgIT0gbnVsbCA/IGVsZW1lbnQubm9kZVR5cGUgOiB2b2lkIDApID09PSAxKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFBhcmVudHMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBjdXJyZW50X2VsZW1lbnQsIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgIGlmICh0aGlzLmlzRWxlbWVudChlbGVtZW50KSkge1xyXG4gICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaXNFbGVtZW50KGN1cnJlbnRfZWxlbWVudCkpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRfZWxlbWVudCk7XHJcbiAgICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBjdXJyZW50X2VsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFRhZ1NlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZUl0ZW0oZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2FuaXRpemVJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICB2YXIgY2hhcmFjdGVycztcclxuICAgICAgY2hhcmFjdGVycyA9IChpdGVtLnNwbGl0KCcnKSkubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlcikge1xyXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09ICc6Jykge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgKCc6Jy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKSArIFwiIFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoL1sgIVwiIyQlJicoKSorLC5cXC87PD0+P0BcXFtcXFxcXFxdXmB7fH1+XS8udGVzdChjaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyBjaGFyYWN0ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBlc2NhcGUoY2hhcmFjdGVyKS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY2hhcmFjdGVycy5qb2luKCcnKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldElkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBpZCwgc2FuaXRpemVkX2lkO1xyXG4gICAgICBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICBpZiAoKGlkICE9IG51bGwpICYmIChpZCAhPT0gJycpICYmICEoL1xccy8uZXhlYyhpZCkpICYmICEoL15cXGQvLmV4ZWMoaWQpKSkge1xyXG4gICAgICAgIHNhbml0aXplZF9pZCA9IFwiI1wiICsgKHRoaXMuc2FuaXRpemVJdGVtKGlkKSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNhbml0aXplZF9pZCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gc2FuaXRpemVkX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENsYXNzU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgY2xhc3Nfc3RyaW5nLCBpdGVtLCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBjbGFzc19zdHJpbmcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKTtcclxuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXlxcc3xcXHMkL2csICcnKTtcclxuICAgICAgICBpZiAoY2xhc3Nfc3RyaW5nICE9PSAnJykge1xyXG4gICAgICAgICAgcmVzdWx0ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgaywgbGVuLCByZWYsIHJlc3VsdHM7XHJcbiAgICAgICAgICAgIHJlZiA9IGNsYXNzX3N0cmluZy5zcGxpdCgvXFxzKy8pO1xyXG4gICAgICAgICAgICByZXN1bHRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgICAgICAgIGl0ZW0gPSByZWZba107XHJcbiAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKFwiLlwiICsgKHRoaXMuc2FuaXRpemVJdGVtKGl0ZW0pKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgICB9KS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QXR0cmlidXRlU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgYXR0cmlidXRlLCBibGFja2xpc3QsIGssIGxlbiwgcmVmLCByZWYxLCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBibGFja2xpc3QgPSBbJ2lkJywgJ2NsYXNzJ107XHJcbiAgICAgIHJlZiA9IGVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgYXR0cmlidXRlID0gcmVmW2tdO1xyXG4gICAgICAgIGlmIChyZWYxID0gYXR0cmlidXRlLm5vZGVOYW1lLCBpbmRleE9mLmNhbGwoYmxhY2tsaXN0LCByZWYxKSA8IDApIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKFwiW1wiICsgYXR0cmlidXRlLm5vZGVOYW1lICsgXCI9XCIgKyBhdHRyaWJ1dGUubm9kZVZhbHVlICsgXCJdXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0TnRoQ2hpbGRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGNvdW50ZXIsIGssIGxlbiwgcGFyZW50X2VsZW1lbnQsIHNpYmxpbmcsIHNpYmxpbmdzO1xyXG4gICAgICBwYXJlbnRfZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgaWYgKHBhcmVudF9lbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICBzaWJsaW5ncyA9IHBhcmVudF9lbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgICAgICAgZm9yIChrID0gMCwgbGVuID0gc2libGluZ3MubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nc1trXTtcclxuICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudChzaWJsaW5nKSkge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiOm50aC1jaGlsZChcIiArIGNvdW50ZXIgKyBcIilcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICAgIHZhciBpc191bmlxdWUsIHJlc3VsdDtcclxuICAgICAgaXNfdW5pcXVlID0gZmFsc2U7XHJcbiAgICAgIGlmICgoc2VsZWN0b3IgIT0gbnVsbCkgJiYgc2VsZWN0b3IgIT09ICcnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxICYmIHJlc3VsdFswXSA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgaXNfdW5pcXVlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGlzX3VuaXF1ZTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEFsbFNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgIHQ6IG51bGwsXHJcbiAgICAgICAgaTogbnVsbCxcclxuICAgICAgICBjOiBudWxsLFxyXG4gICAgICAgIGE6IG51bGwsXHJcbiAgICAgICAgbjogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICd0YWcnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LnQgPSB0aGlzLmdldFRhZ1NlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2lkJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5pID0gdGhpcy5nZXRJZFNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2NsYXNzJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5jID0gdGhpcy5nZXRDbGFzc1NlbGVjdG9ycyhlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdhdHRyaWJ1dGUnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LmEgPSB0aGlzLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyhlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdudGhjaGlsZCcpID49IDApIHtcclxuICAgICAgICByZXN1bHQubiA9IHRoaXMuZ2V0TnRoQ2hpbGRTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFVuaXF1ZW5lc3MgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgICB2YXIgZm91bmRfZWxlbWVudHMsIHBhcmVudDtcclxuICAgICAgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICBmb3VuZF9lbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgcmV0dXJuIGZvdW5kX2VsZW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBmb3VuZF9lbGVtZW50c1swXSA9PT0gZWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihlbGVtZW50LCBpdGVtcywgdGFnKSB7XHJcbiAgICAgIHZhciBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHJlZiwgcmVmMTtcclxuICAgICAgcmVmID0gdGhpcy5nZXRDb21iaW5hdGlvbnMoaXRlbXMpO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBpdGVtID0gcmVmW2tdO1xyXG4gICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRhZyAhPSBudWxsKSB7XHJcbiAgICAgICAgcmVmMSA9IGl0ZW1zLm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGFnICsgaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGwgPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGwgPCBsZW4xOyBsKyspIHtcclxuICAgICAgICAgIGl0ZW0gPSByZWYxW2xdO1xyXG4gICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0VW5pcXVlU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBmb3VuZF9zZWxlY3RvciwgaywgbGVuLCByZWYsIHNlbGVjdG9yX3R5cGUsIHNlbGVjdG9ycztcclxuICAgICAgc2VsZWN0b3JzID0gdGhpcy5nZXRBbGxTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIHJlZiA9IHRoaXMub3B0aW9ucy5zZWxlY3RvcnM7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIHNlbGVjdG9yX3R5cGUgPSByZWZba107XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcl90eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdpZCc6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMuaSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAndGFnJzpcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBzZWxlY3RvcnMudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjbGFzcyc6XHJcbiAgICAgICAgICAgIGlmICgoc2VsZWN0b3JzLmMgIT0gbnVsbCkgJiYgc2VsZWN0b3JzLmMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmMsIHNlbGVjdG9ycy50KTtcclxuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZF9zZWxlY3RvcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdhdHRyaWJ1dGUnOlxyXG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5hICE9IG51bGwpICYmIHNlbGVjdG9ycy5hLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kX3NlbGVjdG9yID0gdGhpcy50ZXN0Q29tYmluYXRpb25zKGVsZW1lbnQsIHNlbGVjdG9ycy5hLCBzZWxlY3RvcnMudCk7XHJcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnbnRoY2hpbGQnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLm4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMubjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJyonO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0U2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBhbGxfc2VsZWN0b3JzLCBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHBhcmVudHMsIHJlc3VsdCwgc2VsZWN0b3IsIHNlbGVjdG9ycztcclxuICAgICAgYWxsX3NlbGVjdG9ycyA9IFtdO1xyXG4gICAgICBwYXJlbnRzID0gdGhpcy5nZXRQYXJlbnRzKGVsZW1lbnQpO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSBwYXJlbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgaXRlbSA9IHBhcmVudHNba107XHJcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLmdldFVuaXF1ZVNlbGVjdG9yKGl0ZW0pO1xyXG4gICAgICAgIGlmIChzZWxlY3RvciAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbGxfc2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RvcnMgPSBbXTtcclxuICAgICAgZm9yIChsID0gMCwgbGVuMSA9IGFsbF9zZWxlY3RvcnMubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XHJcbiAgICAgICAgaXRlbSA9IGFsbF9zZWxlY3RvcnNbbF07XHJcbiAgICAgICAgc2VsZWN0b3JzLnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLmpvaW4oJyA+ICcpO1xyXG4gICAgICAgIGlmICh0aGlzLnRlc3RTZWxlY3RvcihlbGVtZW50LCByZXN1bHQpKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XHJcbiAgICAgIHZhciBpLCBqLCBrLCBsLCByZWYsIHJlZjEsIHJlc3VsdDtcclxuICAgICAgaWYgKGl0ZW1zID09IG51bGwpIHtcclxuICAgICAgICBpdGVtcyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdCA9IFtbXV07XHJcbiAgICAgIGZvciAoaSA9IGsgPSAwLCByZWYgPSBpdGVtcy5sZW5ndGggLSAxOyAwIDw9IHJlZiA/IGsgPD0gcmVmIDogayA+PSByZWY7IGkgPSAwIDw9IHJlZiA/ICsrayA6IC0taykge1xyXG4gICAgICAgIGZvciAoaiA9IGwgPSAwLCByZWYxID0gcmVzdWx0Lmxlbmd0aCAtIDE7IDAgPD0gcmVmMSA/IGwgPD0gcmVmMSA6IGwgPj0gcmVmMTsgaiA9IDAgPD0gcmVmMSA/ICsrbCA6IC0tbCkge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2gocmVzdWx0W2pdLmNvbmNhdChpdGVtc1tpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXN1bHQuc2hpZnQoKTtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uam9pbignJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCA/IGRlZmluZS5hbWQgOiB2b2lkIDApIHtcclxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBDc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByb290ID0gdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cyAhPT0gbnVsbCA/IGV4cG9ydHMgOiB0aGlzO1xyXG4gICAgcm9vdC5Dc3NTZWxlY3RvckdlbmVyYXRvciA9IENzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG4gIH1cclxuXHJcbn0pLmNhbGwodGhpcyk7XHJcbiIsIi8qXHJcbiAgUmVwbGFjZSB0ZW1wbGF0ZXMuXHJcblxyXG4gIFJlcGxhY2UgdGhlIGRlZmF1bHQgcHJpbW8gdGVtcGxhdGVzIGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMy9wcmltby1leHBsb3JlL2xpYi90ZW1wbGF0ZXMuanNcclxuICB3aXRoIGN1c3RvbSB0ZW1wbGF0ZXNcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMThcclxuICBUb20gVmFubWVjaGVsZW5cclxuKi9cclxuaW1wb3J0ICcuL3V0aWxzJ1xyXG5cclxuLyogaW1wb3J0IHlvdXIgdGVtcGxhdGVzICovXHJcblxyXG5pbXBvcnQgY2hhbmdlTGFuZ1dpdGhvdXRVc2VyQXJlYUhUTUwgZnJvbSAnLi4vaHRtbC90ZW1wbGF0ZXMvY2hhbmdlLWxhbmctd2l0aG91dC11c2VyLWFyZWEuaHRtbCdcclxuaW1wb3J0IHBybUxvYW5CdWdGaXhIVE1MIGZyb20gJy4uL2h0bWwvdGVtcGxhdGVzL3BybS1sb2FuLWJ1Zy1maXguaHRtbCdcclxuaW1wb3J0IHBybVJlcXVlc3RCdWdGaXhIVE1MIGZyb20gJy4uL2h0bWwvdGVtcGxhdGVzL3BybS1yZXF1ZXN0LWJ1Zy1maXguaHRtbCdcclxuaW1wb3J0IHBybUxpcmlhc0JyaWVmUmVzdWx0Q29udGFpbmVySFRNTCBmcm9tICcuLi9odG1sL3RlbXBsYXRlcy9wcm0tbGlyaWFzLWJyaWVmLXJlc3VsdC1jb250YWluZXIuaHRtbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlcyB7XHJcbiAgICBzdGF0aWMgZ2V0IGFsbCgpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgaWQgPSB0ZW1wbGF0ZUlkIGluIHRoZSB0ZW1wbGF0ZUNhY2hlXHJcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHRoZSBpbXBvcnRlZCB0ZW1wYWx0ZVxyXG4gICAgICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxyXG4gICAgICAgICAgZW5hYmxlSW5WaWV3ID0gcmVnZXggdG8gZGVmaW5lIGluIHdoaWNoIHZpZXdzIHRoZSB0ZW1wbGF0ZSBoYXMgdG8gYmUgcmVwbGFjZWQuXHJcblxyXG4gICAgICAgICAgZXguIHtpZDogJ2NvbXBvbmVudHMvc2VhcmNoL3RvcGJhci91c2VyQXJlYS91c2VyLWFyZWEuaHRtbCcsIHRlbXBsYXRlOiB1c2VyQXJlYUhUTUwsIGVuYWJsZWQ6IHRydWUsIGVuYWJsZUluVmlldzogJy4qJ31cclxuICAgICAgICAgIHJlc3VsdHMgaW46XHJcbiAgICAgICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvdG9wYmFyL3VzZXJBcmVhL3VzZXItYXJlYS5odG1sJyx1c2VyQXJlYUhUTUwpO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbXBvbmVudHMvc2VhcmNoL3RvcGJhci91c2VyQXJlYS91c2VyLWFyZWEuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogY2hhbmdlTGFuZ1dpdGhvdXRVc2VyQXJlYUhUTUwsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlSW5WaWV3OiAnVkRJQydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb21wb25lbnRzL2FjY291bnQvbG9hbnMvbG9hbi5odG1sJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBwcm1Mb2FuQnVnRml4SFRNTCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb21wb25lbnRzL2FjY291bnQvcmVxdWVzdHMvcmVxdWVzdHMuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcHJtUmVxdWVzdEJ1Z0ZpeEhUTUwsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXHJcbiAgICAgICAgICAgIH0sICAgICAgICAgICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb21wb25lbnRzL3NlYXJjaC9icmllZlJlc3VsdC9icmllZlJlc3VsdENvbnRhaW5lci5odG1sJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBwcm1MaXJpYXNCcmllZlJlc3VsdENvbnRhaW5lckhUTUwsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlSW5WaWV3OiAnTGlyaWFzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXS5maWx0ZXIoKHRlbXBsYXRlKSA9PiAodGVtcGxhdGUuZW5hYmxlZCAmJiBuZXcgUmVnRXhwKHRlbXBsYXRlLmVuYWJsZUluVmlldykudGVzdCh3aW5kb3cuYXBwQ29uZmlnLnZpZCkpKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gIEdlbmVyYWxcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuU3RyaW5nLnByb3RvdHlwZS50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5zcGxpdCgnLScpLm1hcCgoZCwgaSwgYSkgPT4gaSA+IDAgPyBkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZC5zbGljZSgxKSA6IGQpLmpvaW4oJycpO1xyXG59XHJcblxyXG4vL2ludGVyY2VwdCBhcGkgY2FsbHMgZm9yIGRhdGFiYXNlIHNlYXJjaCBhbmQgY2hhbmdlIHRvIEtVTCAob25seSByZWdpb25hbCB2aWV3cylcclxuICAvKlxyXG52YXIgcmVnX3ZpZXdzID0gW1wiS1VMZXV2ZW5fVE1PUkVNXCIsIFwiS1VMZXV2ZW5fVE1PUkVLXCIsIFwiS1VMZXV2ZW5fVUNMTFwiLCBcIktVTGV1dmVuX0xVQ0FcIiwgXCJLVUxldXZlbl9PRElTRUVcIl07XHJcbmlmIChyZWdfdmlld3MuaW5jbHVkZXMod2luZG93LmFwcENvbmZpZy52aWQpKSB7XHJcbiAgbGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd2aWV3Q3VzdG9tJywgW10pXHJcbiAgICAuZmFjdG9yeSgnaHR0cENhbGxJbnRlcmNlcHRvcicsIFsoKSA9PiB7XHJcbiAgICAgIHZhciBodHRwQ2FsbEludGVyY2VwdG9yID0ge1xyXG4gICAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uKGNvbmZpZyl7XHJcbiAgICAgICAgICBpZiAoY29uZmlnLnVybC5pbmNsdWRlcygncG54cycpICYmICFjb25maWcudXJsLmluY2x1ZGVzKCdkZWxpdmVyeScpICYmIGNvbmZpZy5wYXJhbXMpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjb25maWcpO1xyXG5cclxuICAgICAgICAgICAgaWYoY29uZmlnLnBhcmFtcy5kYXRhYmFzZXMpe1xyXG4gICAgICAgICAgICAgIGNvbmZpZy5wYXJhbXMuaW5zdCA9ICdLVUwnO1xyXG4gICAgICAgICAgICAgIGNvbmZpZy5wYXJhbXMudmlkID0gJ0tVTGV1dmVuJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBodHRwQ2FsbEludGVyY2VwdG9yO1xyXG4gICAgfV0pXHJcbiAgICAuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsICgkaHR0cFByb3ZpZGVyKSA9PiB7XHJcbiAgICAgICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ2h0dHBDYWxsSW50ZXJjZXB0b3InKTtcclxuICAgIH1dKTtcclxufVxyXG4qL1xyXG4vKlxyXG5hbmd1bGFyLmVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3RDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICByZXR1cm4gKGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgY2xhc3NOYW1lKSB7XHJcbiAgICBpZiAoZWxlbWVudFswXS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY2xvc2VzdChlbGVtZW50LnBhcmVudCgpLCBjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH0pKHRoaXMsIGNsYXNzTmFtZSk7XHJcbn07XHJcblxyXG5hbmd1bGFyLmVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3ROb2RlID0gZnVuY3Rpb24gKG5vZGVOYW1lKSB7XHJcbiAgcmV0dXJuIChmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIG5vZGVOYW1lKSB7XHJcbiAgICBpZiAoZWxlbWVudFswXS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50WzBdLm5vZGVOYW1lID09IG5vZGVOYW1lLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY2xvc2VzdChlbGVtZW50LnBhcmVudCgpLCBub2RlTmFtZSk7XHJcbiAgICB9XHJcbiAgfSkodGhpcywgbm9kZU5hbWUpO1xyXG59O1xyXG4qL1xyXG4iXX0=
