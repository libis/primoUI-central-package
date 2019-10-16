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

                        //openurl = requestACopyOfEsDocURL + "/32KUL_VLP?" + openurl + "&access_token=" + primoExploreJwt
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvb3MtYnJvd3NlcmlmeS9icm93c2VyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxDb25maWdMYW5ndWFnZVNlbGVjdGlvbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGF0YWJhc2VMaW5rLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxkZXByZWNhdGVkVmlld3MuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGRpYWxvZy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGlzY2xhaW1lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwZXJpbWVudC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwb3NlSnd0LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxyZW1vdmVBbGVydHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHJlbW92ZUNoZWNrTG9jYXRpb25zLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxzZWFyY2hUaXAuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHN0YXRpY0Zvb3Rlci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQXV0b1Byb21vdGVMb2dpblxcYXV0b1Byb21vdGVMb2dpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQnJpZWZSZXN1bHRBZnRlclxcYWx0bWV0cmljLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1CcmllZlJlc3VsdEFmdGVyXFxzb3VyY2VJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Db2xsZWN0aW9uR2FsbGVyeUhlYWRlckFmdGVyXFxleHBsb3JlU2VhcmNoQ29sbGVjdGlvbnNcXGluZGV4LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GYWNldEFmdGVyXFxmaWx0ZXJGYWNldFZhbHVlcy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRBZnRlclxcc2VhcmNoQWxzby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keUJpYi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keUdvb2dsZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keVdvcmxkY2F0LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GaW5lc092ZXJ2aWV3QWZ0ZXJcXHBheU15RmluZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUZ1bGxWaWV3QWZ0ZXJcXGFsdG1ldHJpY3NCYWRnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxiZXRhU3dpdGNoLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGhvbWVJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGxhbmd1YWdlRGVwZW5kZW50TG9nby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxuZXdTZWFyY2hCdXR0b24uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcdmlld0xvZ28uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybU1haW5NZW51QWZ0ZXJcXGZlZWRiYWNrLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1SZWNvbW1lbmRhdGlvbkl0ZW1BZnRlclxccmVjb21tZW5kYXRpb25JdGVtLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1SZXF1ZXN0c0FmdGVyXFxpbGxSZXF1ZXN0Rm9ybS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtU2VhcmNoUmVzdWx0QXZhaWxhYmlsaXR5TGluZUFmdGVyQ29udHJvbGxlclxcYnJvd3ppbmUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyXFxwbnhYbWwuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlcnZpY2VIZWFkZXJBZnRlclxccmVwb3J0QVByb2JsZW0uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlcnZpY2VIZWFkZXJBZnRlclxccmVxdWVzdEFDb3B5LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcXVlc3RBQ29weU9mRXNEb2MuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVRvcEJhckJlZm9yZVxcYW5ub3VuY2VtZW50cy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxmZWVkYmFja0Fubm91bmNlbWVudC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxmaW5lc01lc3NhZ2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcYWx0bWV0cmljc1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcYXBpQ2FsbEludGVyY2VwdG9yLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxmYWN0b3JpZXNcXGRiU2VhcmNoSHR0cENhbGxJbnRlcmNlcHRvci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkYmFja1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcbWVzc2FnZVNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcd2luZG93RXZlbnRMaXN0ZW5lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcbWFpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcaGVscGVyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFxmYWNldHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHJlY29yZHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHVzZXIuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHZpZXcuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xcdmVuZG9yXFxjc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFx0ZW1wbGF0ZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENF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RlY7QUFHQSx5QkFBUyxJQUhUO0FBSUEsOEJBQWM7QUFKZCxhQUFELEVBTUg7QUFDSSxvQkFBSSxvQ0FEUjtBQUVJLDBCQUFVLGlCQUZkO0FBR0kseUJBQVMsSUFIYjtBQUlJLDhCQUFjO0FBSmxCLGFBTkcsRUFZSDtBQUNJLG9CQUFJLDJDQURSO0FBRUksMEJBQVUsb0JBRmQ7QUFHSSx5QkFBUyxJQUhiO0FBSUksOEJBQWM7QUFKbEIsYUFaRyxFQWtCSDtBQUNJLG9CQUFJLHlEQURSO0FBRUksMEJBQVUsaUNBRmQ7QUFHSSx5QkFBUyxJQUhiO0FBSUksOEJBQWM7QUFKbEIsYUFsQkcsRUF3QkwsTUF4QkssQ0F3QkUsVUFBQyxRQUFEO0FBQUEsdUJBQWUsU0FBUyxPQUFULElBQW9CLElBQUksTUFBSixDQUFXLFNBQVMsWUFBcEIsRUFBa0MsSUFBbEMsQ0FBdUMsT0FBTyxTQUFQLENBQWlCLEdBQXhELENBQW5DO0FBQUEsYUF4QkYsQ0FBUDtBQXlCSDs7Ozs7O2tCQXJDZ0IsUzs7Ozs7QUNsQnJCOzs7Ozs7QUFNQSxPQUFPLFNBQVAsQ0FBaUIsV0FBakIsR0FBK0IsWUFBWTtBQUN6QyxTQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBb0IsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFBQSxXQUFhLElBQUksQ0FBSixHQUFRLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBWSxXQUFaLEtBQTRCLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBcEMsR0FBaUQsQ0FBOUQ7QUFBQSxHQUFwQixFQUFxRixJQUFyRixDQUEwRixFQUExRixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTtBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydHMuZW5kaWFubmVzcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdMRScgfTtcblxuZXhwb3J0cy5ob3N0bmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWVcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLmxvYWRhdmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9O1xuXG5leHBvcnRzLnVwdGltZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDAgfTtcblxuZXhwb3J0cy5mcmVlbWVtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xufTtcblxuZXhwb3J0cy50b3RhbG1lbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbn07XG5cbmV4cG9ydHMuY3B1cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH07XG5cbmV4cG9ydHMudHlwZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdCcm93c2VyJyB9O1xuXG5leHBvcnRzLnJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy5uZXR3b3JrSW50ZXJmYWNlc1xuPSBleHBvcnRzLmdldE5ldHdvcmtJbnRlcmZhY2VzXG49IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHt9IH07XG5cbmV4cG9ydHMuYXJjaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdqYXZhc2NyaXB0JyB9O1xuXG5leHBvcnRzLnBsYXRmb3JtID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ2Jyb3dzZXInIH07XG5cbmV4cG9ydHMudG1wZGlyID0gZXhwb3J0cy50bXBEaXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcvdG1wJztcbn07XG5cbmV4cG9ydHMuRU9MID0gJ1xcbic7XG4iLCIvKlxyXG4gIERlY2xhcmUgeW91ciBjb21wb25lbnRzIGhlcmUuXHJcblxyXG4gIFJld3JpdGUgdGhpcyB3aGVuIGltcG9ydHMgY2FuIGJlIGRvbmUgZHluYW1pY2FsbHlcclxuICBodHRwOi8vMmFsaXR5LmNvbS8yMDE3LzAxL2ltcG9ydC1vcGVyYXRvci5odG1sXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XHJcbiAgTWVobWV0IENlbGlrXHJcbiovXHJcbmltcG9ydCAnLi91dGlscydcclxuXHJcbi8qIGltcG9ydCB5b3VyIGNvbXBvbmVudCBjb25maWd1cmF0aW9uKi9cclxuaW1wb3J0IHtleHBlcmltZW50Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9leHBlcmltZW50J1xyXG5cclxuaW1wb3J0IHtob21lSWNvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9ob21lSWNvbidcclxuXHJcbmltcG9ydCB7bmV3U2VhcmNoQnV0dG9uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL25ld1NlYXJjaEJ1dHRvbidcclxuaW1wb3J0IHtsYW5ndWFnZURlcGVuZGVudExvZ29Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvbGFuZ3VhZ2VEZXBlbmRlbnRMb2dvJ1xyXG5pbXBvcnQge3ZpZXdMb2dvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL3ZpZXdMb2dvJ1xyXG5cclxuaW1wb3J0IHtzZWFyY2hDb2xsZWN0aW9uc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUNvbGxlY3Rpb25HYWxsZXJ5SGVhZGVyQWZ0ZXIvZXhwbG9yZVNlYXJjaENvbGxlY3Rpb25zJ1xyXG5cclxuaW1wb3J0IHtiZXRhU3dpdGNoQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL2JldGFTd2l0Y2gnXHJcbmltcG9ydCB7c291cmNlSWNvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUJyaWVmUmVzdWx0QWZ0ZXIvc291cmNlSWNvbidcclxuaW1wb3J0IHthbHRtZXRyaWNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1CcmllZlJlc3VsdEFmdGVyL2FsdG1ldHJpYydcclxuaW1wb3J0IHthbHRtZXRyaWNzQmFkZ2VDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GdWxsVmlld0FmdGVyL2FsdG1ldHJpY3NCYWRnZSdcclxuXHJcbmltcG9ydCB7cG54WG1sQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXIvcG54WG1sJ1xyXG5pbXBvcnQge3BheU15RmluZXNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GaW5lc092ZXJ2aWV3QWZ0ZXIvcGF5TXlGaW5lcydcclxuaW1wb3J0IHtmZWVkYmFja0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybU1haW5NZW51QWZ0ZXIvZmVlZGJhY2snXHJcbmltcG9ydCB7c2VhcmNoVGlwQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9zZWFyY2hUaXAnXHJcbmltcG9ydCB7ZGlzY2xhaW1lckNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvZGlzY2xhaW1lcidcclxuXHJcbmltcG9ydCB7ZXhwb3NlSnd0Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9leHBvc2VKd3QnXHJcblxyXG5pbXBvcnQge0xhbmd1YWdlU2VsZWN0aW9uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9Db25maWdMYW5ndWFnZVNlbGVjdGlvbidcclxuaW1wb3J0IHtEZXByZWNhdGVkVmlld3NDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2RlcHJlY2F0ZWRWaWV3cydcclxuXHJcbmltcG9ydCB7cmVwb3J0QVByb2JsZW1Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZXJ2aWNlSGVhZGVyQWZ0ZXIvcmVwb3J0QVByb2JsZW0nXHJcbmltcG9ydCB7cmVxdWVzdEFDb3B5Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VydmljZUhlYWRlckFmdGVyL3JlcXVlc3RBQ29weSdcclxuaW1wb3J0IHtyZXF1ZXN0QUNvcHlPZkVzRG9jQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VydmljZUhlYWRlckFmdGVyL3JlcXVlc3RBQ29weU9mRXNEb2MnXHJcblxyXG5pbXBvcnQge2ZpbmVzTWVzc2FnZUNvbmZpZyBhcyBwYXlNeUZpbmVzTWVzc2FnZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9maW5lc01lc3NhZ2UnXHJcbmltcG9ydCB7YW5ub3VuY2VtZW50c0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9hbm5vdW5jZW1lbnRzJ1xyXG5pbXBvcnQge2F1dG9Mb2dpbkNoZWNrYm94Q29uZmlnLGF1dG9Mb2dpbkNvbmZpZyxwcm9tb3RlTG9naW5Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1BdXRvUHJvbW90ZUxvZ2luL2F1dG9Qcm9tb3RlTG9naW4nXHJcblxyXG5pbXBvcnQge2ZlZWRiYWNrQW5ub3VuY2VtZW50Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2ZlZWRiYWNrQW5ub3VuY2VtZW50J1xyXG5pbXBvcnQge3N0YXRpY0Zvb3RlckNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvc3RhdGljRm9vdGVyJ1xyXG5pbXBvcnQge3JlbW92ZUFsZXJ0c0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvcmVtb3ZlQWxlcnRzJ1xyXG5pbXBvcnQge3JlbW92ZUNoZWNrTG9jYXRpb25zQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9yZW1vdmVDaGVja0xvY2F0aW9ucydcclxuaW1wb3J0IHtpbGxSZXF1ZXN0Rm9ybUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVJlcXVlc3RzQWZ0ZXIvaWxsUmVxdWVzdEZvcm0nXHJcbmltcG9ydCB7cmVjb21tZW5kYXRpb25JdGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtUmVjb21tZW5kYXRpb25JdGVtQWZ0ZXIvcmVjb21tZW5kYXRpb25JdGVtJ1xyXG5cclxuaW1wb3J0IHtkYXRhYmFzZUxpbmtDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2RhdGFiYXNlTGluaydcclxuLy9pbXBvcnQge3JlbW92ZU9wZW5BY2Nlc3NDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GYWNldEFmdGVyL3JlbW92ZU9wZW5BY2Nlc3MnXHJcblxyXG5pbXBvcnQge3NlYXJjaEFsc29Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GYWNldEFmdGVyL3NlYXJjaEFsc28nXHJcbmltcG9ydCB7c2VhcmNoQWxzb0JvZHlDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GYWNldEV4YWN0QWZ0ZXIvc2VhcmNoQWxzb0JvZHknXHJcbmltcG9ydCB7c2VhcmNoQWxzb0JvZHlCaWJDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GYWNldEV4YWN0QWZ0ZXIvc2VhcmNoQWxzb0JvZHlCaWInXHJcbmltcG9ydCB7c2VhcmNoQWxzb0JvZHlHb29nbGVDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GYWNldEV4YWN0QWZ0ZXIvc2VhcmNoQWxzb0JvZHlHb29nbGUnXHJcbmltcG9ydCB7c2VhcmNoQWxzb0JvZHlXb3JsZGNhdENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZhY2V0RXhhY3RBZnRlci9zZWFyY2hBbHNvQm9keVdvcmxkY2F0J1xyXG5cclxuaW1wb3J0IHticm93emluZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdEF2YWlsYWJpbGl0eUxpbmVBZnRlckNvbnRyb2xsZXIvYnJvd3ppbmUnXHJcblxyXG5pbXBvcnQge2ZpbHRlckZhY2V0VmFsdWVzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9maWx0ZXJGYWNldFZhbHVlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmdGVyQ29tcG9uZW50cyB7XHJcblxyXG4gIHN0YXRpYyBnZXQgYWxsKCkge1xyXG4gICAgLypcclxuICAgICAgbmFtZSA9IHRoZSBzdWIgZWxlbWVudCBpbiB0aGUgYWZ0ZXIgZWxlbWVudFxyXG4gICAgICBjb25maWcgPSB0aGUgaW1wb3J0ZWQgY29uZmlndXJhdGlvbiBvYmplY3RcclxuICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxyXG4gICAgICBhcHBlbmRUbyA9IFRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gdGhpcyBhZnRlciBjb21wb25lbnQuXHJcblxyXG4gICAgICBleC4ge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ31cclxuICAgICAgcmVzdWx0cyBpbjpcclxuICAgICAgICA8cHJtLWxvZ28tYWZ0ZXIgcGFyZW50Q3RybD0nJGN0cmwnPlxyXG4gICAgICAgICAgPGhvbWUtaWNvbiBwYXJlbnRDdHJsPSckY3RybCc+PC9ob21lLWljb24+XHJcbiAgICAgICAgPC9wcm0tbG9nby1hZnRlcj5cclxuICAgICovXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7bmFtZTogJ2xpYmlzLWV4cGVyaW1lbnQnLCBjb25maWc6IGV4cGVyaW1lbnRDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1tZXNzYWdlcy1hbmQtYmxvY2tzLW92ZXJ2aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcnfSxcclxuICAgICAge25hbWU6ICdiZXRhLXN3aXRjaCcsIGNvbmZpZzogYmV0YVN3aXRjaENvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG5cclxuICAgICAge25hbWU6ICdsYW5ndWFnZS1kZXBlbmRlbnQtbG9nbycsIGNvbmZpZzogbGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuXHJcbiAgICAgIHtuYW1lOiAndmlldy1sb2dvJywgY29uZmlnOiB2aWV3TG9nb0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3NvdXJjZS1pY29uJywgY29uZmlnOiBzb3VyY2VJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hTGlyaWFzKSd9LFxyXG4gICAgICB7bmFtZTogJ2FsdG1ldHJpYycsIGNvbmZpZzogYWx0bWV0cmljQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeTGlyaWFzfF5LVUxldXZlbnxeVkRJQ3xeVUNMTHxeVE1PUkVBTXxeVE1PUkVLfF5TRVJWfF5OQkInfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnYWx0bWV0cmljcy1iYWRnZScsIGNvbmZpZzogYWx0bWV0cmljc0JhZGdlQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mdWxsLXZpZXctYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeTGlyaWFzfF5LVUxldXZlbnxeVkRJQ3xeVUNMTHxeVE1PUkVBTXxeVE1PUkVLfF5TRVJWfF5OQkInfSxcclxuXHJcbiAgICAgIHtuYW1lOiAncG54LXhtbCcsIGNvbmZpZzogcG54WG1sQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtY29udGFpbmVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdwYXktbXktZmluZXMnLCBjb25maWc6IHBheU15RmluZXNDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZpbmVzLW92ZXJ2aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdmZWVkYmFjaycsIGNvbmZpZzogZmVlZGJhY2tDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcbiAgICAgIHtuYW1lOiAnbGFuZ3VhZ2Utc2VsZWN0aW9uJywgY29uZmlnOiBMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbWFpbi1tZW51LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuICAgICAge25hbWU6ICdkZXByZWNhdGVkLXZpZHMnLCBjb25maWc6IERlcHJlY2F0ZWRWaWV3c0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbWFpbi1tZW51LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuICAgICAgXHJcbiAgICAgIHtuYW1lOiAnbmV3LXNlYXJjaC1idXR0b24nLCBjb25maWc6IG5ld1NlYXJjaEJ1dHRvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLW5hdi1iYXItbGlua3MtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG4gICAgICB7bmFtZTogJ3JlcG9ydC1hLXByb2JsZW0nLCBjb25maWc6IHJlcG9ydEFQcm9ibGVtQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1zZXJ2aWNlLWhlYWRlci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIFxyXG4gICAgICB7bmFtZTogJ3JlcXVlc3QtYS1jb3B5LWhlYWQnLCBjb25maWc6IHJlcXVlc3RBQ29weUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VydmljZS1oZWFkZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeTGlyaWFzJ30sXHJcbiAgICAgIC8ve25hbWU6ICdyZXF1ZXN0LWEtY29weScsIGNvbmZpZzogcmVxdWVzdEFDb3B5Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeTGlyaWFzJ30sXHJcbiAgICAgIHtuYW1lOiAncmVxdWVzdC1hLWNvcHktZXMtZG9jJywgY29uZmlnOiByZXF1ZXN0QUNvcHlPZkVzRG9jQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeVkxQJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3VzZXItand0JywgY29uZmlnOiBleHBvc2VKd3RDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcicsIGVuYWJsZUluVmlldzogJ15WTFB8XkVDQid9LFxyXG5cclxuICAgICAge25hbWU6ICdwcm0tc2VhcmNodGlwcycsIGNvbmZpZzogc2VhcmNoVGlwQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdwcm0tZGlzY2xhaW1lcicsIGNvbmZpZzogZGlzY2xhaW1lckNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGwsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnc3RhdGljLWZvb3RlcicsIGNvbmZpZzogc3RhdGljRm9vdGVyQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1leHBsb3JlLWZvb3Rlci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIC8ve25hbWU6ICdzdGF0aWMtZm9vdGVyLWFjY291bnQnLCBjb25maWc6IHN0YXRpY0Zvb3RlckNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYWNjb3VudC1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncmVtb3ZlLWFsZXJ0cycsIGNvbmZpZzogcmVtb3ZlQWxlcnRzQ29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tYWRkLXF1ZXJ5LXRvLXNhdmVkLXNlYXJjaGVzLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdyZW1vdmUtY2hlY2stbG9jYXRpb25zJywgY29uZmlnOiByZW1vdmVDaGVja0xvY2F0aW9uc0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLXNlYXJjaC1yZXN1bHQtYXZhaWxhYmlsaXR5LWxpbmUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdMaXJpYXMnfSxcclxuICAgICAge25hbWU6ICdwcm0tZGJsaW5rJywgY29uZmlnOiBkYXRhYmFzZUxpbmtDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuXHJcbiAgICAgIC8qIGxicy1jb21wb25lbnRzIHVzZWQgaW4gaHRtbC10ZW1wbGF0ZXMgb2YgdGhlIHBhY2thZ2UgKi9cclxuICAgICAge25hbWU6ICdhdXRvLWxvZ2luLXN0YXRpYy1mb290ZXInLCBjb25maWc6IGF1dG9Mb2dpbkNoZWNrYm94Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ2xicy1wcm9tb3RlLWxvZ2luJywgZW5hYmxlSW5WaWV3OiAgJ15LVUxldXZlbiQnfSxcclxuICAgICAge25hbWU6ICdwcm9tb3RlLWxvZ2luJywgY29uZmlnOiBwcm9tb3RlTG9naW5Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWF1dGhlbnRpY2F0aW9uLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAgJ15LVUxldXZlbiQnfSxcclxuICAgICAge25hbWU6ICdhdXRvLWxvZ2luJywgY29uZmlnOiBhdXRvTG9naW5Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWF1dGhlbnRpY2F0aW9uLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAgJ0tVTGV1dmVuX0xVQ0F8S1VMZXV2ZW5fT0RJU0VFfEtVTGV1dmVuX1RNT1JFS3xLVUxldXZlbl9UTU9SRU18S1VMZXV2ZW5fVUNMTCd9LFxyXG5cclxuICAgICAge25hbWU6ICdpbGwtcmVxdWVzdC1mb3JtLW92ZXJ2aWV3JywgY29uZmlnOiBpbGxSZXF1ZXN0Rm9ybUNvbmZpZywgZW5hYmxlZDpmYWxzZSwgYXBwZW5kVG86ICdwcm0tcmVxdWVzdHMtb3ZlcnZpZXctYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ2lsbC1yZXF1ZXN0LWZvcm0nLCBjb25maWc6IGlsbFJlcXVlc3RGb3JtQ29uZmlnLCBlbmFibGVkOmZhbHNlLCBhcHBlbmRUbzogJ3BybS1yZXF1ZXN0cy1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbnxeVklWRVMnfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnYW5ub3VuY2VtZW50LWZlZWRiYWNrJywgY29uZmlnOiBmZWVkYmFja0Fubm91bmNlbWVudENvbmZpZywgZW5hYmxlZDpmYWxzZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG5cclxuICAgICAge25hbWU6ICdvdmVycmlkZS1nZXRsaW5rLXJlY29tbWVuZGF0aW9uJywgY29uZmlnOiByZWNvbW1lbmRhdGlvbkl0ZW1Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXJlY29tZW5kYXRpb24taXRlbS1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2Fubm91bmNlbWVudCcsIGNvbmZpZzogYW5ub3VuY2VtZW50c0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3BheS1teS1maW5lcy1tZXNzYWdlJywgY29uZmlnOiBwYXlNeUZpbmVzTWVzc2FnZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW4nfSxcclxuICAgICAvLyAge25hbWU6ICdyZW1vdmUtb3Blbi1hY2Nlc3MnLCBjb25maWc6IHJlbW92ZU9wZW5BY2Nlc3NDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAge25hbWU6ICdzZWFyY2gtYWxzbycsIGNvbmZpZzogc2VhcmNoQWxzb0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZmFjZXQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW58XlZJVkVTfF5PRElTRUV8XkZBUk98XlRNT1JFS3xeVE1PUkVNQXxeVUNMTCd9LFxyXG4gICAgIHtuYW1lOiAnc2VhcmNoLWFsc28tYm9keScsIGNvbmZpZzogc2VhcmNoQWxzb0JvZHlDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWV4YWN0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVufF5WSVZFU3xeT0RJU0VFfF5GQVJPJ30sXHJcbiAgICAge25hbWU6ICdzZWFyY2gtYWxzby1ib2R5LWJpYicsIGNvbmZpZzogc2VhcmNoQWxzb0JvZHlCaWJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWV4YWN0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXlZJVkVTfF5PRElTRUV8XkZBUk98XlRNT1JFS3xeVE1PUkVNQXxeVUNMTCd9LFxyXG4gICAgIHtuYW1lOiAnc2VhcmNoLWFsc28tYm9keS1nb29nbGUnLCBjb25maWc6IHNlYXJjaEFsc29Cb2R5R29vZ2xlQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15PRElTRUV8XkZBUk98XlRNT1JFS3xeVE1PUkVNQXxeVUNMTCd9LFxyXG4gICAgIHtuYW1lOiAnc2VhcmNoLWFsc28tYm9keS13b3JsZGNhdCcsIGNvbmZpZzogc2VhcmNoQWxzb0JvZHlXb3JsZGNhdENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZmFjZXQtZXhhY3QtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW4nfSxcclxuXHJcbiAgICAge25hbWU6ICdicm93emluZScsIGNvbmZpZzogYnJvd3ppbmVDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXNlYXJjaC1yZXN1bHQtYXZhaWxhYmlsaXR5LWxpbmUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW58XkVDQid9LFxyXG4gICAgIFxyXG4gICAgIHtuYW1lOiAnZmlsdGVyLWZhY2V0LXZhbHVlcycsIGNvbmZpZzogZmlsdGVyRmFjZXRWYWx1ZXNDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkpFU1VJVFMnfSxcclxuXHJcbiAgICAge25hbWU6ICdzZWFyY2gtY29sbGVjdGlvbnMnLCBjb25maWc6IHNlYXJjaENvbGxlY3Rpb25zQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1jb2xsZWN0aW9uLWdhbGxlcnktaGVhZGVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVuJ31cclxuICAgIF0uZmlsdGVyKCAoY29tcG9uZW50KSA9PiAoIGNvbXBvbmVudC5lbmFibGVkICYmIG5ldyBSZWdFeHAoY29tcG9uZW50LmVuYWJsZUluVmlldykudGVzdCh3aW5kb3cuYXBwQ29uZmlnLnZpZCkgKSApO1xyXG4gIH1cclxufVxyXG4iLCJcclxuY2xhc3MgTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWdDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIG9ubHlzaG93X2ZyX0ZSX2luX3ZpZCA9IFsnQUNWJywgJ0JQQicsICdGQVJPJywgJ0ZPREZJTicsICdLQkMnLCAnUkJJTlMnLCAnUk1DQScsICdLTUtHJywgJ0xJQkFSJywgJ05CQicsICdPRk8nLCAnVkRJQyddO1xyXG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmltby1leHBsb3JlJykpO1xyXG4gICAgICAgIGlmICghIG9ubHlzaG93X2ZyX0ZSX2luX3ZpZC5pbmNsdWRlcyggd2luZG93LmFwcENvbmZpZy52aWQgICkgKSB7XHJcbiAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZCggXCI8c3R5bGU+cHJtLWxhbmd1YWdlLXNlbGVjdGlvbiBtZC1saXN0LWl0ZW1bdmFsdWU9J2ZyX0ZSJ117ZGlzcGxheTpub25lIWltcG9ydGFudDt9PC9zdHlsZT5cIiApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkxhbmd1YWdlU2VsZWN0aW9uQ29uZmlnQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXVxyXG5cclxuZXhwb3J0IGxldCBMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWdDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG59XHJcbiIsImltcG9ydCBkYXRhYmFzZUxpbmtIVE1MIGZyb20gJy4vZGF0YWJhc2VMaW5rLmh0bWwnXHJcblxyXG5jbGFzcyBEYXRhYmFzZUxpbmtDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICRzY29wZS50aXRsZSA9ICdkYXRhYmFzZXMnO1xyXG4gICAgJHNjb3BlLnRpdGxlX2xhYmVsID0gJ3NlYXJjaCBkYXRhYmFzZXMnO1xyXG4gICAgJHNjb3BlLmRhdGFiYXNlTGluayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS1kYXRhYmFzZVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwpXHJcblxyXG4gICAgICAgIHZhciBkYXRhYmFzZUZhY2V0ID0ge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjpcInJ0eXBlXCIsXHJcbiAgICAgICAgICAgIFwidHlwZVwiOlwiaW5jbHVkZVwiLFxyXG4gICAgICAgICAgICBcInZhbHVlXCI6XCJkYXRhYmFzZXNcIixcclxuICAgICAgICAgICAgXCJkaXNwbGF5VmFsdWVcIjpcImRhdGFiYXNlc1wiLFxyXG4gICAgICAgICAgICBcImRpc3BsYXllZFR5cGVcIjpcImV4YWN0XCIsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjpcIkRhdGFiYW5rZW5cIixcclxuICAgICAgICAgICAgXCJpc011bHRpRmFjZXRcIjpmYWxzZSxcclxuICAgICAgICAgICAgXCJ0b29sdGlwXCI6XCJWZXJ3aWpkZXIgVHlwZSBicm9uIERhdGFiYW5rZW5cIixcclxuICAgICAgICAgICAgXCIkJGhhc2hLZXlcIjpcIm9iamVjdDoyODA4XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFN0YXRlU2VydmljZS5zZWFyY2hPYmplY3QgKVxyXG5cclxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4gICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tZWhtZXRjL3ByaW1vLWV4cGxvcmUtY29sbGVjdGlvbi12aWV3ZXIvYmxvYi9tYXN0ZXIvanMvbmctcHJpbW8uanNcclxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLnNldFNvcnRCeSgndGl0bGUnKTtcclxuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLmZhY2V0U2VydmljZS5hZGRTdGlja3lGYWNldChkYXRhYmFzZUZhY2V0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyggJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU3RhdGVTZXJ2aWNlLnNlYXJjaE9iamVjdCApXHJcbiAgICAgICAgJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU2VydmljZS5zZWFyY2goKTtcclxuLypcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwic3RpY2t5RmFjZXRzXCIsXHJcbiAgICAgICAnW3tcIm5hbWVcIjpcInJ0eXBlXCIsXCJ0eXBlXCI6XCJpbmNsdWRlXCIsXCJ2YWx1ZVwiOlwiZGF0YWJhc2VzXCIsXCJkaXNwbGF5VmFsdWVcIjpcImRhdGFiYXNlc1wiLFwiZGlzcGxheWVkVHlwZVwiOlwiZXhhY3RcIixcImxhYmVsXCI6XCJEYXRhYmFua2VuXCIsXCJpc011bHRpRmFjZXRcIjpmYWxzZSxcInRvb2x0aXBcIjpcIlZlcndpamRlciBUeXBlIGJyb24gRGF0YWJhbmtlblwiLFwiJCRoYXNoS2V5XCI6XCJvYmplY3Q6MjgwOFwiLFwicGVyc2lzdGVudFwiOnRydWUsXCJvcGVyYXRpb25cIjpcImFkZFwifV0nKTtcclxuICAgICAgICovXHJcbiAgICAgLy8gICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDMvcHJpbW8tZXhwbG9yZS9zZWFyY2g/cXVlcnk9YW55LGNvbnRhaW5zLGRhdGFiYXNlcyZ0YWI9YWxsX2NvbnRlbnRfdGFiJnNlYXJjaF9zY29wZT1BTExfQ09OVEVOVCZcIlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuRGF0YWJhc2VMaW5rQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJ11cclxuXHJcbmV4cG9ydCBsZXQgZGF0YWJhc2VMaW5rQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IERhdGFiYXNlTGlua0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGRhdGFiYXNlTGlua0hUTUxcclxufVxyXG4iLCJcclxuY2xhc3MgRGVwcmVjYXRlZFZpZXdzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHZhciBkZXByZWNhdGVkX3ZpZHMgPSBbJ1VDTExfTElNQlVSRycsJ1VDTExfTEVVVkVOJywnS1VMZXV2ZW5fVVgnXTtcclxuICAgICAgICBsZXQgcGFyZW50RWwgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJpbW8tZXhwbG9yZScpKTtcclxuICAgICAgICBpZiAoIGRlcHJlY2F0ZWRfdmlkcy5pbmNsdWRlcyggd2luZG93LmFwcENvbmZpZy52aWQgICkgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIlRoaXMgaXMgYW4gb2xkIHZpZXcgISEhIVwiKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSAoIFwiaHR0cHM6Ly9cIitkb2N1bWVudC5sb2NhdGlvbi5ob3N0IClcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5EZXByZWNhdGVkVmlld3NDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddXHJcblxyXG5leHBvcnQgbGV0IERlcHJlY2F0ZWRWaWV3c0NvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogRGVwcmVjYXRlZFZpZXdzQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnJyxcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwLCAkdHJhbnNsYXRlLCBmZWVkYmFja1NlcnZpY2VVUkwsIE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5tZERpYWxvZyA9ICRtZERpYWxvZztcclxuICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgdGhpcy5odHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCA9IGZlZWRiYWNrU2VydmljZVVSTDtcclxuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuXHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgJHNjb3BlLmNhbmNlbEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLm1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5zZW5kRmVlZGJhY2sgPSB0aGlzLnNlbmRGZWVkYmFjaztcclxuICAgICRzY29wZS5zZW5kRmVlZGJhY2sgPSAoYW5zd2VyKSA9PiB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHN1YmplY3Q6ICRzY29wZS5mZWVkYmFjay5zdWJqZWN0LFxyXG4gICAgICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcclxuICAgICAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXHJcbiAgICAgICAgICAgIGxvZ2dlZEluOiBzZWxmLnVzZXIuaXNMb2dnZWRJbigpLFxyXG4gICAgICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgdHlwZTogJ2ZlZWRiYWNrJyxcclxuICAgICAgICAgICAgZmVlZGJhY2s6ICRzY29wZS5mZWVkYmFjay5tZXNzYWdlLFxyXG4gICAgICAgICAgICBlbWFpbDogJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8ubGVuZ3RoID4gMCAmJiAkc2NvcGUuZmVlZGJhY2subWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNlbGYubWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5odHRwKHtcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICB1cmw6IHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnKTtcclxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJztcclxuICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJyk7XHJcbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLmZhaWwnKSB8fCAnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nO1xyXG4gICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgICRzY29wZS5mZWVkYmFjayA9IHtcclxuICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgc3ViamVjdDogJ2ZlZWRiYWNrJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5EaWFsb2dDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJGh0dHAnLCAnJHRyYW5zbGF0ZScsICdmZWVkYmFja1NlcnZpY2VVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuIiwiaW1wb3J0IGRpc2NsYWltZXJEaWFsb2dIVE1MIGZyb20gJy4uLy4uLy4uL2h0bWwvdGVtcGxhdGVzL2Rpc2NsYWltZXJEaWFsb2cuaHRtbCdcclxuaW1wb3J0IGNvb2tpZVBvbGljeURpYWxvZ0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9lbl9VUy5odG1sJ1xyXG5pbXBvcnQgZGlzY2xhaW1lckRpYWxvZ19mckZSX0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9lbl9VUy5odG1sJ1xyXG5pbXBvcnQgZGlzY2xhaW1lckRpYWxvZ19ubEJFX0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9ubF9CRS5odG1sJ1xyXG5pbXBvcnQgZGlzY2xhaW1lckRpYWxvZ19lblVTX0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9lbl9VUy5odG1sJ1xyXG5cclxuaW1wb3J0IGRpc2NsYWltZXJMaW5rSFRNTCBmcm9tICdkaXNjbGFpbWVyLmh0bWwnXHJcblxyXG5jbGFzcyBkaXNjbGFpbWVyQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJG1kRGlhbG9nKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuXHJcbiAgICAgIGxldCBsb2NhbGVfdGV4dCA9IHtcclxuICAgICAgICAnbmxfQkUnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQ29va2llYmVsZWlkJyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQ29va2llYmVsZWlkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgICdlbl9VUyc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdDb29raWUgUG9saWN5JyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQ29va2llIFBvbGljeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZnJfRlInOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQ29va2llIFBvbGljeScsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIkNvb2tpZSBQb2xpY3lcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuXHJcbi8qIFRvZG8gUmVmYWN0b3J5IGRpc2NsYWltZXJEaWFsb2cgLyBjb29raWVQb2xpY3kgPz8/ICovXHJcbi8vICAgIGxldCBkaXNjbGFpbWVyRGlhbG9nID0gZGlzY2xhaW1lckRpYWxvZ0hUTUw7IFxyXG4gICAgICBsZXQgZGlzY2xhaW1lckRpYWxvZyA9IGNvb2tpZVBvbGljeURpYWxvZ0hUTUw7XHJcbiAgICAgIHN3aXRjaCAobG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZnJfRlInOlxyXG4gICAgICAgIGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nX2ZyRlJfSFRNTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25sX0JFJzpcclxuICAgICAgICBkaXNjbGFpbWVyRGlhbG9nID0gZGlzY2xhaW1lckRpYWxvZ19ubEJFX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nX2VuVVNfSFRNTDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJHNjb3BlLnRpdGxlID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGUnXTtcclxuICAgICAgJHNjb3BlLnRpdGxlX2xhYmVsID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGVfbGFiZWwnXTtcclxuXHJcbiAgICAgICRzY29wZS5zaG93RGlzY2xhaW1lckRpYWxvZyA9IGZ1bmN0aW9uKCRldmVudCkge1xyXG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudEVsLFxyXG4gICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgIHRlbXBsYXRlOiBkaXNjbGFpbWVyRGlhbG9nLFxyXG4gICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAkc2NvcGUuaXRlbXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIERpYWxvZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2csIGl0ZW1zKSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5kaXNjbGFpbWVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJ11cclxuXHJcbmV4cG9ydCBsZXQgZGlzY2xhaW1lckNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBkaXNjbGFpbWVyQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogZGlzY2xhaW1lckxpbmtIVE1MXHJcbn0iLCIvKiBjb21wb25lbnQgdG8gZG8gYWxsIHlvdXIgZXhwZXJpbWVudGFsIHN0dWZmICovXHJcbi8qIFtlbnxkaXNdYWJsZSBpbiBjb21wb25lbnRzKi9cclxuXHJcbmNsYXNzIEV4cGVyaW1lbnRDb250cm9sbGVyIHtcclxuIFxyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsJHRlbXBsYXRlQ2FjaGUsICRjb21waWxlLCRpbmplY3Rvciwkcm9vdFNjb3BlLCR0cmFuc2xhdGUsICR3aW5kb3cpIHtcclxuICAgIGNvbnNvbGUubG9nKCdFeHBlcmltZW50OicpO1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgdGhpcy4kdGVtcGxhdGVDYWNoZSA9ICR0ZW1wbGF0ZUNhY2hlO1xyXG4gICAgdGhpcy4kY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgdGhpcy53aW5kb3cgPSAkd2luZG93O1xyXG4gICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJyc7IFxyXG5cclxuICAgIGNvbnNvbGUubG9nKHNlbGYpXHJcbiAgICBjb25zb2xlLmxvZygncm9vdFNjb3BlOicpXHJcbiAgICBjb25zb2xlLmxvZygkcm9vdFNjb3BlKVxyXG4gICAgY29uc29sZS5sb2coJ3RlbXBsYXRlQ2FjaGUnKVxyXG4gICAgY29uc29sZS5sb2coJHRlbXBsYXRlQ2FjaGUpICAgXHJcbiAgICB2YXIgdGVtcGxhdGUgPSAkdGVtcGxhdGVDYWNoZS5nZXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnKTtcclxuICAgIC8vIHZhciB0ZW1wbGF0ZSA9IHRlbXBsYXRlICsgXCI8SDEgaWQ9J29tdGVsYWNodGVuJz5MQUxBTEE8aWxsLXJlcXVlc3QtZm9ybS1vdmVydmlldz48L2lsbC1yZXF1ZXN0LWZvcm0tb3ZlcnZpZXc+PC9IMT5cIjtcclxuICAgIHZhciB0ZW1wbGF0ZSA9IHRlbXBsYXRlICsgXCI8SDEgaWQ9J29tdGVsYWNodGVuJz5MQUxBTEE8L0gxPlwiO1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL2FjY291bnQvb3ZlcnZpZXcvcmVxdWVzdHNPdmVydmlldy9yZXF1ZXN0cy1vdmVydmlldy5odG1sJywgdGVtcGxhdGUpO1xyXG4gICAgY29uc29sZS5sb2coJHRlbXBsYXRlQ2FjaGUuZ2V0KCdjb21wb25lbnRzL2FjY291bnQvb3ZlcnZpZXcvcmVxdWVzdHNPdmVydmlldy9yZXF1ZXN0cy1vdmVydmlldy5odG1sJykpXHJcbn07XHJcblxyXG4gIHRvSWxsUmVxdWVzdFVybCgpIHtcclxuICAgICAgdmFyIGluc3RpdHV0aW9uQ29kZSA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnJlcXVlc3RzU2VydmljZS5hY2NvdW50U2VydmljZS5saW5rZWRVc2VyU2VsZWN0b3JTZXJ2aWNlLnNlbGVjdGVkSW5zdGl0dXRpb24uaW5zdGl0dXRpb25Db2RlO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdpbnN0aXR1dGlvbkNvZGU6JyArIGluc3RpdHV0aW9uQ29kZSlcclxuICAgICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJ2h0dHBzOi8vbGV1dmVuLXByaW1vLmhvc3RlZC5leGxpYnJpc2dyb3VwLmNvbS9wZHM/ZnVuYz1zc28mdXJsPWh0dHA6Ly9ldS5hbG1hLmV4bGlicmlzZ3JvdXAuY29tL3ZpZXcvdXJlc29sdmVyLycrIGluc3RpdHV0aW9uQ29kZSArJy9vcGVudXJsP3N2Y19kYXQ9Z2V0aXQmc3ZjLnByb2ZpbGU9Z2V0aXQmZGlyZWN0UmVzb3VyY2VTaGFyaW5nUmVxdWVzdD10cnVlJm5ld1VJPXRydWUnXHJcbiAgICAgIHRoaXMud2luZG93Lm9wZW4odGhpcy5pbGxSZXF1ZXN0VXJsLCAnX2ZyZWVJbGwnKTtcclxuICB9O1xyXG4gICAgXHJcbiAgJG9uSW5pdCgpIHsgIFxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyAoJ25ld0VsZW1lbnQ6JylcclxuICAvLyAgY29uc29sZS5sb2cgKGFuZ3VsYXIuZWxlbWVudCggJyNvbXRlbGFjaHRlbicpLmxlbmd0aClcclxuICAgLy8gaWYgKCBhbmd1bGFyLmVsZW1lbnQoICdIMScpLmxlbmd0aCA9PSAwICkge1xyXG4gICAgICBjb25zb2xlLmxvZyAoJ1xcJ3QgSXMgbmkgb20gdGUgbGFjaHRlbicpXHJcbiAgICAgICB2YXIgZWxlbWVudE5hbWUgPSAncHJtLXJlcXVlc3RzLW92ZXJ2aWV3J1xyXG4gICAgICAgLy9sZXQgZWxlbWVudCA9ICRlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxyXG4gICAgICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50TmFtZSkpO1xyXG4gICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgbGV0IGVsZW1lbnRTY29wZSA9IGVsZW1lbnQuc2NvcGUoKTtcclxuICAgICAgICAgY29uc29sZS5sb2cgKGVsZW1lbnRTY29wZSlcclxuICAgICAgICAgdGhpcy4kY29tcGlsZShlbGVtZW50KShlbGVtZW50U2NvcGUpO1xyXG4gICAgICAgICAvL2VsZW1lbnRTY29wZS4kYXBwbHkoKVxyXG4gICAgICAgfSAgICAgXHJcbiAgLy8gICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkV4cGVyaW1lbnRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICAnJHRlbXBsYXRlQ2FjaGUnLCAnJGNvbXBpbGUnLCckaW5qZWN0b3InLCckcm9vdFNjb3BlJywnJHRyYW5zbGF0ZScsICckd2luZG93J11cclxuXHJcbmV4cG9ydCBsZXQgZXhwZXJpbWVudENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBFeHBlcmltZW50Q29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJjbGFzcyBleHBvc2VKd3RDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKFdpbmRvd0V2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5XaW5kb3dFdmVudExpc3RlbmVyID0gV2luZG93RXZlbnRMaXN0ZW5lcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3NlSnd0Q29udHJvbGxlci4kaW5qZWN0ID0gWydXaW5kb3dFdmVudExpc3RlbmVyJ107XHJcblxyXG5cclxuZXhwb3J0IGxldCBleHBvc2VKd3RDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IGV4cG9zZUp3dENvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJydcclxufSIsIlxyXG5jbGFzcyBSZW1vdmVBbGVydHNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICAkdHJhbnNsYXRlLCAkZWxlbWVudCwgJHRlbXBsYXRlQ2FjaGUpIHtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB2YXIgbG9jYWxlID0gXCJlbl9VU1wiXHJcbiAgICAgICAgbG9jYWxlID0gc2NvcGUuJHJvb3QuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL3NhdmVkUXVlcmllcy9hZGRBbGVydFRvYXN0L2FkZC1hbGVydC10b2FzdC5odG1sJyxgXHJcbiAgICAgICAgPG1kLXRvYXN0IG5nLWNsYXNzPVwie1xcJ21vYmlsZS1kZWZpbmVcXCc6JGN0cmwuZGV0ZWN0TW9iaWxlKCksXFwnbGF5b3V0LWNvbHVtblxcJzokY3RybC5kZXRlY3RNb2JpbGUoKX1cIiBjbGFzcz1cIm1kLXRvYXN0LWNvbnRlbnRcIj5cclxuICAgIDxkaXYgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibWQtdG9hc3QtY29udGVudFwiIG5nLWNsYXNzPVwie1xcJ2VuZC1jb250ZW50XFwnOiEkY3RybC5kZXRlY3RNb2JpbGUoKX1cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1kLXRvYXN0LXRleHRcIj5cclxuICAgICAgICAgICAgPHNwYW4gbmctaWY9XCIhJGN0cmwuYWRkTW9kZVwiIHRyYW5zbGF0ZT1cIm51aS5mYXZvcml0ZXMuc2VhcmNoLmFsZXJ0Lm1lc3NhZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIG5nLWlmPVwiJGN0cmwuYWRkTW9kZVwiIHRyYW5zbGF0ZT1cIm51aS5zYXZlc2VhcmNoLm1lc3NhZ2UuZGVzY3JpcHRpb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgbmctaWY9XCIhJGN0cmwuYWRkTW9kZVwiPnt7JGN0cmwuZW1haWx9fTwvc3Ryb25nPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJzdGFydCBzdGFydFwiIGNsYXNzPVwibWQtdG9hc3QtY29udGVudFwiIG5nLWNsYXNzPVwie1xcJ3N0YXJ0LWNvbnRlbnRcXCc6ISRjdHJsLmRldGVjdE1vYmlsZSgpfVwiPlxyXG4gICAgICAgIDxtZC1idXR0b24gbmctY2xpY2s9XCIkY3RybC5vbkRpc21pc3MoKVwiIGFyaWEtbGFiZWw9XCJ7ezo6KFxcJ251aS5tZXNzYWdlLmRpc21pc3NcXCcgfCB0cmFuc2xhdGUpfX0gXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmctc2NvcGVcIiB0cmFuc2xhdGU9XCJudWkubWVzc2FnZS5kaXNtaXNzXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvbWQtdG9hc3Q+XHJcbjxwcm0tYWRkLWFsZXJ0LXRvYXN0LWFmdGVyIHBhcmVudC1jdHJsPVwiJGN0cmxcIj48L3BybS1hZGQtYWxlcnQtdG9hc3QtYWZ0ZXI+XHJcbiAgICAgICAgYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlbW92ZUFsZXJ0c0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyR0cmFuc2xhdGUnLCAnJGVsZW1lbnQnLCAnJHRlbXBsYXRlQ2FjaGUnIF1cclxuXHJcbmV4cG9ydCBsZXQgcmVtb3ZlQWxlcnRzQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBSZW1vdmVBbGVydHNDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6ICc8c3R5bGU+bWQtdGVtcGxhdGUgcHJtLWFkZC1hbGVydC10b2FzdCBtZC10b2FzdCAqW2FyaWEtbGFiZWw9XCJ7e1xcJ251aS5hcmlhLnNhdmVkUXVlcmllc0xpc3QuYWxlcnRcXCcgfCB0cmFuc2xhdGV9fVwiXSB7ICBkaXNwbGF5OiBub25lOyB9PC9zdHlsZT4nXHJcbn1cclxuIiwiY2xhc3MgUmVtb3ZlQ2hlY2tMb2NhdGlvbnNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRlbGVtZW50LCAkdGVtcGxhdGVDYWNoZSkge1xyXG4gICAgICAgIHZhciBkaXNwbGF5ZWRBdmFpbGFiaWxpdHkgPSAkc2NvcGUuJGN0cmwucGFyZW50Q3RybC5wYXJlbnRDdHJsLmRpc3BsYXllZEF2YWlsYWJpbGl0eTtcclxuICAgICAgICBpZiAoIGRpc3BsYXllZEF2YWlsYWJpbGl0eS5pbmRleE9mKFwiZnVsbHRleHRfdW5rbm93blwiKSA+IC0xIHx8IGRpc3BsYXllZEF2YWlsYWJpbGl0eS5pbmRleE9mKFwibWF5X2JlX3Jlc3RyaWN0ZWRcIikgPiAtMSApIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cgKCAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuZGVsaXZlcnkgKVxyXG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2goJHNjb3BlLiRjdHJsLnBhcmVudEN0cmwucGFyZW50Q3RybC4kZWxlbWVudCwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICggZWwgKVxyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmxvY2FsTmFtZSA9PSAncHJtLXNlYXJjaC1yZXN1bHQtYXZhaWxhYmlsaXR5LWxpbmUnICl7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5SZW1vdmVDaGVja0xvY2F0aW9uc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyRlbGVtZW50JywgJyR0ZW1wbGF0ZUNhY2hlJyBdXHJcblxyXG5leHBvcnQgbGV0IHJlbW92ZUNoZWNrTG9jYXRpb25zQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxyXG4gICAgY29udHJvbGxlcjogUmVtb3ZlQ2hlY2tMb2NhdGlvbnNDb250cm9sbGVyXHJcbn0iLCJpbXBvcnQgc2VhcmNoVGlwSFRNTCBmcm9tICcuL3NlYXJjaFRpcC5odG1sJ1xyXG5pbXBvcnQgdGlwX2VuVVNfSFRNTCBmcm9tICcuL3NlYXJjaFRpcC9lblVTLmh0bWwnXHJcbmltcG9ydCB0aXBfZnJGUl9IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2ZyRlIuaHRtbCdcclxuaW1wb3J0IHRpcF9ubEJFX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvbmxCRS5odG1sJ1xyXG5cclxuY2xhc3MgU2VhcmNoVGlwQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJG1kRGlhbG9nKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuXHJcbiAgICAgIGxldCBsb2NhbGVfdGV4dCA9IHtcclxuICAgICAgICAnbmxfQkUnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnWm9la3RpcHMnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJab2VrdGlwcyB3ZWVyZ2V2ZW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2VuX1VTJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ1NlYXJjaCBUaXBzJyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiU2VhcmNoIFRpcHNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2ZyX0ZSJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ0FzdHVjZXM/JyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQXN0dWNlcz9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB0aXBzSFRNTCA9IHRpcF9lblVTX0hUTUw7XHJcbiAgICAgIHN3aXRjaCAobG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZnJfRlInOlxyXG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfZnJGUl9IVE1MO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmxfQkUnOlxyXG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfbmxCRV9IVE1MO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRpcHNIVE1MID0gdGlwX2VuVVNfSFRNTDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJHNjb3BlLnRpdGxlID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGUnXTtcclxuICAgICAgJHNjb3BlLnRpdGxlX2xhYmVsID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGVfbGFiZWwnXTtcclxuXHJcbiAgICAgICRzY29wZS5zaG93U2VhcmNoVGlwcyA9IGZ1bmN0aW9uKCRldmVudCkge1xyXG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudEVsLFxyXG4gICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgIHRlbXBsYXRlOiB0aXBzSFRNTCxcclxuICAgICAgICAgIGxvY2Fsczoge1xyXG4gICAgICAgICAgICBpdGVtczogJHNjb3BlLml0ZW1zXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBEaWFsb2dDb250cm9sbGVyKCRzY29wZSwgJG1kRGlhbG9nLCBpdGVtcykge1xyXG4gICAgICAgICRzY29wZS5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgICRzY29wZS5jbG9zZURpYWxvZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuU2VhcmNoVGlwQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJ11cclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoVGlwQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaFRpcENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHNlYXJjaFRpcEhUTUxcclxufVxyXG4iLCJcclxuY2xhc3MgU3RhdGljRm9vdGVyQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2csICRlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB2YXIgbG9jYWxlID0gXCJlbl9VU1wiXHJcblxyXG4gICAgICAgIHZhciB2aWV3V2l0aEN1c3RvbUZvb3RlciA9IFsnTGlyaWFzJywnd2VyZWxkd2lqemVyJywnRUNCJywnVkRJQyddXHJcbi8qXHJcbiAgICAgICAgY29uc29sZS5sb2cgKHNlbGYgKVxyXG4gICAgICAgIGNvbnNvbGUubG9nIChzY29wZSApXHJcbiAgICAgICAgY29uc29sZS5sb2cgKHNjb3BlLiRyb290LiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UgKVxyXG4qL1xyXG4gICAgICAgIGxvY2FsZSA9IHNjb3BlLiRyb290LiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIHZhciB2aWQgPSB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcclxuICAgICAgIC8vICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChzdGF0aWNGb290ZXJUZW1wbGF0ZU5hbWUsICdjdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2h0bWwvdGVtcGxhdGVzL2Zvb3Rlcl8nICsgbG9jYWxlICsgJy5odG1sJyk7XHJcbiovXHJcbiAgICAgICAgdmFyIHZpZCA9IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZVVybCA9ICdjdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2h0bWwvdGVtcGxhdGVzL2Zvb3Rlcl8nICsgbG9jYWxlICsgJy5odG1sJztcclxuICAgICAgICBpZiAoIHZpZXdXaXRoQ3VzdG9tRm9vdGVyLmluY2x1ZGVzKHZpZCkgKSAge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybCA9ICdjdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2h0bWwvdGVtcGxhdGVzL2Zvb3Rlcl8nICsgdmlkICsgJ18nICsgbG9jYWxlICsgJy5odG1sJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRzY29wZS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlVXJsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuU3RhdGljRm9vdGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJywgJyRlbGVtZW50J11cclxuXHJcbmV4cG9ydCBsZXQgc3RhdGljRm9vdGVyQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBTdGF0aWNGb290ZXJDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6ICc8bmctaW5jbHVkZSBzcmM9XCJnZXRUZW1wbGF0ZVVybCgpXCIvPicsXHJcbn1cclxuIiwiaW1wb3J0IGF1dG9Mb2dpbkNoZWNrYm94SFRNTCBmcm9tICcuL2F1dG9Mb2dpbkNoZWNrYm94Lmh0bWwnXHJcblxyXG5jbGFzcyBBdXRvTG9naW5DaGVja2JveENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgLyogUmVtb3ZlIHRoZSBsb2NhbFN0b3JhZ2UgcGFyYW1ldGVyIHByaW1vUHJvbW90ZUxvZ2luIGlmIHRoZSB1cmwgY29udGFpbnMgY2xlYXJMb2dpbiAqL1xyXG4gICAgdmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdmFyIHVybFBhcmFtID0gXCJjbGVhckxvZ2luXCI7XHJcbiAgICB1cmxQYXJhbSA9IHVybFBhcmFtLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xyXG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIHVybFBhcmFtICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcclxuICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuICAgIGlmIChyZXN1bHRzKSB7XHJcbiAgICAgIGlmIChkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcmltb1Byb21vdGVMb2dpbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi5hbHdheXNTaWduaW5DaGVja0JveCA9IGZhbHNlO1xyXG4gICAgc2VsZi5hbHdheXNTaWduaW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaW1vUHJvbW90ZUxvZ2luXCIpO1xyXG4gICAgaWYgKHNlbGYuYWx3YXlzU2lnbmluKSB7XHJcbiAgICAgIHNlbGYuYWx3YXlzU2lnbmluQ2hlY2tCb3ggPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5hbHdheXNTaWduaW5DaGVja2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoc2VsZi5hbHdheXNTaWduaW5DaGVja0JveCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmltb1Byb21vdGVMb2dpbicsICdhbHdheXNTaWduaW4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFByb21vdGVMb2dpbkNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRtZERpYWxvZykge1xyXG5cclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBwYXJlbnRDdHJsID0gIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsXHJcbiAgICAvL2NvbnNvbGUubG9nIChzZWxmKVxyXG4gICAgdmFyIGxvY2FsZSA9IHBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuICAgXHJcbiAgICBwYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnNpZ25Jbk9ic2VydmFibGUuc3Vic2NyaWJlKCgpPT4ge1xyXG4gICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXNMb2dnZWRJbiAgPT0gdHJ1ZSl7XHJcbiAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICRzY29wZS5wcmltb1Byb21vdGVMb2dpbiA9ICcnO1xyXG4gICAgJHNjb3BlLnNob3dTaWduSW5Qb3B1cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFyZW50RWwgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSk7XHJcblxyXG4gICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnRFbCxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2h0bWwvdGVtcGxhdGVzL3Byb21vdGVfbG9naW5fJyArIGxvY2FsZSArICcuaHRtbCcsXHJcbiAgICAgICAgICAgIGxvY2Fsczoge1xyXG4gICAgICAgICAgICAgICAgcHJpbW9Qcm9tb3RlTG9naW46ICAkc2NvcGUucHJpbW9Qcm9tb3RlTG9naW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlclxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBEaWFsb2dDb250cm9sbGVyKCRzY29wZSwgJG1kRGlhbG9nKSB7XHJcbiAgICAgICAgJHNjb3BlLmxvZ2luRGlhbG9nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwYXJlbnRDdHJsLmxvZ2luU2VydmljZS5oYW5kbGVMb2dpbkNsaWNrKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJHNjb3BlLmNoYW5nZVByb21vdGVPcHRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUucHJpbW9Qcm9tb3RlTG9naW4gPT09ICduZXZlclNpZ25pbicgfHwgJHNjb3BlLnByaW1vUHJvbW90ZUxvZ2luID09PSAnYWx3YXlzU2lnbmluJykge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJywgJHNjb3BlLnByaW1vUHJvbW90ZUxvZ2luKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcmltb1Byb21vdGVMb2dpbicpO1xyXG4gICAgICAgICAgICAgICAgLy9zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwcmltb1Byb21vdGVMb2dpbicsICRzY29wZS5wcmltb1Byb21vdGVMb2dpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLyogSWdub3JlIHRoaXMgaW4gcHJtLWxvZ2luLWFsbWEtbWFzaHVwLCBvbmx5IGlmIHBhcmVudCBpcyBwcm0tdXNlci1hcmVhKi9cclxuICAgIGlmICggKCRlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLmNsb3Nlc3QoJ3BybS11c2VyLWFyZWEnKSApIHtcclxuICAgICAgICBpZiAoIXBhcmVudEN0cmwuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlWydwcmltb1Byb21vdGVMb2dpbiddID09PSAnYWx3YXlzU2lnbmluJykge1xyXG4gICAgICAgICAgICAgICAgLyogU3JlaWRlcmljdCB0byBsb2dpbiAqLztcclxuICAgICAgICAgICAgICAgIHBhcmVudEN0cmwubG9naW5TZXJ2aWNlLmhhbmRsZUxvZ2luQ2xpY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2Vzc2lvblN0b3JhZ2VbJ3ByaW1vUHJvbW90ZUxvZ2luJ10gJiYgIWxvY2FsU3RvcmFnZVsncHJpbW9Qcm9tb3RlTG9naW4nXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zaG93U2lnbkluUG9wdXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwcmltb1Byb21vdGVMb2dpbicsICdTaWduSW5Qb3B1cCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBBdXRvTG9naW5Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IHBhcmVudEN0cmwgPSAgc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmxcclxuICAgIC8vIElnbm9yZSB0aGlzIGluIHBybS1sb2dpbi1hbG1hLW1hc2h1cCwgb25seSBpZiBwYXJlbnQgaXMgcHJtLXVzZXItYXJlYVxyXG4gICAgaWYgKCgkZWxlbWVudC5uYXRpdmVFbGVtZW50KS5jbG9zZXN0KCdwcm0tdXNlci1hcmVhJykpIHtcclxuICAgICAgICBpZiAoIXBhcmVudEN0cmwuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICB2YXIgYXV0aCA9IHdpbmRvdy5hcHBDb25maWcuYXV0aGVudGljYXRpb25bMF07XHJcbiAgICAgICAgICAgIHZhciBsb2dpblVybCA9IHBhcmVudEN0cmwubG9naW5TZXJ2aWNlLmxvZ2luVXJsKGF1dGhbJ3Byb2ZpbGUtbmFtZSddLCBhdXRoWydhdXRoZW50aWNhdGlvbi1zeXN0ZW0nXSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBsb2dpblVybC5yZXBsYWNlKC9pbnN0aXR1dGlvbj0oW14mXSkqLywgXCJpbnN0aXR1dGlvbj1LVUxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBhdXRvTG9naW5DaGVja2JveENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBBdXRvTG9naW5DaGVja2JveENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGF1dG9Mb2dpbkNoZWNrYm94SFRNTFxyXG59XHJcblxyXG5leHBvcnQgbGV0IHByb21vdGVMb2dpbkNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBQcm9tb3RlTG9naW5Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBhdXRvTG9naW5Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogQXV0b0xvZ2luQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgYWx0bWV0cmljSFRNTCBmcm9tICcuL2FsdG1ldHJpYy5odG1sJ1xyXG5cclxuY2xhc3MgQWx0TWV0cmljQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICR3aW5kb3csICR0aW1lb3V0LCBBbHRtZXRyaWNzU2VydmljZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IGl0ZW0gPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtO1xyXG4gICAgLypcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkZWxlbWVudDtcclxuICAgICAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICAqL1xyXG4gICAgc2VsZi5kb2kgPSAnJztcclxuICAgIHNlbGYucmVjb3JkaWQgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xyXG4gICAgaWYgKGl0ZW0gJiYgaXRlbS5wbnggJiYgaXRlbS5wbnguYWRkYXRhICYmIGl0ZW0ucG54LmFkZGF0YS5kb2kpIHtcclxuICAgICAgc2VsZi5kb2kgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtLnBueC5hZGRhdGEuZG9pWzBdO1xyXG5cclxuICAgICAgdGhpcy5yZWNvcmRpZCA9IHNlbGYucmVjb3JkaWQ7XHJcbiAgICAgIEFsdG1ldHJpY3NTZXJ2aWNlLmFkZEFsdG1ldHJpY3MoJyNhbHRtZXRyaWNzXycgKyBzZWxmLnJlY29yZGlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGFsdG1ldHJpY0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczogeyBwYXJlbnRDdHJsOiAnPCcgfSxcclxuICBjb250cm9sbGVyOiBBbHRNZXRyaWNDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBhbHRtZXRyaWNIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHNvdXJjZUljb25IVE1MIGZyb20gJy4vc291cmNlSWNvbi5odG1sJ1xyXG5cclxuY2xhc3MgU291cmNlSWNvbkNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgcGFyZW50Q3RybCA9ICRzY29wZS4kcGFyZW50LiRjdHJsLnBhcmVudEN0cmw7XHJcbiAgICB2YXIgaWNvbkNvbmYgPSBbe1xyXG4gICAgICAnc291cmNlaWQnOiAnbGlyaWFzJyxcclxuICAgICAgJ2ljb25VcmwnOiAnLy9saW1vLmxpYmlzLmJlL3ByaW1vX2xpYnJhcnkvbGlid2ViL2xpYmlzL2ltYWdlcy9saXJpYXMuanBnJyxcclxuICAgICAgJ2ljb25UZXh0JzogJ0xpcmlhcydcclxuICAgIH1dO1xyXG5cclxuICAgIHZhciBpY29uQ29uZlNvdXJjZXMgPSBpY29uQ29uZi5tYXAob2JqID0+IG9iai5zb3VyY2VpZCk7XHJcblxyXG4gICAgc2VsZi5zb3VyY2VpZCA9IG51bGw7XHJcbiAgICBpZiAoJ3NvdXJjZWlkJyBpbiBwYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wpIHtcclxuICAgICAgc2VsZi5zb3VyY2VpZCA9IHBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5zb3VyY2VpZFswXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgaWYgKGljb25Db25mU291cmNlcy5pbmNsdWRlcyhzZWxmLnNvdXJjZWlkKSkge1xyXG4gICAgICAgIHNlbGYuaWNvbiA9IGljb25Db25mLmZpbmQoZnVuY3Rpb24oeCkge1xyXG4gICAgICAgICAgcmV0dXJuIHguc291cmNlaWQgPT09IHNlbGYuc291cmNlaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdkaXYnKS5hcHBlbmQoJGNvbXBpbGUoc291cmNlSWNvbkhUTUwpKCRzY29wZSkpO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblNvdXJjZUljb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICckY29tcGlsZSddO1xyXG5cclxuZXhwb3J0IGxldCBzb3VyY2VJY29uQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFNvdXJjZUljb25Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCBzZWFyY2hDb2xsZWN0aW9uc0hUTUwgZnJvbSAnLi9odG1sL3NlYXJjaC1jb2xsZWN0aW9ucy5odG1sJ1xyXG5cclxuY2xhc3MgU2VhcmNoQ29sbGVjdGlvbnNDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIC8vbWlnaHQgYmUgbmVlZGVkIGFmdGVyIG5leHQgcmVsZWFzZVxyXG4gICAgLypzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuaXNHYWxsZXJ5TG9iYnk9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmlzR2FsbGVyeUxvYmJ5O1xyXG4gICAgdGhpcy5nZXRDb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uOyovXHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIC8qZ2V0Q29sbGVjdGlvbigpIHtcclxuICAgIGlmKCF0aGlzLmlzR2FsbGVyeUxvYmJ5ICYmIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmN1cnJlbnRDb2xsZWN0aW9uICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5jdXJyZW50Q29sbGVjdGlvbi5uYW1lO1xyXG4gICAgfVxyXG4gIH07Ki9cclxuXHJcbn1cclxuXHJcblNlYXJjaENvbGxlY3Rpb25zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQ29sbGVjdGlvbnNDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQ29sbGVjdGlvbnNDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBzZWFyY2hDb2xsZWN0aW9uc0hUTUxcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgZW5kaWFubmVzc1xyXG59IGZyb20gXCJvc1wiO1xyXG5cclxuY2xhc3MgZmlsdGVyRmFjZXRWYWx1ZXNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgICAgIGNvbnN0IGZhY2V0c0ZpbHRlcnMgPSBbe1xyXG4gICAgICAgICAgICB2aWQ6IFwiSkVTVUlUU1wiLFxyXG4gICAgICAgICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJsaWJyYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImluY2x1ZGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW1wiS1VMX0dPU0FfTElCXCIsIFwiS1VMX0dCSUJfTElCXCIsIFwiS1VMX0dQQVJfTElCXCIsIFwiQU5FVF9VQS1DU1RcIl1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJkb21haW5cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5jbHVkZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbXCJMSUJJU25ldCBDYXRhbG9ndWVcIiwgXCJSdXVzYnJvZWNnZW5vb3RzY2hhcFwiXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICBsZXQgdmlkZmFjZXRzRmlsdGVycyA9IGZhY2V0c0ZpbHRlcnMuZmlsdGVyKGYgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZi52aWQgPT0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwudmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHZpZGZhY2V0c0ZpbHRlcnMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IHZpZGZhY2V0c0ZpbHRlciA9IHZpZGZhY2V0c0ZpbHRlcnNbMF1cclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICB9LCAobiwgbykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICBpZiAobiAhPSBvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZpZGZhY2V0c3Jlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZmFjZXRzRmlsdGVyLmZpbHRlcnMuZm9yRWFjaCh2aWRGYWNldCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGZhY2V0c3Jlc3VsdHMgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cy5tYXAoZmFjZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZhY2V0Lm5hbWUgPT0gdmlkRmFjZXQubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY2V0LnZhbHVlcyA9IGZhY2V0LnZhbHVlcy5maWx0ZXIoZmFjZXRWYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmlkRmFjZXQudHlwZSA9PT0gJ2luY2x1ZGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmlkRmFjZXQudmFsdWVzLmluY2x1ZGVzKGZhY2V0VmFsLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmlkRmFjZXQudHlwZSA9PT0gJ2V4Y2x1ZGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXZpZEZhY2V0LnZhbHVlcy5pbmNsdWRlcyhmYWNldFZhbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5maWx0ZXJGYWNldFZhbHVlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGZpbHRlckZhY2V0VmFsdWVzQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBmaWx0ZXJGYWNldFZhbHVlc0NvbnRyb2xsZXJcclxufSIsIi8vZmFjZXRzLmZhY2V0LmZhY2V0X3NlYXJjaF9hbHNvIGluIFwiZmFjZXQgbGFiZWxzXCJcclxuY2xhc3MgU2VhcmNoQWxzb0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSl7XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xyXG4gICAgfSwgKG4sbykgPT4ge1xyXG4gICAgICAvL2lmIChuICE9IG8pIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMuZmlsdGVyKGYgPT4ge3JldHVybiBmLm5hbWUgPT0gJ3NlYXJjaF9hbHNvJ30pLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9hbHNvJyxcclxuICAgICAgICAgICAgZGlzcGxheWVkVHlwZTogJ2V4YWN0JyxcclxuICAgICAgICAgICAgbGltaXRDb3VudDogMCxcclxuICAgICAgICAgICAgZmFjZXRHcm91cENvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlczogdW5kZWZpbmVkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIC8vfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOntwYXJlbnRDdHJsOic8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0NvbnRyb2xsZXJcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQWxzb0JvZHlIVE1MIGZyb20gJy4vc2VhcmNoQWxzb0JvZHkuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaEFsc29Cb2R5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcclxuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XHJcbiAgfVxyXG5cclxuICBfdGFyZ2V0cygpIHtcclxuICAgIHJldHVybiBbe1xyXG4gICAgICBcIm5hbWVcIjogXCJVbmlDYXRcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3VuaWNhdC5iZS91bmlDYXQ/ZnVuYz1zZWFyY2gmdWlMYW5ndWFnZT1lbiZxdWVyeT1cIixcclxuICAgICAgXCJpbWdcIjogXCIvcHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2ltZy91bmljYXRfaWNvbi5wbmdcIixcclxuICAgICAgXCJ0b29sdGlwXCI6IFwibGJzLm51aS5zZWFyY2hfYWxzby50b29sdGlwLnVuaWNhdFwiLFxyXG4gICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xyXG4gICAgICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XHJcbiAgICAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hBbHNvQm9keUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvY2F0aW9uJ107XHJcblxyXG5leHBvcnQgbGV0IHNlYXJjaEFsc29Cb2R5Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcclxuICBjb250cm9sbGVyOiBTZWFyY2hBbHNvQm9keUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHNlYXJjaEFsc29Cb2R5SFRNTFxyXG59XHJcbiIsImltcG9ydCBzZWFyY2hBbHNvQm9keUhUTUwgZnJvbSAnLi9zZWFyY2hBbHNvQm9keS5odG1sJ1xyXG5cclxuY2xhc3MgU2VhcmNoQWxzb0JvZHlCaWJDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigkbG9jYXRpb24pe1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9ICRsb2NhdGlvbjtcclxuICAgIHRoaXMudGFyZ2V0cyA9IHRoaXMuX3RhcmdldHMoKTtcclxuICB9XHJcblxyXG4gIGdldCBzZWFyY2goKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2NhdGlvbi5zZWFyY2goKS5xdWVyeSB8fCAnJztcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0R3JvdXAubmFtZTtcclxuICB9XHJcblxyXG4gIF90YXJnZXRzKCkge1xyXG4gICAgcmV0dXJuIFt7XHJcbiAgICAgIFwibmFtZVwiOiBcIkJpYmxpb3RoZWVrLmJlXCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuYmlibGlvdGhlZWsuYmUvY2F0YWxvZ3VzP3E9XCIsXHJcbiAgICAgIFwiaW1nXCI6IFwiL3ByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9pbWcvYmliX2JlLnBuZ1wiLFxyXG4gICAgICBcInRvb2x0aXBcIjogXCJsYnMubnVpLnNlYXJjaF9hbHNvLnRvb2x0aXAuZGVCaWJcIixcclxuICAgICAgbWFwcGluZzogZnVuY3Rpb24gbWFwcGluZyhzZWFyY2gpIHtcclxuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHJldHVybiB0ZXJtc1syXSB8fCBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG5cclxuU2VhcmNoQWxzb0JvZHlCaWJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvbiddO1xyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQm9keUJpYkNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0JvZHlCaWJDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBzZWFyY2hBbHNvQm9keUhUTUxcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQWxzb0JvZHlIVE1MIGZyb20gJy4vc2VhcmNoQWxzb0JvZHkuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaEFsc29Cb2R5R29vZ2xlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcclxuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XHJcbiAgfVxyXG5cclxuICBfdGFyZ2V0cygpIHtcclxuICAgIHJldHVybiBbe1xyXG4gICAgICAgXCJuYW1lXCI6IFwiR29vZ2xlIFNjaG9sYXJcIixcclxuICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zY2hvbGFyLmdvb2dsZS5jb20vc2Nob2xhcj9xPVwiLFxyXG4gICAgICAgXCJpbWdcIjogXCIvcHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2ltZy9nb29nbGVfaWNvbi5wbmdcIixcclxuICAgICAgIFwidG9vbHRpcFwiOiBcImxicy5udWkuc2VhcmNoX2Fsc28udG9vbHRpcC5nb29nbGVfc2NvbGFyXCIsXHJcbiAgICAgICBtYXBwaW5nOiBmdW5jdGlvbiBtYXBwaW5nKHNlYXJjaCkge1xyXG4gICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICByZXR1cm4gdGVybXNbMl0gfHwgXCJcIjtcclxuICAgICAgIH1cclxuICAgICB9LFxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Cb2R5R29vZ2xlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0JvZHlHb29nbGVDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Cb2R5R29vZ2xlQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoQWxzb0JvZHlIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaEFsc29Cb2R5SFRNTCBmcm9tICcuL3NlYXJjaEFsc29Cb2R5Lmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hBbHNvQm9keVdvcmxkY2F0Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcclxuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XHJcbiAgfVxyXG5cclxuICBfdGFyZ2V0cygpIHtcclxuICAgIHJldHVybiBbe1xyXG4gICAgICBcIm5hbWVcIjogXCJXb3JsZGNhdFwiLFxyXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LndvcmxkY2F0Lm9yZy9zZWFyY2g/cT1cIixcclxuICAgICAgXCJpbWdcIjogXCIvcHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2ltZy93b3JsZGNhdF9pY29uLnBuZ1wiLFxyXG4gICAgICBcInRvb2x0aXBcIjogXCJsYnMubnVpLnNlYXJjaF9hbHNvLnRvb2x0aXAud29ybGRjYXRcIixcclxuICAgICAgbWFwcGluZzogZnVuY3Rpb24gbWFwcGluZyhzZWFyY2gpIHtcclxuICAgICAgICB2YXIgdHlwZV9tYXBwaW5ncyA9IHtcclxuICAgICAgICAgIFwiYW55XCI6IFwia3dcIixcclxuICAgICAgICAgIFwidGl0bGVcIjogXCJ0aVwiLFxyXG4gICAgICAgICAgXCJjcmVhdG9yXCI6IFwiYXVcIixcclxuICAgICAgICAgIFwic3ViamVjdFwiOiBcInN1XCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB0ZXJtcyA9IHNlYXJjaC5zcGxpdChcIixcIik7XHJcbiAgICAgICAgdmFyIHR5cGUgPSB0eXBlX21hcHBpbmdzW3Rlcm1zWzBdXSB8fCBcImt3XCI7XHJcbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGVybXNbMl0gfHwgXCJcIjtcclxuICAgICAgICByZXR1cm4gdHlwZSArICc6JyArIHF1ZXJ5O1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Cb2R5V29ybGRjYXRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvbiddO1xyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQm9keVdvcmxkY2F0Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcclxuICBjb250cm9sbGVyOiBTZWFyY2hBbHNvQm9keVdvcmxkY2F0Q29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoQWxzb0JvZHlIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHBheU15RmluZXNIVE1MIGZyb20gJy4vcGF5TXlGaW5lcy5odG1sJ1xyXG5cclxuY2xhc3MgUGF5TXlGaW5lc0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5zaG93UGF5TXlGaW5lcyA9IGZhbHNlOyAgXHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBpZiAoL15LVUxldXZlbi8udGVzdCh2aWV3LmNvZGUpKSB7XHJcbiAgICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQYXlNeUZpbmVzID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBwYXlNeUZpbmVzQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOntcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUGF5TXlGaW5lc0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHBheU15RmluZXNIVE1MXHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoZSBhbHRtZXRyaWNzIGNvbXBvbmVudCBjb250cm9sbGVyLiAoaHR0cHM6Ly9naXRodWIuY29tL0RldC1Lb25nZWxpZ2UtQmlibGlvdGVrL3ByaW1vLWV4cGxvcmUtcmV4L2Jsb2IvbWFzdGVyL2pzL2FsdG1ldHJpY3MuY29tcG9uZW50LmpzKVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IEFsdG1ldHJpY3NCYWRnZUhUTUwgZnJvbSAnLi9hbHRtZXRyaWNzQmFkZ2UuaHRtbCdcclxuXHJcbmNsYXNzIEFsdG1ldHJpY3NCYWRnZUNvbnRyb2xsZXIge1xyXG5cclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHRpbWVvdXQsIEFsdG1ldHJpY3NTZXJ2aWNlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICBzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHNlbGYuQWx0bWV0cmljc1NlcnZpY2UgPSBBbHRtZXRyaWNzU2VydmljZTtcclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybDtcclxuICAgIHNlbGYuaXRlbSA9IHNlbGYucGFyZW50Q3RybC5pdGVtO1xyXG4gICAgc2VsZi5yZWNvcmRpZCA9IHNlbGYuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcclxuICAgIHNlbGYuZG9pID0gJyc7XHJcblxyXG4gICAgLy9wb2x5ZmlsbFxyXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihzKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKGVsKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5tYXRjaGVzKHMpKSByZXR1cm4gZWw7XHJcbiAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQgfHwgZWwucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoZWwgIT09IG51bGwgJiYgZWwubm9kZVR5cGUgPT09IDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgLy9lbmQgcG9seWZpbGxcclxuXHJcbiAgICBpZiAoc2VsZi5pdGVtICYmIHNlbGYuaXRlbS5wbnggJiYgc2VsZi5pdGVtLnBueC5hZGRhdGEgJiYgc2VsZi5pdGVtLnBueC5hZGRhdGEuZG9pKSB7XHJcbiAgICAgICAgc2VsZi5kb2kgPSBzZWxmLml0ZW0ucG54LmFkZGF0YS5kb2lbMF07XHJcbiAgICAgICAgc2VsZi5BbHRtZXRyaWNzU2VydmljZS5hZGRBbHRtZXRyaWNzKCcjZnVsbF9hbHRtZXRyaWNzXycgKyBzZWxmLnJlY29yZGlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgdmFyIGFsdG1ldHJpY3NTZWN0aW9uID0ge1xyXG4gICAgICAgICAgICBzY3JvbGxJZDogXCJhbHRtZXRyaWNzXCIsXHJcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBcImFsdG1ldHJpY3NcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiYnJpZWYucmVzdWx0cy50YWJzLkFsdG1ldHJpY3NcIlxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoIHNlbGYucGFyZW50Q3RybC5mdWxsVmlld1NlcnZpY2UuZ2V0U2VydmljZXMoIHNlbGYucGFyZW50Q3RybC5pdGVtLCBzZWxmLnBhcmVudEN0cmwub3JpZ2luYXRvcikgKS50aGVuKFxyXG4gICAgICAgICAgICBmdW5jdGlvbihzZXJ2aWNlcykge1xyXG4gICAgICAgICAgICAgIC8vIEFkZCB0byBzZXJ2aWNlcyBpZiBub3QgYWxyZWFkIGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgaWYgKCBzZXJ2aWNlcy5maW5kSW5kZXgoc2VydmljZSA9PiBzZXJ2aWNlLnNjcm9sbElkID09PSBcImFsdG1ldHJpY3NcIikgPCAwICl7XHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlcy5zcGxpY2Uoc2VydmljZXMubGVuZ3RoLCAxMCwgYWx0bWV0cmljc1NlY3Rpb24pOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIHNlbGYuZG9pICE9PSAnJyApIHtcclxuICAgICAgdmFyIHVuYmluZFdhdGNoZXIgPSB0aGlzLiRzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vcmV0dXJuIHNlbGYuJGVsZW1lbnRbMF0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2g0W3RyYW5zbGF0ZT1cImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJdJyk7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuJGVsZW1lbnRbMF0uY2xvc2VzdCgnI2Z1bGxWaWV3JykucXVlcnlTZWxlY3RvcignaDRbdHJhbnNsYXRlPVwiYnJpZWYucmVzdWx0cy50YWJzLkFsdG1ldHJpY3NcIl0nKVxyXG4gICAgICB9LCBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgICBpZiAobmV3VmFsKSB7XHJcbiAgICAgICAgICAvL0dldCB0aGUgc2VjdGlvbiBib2R5IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmFsdWUgd2UncmUgd2F0Y2hpbmdcclxuICAgICAgICAgIGxldCBhbHRtZXRyaWNzQ29udGFpbmVyID0gbmV3VmFsLmNsb3Nlc3QoJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCdkaXYuc2VjdGlvbi1ib2R5Jyk7XHJcbiAgICAgICAgICBsZXQgYWx0bWV0cmljc1Jlc3VsdCA9IHNlbGYuJGVsZW1lbnRbMF07XHJcbiAgICAgICAgICBpZiAoYWx0bWV0cmljc0NvbnRhaW5lciAmJiBhbHRtZXRyaWNzQ29udGFpbmVyLmFwcGVuZENoaWxkICYmIGFsdG1ldHJpY3NSZXN1bHQpIHtcclxuICAgICAgICAgICAgYWx0bWV0cmljc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhbHRtZXRyaWNzUmVzdWx0KTtcclxuICAgICAgICAgICAgd2luZG93Ll9hbHRtZXRyaWNfZW1iZWRfaW5pdChhbHRtZXRyaWNzQ29udGFpbmVyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVuYmluZFdhdGNoZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWx0bWV0cmljc0JhZGdlQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEFsdG1ldHJpY3NCYWRnZUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IEFsdG1ldHJpY3NCYWRnZUhUTUxcclxufVxyXG4iLCJpbXBvcnQgYmV0YVN3aXRjaEhUTUwgZnJvbSAnLi9iZXRhU3dpdGNoLmh0bWwnXHJcblxyXG5jbGFzcyBCZXRhU3dpdGNoQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuXHJcbiAgICAkc2NvcGUuc2hvd0JldGFTd2l0Y2ggPSB0cnVlO1xyXG4gICAgJHNjb3BlLnVzZUJldGEgPSB0cnVlOyAgXHJcblxyXG4gICAgJHNjb3BlLm9uQ2hhbmdlVXNlQmV0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCEgJHNjb3BlLnVzZUJldGEpe1xyXG4gICAgICAgIHNlbGYuZ29Ub09sZFVJKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnb1RvT2xkVUkoKSB7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPScvcHJpbW9fbGlicmFyeS9saWJ3ZWIvYWN0aW9uL3NlYXJjaC5kbz92aWQ9JysgdGhpcy5vbGRWaWQ7XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgdmFyIExpbmtUb0JldGFWaWV3cyA9IHtcclxuICAgICAgJ0FDVic6J0FDVicsXHJcbiAgICAgICdCUEInOidCUEInLFxyXG4gICAgICAnRkFSTyc6J0ZBUk8nLFxyXG4gICAgICAnRk9ERklOJzonRk9ERklOJyAsXHJcbiAgICAgICdHQ0xEJzonR0NMRCcsXHJcbiAgICAgICdHU0InOidHU0InLFxyXG4gICAgICAnR1NHJzonR1NHJyxcclxuICAgICAgJ0lNRUMnOidJTUVDJyxcclxuICAgICAgJ0tBRE9DJzonS0FET0MnLFxyXG4gICAgICAnS0JDJzonS0JDJyxcclxuICAgICAgJ0tNS0cnOidLTUtHJyxcclxuICAgICAgJ0tVTGV1dmVuJzonS1VMZXV2ZW5fVVgnLFxyXG4gICAgICAnTElCQVInOidMSUJBUicsXHJcbiAgICAgICdMVUNBJzonTFVDQV9VWCcsXHJcbiAgICAgICdOQkInOidOQkInLFxyXG4gICAgICAnT0RJU0VFJzonT0RJU0VFX1VYJyxcclxuICAgICAgJ09GTyc6J09GTycsXHJcbiAgICAgICdSQklOUyc6J1JCSU5TJyxcclxuICAgICAgJ1JFTEknOidSRUxJJyxcclxuICAgICAgJ1JNQ0EnOidSTUNBJyxcclxuICAgICAgJ1NFUlYnOidTRVJWJyxcclxuICAgICAgJ1RNT1JFSyc6J1RNT1JFS19VWCcsXHJcbiAgICAgICdUTU9SRU0nOidUTU9SRU1BX1VYJyxcclxuICAgICAgJ1ZESUMnOidWRElDJyxcclxuICAgICAgJ1ZJVkVTX0tBVEhPJzonVklWRVNfS0FUSE9fVVgnLFxyXG4gICAgICAnVklWRVNfS0hCTyc6J1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnVkxQJzonVkxQJyxcclxuICAgICAgJ0tVTGV1dmVuX1RNT1JFTSc6J0tVTGV1dmVuX1RNT1JFTV9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9VQ0xMJzonS1VMZXV2ZW5fVUNMTF9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9UTU9SRUsnOidLVUxldXZlbl9UTU9SRUtfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fTFVDQSc6J0tVTGV1dmVuX0xVQ0FfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fVklWRVNfS0hCTyc6J0tVTGV1dmVuX1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fT0RJU0VFJzonS1VMZXV2ZW5fT0RJU0VFX1VYJyxcclxuICAgICAgJ0tITElNJzonVUNMTF9MSU1CVVJHX1VYJyxcclxuICAgICAgJ0tITCc6J1VDTExfTEVVVkVOX1VYJ1xyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eRUNCLy50ZXN0KHZpZXcuY29kZSkpIHtcclxuICAgICAgICB0aGlzLnNob3dCZXRhU3dpdGNoID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbGRWaWQgPSBPYmplY3Qua2V5cyhMaW5rVG9CZXRhVmlld3MpLmZpbmQoa2V5ID0+IExpbmtUb0JldGFWaWV3c1trZXldID09PSB2aWV3LmNvZGUpIHx8IHZpZXcuY29kZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYmV0YVN3aXRjaENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBCZXRhU3dpdGNoQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogYmV0YVN3aXRjaEhUTUxcclxufVxyXG4iLCJpbXBvcnQgaG9tZUljb25IVE1MIGZyb20gJy4vaG9tZUljb24uaHRtbCdcclxuXHJcbmNsYXNzIEhvbWVJY29uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgc2VsZi5saW5rdHlwZSA9ICdob21lSWNvbic7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKCh2aWV3KSA9PiB7XHJcbiAgICAgIGxldCB2aWQgPSB2aWV3LmNvZGU7XHJcbiAgICAgIGlmICh2aWQgPT0gXCJFQ0JcIikge1xyXG4gICAgICAgIHNlbGYubGlua3R5cGUgPSBcIm5ld1NlYXJjaEJ1dHRvblwiO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlOyAvL3dpbmRvdy5Qcmltby5leHBsb3JlLmhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuICAgICAgbGV0IGxvY2FsZUxpYnJhcnlMb2dvID0gJ2N1c3RvbS8nICsgdmlkICsgJy9pbWcvbGlicmFyeS1sb2dvLScgKyBsb2NhbGUgKyAnLnBuZyc7XHJcblxyXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsb2NhbGVMaWJyYXJ5TG9nbztcclxuICAgICAgICAgICAgJGNvbXBpbGUoJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkpKCRzY29wZSk7XHJcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvID0gbGlicmFyeUxvZ287XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9ICcvcHJpbW8tZXhwbG9yZS9zZWFyY2g/dmlkPScgKyB2aWQgKyBcIiZsYW5nPVwiICsgbG9jYWxlO1xyXG5cclxuICAgICAgJHNjb3BlLnJlbW92ZVN0aWNreUZhY2V0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZmFjZXRzID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJtLWZhY2V0Jyk7XHJcbiAgICAgICAgaWYgKGZhY2V0cykge1xyXG4gICAgICAgICAgdmFyIHN0aWNreUZhY2V0cyA9IGZhY2V0c1swXS5jdHJsKCkuZmFjZXRTZXJ2aWNlLmdldFN0aWNreUZhY2V0cygpXHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0aWNreUZhY2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5yZW1vdmVTdGlja3lGYWNldChzdGlja3lGYWNldHNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5Ib21lSWNvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRodHRwJywgJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgaG9tZUljb25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogSG9tZUljb25Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBob21lSWNvbkhUTUxcclxufSIsImNsYXNzIExhbmd1YWdlRGVwZW5kZW50TG9nb0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlLCAkaHR0cCwgJHJvb3RTY29wZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5zY29wZSA9ICRzY29wZTtcclxuICAgIHNlbGYucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuXHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlOyAvL3dpbmRvdy5Qcmltby5leHBsb3JlLmhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuICAgICAgbGV0IGxvY2FsZUxpYnJhcnlMb2dvID0gJ2N1c3RvbS8nICsgdmlkICsgJy9pbWcvbGlicmFyeS1sb2dvLScgKyBsb2NhbGUgKyAnLnBuZyc7XHJcblxyXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgJGNvbXBpbGUoJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkpKCRzY29wZSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuTGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBsYW5ndWFnZURlcGVuZGVudExvZ29Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogTGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufSIsImltcG9ydCBuZXdTZWFyY2hCdXR0b25IVE1MIGZyb20gJy4vbmV3U2VhcmNoQnV0dG9uLmh0bWwnXHJcblxyXG5jbGFzcyBOZXdTZWFyY2hCdXR0b25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHAsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5wcmVwZW5kKCRjb21waWxlKG5ld1NlYXJjaEJ1dHRvbkhUTUwpKCRzY29wZSkpO1xyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbigodmlldykgPT4ge1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG4gICAgICBpZiAodmlkID09IFwiRUNCXCIpIHtcclxuICAgICAgICBzZWxmLmxpbmt0eXBlID0gXCJuZXdTZWFyY2hCdXR0b25cIjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9ICcvcHJpbW8tZXhwbG9yZS9zZWFyY2g/dmlkPScgKyB2aWQgKyBcIiZsYW5nPVwiICsgbG9jYWxlO1xyXG5cclxuICAgICAgc2VsZi5yZW1vdmVTdGlja3lGYWNldHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHBybUFkdmFuY2VkU2VhcmNoID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJtLWFkdmFuY2VkLXNlYXJjaCcpO1xyXG4gICAgICAgIGlmKHBybUFkdmFuY2VkU2VhcmNoKXtcclxuICAgICAgICAgIGxldCBjID0gcHJtQWR2YW5jZWRTZWFyY2hbMF0uY3RybCgpO1xyXG4gICAgICAgICAgYy5jbGVhclNlYXJjaEZvcm0oKTtcclxuICAgICAgICAgIGMuJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZhY2V0cyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldCcpO1xyXG4gICAgICAgIGlmIChmYWNldHMpIHtcclxuICAgICAgICAgIGxldCBzdGlja3lGYWNldHMgPSBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5nZXRTdGlja3lGYWNldHMoKVxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGlja3lGYWNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UucmVtb3ZlU3RpY2t5RmFjZXQoc3RpY2t5RmFjZXRzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBuZXdTZWFyY2hCdXR0b25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgdmlld0xvZ29IVE1MIGZyb20gJy4vdmlld0xvZ28uaHRtbCdcclxuXHJcbmNsYXNzIFZpZXdMb2dvQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KClbMF0uZmlyc3RDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpWzBdLmZpcnN0Q2hpbGQpO1xyXG5cclxuXHJcbiAgICAkdHJhbnNsYXRlKCdsaW1vLmluc3RpdHV0ZVVybCcpLnRoZW4oXHJcbiAgICAgIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlICAhPSAgJ2h0dHA6Ly93d3cubGliaXMuYmUvJyApe1xyXG4gICAgICAgIHNlbGYuaG9tZVBhZ2VMaW5rID0gbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7IC8vd2luZG93LlByaW1vLmV4cGxvcmUuaGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG4gICAgICBsZXQgbG9jYWxlTGlicmFyeUxvZ28gPSAnY3VzdG9tLycgKyB2aWQgKyAnL2ltZy9saWJyYXJ5LWxvZ28tJyArIGxvY2FsZSArICcucG5nJztcclxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcclxuICAgICAgc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuXHJcbiAgICAgICBpZiAoIHNlbGYubG9jYWxlTGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbyA9ICBsb2NhbGVMaWJyYXJ5TG9nb1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbztcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5WaWV3TG9nb0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCB2aWV3TG9nb0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBWaWV3TG9nb0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHZpZXdMb2dvSFRNTFxyXG59XHJcbiIsImltcG9ydCBmZWVkYmFja0hUTUwgZnJvbSAnLi9mZWVkYmFjay5odG1sJ1xyXG5pbXBvcnQgZmVlZGJhY2tEaWFsb2dIVE1MIGZyb20gJy4vZmVlZGJhY2tEaWFsb2cuaHRtbCdcclxuXHJcbmNsYXNzIEZlZWRiYWNrQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsIEZlZWRiYWNrU2VydmljZSl7XHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdkaXYnKS5hcHBlbmQoJGNvbXBpbGUoZmVlZGJhY2tIVE1MKSgkc2NvcGUpKTtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlID0gRmVlZGJhY2tTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgc2hvd0ZlZWRiYWNrRm9ybSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLnNob3coJGV2ZW50LCBmZWVkYmFja0RpYWxvZ0hUTUwpO1xyXG4gIH1cclxufVxyXG5cclxuRmVlZGJhY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICdGZWVkYmFja1NlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgZmVlZGJhY2tDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmVlZGJhY2tDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsIi8qIGNvbXBvbmVudCB0byBkbyBhbGwgeW91ciBleHBlcmltZW50YWwgc3R1ZmYgKi9cclxuLyogW2VufGRpc11hYmxlIGluIGNvbXBvbmVudHMgKi9cclxuXHJcbmNsYXNzIFJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4vKlxyXG4gICAgY29uc29sZS5sb2coc2VsZilcclxuICAgIGNvbnNvbGUubG9nKCBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UuY29uZmlndXJhdGlvblV0aWwudmlkICk7XHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudmlkICk7XHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UuaW5zdCApO1xyXG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnVzZXJJbnN0aXR1dGlvbiApO1xyXG4qL1xyXG4gICAgdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwub3JnR2V0TGluayA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmdldExpbms7XHJcbiAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5nZXRMaW5rID0gZnVuY3Rpb24oKSB7IFxyXG4gICAgICB2YXIgZ2V0SXRMaW5rID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwub3JnR2V0TGluaygpO1xyXG4gICAgICByZXR1cm4gZ2V0SXRMaW5rLnJlcGxhY2UoL1xcL29wZW51cmxcXC9bXi9dKlxcL1teP10qLywgXCIvb3BlbnVybFxcL1wiKyBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS51c2VySW5zdGl0dXRpb24gK1wiXFwvXCIrIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS5jb25maWd1cmF0aW9uVXRpbC52aWQpIFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcblJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50J11cclxuXHJcbmV4cG9ydCBsZXQgcmVjb21tZW5kYXRpb25JdGVtQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGlsbFJlcXVlc3RGb3JtSFRNTCBmcm9tICcuL2lsbFJlcXVlc3RGb3JtLmh0bWwnXHJcblxyXG5jbGFzcyBpbGxSZXF1ZXN0Rm9ybUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkd2luZG93LCAkcm9vdFNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgICAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICAgICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJyc7XHJcbiAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5zdGl0dXRpb25Db2RlID0gXCJcIjtcclxuICAgIH07XHJcblxyXG4gICAgJG9uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uQ29kZSA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnJlcXVlc3RzU2VydmljZS5hY2NvdW50U2VydmljZS5saW5rZWRVc2VyU2VsZWN0b3JTZXJ2aWNlLnNlbGVjdGVkSW5zdGl0dXRpb24uaW5zdGl0dXRpb25Db2RlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBhbG1hX2NvZGVzID0gdGhpcy5yb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5tYXBwaW5nVGFibGVzQ2FjaGUuTUFQUElOR19UQUJMRVNfQ0FDSEVbXCJBbG1hIEluc3RpdHV0aW9uIENvZGVzXCJdO1xyXG4gICAgICAgICAgICB2YXIgdXNlcl9pbnN0ID0gdGhpcy5yb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS51c2VySW5zdGl0dXRpb247XHJcbiAgICAgICAgICAgIHZhciBhbG1hX2NvZGUgPSBhbG1hX2NvZGVzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmoudGFyZ2V0ID09IHVzZXJfaW5zdDsgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nIChhbG1hX2NvZGVbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RpdHV0aW9uQ29kZSA9IGFsbWFfY29kZVswXS5zb3VyY2UxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdpbnN0aXR1dGlvbkNvZGU6JyArIGluc3RpdHV0aW9uQ29kZSlcclxuICAgICAgICBpZiAodGhpcy5pbnN0aXR1dGlvbkNvZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvSWxsUmVxdWVzdFVybCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0aXR1dGlvbkNvZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGlua1RvSWxsUmVxdWVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaWxsUmVxdWVzdFVybCA9ICdodHRwczovL2xldXZlbi1wcmltby5ob3N0ZWQuZXhsaWJyaXNncm91cC5jb20vcGRzP2Z1bmM9c3NvJnVybD1odHRwOi8vZXUuYWxtYS5leGxpYnJpc2dyb3VwLmNvbS92aWV3L3VyZXNvbHZlci8nICsgdGhpcy5pbnN0aXR1dGlvbkNvZGUgKyAnL29wZW51cmw/c3ZjX2RhdD1nZXRpdCZzdmMucHJvZmlsZT1nZXRpdCZkaXJlY3RSZXNvdXJjZVNoYXJpbmdSZXF1ZXN0PXRydWUmbmV3VUk9dHJ1ZSdcclxuICAgICAgICAgICAgdGhpcy53aW5kb3cub3Blbih0aGlzLmlsbFJlcXVlc3RVcmwsICdfZnJlZUlsbCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5pbGxSZXF1ZXN0Rm9ybUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJHdpbmRvdycsJyRyb290U2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgaWxsUmVxdWVzdEZvcm1Db25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IGlsbFJlcXVlc3RGb3JtQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiBpbGxSZXF1ZXN0Rm9ybUhUTUxcclxufVxyXG4iLCJpbXBvcnQgYnJvd3ppbmVIVE1MIGZyb20gJy4vYnJvd3ppbmUuaHRtbCdcclxuXHJcbmNsYXNzIEJyb3d6aW5lQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5yZXN1bHQ7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0+XCIsc2VsZiwgaXRlbSwgJHNjb3BlKTtcclxuXHJcbiAgICAgICAgc2VsZi5yZWNvcmRpZCA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnBueCAmJiBpdGVtLnBueC5hZGRhdGEpIHtcclxuICAgICAgICAgICAgc2VsZi5yZWNvcmRpZCA9IGl0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnJvd3ppbmVXYXRjaGVyID0gJHNjb3BlLiR3YXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYnJvd3ppbmUucHJpbW8gPT09ICdvYmplY3QnXHJcbiAgICAgICAgfSwgKG4sIG8pID0+IHtcclxuICAgICAgICAgICAgaWYgKG4gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyIGJyb3d6aW5lIGZvcjpcIiwgc2VsZi5yZWNvcmRpZClcclxuICAgICAgICAgICAgICAgIGxldCBzY29wZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAkY3RybDogc2VsZi5wYXJlbnRDdHJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYnJvd3ppbmUucHJpbW8uc2VhcmNoUmVzdWx0KHNjb3BlKTtcclxuICAgICAgICAgICAgICAgIGJyb3d6aW5lV2F0Y2hlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuQnJvd3ppbmVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBicm93emluZUNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogQnJvd3ppbmVDb250cm9sbGVyXHJcbn0iLCJpbXBvcnQgcG54WG1sSFRNTCBmcm9tICcuL3BueFhtbC5odG1sJ1xyXG5jbGFzcyBQbnhYbWxDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMucmVjb3JkaWQgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aGlzLnJlY29yZGlkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoaG90a2V5cykge1xyXG4gICAgICBob3RrZXlzKFwiY3RybCtlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG54LXhtbCcpKSkge1xyXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3BueC14bWwtdHJpZ2dlcicpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwbngteG1sLXRyaWdnZXInKTtcclxuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7ei1pbmRleDoxMDAwO2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouMDMnKTtcclxuICAgICAgZGl2Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcclxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYudmlzaWJsZSA/ICdmbGV4JyA6ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwbnhYbWxDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUG54WG1sQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogcG54WG1sSFRNTFxyXG59XHJcbiIsImltcG9ydCByZXBvcnRBUHJvYmxlbUhUTUwgZnJvbSAnLi9yZXBvcnRBUHJvYmxlbS5odG1sJ1xyXG5pbXBvcnQgcmVwb3J0QVByb2JsZW1EaWFsb2dIVE1MIGZyb20gJy4vcmVwb3J0QVByb2JsZW1EaWFsb2cuaHRtbCdcclxuXHJcbmNsYXNzIFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwLHJlcG9ydEFQcm9ibGVtVVJMKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdCh0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC50aXRsZSkpIHtcclxuICAgICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnaDQnKS5hZnRlcigkY29tcGlsZShyZXBvcnRBUHJvYmxlbUhUTUwpKCRzY29wZSkpO1xyXG5cclxuICAgICAgbGV0IHJlY29yZERhdGEgPSBzZWxmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgIHNlbGYuc2hvd1JlcG9ydEFQcm9ibGVtRm9ybSA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxyXG4gICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVwb3J0QVByb2JsZW1EaWFsb2dIVE1MLFxyXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJG1kRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucmVwb3J0ID0ge1xyXG4gICAgICAgICAgICAgICAgICByZXBseVRvOiBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICAgICAgICBzdWJqZWN0OiAncmVwb3J0IGEgcHJvYmxlbSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxSZXBvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbmRSZXBvcnQgPSBmdW5jdGlvbihhbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wucmVjb3JkaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzY29wZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFR5cGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25JZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0YWI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZWNvcmREYXRhLnBueC5kaXNwbGF5LnRpdGxlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZXNvdXJjZV9wcm9ibGVtJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAkc2NvcGUucmVwb3J0LnN1YmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAkc2NvcGUucmVwb3J0Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlUbzogJHNjb3BlLnJlcG9ydC5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yZXBvcnQucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5yZXBvcnQubWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcG9ydEFQcm9ibGVtVVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJztcclxuICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJztcclxuICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07IC8vc2hvd1JlcG9ydEFQcm9ibGVtRm9ybVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50UmVjb3JkKCkge1xyXG4gICAgbGV0IHNlbGVjdG9yID0gJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInOyAvLydwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJ1xyXG4gICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgbGV0IGVsZW1lbnRDdHJsID0gZWxlbWVudC5jb250cm9sbGVyKHNlbGVjdG9yKTtcclxuICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Q3RybCk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Q3RybC5pdGVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5SZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckaHR0cCcsJ3JlcG9ydEFQcm9ibGVtVVJMJ107XHJcblxyXG5leHBvcnQgbGV0IHJlcG9ydEFQcm9ibGVtQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgcmVxdWVzdEFDb3B5SFRNTCBmcm9tICcuL3JlcXVlc3RBQ29weS5odG1sJ1xyXG5pbXBvcnQgcmVxdWVzdEFDb3B5RGlhbG9nSFRNTCBmcm9tICcuL3JlcXVlc3RBQ29weURpYWxvZy5odG1sJ1xyXG5cclxuY2xhc3MgUmVxdWVzdEFDb3B5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsICRtZERpYWxvZywgJGh0dHAsICRyb290U2NvcGUsIHJlcXVlc3RBQ29weVVSTCwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAvLyBJZiB5b3Ugd2FudCB0byBhZGQgdGhlIGJ1dHRvbiB0byB0aGUgdGl0bGUgKGxpa2UgcmVwb3J0IGEgcHJvYmxlbSlcclxuICAgIC8vbGV0IHNlcnZpY2VUaXRsZUNvZGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC50aXRsZVxyXG4gICAgLy9sZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdoNCcpO1xyXG5cclxuICAgIC8vIGZ1bGwgLy8gbGV0IHNlcnZpY2VUaXRsZUNvZGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5zZXJ2aWNlLnRpdGxlO1xyXG4gICAgLy8gZnVsbCAvLyBsZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKTtcclxuXHJcbiAgICBsZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnRpdGxlO1xyXG4gICAgLy9sZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKTtcclxuICAgIGxldCBhcHBlbmRCdXR0b25UbyA9IGFuZ3VsYXIuZWxlbWVudCggKCRlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLmNsb3Nlc3QoJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInKS5xdWVyeVNlbGVjdG9yKCdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyLWFmdGVyJykgKVxyXG4gICAgXHJcbiAgICBsZXQgcmVjb3JkRGF0YSA9IHNlbGYuY3VycmVudFJlY29yZDtcclxuICAgICAgIC8qIGNhcHRjaGEgaW1wbGVtZW50YXRpb24gKEFscmVhZHkgdXNlZCBpbiApXHJcbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL1ZpdmlkQ29ydGV4L2FuZ3VsYXItcmVjYXB0Y2hhXHJcbiAgICAgICAgKi9cclxuICAgIGxldCBjYXBjaGFQdWJsaWNLZXkgPSB3aW5kb3cuYXBwQ29uZmlnW1wic3lzdGVtLWNvbmZpZ3VyYXRpb25cIl1bXCJQdWJsaWMgQ2FwdGNoYSBLZXlcIl07XHJcblxyXG4gICAgbGV0IFR5cGVzU2hvd1JlcXVlc3RBQ29weSA9IFsnY2hhcHRlcicsJ2pvdXJuYWwtYXJ0aWNsZScsJ3RoZXNpcy1kaXNzZXJ0YXRpb24nLCdjb25mZXJlbmNlJywncmVwb3J0JywnZGF0YXNldCcsJ2MtYm9va3JldmlldycsJ21lZGlhJywnc29mdHdhcmUnXTtcclxuICAgIGxldCBTdGF0dXNTaG93UmVxdWVzdEFDb3B5ID0gWydwdWJsaXNoZWQnXTtcclxuXHJcbiAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkge1xyXG4gICAgICB2YXIgU2hvd1JlcXVlc3RBQ29weVR5cGUgPSByZWNvcmREYXRhLnBueC5mYWNldHMubGZjMTYuZmlsdGVyKHZhbHVlID0+IC0xICE9PSBUeXBlc1Nob3dSZXF1ZXN0QUNvcHkuaW5kZXhPZih2YWx1ZSkpO1xyXG4gICAgICB2YXIgU2hvd1JlcXVlc3RBQ29weVN0YXR1cyA9IHJlY29yZERhdGEucG54LmZhY2V0cy5sZmMxMi5maWx0ZXIodmFsdWUgPT4gLTEgIT09IFN0YXR1c1Nob3dSZXF1ZXN0QUNvcHkuaW5kZXhPZih2YWx1ZSkpO1xyXG5cclxuICAgICAgaWYgKCghL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX25vcmVzdHJpY3QvLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkpICYmIFNob3dSZXF1ZXN0QUNvcHlUeXBlLmxlbmd0aCA+IDAgJiYgU2hvd1JlcXVlc3RBQ29weVN0YXR1cy5sZW5ndGggPiAwKSB7XHJcblxyXG5cclxuICAgICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgICAgc2VsZi5vbkNhbXB1cyA9IHNlbGYudXNlci5pc09uQ2FtcHVzKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBzZXJ2aWNlVGl0bGVDb2RlIClcclxuICAgICAgICAgICAgaWYgKCAhIC9ebnVpXFwuZ2V0aXRcXC50YWIxX29ubF9tYXlyZXN0cmljdC8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSAgfHwgL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX21heXJlc3RyaWN0Ly50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpICYmICEgc2VsZi5vbkNhbXB1cyApIHtcclxuICAgICAgICAgICAgICBhcHBlbmRCdXR0b25Uby5hZnRlcigkY29tcGlsZShyZXF1ZXN0QUNvcHlIVE1MKSgkc2NvcGUpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHNlbGYuc2hvd1JlcXVlc3RBQ29weUZvcm0gPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXHJcbiAgICAgICAgICAgICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHJlcXVlc3RBQ29weURpYWxvZ0hUTUwsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlLCAkbWREaWFsb2cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGxldCBwbnhEaXNwbGF5ID0gIHJlY29yZERhdGEucG54LmRpc3BsYXk7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5nQ2FwdGNoYVJlc3BvbnNlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5jYXBjaGFQdWJsaWNLZXkgPSBjYXBjaGFQdWJsaWNLZXk7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5yZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBtb3RpdmF0aW9uOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcG54RGlzcGxheS50aXRsZVswXSxcclxuICAgICAgICAgICAgICAgICAgICBjb250cmlidXRvcjogKCgpID0+IHsgKCBwbnhEaXNwbGF5LmNvbnRyaWJ1dG9yID8gcG54RGlzcGxheS5jb250cmlidXRvclswXSA6ICcnICkgfSkoKSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdG9yOiBwbnhEaXNwbGF5LmNyZWF0b3IgPyBwbnhEaXNwbGF5LmNyZWF0b3JbMF0gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBpc3BhcnRvZjogcG54RGlzcGxheS5pc3BhcnRvZiA/IHBueERpc3BsYXkuaXNwYXJ0b2ZbMF0gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAncmVxdWVzdCBhIGNvcHknXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZXRXaWRnZXRJZCA9IGZ1bmN0aW9uICh3aWRnZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnQ3JlYXRlZCB3aWRnZXQgSUQ6ICVzJywgd2lkZ2V0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS53aWRnZXRJZCA9IHdpZGdldElkO1xyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2V0UmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldCByZXNwb25zZSBmcm9tIGNhcHR1cmU6XCIgKyByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdDYXB0Y2hhUmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNiRXhwaXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0V4cGlyYXRpb24gRGlzYWJsZSBTdWJtaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ0NhcHRjaGFSZXNwb25zZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNhbmNlbFJlcXVlc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VuZFJlcXVlc3QgPSBmdW5jdGlvbiAoYW5zd2VyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ2ctcmVjYXB0Y2hhLXJlc3BvbnNlJzogJHNjb3BlLmdDYXB0Y2hhUmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uSWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5zb3VyY2VpZFswXSxcclxuICAgICAgICAgICAgICAgICAgICAgIHJlY29yZElkOiByZWNvcmREYXRhLnBueC5jb250cm9sLnJlY29yZGlkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlUmVjb3JkSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wuc291cmNlcmVjb3JkaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcG54RGlzcGxheS50aXRsZVswXSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dG9yOiAoKCkgPT4geyAoIHBueERpc3BsYXkuY29udHJpYnV0b3IgPyBwbnhEaXNwbGF5LmNvbnRyaWJ1dG9yWzBdIDogJycgKSB9KSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRvcjogcG54RGlzcGxheS5jcmVhdG9yID8gcG54RGlzcGxheS5jcmVhdG9yWzBdIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc3BhcnRvZjogcG54RGlzcGxheS5pc3BhcnRvZiA/IHBueERpc3BsYXkuaXNwYXJ0b2ZbMF0gOiAnJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXBseVRvOiAkc2NvcGUucmVxdWVzdC5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1vdGl2YXRpb246ICRzY29wZS5yZXF1ZXN0Lm1vdGl2YXRpb25cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nICggZGF0YSApXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnJlcXVlc3QucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5yZXF1ZXN0Lm1vdGl2YXRpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6cmVxdWVzdEFDb3B5VVJMLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi4kcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLiR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5yZXF1ZXN0X2FfY29weS5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSB0aGUgcmVxdWVzdCBoYWQgYmVlbiBzZW5kISc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLl9fc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogJHNjb3BlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVEZWxheTogNTAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYuJHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC4kdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkucmVxdWVzdF9hX2NvcHkuZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IHRoZSByZXF1ZXN0Lic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBtZXNzYWdlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2UuX19zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiAkc2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURlbGF5OiA1MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07IC8vc2hvd1JlcXVlc3RBQ29weUZvcm1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IC8vaWYgKCAoICEgL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX25vcmVzdHJpY3QvLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkgICkgKXtcclxuICAgIH0gLy8gaWYgKC9ebnVpXFwuZ2V0aXRcXC4vLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkpICBcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50UmVjb3JkKCkge1xyXG4gICAgbGV0IHNlbGVjdG9yID0gJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInOyAvLydwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJ1xyXG4gICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgbGV0IGVsZW1lbnRDdHJsID0gZWxlbWVudC5jb250cm9sbGVyKHNlbGVjdG9yKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudEN0cmwpO1xyXG4gICAgICByZXR1cm4gZWxlbWVudEN0cmwuaXRlbTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuUmVxdWVzdEFDb3B5Q29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRodHRwJywgJyRyb290U2NvcGUnLCAncmVxdWVzdEFDb3B5VVJMJywgJ01lc3NhZ2VTZXJ2aWNlJ107XHJcblxyXG5leHBvcnQgbGV0IHJlcXVlc3RBQ29weUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBSZXF1ZXN0QUNvcHlDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59IiwiaW1wb3J0IHJlcXVlc3RBQ29weU9mRXNEb2NIVE1MIGZyb20gJy4vcmVxdWVzdEFDb3B5T2ZFc0RvYy5odG1sJ1xyXG5cclxuY2xhc3MgUmVxdWVzdEFDb3B5T2ZFc0RvY0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsIHJlcXVlc3RBQ29weU9mRXNEb2NVUkwsICR3aW5kb3csIFdpbmRvd0V2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi4kcm9vdFNjb3BlID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuJHJvb3RTY29wZTtcclxuICAgICAgICBzZWxmLldpbmRvd0V2ZW50TGlzdGVuZXIgPSBXaW5kb3dFdmVudExpc3RlbmVyO1xyXG4gICAgICAgIC8vIElmIHlvdSB3YW50IHRvIGFkZCB0aGUgYnV0dG9uIHRvIHRoZSB0aXRsZSAobGlrZSByZXBvcnQgYSBwcm9ibGVtKVxyXG4gICAgICAgIC8vbGV0IHNlcnZpY2VUaXRsZUNvZGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC50aXRsZVxyXG4gICAgICAgIC8vbGV0IGFwcGVuZEJ1dHRvblRvID0gJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnaDQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnNlcnZpY2UpIHtcclxuICAgICAgICAgICAgbGV0IHNlcnZpY2VUaXRsZUNvZGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5zZXJ2aWNlLnRpdGxlO1xyXG4gICAgICAgICAgICBsZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKTtcclxuICAgICAgICAgICAgbGV0IHJlY29yZERhdGEgPSBzZWxmLmN1cnJlbnRSZWNvcmQ7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGxldCBUeXBlc1Nob3dSZXF1ZXN0QUNvcHlPZkVzRG9jID0gWydjaGFwdGVyJywgJ2pvdXJuYWwtYXJ0aWNsZScsICd0aGVzaXMtZGlzc2VydGF0aW9uJywgJ2NvbmZlcmVuY2UnLCAncmVwb3J0JywgJ2RhdGFzZXQnLCAnYy1ib29rcmV2aWV3JywgJ21lZGlhJywgJ3NvZnR3YXJlJ107XHJcbiAgICAgICAgICAgIGxldCBTdGF0dXNTaG93UmVxdWVzdEFDb3B5T2ZFc0RvYyA9IFsncHVibGlzaGVkJ107XHJcbiAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggc2VsZiApXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCRzY29wZSlcclxuICAgICAgICAgICAgICAgIGxldCBwcmltb0V4cGxvcmVKd3QgPSBzZWxmLiRyb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwuand0VXRpbFNlcnZpY2Uuc3RvcmFnZVV0aWwuc2Vzc2lvblN0b3JhZ2UucHJpbW9FeHBsb3JlSnd0O1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZi4kcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLmp3dFV0aWxTZXJ2aWNlLnN0b3JhZ2VVdGlsLnNlc3Npb25TdG9yYWdlLnByaW1vRXhwbG9yZUp3dClcclxuXHJcbiAgICAgICAgICAgICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgc2VsZi5vbkNhbXB1cyA9IHNlbGYudXNlci5pc09uQ2FtcHVzKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmlzTG9nZ2VkSW4gPSBzZWxmLnVzZXIuaXNMb2dnZWRJbigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kaXNwbGF5X25hbWUgPSBzZWxmLnVzZXIuZGlzcGxheV9uYW1lXHJcbiAgICAgICAgICAgICAgICBzZWxmLmVtYWlsID0gc2VsZi51c2VyLmVtYWlsXHJcbiovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmltb19pbnN0X2NvZGUgPSB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2luc3RpdHV0aW9uJ11bJ2luc3RpdHV0aW9uLWNvZGUnXSBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWxtYV9pbnN0X21hcHBpbmcgPSAgd2luZG93LmFwcENvbmZpZ1snbWFwcGluZy10YWJsZXMnXVsnQWxtYSBJbnN0aXR1dGlvbiBDb2RlcyddXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFsbWFfY29kZSA9IChhbG1hX2luc3RfbWFwcGluZy5maWx0ZXIoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLnRhcmdldCA9PSBwcmltb19pbnN0X2NvZGU7IH0pIClbMF0uc291cmNlMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcG54ID0gcmVjb3JkRGF0YS5wbng7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwcGVuZEJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBSZXF1ZXN0IGJ1dHRvbiBvbmx5IGZvciBBcmNoaXYtbWF0ZXJpYWwgZnJvbSBFU1ZMUCBhbmQgYXZhaWxhYmxlICdvbmNhbXB1cycgT1IgU2lnbmVkIGluIFxyXG4gICAgICAgICAgICAgICAgICAgICogIE9ubHkgcGh5c2ljYWwgb3IgUmVzdHJpY3RlZCBPbmxpbmUgbWF0ZXJpYWwgY2FuIGJlIHJlcXVlc3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAodXNlci5pc09uQ2FtcHVzKCkgfHwgdXNlci5pc0xvZ2dlZEluKCkgKSAmJiBwbnguY29udHJvbC5zb3VyY2VpZC5pbmNsdWRlcyhcIkVTVkxQX3Njb3BlQXJjaGl2XCIpICkgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5mYWNldHMudG9wbGV2ZWwuaW5jbHVkZXMoXCJwcmludF9jb3BpZXNcIikgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRCdXR0b24gPXRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5kZWxpdmVyeS5yZXNkZWxzY29wZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGVsaXZlcnkucmVzZGVsc2NvcGUuaW5jbHVkZXMoXCJSRVNWTFBcIikgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEJ1dHRvbiA9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcGVuZEJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRCdXR0b25Uby5hZnRlcigkY29tcGlsZShyZXF1ZXN0QUNvcHlPZkVzRG9jSFRNTCkoJHNjb3BlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcGVuVXJsVG9JTEwgPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHA6Ly9zZXJ2aWNlcy5saWJpcy5iZS9pbGxmb3JtLzMyS1VMX1NFUlY/cmZ0LmdlbnJlPWJvb2smcmZ0LmFkdmlzb3I9JnJmdC5hdT0mcmZ0LmF1Y29ycD0mcmZ0LmF1Zmlyc3Q9JnJmdC5hdWxhc3Q9JnJmdC5jb250cmlidXRvcj0mcmZ0LmNyZWF0b3I9JnJmdC5hdGl0bGU9JnJmdC5idGl0bGU9V29vZCZyZnQuanRpdGxlPSZyZnQuc3RpdGxlPSZyZnQudGl0bGU9V29vZCZyZnQuc2VyaWVzPSZyZnQuZGVncmVlPSZyZnQuZGVzY3JpcHRpb249JnJmdC5lZGl0aW9uPSZyZnQuaWRlbnRpZmllcj0mcmZ0LmVpc2JuPSZyZnQuZWlzc249JnJmdC5pc2JuPTk3ODA3MTQ4NzM0ODAmcmZ0Lmlzc249JnJmdC5wYWdlcz0mcmZ0LnBhcnQ9JnJmdC5lcGFnZT0mcmZ0LnNwYWdlPSZyZnQuc3NuPSZyZnQudHBhZ2VzPSZyZnQueWVhcj0mcmZ0Lm1vbnRoPSZyZnQuZGF5PSZyZnQudm9sdW1lPSZyZnQuaXNzdWU9JnJmdC5kYXRlPSZyZnQucGxhY2U9JnJmdC5wdWI9JnJmdC5wdWJkYXRlPTIwMTcmcmZ0LnB1YmRheT0mcmZ0LnB1Ymxpc2hlcj0mcmZ0LnB1YnllYXI9JmxvY2FsZT1ubF9CRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWQvcHJpbW8uZXhsaWJyaXNncm91cC5jb206cHJpbW8zLUFydGljbGUtRVNWTFBfc2NvcGVBcmNoaXYmcmZ0X3ZhbF9mbXQ9aW5mbzpvZmkvZm10OmtldjptdHg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BlbnVybCA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5kaXNwbGF5LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0LmdlbnJlPVwiICsgZW5jb2RlVVJJKHBueC5kaXNwbGF5LnR5cGVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5kaXNwbGF5LnR5cGVbMF0gPT09IFwiYXJ0aWNsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRpc3BsYXkudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5hdGl0bGU9XCIgKyBlbmNvZGVVUkkocG54LmRpc3BsYXkudGl0bGVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRpc3BsYXkuaXNwYXJ0b2YpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5qdGl0bGU9XCIgKyBlbmNvZGVVUkkocG54LmRpc3BsYXkuaXNwYXJ0b2ZbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRpc3BsYXkudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5idGl0bGU9XCIgKyBlbmNvZGVVUkkocG54LmRpc3BsYXkudGl0bGVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5kaXNwbGF5LnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5idGl0bGU9XCIgKyBlbmNvZGVVUkkocG54LmRpc3BsYXkudGl0bGVbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5kaXNwbGF5LmxkczI2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5hdT1cIiArIGVuY29kZVVSSShwbnguZGlzcGxheS5sZHMyNlswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRpc3BsYXkuY3JlYXRpb25kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVudXJsICs9IFwiJnJmdC5kYXRlPVwiICsgZW5jb2RlVVJJKHBueC5kaXNwbGF5LmNyZWF0aW9uZGF0ZVswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgJnJmdC5wYWdlcz1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJnJmdC5hcnRudW09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZyZnQuaXNzbj1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJnJmdC5laXNzbj1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJnJmdC5pc2JuPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmcmZ0LnNpY2k9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZyZnQuZWlzYm49XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZyZnQuY29kZW49XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZyZnRfaWQ9aW5mbzpkb2kvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICZyZnQub2JqZWN0X2lkPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0X2RhdD0lM0NcIiArIGVuY29kZVVSSShwbnguY29udHJvbC5zb3VyY2VpZFswXSkgKyBcIiUzRVwiICsgZW5jb2RlVVJJKHBueC5jb250cm9sLnNvdXJjZXJlY29yZGlkWzBdKSArIFwiJTNDL1wiICsgZW5jb2RlVVJJKHBueC5jb250cm9sLnNvdXJjZWlkWzBdKSArIFwiJTNFXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9vcGVudXJsID0gcmVxdWVzdEFDb3B5T2ZFc0RvY1VSTCArIFwiLzMyS1VMX1ZMUD9cIiArIG9wZW51cmwgKyBcIiZhY2Nlc3NfdG9rZW49XCIgKyBwcmltb0V4cGxvcmVKd3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbnVybCA9IHJlcXVlc3RBQ29weU9mRXNEb2NVUkwgKyBcIi9cIisgYWxtYV9jb2RlICtcIj9cIiArIG9wZW51cmwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR3aW5kb3cub3BlbihvcGVudXJsLCAnX2JsYW5rJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnRSZWNvcmQoKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInOyAvLydwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJ1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKTtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Q3RybCk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50Q3RybC5pdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuUmVxdWVzdEFDb3B5T2ZFc0RvY0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJ3JlcXVlc3RBQ29weU9mRXNEb2NVUkwnLCAnJHdpbmRvdycsICdXaW5kb3dFdmVudExpc3RlbmVyJ107XHJcblxyXG5leHBvcnQgbGV0IHJlcXVlc3RBQ29weU9mRXNEb2NDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IFJlcXVlc3RBQ29weU9mRXNEb2NDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6ICcnXHJcbn0iLCJjbGFzcyBBbm5vdW5jZW1lbnRzQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgTWVzc2FnZVNlcnZpY2Uuc2hvdygnJywgJHNjb3BlKTtcclxuICB9XHJcbn1cclxuXHJcbkFubm91bmNlbWVudHNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICdNZXNzYWdlU2VydmljZSddO1xyXG5cclxuZXhwb3J0IGxldCBhbm5vdW5jZW1lbnRzQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcclxuICBjb250cm9sbGVyOiBBbm5vdW5jZW1lbnRzQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgZmVlZGJhY2tBbm5vdW5jZW1lbnRIVE1MIGZyb20gJy4vZmVlZGJhY2tBbm5vdW5jZW1lbnQuaHRtbCdcclxuaW1wb3J0IGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nSFRNTCBmcm9tICcuL2ZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nLmh0bWwnXHJcbmltcG9ydCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIgZnJvbSAnLi9mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZydcclxuXHJcbmNsYXNzIEZlZWRiYWNrQW5ub3VuY2VtZW50Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkdGltZW91dCwgRmVlZGJhY2tTZXJ2aWNlLCBNZXNzYWdlU2VydmljZSwgYWN0aW9uSWNvbnMpIHtcclxuXHJcbiAgICAvLyR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgLy9sZXQgbWVzc2FnZSA9ICR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5zdXJ2ZXkuYW5ub3VuY2VtZW50Jyk7XHJcbiAgICAgIGxldCBzaG93RmVlZGJhY2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJpbW9GZWVkYmFjaycpO1xyXG4gICAgICBpZiAoc2hvd0ZlZWRiYWNrID09IG51bGwpIHtcclxuICAgICAgICAkdHJhbnNsYXRlKCdsYnMubnVpLnN1cnZleS5hbm5vdW5jZW1lbnQnKS50aGVuKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KGZlZWRiYWNrQW5ub3VuY2VtZW50SFRNTC5yZXBsYWNlKCd7e21lc3NhZ2V9fScsIG1lc3NhZ2UpLCB7XHJcbiAgICAgICAgICAgIHNjb3BlOiAkc2NvcGUsXHJcbiAgICAgICAgICAgIGhpZGVEZWxheTogMCxcclxuICAgICAgICAgICAgYWN0aW9uTGFiZWw6ICR0cmFuc2xhdGUuaW5zdGFudCgnbWFpbm1lbnUubGFiZWwuZmVlZGJhY2snKSB8fCAnRmVlZGJhY2snLFxyXG4gICAgICAgICAgICBhY3Rpb246XHJcbiAgICAgICAgICAgICAgKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgRmVlZGJhY2tTZXJ2aWNlLnNob3coJGV2ZW50LCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0hUTUwsIGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIC8vfSwgMjAwMCk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuRmVlZGJhY2tBbm5vdW5jZW1lbnRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckdHJhbnNsYXRlJywgJyR0aW1lb3V0JywgJ0ZlZWRiYWNrU2VydmljZScsICdNZXNzYWdlU2VydmljZScsICdhY3Rpb25JY29ucyddO1xyXG5cclxuZXhwb3J0IGxldCBmZWVkYmFja0Fubm91bmNlbWVudENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBGZWVkYmFja0Fubm91bmNlbWVudENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICR0cmFuc2xhdGUsICRodHRwLCBmZWVkYmFja1NlcnZpY2VVUkwsIE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5tZERpYWxvZyA9ICRtZERpYWxvZztcclxuICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgdGhpcy5odHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCA9IGZlZWRiYWNrU2VydmljZVVSTDtcclxuXHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgJHNjb3BlLmNhbmNlbEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLm1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5zZW5kRmVlZGJhY2sgPSAoYW5zd2VyKSA9PiB7XHJcbiAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIHN1YmplY3Q6ICRzY29wZS5mZWVkYmFjay5zdWJqZWN0LFxyXG4gICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxyXG4gICAgICAgIGluc3Q6IHNlbGYudmlldy5pbnN0aXR1dGlvbi5jb2RlLFxyXG4gICAgICAgIGxvZ2dlZEluOiBzZWxmLnVzZXIuaXNMb2dnZWRJbigpLFxyXG4gICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxyXG4gICAgICAgIHVzZXI6IHNlbGYudXNlci5uYW1lLFxyXG4gICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcclxuICAgICAgICB0eXBlOiAnc3VydmV5JyxcclxuICAgICAgICBmZWVkYmFjazogJHNjb3BlLmZlZWRiYWNrLmFuc3dlcnMsXHJcbiAgICAgICAgZW1haWw6ICRzY29wZS5mZWVkYmFjay5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICB1c2VySWQ6IHNlbGYudXNlci5pZCB8fCAnJyxcclxuICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICgkc2NvcGUuZmVlZGJhY2sucmVwbHlUby5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2VsZi5tZERpYWxvZy5oaWRlKCk7XHJcblxyXG4gICAgICAgIHNlbGYuaHR0cCh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHVybDogdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmltb0ZlZWRiYWNrJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJztcclxuICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAvL3NlbGYubWRUb2FzdC5zaG93U2ltcGxlKCdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJyk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJztcclxuICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAvL3NlbGYubWRUb2FzdC5zaG93U2ltcGxlKCdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgc2VsZi52aWV3ID0gdmlldztcclxuICAgICAgICAkc2NvcGUuZmVlZGJhY2sgPSB7XHJcbiAgICAgICAgICByZXBseVRvOiBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICBhbnN3ZXJzOiBbXSxcclxuICAgICAgICAgIHN1YmplY3Q6ICdmZWVkYmFjaydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckdHJhbnNsYXRlJywgJyRodHRwJywgJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdNZXNzYWdlU2VydmljZSddO1xyXG4iLCJjbGFzcyBGaW5lc01lc3NhZ2VDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcihNZXNzYWdlU2VydmljZSwgJHRyYW5zbGF0ZSwgJHJvb3RTY29wZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICBpZiAodXNlci5maW5lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy9UT0RPOmV4dHJhY3QgaHRtbCB0byBpdHMgb3duIGZpbGUuIGZpbmQgb3V0IGhvdyB0byByZXNvbHZlIHt7fX1cclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkueW91SGF2ZUZpbmVzJyk7XHJcbiAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgvXFwkMC8sIHVzZXIuZmluZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbGV0IHBheSA9ICR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS55b3VIYXZlRmluZXMucGF5Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhgXHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiYWxpZ24tc2VsZjpjZW50ZXI7XCI+JHttZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGEgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87Y29sb3I6IHdoaXRlO1wiXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibWQtYnV0dG9uIG1kLXJhaXNlZCBtZC1zZWN1bmRhcnlcIiB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9wYXlfbXlfZmluZXMnPiR7cGF5fTwvYT5cclxuICAgICAgICAgIGApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkZpbmVzTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnTWVzc2FnZVNlcnZpY2UnLCAnJHRyYW5zbGF0ZScsICckcm9vdFNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGZpbmVzTWVzc2FnZUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBGaW5lc01lc3NhZ2VDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsdG1ldHJpY3NTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICRjb21waWxlLCAkbWRUb2FzdCwgJHRpbWVvdXQsICR3aW5kb3cpIHtcclxuICAgICAgICB0aGlzLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAgICAgdGhpcy5jb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICAgICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy53aW5kb3cgPSAkd2luZG93O1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0FsdG1ldHJpY3NjcmlwdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IDIwMDtcclxuICAgICAgICAgICAgdmFyIGVuZFRpbWUgPSBOdW1iZXIobmV3IERhdGUoKSkgKyAxNTAwMDsgLy8gc3RvcCBjb250cm9sIGFmdGVyIDUgc2Vjb25kc1xyXG5cclxuICAgICAgICAgICAgdmFyIHdhaXRfdW50aWxfYWx0bWV0cmljc19sb2FkZWQgPSBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29uZGl0aW9uIGlzIG1ldCwgd2UncmUgZG9uZSEgXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdHlwZW9mIHdpbmRvdy5fYWx0bWV0cmljX2VtYmVkX2luaXQgPT09ICdmdW5jdGlvbic7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbmRpdGlvbiBpc24ndCBtZXQgYnV0IHRoZSB0aW1lb3V0IGhhc24ndCBlbGFwc2VkLCBnbyBhZ2FpblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoTnVtYmVyKG5ldyBEYXRlKCkpIDwgZW5kVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQod2FpdF91bnRpbF9hbHRtZXRyaWNzX2xvYWRlZCwgaW50ZXJ2YWwsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBEaWRuJ3QgbWF0Y2ggYW5kIHRvbyBtdWNoIHRpbWUsIHJlamVjdCFcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1dhaXQgdW50aWwgYWx0bWV0cmljcyBpcyBsb2FkZWQgdGltZWQgb3V0JykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2Uod2FpdF91bnRpbF9hbHRtZXRyaWNzX2xvYWRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEFsdG1ldHJpY3MoYWx0bWV0cmljc0VsZW1lbnRTZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQWx0bWV0cmljc2NyaXB0cygpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdMb2FkaW5nIGFsdG1ldHJpY3M6IFdlIGt1bm5lbiBzdGFydGVuJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fYWx0bWV0cmljX2VtYmVkX2luaXQoYWx0bWV0cmljc0VsZW1lbnRTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuQWx0bWV0cmljc1NlcnZpY2UuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckY29tcGlsZScsICckbWRUb2FzdCcsICckdGltZW91dCcsICckd2luZG93J107XHJcbiIsImV4cG9ydCBsZXQgYXBpQ2FsbEludGVyY2VwdG9yID0gWygpID0+IHtcclxuICAgIHZhciBhcGlDYWxsSW50ZXJjZXB0b3IgPSB7XHJcbiAgICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL1wiQXNzZXNzaW5nIEdvc3BlbCBRdW90YXRpb25zIGluIEp1c3RpbiBNYXJ0eXJcIlxyXG4gICAgICAgICAgICBsZXQgZml4RGlzcGxheURhdGEgPSBmdW5jdGlvbiAocG54RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBueERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54RGF0YS5kaXNwbGF5ICYmIHBueERhdGEuZGlzcGxheS5jcmVhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG54RGF0YS5kaXNwbGF5LmNyZWF0b3IgPSBwbnhEYXRhLmRpc3BsYXkuY3JlYXRvci5tYXAoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVsYXRvciA9IGMubWF0Y2goL1xcKC4qP1xcKS9pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYy5zcGxpdCgvXFwoLio/XFwpL2kpLmpvaW4oXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYz1gJHtjfSAkJFEke2RhdGF9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54RGF0YS5kaXNwbGF5ICYmIHBueERhdGEuZGlzcGxheS5jb250cmlidXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBueERhdGEuZGlzcGxheS5jb250cmlidXRvciA9IHBueERhdGEuZGlzcGxheS5jb250cmlidXRvci5tYXAoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVsYXRvciA9IGMubWF0Y2goL1xcKC4qP1xcKS9pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYy5zcGxpdCgvXFwoLio/XFwpL2kpLmpvaW4oXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYz1gJHtjfSAkJFEke2RhdGF9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG54RGF0YTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKC9eXFwvcHJpbW9fbGlicmFyeVxcL2xpYndlYlxcL3dlYnNlcnZpY2VzXFwvcmVzdFxcL3ByaW1vLWV4cGxvcmVcXC92MVxcL3BueHMvLnRlc3QocmVzcG9uc2UuY29uZmlnLnVybCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmluY2x1ZGVzKCdkb2NzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kb2NzLm1hcChwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXhEaXNwbGF5RGF0YShwLnBueCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcygncG54JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucG54ID0gZml4RGlzcGxheURhdGEoZGF0YS5wbngpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9SZW1vdmUgb3BlbiBhY2Nlc3MgZnJvbSBmYWNldHNcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcygnZmFjZXRzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtcImZhY2V0c1wiXSA9IGRhdGFbXCJmYWNldHNcIl0ubWFwKG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0ubmFtZSA9PSBcInRsZXZlbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbS52YWx1ZXMgPSBtLnZhbHVlcy5maWx0ZXIodCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnZhbHVlICE9PSAnb3Blbl9hY2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhJywgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcGlDYWxsSW50ZXJjZXB0b3I7XHJcbn1dIiwiZXhwb3J0IGxldCBkYlNlYXJjaEh0dHBDYWxsSW50ZXJjZXB0b3IgPSAgWygpID0+IHtcclxuICB2YXIgaHR0cENhbGxJbnRlcmNlcHRvciA9IHtcclxuICAgIHJlcXVlc3Q6IGZ1bmN0aW9uKGNvbmZpZyl7XHJcbiAgICAgIGlmIChjb25maWcudXJsLmluY2x1ZGVzKCdwbnhzJykgJiYgIWNvbmZpZy51cmwuaW5jbHVkZXMoJ2RlbGl2ZXJ5JykgJiYgY29uZmlnLnBhcmFtcykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coY29uZmlnKTtcclxuICAgICAgICBpZihjb25maWcucGFyYW1zLmRhdGFiYXNlcyB8fCBjb25maWcucGFyYW1zLmpvdXJuYWxzKXtcclxuICAgICAgICAgIGNvbmZpZy5wYXJhbXMuaW5zdCA9ICdLVUwnO1xyXG4gICAgICAgICAgY29uZmlnLnBhcmFtcy52aWQgPSAnS1VMZXV2ZW4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBodHRwQ2FsbEludGVyY2VwdG9yO1xyXG59XTtcclxuIiwiZXhwb3J0IGxldCBmZWVkU2VydmljZSA9IFsnJGh0dHAnLCBmdW5jdGlvbigkaHR0cCkge1xyXG4gIHZhciBmZWVkQW50aUNhY2hlID0gXCI/JnQ9XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHJhbmRvbU51bTtcclxuICB2YXIgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAgKyAxKTtcclxuICB2YXIgZmVlZGRheXNvbGQgPSA2MDtcclxuXHJcbiAgdmFyIGRtID0gbmV3IERhdGUoKTtcclxuICBkbS5zZXRIb3VycygyNCwgMCwgMCwgMCk7XHJcblxyXG4gIHZhciBhcGlfZW5kcG9pbnQgPSAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9mZWVkX2FnZ3JlZ2F0b3I/JztcclxuXHJcbiAgZnVuY3Rpb24gcmVhZEZlZWRDb25maWcodXJsKSB7XHJcbiAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICB1cmw6IHVybCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiWC1Gcm9tLUV4TC1BUEktR2F0ZXdheVwiOiB1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZWFkRmVlZCh1cmwpIHtcclxuICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgIHVybDogYXBpX2VuZHBvaW50ICsgdXJsLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLUZyb20tRXhMLUFQSS1HYXRld2F5XCI6IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhcnNlRmVlZChjb25mKSB7XHJcbiAgICByZXR1cm4gcmVhZEZlZWQoY29uZi5mZWVkVXJsKS50aGVuKGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGNvbmYuZmVlZFVybCk7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29uZi5mZWVkRmlsdGVyKTtcclxuICAgICAgdmFyIHBhdHQgPSAvXmVudHJ5XFwufF5pdGVtXFwuL2k7XHJcbiAgICAgIHZhciBmaWx0ZXJlZFJlc3VsdHMgPSByZXMuZGF0YS5pdGVtcy5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICB2YXIgcmV0dmFsID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGl0ZW0ucHViRGF0ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgaXRlbS5wdWJEYXRlID0gZG07XHJcbiAgICAgICAgICByZXMuZGF0YS5pdGVtc1tpbmRleF0ucHViRGF0ZSA9IGRtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBubyBmaWx0ZXIgY29uZmlndXJlZCAqL1xyXG4gICAgICAgIGlmIChjb25mLmZlZWRGaWx0ZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICByZXR2YWwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25mLmZlZWRGaWx0ZXIuZm9yRWFjaChmdW5jdGlvbihmKSB7XHJcbiAgICAgICAgICBpZiAocGF0dC50ZXN0KGYucGFyYW0pKSB7XHJcbiAgICAgICAgICAgIHZhciBmZiA9IGYucGFyYW0ucmVwbGFjZShwYXR0LCBcIlwiKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbVtmZl0pKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW1bZmZdLmluZGV4T2YoZi52YWx1ZSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtW2ZmXSA9PSBmLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR2YWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qIGZpbHRlciBvbGQgaXRlbXMgKi9cclxuICAgICAgICBpZiAoZmVlZGRheXNvbGQgPCBNYXRoLmNlaWwoZG0uZ2V0VGltZSgpIC0gbmV3IERhdGUoaXRlbS5wdWJEYXRlKS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSB7XHJcbiAgICAgICAgICByZXR2YWwgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXR2YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIGhhbmRsZSBlcnJvcnNcclxuICAgIH0pOztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNvcnRGZWVkKGZlZWRzKSB7XHJcbiAgICAvL3JldHVybiBmZWVkcy5zb3J0KGNvbXBhcmVEYXRlcyk7XHJcbiAgICByZXR1cm4gZmVlZHMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEucHViRGF0ZSk7XHJcbiAgICAgIHZhciBkYXRlQiA9IG5ldyBEYXRlKGIucHViRGF0ZSk7XHJcbiAgICAgIGlmIChkYXRlQS5nZXRUaW1lKCkgPT09IGRtLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGRhdGVBID0gbmV3IERhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGVCLmdldFRpbWUoKSA9PT0gZG0uZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZSgwKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlYWRGZWVkQ29uZmlnOiByZWFkRmVlZENvbmZpZyxcclxuICAgIHJlYWRGZWVkOiByZWFkRmVlZCxcclxuICAgIHBhcnNlRmVlZDogcGFyc2VGZWVkLFxyXG4gICAgc29ydEZlZWQ6IHNvcnRGZWVkXHJcbiAgfTtcclxufV07XHJcbiIsImltcG9ydCBmZWVkYmFja1NlcnZpY2VIVE1MIGZyb20gJy4vZmVlZGJhY2tTZXJ2aWNlLmh0bWwnXHJcbmltcG9ydCBEaWFsb2dDb250cm9sbGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZ2VuZXJhbC9kaWFsb2cnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVlZGJhY2tTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcigkbWREaWFsb2cpIHtcclxuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XHJcbiAgfVxyXG5cclxuICBzaG93KCRldmVudCA9IG51bGwsIGZlZWRiYWNrRGlhbG9nSFRNTCA9IG51bGwsIGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlciA9IG51bGwpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmIChmZWVkYmFja0RpYWxvZ0hUTUwgPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBkaWFsb2cgaW5zdGFudGlhdGVkJyk7XHJcbiAgICAgIGZlZWRiYWNrRGlhbG9nSFRNTCA9IGZlZWRiYWNrU2VydmljZUhUTUw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlciA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IGRpYWxvZyBjb250cm9sbGVyIGluc3RhbnRpYXRlZCcpO1xyXG4gICAgICBmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPSBEaWFsb2dDb250cm9sbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWREaWFsb2cuc2hvdyh7XHJcbiAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxyXG4gICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgdGVtcGxhdGU6IGZlZWRiYWNrRGlhbG9nSFRNTCxcclxuICAgICAgY29udHJvbGxlcjogZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkZlZWRiYWNrU2VydmljZS4kaW5qZWN0ID0gWyckbWREaWFsb2cnXTtcclxuIiwiaW1wb3J0IG1lc3NhZ2VTZXJ2aWNlSFRNTCBmcm9tICcuL21lc3NhZ2VTZXJ2aWNlLmh0bWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJGNvbXBpbGUsICRtZFRvYXN0LCAkc2NlLCAkdHJhbnNsYXRlLCAkdGltZW91dCkge1xyXG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XHJcbiAgICB0aGlzLnNjZSA9ICRzY2U7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgIHRoaXMuY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG5cclxuICAgIC8vIHRoaXMubWVzc2FnZVNlcnZpY2VFdmVudEhhbmRsZXIgPSB0aGlzLnJvb3RTY29wZS4kb24oJyR0cmFuc2xhdGVMb2FkaW5nRW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT4gdHJhbnNsYXRpb24gbG9hZGVkIDw9PT09PT09PT09XCIpO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBzaG93KG1lc3NhZ2UgPSAnJywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IG51bGw7XHJcbiAgICBsZXQgaGlkZURlbGF5ID0gb3B0aW9ucy5oaWRlRGVsYXkgfHwgMDtcclxuICAgIGxldCBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbiB8fCBudWxsO1xyXG4gICAgbGV0IGFjdGlvbkxhYmVsID0gb3B0aW9ucy5hY3Rpb25MYWJlbCB8fCAndW5rbm93bic7XHJcbiAgICBsZXQgbWVzc2FnZUtleSA9ICdsYnMuZ2VuZXJhbE1lc3NhZ2UnO1xyXG5cclxuICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2VsZi5fX3Nob3coe1xyXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgc2NvcGU6IHNjb3BlLFxyXG4gICAgICAgIGhpZGVEZWxheTogaGlkZURlbGF5LFxyXG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgIGFjdGlvbkxhYmVsOiBhY3Rpb25MYWJlbFxyXG4gICAgICB9KTsgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnRyYW5zbGF0ZShtZXNzYWdlS2V5KS50aGVuKChtKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UgPSAobSA9PSBtZXNzYWdlS2V5IHx8IG0gPD0gMSkgPyAnJyA6IG07XHJcblxyXG4gICAgICBzZWxmLl9fc2hvdyh7XHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICBzY29wZTogc2NvcGUsXHJcbiAgICAgICAgaGlkZURlbGF5OiBoaWRlRGVsYXksXHJcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgYWN0aW9uTGFiZWw6IGFjdGlvbkxhYmVsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfX3Nob3cob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgc2NvcGUgPSBvcHRpb25zLnNjb3BlO1xyXG4gICAgbGV0IGhpZGVEZWxheSA9IG9wdGlvbnMuaGlkZURlbGF5O1xyXG4gICAgbGV0IGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uO1xyXG4gICAgbGV0IGFjdGlvbkxhYmVsID0gb3B0aW9ucy5hY3Rpb25MYWJlbDtcclxuICAgIGxldCBtZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlO1xyXG5cclxuICAgIC8vIGlmIChtZXNzYWdlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAvLyAgIC8vIGNvZGUgdGFibGUgZW50cmllcyBjYW4gbm90IGhhdmUgZW1wdHkgZGVzY3JpcHRpb25zLlxyXG4gICAgLy8gICAvLyBtZXNzYWdlIDw9IDEgd2lsbCBub3QgYmUgZGlzcGxheWVkISEhIVxyXG4gICAgLy8gICBsZXQgbWVzc2FnZUtleSA9ICdsYnMuZ2VuZXJhbE1lc3NhZ2UnO1xyXG4gICAgLy8gICBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudChtZXNzYWdlS2V5KTtcclxuICAgIC8vICAgbWVzc2FnZSA9IChtZXNzYWdlID09IG1lc3NhZ2VLZXkgfHwgbWVzc2FnZSA8PSAxKSA/ICcnIDogbWVzc2FnZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCB0b2FzdENvbmZpZyA9IHtcclxuICAgICAgICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLmFjdGlvbkxhYmVsID0gYWN0aW9uTGFiZWw7XHJcblxyXG4gICAgICAgICAgdGhpcy5vbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLm1kVG9hc3QuaGlkZSgpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25BY3Rpb24gPSAoJGV2ZW50ID0gbnVsbCkgPT4ge1xyXG4gICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgLy90aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChzZWxmLmNvbXBpbGUoYDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+YCkoc2VsZi5yb290U2NvcGUpLmh0bWwoKSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKHNlbGYuY29tcGlsZShgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKShzY29wZSkuaHRtbCgpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiBtZXNzYWdlU2VydmljZUhUTUwsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AgY2VudGVyJyxcclxuICAgICAgICBoaWRlRGVsYXk6IGhpZGVEZWxheVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLm1kVG9hc3Quc2hvdyh0b2FzdENvbmZpZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnTm8gbWVzc2FnZSB0byBkaXNwbGF5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuTWVzc2FnZVNlcnZpY2UuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckY29tcGlsZScsICckbWRUb2FzdCcsICckc2NlJywgJyR0cmFuc2xhdGUnLCAnJHRpbWVvdXQnXTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93RXZlbnRMaXN0ZW5lciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkd2luZG93KSB7XHJcbiAgICAgICAgJHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByZWNlaXZlTWVzc2FnZSwgZmFsc2UpO1xyXG4gICAgICAgIGxldCBwb3NzaWJsZU9yaWdpbnNQZXJFdmVudCA9IFt7XHJcbiAgICAgICAgICAgIGV2ZW50SWQgOiBcInJldHJpZXZlX3VzZXJcIixcclxuICAgICAgICAgICAgcG9zc2libGVPcmlnaW5zIDogWyBcImh0dHA6Ly9sb2NhbGhvc3Q6OTI5MlwiLFwiaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZVwiLFwiaHR0cHM6Ly9zYW5kYm94LWV1LmFsbWEuZXhsaWJyaXNncm91cC5jb21cIl1cclxuICAgICAgICB9XVxyXG4vLyBUT0RPIDogTWFhayBjb25maWcgaGFzaCB2YW4gb3JpZ2luIGVuIGV2ZW50X2lkID0+XHJcbiAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiByZWNlaXZlTWVzc2FnZShldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJyZWNlaXZlTWVzc2FnZSAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXCIpXHJcblxyXG4gICAgICAgICAgICBpZiAoICEgZXZlbnQuZGF0YSApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKFwiTm8gRXZlbnQgZGF0YSAhIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBvc3NpYmxlT3JpZ2luc09iaiA9IHBvc3NpYmxlT3JpZ2luc1BlckV2ZW50LmZpbmQoZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXYuZXZlbnRJZCA9PT0gZXZlbnQuZGF0YS5ldmVudF9pZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc3NpYmxlT3JpZ2luc09iaik7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJpbW9FeHBsb3JlSnd0ID0gJHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC5qd3RVdGlsU2VydmljZS5zdG9yYWdlVXRpbC5zZXNzaW9uU3RvcmFnZS5wcmltb0V4cGxvcmVKd3Q7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5ldmVudF9pZCA9PT0gXCJyZXRyaWV2ZV91c2VyXCIpIHtcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlT3JpZ2luc09iai5wb3NzaWJsZU9yaWdpbnMgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCAhICBwb3NzaWJsZU9yaWdpbnNPYmoucG9zc2libGVPcmlnaW5zLmluY2x1ZGVzKGV2ZW50Lm9yaWdpbikgICkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnNvdXJjZS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50X2lkOiBcInJldHJpZXZlX3VzZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib25DYW1wdXNcIjogdXNlci5pc09uQ2FtcHVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzTG9nZ2VkSW5cIjogdXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInViaWRcIjogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheV9uYW1lXCI6IHVzZXIuZGlzcGxheV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiOiB1c2VyLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBldmVudC5vcmlnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnNvdXJjZS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50X2lkOiBcImp3dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogcHJpbW9FeHBsb3JlSnd0XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZXZlbnQub3JpZ2luKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbldpbmRvd0V2ZW50TGlzdGVuZXIuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckd2luZG93J107IiwiLypcclxuICBDZW50cmFsIFBhY2thZ2UgTG9hZGVyXHJcblxyXG4gIERvIE5PVCBlZGl0IHRoaXMgZmlsZS5cclxuICBBbGwgY29tcG9uZW50cyBhcmUgZGVjbGFyZWQgaW4gXCJjb21wb25lbnRzLmpzXCJcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuaW1wb3J0IFByaW1vIGZyb20gJy4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8nXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlL2hlbHBlcidcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzJ1xyXG5cclxuaW1wb3J0IHtmZWVkU2VydmljZX0gZnJvbSAnLi9mYWN0b3JpZXMvZmVlZFNlcnZpY2UnXHJcbmltcG9ydCB7ZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yfSBmcm9tICcuL2ZhY3Rvcmllcy9kYlNlYXJjaEh0dHBDYWxsSW50ZXJjZXB0b3InXHJcbmltcG9ydCB7YXBpQ2FsbEludGVyY2VwdG9yfSBmcm9tICcuL2ZhY3Rvcmllcy9hcGlDYWxsSW50ZXJjZXB0b3InXHJcbmltcG9ydCBNZXNzYWdlU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9tZXNzYWdlU2VydmljZSdcclxuaW1wb3J0IEZlZWRiYWNrU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9mZWVkYmFja1NlcnZpY2UnXHJcbmltcG9ydCBBbHRtZXRyaWNzU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9hbHRtZXRyaWNzU2VydmljZSdcclxuXHJcbmltcG9ydCBXaW5kb3dFdmVudExpc3RlbmVyIGZyb20gJy4vZmFjdG9yaWVzL3dpbmRvd0V2ZW50TGlzdGVuZXInXHJcblxyXG5cclxuLy9tYWtlIFByaW1vIHB1YmxpY1xyXG53aW5kb3cuUHJpbW8gPSBQcmltbztcclxuLy9sb2FkIFByaW1vRXhwbG9yZXIgVUkgaWYgYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKCkgaXMgcmFuXHJcbndpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICBpZiAoUHJpbW8uaXNEZWJ1Z0VuYWJsZWQoKSkge1xyXG4gICAgbGV0IHVpVVJMID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vbWVobWV0Yy9wcmltby1leHBsb3JlLWRvbS11aS9mYzA4NjhkZi9qcy9jdXN0b20uanMnO1xyXG4gICAgLy9sZXQgdWlVUkwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2pzL2N1c3RvbS5qcyc7XHJcblxyXG4gICAgSGVscGVyLmxvYWRTY3JpcHQodWlVUkwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5qZWN0aW5nIFVJJyk7XHJcbiAgICAgIFByaW1vLmV4cGxvcmUudWkudG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0sIDIwMDApO1xyXG5cclxuLy9sZXQgc2VydmljZXNIb3N0ID0gJ2h0dHA6Ly8xOTIuMTY4LjEwMC4xMDE6OTI5Mi8nO1xyXG4vL2xldCBzZXJ2aWNlc0hvc3QgPSAnaHR0cDovL2xvY2FsaG9zdDo5MjkyLyc7XHJcbmxldCBzZXJ2aWNlc0hvc3QgPSAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS8nO1xyXG5cclxuXHJcbmxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnY2VudHJhbEN1c3RvbScsIFsnbmdNYXRlcmlhbCcsICd2Y1JlY2FwdGNoYSddKVxyXG4gIC8qXHJcbiAgLy8uY29uc3RhbnQoJ3NlcnZpY2VzSG9zdCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlLycpXHJcbiAgICAuY29uc3RhbnQoJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRiYWNrJylcclxuICAgIC5jb25zdGFudCgncmVwb3J0QVByb2JsZW1VUkwnLCAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9yZXBvcnRfYV9wcm9ibGVtJylcclxuICAgIC5jb25zdGFudCgncmVxdWVzdEFDb3B5VVJMJywgJ2h0dHA6Ly8xOTIuMTY4LjEwMC4xMDE6OTI5Mi8vcmVxdWVzdF9hX2NvcHknKVxyXG4gICovXHJcbiAgLmNvbnN0YW50KCdmZWVkYmFja1NlcnZpY2VVUkwnLCBzZXJ2aWNlc0hvc3QgKyAnZmVlZGJhY2snKVxyXG4gIC5jb25zdGFudCgncmVwb3J0QVByb2JsZW1VUkwnLCBzZXJ2aWNlc0hvc3QgKyAncmVwb3J0X2FfcHJvYmxlbScpXHJcbiAgLmNvbnN0YW50KCdyZXF1ZXN0QUNvcHlVUkwnLCBzZXJ2aWNlc0hvc3QgKyAncmVxdWVzdF9hX2NvcHknKVxyXG4gIC5jb25zdGFudCgncmVxdWVzdEFDb3B5T2ZFc0RvY1VSTCcsIHNlcnZpY2VzSG9zdCArICdpbGxqd3Rmb3JtJylcclxuXHJcbiAgLmNvbmZpZygoJHNjZURlbGVnYXRlUHJvdmlkZXIpID0+IHtcclxuICAgICRzY2VEZWxlZ2F0ZVByb3ZpZGVyLnJlc291cmNlVXJsV2hpdGVsaXN0KFtcclxuICAgICAgJyoqJ1xyXG4gICAgXSk7XHJcbiAgfSlcclxuICAucnVuKCgkdGVtcGxhdGVDYWNoZSwgJHJvb3RTY29wZSkgPT4ge1xyXG4gICAgLy8kdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL2Z1bGxWaWV3L2Z1bGwtdmlldy5odG1sJywgZnVsbFZpZXdIVE1MKTtcclxuICAgIEhlbHBlci5sb2FkU2NyaXB0KCdodHRwczovL3VucGtnLmNvbS9ob3RrZXlzLWpzQDIuMC44L2Rpc3QvaG90a2V5cy5taW4uanMnKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2hvdGtleXMuanMgbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuICAgIEhlbHBlci5sb2FkU2NyaXB0KCdodHRwczovL2QxYnhoOHVhczFtbnc3LmNsb3VkZnJvbnQubmV0L2Fzc2V0cy9lbWJlZC5qcz8nICsgRGF0ZS5ub3coKSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhbHRtZXJpY3MgZW1iZWQuanMgbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuICAgIGlmICh3aW5kb3cuYXBwQ29uZmlnLnZpZCA9PSAnRUNCJyB8fCB3aW5kb3cuYXBwQ29uZmlnLnZpZC5pbmNsdWRlcygnS1VMZXV2ZW4nKSkge1xyXG4gICAgICAvL0NyZWF0ZSB0aGUgY2VudHJhbEN1c3RvbSBtb2R1bGU7XHJcbiAgICAgIGlmICh3aW5kb3cuYXBwQ29uZmlnLnZpZCA9PSAnRUNCJykge1xyXG4gICAgICAgIHdpbmRvdy5icm93emluZSA9IHtcclxuICAgICAgICAgIGFwaTogXCJodHRwczovL3B1YmxpYy1hcGkudGhpcmRpcm9uLmNvbS9wdWJsaWMvdjEvbGlicmFyaWVzLzE2MjRcIixcclxuICAgICAgICAgIGFwaUtleTogXCJlNzFkMWMzMS03OTM4LTQ3MGEtOGJlMi1hNmUzNTFlMGMwMDFcIixcclxuICAgICAgICAgIGpvdXJuYWxCcm93WmluZVdlYkxpbmtUZXh0OiBcIlZpZXcgSm91cm5hbCBDb250ZW50c1wiLFxyXG4gICAgICAgICAgYXJ0aWNsZUJyb3daaW5lV2ViTGlua1RleHQ6IFwiVmlldyBJc3N1ZSBDb250ZW50c1wiLFxyXG4gICAgICAgICAgYXJ0aWNsZVBERkRvd25sb2FkTGlua0VuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICBhcnRpY2xlUERGRG93bmxvYWRMaW5rVGV4dDogXCJEb3dubG9hZCBQREZcIixcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAod2luZG93LmFwcENvbmZpZy52aWQuaW5jbHVkZXMoJ0tVTGV1dmVuJykpIHtcclxuICAgICAgICB2YXIgbG9jYWxlID0gd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmludGVyZmFjZUxhbmd1YWdlO1xyXG4gICAgICAgIHZhciBsb2NhbGVfdGV4dCA9IHtcclxuICAgICAgICAgICdubF9CRSc6IHtcclxuICAgICAgICAgICAgJ2pvdXJuYWwnOiBcIkJla2lqayBkZSBpbmhvdWQgdmFuIGhldCB0aWpkc2NocmlmdFwiLFxyXG4gICAgICAgICAgICAnaXNzdWUnOiBcIkJla2lqayBkZSBpbmhvdWQgdmFuIGhldCBudW1tZXJcIixcclxuICAgICAgICAgICAgJ2Rvd25sb2FkJzogXCJEb3dubG9hZCBQREZcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICdlbl9VUyc6IHtcclxuICAgICAgICAgICAgJ2pvdXJuYWwnOiBcIlZpZXcgSm91cm5hbCBDb250ZW50c1wiLFxyXG4gICAgICAgICAgICAnaXNzdWUnOiBcIlZpZXcgSXNzdWUgQ29udGVudHNcIixcclxuICAgICAgICAgICAgJ2Rvd25sb2FkJzogXCJEb3dubG9hZCBQREZcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmJyb3d6aW5lID0ge1xyXG4gICAgICAgICAgYXBpOiBcImh0dHBzOi8vcHVibGljLWFwaS50aGlyZGlyb24uY29tL3B1YmxpYy92MS9saWJyYXJpZXMvMTc4MVwiLFxyXG4gICAgICAgICAgYXBpS2V5OiBcIjEwZWQ1ZDJhLTRmZjAtNDU0MS04NTdkLWI4YzM2YTAxZjNlZFwiLFxyXG4gICAgICAgICAgam91cm5hbEJyb3daaW5lV2ViTGlua1RleHQ6IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ2pvdXJuYWwnXSxcclxuICAgICAgICAgIGFydGljbGVCcm93WmluZVdlYkxpbmtUZXh0OiBsb2NhbGVfdGV4dFtsb2NhbGVdWydpc3N1ZSddLFxyXG4gICAgICAgICAgYXJ0aWNsZVBERkRvd25sb2FkTGlua0VuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICBhcnRpY2xlUERGRG93bmxvYWRMaW5rVGV4dDogbG9jYWxlX3RleHRbbG9jYWxlXVsnZG93bmxvYWQnXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIEhlbHBlci5sb2FkU2NyaXB0KCdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vYnJvd3ppbmUtYWRhcHRlcnMvcHJpbW8vYnJvd3ppbmUtcHJpbW8tYWRhcHRlci5qcycpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdicm93emluZS1wcmltby1hZGFwdGVyLmpzIGxvYWRlZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KVxyXG4gIC5mYWN0b3J5KCdGZWVkU2VydmljZScsIGZlZWRTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCdBbHRtZXRyaWNzU2VydmljZScsIEFsdG1ldHJpY3NTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCdNZXNzYWdlU2VydmljZScsIE1lc3NhZ2VTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCdGZWVkYmFja1NlcnZpY2UnLCBGZWVkYmFja1NlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ1dpbmRvd0V2ZW50TGlzdGVuZXInLCBXaW5kb3dFdmVudExpc3RlbmVyKVxyXG5cclxuICAuZmFjdG9yeSgnZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yJywgZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yKVxyXG4gIC5mYWN0b3J5KCdhcGlDYWxsSW50ZXJjZXB0b3InLCBhcGlDYWxsSW50ZXJjZXB0b3IpXHJcbiAgLmNvbmZpZyhbJyRodHRwUHJvdmlkZXInLCAoJGh0dHBQcm92aWRlcikgPT4geyAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdhcGlDYWxsSW50ZXJjZXB0b3InKTsgfV0pO1xyXG5cclxuLy9pbnRlcmNlcHQgYXBpIGNhbGxzIGZvciBkYXRhYmFzZSBzZWFyY2ggYW5kIGNoYW5nZSB0byBLVUwgKG9ubHkgcmVnaW9uYWwgdmlld3MpXHJcbnZhciByZWdfdmlld3MgPSBbXCJLVUxldXZlbl9UTU9SRU1cIiwgXCJLVUxldXZlbl9UTU9SRUtcIiwgXCJLVUxldXZlbl9VQ0xMXCIsIFwiS1VMZXV2ZW5fTFVDQVwiLCBcIktVTGV1dmVuX09ESVNFRVwiXTtcclxuaWYgKHJlZ192aWV3cy5pbmNsdWRlcyh3aW5kb3cuYXBwQ29uZmlnLnZpZCkpIHtcclxuICBhcHAuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsICgkaHR0cFByb3ZpZGVyKSA9PiB7ICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ2RiU2VhcmNoSHR0cENhbGxJbnRlcmNlcHRvcicpOyB9XSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy9Db250YWlucyB0aGUgYWZ0ZXIgY29tcG9uZW50IHNlbGVjdG9ycyB0aGF0IHdpbGwgYmUgaW5qZWN0ZWRcclxubGV0IGFmdGVyQ29tcG9uZW50cyA9IHt9O1xyXG5cclxuLy9DcmVhdGUgYWxsIGNvbXBvbmVudHMgYW5kIGRldGVybWluZSBpbiB3aGljaCBhZnRlciBjb21wb25lbnQgdGhlc2UgbmVlZCB0byBiZVxyXG4vL2luamVjdGVkXHJcbmNvbnNvbGUubG9nKCdMb2FkaW5nIGNlbnRyYWxDdXN0b20gY29tcG9uZW50cycpO1xyXG5Db21wb25lbnRzLmFsbC5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICBjb25zb2xlLmxvZyhjb21wb25lbnQubmFtZSlcclxuICBpZiAoY29tcG9uZW50LmVuYWJsZWQpIHtcclxuICAgIGlmIChjb21wb25lbnQuYXBwZW5kVG8pIHtcclxuICAgICAgbGV0IGVsZW1lbnRzID0gYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gfHwgW107XHJcbiAgICAgIC8vZWxlbWVudHMucHVzaChjb21wb25lbnQubmFtZSk7XHJcbiAgICAgIGVsZW1lbnRzLnB1c2goe1xyXG4gICAgICAgICduYW1lJzogY29tcG9uZW50Lm5hbWUsXHJcbiAgICAgICAgJ2VuYWJsZUluVmlldyc6IGNvbXBvbmVudC5lbmFibGVJblZpZXdcclxuICAgICAgfSk7XHJcbiAgICAgIGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dID0gZWxlbWVudHM7XHJcblxyXG4gICAgfVxyXG4gICAgYXBwLmNvbnN0YW50KCdhZnRlckNvbXBvbmVudHMnLCBhZnRlckNvbXBvbmVudHMpO1xyXG4gICAgYXBwLmNvbXBvbmVudChjb21wb25lbnQubmFtZS50b0NhbWVsQ2FzZSgpLCBjb21wb25lbnQuY29uZmlnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc29sZS5sb2coJ1JlcGxhY2UgVGVtcGxhdGVzJyk7XHJcblRlbXBsYXRlcy5hbGwuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcclxuICBjb25zb2xlLmxvZyh0ZW1wbGF0ZS5pZClcclxuICBhcHAucnVuKCgkdGVtcGxhdGVDYWNoZSkgPT4ge1xyXG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KHRlbXBsYXRlLmlkLCB0ZW1wbGF0ZS50ZW1wbGF0ZSk7XHJcbiAgfSlcclxufSlcclxuXHJcbi8vSW5qZWN0IHBsYWNlIGhvbGRlcnMgaW50byB0aGUgYWZ0ZXIgY29tcG9uZW50c1xyXG5PYmplY3Qua2V5cyhhZnRlckNvbXBvbmVudHMpLmZvckVhY2goKGNvbXBvbmVudCwgaSkgPT4ge1xyXG4gIGxldCBzdWJDb21wb25lbnRzID0gYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudF07XHJcblxyXG4gIGFwcC5jb21wb25lbnQoY29tcG9uZW50LnRvQ2FtZWxDYXNlKCksIHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBzdWJDb21wb25lbnRzLm1hcChtID0+IGA8JHttLm5hbWV9IHBhcmVudC1jdHJsPVwiJGN0cmxcIj48LyR7bS5uYW1lfT5gKS5qb2luKFwiXCIpXHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgRXhwbG9yZSBmcm9tICcuL3ByaW1vL2V4cGxvcmUnXHJcbmltcG9ydCBSZWNvcmRzIGZyb20gJy4vcHJpbW8vcmVjb3JkcydcclxuaW1wb3J0IEZhY2V0cyBmcm9tICcuL3ByaW1vL2ZhY2V0cydcclxuaW1wb3J0IFZpZXcgZnJvbSAnLi9wcmltby92aWV3J1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL3ByaW1vL3VzZXInXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9wcmltby9leHBsb3JlL2hlbHBlcidcclxuXHJcbi8qKlxyXG4gKiBQcmltbyBtYWluIGVudHJ5IGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmltbyB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIHZlcnNpb24gaW5mb3JtYXRpb25cclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCB2ZXJzaW9uKCkge1xyXG4gICAgbGV0IF92ZXJzaW9uID0gXCIwLjAuMTBcIjtcclxuICAgIHJldHVybiBgTGlicmFyeToke192ZXJzaW9ufSAtIFByaW1vOiR7d2luZG93LmFwcENvbmZpZ1snc3lzdGVtLWNvbmZpZ3VyYXRpb24nXS5Qcmltb19WZXJzaW9uX051bWJlcn06JHt3aW5kb3cuYXBwQ29uZmlnWydzeXN0ZW0tY29uZmlndXJhdGlvbiddLlByaW1vX0hvdEZpeF9OdW1iZXJ9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGhhcyByYW5cclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCgpIHtcclxuICAgIHJldHVybiBIZWxwZXIuaXNEZWJ1Z0VuYWJsZWQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpZCB0aGUgc2NyaXB0IHJhbiBvbiBhIFByaW1vIHNpdGVcclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIHN0YXRpYyBpc1ByaW1vQXZhaWxhYmxlKCkge1xyXG4gICAgcmV0dXJuIEhlbHBlci5pc1ByaW1vQXZhaWxhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGlzIGEgcHJveHkgY2xhc3NcclxuICAgKiBAcmV0dXJuIHtFeHBsb3JlfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgZXhwbG9yZSgpIHtcclxuICAgIHJldHVybiBFeHBsb3JlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byBhdmFpbGFibGUgcmVjb3Jkc1xyXG4gICAqIEByZXR1cm4ge1JlY29yZHN9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCByZWNvcmRzKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZXNvbHZlKG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XHJcbiAgICB9KVxyXG4gICAgLy9yZXR1cm4gbmV3IFJlY29yZHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byBhdmFpbGFibGUgZmFjZXRzXHJcbiAgICogQHJldHVybiB7RmFjZXRzfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgZmFjZXRzKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZXNvbHZlKG5ldyBGYWNldHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpKTtcclxuICAgIH0pXHJcbiAgICAvL3JldHVybiBuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gdmlldyByZWxhdGVkIG1ldGFkYXRhXHJcbiAgICogQHJldHVybiB7Vmlld31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHZpZXcoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZXNvbHZlKG5ldyBWaWV3KCkpO1xyXG4gICAgfSlcclxuICAgIC8vcmV0dXJuIG5ldyBWaWV3KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHVzZXIgcmVsYXRlZCBtZXRhZGF0YVxyXG4gICAqIEByZXR1cm4ge1VzZXJ9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCB1c2VyKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgSGVscGVyLnVzZXJEZXRhaWxzSFRUUCgpLnRoZW4oKHVzZXJEZXRhaWxzKT0+e1xyXG4gICAgICAgIEhlbHBlci51c2VyRmluZXNIVFRQKCkudGhlbigodXNlckZpbmVzKSA9PiB7XHJcbiAgICAgICAgICBIZWxwZXIudXNlckxvYW5zSFRUUCgpLnRoZW4oKHVzZXJMb2FucykgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUobmV3IFVzZXIoe2RldGFpbHM6IHVzZXJEZXRhaWxzLCBmaW5lczogdXNlckZpbmVzLCBsb2FuczogdXNlckxvYW5zfSkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG4vL3RoaXMgaXMgcHJveHkgY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9yZSB7XHJcbiAgc3RhdGljIGdldCBjb21wb25lbnRzKCkge1xyXG4gICAgbGV0IGMgPSBuZXcgQ29tcG9uZW50cygpO1xyXG4gICAgSGVscGVyLmNvbXBvbmVudE5hbWVzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XHJcbiAgICAgIGMuYWRkKHNlbGVjdG9yKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHVpKCkge1xyXG4gICAgaWYgKHRoaXMuX3VpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhpcyBpcyBhIHN0dWIgZnVuY3Rpb24gY2FsbCBcImFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpXCIgdG8gYWN0aXZhdGUgVUknKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl91aTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaGVscGVyKCkge1xyXG4gICAgcmV0dXJuIEhlbHBlcjtcclxuICB9XHJcbn1cclxuIiwidmFyIGNzc1NlbGVjdG9yR2VuZXJhdG9yID0gbmV3KHJlcXVpcmUoJy4uLy4uL3ZlbmRvci9jc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzJykpLkNzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG5cclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcidcclxuXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCl7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYmxpbmsoKXtcclxuICAgIEhlbHBlci5ibGluayh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCBjc3NQYXRoKCl7XHJcbiAgICByZXR1cm4gY3NzU2VsZWN0b3JHZW5lcmF0b3IuZ2V0U2VsZWN0b3IodGhpcy5lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCl7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmxvY2FsTmFtZTtcclxuICB9XHJcblxyXG4gIHNjb3BlKCl7XHJcbiAgICBpZiAoSGVscGVyLmlzRGVidWdFbmFibGVkKCkpe1xyXG4gICAgICByZXR1cm4gYW5ndWxhci5lbGVtZW50KHRoaXMuZWxlbWVudCkuc2NvcGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBydW4gXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIGZpcnN0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjdHJsKCl7XHJcbiAgICBsZXQgYyA9IGFuZ3VsYXIuZWxlbWVudCh0aGlzLmVsZW1lbnQpLmNvbnRyb2xsZXIodGhpcy5uYW1lKTtcclxuICAgIGlmIChjKSB7XHJcbiAgICAgIHJldHVybiBjO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VzaW5nIGFsdGVybmF0aXZlIG1ldGhvZCB0byBnZXQgY29udHJvbGxlcicpO1xyXG4gICAgICBsZXQgc2NvcGUgPSB0aGlzLnNjb3BlKCk7XHJcbiAgICAgIGlmIChzY29wZSkge1xyXG4gICAgICAgIGxldCBzY29wZUNoaWxkID0gc2NvcGUuJCRjaGlsZFRhaWw7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnJGN0cmwnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGUuJGN0cmxcclxuICAgICAgICB9IGVsc2UgaWYoT2JqZWN0LmtleXMoc2NvcGUpLmluY2x1ZGVzKCdjdHJsJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLmN0cmxcclxuICAgICAgICB9IGVsc2UgaWYgKHNjb3BlQ2hpbGQgJiYgT2JqZWN0LmtleXMoc2NvcGVDaGlsZCkuaW5jbHVkZXMoJyRjdHJsJykpe1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC4kY3RybDtcclxuICAgICAgICB9IGVsc2UgaWYgKHNjb3BlQ2hpbGQgJiYgT2JqZWN0LmtleXMoc2NvcGVDaGlsZCkuaW5jbHVkZXMoJ2N0cmwnKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZUNoaWxkLmN0cmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gJGN0cmwgZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50cyB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSB7fTtcclxuICB9XHJcblxyXG4gIGFkZChzZWxlY3Rvcikge1xyXG4gICAgbGV0IGVsZW1lbnRzID0gSGVscGVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgbGV0IGVsZW1lbnRzQXJyYXkgPSB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSB8fCBbXTtcclxuXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICAgICBlbGVtZW50c0FycmF5LnB1c2gobmV3IENvbXBvbmVudChlbGVtZW50KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSA9IGVsZW1lbnRzQXJyYXk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRzQXJyYXk7XHJcbiAgfVxyXG5cclxuICBnZXQoc2VsZWN0b3IpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAga2V5cygpe1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudHMpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVyIHtcclxuICAgIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93Lm5hbWUgPT09ICdOR19FTkFCTEVfREVCVUdfSU5GTyEnIHx8IHR5cGVvZihhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJtLWxvZ28nKSkuc2NvcGUoKSkgIT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XHJcbiAgICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2Yod2luZG93LmFuZ3VsYXIpKSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmltby1leHBsb3JlJykgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGNvbXBvbmVudE5hbWVzKCkge1xyXG4gICAgICAgIGxldCB0YWdzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpKTtcclxuICAgICAgICBsZXQgY29tcG9uZW50TmFtZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB0YWcgb2YgdGFncykge1xyXG4gICAgICAgICAgICBsZXQgdGFnTmFtZSA9IHRhZy5sb2NhbE5hbWU7XHJcbiAgICAgICAgICAgIGlmICgvXnBybS0vLnRlc3QodGFnTmFtZSkgfHwgL15wcmltby0vLnRlc3QodGFnTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50TmFtZXMuaW5jbHVkZXModGFnTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lcy5wdXNoKHRhZ05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnROYW1lcyA9IGNvbXBvbmVudE5hbWVzLnNvcnQoKS5maWx0ZXIoKGUsIGksIGEpID0+IGkgPT09IGEuZmluZEluZGV4KChlMikgPT4gZSA9PT0gZTIpKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50TmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluamVjdG9yKCkge1xyXG4gICAgICBsZXQgYyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3ByaW1vLWV4cGxvcmUnKTtcclxuICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgcHJpbW9FeHBsb3JlID0gYW5ndWxhci5lbGVtZW50KGNbMF0uZWxlbWVudCk7XHJcbiAgICAgICAgICBsZXQgaW5qZWN0b3IgICAgID0gcHJpbW9FeHBsb3JlLmluamVjdG9yKCk7XHJcbiAgICAgICAgICBpZiAoaW5qZWN0b3Ipe1xyXG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0b3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaHR0cCgpIHtcclxuICAgICAgbGV0IGluamVjdG9yID0gdGhpcy5pbmplY3RvcigpO1xyXG4gICAgICBpZiAoaW5qZWN0b3IpIHtcclxuICAgICAgICBsZXQgaCA9IGluamVjdG9yLmdldCgnJGh0dHAnKTtcclxuICAgICAgICBpZiAoaCkge1xyXG4gICAgICAgICAgcmV0dXJuIGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGxvYWRTY3JpcHQoc2NyaXB0VVJMKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuYW5ndWxhcikge1xyXG4gICAgICAgICAgbGV0IGFwcEluamVjdG9yID0gYW5ndWxhci5pbmplY3RvcihbJ25nJywnYW5ndWxhckxvYWQnXSk7XHJcbiAgICAgICAgICBpZiAoYXBwSW5qZWN0b3IpIHtcclxuICAgICAgICAgICAgICBsZXQgYW5ndWxhckxvYWQgPSBhcHBJbmplY3Rvci5nZXQoJ2FuZ3VsYXJMb2FkJyk7XHJcbiAgICAgICAgICAgICAgaWYgKGFuZ3VsYXJMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5ndWxhckxvYWQubG9hZFNjcmlwdChzY3JpcHRVUkwpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb290U2NvcGUoKSB7XHJcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcclxuICAgICAgaWYgKGluamVjdG9yKSB7XHJcbiAgICAgICAgICBsZXQgcm9vdFNjb3BlICAgID0gaW5qZWN0b3IuZ2V0KCckcm9vdFNjb3BlJyk7XHJcbiAgICAgICAgICBpZiAocm9vdFNjb3BlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByb290U2NvcGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkge1xyXG4gICAgICBsZXQgcm9vdFNjb3BlID0gdGhpcy5yb290U2NvcGUoKTtcclxuICAgICAgaWYgKHJvb3RTY29wZSkge1xyXG4gICAgICAgIHJldHVybiByb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGp3dERhdGEoKSB7XHJcbiAgICAgIGxldCB1U01TID0gdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XHJcbiAgICAgIGlmICh1U01TKSB7XHJcbiAgICAgICAgbGV0IGp3dERhdGEgPSB1U01TLmp3dFV0aWxTZXJ2aWNlLmdldERlY29kZWRUb2tlbigpIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiBqd3REYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLiRsb2NhbEZvcmFnZS5nZXRJdGVtKCd1c2VyRGV0YWlscycpLnRoZW4odXNlckRldGFpbHMgPT4gcmVzb2x2ZSh1c2VyRGV0YWlscykpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckRldGFpbHNIVFRQKCkge1xyXG4gICAgICBsZXQgdmlld0NvZGUgPSB0aGlzLmp3dERhdGEoKS52aWV3SWQgfHwgd2luZG93LmFwcENvbmZpZ1sndmlkJ107XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUscmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldChgL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvdXNlcnNldHRpbmdzP3ZpZD0ke3ZpZXdDb2RlfWApLnRoZW4odXNlckRldGFpbHMgPT4gcmVzb2x2ZSh1c2VyRGV0YWlscy5kYXRhKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyRmluZXNIVFRQKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL215YWNjb3VudC9maW5lcycpLnRoZW4odXNlckZpbmVzID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckZpbmVzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmluZXMgPSBkYXRhLmRhdGEuZmluZXM7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmVzLmZpbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBmaW5lcycpO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckxvYW5zSFRUUCgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvbG9hbnMnKS50aGVuKHVzZXJMb2FucyA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJMb2Fucy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvYW5zID0gZGF0YS5kYXRhLmxvYW5zO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2Fucy5sb2FuKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbG9hbnMnKTtcclxuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJsaW5rKGNvbXBvbmVudCwgbnVtYmVyT2ZCbGlua3MgPSA0KSB7XHJcbiAgICAgICAgbGV0IGludGVydmFsSWQgPSBudWxsO1xyXG4gICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArIDE7XHJcbiAgICAgICAgbGV0IGJvcmRlclNlbGVjdG9yID0gY29tcG9uZW50LmVsZW1lbnQuY3NzUGF0aCArIGluZGV4ICsgJ1JlY3QnO1xyXG5cclxuICAgICAgICBsZXQgY3JlYXRlQm9yZGVyRWxlbWVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRSZWN0ID0gY29tcG9uZW50LmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9yZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYm9yZGVyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnM3B4IHNvbGlkIHJlZCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUudG9wID0gZWxlbWVudFJlY3QudG9wICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gZWxlbWVudFJlY3QuaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUud2lkdGggPSBlbGVtZW50UmVjdC53aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0ICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9yZGVyRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYm9yZGVyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZW1vdmVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGJvcmRlckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBibGlua0JvcmRlckVsZW1lbnQgPSAobnVtYmVyT2ZCbGlua3MgPSA0KSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mQmxpbmtzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQm9yZGVyRWxlbWVudCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKChudW1iZXJPZkJsaW5rcyAlIDIpID09IDApID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIG51bWJlck9mQmxpbmtzLS07XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKGJsaW5rQm9yZGVyRWxlbWVudCwgMTAwMCwgbnVtYmVyT2ZCbGlua3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib3JkZXJFbGVtZW50ID0gY3JlYXRlQm9yZGVyRWxlbWVudCgpO1xyXG4gICAgICAgIGJsaW5rQm9yZGVyRWxlbWVudChudW1iZXJPZkJsaW5rcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2V0cyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9mYWNldHMoY29tcG9uZW50cyk7XHJcbiAgICB9XHJcbiAgICBfZmFjZXRzKGNvbXBvbmVudHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLWZhY2V0LWFmdGVyJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3RybCA9IGNbMF0uY3RybDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5mYWNldFNlcnZpY2UucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IGZhY2V0cyB0aHJvdWdoIHRoZSByb290U2NvcGUnKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuc2VhcmNoU3RhdGVTZXJ2aWNlLnJlc3VsdE9iamVjdC5mYWNldHM7XHJcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gcmV0cmlldmUgZmFjZXRzJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZHMge1xyXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50cykge1xyXG4gICAgICByZXR1cm4gdGhpcy5faXRlbXMoY29tcG9uZW50cyk7XHJcbiAgICB9XHJcbiAgICBfaXRlbXMoY29tcG9uZW50cykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tc2VhcmNoLXJlc3VsdC1saXN0LWFmdGVyJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3RybCA9IGNbMF0uY3RybCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLml0ZW1saXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcInRyeSBhZ2FpblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBnZXQgcmVjb3JkcyB0aHJvdWdoIHRoZSByb290U2NvcGUnKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuc2VhcmNoU3RhdGVTZXJ2aWNlLnJlc3VsdE9iamVjdC5kYXRhO1xyXG4gICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGl0ZW1zJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XHJcbiAgY29uc3RydWN0b3IodXNlciA9IF9za2VsVXNlcikge1xyXG4gICAgbGV0IHVTbXMgPSBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xyXG4gICAgbGV0IGp3dERhdGEgPSBIZWxwZXIuand0RGF0YSgpO1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGp3dERhdGEudXNlciB8fCAnJyxcclxuICAgICAgICBlbWFpbDogdXNlci5kZXRhaWxzLmVtYWlsIHx8ICcnLFxyXG4gICAgICAgIG5hbWU6IGp3dERhdGEudXNlck5hbWUgfHwgJ0d1ZXN0JyxcclxuICAgICAgICBkaXNwbGF5X25hbWU6IHVTbXMuZ2V0VXNlck5hbWVGb3JEaXNwbGF5KCksXHJcbiAgICAgICAgaXNMb2dnZWRJbjogKCkgPT4gdVNtcy5nZXRVc2VyTmFtZSgpLmxlbmd0aCA+IDAsXHJcbiAgICAgICAgaXNPbkNhbXB1czogKCkgPT4gand0RGF0YS5vbkNhbXB1cyA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICBmaW5lczogdXNlci5maW5lcyxcclxuICAgICAgICBsb2FuczogdXNlci5sb2Fuc1xyXG4gICAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9za2VsVXNlcigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRldGFpbHM6IHt9LFxyXG4gICAgICBmaW5lczoge30sXHJcbiAgICAgIGxvYW5zOiB7fVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XHJcbiAgICAgIGxldCBqd3REYXRhID0gSGVscGVyLmp3dERhdGEoKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY29kZTogand0RGF0YS52aWV3SWQgfHwgd2luZG93LmFwcENvbmZpZ1sndmlkJ10sXHJcbiAgICAgICAgaW5zdGl0dXRpb246IHtcclxuICAgICAgICAgICAgY29kZTogand0RGF0YS52aWV3SW5zdGl0dXRpb25Db2RlLFxyXG4gICAgICAgICAgICBuYW1lOiB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW5zdGl0dXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGludGVyZmFjZUxhbmd1YWdlOiB1U21zLmdldFVzZXJMYW5ndWFnZSgpIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnRlcmZhY2VMYW5ndWFnZSxcclxuICAgICAgICBpcDoge1xyXG4gICAgICAgICAgYWRkcmVzczogand0RGF0YS5pcFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIihmdW5jdGlvbigpIHtcclxuICB2YXIgQ3NzU2VsZWN0b3JHZW5lcmF0b3IsIHJvb3QsXHJcbiAgICBpbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XHJcblxyXG4gIENzc1NlbGVjdG9yR2VuZXJhdG9yID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmRlZmF1bHRfb3B0aW9ucyA9IHtcclxuICAgICAgc2VsZWN0b3JzOiBbJ2lkJywgJ2NsYXNzJywgJ3RhZycsICdudGhjaGlsZCddXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIENzc1NlbGVjdG9yR2VuZXJhdG9yKG9wdGlvbnMpIHtcclxuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcclxuICAgICAgdGhpcy5zZXRPcHRpb25zKHRoaXMuZGVmYXVsdF9vcHRpb25zKTtcclxuICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICB2YXIga2V5LCByZXN1bHRzLCB2YWw7XHJcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcclxuICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0cyA9IFtdO1xyXG4gICAgICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFsID0gb3B0aW9uc1trZXldO1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRfb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5vcHRpb25zW2tleV0gPSB2YWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5pc0VsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiAhISgoZWxlbWVudCAhPSBudWxsID8gZWxlbWVudC5ub2RlVHlwZSA6IHZvaWQgMCkgPT09IDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0UGFyZW50cyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGN1cnJlbnRfZWxlbWVudCwgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgaWYgKHRoaXMuaXNFbGVtZW50KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgY3VycmVudF9lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB3aGlsZSAodGhpcy5pc0VsZW1lbnQoY3VycmVudF9lbGVtZW50KSkge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudF9lbGVtZW50KTtcclxuICAgICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGN1cnJlbnRfZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0VGFnU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplSXRlbShlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5zYW5pdGl6ZUl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIHZhciBjaGFyYWN0ZXJzO1xyXG4gICAgICBjaGFyYWN0ZXJzID0gKGl0ZW0uc3BsaXQoJycpKS5tYXAoZnVuY3Rpb24oY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJzonKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyAoJzonLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpICsgXCIgXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvWyAhXCIjJCUmJygpKissLlxcLzs8PT4/QFxcW1xcXFxcXF1eYHt8fX5dLy50ZXN0KGNoYXJhY3RlcikpIHtcclxuICAgICAgICAgIHJldHVybiBcIlxcXFxcIiArIGNoYXJhY3RlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGVzY2FwZShjaGFyYWN0ZXIpLnJlcGxhY2UoL1xcJS9nLCAnXFxcXCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjaGFyYWN0ZXJzLmpvaW4oJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0SWRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGlkLCBzYW5pdGl6ZWRfaWQ7XHJcbiAgICAgIGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgIGlmICgoaWQgIT0gbnVsbCkgJiYgKGlkICE9PSAnJykgJiYgISgvXFxzLy5leGVjKGlkKSkgJiYgISgvXlxcZC8uZXhlYyhpZCkpKSB7XHJcbiAgICAgICAgc2FuaXRpemVkX2lkID0gXCIjXCIgKyAodGhpcy5zYW5pdGl6ZUl0ZW0oaWQpKTtcclxuICAgICAgICBpZiAoZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2FuaXRpemVkX2lkKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgIHJldHVybiBzYW5pdGl6ZWRfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0Q2xhc3NTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBjbGFzc19zdHJpbmcsIGl0ZW0sIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgIGNsYXNzX3N0cmluZyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICBpZiAoY2xhc3Nfc3RyaW5nICE9IG51bGwpIHtcclxuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xyXG4gICAgICAgIGNsYXNzX3N0cmluZyA9IGNsYXNzX3N0cmluZy5yZXBsYWNlKC9eXFxzfFxccyQvZywgJycpO1xyXG4gICAgICAgIGlmIChjbGFzc19zdHJpbmcgIT09ICcnKSB7XHJcbiAgICAgICAgICByZXN1bHQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBrLCBsZW4sIHJlZiwgcmVzdWx0cztcclxuICAgICAgICAgICAgcmVmID0gY2xhc3Nfc3RyaW5nLnNwbGl0KC9cXHMrLyk7XHJcbiAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgICAgICAgaXRlbSA9IHJlZltrXTtcclxuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goXCIuXCIgKyAodGhpcy5zYW5pdGl6ZUl0ZW0oaXRlbSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgICAgICAgIH0pLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBhdHRyaWJ1dGUsIGJsYWNrbGlzdCwgaywgbGVuLCByZWYsIHJlZjEsIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgIGJsYWNrbGlzdCA9IFsnaWQnLCAnY2xhc3MnXTtcclxuICAgICAgcmVmID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBhdHRyaWJ1dGUgPSByZWZba107XHJcbiAgICAgICAgaWYgKHJlZjEgPSBhdHRyaWJ1dGUubm9kZU5hbWUsIGluZGV4T2YuY2FsbChibGFja2xpc3QsIHJlZjEpIDwgMCkge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goXCJbXCIgKyBhdHRyaWJ1dGUubm9kZU5hbWUgKyBcIj1cIiArIGF0dHJpYnV0ZS5ub2RlVmFsdWUgKyBcIl1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXROdGhDaGlsZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgY291bnRlciwgaywgbGVuLCBwYXJlbnRfZWxlbWVudCwgc2libGluZywgc2libGluZ3M7XHJcbiAgICAgIHBhcmVudF9lbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICBpZiAocGFyZW50X2VsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHNpYmxpbmdzID0gcGFyZW50X2VsZW1lbnQuY2hpbGROb2RlcztcclxuICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSBzaWJsaW5ncy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgICAgc2libGluZyA9IHNpYmxpbmdzW2tdO1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNFbGVtZW50KHNpYmxpbmcpKSB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCI6bnRoLWNoaWxkKFwiICsgY291bnRlciArIFwiKVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcclxuICAgICAgdmFyIGlzX3VuaXF1ZSwgcmVzdWx0O1xyXG4gICAgICBpc191bmlxdWUgPSBmYWxzZTtcclxuICAgICAgaWYgKChzZWxlY3RvciAhPSBudWxsKSAmJiBzZWxlY3RvciAhPT0gJycpIHtcclxuICAgICAgICByZXN1bHQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEgJiYgcmVzdWx0WzBdID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICBpc191bmlxdWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXNfdW5pcXVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QWxsU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSB7XHJcbiAgICAgICAgdDogbnVsbCxcclxuICAgICAgICBpOiBudWxsLFxyXG4gICAgICAgIGM6IG51bGwsXHJcbiAgICAgICAgYTogbnVsbCxcclxuICAgICAgICBuOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ3RhZycpID49IDApIHtcclxuICAgICAgICByZXN1bHQudCA9IHRoaXMuZ2V0VGFnU2VsZWN0b3IoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnaWQnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LmkgPSB0aGlzLmdldElkU2VsZWN0b3IoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnY2xhc3MnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LmMgPSB0aGlzLmdldENsYXNzU2VsZWN0b3JzKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2F0dHJpYnV0ZScpID49IDApIHtcclxuICAgICAgICByZXN1bHQuYSA9IHRoaXMuZ2V0QXR0cmlidXRlU2VsZWN0b3JzKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ250aGNoaWxkJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5uID0gdGhpcy5nZXROdGhDaGlsZFNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0VW5pcXVlbmVzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICAgIHZhciBmb3VuZF9lbGVtZW50cywgcGFyZW50O1xyXG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgIGZvdW5kX2VsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICByZXR1cm4gZm91bmRfZWxlbWVudHMubGVuZ3RoID09PSAxICYmIGZvdW5kX2VsZW1lbnRzWzBdID09PSBlbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdENvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGl0ZW1zLCB0YWcpIHtcclxuICAgICAgdmFyIGl0ZW0sIGssIGwsIGxlbiwgbGVuMSwgcmVmLCByZWYxO1xyXG4gICAgICByZWYgPSB0aGlzLmdldENvbWJpbmF0aW9ucyhpdGVtcyk7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIGl0ZW0gPSByZWZba107XHJcbiAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGFnICE9IG51bGwpIHtcclxuICAgICAgICByZWYxID0gaXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgIHJldHVybiB0YWcgKyBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAobCA9IDAsIGxlbjEgPSByZWYxLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xyXG4gICAgICAgICAgaXRlbSA9IHJlZjFbbF07XHJcbiAgICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBpdGVtKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRVbmlxdWVTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGZvdW5kX3NlbGVjdG9yLCBrLCBsZW4sIHJlZiwgc2VsZWN0b3JfdHlwZSwgc2VsZWN0b3JzO1xyXG4gICAgICBzZWxlY3RvcnMgPSB0aGlzLmdldEFsbFNlbGVjdG9ycyhlbGVtZW50KTtcclxuICAgICAgcmVmID0gdGhpcy5vcHRpb25zLnNlbGVjdG9ycztcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgc2VsZWN0b3JfdHlwZSA9IHJlZltrXTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yX3R5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ2lkJzpcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy5pICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLmk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICd0YWcnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIHNlbGVjdG9ycy50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NsYXNzJzpcclxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYyAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYywgc2VsZWN0b3JzLnQpO1xyXG4gICAgICAgICAgICAgIGlmIChmb3VuZF9zZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZSc6XHJcbiAgICAgICAgICAgIGlmICgoc2VsZWN0b3JzLmEgIT0gbnVsbCkgJiYgc2VsZWN0b3JzLmEubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmEsIHNlbGVjdG9ycy50KTtcclxuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZF9zZWxlY3RvcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdudGhjaGlsZCc6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMubiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnKic7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGFsbF9zZWxlY3RvcnMsIGl0ZW0sIGssIGwsIGxlbiwgbGVuMSwgcGFyZW50cywgcmVzdWx0LCBzZWxlY3Rvciwgc2VsZWN0b3JzO1xyXG4gICAgICBhbGxfc2VsZWN0b3JzID0gW107XHJcbiAgICAgIHBhcmVudHMgPSB0aGlzLmdldFBhcmVudHMoZWxlbWVudCk7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHBhcmVudHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBpdGVtID0gcGFyZW50c1trXTtcclxuICAgICAgICBzZWxlY3RvciA9IHRoaXMuZ2V0VW5pcXVlU2VsZWN0b3IoaXRlbSk7XHJcbiAgICAgICAgaWYgKHNlbGVjdG9yICE9IG51bGwpIHtcclxuICAgICAgICAgIGFsbF9zZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdG9ycyA9IFtdO1xyXG4gICAgICBmb3IgKGwgPSAwLCBsZW4xID0gYWxsX3NlbGVjdG9ycy5sZW5ndGg7IGwgPCBsZW4xOyBsKyspIHtcclxuICAgICAgICBpdGVtID0gYWxsX3NlbGVjdG9yc1tsXTtcclxuICAgICAgICBzZWxlY3RvcnMudW5zaGlmdChpdGVtKTtcclxuICAgICAgICByZXN1bHQgPSBzZWxlY3RvcnMuam9pbignID4gJyk7XHJcbiAgICAgICAgaWYgKHRoaXMudGVzdFNlbGVjdG9yKGVsZW1lbnQsIHJlc3VsdCkpIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0Q29tYmluYXRpb25zID0gZnVuY3Rpb24oaXRlbXMpIHtcclxuICAgICAgdmFyIGksIGosIGssIGwsIHJlZiwgcmVmMSwgcmVzdWx0O1xyXG4gICAgICBpZiAoaXRlbXMgPT0gbnVsbCkge1xyXG4gICAgICAgIGl0ZW1zID0gW107XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0ID0gW1tdXTtcclxuICAgICAgZm9yIChpID0gayA9IDAsIHJlZiA9IGl0ZW1zLmxlbmd0aCAtIDE7IDAgPD0gcmVmID8gayA8PSByZWYgOiBrID49IHJlZjsgaSA9IDAgPD0gcmVmID8gKytrIDogLS1rKSB7XHJcbiAgICAgICAgZm9yIChqID0gbCA9IDAsIHJlZjEgPSByZXN1bHQubGVuZ3RoIC0gMTsgMCA8PSByZWYxID8gbCA8PSByZWYxIDogbCA+PSByZWYxOyBqID0gMCA8PSByZWYxID8gKytsIDogLS1sKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChyZXN1bHRbal0uY29uY2F0KGl0ZW1zW2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdC5zaGlmdCgpO1xyXG4gICAgICByZXN1bHQgPSByZXN1bHQuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXN1bHQgPSByZXN1bHQubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5qb2luKCcnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBDc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuXHJcbiAgfSkoKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsID8gZGVmaW5lLmFtZCA6IHZvaWQgMCkge1xyXG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIENzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJvb3QgPSB0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBleHBvcnRzICE9PSBudWxsID8gZXhwb3J0cyA6IHRoaXM7XHJcbiAgICByb290LkNzc1NlbGVjdG9yR2VuZXJhdG9yID0gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcbiAgfVxyXG5cclxufSkuY2FsbCh0aGlzKTtcclxuIiwiLypcclxuICBSZXBsYWNlIHRlbXBsYXRlcy5cclxuXHJcbiAgUmVwbGFjZSB0aGUgZGVmYXVsdCBwcmltbyB0ZW1wbGF0ZXMgaHR0cDovL2xvY2FsaG9zdDo4MDAzL3ByaW1vLWV4cGxvcmUvbGliL3RlbXBsYXRlcy5qc1xyXG4gIHdpdGggY3VzdG9tIHRlbXBsYXRlc1xyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxOFxyXG4gIFRvbSBWYW5tZWNoZWxlblxyXG4qL1xyXG5pbXBvcnQgJy4vdXRpbHMnXHJcblxyXG4vKiBpbXBvcnQgeW91ciB0ZW1wbGF0ZXMgKi9cclxuXHJcbmltcG9ydCBjaGFuZ2VMYW5nV2l0aG91dFVzZXJBcmVhSFRNTCBmcm9tICcuLi9odG1sL3RlbXBsYXRlcy9jaGFuZ2UtbGFuZy13aXRob3V0LXVzZXItYXJlYS5odG1sJ1xyXG5pbXBvcnQgcHJtTG9hbkJ1Z0ZpeEhUTUwgZnJvbSAnLi4vaHRtbC90ZW1wbGF0ZXMvcHJtLWxvYW4tYnVnLWZpeC5odG1sJ1xyXG5pbXBvcnQgcHJtUmVxdWVzdEJ1Z0ZpeEhUTUwgZnJvbSAnLi4vaHRtbC90ZW1wbGF0ZXMvcHJtLXJlcXVlc3QtYnVnLWZpeC5odG1sJ1xyXG5pbXBvcnQgcHJtTGlyaWFzQnJpZWZSZXN1bHRDb250YWluZXJIVE1MIGZyb20gJy4uL2h0bWwvdGVtcGxhdGVzL3BybS1saXJpYXMtYnJpZWYtcmVzdWx0LWNvbnRhaW5lci5odG1sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVzIHtcclxuICAgIHN0YXRpYyBnZXQgYWxsKCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICBpZCA9IHRlbXBsYXRlSWQgaW4gdGhlIHRlbXBsYXRlQ2FjaGVcclxuICAgICAgICAgIHRlbXBsYXRlID0gdGhlIGltcG9ydGVkIHRlbXBhbHRlXHJcbiAgICAgICAgICBlbmFibGVkID0gdHJ1ZS9mYWxzZSBzaG91bGQgdGhlIGNvbXBvbmVudCBiZSBjcmVhdGVkXHJcbiAgICAgICAgICBlbmFibGVJblZpZXcgPSByZWdleCB0byBkZWZpbmUgaW4gd2hpY2ggdmlld3MgdGhlIHRlbXBsYXRlIGhhcyB0byBiZSByZXBsYWNlZC5cclxuXHJcbiAgICAgICAgICBleC4ge2lkOiAnY29tcG9uZW50cy9zZWFyY2gvdG9wYmFyL3VzZXJBcmVhL3VzZXItYXJlYS5odG1sJywgdGVtcGxhdGU6IHVzZXJBcmVhSFRNTCwgZW5hYmxlZDogdHJ1ZSwgZW5hYmxlSW5WaWV3OiAnLionfVxyXG4gICAgICAgICAgcmVzdWx0cyBpbjpcclxuICAgICAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC90b3BiYXIvdXNlckFyZWEvdXNlci1hcmVhLmh0bWwnLHVzZXJBcmVhSFRNTCk7XHJcbiAgICAgICAgKi9cclxuICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgICAgICAgIGlkOiAnY29tcG9uZW50cy9zZWFyY2gvdG9wYmFyL3VzZXJBcmVhL3VzZXItYXJlYS5odG1sJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBjaGFuZ2VMYW5nV2l0aG91dFVzZXJBcmVhSFRNTCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVJblZpZXc6ICdWRElDJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbXBvbmVudHMvYWNjb3VudC9sb2Fucy9sb2FuLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHBybUxvYW5CdWdGaXhIVE1MLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbXBvbmVudHMvYWNjb3VudC9yZXF1ZXN0cy9yZXF1ZXN0cy5odG1sJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBwcm1SZXF1ZXN0QnVnRml4SFRNTCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcclxuICAgICAgICAgICAgfSwgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbXBvbmVudHMvc2VhcmNoL2JyaWVmUmVzdWx0L2JyaWVmUmVzdWx0Q29udGFpbmVyLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHBybUxpcmlhc0JyaWVmUmVzdWx0Q29udGFpbmVySFRNTCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVJblZpZXc6ICdMaXJpYXMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLmZpbHRlcigodGVtcGxhdGUpID0+ICh0ZW1wbGF0ZS5lbmFibGVkICYmIG5ldyBSZWdFeHAodGVtcGxhdGUuZW5hYmxlSW5WaWV3KS50ZXN0KHdpbmRvdy5hcHBDb25maWcudmlkKSkpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAgR2VuZXJhbFxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5TdHJpbmcucHJvdG90eXBlLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB0aGlzLnNwbGl0KCctJykubWFwKChkLCBpLCBhKSA9PiBpID4gMCA/IGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkLnNsaWNlKDEpIDogZCkuam9pbignJyk7XHJcbn1cclxuXHJcbi8vaW50ZXJjZXB0IGFwaSBjYWxscyBmb3IgZGF0YWJhc2Ugc2VhcmNoIGFuZCBjaGFuZ2UgdG8gS1VMIChvbmx5IHJlZ2lvbmFsIHZpZXdzKVxyXG4gIC8qXHJcbnZhciByZWdfdmlld3MgPSBbXCJLVUxldXZlbl9UTU9SRU1cIiwgXCJLVUxldXZlbl9UTU9SRUtcIiwgXCJLVUxldXZlbl9VQ0xMXCIsIFwiS1VMZXV2ZW5fTFVDQVwiLCBcIktVTGV1dmVuX09ESVNFRVwiXTtcclxuaWYgKHJlZ192aWV3cy5pbmNsdWRlcyh3aW5kb3cuYXBwQ29uZmlnLnZpZCkpIHtcclxuICBsZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3ZpZXdDdXN0b20nLCBbXSlcclxuICAgIC5mYWN0b3J5KCdodHRwQ2FsbEludGVyY2VwdG9yJywgWygpID0+IHtcclxuICAgICAgdmFyIGh0dHBDYWxsSW50ZXJjZXB0b3IgPSB7XHJcbiAgICAgICAgcmVxdWVzdDogZnVuY3Rpb24oY29uZmlnKXtcclxuICAgICAgICAgIGlmIChjb25maWcudXJsLmluY2x1ZGVzKCdwbnhzJykgJiYgIWNvbmZpZy51cmwuaW5jbHVkZXMoJ2RlbGl2ZXJ5JykgJiYgY29uZmlnLnBhcmFtcykge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICBpZihjb25maWcucGFyYW1zLmRhdGFiYXNlcyl7XHJcbiAgICAgICAgICAgICAgY29uZmlnLnBhcmFtcy5pbnN0ID0gJ0tVTCc7XHJcbiAgICAgICAgICAgICAgY29uZmlnLnBhcmFtcy52aWQgPSAnS1VMZXV2ZW4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGh0dHBDYWxsSW50ZXJjZXB0b3I7XHJcbiAgICB9XSlcclxuICAgIC5jb25maWcoWyckaHR0cFByb3ZpZGVyJywgKCRodHRwUHJvdmlkZXIpID0+IHtcclxuICAgICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnaHR0cENhbGxJbnRlcmNlcHRvcicpO1xyXG4gICAgfV0pO1xyXG59XHJcbiovXHJcbi8qXHJcbmFuZ3VsYXIuZWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdENsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gIHJldHVybiAoZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGlmIChlbGVtZW50WzBdLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjbG9zZXN0KGVsZW1lbnQucGFyZW50KCksIGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfSkodGhpcywgY2xhc3NOYW1lKTtcclxufTtcclxuXHJcbmFuZ3VsYXIuZWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdE5vZGUgPSBmdW5jdGlvbiAobm9kZU5hbWUpIHtcclxuICByZXR1cm4gKGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgbm9kZU5hbWUpIHtcclxuICAgIGlmIChlbGVtZW50WzBdLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnRbMF0ubm9kZU5hbWUgPT0gbm9kZU5hbWUudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjbG9zZXN0KGVsZW1lbnQucGFyZW50KCksIG5vZGVOYW1lKTtcclxuICAgIH1cclxuICB9KSh0aGlzLCBub2RlTmFtZSk7XHJcbn07XHJcbiovXHJcbiJdfQ==
