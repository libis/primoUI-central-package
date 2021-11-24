(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

exports.homedir = function () {
	return '/'
};

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

var _externalLinksInDetails = require('./components/prmServiceDetailsAfter/externalLinksInDetails');

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

var _replaceViewOnlineWithRequest = require('./components/prmFullViewAfter/replaceViewOnlineWithRequest');

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

var _replaceViewOnlineWithRequest2 = require('./components/prmSearchResultAvailabilityLineAfterController/replaceViewOnlineWithRequest');

var _locationsForBibliographicView = require('./components/prmFullViewAfter/locationsForBibliographicView');

var _briefLocationsForBibliographicView = require('./components/prmBriefResultAfter/briefLocationsForBibliographicView');

var _URLDecodeLinkLabel = require('./components/prmFullViewServiceContainerAfter/URLDecodeLinkLabel');

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
                  return [{ name: 'libis-experiment', config: _experiment.experimentConfig, enabled: false, appendTo: 'prm-messages-and-blocks-overview-after', enableInView: '.*' }, { name: 'home-icon', config: _homeIcon.homeIconConfig, enabled: false, appendTo: null, enableInView: '' }, { name: 'beta-switch', config: _betaSwitch.betaSwitchConfig, enabled: false, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'language-dependent-logo', config: _languageDependentLogo.languageDependentLogoConfig, enabled: false, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'view-logo', config: _viewLogo.viewLogoConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'source-icon', config: _sourceIcon.sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^(?!Lirias)' }, { name: 'altmetric', config: _altmetric.altmetricConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB' }, { name: 'altmetrics-badge', config: _altmetricsBadge.altmetricsBadgeConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB' }, { name: 'external-links-in-details', config: _externalLinksInDetails.externalLinksInDetailsConfig, enabled: true, appendTo: 'prm-service-details-after', enableInView: '^Lirias' }, { name: 'locations-for-bibliographic-view', config: _locationsForBibliographicView.locationsForBibliographicViewConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '^JESUITS' }, { name: 'brief-locations-for-bibliographic-view', config: _briefLocationsForBibliographicView.briefLocationsForBibliographicViewConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '^JESUITS' }, { name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after', enableInView: '.*' }, { name: 'pay-my-fines', config: _payMyFines.payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after', enableInView: '.*' }, { name: 'feedback', config: _feedback.feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!(ECB|SYNTRA))' }, { name: 'language-selection', config: _ConfigLanguageSelection.LanguageSelectionConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'deprecated-vids', config: _deprecatedViews.DeprecatedViewsConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' },

                  // {name: 'new-search-button', config: newSearchButtonConfig, enabled: false, appendTo: 'prm-top-nav-bar-links-after', enableInView: '^(?!ECB)'},
                  { name: 'report-a-problem', config: _reportAProblem.reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '.*' }, { name: 'request-a-copy-head', config: _requestACopy.requestACopyConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '^Lirias' },
                  //{name: 'request-a-copy', config: requestACopyConfig, enabled: true, appendTo: 'prm-full-view-service-container-after', enableInView: '^Lirias'},
                  { name: 'request-a-copy-es-doc', config: _requestACopyOfEsDoc.requestACopyOfEsDocConfig, enabled: false, appendTo: 'prm-full-view-service-container-after', enableInView: '^VLP_PIA' }, { name: 'replace-view-online-request', config: _replaceViewOnlineWithRequest.replaceViewOnlineWithRequestConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '^VLP_PIA' }, { name: 'brief-replace-view-online-request', config: _replaceViewOnlineWithRequest2.briefReplaceViewOnlineWithRequestConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '^VLP_PIA' }, { name: 'user-jwt', config: _exposeJwt.exposeJwtConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^VLP|^ECB' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'prm-disclaimer', config: _disclaimer.disclaimerConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'static-footer', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-explore-footer-after', enableInView: '.*' },
                  //{name: 'static-footer-account', config: staticFooterConfig, enabled: true, appendTo: 'prm-account-after', enableInView: '.*'},
                  { name: 'remove-alerts', config: _removeAlerts.removeAlertsConfig, enabled: false, appendTo: 'prm-add-query-to-saved-searches-after', enableInView: '.*' }, { name: 'remove-check-locations', config: _removeCheckLocations.removeCheckLocationsConfig, enabled: false, appendTo: 'prm-search-result-availability-line-after', enableInView: 'Lirias' }, { name: 'prm-dblink', config: _databaseLink.databaseLinkConfig, enabled: false, appendTo: null, enableInView: '.*' },

                  /* lbs-components used in html-templates of the package */
                  { name: 'auto-login-static-footer', config: _autoPromoteLogin.autoLoginCheckboxConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView: '^KULeuven|^UCLL' }, { name: 'promote-login', config: _autoPromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'prm-user-area-expandable-after', enableInView: '^KULeuven|^UCLL' }, { name: 'auto-login', config: _autoPromoteLogin.autoLoginConfig, enabled: true, appendTo: 'prm-user-area-expandable-after', enableInView: 'KULeuven_LUCA|KULeuven_ODISEE|KULeuven_TMOREK|KULeuven_TMOREM|KULeuven_UCLL' }, { name: 'ill-request-form-overview', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-overview-after', enableInView: '.*' }, { name: 'ill-request-form', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-after', enableInView: '^KULeuven|^VIVES' }, { name: 'announcement-feedback', config: _feedbackAnnouncement.feedbackAnnouncementConfig, enabled: false, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'override-getlink-recommendation', config: _recommendationItem.recommendationItemConfig, enabled: true, appendTo: 'prm-recomendation-item-after', enableInView: '.*' }, { name: 'announcement', config: _announcements.announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'pay-my-fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven' },
                  //  {name: 'remove-open-access', config: removeOpenAccessConfig, enabled: false, appendTo: 'prm-facet-after', enableInView: '.*'},
                  { name: 'search-also', config: _searchAlso.searchAlsoConfig, enabled: true, appendTo: 'prm-facet-after', enableInView: '^KULeuven|^VIVES|^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL|^docvlaamsbrabant' }, { name: 'search-also-body', config: _searchAlsoBody.searchAlsoBodyConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^KULeuven|^VIVES|^ODISEE|^FARO' }, { name: 'search-also-body-bib', config: _searchAlsoBodyBib.searchAlsoBodyBibConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^VIVES|^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL|^docvlaamsbrabant' }, { name: 'search-also-body-google', config: _searchAlsoBodyGoogle.searchAlsoBodyGoogleConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL' }, { name: 'search-also-body-worldcat', config: _searchAlsoBodyWorldcat.searchAlsoBodyWorldcatConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^KULeuven' }, { name: 'browzine', config: _browzine.browzineConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '^KULeuven|^ECB' }, { name: 'filter-facet-values', config: _filterFacetValues.filterFacetValuesConfig, enabled: false, appendTo: 'prm-facet-after', enableInView: '^JESUITS' }, { name: 'search-collections', config: _exploreSearchCollections.searchCollectionsConfig, enabled: true, appendTo: 'prm-collection-gallery-header-after', enableInView: '^KADOC' }, { name: 'url-decode-link-label', config: _URLDecodeLinkLabel.URLDecodeLinkLabelControllerConfig, enabled: true, appendTo: 'prm-service-links-after', enableInView: '^KADOC' }].filter(function (component) {
                        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
                  });
            }
      }]);

      return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/ConfigLanguageSelection":3,"./components/general/databaseLink":4,"./components/general/deprecatedViews":5,"./components/general/disclaimer":7,"./components/general/experiment":8,"./components/general/exposeJwt":9,"./components/general/removeAlerts":10,"./components/general/removeCheckLocations":11,"./components/general/searchTip":12,"./components/general/staticFooter":13,"./components/prmAutoPromoteLogin/autoPromoteLogin":14,"./components/prmBriefResultAfter/altmetric":15,"./components/prmBriefResultAfter/briefLocationsForBibliographicView":16,"./components/prmBriefResultAfter/sourceIcon":17,"./components/prmCollectionGalleryHeaderAfter/exploreSearchCollections":18,"./components/prmFacetAfter/filterFacetValues":19,"./components/prmFacetAfter/searchAlso":20,"./components/prmFacetExactAfter/searchAlsoBody":21,"./components/prmFacetExactAfter/searchAlsoBodyBib":22,"./components/prmFacetExactAfter/searchAlsoBodyGoogle":23,"./components/prmFacetExactAfter/searchAlsoBodyWorldcat":24,"./components/prmFinesOverviewAfter/payMyFines":25,"./components/prmFullViewAfter/altmetricsBadge":26,"./components/prmFullViewAfter/locationsForBibliographicView":27,"./components/prmFullViewAfter/replaceViewOnlineWithRequest":28,"./components/prmFullViewServiceContainerAfter/URLDecodeLinkLabel":29,"./components/prmLogoAfter/betaSwitch":30,"./components/prmLogoAfter/homeIcon":31,"./components/prmLogoAfter/languageDependentLogo":32,"./components/prmLogoAfter/newSearchButton":33,"./components/prmLogoAfter/viewLogo":34,"./components/prmMainMenuAfter/feedback":35,"./components/prmRecommendationItemAfter/recommendationItem":36,"./components/prmRequestsAfter/illRequestForm":37,"./components/prmSearchResultAvailabilityLineAfterController/browzine":38,"./components/prmSearchResultAvailabilityLineAfterController/replaceViewOnlineWithRequest":39,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":40,"./components/prmServiceDetailsAfter/externalLinksInDetails":41,"./components/prmServiceHeaderAfter/reportAProblem":42,"./components/prmServiceHeaderAfter/requestACopy":43,"./components/prmServiceHeaderAfter/requestACopyOfEsDoc":44,"./components/prmTopBarBefore/announcements":45,"./components/prmTopBarBefore/feedbackAnnouncement":46,"./components/prmTopBarBefore/finesMessage":48,"./utils":68}],3:[function(require,module,exports){
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
      this.illRequestUrl = 'https://leuven-primo.hosted.exlibrisgroup.com/pds?func=sso&url=https://eu.alma.exlibrisgroup.com/view/uresolver/' + institutionCode + '/openurl?svc_dat=getit&svc.profile=getit&directResourceSharingRequest=true&newUI=true';
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

  self.NeverShowSignInPopup = false;
  var urlParam = "noLogin";
  urlParam = urlParam.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + urlParam + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);

  console.log("NeverShowSignInPopup results " + results);
  if (results) {
    if (decodeURIComponent(results[2].replace(/\+/g, " "))) {
      console.log("Dont show login popup");
      self.NeverShowSignInPopup = true;
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
  // console.log (self)
  var locale = parentCtrl.primolyticsService.userSessionManagerService.i18nService.getLanguage();

  var url = window.location.href;
  self.NeverShowSignInPopup = false;
  var urlParam = "noLogin";
  urlParam = urlParam.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + urlParam + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);

  console.log("NeverShowSignInPopup results " + results);
  if (results) {
    if (decodeURIComponent(results[2].replace(/\+/g, " "))) {
      console.log("Dont show login popup");
      self.NeverShowSignInPopup = true;
    }
  }

  parentCtrl.primolyticsService.userSessionManagerService.signInObservable.subscribe(function () {
    if (_this.parentCtrl.parentCtrl.isLoggedIn == true) {
      $mdDialog.hide();
    }
  });

  console.log("NeverShowSignInPopup = " + self.NeverShowSignInPopup);

  $scope.primoPromoteLogin = '';
  $scope.showSignInPopup = function () {
    var parentEl = angular.element(document.body);
    console.log("NeverShowSignInPopup = " + self.NeverShowSignInPopup);
    if (!self.NeverShowSignInPopup) {
      $mdDialog.show({
        parent: parentEl,
        templateUrl: 'custom/CENTRAL_PACKAGE/html/templates/promote_login_' + locale + '.html',
        locals: {
          primoPromoteLogin: $scope.primoPromoteLogin
        },
        controller: DialogController
      });
    }
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
  Primo.user.then(function (user) {
    self.user = user;
    self.isLoggedIn = self.user.isLoggedIn();

    if (!user.isLoggedIn()) {
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
  });
};

var AutoLoginController = function AutoLoginController($element) {
  _classCallCheck(this, AutoLoginController);

  var self = this;
  var parentCtrl = self.parentCtrl.parentCtrl;
  // Ignore this in prm-login-alma-mashup, only if parent is prm-user-area
  Primo.user.then(function (user) {
    if (!user.isLoggedIn()) {
      var auth = window.appConfig.authentication[0];
      var loginUrl = parentCtrl.loginService.loginUrl(auth['profile-name'], auth['authentication-system']);
      document.location.href = loginUrl.replace(/institution=([^&])*/, "institution=KUL");
    }
  });
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

var altmetricHTML = '<div  class="altmetric-badge" id="altmetrics_{{$ctrl.recordid}}">\r\n<div ng-if="$ctrl.doi" class="altmetric-embed" style="padding-top:0.5em"\r\n    data-badge-popover="right" data-badge-type="2" data-hide-no-mentions="true" data-link-target="_blank" class="altmetric-embed"\r\n    data-doi="{{$ctrl.doi}}"\r\n    aria-label="Social Popularity Statistics (AltMetrics)">\r\n</div>\r\n</div>\r\n';

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var briefLocationsForBibliographicViewHTML = '<ul class="locations-for-bibliographic-view brief-locations-for-bibliographic-view">\r\n    <li ng-repeat="delivery_library in ::$ctrl.delivery_library">\r\n        <a href="{{delivery_library.url}}" target="catalog">{{delivery_library.name}}</a>\r\n    </li>\r\n</ul>\r\n\r\n';

var BriefLocationsForBibliographicViewController = function () {
    function BriefLocationsForBibliographicViewController($element, $compile, $scope, FilterLocationsService) {
        _classCallCheck(this, BriefLocationsForBibliographicViewController);

        self = this;
        this.$element = $element;
        this.$scope = $scope;
        this.vid = window.appConfig.vid;
        this.FilterLocationsService = FilterLocationsService;
    }

    _createClass(BriefLocationsForBibliographicViewController, [{
        key: '$onInit',
        value: function $onInit() {
            this.parentCtrl = this.parentCtrl.parentCtrl;
            this.item = this.parentCtrl.result;
            this.pnx = this.item.pnx;

            this.delivery_library = this.FilterLocationsService.filterLocations(this.pnx);

            // console.log (  this.delivery_library )
            this.parentElement = this.$element.parent().parent()[0];
        }
    }]);

    return BriefLocationsForBibliographicViewController;
}();

BriefLocationsForBibliographicViewController.$inject = ['$element', '$compile', '$scope', 'FilterLocationsService'];

var briefLocationsForBibliographicViewConfig = exports.briefLocationsForBibliographicViewConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: BriefLocationsForBibliographicViewController,
    template: briefLocationsForBibliographicViewHTML
};

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchCollectionsHTML = "<a ng-if=\"$ctrl.getCollection().includes('Parochieblad')\" class=\"md-button md-primoExplore-theme md-ink-ripple\" href=\"/primo-explore/search?tab=kadoc_parochiebladen&search_scope=KADOC_PAROCHIEBLADEN&vid=KADOC\">\r\n  <span translate=\"lbs.nui.search.collections.button\">Zoek full text in alle parochiebladen</span></a>\r\n  <!--<div style=\"position:absolute;bottom:0.5em;right:17%;color:white;font-weight:200;margin:5px 5px 0 5px;/*! background: rgba(red,0.1); */border: 1px solid #53738c;padding: 0px 3px 0 1px;background: #53738c;border-radius: 5px;\">\r\n    <strong>We are currently improving the performance of our systems. Images may take somewhat longer to be displayed.</strong>\r\n  </div>-->\r\n<!--<a ng-if=\"!$ctrl.isGalleryLobby\" class=\"md-button md-primoExplore-theme md-ink-ripple\" href=\"/primo-explore/search?query=title,contains,{{$ctrl.getCollection()}}&search_scope=KULEUVEN_COLLECTIONS&sortby=rank&vid=KULeuven&offset=0\" title=\"Search {{$ctrl.getCollection()}}\">Search this collection</a>\r\n<!-- &facet=local4,include,Corble%20fencing%20collection$$IKUL -->\r\n";

var SearchCollectionsController = function () {
  function SearchCollectionsController($scope) {
    _classCallCheck(this, SearchCollectionsController);

    var self = this;
    //might be needed after next release
    self.$scope = $scope;
    this.isGalleryLobby = this.parentCtrl.parentCtrl.isGalleryLobby;
    this.getCollection = this.getCollection;
    //console.log(this.getCollection);
  }

  _createClass(SearchCollectionsController, [{
    key: "$onInit",
    value: function $onInit() {
      //console.log("test collections");

    }
  }, {
    key: "getCollection",
    value: function getCollection() {
      if (!this.isGalleryLobby && this.parentCtrl.parentCtrl.currentCollection != undefined) {
        if (this.parentCtrl.parentCtrl.currentCollection.name.includes("Parochie")) {
          document.getElementsByClassName("search-within")[0].style.visibility = 'hidden';
        }
        return this.parentCtrl.parentCtrl.currentCollection.name;
      }
    }
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

},{}],19:[function(require,module,exports){
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

},{"os":1}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchAlsoBodyHTML = '<div ng-if="$ctrl.name === \'search_also\'" class="lbs-search-also">\r\n  <div ng-hide="$ctrl.parentCtrl.parentCtrl.facetGroup.facetGroupCollapsed">\r\n    <div class="section-content animate-max-height-variable">\r\n      <div class="md-chips md-chips-wrap">\r\n        <div ng-repeat="target in $ctrl.targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">\r\n          <div class="md-chip-content layout-row" role="button" tabindex="9">\r\n            <strong dir="auto" title="{{ target.name }}">\r\n              <a ng-href="{{ target.url + target.mapping($ctrl.search) }}" target="_blank"  title="{{ (target.tooltip | translate )}}">\r\n                <img ng-src="{{ target.img }}" width="22" height="22" style="vertical-align:middle;padding-right:2px;"> {{ target.name }}\r\n              </a>\r\n            </strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

var SearchAlsoBodyController = function () {
  function SearchAlsoBodyController($location, proxyUrl) {
    var _this = this;

    _classCallCheck(this, SearchAlsoBodyController);

    this.location = $location;
    var url = "";
    Primo.user.then(function (user) {
      var campus = '';
      campus = user.isOnCampus();
      if (!campus) {
        url = proxyUrl + '/login?url=';
      }
      _this.targets = _this._targets(url);
    });
  }

  _createClass(SearchAlsoBodyController, [{
    key: '_targets',
    value: function _targets(url) {

      return [{
        "name": "UniCat",
        "url": url + "https://unicat.be/uniCat?func=search&uiLanguage=en&query=",
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

SearchAlsoBodyController.$inject = ['$location', 'proxyUrl'];

var searchAlsoBodyConfig = exports.searchAlsoBodyConfig = {
  bindings: { parentCtrl: '<' },
  controller: SearchAlsoBodyController,
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

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocationsForBibliographicViewHTML = '<span style="display:none">{{$ctrl.recordid}}</span>\r\n<ul class="locations-for-bibliographic-view">\r\n        <li ng-repeat="delivery_library in ::$ctrl.delivery_library">\r\n                <a href="{{delivery_library.url}}" target="catalog">{{delivery_library.name}}</a>\r\n        </li>\r\n</ul>';

var LocationsForBibliographicViewController = function () {
    function LocationsForBibliographicViewController($element, $compile, $scope, FilterLocationsService) {
        _classCallCheck(this, LocationsForBibliographicViewController);

        self = this;
        this.$element = $element;
        this.$scope = $scope;
        this.vid = window.appConfig.vid;
        this.FilterLocationsService = FilterLocationsService;
    }

    _createClass(LocationsForBibliographicViewController, [{
        key: '$onInit',
        value: function $onInit() {
            this.parentCtrl = this.parentCtrl.parentCtrl;
            this.item = this.parentCtrl.item;
            this.pnx = this.item.pnx;

            this.delivery_library = this.FilterLocationsService.filterLocations(this.pnx);

            // console.log ( this.delivery_library)


            this.parentElement = this.$element.parent().parent()[0];
            this.insertLocationsLinksSection();
        }
    }, {
        key: 'insertLocationsLinksSection',
        value: function insertLocationsLinksSection() {
            if (typeof this.delivery_library !== 'undefined' && this.delivery_library.length > 0) {
                // the array is defined and has at least one element

                var locationsLinksSectionData = {
                    scrollId: "locationsLinks",
                    serviceName: "locationsLinks",
                    title: "brief.results.tabs.LocationsLinks"
                };
                var locationsLinksSectionElement = this.$element; //.find('locations-for-bibliographic-view')[0];
                this.insertSection(locationsLinksSectionData, locationsLinksSectionElement);
            }
        }
    }, {
        key: 'insertSection',
        value: function insertSection(sectionData, sectionElement) {
            // The title of the new section is used to idenitfy the section
            // element.
            var sectionTitleSelector = 'h4[translate="' + sectionData.title + '"]';

            // We set up the watcher before inserting the section data,
            // to ensure that the watcher catches the change.
            this.waitForfullViewService(sectionData);
            this.waitForTargetThenMoveSection(sectionTitleSelector, sectionElement);
        }

        // Wait for the target element to be created.

    }, {
        key: 'waitForTargetThenMoveSection',
        value: function waitForTargetThenMoveSection(sectionTitleSelector, sectionElement) {
            var _this = this;

            var unbindWatcher = this.$scope.$watch(function () {
                return _this.parentElement.querySelector(sectionTitleSelector);
            }, function (newVal, oldVal) {
                if (newVal) {
                    _this.moveSectionElement(newVal, sectionElement);
                    unbindWatcher();
                }
            });
        }
    }, {
        key: 'moveSectionElement',
        value: function moveSectionElement(identifierElement, sectionElement) {
            var targetElement = identifierElement.parentElement.parentElement.parentElement.parentElement.children[1];
            // Move the section into the target element.
            if (targetElement && targetElement.appendChild) {
                targetElement.appendChild(sectionElement[0]);
            }
        }
    }, {
        key: 'waitForfullViewService',
        value: function waitForfullViewService(sectionData) {
            var _this2 = this;

            var unbindWatcher = this.$scope.$watch(function () {
                return _this2.parentCtrl.fullViewService.servicesArray;
            }, function (newVal, oldVal) {
                if (newVal) {
                    _this2.insertSectionData(sectionData);
                    // unbindWatcher();
                }
            });
        }
    }, {
        key: 'insertSectionData',
        value: function insertSectionData(sectionData) {
            Promise.resolve(this.parentCtrl.fullViewService.getServices(this.parentCtrl.item, this.parentCtrl.originator)).then(function (services) {
                // Add to services if not alread in the list
                //if ( services.findIndex(service => service.scrollId === "altmetrics") < 0 ){
                services.splice(services.length - 2, 0, sectionData);
                //}
            });

            // this.parentCtrl.services.splice(this.parentCtrl.services.length - 1, 0, sectionData);
        }
    }]);

    return LocationsForBibliographicViewController;
}();

LocationsForBibliographicViewController.$inject = ['$element', '$compile', '$scope', 'FilterLocationsService'];

var locationsForBibliographicViewConfig = exports.locationsForBibliographicViewConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: LocationsForBibliographicViewController,
    template: LocationsForBibliographicViewHTML
};

},{}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReplaceViewOnlineWithRequestController = function () {
    function ReplaceViewOnlineWithRequestController($scope, $window, $http, $element, angularLoad) {
        _classCallCheck(this, ReplaceViewOnlineWithRequestController);

        this.$http = $http;
        this.$scope = $scope;
        this.angularLoad = angularLoad;
        this.$element = $element;
    }

    _createClass(ReplaceViewOnlineWithRequestController, [{
        key: "$onchange",
        value: function $onchange() {
            console.log('something has changed for ReplaceViewOnlineWithRequestControllerter');
        }
    }, {
        key: "$onInit",
        value: function $onInit() {
            try {
                this.services = this.parentCtrl.parentCtrl.services;
            } catch (e) {
                console.log(e.message);
            };

            var parentCtrl = this.parentCtrl.parentCtrl;
            var pnx = parentCtrl.item.pnx;
            //console.log ( parentCtrl.item.delivery.link )
            var recordData = self.currentRecord;
            // console.log ( pnx.control.sourceid )

            if (pnx.control.sourceid.includes("ESVLP_scopeArchiv")) {

                var getit_link1_0_link = parentCtrl.item.delivery.link.filter(function (link) {
                    return link.linkType == "http://purl.org/pnx/linkType/lln02";
                });

                var requestDate = {
                    title: "nui.getit.tab1_requestacopy",
                    serviceName: "display",
                    linkElement: {
                        category: "Remote Search Resource",
                        links: [{
                            displayText: "openurl_request",
                            getItTabText: "tab1_requestacopy",
                            hyperlinkText: "tab1_requestacopy",
                            isLinktoOnline: false,
                            link: getit_link1_0_link[0].linkURL
                        }]
                    }
                };

                var unbindReplaceSectionWatcher = this.$scope.$watch(function () {
                    return parentCtrl.services;
                }, function (newVal, oldVal) {
                    /*
                    console.log('new services');
                    console.log(newVal)
                    console.log('old services');
                    console.log(oldVal);
                    */
                    if (newVal) {
                        // console.log('watch unbindReplaceSectionWatcher');
                        var getit_link1_0_service = parentCtrl.services.filter(function (service) {
                            return service.scrollId == "getit_link1_0";
                        });
                        //console.log(getit_link1_0_service);
                        //console.log(getit_link1_0_service[0].serviceName);
                        getit_link1_0_service[0].title = requestDate.title;
                        getit_link1_0_service[0].serviceName = requestDate.serviceName;
                        getit_link1_0_service[0].linkElement = Object.assign(getit_link1_0_service[0].linkElement, requestDate.linkElement);
                        unbindReplaceSectionWatcher();
                    }
                });
            }

            return;
        }

        /**
         *  Method to load the altmetrics badge.
         *  @return {Promise} A Promise to be fulfilled if the badge is loaded, 
         *  and to be rejected if it could not be loaded.
         */

    }, {
        key: "$onDestroy",
        value: function $onDestroy() {}
    }]);

    return ReplaceViewOnlineWithRequestController;
}();

ReplaceViewOnlineWithRequestController.$inject = ['$scope', '$window', '$http', '$element', 'angularLoad'];

var replaceViewOnlineWithRequestConfig = exports.replaceViewOnlineWithRequestConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: ReplaceViewOnlineWithRequestController,
    template: ''
};

},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URLDecodeLinkLabelControllerConfig = undefined;

var _searchAlsoBodyBib = require("../prmFacetExactAfter/searchAlsoBodyBib");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URLDecodeLinkLabelController = function URLDecodeLinkLabelController($scope) {
  _classCallCheck(this, URLDecodeLinkLabelController);

  var self = this;
  self.scope = $scope;
  var parentCtrl = self.parentCtrl.parentCtrl;

  if (parentCtrl.item.pnx.control.sourceid.includes("KADOC_PAROCHIEBLADEN")) {
    parentCtrl.item.delivery.link.forEach(function (l) {
      if (l.linkType == "http://purl.org/pnx/linkType/addlink" && l.displayLabel.startsWith("In ODIS:")) {
        l.displayLabel = decodeURIComponent(l.displayLabel.replace(/\+/g, '%20'));
      }
    });
  }
};

URLDecodeLinkLabelController.$inject = ['$scope'];

var URLDecodeLinkLabelControllerConfig = exports.URLDecodeLinkLabelControllerConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: URLDecodeLinkLabelController,
  template: ''
};

},{"../prmFacetExactAfter/searchAlsoBodyBib":22}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{}],33:[function(require,module,exports){
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

},{}],34:[function(require,module,exports){
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
  self.localeLibraryLogo = window.appConfig.customization.libraryLogo;
  //$element.parent().parent()[0].firstChild.parentNode.removeChild($element.parent().parent()[0].firstChild);

  Primo.view.then(function (view) {
    //let vid = view.code;
    var vid = window.appConfig.vid;
    var locale = view.interfaceLanguage;

    var localeLibraryLogo = 'custom/' + vid + '/img/library-logo-' + locale + '.png';
    $translate('limo.instituteUrl').then(function (instituteUrl) {
      if (instituteUrl == 'http://www.libis.be/') {
        self.homePageLink = '/primo-explore/search?vid=' + vid + "&lang=" + locale;
      } else {
        self.homePageLink = instituteUrl;
      }
    });

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

},{}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
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
                this.illRequestUrl = 'https://leuven-primo.hosted.exlibrisgroup.com/pds?func=sso&url=https://eu.alma.exlibrisgroup.com/view/uresolver/' + this.institutionCode + '/openurl?svc_dat=getit&svc.profile=getit&directResourceSharingRequest=true&newUI=true';
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

},{}],38:[function(require,module,exports){
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

},{}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BriefReplaceViewOnlineWithRequestController = function BriefReplaceViewOnlineWithRequestController($scope, $window, $http, $element, angularLoad) {
    _classCallCheck(this, BriefReplaceViewOnlineWithRequestController);

    this.$http = $http;
    this.$scope = $scope;
    this.angularLoad = angularLoad;
    this.$element = $element;
    var displayedAvailability = $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.displayedAvailability;
    var pnx = $scope.$ctrl.parentCtrl.parentCtrl.result.pnx;

    if (pnx.control.sourceid.includes("ESVLP_scopeArchiv") && displayedAvailability.indexOf("not_restricted") > -1) {
        var availabilityLinksUrl = $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.link.filter(function (link) {
            return link.linkType == "http://purl.org/pnx/linkType/lln02";
        });

        $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.availability = ["ScopeArchiv_free"];
        $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.deliveryCategory = ["Remote Search Resource"];
        $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.displayedAvailability = "ScopeArchiv_free";
        $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.availabilityLinksUrl = [availabilityLinksUrl[0].linkURL];
    }

    /*
            if (  pnx.control.sourceid.includes("ESVLP_scopeArchiv") && displayedAvailability.indexOf("not_restricted") > -1 ) {
                // console.log ( $scope.$parent.$parent.$parent.$ctrl.delivery )
                angular.forEach($scope.$ctrl.parentCtrl.parentCtrl.$element, function(el) {
                    console.log ( el )
                    if (el.localName == 'prm-search-result-availability-line' ){
                        el.remove();
                    }
                })
            }
    */
};

BriefReplaceViewOnlineWithRequestController.$inject = ['$scope', '$window', '$http', '$element', 'angularLoad'];

var briefReplaceViewOnlineWithRequestConfig = exports.briefReplaceViewOnlineWithRequestConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: BriefReplaceViewOnlineWithRequestController,
    template: ''
};

},{}],40:[function(require,module,exports){
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

},{}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExternalLinksInDetailsController = function () {
    function ExternalLinksInDetailsController($scope) {
        _classCallCheck(this, ExternalLinksInDetailsController);

        self = this;
        this.$scope = $scope;
        this.parentCtrl = this.parentCtrl.parentCtrl;
        this.waitForPNX();
    }

    _createClass(ExternalLinksInDetailsController, [{
        key: "createExternalLinks",
        value: function createExternalLinks() {

            // console.log( self.parentCtrl.details )

            var identifiers = self.parentCtrl.details.filter(function (d) {
                return d.label === "identifier";
            });
            // console.log( identifiers[0].values[0].values );

            var newIdentifiers = identifiers[0].values[0].values.map(function (i) {
                if (new RegExp(" \\$\\$CDOI: ").test(i)) {
                    return i.replace(/( \$\$CDOI: \$\$V)([^\n ]*)/, '$1<a href="https://doi.org/$2" target="_blank">$2 <i class=\"material-icons prm-text\" style>launch</i></a>');
                } else {
                    return i;
                }
            });

            //console.log( newIdentifiers );

            identifiers[0].values[0].values = newIdentifiers;
        }
    }, {
        key: "waitForPNX",
        value: function waitForPNX() {
            var _this = this;

            var unbindWatcher = self.$scope.$watch(function () {
                return self.parentCtrl.details;
            }, function (newVal, oldVal) {
                if (newVal) {
                    unbindWatcher();
                    _this.createExternalLinks();
                }
            });
        }
    }]);

    return ExternalLinksInDetailsController;
}();

ExternalLinksInDetailsController.$inject = ['$scope'];

var externalLinksInDetailsConfig = exports.externalLinksInDetailsConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: ExternalLinksInDetailsController,
    template: ''
};

},{}],42:[function(require,module,exports){
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

},{}],43:[function(require,module,exports){
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

},{}],44:[function(require,module,exports){
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
        //let appendButtonTo   = $element.parent().parent().find('h4');


        if (self.parentCtrl.parentCtrl.service) {
            var serviceTitleCode = self.parentCtrl.parentCtrl.service.title;
            var appendButtonTo = $element.parent();
            var recordData = self.currentRecord;

            // console.log (appendButtonTo)

            /*
            let TypesShowRequestACopyOfEsDoc = ['chapter', 'journal-article', 'thesis-dissertation', 'conference', 'report', 'dataset', 'c-bookreview', 'media', 'software'];
            let StatusShowRequestACopyOfEsDoc = ['published'];
            */

            if (/^nui\.brief\.results\.tabs\.links/.test(serviceTitleCode)) {
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
                        appendButton = true;
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

},{}],45:[function(require,module,exports){
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

},{}],46:[function(require,module,exports){
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

},{"./feedbackAnnouncementDialog":47}],47:[function(require,module,exports){
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

},{}],48:[function(require,module,exports){
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

},{}],49:[function(require,module,exports){
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

},{}],50:[function(require,module,exports){
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

},{}],51:[function(require,module,exports){
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

},{}],52:[function(require,module,exports){
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

},{}],53:[function(require,module,exports){
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

},{"../components/general/dialog":6}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterLocationsService = function () {
    function FilterLocationsService($rootScope, $compile, $mdToast, $sce, $translate, $timeout) {
        _classCallCheck(this, FilterLocationsService);

        this.mdToast = $mdToast;
        this.sce = $sce;
        this.translate = $translate;
        this.timeout = $timeout;
        this.compile = $compile;
        this.rootScope = $rootScope;
        this.vid = window.appConfig.vid;
        // this.messageServiceEventHandler = this.rootScope.$on('$translateLoadingEnd', (event) => {
        // console.log("=========> translation loaded <==========");
        // });
    }

    _createClass(FilterLocationsService, [{
        key: "filterLocations",
        value: function filterLocations(pnx_record) {
            var availlibrary = pnx_record.display.availlibrary.map(function (lib) {
                return lib.split("$$");
            });

            availlibrary = availlibrary.map(function (lib) {
                lib.shift();
                lib = lib.map(function (s) {
                    return _defineProperty({}, s.charAt(0), s.substr(1));
                });
                lib = lib.reduce(function (tag, field) {
                    tag[Object.keys(field)[0]] = Object.values(field)[0];
                    return tag;
                }, {});
                return lib;
            });

            // console.log ( this.vid )

            if (this.vid == "JESUITS") {
                var library_filter_array = {
                    "KUL_GBIB_LIB": {
                        "id": function id(lib) {
                            if (lib["O"]) {
                                return lib["O"];
                            } else {
                                return pnx_record.control.recordid;
                            }
                        },
                        "name": "KU Leuven Maurits Sabbe Library",
                        "url": "https://" + document.location.host + "/primo-explore/fulldisplay?docid=<#recordid>&context=L&vid=KULeuven&search_scope=ALL_CONTENT&isFrbr=true&tab=all_content_tab&noLogin=true"
                    },
                    "KADOC_KADOC_LIB": {
                        "id": function id(lib) {
                            if (lib["O"]) {
                                return lib["O"];
                            } else {
                                return pnx_record.control.recordid;
                            }
                        },
                        "name": "KADOC",
                        "url": "https://" + document.location.host + "/primo-explore/fulldisplay?docid=<#recordid>&context=L&vid=KADOC&search_scope=ALL_CONTENT&isFrbr=true&tab=all_content_tab"
                    },
                    "ANET_UA-CST": {
                        "id": function id(lib) {
                            return pnx_record.search.addsrcrecordid;
                        },
                        "name": "Ruusbroec Institute Library – University of Antwerp",
                        //"url": "https://anet.be/record/opacanet/<#recordid>"
                        "url": "https://anet.be/record/uantwerpen/opacuantwerpen/<#recordid>/N"
                    }

                };

                availlibrary = availlibrary.filter(function (library) {
                    //console.log(library["L"]);
                    //console.log ( Object.keys(library_filter_array) )
                    return Object.keys(library_filter_array).includes(library["L"]) && pnx_record.facets.lfc10.includes(library["L"]);
                });

                availlibrary = availlibrary.map(function (library) {
                    var recordid = library_filter_array[library["L"]]["id"](library);
                    var url = library_filter_array[library["L"]]["url"].replace("<#recordid>", recordid);
                    var name = library_filter_array[library["L"]]["name"];
                    library = { "url": url, "name": name, "code": library["L"] };
                    return library;
                });

                var resArr = [];
                availlibrary.filter(function (lib) {
                    // var i = resArr.findIndex(x => (x.name == lib.name && x.code == lib.code  && x.url == lib.url ) );
                    var i = resArr.findIndex(function (x) {
                        return x.name == lib.name && x.code == lib.code;
                    });
                    if (i <= -1) {
                        resArr.push(lib);
                    }
                    return null;
                });

                availlibrary = resArr;
            } else {
                availlibrary = [];
            }

            return availlibrary;
        }
    }]);

    return FilterLocationsService;
}();

exports.default = FilterLocationsService;
;

FilterLocationsService.$inject = ['$rootScope', '$compile', '$window'];

},{}],55:[function(require,module,exports){
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

},{}],56:[function(require,module,exports){
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

},{}],57:[function(require,module,exports){
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

var _filterLocationsService = require('./factories/filterLocationsService');

var _filterLocationsService2 = _interopRequireDefault(_filterLocationsService);

var _windowEventListener = require('./factories/windowEventListener');

var _windowEventListener2 = _interopRequireDefault(_windowEventListener);

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

//let servicesHost = 'http://192.168.100.101:9292/';
//let servicesHost = 'http://localhost:9292/';
var servicesHost = 'https://services.libis.be/';

var proxies = {
  "HUB": "http://odisee.e-bronnen.be",
  "KUL": "http://kuleuven.e-bronnen.be",
  "LUCA": "http://luca.e-bronnen.be",
  "KHK": "http://k.thomasmore.e-bronnen.be",
  "TMOREM": "http://am.thomasmore.e-bronnen.be",
  "UCLL": "http://khleuven.e-bronnen.be",
  "KATHO": "http://zuid.vives.e-bronnen.be"
};

var proxyUrl = "http://kuleuven.e-bronnen.be";

if (window.appConfig["primo-view"]["institution"]["institution-code"] in proxies) {
  proxyUrl = proxies[window.appConfig["primo-view"]["institution"]["institution-code"]];
}

var app = angular.module('centralCustom', ['ngMaterial', 'vcRecaptcha', 'googleAnalytics'])
/*
//.constant('servicesHost', 'https://services.libis.be/')
  .constant('feedbackServiceURL', 'https://services.libis.be/feedback')
  .constant('reportAProblemURL', 'https://services.libis.be/report_a_problem')
  .constant('requestACopyURL', 'http://192.168.100.101:9292//request_a_copy')
*/
.constant('feedbackServiceURL', servicesHost + 'feedback').constant('reportAProblemURL', servicesHost + 'report_a_problem').constant('requestACopyURL', servicesHost + 'request_a_copy').constant('requestACopyOfEsDocURL', servicesHost + 'illjwtform').constant('proxyUrl', proxyUrl).config(function ($sceDelegateProvider) {
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
        articlePDFDownloadLinkText: "Download PDF",
        articleLinkEnabled: true,
        articleLinkText: "Read Article",
        unpaywallEmailAddressKey: "helpdesk@libisnet.be",
        articlePDFDownloadViaUnpaywallEnabled: true,
        articlePDFDownloadViaUnpaywallText: "Download PDF (via Unpaywall)"
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
}).factory('FeedService', _feedService.feedService).service('AltmetricsService', _altmetricsService2.default).service('MessageService', _messageService2.default).service('FeedbackService', _feedbackService2.default).service('FilterLocationsService', _filterLocationsService2.default).service('WindowEventListener', _windowEventListener2.default).factory('dbSearchHttpCallInterceptor', _dbSearchHttpCallInterceptor.dbSearchHttpCallInterceptor).factory('apiCallInterceptor', _apiCallInterceptor.apiCallInterceptor).config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('apiCallInterceptor');
}]);

//intercept api calls for database search and change to KUL (only regional views)
var reg_views = ["KULeuven", "KULeuven_TMOREM", "KULeuven_TMOREK", "KULeuven_UCLL", "KULeuven_LUCA", "KULeuven_ODISEE"];
if (reg_views.includes(window.appConfig.vid)) {
  app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('dbSearchHttpCallInterceptor');
  }]);
}

//enable google tag manager
var reg_views = ["KULeuven", "KULeuven_TMOREM", "KULeuven_TMOREK", "KULeuven_UCLL", "KULeuven_LUCA", "KULeuven_ODISEE", "FARO", "UCLL", "LUCA", "ODISEE", "TMOREK", "TMOREM", "VIVES_KATHO", "VIVES_KHBO"];
if (reg_views.includes(window.appConfig.vid)) {
  app.value('analyticsOptions', {
    enabled: true,
    siteId: 'GTM-WR259MX',
    defaultTitle: 'Discovery Search'
  });
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

//add robotsMeta workaround exlibris
app.robotsMeta = angular.element(document.getElementsByName('robots'))[0];
app.robotsMeta.content = 'all';

},{"./components":2,"./factories/altmetricsService":49,"./factories/apiCallInterceptor":50,"./factories/dbSearchHttpCallInterceptor":51,"./factories/feedService":52,"./factories/feedbackService":53,"./factories/filterLocationsService":54,"./factories/messageService":55,"./factories/windowEventListener":56,"./primo-explore-dom/js/primo":58,"./primo-explore-dom/js/primo/explore/helper":61,"./templates":67}],58:[function(require,module,exports){
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

},{"./primo/explore":59,"./primo/explore/helper":61,"./primo/facets":62,"./primo/records":63,"./primo/user":64,"./primo/view":65}],59:[function(require,module,exports){
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

},{"./explore/components":60,"./explore/helper":61}],60:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":66,"./helper":61}],61:[function(require,module,exports){
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

},{}],62:[function(require,module,exports){
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

},{"./explore/components":60,"./explore/helper":61}],63:[function(require,module,exports){
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

},{"./explore/components":60,"./explore/helper":61}],64:[function(require,module,exports){
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

},{"./explore/helper":61}],65:[function(require,module,exports){
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

},{"./explore/helper":61}],66:[function(require,module,exports){
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

},{}],67:[function(require,module,exports){
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
var prmFeaturedResultsContainerHTML = '<div class="margin-top-medium" layout="row">\r\n   <div class="margin-right-medium" flex="15">\r\n      <!--<h3 ng-if="!$ctrl.isSuprima || !$ctrl.title" class="normal-text">{{\'search-advanced.mediaType.option.\' + $ctrl.type| translate}} {{\'featuredresults.labels.in\'| translate}} {{\'scopes.option.\' + $ctrl.scope| translate}} {{\'featuredresults.labels.matching\'| translate}}</h3>\r\n      <h3 ng-if="$ctrl.isSuprima && $ctrl.title" class="normal-text">{{$ctrl.title | translate}}</h3>-->\r\n\t  <h3 ng-if="$ctrl.scope == \'PHYS_ITEMS\'" class="normal-text">Resultaten in het Parlementair Informatiecentrum</h3>\r\n\t  <h3 ng-if="$ctrl.scope == \'VLP_ES\'" class="normal-text">Resultaten in het Archief</h3>\r\n      <md-button ng-if="$ctrl.totalHits?($ctrl.totalHits>$ctrl.featuredResultItems.length):($ctrl.leftArrowShowing || $ctrl.isShowRightArrow)" ng-href="{{::$ctrl.searchLink()}}" ng-click="$ctrl.sendDisplayAllResultsBeacon()" class="featured-results-link button-as-link zero-margin" href><span class="bold-text">{{\'featuredresults.labels.displayall\'| translate}}</span></md-button>\r\n   </div>\r\n   <div class="prm-horizontal-content no-scrollbar" layout="row" flex aria-label="" ng-keyup="$ctrl.handleKeyUp($event)">\r\n      <div flex class="horizontal-content-container">\r\n         <md-button class="horizontal-content-control left-button" tabindex="0" ng-click="$ctrl.scrollContent(\'left\')" aria-label="" ng-if="$ctrl.leftArrowShowing">\r\n            <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="chevron-left"></prm-icon>\r\n            <md-tooltip><span></span></md-tooltip>\r\n         </md-button>\r\n         <div class="horizontal-content-scroller" role="list" layout="row" ng-class="{\'left-button-visible\': $ctrl.leftArrowShowing, \'right-button-visible\': $ctrl.isShowRightArrow,\'safari-hide\': $ctrl.isSafari}">\r\n            <div class="horizontal-content-scroll-offseter" layout="row"><prm-featured-result-item [featured-result-item]="item" [index]="$index" [tab]="$ctrl.tab" [format]="$ctrl.format" [scope]="$ctrl.scope" [adaptor]="$ctrl.adaptor" ng-repeat="item in $ctrl.featuredResultItems"></prm-featured-result-item></div>\r\n         </div>\r\n         <md-button class="horizontal-content-control right-button" tabindex="0" ng-click="$ctrl.scrollContent(\'right\')" aria-label="" ng-if="$ctrl.isShowRightArrow">\r\n            <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="chevron-right"></prm-icon>\r\n            <md-tooltip><span></span></md-tooltip>\r\n         </md-button>\r\n      </div>\r\n   </div>\r\n</div>\r\n<prm-featured-results-after parent-ctrl="$ctrl"></prm-featured-results-after>\r\n';

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
                enabled: false,
                enableInView: '.*'
            }, {
                id: 'components/account/requests/requests.html',
                template: prmRequestBugFixHTML,
                enabled: false,
                enableInView: '.*'
            }, {
                id: 'components/search/briefResult/briefResultContainer.html',
                template: prmLiriasBriefResultContainerHTML,
                enabled: true,
                enableInView: 'Lirias'
            }, {
                id: 'components/search/searchResult/featuredResults/featured-results.html',
                template: prmFeaturedResultsContainerHTML,
                enabled: true,
                enableInView: 'VLP_PIA'
            }].filter(function (template) {
                return template.enabled && new RegExp(template.enableInView).test(window.appConfig.vid);
            });
        }
    }]);

    return Templates;
}();

exports.default = Templates;

},{"./utils":68}],68:[function(require,module,exports){
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

angular.module('googleAnalytics', []);
angular.module('googleAnalytics').run(function ($rootScope, $interval, analyticsOptions) {
  if (analyticsOptions.hasOwnProperty("enabled") && analyticsOptions.enabled) {
    if (analyticsOptions.hasOwnProperty("siteId") && analyticsOptions.siteId != '') {

      (function (w, d, s, l, i) {
        w[l] = w[l] || [];w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', analyticsOptions.siteId);
    }

    var inlineScriptTag = document.createElement('noscript');
    inlineScriptTag.type = 'text/javascript';

    var inlineCode = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WR259MX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';

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

},{}]},{},[57])

//# sourceMappingURL=custom.js.map
