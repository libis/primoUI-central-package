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

var _locationsForBibliographicView = require('./components/prmFullViewAfter/locationsForBibliographicView');

var _briefLocationsForBibliographicView = require('./components/prmBriefResultAfter/briefLocationsForBibliographicView');

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
                  return [{ name: 'libis-experiment', config: _experiment.experimentConfig, enabled: false, appendTo: 'prm-messages-and-blocks-overview-after', enableInView: '.*' }, { name: 'home-icon', config: _homeIcon.homeIconConfig, enabled: false, appendTo: null, enableInView: '' }, { name: 'beta-switch', config: _betaSwitch.betaSwitchConfig, enabled: false, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'language-dependent-logo', config: _languageDependentLogo.languageDependentLogoConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'view-logo', config: _viewLogo.viewLogoConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'source-icon', config: _sourceIcon.sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^(?!Lirias)' }, { name: 'altmetric', config: _altmetric.altmetricConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB' }, { name: 'altmetrics-badge', config: _altmetricsBadge.altmetricsBadgeConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB' }, { name: 'locations-for-bibliographic-view', config: _locationsForBibliographicView.locationsForBibliographicViewConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '^JESUITS' }, { name: 'brief-locations-for-bibliographic-view', config: _briefLocationsForBibliographicView.briefLocationsForBibliographicViewConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '^JESUITS' }, { name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after', enableInView: '.*' }, { name: 'pay-my-fines', config: _payMyFines.payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after', enableInView: '.*' }, { name: 'feedback', config: _feedback.feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'language-selection', config: _ConfigLanguageSelection.LanguageSelectionConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'deprecated-vids', config: _deprecatedViews.DeprecatedViewsConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'new-search-button', config: _newSearchButton.newSearchButtonConfig, enabled: true, appendTo: 'prm-top-nav-bar-links-after', enableInView: '^(?!ECB)' }, { name: 'report-a-problem', config: _reportAProblem.reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '.*' }, { name: 'request-a-copy-head', config: _requestACopy.requestACopyConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '^Lirias' },
                  //{name: 'request-a-copy', config: requestACopyConfig, enabled: true, appendTo: 'prm-full-view-service-container-after', enableInView: '^Lirias'},
                  { name: 'request-a-copy-es-doc', config: _requestACopyOfEsDoc.requestACopyOfEsDocConfig, enabled: false, appendTo: 'prm-full-view-service-container-after', enableInView: '^VLP' }, { name: 'user-jwt', config: _exposeJwt.exposeJwtConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^VLP|^ECB' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'prm-disclaimer', config: _disclaimer.disclaimerConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'static-footer', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-explore-footer-after', enableInView: '.*' },
                  //{name: 'static-footer-account', config: staticFooterConfig, enabled: true, appendTo: 'prm-account-after', enableInView: '.*'},
                  { name: 'remove-alerts', config: _removeAlerts.removeAlertsConfig, enabled: false, appendTo: 'prm-add-query-to-saved-searches-after', enableInView: '.*' }, { name: 'remove-check-locations', config: _removeCheckLocations.removeCheckLocationsConfig, enabled: false, appendTo: 'prm-search-result-availability-line-after', enableInView: 'Lirias' }, { name: 'prm-dblink', config: _databaseLink.databaseLinkConfig, enabled: false, appendTo: null, enableInView: '.*' },

                  /* lbs-components used in html-templates of the package */
                  { name: 'auto-login-static-footer', config: _autoPromoteLogin.autoLoginCheckboxConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView: '^KULeuven|^UCLL' }, { name: 'promote-login', config: _autoPromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'prm-authentication-after', enableInView: '^KULeuven|^UCLL' }, { name: 'auto-login', config: _autoPromoteLogin.autoLoginConfig, enabled: true, appendTo: 'prm-authentication-after', enableInView: 'KULeuven_LUCA|KULeuven_ODISEE|KULeuven_TMOREK|KULeuven_TMOREM|KULeuven_UCLL' }, { name: 'ill-request-form-overview', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-overview-after', enableInView: '.*' }, { name: 'ill-request-form', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-after', enableInView: '^KULeuven|^VIVES' }, { name: 'announcement-feedback', config: _feedbackAnnouncement.feedbackAnnouncementConfig, enabled: false, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'override-getlink-recommendation', config: _recommendationItem.recommendationItemConfig, enabled: true, appendTo: 'prm-recomendation-item-after', enableInView: '.*' }, { name: 'announcement', config: _announcements.announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'pay-my-fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven' },
                  //  {name: 'remove-open-access', config: removeOpenAccessConfig, enabled: false, appendTo: 'prm-facet-after', enableInView: '.*'},
                  { name: 'search-also', config: _searchAlso.searchAlsoConfig, enabled: true, appendTo: 'prm-facet-after', enableInView: '^KULeuven|^VIVES|^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL' }, { name: 'search-also-body', config: _searchAlsoBody.searchAlsoBodyConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^KULeuven|^VIVES|^ODISEE|^FARO' }, { name: 'search-also-body-bib', config: _searchAlsoBodyBib.searchAlsoBodyBibConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^VIVES|^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL' }, { name: 'search-also-body-google', config: _searchAlsoBodyGoogle.searchAlsoBodyGoogleConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL' }, { name: 'search-also-body-worldcat', config: _searchAlsoBodyWorldcat.searchAlsoBodyWorldcatConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^KULeuven' }, { name: 'browzine', config: _browzine.browzineConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '^KULeuven|^ECB' }, { name: 'filter-facet-values', config: _filterFacetValues.filterFacetValuesConfig, enabled: false, appendTo: 'prm-facet-after', enableInView: '^JESUITS' }, { name: 'search-collections', config: _exploreSearchCollections.searchCollectionsConfig, enabled: true, appendTo: 'prm-collection-gallery-header-after', enableInView: '^KULeuven' }].filter(function (component) {
                        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
                  });
            }
      }]);

      return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/ConfigLanguageSelection":3,"./components/general/databaseLink":4,"./components/general/deprecatedViews":5,"./components/general/disclaimer":7,"./components/general/experiment":8,"./components/general/exposeJwt":9,"./components/general/removeAlerts":10,"./components/general/removeCheckLocations":11,"./components/general/searchTip":12,"./components/general/staticFooter":13,"./components/prmAutoPromoteLogin/autoPromoteLogin":14,"./components/prmBriefResultAfter/altmetric":15,"./components/prmBriefResultAfter/briefLocationsForBibliographicView":16,"./components/prmBriefResultAfter/sourceIcon":17,"./components/prmCollectionGalleryHeaderAfter/exploreSearchCollections":18,"./components/prmFacetAfter/filterFacetValues":19,"./components/prmFacetAfter/searchAlso":20,"./components/prmFacetExactAfter/searchAlsoBody":21,"./components/prmFacetExactAfter/searchAlsoBodyBib":22,"./components/prmFacetExactAfter/searchAlsoBodyGoogle":23,"./components/prmFacetExactAfter/searchAlsoBodyWorldcat":24,"./components/prmFinesOverviewAfter/payMyFines":25,"./components/prmFullViewAfter/altmetricsBadge":26,"./components/prmFullViewAfter/locationsForBibliographicView":27,"./components/prmLogoAfter/betaSwitch":28,"./components/prmLogoAfter/homeIcon":29,"./components/prmLogoAfter/languageDependentLogo":30,"./components/prmLogoAfter/newSearchButton":31,"./components/prmLogoAfter/viewLogo":32,"./components/prmMainMenuAfter/feedback":33,"./components/prmRecommendationItemAfter/recommendationItem":34,"./components/prmRequestsAfter/illRequestForm":35,"./components/prmSearchResultAvailabilityLineAfterController/browzine":36,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":37,"./components/prmServiceHeaderAfter/reportAProblem":38,"./components/prmServiceHeaderAfter/requestACopy":39,"./components/prmServiceHeaderAfter/requestACopyOfEsDoc":40,"./components/prmTopBarBefore/announcements":41,"./components/prmTopBarBefore/feedbackAnnouncement":42,"./components/prmTopBarBefore/finesMessage":44,"./utils":64}],3:[function(require,module,exports){
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchCollectionsHTML = '<a class="md-button md-primoExplore-theme md-ink-ripple" href="/primo-explore/search?search_scope=KULEUVEN_COLLECTIONS&vid=KULeuven&offset=0">\r\n  <span translate="lbs.nui.search.collections.button">Search Curated Collections</span></a>\r\n  <div style="position:absolute;bottom:0.5em;right:17%;color:white;font-weight:200;margin:5px 5px 0 5px;/*! background: rgba(red,0.1); */border: 1px solid #53738c;padding: 0px 3px 0 1px;background: #53738c;border-radius: 5px;">\r\n    <strong>We are currently improving the performance of our systems. Images may take somewhat longer to be displayed.</strong>\r\n  </div>\r\n<!--<a ng-if="!$ctrl.isGalleryLobby" class="md-button md-primoExplore-theme md-ink-ripple" href="/primo-explore/search?query=title,contains,{{$ctrl.getCollection()}}&search_scope=KULEUVEN_COLLECTIONS&sortby=rank&vid=KULeuven&offset=0" title="Search {{$ctrl.getCollection()}}">Search this collection</a>\r\n<!-- &facet=local4,include,Corble%20fencing%20collection$$IKUL -->\r\n';

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
  function SearchAlsoBodyController($location) {
    var _this = this;

    _classCallCheck(this, SearchAlsoBodyController);

    this.location = $location;
    var url = "";
    Primo.user.then(function (user) {
      var campus = '';
      campus = user.isOnCampus();
      if (!campus) {
        url = 'http://kuleuven.ezproxy.kuleuven.be/login?url=';
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

SearchAlsoBodyController.$inject = ['$location'];

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
                    unbindWatcher();
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

},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{}],33:[function(require,module,exports){
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

},{}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
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

},{}],38:[function(require,module,exports){
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

},{}],39:[function(require,module,exports){
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

},{}],40:[function(require,module,exports){
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

},{}],41:[function(require,module,exports){
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

},{}],42:[function(require,module,exports){
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

},{"./feedbackAnnouncementDialog":43}],43:[function(require,module,exports){
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

},{}],44:[function(require,module,exports){
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

},{}],45:[function(require,module,exports){
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

},{}],46:[function(require,module,exports){
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

},{}],47:[function(require,module,exports){
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

},{}],48:[function(require,module,exports){
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

},{}],49:[function(require,module,exports){
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

},{"../components/general/dialog":6}],50:[function(require,module,exports){
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
                        "url": "https://anet.be/record/uantwerpen/opacuantwerpen/c:lvd:<#recordid>/N"
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

},{}],51:[function(require,module,exports){
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

},{}],52:[function(require,module,exports){
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

},{}],53:[function(require,module,exports){
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

var app = angular.module('centralCustom', ['ngMaterial', 'vcRecaptcha', 'googleAnalytics'])
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

},{"./components":2,"./factories/altmetricsService":45,"./factories/apiCallInterceptor":46,"./factories/dbSearchHttpCallInterceptor":47,"./factories/feedService":48,"./factories/feedbackService":49,"./factories/filterLocationsService":50,"./factories/messageService":51,"./factories/windowEventListener":52,"./primo-explore-dom/js/primo":54,"./primo-explore-dom/js/primo/explore/helper":57,"./templates":63}],54:[function(require,module,exports){
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

},{"./primo/explore":55,"./primo/explore/helper":57,"./primo/facets":58,"./primo/records":59,"./primo/user":60,"./primo/view":61}],55:[function(require,module,exports){
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

},{"./explore/components":56,"./explore/helper":57}],56:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":62,"./helper":57}],57:[function(require,module,exports){
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

},{}],58:[function(require,module,exports){
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

},{"./explore/components":56,"./explore/helper":57}],59:[function(require,module,exports){
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

},{"./explore/components":56,"./explore/helper":57}],60:[function(require,module,exports){
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

},{"./explore/helper":57}],61:[function(require,module,exports){
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

},{"./explore/helper":57}],62:[function(require,module,exports){
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

},{}],63:[function(require,module,exports){
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

},{"./utils":64}],64:[function(require,module,exports){
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

},{}]},{},[53])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvb3MtYnJvd3NlcmlmeS9icm93c2VyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxDb25maWdMYW5ndWFnZVNlbGVjdGlvbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGF0YWJhc2VMaW5rLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxkZXByZWNhdGVkVmlld3MuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGRpYWxvZy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGlzY2xhaW1lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwZXJpbWVudC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwb3NlSnd0LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxyZW1vdmVBbGVydHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHJlbW92ZUNoZWNrTG9jYXRpb25zLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxzZWFyY2hUaXAuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHN0YXRpY0Zvb3Rlci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQXV0b1Byb21vdGVMb2dpblxcYXV0b1Byb21vdGVMb2dpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQnJpZWZSZXN1bHRBZnRlclxcYWx0bWV0cmljLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1CcmllZlJlc3VsdEFmdGVyXFxicmllZkxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1CcmllZlJlc3VsdEFmdGVyXFxzb3VyY2VJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Db2xsZWN0aW9uR2FsbGVyeUhlYWRlckFmdGVyXFxleHBsb3JlU2VhcmNoQ29sbGVjdGlvbnNcXGluZGV4LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GYWNldEFmdGVyXFxmaWx0ZXJGYWNldFZhbHVlcy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRBZnRlclxcc2VhcmNoQWxzby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keUJpYi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keUdvb2dsZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keVdvcmxkY2F0LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GaW5lc092ZXJ2aWV3QWZ0ZXJcXHBheU15RmluZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUZ1bGxWaWV3QWZ0ZXJcXGFsdG1ldHJpY3NCYWRnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRnVsbFZpZXdBZnRlclxcbG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXcuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcYmV0YVN3aXRjaC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxob21lSWNvbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxsYW5ndWFnZURlcGVuZGVudExvZ28uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcbmV3U2VhcmNoQnV0dG9uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXHZpZXdMb2dvLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1NYWluTWVudUFmdGVyXFxmZWVkYmFjay5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtUmVjb21tZW5kYXRpb25JdGVtQWZ0ZXJcXHJlY29tbWVuZGF0aW9uSXRlbS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtUmVxdWVzdHNBZnRlclxcaWxsUmVxdWVzdEZvcm0uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlYXJjaFJlc3VsdEF2YWlsYWJpbGl0eUxpbmVBZnRlckNvbnRyb2xsZXJcXGJyb3d6aW5lLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlclxccG54WG1sLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcG9ydEFQcm9ibGVtLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcXVlc3RBQ29weS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtU2VydmljZUhlYWRlckFmdGVyXFxyZXF1ZXN0QUNvcHlPZkVzRG9jLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGFubm91bmNlbWVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVRvcEJhckJlZm9yZVxcZmVlZGJhY2tBbm5vdW5jZW1lbnQuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVRvcEJhckJlZm9yZVxcZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2cuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVRvcEJhckJlZm9yZVxcZmluZXNNZXNzYWdlLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxmYWN0b3JpZXNcXGFsdG1ldHJpY3NTZXJ2aWNlLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxmYWN0b3JpZXNcXGFwaUNhbGxJbnRlcmNlcHRvci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxkYlNlYXJjaEh0dHBDYWxsSW50ZXJjZXB0b3IuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcZmVlZFNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcZmVlZGJhY2tTZXJ2aWNlLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxmYWN0b3JpZXNcXGZpbHRlckxvY2F0aW9uc1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcbWVzc2FnZVNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcd2luZG93RXZlbnRMaXN0ZW5lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcbWFpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcaGVscGVyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFxmYWNldHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHJlY29yZHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHVzZXIuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHZpZXcuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xcdmVuZG9yXFxjc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFx0ZW1wbGF0ZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O3FqQkM3Q0E7Ozs7Ozs7Ozs7QUFVQTs7QUEwQ0E7O0FBM0NBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0lBRXFCLGU7Ozs7Ozs7Z0NB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NEIsQ0FBNUI7QUFDbEQsT0FKRCxFQUlHLE1BSkgsRUFJVSxRQUpWLEVBSW1CLFFBSm5CLEVBSTRCLFdBSjVCLEVBSXdDLGlCQUFpQixNQUp6RDtBQUtIOztBQUVELFFBQU0sa0JBQWtCLFNBQVMsYUFBVCxDQUF1QixVQUF2QixDQUF4QjtBQUNBLG9CQUFnQixJQUFoQixHQUF1QixpQkFBdkI7O0FBRUEsUUFBTSxhQUFhLGtLQUFuQjs7QUFFQTtBQUNBLFFBQUk7QUFDRixzQkFBZ0IsV0FBaEIsQ0FBNEIsU0FBUyxjQUFULENBQXdCLFVBQXhCLENBQTVCO0FBQ0QsS0FGRCxDQUVFLE9BQU8sQ0FBUCxFQUFVO0FBQ1Ysc0JBQWdCLElBQWhCLEdBQXVCLFVBQXZCO0FBQ0Q7O0FBRUQsYUFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLFdBQS9CLENBQTJDLGVBQTNDO0FBQ047QUFDRCxDQXpCRDtBQTBCQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxLQUFsQyxDQUF3QyxrQkFBeEMsRUFBNEQ7QUFDM0QsV0FBUyxLQURrRDtBQUUzRCxVQUFRLEVBRm1EO0FBRzNELGdCQUFjO0FBSDZDLENBQTVEOztBQU1BO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0cy5lbmRpYW5uZXNzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ0xFJyB9O1xuXG5leHBvcnRzLmhvc3RuYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZVxuICAgIH1cbiAgICBlbHNlIHJldHVybiAnJztcbn07XG5cbmV4cG9ydHMubG9hZGF2ZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH07XG5cbmV4cG9ydHMudXB0aW1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gMCB9O1xuXG5leHBvcnRzLmZyZWVtZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG59O1xuXG5leHBvcnRzLnRvdGFsbWVtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xufTtcblxuZXhwb3J0cy5jcHVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfTtcblxuZXhwb3J0cy50eXBlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ0Jyb3dzZXInIH07XG5cbmV4cG9ydHMucmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5hcHBWZXJzaW9uO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLm5ldHdvcmtJbnRlcmZhY2VzXG49IGV4cG9ydHMuZ2V0TmV0d29ya0ludGVyZmFjZXNcbj0gZnVuY3Rpb24gKCkgeyByZXR1cm4ge30gfTtcblxuZXhwb3J0cy5hcmNoID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ2phdmFzY3JpcHQnIH07XG5cbmV4cG9ydHMucGxhdGZvcm0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnYnJvd3NlcicgfTtcblxuZXhwb3J0cy50bXBkaXIgPSBleHBvcnRzLnRtcERpciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJy90bXAnO1xufTtcblxuZXhwb3J0cy5FT0wgPSAnXFxuJztcbiIsIi8qXHJcbiAgRGVjbGFyZSB5b3VyIGNvbXBvbmVudHMgaGVyZS5cclxuXHJcbiAgUmV3cml0ZSB0aGlzIHdoZW4gaW1wb3J0cyBjYW4gYmUgZG9uZSBkeW5hbWljYWxseVxyXG4gIGh0dHA6Ly8yYWxpdHkuY29tLzIwMTcvMDEvaW1wb3J0LW9wZXJhdG9yLmh0bWxcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuaW1wb3J0ICcuL3V0aWxzJztcclxuLyogaW1wb3J0IHlvdXIgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24qL1xyXG5pbXBvcnQge2V4cGVyaW1lbnRDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2V4cGVyaW1lbnQnXHJcbmltcG9ydCB7aG9tZUljb25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvaG9tZUljb24nXHJcblxyXG5pbXBvcnQge25ld1NlYXJjaEJ1dHRvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9uZXdTZWFyY2hCdXR0b24nXHJcbmltcG9ydCB7bGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL2xhbmd1YWdlRGVwZW5kZW50TG9nbydcclxuaW1wb3J0IHt2aWV3TG9nb0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci92aWV3TG9nbydcclxuXHJcbmltcG9ydCB7c2VhcmNoQ29sbGVjdGlvbnNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Db2xsZWN0aW9uR2FsbGVyeUhlYWRlckFmdGVyL2V4cGxvcmVTZWFyY2hDb2xsZWN0aW9ucydcclxuXHJcbmltcG9ydCB7YmV0YVN3aXRjaENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9iZXRhU3dpdGNoJ1xyXG5pbXBvcnQge3NvdXJjZUljb25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1CcmllZlJlc3VsdEFmdGVyL3NvdXJjZUljb24nXHJcbmltcG9ydCB7YWx0bWV0cmljQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9hbHRtZXRyaWMnXHJcbmltcG9ydCB7YWx0bWV0cmljc0JhZGdlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRnVsbFZpZXdBZnRlci9hbHRtZXRyaWNzQmFkZ2UnXHJcblxyXG5pbXBvcnQge3BueFhtbENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyL3BueFhtbCdcclxuaW1wb3J0IHtwYXlNeUZpbmVzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmluZXNPdmVydmlld0FmdGVyL3BheU15RmluZXMnXHJcbmltcG9ydCB7ZmVlZGJhY2tDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1NYWluTWVudUFmdGVyL2ZlZWRiYWNrJ1xyXG5pbXBvcnQge3NlYXJjaFRpcENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvc2VhcmNoVGlwJ1xyXG5pbXBvcnQge2Rpc2NsYWltZXJDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2Rpc2NsYWltZXInXHJcblxyXG5pbXBvcnQge2V4cG9zZUp3dENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvZXhwb3NlSnd0J1xyXG5cclxuaW1wb3J0IHtMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvQ29uZmlnTGFuZ3VhZ2VTZWxlY3Rpb24nXHJcbmltcG9ydCB7RGVwcmVjYXRlZFZpZXdzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9kZXByZWNhdGVkVmlld3MnXHJcblxyXG5pbXBvcnQge3JlcG9ydEFQcm9ibGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VydmljZUhlYWRlckFmdGVyL3JlcG9ydEFQcm9ibGVtJ1xyXG5pbXBvcnQge3JlcXVlc3RBQ29weUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlcnZpY2VIZWFkZXJBZnRlci9yZXF1ZXN0QUNvcHknXHJcbmltcG9ydCB7cmVxdWVzdEFDb3B5T2ZFc0RvY0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlcnZpY2VIZWFkZXJBZnRlci9yZXF1ZXN0QUNvcHlPZkVzRG9jJ1xyXG5cclxuaW1wb3J0IHtmaW5lc01lc3NhZ2VDb25maWcgYXMgcGF5TXlGaW5lc01lc3NhZ2VDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmluZXNNZXNzYWdlJ1xyXG5pbXBvcnQge2Fubm91bmNlbWVudHNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvYW5ub3VuY2VtZW50cydcclxuaW1wb3J0IHthdXRvTG9naW5DaGVja2JveENvbmZpZyxhdXRvTG9naW5Db25maWcscHJvbW90ZUxvZ2luQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQXV0b1Byb21vdGVMb2dpbi9hdXRvUHJvbW90ZUxvZ2luJ1xyXG5cclxuaW1wb3J0IHtmZWVkYmFja0Fubm91bmNlbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9mZWVkYmFja0Fubm91bmNlbWVudCdcclxuaW1wb3J0IHtzdGF0aWNGb290ZXJDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3N0YXRpY0Zvb3RlcidcclxuaW1wb3J0IHtyZW1vdmVBbGVydHNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3JlbW92ZUFsZXJ0cydcclxuaW1wb3J0IHtyZW1vdmVDaGVja0xvY2F0aW9uc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvcmVtb3ZlQ2hlY2tMb2NhdGlvbnMnXHJcbmltcG9ydCB7aWxsUmVxdWVzdEZvcm1Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1SZXF1ZXN0c0FmdGVyL2lsbFJlcXVlc3RGb3JtJ1xyXG5pbXBvcnQge3JlY29tbWVuZGF0aW9uSXRlbUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVJlY29tbWVuZGF0aW9uSXRlbUFmdGVyL3JlY29tbWVuZGF0aW9uSXRlbSdcclxuXHJcbmltcG9ydCB7ZGF0YWJhc2VMaW5rQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9kYXRhYmFzZUxpbmsnXHJcbi8vaW1wb3J0IHtyZW1vdmVPcGVuQWNjZXNzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9yZW1vdmVPcGVuQWNjZXNzJ1xyXG5cclxuaW1wb3J0IHtzZWFyY2hBbHNvQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9zZWFyY2hBbHNvJ1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRFeGFjdEFmdGVyL3NlYXJjaEFsc29Cb2R5J1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5QmliQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRFeGFjdEFmdGVyL3NlYXJjaEFsc29Cb2R5QmliJ1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5R29vZ2xlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRFeGFjdEFmdGVyL3NlYXJjaEFsc29Cb2R5R29vZ2xlJ1xyXG5pbXBvcnQge3NlYXJjaEFsc29Cb2R5V29ybGRjYXRDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GYWNldEV4YWN0QWZ0ZXIvc2VhcmNoQWxzb0JvZHlXb3JsZGNhdCdcclxuaW1wb3J0IHticm93emluZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdEF2YWlsYWJpbGl0eUxpbmVBZnRlckNvbnRyb2xsZXIvYnJvd3ppbmUnXHJcbmltcG9ydCB7ZmlsdGVyRmFjZXRWYWx1ZXNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GYWNldEFmdGVyL2ZpbHRlckZhY2V0VmFsdWVzJ1xyXG5cclxuaW1wb3J0IHtsb2NhdGlvbnNGb3JCaWJsaW9ncmFwaGljVmlld0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZ1bGxWaWV3QWZ0ZXIvbG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXcnXHJcbmltcG9ydCB7YnJpZWZMb2NhdGlvbnNGb3JCaWJsaW9ncmFwaGljVmlld0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUJyaWVmUmVzdWx0QWZ0ZXIvYnJpZWZMb2NhdGlvbnNGb3JCaWJsaW9ncmFwaGljVmlldydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmdGVyQ29tcG9uZW50cyB7XHJcblxyXG4gIHN0YXRpYyBnZXQgYWxsKCkge1xyXG4gICAgLypcclxuICAgICAgbmFtZSA9IHRoZSBzdWIgZWxlbWVudCBpbiB0aGUgYWZ0ZXIgZWxlbWVudFxyXG4gICAgICBjb25maWcgPSB0aGUgaW1wb3J0ZWQgY29uZmlndXJhdGlvbiBvYmplY3RcclxuICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxyXG4gICAgICBhcHBlbmRUbyA9IFRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gdGhpcyBhZnRlciBjb21wb25lbnQuXHJcblxyXG4gICAgICBleC4ge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ31cclxuICAgICAgcmVzdWx0cyBpbjpcclxuICAgICAgICA8cHJtLWxvZ28tYWZ0ZXIgcGFyZW50Q3RybD0nJGN0cmwnPlxyXG4gICAgICAgICAgPGhvbWUtaWNvbiBwYXJlbnRDdHJsPSckY3RybCc+PC9ob21lLWljb24+XHJcbiAgICAgICAgPC9wcm0tbG9nby1hZnRlcj5cclxuICAgICovXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7bmFtZTogJ2xpYmlzLWV4cGVyaW1lbnQnLCBjb25maWc6IGV4cGVyaW1lbnRDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1tZXNzYWdlcy1hbmQtYmxvY2tzLW92ZXJ2aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcnfSxcclxuICAgICAge25hbWU6ICdiZXRhLXN3aXRjaCcsIGNvbmZpZzogYmV0YVN3aXRjaENvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG5cclxuICAgICAge25hbWU6ICdsYW5ndWFnZS1kZXBlbmRlbnQtbG9nbycsIGNvbmZpZzogbGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuXHJcbiAgICAgIHtuYW1lOiAndmlldy1sb2dvJywgY29uZmlnOiB2aWV3TG9nb0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3NvdXJjZS1pY29uJywgY29uZmlnOiBzb3VyY2VJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hTGlyaWFzKSd9LFxyXG4gICAgICB7bmFtZTogJ2FsdG1ldHJpYycsIGNvbmZpZzogYWx0bWV0cmljQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeTGlyaWFzfF5LVUxldXZlbnxeVkRJQ3xeVUNMTHxeVE1PUkVBTXxeVE1PUkVLfF5TRVJWfF5OQkInfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnYWx0bWV0cmljcy1iYWRnZScsIGNvbmZpZzogYWx0bWV0cmljc0JhZGdlQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mdWxsLXZpZXctYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeTGlyaWFzfF5LVUxldXZlbnxeVkRJQ3xeVUNMTHxeVE1PUkVBTXxeVE1PUkVLfF5TRVJWfF5OQkInfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnbG9jYXRpb25zLWZvci1iaWJsaW9ncmFwaGljLXZpZXcnLCBjb25maWc6IGxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mdWxsLXZpZXctYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeSkVTVUlUUyd9LFxyXG4gICAgICB7bmFtZTogJ2JyaWVmLWxvY2F0aW9ucy1mb3ItYmlibGlvZ3JhcGhpYy12aWV3JywgY29uZmlnOiBicmllZkxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1zZWFyY2gtcmVzdWx0LWF2YWlsYWJpbGl0eS1saW5lLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkpFU1VJVFMnfSxcclxuXHJcbiAgICAgIHtuYW1lOiAncG54LXhtbCcsIGNvbmZpZzogcG54WG1sQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtY29udGFpbmVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdwYXktbXktZmluZXMnLCBjb25maWc6IHBheU15RmluZXNDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZpbmVzLW92ZXJ2aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdmZWVkYmFjaycsIGNvbmZpZzogZmVlZGJhY2tDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcbiAgICAgIHtuYW1lOiAnbGFuZ3VhZ2Utc2VsZWN0aW9uJywgY29uZmlnOiBMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbWFpbi1tZW51LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuICAgICAge25hbWU6ICdkZXByZWNhdGVkLXZpZHMnLCBjb25maWc6IERlcHJlY2F0ZWRWaWV3c0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbWFpbi1tZW51LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuICAgICAgXHJcbiAgICAgIHtuYW1lOiAnbmV3LXNlYXJjaC1idXR0b24nLCBjb25maWc6IG5ld1NlYXJjaEJ1dHRvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLW5hdi1iYXItbGlua3MtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG4gICAgICB7bmFtZTogJ3JlcG9ydC1hLXByb2JsZW0nLCBjb25maWc6IHJlcG9ydEFQcm9ibGVtQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1zZXJ2aWNlLWhlYWRlci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIFxyXG4gICAgICB7bmFtZTogJ3JlcXVlc3QtYS1jb3B5LWhlYWQnLCBjb25maWc6IHJlcXVlc3RBQ29weUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VydmljZS1oZWFkZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeTGlyaWFzJ30sXHJcbiAgICAgIC8ve25hbWU6ICdyZXF1ZXN0LWEtY29weScsIGNvbmZpZzogcmVxdWVzdEFDb3B5Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeTGlyaWFzJ30sXHJcbiAgICAgIHtuYW1lOiAncmVxdWVzdC1hLWNvcHktZXMtZG9jJywgY29uZmlnOiByZXF1ZXN0QUNvcHlPZkVzRG9jQ29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXlZMUCd9LFxyXG5cclxuICAgICAge25hbWU6ICd1c2VyLWp3dCcsIGNvbmZpZzogZXhwb3NlSnd0Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1tYWluLW1lbnUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeVkxQfF5FQ0InfSxcclxuXHJcbiAgICAgIHtuYW1lOiAncHJtLXNlYXJjaHRpcHMnLCBjb25maWc6IHNlYXJjaFRpcENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGwsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncHJtLWRpc2NsYWltZXInLCBjb25maWc6IGRpc2NsYWltZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3N0YXRpYy1mb290ZXInLCBjb25maWc6IHN0YXRpY0Zvb3RlckNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZXhwbG9yZS1mb290ZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICAvL3tuYW1lOiAnc3RhdGljLWZvb3Rlci1hY2NvdW50JywgY29uZmlnOiBzdGF0aWNGb290ZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWFjY291bnQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3JlbW92ZS1hbGVydHMnLCBjb25maWc6IHJlbW92ZUFsZXJ0c0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLWFkZC1xdWVyeS10by1zYXZlZC1zZWFyY2hlcy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncmVtb3ZlLWNoZWNrLWxvY2F0aW9ucycsIGNvbmZpZzogcmVtb3ZlQ2hlY2tMb2NhdGlvbnNDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1zZWFyY2gtcmVzdWx0LWF2YWlsYWJpbGl0eS1saW5lLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnTGlyaWFzJ30sXHJcbiAgICAgIHtuYW1lOiAncHJtLWRibGluaycsIGNvbmZpZzogZGF0YWJhc2VMaW5rQ29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86IG51bGwsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICAvKiBsYnMtY29tcG9uZW50cyB1c2VkIGluIGh0bWwtdGVtcGxhdGVzIG9mIHRoZSBwYWNrYWdlICovXHJcbiAgICAgIHtuYW1lOiAnYXV0by1sb2dpbi1zdGF0aWMtZm9vdGVyJywgY29uZmlnOiBhdXRvTG9naW5DaGVja2JveENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdsYnMtcHJvbW90ZS1sb2dpbicsIGVuYWJsZUluVmlldzogICdeS1VMZXV2ZW58XlVDTEwnfSxcclxuICAgICAge25hbWU6ICdwcm9tb3RlLWxvZ2luJywgY29uZmlnOiBwcm9tb3RlTG9naW5Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWF1dGhlbnRpY2F0aW9uLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAgJ15LVUxldXZlbnxeVUNMTCd9LFxyXG4gICAgICB7bmFtZTogJ2F1dG8tbG9naW4nLCBjb25maWc6IGF1dG9Mb2dpbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYXV0aGVudGljYXRpb24tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICAnS1VMZXV2ZW5fTFVDQXxLVUxldXZlbl9PRElTRUV8S1VMZXV2ZW5fVE1PUkVLfEtVTGV1dmVuX1RNT1JFTXxLVUxldXZlbl9VQ0xMJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2lsbC1yZXF1ZXN0LWZvcm0tb3ZlcnZpZXcnLCBjb25maWc6IGlsbFJlcXVlc3RGb3JtQ29uZmlnLCBlbmFibGVkOmZhbHNlLCBhcHBlbmRUbzogJ3BybS1yZXF1ZXN0cy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnaWxsLXJlcXVlc3QtZm9ybScsIGNvbmZpZzogaWxsUmVxdWVzdEZvcm1Db25maWcsIGVuYWJsZWQ6ZmFsc2UsIGFwcGVuZFRvOiAncHJtLXJlcXVlc3RzLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVufF5WSVZFUyd9LFxyXG5cclxuICAgICAge25hbWU6ICdhbm5vdW5jZW1lbnQtZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQW5ub3VuY2VtZW50Q29uZmlnLCBlbmFibGVkOmZhbHNlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ292ZXJyaWRlLWdldGxpbmstcmVjb21tZW5kYXRpb24nLCBjb25maWc6IHJlY29tbWVuZGF0aW9uSXRlbUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tcmVjb21lbmRhdGlvbi1pdGVtLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnYW5ub3VuY2VtZW50JywgY29uZmlnOiBhbm5vdW5jZW1lbnRzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzLW1lc3NhZ2UnLCBjb25maWc6IHBheU15RmluZXNNZXNzYWdlQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbid9LFxyXG4gICAgIC8vICB7bmFtZTogJ3JlbW92ZS1vcGVuLWFjY2VzcycsIGNvbmZpZzogcmVtb3ZlT3BlbkFjY2Vzc0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1hbHNvJywgY29uZmlnOiBzZWFyY2hBbHNvQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbnxeVklWRVN8Xk9ESVNFRXxeRkFST3xeVE1PUkVLfF5UTU9SRU1BfF5VQ0xMJ30sXHJcbiAgICAge25hbWU6ICdzZWFyY2gtYWxzby1ib2R5JywgY29uZmlnOiBzZWFyY2hBbHNvQm9keUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZmFjZXQtZXhhY3QtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW58XlZJVkVTfF5PRElTRUV8XkZBUk8nfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1hbHNvLWJvZHktYmliJywgY29uZmlnOiBzZWFyY2hBbHNvQm9keUJpYkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZmFjZXQtZXhhY3QtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeVklWRVN8Xk9ESVNFRXxeRkFST3xeVE1PUkVLfF5UTU9SRU1BfF5VQ0xMJ30sXHJcbiAgICAge25hbWU6ICdzZWFyY2gtYWxzby1ib2R5LWdvb2dsZScsIGNvbmZpZzogc2VhcmNoQWxzb0JvZHlHb29nbGVDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWV4YWN0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXk9ESVNFRXxeRkFST3xeVE1PUkVLfF5UTU9SRU1BfF5VQ0xMJ30sXHJcbiAgICAge25hbWU6ICdzZWFyY2gtYWxzby1ib2R5LXdvcmxkY2F0JywgY29uZmlnOiBzZWFyY2hBbHNvQm9keVdvcmxkY2F0Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbid9LFxyXG5cclxuICAgICB7bmFtZTogJ2Jyb3d6aW5lJywgY29uZmlnOiBicm93emluZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VhcmNoLXJlc3VsdC1hdmFpbGFiaWxpdHktbGluZS1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbnxeRUNCJ30sXHJcbiAgICAgXHJcbiAgICAge25hbWU6ICdmaWx0ZXItZmFjZXQtdmFsdWVzJywgY29uZmlnOiBmaWx0ZXJGYWNldFZhbHVlc0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkpFU1VJVFMnfSxcclxuXHJcbiAgICAge25hbWU6ICdzZWFyY2gtY29sbGVjdGlvbnMnLCBjb25maWc6IHNlYXJjaENvbGxlY3Rpb25zQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1jb2xsZWN0aW9uLWdhbGxlcnktaGVhZGVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVuJ31cclxuICAgIF0uZmlsdGVyKCAoY29tcG9uZW50KSA9PiAoIGNvbXBvbmVudC5lbmFibGVkICYmIG5ldyBSZWdFeHAoY29tcG9uZW50LmVuYWJsZUluVmlldykudGVzdCh3aW5kb3cuYXBwQ29uZmlnLnZpZCkgKSApO1xyXG4gIH1cclxufSIsIlxyXG5jbGFzcyBMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB2YXIgb25seXNob3dfZnJfRlJfaW5fdmlkID0gWydBQ1YnLCAnQlBCJywgJ0ZBUk8nLCAnRk9ERklOJywgJ0tCQycsICdSQklOUycsICdSTUNBJywgJ0tNS0cnLCAnTElCQVInLCAnTkJCJywgJ09GTycsICdWRElDJ107XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByaW1vLWV4cGxvcmUnKSk7XHJcbiAgICAgICAgaWYgKCEgb25seXNob3dfZnJfRlJfaW5fdmlkLmluY2x1ZGVzKCB3aW5kb3cuYXBwQ29uZmlnLnZpZCAgKSApIHtcclxuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kKCBcIjxzdHlsZT5wcm0tbGFuZ3VhZ2Utc2VsZWN0aW9uIG1kLWxpc3QtaXRlbVt2YWx1ZT0nZnJfRlInXXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50O308L3N0eWxlPlwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWdDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddXHJcblxyXG5leHBvcnQgbGV0IExhbmd1YWdlU2VsZWN0aW9uQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ0NvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbn1cclxuIiwiaW1wb3J0IGRhdGFiYXNlTGlua0hUTUwgZnJvbSAnLi9kYXRhYmFzZUxpbmsuaHRtbCdcclxuXHJcbmNsYXNzIERhdGFiYXNlTGlua0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZykge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgJHNjb3BlLnRpdGxlID0gJ2RhdGFiYXNlcyc7XHJcbiAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSAnc2VhcmNoIGRhdGFiYXNlcyc7XHJcbiAgICAkc2NvcGUuZGF0YWJhc2VMaW5rID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLWRhdGFiYXNlXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybClcclxuXHJcbiAgICAgICAgdmFyIGRhdGFiYXNlRmFjZXQgPSB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwicnR5cGVcIixcclxuICAgICAgICAgICAgXCJ0eXBlXCI6XCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjpcImRhdGFiYXNlc1wiLFxyXG4gICAgICAgICAgICBcImRpc3BsYXlWYWx1ZVwiOlwiZGF0YWJhc2VzXCIsXHJcbiAgICAgICAgICAgIFwiZGlzcGxheWVkVHlwZVwiOlwiZXhhY3RcIixcclxuICAgICAgICAgICAgXCJsYWJlbFwiOlwiRGF0YWJhbmtlblwiLFxyXG4gICAgICAgICAgICBcImlzTXVsdGlGYWNldFwiOmZhbHNlLFxyXG4gICAgICAgICAgICBcInRvb2x0aXBcIjpcIlZlcndpamRlciBUeXBlIGJyb24gRGF0YWJhbmtlblwiLFxyXG4gICAgICAgICAgICBcIiQkaGFzaEtleVwiOlwib2JqZWN0OjI4MDhcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyggJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU3RhdGVTZXJ2aWNlLnNlYXJjaE9iamVjdCApXHJcblxyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL21laG1ldGMvcHJpbW8tZXhwbG9yZS1jb2xsZWN0aW9uLXZpZXdlci9ibG9iL21hc3Rlci9qcy9uZy1wcmltby5qc1xyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFNlcnZpY2Uuc2V0U29ydEJ5KCd0aXRsZScpO1xyXG4gICAgICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFNlcnZpY2UuZmFjZXRTZXJ2aWNlLmFkZFN0aWNreUZhY2V0KGRhdGFiYXNlRmFjZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTdGF0ZVNlcnZpY2Uuc2VhcmNoT2JqZWN0IClcclxuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLnNlYXJjaCgpO1xyXG4vKlxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJzdGlja3lGYWNldHNcIixcclxuICAgICAgICdbe1wibmFtZVwiOlwicnR5cGVcIixcInR5cGVcIjpcImluY2x1ZGVcIixcInZhbHVlXCI6XCJkYXRhYmFzZXNcIixcImRpc3BsYXlWYWx1ZVwiOlwiZGF0YWJhc2VzXCIsXCJkaXNwbGF5ZWRUeXBlXCI6XCJleGFjdFwiLFwibGFiZWxcIjpcIkRhdGFiYW5rZW5cIixcImlzTXVsdGlGYWNldFwiOmZhbHNlLFwidG9vbHRpcFwiOlwiVmVyd2lqZGVyIFR5cGUgYnJvbiBEYXRhYmFua2VuXCIsXCIkJGhhc2hLZXlcIjpcIm9iamVjdDoyODA4XCIsXCJwZXJzaXN0ZW50XCI6dHJ1ZSxcIm9wZXJhdGlvblwiOlwiYWRkXCJ9XScpO1xyXG4gICAgICAgKi9cclxuICAgICAvLyAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMy9wcmltby1leHBsb3JlL3NlYXJjaD9xdWVyeT1hbnksY29udGFpbnMsZGF0YWJhc2VzJnRhYj1hbGxfY29udGVudF90YWImc2VhcmNoX3Njb3BlPUFMTF9DT05URU5UJlwiXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5EYXRhYmFzZUxpbmtDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBkYXRhYmFzZUxpbmtDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRGF0YWJhc2VMaW5rQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogZGF0YWJhc2VMaW5rSFRNTFxyXG59XHJcbiIsIlxyXG5jbGFzcyBEZXByZWNhdGVkVmlld3NDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIGRlcHJlY2F0ZWRfdmlkcyA9IFsnVUNMTF9MSU1CVVJHJywnVUNMTF9MRVVWRU4nLCdLVUxldXZlbl9VWCddO1xyXG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmltby1leHBsb3JlJykpO1xyXG4gICAgICAgIGlmICggZGVwcmVjYXRlZF92aWRzLmluY2x1ZGVzKCB3aW5kb3cuYXBwQ29uZmlnLnZpZCAgKSApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cgKFwiVGhpcyBpcyBhbiBvbGQgdmlldyAhISEhXCIpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlICggXCJodHRwczovL1wiK2RvY3VtZW50LmxvY2F0aW9uLmhvc3QgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkRlcHJlY2F0ZWRWaWV3c0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ11cclxuXHJcbmV4cG9ydCBsZXQgRGVwcmVjYXRlZFZpZXdzQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBEZXByZWNhdGVkVmlld3NDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJGh0dHAsICR0cmFuc2xhdGUsIGZlZWRiYWNrU2VydmljZVVSTCwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLm1kRGlhbG9nID0gJG1kRGlhbG9nO1xyXG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XHJcbiAgICB0aGlzLmh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMID0gZmVlZGJhY2tTZXJ2aWNlVVJMO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG5cclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAkc2NvcGUuY2FuY2VsRmVlZGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IHRoaXMuc2VuZEZlZWRiYWNrO1xyXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IChhbnN3ZXIpID0+IHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgc2VsZi52aWV3ID0gdmlldztcclxuXHJcbiAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgc3ViamVjdDogJHNjb3BlLmZlZWRiYWNrLnN1YmplY3QsXHJcbiAgICAgICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxyXG4gICAgICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxyXG4gICAgICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICAgICAgaXA6IHNlbGYudmlldy5pcC5hZGRyZXNzLFxyXG4gICAgICAgICAgICB0eXBlOiAnZmVlZGJhY2snLFxyXG4gICAgICAgICAgICBmZWVkYmFjazogJHNjb3BlLmZlZWRiYWNrLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGVtYWlsOiAkc2NvcGUuZmVlZGJhY2sucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmICgkc2NvcGUuZmVlZGJhY2sucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5mZWVkYmFjay5tZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2VsZi5tZERpYWxvZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmh0dHAoe1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIHVybDogdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwsXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xyXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnO1xyXG4gICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nKTtcclxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLic7XHJcbiAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcbiAgICAgICAgJHNjb3BlLmZlZWRiYWNrID0ge1xyXG4gICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICBzdWJqZWN0OiAnZmVlZGJhY2snXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkRpYWxvZ0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckaHR0cCcsICckdHJhbnNsYXRlJywgJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdNZXNzYWdlU2VydmljZSddO1xyXG4iLCJpbXBvcnQgZGlzY2xhaW1lckRpYWxvZ0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvZGlzY2xhaW1lckRpYWxvZy5odG1sJ1xyXG5pbXBvcnQgY29va2llUG9saWN5RGlhbG9nSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X2VuX1VTLmh0bWwnXHJcbmltcG9ydCBkaXNjbGFpbWVyRGlhbG9nX2ZyRlJfSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X2VuX1VTLmh0bWwnXHJcbmltcG9ydCBkaXNjbGFpbWVyRGlhbG9nX25sQkVfSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X25sX0JFLmh0bWwnXHJcbmltcG9ydCBkaXNjbGFpbWVyRGlhbG9nX2VuVVNfSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X2VuX1VTLmh0bWwnXHJcblxyXG5pbXBvcnQgZGlzY2xhaW1lckxpbmtIVE1MIGZyb20gJ2Rpc2NsYWltZXIuaHRtbCdcclxuXHJcbmNsYXNzIGRpc2NsYWltZXJDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG5cclxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICdubF9CRSc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdDb29raWViZWxlaWQnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJDb29raWViZWxlaWRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2VuX1VTJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ0Nvb2tpZSBQb2xpY3knLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJDb29raWUgUG9saWN5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgICdmcl9GUic6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdDb29raWUgUG9saWN5JyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQ29va2llIFBvbGljeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuLyogVG9kbyBSZWZhY3RvcnkgZGlzY2xhaW1lckRpYWxvZyAvIGNvb2tpZVBvbGljeSA/Pz8gKi9cclxuLy8gICAgbGV0IGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nSFRNTDsgXHJcbiAgICAgIGxldCBkaXNjbGFpbWVyRGlhbG9nID0gY29va2llUG9saWN5RGlhbG9nSFRNTDtcclxuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdmcl9GUic6XHJcbiAgICAgICAgZGlzY2xhaW1lckRpYWxvZyA9IGRpc2NsYWltZXJEaWFsb2dfZnJGUl9IVE1MO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmxfQkUnOlxyXG4gICAgICAgIGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nX25sQkVfSFRNTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZGlzY2xhaW1lckRpYWxvZyA9IGRpc2NsYWltZXJEaWFsb2dfZW5VU19IVE1MO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2NvcGUudGl0bGUgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZSddO1xyXG4gICAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZV9sYWJlbCddO1xyXG5cclxuICAgICAgJHNjb3BlLnNob3dEaXNjbGFpbWVyRGlhbG9nID0gZnVuY3Rpb24oJGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IGRpc2NsYWltZXJEaWFsb2csXHJcbiAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgaXRlbXM6ICRzY29wZS5pdGVtc1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXJcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gRGlhbG9nQ29udHJvbGxlcigkc2NvcGUsICRtZERpYWxvZywgaXRlbXMpIHtcclxuICAgICAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICAkc2NvcGUuY2xvc2VEaWFsb2cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmRpc2NsYWltZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBkaXNjbGFpbWVyQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IGRpc2NsYWltZXJDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBkaXNjbGFpbWVyTGlua0hUTUxcclxufSIsIi8qIGNvbXBvbmVudCB0byBkbyBhbGwgeW91ciBleHBlcmltZW50YWwgc3R1ZmYgKi9cclxuLyogW2VufGRpc11hYmxlIGluIGNvbXBvbmVudHMqL1xyXG5cclxuY2xhc3MgRXhwZXJpbWVudENvbnRyb2xsZXIge1xyXG4gXHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwkdGVtcGxhdGVDYWNoZSwgJGNvbXBpbGUsJGluamVjdG9yLCRyb290U2NvcGUsJHRyYW5zbGF0ZSwgJHdpbmRvdykge1xyXG4gICAgY29uc29sZS5sb2coJ0V4cGVyaW1lbnQ6Jyk7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlID0gJHRlbXBsYXRlQ2FjaGU7XHJcbiAgICB0aGlzLiRjb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnJzsgXHJcblxyXG4gICAgY29uc29sZS5sb2coc2VsZilcclxuICAgIGNvbnNvbGUubG9nKCdyb290U2NvcGU6JylcclxuICAgIGNvbnNvbGUubG9nKCRyb290U2NvcGUpXHJcbiAgICBjb25zb2xlLmxvZygndGVtcGxhdGVDYWNoZScpXHJcbiAgICBjb25zb2xlLmxvZygkdGVtcGxhdGVDYWNoZSkgICBcclxuICAgIHZhciB0ZW1wbGF0ZSA9ICR0ZW1wbGF0ZUNhY2hlLmdldCgnY29tcG9uZW50cy9hY2NvdW50L292ZXJ2aWV3L3JlcXVlc3RzT3ZlcnZpZXcvcmVxdWVzdHMtb3ZlcnZpZXcuaHRtbCcpO1xyXG4gICAgLy8gdmFyIHRlbXBsYXRlID0gdGVtcGxhdGUgKyBcIjxIMSBpZD0nb210ZWxhY2h0ZW4nPkxBTEFMQTxpbGwtcmVxdWVzdC1mb3JtLW92ZXJ2aWV3PjwvaWxsLXJlcXVlc3QtZm9ybS1vdmVydmlldz48L0gxPlwiO1xyXG4gICAgdmFyIHRlbXBsYXRlID0gdGVtcGxhdGUgKyBcIjxIMSBpZD0nb210ZWxhY2h0ZW4nPkxBTEFMQTwvSDE+XCI7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnLCB0ZW1wbGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZygkdGVtcGxhdGVDYWNoZS5nZXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnKSlcclxufTtcclxuXHJcbiAgdG9JbGxSZXF1ZXN0VXJsKCkge1xyXG4gICAgICB2YXIgaW5zdGl0dXRpb25Db2RlID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbi5pbnN0aXR1dGlvbkNvZGU7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ2luc3RpdHV0aW9uQ29kZTonICsgaW5zdGl0dXRpb25Db2RlKVxyXG4gICAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnaHR0cHM6Ly9sZXV2ZW4tcHJpbW8uaG9zdGVkLmV4bGlicmlzZ3JvdXAuY29tL3Bkcz9mdW5jPXNzbyZ1cmw9aHR0cDovL2V1LmFsbWEuZXhsaWJyaXNncm91cC5jb20vdmlldy91cmVzb2x2ZXIvJysgaW5zdGl0dXRpb25Db2RlICsnL29wZW51cmw/c3ZjX2RhdD1nZXRpdCZzdmMucHJvZmlsZT1nZXRpdCZkaXJlY3RSZXNvdXJjZVNoYXJpbmdSZXF1ZXN0PXRydWUmbmV3VUk9dHJ1ZSdcclxuICAgICAgdGhpcy53aW5kb3cub3Blbih0aGlzLmlsbFJlcXVlc3RVcmwsICdfZnJlZUlsbCcpO1xyXG4gIH07XHJcbiAgICBcclxuICAkb25Jbml0KCkgeyAgXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nICgnbmV3RWxlbWVudDonKVxyXG4gIC8vICBjb25zb2xlLmxvZyAoYW5ndWxhci5lbGVtZW50KCAnI29tdGVsYWNodGVuJykubGVuZ3RoKVxyXG4gICAvLyBpZiAoIGFuZ3VsYXIuZWxlbWVudCggJ0gxJykubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nICgnXFwndCBJcyBuaSBvbSB0ZSBsYWNodGVuJylcclxuICAgICAgIHZhciBlbGVtZW50TmFtZSA9ICdwcm0tcmVxdWVzdHMtb3ZlcnZpZXcnXHJcbiAgICAgICAvL2xldCBlbGVtZW50ID0gJGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnROYW1lKSk7XHJcbiAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICBsZXQgZWxlbWVudFNjb3BlID0gZWxlbWVudC5zY29wZSgpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyAoZWxlbWVudFNjb3BlKVxyXG4gICAgICAgICB0aGlzLiRjb21waWxlKGVsZW1lbnQpKGVsZW1lbnRTY29wZSk7XHJcbiAgICAgICAgIC8vZWxlbWVudFNjb3BlLiRhcHBseSgpXHJcbiAgICAgICB9ICAgICBcclxuICAvLyAgIH1cclxuICAgIH1cclxufVxyXG5cclxuRXhwZXJpbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgICckdGVtcGxhdGVDYWNoZScsICckY29tcGlsZScsJyRpbmplY3RvcicsJyRyb290U2NvcGUnLCckdHJhbnNsYXRlJywgJyR3aW5kb3cnXVxyXG5cclxuZXhwb3J0IGxldCBleHBlcmltZW50Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEV4cGVyaW1lbnRDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImNsYXNzIGV4cG9zZUp3dENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoV2luZG93RXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLldpbmRvd0V2ZW50TGlzdGVuZXIgPSBXaW5kb3dFdmVudExpc3RlbmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvc2VKd3RDb250cm9sbGVyLiRpbmplY3QgPSBbJ1dpbmRvd0V2ZW50TGlzdGVuZXInXTtcclxuXHJcblxyXG5leHBvcnQgbGV0IGV4cG9zZUp3dENvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogZXhwb3NlSnd0Q29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnJ1xyXG59IiwiXHJcbmNsYXNzIFJlbW92ZUFsZXJ0c0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgICR0cmFuc2xhdGUsICRlbGVtZW50LCAkdGVtcGxhdGVDYWNoZSkge1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSBcImVuX1VTXCJcclxuICAgICAgICBsb2NhbGUgPSBzY29wZS4kcm9vdC4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvc2F2ZWRRdWVyaWVzL2FkZEFsZXJ0VG9hc3QvYWRkLWFsZXJ0LXRvYXN0Lmh0bWwnLGBcclxuICAgICAgICA8bWQtdG9hc3QgbmctY2xhc3M9XCJ7XFwnbW9iaWxlLWRlZmluZVxcJzokY3RybC5kZXRlY3RNb2JpbGUoKSxcXCdsYXlvdXQtY29sdW1uXFwnOiRjdHJsLmRldGVjdE1vYmlsZSgpfVwiIGNsYXNzPVwibWQtdG9hc3QtY29udGVudFwiPlxyXG4gICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJtZC10b2FzdC1jb250ZW50XCIgbmctY2xhc3M9XCJ7XFwnZW5kLWNvbnRlbnRcXCc6ISRjdHJsLmRldGVjdE1vYmlsZSgpfVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWQtdG9hc3QtdGV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBuZy1pZj1cIiEkY3RybC5hZGRNb2RlXCIgdHJhbnNsYXRlPVwibnVpLmZhdm9yaXRlcy5zZWFyY2guYWxlcnQubWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gbmctaWY9XCIkY3RybC5hZGRNb2RlXCIgdHJhbnNsYXRlPVwibnVpLnNhdmVzZWFyY2gubWVzc2FnZS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHN0cm9uZyBuZy1pZj1cIiEkY3RybC5hZGRNb2RlXCI+e3skY3RybC5lbWFpbH19PC9zdHJvbmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCIgY2xhc3M9XCJtZC10b2FzdC1jb250ZW50XCIgbmctY2xhc3M9XCJ7XFwnc3RhcnQtY29udGVudFxcJzohJGN0cmwuZGV0ZWN0TW9iaWxlKCl9XCI+XHJcbiAgICAgICAgPG1kLWJ1dHRvbiBuZy1jbGljaz1cIiRjdHJsLm9uRGlzbWlzcygpXCIgYXJpYS1sYWJlbD1cInt7OjooXFwnbnVpLm1lc3NhZ2UuZGlzbWlzc1xcJyB8IHRyYW5zbGF0ZSl9fSBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZy1zY29wZVwiIHRyYW5zbGF0ZT1cIm51aS5tZXNzYWdlLmRpc21pc3NcIj48L3NwYW4+XHJcbiAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9tZC10b2FzdD5cclxuPHBybS1hZGQtYWxlcnQtdG9hc3QtYWZ0ZXIgcGFyZW50LWN0cmw9XCIkY3RybFwiPjwvcHJtLWFkZC1hbGVydC10b2FzdC1hZnRlcj5cclxuICAgICAgICBgKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVtb3ZlQWxlcnRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJHRyYW5zbGF0ZScsICckZWxlbWVudCcsICckdGVtcGxhdGVDYWNoZScgXVxyXG5cclxuZXhwb3J0IGxldCByZW1vdmVBbGVydHNDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IFJlbW92ZUFsZXJ0c0NvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJzxzdHlsZT5tZC10ZW1wbGF0ZSBwcm0tYWRkLWFsZXJ0LXRvYXN0IG1kLXRvYXN0ICpbYXJpYS1sYWJlbD1cInt7XFwnbnVpLmFyaWEuc2F2ZWRRdWVyaWVzTGlzdC5hbGVydFxcJyB8IHRyYW5zbGF0ZX19XCJdIHsgIGRpc3BsYXk6IG5vbmU7IH08L3N0eWxlPidcclxufVxyXG4iLCJjbGFzcyBSZW1vdmVDaGVja0xvY2F0aW9uc0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJGVsZW1lbnQsICR0ZW1wbGF0ZUNhY2hlKSB7XHJcbiAgICAgICAgdmFyIGRpc3BsYXllZEF2YWlsYWJpbGl0eSA9ICRzY29wZS4kY3RybC5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZGlzcGxheWVkQXZhaWxhYmlsaXR5O1xyXG4gICAgICAgIGlmICggZGlzcGxheWVkQXZhaWxhYmlsaXR5LmluZGV4T2YoXCJmdWxsdGV4dF91bmtub3duXCIpID4gLTEgfHwgZGlzcGxheWVkQXZhaWxhYmlsaXR5LmluZGV4T2YoXCJtYXlfYmVfcmVzdHJpY3RlZFwiKSA+IC0xICkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyAoICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5kZWxpdmVyeSApXHJcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUuJGN0cmwucGFyZW50Q3RybC5wYXJlbnRDdHJsLiRlbGVtZW50LCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCBlbCApXHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubG9jYWxOYW1lID09ICdwcm0tc2VhcmNoLXJlc3VsdC1hdmFpbGFiaWxpdHktbGluZScgKXtcclxuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblJlbW92ZUNoZWNrTG9jYXRpb25zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJGVsZW1lbnQnLCAnJHRlbXBsYXRlQ2FjaGUnIF1cclxuXHJcbmV4cG9ydCBsZXQgcmVtb3ZlQ2hlY2tMb2NhdGlvbnNDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgICBjb250cm9sbGVyOiBSZW1vdmVDaGVja0xvY2F0aW9uc0NvbnRyb2xsZXJcclxufSIsImltcG9ydCBzZWFyY2hUaXBIVE1MIGZyb20gJy4vc2VhcmNoVGlwLmh0bWwnXHJcbmltcG9ydCB0aXBfZW5VU19IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2VuVVMuaHRtbCdcclxuaW1wb3J0IHRpcF9mckZSX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvZnJGUi5odG1sJ1xyXG5pbXBvcnQgdGlwX25sQkVfSFRNTCBmcm9tICcuL3NlYXJjaFRpcC9ubEJFLmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hUaXBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG5cclxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICdubF9CRSc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdab2VrdGlwcycsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIlpvZWt0aXBzIHdlZXJnZXZlblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZW5fVVMnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnU2VhcmNoIFRpcHMnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJTZWFyY2ggVGlwc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZnJfRlInOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQXN0dWNlcz8nLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJBc3R1Y2VzP1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHRpcHNIVE1MID0gdGlwX2VuVVNfSFRNTDtcclxuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdmcl9GUic6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9mckZSX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdubF9CRSc6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9ubEJFX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfZW5VU19IVE1MO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2NvcGUudGl0bGUgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZSddO1xyXG4gICAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZV9sYWJlbCddO1xyXG5cclxuICAgICAgJHNjb3BlLnNob3dTZWFyY2hUaXBzID0gZnVuY3Rpb24oJGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IHRpcHNIVE1MLFxyXG4gICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAkc2NvcGUuaXRlbXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIERpYWxvZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2csIGl0ZW1zKSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hUaXBDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hUaXBDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoVGlwQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoVGlwSFRNTFxyXG59XHJcbiIsIlxyXG5jbGFzcyBTdGF0aWNGb290ZXJDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZywgJGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSBcImVuX1VTXCJcclxuXHJcbiAgICAgICAgdmFyIHZpZXdXaXRoQ3VzdG9tRm9vdGVyID0gWydMaXJpYXMnLCd3ZXJlbGR3aWp6ZXInLCdFQ0InLCdWRElDJ11cclxuLypcclxuICAgICAgICBjb25zb2xlLmxvZyAoc2VsZiApXHJcbiAgICAgICAgY29uc29sZS5sb2cgKHNjb3BlIClcclxuICAgICAgICBjb25zb2xlLmxvZyAoc2NvcGUuJHJvb3QuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSApXHJcbiovXHJcbiAgICAgICAgbG9jYWxlID0gc2NvcGUuJHJvb3QuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdmFyIHZpZCA9IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xyXG4gICAgICAgLy8gICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KHN0YXRpY0Zvb3RlclRlbXBsYXRlTmFtZSwgJ2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaHRtbC90ZW1wbGF0ZXMvZm9vdGVyXycgKyBsb2NhbGUgKyAnLmh0bWwnKTtcclxuKi9cclxuICAgICAgICB2YXIgdmlkID0gd2luZG93LmFwcENvbmZpZ1sndmlkJ107XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlVXJsID0gJ2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaHRtbC90ZW1wbGF0ZXMvZm9vdGVyXycgKyBsb2NhbGUgKyAnLmh0bWwnO1xyXG4gICAgICAgIGlmICggdmlld1dpdGhDdXN0b21Gb290ZXIuaW5jbHVkZXModmlkKSApICB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsID0gJ2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaHRtbC90ZW1wbGF0ZXMvZm9vdGVyXycgKyB2aWQgKyAnXycgKyBsb2NhbGUgKyAnLmh0bWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHNjb3BlLmdldFRlbXBsYXRlVXJsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGF0aWNGb290ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnLCAnJGVsZW1lbnQnXVxyXG5cclxuZXhwb3J0IGxldCBzdGF0aWNGb290ZXJDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IFN0YXRpY0Zvb3RlckNvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1pbmNsdWRlIHNyYz1cImdldFRlbXBsYXRlVXJsKClcIi8+JyxcclxufVxyXG4iLCJpbXBvcnQgYXV0b0xvZ2luQ2hlY2tib3hIVE1MIGZyb20gJy4vYXV0b0xvZ2luQ2hlY2tib3guaHRtbCdcclxuXHJcbmNsYXNzIEF1dG9Mb2dpbkNoZWNrYm94Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAvKiBSZW1vdmUgdGhlIGxvY2FsU3RvcmFnZSBwYXJhbWV0ZXIgcHJpbW9Qcm9tb3RlTG9naW4gaWYgdGhlIHVybCBjb250YWlucyBjbGVhckxvZ2luICovXHJcbiAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB2YXIgdXJsUGFyYW0gPSBcImNsZWFyTG9naW5cIjtcclxuICAgIHVybFBhcmFtID0gdXJsUGFyYW0ucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgdXJsUGFyYW0gKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxyXG4gICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuICAgIGlmIChyZXN1bHRzKSB7XHJcbiAgICAgIGlmIChkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcmltb1Byb21vdGVMb2dpbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi5OZXZlclNob3dTaWduSW5Qb3B1cCA9IGZhbHNlO1xyXG4gICAgdmFyIHVybFBhcmFtID0gXCJub0xvZ2luXCI7XHJcbiAgICB1cmxQYXJhbSA9IHVybFBhcmFtLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xyXG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIHVybFBhcmFtICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcclxuICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcblxyXG4gICAgY29uc29sZS5sb2cgKFwiTmV2ZXJTaG93U2lnbkluUG9wdXAgcmVzdWx0cyBcIityZXN1bHRzKVxyXG4gICAgaWYgKHJlc3VsdHMpIHtcclxuICAgICAgaWYgKGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cgKFwiRG9udCBzaG93IGxvZ2luIHBvcHVwXCIpXHJcbiAgICAgICAgc2VsZi5OZXZlclNob3dTaWduSW5Qb3B1cCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc2VsZi5hbHdheXNTaWduaW5DaGVja0JveCA9IGZhbHNlO1xyXG4gICAgc2VsZi5hbHdheXNTaWduaW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaW1vUHJvbW90ZUxvZ2luXCIpO1xyXG4gICAgaWYgKHNlbGYuYWx3YXlzU2lnbmluKSB7XHJcbiAgICAgIHNlbGYuYWx3YXlzU2lnbmluQ2hlY2tCb3ggPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5hbHdheXNTaWduaW5DaGVja2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoc2VsZi5hbHdheXNTaWduaW5DaGVja0JveCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmltb1Byb21vdGVMb2dpbicsICdhbHdheXNTaWduaW4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFByb21vdGVMb2dpbkNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRtZERpYWxvZykge1xyXG5cclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBwYXJlbnRDdHJsID0gIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsXHJcbiAgICAvLyBjb25zb2xlLmxvZyAoc2VsZilcclxuICAgIHZhciBsb2NhbGUgPSBwYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcbiAgIFxyXG4gICAgdmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgc2VsZi5OZXZlclNob3dTaWduSW5Qb3B1cCA9IGZhbHNlO1xyXG4gICAgdmFyIHVybFBhcmFtID0gXCJub0xvZ2luXCI7XHJcbiAgICB1cmxQYXJhbSA9IHVybFBhcmFtLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xyXG4gICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIls/Jl1cIiArIHVybFBhcmFtICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcclxuICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcblxyXG4gICAgY29uc29sZS5sb2cgKFwiTmV2ZXJTaG93U2lnbkluUG9wdXAgcmVzdWx0cyBcIityZXN1bHRzKVxyXG4gICAgaWYgKHJlc3VsdHMpIHtcclxuICAgICAgaWYgKGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cgKFwiRG9udCBzaG93IGxvZ2luIHBvcHVwXCIpXHJcbiAgICAgICAgc2VsZi5OZXZlclNob3dTaWduSW5Qb3B1cCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5zaWduSW5PYnNlcnZhYmxlLnN1YnNjcmliZSgoKT0+IHtcclxuICAgICAgaWYgKHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmlzTG9nZ2VkSW4gID09IHRydWUpe1xyXG4gICAgICAgICRtZERpYWxvZy5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nIChcIk5ldmVyU2hvd1NpZ25JblBvcHVwID0gXCIrIHNlbGYuTmV2ZXJTaG93U2lnbkluUG9wdXApXHJcblxyXG4gICAgJHNjb3BlLnByaW1vUHJvbW90ZUxvZ2luID0gJyc7XHJcbiAgICAkc2NvcGUuc2hvd1NpZ25JblBvcHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyAoXCJOZXZlclNob3dTaWduSW5Qb3B1cCA9IFwiKyBzZWxmLk5ldmVyU2hvd1NpZ25JblBvcHVwKVxyXG4gICAgICAgIGlmICghIHNlbGYuTmV2ZXJTaG93U2lnbkluUG9wdXApIHtcclxuICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2h0bWwvdGVtcGxhdGVzL3Byb21vdGVfbG9naW5fJyArIGxvY2FsZSArICcuaHRtbCcsXHJcbiAgICAgICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHByaW1vUHJvbW90ZUxvZ2luOiAgJHNjb3BlLnByaW1vUHJvbW90ZUxvZ2luXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXHJcbiAgICAgICAgICB9KTsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRGlhbG9nQ29udHJvbGxlcigkc2NvcGUsICRtZERpYWxvZykge1xyXG4gICAgICAgICRzY29wZS5sb2dpbkRpYWxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcGFyZW50Q3RybC5sb2dpblNlcnZpY2UuaGFuZGxlTG9naW5DbGljaygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5jbG9zZURpYWxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgICRzY29wZS5jaGFuZ2VQcm9tb3RlT3B0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLnByaW1vUHJvbW90ZUxvZ2luID09PSAnbmV2ZXJTaWduaW4nIHx8ICRzY29wZS5wcmltb1Byb21vdGVMb2dpbiA9PT0gJ2Fsd2F5c1NpZ25pbicpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmltb1Byb21vdGVMb2dpbicsICRzY29wZS5wcmltb1Byb21vdGVMb2dpbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nKTtcclxuICAgICAgICAgICAgICAgIC8vc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nLCAkc2NvcGUucHJpbW9Qcm9tb3RlTG9naW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICBcclxuICAgIC8qIElnbm9yZSB0aGlzIGluIHBybS1sb2dpbi1hbG1hLW1hc2h1cCwgb25seSBpZiBwYXJlbnQgaXMgcHJtLXVzZXItYXJlYSovXHJcbiAgICBpZiAoICgkZWxlbWVudC5uYXRpdmVFbGVtZW50KS5jbG9zZXN0KCdwcm0tdXNlci1hcmVhJykgKSB7XHJcbiAgICAgICAgaWYgKCFwYXJlbnRDdHJsLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZVsncHJpbW9Qcm9tb3RlTG9naW4nXSA9PT0gJ2Fsd2F5c1NpZ25pbicpIHtcclxuICAgICAgICAgICAgICAgIC8qIFNyZWlkZXJpY3QgdG8gbG9naW4gKi87XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRDdHJsLmxvZ2luU2VydmljZS5oYW5kbGVMb2dpbkNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlc3Npb25TdG9yYWdlWydwcmltb1Byb21vdGVMb2dpbiddICYmICFsb2NhbFN0b3JhZ2VbJ3ByaW1vUHJvbW90ZUxvZ2luJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd1NpZ25JblBvcHVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nLCAnU2lnbkluUG9wdXAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQXV0b0xvZ2luQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGxldCBwYXJlbnRDdHJsID0gIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsXHJcbiAgICAvLyBJZ25vcmUgdGhpcyBpbiBwcm0tbG9naW4tYWxtYS1tYXNodXAsIG9ubHkgaWYgcGFyZW50IGlzIHBybS11c2VyLWFyZWFcclxuICAgIGlmICgoJGVsZW1lbnQubmF0aXZlRWxlbWVudCkuY2xvc2VzdCgncHJtLXVzZXItYXJlYScpKSB7XHJcbiAgICAgICAgaWYgKCFwYXJlbnRDdHJsLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgdmFyIGF1dGggPSB3aW5kb3cuYXBwQ29uZmlnLmF1dGhlbnRpY2F0aW9uWzBdO1xyXG4gICAgICAgICAgICB2YXIgbG9naW5VcmwgPSBwYXJlbnRDdHJsLmxvZ2luU2VydmljZS5sb2dpblVybChhdXRoWydwcm9maWxlLW5hbWUnXSwgYXV0aFsnYXV0aGVudGljYXRpb24tc3lzdGVtJ10pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gbG9naW5VcmwucmVwbGFjZSgvaW5zdGl0dXRpb249KFteJl0pKi8sIFwiaW5zdGl0dXRpb249S1VMXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYXV0b0xvZ2luQ2hlY2tib3hDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogQXV0b0xvZ2luQ2hlY2tib3hDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBhdXRvTG9naW5DaGVja2JveEhUTUxcclxufVxyXG5cclxuZXhwb3J0IGxldCBwcm9tb3RlTG9naW5Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUHJvbW90ZUxvZ2luQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgYXV0b0xvZ2luQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEF1dG9Mb2dpbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGFsdG1ldHJpY0hUTUwgZnJvbSAnLi9hbHRtZXRyaWMuaHRtbCdcclxuXHJcbmNsYXNzIEFsdE1ldHJpY0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlLCAkd2luZG93LCAkdGltZW91dCwgQWx0bWV0cmljc1NlcnZpY2UpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGxldCBpdGVtID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbTtcclxuICAgIC8qXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy53aW5kb3cgPSAkd2luZG93O1xyXG4gICAgKi9cclxuICAgIHNlbGYuZG9pID0gJyc7XHJcbiAgICBzZWxmLnJlY29yZGlkID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcclxuICAgIGlmIChpdGVtICYmIGl0ZW0ucG54ICYmIGl0ZW0ucG54LmFkZGF0YSAmJiBpdGVtLnBueC5hZGRhdGEuZG9pKSB7XHJcbiAgICAgIHNlbGYuZG9pID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguYWRkYXRhLmRvaVswXTtcclxuXHJcbiAgICAgIHRoaXMucmVjb3JkaWQgPSBzZWxmLnJlY29yZGlkO1xyXG4gICAgICBBbHRtZXRyaWNzU2VydmljZS5hZGRBbHRtZXRyaWNzKCcjYWx0bWV0cmljc18nICsgc2VsZi5yZWNvcmRpZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBhbHRtZXRyaWNDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHsgcGFyZW50Q3RybDogJzwnIH0sXHJcbiAgY29udHJvbGxlcjogQWx0TWV0cmljQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogYWx0bWV0cmljSFRNTFxyXG59XHJcbiIsImltcG9ydCBicmllZkxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3SFRNTCBmcm9tICcuL2JyaWVmTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXcuaHRtbCdcclxuXHJcbmNsYXNzIEJyaWVmTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXdDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgRmlsdGVyTG9jYXRpb25zU2VydmljZSkge1xyXG4gICAgICAgIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHRoaXMudmlkID0gd2luZG93LmFwcENvbmZpZy52aWQ7XHJcbiAgICAgICAgdGhpcy5GaWx0ZXJMb2NhdGlvbnNTZXJ2aWNlID0gRmlsdGVyTG9jYXRpb25zU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICAkb25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50Q3RybCA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsO1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IHRoaXMucGFyZW50Q3RybC5yZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5wbnggPSB0aGlzLml0ZW0ucG54O1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5kZWxpdmVyeV9saWJyYXJ5ID0gIHRoaXMuRmlsdGVyTG9jYXRpb25zU2VydmljZS5maWx0ZXJMb2NhdGlvbnModGhpcy5wbngpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyAoICB0aGlzLmRlbGl2ZXJ5X2xpYnJhcnkgKVxyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHRoaXMuJGVsZW1lbnQucGFyZW50KCkucGFyZW50KClbMF07XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbkJyaWVmTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXdDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICdGaWx0ZXJMb2NhdGlvbnNTZXJ2aWNlJ107XHJcblxyXG5leHBvcnQgbGV0IGJyaWVmTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXdDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IEJyaWVmTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXdDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6IGJyaWVmTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXdIVE1MXHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHNvdXJjZUljb25IVE1MIGZyb20gJy4vc291cmNlSWNvbi5odG1sJ1xyXG5cclxuY2xhc3MgU291cmNlSWNvbkNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgcGFyZW50Q3RybCA9ICRzY29wZS4kcGFyZW50LiRjdHJsLnBhcmVudEN0cmw7XHJcbiAgICB2YXIgaWNvbkNvbmYgPSBbe1xyXG4gICAgICAnc291cmNlaWQnOiAnbGlyaWFzJyxcclxuICAgICAgJ2ljb25VcmwnOiAnLy9saW1vLmxpYmlzLmJlL3ByaW1vX2xpYnJhcnkvbGlid2ViL2xpYmlzL2ltYWdlcy9saXJpYXMuanBnJyxcclxuICAgICAgJ2ljb25UZXh0JzogJ0xpcmlhcydcclxuICAgIH1dO1xyXG5cclxuICAgIHZhciBpY29uQ29uZlNvdXJjZXMgPSBpY29uQ29uZi5tYXAob2JqID0+IG9iai5zb3VyY2VpZCk7XHJcblxyXG4gICAgc2VsZi5zb3VyY2VpZCA9IG51bGw7XHJcbiAgICBpZiAoJ3NvdXJjZWlkJyBpbiBwYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wpIHtcclxuICAgICAgc2VsZi5zb3VyY2VpZCA9IHBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5zb3VyY2VpZFswXS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgaWYgKGljb25Db25mU291cmNlcy5pbmNsdWRlcyhzZWxmLnNvdXJjZWlkKSkge1xyXG4gICAgICAgIHNlbGYuaWNvbiA9IGljb25Db25mLmZpbmQoZnVuY3Rpb24oeCkge1xyXG4gICAgICAgICAgcmV0dXJuIHguc291cmNlaWQgPT09IHNlbGYuc291cmNlaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdkaXYnKS5hcHBlbmQoJGNvbXBpbGUoc291cmNlSWNvbkhUTUwpKCRzY29wZSkpO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblNvdXJjZUljb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICckY29tcGlsZSddO1xyXG5cclxuZXhwb3J0IGxldCBzb3VyY2VJY29uQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFNvdXJjZUljb25Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCBzZWFyY2hDb2xsZWN0aW9uc0hUTUwgZnJvbSAnLi9odG1sL3NlYXJjaC1jb2xsZWN0aW9ucy5odG1sJ1xyXG5cclxuY2xhc3MgU2VhcmNoQ29sbGVjdGlvbnNDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIC8vbWlnaHQgYmUgbmVlZGVkIGFmdGVyIG5leHQgcmVsZWFzZVxyXG4gICAgLypzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuaXNHYWxsZXJ5TG9iYnk9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmlzR2FsbGVyeUxvYmJ5O1xyXG4gICAgdGhpcy5nZXRDb2xsZWN0aW9uID0gdGhpcy5nZXRDb2xsZWN0aW9uOyovXHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIC8qZ2V0Q29sbGVjdGlvbigpIHtcclxuICAgIGlmKCF0aGlzLmlzR2FsbGVyeUxvYmJ5ICYmIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmN1cnJlbnRDb2xsZWN0aW9uICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5jdXJyZW50Q29sbGVjdGlvbi5uYW1lO1xyXG4gICAgfVxyXG4gIH07Ki9cclxuXHJcbn1cclxuXHJcblNlYXJjaENvbGxlY3Rpb25zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQ29sbGVjdGlvbnNDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQ29sbGVjdGlvbnNDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBzZWFyY2hDb2xsZWN0aW9uc0hUTUxcclxufVxyXG4iLCJpbXBvcnQgeyBlbmRpYW5uZXNzIH0gIGZyb20gXCJvc1wiO1xyXG5cclxuY2xhc3MgZmlsdGVyRmFjZXRWYWx1ZXNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgICAgIGNvbnN0IGZhY2V0c0ZpbHRlcnMgPSBbe1xyXG4gICAgICAgICAgICB2aWQ6IFwiSkVTVUlUU1wiLFxyXG4gICAgICAgICAgICBmaWx0ZXJzOiBbe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJsaWJyYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImluY2x1ZGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW1wiS1VMX0dPU0FfTElCXCIsIFwiS1VMX0dCSUJfTElCXCIsIFwiS1VMX0dQQVJfTElCXCIsIFwiQU5FVF9VQS1DU1RcIl1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJkb21haW5cIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5jbHVkZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbXCJMSUJJU25ldCBDYXRhbG9ndWVcIiwgXCJSdXVzYnJvZWNnZW5vb3RzY2hhcFwiXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICBsZXQgdmlkZmFjZXRzRmlsdGVycyA9IGZhY2V0c0ZpbHRlcnMuZmlsdGVyKGYgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZi52aWQgPT0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwudmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHZpZGZhY2V0c0ZpbHRlcnMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgbGV0IHZpZGZhY2V0c0ZpbHRlciA9IHZpZGZhY2V0c0ZpbHRlcnNbMF1cclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kd2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICB9LCAobiwgbykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICBpZiAobiAhPSBvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZpZGZhY2V0c3Jlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZmFjZXRzRmlsdGVyLmZpbHRlcnMuZm9yRWFjaCh2aWRGYWNldCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZGZhY2V0c3Jlc3VsdHMgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cy5tYXAoZmFjZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZhY2V0Lm5hbWUgPT0gdmlkRmFjZXQubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY2V0LnZhbHVlcyA9IGZhY2V0LnZhbHVlcy5maWx0ZXIoZmFjZXRWYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmlkRmFjZXQudHlwZSA9PT0gJ2luY2x1ZGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmlkRmFjZXQudmFsdWVzLmluY2x1ZGVzKGZhY2V0VmFsLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmlkRmFjZXQudHlwZSA9PT0gJ2V4Y2x1ZGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXZpZEZhY2V0LnZhbHVlcy5pbmNsdWRlcyhmYWNldFZhbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5maWx0ZXJGYWNldFZhbHVlc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGZpbHRlckZhY2V0VmFsdWVzQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBmaWx0ZXJGYWNldFZhbHVlc0NvbnRyb2xsZXJcclxufSIsIi8vZmFjZXRzLmZhY2V0LmZhY2V0X3NlYXJjaF9hbHNvIGluIFwiZmFjZXQgbGFiZWxzXCJcclxuY2xhc3MgU2VhcmNoQWxzb0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSl7XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xyXG4gICAgfSwgKG4sbykgPT4ge1xyXG4gICAgICAvL2lmIChuICE9IG8pIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMuZmlsdGVyKGYgPT4ge3JldHVybiBmLm5hbWUgPT0gJ3NlYXJjaF9hbHNvJ30pLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9hbHNvJyxcclxuICAgICAgICAgICAgZGlzcGxheWVkVHlwZTogJ2V4YWN0JyxcclxuICAgICAgICAgICAgbGltaXRDb3VudDogMCxcclxuICAgICAgICAgICAgZmFjZXRHcm91cENvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlczogdW5kZWZpbmVkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIC8vfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOntwYXJlbnRDdHJsOic8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0NvbnRyb2xsZXJcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQWxzb0JvZHlIVE1MIGZyb20gJy4vc2VhcmNoQWxzb0JvZHkuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaEFsc29Cb2R5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcclxuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICBsZXQgdXJsID1cIlwiO1xyXG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBsZXQgY2FtcHVzID0gJyc7XHJcbiAgICAgIGNhbXB1cyA9IHVzZXIuaXNPbkNhbXB1cygpO1xyXG4gICAgICBpZighY2FtcHVzKXtcclxuICAgICAgICB1cmwgPSAnaHR0cDovL2t1bGV1dmVuLmV6cHJveHkua3VsZXV2ZW4uYmUvbG9naW4/dXJsPSc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YXJnZXRzID0gdGhpcy5fdGFyZ2V0cyh1cmwpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XHJcbiAgfVxyXG5cclxuICBfdGFyZ2V0cyh1cmwpIHtcclxuXHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgXCJuYW1lXCI6IFwiVW5pQ2F0XCIsXHJcbiAgICAgIFwidXJsXCI6IHVybCArIFwiaHR0cHM6Ly91bmljYXQuYmUvdW5pQ2F0P2Z1bmM9c2VhcmNoJnVpTGFuZ3VhZ2U9ZW4mcXVlcnk9XCIsXHJcbiAgICAgIFwiaW1nXCI6IFwiL3ByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9pbWcvdW5pY2F0X2ljb24ucG5nXCIsXHJcbiAgICAgIFwidG9vbHRpcFwiOiBcImxicy5udWkuc2VhcmNoX2Fsc28udG9vbHRpcC51bmljYXRcIixcclxuICAgICAgbWFwcGluZzogZnVuY3Rpb24gbWFwcGluZyhzZWFyY2gpIHtcclxuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHJldHVybiB0ZXJtc1syXSB8fCBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG5cclxuU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvbiddO1xyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQm9keUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBzZWFyY2hBbHNvQm9keUhUTUxcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQWxzb0JvZHlIVE1MIGZyb20gJy4vc2VhcmNoQWxzb0JvZHkuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcclxuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XHJcbiAgfVxyXG5cclxuICBfdGFyZ2V0cygpIHtcclxuICAgIHJldHVybiBbe1xyXG4gICAgICBcIm5hbWVcIjogXCJCaWJsaW90aGVlay5iZVwiLFxyXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmJpYmxpb3RoZWVrLmJlL2NhdGFsb2d1cz9xPVwiLFxyXG4gICAgICBcImltZ1wiOiBcIi9wcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaW1nL2JpYl9iZS5wbmdcIixcclxuICAgICAgXCJ0b29sdGlwXCI6IFwibGJzLm51aS5zZWFyY2hfYWxzby50b29sdGlwLmRlQmliXCIsXHJcbiAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIG1hcHBpbmcoc2VhcmNoKSB7XHJcbiAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICByZXR1cm4gdGVybXNbMl0gfHwgXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0JvZHlCaWJDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoQWxzb0JvZHlIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaEFsc29Cb2R5SFRNTCBmcm9tICcuL3NlYXJjaEFsc29Cb2R5Lmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hBbHNvQm9keUdvb2dsZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRsb2NhdGlvbil7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgdGhpcy50YXJnZXRzID0gdGhpcy5fdGFyZ2V0cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5IHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRHcm91cC5uYW1lO1xyXG4gIH1cclxuXHJcbiAgX3RhcmdldHMoKSB7XHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgIFwibmFtZVwiOiBcIkdvb2dsZSBTY2hvbGFyXCIsXHJcbiAgICAgICBcInVybFwiOiBcImh0dHBzOi8vc2Nob2xhci5nb29nbGUuY29tL3NjaG9sYXI/cT1cIixcclxuICAgICAgIFwiaW1nXCI6IFwiL3ByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9pbWcvZ29vZ2xlX2ljb24ucG5nXCIsXHJcbiAgICAgICBcInRvb2x0aXBcIjogXCJsYnMubnVpLnNlYXJjaF9hbHNvLnRvb2x0aXAuZ29vZ2xlX3Njb2xhclwiLFxyXG4gICAgICAgbWFwcGluZzogZnVuY3Rpb24gbWFwcGluZyhzZWFyY2gpIHtcclxuICAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAgICB9XHJcbiAgICAgfSxcclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hBbHNvQm9keUdvb2dsZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvY2F0aW9uJ107XHJcblxyXG5leHBvcnQgbGV0IHNlYXJjaEFsc29Cb2R5R29vZ2xlQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcclxuICBjb250cm9sbGVyOiBTZWFyY2hBbHNvQm9keUdvb2dsZUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHNlYXJjaEFsc29Cb2R5SFRNTFxyXG59XHJcbiIsImltcG9ydCBzZWFyY2hBbHNvQm9keUhUTUwgZnJvbSAnLi9zZWFyY2hBbHNvQm9keS5odG1sJ1xyXG5cclxuY2xhc3MgU2VhcmNoQWxzb0JvZHlXb3JsZGNhdENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRsb2NhdGlvbil7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgdGhpcy50YXJnZXRzID0gdGhpcy5fdGFyZ2V0cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5IHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRHcm91cC5uYW1lO1xyXG4gIH1cclxuXHJcbiAgX3RhcmdldHMoKSB7XHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgXCJuYW1lXCI6IFwiV29ybGRjYXRcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy53b3JsZGNhdC5vcmcvc2VhcmNoP3E9XCIsXHJcbiAgICAgIFwiaW1nXCI6IFwiL3ByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9pbWcvd29ybGRjYXRfaWNvbi5wbmdcIixcclxuICAgICAgXCJ0b29sdGlwXCI6IFwibGJzLm51aS5zZWFyY2hfYWxzby50b29sdGlwLndvcmxkY2F0XCIsXHJcbiAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIG1hcHBpbmcoc2VhcmNoKSB7XHJcbiAgICAgICAgdmFyIHR5cGVfbWFwcGluZ3MgPSB7XHJcbiAgICAgICAgICBcImFueVwiOiBcImt3XCIsXHJcbiAgICAgICAgICBcInRpdGxlXCI6IFwidGlcIixcclxuICAgICAgICAgIFwiY3JlYXRvclwiOiBcImF1XCIsXHJcbiAgICAgICAgICBcInN1YmplY3RcIjogXCJzdVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHZhciB0eXBlID0gdHlwZV9tYXBwaW5nc1t0ZXJtc1swXV0gfHwgXCJrd1wiO1xyXG4gICAgICAgIHZhciBxdWVyeSA9IHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIHR5cGUgKyAnOicgKyBxdWVyeTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hBbHNvQm9keVdvcmxkY2F0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0JvZHlXb3JsZGNhdENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0JvZHlXb3JsZGNhdENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHNlYXJjaEFsc29Cb2R5SFRNTFxyXG59XHJcbiIsImltcG9ydCBwYXlNeUZpbmVzSFRNTCBmcm9tICcuL3BheU15RmluZXMuaHRtbCdcclxuXHJcbmNsYXNzIFBheU15RmluZXNDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuc2hvd1BheU15RmluZXMgPSBmYWxzZTsgIFxyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eS1VMZXV2ZW4vLnRlc3Qodmlldy5jb2RlKSkge1xyXG4gICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgIGlmICh1c2VyLmZpbmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UGF5TXlGaW5lcyA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgcGF5TXlGaW5lc0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczp7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFBheU15RmluZXNDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBwYXlNeUZpbmVzSFRNTFxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGUgYWx0bWV0cmljcyBjb21wb25lbnQgY29udHJvbGxlci4gKGh0dHBzOi8vZ2l0aHViLmNvbS9EZXQtS29uZ2VsaWdlLUJpYmxpb3Rlay9wcmltby1leHBsb3JlLXJleC9ibG9iL21hc3Rlci9qcy9hbHRtZXRyaWNzLmNvbXBvbmVudC5qcylcclxuICpcclxuICovXHJcbmltcG9ydCBBbHRtZXRyaWNzQmFkZ2VIVE1MIGZyb20gJy4vYWx0bWV0cmljc0JhZGdlLmh0bWwnXHJcblxyXG5jbGFzcyBBbHRtZXRyaWNzQmFkZ2VDb250cm9sbGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRyb290U2NvcGUsICR3aW5kb3csICR0aW1lb3V0LCBBbHRtZXRyaWNzU2VydmljZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgc2VsZi4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLkFsdG1ldHJpY3NTZXJ2aWNlID0gQWx0bWV0cmljc1NlcnZpY2U7XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5wYXJlbnRDdHJsID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmw7XHJcbiAgICBzZWxmLml0ZW0gPSBzZWxmLnBhcmVudEN0cmwuaXRlbTtcclxuICAgIHNlbGYucmVjb3JkaWQgPSBzZWxmLml0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICBzZWxmLmRvaSA9ICcnO1xyXG5cclxuICAgIC8vcG9seWZpbGxcclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdClcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24ocykge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubWF0Y2hlcyhzKSkgcmV0dXJuIGVsO1xyXG4gICAgICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50IHx8IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgIC8vZW5kIHBvbHlmaWxsXHJcblxyXG4gICAgaWYgKHNlbGYuaXRlbSAmJiBzZWxmLml0ZW0ucG54ICYmIHNlbGYuaXRlbS5wbnguYWRkYXRhICYmIHNlbGYuaXRlbS5wbnguYWRkYXRhLmRvaSkge1xyXG4gICAgICAgIHNlbGYuZG9pID0gc2VsZi5pdGVtLnBueC5hZGRhdGEuZG9pWzBdO1xyXG4gICAgICAgIHNlbGYuQWx0bWV0cmljc1NlcnZpY2UuYWRkQWx0bWV0cmljcygnI2Z1bGxfYWx0bWV0cmljc18nICsgc2VsZi5yZWNvcmRpZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIHZhciBhbHRtZXRyaWNzU2VjdGlvbiA9IHtcclxuICAgICAgICAgICAgc2Nyb2xsSWQ6IFwiYWx0bWV0cmljc1wiLFxyXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogXCJhbHRtZXRyaWNzXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCBzZWxmLnBhcmVudEN0cmwuZnVsbFZpZXdTZXJ2aWNlLmdldFNlcnZpY2VzKCBzZWxmLnBhcmVudEN0cmwuaXRlbSwgc2VsZi5wYXJlbnRDdHJsLm9yaWdpbmF0b3IpICkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24oc2VydmljZXMpIHtcclxuICAgICAgICAgICAgICAvLyBBZGQgdG8gc2VydmljZXMgaWYgbm90IGFscmVhZCBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgIGlmICggc2VydmljZXMuZmluZEluZGV4KHNlcnZpY2UgPT4gc2VydmljZS5zY3JvbGxJZCA9PT0gXCJhbHRtZXRyaWNzXCIpIDwgMCApe1xyXG4gICAgICAgICAgICAgICAgc2VydmljZXMuc3BsaWNlKHNlcnZpY2VzLmxlbmd0aCwgMTAsIGFsdG1ldHJpY3NTZWN0aW9uKTsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCBzZWxmLmRvaSAhPT0gJycgKSB7XHJcbiAgICAgIHZhciB1bmJpbmRXYXRjaGVyID0gdGhpcy4kc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3JldHVybiBzZWxmLiRlbGVtZW50WzBdLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoNFt0cmFuc2xhdGU9XCJicmllZi5yZXN1bHRzLnRhYnMuQWx0bWV0cmljc1wiXScpO1xyXG4gICAgICAgIHJldHVybiBzZWxmLiRlbGVtZW50WzBdLmNsb3Nlc3QoJyNmdWxsVmlldycpLnF1ZXJ5U2VsZWN0b3IoJ2g0W3RyYW5zbGF0ZT1cImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJdJylcclxuICAgICAgfSwgZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbCkge1xyXG4gICAgICAgICAgLy9HZXQgdGhlIHNlY3Rpb24gYm9keSBhc3NvY2lhdGVkIHdpdGggdGhlIHZhbHVlIHdlJ3JlIHdhdGNoaW5nXHJcbiAgICAgICAgICBsZXQgYWx0bWV0cmljc0NvbnRhaW5lciA9IG5ld1ZhbC5jbG9zZXN0KCdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignZGl2LnNlY3Rpb24tYm9keScpO1xyXG4gICAgICAgICAgbGV0IGFsdG1ldHJpY3NSZXN1bHQgPSBzZWxmLiRlbGVtZW50WzBdO1xyXG4gICAgICAgICAgaWYgKGFsdG1ldHJpY3NDb250YWluZXIgJiYgYWx0bWV0cmljc0NvbnRhaW5lci5hcHBlbmRDaGlsZCAmJiBhbHRtZXRyaWNzUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGFsdG1ldHJpY3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWx0bWV0cmljc1Jlc3VsdCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fYWx0bWV0cmljX2VtYmVkX2luaXQoYWx0bWV0cmljc0NvbnRhaW5lcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bmJpbmRXYXRjaGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFsdG1ldHJpY3NCYWRnZUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBBbHRtZXRyaWNzQmFkZ2VDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBBbHRtZXRyaWNzQmFkZ2VIVE1MXHJcbn1cclxuIiwiaW1wb3J0IExvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3SFRNTCBmcm9tICcuL2xvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3Lmh0bWwnXHJcblxyXG5jbGFzcyBMb2NhdGlvbnNGb3JCaWJsaW9ncmFwaGljVmlld0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsIEZpbHRlckxvY2F0aW9uc1NlcnZpY2UpIHtcclxuICAgICAgICBzZWxmID0gdGhpc1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcclxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB0aGlzLnZpZCA9IHdpbmRvdy5hcHBDb25maWcudmlkO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyTG9jYXRpb25zU2VydmljZSA9IEZpbHRlckxvY2F0aW9uc1NlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybDtcclxuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLnBhcmVudEN0cmwuaXRlbTtcclxuICAgICAgICB0aGlzLnBueCA9IHRoaXMuaXRlbS5wbng7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmRlbGl2ZXJ5X2xpYnJhcnkgPSAgdGhpcy5GaWx0ZXJMb2NhdGlvbnNTZXJ2aWNlLmZpbHRlckxvY2F0aW9ucyh0aGlzLnBueCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nICggdGhpcy5kZWxpdmVyeV9saWJyYXJ5KVxyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLiRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpWzBdO1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0TG9jYXRpb25zTGlua3NTZWN0aW9uKClcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRMb2NhdGlvbnNMaW5rc1NlY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRlbGl2ZXJ5X2xpYnJhcnkgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuZGVsaXZlcnlfbGlicmFyeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBhcnJheSBpcyBkZWZpbmVkIGFuZCBoYXMgYXQgbGVhc3Qgb25lIGVsZW1lbnRcclxuXHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbnNMaW5rc1NlY3Rpb25EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSWQ6IFwibG9jYXRpb25zTGlua3NcIixcclxuICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBcImxvY2F0aW9uc0xpbmtzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJicmllZi5yZXN1bHRzLnRhYnMuTG9jYXRpb25zTGlua3NcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25zTGlua3NTZWN0aW9uRWxlbWVudCA9IHRoaXMuJGVsZW1lbnQgLy8uZmluZCgnbG9jYXRpb25zLWZvci1iaWJsaW9ncmFwaGljLXZpZXcnKVswXTtcclxuICAgICAgICAgICAgdGhpcy5pbnNlcnRTZWN0aW9uKGxvY2F0aW9uc0xpbmtzU2VjdGlvbkRhdGEsIGxvY2F0aW9uc0xpbmtzU2VjdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRTZWN0aW9uKHNlY3Rpb25EYXRhLCBzZWN0aW9uRWxlbWVudCkge1xyXG4gICAgICAgIC8vIFRoZSB0aXRsZSBvZiB0aGUgbmV3IHNlY3Rpb24gaXMgdXNlZCB0byBpZGVuaXRmeSB0aGUgc2VjdGlvblxyXG4gICAgICAgIC8vIGVsZW1lbnQuXHJcbiAgICAgICAgbGV0IHNlY3Rpb25UaXRsZVNlbGVjdG9yID0gJ2g0W3RyYW5zbGF0ZT1cIicgKyBzZWN0aW9uRGF0YS50aXRsZSArICdcIl0nO1xyXG5cclxuICAgICAgICAvLyBXZSBzZXQgdXAgdGhlIHdhdGNoZXIgYmVmb3JlIGluc2VydGluZyB0aGUgc2VjdGlvbiBkYXRhLFxyXG4gICAgICAgIC8vIHRvIGVuc3VyZSB0aGF0IHRoZSB3YXRjaGVyIGNhdGNoZXMgdGhlIGNoYW5nZS5cclxuICAgICAgICB0aGlzLndhaXRGb3JmdWxsVmlld1NlcnZpY2Uoc2VjdGlvbkRhdGEpXHJcbiAgICAgICAgdGhpcy53YWl0Rm9yVGFyZ2V0VGhlbk1vdmVTZWN0aW9uKHNlY3Rpb25UaXRsZVNlbGVjdG9yLCBzZWN0aW9uRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2FpdCBmb3IgdGhlIHRhcmdldCBlbGVtZW50IHRvIGJlIGNyZWF0ZWQuXHJcbiAgICB3YWl0Rm9yVGFyZ2V0VGhlbk1vdmVTZWN0aW9uKHNlY3Rpb25UaXRsZVNlbGVjdG9yLCBzZWN0aW9uRWxlbWVudCkge1xyXG4gICAgICAgIGxldCB1bmJpbmRXYXRjaGVyID0gdGhpcy4kc2NvcGUuJHdhdGNoKCgpID0+XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25UaXRsZVNlbGVjdG9yKSxcclxuICAgICAgICAgICAgKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlU2VjdGlvbkVsZW1lbnQobmV3VmFsLCBzZWN0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5iaW5kV2F0Y2hlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlU2VjdGlvbkVsZW1lbnQoaWRlbnRpZmllckVsZW1lbnQsIHNlY3Rpb25FbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSBpZGVudGlmaWVyRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdO1xyXG4gICAgICAgIC8vIE1vdmUgdGhlIHNlY3Rpb24gaW50byB0aGUgdGFyZ2V0IGVsZW1lbnQuXHJcbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgJiYgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCkge1xyXG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHNlY3Rpb25FbGVtZW50WzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2FpdEZvcmZ1bGxWaWV3U2VydmljZShzZWN0aW9uRGF0YSkge1xyXG4gICAgICAgIGxldCB1bmJpbmRXYXRjaGVyID0gdGhpcy4kc2NvcGUuJHdhdGNoKCgpID0+XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Q3RybC5mdWxsVmlld1NlcnZpY2Uuc2VydmljZXNBcnJheSxcclxuICAgICAgICAgICAgKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRTZWN0aW9uRGF0YShzZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5iaW5kV2F0Y2hlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRTZWN0aW9uRGF0YShzZWN0aW9uRGF0YSkge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSggdGhpcy5wYXJlbnRDdHJsLmZ1bGxWaWV3U2VydmljZS5nZXRTZXJ2aWNlcyggdGhpcy5wYXJlbnRDdHJsLml0ZW0sIHRoaXMucGFyZW50Q3RybC5vcmlnaW5hdG9yKSApLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKHNlcnZpY2VzKSB7XHJcbiAgICAgICAgICAgICAgLy8gQWRkIHRvIHNlcnZpY2VzIGlmIG5vdCBhbHJlYWQgaW4gdGhlIGxpc3RcclxuICAgICAgICAgICAgICAvL2lmICggc2VydmljZXMuZmluZEluZGV4KHNlcnZpY2UgPT4gc2VydmljZS5zY3JvbGxJZCA9PT0gXCJhbHRtZXRyaWNzXCIpIDwgMCApe1xyXG4gICAgICAgICAgICAgICAgc2VydmljZXMuc3BsaWNlKHNlcnZpY2VzLmxlbmd0aCAtMiwgMCwgc2VjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHRoaXMucGFyZW50Q3RybC5zZXJ2aWNlcy5zcGxpY2UodGhpcy5wYXJlbnRDdHJsLnNlcnZpY2VzLmxlbmd0aCAtIDEsIDAsIHNlY3Rpb25EYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXdDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICdGaWx0ZXJMb2NhdGlvbnNTZXJ2aWNlJ107XHJcblxyXG5leHBvcnQgbGV0IGxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3Q29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBMb2NhdGlvbnNGb3JCaWJsaW9ncmFwaGljVmlld0NvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXdIVE1MXHJcbn0iLCJpbXBvcnQgYmV0YVN3aXRjaEhUTUwgZnJvbSAnLi9iZXRhU3dpdGNoLmh0bWwnXHJcblxyXG5jbGFzcyBCZXRhU3dpdGNoQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuXHJcbiAgICAkc2NvcGUuc2hvd0JldGFTd2l0Y2ggPSB0cnVlO1xyXG4gICAgJHNjb3BlLnVzZUJldGEgPSB0cnVlOyAgXHJcblxyXG4gICAgJHNjb3BlLm9uQ2hhbmdlVXNlQmV0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCEgJHNjb3BlLnVzZUJldGEpe1xyXG4gICAgICAgIHNlbGYuZ29Ub09sZFVJKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnb1RvT2xkVUkoKSB7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPScvcHJpbW9fbGlicmFyeS9saWJ3ZWIvYWN0aW9uL3NlYXJjaC5kbz92aWQ9JysgdGhpcy5vbGRWaWQ7XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgdmFyIExpbmtUb0JldGFWaWV3cyA9IHtcclxuICAgICAgJ0FDVic6J0FDVicsXHJcbiAgICAgICdCUEInOidCUEInLFxyXG4gICAgICAnRkFSTyc6J0ZBUk8nLFxyXG4gICAgICAnRk9ERklOJzonRk9ERklOJyAsXHJcbiAgICAgICdHQ0xEJzonR0NMRCcsXHJcbiAgICAgICdHU0InOidHU0InLFxyXG4gICAgICAnR1NHJzonR1NHJyxcclxuICAgICAgJ0lNRUMnOidJTUVDJyxcclxuICAgICAgJ0tBRE9DJzonS0FET0MnLFxyXG4gICAgICAnS0JDJzonS0JDJyxcclxuICAgICAgJ0tNS0cnOidLTUtHJyxcclxuICAgICAgJ0tVTGV1dmVuJzonS1VMZXV2ZW5fVVgnLFxyXG4gICAgICAnTElCQVInOidMSUJBUicsXHJcbiAgICAgICdMVUNBJzonTFVDQV9VWCcsXHJcbiAgICAgICdOQkInOidOQkInLFxyXG4gICAgICAnT0RJU0VFJzonT0RJU0VFX1VYJyxcclxuICAgICAgJ09GTyc6J09GTycsXHJcbiAgICAgICdSQklOUyc6J1JCSU5TJyxcclxuICAgICAgJ1JFTEknOidSRUxJJyxcclxuICAgICAgJ1JNQ0EnOidSTUNBJyxcclxuICAgICAgJ1NFUlYnOidTRVJWJyxcclxuICAgICAgJ1RNT1JFSyc6J1RNT1JFS19VWCcsXHJcbiAgICAgICdUTU9SRU0nOidUTU9SRU1BX1VYJyxcclxuICAgICAgJ1ZESUMnOidWRElDJyxcclxuICAgICAgJ1ZJVkVTX0tBVEhPJzonVklWRVNfS0FUSE9fVVgnLFxyXG4gICAgICAnVklWRVNfS0hCTyc6J1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnVkxQJzonVkxQJyxcclxuICAgICAgJ0tVTGV1dmVuX1RNT1JFTSc6J0tVTGV1dmVuX1RNT1JFTV9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9VQ0xMJzonS1VMZXV2ZW5fVUNMTF9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9UTU9SRUsnOidLVUxldXZlbl9UTU9SRUtfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fTFVDQSc6J0tVTGV1dmVuX0xVQ0FfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fVklWRVNfS0hCTyc6J0tVTGV1dmVuX1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fT0RJU0VFJzonS1VMZXV2ZW5fT0RJU0VFX1VYJyxcclxuICAgICAgJ0tITElNJzonVUNMTF9MSU1CVVJHX1VYJyxcclxuICAgICAgJ0tITCc6J1VDTExfTEVVVkVOX1VYJ1xyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eRUNCLy50ZXN0KHZpZXcuY29kZSkpIHtcclxuICAgICAgICB0aGlzLnNob3dCZXRhU3dpdGNoID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbGRWaWQgPSBPYmplY3Qua2V5cyhMaW5rVG9CZXRhVmlld3MpLmZpbmQoa2V5ID0+IExpbmtUb0JldGFWaWV3c1trZXldID09PSB2aWV3LmNvZGUpIHx8IHZpZXcuY29kZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYmV0YVN3aXRjaENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBCZXRhU3dpdGNoQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogYmV0YVN3aXRjaEhUTUxcclxufVxyXG4iLCJpbXBvcnQgaG9tZUljb25IVE1MIGZyb20gJy4vaG9tZUljb24uaHRtbCdcclxuXHJcbmNsYXNzIEhvbWVJY29uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgc2VsZi5saW5rdHlwZSA9ICdob21lSWNvbic7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKCh2aWV3KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgIC8vbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgICBsZXQgdmlkID0gIHdpbmRvdy5hcHBDb25maWcudmlkO1xyXG4gICAgICBpZiAodmlkID09IFwiRUNCXCIpIHtcclxuICAgICAgICBzZWxmLmxpbmt0eXBlID0gXCJuZXdTZWFyY2hCdXR0b25cIjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICBsZXQgbGlicmFyeUxvZ28gPSB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ287XHJcbiAgICAgIGxldCBsb2NhbGVMaWJyYXJ5TG9nbyA9ICdjdXN0b20vJyArIHZpZCArICcvaW1nL2xpYnJhcnktbG9nby0nICsgbG9jYWxlICsgJy5wbmcnO1xyXG5cclxuICAgICAgaWYgKGxpYnJhcnlMb2dvICE9PSBsb2NhbGVMaWJyYXJ5TG9nbykge1xyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICB1cmw6IGxvY2FsZUxpYnJhcnlMb2dvLFxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvID0gbG9jYWxlTGlicmFyeUxvZ287XHJcbiAgICAgICAgICAgICRjb21waWxlKCRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpKSgkc2NvcGUpO1xyXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcclxuXHJcbiAgICAgICRzY29wZS5yZW1vdmVTdGlja3lGYWNldHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZhY2V0cyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldCcpO1xyXG4gICAgICAgIGlmIChmYWNldHMpIHtcclxuICAgICAgICAgIHZhciBzdGlja3lGYWNldHMgPSBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5nZXRTdGlja3lGYWNldHMoKVxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGlja3lGYWNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UucmVtb3ZlU3RpY2t5RmFjZXQoc3RpY2t5RmFjZXRzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuSG9tZUljb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICckY29tcGlsZScsICckaHR0cCcsICckcm9vdFNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGhvbWVJY29uQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEhvbWVJY29uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogaG9tZUljb25IVE1MXHJcbn0iLCJjbGFzcyBMYW5ndWFnZURlcGVuZGVudExvZ29Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHAsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKCh2aWV3KSA9PiB7XHJcbiAgICAgIC8vbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgbGV0IHZpZCA9ICB3aW5kb3cuYXBwQ29uZmlnLnZpZDtcclxuXHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlOyAvL3dpbmRvdy5Qcmltby5leHBsb3JlLmhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuICAgICAgbGV0IGxvY2FsZUxpYnJhcnlMb2dvID0gJ2N1c3RvbS8nICsgdmlkICsgJy9pbWcvbGlicmFyeS1sb2dvLScgKyBsb2NhbGUgKyAnLnBuZyc7XHJcblxyXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgJGNvbXBpbGUoJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkpKCRzY29wZSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuTGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBsYW5ndWFnZURlcGVuZGVudExvZ29Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogTGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufSIsImltcG9ydCBuZXdTZWFyY2hCdXR0b25IVE1MIGZyb20gJy4vbmV3U2VhcmNoQnV0dG9uLmh0bWwnXHJcblxyXG5jbGFzcyBOZXdTZWFyY2hCdXR0b25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHAsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5wcmVwZW5kKCRjb21waWxlKG5ld1NlYXJjaEJ1dHRvbkhUTUwpKCRzY29wZSkpO1xyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbigodmlldykgPT4ge1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG4gICAgICBpZiAodmlkID09IFwiRUNCXCIpIHtcclxuICAgICAgICBzZWxmLmxpbmt0eXBlID0gXCJuZXdTZWFyY2hCdXR0b25cIjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9ICcvcHJpbW8tZXhwbG9yZS9zZWFyY2g/dmlkPScgKyB2aWQgKyBcIiZsYW5nPVwiICsgbG9jYWxlO1xyXG5cclxuICAgICAgc2VsZi5yZW1vdmVTdGlja3lGYWNldHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHBybUFkdmFuY2VkU2VhcmNoID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJtLWFkdmFuY2VkLXNlYXJjaCcpO1xyXG4gICAgICAgIGlmKHBybUFkdmFuY2VkU2VhcmNoKXtcclxuICAgICAgICAgIGxldCBjID0gcHJtQWR2YW5jZWRTZWFyY2hbMF0uY3RybCgpO1xyXG4gICAgICAgICAgYy5jbGVhclNlYXJjaEZvcm0oKTtcclxuICAgICAgICAgIGMuJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZhY2V0cyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldCcpO1xyXG4gICAgICAgIGlmIChmYWNldHMpIHtcclxuICAgICAgICAgIGxldCBzdGlja3lGYWNldHMgPSBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5nZXRTdGlja3lGYWNldHMoKVxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGlja3lGYWNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UucmVtb3ZlU3RpY2t5RmFjZXQoc3RpY2t5RmFjZXRzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBuZXdTZWFyY2hCdXR0b25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgdmlld0xvZ29IVE1MIGZyb20gJy4vdmlld0xvZ28uaHRtbCdcclxuXHJcbmNsYXNzIFZpZXdMb2dvQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KClbMF0uZmlyc3RDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpWzBdLmZpcnN0Q2hpbGQpO1xyXG5cclxuXHJcbiAgICAkdHJhbnNsYXRlKCdsaW1vLmluc3RpdHV0ZVVybCcpLnRoZW4oXHJcbiAgICAgIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlICAhPSAgJ2h0dHA6Ly93d3cubGliaXMuYmUvJyApe1xyXG4gICAgICAgIHNlbGYuaG9tZVBhZ2VMaW5rID0gbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgLy9sZXQgdmlkID0gdmlldy5jb2RlO1xyXG4gICAgICBsZXQgdmlkID0gIHdpbmRvdy5hcHBDb25maWcudmlkO1xyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcbiAgICAgIGxldCBsb2NhbGVMaWJyYXJ5TG9nbyA9ICdjdXN0b20vJyArIHZpZCArICcvaW1nL2xpYnJhcnktbG9nby0nICsgbG9jYWxlICsgJy5wbmcnO1xyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9ICcvcHJpbW8tZXhwbG9yZS9zZWFyY2g/dmlkPScgKyB2aWQgKyBcIiZsYW5nPVwiICsgbG9jYWxlO1xyXG4gICAgICBzZWxmLmxvY2FsZUxpYnJhcnlMb2dvID0gd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvO1xyXG5cclxuICAgICAgIGlmICggc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbyAhPT0gbG9jYWxlTGlicmFyeUxvZ28pIHtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgdXJsOiBsb2NhbGVMaWJyYXJ5TG9nbyxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvID0gbG9jYWxlTGlicmFyeUxvZ287XHJcbiAgICAgICAgICBzZWxmLmxvY2FsZUxpYnJhcnlMb2dvID0gIGxvY2FsZUxpYnJhcnlMb2dvXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICBzZWxmLmxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblZpZXdMb2dvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckZWxlbWVudCcsICckY29tcGlsZScsICckaHR0cCcsICckcm9vdFNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IHZpZXdMb2dvQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFZpZXdMb2dvQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogdmlld0xvZ29IVE1MXHJcbn1cclxuIiwiaW1wb3J0IGZlZWRiYWNrSFRNTCBmcm9tICcuL2ZlZWRiYWNrLmh0bWwnXHJcbmltcG9ydCBmZWVkYmFja0RpYWxvZ0hUTUwgZnJvbSAnLi9mZWVkYmFja0RpYWxvZy5odG1sJ1xyXG5cclxuY2xhc3MgRmVlZGJhY2tDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgRmVlZGJhY2tTZXJ2aWNlKXtcclxuICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2RpdicpLmFwcGVuZCgkY29tcGlsZShmZWVkYmFja0hUTUwpKCRzY29wZSkpO1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UgPSBGZWVkYmFja1NlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBzaG93RmVlZGJhY2tGb3JtKCRldmVudCkge1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2Uuc2hvdygkZXZlbnQsIGZlZWRiYWNrRGlhbG9nSFRNTCk7XHJcbiAgfVxyXG59XHJcblxyXG5GZWVkYmFja0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJ0ZlZWRiYWNrU2VydmljZSddO1xyXG5cclxuZXhwb3J0IGxldCBmZWVkYmFja0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBGZWVkYmFja0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiLyogY29tcG9uZW50IHRvIGRvIGFsbCB5b3VyIGV4cGVyaW1lbnRhbCBzdHVmZiAqL1xyXG4vKiBbZW58ZGlzXWFibGUgaW4gY29tcG9uZW50cyAqL1xyXG5cclxuY2xhc3MgUmVjb21tZW5kYXRpb25JdGVtQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbi8qXHJcbiAgICBjb25zb2xlLmxvZyhzZWxmKVxyXG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS5jb25maWd1cmF0aW9uVXRpbC52aWQgKTtcclxuICAgIGNvbnNvbGUubG9nKCBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS52aWQgKTtcclxuICAgIGNvbnNvbGUubG9nKCBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5pbnN0ICk7XHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudXNlckluc3RpdHV0aW9uICk7XHJcbiovXHJcbiAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5vcmdHZXRMaW5rID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZ2V0TGluaztcclxuICAgIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmdldExpbmsgPSBmdW5jdGlvbigpIHsgXHJcbiAgICAgIHZhciBnZXRJdExpbmsgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5vcmdHZXRMaW5rKCk7XHJcbiAgICAgIHJldHVybiBnZXRJdExpbmsucmVwbGFjZSgvXFwvb3BlbnVybFxcL1teL10qXFwvW14/XSovLCBcIi9vcGVudXJsXFwvXCIrIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnVzZXJJbnN0aXR1dGlvbiArXCJcXC9cIisgc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLmNvbmZpZ3VyYXRpb25VdGlsLnZpZCkgXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuUmVjb21tZW5kYXRpb25JdGVtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnXVxyXG5cclxuZXhwb3J0IGxldCByZWNvbW1lbmRhdGlvbkl0ZW1Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUmVjb21tZW5kYXRpb25JdGVtQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgaWxsUmVxdWVzdEZvcm1IVE1MIGZyb20gJy4vaWxsUmVxdWVzdEZvcm0uaHRtbCdcclxuXHJcbmNsYXNzIGlsbFJlcXVlc3RGb3JtQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICR0cmFuc2xhdGUsICR3aW5kb3csICRyb290U2NvcGUpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9ICRzY29wZTtcclxuICAgICAgICB0aGlzLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnJztcclxuICAgICAgICB0aGlzLnNob3dMaW5rVG9JbGxSZXF1ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnN0aXR1dGlvbkNvZGUgPSBcIlwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAkb25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5yZXF1ZXN0c1NlcnZpY2UuYWNjb3VudFNlcnZpY2UubGlua2VkVXNlclNlbGVjdG9yU2VydmljZS5zZWxlY3RlZEluc3RpdHV0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGl0dXRpb25Db2RlID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbi5pbnN0aXR1dGlvbkNvZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGFsbWFfY29kZXMgPSB0aGlzLnJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLm1hcHBpbmdUYWJsZXNDYWNoZS5NQVBQSU5HX1RBQkxFU19DQUNIRVtcIkFsbWEgSW5zdGl0dXRpb24gQ29kZXNcIl07XHJcbiAgICAgICAgICAgIHZhciB1c2VyX2luc3QgPSB0aGlzLnJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnVzZXJJbnN0aXR1dGlvbjtcclxuICAgICAgICAgICAgdmFyIGFsbWFfY29kZSA9IGFsbWFfY29kZXMuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai50YXJnZXQgPT0gdXNlcl9pbnN0OyB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cgKGFsbWFfY29kZVswXSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGl0dXRpb25Db2RlID0gYWxtYV9jb2RlWzBdLnNvdXJjZTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2luc3RpdHV0aW9uQ29kZTonICsgaW5zdGl0dXRpb25Db2RlKVxyXG4gICAgICAgIGlmICh0aGlzLmluc3RpdHV0aW9uQ29kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMaW5rVG9JbGxSZXF1ZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9JbGxSZXF1ZXN0VXJsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RpdHV0aW9uQ29kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMaW5rVG9JbGxSZXF1ZXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJ2h0dHBzOi8vbGV1dmVuLXByaW1vLmhvc3RlZC5leGxpYnJpc2dyb3VwLmNvbS9wZHM/ZnVuYz1zc28mdXJsPWh0dHA6Ly9ldS5hbG1hLmV4bGlicmlzZ3JvdXAuY29tL3ZpZXcvdXJlc29sdmVyLycgKyB0aGlzLmluc3RpdHV0aW9uQ29kZSArICcvb3BlbnVybD9zdmNfZGF0PWdldGl0JnN2Yy5wcm9maWxlPWdldGl0JmRpcmVjdFJlc291cmNlU2hhcmluZ1JlcXVlc3Q9dHJ1ZSZuZXdVST10cnVlJ1xyXG4gICAgICAgICAgICB0aGlzLndpbmRvdy5vcGVuKHRoaXMuaWxsUmVxdWVzdFVybCwgJ19mcmVlSWxsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmlsbFJlcXVlc3RGb3JtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckd2luZG93JywnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBpbGxSZXF1ZXN0Rm9ybUNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogaWxsUmVxdWVzdEZvcm1Db250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6IGlsbFJlcXVlc3RGb3JtSFRNTFxyXG59XHJcbiIsImltcG9ydCBicm93emluZUhUTUwgZnJvbSAnLi9icm93emluZS5odG1sJ1xyXG5cclxuY2xhc3MgQnJvd3ppbmVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgaXRlbSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnJlc3VsdDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLT5cIixzZWxmLCBpdGVtLCAkc2NvcGUpO1xyXG5cclxuICAgICAgICBzZWxmLnJlY29yZGlkID0gJyc7XHJcblxyXG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0ucG54ICYmIGl0ZW0ucG54LmFkZGF0YSkge1xyXG4gICAgICAgICAgICBzZWxmLnJlY29yZGlkID0gaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBicm93emluZVdhdGNoZXIgPSAkc2NvcGUuJHdhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBicm93emluZS5wcmltbyA9PT0gJ29iamVjdCdcclxuICAgICAgICB9LCAobiwgbykgPT4ge1xyXG4gICAgICAgICAgICBpZiAobiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyaWdnZXIgYnJvd3ppbmUgZm9yOlwiLCBzZWxmLnJlY29yZGlkKVxyXG4gICAgICAgICAgICAgICAgbGV0IHNjb3BlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICRjdHJsOiBzZWxmLnBhcmVudEN0cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5icm93emluZS5wcmltby5zZWFyY2hSZXN1bHQoc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgYnJvd3ppbmVXYXRjaGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5Ccm93emluZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGJyb3d6aW5lQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBCcm93emluZUNvbnRyb2xsZXJcclxufSIsImltcG9ydCBwbnhYbWxIVE1MIGZyb20gJy4vcG54WG1sLmh0bWwnXHJcbmNsYXNzIFBueFhtbENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5yZWNvcmRpZCA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMucmVjb3JkaWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmIChob3RrZXlzKSB7XHJcbiAgICAgIGhvdGtleXMoXCJjdHJsK2VudGVyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgc2VsZi52aXNpYmxlID0gIXNlbGYudmlzaWJsZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbngteG1sJykpKSB7XHJcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLnZpc2libGUgPyAnZmxleCcgOiAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncG54LXhtbC10cmlnZ2VyJykubGVuZ3RoID09IDApIHtcclxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BueC14bWwtdHJpZ2dlcicpO1xyXG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7Ym90dG9tOjA7aGVpZ2h0OjIwcHg7d2lkdGg6MjBweDt6LWluZGV4OjEwMDA7YmFja2dyb3VuZC1jb2xvcjpibGFjaztvcGFjaXR5Oi4wMycpO1xyXG4gICAgICBkaXYub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG54LXhtbCcpKSkge1xyXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHBueFhtbENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBQbnhYbWxDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBwbnhYbWxIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHJlcG9ydEFQcm9ibGVtSFRNTCBmcm9tICcuL3JlcG9ydEFQcm9ibGVtLmh0bWwnXHJcbmltcG9ydCByZXBvcnRBUHJvYmxlbURpYWxvZ0hUTUwgZnJvbSAnLi9yZXBvcnRBUHJvYmxlbURpYWxvZy5odG1sJ1xyXG5cclxuY2xhc3MgUmVwb3J0QVByb2JsZW1Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJGh0dHAscmVwb3J0QVByb2JsZW1VUkwpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICgvXm51aVxcLmdldGl0XFwuLy50ZXN0KHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnRpdGxlKSkge1xyXG4gICAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdoNCcpLmFmdGVyKCRjb21waWxlKHJlcG9ydEFQcm9ibGVtSFRNTCkoJHNjb3BlKSk7XHJcblxyXG4gICAgICBsZXQgcmVjb3JkRGF0YSA9IHNlbGYuY3VycmVudFJlY29yZDtcclxuXHJcbiAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgc2VsZi5zaG93UmVwb3J0QVByb2JsZW1Gb3JtID0gKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXHJcbiAgICAgICAgICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiByZXBvcnRBUHJvYmxlbURpYWxvZ0hUTUwsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCAkbWREaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5yZXBvcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICdyZXBvcnQgYSBwcm9ibGVtJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhbmNlbFJlcG9ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAkbWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VuZFJlcG9ydCA9IGZ1bmN0aW9uKGFuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5yZWNvcmRpZFswXSxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoVHlwZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbklkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlY29yZERhdGEucG54LmRpc3BsYXkudGl0bGVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Jlc291cmNlX3Byb2JsZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICRzY29wZS5yZXBvcnQuc3ViamVjdCxcclxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBmZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgaXA6IHNlbGYudmlldy5pcC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICRzY29wZS5yZXBvcnQubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICByZXBseVRvOiAkc2NvcGUucmVwb3J0LnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnJlcG9ydC5yZXBseVRvLmxlbmd0aCA+IDAgJiYgJHNjb3BlLnJlcG9ydC5tZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVwb3J0QVByb2JsZW1VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLmZhaWwnKSB8fCAnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfTsgLy9zaG93UmVwb3J0QVByb2JsZW1Gb3JtXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRSZWNvcmQoKSB7XHJcbiAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXHJcbiAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xyXG4gICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRDdHJsKTtcclxuICAgICAgcmV0dXJuIGVsZW1lbnRDdHJsLml0ZW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcblJlcG9ydEFQcm9ibGVtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyRodHRwJywncmVwb3J0QVByb2JsZW1VUkwnXTtcclxuXHJcbmV4cG9ydCBsZXQgcmVwb3J0QVByb2JsZW1Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUmVwb3J0QVByb2JsZW1Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCByZXF1ZXN0QUNvcHlIVE1MIGZyb20gJy4vcmVxdWVzdEFDb3B5Lmh0bWwnXHJcbmltcG9ydCByZXF1ZXN0QUNvcHlEaWFsb2dIVE1MIGZyb20gJy4vcmVxdWVzdEFDb3B5RGlhbG9nLmh0bWwnXHJcblxyXG5jbGFzcyBSZXF1ZXN0QUNvcHlDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgJG1kRGlhbG9nLCAkaHR0cCwgJHJvb3RTY29wZSwgcmVxdWVzdEFDb3B5VVJMLCBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgIC8vIElmIHlvdSB3YW50IHRvIGFkZCB0aGUgYnV0dG9uIHRvIHRoZSB0aXRsZSAobGlrZSByZXBvcnQgYSBwcm9ibGVtKVxyXG4gICAgLy9sZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnRpdGxlXHJcbiAgICAvL2xldCBhcHBlbmRCdXR0b25UbyA9ICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2g0Jyk7XHJcblxyXG4gICAgLy8gZnVsbCAvLyBsZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnNlcnZpY2UudGl0bGU7XHJcbiAgICAvLyBmdWxsIC8vIGxldCBhcHBlbmRCdXR0b25UbyA9ICRlbGVtZW50LnBhcmVudCgpO1xyXG5cclxuICAgIGxldCBzZXJ2aWNlVGl0bGVDb2RlID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwudGl0bGU7XHJcbiAgICAvL2xldCBhcHBlbmRCdXR0b25UbyA9ICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgbGV0IGFwcGVuZEJ1dHRvblRvID0gYW5ndWxhci5lbGVtZW50KCAoJGVsZW1lbnQubmF0aXZlRWxlbWVudCkuY2xvc2VzdCgncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXItYWZ0ZXInKSApXHJcbiAgICBcclxuICAgIGxldCByZWNvcmREYXRhID0gc2VsZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgLyogY2FwdGNoYSBpbXBsZW1lbnRhdGlvbiAoQWxyZWFkeSB1c2VkIGluIClcclxuICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vVml2aWRDb3J0ZXgvYW5ndWxhci1yZWNhcHRjaGFcclxuICAgICAgICAqL1xyXG4gICAgbGV0IGNhcGNoYVB1YmxpY0tleSA9IHdpbmRvdy5hcHBDb25maWdbXCJzeXN0ZW0tY29uZmlndXJhdGlvblwiXVtcIlB1YmxpYyBDYXB0Y2hhIEtleVwiXTtcclxuXHJcbiAgICBsZXQgVHlwZXNTaG93UmVxdWVzdEFDb3B5ID0gWydjaGFwdGVyJywnam91cm5hbC1hcnRpY2xlJywndGhlc2lzLWRpc3NlcnRhdGlvbicsJ2NvbmZlcmVuY2UnLCdyZXBvcnQnLCdkYXRhc2V0JywnYy1ib29rcmV2aWV3JywnbWVkaWEnLCdzb2Z0d2FyZSddO1xyXG4gICAgbGV0IFN0YXR1c1Nob3dSZXF1ZXN0QUNvcHkgPSBbJ3B1Ymxpc2hlZCddO1xyXG5cclxuICAgIGlmICgvXm51aVxcLmdldGl0XFwuLy50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpKSB7XHJcbiAgICAgIHZhciBTaG93UmVxdWVzdEFDb3B5VHlwZSA9IHJlY29yZERhdGEucG54LmZhY2V0cy5sZmMxNi5maWx0ZXIodmFsdWUgPT4gLTEgIT09IFR5cGVzU2hvd1JlcXVlc3RBQ29weS5pbmRleE9mKHZhbHVlKSk7XHJcbiAgICAgIHZhciBTaG93UmVxdWVzdEFDb3B5U3RhdHVzID0gcmVjb3JkRGF0YS5wbnguZmFjZXRzLmxmYzEyLmZpbHRlcih2YWx1ZSA9PiAtMSAhPT0gU3RhdHVzU2hvd1JlcXVlc3RBQ29weS5pbmRleE9mKHZhbHVlKSk7XHJcblxyXG4gICAgICBpZiAoKCEvXm51aVxcLmdldGl0XFwudGFiMV9vbmxfbm9yZXN0cmljdC8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkgJiYgU2hvd1JlcXVlc3RBQ29weVR5cGUubGVuZ3RoID4gMCAmJiBTaG93UmVxdWVzdEFDb3B5U3RhdHVzLmxlbmd0aCA+IDApIHtcclxuXHJcblxyXG4gICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgICBzZWxmLm9uQ2FtcHVzID0gc2VsZi51c2VyLmlzT25DYW1wdXMoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIHNlcnZpY2VUaXRsZUNvZGUgKVxyXG4gICAgICAgICAgICBpZiAoICEgL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX21heXJlc3RyaWN0Ly50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpICB8fCAvXm51aVxcLmdldGl0XFwudGFiMV9vbmxfbWF5cmVzdHJpY3QvLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkgJiYgISBzZWxmLm9uQ2FtcHVzICkge1xyXG4gICAgICAgICAgICAgIGFwcGVuZEJ1dHRvblRvLmFmdGVyKCRjb21waWxlKHJlcXVlc3RBQ29weUhUTUwpKCRzY29wZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgc2VsZi5zaG93UmVxdWVzdEFDb3B5Rm9ybSA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWVzdEFDb3B5RGlhbG9nSFRNTCxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRtZERpYWxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgbGV0IHBueERpc3BsYXkgPSAgcmVjb3JkRGF0YS5wbnguZGlzcGxheTtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmdDYXB0Y2hhUmVzcG9uc2UgPSAnJztcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNhcGNoYVB1YmxpY0tleSA9IGNhcGNoYVB1YmxpY0tleTtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdGl2YXRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwbnhEaXNwbGF5LnRpdGxlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dG9yOiAoKCkgPT4geyAoIHBueERpc3BsYXkuY29udHJpYnV0b3IgPyBwbnhEaXNwbGF5LmNvbnRyaWJ1dG9yWzBdIDogJycgKSB9KSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0b3I6IHBueERpc3BsYXkuY3JlYXRvciA/IHBueERpc3BsYXkuY3JlYXRvclswXSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzcGFydG9mOiBwbnhEaXNwbGF5LmlzcGFydG9mID8gcG54RGlzcGxheS5pc3BhcnRvZlswXSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICdyZXF1ZXN0IGEgY29weSdcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNldFdpZGdldElkID0gZnVuY3Rpb24gKHdpZGdldElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdDcmVhdGVkIHdpZGdldCBJRDogJXMnLCB3aWRnZXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLndpZGdldElkID0gd2lkZ2V0SWQ7XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZXRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IHJlc3BvbnNlIGZyb20gY2FwdHVyZTpcIiArIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ0NhcHRjaGFSZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuY2JFeHBpcmF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRXhwaXJhdGlvbiBEaXNhYmxlIFN1Ym1pdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5nQ2FwdGNoYVJlc3BvbnNlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuY2FuY2VsUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZW5kUmVxdWVzdCA9IGZ1bmN0aW9uIChhbnN3ZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAnZy1yZWNhcHRjaGEtcmVzcG9uc2UnOiAkc2NvcGUuZ0NhcHRjaGFSZXNwb25zZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25JZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkOiByZWNvcmREYXRhLnBueC5jb250cm9sLnNvdXJjZWlkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVjb3JkSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wucmVjb3JkaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VSZWNvcmRJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5zb3VyY2VyZWNvcmRpZFswXSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwbnhEaXNwbGF5LnRpdGxlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3I6ICgoKSA9PiB7ICggcG54RGlzcGxheS5jb250cmlidXRvciA/IHBueERpc3BsYXkuY29udHJpYnV0b3JbMF0gOiAnJyApIH0pKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yOiBwbnhEaXNwbGF5LmNyZWF0b3IgPyBwbnhEaXNwbGF5LmNyZWF0b3JbMF0gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzcGFydG9mOiBwbnhEaXNwbGF5LmlzcGFydG9mID8gcG54RGlzcGxheS5pc3BhcnRvZlswXSA6ICcnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcGx5VG86ICRzY29wZS5yZXF1ZXN0LnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbW90aXZhdGlvbjogJHNjb3BlLnJlcXVlc3QubW90aXZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2cgKCBkYXRhIClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucmVxdWVzdC5yZXBseVRvLmxlbmd0aCA+IDAgJiYgJHNjb3BlLnJlcXVlc3QubW90aXZhdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDpyZXF1ZXN0QUNvcHlVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLiRyb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwuJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnJlcXVlc3RfYV9jb3B5LnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IHRoZSByZXF1ZXN0IGhhZCBiZWVuIHNlbmQhJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2UuX19zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiAkc2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURlbGF5OiA1MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi4kcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLiR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5yZXF1ZXN0X2FfY29weS5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgdGhlIHJlcXVlc3QuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIG1lc3NhZ2UgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5fX3Nob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICRzY29wZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRGVsYXk6IDUwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTsgLy9zaG93UmVxdWVzdEFDb3B5Rm9ybVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gLy9pZiAoICggISAvXm51aVxcLmdldGl0XFwudGFiMV9vbmxfbm9yZXN0cmljdC8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSAgKSApe1xyXG4gICAgfSAvLyBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkgIFxyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRSZWNvcmQoKSB7XHJcbiAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXHJcbiAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Q3RybCk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Q3RybC5pdGVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5SZXF1ZXN0QUNvcHlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICckbWREaWFsb2cnLCAnJGh0dHAnLCAnJHJvb3RTY29wZScsICdyZXF1ZXN0QUNvcHlVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgcmVxdWVzdEFDb3B5Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlcXVlc3RBQ29weUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0iLCJpbXBvcnQgcmVxdWVzdEFDb3B5T2ZFc0RvY0hUTUwgZnJvbSAnLi9yZXF1ZXN0QUNvcHlPZkVzRG9jLmh0bWwnXHJcblxyXG5jbGFzcyBSZXF1ZXN0QUNvcHlPZkVzRG9jQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgcmVxdWVzdEFDb3B5T2ZFc0RvY1VSTCwgJHdpbmRvdywgV2luZG93RXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLiRyb290U2NvcGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC4kcm9vdFNjb3BlO1xyXG4gICAgICAgIHNlbGYuV2luZG93RXZlbnRMaXN0ZW5lciA9IFdpbmRvd0V2ZW50TGlzdGVuZXI7XHJcbiAgICAgICAgLy8gSWYgeW91IHdhbnQgdG8gYWRkIHRoZSBidXR0b24gdG8gdGhlIHRpdGxlIChsaWtlIHJlcG9ydCBhIHByb2JsZW0pXHJcbiAgICAgICAgLy9sZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnRpdGxlXHJcbiAgICAgICAgLy9sZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdoNCcpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuc2VydmljZSkge1xyXG4gICAgICAgICAgICBsZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnNlcnZpY2UudGl0bGU7XHJcbiAgICAgICAgICAgIGxldCBhcHBlbmRCdXR0b25UbyA9ICRlbGVtZW50LnBhcmVudCgpO1xyXG4gICAgICAgICAgICBsZXQgcmVjb3JkRGF0YSA9IHNlbGYuY3VycmVudFJlY29yZDtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgbGV0IFR5cGVzU2hvd1JlcXVlc3RBQ29weU9mRXNEb2MgPSBbJ2NoYXB0ZXInLCAnam91cm5hbC1hcnRpY2xlJywgJ3RoZXNpcy1kaXNzZXJ0YXRpb24nLCAnY29uZmVyZW5jZScsICdyZXBvcnQnLCAnZGF0YXNldCcsICdjLWJvb2tyZXZpZXcnLCAnbWVkaWEnLCAnc29mdHdhcmUnXTtcclxuICAgICAgICAgICAgbGV0IFN0YXR1c1Nob3dSZXF1ZXN0QUNvcHlPZkVzRG9jID0gWydwdWJsaXNoZWQnXTtcclxuICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIGlmICgvXm51aVxcLmdldGl0XFwuLy50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBzZWxmIClcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlKVxyXG4gICAgICAgICAgICAgICAgbGV0IHByaW1vRXhwbG9yZUp3dCA9IHNlbGYuJHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC5qd3RVdGlsU2VydmljZS5zdG9yYWdlVXRpbC5zZXNzaW9uU3RvcmFnZS5wcmltb0V4cGxvcmVKd3Q7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLiRyb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwuand0VXRpbFNlcnZpY2Uuc3RvcmFnZVV0aWwuc2Vzc2lvblN0b3JhZ2UucHJpbW9FeHBsb3JlSnd0KVxyXG5cclxuICAgICAgICAgICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBzZWxmLm9uQ2FtcHVzID0gc2VsZi51c2VyLmlzT25DYW1wdXMoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuaXNMb2dnZWRJbiA9IHNlbGYudXNlci5pc0xvZ2dlZEluKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRpc3BsYXlfbmFtZSA9IHNlbGYudXNlci5kaXNwbGF5X25hbWVcclxuICAgICAgICAgICAgICAgIHNlbGYuZW1haWwgPSBzZWxmLnVzZXIuZW1haWxcclxuKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaW1vX2luc3RfY29kZSA9IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnaW5zdGl0dXRpb24nXVsnaW5zdGl0dXRpb24tY29kZSddIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbG1hX2luc3RfbWFwcGluZyA9ICB3aW5kb3cuYXBwQ29uZmlnWydtYXBwaW5nLXRhYmxlcyddWydBbG1hIEluc3RpdHV0aW9uIENvZGVzJ11cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWxtYV9jb2RlID0gKGFsbWFfaW5zdF9tYXBwaW5nLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmoudGFyZ2V0ID09IHByaW1vX2luc3RfY29kZTsgfSkgKVswXS5zb3VyY2UxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbnggPSByZWNvcmREYXRhLnBueDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXBwZW5kQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIFJlcXVlc3QgYnV0dG9uIG9ubHkgZm9yIEFyY2hpdi1tYXRlcmlhbCBmcm9tIEVTVkxQIGFuZCBhdmFpbGFibGUgJ29uY2FtcHVzJyBPUiBTaWduZWQgaW4gXHJcbiAgICAgICAgICAgICAgICAgICAgKiAgT25seSBwaHlzaWNhbCBvciBSZXN0cmljdGVkIE9ubGluZSBtYXRlcmlhbCBjYW4gYmUgcmVxdWVzdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoICh1c2VyLmlzT25DYW1wdXMoKSB8fCB1c2VyLmlzTG9nZ2VkSW4oKSApICYmIHBueC5jb250cm9sLnNvdXJjZWlkLmluY2x1ZGVzKFwiRVNWTFBfc2NvcGVBcmNoaXZcIikgKSAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmZhY2V0cy50b3BsZXZlbC5pbmNsdWRlcyhcInByaW50X2NvcGllc1wiKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEJ1dHRvbiA9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRlbGl2ZXJ5LnJlc2RlbHNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5kZWxpdmVyeS5yZXNkZWxzY29wZS5pbmNsdWRlcyhcIlJFU1ZMUFwiKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQnV0dG9uID10cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXBwZW5kQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEJ1dHRvblRvLmFmdGVyKCRjb21waWxlKHJlcXVlc3RBQ29weU9mRXNEb2NIVE1MKSgkc2NvcGUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYub3BlblVybFRvSUxMID0gKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwOi8vc2VydmljZXMubGliaXMuYmUvaWxsZm9ybS8zMktVTF9TRVJWP3JmdC5nZW5yZT1ib29rJnJmdC5hZHZpc29yPSZyZnQuYXU9JnJmdC5hdWNvcnA9JnJmdC5hdWZpcnN0PSZyZnQuYXVsYXN0PSZyZnQuY29udHJpYnV0b3I9JnJmdC5jcmVhdG9yPSZyZnQuYXRpdGxlPSZyZnQuYnRpdGxlPVdvb2QmcmZ0Lmp0aXRsZT0mcmZ0LnN0aXRsZT0mcmZ0LnRpdGxlPVdvb2QmcmZ0LnNlcmllcz0mcmZ0LmRlZ3JlZT0mcmZ0LmRlc2NyaXB0aW9uPSZyZnQuZWRpdGlvbj0mcmZ0LmlkZW50aWZpZXI9JnJmdC5laXNibj0mcmZ0LmVpc3NuPSZyZnQuaXNibj05NzgwNzE0ODczNDgwJnJmdC5pc3NuPSZyZnQucGFnZXM9JnJmdC5wYXJ0PSZyZnQuZXBhZ2U9JnJmdC5zcGFnZT0mcmZ0LnNzbj0mcmZ0LnRwYWdlcz0mcmZ0LnllYXI9JnJmdC5tb250aD0mcmZ0LmRheT0mcmZ0LnZvbHVtZT0mcmZ0Lmlzc3VlPSZyZnQuZGF0ZT0mcmZ0LnBsYWNlPSZyZnQucHViPSZyZnQucHViZGF0ZT0yMDE3JnJmdC5wdWJkYXk9JnJmdC5wdWJsaXNoZXI9JnJmdC5wdWJ5ZWFyPSZsb2NhbGU9bmxfQkVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkL3ByaW1vLmV4bGlicmlzZ3JvdXAuY29tOnByaW1vMy1BcnRpY2xlLUVTVkxQX3Njb3BlQXJjaGl2JnJmdF92YWxfZm10PWluZm86b2ZpL2ZtdDprZXY6bXR4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZnQuZ2VucmVcIjogcG54LmRpc3BsYXkudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmZ0LnBhcnRcIjogcG54LmRpc3BsYXkuaXNwYXJ0b2YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJmdC5kYXRlXCI6IHBueC5kaXNwbGF5LmNyZWF0aW9uZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmZ0LmF1XCI6IHBueC5hZGRhdGEuYXUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJmdC5yaWdodHNcIjogcG54LmRpc3BsYXkucmlnaHRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuLypcclxuXHJcbnJmdC5hdGl0bGU9e3thZGRhdGEvYXRpdGxlfX0mID0+IHBueC5kaXNwbGF5LnRpdGxlWzBdXHJcbnJmdC5qdGl0bGU9e3thZGRhdGEvanRpdGxlfX0mID0+IHBueC5kaXNwbGF5LmlzcGFydG9mWzBdXHJcbnJmdC5idGl0bGU9e3thZGRhdGEvYnRpdGxlfX0mID0+IHBueC5kaXNwbGF5LmlzcGFydG9mWzBdXHJcbnJmdC5idGl0bGU9e3thZGRhdGEvYWR0aXRsZX19JiA9PiBwbnguYWRkYXRhL2FkdGl0bGVbMF1cclxuXHJcblxyXG5yZnQuZ2VucmU9e3thZGRhdGEvZ2VucmV9fSYgPT4gcG54LmRpc3BsYXkudHlwZVswXVxyXG5yZnQucGFydD17e2FkZGF0YS9wYXJ0fX0mID0+IHBueC5kaXNwbGF5LmlzcGFydG9mWzBdXHJcbnJmdC5kYXRlPXt7YWRkYXRhL2RhdGV9fSYgPT4gcG54LmRpc3BsYXkuY3JlYXRpb25kYXRlWzBdXHJcbnJmdC5hdT17e2FkZGF0YS9hdX19JiA9PiBwbnguYWRkYXRhLmF1WzBdXHJcbnJmdC5kYXQ9PHt7Y29udHJvbC9zb3VyY2VpZH19Pnt7Y29udHJvbC9zb3VyY2VyZWNvcmRpZH19PC97e2NvbnRyb2wvc291cmNlaWR9fT4gPT4gPCBwbnguY29udHJvbC5zb3VyY2VpZFswXSA+IHBueC5jb250cm9sLnNvdXJjZXJlY29yZGlkICA8LyBwbnguY29udHJvbC5zb3VyY2VpZFswXSA+XHJcblxyXG5cclxuPz8/IHJmdC5yaWdodHMgPSBwbnguZGlzcGxheS5yaWdodHNbMF1cclxuKi9cclxuXHJcbi8qXHJcbnJmdC5hdWxhc3Q9e3thZGRhdGEvYXVsYXN0fX0mXHJcbnJmdC5hdWluaXQ9e3thZGRhdGEvYXVpbml0fX0mXHJcbnJmdC5hdWluaXQxPXt7YWRkYXRhL2F1aW5pdDF9fSZcclxucmZ0LmF1aW5pdG09e3thZGRhdGEvYXVpbml0bX19JlxyXG5yZnQuYXVzdWZmaXg9e3thZGRhdGEvYXVzdWZmaXh9fSZcclxuXHJcbnJmdC5hdWNvcnA9e3thZGRhdGEvYXVjb3JwfX0mXHJcbnJmdC52b2x1bWU9e3thZGRhdGEvdm9sdW1lfX0mXHJcbnJmdC5pc3N1ZT17e2FkZGF0YS9pc3N1ZX19JlxyXG5yZnQucXVhcnRlcj17e2FkZGF0YS9xdWFydGVyfX0mXHJcbnJmdC5zc249e3thZGRhdGEvc3NufX0mXHJcbnJmdC5zcGFnZT17e2FkZGF0YS9zcGFnZX19JlxyXG5yZnQuZXBhZ2U9e3thZGRhdGEvZXBhZ2V9fSZcclxucmZ0LnBhZ2VzPXt7YWRkYXRhL3BhZ2VzfX0mXHJcbnJmdC5hcnRudW09e3thZGRhdGEvYXJ0bnVtfX0mXHJcbnJmdC5pc3NuPXt7YWRkYXRhL2lzc259fSZcclxucmZ0LmVpc3NuPXt7YWRkYXRhL2Vpc3NufX0mXHJcbnJmdC5pc2JuPXt7YWRkYXRhL2lzYm59fSZcclxucmZ0LnNpY2k9e3thZGRhdGEvc2ljaX19JlxyXG5yZnQuY29kZW49e3thZGRhdGEvY29kZW59fSZcclxucmZ0LmlkPWluZm86ZG9pL3t7YWRkYXRhL2RvaX19JlxyXG5yZnQub2JqZWN0X2lkPXt7YWRkYXRhL29iamVjdGlkfX07JlxyXG5yZnQuZWlzYm49e3thZGRhdGEvZWlzYm59fSZcclxucmZ0LmVkaXRpb249e3tkaXNwbGF5L2VkaXRpb259fSZcclxucmZ0LnB1Yj17e2FkZGF0YS9wdWJ9fSZcclxucmZ0LnBsYWNlPXt7YWRkYXRhL2NvcH19JlxyXG5yZnQuc2VyaWVzPXt7YWRkYXRhL3Nlcmllc3RpdGxlfX0mXHJcbnJmdC5zdGl0bGU9e3thZGRhdGEvc3RpdGxlfX0mXHJcbnJmdC5iaWNpPXt7YWRkYXRhL2JpY2l9fSZcclxucmZ0LmlkPWluZm86YmliY29kZS97e2FkZGF0YS9iaWJjb2RlfX0mXHJcbnJmdC5pZD1pbmZvOmhkbC97e2FkZGF0YS9oZGxpZH19JlxyXG5yZnQuaWQ9aW5mbzpsY2NuL3t7YWRkYXRhL2xjY259fSZcclxucmZ0LmlkPWluZm86b2NsY251bS97e2FkZGF0YS9vY2xjaWR9fSZcclxucmZ0LmlkPWluZm86cG1pZC97e2FkZGF0YS9wbWlkfX0mXHJcbnJmdC5pZD1pbmZvOmVyaWMvKChhZGRhdGEvZXJpY319JlxyXG5cclxuKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wZW51cmwgPSBcIlwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRpc3BsYXkudHlwZVswXSA9PT0gXCJhcnRpY2xlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGlzcGxheS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0LmF0aXRsZT1cIiArIGVuY29kZVVSSShwbnguZGlzcGxheS50aXRsZVswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGlzcGxheS5pc3BhcnRvZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0Lmp0aXRsZT1cIiArIGVuY29kZVVSSShwbnguZGlzcGxheS5pc3BhcnRvZlswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGlzcGxheS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0LmJ0aXRsZT1cIiArIGVuY29kZVVSSShwbnguZGlzcGxheS50aXRsZVswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnguYWRkYXRlLmFkdGl0bGVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbnVybCArPSBcIiZyZnQuYnRpdGxlPVwiICsgZW5jb2RlVVJJKHBueC5hZGRhdGUuYWR0aXRsWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcGFyYW0gaW4gY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnW3BhcmFtXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImXCIgK3BhcmFtICtcIj1cIiArIGVuY29kZVVSSSggY29uZmlnW3BhcmFtXVswXSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbnVybCArPSBcIiZyZnRfZGF0PVwiICsgXCIlM0NcIiArIGVuY29kZVVSSShwbnguY29udHJvbC5zb3VyY2VpZFswXSkgKyBcIiUzRVwiICsgZW5jb2RlVVJJKHBueC5jb250cm9sLnNvdXJjZXJlY29yZGlkWzBdKSArIFwiJTNDL1wiICsgZW5jb2RlVVJJKHBueC5jb250cm9sLnNvdXJjZWlkWzBdKSArIFwiJTNFXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgPSByZXF1ZXN0QUNvcHlPZkVzRG9jVVJMICsgXCIvXCIrIGFsbWFfY29kZSArXCI/XCIgKyBvcGVudXJsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkd2luZG93Lm9wZW4ob3BlbnVybCwgJ19ibGFuaycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50UmVjb3JkKCkge1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9ICdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJzsgLy8ncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcidcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRDdHJsID0gZWxlbWVudC5jb250cm9sbGVyKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudEN0cmwpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudEN0cmwuaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlcXVlc3RBQ29weU9mRXNEb2NDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICdyZXF1ZXN0QUNvcHlPZkVzRG9jVVJMJywgJyR3aW5kb3cnLCAnV2luZG93RXZlbnRMaXN0ZW5lciddO1xyXG5cclxuZXhwb3J0IGxldCByZXF1ZXN0QUNvcHlPZkVzRG9jQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBSZXF1ZXN0QUNvcHlPZkVzRG9jQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnJ1xyXG59IiwiY2xhc3MgQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coJycsICRzY29wZSk7XHJcbiAgfVxyXG59XHJcblxyXG5Bbm5vdW5jZW1lbnRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgYW5ub3VuY2VtZW50c0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGZlZWRiYWNrQW5ub3VuY2VtZW50SFRNTCBmcm9tICcuL2ZlZWRiYWNrQW5ub3VuY2VtZW50Lmh0bWwnXHJcbmltcG9ydCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0hUTUwgZnJvbSAnLi9mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZy5odG1sJ1xyXG5pbXBvcnQgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyIGZyb20gJy4vZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2cnXHJcblxyXG5jbGFzcyBGZWVkYmFja0Fubm91bmNlbWVudENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRyYW5zbGF0ZSwgJHRpbWVvdXQsIEZlZWRiYWNrU2VydmljZSwgTWVzc2FnZVNlcnZpY2UsIGFjdGlvbkljb25zKSB7XHJcblxyXG4gICAgLy8kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vbGV0IG1lc3NhZ2UgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuc3VydmV5LmFubm91bmNlbWVudCcpO1xyXG4gICAgICBsZXQgc2hvd0ZlZWRiYWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByaW1vRmVlZGJhY2snKTtcclxuICAgICAgaWYgKHNob3dGZWVkYmFjayA9PSBudWxsKSB7XHJcbiAgICAgICAgJHRyYW5zbGF0ZSgnbGJzLm51aS5zdXJ2ZXkuYW5ub3VuY2VtZW50JykudGhlbigobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhmZWVkYmFja0Fubm91bmNlbWVudEhUTUwucmVwbGFjZSgne3ttZXNzYWdlfX0nLCBtZXNzYWdlKSwge1xyXG4gICAgICAgICAgICBzY29wZTogJHNjb3BlLFxyXG4gICAgICAgICAgICBoaWRlRGVsYXk6IDAsXHJcbiAgICAgICAgICAgIGFjdGlvbkxhYmVsOiAkdHJhbnNsYXRlLmluc3RhbnQoJ21haW5tZW51LmxhYmVsLmZlZWRiYWNrJykgfHwgJ0ZlZWRiYWNrJyxcclxuICAgICAgICAgICAgYWN0aW9uOlxyXG4gICAgICAgICAgICAgICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIEZlZWRiYWNrU2VydmljZS5zaG93KCRldmVudCwgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dIVE1MLCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAvL30sIDIwMDApO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbkZlZWRiYWNrQW5ub3VuY2VtZW50Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCcsICdGZWVkYmFja1NlcnZpY2UnLCAnTWVzc2FnZVNlcnZpY2UnLCAnYWN0aW9uSWNvbnMnXTtcclxuXHJcbmV4cG9ydCBsZXQgZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmVlZGJhY2tBbm5vdW5jZW1lbnRDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkbWREaWFsb2csICRtZFRvYXN0LCAkdHJhbnNsYXRlLCAkaHR0cCwgZmVlZGJhY2tTZXJ2aWNlVVJMLCBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5zY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XHJcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgIHRoaXMuaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwgPSBmZWVkYmFja1NlcnZpY2VVUkw7XHJcblxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICRzY29wZS5jYW5jZWxGZWVkYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5tZERpYWxvZy5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gKGFuc3dlcikgPT4ge1xyXG4gICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICBzdWJqZWN0OiAkc2NvcGUuZmVlZGJhY2suc3ViamVjdCxcclxuICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcclxuICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcclxuICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXHJcbiAgICAgICAgdHlwZTogJ3N1cnZleScsXHJcbiAgICAgICAgZmVlZGJhY2s6ICRzY29wZS5mZWVkYmFjay5hbnN3ZXJzLFxyXG4gICAgICAgIGVtYWlsOiAkc2NvcGUuZmVlZGJhY2sucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgdXNlcklkOiBzZWxmLnVzZXIuaWQgfHwgJycsXHJcbiAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNlbGYubWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICBzZWxmLmh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICB1cmw6IHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9GZWVkYmFjaycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrISc7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLic7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcbiAgICAgICAgJHNjb3BlLmZlZWRiYWNrID0ge1xyXG4gICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgYW5zd2VyczogW10sXHJcbiAgICAgICAgICBzdWJqZWN0OiAnZmVlZGJhY2snXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJHRyYW5zbGF0ZScsICckaHR0cCcsICdmZWVkYmFja1NlcnZpY2VVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuIiwiY2xhc3MgRmluZXNNZXNzYWdlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoTWVzc2FnZVNlcnZpY2UsICR0cmFuc2xhdGUsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vVE9ETzpleHRyYWN0IGh0bWwgdG8gaXRzIG93biBmaWxlLiBmaW5kIG91dCBob3cgdG8gcmVzb2x2ZSB7e319XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnlvdUhhdmVGaW5lcycpO1xyXG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xcJDAvLCB1c2VyLmZpbmVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGxldCBwYXkgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkueW91SGF2ZUZpbmVzLnBheScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coYFxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImFsaWduLXNlbGY6Y2VudGVyO1wiPiR7bWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO2NvbG9yOiB3aGl0ZTtcIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtc2VjdW5kYXJ5XCIgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvcGF5X215X2ZpbmVzJz4ke3BheX08L2E+XHJcbiAgICAgICAgICBgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5GaW5lc01lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ01lc3NhZ2VTZXJ2aWNlJywgJyR0cmFuc2xhdGUnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBmaW5lc01lc3NhZ2VDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmluZXNNZXNzYWdlQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbHRtZXRyaWNzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkY29tcGlsZSwgJG1kVG9hc3QsICR0aW1lb3V0LCAkd2luZG93KSB7XHJcbiAgICAgICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMuY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgICAgIHRoaXMudGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tBbHRtZXRyaWNzY3JpcHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSAyMDA7XHJcbiAgICAgICAgICAgIHZhciBlbmRUaW1lID0gTnVtYmVyKG5ldyBEYXRlKCkpICsgMTUwMDA7IC8vIHN0b3AgY29udHJvbCBhZnRlciA1IHNlY29uZHNcclxuXHJcbiAgICAgICAgICAgIHZhciB3YWl0X3VudGlsX2FsdG1ldHJpY3NfbG9hZGVkID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbmRpdGlvbiBpcyBtZXQsIHdlJ3JlIGRvbmUhIFxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHR5cGVvZiB3aW5kb3cuX2FsdG1ldHJpY19lbWJlZF9pbml0ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb25kaXRpb24gaXNuJ3QgbWV0IGJ1dCB0aGUgdGltZW91dCBoYXNuJ3QgZWxhcHNlZCwgZ28gYWdhaW5cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKE51bWJlcihuZXcgRGF0ZSgpKSA8IGVuZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRfdW50aWxfYWx0bWV0cmljc19sb2FkZWQsIGludGVydmFsLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRGlkbid0IG1hdGNoIGFuZCB0b28gbXVjaCB0aW1lLCByZWplY3QhXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdXYWl0IHVudGlsIGFsdG1ldHJpY3MgaXMgbG9hZGVkIHRpbWVkIG91dCcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHdhaXRfdW50aWxfYWx0bWV0cmljc19sb2FkZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRBbHRtZXRyaWNzKGFsdG1ldHJpY3NFbGVtZW50U2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FsdG1ldHJpY3NjcmlwdHMoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTG9hZGluZyBhbHRtZXRyaWNzOiBXZSBrdW5uZW4gc3RhcnRlbicpO1xyXG4gICAgICAgICAgICB3aW5kb3cuX2FsdG1ldHJpY19lbWJlZF9pbml0KGFsdG1ldHJpY3NFbGVtZW50U2VsZWN0b3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbkFsdG1ldHJpY3NTZXJ2aWNlLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJGNvbXBpbGUnLCAnJG1kVG9hc3QnLCAnJHRpbWVvdXQnLCAnJHdpbmRvdyddO1xyXG4iLCJleHBvcnQgbGV0IGFwaUNhbGxJbnRlcmNlcHRvciA9IFsoKSA9PiB7XHJcbiAgICB2YXIgYXBpQ2FsbEludGVyY2VwdG9yID0ge1xyXG4gICAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9cIkFzc2Vzc2luZyBHb3NwZWwgUXVvdGF0aW9ucyBpbiBKdXN0aW4gTWFydHlyXCJcclxuICAgICAgICAgICAgbGV0IGZpeERpc3BsYXlEYXRhID0gZnVuY3Rpb24gKHBueERhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwbnhEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueERhdGEuZGlzcGxheSAmJiBwbnhEYXRhLmRpc3BsYXkuY3JlYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBueERhdGEuZGlzcGxheS5jcmVhdG9yID0gcG54RGF0YS5kaXNwbGF5LmNyZWF0b3IubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbGF0b3IgPSBjLm1hdGNoKC9cXCguKj9cXCkvaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGMuc3BsaXQoL1xcKC4qP1xcKS9pKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM9YCR7Y30gJCRRJHtkYXRhfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueERhdGEuZGlzcGxheSAmJiBwbnhEYXRhLmRpc3BsYXkuY29udHJpYnV0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbnhEYXRhLmRpc3BsYXkuY29udHJpYnV0b3IgPSBwbnhEYXRhLmRpc3BsYXkuY29udHJpYnV0b3IubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbGF0b3IgPSBjLm1hdGNoKC9cXCguKj9cXCkvaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGMuc3BsaXQoL1xcKC4qP1xcKS9pKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM9YCR7Y30gJCRRJHtkYXRhfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBueERhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgvXlxcL3ByaW1vX2xpYnJhcnlcXC9saWJ3ZWJcXC93ZWJzZXJ2aWNlc1xcL3Jlc3RcXC9wcmltby1leHBsb3JlXFwvdjFcXC9wbnhzLy50ZXN0KHJlc3BvbnNlLmNvbmZpZy51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcygnZG9jcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZG9jcy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZml4RGlzcGxheURhdGEocC5wbngpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoJ3BueCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnBueCA9IGZpeERpc3BsYXlEYXRhKGRhdGEucG54KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vUmVtb3ZlIG9wZW4gYWNjZXNzIGZyb20gZmFjZXRzXHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoJ2ZhY2V0cycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbXCJmYWNldHNcIl0gPSBkYXRhW1wiZmFjZXRzXCJdLm1hcChtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLm5hbWUgPT0gXCJ0bGV2ZWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0udmFsdWVzID0gbS52YWx1ZXMuZmlsdGVyKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC52YWx1ZSAhPT0gJ29wZW5fYWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGF0YScsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBpQ2FsbEludGVyY2VwdG9yO1xyXG59XSIsImV4cG9ydCBsZXQgZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yID0gIFsoKSA9PiB7XHJcbiAgdmFyIGh0dHBDYWxsSW50ZXJjZXB0b3IgPSB7XHJcbiAgICByZXF1ZXN0OiBmdW5jdGlvbihjb25maWcpe1xyXG4gICAgICBpZiAoY29uZmlnLnVybC5pbmNsdWRlcygncG54cycpICYmICFjb25maWcudXJsLmluY2x1ZGVzKCdkZWxpdmVyeScpICYmIGNvbmZpZy5wYXJhbXMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNvbmZpZyk7XHJcbiAgICAgICAgaWYoY29uZmlnLnBhcmFtcy5kYXRhYmFzZXMgfHwgY29uZmlnLnBhcmFtcy5qb3VybmFscyl7XHJcbiAgICAgICAgICBjb25maWcucGFyYW1zLmluc3QgPSAnS1VMJztcclxuICAgICAgICAgIGNvbmZpZy5wYXJhbXMudmlkID0gJ0tVTGV1dmVuJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaHR0cENhbGxJbnRlcmNlcHRvcjtcclxufV07XHJcbiIsImV4cG9ydCBsZXQgZmVlZFNlcnZpY2UgPSBbJyRodHRwJywgZnVuY3Rpb24oJGh0dHApIHtcclxuICB2YXIgZmVlZEFudGlDYWNoZSA9IFwiPyZ0PVwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyByYW5kb21OdW07XHJcbiAgdmFyIHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwICsgMSk7XHJcbiAgdmFyIGZlZWRkYXlzb2xkID0gNjA7XHJcblxyXG4gIHZhciBkbSA9IG5ldyBEYXRlKCk7XHJcbiAgZG0uc2V0SG91cnMoMjQsIDAsIDAsIDApO1xyXG5cclxuICB2YXIgYXBpX2VuZHBvaW50ID0gJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvZmVlZF9hZ2dyZWdhdG9yPyc7XHJcblxyXG4gIGZ1bmN0aW9uIHJlYWRGZWVkQ29uZmlnKHVybCkge1xyXG4gICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIlgtRnJvbS1FeEwtQVBJLUdhdGV3YXlcIjogdW5kZWZpbmVkXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVhZEZlZWQodXJsKSB7XHJcbiAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICB1cmw6IGFwaV9lbmRwb2ludCArIHVybCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiWC1Gcm9tLUV4TC1BUEktR2F0ZXdheVwiOiB1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYXJzZUZlZWQoY29uZikge1xyXG4gICAgcmV0dXJuIHJlYWRGZWVkKGNvbmYuZmVlZFVybCkudGhlbihmdW5jdGlvbihyZXMpIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhjb25mLmZlZWRVcmwpO1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGNvbmYuZmVlZEZpbHRlcik7XHJcbiAgICAgIHZhciBwYXR0ID0gL15lbnRyeVxcLnxeaXRlbVxcLi9pO1xyXG4gICAgICB2YXIgZmlsdGVyZWRSZXN1bHRzID0gcmVzLmRhdGEuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIHJldHZhbCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChpdGVtLnB1YkRhdGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgIGl0ZW0ucHViRGF0ZSA9IGRtO1xyXG4gICAgICAgICAgcmVzLmRhdGEuaXRlbXNbaW5kZXhdLnB1YkRhdGUgPSBkbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogbm8gZmlsdGVyIGNvbmZpZ3VyZWQgKi9cclxuICAgICAgICBpZiAoY29uZi5mZWVkRmlsdGVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZi5mZWVkRmlsdGVyLmZvckVhY2goZnVuY3Rpb24oZikge1xyXG4gICAgICAgICAgaWYgKHBhdHQudGVzdChmLnBhcmFtKSkge1xyXG4gICAgICAgICAgICB2YXIgZmYgPSBmLnBhcmFtLnJlcGxhY2UocGF0dCwgXCJcIik7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1bZmZdKSkge1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtW2ZmXS5pbmRleE9mKGYudmFsdWUpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR2YWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbVtmZl0gPT0gZi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvKiBmaWx0ZXIgb2xkIGl0ZW1zICovXHJcbiAgICAgICAgaWYgKGZlZWRkYXlzb2xkIDwgTWF0aC5jZWlsKGRtLmdldFRpbWUoKSAtIG5ldyBEYXRlKGl0ZW0ucHViRGF0ZSkuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSkge1xyXG4gICAgICAgICAgcmV0dmFsID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmV0dmFsO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZpbHRlcmVkUmVzdWx0cztcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBoYW5kbGUgZXJyb3JzXHJcbiAgICB9KTs7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzb3J0RmVlZChmZWVkcykge1xyXG4gICAgLy9yZXR1cm4gZmVlZHMuc29ydChjb21wYXJlRGF0ZXMpO1xyXG4gICAgcmV0dXJuIGZlZWRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnB1YkRhdGUpO1xyXG4gICAgICB2YXIgZGF0ZUIgPSBuZXcgRGF0ZShiLnB1YkRhdGUpO1xyXG4gICAgICBpZiAoZGF0ZUEuZ2V0VGltZSgpID09PSBkbS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBkYXRlQSA9IG5ldyBEYXRlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRlQi5nZXRUaW1lKCkgPT09IGRtLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGRhdGVCID0gbmV3IERhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZWFkRmVlZENvbmZpZzogcmVhZEZlZWRDb25maWcsXHJcbiAgICByZWFkRmVlZDogcmVhZEZlZWQsXHJcbiAgICBwYXJzZUZlZWQ6IHBhcnNlRmVlZCxcclxuICAgIHNvcnRGZWVkOiBzb3J0RmVlZFxyXG4gIH07XHJcbn1dO1xyXG4iLCJpbXBvcnQgZmVlZGJhY2tTZXJ2aWNlSFRNTCBmcm9tICcuL2ZlZWRiYWNrU2VydmljZS5odG1sJ1xyXG5pbXBvcnQgRGlhbG9nQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYWwvZGlhbG9nJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWRiYWNrU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJG1kRGlhbG9nKSB7XHJcbiAgICB0aGlzLm1kRGlhbG9nID0gJG1kRGlhbG9nO1xyXG4gIH1cclxuXHJcbiAgc2hvdygkZXZlbnQgPSBudWxsLCBmZWVkYmFja0RpYWxvZ0hUTUwgPSBudWxsLCBmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPSBudWxsKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoZmVlZGJhY2tEaWFsb2dIVE1MID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgZGlhbG9nIGluc3RhbnRpYXRlZCcpO1xyXG4gICAgICBmZWVkYmFja0RpYWxvZ0hUTUwgPSBmZWVkYmFja1NlcnZpY2VIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBkaWFsb2cgY29udHJvbGxlciBpbnN0YW50aWF0ZWQnKTtcclxuICAgICAgZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyID0gRGlhbG9nQ29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1kRGlhbG9nLnNob3coe1xyXG4gICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcclxuICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgIHRlbXBsYXRlOiBmZWVkYmFja0RpYWxvZ0hUTUwsXHJcbiAgICAgIGNvbnRyb2xsZXI6IGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlclxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5GZWVkYmFja1NlcnZpY2UuJGluamVjdCA9IFsnJG1kRGlhbG9nJ107XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckxvY2F0aW9uc1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJGNvbXBpbGUsICRtZFRvYXN0LCAkc2NlLCAkdHJhbnNsYXRlLCAkdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgICAgIHRoaXMuc2NlID0gJHNjZTtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy5jb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICAgICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMudmlkID0gd2luZG93LmFwcENvbmZpZy52aWQ7XHJcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlU2VydmljZUV2ZW50SGFuZGxlciA9IHRoaXMucm9vdFNjb3BlLiRvbignJHRyYW5zbGF0ZUxvYWRpbmdFbmQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT4gdHJhbnNsYXRpb24gbG9hZGVkIDw9PT09PT09PT09XCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgZmlsdGVyTG9jYXRpb25zKHBueF9yZWNvcmQpIHtcclxuICAgICAgICB2YXIgYXZhaWxsaWJyYXJ5ID0gcG54X3JlY29yZC5kaXNwbGF5LmF2YWlsbGlicmFyeS5tYXAoKGxpYikgPT4geyByZXR1cm4gbGliLnNwbGl0KFwiJCRcIik7IH0pXHJcblxyXG4gICAgICAgIGF2YWlsbGlicmFyeSA9IGF2YWlsbGlicmFyeS5tYXAoKGxpYikgPT4ge1xyXG4gICAgICAgICAgICBsaWIuc2hpZnQoKTtcclxuICAgICAgICAgICAgbGliID0gbGliLm1hcCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBbcy5jaGFyQXQoMCldOiBzLnN1YnN0cigxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGliID0gbGliLnJlZHVjZSgodGFnLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFnW09iamVjdC5rZXlzKGZpZWxkKVswXV0gPSBPYmplY3QudmFsdWVzKGZpZWxkKVswXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YWdcclxuICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gbGliXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nICggdGhpcy52aWQgKVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWQgPT0gXCJKRVNVSVRTXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlicmFyeV9maWx0ZXJfYXJyYXkgPSB7XHJcbiAgICAgICAgICAgICAgICBcIktVTF9HQklCX0xJQlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiIDogZnVuY3Rpb24gKGxpYikgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpYltcIk9cIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaWJbXCJPXCJdIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwbnhfcmVjb3JkLmNvbnRyb2wucmVjb3JkaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS1UgTGV1dmVuIE1hdXJpdHMgU2FiYmUgTGlicmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9cIitkb2N1bWVudC5sb2NhdGlvbi5ob3N0K1wiL3ByaW1vLWV4cGxvcmUvZnVsbGRpc3BsYXk/ZG9jaWQ9PCNyZWNvcmRpZD4mY29udGV4dD1MJnZpZD1LVUxldXZlbiZzZWFyY2hfc2NvcGU9QUxMX0NPTlRFTlQmaXNGcmJyPXRydWUmdGFiPWFsbF9jb250ZW50X3RhYiZub0xvZ2luPXRydWVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiS0FET0NfS0FET0NfTElCXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCIgOiBmdW5jdGlvbiAobGliKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGliW1wiT1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpYltcIk9cIl0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBueF9yZWNvcmQuY29udHJvbC5yZWNvcmRpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLQURPQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6ICBcImh0dHBzOi8vXCIrZG9jdW1lbnQubG9jYXRpb24uaG9zdCtcIi9wcmltby1leHBsb3JlL2Z1bGxkaXNwbGF5P2RvY2lkPTwjcmVjb3JkaWQ+JmNvbnRleHQ9TCZ2aWQ9S0FET0Mmc2VhcmNoX3Njb3BlPUFMTF9DT05URU5UJmlzRnJicj10cnVlJnRhYj1hbGxfY29udGVudF90YWJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiQU5FVF9VQS1DU1RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIiA6IGZ1bmN0aW9uIChsaWIpIHsgcmV0dXJuIHBueF9yZWNvcmQuc2VhcmNoLmFkZHNyY3JlY29yZGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUnV1c2Jyb2VjIEluc3RpdHV0ZSBMaWJyYXJ5IOKAkyBVbml2ZXJzaXR5IG9mIEFudHdlcnBcIixcclxuICAgICAgICAgICAgICAgICAgICAvL1widXJsXCI6IFwiaHR0cHM6Ly9hbmV0LmJlL3JlY29yZC9vcGFjYW5ldC88I3JlY29yZGlkPlwiXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2FuZXQuYmUvcmVjb3JkL3VhbnR3ZXJwZW4vb3BhY3VhbnR3ZXJwZW4vYzpsdmQ6PCNyZWNvcmRpZD4vTlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhdmFpbGxpYnJhcnkgPSBhdmFpbGxpYnJhcnkuZmlsdGVyKChsaWJyYXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGxpYnJhcnlbXCJMXCJdKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cgKCBPYmplY3Qua2V5cyhsaWJyYXJ5X2ZpbHRlcl9hcnJheSkgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGxpYnJhcnlfZmlsdGVyX2FycmF5KS5pbmNsdWRlcyhsaWJyYXJ5W1wiTFwiXSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHBueF9yZWNvcmQuZmFjZXRzLmxmYzEwLmluY2x1ZGVzKGxpYnJhcnlbXCJMXCJdKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGF2YWlsbGlicmFyeSA9IGF2YWlsbGlicmFyeS5tYXAoIChsaWJyYXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVjb3JkaWQgPSAgKGxpYnJhcnlfZmlsdGVyX2FycmF5W2xpYnJhcnlbXCJMXCJdXVtcImlkXCJdKShsaWJyYXJ5KTtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBsaWJyYXJ5X2ZpbHRlcl9hcnJheVtsaWJyYXJ5W1wiTFwiXV1bXCJ1cmxcIl0ucmVwbGFjZShcIjwjcmVjb3JkaWQ+XCIsIHJlY29yZGlkICk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGxpYnJhcnlfZmlsdGVyX2FycmF5W2xpYnJhcnlbXCJMXCJdXVtcIm5hbWVcIl07XHJcbiAgICAgICAgICAgICAgICBsaWJyYXJ5ID0geyBcInVybFwiOiB1cmwsIFwibmFtZVwiOiBuYW1lLCBcImNvZGVcIjpsaWJyYXJ5W1wiTFwiXSB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpYnJhcnk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlc0FyciA9IFtdO1xyXG4gICAgICAgICAgICBhdmFpbGxpYnJhcnkuZmlsdGVyKGZ1bmN0aW9uKGxpYil7XHJcbiAgICAgICAgICAgICAgLy8gdmFyIGkgPSByZXNBcnIuZmluZEluZGV4KHggPT4gKHgubmFtZSA9PSBsaWIubmFtZSAmJiB4LmNvZGUgPT0gbGliLmNvZGUgICYmIHgudXJsID09IGxpYi51cmwgKSApO1xyXG4gICAgICAgICAgICAgIHZhciBpID0gcmVzQXJyLmZpbmRJbmRleCh4ID0+ICh4Lm5hbWUgPT0gbGliLm5hbWUgJiYgeC5jb2RlID09IGxpYi5jb2RlKSApO1xyXG4gICAgICAgICAgICAgIGlmKGkgPD0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc0Fyci5wdXNoKGxpYik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF2YWlsbGlicmFyeSA9IHJlc0FyclxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF2YWlsbGlicmFyeSA9IFtdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXZhaWxsaWJyYXJ5XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuRmlsdGVyTG9jYXRpb25zU2VydmljZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRjb21waWxlJywgJyR3aW5kb3cnXTtcclxuIiwiaW1wb3J0IG1lc3NhZ2VTZXJ2aWNlSFRNTCBmcm9tICcuL21lc3NhZ2VTZXJ2aWNlLmh0bWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJGNvbXBpbGUsICRtZFRvYXN0LCAkc2NlLCAkdHJhbnNsYXRlLCAkdGltZW91dCkge1xyXG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XHJcbiAgICB0aGlzLnNjZSA9ICRzY2U7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgIHRoaXMuY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG5cclxuICAgIC8vIHRoaXMubWVzc2FnZVNlcnZpY2VFdmVudEhhbmRsZXIgPSB0aGlzLnJvb3RTY29wZS4kb24oJyR0cmFuc2xhdGVMb2FkaW5nRW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT4gdHJhbnNsYXRpb24gbG9hZGVkIDw9PT09PT09PT09XCIpO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBzaG93KG1lc3NhZ2UgPSAnJywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IG51bGw7XHJcbiAgICBsZXQgaGlkZURlbGF5ID0gb3B0aW9ucy5oaWRlRGVsYXkgfHwgMDtcclxuICAgIGxldCBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbiB8fCBudWxsO1xyXG4gICAgbGV0IGFjdGlvbkxhYmVsID0gb3B0aW9ucy5hY3Rpb25MYWJlbCB8fCAndW5rbm93bic7XHJcbiAgICBsZXQgbWVzc2FnZUtleSA9ICdsYnMuZ2VuZXJhbE1lc3NhZ2UnO1xyXG5cclxuICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2VsZi5fX3Nob3coe1xyXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgc2NvcGU6IHNjb3BlLFxyXG4gICAgICAgIGhpZGVEZWxheTogaGlkZURlbGF5LFxyXG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgIGFjdGlvbkxhYmVsOiBhY3Rpb25MYWJlbFxyXG4gICAgICB9KTsgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZWxmLnRyYW5zbGF0ZShtZXNzYWdlS2V5KS50aGVuKChtKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UgPSAobSA9PSBtZXNzYWdlS2V5IHx8IG0gPD0gMSkgPyAnJyA6IG07XHJcblxyXG4gICAgICBzZWxmLl9fc2hvdyh7XHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICBzY29wZTogc2NvcGUsXHJcbiAgICAgICAgaGlkZURlbGF5OiBoaWRlRGVsYXksXHJcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgYWN0aW9uTGFiZWw6IGFjdGlvbkxhYmVsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfX3Nob3cob3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgc2NvcGUgPSBvcHRpb25zLnNjb3BlO1xyXG4gICAgbGV0IGhpZGVEZWxheSA9IG9wdGlvbnMuaGlkZURlbGF5O1xyXG4gICAgbGV0IGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uO1xyXG4gICAgbGV0IGFjdGlvbkxhYmVsID0gb3B0aW9ucy5hY3Rpb25MYWJlbDtcclxuICAgIGxldCBtZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlO1xyXG5cclxuICAgIC8vIGlmIChtZXNzYWdlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAvLyAgIC8vIGNvZGUgdGFibGUgZW50cmllcyBjYW4gbm90IGhhdmUgZW1wdHkgZGVzY3JpcHRpb25zLlxyXG4gICAgLy8gICAvLyBtZXNzYWdlIDw9IDEgd2lsbCBub3QgYmUgZGlzcGxheWVkISEhIVxyXG4gICAgLy8gICBsZXQgbWVzc2FnZUtleSA9ICdsYnMuZ2VuZXJhbE1lc3NhZ2UnO1xyXG4gICAgLy8gICBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudChtZXNzYWdlS2V5KTtcclxuICAgIC8vICAgbWVzc2FnZSA9IChtZXNzYWdlID09IG1lc3NhZ2VLZXkgfHwgbWVzc2FnZSA8PSAxKSA/ICcnIDogbWVzc2FnZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCB0b2FzdENvbmZpZyA9IHtcclxuICAgICAgICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLmFjdGlvbkxhYmVsID0gYWN0aW9uTGFiZWw7XHJcblxyXG4gICAgICAgICAgdGhpcy5vbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLm1kVG9hc3QuaGlkZSgpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25BY3Rpb24gPSAoJGV2ZW50ID0gbnVsbCkgPT4ge1xyXG4gICAgICAgICAgICAgIGFjdGlvbi5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgLy90aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChzZWxmLmNvbXBpbGUoYDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+YCkoc2VsZi5yb290U2NvcGUpLmh0bWwoKSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKHNlbGYuY29tcGlsZShgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKShzY29wZSkuaHRtbCgpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiBtZXNzYWdlU2VydmljZUhUTUwsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AgY2VudGVyJyxcclxuICAgICAgICBoaWRlRGVsYXk6IGhpZGVEZWxheVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLm1kVG9hc3Quc2hvdyh0b2FzdENvbmZpZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnTm8gbWVzc2FnZSB0byBkaXNwbGF5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuTWVzc2FnZVNlcnZpY2UuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckY29tcGlsZScsICckbWRUb2FzdCcsICckc2NlJywgJyR0cmFuc2xhdGUnLCAnJHRpbWVvdXQnXTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93RXZlbnRMaXN0ZW5lciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkd2luZG93KSB7XHJcbiAgICAgICAgJHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByZWNlaXZlTWVzc2FnZSwgZmFsc2UpO1xyXG4gICAgICAgIGxldCBwb3NzaWJsZU9yaWdpbnNQZXJFdmVudCA9IFt7XHJcbiAgICAgICAgICAgIGV2ZW50SWQgOiBcInJldHJpZXZlX3VzZXJcIixcclxuICAgICAgICAgICAgcG9zc2libGVPcmlnaW5zIDogWyBcImh0dHA6Ly9sb2NhbGhvc3Q6OTI5MlwiLFwiaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZVwiLFwiaHR0cHM6Ly9zYW5kYm94LWV1LmFsbWEuZXhsaWJyaXNncm91cC5jb21cIl1cclxuICAgICAgICB9XVxyXG4vLyBUT0RPIDogTWFhayBjb25maWcgaGFzaCB2YW4gb3JpZ2luIGVuIGV2ZW50X2lkID0+XHJcbiAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiByZWNlaXZlTWVzc2FnZShldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyAoXCJyZWNlaXZlTWVzc2FnZSAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXCIpXHJcblxyXG4gICAgICAgICAgICBpZiAoICEgZXZlbnQuZGF0YSApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKFwiTm8gRXZlbnQgZGF0YSAhIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBvc3NpYmxlT3JpZ2luc09iaiA9IHBvc3NpYmxlT3JpZ2luc1BlckV2ZW50LmZpbmQoZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXYuZXZlbnRJZCA9PT0gZXZlbnQuZGF0YS5ldmVudF9pZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc3NpYmxlT3JpZ2luc09iaik7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJpbW9FeHBsb3JlSnd0ID0gJHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC5qd3RVdGlsU2VydmljZS5zdG9yYWdlVXRpbC5zZXNzaW9uU3RvcmFnZS5wcmltb0V4cGxvcmVKd3Q7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5ldmVudF9pZCA9PT0gXCJyZXRyaWV2ZV91c2VyXCIpIHtcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlT3JpZ2luc09iai5wb3NzaWJsZU9yaWdpbnMgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCAhICBwb3NzaWJsZU9yaWdpbnNPYmoucG9zc2libGVPcmlnaW5zLmluY2x1ZGVzKGV2ZW50Lm9yaWdpbikgICkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnNvdXJjZS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50X2lkOiBcInJldHJpZXZlX3VzZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib25DYW1wdXNcIjogdXNlci5pc09uQ2FtcHVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzTG9nZ2VkSW5cIjogdXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInViaWRcIjogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheV9uYW1lXCI6IHVzZXIuZGlzcGxheV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbFwiOiB1c2VyLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBldmVudC5vcmlnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnNvdXJjZS5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50X2lkOiBcImp3dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGFcIjogcHJpbW9FeHBsb3JlSnd0XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZXZlbnQub3JpZ2luKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbldpbmRvd0V2ZW50TGlzdGVuZXIuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckd2luZG93J107IiwiLypcclxuICBDZW50cmFsIFBhY2thZ2UgTG9hZGVyXHJcblxyXG4gIERvIE5PVCBlZGl0IHRoaXMgZmlsZS5cclxuICBBbGwgY29tcG9uZW50cyBhcmUgZGVjbGFyZWQgaW4gXCJjb21wb25lbnRzLmpzXCJcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuaW1wb3J0IFByaW1vIGZyb20gJy4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8nXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlL2hlbHBlcidcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xyXG5pbXBvcnQgVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzJ1xyXG5cclxuaW1wb3J0IHtmZWVkU2VydmljZX0gZnJvbSAnLi9mYWN0b3JpZXMvZmVlZFNlcnZpY2UnXHJcbmltcG9ydCB7ZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yfSBmcm9tICcuL2ZhY3Rvcmllcy9kYlNlYXJjaEh0dHBDYWxsSW50ZXJjZXB0b3InXHJcbmltcG9ydCB7YXBpQ2FsbEludGVyY2VwdG9yfSBmcm9tICcuL2ZhY3Rvcmllcy9hcGlDYWxsSW50ZXJjZXB0b3InXHJcbmltcG9ydCBNZXNzYWdlU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9tZXNzYWdlU2VydmljZSdcclxuaW1wb3J0IEZlZWRiYWNrU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9mZWVkYmFja1NlcnZpY2UnXHJcbmltcG9ydCBBbHRtZXRyaWNzU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9hbHRtZXRyaWNzU2VydmljZSdcclxuXHJcbmltcG9ydCBGaWx0ZXJMb2NhdGlvbnNTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL2ZpbHRlckxvY2F0aW9uc1NlcnZpY2UnXHJcblxyXG5pbXBvcnQgV2luZG93RXZlbnRMaXN0ZW5lciBmcm9tICcuL2ZhY3Rvcmllcy93aW5kb3dFdmVudExpc3RlbmVyJ1xyXG5cclxuXHJcbi8vbWFrZSBQcmltbyBwdWJsaWNcclxud2luZG93LlByaW1vID0gUHJpbW87XHJcbi8vbG9hZCBQcmltb0V4cGxvcmVyIFVJIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGlzIHJhblxyXG53aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKFByaW1vLmlzRGVidWdFbmFibGVkKCkpIHtcclxuICAgIGxldCB1aVVSTCA9ICdodHRwczovL2Nkbi5yYXdnaXQuY29tL21laG1ldGMvcHJpbW8tZXhwbG9yZS1kb20tdWkvZmMwODY4ZGYvanMvY3VzdG9tLmpzJztcclxuICAgIC8vbGV0IHVpVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9qcy9jdXN0b20uanMnO1xyXG5cclxuICAgIEhlbHBlci5sb2FkU2NyaXB0KHVpVVJMKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0luamVjdGluZyBVSScpO1xyXG4gICAgICBQcmltby5leHBsb3JlLnVpLnRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59LCAyMDAwKTtcclxuXHJcbi8vbGV0IHNlcnZpY2VzSG9zdCA9ICdodHRwOi8vMTkyLjE2OC4xMDAuMTAxOjkyOTIvJztcclxuLy9sZXQgc2VydmljZXNIb3N0ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6OTI5Mi8nO1xyXG5sZXQgc2VydmljZXNIb3N0ID0gJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvJztcclxuXHJcblxyXG5sZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2NlbnRyYWxDdXN0b20nLCBbJ25nTWF0ZXJpYWwnLCAndmNSZWNhcHRjaGEnLCdnb29nbGVBbmFseXRpY3MnXSlcclxuICAvKlxyXG4gIC8vLmNvbnN0YW50KCdzZXJ2aWNlc0hvc3QnLCAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS8nKVxyXG4gICAgLmNvbnN0YW50KCdmZWVkYmFja1NlcnZpY2VVUkwnLCAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9mZWVkYmFjaycpXHJcbiAgICAuY29uc3RhbnQoJ3JlcG9ydEFQcm9ibGVtVVJMJywgJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvcmVwb3J0X2FfcHJvYmxlbScpXHJcbiAgICAuY29uc3RhbnQoJ3JlcXVlc3RBQ29weVVSTCcsICdodHRwOi8vMTkyLjE2OC4xMDAuMTAxOjkyOTIvL3JlcXVlc3RfYV9jb3B5JylcclxuICAqL1xyXG4gIC5jb25zdGFudCgnZmVlZGJhY2tTZXJ2aWNlVVJMJywgc2VydmljZXNIb3N0ICsgJ2ZlZWRiYWNrJylcclxuICAuY29uc3RhbnQoJ3JlcG9ydEFQcm9ibGVtVVJMJywgc2VydmljZXNIb3N0ICsgJ3JlcG9ydF9hX3Byb2JsZW0nKVxyXG4gIC5jb25zdGFudCgncmVxdWVzdEFDb3B5VVJMJywgc2VydmljZXNIb3N0ICsgJ3JlcXVlc3RfYV9jb3B5JylcclxuICAuY29uc3RhbnQoJ3JlcXVlc3RBQ29weU9mRXNEb2NVUkwnLCBzZXJ2aWNlc0hvc3QgKyAnaWxsand0Zm9ybScpXHJcblxyXG4gIC5jb25maWcoKCRzY2VEZWxlZ2F0ZVByb3ZpZGVyKSA9PiB7XHJcbiAgICAkc2NlRGVsZWdhdGVQcm92aWRlci5yZXNvdXJjZVVybFdoaXRlbGlzdChbXHJcbiAgICAgICcqKidcclxuICAgIF0pO1xyXG4gIH0pXHJcbiAgLnJ1bigoJHRlbXBsYXRlQ2FjaGUsICRyb290U2NvcGUpID0+IHtcclxuICAgIC8vJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC9mdWxsVmlldy9mdWxsLXZpZXcuaHRtbCcsIGZ1bGxWaWV3SFRNTCk7XHJcbiAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vaG90a2V5cy1qc0AyLjAuOC9kaXN0L2hvdGtleXMubWluLmpzJykudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdob3RrZXlzLmpzIGxvYWRlZCcpO1xyXG4gICAgfSk7XHJcbiAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly9kMWJ4aDh1YXMxbW53Ny5jbG91ZGZyb250Lm5ldC9hc3NldHMvZW1iZWQuanM/JyArIERhdGUubm93KCkpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnYWx0bWVyaWNzIGVtYmVkLmpzIGxvYWRlZCcpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAod2luZG93LmFwcENvbmZpZy52aWQgPT0gJ0VDQicgfHwgd2luZG93LmFwcENvbmZpZy52aWQuaW5jbHVkZXMoJ0tVTGV1dmVuJykpIHtcclxuICAgICAgLy9DcmVhdGUgdGhlIGNlbnRyYWxDdXN0b20gbW9kdWxlO1xyXG4gICAgICBpZiAod2luZG93LmFwcENvbmZpZy52aWQgPT0gJ0VDQicpIHtcclxuICAgICAgICB3aW5kb3cuYnJvd3ppbmUgPSB7XHJcbiAgICAgICAgICBhcGk6IFwiaHR0cHM6Ly9wdWJsaWMtYXBpLnRoaXJkaXJvbi5jb20vcHVibGljL3YxL2xpYnJhcmllcy8xNjI0XCIsXHJcbiAgICAgICAgICBhcGlLZXk6IFwiZTcxZDFjMzEtNzkzOC00NzBhLThiZTItYTZlMzUxZTBjMDAxXCIsXHJcbiAgICAgICAgICBqb3VybmFsQnJvd1ppbmVXZWJMaW5rVGV4dDogXCJWaWV3IEpvdXJuYWwgQ29udGVudHNcIixcclxuICAgICAgICAgIGFydGljbGVCcm93WmluZVdlYkxpbmtUZXh0OiBcIlZpZXcgSXNzdWUgQ29udGVudHNcIixcclxuICAgICAgICAgIGFydGljbGVQREZEb3dubG9hZExpbmtFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgYXJ0aWNsZVBERkRvd25sb2FkTGlua1RleHQ6IFwiRG93bmxvYWQgUERGXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHdpbmRvdy5hcHBDb25maWcudmlkLmluY2x1ZGVzKCdLVUxldXZlbicpKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsZSA9IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnRlcmZhY2VMYW5ndWFnZTtcclxuICAgICAgICB2YXIgbG9jYWxlX3RleHQgPSB7XHJcbiAgICAgICAgICAnbmxfQkUnOiB7XHJcbiAgICAgICAgICAgICdqb3VybmFsJzogXCJCZWtpamsgZGUgaW5ob3VkIHZhbiBoZXQgdGlqZHNjaHJpZnRcIixcclxuICAgICAgICAgICAgJ2lzc3VlJzogXCJCZWtpamsgZGUgaW5ob3VkIHZhbiBoZXQgbnVtbWVyXCIsXHJcbiAgICAgICAgICAgICdkb3dubG9hZCc6IFwiRG93bmxvYWQgUERGXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnZW5fVVMnOiB7XHJcbiAgICAgICAgICAgICdqb3VybmFsJzogXCJWaWV3IEpvdXJuYWwgQ29udGVudHNcIixcclxuICAgICAgICAgICAgJ2lzc3VlJzogXCJWaWV3IElzc3VlIENvbnRlbnRzXCIsXHJcbiAgICAgICAgICAgICdkb3dubG9hZCc6IFwiRG93bmxvYWQgUERGXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5icm93emluZSA9IHtcclxuICAgICAgICAgIGFwaTogXCJodHRwczovL3B1YmxpYy1hcGkudGhpcmRpcm9uLmNvbS9wdWJsaWMvdjEvbGlicmFyaWVzLzE3ODFcIixcclxuICAgICAgICAgIGFwaUtleTogXCIxMGVkNWQyYS00ZmYwLTQ1NDEtODU3ZC1iOGMzNmEwMWYzZWRcIixcclxuICAgICAgICAgIGpvdXJuYWxCcm93WmluZVdlYkxpbmtUZXh0OiBsb2NhbGVfdGV4dFtsb2NhbGVdWydqb3VybmFsJ10sXHJcbiAgICAgICAgICBhcnRpY2xlQnJvd1ppbmVXZWJMaW5rVGV4dDogbG9jYWxlX3RleHRbbG9jYWxlXVsnaXNzdWUnXSxcclxuICAgICAgICAgIGFydGljbGVQREZEb3dubG9hZExpbmtFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgYXJ0aWNsZVBERkRvd25sb2FkTGlua1RleHQ6IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ2Rvd25sb2FkJ10sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2Jyb3d6aW5lLWFkYXB0ZXJzL3ByaW1vL2Jyb3d6aW5lLXByaW1vLWFkYXB0ZXIuanMnKS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYnJvd3ppbmUtcHJpbW8tYWRhcHRlci5qcyBsb2FkZWQnKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAuZmFjdG9yeSgnRmVlZFNlcnZpY2UnLCBmZWVkU2VydmljZSlcclxuICAuc2VydmljZSgnQWx0bWV0cmljc1NlcnZpY2UnLCBBbHRtZXRyaWNzU2VydmljZSlcclxuICAuc2VydmljZSgnTWVzc2FnZVNlcnZpY2UnLCBNZXNzYWdlU2VydmljZSlcclxuICAuc2VydmljZSgnRmVlZGJhY2tTZXJ2aWNlJywgRmVlZGJhY2tTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCdGaWx0ZXJMb2NhdGlvbnNTZXJ2aWNlJywgRmlsdGVyTG9jYXRpb25zU2VydmljZSlcclxuICAuc2VydmljZSgnV2luZG93RXZlbnRMaXN0ZW5lcicsIFdpbmRvd0V2ZW50TGlzdGVuZXIpXHJcblxyXG4gIC5mYWN0b3J5KCdkYlNlYXJjaEh0dHBDYWxsSW50ZXJjZXB0b3InLCBkYlNlYXJjaEh0dHBDYWxsSW50ZXJjZXB0b3IpXHJcbiAgLmZhY3RvcnkoJ2FwaUNhbGxJbnRlcmNlcHRvcicsIGFwaUNhbGxJbnRlcmNlcHRvcilcclxuICAuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsICgkaHR0cFByb3ZpZGVyKSA9PiB7ICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ2FwaUNhbGxJbnRlcmNlcHRvcicpOyB9XSk7XHJcblxyXG4gIFxyXG5cclxuLy9pbnRlcmNlcHQgYXBpIGNhbGxzIGZvciBkYXRhYmFzZSBzZWFyY2ggYW5kIGNoYW5nZSB0byBLVUwgKG9ubHkgcmVnaW9uYWwgdmlld3MpXHJcbnZhciByZWdfdmlld3MgPSBbXCJLVUxldXZlblwiLCBcIktVTGV1dmVuX1RNT1JFTVwiLCBcIktVTGV1dmVuX1RNT1JFS1wiLCBcIktVTGV1dmVuX1VDTExcIiwgXCJLVUxldXZlbl9MVUNBXCIsIFwiS1VMZXV2ZW5fT0RJU0VFXCJdO1xyXG5pZiAocmVnX3ZpZXdzLmluY2x1ZGVzKHdpbmRvdy5hcHBDb25maWcudmlkKSkge1xyXG4gIGFwcC5jb25maWcoWyckaHR0cFByb3ZpZGVyJywgKCRodHRwUHJvdmlkZXIpID0+IHsgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yJyk7IH1dKTtcclxufVxyXG5cclxuLy9lbmFibGUgZ29vZ2xlIHRhZyBtYW5hZ2VyXHJcbnZhciByZWdfdmlld3MgPSBbXCJLVUxldXZlblwiLCBcIktVTGV1dmVuX1RNT1JFTVwiLCBcIktVTGV1dmVuX1RNT1JFS1wiLCBcIktVTGV1dmVuX1VDTExcIiwgXCJLVUxldXZlbl9MVUNBXCIsIFwiS1VMZXV2ZW5fT0RJU0VFXCIsXHJcbiBcIkZBUk9cIiwgXCJVQ0xMXCIsIFwiTFVDQVwiLCBcIk9ESVNFRVwiLCBcIlRNT1JFS1wiICwgXCJUTU9SRU1cIiwgXCJWSVZFU19LQVRIT1wiLCBcIlZJVkVTX0tIQk9cIl07XHJcbmlmIChyZWdfdmlld3MuaW5jbHVkZXMod2luZG93LmFwcENvbmZpZy52aWQpKSB7XHJcbiAgYXBwLnZhbHVlKCdhbmFseXRpY3NPcHRpb25zJywge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHNpdGVJZDogJ0dUTS1XUjI1OU1YJyxcclxuICAgIGRlZmF1bHRUaXRsZTogJ0Rpc2NvdmVyeSBTZWFyY2gnXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vQ29udGFpbnMgdGhlIGFmdGVyIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIGluamVjdGVkXHJcbmxldCBhZnRlckNvbXBvbmVudHMgPSB7fTtcclxuXHJcbi8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcclxuLy9pbmplY3RlZFxyXG5jb25zb2xlLmxvZygnTG9hZGluZyBjZW50cmFsQ3VzdG9tIGNvbXBvbmVudHMnKTtcclxuQ29tcG9uZW50cy5hbGwuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY29tcG9uZW50Lm5hbWUpXHJcbiAgaWYgKGNvbXBvbmVudC5lbmFibGVkKSB7XHJcbiAgICBpZiAoY29tcG9uZW50LmFwcGVuZFRvKSB7XHJcbiAgICAgIGxldCBlbGVtZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dIHx8IFtdO1xyXG4gICAgICAvL2VsZW1lbnRzLnB1c2goY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgICBlbGVtZW50cy5wdXNoKHtcclxuICAgICAgICAnbmFtZSc6IGNvbXBvbmVudC5uYW1lLFxyXG4gICAgICAgICdlbmFibGVJblZpZXcnOiBjb21wb25lbnQuZW5hYmxlSW5WaWV3XHJcbiAgICAgIH0pO1xyXG4gICAgICBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSA9IGVsZW1lbnRzO1xyXG5cclxuICAgIH1cclxuICAgIGFwcC5jb25zdGFudCgnYWZ0ZXJDb21wb25lbnRzJywgYWZ0ZXJDb21wb25lbnRzKTtcclxuICAgIGFwcC5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUudG9DYW1lbENhc2UoKSwgY29tcG9uZW50LmNvbmZpZyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnNvbGUubG9nKCdSZXBsYWNlIFRlbXBsYXRlcycpO1xyXG5UZW1wbGF0ZXMuYWxsLmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XHJcbiAgY29uc29sZS5sb2codGVtcGxhdGUuaWQpXHJcbiAgYXBwLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcclxuICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCh0ZW1wbGF0ZS5pZCwgdGVtcGxhdGUudGVtcGxhdGUpO1xyXG4gIH0pXHJcbn0pXHJcblxyXG4vL0luamVjdCBwbGFjZSBob2xkZXJzIGludG8gdGhlIGFmdGVyIGNvbXBvbmVudHNcclxuT2JqZWN0LmtleXMoYWZ0ZXJDb21wb25lbnRzKS5mb3JFYWNoKChjb21wb25lbnQsIGkpID0+IHtcclxuICBsZXQgc3ViQ29tcG9uZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnRdO1xyXG5cclxuICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC50b0NhbWVsQ2FzZSgpLCB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogc3ViQ29tcG9uZW50cy5tYXAobSA9PiBgPCR7bS5uYW1lfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke20ubmFtZX0+YCkuam9pbihcIlwiKVxyXG4gIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IEV4cGxvcmUgZnJvbSAnLi9wcmltby9leHBsb3JlJ1xyXG5pbXBvcnQgUmVjb3JkcyBmcm9tICcuL3ByaW1vL3JlY29yZHMnXHJcbmltcG9ydCBGYWNldHMgZnJvbSAnLi9wcmltby9mYWNldHMnXHJcbmltcG9ydCBWaWV3IGZyb20gJy4vcHJpbW8vdmlldydcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9wcmltby91c2VyJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vcHJpbW8vZXhwbG9yZS9oZWxwZXInXHJcblxyXG4vKipcclxuICogUHJpbW8gbWFpbiBlbnRyeSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbW8ge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybiB2ZXJzaW9uIGluZm9ybWF0aW9uXHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcclxuICAgIGxldCBfdmVyc2lvbiA9IFwiMC4wLjEwXCI7XHJcbiAgICByZXR1cm4gYExpYnJhcnk6JHtfdmVyc2lvbn0gLSBQcmltbzoke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fVmVyc2lvbl9OdW1iZXJ9OiR7d2luZG93LmFwcENvbmZpZ1snc3lzdGVtLWNvbmZpZ3VyYXRpb24nXS5Qcmltb19Ib3RGaXhfTnVtYmVyfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBoYXMgcmFuXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gSGVscGVyLmlzRGVidWdFbmFibGVkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaWQgdGhlIHNjcmlwdCByYW4gb24gYSBQcmltbyBzaXRlXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBzdGF0aWMgaXNQcmltb0F2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiBIZWxwZXIuaXNQcmltb0F2YWlsYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIHByb3h5IGNsYXNzXHJcbiAgICogQHJldHVybiB7RXhwbG9yZX1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGV4cGxvcmUoKSB7XHJcbiAgICByZXR1cm4gRXhwbG9yZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIHJlY29yZHNcclxuICAgKiBAcmV0dXJuIHtSZWNvcmRzfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgcmVjb3Jkcygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgUmVjb3Jkcyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cykpO1xyXG4gICAgfSlcclxuICAgIC8vcmV0dXJuIG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIGZhY2V0c1xyXG4gICAqIEByZXR1cm4ge0ZhY2V0c31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGZhY2V0cygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XHJcbiAgICB9KVxyXG4gICAgLy9yZXR1cm4gbmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHZpZXcgcmVsYXRlZCBtZXRhZGF0YVxyXG4gICAqIEByZXR1cm4ge1ZpZXd9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCB2aWV3KCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgVmlldygpKTtcclxuICAgIH0pXHJcbiAgICAvL3JldHVybiBuZXcgVmlldygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byB1c2VyIHJlbGF0ZWQgbWV0YWRhdGFcclxuICAgKiBAcmV0dXJuIHtVc2VyfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdXNlcigpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIEhlbHBlci51c2VyRGV0YWlsc0hUVFAoKS50aGVuKCh1c2VyRGV0YWlscyk9PntcclxuICAgICAgICBIZWxwZXIudXNlckZpbmVzSFRUUCgpLnRoZW4oKHVzZXJGaW5lcykgPT4ge1xyXG4gICAgICAgICAgSGVscGVyLnVzZXJMb2Fuc0hUVFAoKS50aGVuKCh1c2VyTG9hbnMpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKG5ldyBVc2VyKHtkZXRhaWxzOiB1c2VyRGV0YWlscywgZmluZXM6IHVzZXJGaW5lcywgbG9hbnM6IHVzZXJMb2Fuc30pKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuLy90aGlzIGlzIHByb3h5IGNsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvcmUge1xyXG4gIHN0YXRpYyBnZXQgY29tcG9uZW50cygpIHtcclxuICAgIGxldCBjID0gbmV3IENvbXBvbmVudHMoKTtcclxuICAgIEhlbHBlci5jb21wb25lbnROYW1lcy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xyXG4gICAgICBjLmFkZChzZWxlY3Rvcik7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBjO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCB1aSgpIHtcclxuICAgIGlmICh0aGlzLl91aSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgaXMgYSBzdHViIGZ1bmN0aW9uIGNhbGwgXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIHRvIGFjdGl2YXRlIFVJJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fdWk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGhlbHBlcigpIHtcclxuICAgIHJldHVybiBIZWxwZXI7XHJcbiAgfVxyXG59XHJcbiIsInZhciBjc3NTZWxlY3RvckdlbmVyYXRvciA9IG5ldyhyZXF1aXJlKCcuLi8uLi92ZW5kb3IvY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcycpKS5Dc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXInXHJcblxyXG5jbGFzcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpe1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJsaW5rKCl7XHJcbiAgICBIZWxwZXIuYmxpbmsodGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgY3NzUGF0aCgpe1xyXG4gICAgcmV0dXJuIGNzc1NlbGVjdG9yR2VuZXJhdG9yLmdldFNlbGVjdG9yKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5sb2NhbE5hbWU7XHJcbiAgfVxyXG5cclxuICBzY29wZSgpe1xyXG4gICAgaWYgKEhlbHBlci5pc0RlYnVnRW5hYmxlZCgpKXtcclxuICAgICAgcmV0dXJuIGFuZ3VsYXIuZWxlbWVudCh0aGlzLmVsZW1lbnQpLnNjb3BlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgcnVuIFwiYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKClcIiBmaXJzdCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3RybCgpe1xyXG4gICAgbGV0IGMgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5jb250cm9sbGVyKHRoaXMubmFtZSk7XHJcbiAgICBpZiAoYykge1xyXG4gICAgICByZXR1cm4gYztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2luZyBhbHRlcm5hdGl2ZSBtZXRob2QgdG8gZ2V0IGNvbnRyb2xsZXInKTtcclxuICAgICAgbGV0IHNjb3BlID0gdGhpcy5zY29wZSgpO1xyXG4gICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICBsZXQgc2NvcGVDaGlsZCA9IHNjb3BlLiQkY2hpbGRUYWlsO1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJyRjdHJsJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLiRjdHJsXHJcbiAgICAgICAgfSBlbHNlIGlmKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnY3RybCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZS5jdHJsXHJcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCckY3RybCcpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuJGN0cmw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCdjdHJsJykpe1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC5jdHJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vICRjdHJsIGRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudHMge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICB0aGlzLl9jb21wb25lbnRzID0ge307XHJcbiAgfVxyXG5cclxuICBhZGQoc2VsZWN0b3IpIHtcclxuICAgIGxldCBlbGVtZW50cyA9IEhlbHBlci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgIGxldCBlbGVtZW50c0FycmF5ID0gdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gfHwgW107XHJcblxyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgICAgZWxlbWVudHNBcnJheS5wdXNoKG5ldyBDb21wb25lbnQoZWxlbWVudCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gPSBlbGVtZW50c0FycmF5O1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50c0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0KHNlbGVjdG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50c1tzZWxlY3Rvcl0gfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIGtleXMoKXtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcclxuICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XHJcbiAgICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYW1lID09PSAnTkdfRU5BQkxFX0RFQlVHX0lORk8hJyB8fCB0eXBlb2YoYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1sb2dvJykpLnNjb3BlKCkpICE9ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc1ByaW1vQXZhaWxhYmxlKCkge1xyXG4gICAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mKHdpbmRvdy5hbmd1bGFyKSkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJpbW8tZXhwbG9yZScpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBjb21wb25lbnROYW1lcygpIHtcclxuICAgICAgICBsZXQgdGFncyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSk7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudE5hbWVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgdGFnIG9mIHRhZ3MpIHtcclxuICAgICAgICAgICAgbGV0IHRhZ05hbWUgPSB0YWcubG9jYWxOYW1lO1xyXG4gICAgICAgICAgICBpZiAoL15wcm0tLy50ZXN0KHRhZ05hbWUpIHx8IC9ecHJpbW8tLy50ZXN0KHRhZ05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWVzLmluY2x1ZGVzKHRhZ05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZXMucHVzaCh0YWdOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50TmFtZXMgPSBjb21wb25lbnROYW1lcy5zb3J0KCkuZmlsdGVyKChlLCBpLCBhKSA9PiBpID09PSBhLmZpbmRJbmRleCgoZTIpID0+IGUgPT09IGUyKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudE5hbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbmplY3RvcigpIHtcclxuICAgICAgbGV0IGMgPSBQcmltby5leHBsb3JlLmNvbXBvbmVudHMuZ2V0KCdwcmltby1leHBsb3JlJyk7XHJcbiAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IHByaW1vRXhwbG9yZSA9IGFuZ3VsYXIuZWxlbWVudChjWzBdLmVsZW1lbnQpO1xyXG4gICAgICAgICAgbGV0IGluamVjdG9yICAgICA9IHByaW1vRXhwbG9yZS5pbmplY3RvcigpO1xyXG4gICAgICAgICAgaWYgKGluamVjdG9yKXtcclxuICAgICAgICAgICAgcmV0dXJuIGluamVjdG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGh0dHAoKSB7XHJcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcclxuICAgICAgaWYgKGluamVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGggPSBpbmplY3Rvci5nZXQoJyRodHRwJyk7XHJcbiAgICAgICAgaWYgKGgpIHtcclxuICAgICAgICAgIHJldHVybiBoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBsb2FkU2NyaXB0KHNjcmlwdFVSTCkge1xyXG4gICAgICBpZiAod2luZG93LmFuZ3VsYXIpIHtcclxuICAgICAgICAgIGxldCBhcHBJbmplY3RvciA9IGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsJ2FuZ3VsYXJMb2FkJ10pO1xyXG4gICAgICAgICAgaWYgKGFwcEluamVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGFuZ3VsYXJMb2FkID0gYXBwSW5qZWN0b3IuZ2V0KCdhbmd1bGFyTG9hZCcpO1xyXG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJMb2FkLmxvYWRTY3JpcHQoc2NyaXB0VVJMKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm9vdFNjb3BlKCkge1xyXG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XHJcbiAgICAgIGlmIChpbmplY3Rvcikge1xyXG4gICAgICAgICAgbGV0IHJvb3RTY29wZSAgICA9IGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgaWYgKHJvb3RTY29wZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcm9vdFNjb3BlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpIHtcclxuICAgICAgbGV0IHJvb3RTY29wZSA9IHRoaXMucm9vdFNjb3BlKCk7XHJcbiAgICAgIGlmIChyb290U2NvcGUpIHtcclxuICAgICAgICByZXR1cm4gcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqd3REYXRhKCkge1xyXG4gICAgICBsZXQgdVNNUyA9IHRoaXMudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xyXG4gICAgICBpZiAodVNNUykge1xyXG4gICAgICAgIGxldCBqd3REYXRhID0gdVNNUy5qd3RVdGlsU2VydmljZS5nZXREZWNvZGVkVG9rZW4oKSB8fCB7fTtcclxuICAgICAgICByZXR1cm4gand0RGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyRGV0YWlscygpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS4kbG9jYWxGb3JhZ2UuZ2V0SXRlbSgndXNlckRldGFpbHMnKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzSFRUUCgpIHtcclxuICAgICAgbGV0IHZpZXdDb2RlID0gdGhpcy5qd3REYXRhKCkudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoYC9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL3VzZXJzZXR0aW5ncz92aWQ9JHt2aWV3Q29kZX1gKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMuZGF0YSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckZpbmVzSFRUUCgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvZmluZXMnKS50aGVuKHVzZXJGaW5lcyA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJGaW5lcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpbmVzID0gZGF0YS5kYXRhLmZpbmVzO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmaW5lcy5maW5lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gZmluZXMnKTtcclxuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJMb2Fuc0hUVFAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2xvYW5zJykudGhlbih1c2VyTG9hbnMgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyTG9hbnMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsb2FucyA9IGRhdGEuZGF0YS5sb2FucztcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobG9hbnMubG9hbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGxvYW5zJyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBibGluayhjb21wb25lbnQsIG51bWJlck9mQmxpbmtzID0gNCkge1xyXG4gICAgICAgIGxldCBpbnRlcnZhbElkID0gbnVsbDtcclxuICAgICAgICBsZXQgYm9yZGVyRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xyXG4gICAgICAgIGxldCBib3JkZXJTZWxlY3RvciA9IGNvbXBvbmVudC5lbGVtZW50LmNzc1BhdGggKyBpbmRleCArICdSZWN0JztcclxuXHJcbiAgICAgICAgbGV0IGNyZWF0ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UmVjdCA9IGNvbXBvbmVudC5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGJvcmRlclNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnRvcCA9IGVsZW1lbnRSZWN0LnRvcCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnRSZWN0LmhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLndpZHRoID0gZWxlbWVudFJlY3Qud2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudFJlY3QubGVmdCArICdweCc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvcmRlckVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJvcmRlclNlbGVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVtb3ZlQm9yZGVyRWxlbWVudCA9ICgpID0+IHtcclxuICAgICAgICAgIGlmIChib3JkZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGJvcmRlckVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmxpbmtCb3JkZXJFbGVtZW50ID0gKG51bWJlck9mQmxpbmtzID0gNCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkJsaW5rcyA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUJvcmRlckVsZW1lbnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICgobnVtYmVyT2ZCbGlua3MgJSAyKSA9PSAwKSA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZkJsaW5rcy0tO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChibGlua0JvcmRlckVsZW1lbnQsIDEwMDAsIG51bWJlck9mQmxpbmtzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9yZGVyRWxlbWVudCA9IGNyZWF0ZUJvcmRlckVsZW1lbnQoKTtcclxuICAgICAgICBibGlua0JvcmRlckVsZW1lbnQobnVtYmVyT2ZCbGlua3MpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldHMge1xyXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50cykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZmFjZXRzKGNvbXBvbmVudHMpO1xyXG4gICAgfVxyXG4gICAgX2ZhY2V0cyhjb21wb25lbnRzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldC1hZnRlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCBmYWNldHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZmFjZXRzO1xyXG4gICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGZhY2V0cycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvcmRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zKGNvbXBvbmVudHMpO1xyXG4gICAgfVxyXG4gICAgX2l0ZW1zKGNvbXBvbmVudHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLXNlYXJjaC1yZXN1bHQtbGlzdC1hZnRlcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmwoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3RybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5pdGVtbGlzdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJ0cnkgYWdhaW5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IHJlY29yZHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZGF0YTtcclxuICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBpdGVtcycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXIgPSBfc2tlbFVzZXIpIHtcclxuICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgIGxldCBqd3REYXRhID0gSGVscGVyLmp3dERhdGEoKTtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBqd3REYXRhLnVzZXIgfHwgJycsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZGV0YWlscy5lbWFpbCB8fCAnJyxcclxuICAgICAgICBuYW1lOiBqd3REYXRhLnVzZXJOYW1lIHx8ICdHdWVzdCcsXHJcbiAgICAgICAgZGlzcGxheV9uYW1lOiB1U21zLmdldFVzZXJOYW1lRm9yRGlzcGxheSgpLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46ICgpID0+IHVTbXMuZ2V0VXNlck5hbWUoKS5sZW5ndGggPiAwLFxyXG4gICAgICAgIGlzT25DYW1wdXM6ICgpID0+IGp3dERhdGEub25DYW1wdXMgPT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgZmluZXM6IHVzZXIuZmluZXMsXHJcbiAgICAgICAgbG9hbnM6IHVzZXIubG9hbnNcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBfc2tlbFVzZXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkZXRhaWxzOiB7fSxcclxuICAgICAgZmluZXM6IHt9LFxyXG4gICAgICBsb2Fuczoge31cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgbGV0IHVTbXMgPSBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpO1xyXG4gICAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvZGU6IGp3dERhdGEudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddLFxyXG4gICAgICAgIGluc3RpdHV0aW9uOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IGp3dERhdGEudmlld0luc3RpdHV0aW9uQ29kZSxcclxuICAgICAgICAgICAgbmFtZTogd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmluc3RpdHV0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnRlcmZhY2VMYW5ndWFnZTogdVNtcy5nZXRVc2VyTGFuZ3VhZ2UoKSB8fCB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW50ZXJmYWNlTGFuZ3VhZ2UsXHJcbiAgICAgICAgaXA6IHtcclxuICAgICAgICAgIGFkZHJlc3M6IGp3dERhdGEuaXBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIENzc1NlbGVjdG9yR2VuZXJhdG9yLCByb290LFxyXG4gICAgaW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xyXG5cclxuICBDc3NTZWxlY3RvckdlbmVyYXRvciA9IChmdW5jdGlvbigpIHtcclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5kZWZhdWx0X29wdGlvbnMgPSB7XHJcbiAgICAgIHNlbGVjdG9yczogWydpZCcsICdjbGFzcycsICd0YWcnLCAnbnRoY2hpbGQnXVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBDc3NTZWxlY3RvckdlbmVyYXRvcihvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcclxuICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vcHRpb25zID0ge307XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyh0aGlzLmRlZmF1bHRfb3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIGtleSwgcmVzdWx0cywgdmFsO1xyXG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdHMgPSBbXTtcclxuICAgICAgZm9yIChrZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIHZhbCA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0X29wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMub3B0aW9uc1trZXldID0gdmFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuaXNFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gISEoKGVsZW1lbnQgIT0gbnVsbCA/IGVsZW1lbnQubm9kZVR5cGUgOiB2b2lkIDApID09PSAxKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFBhcmVudHMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBjdXJyZW50X2VsZW1lbnQsIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0gW107XHJcbiAgICAgIGlmICh0aGlzLmlzRWxlbWVudChlbGVtZW50KSkge1xyXG4gICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaXNFbGVtZW50KGN1cnJlbnRfZWxlbWVudCkpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRfZWxlbWVudCk7XHJcbiAgICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBjdXJyZW50X2VsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFRhZ1NlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZUl0ZW0oZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2FuaXRpemVJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICB2YXIgY2hhcmFjdGVycztcclxuICAgICAgY2hhcmFjdGVycyA9IChpdGVtLnNwbGl0KCcnKSkubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlcikge1xyXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09ICc6Jykge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgKCc6Jy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKSArIFwiIFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoL1sgIVwiIyQlJicoKSorLC5cXC87PD0+P0BcXFtcXFxcXFxdXmB7fH1+XS8udGVzdChjaGFyYWN0ZXIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyBjaGFyYWN0ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBlc2NhcGUoY2hhcmFjdGVyKS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY2hhcmFjdGVycy5qb2luKCcnKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldElkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBpZCwgc2FuaXRpemVkX2lkO1xyXG4gICAgICBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICBpZiAoKGlkICE9IG51bGwpICYmIChpZCAhPT0gJycpICYmICEoL1xccy8uZXhlYyhpZCkpICYmICEoL15cXGQvLmV4ZWMoaWQpKSkge1xyXG4gICAgICAgIHNhbml0aXplZF9pZCA9IFwiI1wiICsgKHRoaXMuc2FuaXRpemVJdGVtKGlkKSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNhbml0aXplZF9pZCkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gc2FuaXRpemVkX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENsYXNzU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgY2xhc3Nfc3RyaW5nLCBpdGVtLCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBjbGFzc19zdHJpbmcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKTtcclxuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXlxcc3xcXHMkL2csICcnKTtcclxuICAgICAgICBpZiAoY2xhc3Nfc3RyaW5nICE9PSAnJykge1xyXG4gICAgICAgICAgcmVzdWx0ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgaywgbGVuLCByZWYsIHJlc3VsdHM7XHJcbiAgICAgICAgICAgIHJlZiA9IGNsYXNzX3N0cmluZy5zcGxpdCgvXFxzKy8pO1xyXG4gICAgICAgICAgICByZXN1bHRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgICAgICAgIGl0ZW0gPSByZWZba107XHJcbiAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKFwiLlwiICsgKHRoaXMuc2FuaXRpemVJdGVtKGl0ZW0pKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgICB9KS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QXR0cmlidXRlU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgYXR0cmlidXRlLCBibGFja2xpc3QsIGssIGxlbiwgcmVmLCByZWYxLCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBibGFja2xpc3QgPSBbJ2lkJywgJ2NsYXNzJ107XHJcbiAgICAgIHJlZiA9IGVsZW1lbnQuYXR0cmlidXRlcztcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgYXR0cmlidXRlID0gcmVmW2tdO1xyXG4gICAgICAgIGlmIChyZWYxID0gYXR0cmlidXRlLm5vZGVOYW1lLCBpbmRleE9mLmNhbGwoYmxhY2tsaXN0LCByZWYxKSA8IDApIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKFwiW1wiICsgYXR0cmlidXRlLm5vZGVOYW1lICsgXCI9XCIgKyBhdHRyaWJ1dGUubm9kZVZhbHVlICsgXCJdXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0TnRoQ2hpbGRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGNvdW50ZXIsIGssIGxlbiwgcGFyZW50X2VsZW1lbnQsIHNpYmxpbmcsIHNpYmxpbmdzO1xyXG4gICAgICBwYXJlbnRfZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgaWYgKHBhcmVudF9lbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICBzaWJsaW5ncyA9IHBhcmVudF9lbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgICAgICAgZm9yIChrID0gMCwgbGVuID0gc2libGluZ3MubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nc1trXTtcclxuICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudChzaWJsaW5nKSkge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFwiOm50aC1jaGlsZChcIiArIGNvdW50ZXIgKyBcIilcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XHJcbiAgICAgIHZhciBpc191bmlxdWUsIHJlc3VsdDtcclxuICAgICAgaXNfdW5pcXVlID0gZmFsc2U7XHJcbiAgICAgIGlmICgoc2VsZWN0b3IgIT0gbnVsbCkgJiYgc2VsZWN0b3IgIT09ICcnKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxICYmIHJlc3VsdFswXSA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgaXNfdW5pcXVlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGlzX3VuaXF1ZTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEFsbFNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgIHQ6IG51bGwsXHJcbiAgICAgICAgaTogbnVsbCxcclxuICAgICAgICBjOiBudWxsLFxyXG4gICAgICAgIGE6IG51bGwsXHJcbiAgICAgICAgbjogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICd0YWcnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LnQgPSB0aGlzLmdldFRhZ1NlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2lkJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5pID0gdGhpcy5nZXRJZFNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2NsYXNzJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5jID0gdGhpcy5nZXRDbGFzc1NlbGVjdG9ycyhlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdhdHRyaWJ1dGUnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0LmEgPSB0aGlzLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyhlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdudGhjaGlsZCcpID49IDApIHtcclxuICAgICAgICByZXN1bHQubiA9IHRoaXMuZ2V0TnRoQ2hpbGRTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFVuaXF1ZW5lc3MgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgICB2YXIgZm91bmRfZWxlbWVudHMsIHBhcmVudDtcclxuICAgICAgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICBmb3VuZF9lbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgcmV0dXJuIGZvdW5kX2VsZW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBmb3VuZF9lbGVtZW50c1swXSA9PT0gZWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihlbGVtZW50LCBpdGVtcywgdGFnKSB7XHJcbiAgICAgIHZhciBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHJlZiwgcmVmMTtcclxuICAgICAgcmVmID0gdGhpcy5nZXRDb21iaW5hdGlvbnMoaXRlbXMpO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBpdGVtID0gcmVmW2tdO1xyXG4gICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRhZyAhPSBudWxsKSB7XHJcbiAgICAgICAgcmVmMSA9IGl0ZW1zLm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGFnICsgaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGwgPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGwgPCBsZW4xOyBsKyspIHtcclxuICAgICAgICAgIGl0ZW0gPSByZWYxW2xdO1xyXG4gICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0VW5pcXVlU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBmb3VuZF9zZWxlY3RvciwgaywgbGVuLCByZWYsIHNlbGVjdG9yX3R5cGUsIHNlbGVjdG9ycztcclxuICAgICAgc2VsZWN0b3JzID0gdGhpcy5nZXRBbGxTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIHJlZiA9IHRoaXMub3B0aW9ucy5zZWxlY3RvcnM7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIHNlbGVjdG9yX3R5cGUgPSByZWZba107XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcl90eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdpZCc6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMuaSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAndGFnJzpcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBzZWxlY3RvcnMudCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjbGFzcyc6XHJcbiAgICAgICAgICAgIGlmICgoc2VsZWN0b3JzLmMgIT0gbnVsbCkgJiYgc2VsZWN0b3JzLmMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmMsIHNlbGVjdG9ycy50KTtcclxuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZF9zZWxlY3RvcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdhdHRyaWJ1dGUnOlxyXG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5hICE9IG51bGwpICYmIHNlbGVjdG9ycy5hLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kX3NlbGVjdG9yID0gdGhpcy50ZXN0Q29tYmluYXRpb25zKGVsZW1lbnQsIHNlbGVjdG9ycy5hLCBzZWxlY3RvcnMudCk7XHJcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnbnRoY2hpbGQnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLm4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMubjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJyonO1xyXG4gICAgfTtcclxuXHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0U2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBhbGxfc2VsZWN0b3JzLCBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHBhcmVudHMsIHJlc3VsdCwgc2VsZWN0b3IsIHNlbGVjdG9ycztcclxuICAgICAgYWxsX3NlbGVjdG9ycyA9IFtdO1xyXG4gICAgICBwYXJlbnRzID0gdGhpcy5nZXRQYXJlbnRzKGVsZW1lbnQpO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSBwYXJlbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgaXRlbSA9IHBhcmVudHNba107XHJcbiAgICAgICAgc2VsZWN0b3IgPSB0aGlzLmdldFVuaXF1ZVNlbGVjdG9yKGl0ZW0pO1xyXG4gICAgICAgIGlmIChzZWxlY3RvciAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbGxfc2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZWxlY3RvcnMgPSBbXTtcclxuICAgICAgZm9yIChsID0gMCwgbGVuMSA9IGFsbF9zZWxlY3RvcnMubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XHJcbiAgICAgICAgaXRlbSA9IGFsbF9zZWxlY3RvcnNbbF07XHJcbiAgICAgICAgc2VsZWN0b3JzLnVuc2hpZnQoaXRlbSk7XHJcbiAgICAgICAgcmVzdWx0ID0gc2VsZWN0b3JzLmpvaW4oJyA+ICcpO1xyXG4gICAgICAgIGlmICh0aGlzLnRlc3RTZWxlY3RvcihlbGVtZW50LCByZXN1bHQpKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XHJcbiAgICAgIHZhciBpLCBqLCBrLCBsLCByZWYsIHJlZjEsIHJlc3VsdDtcclxuICAgICAgaWYgKGl0ZW1zID09IG51bGwpIHtcclxuICAgICAgICBpdGVtcyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdCA9IFtbXV07XHJcbiAgICAgIGZvciAoaSA9IGsgPSAwLCByZWYgPSBpdGVtcy5sZW5ndGggLSAxOyAwIDw9IHJlZiA/IGsgPD0gcmVmIDogayA+PSByZWY7IGkgPSAwIDw9IHJlZiA/ICsrayA6IC0taykge1xyXG4gICAgICAgIGZvciAoaiA9IGwgPSAwLCByZWYxID0gcmVzdWx0Lmxlbmd0aCAtIDE7IDAgPD0gcmVmMSA/IGwgPD0gcmVmMSA6IGwgPj0gcmVmMTsgaiA9IDAgPD0gcmVmMSA/ICsrbCA6IC0tbCkge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2gocmVzdWx0W2pdLmNvbmNhdChpdGVtc1tpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXN1bHQuc2hpZnQoKTtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uam9pbignJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCA/IGRlZmluZS5hbWQgOiB2b2lkIDApIHtcclxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBDc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByb290ID0gdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cyAhPT0gbnVsbCA/IGV4cG9ydHMgOiB0aGlzO1xyXG4gICAgcm9vdC5Dc3NTZWxlY3RvckdlbmVyYXRvciA9IENzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG4gIH1cclxuXHJcbn0pLmNhbGwodGhpcyk7XHJcbiIsIi8qXHJcbiAgUmVwbGFjZSB0ZW1wbGF0ZXMuXHJcblxyXG4gIFJlcGxhY2UgdGhlIGRlZmF1bHQgcHJpbW8gdGVtcGxhdGVzIGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMy9wcmltby1leHBsb3JlL2xpYi90ZW1wbGF0ZXMuanNcclxuICB3aXRoIGN1c3RvbSB0ZW1wbGF0ZXNcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMThcclxuICBUb20gVmFubWVjaGVsZW5cclxuKi9cclxuaW1wb3J0ICcuL3V0aWxzJ1xyXG5cclxuLyogaW1wb3J0IHlvdXIgdGVtcGxhdGVzICovXHJcblxyXG5pbXBvcnQgY2hhbmdlTGFuZ1dpdGhvdXRVc2VyQXJlYUhUTUwgZnJvbSAnLi4vaHRtbC90ZW1wbGF0ZXMvY2hhbmdlLWxhbmctd2l0aG91dC11c2VyLWFyZWEuaHRtbCdcclxuaW1wb3J0IHBybUxvYW5CdWdGaXhIVE1MIGZyb20gJy4uL2h0bWwvdGVtcGxhdGVzL3BybS1sb2FuLWJ1Zy1maXguaHRtbCdcclxuaW1wb3J0IHBybVJlcXVlc3RCdWdGaXhIVE1MIGZyb20gJy4uL2h0bWwvdGVtcGxhdGVzL3BybS1yZXF1ZXN0LWJ1Zy1maXguaHRtbCdcclxuaW1wb3J0IHBybUxpcmlhc0JyaWVmUmVzdWx0Q29udGFpbmVySFRNTCBmcm9tICcuLi9odG1sL3RlbXBsYXRlcy9wcm0tbGlyaWFzLWJyaWVmLXJlc3VsdC1jb250YWluZXIuaHRtbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlcyB7XHJcbiAgICBzdGF0aWMgZ2V0IGFsbCgpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgaWQgPSB0ZW1wbGF0ZUlkIGluIHRoZSB0ZW1wbGF0ZUNhY2hlXHJcbiAgICAgICAgICB0ZW1wbGF0ZSA9IHRoZSBpbXBvcnRlZCB0ZW1wYWx0ZVxyXG4gICAgICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxyXG4gICAgICAgICAgZW5hYmxlSW5WaWV3ID0gcmVnZXggdG8gZGVmaW5lIGluIHdoaWNoIHZpZXdzIHRoZSB0ZW1wbGF0ZSBoYXMgdG8gYmUgcmVwbGFjZWQuXHJcblxyXG4gICAgICAgICAgZXguIHtpZDogJ2NvbXBvbmVudHMvc2VhcmNoL3RvcGJhci91c2VyQXJlYS91c2VyLWFyZWEuaHRtbCcsIHRlbXBsYXRlOiB1c2VyQXJlYUhUTUwsIGVuYWJsZWQ6IHRydWUsIGVuYWJsZUluVmlldzogJy4qJ31cclxuICAgICAgICAgIHJlc3VsdHMgaW46XHJcbiAgICAgICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvdG9wYmFyL3VzZXJBcmVhL3VzZXItYXJlYS5odG1sJyx1c2VyQXJlYUhUTUwpO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbXBvbmVudHMvc2VhcmNoL3RvcGJhci91c2VyQXJlYS91c2VyLWFyZWEuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogY2hhbmdlTGFuZ1dpdGhvdXRVc2VyQXJlYUhUTUwsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlSW5WaWV3OiAnVkRJQydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb21wb25lbnRzL2FjY291bnQvbG9hbnMvbG9hbi5odG1sJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBwcm1Mb2FuQnVnRml4SFRNTCxcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVJblZpZXc6ICcuKidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb21wb25lbnRzL2FjY291bnQvcmVxdWVzdHMvcmVxdWVzdHMuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcHJtUmVxdWVzdEJ1Z0ZpeEhUTUwsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXHJcbiAgICAgICAgICAgIH0sICAgICAgICAgICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb21wb25lbnRzL3NlYXJjaC9icmllZlJlc3VsdC9icmllZlJlc3VsdENvbnRhaW5lci5odG1sJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBwcm1MaXJpYXNCcmllZlJlc3VsdENvbnRhaW5lckhUTUwsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlSW5WaWV3OiAnTGlyaWFzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXS5maWx0ZXIoKHRlbXBsYXRlKSA9PiAodGVtcGxhdGUuZW5hYmxlZCAmJiBuZXcgUmVnRXhwKHRlbXBsYXRlLmVuYWJsZUluVmlldykudGVzdCh3aW5kb3cuYXBwQ29uZmlnLnZpZCkpKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gIEdlbmVyYWxcclxuXHJcbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcclxuICBNZWhtZXQgQ2VsaWtcclxuKi9cclxuU3RyaW5nLnByb3RvdHlwZS50b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5zcGxpdCgnLScpLm1hcCgoZCwgaSwgYSkgPT4gaSA+IDAgPyBkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZC5zbGljZSgxKSA6IGQpLmpvaW4oJycpO1xyXG59XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnZ29vZ2xlQW5hbHl0aWNzJywgW10pO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ29vZ2xlQW5hbHl0aWNzJykucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaW50ZXJ2YWwsIGFuYWx5dGljc09wdGlvbnMpIHtcclxuXHRpZihhbmFseXRpY3NPcHRpb25zLmhhc093blByb3BlcnR5KFwiZW5hYmxlZFwiKSAmJiBhbmFseXRpY3NPcHRpb25zLmVuYWJsZWQpIHtcclxuXHRcdGlmKGFuYWx5dGljc09wdGlvbnMuaGFzT3duUHJvcGVydHkoXCJzaXRlSWRcIikgJiYgYW5hbHl0aWNzT3B0aW9ucy5zaXRlSWQgIT0gJycpIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgIChmdW5jdGlvbih3LGQscyxsLGkpe3dbbF09d1tsXXx8W107d1tsXS5wdXNoKHsnZ3RtLnN0YXJ0JzpcclxuICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCksZXZlbnQ6J2d0bS5qcyd9KTt2YXIgZj1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdLFxyXG4gICAgICAgICAgICBqPWQuY3JlYXRlRWxlbWVudChzKSxkbD1sIT0nZGF0YUxheWVyJz8nJmw9JytsOicnO2ouYXN5bmM9dHJ1ZTtqLnNyYz1cclxuICAgICAgICAgICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0bS5qcz9pZD0nK2krZGw7Zi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqLGYpO1xyXG4gICAgICAgICAgICB9KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJ2RhdGFMYXllcicsYW5hbHl0aWNzT3B0aW9ucy5zaXRlSWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW5saW5lU2NyaXB0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbm9zY3JpcHQnKTtcclxuICAgICAgICBpbmxpbmVTY3JpcHRUYWcudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cclxuICAgICAgICBjb25zdCBpbmxpbmVDb2RlID0gJzxub3NjcmlwdD48aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWw/aWQ9R1RNLVdSMjU5TVhcIiBoZWlnaHQ9XCIwXCIgd2lkdGg9XCIwXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7dmlzaWJpbGl0eTpoaWRkZW5cIj48L2lmcmFtZT48L25vc2NyaXB0Pic7XHJcblxyXG4gICAgICAgIC8vIE1ldGhvZHMgb2YgYWRkaW5nIGlubmVyIHRleHQgc29tZXRpbWVzIGRvbid0IHdvcmsgYWNyb3NzIGJyb3dzZXJzLlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpbmxpbmVTY3JpcHRUYWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaW5saW5lQ29kZSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGlubGluZVNjcmlwdFRhZy50ZXh0ID0gaW5saW5lQ29kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChpbmxpbmVTY3JpcHRUYWcpO1x0XHRcclxuXHR9XHJcbn0pO1xyXG5hbmd1bGFyLm1vZHVsZSgnZ29vZ2xlQW5hbHl0aWNzJykudmFsdWUoJ2FuYWx5dGljc09wdGlvbnMnLCB7XHJcblx0ZW5hYmxlZDogZmFsc2UsXHJcblx0c2l0ZUlkOiAnJyxcclxuXHRkZWZhdWx0VGl0bGU6ICcnXHJcbn0pO1xyXG5cclxuLy9pbnRlcmNlcHQgYXBpIGNhbGxzIGZvciBkYXRhYmFzZSBzZWFyY2ggYW5kIGNoYW5nZSB0byBLVUwgKG9ubHkgcmVnaW9uYWwgdmlld3MpXHJcbiAgLypcclxudmFyIHJlZ192aWV3cyA9IFtcIktVTGV1dmVuX1RNT1JFTVwiLCBcIktVTGV1dmVuX1RNT1JFS1wiLCBcIktVTGV1dmVuX1VDTExcIiwgXCJLVUxldXZlbl9MVUNBXCIsIFwiS1VMZXV2ZW5fT0RJU0VFXCJdO1xyXG5pZiAocmVnX3ZpZXdzLmluY2x1ZGVzKHdpbmRvdy5hcHBDb25maWcudmlkKSkge1xyXG4gIGxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndmlld0N1c3RvbScsIFtdKVxyXG4gICAgLmZhY3RvcnkoJ2h0dHBDYWxsSW50ZXJjZXB0b3InLCBbKCkgPT4ge1xyXG4gICAgICB2YXIgaHR0cENhbGxJbnRlcmNlcHRvciA9IHtcclxuICAgICAgICByZXF1ZXN0OiBmdW5jdGlvbihjb25maWcpe1xyXG4gICAgICAgICAgaWYgKGNvbmZpZy51cmwuaW5jbHVkZXMoJ3BueHMnKSAmJiAhY29uZmlnLnVybC5pbmNsdWRlcygnZGVsaXZlcnknKSAmJiBjb25maWcucGFyYW1zKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbmZpZy5wYXJhbXMuZGF0YWJhc2VzKXtcclxuICAgICAgICAgICAgICBjb25maWcucGFyYW1zLmluc3QgPSAnS1VMJztcclxuICAgICAgICAgICAgICBjb25maWcucGFyYW1zLnZpZCA9ICdLVUxldXZlbic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaHR0cENhbGxJbnRlcmNlcHRvcjtcclxuICAgIH1dKVxyXG4gICAgLmNvbmZpZyhbJyRodHRwUHJvdmlkZXInLCAoJGh0dHBQcm92aWRlcikgPT4ge1xyXG4gICAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdodHRwQ2FsbEludGVyY2VwdG9yJyk7XHJcbiAgICB9XSk7XHJcbn1cclxuKi9cclxuLypcclxuYW5ndWxhci5lbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0Q2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgcmV0dXJuIChmdW5jdGlvbiBjbG9zZXN0KGVsZW1lbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnRbMF0ubm9kZU5hbWUgPT09ICdIVE1MJykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNsb3Nlc3QoZWxlbWVudC5wYXJlbnQoKSwgY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9KSh0aGlzLCBjbGFzc05hbWUpO1xyXG59O1xyXG5cclxuYW5ndWxhci5lbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0Tm9kZSA9IGZ1bmN0aW9uIChub2RlTmFtZSkge1xyXG4gIHJldHVybiAoZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBub2RlTmFtZSkge1xyXG4gICAgaWYgKGVsZW1lbnRbMF0ubm9kZU5hbWUgPT09ICdIVE1MJykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudFswXS5ub2RlTmFtZSA9PSBub2RlTmFtZS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNsb3Nlc3QoZWxlbWVudC5wYXJlbnQoKSwgbm9kZU5hbWUpO1xyXG4gICAgfVxyXG4gIH0pKHRoaXMsIG5vZGVOYW1lKTtcclxufTtcclxuKi9cclxuIl19
