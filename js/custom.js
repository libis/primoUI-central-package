(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

},{}],2:[function(require,module,exports){
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

var _deprecatedViews = require('./components/general/deprecatedViews');

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

var _searchAlsoBodyGoogle = require('./components/prmFacetExactAfter/searchAlsoBodyGoogle');

var _searchAlsoBodyWorldcat = require('./components/prmFacetExactAfter/searchAlsoBodyWorldcat');

var _browzine = require('./components/prmSearchResultAvailabilityLineAfterController/browzine');

var _filterFacetValues = require('./components/prmFacetAfter/filterFacetValues');

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
                  return [{ name: 'libis-experiment', config: _experiment.experimentConfig, enabled: false, appendTo: 'prm-messages-and-blocks-overview-after', enableInView: '.*' }, { name: 'home-icon', config: _homeIcon.homeIconConfig, enabled: false, appendTo: null, enableInView: '' }, { name: 'beta-switch', config: _betaSwitch.betaSwitchConfig, enabled: false, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'language-dependent-logo', config: _languageDependentLogo.languageDependentLogoConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'view-logo', config: _viewLogo.viewLogoConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'source-icon', config: _sourceIcon.sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^(?!Lirias)' }, { name: 'altmetric', config: _altmetric.altmetricConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB' }, { name: 'altmetrics-badge', config: _altmetricsBadge.altmetricsBadgeConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB' }, { name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after', enableInView: '.*' }, { name: 'pay-my-fines', config: _payMyFines.payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after', enableInView: '.*' }, { name: 'feedback', config: _feedback.feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'language-selection', config: _ConfigLanguageSelection.LanguageSelectionConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'deprecated-vids', config: _deprecatedViews.DeprecatedViewsConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'new-search-button', config: _newSearchButton.newSearchButtonConfig, enabled: true, appendTo: 'prm-top-nav-bar-links-after', enableInView: '^(?!ECB)' }, { name: 'report-a-problem', config: _reportAProblem.reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '.*' }, { name: 'request-a-copy-head', config: _requestACopy.requestACopyConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '^Lirias' },
                  //{name: 'request-a-copy', config: requestACopyConfig, enabled: true, appendTo: 'prm-full-view-service-container-after', enableInView: '^Lirias'},
                  { name: 'request-a-copy-es-doc', config: _requestACopyOfEsDoc.requestACopyOfEsDocConfig, enabled: true, appendTo: 'prm-full-view-service-container-after', enableInView: '^VLP' }, { name: 'user-jwt', config: _exposeJwt.exposeJwtConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^VLP|^ECB' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'prm-disclaimer', config: _disclaimer.disclaimerConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'static-footer', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-explore-footer-after', enableInView: '.*' },
                  //{name: 'static-footer-account', config: staticFooterConfig, enabled: true, appendTo: 'prm-account-after', enableInView: '.*'},
                  { name: 'remove-alerts', config: _removeAlerts.removeAlertsConfig, enabled: false, appendTo: 'prm-add-query-to-saved-searches-after', enableInView: '.*' }, { name: 'remove-check-locations', config: _removeCheckLocations.removeCheckLocationsConfig, enabled: false, appendTo: 'prm-search-result-availability-line-after', enableInView: 'Lirias' }, { name: 'prm-dblink', config: _databaseLink.databaseLinkConfig, enabled: false, appendTo: null, enableInView: '.*' },

                  /* lbs-components used in html-templates of the package */
                  { name: 'auto-login-static-footer', config: _autoPromoteLogin.autoLoginCheckboxConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView: '^KULeuven$' }, { name: 'promote-login', config: _autoPromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'prm-authentication-after', enableInView: '^KULeuven$' }, { name: 'auto-login', config: _autoPromoteLogin.autoLoginConfig, enabled: true, appendTo: 'prm-authentication-after', enableInView: 'KULeuven_LUCA|KULeuven_ODISEE|KULeuven_TMOREK|KULeuven_TMOREM|KULeuven_UCLL' }, { name: 'ill-request-form-overview', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-overview-after', enableInView: '.*' }, { name: 'ill-request-form', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-after', enableInView: '^KULeuven|^VIVES' }, { name: 'announcement-feedback', config: _feedbackAnnouncement.feedbackAnnouncementConfig, enabled: false, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'override-getlink-recommendation', config: _recommendationItem.recommendationItemConfig, enabled: true, appendTo: 'prm-recomendation-item-after', enableInView: '.*' }, { name: 'announcement', config: _announcements.announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'pay-my-fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven' },
                  //  {name: 'remove-open-access', config: removeOpenAccessConfig, enabled: false, appendTo: 'prm-facet-after', enableInView: '.*'},
                  { name: 'search-also', config: _searchAlso.searchAlsoConfig, enabled: true, appendTo: 'prm-facet-after', enableInView: '^KULeuven|^VIVES|^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL' }, { name: 'search-also-body', config: _searchAlsoBody.searchAlsoBodyConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^KULeuven|^VIVES|^ODISEE|^FARO' }, { name: 'search-also-body-bib', config: _searchAlsoBodyBib.searchAlsoBodyBibConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^VIVES|^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL' }, { name: 'search-also-body-google', config: _searchAlsoBodyGoogle.searchAlsoBodyGoogleConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL' }, { name: 'search-also-body-worldcat', config: _searchAlsoBodyWorldcat.searchAlsoBodyWorldcatConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^KULeuven' }, { name: 'browzine', config: _browzine.browzineConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '^KULeuven|^ECB' }, { name: 'filter-facet-values', config: _filterFacetValues.filterFacetValuesConfig, enabled: true, appendTo: 'prm-facet-after', enableInView: '^JESUITS' }, { name: 'search-collections', config: _exploreSearchCollections.searchCollectionsConfig, enabled: true, appendTo: 'prm-collection-gallery-header-after', enableInView: '^KULeuven' }].filter(function (component) {
                        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
                  });
            }
      }]);

      return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/ConfigLanguageSelection":3,"./components/general/databaseLink":4,"./components/general/deprecatedViews":5,"./components/general/disclaimer":7,"./components/general/experiment":8,"./components/general/exposeJwt":9,"./components/general/removeAlerts":10,"./components/general/removeCheckLocations":11,"./components/general/searchTip":12,"./components/general/staticFooter":13,"./components/prmAutoPromoteLogin/autoPromoteLogin":14,"./components/prmBriefResultAfter/altmetric":15,"./components/prmBriefResultAfter/sourceIcon":16,"./components/prmCollectionGalleryHeaderAfter/exploreSearchCollections":17,"./components/prmFacetAfter/filterFacetValues":18,"./components/prmFacetAfter/searchAlso":19,"./components/prmFacetExactAfter/searchAlsoBody":20,"./components/prmFacetExactAfter/searchAlsoBodyBib":21,"./components/prmFacetExactAfter/searchAlsoBodyGoogle":22,"./components/prmFacetExactAfter/searchAlsoBodyWorldcat":23,"./components/prmFinesOverviewAfter/payMyFines":24,"./components/prmFullViewAfter/altmetricsBadge":25,"./components/prmLogoAfter/betaSwitch":26,"./components/prmLogoAfter/homeIcon":27,"./components/prmLogoAfter/languageDependentLogo":28,"./components/prmLogoAfter/newSearchButton":29,"./components/prmLogoAfter/viewLogo":30,"./components/prmMainMenuAfter/feedback":31,"./components/prmRecommendationItemAfter/recommendationItem":32,"./components/prmRequestsAfter/illRequestForm":33,"./components/prmSearchResultAvailabilityLineAfterController/browzine":34,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":35,"./components/prmServiceHeaderAfter/reportAProblem":36,"./components/prmServiceHeaderAfter/requestACopy":37,"./components/prmServiceHeaderAfter/requestACopyOfEsDoc":38,"./components/prmTopBarBefore/announcements":39,"./components/prmTopBarBefore/feedbackAnnouncement":40,"./components/prmTopBarBefore/finesMessage":42,"./utils":61}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeprecatedViewsController = function DeprecatedViewsController($scope) {
    _classCallCheck(this, DeprecatedViewsController);

    var self = this;
    var scope = $scope;
    var deprecated_vids = ['UCLL_LIMBURG', 'UCLL_LEUVEN', 'KULeuven_UX'];
    var parentEl = angular.element(document.querySelector('primo-explore'));
    if (deprecated_vids.includes(window.appConfig.vid)) {
        console.log("This is an old view !!!!");
        window.location.replace("https://" + document.location.host);
    }
};

DeprecatedViewsController.$inject = ['$scope'];

var DeprecatedViewsConfig = exports.DeprecatedViewsConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: DeprecatedViewsController,
    template: ''
};

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchCollectionsHTML = '<a class="md-button md-primoExplore-theme md-ink-ripple" href="/primo-explore/search?search_scope=KULEUVEN_COLLECTIONS&vid=KULeuven&offset=0">\r\n  <span translate="lbs.nui.search.collections.button">Search Curated Collections</span></a>\r\n  <div style="position:absolute;bottom:0.5em;right:17%;color:white;font-weight:200;margin:5px 5px 0 5px;/*! background: rgba(red,0.1); */border: 1px solid #ae1b00;padding: 0px 3px 0 1px;background: #ae1b00;border-radius: 5px;">\r\n    <strong><span style="padding:3px 10px;background:#c81f00;color:white;border-radius:50%;" class="mark">!</span> Teneo is currently having performance issues. Some full objects cannot be viewed. We are working on a solution</strong>\r\n  </div>\r\n<!--<a ng-if="!$ctrl.isGalleryLobby" class="md-button md-primoExplore-theme md-ink-ripple" href="/primo-explore/search?query=title,contains,{{$ctrl.getCollection()}}&search_scope=KULEUVEN_COLLECTIONS&sortby=rank&vid=KULeuven&offset=0" title="Search {{$ctrl.getCollection()}}">Search this collection</a>\r\n<!-- &facet=local4,include,Corble%20fencing%20collection$$IKUL -->\r\n';

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

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterFacetValuesConfig = undefined;

var _os = require("os");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var filterFacetValuesController = function filterFacetValuesController($scope) {
    var _this = this;

    _classCallCheck(this, filterFacetValuesController);

    var facetsFilters = [{
        vid: "JESUITS",
        filters: [{
            name: "library",
            type: "include",
            values: ["KUL_GOSA_LIB", "KUL_GBIB_LIB", "KUL_GPAR_LIB", "ANET_UA-CST"]
        }, {
            name: "domain",
            type: "include",
            values: ["LIBISnet Catalogue", "Ruusbroecgenootschap"]
        }]
    }];

    var vidfacetsFilters = facetsFilters.filter(function (f) {
        return f.vid == _this.parentCtrl.parentCtrl.vid;
    });
    if (vidfacetsFilters.length == 1) {
        var vidfacetsFilter = vidfacetsFilters[0];

        $scope.$watch(function () {
            return _this.parentCtrl.parentCtrl.facetService.results;
        }, function (n, o) {
            //                if (n != o) {
            var vidfacetsresults;
            vidfacetsFilter.filters.forEach(function (vidFacet) {
                vidfacetsresults = _this.parentCtrl.parentCtrl.facetService.results.map(function (facet) {
                    if (facet.name == vidFacet.name) {
                        facet.values = facet.values.filter(function (facetVal) {
                            if (vidFacet.type === 'include') {
                                return vidFacet.values.includes(facetVal.value);
                            }
                            if (vidFacet.type === 'exclude') {
                                return !vidFacet.values.includes(facetVal.value);
                            }
                            return true;
                        });
                    }
                    return facet;
                });
            });
            // }
        });
    }
};

filterFacetValuesController.$inject = ['$scope'];

var filterFacetValuesConfig = exports.filterFacetValuesConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: filterFacetValuesController
};

},{"os":1}],19:[function(require,module,exports){
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
    //if (n != o) {
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
    //}
  });
};

SearchAlsoController.$inject = ['$scope'];

var searchAlsoConfig = exports.searchAlsoConfig = {
  bindings: { parentCtrl: '<' },
  controller: SearchAlsoController
};

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchAlsoBodyHTML = '<div ng-if="$ctrl.name === \'search_also\'" class="lbs-search-also">\r\n  <div ng-hide="$ctrl.parentCtrl.parentCtrl.facetGroup.facetGroupCollapsed">\r\n    <div class="section-content animate-max-height-variable">\r\n      <div class="md-chips md-chips-wrap">\r\n        <div ng-repeat="target in $ctrl.targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">\r\n          <div class="md-chip-content layout-row" role="button" tabindex="9">\r\n            <strong dir="auto" title="{{ target.name }}">\r\n              <a ng-href="{{ target.url + target.mapping($ctrl.search) }}" target="_blank"  title="{{ (target.tooltip | translate )}}">\r\n                <img ng-src="{{ target.img }}" width="22" height="22" style="vertical-align:middle;padding-right:2px;"> {{ target.name }}\r\n              </a>\r\n            </strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

var SearchAlsoBodyGoogleController = function () {
  function SearchAlsoBodyGoogleController($location) {
    _classCallCheck(this, SearchAlsoBodyGoogleController);

    this.location = $location;
    this.targets = this._targets();
  }

  _createClass(SearchAlsoBodyGoogleController, [{
    key: '_targets',
    value: function _targets() {
      return [{
        "name": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=",
        "img": "/primo-explore/custom/CENTRAL_PACKAGE/img/google_icon.png",
        "tooltip": "lbs.nui.search_also.tooltip.google_scolar",
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

  return SearchAlsoBodyGoogleController;
}();

SearchAlsoBodyGoogleController.$inject = ['$location'];

var searchAlsoBodyGoogleConfig = exports.searchAlsoBodyGoogleConfig = {
  bindings: { parentCtrl: '<' },
  controller: SearchAlsoBodyGoogleController,
  template: searchAlsoBodyHTML
};

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchAlsoBodyHTML = '<div ng-if="$ctrl.name === \'search_also\'" class="lbs-search-also">\r\n  <div ng-hide="$ctrl.parentCtrl.parentCtrl.facetGroup.facetGroupCollapsed">\r\n    <div class="section-content animate-max-height-variable">\r\n      <div class="md-chips md-chips-wrap">\r\n        <div ng-repeat="target in $ctrl.targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">\r\n          <div class="md-chip-content layout-row" role="button" tabindex="9">\r\n            <strong dir="auto" title="{{ target.name }}">\r\n              <a ng-href="{{ target.url + target.mapping($ctrl.search) }}" target="_blank"  title="{{ (target.tooltip | translate )}}">\r\n                <img ng-src="{{ target.img }}" width="22" height="22" style="vertical-align:middle;padding-right:2px;"> {{ target.name }}\r\n              </a>\r\n            </strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

var SearchAlsoBodyWorldcatController = function () {
  function SearchAlsoBodyWorldcatController($location) {
    _classCallCheck(this, SearchAlsoBodyWorldcatController);

    this.location = $location;
    this.targets = this._targets();
  }

  _createClass(SearchAlsoBodyWorldcatController, [{
    key: '_targets',
    value: function _targets() {
      return [{
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

  return SearchAlsoBodyWorldcatController;
}();

SearchAlsoBodyWorldcatController.$inject = ['$location'];

var searchAlsoBodyWorldcatConfig = exports.searchAlsoBodyWorldcatConfig = {
  bindings: { parentCtrl: '<' },
  controller: SearchAlsoBodyWorldcatController,
  template: searchAlsoBodyHTML
};

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

    //let vid = view.code;
    var vid = window.appConfig.vid;
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

},{}],28:[function(require,module,exports){
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
    //let vid = view.code;
    var vid = window.appConfig.vid;

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

},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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
    //let vid = view.code;
    var vid = window.appConfig.vid;
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

},{}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{}],33:[function(require,module,exports){
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

},{}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestACopyHTML = '  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\r\n             class="zero-margin button-link md-button md-primoExplore-theme md-ink-ripple request-a-copy"\r\n             layout="column" layout-align="center center" (click)="$ctrl.showRequestACopyForm($event)"\r\n             aria-label="lbs.nui.details.request_a_copy">\r\n\r\n                  \r\n <!--       \r\n      <span class="item-content" translate="lbs.nui.details.request_a_copy"> <i class="material-icons">shopping_cart</i></span>\r\n-->\r\n<span class="item-content" ><i class="material-icons">shopping_cart</i> Request a copy</span>\r\n            <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\r\n        <span class="item-description popover animate-popover"\r\n              translate="lbs.nui.details.description.request_a_copy"></span>\r\n       </md-tooltip>\r\n  </md-button>\r\n\r\n\r\n  <style>\r\n.md-button.request-a-copy{\r\n      /* background-color: blueviolet; */\r\n      width: fit-content;\r\n      color: #265f8d;\r\n      background-color: rgba(92, 146, 189, 0.1);\r\n}\r\n\r\n\r\n.md-button.button-link.request-a-copy:hover:not([disabled]) {\r\n      color: #fff;\r\n      background-color: #08a7eb;\r\n}\r\n\r\n\r\n  </style>';
var requestACopyDialogHTML = '<!-- translations in CODE TABLES -> View Labels -->\r\n\r\n\r\n<md-dialog id=\'lbsRequestACopyForm\' aria-label=\'Request a copy\'>\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>\r\n                    <span translate="lbs.nui.details.request_a_copy"></span>\r\n                </h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="cancelRequest()">\r\n                    <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-dialog-content>\r\n          <form name=\'requestACopyForm\'>\r\n            <div class="md-dialog-content">\r\n                <md-container class="md-block">\r\n                    <div style="font-size:0.8rem; border-bottom: #e9e9e9 1px solid; margin-bottom: 18px">\r\n                                <span ng-bind="request.title"></span><br>\r\n                                <span ng-bind="request.creator"></span> <span ng-bind="request.contributorsr"></span><br>\r\n                                <span ng-bind="request. ispartof"></span>\r\n                     </div>\r\n                </md-container>\r\n                <input type="hidden" name=\'subject\' ng-model=\'request.subject\'>\r\n                \r\n                <md-input-container class="md-block" style="margin-top: 36px;">\r\n                    <label><span translate="lbs.nui.details.email"></span></label>\r\n                    <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'request.replyTo\' ng-pattern="/^.+@.+\\..+$/">\r\n                    <div ng-if=\'requestACopyForm.replyTo.$error.required\' role="alert">\r\n                      <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\r\n                    </div>\r\n                    <div ng-if=\'requestACopyForm.replyTo.$error.email\' role="error">\r\n                      <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\r\n                    </div>\r\n                </md-input-container>\r\n                <md-input-container lass="md-block" style="margin-top: 36px;">\r\n                    <label><span translate="lbs.nui.request_a_copy.motivation.label"></span></label>\r\n                    <textarea name="motivation" placeholder="{{ \'lbs.nui.request_a_copy.motivation.description\' | translate }}" \r\n                    md-maxlength="5000" required md-no-asterisk rows="5" cols="80" ng-model="request.motivation"></textarea>\r\n                    <div ng-if=\'requestACopyForm.motivation.$error.required\' role="error">\r\n                      <div style=\'color:tomato;\'><span translate="lbs.nui.request_a_copy.motivation.mandatory"></span></div>\r\n                    </div>\r\n                </md-input-container>\r\n\r\n                <md-input-container class="md-block">\r\n                        <div vc-recaptcha key="capchaPublicKey" on-create="setWidgetId(widgetId)" on-success="setResponse(response)"\r\n                            on-expire="cbExpiration()"></div>\r\n                    </md-input-container>\r\n\r\n            </div>\r\n          </form>\r\n        </md-dialog-content>\r\n        <md-dialog-actions layout="row">\r\n            <md-button class="md-raised" ng-click="cancelRequest()">Cancel</md-button>\r\n            <md-button class="md-raised md-primary " ng-click=\'sendRequest()\' ng-disabled="requestACopyForm.$invalid">Submit</md-button>\r\n        </md-dialog-actions>\r\n    </md-dialog>\r\n';

var RequestACopyController = function () {
  function RequestACopyController($element, $compile, $scope, $mdDialog, $http, $rootScope, requestACopyURL, MessageService) {
    _classCallCheck(this, RequestACopyController);

    var self = this;
    self.$rootScope = $rootScope;
    // If you want to add the button to the title (like report a problem)
    //let serviceTitleCode = self.parentCtrl.parentCtrl.title
    //let appendButtonTo = $element.parent().parent().find('h4');

    // full // let serviceTitleCode = self.parentCtrl.parentCtrl.service.title;
    // full // let appendButtonTo = $element.parent();

    var serviceTitleCode = self.parentCtrl.parentCtrl.title;
    //let appendButtonTo = $element.parent().parent().parent().parent();
    var appendButtonTo = angular.element($element.nativeElement.closest('prm-full-view-service-container').querySelector('prm-full-view-service-container-after'));

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

RequestACopyController.$inject = ['$element', '$compile', '$scope', '$mdDialog', '$http', '$rootScope', 'requestACopyURL', 'MessageService'];

var requestACopyConfig = exports.requestACopyConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: RequestACopyController,
  template: ''
};

},{}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestACopyOfEsDocHTML = '  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\r\n             class="zero-margin button-link md-button md-primoExplore-theme md-ink-ripple request-a-copy"\r\n             layout="column" layout-align="center center" (click)="$ctrl.openUrlToILL($event)"\r\n             aria-label="lbs.nui.details.request_a_copy">\r\n      <span class="item-content" ><i class="material-icons">shopping_cart</i> Request a copy</span>\r\n            <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\r\n        <span class="item-description popover animate-popover"\r\n              translate="lbs.nui.details.description.request_a_copy"></span>\r\n       </md-tooltip>\r\n  </md-button>\r\n\r\n\r\n  <style>\r\n.md-button.request-a-copy{\r\n      /* background-color: blueviolet; */\r\n      width: fit-content;\r\n      color: #265f8d;\r\n      background-color: rgba(92, 146, 189, 0.1);\r\n}\r\n\r\n\r\n.md-button.button-link.request-a-copy:hover:not([disabled]) {\r\n      color: #fff;\r\n      background-color: #08a7eb;\r\n}\r\n\r\n  </style>';

var RequestACopyOfEsDocController = function () {
    function RequestACopyOfEsDocController($element, $compile, $scope, requestACopyOfEsDocURL, $window, WindowEventListener) {
        _classCallCheck(this, RequestACopyOfEsDocController);

        var self = this;
        self.$rootScope = self.parentCtrl.parentCtrl.$rootScope;
        self.WindowEventListener = WindowEventListener;
        // If you want to add the button to the title (like report a problem)
        //let serviceTitleCode = self.parentCtrl.parentCtrl.title
        //let appendButtonTo = $element.parent().parent().find('h4');

        if (self.parentCtrl.parentCtrl.service) {
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

                    var primo_inst_code = window.appConfig['primo-view']['institution']['institution-code'];
                    var alma_inst_mapping = window.appConfig['mapping-tables']['Alma Institution Codes'];
                    var alma_code = alma_inst_mapping.filter(function (obj) {
                        return obj.target == primo_inst_code;
                    })[0].source1;
                    var pnx = recordData.pnx;
                    var appendButton = false;

                    /* Request button only for Archiv-material from ESVLP and available 'oncampus' OR Signed in 
                    *  Only physical or Restricted Online material can be requested
                    */
                    if ((user.isOnCampus() || user.isLoggedIn()) && pnx.control.sourceid.includes("ESVLP_scopeArchiv")) {

                        if (pnx.facets.toplevel.includes("print_copies")) {
                            appendButton = true;
                        } else {
                            if (pnx.delivery.resdelscope) {
                                if (pnx.delivery.resdelscope.includes("RESVLP")) {
                                    appendButton = true;
                                }
                            }
                        }
                    }

                    if (appendButton) {
                        appendButtonTo.after($compile(requestACopyOfEsDocHTML)($scope));
                    }

                    self.openUrlToILL = function ($event) {
                        /*
                        http://services.libis.be/illform/32KUL_SERV?rft.genre=book&rft.advisor=&rft.au=&rft.aucorp=&rft.aufirst=&rft.aulast=&rft.contributor=&rft.creator=&rft.atitle=&rft.btitle=Wood&rft.jtitle=&rft.stitle=&rft.title=Wood&rft.series=&rft.degree=&rft.description=&rft.edition=&rft.identifier=&rft.eisbn=&rft.eissn=&rft.isbn=9780714873480&rft.issn=&rft.pages=&rft.part=&rft.epage=&rft.spage=&rft.ssn=&rft.tpages=&rft.year=&rft.month=&rft.day=&rft.volume=&rft.issue=&rft.date=&rft.place=&rft.pub=&rft.pubdate=2017&rft.pubday=&rft.publisher=&rft.pubyear=&locale=nl_BE
                        sid/primo.exlibrisgroup.com:primo3-Article-ESVLP_scopeArchiv&rft_val_fmt=info:ofi/fmt:kev:mtx:
                        */
                        var config = {
                            "rft.genre": pnx.display.type,
                            "rft.part": pnx.display.ispartof,
                            "rft.date": pnx.display.creationdate,
                            "rft.au": pnx.addata.au,
                            "rft.rights": pnx.display.rights

                            /*
                            
                            rft.atitle={{addata/atitle}}& => pnx.display.title[0]
                            rft.jtitle={{addata/jtitle}}& => pnx.display.ispartof[0]
                            rft.btitle={{addata/btitle}}& => pnx.display.ispartof[0]
                            rft.btitle={{addata/adtitle}}& => pnx.addata/adtitle[0]
                            
                            
                            rft.genre={{addata/genre}}& => pnx.display.type[0]
                            rft.part={{addata/part}}& => pnx.display.ispartof[0]
                            rft.date={{addata/date}}& => pnx.display.creationdate[0]
                            rft.au={{addata/au}}& => pnx.addata.au[0]
                            rft.dat=<{{control/sourceid}}>{{control/sourcerecordid}}</{{control/sourceid}}> => < pnx.control.sourceid[0] > pnx.control.sourcerecordid  </ pnx.control.sourceid[0] >
                            
                            
                            ??? rft.rights = pnx.display.rights[0]
                            */

                            /*
                            rft.aulast={{addata/aulast}}&
                            rft.auinit={{addata/auinit}}&
                            rft.auinit1={{addata/auinit1}}&
                            rft.auinitm={{addata/auinitm}}&
                            rft.ausuffix={{addata/ausuffix}}&
                            
                            rft.aucorp={{addata/aucorp}}&
                            rft.volume={{addata/volume}}&
                            rft.issue={{addata/issue}}&
                            rft.quarter={{addata/quarter}}&
                            rft.ssn={{addata/ssn}}&
                            rft.spage={{addata/spage}}&
                            rft.epage={{addata/epage}}&
                            rft.pages={{addata/pages}}&
                            rft.artnum={{addata/artnum}}&
                            rft.issn={{addata/issn}}&
                            rft.eissn={{addata/eissn}}&
                            rft.isbn={{addata/isbn}}&
                            rft.sici={{addata/sici}}&
                            rft.coden={{addata/coden}}&
                            rft.id=info:doi/{{addata/doi}}&
                            rft.object_id={{addata/objectid}};&
                            rft.eisbn={{addata/eisbn}}&
                            rft.edition={{display/edition}}&
                            rft.pub={{addata/pub}}&
                            rft.place={{addata/cop}}&
                            rft.series={{addata/seriestitle}}&
                            rft.stitle={{addata/stitle}}&
                            rft.bici={{addata/bici}}&
                            rft.id=info:bibcode/{{addata/bibcode}}&
                            rft.id=info:hdl/{{addata/hdlid}}&
                            rft.id=info:lccn/{{addata/lccn}}&
                            rft.id=info:oclcnum/{{addata/oclcid}}&
                            rft.id=info:pmid/{{addata/pmid}}&
                            rft.id=info:eric/((addata/eric}}&
                            
                            */

                        };var openurl = "";

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
                            } else {
                                if (pnx.addate.adtitle[0]) {
                                    openurl += "&rft.btitle=" + encodeURI(pnx.addate.adtitl[0]);
                                }
                            }
                        }

                        for (var param in config) {
                            if (config[param]) {
                                openurl += "&" + param + "=" + encodeURI(config[param][0]);
                            }
                        }

                        openurl += "&rft_dat=" + "%3C" + encodeURI(pnx.control.sourceid[0]) + "%3E" + encodeURI(pnx.control.sourcerecordid[0]) + "%3C/" + encodeURI(pnx.control.sourceid[0]) + "%3E";

                        openurl = requestACopyOfEsDocURL + "/" + alma_code + "?" + openurl;
                        $window.open(openurl, '_blank');
                    };
                });
            }
        }
    }

    _createClass(RequestACopyOfEsDocController, [{
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

},{}],39:[function(require,module,exports){
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

},{}],40:[function(require,module,exports){
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

},{"./feedbackAnnouncementDialog":41}],41:[function(require,module,exports){
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

},{}],42:[function(require,module,exports){
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

},{}],43:[function(require,module,exports){
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

},{}],44:[function(require,module,exports){
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

},{}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dbSearchHttpCallInterceptor = exports.dbSearchHttpCallInterceptor = [function () {
  var httpCallInterceptor = {
    request: function request(config) {
      if (config.url.includes('pnxs') && !config.url.includes('delivery') && config.params) {
        //console.log(config);
        if (config.params.databases || config.params.journals) {
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

},{}],46:[function(require,module,exports){
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

},{}],47:[function(require,module,exports){
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

},{"../components/general/dialog":6}],48:[function(require,module,exports){
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

},{}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WindowEventListener = function WindowEventListener($rootScope, $window) {
    _classCallCheck(this, WindowEventListener);

    $window.addEventListener("message", receiveMessage, false);
    var possibleOriginsPerEvent = [{
        eventId: "retrieve_user",
        possibleOrigins: ["http://localhost:9292", "https://services.libis.be", "https://sandbox-eu.alma.exlibrisgroup.com"]
    }];
    // TODO : Maak config hash van origin en event_id =>

    function receiveMessage(event) {
        console.log("receiveMessage !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

        if (!event.data) {
            console.log("No Event data !!");
            return;
        }

        var possibleOriginsObj = possibleOriginsPerEvent.find(function (ev) {
            return ev.eventId === event.data.event_id;
        });
        console.log(possibleOriginsObj);

        var primoExploreJwt = $rootScope.$$childHead.$ctrl.jwtUtilService.storageUtil.sessionStorage.primoExploreJwt;

        if (event.data.event_id === "retrieve_user") {
            possibleOriginsObj.possibleOrigins;

            if (!possibleOriginsObj.possibleOrigins.includes(event.origin)) return;
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

},{}],50:[function(require,module,exports){
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
//let servicesHost = 'http://localhost:9292/';
var servicesHost = 'https://services.libis.be/';

var app = angular.module('centralCustom', ['ngMaterial', 'vcRecaptcha'])
/*
//.constant('servicesHost', 'https://services.libis.be/')
  .constant('feedbackServiceURL', 'https://services.libis.be/feedback')
  .constant('reportAProblemURL', 'https://services.libis.be/report_a_problem')
  .constant('requestACopyURL', 'http://192.168.100.101:9292//request_a_copy')
*/
.constant('feedbackServiceURL', servicesHost + 'feedback').constant('reportAProblemURL', servicesHost + 'report_a_problem').constant('requestACopyURL', servicesHost + 'request_a_copy').constant('requestACopyOfEsDocURL', servicesHost + 'illjwtform').config(function ($sceDelegateProvider) {
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
          'journal': "Bekijk de inhoud van het tijdschrift",
          'issue': "Bekijk de inhoud van het nummer",
          'download': "Download PDF"
        },
        'en_US': {
          'journal': "View Journal Contents",
          'issue': "View Issue Contents",
          'download': "Download PDF"
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

<<<<<<< HEAD
//enable google tag manager
var reg_views = ["KULeuven", "KULeuven_TMOREM", "KULeuven_TMOREK", "KULeuven_UCLL", "KULeuven_LUCA", "KULeuven_ODISEE", "FARO", "UCLL", "LUCA", "ODISEE", "TMOREK", "TMOREM", "VIVES_KATHO", "VIVES_KHBO"];
if (reg_views.includes(window.appConfig.vid)) {
  app.value('analyticsOptions', {
    enabled: true,
    siteId: 'GTM-WR259MX',
    defaultTitle: 'Discovery Search'
  });
}

=======
>>>>>>> ca4709a3f4802dc32468049b56b39e2ff5949367
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

},{"./components":2,"./factories/altmetricsService":43,"./factories/apiCallInterceptor":44,"./factories/dbSearchHttpCallInterceptor":45,"./factories/feedService":46,"./factories/feedbackService":47,"./factories/messageService":48,"./factories/windowEventListener":49,"./primo-explore-dom/js/primo":51,"./primo-explore-dom/js/primo/explore/helper":54,"./templates":60}],51:[function(require,module,exports){
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

},{"./primo/explore":52,"./primo/explore/helper":54,"./primo/facets":55,"./primo/records":56,"./primo/user":57,"./primo/view":58}],52:[function(require,module,exports){
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

},{"./explore/components":53,"./explore/helper":54}],53:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":59,"./helper":54}],54:[function(require,module,exports){
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

},{}],55:[function(require,module,exports){
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

},{"./explore/components":53,"./explore/helper":54}],56:[function(require,module,exports){
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

},{"./explore/components":53,"./explore/helper":54}],57:[function(require,module,exports){
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

},{"./explore/helper":54}],58:[function(require,module,exports){
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

},{"./explore/helper":54}],59:[function(require,module,exports){
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

},{}],60:[function(require,module,exports){
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
var prmLoanBugFixHTML = '<div class="md-list-item-text md-list-item-with-checkbox" layout="row" layout-wrap flex aria-live="assertive">\r\n        <md-checkbox ng-model="$ctrl.selectedIds[$ctrl.item.loanid]" aria-label="Checkbox {{$index}}"\r\n            ng-change="$ctrl.toggleSelected($ctrl.item.loanid)"\r\n            ng-disabled="!$ctrl.item[$ctrl.selector] && !$ctrl.isRenewAvailable()"></md-checkbox><span\r\n            class="item-index">{{$ctrl.index}}</span>\r\n        <div flex="40" flex-xs="100">\r\n\r\n        <div layout="row" class="title-row">\r\n            <h3 ng-if="::$ctrl.item.title" title="{{::$ctrl.item.title}}">\r\n                    {{::$ctrl.item.title}} \r\n                <span ng-if="!$ctrl.item[$ctrl.selector]">{{::$ctrl.item.title}}</span>\r\n            </h3>\r\n        </div>\r\n        <h4 ng-class="{\'loans-brief-display\':!$ctrl.isExpanded}">\r\n            <span translate="nui.loan.brief.1"></span> {{::($ctrl.item.getBriefDisplayLine(1))}}</h4>\r\n    </div>\r\n  <div flex="40" flex-xs="100" class="weak-text">\r\n        <div ng-if="::$ctrl.item.isActiveLoan()">\r\n            <p class="normal-text" ng-style="$ctrl.item.isDueAlert() && {\'color\':\'tomato\'}">\r\n                <prm-icon ng-if="::$ctrl.item.isDueAlert()" class="alert-red"\r\n                    icon-type="{{::$ctrl.accountIcons.timerIcon.type}}"\r\n                    svg-icon-set="{{::$ctrl.accountIcons.timerIcon.iconSet}}"\r\n                    icon-definition="{{::$ctrl.accountIcons.timerIcon.icon}}"></prm-icon><span\r\n                    translate="{{$ctrl.item.getCodeAlert()}}"></span>: {{($ctrl.item.getDateForBriefDisplay())}}. <span\r\n                    ng-if="::($ctrl.item.isFine())"><span translate="nui.loan.fine"></span>:\r\n                    {{::$ctrl.item.fine}}</span>\r\n            </p>\r\n        </div>\r\n        <div ng-if="::(!$ctrl.item.isActiveLoan())"><span translate="loans.return_date"></span>\r\n            {{::($ctrl.item.getDateForBriefDisplay())}}</div>\r\n        <p class="normal-text" ng-class="{\'loans-brief-display\':!$ctrl.isExpanded}"><span\r\n                translate="nui.loan.brief.2"></span>{{::($ctrl.item.getBriefDisplayLine(2))}}</p>\r\n        <div ng-if="$ctrl.isExpanded">\r\n            <p ng-repeat="line in ::$ctrl.item.fullDisplayValues" class="normal-text"><span\r\n                    translate="loans.{{::line.key}}"></span> {{::line.value}}</p>\r\n        </div>\r\n    </div>\r\n    <div layout-align="start center" layout="row" flex="20" flex-xs="100"\r\n        ng-class="{\'not-clickable\': $ctrl.renewAllInProgress}" class="list-item-actions">\r\n        <div ng-if="$ctrl.isRenewable && !$ctrl.isRenewed && !$ctrl.renewInProgress" class="renewable">\r\n            <md-button class="button-with-icon zero-margin button-link" (click)="$ctrl.renewLoan()"\r\n                aria-label="{{\'nui.loans.renew\' | translate}}">\r\n                <prm-icon class="h-flipped" icon-type="{{::$ctrl.accountIcons.renewLoanIcon.type}}"\r\n                    svg-icon-set="{{::$ctrl.accountIcons.renewLoanIcon.iconSet}}"\r\n                    icon-definition="{{::$ctrl.accountIcons.renewLoanIcon.icon}}"></prm-icon><span\r\n                    translate="nui.loans.renew"></span>\r\n            </md-button>\r\n        </div>\r\n        <prm-spinner class="inline-loader half-transparent no-text" layout="row" layout-align="center center"\r\n            ng-if="$ctrl.renewInProgress"></prm-spinner>\r\n        <div class="item-respond" ng-if="$ctrl.isRenewed"><span\r\n                ng-style="$ctrl.renewResponse.renewed === \'N\' && {\'color\':\'tomato\'} || $ctrl.renewResponse.renewed === \'Y\' && {\'color\':\'green\'}"><span\r\n                    translate="{{$ctrl.renewResponse.response || \'loans.renewed.\' + $ctrl.renewResponse.renewed}}"></span></span>\r\n        </div>\r\n        <div ng-if="$ctrl.isNotRenewable && !$ctrl.renewInProgress && !$ctrl.isRenewed" class="not-renewable weak-text"\r\n            aria-label="{{\'nui.loans.notRenewable\' | translate}}" aria-hidden="false" layout-align="start center">\r\n            <prm-icon icon-type="{{::$ctrl.accountIcons.notRenewableIcon.type}}"\r\n                svg-icon-set="{{::$ctrl.accountIcons.notRenewableIcon.iconSet}}"\r\n                icon-definition="{{::$ctrl.accountIcons.notRenewableIcon.icon}}"></prm-icon><span\r\n                translate="nui.loans.notRenewable"></span>\r\n            <md-tooltip ng-if="$ctrl.notRenewableReasonsArray.length > 0" md-direction="down" md-delay="400"\r\n                class="multi-row-tooltip slide-tooltip-anim"><span class="popover animate-popover"\r\n                    translate="nui.loans.cannotRenewThisItem"></span><br /><span ng-if="::$ctrl.isNotRenewableWithCause"\r\n                    class="tooltip-content"\r\n                    ng-repeat="reason in $ctrl.notRenewableReasonsArray | limitTo:2">{{reason}}<br /></span><span\r\n                    ng-if="::$ctrl.isNotRenewableWithCause && $ctrl.notRenewableReasonsArray.length > 2"\r\n                    class="tooltip-content">...</span></md-tooltip>\r\n            <div ng-if="$ctrl.notRenewableReasonsArray.length > 0" class="accessible-only"><span\r\n                    class="popover animate-popover" translate="nui.loans.cannotRenewThisItem"></span><br /><span\r\n                    ng-if="::$ctrl.isNotRenewableWithCause" class="tooltip-content"\r\n                    ng-repeat="reason in $ctrl.notRenewableReasonsArray | limitTo:2">{{reason}}<br /></span><span\r\n                    ng-if="::$ctrl.isNotRenewableWithCause && $ctrl.notRenewableReasonsArray.length > 2"\r\n                    class="tooltip-content">...</span></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="align-self-stretch" flex-xs="50">\r\n    <md-button class="item-expand-button"\r\n        aria-label="{{\'nui.aria.account.requests.expandcollapse\' | translate:\'{title: $ctrl.item.title}\'}}"\r\n        (click)="$ctrl.toggleDisplayMode()">\r\n        <prm-icon ng-class="{\'rotate-180\':$ctrl.isExpanded}" icon-type="{{::$ctrl.accountIcons.expandIcon.type}}"\r\n            svg-icon-set="{{::$ctrl.accountIcons.expandIcon.iconSet}}"\r\n            icon-definition="{{::$ctrl.accountIcons.expandIcon.icon}}"></prm-icon>\r\n    </md-button>\r\n    <div ng-init="messageAdded = \'open\' ;\\r\\n                      messageRemoved = \'close\' "\r\n        class="accessible-only" aria-label="{{$ctrl.isExpanded ? messageAdded : messageRemoved}}" aria-live="assertive">\r\n        {{$ctrl.isExpanded ? messageAdded : messageRemoved}}</div>\r\n</div>\r\n<prm-loan-after parent-ctrl="$ctrl"></prm-loan-after>';
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

},{"./utils":61}],61:[function(require,module,exports){
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

},{}]},{},[50])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvb3MtYnJvd3NlcmlmeS9icm93c2VyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxDb25maWdMYW5ndWFnZVNlbGVjdGlvbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGF0YWJhc2VMaW5rLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxkZXByZWNhdGVkVmlld3MuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGRpYWxvZy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGlzY2xhaW1lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwZXJpbWVudC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwb3NlSnd0LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxyZW1vdmVBbGVydHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHJlbW92ZUNoZWNrTG9jYXRpb25zLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxzZWFyY2hUaXAuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHN0YXRpY0Zvb3Rlci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQXV0b1Byb21vdGVMb2dpblxcYXV0b1Byb21vdGVMb2dpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQnJpZWZSZXN1bHRBZnRlclxcYWx0bWV0cmljLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1CcmllZlJlc3VsdEFmdGVyXFxzb3VyY2VJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Db2xsZWN0aW9uR2FsbGVyeUhlYWRlckFmdGVyXFxleHBsb3JlU2VhcmNoQ29sbGVjdGlvbnNcXGluZGV4LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GYWNldEFmdGVyXFxmaWx0ZXJGYWNldFZhbHVlcy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRBZnRlclxcc2VhcmNoQWxzby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keUJpYi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keUdvb2dsZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keVdvcmxkY2F0LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GaW5lc092ZXJ2aWV3QWZ0ZXJcXHBheU15RmluZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUZ1bGxWaWV3QWZ0ZXJcXGFsdG1ldHJpY3NCYWRnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxiZXRhU3dpdGNoLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGhvbWVJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGxhbmd1YWdlRGVwZW5kZW50TG9nby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxuZXdTZWFyY2hCdXR0b24uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcdmlld0xvZ28uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybU1haW5NZW51QWZ0ZXJcXGZlZWRiYWNrLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1SZWNvbW1lbmRhdGlvbkl0ZW1BZnRlclxccmVjb21tZW5kYXRpb25JdGVtLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1SZXF1ZXN0c0FmdGVyXFxpbGxSZXF1ZXN0Rm9ybS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtU2VhcmNoUmVzdWx0QXZhaWxhYmlsaXR5TGluZUFmdGVyQ29udHJvbGxlclxcYnJvd3ppbmUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyXFxwbnhYbWwuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlcnZpY2VIZWFkZXJBZnRlclxccmVwb3J0QVByb2JsZW0uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlcnZpY2VIZWFkZXJBZnRlclxccmVxdWVzdEFDb3B5LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcXVlc3RBQ29weU9mRXNEb2MuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVRvcEJhckJlZm9yZVxcYW5ub3VuY2VtZW50cy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxmZWVkYmFja0Fubm91bmNlbWVudC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxmaW5lc01lc3NhZ2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcYWx0bWV0cmljc1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcYXBpQ2FsbEludGVyY2VwdG9yLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxmYWN0b3JpZXNcXGRiU2VhcmNoSHR0cENhbGxJbnRlcmNlcHRvci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkYmFja1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcbWVzc2FnZVNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcd2luZG93RXZlbnRMaXN0ZW5lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcbWFpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcaGVscGVyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFxmYWNldHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHJlY29yZHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHVzZXIuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHZpZXcuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xcdmVuZG9yXFxjc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFx0ZW1wbGF0ZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENF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LCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnRzLmVuZGlhbm5lc3MgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnTEUnIH07XG5cbmV4cG9ydHMuaG9zdG5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lXG4gICAgfVxuICAgIGVsc2UgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy5sb2FkYXZnID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfTtcblxuZXhwb3J0cy51cHRpbWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAwIH07XG5cbmV4cG9ydHMuZnJlZW1lbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbn07XG5cbmV4cG9ydHMudG90YWxtZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG59O1xuXG5leHBvcnRzLmNwdXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9O1xuXG5leHBvcnRzLnR5cGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnQnJvd3NlcicgfTtcblxuZXhwb3J0cy5yZWxlYXNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmFwcFZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiAnJztcbn07XG5cbmV4cG9ydHMubmV0d29ya0ludGVyZmFjZXNcbj0gZXhwb3J0cy5nZXROZXR3b3JrSW50ZXJmYWNlc1xuPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7fSB9O1xuXG5leHBvcnRzLmFyY2ggPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnamF2YXNjcmlwdCcgfTtcblxuZXhwb3J0cy5wbGF0Zm9ybSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdicm93c2VyJyB9O1xuXG5leHBvcnRzLnRtcGRpciA9IGV4cG9ydHMudG1wRGlyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnL3RtcCc7XG59O1xuXG5leHBvcnRzLkVPTCA9ICdcXG4nO1xuIiwiLypcclxuICBEZWNsYXJlIHlvdXIgY29tcG9uZW50cyBoZXJlLlxyXG5cclxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XHJcbiAgaHR0cDovLzJhbGl0eS5jb20vMjAxNy8wMS9pbXBvcnQtb3BlcmF0b3IuaHRtbFxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5pbXBvcnQgJy4vdXRpbHMnXHJcblxyXG4vKiBpbXBvcnQgeW91ciBjb21wb25lbnQgY29uZmlndXJhdGlvbiovXHJcbmltcG9ydCB7ZXhwZXJpbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvZXhwZXJpbWVudCdcclxuXHJcbmltcG9ydCB7aG9tZUljb25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvaG9tZUljb24nXHJcblxyXG5pbXBvcnQge25ld1NlYXJjaEJ1dHRvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9uZXdTZWFyY2hCdXR0b24nXHJcbmltcG9ydCB7bGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL2xhbmd1YWdlRGVwZW5kZW50TG9nbydcclxuaW1wb3J0IHt2aWV3TG9nb0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci92aWV3TG9nbydcclxuXHJcbmltcG9ydCB7c2VhcmNoQ29sbGVjdGlvbnNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Db2xsZWN0aW9uR2FsbGVyeUhlYWRlckFmdGVyL2V4cGxvcmVTZWFyY2hDb2xsZWN0aW9ucydcclxuXHJcbmltcG9ydCB7YmV0YVN3aXRjaENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9iZXRhU3dpdGNoJ1xyXG5pbXBvcnQge3NvdXJjZUljb25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1CcmllZlJlc3VsdEFmdGVyL3NvdXJjZUljb24nXHJcbmltcG9ydCB7YWx0bWV0cmljQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9hbHRtZXRyaWMnXHJcbmltcG9ydCB7YWx0bWV0cmljc0JhZGdlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRnVsbFZpZXdBZnRlci9hbHRtZXRyaWNzQmFkZ2UnXHJcblxyXG5pbXBvcnQge3BueFhtbENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyL3BueFhtbCdcclxuaW1wb3J0IHtwYXlNeUZpbmVzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmluZXNPdmVydmlld0FmdGVyL3BheU15RmluZXMnXHJcbmltcG9ydCB7ZmVlZGJhY2tDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1NYWluTWVudUFmdGVyL2ZlZWRiYWNrJ1xyXG5pbXBvcnQge3NlYXJjaFRpcENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvc2VhcmNoVGlwJ1xyXG5pbXBvcnQge2Rpc2NsYWltZXJDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2Rpc2NsYWltZXInXHJcblxyXG5pbXBvcnQge2V4cG9zZUp3dENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvZXhwb3NlSnd0J1xyXG5cclxuaW1wb3J0IHtMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvQ29uZmlnTGFuZ3VhZ2VTZWxlY3Rpb24nXHJcbmltcG9ydCB7RGVwcmVjYXRlZFZpZXdzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9kZXByZWNhdGVkVmlld3MnXHJcblxyXG5pbXBvcnQge3JlcG9ydEFQcm9ibGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VydmljZUhlYWRlckFmdGVyL3JlcG9ydEFQcm9ibGVtJ1xyXG5pbXBvcnQge3JlcXVlc3RBQ29weUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlcnZpY2VIZWFkZXJBZnRlci9yZXF1ZXN0QUNvcHknXHJcbmltcG9ydCB7cmVxdWVzdEFDb3B5T2ZFc0RvY0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlcnZpY2VIZWFkZXJBZnRlci9yZXF1ZXN0QUNvcHlPZkVzRG9jJ1xyXG5cclxuaW1wb3J0IHtmaW5lc01lc3NhZ2VDb25maWcgYXMgcGF5TXlGaW5lc01lc3NhZ2VDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmluZXNNZXNzYWdlJ1xyXG5pbXBvcnQge2Fubm91bmNlbWVudHNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvYW5ub3VuY2VtZW50cydcclxuaW1wb3J0IHthdXRvTG9naW5DaGVja2JveENvbmZpZyxhdXRvTG9naW5Db25maWcscHJvbW90ZUxvZ2luQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQXV0b1Byb21vdGVMb2dpbi9hdXRvUHJvbW90ZUxvZ2luJ1xyXG5cclxuaW1wb3J0IHtmZWVkYmFja0Fubm91bmNlbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9mZWVkYmFja0Fubm91bmNlbWVudCdcclxuaW1wb3J0IHtzdGF0aWNGb290ZXJDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3N0YXRpY0Zvb3RlcidcclxuaW1wb3J0IHtyZW1vdmVBbGVydHNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3JlbW92ZUFsZXJ0cydcclxuaW1wb3J0IHtyZW1vdmVDaGVja0xvY2F0aW9uc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvcmVtb3ZlQ2hlY2tMb2NhdGlvbnMnXHJcbmltcG9ydCB7aWxsUmVxdWVzdEZvcm1Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1SZXF1ZXN0c0FmdGVyL2lsbFJlcXVlc3RGb3JtJ1xyXG5pbXBvcnQge3JlY29tbWVuZGF0aW9uSXRlbUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVJlY29tbWVuZGF0aW9uSXRlbUFmdGVyL3JlY29tbWVuZGF0aW9uSXRlbSdcclxuXHJcbmltcG9ydCB7ZGF0YWJhc2VMaW5rQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9kYXRhYmFzZUxpbmsnXHJcbi8vaW1wb3J0IHtyZW1vdmVPcGVuQWNjZXNzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9yZW1vdmVPcGVuQWNjZXNzJ1xyXG5cclxuaW1wb3J0IHtzZWFyY2hBbHNvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9zZWFyY2hBbHNvJ1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRFeGFjdEFmdGVyL3NlYXJjaEFsc29Cb2R5J1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5QmliQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRFeGFjdEFmdGVyL3NlYXJjaEFsc29Cb2R5QmliJ1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5R29vZ2xlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRFeGFjdEFmdGVyL3NlYXJjaEFsc29Cb2R5R29vZ2xlJ1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5V29ybGRjYXRDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GYWNldEV4YWN0QWZ0ZXIvc2VhcmNoQWxzb0JvZHlXb3JsZGNhdCdcclxuXHJcbmltcG9ydCB7YnJvd3ppbmVDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRBdmFpbGFiaWxpdHlMaW5lQWZ0ZXJDb250cm9sbGVyL2Jyb3d6aW5lJ1xyXG5cclxuaW1wb3J0IHtmaWx0ZXJGYWNldFZhbHVlc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZhY2V0QWZ0ZXIvZmlsdGVyRmFjZXRWYWx1ZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlckNvbXBvbmVudHMge1xyXG5cclxuICBzdGF0aWMgZ2V0IGFsbCgpIHtcclxuICAgIC8qXHJcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcclxuICAgICAgY29uZmlnID0gdGhlIGltcG9ydGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcclxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxyXG5cclxuICAgICAgZXguIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9XHJcbiAgICAgIHJlc3VsdHMgaW46XHJcbiAgICAgICAgPHBybS1sb2dvLWFmdGVyIHBhcmVudEN0cmw9JyRjdHJsJz5cclxuICAgICAgICAgIDxob21lLWljb24gcGFyZW50Q3RybD0nJGN0cmwnPjwvaG9tZS1pY29uPlxyXG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge25hbWU6ICdsaWJpcy1leHBlcmltZW50JywgY29uZmlnOiBleHBlcmltZW50Q29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tbWVzc2FnZXMtYW5kLWJsb2Nrcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2hvbWUtaWNvbicsIGNvbmZpZzogaG9tZUljb25Db25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnJ30sXHJcbiAgICAgIHtuYW1lOiAnYmV0YS1zd2l0Y2gnLCBjb25maWc6IGJldGFTd2l0Y2hDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnbGFuZ3VhZ2UtZGVwZW5kZW50LWxvZ28nLCBjb25maWc6IGxhbmd1YWdlRGVwZW5kZW50TG9nb0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3ZpZXctbG9nbycsIGNvbmZpZzogdmlld0xvZ29Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG5cclxuICAgICAge25hbWU6ICdzb3VyY2UtaWNvbicsIGNvbmZpZzogc291cmNlSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUxpcmlhcyknfSxcclxuICAgICAge25hbWU6ICdhbHRtZXRyaWMnLCBjb25maWc6IGFsdG1ldHJpY0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhc3xeS1VMZXV2ZW58XlZESUN8XlVDTEx8XlRNT1JFQU18XlRNT1JFS3xeU0VSVnxeTkJCJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2FsdG1ldHJpY3MtYmFkZ2UnLCBjb25maWc6IGFsdG1ldHJpY3NCYWRnZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZnVsbC12aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhc3xeS1VMZXV2ZW58XlZESUN8XlVDTEx8XlRNT1JFQU18XlRNT1JFS3xeU0VSVnxeTkJCJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3BueC14bWwnLCBjb25maWc6IHBueFhtbENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzJywgY29uZmlnOiBwYXlNeUZpbmVzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1maW5lcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1tYWluLW1lbnUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG4gICAgICB7bmFtZTogJ2xhbmd1YWdlLXNlbGVjdGlvbicsIGNvbmZpZzogTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcbiAgICAgIHtuYW1lOiAnZGVwcmVjYXRlZC12aWRzJywgY29uZmlnOiBEZXByZWNhdGVkVmlld3NDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcbiAgICAgIFxyXG4gICAgICB7bmFtZTogJ25ldy1zZWFyY2gtYnV0dG9uJywgY29uZmlnOiBuZXdTZWFyY2hCdXR0b25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1uYXYtYmFyLWxpbmtzLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuICAgICAge25hbWU6ICdyZXBvcnQtYS1wcm9ibGVtJywgY29uZmlnOiByZXBvcnRBUHJvYmxlbUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VydmljZS1oZWFkZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICBcclxuICAgICAge25hbWU6ICdyZXF1ZXN0LWEtY29weS1oZWFkJywgY29uZmlnOiByZXF1ZXN0QUNvcHlDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXNlcnZpY2UtaGVhZGVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhcyd9LFxyXG4gICAgICAvL3tuYW1lOiAncmVxdWVzdC1hLWNvcHknLCBjb25maWc6IHJlcXVlc3RBQ29weUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhcyd9LFxyXG4gICAgICB7bmFtZTogJ3JlcXVlc3QtYS1jb3B5LWVzLWRvYycsIGNvbmZpZzogcmVxdWVzdEFDb3B5T2ZFc0RvY0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXlZMUCd9LFxyXG5cclxuICAgICAge25hbWU6ICd1c2VyLWp3dCcsIGNvbmZpZzogZXhwb3NlSnd0Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1tYWluLW1lbnUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeVkxQfF5FQ0InfSxcclxuXHJcbiAgICAgIHtuYW1lOiAncHJtLXNlYXJjaHRpcHMnLCBjb25maWc6IHNlYXJjaFRpcENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGwsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncHJtLWRpc2NsYWltZXInLCBjb25maWc6IGRpc2NsYWltZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3N0YXRpYy1mb290ZXInLCBjb25maWc6IHN0YXRpY0Zvb3RlckNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZXhwbG9yZS1mb290ZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICAvL3tuYW1lOiAnc3RhdGljLWZvb3Rlci1hY2NvdW50JywgY29uZmlnOiBzdGF0aWNGb290ZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWFjY291bnQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3JlbW92ZS1hbGVydHMnLCBjb25maWc6IHJlbW92ZUFsZXJ0c0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLWFkZC1xdWVyeS10by1zYXZlZC1zZWFyY2hlcy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncmVtb3ZlLWNoZWNrLWxvY2F0aW9ucycsIGNvbmZpZzogcmVtb3ZlQ2hlY2tMb2NhdGlvbnNDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1zZWFyY2gtcmVzdWx0LWF2YWlsYWJpbGl0eS1saW5lLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnTGlyaWFzJ30sXHJcbiAgICAgIHtuYW1lOiAncHJtLWRibGluaycsIGNvbmZpZzogZGF0YWJhc2VMaW5rQ29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86IG51bGwsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICAvKiBsYnMtY29tcG9uZW50cyB1c2VkIGluIGh0bWwtdGVtcGxhdGVzIG9mIHRoZSBwYWNrYWdlICovXHJcbiAgICAgIHtuYW1lOiAnYXV0by1sb2dpbi1zdGF0aWMtZm9vdGVyJywgY29uZmlnOiBhdXRvTG9naW5DaGVja2JveENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdsYnMtcHJvbW90ZS1sb2dpbicsIGVuYWJsZUluVmlldzogICdeS1VMZXV2ZW4kJ30sXHJcbiAgICAgIHtuYW1lOiAncHJvbW90ZS1sb2dpbicsIGNvbmZpZzogcHJvbW90ZUxvZ2luQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1hdXRoZW50aWNhdGlvbi1hZnRlcicsIGVuYWJsZUluVmlldzogICdeS1VMZXV2ZW4kJ30sXHJcbiAgICAgIHtuYW1lOiAnYXV0by1sb2dpbicsIGNvbmZpZzogYXV0b0xvZ2luQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1hdXRoZW50aWNhdGlvbi1hZnRlcicsIGVuYWJsZUluVmlldzogICdLVUxldXZlbl9MVUNBfEtVTGV1dmVuX09ESVNFRXxLVUxldXZlbl9UTU9SRUt8S1VMZXV2ZW5fVE1PUkVNfEtVTGV1dmVuX1VDTEwnfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnaWxsLXJlcXVlc3QtZm9ybS1vdmVydmlldycsIGNvbmZpZzogaWxsUmVxdWVzdEZvcm1Db25maWcsIGVuYWJsZWQ6ZmFsc2UsIGFwcGVuZFRvOiAncHJtLXJlcXVlc3RzLW92ZXJ2aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdpbGwtcmVxdWVzdC1mb3JtJywgY29uZmlnOiBpbGxSZXF1ZXN0Rm9ybUNvbmZpZywgZW5hYmxlZDpmYWxzZSwgYXBwZW5kVG86ICdwcm0tcmVxdWVzdHMtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW58XlZJVkVTJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2Fubm91bmNlbWVudC1mZWVkYmFjaycsIGNvbmZpZzogZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWcsIGVuYWJsZWQ6ZmFsc2UsIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnb3ZlcnJpZGUtZ2V0bGluay1yZWNvbW1lbmRhdGlvbicsIGNvbmZpZzogcmVjb21tZW5kYXRpb25JdGVtQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1yZWNvbWVuZGF0aW9uLWl0ZW0tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG5cclxuICAgICAge25hbWU6ICdhbm5vdW5jZW1lbnQnLCBjb25maWc6IGFubm91bmNlbWVudHNDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdwYXktbXktZmluZXMtbWVzc2FnZScsIGNvbmZpZzogcGF5TXlGaW5lc01lc3NhZ2VDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVuJ30sXHJcbiAgICAgLy8gIHtuYW1lOiAncmVtb3ZlLW9wZW4tYWNjZXNzJywgY29uZmlnOiByZW1vdmVPcGVuQWNjZXNzQ29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tZmFjZXQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgIHtuYW1lOiAnc2VhcmNoLWFsc28nLCBjb25maWc6IHNlYXJjaEFsc29Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVufF5WSVZFU3xeT0RJU0VFfF5GQVJPfF5UTU9SRUt8XlRNT1JFTUF8XlVDTEwnfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1hbHNvLWJvZHknLCBjb25maWc6IHNlYXJjaEFsc29Cb2R5Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbnxeVklWRVN8Xk9ESVNFRXxeRkFSTyd9LFxyXG4gICAgIHtuYW1lOiAnc2VhcmNoLWFsc28tYm9keS1iaWInLCBjb25maWc6IHNlYXJjaEFsc29Cb2R5QmliQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15WSVZFU3xeT0RJU0VFfF5GQVJPfF5UTU9SRUt8XlRNT1JFTUF8XlVDTEwnfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1hbHNvLWJvZHktZ29vZ2xlJywgY29uZmlnOiBzZWFyY2hBbHNvQm9keUdvb2dsZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZmFjZXQtZXhhY3QtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeT0RJU0VFfF5GQVJPfF5UTU9SRUt8XlRNT1JFTUF8XlVDTEwnfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1hbHNvLWJvZHktd29ybGRjYXQnLCBjb25maWc6IHNlYXJjaEFsc29Cb2R5V29ybGRjYXRDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWV4YWN0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVuJ30sXHJcblxyXG4gICAgIHtuYW1lOiAnYnJvd3ppbmUnLCBjb25maWc6IGJyb3d6aW5lQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1zZWFyY2gtcmVzdWx0LWF2YWlsYWJpbGl0eS1saW5lLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVufF5FQ0InfSxcclxuICAgICBcclxuICAgICB7bmFtZTogJ2ZpbHRlci1mYWNldC12YWx1ZXMnLCBjb25maWc6IGZpbHRlckZhY2V0VmFsdWVzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15KRVNVSVRTJ30sXHJcblxyXG4gICAgIHtuYW1lOiAnc2VhcmNoLWNvbGxlY3Rpb25zJywgY29uZmlnOiBzZWFyY2hDb2xsZWN0aW9uc0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tY29sbGVjdGlvbi1nYWxsZXJ5LWhlYWRlci1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbid9XHJcbiAgICBdLmZpbHRlciggKGNvbXBvbmVudCkgPT4gKCBjb21wb25lbnQuZW5hYmxlZCAmJiBuZXcgUmVnRXhwKGNvbXBvbmVudC5lbmFibGVJblZpZXcpLnRlc3Qod2luZG93LmFwcENvbmZpZy52aWQpICkgKTtcclxuICB9XHJcbn1cclxuIiwiXHJcbmNsYXNzIExhbmd1YWdlU2VsZWN0aW9uQ29uZmlnQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHZhciBvbmx5c2hvd19mcl9GUl9pbl92aWQgPSBbJ0FDVicsICdCUEInLCAnRkFSTycsICdGT0RGSU4nLCAnS0JDJywgJ1JCSU5TJywgJ1JNQ0EnLCAnS01LRycsICdMSUJBUicsICdOQkInLCAnT0ZPJywgJ1ZESUMnXTtcclxuICAgICAgICBsZXQgcGFyZW50RWwgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJpbW8tZXhwbG9yZScpKTtcclxuICAgICAgICBpZiAoISBvbmx5c2hvd19mcl9GUl9pbl92aWQuaW5jbHVkZXMoIHdpbmRvdy5hcHBDb25maWcudmlkICApICkge1xyXG4gICAgICAgICAgICBwYXJlbnRFbC5hcHBlbmQoIFwiPHN0eWxlPnBybS1sYW5ndWFnZS1zZWxlY3Rpb24gbWQtbGlzdC1pdGVtW3ZhbHVlPSdmcl9GUidde2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnQ7fTwvc3R5bGU+XCIgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5MYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ11cclxuXHJcbmV4cG9ydCBsZXQgTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IExhbmd1YWdlU2VsZWN0aW9uQ29uZmlnQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnJyxcclxufVxyXG4iLCJpbXBvcnQgZGF0YWJhc2VMaW5rSFRNTCBmcm9tICcuL2RhdGFiYXNlTGluay5odG1sJ1xyXG5cclxuY2xhc3MgRGF0YWJhc2VMaW5rQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJG1kRGlhbG9nKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAkc2NvcGUudGl0bGUgPSAnZGF0YWJhc2VzJztcclxuICAgICRzY29wZS50aXRsZV9sYWJlbCA9ICdzZWFyY2ggZGF0YWJhc2VzJztcclxuICAgICRzY29wZS5kYXRhYmFzZUxpbmsgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tZGF0YWJhc2VcIilcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsKVxyXG5cclxuICAgICAgICB2YXIgZGF0YWJhc2VGYWNldCA9IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6XCJydHlwZVwiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjpcImluY2x1ZGVcIixcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOlwiZGF0YWJhc2VzXCIsXHJcbiAgICAgICAgICAgIFwiZGlzcGxheVZhbHVlXCI6XCJkYXRhYmFzZXNcIixcclxuICAgICAgICAgICAgXCJkaXNwbGF5ZWRUeXBlXCI6XCJleGFjdFwiLFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6XCJEYXRhYmFua2VuXCIsXHJcbiAgICAgICAgICAgIFwiaXNNdWx0aUZhY2V0XCI6ZmFsc2UsXHJcbiAgICAgICAgICAgIFwidG9vbHRpcFwiOlwiVmVyd2lqZGVyIFR5cGUgYnJvbiBEYXRhYmFua2VuXCIsXHJcbiAgICAgICAgICAgIFwiJCRoYXNoS2V5XCI6XCJvYmplY3Q6MjgwOFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTdGF0ZVNlcnZpY2Uuc2VhcmNoT2JqZWN0IClcclxuXHJcbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vbWVobWV0Yy9wcmltby1leHBsb3JlLWNvbGxlY3Rpb24tdmlld2VyL2Jsb2IvbWFzdGVyL2pzL25nLXByaW1vLmpzXHJcbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgICAgICAgJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU2VydmljZS5zZXRTb3J0QnkoJ3RpdGxlJyk7XHJcbiAgICAgICAgJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU2VydmljZS5mYWNldFNlcnZpY2UuYWRkU3RpY2t5RmFjZXQoZGF0YWJhc2VGYWNldCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFN0YXRlU2VydmljZS5zZWFyY2hPYmplY3QgKVxyXG4gICAgICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFNlcnZpY2Uuc2VhcmNoKCk7XHJcbi8qXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInN0aWNreUZhY2V0c1wiLFxyXG4gICAgICAgJ1t7XCJuYW1lXCI6XCJydHlwZVwiLFwidHlwZVwiOlwiaW5jbHVkZVwiLFwidmFsdWVcIjpcImRhdGFiYXNlc1wiLFwiZGlzcGxheVZhbHVlXCI6XCJkYXRhYmFzZXNcIixcImRpc3BsYXllZFR5cGVcIjpcImV4YWN0XCIsXCJsYWJlbFwiOlwiRGF0YWJhbmtlblwiLFwiaXNNdWx0aUZhY2V0XCI6ZmFsc2UsXCJ0b29sdGlwXCI6XCJWZXJ3aWpkZXIgVHlwZSBicm9uIERhdGFiYW5rZW5cIixcIiQkaGFzaEtleVwiOlwib2JqZWN0OjI4MDhcIixcInBlcnNpc3RlbnRcIjp0cnVlLFwib3BlcmF0aW9uXCI6XCJhZGRcIn1dJyk7XHJcbiAgICAgICAqL1xyXG4gICAgIC8vICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAzL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3F1ZXJ5PWFueSxjb250YWlucyxkYXRhYmFzZXMmdGFiPWFsbF9jb250ZW50X3RhYiZzZWFyY2hfc2NvcGU9QUxMX0NPTlRFTlQmXCJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkRhdGFiYXNlTGlua0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyRtZERpYWxvZyddXHJcblxyXG5leHBvcnQgbGV0IGRhdGFiYXNlTGlua0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBEYXRhYmFzZUxpbmtDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBkYXRhYmFzZUxpbmtIVE1MXHJcbn1cclxuIiwiXHJcbmNsYXNzIERlcHJlY2F0ZWRWaWV3c0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB2YXIgZGVwcmVjYXRlZF92aWRzID0gWydVQ0xMX0xJTUJVUkcnLCdVQ0xMX0xFVVZFTicsJ0tVTGV1dmVuX1VYJ107XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByaW1vLWV4cGxvcmUnKSk7XHJcbiAgICAgICAgaWYgKCBkZXByZWNhdGVkX3ZpZHMuaW5jbHVkZXMoIHdpbmRvdy5hcHBDb25maWcudmlkICApICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJUaGlzIGlzIGFuIG9sZCB2aWV3ICEhISFcIilcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UgKCBcImh0dHBzOi8vXCIrZG9jdW1lbnQubG9jYXRpb24uaG9zdCApXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuRGVwcmVjYXRlZFZpZXdzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXVxyXG5cclxuZXhwb3J0IGxldCBEZXByZWNhdGVkVmlld3NDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IERlcHJlY2F0ZWRWaWV3c0NvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkbWREaWFsb2csICRtZFRvYXN0LCAkaHR0cCwgJHRyYW5zbGF0ZSwgZmVlZGJhY2tTZXJ2aWNlVVJMLCBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5zY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XHJcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgIHRoaXMuaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwgPSBmZWVkYmFja1NlcnZpY2VVUkw7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcblxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICRzY29wZS5jYW5jZWxGZWVkYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5tZERpYWxvZy5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gdGhpcy5zZW5kRmVlZGJhY2s7XHJcbiAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gKGFuc3dlcikgPT4ge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBzdWJqZWN0OiAkc2NvcGUuZmVlZGJhY2suc3ViamVjdCxcclxuICAgICAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXHJcbiAgICAgICAgICAgIGluc3Q6IHNlbGYudmlldy5pbnN0aXR1dGlvbi5jb2RlLFxyXG4gICAgICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcclxuICAgICAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXHJcbiAgICAgICAgICAgIHVzZXI6IHNlbGYudXNlci5uYW1lLFxyXG4gICAgICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgIHR5cGU6ICdmZWVkYmFjaycsXHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiAkc2NvcGUuZmVlZGJhY2subWVzc2FnZSxcclxuICAgICAgICAgICAgZW1haWw6ICRzY29wZS5mZWVkYmFjay5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKCRzY29wZS5mZWVkYmFjay5yZXBseVRvLmxlbmd0aCA+IDAgJiYgJHNjb3BlLmZlZWRiYWNrLm1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZWxmLm1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuaHR0cCh7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgdXJsOiB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCxcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ1gtRnJvbS1FeEwtQVBJLUdhdGV3YXknOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAvL3NlbGYubWRUb2FzdC5zaG93U2ltcGxlKCdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJyk7XHJcbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrISc7XHJcbiAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAvL3NlbGYubWRUb2FzdC5zaG93U2ltcGxlKCdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLicpO1xyXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJztcclxuICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgc2VsZi52aWV3ID0gdmlldztcclxuICAgICAgICAkc2NvcGUuZmVlZGJhY2sgPSB7XHJcbiAgICAgICAgICByZXBseVRvOiBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgIHN1YmplY3Q6ICdmZWVkYmFjaydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuRGlhbG9nQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyRodHRwJywgJyR0cmFuc2xhdGUnLCAnZmVlZGJhY2tTZXJ2aWNlVVJMJywgJ01lc3NhZ2VTZXJ2aWNlJ107XHJcbiIsImltcG9ydCBkaXNjbGFpbWVyRGlhbG9nSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9kaXNjbGFpbWVyRGlhbG9nLmh0bWwnXHJcbmltcG9ydCBjb29raWVQb2xpY3lEaWFsb2dIVE1MIGZyb20gJy4uLy4uLy4uL2h0bWwvdGVtcGxhdGVzL2Nvb2tpZV9wb2xpY3lfZW5fVVMuaHRtbCdcclxuaW1wb3J0IGRpc2NsYWltZXJEaWFsb2dfZnJGUl9IVE1MIGZyb20gJy4uLy4uLy4uL2h0bWwvdGVtcGxhdGVzL2Nvb2tpZV9wb2xpY3lfZW5fVVMuaHRtbCdcclxuaW1wb3J0IGRpc2NsYWltZXJEaWFsb2dfbmxCRV9IVE1MIGZyb20gJy4uLy4uLy4uL2h0bWwvdGVtcGxhdGVzL2Nvb2tpZV9wb2xpY3lfbmxfQkUuaHRtbCdcclxuaW1wb3J0IGRpc2NsYWltZXJEaWFsb2dfZW5VU19IVE1MIGZyb20gJy4uLy4uLy4uL2h0bWwvdGVtcGxhdGVzL2Nvb2tpZV9wb2xpY3lfZW5fVVMuaHRtbCdcclxuXHJcbmltcG9ydCBkaXNjbGFpbWVyTGlua0hUTUwgZnJvbSAnZGlzY2xhaW1lci5odG1sJ1xyXG5cclxuY2xhc3MgZGlzY2xhaW1lckNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZykge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7XHJcbiAgICAgIGxldCB2aWQgPSB2aWV3LmNvZGU7XHJcblxyXG4gICAgICBsZXQgbG9jYWxlX3RleHQgPSB7XHJcbiAgICAgICAgJ25sX0JFJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ0Nvb2tpZWJlbGVpZCcsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIkNvb2tpZWJlbGVpZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZW5fVVMnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQ29va2llIFBvbGljeScsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIkNvb2tpZSBQb2xpY3lcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2ZyX0ZSJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ0Nvb2tpZSBQb2xpY3knLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJDb29raWUgUG9saWN5XCJcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcblxyXG4vKiBUb2RvIFJlZmFjdG9yeSBkaXNjbGFpbWVyRGlhbG9nIC8gY29va2llUG9saWN5ID8/PyAqL1xyXG4vLyAgICBsZXQgZGlzY2xhaW1lckRpYWxvZyA9IGRpc2NsYWltZXJEaWFsb2dIVE1MOyBcclxuICAgICAgbGV0IGRpc2NsYWltZXJEaWFsb2cgPSBjb29raWVQb2xpY3lEaWFsb2dIVE1MO1xyXG4gICAgICBzd2l0Y2ggKGxvY2FsZSkge1xyXG4gICAgICAgIGNhc2UgJ2ZyX0ZSJzpcclxuICAgICAgICBkaXNjbGFpbWVyRGlhbG9nID0gZGlzY2xhaW1lckRpYWxvZ19mckZSX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdubF9CRSc6XHJcbiAgICAgICAgZGlzY2xhaW1lckRpYWxvZyA9IGRpc2NsYWltZXJEaWFsb2dfbmxCRV9IVE1MO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICBkaXNjbGFpbWVyRGlhbG9nID0gZGlzY2xhaW1lckRpYWxvZ19lblVTX0hUTUw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRzY29wZS50aXRsZSA9IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ3RpdGxlJ107XHJcbiAgICAgICRzY29wZS50aXRsZV9sYWJlbCA9IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ3RpdGxlX2xhYmVsJ107XHJcblxyXG4gICAgICAkc2NvcGUuc2hvd0Rpc2NsYWltZXJEaWFsb2cgPSBmdW5jdGlvbigkZXZlbnQpIHtcclxuICAgICAgICBsZXQgcGFyZW50RWwgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnRFbCxcclxuICAgICAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogZGlzY2xhaW1lckRpYWxvZyxcclxuICAgICAgICAgIGxvY2Fsczoge1xyXG4gICAgICAgICAgICBpdGVtczogJHNjb3BlLml0ZW1zXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBEaWFsb2dDb250cm9sbGVyKCRzY29wZSwgJG1kRGlhbG9nLCBpdGVtcykge1xyXG4gICAgICAgICRzY29wZS5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgICRzY29wZS5jbG9zZURpYWxvZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZGlzY2xhaW1lckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyRtZERpYWxvZyddXHJcblxyXG5leHBvcnQgbGV0IGRpc2NsYWltZXJDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogZGlzY2xhaW1lckNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGRpc2NsYWltZXJMaW5rSFRNTFxyXG59IiwiLyogY29tcG9uZW50IHRvIGRvIGFsbCB5b3VyIGV4cGVyaW1lbnRhbCBzdHVmZiAqL1xyXG4vKiBbZW58ZGlzXWFibGUgaW4gY29tcG9uZW50cyovXHJcblxyXG5jbGFzcyBFeHBlcmltZW50Q29udHJvbGxlciB7XHJcbiBcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCR0ZW1wbGF0ZUNhY2hlLCAkY29tcGlsZSwkaW5qZWN0b3IsJHJvb3RTY29wZSwkdHJhbnNsYXRlLCAkd2luZG93KSB7XHJcbiAgICBjb25zb2xlLmxvZygnRXhwZXJpbWVudDonKTtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcclxuICAgIHRoaXMuJHRlbXBsYXRlQ2FjaGUgPSAkdGVtcGxhdGVDYWNoZTtcclxuICAgIHRoaXMuJGNvbXBpbGUgPSAkY29tcGlsZTtcclxuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcclxuICAgIHRoaXMuaWxsUmVxdWVzdFVybCA9ICcnOyBcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzZWxmKVxyXG4gICAgY29uc29sZS5sb2coJ3Jvb3RTY29wZTonKVxyXG4gICAgY29uc29sZS5sb2coJHJvb3RTY29wZSlcclxuICAgIGNvbnNvbGUubG9nKCd0ZW1wbGF0ZUNhY2hlJylcclxuICAgIGNvbnNvbGUubG9nKCR0ZW1wbGF0ZUNhY2hlKSAgIFxyXG4gICAgdmFyIHRlbXBsYXRlID0gJHRlbXBsYXRlQ2FjaGUuZ2V0KCdjb21wb25lbnRzL2FjY291bnQvb3ZlcnZpZXcvcmVxdWVzdHNPdmVydmlldy9yZXF1ZXN0cy1vdmVydmlldy5odG1sJyk7XHJcbiAgICAvLyB2YXIgdGVtcGxhdGUgPSB0ZW1wbGF0ZSArIFwiPEgxIGlkPSdvbXRlbGFjaHRlbic+TEFMQUxBPGlsbC1yZXF1ZXN0LWZvcm0tb3ZlcnZpZXc+PC9pbGwtcmVxdWVzdC1mb3JtLW92ZXJ2aWV3PjwvSDE+XCI7XHJcbiAgICB2YXIgdGVtcGxhdGUgPSB0ZW1wbGF0ZSArIFwiPEgxIGlkPSdvbXRlbGFjaHRlbic+TEFMQUxBPC9IMT5cIjtcclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9hY2NvdW50L292ZXJ2aWV3L3JlcXVlc3RzT3ZlcnZpZXcvcmVxdWVzdHMtb3ZlcnZpZXcuaHRtbCcsIHRlbXBsYXRlKTtcclxuICAgIGNvbnNvbGUubG9nKCR0ZW1wbGF0ZUNhY2hlLmdldCgnY29tcG9uZW50cy9hY2NvdW50L292ZXJ2aWV3L3JlcXVlc3RzT3ZlcnZpZXcvcmVxdWVzdHMtb3ZlcnZpZXcuaHRtbCcpKVxyXG59O1xyXG5cclxuICB0b0lsbFJlcXVlc3RVcmwoKSB7XHJcbiAgICAgIHZhciBpbnN0aXR1dGlvbkNvZGUgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5yZXF1ZXN0c1NlcnZpY2UuYWNjb3VudFNlcnZpY2UubGlua2VkVXNlclNlbGVjdG9yU2VydmljZS5zZWxlY3RlZEluc3RpdHV0aW9uLmluc3RpdHV0aW9uQ29kZTtcclxuICAgICAgLy9jb25zb2xlLmxvZygnaW5zdGl0dXRpb25Db2RlOicgKyBpbnN0aXR1dGlvbkNvZGUpXHJcbiAgICAgIHRoaXMuaWxsUmVxdWVzdFVybCA9ICdodHRwczovL2xldXZlbi1wcmltby5ob3N0ZWQuZXhsaWJyaXNncm91cC5jb20vcGRzP2Z1bmM9c3NvJnVybD1odHRwOi8vZXUuYWxtYS5leGxpYnJpc2dyb3VwLmNvbS92aWV3L3VyZXNvbHZlci8nKyBpbnN0aXR1dGlvbkNvZGUgKycvb3BlbnVybD9zdmNfZGF0PWdldGl0JnN2Yy5wcm9maWxlPWdldGl0JmRpcmVjdFJlc291cmNlU2hhcmluZ1JlcXVlc3Q9dHJ1ZSZuZXdVST10cnVlJ1xyXG4gICAgICB0aGlzLndpbmRvdy5vcGVuKHRoaXMuaWxsUmVxdWVzdFVybCwgJ19mcmVlSWxsJyk7XHJcbiAgfTtcclxuICAgIFxyXG4gICRvbkluaXQoKSB7ICBcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cgKCduZXdFbGVtZW50OicpXHJcbiAgLy8gIGNvbnNvbGUubG9nIChhbmd1bGFyLmVsZW1lbnQoICcjb210ZWxhY2h0ZW4nKS5sZW5ndGgpXHJcbiAgIC8vIGlmICggYW5ndWxhci5lbGVtZW50KCAnSDEnKS5sZW5ndGggPT0gMCApIHtcclxuICAgICAgY29uc29sZS5sb2cgKCdcXCd0IElzIG5pIG9tIHRlIGxhY2h0ZW4nKVxyXG4gICAgICAgdmFyIGVsZW1lbnROYW1lID0gJ3BybS1yZXF1ZXN0cy1vdmVydmlldydcclxuICAgICAgIC8vbGV0IGVsZW1lbnQgPSAkZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICAgICAgIGxldCBlbGVtZW50ID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudE5hbWUpKTtcclxuICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgIGxldCBlbGVtZW50U2NvcGUgPSBlbGVtZW50LnNjb3BlKCk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nIChlbGVtZW50U2NvcGUpXHJcbiAgICAgICAgIHRoaXMuJGNvbXBpbGUoZWxlbWVudCkoZWxlbWVudFNjb3BlKTtcclxuICAgICAgICAgLy9lbGVtZW50U2NvcGUuJGFwcGx5KClcclxuICAgICAgIH0gICAgIFxyXG4gIC8vICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5FeHBlcmltZW50Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAgJyR0ZW1wbGF0ZUNhY2hlJywgJyRjb21waWxlJywnJGluamVjdG9yJywnJHJvb3RTY29wZScsJyR0cmFuc2xhdGUnLCAnJHdpbmRvdyddXHJcblxyXG5leHBvcnQgbGV0IGV4cGVyaW1lbnRDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRXhwZXJpbWVudENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiY2xhc3MgZXhwb3NlSnd0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihXaW5kb3dFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuV2luZG93RXZlbnRMaXN0ZW5lciA9IFdpbmRvd0V2ZW50TGlzdGVuZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9zZUp3dENvbnRyb2xsZXIuJGluamVjdCA9IFsnV2luZG93RXZlbnRMaXN0ZW5lciddO1xyXG5cclxuXHJcbmV4cG9ydCBsZXQgZXhwb3NlSnd0Q29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBleHBvc2VKd3RDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6ICcnXHJcbn0iLCJcclxuY2xhc3MgUmVtb3ZlQWxlcnRzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAgJHRyYW5zbGF0ZSwgJGVsZW1lbnQsICR0ZW1wbGF0ZUNhY2hlKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIGxvY2FsZSA9IFwiZW5fVVNcIlxyXG4gICAgICAgIGxvY2FsZSA9IHNjb3BlLiRyb290LiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC9zYXZlZFF1ZXJpZXMvYWRkQWxlcnRUb2FzdC9hZGQtYWxlcnQtdG9hc3QuaHRtbCcsYFxyXG4gICAgICAgIDxtZC10b2FzdCBuZy1jbGFzcz1cIntcXCdtb2JpbGUtZGVmaW5lXFwnOiRjdHJsLmRldGVjdE1vYmlsZSgpLFxcJ2xheW91dC1jb2x1bW5cXCc6JGN0cmwuZGV0ZWN0TW9iaWxlKCl9XCIgY2xhc3M9XCJtZC10b2FzdC1jb250ZW50XCI+XHJcbiAgICA8ZGl2IGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm1kLXRvYXN0LWNvbnRlbnRcIiBuZy1jbGFzcz1cIntcXCdlbmQtY29udGVudFxcJzohJGN0cmwuZGV0ZWN0TW9iaWxlKCl9XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZC10b2FzdC10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIG5nLWlmPVwiISRjdHJsLmFkZE1vZGVcIiB0cmFuc2xhdGU9XCJudWkuZmF2b3JpdGVzLnNlYXJjaC5hbGVydC5tZXNzYWdlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBuZy1pZj1cIiRjdHJsLmFkZE1vZGVcIiB0cmFuc2xhdGU9XCJudWkuc2F2ZXNlYXJjaC5tZXNzYWdlLmRlc2NyaXB0aW9uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Ryb25nIG5nLWlmPVwiISRjdHJsLmFkZE1vZGVcIj57eyRjdHJsLmVtYWlsfX08L3N0cm9uZz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIiBjbGFzcz1cIm1kLXRvYXN0LWNvbnRlbnRcIiBuZy1jbGFzcz1cIntcXCdzdGFydC1jb250ZW50XFwnOiEkY3RybC5kZXRlY3RNb2JpbGUoKX1cIj5cclxuICAgICAgICA8bWQtYnV0dG9uIG5nLWNsaWNrPVwiJGN0cmwub25EaXNtaXNzKClcIiBhcmlhLWxhYmVsPVwie3s6OihcXCdudWkubWVzc2FnZS5kaXNtaXNzXFwnIHwgdHJhbnNsYXRlKX19IFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5nLXNjb3BlXCIgdHJhbnNsYXRlPVwibnVpLm1lc3NhZ2UuZGlzbWlzc1wiPjwvc3Bhbj5cclxuICAgICAgICA8L21kLWJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L21kLXRvYXN0PlxyXG48cHJtLWFkZC1hbGVydC10b2FzdC1hZnRlciBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC9wcm0tYWRkLWFsZXJ0LXRvYXN0LWFmdGVyPlxyXG4gICAgICAgIGApO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZW1vdmVBbGVydHNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckdHJhbnNsYXRlJywgJyRlbGVtZW50JywgJyR0ZW1wbGF0ZUNhY2hlJyBdXHJcblxyXG5leHBvcnQgbGV0IHJlbW92ZUFsZXJ0c0NvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogUmVtb3ZlQWxlcnRzQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnPHN0eWxlPm1kLXRlbXBsYXRlIHBybS1hZGQtYWxlcnQtdG9hc3QgbWQtdG9hc3QgKlthcmlhLWxhYmVsPVwie3tcXCdudWkuYXJpYS5zYXZlZFF1ZXJpZXNMaXN0LmFsZXJ0XFwnIHwgdHJhbnNsYXRlfX1cIl0geyAgZGlzcGxheTogbm9uZTsgfTwvc3R5bGU+J1xyXG59XHJcbiIsImNsYXNzIFJlbW92ZUNoZWNrTG9jYXRpb25zQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkZWxlbWVudCwgJHRlbXBsYXRlQ2FjaGUpIHtcclxuICAgICAgICB2YXIgZGlzcGxheWVkQXZhaWxhYmlsaXR5ID0gJHNjb3BlLiRjdHJsLnBhcmVudEN0cmwucGFyZW50Q3RybC5kaXNwbGF5ZWRBdmFpbGFiaWxpdHk7XHJcbiAgICAgICAgaWYgKCBkaXNwbGF5ZWRBdmFpbGFiaWxpdHkuaW5kZXhPZihcImZ1bGx0ZXh0X3Vua25vd25cIikgPiAtMSB8fCBkaXNwbGF5ZWRBdmFpbGFiaWxpdHkuaW5kZXhPZihcIm1heV9iZV9yZXN0cmljdGVkXCIpID4gLTEgKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nICggJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLmRlbGl2ZXJ5IClcclxuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzY29wZS4kY3RybC5wYXJlbnRDdHJsLnBhcmVudEN0cmwuJGVsZW1lbnQsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoIGVsIClcclxuICAgICAgICAgICAgICAgIGlmIChlbC5sb2NhbE5hbWUgPT0gJ3BybS1zZWFyY2gtcmVzdWx0LWF2YWlsYWJpbGl0eS1saW5lJyApe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuUmVtb3ZlQ2hlY2tMb2NhdGlvbnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckZWxlbWVudCcsICckdGVtcGxhdGVDYWNoZScgXVxyXG5cclxuZXhwb3J0IGxldCByZW1vdmVDaGVja0xvY2F0aW9uc0NvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcclxuICAgIGNvbnRyb2xsZXI6IFJlbW92ZUNoZWNrTG9jYXRpb25zQ29udHJvbGxlclxyXG59IiwiaW1wb3J0IHNlYXJjaFRpcEhUTUwgZnJvbSAnLi9zZWFyY2hUaXAuaHRtbCdcclxuaW1wb3J0IHRpcF9lblVTX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvZW5VUy5odG1sJ1xyXG5pbXBvcnQgdGlwX2ZyRlJfSFRNTCBmcm9tICcuL3NlYXJjaFRpcC9mckZSLmh0bWwnXHJcbmltcG9ydCB0aXBfbmxCRV9IVE1MIGZyb20gJy4vc2VhcmNoVGlwL25sQkUuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaFRpcENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZykge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7XHJcbiAgICAgIGxldCB2aWQgPSB2aWV3LmNvZGU7XHJcblxyXG4gICAgICBsZXQgbG9jYWxlX3RleHQgPSB7XHJcbiAgICAgICAgJ25sX0JFJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ1pvZWt0aXBzJyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiWm9la3RpcHMgd2VlcmdldmVuXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgICdlbl9VUyc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdTZWFyY2ggVGlwcycsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIlNlYXJjaCBUaXBzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgICdmcl9GUic6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdBc3R1Y2VzPycsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIkFzdHVjZXM/XCJcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdGlwc0hUTUwgPSB0aXBfZW5VU19IVE1MO1xyXG4gICAgICBzd2l0Y2ggKGxvY2FsZSkge1xyXG4gICAgICAgIGNhc2UgJ2ZyX0ZSJzpcclxuICAgICAgICAgIHRpcHNIVE1MID0gdGlwX2ZyRlJfSFRNTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25sX0JFJzpcclxuICAgICAgICAgIHRpcHNIVE1MID0gdGlwX25sQkVfSFRNTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9lblVTX0hUTUw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICRzY29wZS50aXRsZSA9IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ3RpdGxlJ107XHJcbiAgICAgICRzY29wZS50aXRsZV9sYWJlbCA9IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ3RpdGxlX2xhYmVsJ107XHJcblxyXG4gICAgICAkc2NvcGUuc2hvd1NlYXJjaFRpcHMgPSBmdW5jdGlvbigkZXZlbnQpIHtcclxuICAgICAgICBsZXQgcGFyZW50RWwgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgcGFyZW50OiBwYXJlbnRFbCxcclxuICAgICAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogdGlwc0hUTUwsXHJcbiAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgaXRlbXM6ICRzY29wZS5pdGVtc1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXJcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gRGlhbG9nQ29udHJvbGxlcigkc2NvcGUsICRtZERpYWxvZywgaXRlbXMpIHtcclxuICAgICAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICAkc2NvcGUuY2xvc2VEaWFsb2cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblNlYXJjaFRpcENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyRtZERpYWxvZyddXHJcblxyXG5leHBvcnQgbGV0IHNlYXJjaFRpcENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBTZWFyY2hUaXBDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBzZWFyY2hUaXBIVE1MXHJcbn1cclxuIiwiXHJcbmNsYXNzIFN0YXRpY0Zvb3RlckNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJG1kRGlhbG9nLCAkZWxlbWVudCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIGxvY2FsZSA9IFwiZW5fVVNcIlxyXG5cclxuICAgICAgICB2YXIgdmlld1dpdGhDdXN0b21Gb290ZXIgPSBbJ0xpcmlhcycsJ3dlcmVsZHdpanplcicsJ0VDQicsJ1ZESUMnXVxyXG4vKlxyXG4gICAgICAgIGNvbnNvbGUubG9nIChzZWxmIClcclxuICAgICAgICBjb25zb2xlLmxvZyAoc2NvcGUgKVxyXG4gICAgICAgIGNvbnNvbGUubG9nIChzY29wZS4kcm9vdC4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlIClcclxuKi9cclxuICAgICAgICBsb2NhbGUgPSBzY29wZS4kcm9vdC4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgdmlkID0gd2luZG93LmFwcENvbmZpZ1sndmlkJ107XHJcbiAgICAgICAvLyAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoc3RhdGljRm9vdGVyVGVtcGxhdGVOYW1lLCAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIGxvY2FsZSArICcuaHRtbCcpO1xyXG4qL1xyXG4gICAgICAgIHZhciB2aWQgPSB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcclxuICAgICAgICB2YXIgdGVtcGxhdGVVcmwgPSAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIGxvY2FsZSArICcuaHRtbCc7XHJcbiAgICAgICAgaWYgKCB2aWV3V2l0aEN1c3RvbUZvb3Rlci5pbmNsdWRlcyh2aWQpICkgIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmwgPSAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIHZpZCArICdfJyArIGxvY2FsZSArICcuaHRtbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkc2NvcGUuZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZVVybDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblN0YXRpY0Zvb3RlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyRtZERpYWxvZycsICckZWxlbWVudCddXHJcblxyXG5leHBvcnQgbGV0IHN0YXRpY0Zvb3RlckNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogU3RhdGljRm9vdGVyQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnPG5nLWluY2x1ZGUgc3JjPVwiZ2V0VGVtcGxhdGVVcmwoKVwiLz4nLFxyXG59XHJcbiIsImltcG9ydCBhdXRvTG9naW5DaGVja2JveEhUTUwgZnJvbSAnLi9hdXRvTG9naW5DaGVja2JveC5odG1sJ1xyXG5cclxuY2xhc3MgQXV0b0xvZ2luQ2hlY2tib3hDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIC8qIFJlbW92ZSB0aGUgbG9jYWxTdG9yYWdlIHBhcmFtZXRlciBwcmltb1Byb21vdGVMb2dpbiBpZiB0aGUgdXJsIGNvbnRhaW5zIGNsZWFyTG9naW4gKi9cclxuICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHZhciB1cmxQYXJhbSA9IFwiY2xlYXJMb2dpblwiO1xyXG4gICAgdXJsUGFyYW0gPSB1cmxQYXJhbS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyB1cmxQYXJhbSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXHJcbiAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcbiAgICBpZiAocmVzdWx0cykge1xyXG4gICAgICBpZiAoZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSkpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGYuYWx3YXlzU2lnbmluQ2hlY2tCb3ggPSBmYWxzZTtcclxuICAgIHNlbGYuYWx3YXlzU2lnbmluID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmltb1Byb21vdGVMb2dpblwiKTtcclxuICAgIGlmIChzZWxmLmFsd2F5c1NpZ25pbikge1xyXG4gICAgICBzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuYWx3YXlzU2lnbmluQ2hlY2tlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHNlbGYuYWx3YXlzU2lnbmluQ2hlY2tCb3gpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nLCAnYWx3YXlzU2lnbmluJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9tb3RlTG9naW5Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkbWREaWFsb2cpIHtcclxuXHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgcGFyZW50Q3RybCA9ICBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybFxyXG4gICAgLy9jb25zb2xlLmxvZyAoc2VsZilcclxuICAgIHZhciBsb2NhbGUgPSBwYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcbiAgIFxyXG4gICAgcGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5zaWduSW5PYnNlcnZhYmxlLnN1YnNjcmliZSgoKT0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmlzTG9nZ2VkSW4gID09IHRydWUpe1xyXG4gICAgICAgICRtZERpYWxvZy5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkc2NvcGUucHJpbW9Qcm9tb3RlTG9naW4gPSAnJztcclxuICAgICRzY29wZS5zaG93U2lnbkluUG9wdXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xyXG5cclxuICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9wcm9tb3RlX2xvZ2luXycgKyBsb2NhbGUgKyAnLmh0bWwnLFxyXG4gICAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgICAgIHByaW1vUHJvbW90ZUxvZ2luOiAgJHNjb3BlLnByaW1vUHJvbW90ZUxvZ2luXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRGlhbG9nQ29udHJvbGxlcigkc2NvcGUsICRtZERpYWxvZykge1xyXG4gICAgICAgICRzY29wZS5sb2dpbkRpYWxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGFyZW50Q3RybC5sb2dpblNlcnZpY2UuaGFuZGxlTG9naW5DbGljaygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5jbG9zZURpYWxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgICRzY29wZS5jaGFuZ2VQcm9tb3RlT3B0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnByaW1vUHJvbW90ZUxvZ2luID09PSAnbmV2ZXJTaWduaW4nIHx8ICRzY29wZS5wcmltb1Byb21vdGVMb2dpbiA9PT0gJ2Fsd2F5c1NpZ25pbicpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmltb1Byb21vdGVMb2dpbicsICRzY29wZS5wcmltb1Byb21vdGVMb2dpbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nKTtcclxuICAgICAgICAgICAgICAgIC8vc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nLCAkc2NvcGUucHJpbW9Qcm9tb3RlTG9naW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICBcclxuICAgIC8qIElnbm9yZSB0aGlzIGluIHBybS1sb2dpbi1hbG1hLW1hc2h1cCwgb25seSBpZiBwYXJlbnQgaXMgcHJtLXVzZXItYXJlYSovXHJcbiAgICBpZiAoICgkZWxlbWVudC5uYXRpdmVFbGVtZW50KS5jbG9zZXN0KCdwcm0tdXNlci1hcmVhJykgKSB7XHJcbiAgICAgICAgaWYgKCFwYXJlbnRDdHJsLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZVsncHJpbW9Qcm9tb3RlTG9naW4nXSA9PT0gJ2Fsd2F5c1NpZ25pbicpIHtcclxuICAgICAgICAgICAgICAgIC8qIFNyZWlkZXJpY3QgdG8gbG9naW4gKi87XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRDdHJsLmxvZ2luU2VydmljZS5oYW5kbGVMb2dpbkNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlc3Npb25TdG9yYWdlWydwcmltb1Byb21vdGVMb2dpbiddICYmICFsb2NhbFN0b3JhZ2VbJ3ByaW1vUHJvbW90ZUxvZ2luJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd1NpZ25JblBvcHVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nLCAnU2lnbkluUG9wdXAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQXV0b0xvZ2luQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGxldCBwYXJlbnRDdHJsID0gIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsXHJcbiAgICAvLyBJZ25vcmUgdGhpcyBpbiBwcm0tbG9naW4tYWxtYS1tYXNodXAsIG9ubHkgaWYgcGFyZW50IGlzIHBybS11c2VyLWFyZWFcclxuICAgIGlmICgoJGVsZW1lbnQubmF0aXZlRWxlbWVudCkuY2xvc2VzdCgncHJtLXVzZXItYXJlYScpKSB7XHJcbiAgICAgICAgaWYgKCFwYXJlbnRDdHJsLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgdmFyIGF1dGggPSB3aW5kb3cuYXBwQ29uZmlnLmF1dGhlbnRpY2F0aW9uWzBdO1xyXG4gICAgICAgICAgICB2YXIgbG9naW5VcmwgPSBwYXJlbnRDdHJsLmxvZ2luU2VydmljZS5sb2dpblVybChhdXRoWydwcm9maWxlLW5hbWUnXSwgYXV0aFsnYXV0aGVudGljYXRpb24tc3lzdGVtJ10pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gbG9naW5VcmwucmVwbGFjZSgvaW5zdGl0dXRpb249KFteJl0pKi8sIFwiaW5zdGl0dXRpb249S1VMXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYXV0b0xvZ2luQ2hlY2tib3hDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogQXV0b0xvZ2luQ2hlY2tib3hDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBhdXRvTG9naW5DaGVja2JveEhUTUxcclxufVxyXG5cclxuZXhwb3J0IGxldCBwcm9tb3RlTG9naW5Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUHJvbW90ZUxvZ2luQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgYXV0b0xvZ2luQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEF1dG9Mb2dpbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGFsdG1ldHJpY0hUTUwgZnJvbSAnLi9hbHRtZXRyaWMuaHRtbCdcclxuXHJcbmNsYXNzIEFsdE1ldHJpY0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlLCAkd2luZG93LCAkdGltZW91dCwgQWx0bWV0cmljc1NlcnZpY2UpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGxldCBpdGVtID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbTtcclxuICAgIC8qXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy53aW5kb3cgPSAkd2luZG93O1xyXG4gICAgKi9cclxuICAgIHNlbGYuZG9pID0gJyc7XHJcbiAgICBzZWxmLnJlY29yZGlkID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcclxuICAgIGlmIChpdGVtICYmIGl0ZW0ucG54ICYmIGl0ZW0ucG54LmFkZGF0YSAmJiBpdGVtLnBueC5hZGRhdGEuZG9pKSB7XHJcbiAgICAgIHNlbGYuZG9pID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguYWRkYXRhLmRvaVswXTtcclxuXHJcbiAgICAgIHRoaXMucmVjb3JkaWQgPSBzZWxmLnJlY29yZGlkO1xyXG4gICAgICBBbHRtZXRyaWNzU2VydmljZS5hZGRBbHRtZXRyaWNzKCcjYWx0bWV0cmljc18nICsgc2VsZi5yZWNvcmRpZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBhbHRtZXRyaWNDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHsgcGFyZW50Q3RybDogJzwnIH0sXHJcbiAgY29udHJvbGxlcjogQWx0TWV0cmljQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogYWx0bWV0cmljSFRNTFxyXG59XHJcbiIsImltcG9ydCBzb3VyY2VJY29uSFRNTCBmcm9tICcuL3NvdXJjZUljb24uaHRtbCdcclxuXHJcbmNsYXNzIFNvdXJjZUljb25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIHBhcmVudEN0cmwgPSAkc2NvcGUuJHBhcmVudC4kY3RybC5wYXJlbnRDdHJsO1xyXG4gICAgdmFyIGljb25Db25mID0gW3tcclxuICAgICAgJ3NvdXJjZWlkJzogJ2xpcmlhcycsXHJcbiAgICAgICdpY29uVXJsJzogJy8vbGltby5saWJpcy5iZS9wcmltb19saWJyYXJ5L2xpYndlYi9saWJpcy9pbWFnZXMvbGlyaWFzLmpwZycsXHJcbiAgICAgICdpY29uVGV4dCc6ICdMaXJpYXMnXHJcbiAgICB9XTtcclxuXHJcbiAgICB2YXIgaWNvbkNvbmZTb3VyY2VzID0gaWNvbkNvbmYubWFwKG9iaiA9PiBvYmouc291cmNlaWQpO1xyXG5cclxuICAgIHNlbGYuc291cmNlaWQgPSBudWxsO1xyXG4gICAgaWYgKCdzb3VyY2VpZCcgaW4gcGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sKSB7XHJcbiAgICAgIHNlbGYuc291cmNlaWQgPSBwYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wuc291cmNlaWRbMF0udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIGlmIChpY29uQ29uZlNvdXJjZXMuaW5jbHVkZXMoc2VsZi5zb3VyY2VpZCkpIHtcclxuICAgICAgICBzZWxmLmljb24gPSBpY29uQ29uZi5maW5kKGZ1bmN0aW9uKHgpIHtcclxuICAgICAgICAgIHJldHVybiB4LnNvdXJjZWlkID09PSBzZWxmLnNvdXJjZWlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnZGl2JykuYXBwZW5kKCRjb21waWxlKHNvdXJjZUljb25IVE1MKSgkc2NvcGUpKTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5Tb3VyY2VJY29uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgc291cmNlSWNvbkNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBTb3VyY2VJY29uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQ29sbGVjdGlvbnNIVE1MIGZyb20gJy4vaHRtbC9zZWFyY2gtY29sbGVjdGlvbnMuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaENvbGxlY3Rpb25zQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAvL21pZ2h0IGJlIG5lZWRlZCBhZnRlciBuZXh0IHJlbGVhc2VcclxuICAgIC8qc2VsZi4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLmlzR2FsbGVyeUxvYmJ5PSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pc0dhbGxlcnlMb2JieTtcclxuICAgIHRoaXMuZ2V0Q29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbjsqL1xyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKmdldENvbGxlY3Rpb24oKSB7XHJcbiAgICBpZighdGhpcy5pc0dhbGxlcnlMb2JieSAmJiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5jdXJyZW50Q29sbGVjdGlvbiAhPSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuY3VycmVudENvbGxlY3Rpb24ubmFtZTtcclxuICAgIH1cclxuICB9OyovXHJcblxyXG59XHJcblxyXG5TZWFyY2hDb2xsZWN0aW9uc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IHNlYXJjaENvbGxlY3Rpb25zQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaENvbGxlY3Rpb25zQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoQ29sbGVjdGlvbnNIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIGVuZGlhbm5lc3NcclxufSBmcm9tIFwib3NcIjtcclxuXHJcbmNsYXNzIGZpbHRlckZhY2V0VmFsdWVzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgICAgICBjb25zdCBmYWNldHNGaWx0ZXJzID0gW3tcclxuICAgICAgICAgICAgdmlkOiBcIkpFU1VJVFNcIixcclxuICAgICAgICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwibGlicmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtcIktVTF9HT1NBX0xJQlwiLCBcIktVTF9HQklCX0xJQlwiLCBcIktVTF9HUEFSX0xJQlwiLCBcIkFORVRfVUEtQ1NUXCJdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZG9tYWluXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImluY2x1ZGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW1wiTElCSVNuZXQgQ2F0YWxvZ3VlXCIsIFwiUnV1c2Jyb2VjZ2Vub290c2NoYXBcIl1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgbGV0IHZpZGZhY2V0c0ZpbHRlcnMgPSBmYWNldHNGaWx0ZXJzLmZpbHRlcihmID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGYudmlkID09IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnZpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh2aWRmYWNldHNGaWx0ZXJzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCB2aWRmYWNldHNGaWx0ZXIgPSB2aWRmYWNldHNGaWx0ZXJzWzBdXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cztcclxuICAgICAgICAgICAgfSwgKG4sIG8pID0+IHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKG4gIT0gbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2aWRmYWNldHNyZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGZhY2V0c0ZpbHRlci5maWx0ZXJzLmZvckVhY2godmlkRmFjZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRmYWNldHNyZXN1bHRzID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMubWFwKGZhY2V0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmYWNldC5uYW1lID09IHZpZEZhY2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWNldC52YWx1ZXMgPSBmYWNldC52YWx1ZXMuZmlsdGVyKGZhY2V0VmFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZpZEZhY2V0LnR5cGUgPT09ICdpbmNsdWRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpZEZhY2V0LnZhbHVlcy5pbmNsdWRlcyhmYWNldFZhbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZpZEZhY2V0LnR5cGUgPT09ICdleGNsdWRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF2aWRGYWNldC52YWx1ZXMuaW5jbHVkZXMoZmFjZXRWYWwudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZmlsdGVyRmFjZXRWYWx1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBmaWx0ZXJGYWNldFZhbHVlc0NvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogZmlsdGVyRmFjZXRWYWx1ZXNDb250cm9sbGVyXHJcbn0iLCIvL2ZhY2V0cy5mYWNldC5mYWNldF9zZWFyY2hfYWxzbyBpbiBcImZhY2V0IGxhYmVsc1wiXHJcbmNsYXNzIFNlYXJjaEFsc29Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUpe1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cztcclxuICAgIH0sIChuLG8pID0+IHtcclxuICAgICAgLy9pZiAobiAhPSBvKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzLmZpbHRlcihmID0+IHtyZXR1cm4gZi5uYW1lID09ICdzZWFyY2hfYWxzbyd9KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfYWxzbycsXHJcbiAgICAgICAgICAgIGRpc3BsYXllZFR5cGU6ICdleGFjdCcsXHJcbiAgICAgICAgICAgIGxpbWl0Q291bnQ6IDAsXHJcbiAgICAgICAgICAgIGZhY2V0R3JvdXBDb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAvL31cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hBbHNvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczp7cGFyZW50Q3RybDonPCd9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Db250cm9sbGVyXHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaEFsc29Cb2R5SFRNTCBmcm9tICcuL3NlYXJjaEFsc29Cb2R5Lmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hBbHNvQm9keUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRsb2NhdGlvbil7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgdGhpcy50YXJnZXRzID0gdGhpcy5fdGFyZ2V0cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5IHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRHcm91cC5uYW1lO1xyXG4gIH1cclxuXHJcbiAgX3RhcmdldHMoKSB7XHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgXCJuYW1lXCI6IFwiVW5pQ2F0XCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly91bmljYXQuYmUvdW5pQ2F0P2Z1bmM9c2VhcmNoJnVpTGFuZ3VhZ2U9ZW4mcXVlcnk9XCIsXHJcbiAgICAgIFwiaW1nXCI6IFwiL3ByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9pbWcvdW5pY2F0X2ljb24ucG5nXCIsXHJcbiAgICAgIFwidG9vbHRpcFwiOiBcImxicy5udWkuc2VhcmNoX2Fsc28udG9vbHRpcC51bmljYXRcIixcclxuICAgICAgbWFwcGluZzogZnVuY3Rpb24gbWFwcGluZyhzZWFyY2gpIHtcclxuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHJldHVybiB0ZXJtc1syXSB8fCBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG5cclxuU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvbiddO1xyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQm9keUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBzZWFyY2hBbHNvQm9keUhUTUxcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQWxzb0JvZHlIVE1MIGZyb20gJy4vc2VhcmNoQWxzb0JvZHkuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcclxuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XHJcbiAgfVxyXG5cclxuICBfdGFyZ2V0cygpIHtcclxuICAgIHJldHVybiBbe1xyXG4gICAgICBcIm5hbWVcIjogXCJCaWJsaW90aGVlay5iZVwiLFxyXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmJpYmxpb3RoZWVrLmJlL2NhdGFsb2d1cz9xPVwiLFxyXG4gICAgICBcImltZ1wiOiBcIi9wcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaW1nL2JpYl9iZS5wbmdcIixcclxuICAgICAgXCJ0b29sdGlwXCI6IFwibGJzLm51aS5zZWFyY2hfYWxzby50b29sdGlwLmRlQmliXCIsXHJcbiAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIG1hcHBpbmcoc2VhcmNoKSB7XHJcbiAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICByZXR1cm4gdGVybXNbMl0gfHwgXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0JvZHlCaWJDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoQWxzb0JvZHlIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaEFsc29Cb2R5SFRNTCBmcm9tICcuL3NlYXJjaEFsc29Cb2R5Lmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hBbHNvQm9keUdvb2dsZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRsb2NhdGlvbil7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgdGhpcy50YXJnZXRzID0gdGhpcy5fdGFyZ2V0cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5IHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRHcm91cC5uYW1lO1xyXG4gIH1cclxuXHJcbiAgX3RhcmdldHMoKSB7XHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgIFwibmFtZVwiOiBcIkdvb2dsZSBTY2hvbGFyXCIsXHJcbiAgICAgICBcInVybFwiOiBcImh0dHBzOi8vc2Nob2xhci5nb29nbGUuY29tL3NjaG9sYXI/cT1cIixcclxuICAgICAgIFwiaW1nXCI6IFwiL3ByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9pbWcvZ29vZ2xlX2ljb24ucG5nXCIsXHJcbiAgICAgICBcInRvb2x0aXBcIjogXCJsYnMubnVpLnNlYXJjaF9hbHNvLnRvb2x0aXAuZ29vZ2xlX3Njb2xhclwiLFxyXG4gICAgICAgbWFwcGluZzogZnVuY3Rpb24gbWFwcGluZyhzZWFyY2gpIHtcclxuICAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAgICB9XHJcbiAgICAgfSxcclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hBbHNvQm9keUdvb2dsZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvY2F0aW9uJ107XHJcblxyXG5leHBvcnQgbGV0IHNlYXJjaEFsc29Cb2R5R29vZ2xlQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcclxuICBjb250cm9sbGVyOiBTZWFyY2hBbHNvQm9keUdvb2dsZUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHNlYXJjaEFsc29Cb2R5SFRNTFxyXG59XHJcbiIsImltcG9ydCBzZWFyY2hBbHNvQm9keUhUTUwgZnJvbSAnLi9zZWFyY2hBbHNvQm9keS5odG1sJ1xyXG5cclxuY2xhc3MgU2VhcmNoQWxzb0JvZHlXb3JsZGNhdENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRsb2NhdGlvbil7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgdGhpcy50YXJnZXRzID0gdGhpcy5fdGFyZ2V0cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5IHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRHcm91cC5uYW1lO1xyXG4gIH1cclxuXHJcbiAgX3RhcmdldHMoKSB7XHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgXCJuYW1lXCI6IFwiV29ybGRjYXRcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy53b3JsZGNhdC5vcmcvc2VhcmNoP3E9XCIsXHJcbiAgICAgIFwiaW1nXCI6IFwiL3ByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9pbWcvd29ybGRjYXRfaWNvbi5wbmdcIixcclxuICAgICAgXCJ0b29sdGlwXCI6IFwibGJzLm51aS5zZWFyY2hfYWxzby50b29sdGlwLndvcmxkY2F0XCIsXHJcbiAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIG1hcHBpbmcoc2VhcmNoKSB7XHJcbiAgICAgICAgdmFyIHR5cGVfbWFwcGluZ3MgPSB7XHJcbiAgICAgICAgICBcImFueVwiOiBcImt3XCIsXHJcbiAgICAgICAgICBcInRpdGxlXCI6IFwidGlcIixcclxuICAgICAgICAgIFwiY3JlYXRvclwiOiBcImF1XCIsXHJcbiAgICAgICAgICBcInN1YmplY3RcIjogXCJzdVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHZhciB0eXBlID0gdHlwZV9tYXBwaW5nc1t0ZXJtc1swXV0gfHwgXCJrd1wiO1xyXG4gICAgICAgIHZhciBxdWVyeSA9IHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIHR5cGUgKyAnOicgKyBxdWVyeTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hBbHNvQm9keVdvcmxkY2F0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0JvZHlXb3JsZGNhdENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0JvZHlXb3JsZGNhdENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHNlYXJjaEFsc29Cb2R5SFRNTFxyXG59XHJcbiIsImltcG9ydCBwYXlNeUZpbmVzSFRNTCBmcm9tICcuL3BheU15RmluZXMuaHRtbCdcclxuXHJcbmNsYXNzIFBheU15RmluZXNDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuc2hvd1BheU15RmluZXMgPSBmYWxzZTsgIFxyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eS1VMZXV2ZW4vLnRlc3Qodmlldy5jb2RlKSkge1xyXG4gICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgIGlmICh1c2VyLmZpbmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UGF5TXlGaW5lcyA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgcGF5TXlGaW5lc0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczp7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFBheU15RmluZXNDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBwYXlNeUZpbmVzSFRNTFxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGUgYWx0bWV0cmljcyBjb21wb25lbnQgY29udHJvbGxlci4gKGh0dHBzOi8vZ2l0aHViLmNvbS9EZXQtS29uZ2VsaWdlLUJpYmxpb3Rlay9wcmltby1leHBsb3JlLXJleC9ibG9iL21hc3Rlci9qcy9hbHRtZXRyaWNzLmNvbXBvbmVudC5qcylcclxuICpcclxuICovXHJcbmltcG9ydCBBbHRtZXRyaWNzQmFkZ2VIVE1MIGZyb20gJy4vYWx0bWV0cmljc0JhZGdlLmh0bWwnXHJcblxyXG5jbGFzcyBBbHRtZXRyaWNzQmFkZ2VDb250cm9sbGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRyb290U2NvcGUsICR3aW5kb3csICR0aW1lb3V0LCBBbHRtZXRyaWNzU2VydmljZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgc2VsZi4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLkFsdG1ldHJpY3NTZXJ2aWNlID0gQWx0bWV0cmljc1NlcnZpY2U7XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5wYXJlbnRDdHJsID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmw7XHJcbiAgICBzZWxmLml0ZW0gPSBzZWxmLnBhcmVudEN0cmwuaXRlbTtcclxuICAgIHNlbGYucmVjb3JkaWQgPSBzZWxmLml0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICBzZWxmLmRvaSA9ICcnO1xyXG5cclxuICAgIC8vcG9seWZpbGxcclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdClcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24ocykge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubWF0Y2hlcyhzKSkgcmV0dXJuIGVsO1xyXG4gICAgICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50IHx8IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgIC8vZW5kIHBvbHlmaWxsXHJcblxyXG4gICAgaWYgKHNlbGYuaXRlbSAmJiBzZWxmLml0ZW0ucG54ICYmIHNlbGYuaXRlbS5wbnguYWRkYXRhICYmIHNlbGYuaXRlbS5wbnguYWRkYXRhLmRvaSkge1xyXG4gICAgICAgIHNlbGYuZG9pID0gc2VsZi5pdGVtLnBueC5hZGRhdGEuZG9pWzBdO1xyXG4gICAgICAgIHNlbGYuQWx0bWV0cmljc1NlcnZpY2UuYWRkQWx0bWV0cmljcygnI2Z1bGxfYWx0bWV0cmljc18nICsgc2VsZi5yZWNvcmRpZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIHZhciBhbHRtZXRyaWNzU2VjdGlvbiA9IHtcclxuICAgICAgICAgICAgc2Nyb2xsSWQ6IFwiYWx0bWV0cmljc1wiLFxyXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogXCJhbHRtZXRyaWNzXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCBzZWxmLnBhcmVudEN0cmwuZnVsbFZpZXdTZXJ2aWNlLmdldFNlcnZpY2VzKCBzZWxmLnBhcmVudEN0cmwuaXRlbSwgc2VsZi5wYXJlbnRDdHJsLm9yaWdpbmF0b3IpICkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24oc2VydmljZXMpIHtcclxuICAgICAgICAgICAgICAvLyBBZGQgdG8gc2VydmljZXMgaWYgbm90IGFscmVhZCBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgIGlmICggc2VydmljZXMuZmluZEluZGV4KHNlcnZpY2UgPT4gc2VydmljZS5zY3JvbGxJZCA9PT0gXCJhbHRtZXRyaWNzXCIpIDwgMCApe1xyXG4gICAgICAgICAgICAgICAgc2VydmljZXMuc3BsaWNlKHNlcnZpY2VzLmxlbmd0aCwgMTAsIGFsdG1ldHJpY3NTZWN0aW9uKTsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCBzZWxmLmRvaSAhPT0gJycgKSB7XHJcbiAgICAgIHZhciB1bmJpbmRXYXRjaGVyID0gdGhpcy4kc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3JldHVybiBzZWxmLiRlbGVtZW50WzBdLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoNFt0cmFuc2xhdGU9XCJicmllZi5yZXN1bHRzLnRhYnMuQWx0bWV0cmljc1wiXScpO1xyXG4gICAgICAgIHJldHVybiBzZWxmLiRlbGVtZW50WzBdLmNsb3Nlc3QoJyNmdWxsVmlldycpLnF1ZXJ5U2VsZWN0b3IoJ2g0W3RyYW5zbGF0ZT1cImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJdJylcclxuICAgICAgfSwgZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbCkge1xyXG4gICAgICAgICAgLy9HZXQgdGhlIHNlY3Rpb24gYm9keSBhc3NvY2lhdGVkIHdpdGggdGhlIHZhbHVlIHdlJ3JlIHdhdGNoaW5nXHJcbiAgICAgICAgICBsZXQgYWx0bWV0cmljc0NvbnRhaW5lciA9IG5ld1ZhbC5jbG9zZXN0KCdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignZGl2LnNlY3Rpb24tYm9keScpO1xyXG4gICAgICAgICAgbGV0IGFsdG1ldHJpY3NSZXN1bHQgPSBzZWxmLiRlbGVtZW50WzBdO1xyXG4gICAgICAgICAgaWYgKGFsdG1ldHJpY3NDb250YWluZXIgJiYgYWx0bWV0cmljc0NvbnRhaW5lci5hcHBlbmRDaGlsZCAmJiBhbHRtZXRyaWNzUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGFsdG1ldHJpY3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWx0bWV0cmljc1Jlc3VsdCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fYWx0bWV0cmljX2VtYmVkX2luaXQoYWx0bWV0cmljc0NvbnRhaW5lcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bmJpbmRXYXRjaGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFsdG1ldHJpY3NCYWRnZUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBBbHRtZXRyaWNzQmFkZ2VDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBBbHRtZXRyaWNzQmFkZ2VIVE1MXHJcbn1cclxuIiwiaW1wb3J0IGJldGFTd2l0Y2hIVE1MIGZyb20gJy4vYmV0YVN3aXRjaC5odG1sJ1xyXG5cclxuY2xhc3MgQmV0YVN3aXRjaENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi4kc2NvcGUgPSAkc2NvcGU7XHJcblxyXG4gICAgJHNjb3BlLnNob3dCZXRhU3dpdGNoID0gdHJ1ZTtcclxuICAgICRzY29wZS51c2VCZXRhID0gdHJ1ZTsgIFxyXG5cclxuICAgICRzY29wZS5vbkNoYW5nZVVzZUJldGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghICRzY29wZS51c2VCZXRhKXtcclxuICAgICAgICBzZWxmLmdvVG9PbGRVSSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ29Ub09sZFVJKCkge1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZj0nL3ByaW1vX2xpYnJhcnkvbGlid2ViL2FjdGlvbi9zZWFyY2guZG8/dmlkPScrIHRoaXMub2xkVmlkO1xyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuICAgIHZhciBMaW5rVG9CZXRhVmlld3MgPSB7XHJcbiAgICAgICdBQ1YnOidBQ1YnLFxyXG4gICAgICAnQlBCJzonQlBCJyxcclxuICAgICAgJ0ZBUk8nOidGQVJPJyxcclxuICAgICAgJ0ZPREZJTic6J0ZPREZJTicgLFxyXG4gICAgICAnR0NMRCc6J0dDTEQnLFxyXG4gICAgICAnR1NCJzonR1NCJyxcclxuICAgICAgJ0dTRyc6J0dTRycsXHJcbiAgICAgICdJTUVDJzonSU1FQycsXHJcbiAgICAgICdLQURPQyc6J0tBRE9DJyxcclxuICAgICAgJ0tCQyc6J0tCQycsXHJcbiAgICAgICdLTUtHJzonS01LRycsXHJcbiAgICAgICdLVUxldXZlbic6J0tVTGV1dmVuX1VYJyxcclxuICAgICAgJ0xJQkFSJzonTElCQVInLFxyXG4gICAgICAnTFVDQSc6J0xVQ0FfVVgnLFxyXG4gICAgICAnTkJCJzonTkJCJyxcclxuICAgICAgJ09ESVNFRSc6J09ESVNFRV9VWCcsXHJcbiAgICAgICdPRk8nOidPRk8nLFxyXG4gICAgICAnUkJJTlMnOidSQklOUycsXHJcbiAgICAgICdSRUxJJzonUkVMSScsXHJcbiAgICAgICdSTUNBJzonUk1DQScsXHJcbiAgICAgICdTRVJWJzonU0VSVicsXHJcbiAgICAgICdUTU9SRUsnOidUTU9SRUtfVVgnLFxyXG4gICAgICAnVE1PUkVNJzonVE1PUkVNQV9VWCcsXHJcbiAgICAgICdWRElDJzonVkRJQycsXHJcbiAgICAgICdWSVZFU19LQVRITyc6J1ZJVkVTX0tBVEhPX1VYJyxcclxuICAgICAgJ1ZJVkVTX0tIQk8nOidWSVZFU19LSEJPX1VYJyxcclxuICAgICAgJ1ZMUCc6J1ZMUCcsXHJcbiAgICAgICdLVUxldXZlbl9UTU9SRU0nOidLVUxldXZlbl9UTU9SRU1fVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fVUNMTCc6J0tVTGV1dmVuX1VDTExfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fVE1PUkVLJzonS1VMZXV2ZW5fVE1PUkVLX1VYJyxcclxuICAgICAgJ0tVTGV1dmVuX0xVQ0EnOidLVUxldXZlbl9MVUNBX1VYJyxcclxuICAgICAgJ0tVTGV1dmVuX1ZJVkVTX0tIQk8nOidLVUxldXZlbl9WSVZFU19LSEJPX1VYJyxcclxuICAgICAgJ0tVTGV1dmVuX09ESVNFRSc6J0tVTGV1dmVuX09ESVNFRV9VWCcsXHJcbiAgICAgICdLSExJTSc6J1VDTExfTElNQlVSR19VWCcsXHJcbiAgICAgICdLSEwnOidVQ0xMX0xFVVZFTl9VWCdcclxuICAgIH1cclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGlmICgvXkVDQi8udGVzdCh2aWV3LmNvZGUpKSB7XHJcbiAgICAgICAgdGhpcy5zaG93QmV0YVN3aXRjaCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub2xkVmlkID0gT2JqZWN0LmtleXMoTGlua1RvQmV0YVZpZXdzKS5maW5kKGtleSA9PiBMaW5rVG9CZXRhVmlld3Nba2V5XSA9PT0gdmlldy5jb2RlKSB8fCB2aWV3LmNvZGU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGJldGFTd2l0Y2hDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogQmV0YVN3aXRjaENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGJldGFTd2l0Y2hIVE1MXHJcbn1cclxuIiwiaW1wb3J0IGhvbWVJY29uSFRNTCBmcm9tICcuL2hvbWVJY29uLmh0bWwnXHJcblxyXG5jbGFzcyBIb21lSWNvbkNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlLCAkaHR0cCwgJHJvb3RTY29wZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5zY29wZSA9ICRzY29wZTtcclxuICAgIHNlbGYucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgIHNlbGYubGlua3R5cGUgPSAnaG9tZUljb24nO1xyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbigodmlldykgPT4ge1xyXG4gICAgICBcclxuICAgICAgICAvL2xldCB2aWQgPSB2aWV3LmNvZGU7XHJcbiAgICAgICAgbGV0IHZpZCA9ICB3aW5kb3cuYXBwQ29uZmlnLnZpZDtcclxuICAgICAgaWYgKHZpZCA9PSBcIkVDQlwiKSB7XHJcbiAgICAgICAgc2VsZi5saW5rdHlwZSA9IFwibmV3U2VhcmNoQnV0dG9uXCI7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7IC8vd2luZG93LlByaW1vLmV4cGxvcmUuaGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAgICAgbGV0IGxpYnJhcnlMb2dvID0gd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvO1xyXG4gICAgICBsZXQgbG9jYWxlTGlicmFyeUxvZ28gPSAnY3VzdG9tLycgKyB2aWQgKyAnL2ltZy9saWJyYXJ5LWxvZ28tJyArIGxvY2FsZSArICcucG5nJztcclxuXHJcbiAgICAgIGlmIChsaWJyYXJ5TG9nbyAhPT0gbG9jYWxlTGlicmFyeUxvZ28pIHtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgdXJsOiBsb2NhbGVMaWJyYXJ5TG9nbyxcclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgICAkY29tcGlsZSgkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSkoJHNjb3BlKTtcclxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGYuaG9tZVBhZ2VMaW5rID0gJy9wcmltby1leHBsb3JlL3NlYXJjaD92aWQ9JyArIHZpZCArIFwiJmxhbmc9XCIgKyBsb2NhbGU7XHJcblxyXG4gICAgICAkc2NvcGUucmVtb3ZlU3RpY2t5RmFjZXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmYWNldHMgPSBQcmltby5leHBsb3JlLmNvbXBvbmVudHMuZ2V0KCdwcm0tZmFjZXQnKTtcclxuICAgICAgICBpZiAoZmFjZXRzKSB7XHJcbiAgICAgICAgICB2YXIgc3RpY2t5RmFjZXRzID0gZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UuZ2V0U3RpY2t5RmFjZXRzKClcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RpY2t5RmFjZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZhY2V0c1swXS5jdHJsKCkuZmFjZXRTZXJ2aWNlLnJlbW92ZVN0aWNreUZhY2V0KHN0aWNreUZhY2V0c1tpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkhvbWVJY29uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBob21lSWNvbkNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBIb21lSWNvbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGhvbWVJY29uSFRNTFxyXG59IiwiY2xhc3MgTGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbigodmlldykgPT4ge1xyXG4gICAgICAvL2xldCB2aWQgPSB2aWV3LmNvZGU7XHJcbiAgICAgIGxldCB2aWQgPSAgd2luZG93LmFwcENvbmZpZy52aWQ7XHJcblxyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICBsZXQgbGlicmFyeUxvZ28gPSB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ287XHJcbiAgICAgIGxldCBsb2NhbGVMaWJyYXJ5TG9nbyA9ICdjdXN0b20vJyArIHZpZCArICcvaW1nL2xpYnJhcnktbG9nby0nICsgbG9jYWxlICsgJy5wbmcnO1xyXG5cclxuICAgICAgaWYgKGxpYnJhcnlMb2dvICE9PSBsb2NhbGVMaWJyYXJ5TG9nbykge1xyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICB1cmw6IGxvY2FsZUxpYnJhcnlMb2dvLFxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsb2NhbGVMaWJyYXJ5TG9nbztcclxuICAgICAgICAgICRjb21waWxlKCRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpKSgkc2NvcGUpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvID0gbGlicmFyeUxvZ287XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkxhbmd1YWdlRGVwZW5kZW50TG9nb0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRodHRwJywgJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgbGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IExhbmd1YWdlRGVwZW5kZW50TG9nb0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0iLCJpbXBvcnQgbmV3U2VhcmNoQnV0dG9uSFRNTCBmcm9tICcuL25ld1NlYXJjaEJ1dHRvbi5odG1sJ1xyXG5cclxuY2xhc3MgTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkucHJlcGVuZCgkY29tcGlsZShuZXdTZWFyY2hCdXR0b25IVE1MKSgkc2NvcGUpKTtcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgaWYgKHZpZCA9PSBcIkVDQlwiKSB7XHJcbiAgICAgICAgc2VsZi5saW5rdHlwZSA9IFwibmV3U2VhcmNoQnV0dG9uXCI7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7IC8vd2luZG93LlByaW1vLmV4cGxvcmUuaGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcclxuXHJcbiAgICAgIHNlbGYucmVtb3ZlU3RpY2t5RmFjZXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBwcm1BZHZhbmNlZFNlYXJjaCA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1hZHZhbmNlZC1zZWFyY2gnKTtcclxuICAgICAgICBpZihwcm1BZHZhbmNlZFNlYXJjaCl7XHJcbiAgICAgICAgICBsZXQgYyA9IHBybUFkdmFuY2VkU2VhcmNoWzBdLmN0cmwoKTtcclxuICAgICAgICAgIGMuY2xlYXJTZWFyY2hGb3JtKCk7XHJcbiAgICAgICAgICBjLiRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmYWNldHMgPSBQcmltby5leHBsb3JlLmNvbXBvbmVudHMuZ2V0KCdwcm0tZmFjZXQnKTtcclxuICAgICAgICBpZiAoZmFjZXRzKSB7XHJcbiAgICAgICAgICBsZXQgc3RpY2t5RmFjZXRzID0gZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UuZ2V0U3RpY2t5RmFjZXRzKClcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RpY2t5RmFjZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZhY2V0c1swXS5jdHJsKCkuZmFjZXRTZXJ2aWNlLnJlbW92ZVN0aWNreUZhY2V0KHN0aWNreUZhY2V0c1tpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbk5ld1NlYXJjaEJ1dHRvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRodHRwJywgJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgbmV3U2VhcmNoQnV0dG9uQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IE5ld1NlYXJjaEJ1dHRvbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IHZpZXdMb2dvSFRNTCBmcm9tICcuL3ZpZXdMb2dvLmh0bWwnXHJcblxyXG5jbGFzcyBWaWV3TG9nb0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRyYW5zbGF0ZSwgJGVsZW1lbnQsICRjb21waWxlLCAkaHR0cCwgJHJvb3RTY29wZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5zY29wZSA9ICRzY29wZTtcclxuICAgIHNlbGYucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpWzBdLmZpcnN0Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCgkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKVswXS5maXJzdENoaWxkKTtcclxuXHJcblxyXG4gICAgJHRyYW5zbGF0ZSgnbGltby5pbnN0aXR1dGVVcmwnKS50aGVuKFxyXG4gICAgICAobWVzc2FnZSkgPT4ge1xyXG4gICAgICBpZiAobWVzc2FnZSAgIT0gICdodHRwOi8vd3d3LmxpYmlzLmJlLycgKXtcclxuICAgICAgICBzZWxmLmhvbWVQYWdlTGluayA9IG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKCh2aWV3KSA9PiB7XHJcbiAgICAgIC8vbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgbGV0IHZpZCA9ICB3aW5kb3cuYXBwQ29uZmlnLnZpZDtcclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7IC8vd2luZG93LlByaW1vLmV4cGxvcmUuaGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG4gICAgICBsZXQgbG9jYWxlTGlicmFyeUxvZ28gPSAnY3VzdG9tLycgKyB2aWQgKyAnL2ltZy9saWJyYXJ5LWxvZ28tJyArIGxvY2FsZSArICcucG5nJztcclxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcclxuICAgICAgc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuXHJcbiAgICAgICBpZiAoIHNlbGYubG9jYWxlTGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbyA9ICBsb2NhbGVMaWJyYXJ5TG9nb1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbztcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5WaWV3TG9nb0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCB2aWV3TG9nb0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBWaWV3TG9nb0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHZpZXdMb2dvSFRNTFxyXG59XHJcbiIsImltcG9ydCBmZWVkYmFja0hUTUwgZnJvbSAnLi9mZWVkYmFjay5odG1sJ1xyXG5pbXBvcnQgZmVlZGJhY2tEaWFsb2dIVE1MIGZyb20gJy4vZmVlZGJhY2tEaWFsb2cuaHRtbCdcclxuXHJcbmNsYXNzIEZlZWRiYWNrQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsIEZlZWRiYWNrU2VydmljZSl7XHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdkaXYnKS5hcHBlbmQoJGNvbXBpbGUoZmVlZGJhY2tIVE1MKSgkc2NvcGUpKTtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlID0gRmVlZGJhY2tTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgc2hvd0ZlZWRiYWNrRm9ybSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLnNob3coJGV2ZW50LCBmZWVkYmFja0RpYWxvZ0hUTUwpO1xyXG4gIH1cclxufVxyXG5cclxuRmVlZGJhY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICdGZWVkYmFja1NlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgZmVlZGJhY2tDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmVlZGJhY2tDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsIi8qIGNvbXBvbmVudCB0byBkbyBhbGwgeW91ciBleHBlcmltZW50YWwgc3R1ZmYgKi9cclxuLyogW2VufGRpc11hYmxlIGluIGNvbXBvbmVudHMgKi9cclxuXHJcbmNsYXNzIFJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4vKlxyXG4gICAgY29uc29sZS5sb2coc2VsZilcclxuICAgIGNvbnNvbGUubG9nKCBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UuY29uZmlndXJhdGlvblV0aWwudmlkICk7XHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudmlkICk7XHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UuaW5zdCApO1xyXG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnVzZXJJbnN0aXR1dGlvbiApO1xyXG4qL1xyXG4gICAgdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwub3JnR2V0TGluayA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmdldExpbms7XHJcbiAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5nZXRMaW5rID0gZnVuY3Rpb24oKSB7IFxyXG4gICAgICB2YXIgZ2V0SXRMaW5rID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwub3JnR2V0TGluaygpO1xyXG4gICAgICByZXR1cm4gZ2V0SXRMaW5rLnJlcGxhY2UoL1xcL29wZW51cmxcXC9bXi9dKlxcL1teP10qLywgXCIvb3BlbnVybFxcL1wiKyBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS51c2VySW5zdGl0dXRpb24gK1wiXFwvXCIrIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS5jb25maWd1cmF0aW9uVXRpbC52aWQpIFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcblJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50J11cclxuXHJcbmV4cG9ydCBsZXQgcmVjb21tZW5kYXRpb25JdGVtQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGlsbFJlcXVlc3RGb3JtSFRNTCBmcm9tICcuL2lsbFJlcXVlc3RGb3JtLmh0bWwnXHJcblxyXG5jbGFzcyBpbGxSZXF1ZXN0Rm9ybUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkd2luZG93LCAkcm9vdFNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgICAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICAgICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5zdGl0dXRpb25Db2RlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgJG9uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uQ29kZSA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnJlcXVlc3RzU2VydmljZS5hY2NvdW50U2VydmljZS5saW5rZWRVc2VyU2VsZWN0b3JTZXJ2aWNlLnNlbGVjdGVkSW5zdGl0dXRpb24uaW5zdGl0dXRpb25Db2RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBhbG1hX2NvZGVzID0gdGhpcy5yb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5tYXBwaW5nVGFibGVzQ2FjaGUuTUFQUElOR19UQUJMRVNfQ0FDSEVbXCJBbG1hIEluc3RpdHV0aW9uIENvZGVzXCJdO1xyXG4gICAgICAgICAgICB2YXIgdXNlcl9pbnN0ID0gdGhpcy5yb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS51c2VySW5zdGl0dXRpb247XHJcbiAgICAgICAgICAgIHZhciBhbG1hX2NvZGUgPSBhbG1hX2NvZGVzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmoudGFyZ2V0ID09IHVzZXJfaW5zdDsgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nIChhbG1hX2NvZGVbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uQ29kZSA9IGFsbWFfY29kZVswXS5zb3VyY2UxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdpbnN0aXR1dGlvbkNvZGU6JyArIGluc3RpdHV0aW9uQ29kZSlcclxuICAgICAgICBpZiAodGhpcy5pbnN0aXR1dGlvbkNvZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvSWxsUmVxdWVzdFVybCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0aXR1dGlvbkNvZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaWxsUmVxdWVzdFVybCA9ICdodHRwczovL2xldXZlbi1wcmltby5ob3N0ZWQuZXhsaWJyaXNncm91cC5jb20vcGRzP2Z1bmM9c3NvJnVybD1odHRwOi8vZXUuYWxtYS5leGxpYnJpc2dyb3VwLmNvbS92aWV3L3VyZXNvbHZlci8nICsgdGhpcy5pbnN0aXR1dGlvbkNvZGUgKyAnL29wZW51cmw/c3ZjX2RhdD1nZXRpdCZzdmMucHJvZmlsZT1nZXRpdCZkaXJlY3RSZXNvdXJjZVNoYXJpbmdSZXF1ZXN0PXRydWUmbmV3VUk9dHJ1ZSdcclxuICAgICAgICAgICAgdGhpcy53aW5kb3cub3Blbih0aGlzLmlsbFJlcXVlc3RVcmwsICdfZnJlZUlsbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5pbGxSZXF1ZXN0Rm9ybUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJHdpbmRvdycsJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgaWxsUmVxdWVzdEZvcm1Db25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IGlsbFJlcXVlc3RGb3JtQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiBpbGxSZXF1ZXN0Rm9ybUhUTUxcclxufVxyXG4iLCJpbXBvcnQgYnJvd3ppbmVIVE1MIGZyb20gJy4vYnJvd3ppbmUuaHRtbCdcclxuXHJcbmNsYXNzIEJyb3d6aW5lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5yZXN1bHQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0+XCIsc2VsZiwgaXRlbSwgJHNjb3BlKTtcclxuXHJcbiAgICAgICAgc2VsZi5yZWNvcmRpZCA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnBueCAmJiBpdGVtLnBueC5hZGRhdGEpIHtcclxuICAgICAgICAgICAgc2VsZi5yZWNvcmRpZCA9IGl0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnJvd3ppbmVXYXRjaGVyID0gJHNjb3BlLiR3YXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYnJvd3ppbmUucHJpbW8gPT09ICdvYmplY3QnXHJcbiAgICAgICAgfSwgKG4sIG8pID0+IHtcclxuICAgICAgICAgICAgaWYgKG4gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyIGJyb3d6aW5lIGZvcjpcIiwgc2VsZi5yZWNvcmRpZClcclxuICAgICAgICAgICAgICAgIGxldCBzY29wZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAkY3RybDogc2VsZi5wYXJlbnRDdHJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYnJvd3ppbmUucHJpbW8uc2VhcmNoUmVzdWx0KHNjb3BlKTtcclxuICAgICAgICAgICAgICAgIGJyb3d6aW5lV2F0Y2hlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuQnJvd3ppbmVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBicm93emluZUNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogQnJvd3ppbmVDb250cm9sbGVyXHJcbn0iLCJpbXBvcnQgcG54WG1sSFRNTCBmcm9tICcuL3BueFhtbC5odG1sJ1xyXG5jbGFzcyBQbnhYbWxDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMucmVjb3JkaWQgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLnJlY29yZGlkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoaG90a2V5cykge1xyXG4gICAgICBob3RrZXlzKFwiY3RybCtlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG54LXhtbCcpKSkge1xyXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3BueC14bWwtdHJpZ2dlcicpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwbngteG1sLXRyaWdnZXInKTtcclxuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7ei1pbmRleDoxMDAwO2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouMDMnKTtcclxuICAgICAgZGl2Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcclxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYudmlzaWJsZSA/ICdmbGV4JyA6ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwbnhYbWxDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUG54WG1sQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogcG54WG1sSFRNTFxyXG59XHJcbiIsImltcG9ydCByZXBvcnRBUHJvYmxlbUhUTUwgZnJvbSAnLi9yZXBvcnRBUHJvYmxlbS5odG1sJ1xyXG5pbXBvcnQgcmVwb3J0QVByb2JsZW1EaWFsb2dIVE1MIGZyb20gJy4vcmVwb3J0QVByb2JsZW1EaWFsb2cuaHRtbCdcclxuXHJcbmNsYXNzIFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwLHJlcG9ydEFQcm9ibGVtVVJMKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdCh0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC50aXRsZSkpIHtcclxuICAgICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnaDQnKS5hZnRlcigkY29tcGlsZShyZXBvcnRBUHJvYmxlbUhUTUwpKCRzY29wZSkpO1xyXG5cclxuICAgICAgbGV0IHJlY29yZERhdGEgPSBzZWxmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgIHNlbGYuc2hvd1JlcG9ydEFQcm9ibGVtRm9ybSA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxyXG4gICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVwb3J0QVByb2JsZW1EaWFsb2dIVE1MLFxyXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJG1kRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucmVwb3J0ID0ge1xyXG4gICAgICAgICAgICAgICAgICByZXBseVRvOiBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICBzdWJqZWN0OiAncmVwb3J0IGEgcHJvYmxlbSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxSZXBvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbmRSZXBvcnQgPSBmdW5jdGlvbihhbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wucmVjb3JkaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzY29wZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFR5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25JZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0YWI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZWNvcmREYXRhLnBueC5kaXNwbGF5LnRpdGxlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZXNvdXJjZV9wcm9ibGVtJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAkc2NvcGUucmVwb3J0LnN1YmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAkc2NvcGUucmVwb3J0Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlUbzogJHNjb3BlLnJlcG9ydC5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yZXBvcnQucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5yZXBvcnQubWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcG9ydEFQcm9ibGVtVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJztcclxuICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJztcclxuICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07IC8vc2hvd1JlcG9ydEFQcm9ibGVtRm9ybVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50UmVjb3JkKCkge1xyXG4gICAgbGV0IHNlbGVjdG9yID0gJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInOyAvLydwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJ1xyXG4gICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgbGV0IGVsZW1lbnRDdHJsID0gZWxlbWVudC5jb250cm9sbGVyKHNlbGVjdG9yKTtcclxuICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Q3RybCk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Q3RybC5pdGVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5SZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckaHR0cCcsJ3JlcG9ydEFQcm9ibGVtVVJMJ107XHJcblxyXG5leHBvcnQgbGV0IHJlcG9ydEFQcm9ibGVtQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgcmVxdWVzdEFDb3B5SFRNTCBmcm9tICcuL3JlcXVlc3RBQ29weS5odG1sJ1xyXG5pbXBvcnQgcmVxdWVzdEFDb3B5RGlhbG9nSFRNTCBmcm9tICcuL3JlcXVlc3RBQ29weURpYWxvZy5odG1sJ1xyXG5cclxuY2xhc3MgUmVxdWVzdEFDb3B5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsICRtZERpYWxvZywgJGh0dHAsICRyb290U2NvcGUsIHJlcXVlc3RBQ29weVVSTCwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAvLyBJZiB5b3Ugd2FudCB0byBhZGQgdGhlIGJ1dHRvbiB0byB0aGUgdGl0bGUgKGxpa2UgcmVwb3J0IGEgcHJvYmxlbSlcclxuICAgIC8vbGV0IHNlcnZpY2VUaXRsZUNvZGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC50aXRsZVxyXG4gICAgLy9sZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdoNCcpO1xyXG5cclxuICAgIC8vIGZ1bGwgLy8gbGV0IHNlcnZpY2VUaXRsZUNvZGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5zZXJ2aWNlLnRpdGxlO1xyXG4gICAgLy8gZnVsbCAvLyBsZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKTtcclxuXHJcbiAgICBsZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnRpdGxlO1xyXG4gICAgLy9sZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKTtcclxuICAgIGxldCBhcHBlbmRCdXR0b25UbyA9IGFuZ3VsYXIuZWxlbWVudCggKCRlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLmNsb3Nlc3QoJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyLWFmdGVyJykgKVxyXG4gICAgXHJcbiAgICBsZXQgcmVjb3JkRGF0YSA9IHNlbGYuY3VycmVudFJlY29yZDtcclxuICAgICAgIC8qIGNhcHRjaGEgaW1wbGVtZW50YXRpb24gKEFscmVhZHkgdXNlZCBpbiApXHJcbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL1ZpdmlkQ29ydGV4L2FuZ3VsYXItcmVjYXB0Y2hhXHJcbiAgICAgICAgKi9cclxuICAgIGxldCBjYXBjaGFQdWJsaWNLZXkgPSB3aW5kb3cuYXBwQ29uZmlnW1wic3lzdGVtLWNvbmZpZ3VyYXRpb25cIl1bXCJQdWJsaWMgQ2FwdGNoYSBLZXlcIl07XHJcblxyXG4gICAgbGV0IFR5cGVzU2hvd1JlcXVlc3RBQ29weSA9IFsnY2hhcHRlcicsJ2pvdXJuYWwtYXJ0aWNsZScsJ3RoZXNpcy1kaXNzZXJ0YXRpb24nLCdjb25mZXJlbmNlJywncmVwb3J0JywnZGF0YXNldCcsJ2MtYm9va3JldmlldycsJ21lZGlhJywnc29mdHdhcmUnXTtcclxuICAgIGxldCBTdGF0dXNTaG93UmVxdWVzdEFDb3B5ID0gWydwdWJsaXNoZWQnXTtcclxuXHJcbiAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkge1xyXG4gICAgICB2YXIgU2hvd1JlcXVlc3RBQ29weVR5cGUgPSByZWNvcmREYXRhLnBueC5mYWNldHMubGZjMTYuZmlsdGVyKHZhbHVlID0+IC0xICE9PSBUeXBlc1Nob3dSZXF1ZXN0QUNvcHkuaW5kZXhPZih2YWx1ZSkpO1xyXG4gICAgICB2YXIgU2hvd1JlcXVlc3RBQ29weVN0YXR1cyA9IHJlY29yZERhdGEucG54LmZhY2V0cy5sZmMxMi5maWx0ZXIodmFsdWUgPT4gLTEgIT09IFN0YXR1c1Nob3dSZXF1ZXN0QUNvcHkuaW5kZXhPZih2YWx1ZSkpO1xyXG5cclxuICAgICAgaWYgKCghL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX25vcmVzdHJpY3QvLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkpICYmIFNob3dSZXF1ZXN0QUNvcHlUeXBlLmxlbmd0aCA+IDAgJiYgU2hvd1JlcXVlc3RBQ29weVN0YXR1cy5sZW5ndGggPiAwKSB7XHJcblxyXG5cclxuICAgICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgICAgc2VsZi5vbkNhbXB1cyA9IHNlbGYudXNlci5pc09uQ2FtcHVzKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBzZXJ2aWNlVGl0bGVDb2RlIClcclxuICAgICAgICAgICAgaWYgKCAhIC9ebnVpXFwuZ2V0aXRcXC50YWIxX29ubF9tYXlyZXN0cmljdC8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSAgfHwgL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX21heXJlc3RyaWN0Ly50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpICYmICEgc2VsZi5vbkNhbXB1cyApIHtcclxuICAgICAgICAgICAgICBhcHBlbmRCdXR0b25Uby5hZnRlcigkY29tcGlsZShyZXF1ZXN0QUNvcHlIVE1MKSgkc2NvcGUpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHNlbGYuc2hvd1JlcXVlc3RBQ29weUZvcm0gPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXHJcbiAgICAgICAgICAgICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVlc3RBQ29weURpYWxvZ0hUTUwsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkbWREaWFsb2cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGxldCBwbnhEaXNwbGF5ID0gIHJlY29yZERhdGEucG54LmRpc3BsYXk7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5nQ2FwdGNoYVJlc3BvbnNlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5jYXBjaGFQdWJsaWNLZXkgPSBjYXBjaGFQdWJsaWNLZXk7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5yZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBtb3RpdmF0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcG54RGlzcGxheS50aXRsZVswXSxcclxuICAgICAgICAgICAgICAgICAgICBjb250cmlidXRvcjogKCgpID0+IHsgKCBwbnhEaXNwbGF5LmNvbnRyaWJ1dG9yID8gcG54RGlzcGxheS5jb250cmlidXRvclswXSA6ICcnICkgfSkoKSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdG9yOiBwbnhEaXNwbGF5LmNyZWF0b3IgPyBwbnhEaXNwbGF5LmNyZWF0b3JbMF0gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBpc3BhcnRvZjogcG54RGlzcGxheS5pc3BhcnRvZiA/IHBueERpc3BsYXkuaXNwYXJ0b2ZbMF0gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAncmVxdWVzdCBhIGNvcHknXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZXRXaWRnZXRJZCA9IGZ1bmN0aW9uICh3aWRnZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnQ3JlYXRlZCB3aWRnZXQgSUQ6ICVzJywgd2lkZ2V0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS53aWRnZXRJZCA9IHdpZGdldElkO1xyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2V0UmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldCByZXNwb25zZSBmcm9tIGNhcHR1cmU6XCIgKyByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdDYXB0Y2hhUmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNiRXhwaXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0V4cGlyYXRpb24gRGlzYWJsZSBTdWJtaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ0NhcHRjaGFSZXNwb25zZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNhbmNlbFJlcXVlc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VuZFJlcXVlc3QgPSBmdW5jdGlvbiAoYW5zd2VyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ2ctcmVjYXB0Y2hhLXJlc3BvbnNlJzogJHNjb3BlLmdDYXB0Y2hhUmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uSWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5zb3VyY2VpZFswXSxcclxuICAgICAgICAgICAgICAgICAgICAgIHJlY29yZElkOiByZWNvcmREYXRhLnBueC5jb250cm9sLnJlY29yZGlkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlUmVjb3JkSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wuc291cmNlcmVjb3JkaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcG54RGlzcGxheS50aXRsZVswXSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dG9yOiAoKCkgPT4geyAoIHBueERpc3BsYXkuY29udHJpYnV0b3IgPyBwbnhEaXNwbGF5LmNvbnRyaWJ1dG9yWzBdIDogJycgKSB9KSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRvcjogcG54RGlzcGxheS5jcmVhdG9yID8gcG54RGlzcGxheS5jcmVhdG9yWzBdIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc3BhcnRvZjogcG54RGlzcGxheS5pc3BhcnRvZiA/IHBueERpc3BsYXkuaXNwYXJ0b2ZbMF0gOiAnJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXBseVRvOiAkc2NvcGUucmVxdWVzdC5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1vdGl2YXRpb246ICRzY29wZS5yZXF1ZXN0Lm1vdGl2YXRpb25cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nICggZGF0YSApXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnJlcXVlc3QucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5yZXF1ZXN0Lm1vdGl2YXRpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6cmVxdWVzdEFDb3B5VVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi4kcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLiR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5yZXF1ZXN0X2FfY29weS5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSB0aGUgcmVxdWVzdCBoYWQgYmVlbiBzZW5kISc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLl9fc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogJHNjb3BlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVEZWxheTogNTAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYuJHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC4kdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkucmVxdWVzdF9hX2NvcHkuZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IHRoZSByZXF1ZXN0Lic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBtZXNzYWdlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2UuX19zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiAkc2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURlbGF5OiA1MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07IC8vc2hvd1JlcXVlc3RBQ29weUZvcm1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IC8vaWYgKCAoICEgL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX25vcmVzdHJpY3QvLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkgICkgKXtcclxuICAgIH0gLy8gaWYgKC9ebnVpXFwuZ2V0aXRcXC4vLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkpICBcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50UmVjb3JkKCkge1xyXG4gICAgbGV0IHNlbGVjdG9yID0gJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInOyAvLydwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJ1xyXG4gICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgbGV0IGVsZW1lbnRDdHJsID0gZWxlbWVudC5jb250cm9sbGVyKHNlbGVjdG9yKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudEN0cmwpO1xyXG4gICAgICByZXR1cm4gZWxlbWVudEN0cmwuaXRlbTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuUmVxdWVzdEFDb3B5Q29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRodHRwJywgJyRyb290U2NvcGUnLCAncmVxdWVzdEFDb3B5VVJMJywgJ01lc3NhZ2VTZXJ2aWNlJ107XHJcblxyXG5leHBvcnQgbGV0IHJlcXVlc3RBQ29weUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBSZXF1ZXN0QUNvcHlDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59IiwiaW1wb3J0IHJlcXVlc3RBQ29weU9mRXNEb2NIVE1MIGZyb20gJy4vcmVxdWVzdEFDb3B5T2ZFc0RvYy5odG1sJ1xyXG5cclxuY2xhc3MgUmVxdWVzdEFDb3B5T2ZFc0RvY0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsIHJlcXVlc3RBQ29weU9mRXNEb2NVUkwsICR3aW5kb3csIFdpbmRvd0V2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi4kcm9vdFNjb3BlID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuJHJvb3RTY29wZTtcclxuICAgICAgICBzZWxmLldpbmRvd0V2ZW50TGlzdGVuZXIgPSBXaW5kb3dFdmVudExpc3RlbmVyO1xyXG4gICAgICAgIC8vIElmIHlvdSB3YW50IHRvIGFkZCB0aGUgYnV0dG9uIHRvIHRoZSB0aXRsZSAobGlrZSByZXBvcnQgYSBwcm9ibGVtKVxyXG4gICAgICAgIC8vbGV0IHNlcnZpY2VUaXRsZUNvZGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC50aXRsZVxyXG4gICAgICAgIC8vbGV0IGFwcGVuZEJ1dHRvblRvID0gJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnaDQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnNlcnZpY2UpIHtcclxuICAgICAgICAgICAgbGV0IHNlcnZpY2VUaXRsZUNvZGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5zZXJ2aWNlLnRpdGxlO1xyXG4gICAgICAgICAgICBsZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKTtcclxuICAgICAgICAgICAgbGV0IHJlY29yZERhdGEgPSBzZWxmLmN1cnJlbnRSZWNvcmQ7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGxldCBUeXBlc1Nob3dSZXF1ZXN0QUNvcHlPZkVzRG9jID0gWydjaGFwdGVyJywgJ2pvdXJuYWwtYXJ0aWNsZScsICd0aGVzaXMtZGlzc2VydGF0aW9uJywgJ2NvbmZlcmVuY2UnLCAncmVwb3J0JywgJ2RhdGFzZXQnLCAnYy1ib29rcmV2aWV3JywgJ21lZGlhJywgJ3NvZnR3YXJlJ107XHJcbiAgICAgICAgICAgIGxldCBTdGF0dXNTaG93UmVxdWVzdEFDb3B5T2ZFc0RvYyA9IFsncHVibGlzaGVkJ107XHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggc2VsZiApXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZSlcclxuICAgICAgICAgICAgICAgIGxldCBwcmltb0V4cGxvcmVKd3QgPSBzZWxmLiRyb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwuand0VXRpbFNlcnZpY2Uuc3RvcmFnZVV0aWwuc2Vzc2lvblN0b3JhZ2UucHJpbW9FeHBsb3JlSnd0O1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZi4kcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLmp3dFV0aWxTZXJ2aWNlLnN0b3JhZ2VVdGlsLnNlc3Npb25TdG9yYWdlLnByaW1vRXhwbG9yZUp3dClcclxuXHJcbiAgICAgICAgICAgICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgc2VsZi5vbkNhbXB1cyA9IHNlbGYudXNlci5pc09uQ2FtcHVzKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmlzTG9nZ2VkSW4gPSBzZWxmLnVzZXIuaXNMb2dnZWRJbigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kaXNwbGF5X25hbWUgPSBzZWxmLnVzZXIuZGlzcGxheV9uYW1lXHJcbiAgICAgICAgICAgICAgICBzZWxmLmVtYWlsID0gc2VsZi51c2VyLmVtYWlsXHJcbiovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmltb19pbnN0X2NvZGUgPSB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2luc3RpdHV0aW9uJ11bJ2luc3RpdHV0aW9uLWNvZGUnXSBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWxtYV9pbnN0X21hcHBpbmcgPSAgd2luZG93LmFwcENvbmZpZ1snbWFwcGluZy10YWJsZXMnXVsnQWxtYSBJbnN0aXR1dGlvbiBDb2RlcyddXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFsbWFfY29kZSA9IChhbG1hX2luc3RfbWFwcGluZy5maWx0ZXIoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLnRhcmdldCA9PSBwcmltb19pbnN0X2NvZGU7IH0pIClbMF0uc291cmNlMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG54ID0gcmVjb3JkRGF0YS5wbng7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwcGVuZEJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBSZXF1ZXN0IGJ1dHRvbiBvbmx5IGZvciBBcmNoaXYtbWF0ZXJpYWwgZnJvbSBFU1ZMUCBhbmQgYXZhaWxhYmxlICdvbmNhbXB1cycgT1IgU2lnbmVkIGluIFxyXG4gICAgICAgICAgICAgICAgICAgICogIE9ubHkgcGh5c2ljYWwgb3IgUmVzdHJpY3RlZCBPbmxpbmUgbWF0ZXJpYWwgY2FuIGJlIHJlcXVlc3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAodXNlci5pc09uQ2FtcHVzKCkgfHwgdXNlci5pc0xvZ2dlZEluKCkgKSAmJiBwbnguY29udHJvbC5zb3VyY2VpZC5pbmNsdWRlcyhcIkVTVkxQX3Njb3BlQXJjaGl2XCIpICkgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5mYWNldHMudG9wbGV2ZWwuaW5jbHVkZXMoXCJwcmludF9jb3BpZXNcIikgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRCdXR0b24gPXRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5kZWxpdmVyeS5yZXNkZWxzY29wZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGVsaXZlcnkucmVzZGVsc2NvcGUuaW5jbHVkZXMoXCJSRVNWTFBcIikgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEJ1dHRvbiA9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcGVuZEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRCdXR0b25Uby5hZnRlcigkY29tcGlsZShyZXF1ZXN0QUNvcHlPZkVzRG9jSFRNTCkoJHNjb3BlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcGVuVXJsVG9JTEwgPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHA6Ly9zZXJ2aWNlcy5saWJpcy5iZS9pbGxmb3JtLzMyS1VMX1NFUlY/cmZ0LmdlbnJlPWJvb2smcmZ0LmFkdmlzb3I9JnJmdC5hdT0mcmZ0LmF1Y29ycD0mcmZ0LmF1Zmlyc3Q9JnJmdC5hdWxhc3Q9JnJmdC5jb250cmlidXRvcj0mcmZ0LmNyZWF0b3I9JnJmdC5hdGl0bGU9JnJmdC5idGl0bGU9V29vZCZyZnQuanRpdGxlPSZyZnQuc3RpdGxlPSZyZnQudGl0bGU9V29vZCZyZnQuc2VyaWVzPSZyZnQuZGVncmVlPSZyZnQuZGVzY3JpcHRpb249JnJmdC5lZGl0aW9uPSZyZnQuaWRlbnRpZmllcj0mcmZ0LmVpc2JuPSZyZnQuZWlzc249JnJmdC5pc2JuPTk3ODA3MTQ4NzM0ODAmcmZ0Lmlzc249JnJmdC5wYWdlcz0mcmZ0LnBhcnQ9JnJmdC5lcGFnZT0mcmZ0LnNwYWdlPSZyZnQuc3NuPSZyZnQudHBhZ2VzPSZyZnQueWVhcj0mcmZ0Lm1vbnRoPSZyZnQuZGF5PSZyZnQudm9sdW1lPSZyZnQuaXNzdWU9JnJmdC5kYXRlPSZyZnQucGxhY2U9JnJmdC5wdWI9JnJmdC5wdWJkYXRlPTIwMTcmcmZ0LnB1YmRheT0mcmZ0LnB1Ymxpc2hlcj0mcmZ0LnB1YnllYXI9JmxvY2FsZT1ubF9CRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWQvcHJpbW8uZXhsaWJyaXNncm91cC5jb206cHJpbW8zLUFydGljbGUtRVNWTFBfc2NvcGVBcmNoaXYmcmZ0X3ZhbF9mbXQ9aW5mbzpvZmkvZm10OmtldjptdHg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJmdC5nZW5yZVwiOiBwbnguZGlzcGxheS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZnQucGFydFwiOiBwbnguZGlzcGxheS5pc3BhcnRvZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmZ0LmRhdGVcIjogcG54LmRpc3BsYXkuY3JlYXRpb25kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZnQuYXVcIjogcG54LmFkZGF0YS5hdSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmZ0LnJpZ2h0c1wiOiBwbnguZGlzcGxheS5yaWdodHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4vKlxyXG5cclxucmZ0LmF0aXRsZT17e2FkZGF0YS9hdGl0bGV9fSYgPT4gcG54LmRpc3BsYXkudGl0bGVbMF1cclxucmZ0Lmp0aXRsZT17e2FkZGF0YS9qdGl0bGV9fSYgPT4gcG54LmRpc3BsYXkuaXNwYXJ0b2ZbMF1cclxucmZ0LmJ0aXRsZT17e2FkZGF0YS9idGl0bGV9fSYgPT4gcG54LmRpc3BsYXkuaXNwYXJ0b2ZbMF1cclxucmZ0LmJ0aXRsZT17e2FkZGF0YS9hZHRpdGxlfX0mID0+IHBueC5hZGRhdGEvYWR0aXRsZVswXVxyXG5cclxuXHJcbnJmdC5nZW5yZT17e2FkZGF0YS9nZW5yZX19JiA9PiBwbnguZGlzcGxheS50eXBlWzBdXHJcbnJmdC5wYXJ0PXt7YWRkYXRhL3BhcnR9fSYgPT4gcG54LmRpc3BsYXkuaXNwYXJ0b2ZbMF1cclxucmZ0LmRhdGU9e3thZGRhdGEvZGF0ZX19JiA9PiBwbnguZGlzcGxheS5jcmVhdGlvbmRhdGVbMF1cclxucmZ0LmF1PXt7YWRkYXRhL2F1fX0mID0+IHBueC5hZGRhdGEuYXVbMF1cclxucmZ0LmRhdD08e3tjb250cm9sL3NvdXJjZWlkfX0+e3tjb250cm9sL3NvdXJjZXJlY29yZGlkfX08L3t7Y29udHJvbC9zb3VyY2VpZH19PiA9PiA8IHBueC5jb250cm9sLnNvdXJjZWlkWzBdID4gcG54LmNvbnRyb2wuc291cmNlcmVjb3JkaWQgIDwvIHBueC5jb250cm9sLnNvdXJjZWlkWzBdID5cclxuXHJcblxyXG4/Pz8gcmZ0LnJpZ2h0cyA9IHBueC5kaXNwbGF5LnJpZ2h0c1swXVxyXG4qL1xyXG5cclxuLypcclxucmZ0LmF1bGFzdD17e2FkZGF0YS9hdWxhc3R9fSZcclxucmZ0LmF1aW5pdD17e2FkZGF0YS9hdWluaXR9fSZcclxucmZ0LmF1aW5pdDE9e3thZGRhdGEvYXVpbml0MX19JlxyXG5yZnQuYXVpbml0bT17e2FkZGF0YS9hdWluaXRtfX0mXHJcbnJmdC5hdXN1ZmZpeD17e2FkZGF0YS9hdXN1ZmZpeH19JlxyXG5cclxucmZ0LmF1Y29ycD17e2FkZGF0YS9hdWNvcnB9fSZcclxucmZ0LnZvbHVtZT17e2FkZGF0YS92b2x1bWV9fSZcclxucmZ0Lmlzc3VlPXt7YWRkYXRhL2lzc3VlfX0mXHJcbnJmdC5xdWFydGVyPXt7YWRkYXRhL3F1YXJ0ZXJ9fSZcclxucmZ0LnNzbj17e2FkZGF0YS9zc259fSZcclxucmZ0LnNwYWdlPXt7YWRkYXRhL3NwYWdlfX0mXHJcbnJmdC5lcGFnZT17e2FkZGF0YS9lcGFnZX19JlxyXG5yZnQucGFnZXM9e3thZGRhdGEvcGFnZXN9fSZcclxucmZ0LmFydG51bT17e2FkZGF0YS9hcnRudW19fSZcclxucmZ0Lmlzc249e3thZGRhdGEvaXNzbn19JlxyXG5yZnQuZWlzc249e3thZGRhdGEvZWlzc259fSZcclxucmZ0LmlzYm49e3thZGRhdGEvaXNibn19JlxyXG5yZnQuc2ljaT17e2FkZGF0YS9zaWNpfX0mXHJcbnJmdC5jb2Rlbj17e2FkZGF0YS9jb2Rlbn19JlxyXG5yZnQuaWQ9aW5mbzpkb2kve3thZGRhdGEvZG9pfX0mXHJcbnJmdC5vYmplY3RfaWQ9e3thZGRhdGEvb2JqZWN0aWR9fTsmXHJcbnJmdC5laXNibj17e2FkZGF0YS9laXNibn19JlxyXG5yZnQuZWRpdGlvbj17e2Rpc3BsYXkvZWRpdGlvbn19JlxyXG5yZnQucHViPXt7YWRkYXRhL3B1Yn19JlxyXG5yZnQucGxhY2U9e3thZGRhdGEvY29wfX0mXHJcbnJmdC5zZXJpZXM9e3thZGRhdGEvc2VyaWVzdGl0bGV9fSZcclxucmZ0LnN0aXRsZT17e2FkZGF0YS9zdGl0bGV9fSZcclxucmZ0LmJpY2k9e3thZGRhdGEvYmljaX19JlxyXG5yZnQuaWQ9aW5mbzpiaWJjb2RlL3t7YWRkYXRhL2JpYmNvZGV9fSZcclxucmZ0LmlkPWluZm86aGRsL3t7YWRkYXRhL2hkbGlkfX0mXHJcbnJmdC5pZD1pbmZvOmxjY24ve3thZGRhdGEvbGNjbn19JlxyXG5yZnQuaWQ9aW5mbzpvY2xjbnVtL3t7YWRkYXRhL29jbGNpZH19JlxyXG5yZnQuaWQ9aW5mbzpwbWlkL3t7YWRkYXRhL3BtaWR9fSZcclxucmZ0LmlkPWluZm86ZXJpYy8oKGFkZGF0YS9lcmljfX0mXHJcblxyXG4qL1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcGVudXJsID0gXCJcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5kaXNwbGF5LnR5cGVbMF0gPT09IFwiYXJ0aWNsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRpc3BsYXkudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5hdGl0bGU9XCIgKyBlbmNvZGVVUkkocG54LmRpc3BsYXkudGl0bGVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRpc3BsYXkuaXNwYXJ0b2YpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5qdGl0bGU9XCIgKyBlbmNvZGVVUkkocG54LmRpc3BsYXkuaXNwYXJ0b2ZbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRpc3BsYXkudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5idGl0bGU9XCIgKyBlbmNvZGVVUkkocG54LmRpc3BsYXkudGl0bGVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmFkZGF0ZS5hZHRpdGxlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0LmJ0aXRsZT1cIiArIGVuY29kZVVSSShwbnguYWRkYXRlLmFkdGl0bFswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHBhcmFtIGluIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1twYXJhbV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJlwiICtwYXJhbSArXCI9XCIgKyBlbmNvZGVVUkkoIGNvbmZpZ1twYXJhbV1bMF0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0X2RhdD1cIiArIFwiJTNDXCIgKyBlbmNvZGVVUkkocG54LmNvbnRyb2wuc291cmNlaWRbMF0pICsgXCIlM0VcIiArIGVuY29kZVVSSShwbnguY29udHJvbC5zb3VyY2VyZWNvcmRpZFswXSkgKyBcIiUzQy9cIiArIGVuY29kZVVSSShwbnguY29udHJvbC5zb3VyY2VpZFswXSkgKyBcIiUzRVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsID0gcmVxdWVzdEFDb3B5T2ZFc0RvY1VSTCArIFwiL1wiKyBhbG1hX2NvZGUgK1wiP1wiICsgb3BlbnVybCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHdpbmRvdy5vcGVuKG9wZW51cmwsICdfYmxhbmsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudFJlY29yZCgpIHtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q3RybCA9IGVsZW1lbnQuY29udHJvbGxlcihzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRDdHJsKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRDdHJsLml0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZXF1ZXN0QUNvcHlPZkVzRG9jQ29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAncmVxdWVzdEFDb3B5T2ZFc0RvY1VSTCcsICckd2luZG93JywgJ1dpbmRvd0V2ZW50TGlzdGVuZXInXTtcclxuXHJcbmV4cG9ydCBsZXQgcmVxdWVzdEFDb3B5T2ZFc0RvY0NvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogUmVxdWVzdEFDb3B5T2ZFc0RvY0NvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJydcclxufSIsImNsYXNzIEFubm91bmNlbWVudHNDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsIE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICBNZXNzYWdlU2VydmljZS5zaG93KCcnLCAkc2NvcGUpO1xyXG4gIH1cclxufVxyXG5cclxuQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJ01lc3NhZ2VTZXJ2aWNlJ107XHJcblxyXG5leHBvcnQgbGV0IGFubm91bmNlbWVudHNDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxyXG4gIGNvbnRyb2xsZXI6IEFubm91bmNlbWVudHNDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCBmZWVkYmFja0Fubm91bmNlbWVudEhUTUwgZnJvbSAnLi9mZWVkYmFja0Fubm91bmNlbWVudC5odG1sJ1xyXG5pbXBvcnQgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dIVE1MIGZyb20gJy4vZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2cuaHRtbCdcclxuaW1wb3J0IGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlciBmcm9tICcuL2ZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nJ1xyXG5cclxuY2xhc3MgRmVlZGJhY2tBbm5vdW5jZW1lbnRDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICR0cmFuc2xhdGUsICR0aW1lb3V0LCBGZWVkYmFja1NlcnZpY2UsIE1lc3NhZ2VTZXJ2aWNlLCBhY3Rpb25JY29ucykge1xyXG5cclxuICAgIC8vJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvL2xldCBtZXNzYWdlID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnN1cnZleS5hbm5vdW5jZW1lbnQnKTtcclxuICAgICAgbGV0IHNob3dGZWVkYmFjayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmltb0ZlZWRiYWNrJyk7XHJcbiAgICAgIGlmIChzaG93RmVlZGJhY2sgPT0gbnVsbCkge1xyXG4gICAgICAgICR0cmFuc2xhdGUoJ2xicy5udWkuc3VydmV5LmFubm91bmNlbWVudCcpLnRoZW4oKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coZmVlZGJhY2tBbm5vdW5jZW1lbnRIVE1MLnJlcGxhY2UoJ3t7bWVzc2FnZX19JywgbWVzc2FnZSksIHtcclxuICAgICAgICAgICAgc2NvcGU6ICRzY29wZSxcclxuICAgICAgICAgICAgaGlkZURlbGF5OiAwLFxyXG4gICAgICAgICAgICBhY3Rpb25MYWJlbDogJHRyYW5zbGF0ZS5pbnN0YW50KCdtYWlubWVudS5sYWJlbC5mZWVkYmFjaycpIHx8ICdGZWVkYmFjaycsXHJcbiAgICAgICAgICAgIGFjdGlvbjpcclxuICAgICAgICAgICAgICAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBGZWVkYmFja1NlcnZpY2Uuc2hvdygkZXZlbnQsIGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nSFRNTCwgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgLy99LCAyMDAwKTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5GZWVkYmFja0Fubm91bmNlbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJHRpbWVvdXQnLCAnRmVlZGJhY2tTZXJ2aWNlJywgJ01lc3NhZ2VTZXJ2aWNlJywgJ2FjdGlvbkljb25zJ107XHJcblxyXG5leHBvcnQgbGV0IGZlZWRiYWNrQW5ub3VuY2VtZW50Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEZlZWRiYWNrQW5ub3VuY2VtZW50Q29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJHRyYW5zbGF0ZSwgJGh0dHAsIGZlZWRiYWNrU2VydmljZVVSTCwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLm1kRGlhbG9nID0gJG1kRGlhbG9nO1xyXG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XHJcbiAgICB0aGlzLmh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMID0gZmVlZGJhY2tTZXJ2aWNlVVJMO1xyXG5cclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAkc2NvcGUuY2FuY2VsRmVlZGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IChhbnN3ZXIpID0+IHtcclxuICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgc3ViamVjdDogJHNjb3BlLmZlZWRiYWNrLnN1YmplY3QsXHJcbiAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXHJcbiAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXHJcbiAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXHJcbiAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXHJcbiAgICAgICAgaXA6IHNlbGYudmlldy5pcC5hZGRyZXNzLFxyXG4gICAgICAgIHR5cGU6ICdzdXJ2ZXknLFxyXG4gICAgICAgIGZlZWRiYWNrOiAkc2NvcGUuZmVlZGJhY2suYW5zd2VycyxcclxuICAgICAgICBlbWFpbDogJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgIHVzZXJJZDogc2VsZi51c2VyLmlkIHx8ICcnLFxyXG4gICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKCRzY29wZS5mZWVkYmFjay5yZXBseVRvLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZWxmLm1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgc2VsZi5odHRwKHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgdXJsOiB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ1gtRnJvbS1FeEwtQVBJLUdhdGV3YXknOiB1bmRlZmluZWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByaW1vRmVlZGJhY2snLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnO1xyXG4gICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnKTtcclxuICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLmZhaWwnKSB8fCAnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nO1xyXG4gICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgICRzY29wZS5mZWVkYmFjayA9IHtcclxuICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgIGFuc3dlcnM6IFtdLFxyXG4gICAgICAgICAgc3ViamVjdDogJ2ZlZWRiYWNrJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyR0cmFuc2xhdGUnLCAnJGh0dHAnLCAnZmVlZGJhY2tTZXJ2aWNlVVJMJywgJ01lc3NhZ2VTZXJ2aWNlJ107XHJcbiIsImNsYXNzIEZpbmVzTWVzc2FnZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKE1lc3NhZ2VTZXJ2aWNlLCAkdHJhbnNsYXRlLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgIGlmICh1c2VyLmZpbmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvL1RPRE86ZXh0cmFjdCBodG1sIHRvIGl0cyBvd24gZmlsZS4gZmluZCBvdXQgaG93IHRvIHJlc29sdmUge3t9fVxyXG5cclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS55b3VIYXZlRmluZXMnKTtcclxuICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKC9cXCQwLywgdXNlci5maW5lcy5sZW5ndGgpO1xyXG5cclxuICAgICAgICBsZXQgcGF5ID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnlvdUhhdmVGaW5lcy5wYXknKTtcclxuICAgICAgICBcclxuICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KGBcclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJhbGlnbi1zZWxmOmNlbnRlcjtcIj4ke21lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRvbWF0bztjb2xvcjogd2hpdGU7XCJcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1idXR0b24gbWQtcmFpc2VkIG1kLXNlY3VuZGFyeVwiIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICBocmVmPSdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL3BheV9teV9maW5lcyc+JHtwYXl9PC9hPlxyXG4gICAgICAgICAgYCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuRmluZXNNZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWydNZXNzYWdlU2VydmljZScsICckdHJhbnNsYXRlJywgJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgZmluZXNNZXNzYWdlQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEZpbmVzTWVzc2FnZUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWx0bWV0cmljc1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJGNvbXBpbGUsICRtZFRvYXN0LCAkdGltZW91dCwgJHdpbmRvdykge1xyXG4gICAgICAgIHRoaXMucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgICAgICB0aGlzLmNvbXBpbGUgPSAkY29tcGlsZTtcclxuICAgICAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgICAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrQWx0bWV0cmljc2NyaXB0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGludGVydmFsID0gMjAwO1xyXG4gICAgICAgICAgICB2YXIgZW5kVGltZSA9IE51bWJlcihuZXcgRGF0ZSgpKSArIDE1MDAwOyAvLyBzdG9wIGNvbnRyb2wgYWZ0ZXIgNSBzZWNvbmRzXHJcblxyXG4gICAgICAgICAgICB2YXIgd2FpdF91bnRpbF9hbHRtZXRyaWNzX2xvYWRlZCA9IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb25kaXRpb24gaXMgbWV0LCB3ZSdyZSBkb25lISBcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0eXBlb2Ygd2luZG93Ll9hbHRtZXRyaWNfZW1iZWRfaW5pdCA9PT0gJ2Z1bmN0aW9uJztcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29uZGl0aW9uIGlzbid0IG1ldCBidXQgdGhlIHRpbWVvdXQgaGFzbid0IGVsYXBzZWQsIGdvIGFnYWluXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChOdW1iZXIobmV3IERhdGUoKSkgPCBlbmRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh3YWl0X3VudGlsX2FsdG1ldHJpY3NfbG9hZGVkLCBpbnRlcnZhbCwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIERpZG4ndCBtYXRjaCBhbmQgdG9vIG11Y2ggdGltZSwgcmVqZWN0IVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignV2FpdCB1bnRpbCBhbHRtZXRyaWNzIGlzIGxvYWRlZCB0aW1lZCBvdXQnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSh3YWl0X3VudGlsX2FsdG1ldHJpY3NfbG9hZGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWx0bWV0cmljcyhhbHRtZXRyaWNzRWxlbWVudFNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbHRtZXRyaWNzY3JpcHRzKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0xvYWRpbmcgYWx0bWV0cmljczogV2Uga3VubmVuIHN0YXJ0ZW4nKTtcclxuICAgICAgICAgICAgd2luZG93Ll9hbHRtZXRyaWNfZW1iZWRfaW5pdChhbHRtZXRyaWNzRWxlbWVudFNlbGVjdG9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5BbHRtZXRyaWNzU2VydmljZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRjb21waWxlJywgJyRtZFRvYXN0JywgJyR0aW1lb3V0JywgJyR3aW5kb3cnXTtcclxuIiwiZXhwb3J0IGxldCBhcGlDYWxsSW50ZXJjZXB0b3IgPSBbKCkgPT4ge1xyXG4gICAgdmFyIGFwaUNhbGxJbnRlcmNlcHRvciA9IHtcclxuICAgICAgICByZXNwb25zZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vXCJBc3Nlc3NpbmcgR29zcGVsIFF1b3RhdGlvbnMgaW4gSnVzdGluIE1hcnR5clwiXHJcbiAgICAgICAgICAgIGxldCBmaXhEaXNwbGF5RGF0YSA9IGZ1bmN0aW9uIChwbnhEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG54RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnhEYXRhLmRpc3BsYXkgJiYgcG54RGF0YS5kaXNwbGF5LmNyZWF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbnhEYXRhLmRpc3BsYXkuY3JlYXRvciA9IHBueERhdGEuZGlzcGxheS5jcmVhdG9yLm1hcChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWxhdG9yID0gYy5tYXRjaCgvXFwoLio/XFwpL2kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBjLnNwbGl0KC9cXCguKj9cXCkvaSkuam9pbihcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjPWAke2N9ICQkUSR7ZGF0YX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnhEYXRhLmRpc3BsYXkgJiYgcG54RGF0YS5kaXNwbGF5LmNvbnRyaWJ1dG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG54RGF0YS5kaXNwbGF5LmNvbnRyaWJ1dG9yID0gcG54RGF0YS5kaXNwbGF5LmNvbnRyaWJ1dG9yLm1hcChjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWxhdG9yID0gYy5tYXRjaCgvXFwoLio/XFwpL2kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBjLnNwbGl0KC9cXCguKj9cXCkvaSkuam9pbihcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjPWAke2N9ICQkUSR7ZGF0YX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBwbnhEYXRhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoL15cXC9wcmltb19saWJyYXJ5XFwvbGlid2ViXFwvd2Vic2VydmljZXNcXC9yZXN0XFwvcHJpbW8tZXhwbG9yZVxcL3YxXFwvcG54cy8udGVzdChyZXNwb25zZS5jb25maWcudXJsKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoJ2RvY3MnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmRvY3MubWFwKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpeERpc3BsYXlEYXRhKHAucG54KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmluY2x1ZGVzKCdwbngnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wbnggPSBmaXhEaXNwbGF5RGF0YShkYXRhLnBueCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL1JlbW92ZSBvcGVuIGFjY2VzcyBmcm9tIGZhY2V0c1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmluY2x1ZGVzKCdmYWNldHMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW1wiZmFjZXRzXCJdID0gZGF0YVtcImZhY2V0c1wiXS5tYXAobSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5uYW1lID09IFwidGxldmVsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLnZhbHVlcyA9IG0udmFsdWVzLmZpbHRlcih0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQudmFsdWUgIT09ICdvcGVuX2FjY2VzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEnLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFwaUNhbGxJbnRlcmNlcHRvcjtcclxufV0iLCJleHBvcnQgbGV0IGRiU2VhcmNoSHR0cENhbGxJbnRlcmNlcHRvciA9ICBbKCkgPT4ge1xyXG4gIHZhciBodHRwQ2FsbEludGVyY2VwdG9yID0ge1xyXG4gICAgcmVxdWVzdDogZnVuY3Rpb24oY29uZmlnKXtcclxuICAgICAgaWYgKGNvbmZpZy51cmwuaW5jbHVkZXMoJ3BueHMnKSAmJiAhY29uZmlnLnVybC5pbmNsdWRlcygnZGVsaXZlcnknKSAmJiBjb25maWcucGFyYW1zKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjb25maWcpO1xyXG4gICAgICAgIGlmKGNvbmZpZy5wYXJhbXMuZGF0YWJhc2VzIHx8IGNvbmZpZy5wYXJhbXMuam91cm5hbHMpe1xyXG4gICAgICAgICAgY29uZmlnLnBhcmFtcy5pbnN0ID0gJ0tVTCc7XHJcbiAgICAgICAgICBjb25maWcucGFyYW1zLnZpZCA9ICdLVUxldXZlbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGh0dHBDYWxsSW50ZXJjZXB0b3I7XHJcbn1dO1xyXG4iLCJleHBvcnQgbGV0IGZlZWRTZXJ2aWNlID0gWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XHJcbiAgdmFyIGZlZWRBbnRpQ2FjaGUgPSBcIj8mdD1cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcmFuZG9tTnVtO1xyXG4gIHZhciByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCArIDEpO1xyXG4gIHZhciBmZWVkZGF5c29sZCA9IDYwO1xyXG5cclxuICB2YXIgZG0gPSBuZXcgRGF0ZSgpO1xyXG4gIGRtLnNldEhvdXJzKDI0LCAwLCAwLCAwKTtcclxuXHJcbiAgdmFyIGFwaV9lbmRwb2ludCA9ICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRfYWdncmVnYXRvcj8nO1xyXG5cclxuICBmdW5jdGlvbiByZWFkRmVlZENvbmZpZyh1cmwpIHtcclxuICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLUZyb20tRXhMLUFQSS1HYXRld2F5XCI6IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlYWRGZWVkKHVybCkge1xyXG4gICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgdXJsOiBhcGlfZW5kcG9pbnQgKyB1cmwsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIlgtRnJvbS1FeEwtQVBJLUdhdGV3YXlcIjogdW5kZWZpbmVkXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VGZWVkKGNvbmYpIHtcclxuICAgIHJldHVybiByZWFkRmVlZChjb25mLmZlZWRVcmwpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29uZi5mZWVkVXJsKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhjb25mLmZlZWRGaWx0ZXIpO1xyXG4gICAgICB2YXIgcGF0dCA9IC9eZW50cnlcXC58Xml0ZW1cXC4vaTtcclxuICAgICAgdmFyIGZpbHRlcmVkUmVzdWx0cyA9IHJlcy5kYXRhLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHZhciByZXR2YWwgPSBmYWxzZTtcclxuICAgICAgICBpZiAoaXRlbS5wdWJEYXRlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICBpdGVtLnB1YkRhdGUgPSBkbTtcclxuICAgICAgICAgIHJlcy5kYXRhLml0ZW1zW2luZGV4XS5wdWJEYXRlID0gZG07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIG5vIGZpbHRlciBjb25maWd1cmVkICovXHJcbiAgICAgICAgaWYgKGNvbmYuZmVlZEZpbHRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmYuZmVlZEZpbHRlci5mb3JFYWNoKGZ1bmN0aW9uKGYpIHtcclxuICAgICAgICAgIGlmIChwYXR0LnRlc3QoZi5wYXJhbSkpIHtcclxuICAgICAgICAgICAgdmFyIGZmID0gZi5wYXJhbS5yZXBsYWNlKHBhdHQsIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtW2ZmXSkpIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbVtmZl0uaW5kZXhPZihmLnZhbHVlKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW1bZmZdID09IGYudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyogZmlsdGVyIG9sZCBpdGVtcyAqL1xyXG4gICAgICAgIGlmIChmZWVkZGF5c29sZCA8IE1hdGguY2VpbChkbS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShpdGVtLnB1YkRhdGUpLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpIHtcclxuICAgICAgICAgIHJldHZhbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldHZhbDtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZFJlc3VsdHM7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbigpIHtcclxuICAgICAgLy8gaGFuZGxlIGVycm9yc1xyXG4gICAgfSk7O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc29ydEZlZWQoZmVlZHMpIHtcclxuICAgIC8vcmV0dXJuIGZlZWRzLnNvcnQoY29tcGFyZURhdGVzKTtcclxuICAgIHJldHVybiBmZWVkcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS5wdWJEYXRlKTtcclxuICAgICAgdmFyIGRhdGVCID0gbmV3IERhdGUoYi5wdWJEYXRlKTtcclxuICAgICAgaWYgKGRhdGVBLmdldFRpbWUoKSA9PT0gZG0uZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgZGF0ZUEgPSBuZXcgRGF0ZSgwKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0ZUIuZ2V0VGltZSgpID09PSBkbS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVhZEZlZWRDb25maWc6IHJlYWRGZWVkQ29uZmlnLFxyXG4gICAgcmVhZEZlZWQ6IHJlYWRGZWVkLFxyXG4gICAgcGFyc2VGZWVkOiBwYXJzZUZlZWQsXHJcbiAgICBzb3J0RmVlZDogc29ydEZlZWRcclxuICB9O1xyXG59XTtcclxuIiwiaW1wb3J0IGZlZWRiYWNrU2VydmljZUhUTUwgZnJvbSAnLi9mZWVkYmFja1NlcnZpY2UuaHRtbCdcclxuaW1wb3J0IERpYWxvZ0NvbnRyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9nZW5lcmFsL2RpYWxvZydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWVkYmFja1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCRtZERpYWxvZykge1xyXG4gICAgdGhpcy5tZERpYWxvZyA9ICRtZERpYWxvZztcclxuICB9XHJcblxyXG4gIHNob3coJGV2ZW50ID0gbnVsbCwgZmVlZGJhY2tEaWFsb2dIVE1MID0gbnVsbCwgZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyID0gbnVsbCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKGZlZWRiYWNrRGlhbG9nSFRNTCA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IGRpYWxvZyBpbnN0YW50aWF0ZWQnKTtcclxuICAgICAgZmVlZGJhY2tEaWFsb2dIVE1MID0gZmVlZGJhY2tTZXJ2aWNlSFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgZGlhbG9nIGNvbnRyb2xsZXIgaW5zdGFudGlhdGVkJyk7XHJcbiAgICAgIGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlciA9IERpYWxvZ0NvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZERpYWxvZy5zaG93KHtcclxuICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXHJcbiAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICB0ZW1wbGF0ZTogZmVlZGJhY2tEaWFsb2dIVE1MLFxyXG4gICAgICBjb250cm9sbGVyOiBmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXJcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuRmVlZGJhY2tTZXJ2aWNlLiRpbmplY3QgPSBbJyRtZERpYWxvZyddO1xyXG4iLCJpbXBvcnQgbWVzc2FnZVNlcnZpY2VIVE1MIGZyb20gJy4vbWVzc2FnZVNlcnZpY2UuaHRtbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkY29tcGlsZSwgJG1kVG9hc3QsICRzY2UsICR0cmFuc2xhdGUsICR0aW1lb3V0KSB7XHJcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgIHRoaXMuc2NlID0gJHNjZTtcclxuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgIHRoaXMudGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgdGhpcy5jb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICB0aGlzLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcblxyXG4gICAgLy8gdGhpcy5tZXNzYWdlU2VydmljZUV2ZW50SGFuZGxlciA9IHRoaXMucm9vdFNjb3BlLiRvbignJHRyYW5zbGF0ZUxvYWRpbmdFbmQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPT09PT09PT09PiB0cmFuc2xhdGlvbiBsb2FkZWQgPD09PT09PT09PT1cIik7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIHNob3cobWVzc2FnZSA9ICcnLCBvcHRpb25zID0ge30pIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBzY29wZSA9IG9wdGlvbnMuc2NvcGUgfHwgbnVsbDtcclxuICAgIGxldCBoaWRlRGVsYXkgPSBvcHRpb25zLmhpZGVEZWxheSB8fCAwO1xyXG4gICAgbGV0IGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uIHx8IG51bGw7XHJcbiAgICBsZXQgYWN0aW9uTGFiZWwgPSBvcHRpb25zLmFjdGlvbkxhYmVsIHx8ICd1bmtub3duJztcclxuICAgIGxldCBtZXNzYWdlS2V5ID0gJ2xicy5nZW5lcmFsTWVzc2FnZSc7XHJcblxyXG4gICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZWxmLl9fc2hvdyh7XHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICBzY29wZTogc2NvcGUsXHJcbiAgICAgICAgaGlkZURlbGF5OiBoaWRlRGVsYXksXHJcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgYWN0aW9uTGFiZWw6IGFjdGlvbkxhYmVsXHJcbiAgICAgIH0pOyAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNlbGYudHJhbnNsYXRlKG1lc3NhZ2VLZXkpLnRoZW4oKG0pID0+IHtcclxuICAgICAgbWVzc2FnZSA9IChtID09IG1lc3NhZ2VLZXkgfHwgbSA8PSAxKSA/ICcnIDogbTtcclxuXHJcbiAgICAgIHNlbGYuX19zaG93KHtcclxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgIHNjb3BlOiBzY29wZSxcclxuICAgICAgICBoaWRlRGVsYXk6IGhpZGVEZWxheSxcclxuICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICBhY3Rpb25MYWJlbDogYWN0aW9uTGFiZWxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9fc2hvdyhvcHRpb25zID0ge30pIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBzY29wZSA9IG9wdGlvbnMuc2NvcGU7XHJcbiAgICBsZXQgaGlkZURlbGF5ID0gb3B0aW9ucy5oaWRlRGVsYXk7XHJcbiAgICBsZXQgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb247XHJcbiAgICBsZXQgYWN0aW9uTGFiZWwgPSBvcHRpb25zLmFjdGlvbkxhYmVsO1xyXG4gICAgbGV0IG1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2U7XHJcblxyXG4gICAgLy8gaWYgKG1lc3NhZ2UubGVuZ3RoID09IDApIHtcclxuICAgIC8vICAgLy8gY29kZSB0YWJsZSBlbnRyaWVzIGNhbiBub3QgaGF2ZSBlbXB0eSBkZXNjcmlwdGlvbnMuXHJcbiAgICAvLyAgIC8vIG1lc3NhZ2UgPD0gMSB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQhISEhXHJcbiAgICAvLyAgIGxldCBtZXNzYWdlS2V5ID0gJ2xicy5nZW5lcmFsTWVzc2FnZSc7XHJcbiAgICAvLyAgIG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KG1lc3NhZ2VLZXkpO1xyXG4gICAgLy8gICBtZXNzYWdlID0gKG1lc3NhZ2UgPT0gbWVzc2FnZUtleSB8fCBtZXNzYWdlIDw9IDEpID8gJycgOiBtZXNzYWdlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHRvYXN0Q29uZmlnID0ge1xyXG4gICAgICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcclxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRoaXMuYWN0aW9uTGFiZWwgPSBhY3Rpb25MYWJlbDtcclxuXHJcbiAgICAgICAgICB0aGlzLm9uQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5vbkFjdGlvbiA9ICgkZXZlbnQgPSBudWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWN0aW9uLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgc2VsZi5tZFRvYXN0LmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChzY29wZSkge1xyXG4gICAgICAgICAgICAvL3RoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKHNlbGYuY29tcGlsZShgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKShzZWxmLnJvb3RTY29wZSkuaHRtbCgpKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwoc2VsZi5jb21waWxlKGA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPmApKHNjb3BlKS5odG1sKCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwobWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6IG1lc3NhZ2VTZXJ2aWNlSFRNTCxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCBjZW50ZXInLFxyXG4gICAgICAgIGhpZGVEZWxheTogaGlkZURlbGF5XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYubWRUb2FzdC5zaG93KHRvYXN0Q29uZmlnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdObyBtZXNzYWdlIHRvIGRpc3BsYXknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5NZXNzYWdlU2VydmljZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRjb21waWxlJywgJyRtZFRvYXN0JywgJyRzY2UnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCddO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dFdmVudExpc3RlbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICR3aW5kb3cpIHtcclxuICAgICAgICAkd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY2VpdmVNZXNzYWdlLCBmYWxzZSk7XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlT3JpZ2luc1BlckV2ZW50ID0gW3tcclxuICAgICAgICAgICAgZXZlbnRJZCA6IFwicmV0cmlldmVfdXNlclwiLFxyXG4gICAgICAgICAgICBwb3NzaWJsZU9yaWdpbnMgOiBbIFwiaHR0cDovL2xvY2FsaG9zdDo5MjkyXCIsXCJodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlXCIsXCJodHRwczovL3NhbmRib3gtZXUuYWxtYS5leGxpYnJpc2dyb3VwLmNvbVwiXVxyXG4gICAgICAgIH1dXHJcbi8vIFRPRE8gOiBNYWFrIGNvbmZpZyBoYXNoIHZhbiBvcmlnaW4gZW4gZXZlbnRfaWQgPT5cclxuICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVNZXNzYWdlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcInJlY2VpdmVNZXNzYWdlICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcIilcclxuXHJcbiAgICAgICAgICAgIGlmICggISBldmVudC5kYXRhICl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJObyBFdmVudCBkYXRhICEhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9zc2libGVPcmlnaW5zT2JqID0gcG9zc2libGVPcmlnaW5zUGVyRXZlbnQuZmluZChmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldi5ldmVudElkID09PSBldmVudC5kYXRhLmV2ZW50X2lkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocG9zc2libGVPcmlnaW5zT2JqKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcmltb0V4cGxvcmVKd3QgPSAkcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLmp3dFV0aWxTZXJ2aWNlLnN0b3JhZ2VVdGlsLnNlc3Npb25TdG9yYWdlLnByaW1vRXhwbG9yZUp3dDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhLmV2ZW50X2lkID09PSBcInJldHJpZXZlX3VzZXJcIikge1xyXG4gICAgICAgICAgICAgICAgcG9zc2libGVPcmlnaW5zT2JqLnBvc3NpYmxlT3JpZ2lucyBcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoICEgIHBvc3NpYmxlT3JpZ2luc09iai5wb3NzaWJsZU9yaWdpbnMuaW5jbHVkZXMoZXZlbnQub3JpZ2luKSAgKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc291cmNlLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRfaWQ6IFwicmV0cmlldmVfdXNlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvbkNhbXB1c1wiOiB1c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXNMb2dnZWRJblwiOiB1c2VyLmlzTG9nZ2VkSW4oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWJpZFwiOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5X25hbWVcIjogdXNlci5kaXNwbGF5X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVtYWlsXCI6IHVzZXIuZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGV2ZW50Lm9yaWdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc291cmNlLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRfaWQ6IFwiand0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBwcmltb0V4cGxvcmVKd3RcclxuICAgICAgICAgICAgICAgICAgICB9LCBldmVudC5vcmlnaW4pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuV2luZG93RXZlbnRMaXN0ZW5lci4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyR3aW5kb3cnXTsiLCIvKlxyXG4gIENlbnRyYWwgUGFja2FnZSBMb2FkZXJcclxuXHJcbiAgRG8gTk9UIGVkaXQgdGhpcyBmaWxlLlxyXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5pbXBvcnQgUHJpbW8gZnJvbSAnLi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltbydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXHJcbmltcG9ydCBUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMnXHJcblxyXG5pbXBvcnQge2ZlZWRTZXJ2aWNlfSBmcm9tICcuL2ZhY3Rvcmllcy9mZWVkU2VydmljZSdcclxuaW1wb3J0IHtkYlNlYXJjaEh0dHBDYWxsSW50ZXJjZXB0b3J9IGZyb20gJy4vZmFjdG9yaWVzL2RiU2VhcmNoSHR0cENhbGxJbnRlcmNlcHRvcidcclxuaW1wb3J0IHthcGlDYWxsSW50ZXJjZXB0b3J9IGZyb20gJy4vZmFjdG9yaWVzL2FwaUNhbGxJbnRlcmNlcHRvcidcclxuaW1wb3J0IE1lc3NhZ2VTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL21lc3NhZ2VTZXJ2aWNlJ1xyXG5pbXBvcnQgRmVlZGJhY2tTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL2ZlZWRiYWNrU2VydmljZSdcclxuaW1wb3J0IEFsdG1ldHJpY3NTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL2FsdG1ldHJpY3NTZXJ2aWNlJ1xyXG5cclxuaW1wb3J0IFdpbmRvd0V2ZW50TGlzdGVuZXIgZnJvbSAnLi9mYWN0b3JpZXMvd2luZG93RXZlbnRMaXN0ZW5lcidcclxuXHJcblxyXG4vL21ha2UgUHJpbW8gcHVibGljXHJcbndpbmRvdy5QcmltbyA9IFByaW1vO1xyXG4vL2xvYWQgUHJpbW9FeHBsb3JlciBVSSBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBpcyByYW5cclxud2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gIGlmIChQcmltby5pc0RlYnVnRW5hYmxlZCgpKSB7XHJcbiAgICBsZXQgdWlVUkwgPSAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9tZWhtZXRjL3ByaW1vLWV4cGxvcmUtZG9tLXVpL2ZjMDg2OGRmL2pzL2N1c3RvbS5qcyc7XHJcbiAgICAvL2xldCB1aVVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvanMvY3VzdG9tLmpzJztcclxuXHJcbiAgICBIZWxwZXIubG9hZFNjcmlwdCh1aVVSTCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbmplY3RpbmcgVUknKTtcclxuICAgICAgUHJpbW8uZXhwbG9yZS51aS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSwgMjAwMCk7XHJcblxyXG4vL2xldCBzZXJ2aWNlc0hvc3QgPSAnaHR0cDovLzE5Mi4xNjguMTAwLjEwMTo5MjkyLyc7XHJcbi8vbGV0IHNlcnZpY2VzSG9zdCA9ICdodHRwOi8vbG9jYWxob3N0OjkyOTIvJztcclxubGV0IHNlcnZpY2VzSG9zdCA9ICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlLyc7XHJcblxyXG5cclxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdjZW50cmFsQ3VzdG9tJywgWyduZ01hdGVyaWFsJywgJ3ZjUmVjYXB0Y2hhJ10pXHJcbiAgLypcclxuICAvLy5jb25zdGFudCgnc2VydmljZXNIb3N0JywgJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvJylcclxuICAgIC5jb25zdGFudCgnZmVlZGJhY2tTZXJ2aWNlVVJMJywgJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvZmVlZGJhY2snKVxyXG4gICAgLmNvbnN0YW50KCdyZXBvcnRBUHJvYmxlbVVSTCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL3JlcG9ydF9hX3Byb2JsZW0nKVxyXG4gICAgLmNvbnN0YW50KCdyZXF1ZXN0QUNvcHlVUkwnLCAnaHR0cDovLzE5Mi4xNjguMTAwLjEwMTo5MjkyLy9yZXF1ZXN0X2FfY29weScpXHJcbiAgKi9cclxuICAuY29uc3RhbnQoJ2ZlZWRiYWNrU2VydmljZVVSTCcsIHNlcnZpY2VzSG9zdCArICdmZWVkYmFjaycpXHJcbiAgLmNvbnN0YW50KCdyZXBvcnRBUHJvYmxlbVVSTCcsIHNlcnZpY2VzSG9zdCArICdyZXBvcnRfYV9wcm9ibGVtJylcclxuICAuY29uc3RhbnQoJ3JlcXVlc3RBQ29weVVSTCcsIHNlcnZpY2VzSG9zdCArICdyZXF1ZXN0X2FfY29weScpXHJcbiAgLmNvbnN0YW50KCdyZXF1ZXN0QUNvcHlPZkVzRG9jVVJMJywgc2VydmljZXNIb3N0ICsgJ2lsbGp3dGZvcm0nKVxyXG5cclxuICAuY29uZmlnKCgkc2NlRGVsZWdhdGVQcm92aWRlcikgPT4ge1xyXG4gICAgJHNjZURlbGVnYXRlUHJvdmlkZXIucmVzb3VyY2VVcmxXaGl0ZWxpc3QoW1xyXG4gICAgICAnKionXHJcbiAgICBdKTtcclxuICB9KVxyXG4gIC5ydW4oKCR0ZW1wbGF0ZUNhY2hlLCAkcm9vdFNjb3BlKSA9PiB7XHJcbiAgICAvLyR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvZnVsbFZpZXcvZnVsbC12aWV3Lmh0bWwnLCBmdWxsVmlld0hUTUwpO1xyXG4gICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL2hvdGtleXMtanNAMi4wLjgvZGlzdC9ob3RrZXlzLm1pbi5qcycpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnaG90a2V5cy5qcyBsb2FkZWQnKTtcclxuICAgIH0pO1xyXG4gICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vZDFieGg4dWFzMW1udzcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL2VtYmVkLmpzPycgKyBEYXRlLm5vdygpKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2FsdG1lcmljcyBlbWJlZC5qcyBsb2FkZWQnKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHdpbmRvdy5hcHBDb25maWcudmlkID09ICdFQ0InIHx8IHdpbmRvdy5hcHBDb25maWcudmlkLmluY2x1ZGVzKCdLVUxldXZlbicpKSB7XHJcbiAgICAgIC8vQ3JlYXRlIHRoZSBjZW50cmFsQ3VzdG9tIG1vZHVsZTtcclxuICAgICAgaWYgKHdpbmRvdy5hcHBDb25maWcudmlkID09ICdFQ0InKSB7XHJcbiAgICAgICAgd2luZG93LmJyb3d6aW5lID0ge1xyXG4gICAgICAgICAgYXBpOiBcImh0dHBzOi8vcHVibGljLWFwaS50aGlyZGlyb24uY29tL3B1YmxpYy92MS9saWJyYXJpZXMvMTYyNFwiLFxyXG4gICAgICAgICAgYXBpS2V5OiBcImU3MWQxYzMxLTc5MzgtNDcwYS04YmUyLWE2ZTM1MWUwYzAwMVwiLFxyXG4gICAgICAgICAgam91cm5hbEJyb3daaW5lV2ViTGlua1RleHQ6IFwiVmlldyBKb3VybmFsIENvbnRlbnRzXCIsXHJcbiAgICAgICAgICBhcnRpY2xlQnJvd1ppbmVXZWJMaW5rVGV4dDogXCJWaWV3IElzc3VlIENvbnRlbnRzXCIsXHJcbiAgICAgICAgICBhcnRpY2xlUERGRG93bmxvYWRMaW5rRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIGFydGljbGVQREZEb3dubG9hZExpbmtUZXh0OiBcIkRvd25sb2FkIFBERlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh3aW5kb3cuYXBwQ29uZmlnLnZpZC5pbmNsdWRlcygnS1VMZXV2ZW4nKSkge1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW50ZXJmYWNlTGFuZ3VhZ2U7XHJcbiAgICAgICAgdmFyIGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICAgJ25sX0JFJzoge1xyXG4gICAgICAgICAgICAnam91cm5hbCc6IFwiQmVraWprIGRlIGluaG91ZCB2YW4gaGV0IHRpamRzY2hyaWZ0XCIsXHJcbiAgICAgICAgICAgICdpc3N1ZSc6IFwiQmVraWprIGRlIGluaG91ZCB2YW4gaGV0IG51bW1lclwiLFxyXG4gICAgICAgICAgICAnZG93bmxvYWQnOiBcIkRvd25sb2FkIFBERlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJ2VuX1VTJzoge1xyXG4gICAgICAgICAgICAnam91cm5hbCc6IFwiVmlldyBKb3VybmFsIENvbnRlbnRzXCIsXHJcbiAgICAgICAgICAgICdpc3N1ZSc6IFwiVmlldyBJc3N1ZSBDb250ZW50c1wiLFxyXG4gICAgICAgICAgICAnZG93bmxvYWQnOiBcIkRvd25sb2FkIFBERlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYnJvd3ppbmUgPSB7XHJcbiAgICAgICAgICBhcGk6IFwiaHR0cHM6Ly9wdWJsaWMtYXBpLnRoaXJkaXJvbi5jb20vcHVibGljL3YxL2xpYnJhcmllcy8xNzgxXCIsXHJcbiAgICAgICAgICBhcGlLZXk6IFwiMTBlZDVkMmEtNGZmMC00NTQxLTg1N2QtYjhjMzZhMDFmM2VkXCIsXHJcbiAgICAgICAgICBqb3VybmFsQnJvd1ppbmVXZWJMaW5rVGV4dDogbG9jYWxlX3RleHRbbG9jYWxlXVsnam91cm5hbCddLFxyXG4gICAgICAgICAgYXJ0aWNsZUJyb3daaW5lV2ViTGlua1RleHQ6IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ2lzc3VlJ10sXHJcbiAgICAgICAgICBhcnRpY2xlUERGRG93bmxvYWRMaW5rRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIGFydGljbGVQREZEb3dubG9hZExpbmtUZXh0OiBsb2NhbGVfdGV4dFtsb2NhbGVdWydkb3dubG9hZCddLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9icm93emluZS1hZGFwdGVycy9wcmltby9icm93emluZS1wcmltby1hZGFwdGVyLmpzJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Jyb3d6aW5lLXByaW1vLWFkYXB0ZXIuanMgbG9hZGVkJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgLmZhY3RvcnkoJ0ZlZWRTZXJ2aWNlJywgZmVlZFNlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ0FsdG1ldHJpY3NTZXJ2aWNlJywgQWx0bWV0cmljc1NlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ01lc3NhZ2VTZXJ2aWNlJywgTWVzc2FnZVNlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ0ZlZWRiYWNrU2VydmljZScsIEZlZWRiYWNrU2VydmljZSlcclxuICAuc2VydmljZSgnV2luZG93RXZlbnRMaXN0ZW5lcicsIFdpbmRvd0V2ZW50TGlzdGVuZXIpXHJcblxyXG4gIC5mYWN0b3J5KCdkYlNlYXJjaEh0dHBDYWxsSW50ZXJjZXB0b3InLCBkYlNlYXJjaEh0dHBDYWxsSW50ZXJjZXB0b3IpXHJcbiAgLmZhY3RvcnkoJ2FwaUNhbGxJbnRlcmNlcHRvcicsIGFwaUNhbGxJbnRlcmNlcHRvcilcclxuICAuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsICgkaHR0cFByb3ZpZGVyKSA9PiB7ICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ2FwaUNhbGxJbnRlcmNlcHRvcicpOyB9XSk7XHJcblxyXG4vL2ludGVyY2VwdCBhcGkgY2FsbHMgZm9yIGRhdGFiYXNlIHNlYXJjaCBhbmQgY2hhbmdlIHRvIEtVTCAob25seSByZWdpb25hbCB2aWV3cylcclxudmFyIHJlZ192aWV3cyA9IFtcIktVTGV1dmVuX1RNT1JFTVwiLCBcIktVTGV1dmVuX1RNT1JFS1wiLCBcIktVTGV1dmVuX1VDTExcIiwgXCJLVUxldXZlbl9MVUNBXCIsIFwiS1VMZXV2ZW5fT0RJU0VFXCJdO1xyXG5pZiAocmVnX3ZpZXdzLmluY2x1ZGVzKHdpbmRvdy5hcHBDb25maWcudmlkKSkge1xyXG4gIGFwcC5jb25maWcoWyckaHR0cFByb3ZpZGVyJywgKCRodHRwUHJvdmlkZXIpID0+IHsgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yJyk7IH1dKTtcclxufVxyXG5cclxuXHJcblxyXG4vL0NvbnRhaW5zIHRoZSBhZnRlciBjb21wb25lbnQgc2VsZWN0b3JzIHRoYXQgd2lsbCBiZSBpbmplY3RlZFxyXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XHJcblxyXG4vL0NyZWF0ZSBhbGwgY29tcG9uZW50cyBhbmQgZGV0ZXJtaW5lIGluIHdoaWNoIGFmdGVyIGNvbXBvbmVudCB0aGVzZSBuZWVkIHRvIGJlXHJcbi8vaW5qZWN0ZWRcclxuY29uc29sZS5sb2coJ0xvYWRpbmcgY2VudHJhbEN1c3RvbSBjb21wb25lbnRzJyk7XHJcbkNvbXBvbmVudHMuYWxsLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbXBvbmVudC5uYW1lKVxyXG4gIGlmIChjb21wb25lbnQuZW5hYmxlZCkge1xyXG4gICAgaWYgKGNvbXBvbmVudC5hcHBlbmRUbykge1xyXG4gICAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcclxuICAgICAgLy9lbGVtZW50cy5wdXNoKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgZWxlbWVudHMucHVzaCh7XHJcbiAgICAgICAgJ25hbWUnOiBjb21wb25lbnQubmFtZSxcclxuICAgICAgICAnZW5hYmxlSW5WaWV3JzogY29tcG9uZW50LmVuYWJsZUluVmlld1xyXG4gICAgICB9KTtcclxuICAgICAgYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gPSBlbGVtZW50cztcclxuXHJcbiAgICB9XHJcbiAgICBhcHAuY29uc3RhbnQoJ2FmdGVyQ29tcG9uZW50cycsIGFmdGVyQ29tcG9uZW50cyk7XHJcbiAgICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLnRvQ2FtZWxDYXNlKCksIGNvbXBvbmVudC5jb25maWcpO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zb2xlLmxvZygnUmVwbGFjZSBUZW1wbGF0ZXMnKTtcclxuVGVtcGxhdGVzLmFsbC5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHRlbXBsYXRlLmlkKVxyXG4gIGFwcC5ydW4oKCR0ZW1wbGF0ZUNhY2hlKSA9PiB7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGUuaWQsIHRlbXBsYXRlLnRlbXBsYXRlKTtcclxuICB9KVxyXG59KVxyXG5cclxuLy9JbmplY3QgcGxhY2UgaG9sZGVycyBpbnRvIHRoZSBhZnRlciBjb21wb25lbnRzXHJcbk9iamVjdC5rZXlzKGFmdGVyQ29tcG9uZW50cykuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XHJcbiAgbGV0IHN1YkNvbXBvbmVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50XTtcclxuXHJcbiAgYXBwLmNvbXBvbmVudChjb21wb25lbnQudG9DYW1lbENhc2UoKSwge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IHN1YkNvbXBvbmVudHMubWFwKG0gPT4gYDwke20ubmFtZX0gcGFyZW50LWN0cmw9XCIkY3RybFwiPjwvJHttLm5hbWV9PmApLmpvaW4oXCJcIilcclxuICB9KTtcclxufSk7XHJcbiIsImltcG9ydCBFeHBsb3JlIGZyb20gJy4vcHJpbW8vZXhwbG9yZSdcclxuaW1wb3J0IFJlY29yZHMgZnJvbSAnLi9wcmltby9yZWNvcmRzJ1xyXG5pbXBvcnQgRmFjZXRzIGZyb20gJy4vcHJpbW8vZmFjZXRzJ1xyXG5pbXBvcnQgVmlldyBmcm9tICcuL3ByaW1vL3ZpZXcnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4vcHJpbW8vdXNlcidcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuLyoqXHJcbiAqIFByaW1vIG1haW4gZW50cnkgY2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW1vIHtcclxuICAvKipcclxuICAgKiBSZXR1cm4gdmVyc2lvbiBpbmZvcm1hdGlvblxyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XHJcbiAgICBsZXQgX3ZlcnNpb24gPSBcIjAuMC4xMFwiO1xyXG4gICAgcmV0dXJuIGBMaWJyYXJ5OiR7X3ZlcnNpb259IC0gUHJpbW86JHt3aW5kb3cuYXBwQ29uZmlnWydzeXN0ZW0tY29uZmlndXJhdGlvbiddLlByaW1vX1ZlcnNpb25fTnVtYmVyfToke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fSG90Rml4X051bWJlcn1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKCkgaGFzIHJhblxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgc3RhdGljIGlzRGVidWdFbmFibGVkKCkge1xyXG4gICAgcmV0dXJuIEhlbHBlci5pc0RlYnVnRW5hYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlkIHRoZSBzY3JpcHQgcmFuIG9uIGEgUHJpbW8gc2l0ZVxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XHJcbiAgICByZXR1cm4gSGVscGVyLmlzUHJpbW9BdmFpbGFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgYSBwcm94eSBjbGFzc1xyXG4gICAqIEByZXR1cm4ge0V4cGxvcmV9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCBleHBsb3JlKCkge1xyXG4gICAgcmV0dXJuIEV4cGxvcmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIGF2YWlsYWJsZSByZWNvcmRzXHJcbiAgICogQHJldHVybiB7UmVjb3Jkc31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHJlY29yZHMoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc29sdmUobmV3IFJlY29yZHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpKTtcclxuICAgIH0pXHJcbiAgICAvL3JldHVybiBuZXcgUmVjb3Jkcyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIGF2YWlsYWJsZSBmYWNldHNcclxuICAgKiBAcmV0dXJuIHtGYWNldHN9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCBmYWNldHMoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc29sdmUobmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cykpO1xyXG4gICAgfSlcclxuICAgIC8vcmV0dXJuIG5ldyBGYWNldHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byB2aWV3IHJlbGF0ZWQgbWV0YWRhdGFcclxuICAgKiBAcmV0dXJuIHtWaWV3fVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdmlldygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc29sdmUobmV3IFZpZXcoKSk7XHJcbiAgICB9KVxyXG4gICAgLy9yZXR1cm4gbmV3IFZpZXcoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gdXNlciByZWxhdGVkIG1ldGFkYXRhXHJcbiAgICogQHJldHVybiB7VXNlcn1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHVzZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBIZWxwZXIudXNlckRldGFpbHNIVFRQKCkudGhlbigodXNlckRldGFpbHMpPT57XHJcbiAgICAgICAgSGVscGVyLnVzZXJGaW5lc0hUVFAoKS50aGVuKCh1c2VyRmluZXMpID0+IHtcclxuICAgICAgICAgIEhlbHBlci51c2VyTG9hbnNIVFRQKCkudGhlbigodXNlckxvYW5zKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgVXNlcih7ZGV0YWlsczogdXNlckRldGFpbHMsIGZpbmVzOiB1c2VyRmluZXMsIGxvYW5zOiB1c2VyTG9hbnN9KSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbi8vdGhpcyBpcyBwcm94eSBjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb3JlIHtcclxuICBzdGF0aWMgZ2V0IGNvbXBvbmVudHMoKSB7XHJcbiAgICBsZXQgYyA9IG5ldyBDb21wb25lbnRzKCk7XHJcbiAgICBIZWxwZXIuY29tcG9uZW50TmFtZXMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcclxuICAgICAgYy5hZGQoc2VsZWN0b3IpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgdWkoKSB7XHJcbiAgICBpZiAodGhpcy5fdWkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGlzIGlzIGEgc3R1YiBmdW5jdGlvbiBjYWxsIFwiYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKClcIiB0byBhY3RpdmF0ZSBVSScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX3VpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBoZWxwZXIoKSB7XHJcbiAgICByZXR1cm4gSGVscGVyO1xyXG4gIH1cclxufVxyXG4iLCJ2YXIgY3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBuZXcocmVxdWlyZSgnLi4vLi4vdmVuZG9yL2Nzcy1zZWxlY3Rvci1nZW5lcmF0b3IuanMnKSkuQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcblxyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vaGVscGVyJ1xyXG5cclxuY2xhc3MgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KXtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBibGluaygpe1xyXG4gICAgSGVscGVyLmJsaW5rKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNzc1BhdGgoKXtcclxuICAgIHJldHVybiBjc3NTZWxlY3RvckdlbmVyYXRvci5nZXRTZWxlY3Rvcih0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKXtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubG9jYWxOYW1lO1xyXG4gIH1cclxuXHJcbiAgc2NvcGUoKXtcclxuICAgIGlmIChIZWxwZXIuaXNEZWJ1Z0VuYWJsZWQoKSl7XHJcbiAgICAgIHJldHVybiBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5zY29wZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHJ1biBcImFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpXCIgZmlyc3QnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN0cmwoKXtcclxuICAgIGxldCBjID0gYW5ndWxhci5lbGVtZW50KHRoaXMuZWxlbWVudCkuY29udHJvbGxlcih0aGlzLm5hbWUpO1xyXG4gICAgaWYgKGMpIHtcclxuICAgICAgcmV0dXJuIGM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygndXNpbmcgYWx0ZXJuYXRpdmUgbWV0aG9kIHRvIGdldCBjb250cm9sbGVyJyk7XHJcbiAgICAgIGxldCBzY29wZSA9IHRoaXMuc2NvcGUoKTtcclxuICAgICAgaWYgKHNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNjb3BlQ2hpbGQgPSBzY29wZS4kJGNoaWxkVGFpbDtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2NvcGUpLmluY2x1ZGVzKCckY3RybCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZS4kY3RybFxyXG4gICAgICAgIH0gZWxzZSBpZihPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJ2N0cmwnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGUuY3RybFxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcGVDaGlsZCAmJiBPYmplY3Qua2V5cyhzY29wZUNoaWxkKS5pbmNsdWRlcygnJGN0cmwnKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZUNoaWxkLiRjdHJsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcGVDaGlsZCAmJiBPYmplY3Qua2V5cyhzY29wZUNoaWxkKS5pbmNsdWRlcygnY3RybCcpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuY3RybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyAkY3RybCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRzIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgdGhpcy5fY29tcG9uZW50cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgYWRkKHNlbGVjdG9yKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBIZWxwZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICBsZXQgZWxlbWVudHNBcnJheSA9IHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IFtdO1xyXG5cclxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgICAgIGVsZW1lbnRzQXJyYXkucHVzaChuZXcgQ29tcG9uZW50KGVsZW1lbnQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdID0gZWxlbWVudHNBcnJheTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudHNBcnJheTtcclxuICB9XHJcblxyXG4gIGdldChzZWxlY3Rvcikge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBrZXlzKCl7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xyXG4gICAgc3RhdGljIGlzRGVidWdFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubmFtZSA9PT0gJ05HX0VOQUJMRV9ERUJVR19JTkZPIScgfHwgdHlwZW9mKGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm0tbG9nbycpKS5zY29wZSgpKSAhPSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNQcmltb0F2YWlsYWJsZSgpIHtcclxuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZih3aW5kb3cuYW5ndWxhcikpIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByaW1vLWV4cGxvcmUnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY29tcG9uZW50TmFtZXMoKSB7XHJcbiAgICAgICAgbGV0IHRhZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnROYW1lcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHRhZyBvZiB0YWdzKSB7XHJcbiAgICAgICAgICAgIGxldCB0YWdOYW1lID0gdGFnLmxvY2FsTmFtZTtcclxuICAgICAgICAgICAgaWYgKC9ecHJtLS8udGVzdCh0YWdOYW1lKSB8fCAvXnByaW1vLS8udGVzdCh0YWdOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnROYW1lcy5pbmNsdWRlcyh0YWdOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVzLnB1c2godGFnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudE5hbWVzID0gY29tcG9uZW50TmFtZXMuc29ydCgpLmZpbHRlcigoZSwgaSwgYSkgPT4gaSA9PT0gYS5maW5kSW5kZXgoKGUyKSA9PiBlID09PSBlMikpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnROYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5qZWN0b3IoKSB7XHJcbiAgICAgIGxldCBjID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJpbW8tZXhwbG9yZScpO1xyXG4gICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGxldCBwcmltb0V4cGxvcmUgPSBhbmd1bGFyLmVsZW1lbnQoY1swXS5lbGVtZW50KTtcclxuICAgICAgICAgIGxldCBpbmplY3RvciAgICAgPSBwcmltb0V4cGxvcmUuaW5qZWN0b3IoKTtcclxuICAgICAgICAgIGlmIChpbmplY3Rvcil7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmplY3RvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBodHRwKCkge1xyXG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XHJcbiAgICAgIGlmIChpbmplY3Rvcikge1xyXG4gICAgICAgIGxldCBoID0gaW5qZWN0b3IuZ2V0KCckaHR0cCcpO1xyXG4gICAgICAgIGlmIChoKSB7XHJcbiAgICAgICAgICByZXR1cm4gaDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgbG9hZFNjcmlwdChzY3JpcHRVUkwpIHtcclxuICAgICAgaWYgKHdpbmRvdy5hbmd1bGFyKSB7XHJcbiAgICAgICAgICBsZXQgYXBwSW5qZWN0b3IgPSBhbmd1bGFyLmluamVjdG9yKFsnbmcnLCdhbmd1bGFyTG9hZCddKTtcclxuICAgICAgICAgIGlmIChhcHBJbmplY3Rvcikge1xyXG4gICAgICAgICAgICAgIGxldCBhbmd1bGFyTG9hZCA9IGFwcEluamVjdG9yLmdldCgnYW5ndWxhckxvYWQnKTtcclxuICAgICAgICAgICAgICBpZiAoYW5ndWxhckxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyTG9hZC5sb2FkU2NyaXB0KHNjcmlwdFVSTCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvb3RTY29wZSgpIHtcclxuICAgICAgbGV0IGluamVjdG9yID0gdGhpcy5pbmplY3RvcigpO1xyXG4gICAgICBpZiAoaW5qZWN0b3IpIHtcclxuICAgICAgICAgIGxldCByb290U2NvcGUgICAgPSBpbmplY3Rvci5nZXQoJyRyb290U2NvcGUnKTtcclxuICAgICAgICAgIGlmIChyb290U2NvcGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3RTY29wZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKSB7XHJcbiAgICAgIGxldCByb290U2NvcGUgPSB0aGlzLnJvb3RTY29wZSgpO1xyXG4gICAgICBpZiAocm9vdFNjb3BlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgand0RGF0YSgpIHtcclxuICAgICAgbGV0IHVTTVMgPSB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgICAgaWYgKHVTTVMpIHtcclxuICAgICAgICBsZXQgand0RGF0YSA9IHVTTVMuand0VXRpbFNlcnZpY2UuZ2V0RGVjb2RlZFRva2VuKCkgfHwge307XHJcbiAgICAgICAgcmV0dXJuIGp3dERhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckRldGFpbHMoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuJGxvY2FsRm9yYWdlLmdldEl0ZW0oJ3VzZXJEZXRhaWxzJykudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyRGV0YWlsc0hUVFAoKSB7XHJcbiAgICAgIGxldCB2aWV3Q29kZSA9IHRoaXMuand0RGF0YSgpLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSxyZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KGAvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS91c2Vyc2V0dGluZ3M/dmlkPSR7dmlld0NvZGV9YCkudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzLmRhdGEpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJGaW5lc0hUVFAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2ZpbmVzJykudGhlbih1c2VyRmluZXMgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyRmluZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmaW5lcyA9IGRhdGEuZGF0YS5maW5lcztcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZXMuZmluZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGZpbmVzJyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyTG9hbnNIVFRQKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL215YWNjb3VudC9sb2FucycpLnRoZW4odXNlckxvYW5zID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckxvYW5zLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9hbnMgPSBkYXRhLmRhdGEubG9hbnM7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvYW5zLmxvYW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBsb2FucycpO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYmxpbmsoY29tcG9uZW50LCBudW1iZXJPZkJsaW5rcyA9IDQpIHtcclxuICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcclxuICAgICAgICBsZXQgYm9yZGVyU2VsZWN0b3IgPSBjb21wb25lbnQuZWxlbWVudC5jc3NQYXRoICsgaW5kZXggKyAnUmVjdCc7XHJcblxyXG4gICAgICAgIGxldCBjcmVhdGVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJlY3QgPSBjb21wb25lbnQuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArIDE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBib3JkZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgcmVkJztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS50b3AgPSBlbGVtZW50UmVjdC50b3AgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBlbGVtZW50UmVjdC5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGVsZW1lbnRSZWN0LndpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUubGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib3JkZXJFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBib3JkZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlbW92ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYm9yZGVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBib3JkZXJFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJsaW5rQm9yZGVyRWxlbWVudCA9IChudW1iZXJPZkJsaW5rcyA9IDQpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZCbGlua3MgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVCb3JkZXJFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAoKG51bWJlck9mQmxpbmtzICUgMikgPT0gMCkgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZCbGlua3MtLTtcclxuICAgICAgICAgICAgICAgIGludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYmxpbmtCb3JkZXJFbGVtZW50LCAxMDAwLCBudW1iZXJPZkJsaW5rcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvcmRlckVsZW1lbnQgPSBjcmVhdGVCb3JkZXJFbGVtZW50KCk7XHJcbiAgICAgICAgYmxpbmtCb3JkZXJFbGVtZW50KG51bWJlck9mQmxpbmtzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2ZhY2V0cyhjb21wb25lbnRzKTtcclxuICAgIH1cclxuICAgIF9mYWNldHMoY29tcG9uZW50cykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tZmFjZXQtYWZ0ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBnZXQgZmFjZXRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmZhY2V0cztcclxuICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBmYWNldHMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcyhjb21wb25lbnRzKTtcclxuICAgIH1cclxuICAgIF9pdGVtcyhjb21wb25lbnRzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gY29tcG9uZW50cy5nZXQoJ3BybS1zZWFyY2gtcmVzdWx0LWxpc3QtYWZ0ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN0cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuaXRlbWxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwidHJ5IGFnYWluXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCByZWNvcmRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmRhdGE7XHJcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gcmV0cmlldmUgaXRlbXMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcclxuICBjb25zdHJ1Y3Rvcih1c2VyID0gX3NrZWxVc2VyKSB7XHJcbiAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XHJcbiAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogand0RGF0YS51c2VyIHx8ICcnLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmRldGFpbHMuZW1haWwgfHwgJycsXHJcbiAgICAgICAgbmFtZTogand0RGF0YS51c2VyTmFtZSB8fCAnR3Vlc3QnLFxyXG4gICAgICAgIGRpc3BsYXlfbmFtZTogdVNtcy5nZXRVc2VyTmFtZUZvckRpc3BsYXkoKSxcclxuICAgICAgICBpc0xvZ2dlZEluOiAoKSA9PiB1U21zLmdldFVzZXJOYW1lKCkubGVuZ3RoID4gMCxcclxuICAgICAgICBpc09uQ2FtcHVzOiAoKSA9PiBqd3REYXRhLm9uQ2FtcHVzID09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIGZpbmVzOiB1c2VyLmZpbmVzLFxyXG4gICAgICAgIGxvYW5zOiB1c2VyLmxvYW5zXHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgX3NrZWxVc2VyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGV0YWlsczoge30sXHJcbiAgICAgIGZpbmVzOiB7fSxcclxuICAgICAgbG9hbnM6IHt9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgICAgbGV0IGp3dERhdGEgPSBIZWxwZXIuand0RGF0YSgpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXSxcclxuICAgICAgICBpbnN0aXR1dGlvbjoge1xyXG4gICAgICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJbnN0aXR1dGlvbkNvZGUsXHJcbiAgICAgICAgICAgIG5hbWU6IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnN0aXR1dGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW50ZXJmYWNlTGFuZ3VhZ2U6IHVTbXMuZ2V0VXNlckxhbmd1YWdlKCkgfHwgd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmludGVyZmFjZUxhbmd1YWdlLFxyXG4gICAgICAgIGlwOiB7XHJcbiAgICAgICAgICBhZGRyZXNzOiBqd3REYXRhLmlwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBDc3NTZWxlY3RvckdlbmVyYXRvciwgcm9vdCxcclxuICAgIGluZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcclxuXHJcbiAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZGVmYXVsdF9vcHRpb25zID0ge1xyXG4gICAgICBzZWxlY3RvcnM6IFsnaWQnLCAnY2xhc3MnLCAndGFnJywgJ250aGNoaWxkJ11cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gQ3NzU2VsZWN0b3JHZW5lcmF0b3Iob3B0aW9ucykge1xyXG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xyXG4gICAgICB0aGlzLnNldE9wdGlvbnModGhpcy5kZWZhdWx0X29wdGlvbnMpO1xyXG4gICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgIHZhciBrZXksIHJlc3VsdHMsIHZhbDtcclxuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHRzID0gW107XHJcbiAgICAgIGZvciAoa2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICB2YWwgPSBvcHRpb25zW2tleV07XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdF9vcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLm9wdGlvbnNba2V5XSA9IHZhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmlzRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuICEhKChlbGVtZW50ICE9IG51bGwgPyBlbGVtZW50Lm5vZGVUeXBlIDogdm9pZCAwKSA9PT0gMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRQYXJlbnRzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgY3VycmVudF9lbGVtZW50LCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBpZiAodGhpcy5pc0VsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmlzRWxlbWVudChjdXJyZW50X2VsZW1lbnQpKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50X2VsZW1lbnQpO1xyXG4gICAgICAgICAgY3VycmVudF9lbGVtZW50ID0gY3VycmVudF9lbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRUYWdTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVJdGVtKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNhbml0aXplSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgdmFyIGNoYXJhY3RlcnM7XHJcbiAgICAgIGNoYXJhY3RlcnMgPSAoaXRlbS5zcGxpdCgnJykpLm1hcChmdW5jdGlvbihjaGFyYWN0ZXIpIHtcclxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAnOicpIHtcclxuICAgICAgICAgIHJldHVybiBcIlxcXFxcIiArICgnOicuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkgKyBcIiBcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKC9bICFcIiMkJSYnKCkqKywuXFwvOzw9Pj9AXFxbXFxcXFxcXV5ge3x9fl0vLnRlc3QoY2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgY2hhcmFjdGVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZXNjYXBlKGNoYXJhY3RlcikucmVwbGFjZSgvXFwlL2csICdcXFxcJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNoYXJhY3RlcnMuam9pbignJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRJZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgaWQsIHNhbml0aXplZF9pZDtcclxuICAgICAgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgaWYgKChpZCAhPSBudWxsKSAmJiAoaWQgIT09ICcnKSAmJiAhKC9cXHMvLmV4ZWMoaWQpKSAmJiAhKC9eXFxkLy5leGVjKGlkKSkpIHtcclxuICAgICAgICBzYW5pdGl6ZWRfaWQgPSBcIiNcIiArICh0aGlzLnNhbml0aXplSXRlbShpZCkpO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzYW5pdGl6ZWRfaWQpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHNhbml0aXplZF9pZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDbGFzc1NlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGNsYXNzX3N0cmluZywgaXRlbSwgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgY2xhc3Nfc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgIGlmIChjbGFzc19zdHJpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgIGNsYXNzX3N0cmluZyA9IGNsYXNzX3N0cmluZy5yZXBsYWNlKC9cXHMrL2csICcgJyk7XHJcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL15cXHN8XFxzJC9nLCAnJyk7XHJcbiAgICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPT0gJycpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGssIGxlbiwgcmVmLCByZXN1bHRzO1xyXG4gICAgICAgICAgICByZWYgPSBjbGFzc19zdHJpbmcuc3BsaXQoL1xccysvKTtcclxuICAgICAgICAgICAgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICAgICAgICBpdGVtID0gcmVmW2tdO1xyXG4gICAgICAgICAgICAgIHJlc3VsdHMucHVzaChcIi5cIiArICh0aGlzLnNhbml0aXplSXRlbShpdGVtKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgICAgfSkuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGF0dHJpYnV0ZSwgYmxhY2tsaXN0LCBrLCBsZW4sIHJlZiwgcmVmMSwgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgYmxhY2tsaXN0ID0gWydpZCcsICdjbGFzcyddO1xyXG4gICAgICByZWYgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIGF0dHJpYnV0ZSA9IHJlZltrXTtcclxuICAgICAgICBpZiAocmVmMSA9IGF0dHJpYnV0ZS5ub2RlTmFtZSwgaW5kZXhPZi5jYWxsKGJsYWNrbGlzdCwgcmVmMSkgPCAwKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChcIltcIiArIGF0dHJpYnV0ZS5ub2RlTmFtZSArIFwiPVwiICsgYXR0cmlidXRlLm5vZGVWYWx1ZSArIFwiXVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldE50aENoaWxkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBjb3VudGVyLCBrLCBsZW4sIHBhcmVudF9lbGVtZW50LCBzaWJsaW5nLCBzaWJsaW5ncztcclxuICAgICAgcGFyZW50X2VsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgIGlmIChwYXJlbnRfZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgICAgc2libGluZ3MgPSBwYXJlbnRfZWxlbWVudC5jaGlsZE5vZGVzO1xyXG4gICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHNpYmxpbmdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgICBzaWJsaW5nID0gc2libGluZ3Nba107XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnQoc2libGluZykpIHtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIjpudGgtY2hpbGQoXCIgKyBjb3VudGVyICsgXCIpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0U2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgICB2YXIgaXNfdW5pcXVlLCByZXN1bHQ7XHJcbiAgICAgIGlzX3VuaXF1ZSA9IGZhbHNlO1xyXG4gICAgICBpZiAoKHNlbGVjdG9yICE9IG51bGwpICYmIHNlbGVjdG9yICE9PSAnJykge1xyXG4gICAgICAgIHJlc3VsdCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiByZXN1bHRbMF0gPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgIGlzX3VuaXF1ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpc191bmlxdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRBbGxTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICB0OiBudWxsLFxyXG4gICAgICAgIGk6IG51bGwsXHJcbiAgICAgICAgYzogbnVsbCxcclxuICAgICAgICBhOiBudWxsLFxyXG4gICAgICAgIG46IG51bGxcclxuICAgICAgfTtcclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAndGFnJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC50ID0gdGhpcy5nZXRUYWdTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdpZCcpID49IDApIHtcclxuICAgICAgICByZXN1bHQuaSA9IHRoaXMuZ2V0SWRTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdjbGFzcycpID49IDApIHtcclxuICAgICAgICByZXN1bHQuYyA9IHRoaXMuZ2V0Q2xhc3NTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnYXR0cmlidXRlJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5hID0gdGhpcy5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnbnRoY2hpbGQnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0Lm4gPSB0aGlzLmdldE50aENoaWxkU2VsZWN0b3IoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RVbmlxdWVuZXNzID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcclxuICAgICAgdmFyIGZvdW5kX2VsZW1lbnRzLCBwYXJlbnQ7XHJcbiAgICAgIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgZm91bmRfZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgIHJldHVybiBmb3VuZF9lbGVtZW50cy5sZW5ndGggPT09IDEgJiYgZm91bmRfZWxlbWVudHNbMF0gPT09IGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0Q29tYmluYXRpb25zID0gZnVuY3Rpb24oZWxlbWVudCwgaXRlbXMsIHRhZykge1xyXG4gICAgICB2YXIgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCByZWYsIHJlZjE7XHJcbiAgICAgIHJlZiA9IHRoaXMuZ2V0Q29tYmluYXRpb25zKGl0ZW1zKTtcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgaXRlbSA9IHJlZltrXTtcclxuICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBpdGVtKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0YWcgIT0gbnVsbCkge1xyXG4gICAgICAgIHJlZjEgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRhZyArIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XHJcbiAgICAgICAgICBpdGVtID0gcmVmMVtsXTtcclxuICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFVuaXF1ZVNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgZm91bmRfc2VsZWN0b3IsIGssIGxlbiwgcmVmLCBzZWxlY3Rvcl90eXBlLCBzZWxlY3RvcnM7XHJcbiAgICAgIHNlbGVjdG9ycyA9IHRoaXMuZ2V0QWxsU2VsZWN0b3JzKGVsZW1lbnQpO1xyXG4gICAgICByZWYgPSB0aGlzLm9wdGlvbnMuc2VsZWN0b3JzO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBzZWxlY3Rvcl90eXBlID0gcmVmW2tdO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3JfdHlwZSkge1xyXG4gICAgICAgICAgY2FzZSAnaWQnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLmkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMuaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3RhZyc6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgc2VsZWN0b3JzLnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2xhc3MnOlxyXG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5jICE9IG51bGwpICYmIHNlbGVjdG9ycy5jLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kX3NlbGVjdG9yID0gdGhpcy50ZXN0Q29tYmluYXRpb25zKGVsZW1lbnQsIHNlbGVjdG9ycy5jLCBzZWxlY3RvcnMudCk7XHJcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnYXR0cmlidXRlJzpcclxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYSAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYSwgc2VsZWN0b3JzLnQpO1xyXG4gICAgICAgICAgICAgIGlmIChmb3VuZF9zZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ250aGNoaWxkJzpcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy5uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICcqJztcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgYWxsX3NlbGVjdG9ycywgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCBwYXJlbnRzLCByZXN1bHQsIHNlbGVjdG9yLCBzZWxlY3RvcnM7XHJcbiAgICAgIGFsbF9zZWxlY3RvcnMgPSBbXTtcclxuICAgICAgcGFyZW50cyA9IHRoaXMuZ2V0UGFyZW50cyhlbGVtZW50KTtcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcGFyZW50cy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIGl0ZW0gPSBwYXJlbnRzW2tdO1xyXG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5nZXRVbmlxdWVTZWxlY3RvcihpdGVtKTtcclxuICAgICAgICBpZiAoc2VsZWN0b3IgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxsX3NlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0b3JzID0gW107XHJcbiAgICAgIGZvciAobCA9IDAsIGxlbjEgPSBhbGxfc2VsZWN0b3JzLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xyXG4gICAgICAgIGl0ZW0gPSBhbGxfc2VsZWN0b3JzW2xdO1xyXG4gICAgICAgIHNlbGVjdG9ycy51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5qb2luKCcgPiAnKTtcclxuICAgICAgICBpZiAodGhpcy50ZXN0U2VsZWN0b3IoZWxlbWVudCwgcmVzdWx0KSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihpdGVtcykge1xyXG4gICAgICB2YXIgaSwgaiwgaywgbCwgcmVmLCByZWYxLCByZXN1bHQ7XHJcbiAgICAgIGlmIChpdGVtcyA9PSBudWxsKSB7XHJcbiAgICAgICAgaXRlbXMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHQgPSBbW11dO1xyXG4gICAgICBmb3IgKGkgPSBrID0gMCwgcmVmID0gaXRlbXMubGVuZ3RoIC0gMTsgMCA8PSByZWYgPyBrIDw9IHJlZiA6IGsgPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2sgOiAtLWspIHtcclxuICAgICAgICBmb3IgKGogPSBsID0gMCwgcmVmMSA9IHJlc3VsdC5sZW5ndGggLSAxOyAwIDw9IHJlZjEgPyBsIDw9IHJlZjEgOiBsID49IHJlZjE7IGogPSAwIDw9IHJlZjEgPyArK2wgOiAtLWwpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKHJlc3VsdFtqXS5jb25jYXQoaXRlbXNbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0LnNoaWZ0KCk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmpvaW4oJycpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIENzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwgPyBkZWZpbmUuYW1kIDogdm9pZCAwKSB7XHJcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcclxuICAgIHJvb3QuQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBDc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuICB9XHJcblxyXG59KS5jYWxsKHRoaXMpO1xyXG4iLCIvKlxyXG4gIFJlcGxhY2UgdGVtcGxhdGVzLlxyXG5cclxuICBSZXBsYWNlIHRoZSBkZWZhdWx0IHByaW1vIHRlbXBsYXRlcyBodHRwOi8vbG9jYWxob3N0OjgwMDMvcHJpbW8tZXhwbG9yZS9saWIvdGVtcGxhdGVzLmpzXHJcbiAgd2l0aCBjdXN0b20gdGVtcGxhdGVzXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE4XHJcbiAgVG9tIFZhbm1lY2hlbGVuXHJcbiovXHJcbmltcG9ydCAnLi91dGlscydcclxuXHJcbi8qIGltcG9ydCB5b3VyIHRlbXBsYXRlcyAqL1xyXG5cclxuaW1wb3J0IGNoYW5nZUxhbmdXaXRob3V0VXNlckFyZWFIVE1MIGZyb20gJy4uL2h0bWwvdGVtcGxhdGVzL2NoYW5nZS1sYW5nLXdpdGhvdXQtdXNlci1hcmVhLmh0bWwnXHJcbmltcG9ydCBwcm1Mb2FuQnVnRml4SFRNTCBmcm9tICcuLi9odG1sL3RlbXBsYXRlcy9wcm0tbG9hbi1idWctZml4Lmh0bWwnXHJcbmltcG9ydCBwcm1SZXF1ZXN0QnVnRml4SFRNTCBmcm9tICcuLi9odG1sL3RlbXBsYXRlcy9wcm0tcmVxdWVzdC1idWctZml4Lmh0bWwnXHJcbmltcG9ydCBwcm1MaXJpYXNCcmllZlJlc3VsdENvbnRhaW5lckhUTUwgZnJvbSAnLi4vaHRtbC90ZW1wbGF0ZXMvcHJtLWxpcmlhcy1icmllZi1yZXN1bHQtY29udGFpbmVyLmh0bWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZXMge1xyXG4gICAgc3RhdGljIGdldCBhbGwoKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgIGlkID0gdGVtcGxhdGVJZCBpbiB0aGUgdGVtcGxhdGVDYWNoZVxyXG4gICAgICAgICAgdGVtcGxhdGUgPSB0aGUgaW1wb3J0ZWQgdGVtcGFsdGVcclxuICAgICAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcclxuICAgICAgICAgIGVuYWJsZUluVmlldyA9IHJlZ2V4IHRvIGRlZmluZSBpbiB3aGljaCB2aWV3cyB0aGUgdGVtcGxhdGUgaGFzIHRvIGJlIHJlcGxhY2VkLlxyXG5cclxuICAgICAgICAgIGV4LiB7aWQ6ICdjb21wb25lbnRzL3NlYXJjaC90b3BiYXIvdXNlckFyZWEvdXNlci1hcmVhLmh0bWwnLCB0ZW1wbGF0ZTogdXNlckFyZWFIVE1MLCBlbmFibGVkOiB0cnVlLCBlbmFibGVJblZpZXc6ICcuKid9XHJcbiAgICAgICAgICByZXN1bHRzIGluOlxyXG4gICAgICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL3RvcGJhci91c2VyQXJlYS91c2VyLWFyZWEuaHRtbCcsdXNlckFyZWFIVE1MKTtcclxuICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb21wb25lbnRzL3NlYXJjaC90b3BiYXIvdXNlckFyZWEvdXNlci1hcmVhLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGNoYW5nZUxhbmdXaXRob3V0VXNlckFyZWFIVE1MLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVuYWJsZUluVmlldzogJ1ZESUMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnY29tcG9uZW50cy9hY2NvdW50L2xvYW5zL2xvYW4uaHRtbCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcHJtTG9hbkJ1Z0ZpeEhUTUwsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnY29tcG9uZW50cy9hY2NvdW50L3JlcXVlc3RzL3JlcXVlc3RzLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHBybVJlcXVlc3RCdWdGaXhIVE1MLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xyXG4gICAgICAgICAgICB9LCAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnY29tcG9uZW50cy9zZWFyY2gvYnJpZWZSZXN1bHQvYnJpZWZSZXN1bHRDb250YWluZXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcHJtTGlyaWFzQnJpZWZSZXN1bHRDb250YWluZXJIVE1MLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVuYWJsZUluVmlldzogJ0xpcmlhcydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0uZmlsdGVyKCh0ZW1wbGF0ZSkgPT4gKHRlbXBsYXRlLmVuYWJsZWQgJiYgbmV3IFJlZ0V4cCh0ZW1wbGF0ZS5lbmFibGVJblZpZXcpLnRlc3Qod2luZG93LmFwcENvbmZpZy52aWQpKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICBHZW5lcmFsXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XHJcbiAgTWVobWV0IENlbGlrXHJcbiovXHJcblN0cmluZy5wcm90b3R5cGUudG9DYW1lbENhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuc3BsaXQoJy0nKS5tYXAoKGQsIGksIGEpID0+IGkgPiAwID8gZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGQuc2xpY2UoMSkgOiBkKS5qb2luKCcnKTtcclxufVxyXG5cclxuLy9pbnRlcmNlcHQgYXBpIGNhbGxzIGZvciBkYXRhYmFzZSBzZWFyY2ggYW5kIGNoYW5nZSB0byBLVUwgKG9ubHkgcmVnaW9uYWwgdmlld3MpXHJcbiAgLypcclxudmFyIHJlZ192aWV3cyA9IFtcIktVTGV1dmVuX1RNT1JFTVwiLCBcIktVTGV1dmVuX1RNT1JFS1wiLCBcIktVTGV1dmVuX1VDTExcIiwgXCJLVUxldXZlbl9MVUNBXCIsIFwiS1VMZXV2ZW5fT0RJU0VFXCJdO1xyXG5pZiAocmVnX3ZpZXdzLmluY2x1ZGVzKHdpbmRvdy5hcHBDb25maWcudmlkKSkge1xyXG4gIGxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndmlld0N1c3RvbScsIFtdKVxyXG4gICAgLmZhY3RvcnkoJ2h0dHBDYWxsSW50ZXJjZXB0b3InLCBbKCkgPT4ge1xyXG4gICAgICB2YXIgaHR0cENhbGxJbnRlcmNlcHRvciA9IHtcclxuICAgICAgICByZXF1ZXN0OiBmdW5jdGlvbihjb25maWcpe1xyXG4gICAgICAgICAgaWYgKGNvbmZpZy51cmwuaW5jbHVkZXMoJ3BueHMnKSAmJiAhY29uZmlnLnVybC5pbmNsdWRlcygnZGVsaXZlcnknKSAmJiBjb25maWcucGFyYW1zKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbmZpZy5wYXJhbXMuZGF0YWJhc2VzKXtcclxuICAgICAgICAgICAgICBjb25maWcucGFyYW1zLmluc3QgPSAnS1VMJztcclxuICAgICAgICAgICAgICBjb25maWcucGFyYW1zLnZpZCA9ICdLVUxldXZlbic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaHR0cENhbGxJbnRlcmNlcHRvcjtcclxuICAgIH1dKVxyXG4gICAgLmNvbmZpZyhbJyRodHRwUHJvdmlkZXInLCAoJGh0dHBQcm92aWRlcikgPT4ge1xyXG4gICAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdodHRwQ2FsbEludGVyY2VwdG9yJyk7XHJcbiAgICB9XSk7XHJcbn1cclxuKi9cclxuLypcclxuYW5ndWxhci5lbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0Q2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgcmV0dXJuIChmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnRbMF0ubm9kZU5hbWUgPT09ICdIVE1MJykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNsb3Nlc3QoZWxlbWVudC5wYXJlbnQoKSwgY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9KSh0aGlzLCBjbGFzc05hbWUpO1xyXG59O1xyXG5cclxuYW5ndWxhci5lbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0Tm9kZSA9IGZ1bmN0aW9uIChub2RlTmFtZSkge1xyXG4gIHJldHVybiAoZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBub2RlTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnRbMF0ubm9kZU5hbWUgPT09ICdIVE1MJykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudFswXS5ub2RlTmFtZSA9PSBub2RlTmFtZS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNsb3Nlc3QoZWxlbWVudC5wYXJlbnQoKSwgbm9kZU5hbWUpO1xyXG4gICAgfVxyXG4gIH0pKHRoaXMsIG5vZGVOYW1lKTtcclxufTtcclxuKi9cclxuIl19
