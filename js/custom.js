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
                  { name: 'auto-login-static-footer', config: _autoPromoteLogin.autoLoginCheckboxConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView: '^KULeuven$' }, { name: 'promote-login', config: _autoPromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'prm-authentication-after', enableInView: '^KULeuven$' }, { name: 'auto-login', config: _autoPromoteLogin.autoLoginConfig, enabled: true, appendTo: 'prm-authentication-after', enableInView: 'KULeuven_LUCA|KULeuven_ODISEE|KULeuven_TMOREK|KULeuven_TMOREM|KULeuven_UCLL' }, { name: 'ill-request-form-overview', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-overview-after', enableInView: '.*' }, { name: 'ill-request-form', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-after', enableInView: '^KULeuven|^VIVES' }, { name: 'announcement-feedback', config: _feedbackAnnouncement.feedbackAnnouncementConfig, enabled: false, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'override-getlink-recommendation', config: _recommendationItem.recommendationItemConfig, enabled: true, appendTo: 'prm-recomendation-item-after', enableInView: '.*' }, { name: 'announcement', config: _announcements.announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'pay-my-fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven' },
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
            this.parentCtrl.services.splice(this.parentCtrl.services.length - 1, 0, sectionData);
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
                        "name": "K.U.Leuven Maurits Sabbebibliotheek",
                        "url": "https://" + document.location.host + "/primo-explore/fulldisplay?docid=<#recordid>&context=L&vid=KULeuven&search_scope=ALL_CONTENT&isFrbr=true&tab=all_content_tab"
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
                        "name": "UAntwerpen - Bibliotheek Stadscampus",
                        "url": "https://anet.be/record/opacanet/<#recordid>"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvb3MtYnJvd3NlcmlmeS9icm93c2VyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxDb25maWdMYW5ndWFnZVNlbGVjdGlvbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGF0YWJhc2VMaW5rLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxkZXByZWNhdGVkVmlld3MuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGRpYWxvZy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZGlzY2xhaW1lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwZXJpbWVudC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcZXhwb3NlSnd0LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxyZW1vdmVBbGVydHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHJlbW92ZUNoZWNrTG9jYXRpb25zLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxzZWFyY2hUaXAuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHN0YXRpY0Zvb3Rlci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQXV0b1Byb21vdGVMb2dpblxcYXV0b1Byb21vdGVMb2dpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQnJpZWZSZXN1bHRBZnRlclxcYWx0bWV0cmljLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1CcmllZlJlc3VsdEFmdGVyXFxicmllZkxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1CcmllZlJlc3VsdEFmdGVyXFxzb3VyY2VJY29uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Db2xsZWN0aW9uR2FsbGVyeUhlYWRlckFmdGVyXFxleHBsb3JlU2VhcmNoQ29sbGVjdGlvbnNcXGluZGV4LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GYWNldEFmdGVyXFxmaWx0ZXJGYWNldFZhbHVlcy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRBZnRlclxcc2VhcmNoQWxzby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keUJpYi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keUdvb2dsZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmFjZXRFeGFjdEFmdGVyXFxzZWFyY2hBbHNvQm9keVdvcmxkY2F0LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1GaW5lc092ZXJ2aWV3QWZ0ZXJcXHBheU15RmluZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUZ1bGxWaWV3QWZ0ZXJcXGFsdG1ldHJpY3NCYWRnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRnVsbFZpZXdBZnRlclxcbG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXcuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcYmV0YVN3aXRjaC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxob21lSWNvbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxsYW5ndWFnZURlcGVuZGVudExvZ28uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcbmV3U2VhcmNoQnV0dG9uLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXHZpZXdMb2dvLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1NYWluTWVudUFmdGVyXFxmZWVkYmFjay5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtUmVjb21tZW5kYXRpb25JdGVtQWZ0ZXJcXHJlY29tbWVuZGF0aW9uSXRlbS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtUmVxdWVzdHNBZnRlclxcaWxsUmVxdWVzdEZvcm0uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVNlYXJjaFJlc3VsdEF2YWlsYWJpbGl0eUxpbmVBZnRlckNvbnRyb2xsZXJcXGJyb3d6aW5lLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlclxccG54WG1sLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcG9ydEFQcm9ibGVtLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcXVlc3RBQ29weS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtU2VydmljZUhlYWRlckFmdGVyXFxyZXF1ZXN0QUNvcHlPZkVzRG9jLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGFubm91bmNlbWVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVRvcEJhckJlZm9yZVxcZmVlZGJhY2tBbm5vdW5jZW1lbnQuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVRvcEJhckJlZm9yZVxcZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2cuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVRvcEJhckJlZm9yZVxcZmluZXNNZXNzYWdlLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxmYWN0b3JpZXNcXGFsdG1ldHJpY3NTZXJ2aWNlLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxmYWN0b3JpZXNcXGFwaUNhbGxJbnRlcmNlcHRvci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxkYlNlYXJjaEh0dHBDYWxsSW50ZXJjZXB0b3IuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcZmVlZFNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcZmVlZGJhY2tTZXJ2aWNlLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxmYWN0b3JpZXNcXGZpbHRlckxvY2F0aW9uc1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcbWVzc2FnZVNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcd2luZG93RXZlbnRMaXN0ZW5lci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcbWFpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcaGVscGVyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFxmYWNldHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHJlY29yZHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHVzZXIuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHZpZXcuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xcdmVuZG9yXFxjc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFx0ZW1wbGF0ZXMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O3FqQkM3Q0E7Ozs7Ozs7Ozs7QUFVQTs7QUEwQ0E7O0FBM0NBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7O0lBRXFCLGU7Ozs7Ozs7Z0NB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QUNOO0FBQ0QsQ0F6QkQ7QUEwQkEsUUFBUSxNQUFSLENBQWUsaUJBQWYsRUFBa0MsS0FBbEMsQ0FBd0Msa0JBQXhDLEVBQTREO0FBQzNELFdBQVMsS0FEa0Q7QUFFM0QsVUFBUSxFQUZtRDtBQUczRCxnQkFBYztBQUg2QyxDQUE1RDs7QUFNQTtBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydHMuZW5kaWFubmVzcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdMRScgfTtcblxuZXhwb3J0cy5ob3N0bmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWVcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLmxvYWRhdmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9O1xuXG5leHBvcnRzLnVwdGltZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDAgfTtcblxuZXhwb3J0cy5mcmVlbWVtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xufTtcblxuZXhwb3J0cy50b3RhbG1lbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbn07XG5cbmV4cG9ydHMuY3B1cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH07XG5cbmV4cG9ydHMudHlwZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdCcm93c2VyJyB9O1xuXG5leHBvcnRzLnJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy5uZXR3b3JrSW50ZXJmYWNlc1xuPSBleHBvcnRzLmdldE5ldHdvcmtJbnRlcmZhY2VzXG49IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHt9IH07XG5cbmV4cG9ydHMuYXJjaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdqYXZhc2NyaXB0JyB9O1xuXG5leHBvcnRzLnBsYXRmb3JtID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ2Jyb3dzZXInIH07XG5cbmV4cG9ydHMudG1wZGlyID0gZXhwb3J0cy50bXBEaXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcvdG1wJztcbn07XG5cbmV4cG9ydHMuRU9MID0gJ1xcbic7XG4iLCIvKlxyXG4gIERlY2xhcmUgeW91ciBjb21wb25lbnRzIGhlcmUuXHJcblxyXG4gIFJld3JpdGUgdGhpcyB3aGVuIGltcG9ydHMgY2FuIGJlIGRvbmUgZHluYW1pY2FsbHlcclxuICBodHRwOi8vMmFsaXR5LmNvbS8yMDE3LzAxL2ltcG9ydC1vcGVyYXRvci5odG1sXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XHJcbiAgTWVobWV0IENlbGlrXHJcbiovXHJcbmltcG9ydCAnLi91dGlscyc7XHJcbi8qIGltcG9ydCB5b3VyIGNvbXBvbmVudCBjb25maWd1cmF0aW9uKi9cclxuaW1wb3J0IHtleHBlcmltZW50Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9leHBlcmltZW50J1xyXG5pbXBvcnQge2hvbWVJY29uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL2hvbWVJY29uJ1xyXG5cclxuaW1wb3J0IHtuZXdTZWFyY2hCdXR0b25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvbmV3U2VhcmNoQnV0dG9uJ1xyXG5pbXBvcnQge2xhbmd1YWdlRGVwZW5kZW50TG9nb0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9sYW5ndWFnZURlcGVuZGVudExvZ28nXHJcbmltcG9ydCB7dmlld0xvZ29Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvdmlld0xvZ28nXHJcblxyXG5pbXBvcnQge3NlYXJjaENvbGxlY3Rpb25zQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQ29sbGVjdGlvbkdhbGxlcnlIZWFkZXJBZnRlci9leHBsb3JlU2VhcmNoQ29sbGVjdGlvbnMnXHJcblxyXG5pbXBvcnQge2JldGFTd2l0Y2hDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvYmV0YVN3aXRjaCdcclxuaW1wb3J0IHtzb3VyY2VJY29uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9zb3VyY2VJY29uJ1xyXG5pbXBvcnQge2FsdG1ldHJpY0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUJyaWVmUmVzdWx0QWZ0ZXIvYWx0bWV0cmljJ1xyXG5pbXBvcnQge2FsdG1ldHJpY3NCYWRnZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZ1bGxWaWV3QWZ0ZXIvYWx0bWV0cmljc0JhZGdlJ1xyXG5cclxuaW1wb3J0IHtwbnhYbWxDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlci9wbnhYbWwnXHJcbmltcG9ydCB7cGF5TXlGaW5lc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZpbmVzT3ZlcnZpZXdBZnRlci9wYXlNeUZpbmVzJ1xyXG5pbXBvcnQge2ZlZWRiYWNrQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTWFpbk1lbnVBZnRlci9mZWVkYmFjaydcclxuaW1wb3J0IHtzZWFyY2hUaXBDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3NlYXJjaFRpcCdcclxuaW1wb3J0IHtkaXNjbGFpbWVyQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9kaXNjbGFpbWVyJ1xyXG5cclxuaW1wb3J0IHtleHBvc2VKd3RDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2V4cG9zZUp3dCdcclxuXHJcbmltcG9ydCB7TGFuZ3VhZ2VTZWxlY3Rpb25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL0NvbmZpZ0xhbmd1YWdlU2VsZWN0aW9uJ1xyXG5pbXBvcnQge0RlcHJlY2F0ZWRWaWV3c0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvZGVwcmVjYXRlZFZpZXdzJ1xyXG5cclxuaW1wb3J0IHtyZXBvcnRBUHJvYmxlbUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlcnZpY2VIZWFkZXJBZnRlci9yZXBvcnRBUHJvYmxlbSdcclxuaW1wb3J0IHtyZXF1ZXN0QUNvcHlDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZXJ2aWNlSGVhZGVyQWZ0ZXIvcmVxdWVzdEFDb3B5J1xyXG5pbXBvcnQge3JlcXVlc3RBQ29weU9mRXNEb2NDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZXJ2aWNlSGVhZGVyQWZ0ZXIvcmVxdWVzdEFDb3B5T2ZFc0RvYydcclxuXHJcbmltcG9ydCB7ZmluZXNNZXNzYWdlQ29uZmlnIGFzIHBheU15RmluZXNNZXNzYWdlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2ZpbmVzTWVzc2FnZSdcclxuaW1wb3J0IHthbm5vdW5jZW1lbnRzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2Fubm91bmNlbWVudHMnXHJcbmltcG9ydCB7YXV0b0xvZ2luQ2hlY2tib3hDb25maWcsYXV0b0xvZ2luQ29uZmlnLHByb21vdGVMb2dpbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUF1dG9Qcm9tb3RlTG9naW4vYXV0b1Byb21vdGVMb2dpbidcclxuXHJcbmltcG9ydCB7ZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmVlZGJhY2tBbm5vdW5jZW1lbnQnXHJcbmltcG9ydCB7c3RhdGljRm9vdGVyQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9zdGF0aWNGb290ZXInXHJcbmltcG9ydCB7cmVtb3ZlQWxlcnRzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9yZW1vdmVBbGVydHMnXHJcbmltcG9ydCB7cmVtb3ZlQ2hlY2tMb2NhdGlvbnNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3JlbW92ZUNoZWNrTG9jYXRpb25zJ1xyXG5pbXBvcnQge2lsbFJlcXVlc3RGb3JtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtUmVxdWVzdHNBZnRlci9pbGxSZXF1ZXN0Rm9ybSdcclxuaW1wb3J0IHtyZWNvbW1lbmRhdGlvbkl0ZW1Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1SZWNvbW1lbmRhdGlvbkl0ZW1BZnRlci9yZWNvbW1lbmRhdGlvbkl0ZW0nXHJcblxyXG5pbXBvcnQge2RhdGFiYXNlTGlua0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvZGF0YWJhc2VMaW5rJ1xyXG4vL2ltcG9ydCB7cmVtb3ZlT3BlbkFjY2Vzc0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZhY2V0QWZ0ZXIvcmVtb3ZlT3BlbkFjY2VzcydcclxuXHJcbmltcG9ydCB7c2VhcmNoQWxzb0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZhY2V0QWZ0ZXIvc2VhcmNoQWxzbydcclxuaW1wb3J0IHtzZWFyY2hBbHNvQm9keUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZhY2V0RXhhY3RBZnRlci9zZWFyY2hBbHNvQm9keSdcclxuaW1wb3J0IHtzZWFyY2hBbHNvQm9keUJpYkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZhY2V0RXhhY3RBZnRlci9zZWFyY2hBbHNvQm9keUJpYidcclxuaW1wb3J0IHtzZWFyY2hBbHNvQm9keUdvb2dsZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUZhY2V0RXhhY3RBZnRlci9zZWFyY2hBbHNvQm9keUdvb2dsZSdcclxuaW1wb3J0IHtzZWFyY2hBbHNvQm9keVdvcmxkY2F0Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRFeGFjdEFmdGVyL3NlYXJjaEFsc29Cb2R5V29ybGRjYXQnXHJcbmltcG9ydCB7YnJvd3ppbmVDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRBdmFpbGFiaWxpdHlMaW5lQWZ0ZXJDb250cm9sbGVyL2Jyb3d6aW5lJ1xyXG5pbXBvcnQge2ZpbHRlckZhY2V0VmFsdWVzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9maWx0ZXJGYWNldFZhbHVlcydcclxuXHJcbmltcG9ydCB7bG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXdDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GdWxsVmlld0FmdGVyL2xvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3J1xyXG5pbXBvcnQge2JyaWVmTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXdDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1CcmllZlJlc3VsdEFmdGVyL2JyaWVmTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlckNvbXBvbmVudHMge1xyXG5cclxuICBzdGF0aWMgZ2V0IGFsbCgpIHtcclxuICAgIC8qXHJcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcclxuICAgICAgY29uZmlnID0gdGhlIGltcG9ydGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcclxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxyXG5cclxuICAgICAgZXguIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9XHJcbiAgICAgIHJlc3VsdHMgaW46XHJcbiAgICAgICAgPHBybS1sb2dvLWFmdGVyIHBhcmVudEN0cmw9JyRjdHJsJz5cclxuICAgICAgICAgIDxob21lLWljb24gcGFyZW50Q3RybD0nJGN0cmwnPjwvaG9tZS1pY29uPlxyXG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge25hbWU6ICdsaWJpcy1leHBlcmltZW50JywgY29uZmlnOiBleHBlcmltZW50Q29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tbWVzc2FnZXMtYW5kLWJsb2Nrcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2hvbWUtaWNvbicsIGNvbmZpZzogaG9tZUljb25Db25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnJ30sXHJcbiAgICAgIHtuYW1lOiAnYmV0YS1zd2l0Y2gnLCBjb25maWc6IGJldGFTd2l0Y2hDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnbGFuZ3VhZ2UtZGVwZW5kZW50LWxvZ28nLCBjb25maWc6IGxhbmd1YWdlRGVwZW5kZW50TG9nb0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3ZpZXctbG9nbycsIGNvbmZpZzogdmlld0xvZ29Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG5cclxuICAgICAge25hbWU6ICdzb3VyY2UtaWNvbicsIGNvbmZpZzogc291cmNlSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUxpcmlhcyknfSxcclxuICAgICAge25hbWU6ICdhbHRtZXRyaWMnLCBjb25maWc6IGFsdG1ldHJpY0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhc3xeS1VMZXV2ZW58XlZESUN8XlVDTEx8XlRNT1JFQU18XlRNT1JFS3xeU0VSVnxeTkJCJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2FsdG1ldHJpY3MtYmFkZ2UnLCBjb25maWc6IGFsdG1ldHJpY3NCYWRnZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZnVsbC12aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhc3xeS1VMZXV2ZW58XlZESUN8XlVDTEx8XlRNT1JFQU18XlRNT1JFS3xeU0VSVnxeTkJCJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2xvY2F0aW9ucy1mb3ItYmlibGlvZ3JhcGhpYy12aWV3JywgY29uZmlnOiBsb2NhdGlvbnNGb3JCaWJsaW9ncmFwaGljVmlld0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZnVsbC12aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkpFU1VJVFMnfSxcclxuICAgICAge25hbWU6ICdicmllZi1sb2NhdGlvbnMtZm9yLWJpYmxpb2dyYXBoaWMtdmlldycsIGNvbmZpZzogYnJpZWZMb2NhdGlvbnNGb3JCaWJsaW9ncmFwaGljVmlld0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VhcmNoLXJlc3VsdC1hdmFpbGFiaWxpdHktbGluZS1hZnRlcicsIGVuYWJsZUluVmlldzogJ15KRVNVSVRTJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3BueC14bWwnLCBjb25maWc6IHBueFhtbENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzJywgY29uZmlnOiBwYXlNeUZpbmVzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1maW5lcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1tYWluLW1lbnUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxyXG4gICAgICB7bmFtZTogJ2xhbmd1YWdlLXNlbGVjdGlvbicsIGNvbmZpZzogTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcbiAgICAgIHtuYW1lOiAnZGVwcmVjYXRlZC12aWRzJywgY29uZmlnOiBEZXByZWNhdGVkVmlld3NDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcicsIGVuYWJsZUluVmlldzogJ14oPyFFQ0IpJ30sXHJcbiAgICAgIFxyXG4gICAgICB7bmFtZTogJ25ldy1zZWFyY2gtYnV0dG9uJywgY29uZmlnOiBuZXdTZWFyY2hCdXR0b25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1uYXYtYmFyLWxpbmtzLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcclxuICAgICAge25hbWU6ICdyZXBvcnQtYS1wcm9ibGVtJywgY29uZmlnOiByZXBvcnRBUHJvYmxlbUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VydmljZS1oZWFkZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICBcclxuICAgICAge25hbWU6ICdyZXF1ZXN0LWEtY29weS1oZWFkJywgY29uZmlnOiByZXF1ZXN0QUNvcHlDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXNlcnZpY2UtaGVhZGVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhcyd9LFxyXG4gICAgICAvL3tuYW1lOiAncmVxdWVzdC1hLWNvcHknLCBjb25maWc6IHJlcXVlc3RBQ29weUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkxpcmlhcyd9LFxyXG4gICAgICB7bmFtZTogJ3JlcXVlc3QtYS1jb3B5LWVzLWRvYycsIGNvbmZpZzogcmVxdWVzdEFDb3B5T2ZFc0RvY0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lci1hZnRlcicsIGVuYWJsZUluVmlldzogJ15WTFAnfSxcclxuXHJcbiAgICAgIHtuYW1lOiAndXNlci1qd3QnLCBjb25maWc6IGV4cG9zZUp3dENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbWFpbi1tZW51LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXlZMUHxeRUNCJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ3BybS1zZWFyY2h0aXBzJywgY29uZmlnOiBzZWFyY2hUaXBDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3BybS1kaXNjbGFpbWVyJywgY29uZmlnOiBkaXNjbGFpbWVyQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAgICAgICAge25hbWU6ICdzdGF0aWMtZm9vdGVyJywgY29uZmlnOiBzdGF0aWNGb290ZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWV4cGxvcmUtZm9vdGVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAgLy97bmFtZTogJ3N0YXRpYy1mb290ZXItYWNjb3VudCcsIGNvbmZpZzogc3RhdGljRm9vdGVyQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1hY2NvdW50LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAge25hbWU6ICdyZW1vdmUtYWxlcnRzJywgY29uZmlnOiByZW1vdmVBbGVydHNDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1hZGQtcXVlcnktdG8tc2F2ZWQtc2VhcmNoZXMtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3JlbW92ZS1jaGVjay1sb2NhdGlvbnMnLCBjb25maWc6IHJlbW92ZUNoZWNrTG9jYXRpb25zQ29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tc2VhcmNoLXJlc3VsdC1hdmFpbGFiaWxpdHktbGluZS1hZnRlcicsIGVuYWJsZUluVmlldzogJ0xpcmlhcyd9LFxyXG4gICAgICB7bmFtZTogJ3BybS1kYmxpbmsnLCBjb25maWc6IGRhdGFiYXNlTGlua0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG5cclxuICAgICAgLyogbGJzLWNvbXBvbmVudHMgdXNlZCBpbiBodG1sLXRlbXBsYXRlcyBvZiB0aGUgcGFja2FnZSAqL1xyXG4gICAgICB7bmFtZTogJ2F1dG8tbG9naW4tc3RhdGljLWZvb3RlcicsIGNvbmZpZzogYXV0b0xvZ2luQ2hlY2tib3hDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAnbGJzLXByb21vdGUtbG9naW4nLCBlbmFibGVJblZpZXc6ICAnXktVTGV1dmVuJCd9LFxyXG4gICAgICB7bmFtZTogJ3Byb21vdGUtbG9naW4nLCBjb25maWc6IHByb21vdGVMb2dpbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYXV0aGVudGljYXRpb24tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICAnXktVTGV1dmVuJCd9LFxyXG4gICAgICB7bmFtZTogJ2F1dG8tbG9naW4nLCBjb25maWc6IGF1dG9Mb2dpbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYXV0aGVudGljYXRpb24tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICAnS1VMZXV2ZW5fTFVDQXxLVUxldXZlbl9PRElTRUV8S1VMZXV2ZW5fVE1PUkVLfEtVTGV1dmVuX1RNT1JFTXxLVUxldXZlbl9VQ0xMJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2lsbC1yZXF1ZXN0LWZvcm0tb3ZlcnZpZXcnLCBjb25maWc6IGlsbFJlcXVlc3RGb3JtQ29uZmlnLCBlbmFibGVkOmZhbHNlLCBhcHBlbmRUbzogJ3BybS1yZXF1ZXN0cy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnaWxsLXJlcXVlc3QtZm9ybScsIGNvbmZpZzogaWxsUmVxdWVzdEZvcm1Db25maWcsIGVuYWJsZWQ6ZmFsc2UsIGFwcGVuZFRvOiAncHJtLXJlcXVlc3RzLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVufF5WSVZFUyd9LFxyXG5cclxuICAgICAge25hbWU6ICdhbm5vdW5jZW1lbnQtZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQW5ub3VuY2VtZW50Q29uZmlnLCBlbmFibGVkOmZhbHNlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ292ZXJyaWRlLWdldGxpbmstcmVjb21tZW5kYXRpb24nLCBjb25maWc6IHJlY29tbWVuZGF0aW9uSXRlbUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tcmVjb21lbmRhdGlvbi1pdGVtLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnYW5ub3VuY2VtZW50JywgY29uZmlnOiBhbm5vdW5jZW1lbnRzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzLW1lc3NhZ2UnLCBjb25maWc6IHBheU15RmluZXNNZXNzYWdlQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbid9LFxyXG4gICAgIC8vICB7bmFtZTogJ3JlbW92ZS1vcGVuLWFjY2VzcycsIGNvbmZpZzogcmVtb3ZlT3BlbkFjY2Vzc0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1hbHNvJywgY29uZmlnOiBzZWFyY2hBbHNvQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbnxeVklWRVN8Xk9ESVNFRXxeRkFST3xeVE1PUkVLfF5UTU9SRU1BfF5VQ0xMJ30sXHJcbiAgICAge25hbWU6ICdzZWFyY2gtYWxzby1ib2R5JywgY29uZmlnOiBzZWFyY2hBbHNvQm9keUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZmFjZXQtZXhhY3QtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW58XlZJVkVTfF5PRElTRUV8XkZBUk8nfSxcclxuICAgICB7bmFtZTogJ3NlYXJjaC1hbHNvLWJvZHktYmliJywgY29uZmlnOiBzZWFyY2hBbHNvQm9keUJpYkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZmFjZXQtZXhhY3QtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeVklWRVN8Xk9ESVNFRXxeRkFST3xeVE1PUkVLfF5UTU9SRU1BfF5VQ0xMJ30sXHJcbiAgICAge25hbWU6ICdzZWFyY2gtYWxzby1ib2R5LWdvb2dsZScsIGNvbmZpZzogc2VhcmNoQWxzb0JvZHlHb29nbGVDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWV4YWN0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXk9ESVNFRXxeRkFST3xeVE1PUkVLfF5UTU9SRU1BfF5VQ0xMJ30sXHJcbiAgICAge25hbWU6ICdzZWFyY2gtYWxzby1ib2R5LXdvcmxkY2F0JywgY29uZmlnOiBzZWFyY2hBbHNvQm9keVdvcmxkY2F0Q29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mYWNldC1leGFjdC1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbid9LFxyXG5cclxuICAgICB7bmFtZTogJ2Jyb3d6aW5lJywgY29uZmlnOiBicm93emluZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VhcmNoLXJlc3VsdC1hdmFpbGFiaWxpdHktbGluZS1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbnxeRUNCJ30sXHJcbiAgICAgXHJcbiAgICAge25hbWU6ICdmaWx0ZXItZmFjZXQtdmFsdWVzJywgY29uZmlnOiBmaWx0ZXJGYWNldFZhbHVlc0NvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLWZhY2V0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXkpFU1VJVFMnfSxcclxuXHJcbiAgICAge25hbWU6ICdzZWFyY2gtY29sbGVjdGlvbnMnLCBjb25maWc6IHNlYXJjaENvbGxlY3Rpb25zQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1jb2xsZWN0aW9uLWdhbGxlcnktaGVhZGVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVuJ31cclxuICAgIF0uZmlsdGVyKCAoY29tcG9uZW50KSA9PiAoIGNvbXBvbmVudC5lbmFibGVkICYmIG5ldyBSZWdFeHAoY29tcG9uZW50LmVuYWJsZUluVmlldykudGVzdCh3aW5kb3cuYXBwQ29uZmlnLnZpZCkgKSApO1xyXG4gIH1cclxufSIsIlxyXG5jbGFzcyBMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB2YXIgb25seXNob3dfZnJfRlJfaW5fdmlkID0gWydBQ1YnLCAnQlBCJywgJ0ZBUk8nLCAnRk9ERklOJywgJ0tCQycsICdSQklOUycsICdSTUNBJywgJ0tNS0cnLCAnTElCQVInLCAnTkJCJywgJ09GTycsICdWRElDJ107XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByaW1vLWV4cGxvcmUnKSk7XHJcbiAgICAgICAgaWYgKCEgb25seXNob3dfZnJfRlJfaW5fdmlkLmluY2x1ZGVzKCB3aW5kb3cuYXBwQ29uZmlnLnZpZCAgKSApIHtcclxuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kKCBcIjxzdHlsZT5wcm0tbGFuZ3VhZ2Utc2VsZWN0aW9uIG1kLWxpc3QtaXRlbVt2YWx1ZT0nZnJfRlInXXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50O308L3N0eWxlPlwiICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuTGFuZ3VhZ2VTZWxlY3Rpb25Db25maWdDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddXHJcblxyXG5leHBvcnQgbGV0IExhbmd1YWdlU2VsZWN0aW9uQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBMYW5ndWFnZVNlbGVjdGlvbkNvbmZpZ0NvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbn1cclxuIiwiaW1wb3J0IGRhdGFiYXNlTGlua0hUTUwgZnJvbSAnLi9kYXRhYmFzZUxpbmsuaHRtbCdcclxuXHJcbmNsYXNzIERhdGFiYXNlTGlua0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZykge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgJHNjb3BlLnRpdGxlID0gJ2RhdGFiYXNlcyc7XHJcbiAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSAnc2VhcmNoIGRhdGFiYXNlcyc7XHJcbiAgICAkc2NvcGUuZGF0YWJhc2VMaW5rID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLWRhdGFiYXNlXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybClcclxuXHJcbiAgICAgICAgdmFyIGRhdGFiYXNlRmFjZXQgPSB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOlwicnR5cGVcIixcclxuICAgICAgICAgICAgXCJ0eXBlXCI6XCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjpcImRhdGFiYXNlc1wiLFxyXG4gICAgICAgICAgICBcImRpc3BsYXlWYWx1ZVwiOlwiZGF0YWJhc2VzXCIsXHJcbiAgICAgICAgICAgIFwiZGlzcGxheWVkVHlwZVwiOlwiZXhhY3RcIixcclxuICAgICAgICAgICAgXCJsYWJlbFwiOlwiRGF0YWJhbmtlblwiLFxyXG4gICAgICAgICAgICBcImlzTXVsdGlGYWNldFwiOmZhbHNlLFxyXG4gICAgICAgICAgICBcInRvb2x0aXBcIjpcIlZlcndpamRlciBUeXBlIGJyb24gRGF0YWJhbmtlblwiLFxyXG4gICAgICAgICAgICBcIiQkaGFzaEtleVwiOlwib2JqZWN0OjI4MDhcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyggJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU3RhdGVTZXJ2aWNlLnNlYXJjaE9iamVjdCApXHJcblxyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL21laG1ldGMvcHJpbW8tZXhwbG9yZS1jb2xsZWN0aW9uLXZpZXdlci9ibG9iL21hc3Rlci9qcy9uZy1wcmltby5qc1xyXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFNlcnZpY2Uuc2V0U29ydEJ5KCd0aXRsZScpO1xyXG4gICAgICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFNlcnZpY2UuZmFjZXRTZXJ2aWNlLmFkZFN0aWNreUZhY2V0KGRhdGFiYXNlRmFjZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTdGF0ZVNlcnZpY2Uuc2VhcmNoT2JqZWN0IClcclxuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLnNlYXJjaCgpO1xyXG4vKlxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJzdGlja3lGYWNldHNcIixcclxuICAgICAgICdbe1wibmFtZVwiOlwicnR5cGVcIixcInR5cGVcIjpcImluY2x1ZGVcIixcInZhbHVlXCI6XCJkYXRhYmFzZXNcIixcImRpc3BsYXlWYWx1ZVwiOlwiZGF0YWJhc2VzXCIsXCJkaXNwbGF5ZWRUeXBlXCI6XCJleGFjdFwiLFwibGFiZWxcIjpcIkRhdGFiYW5rZW5cIixcImlzTXVsdGlGYWNldFwiOmZhbHNlLFwidG9vbHRpcFwiOlwiVmVyd2lqZGVyIFR5cGUgYnJvbiBEYXRhYmFua2VuXCIsXCIkJGhhc2hLZXlcIjpcIm9iamVjdDoyODA4XCIsXCJwZXJzaXN0ZW50XCI6dHJ1ZSxcIm9wZXJhdGlvblwiOlwiYWRkXCJ9XScpO1xyXG4gICAgICAgKi9cclxuICAgICAvLyAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMy9wcmltby1leHBsb3JlL3NlYXJjaD9xdWVyeT1hbnksY29udGFpbnMsZGF0YWJhc2VzJnRhYj1hbGxfY29udGVudF90YWImc2VhcmNoX3Njb3BlPUFMTF9DT05URU5UJlwiXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5EYXRhYmFzZUxpbmtDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBkYXRhYmFzZUxpbmtDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRGF0YWJhc2VMaW5rQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogZGF0YWJhc2VMaW5rSFRNTFxyXG59XHJcbiIsIlxyXG5jbGFzcyBEZXByZWNhdGVkVmlld3NDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdmFyIGRlcHJlY2F0ZWRfdmlkcyA9IFsnVUNMTF9MSU1CVVJHJywnVUNMTF9MRVVWRU4nLCdLVUxldXZlbl9VWCddO1xyXG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmltby1leHBsb3JlJykpO1xyXG4gICAgICAgIGlmICggZGVwcmVjYXRlZF92aWRzLmluY2x1ZGVzKCB3aW5kb3cuYXBwQ29uZmlnLnZpZCAgKSApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cgKFwiVGhpcyBpcyBhbiBvbGQgdmlldyAhISEhXCIpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlICggXCJodHRwczovL1wiK2RvY3VtZW50LmxvY2F0aW9uLmhvc3QgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbkRlcHJlY2F0ZWRWaWV3c0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ11cclxuXHJcbmV4cG9ydCBsZXQgRGVwcmVjYXRlZFZpZXdzQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBEZXByZWNhdGVkVmlld3NDb250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJGh0dHAsICR0cmFuc2xhdGUsIGZlZWRiYWNrU2VydmljZVVSTCwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLm1kRGlhbG9nID0gJG1kRGlhbG9nO1xyXG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XHJcbiAgICB0aGlzLmh0dHAgPSAkaHR0cDtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMID0gZmVlZGJhY2tTZXJ2aWNlVVJMO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG5cclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAkc2NvcGUuY2FuY2VsRmVlZGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IHRoaXMuc2VuZEZlZWRiYWNrO1xyXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IChhbnN3ZXIpID0+IHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgc2VsZi52aWV3ID0gdmlldztcclxuXHJcbiAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgc3ViamVjdDogJHNjb3BlLmZlZWRiYWNrLnN1YmplY3QsXHJcbiAgICAgICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxyXG4gICAgICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXHJcbiAgICAgICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxyXG4gICAgICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICAgICAgaXA6IHNlbGYudmlldy5pcC5hZGRyZXNzLFxyXG4gICAgICAgICAgICB0eXBlOiAnZmVlZGJhY2snLFxyXG4gICAgICAgICAgICBmZWVkYmFjazogJHNjb3BlLmZlZWRiYWNrLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGVtYWlsOiAkc2NvcGUuZmVlZGJhY2sucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmICgkc2NvcGUuZmVlZGJhY2sucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5mZWVkYmFjay5tZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2VsZi5tZERpYWxvZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmh0dHAoe1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIHVybDogdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwsXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xyXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnO1xyXG4gICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nKTtcclxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLic7XHJcbiAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcbiAgICAgICAgJHNjb3BlLmZlZWRiYWNrID0ge1xyXG4gICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICBzdWJqZWN0OiAnZmVlZGJhY2snXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkRpYWxvZ0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckaHR0cCcsICckdHJhbnNsYXRlJywgJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdNZXNzYWdlU2VydmljZSddO1xyXG4iLCJpbXBvcnQgZGlzY2xhaW1lckRpYWxvZ0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvZGlzY2xhaW1lckRpYWxvZy5odG1sJ1xyXG5pbXBvcnQgY29va2llUG9saWN5RGlhbG9nSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X2VuX1VTLmh0bWwnXHJcbmltcG9ydCBkaXNjbGFpbWVyRGlhbG9nX2ZyRlJfSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X2VuX1VTLmh0bWwnXHJcbmltcG9ydCBkaXNjbGFpbWVyRGlhbG9nX25sQkVfSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X25sX0JFLmh0bWwnXHJcbmltcG9ydCBkaXNjbGFpbWVyRGlhbG9nX2VuVVNfSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X2VuX1VTLmh0bWwnXHJcblxyXG5pbXBvcnQgZGlzY2xhaW1lckxpbmtIVE1MIGZyb20gJ2Rpc2NsYWltZXIuaHRtbCdcclxuXHJcbmNsYXNzIGRpc2NsYWltZXJDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG5cclxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICdubF9CRSc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdDb29raWViZWxlaWQnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJDb29raWViZWxlaWRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2VuX1VTJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ0Nvb2tpZSBQb2xpY3knLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJDb29raWUgUG9saWN5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgICdmcl9GUic6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdDb29raWUgUG9saWN5JyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQ29va2llIFBvbGljeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuLyogVG9kbyBSZWZhY3RvcnkgZGlzY2xhaW1lckRpYWxvZyAvIGNvb2tpZVBvbGljeSA/Pz8gKi9cclxuLy8gICAgbGV0IGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nSFRNTDsgXHJcbiAgICAgIGxldCBkaXNjbGFpbWVyRGlhbG9nID0gY29va2llUG9saWN5RGlhbG9nSFRNTDtcclxuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdmcl9GUic6XHJcbiAgICAgICAgZGlzY2xhaW1lckRpYWxvZyA9IGRpc2NsYWltZXJEaWFsb2dfZnJGUl9IVE1MO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmxfQkUnOlxyXG4gICAgICAgIGRpc2NsYWltZXJEaWFsb2cgPSBkaXNjbGFpbWVyRGlhbG9nX25sQkVfSFRNTDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgZGlzY2xhaW1lckRpYWxvZyA9IGRpc2NsYWltZXJEaWFsb2dfZW5VU19IVE1MO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2NvcGUudGl0bGUgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZSddO1xyXG4gICAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZV9sYWJlbCddO1xyXG5cclxuICAgICAgJHNjb3BlLnNob3dEaXNjbGFpbWVyRGlhbG9nID0gZnVuY3Rpb24oJGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IGRpc2NsYWltZXJEaWFsb2csXHJcbiAgICAgICAgICBsb2NhbHM6IHtcclxuICAgICAgICAgICAgaXRlbXM6ICRzY29wZS5pdGVtc1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXJcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gRGlhbG9nQ29udHJvbGxlcigkc2NvcGUsICRtZERpYWxvZywgaXRlbXMpIHtcclxuICAgICAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcclxuICAgICAgICAkc2NvcGUuY2xvc2VEaWFsb2cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmRpc2NsYWltZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBkaXNjbGFpbWVyQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IGRpc2NsYWltZXJDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBkaXNjbGFpbWVyTGlua0hUTUxcclxufSIsIi8qIGNvbXBvbmVudCB0byBkbyBhbGwgeW91ciBleHBlcmltZW50YWwgc3R1ZmYgKi9cclxuLyogW2VufGRpc11hYmxlIGluIGNvbXBvbmVudHMqL1xyXG5cclxuY2xhc3MgRXhwZXJpbWVudENvbnRyb2xsZXIge1xyXG4gXHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwkdGVtcGxhdGVDYWNoZSwgJGNvbXBpbGUsJGluamVjdG9yLCRyb290U2NvcGUsJHRyYW5zbGF0ZSwgJHdpbmRvdykge1xyXG4gICAgY29uc29sZS5sb2coJ0V4cGVyaW1lbnQ6Jyk7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICB0aGlzLiR0ZW1wbGF0ZUNhY2hlID0gJHRlbXBsYXRlQ2FjaGU7XHJcbiAgICB0aGlzLiRjb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XHJcbiAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnJzsgXHJcblxyXG4gICAgY29uc29sZS5sb2coc2VsZilcclxuICAgIGNvbnNvbGUubG9nKCdyb290U2NvcGU6JylcclxuICAgIGNvbnNvbGUubG9nKCRyb290U2NvcGUpXHJcbiAgICBjb25zb2xlLmxvZygndGVtcGxhdGVDYWNoZScpXHJcbiAgICBjb25zb2xlLmxvZygkdGVtcGxhdGVDYWNoZSkgICBcclxuICAgIHZhciB0ZW1wbGF0ZSA9ICR0ZW1wbGF0ZUNhY2hlLmdldCgnY29tcG9uZW50cy9hY2NvdW50L292ZXJ2aWV3L3JlcXVlc3RzT3ZlcnZpZXcvcmVxdWVzdHMtb3ZlcnZpZXcuaHRtbCcpO1xyXG4gICAgLy8gdmFyIHRlbXBsYXRlID0gdGVtcGxhdGUgKyBcIjxIMSBpZD0nb210ZWxhY2h0ZW4nPkxBTEFMQTxpbGwtcmVxdWVzdC1mb3JtLW92ZXJ2aWV3PjwvaWxsLXJlcXVlc3QtZm9ybS1vdmVydmlldz48L0gxPlwiO1xyXG4gICAgdmFyIHRlbXBsYXRlID0gdGVtcGxhdGUgKyBcIjxIMSBpZD0nb210ZWxhY2h0ZW4nPkxBTEFMQTwvSDE+XCI7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnLCB0ZW1wbGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZygkdGVtcGxhdGVDYWNoZS5nZXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnKSlcclxufTtcclxuXHJcbiAgdG9JbGxSZXF1ZXN0VXJsKCkge1xyXG4gICAgICB2YXIgaW5zdGl0dXRpb25Db2RlID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbi5pbnN0aXR1dGlvbkNvZGU7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ2luc3RpdHV0aW9uQ29kZTonICsgaW5zdGl0dXRpb25Db2RlKVxyXG4gICAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnaHR0cHM6Ly9sZXV2ZW4tcHJpbW8uaG9zdGVkLmV4bGlicmlzZ3JvdXAuY29tL3Bkcz9mdW5jPXNzbyZ1cmw9aHR0cDovL2V1LmFsbWEuZXhsaWJyaXNncm91cC5jb20vdmlldy91cmVzb2x2ZXIvJysgaW5zdGl0dXRpb25Db2RlICsnL29wZW51cmw/c3ZjX2RhdD1nZXRpdCZzdmMucHJvZmlsZT1nZXRpdCZkaXJlY3RSZXNvdXJjZVNoYXJpbmdSZXF1ZXN0PXRydWUmbmV3VUk9dHJ1ZSdcclxuICAgICAgdGhpcy53aW5kb3cub3Blbih0aGlzLmlsbFJlcXVlc3RVcmwsICdfZnJlZUlsbCcpO1xyXG4gIH07XHJcbiAgICBcclxuICAkb25Jbml0KCkgeyAgXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nICgnbmV3RWxlbWVudDonKVxyXG4gIC8vICBjb25zb2xlLmxvZyAoYW5ndWxhci5lbGVtZW50KCAnI29tdGVsYWNodGVuJykubGVuZ3RoKVxyXG4gICAvLyBpZiAoIGFuZ3VsYXIuZWxlbWVudCggJ0gxJykubGVuZ3RoID09IDAgKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nICgnXFwndCBJcyBuaSBvbSB0ZSBsYWNodGVuJylcclxuICAgICAgIHZhciBlbGVtZW50TmFtZSA9ICdwcm0tcmVxdWVzdHMtb3ZlcnZpZXcnXHJcbiAgICAgICAvL2xldCBlbGVtZW50ID0gJGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnROYW1lKSk7XHJcbiAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICBsZXQgZWxlbWVudFNjb3BlID0gZWxlbWVudC5zY29wZSgpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyAoZWxlbWVudFNjb3BlKVxyXG4gICAgICAgICB0aGlzLiRjb21waWxlKGVsZW1lbnQpKGVsZW1lbnRTY29wZSk7XHJcbiAgICAgICAgIC8vZWxlbWVudFNjb3BlLiRhcHBseSgpXHJcbiAgICAgICB9ICAgICBcclxuICAvLyAgIH1cclxuICAgIH1cclxufVxyXG5cclxuRXhwZXJpbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgICckdGVtcGxhdGVDYWNoZScsICckY29tcGlsZScsJyRpbmplY3RvcicsJyRyb290U2NvcGUnLCckdHJhbnNsYXRlJywgJyR3aW5kb3cnXVxyXG5cclxuZXhwb3J0IGxldCBleHBlcmltZW50Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEV4cGVyaW1lbnRDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImNsYXNzIGV4cG9zZUp3dENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoV2luZG93RXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLldpbmRvd0V2ZW50TGlzdGVuZXIgPSBXaW5kb3dFdmVudExpc3RlbmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvc2VKd3RDb250cm9sbGVyLiRpbmplY3QgPSBbJ1dpbmRvd0V2ZW50TGlzdGVuZXInXTtcclxuXHJcblxyXG5leHBvcnQgbGV0IGV4cG9zZUp3dENvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogZXhwb3NlSnd0Q29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnJ1xyXG59IiwiXHJcbmNsYXNzIFJlbW92ZUFsZXJ0c0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgICR0cmFuc2xhdGUsICRlbGVtZW50LCAkdGVtcGxhdGVDYWNoZSkge1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSBcImVuX1VTXCJcclxuICAgICAgICBsb2NhbGUgPSBzY29wZS4kcm9vdC4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvc2F2ZWRRdWVyaWVzL2FkZEFsZXJ0VG9hc3QvYWRkLWFsZXJ0LXRvYXN0Lmh0bWwnLGBcclxuICAgICAgICA8bWQtdG9hc3QgbmctY2xhc3M9XCJ7XFwnbW9iaWxlLWRlZmluZVxcJzokY3RybC5kZXRlY3RNb2JpbGUoKSxcXCdsYXlvdXQtY29sdW1uXFwnOiRjdHJsLmRldGVjdE1vYmlsZSgpfVwiIGNsYXNzPVwibWQtdG9hc3QtY29udGVudFwiPlxyXG4gICAgPGRpdiBsYXlvdXQ9XCJyb3dcIiBsYXlvdXQtYWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJtZC10b2FzdC1jb250ZW50XCIgbmctY2xhc3M9XCJ7XFwnZW5kLWNvbnRlbnRcXCc6ISRjdHJsLmRldGVjdE1vYmlsZSgpfVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWQtdG9hc3QtdGV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBuZy1pZj1cIiEkY3RybC5hZGRNb2RlXCIgdHJhbnNsYXRlPVwibnVpLmZhdm9yaXRlcy5zZWFyY2guYWxlcnQubWVzc2FnZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gbmctaWY9XCIkY3RybC5hZGRNb2RlXCIgdHJhbnNsYXRlPVwibnVpLnNhdmVzZWFyY2gubWVzc2FnZS5kZXNjcmlwdGlvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHN0cm9uZyBuZy1pZj1cIiEkY3RybC5hZGRNb2RlXCI+e3skY3RybC5lbWFpbH19PC9zdHJvbmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGxheW91dD1cInJvd1wiIGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCIgY2xhc3M9XCJtZC10b2FzdC1jb250ZW50XCIgbmctY2xhc3M9XCJ7XFwnc3RhcnQtY29udGVudFxcJzohJGN0cmwuZGV0ZWN0TW9iaWxlKCl9XCI+XHJcbiAgICAgICAgPG1kLWJ1dHRvbiBuZy1jbGljaz1cIiRjdHJsLm9uRGlzbWlzcygpXCIgYXJpYS1sYWJlbD1cInt7OjooXFwnbnVpLm1lc3NhZ2UuZGlzbWlzc1xcJyB8IHRyYW5zbGF0ZSl9fSBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZy1zY29wZVwiIHRyYW5zbGF0ZT1cIm51aS5tZXNzYWdlLmRpc21pc3NcIj48L3NwYW4+XHJcbiAgICAgICAgPC9tZC1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9tZC10b2FzdD5cclxuPHBybS1hZGQtYWxlcnQtdG9hc3QtYWZ0ZXIgcGFyZW50LWN0cmw9XCIkY3RybFwiPjwvcHJtLWFkZC1hbGVydC10b2FzdC1hZnRlcj5cclxuICAgICAgICBgKTtcclxuICAgIH1cclxufVxyXG5cclxuUmVtb3ZlQWxlcnRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJHRyYW5zbGF0ZScsICckZWxlbWVudCcsICckdGVtcGxhdGVDYWNoZScgXVxyXG5cclxuZXhwb3J0IGxldCByZW1vdmVBbGVydHNDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IFJlbW92ZUFsZXJ0c0NvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJzxzdHlsZT5tZC10ZW1wbGF0ZSBwcm0tYWRkLWFsZXJ0LXRvYXN0IG1kLXRvYXN0ICpbYXJpYS1sYWJlbD1cInt7XFwnbnVpLmFyaWEuc2F2ZWRRdWVyaWVzTGlzdC5hbGVydFxcJyB8IHRyYW5zbGF0ZX19XCJdIHsgIGRpc3BsYXk6IG5vbmU7IH08L3N0eWxlPidcclxufVxyXG4iLCJjbGFzcyBSZW1vdmVDaGVja0xvY2F0aW9uc0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJGVsZW1lbnQsICR0ZW1wbGF0ZUNhY2hlKSB7XHJcbiAgICAgICAgdmFyIGRpc3BsYXllZEF2YWlsYWJpbGl0eSA9ICRzY29wZS4kY3RybC5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZGlzcGxheWVkQXZhaWxhYmlsaXR5O1xyXG4gICAgICAgIGlmICggZGlzcGxheWVkQXZhaWxhYmlsaXR5LmluZGV4T2YoXCJmdWxsdGV4dF91bmtub3duXCIpID4gLTEgfHwgZGlzcGxheWVkQXZhaWxhYmlsaXR5LmluZGV4T2YoXCJtYXlfYmVfcmVzdHJpY3RlZFwiKSA+IC0xICkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyAoICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5kZWxpdmVyeSApXHJcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCgkc2NvcGUuJGN0cmwucGFyZW50Q3RybC5wYXJlbnRDdHJsLiRlbGVtZW50LCBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCBlbCApXHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubG9jYWxOYW1lID09ICdwcm0tc2VhcmNoLXJlc3VsdC1hdmFpbGFiaWxpdHktbGluZScgKXtcclxuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblJlbW92ZUNoZWNrTG9jYXRpb25zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJGVsZW1lbnQnLCAnJHRlbXBsYXRlQ2FjaGUnIF1cclxuXHJcbmV4cG9ydCBsZXQgcmVtb3ZlQ2hlY2tMb2NhdGlvbnNDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgICBjb250cm9sbGVyOiBSZW1vdmVDaGVja0xvY2F0aW9uc0NvbnRyb2xsZXJcclxufSIsImltcG9ydCBzZWFyY2hUaXBIVE1MIGZyb20gJy4vc2VhcmNoVGlwLmh0bWwnXHJcbmltcG9ydCB0aXBfZW5VU19IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2VuVVMuaHRtbCdcclxuaW1wb3J0IHRpcF9mckZSX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvZnJGUi5odG1sJ1xyXG5pbXBvcnQgdGlwX25sQkVfSFRNTCBmcm9tICcuL3NlYXJjaFRpcC9ubEJFLmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hUaXBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG5cclxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICdubF9CRSc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdab2VrdGlwcycsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIlpvZWt0aXBzIHdlZXJnZXZlblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZW5fVVMnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnU2VhcmNoIFRpcHMnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJTZWFyY2ggVGlwc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZnJfRlInOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQXN0dWNlcz8nLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJBc3R1Y2VzP1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHRpcHNIVE1MID0gdGlwX2VuVVNfSFRNTDtcclxuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdmcl9GUic6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9mckZSX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdubF9CRSc6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9ubEJFX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfZW5VU19IVE1MO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2NvcGUudGl0bGUgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZSddO1xyXG4gICAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZV9sYWJlbCddO1xyXG5cclxuICAgICAgJHNjb3BlLnNob3dTZWFyY2hUaXBzID0gZnVuY3Rpb24oJGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IHRpcHNIVE1MLFxyXG4gICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAkc2NvcGUuaXRlbXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIERpYWxvZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2csIGl0ZW1zKSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hUaXBDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hUaXBDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoVGlwQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoVGlwSFRNTFxyXG59XHJcbiIsIlxyXG5jbGFzcyBTdGF0aWNGb290ZXJDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZywgJGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSBcImVuX1VTXCJcclxuXHJcbiAgICAgICAgdmFyIHZpZXdXaXRoQ3VzdG9tRm9vdGVyID0gWydMaXJpYXMnLCd3ZXJlbGR3aWp6ZXInLCdFQ0InLCdWRElDJ11cclxuLypcclxuICAgICAgICBjb25zb2xlLmxvZyAoc2VsZiApXHJcbiAgICAgICAgY29uc29sZS5sb2cgKHNjb3BlIClcclxuICAgICAgICBjb25zb2xlLmxvZyAoc2NvcGUuJHJvb3QuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSApXHJcbiovXHJcbiAgICAgICAgbG9jYWxlID0gc2NvcGUuJHJvb3QuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdmFyIHZpZCA9IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xyXG4gICAgICAgLy8gICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KHN0YXRpY0Zvb3RlclRlbXBsYXRlTmFtZSwgJ2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaHRtbC90ZW1wbGF0ZXMvZm9vdGVyXycgKyBsb2NhbGUgKyAnLmh0bWwnKTtcclxuKi9cclxuICAgICAgICB2YXIgdmlkID0gd2luZG93LmFwcENvbmZpZ1sndmlkJ107XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlVXJsID0gJ2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaHRtbC90ZW1wbGF0ZXMvZm9vdGVyXycgKyBsb2NhbGUgKyAnLmh0bWwnO1xyXG4gICAgICAgIGlmICggdmlld1dpdGhDdXN0b21Gb290ZXIuaW5jbHVkZXModmlkKSApICB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsID0gJ2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaHRtbC90ZW1wbGF0ZXMvZm9vdGVyXycgKyB2aWQgKyAnXycgKyBsb2NhbGUgKyAnLmh0bWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHNjb3BlLmdldFRlbXBsYXRlVXJsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGVVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGF0aWNGb290ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnLCAnJGVsZW1lbnQnXVxyXG5cclxuZXhwb3J0IGxldCBzdGF0aWNGb290ZXJDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IFN0YXRpY0Zvb3RlckNvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1pbmNsdWRlIHNyYz1cImdldFRlbXBsYXRlVXJsKClcIi8+JyxcclxufVxyXG4iLCJpbXBvcnQgYXV0b0xvZ2luQ2hlY2tib3hIVE1MIGZyb20gJy4vYXV0b0xvZ2luQ2hlY2tib3guaHRtbCdcclxuXHJcbmNsYXNzIEF1dG9Mb2dpbkNoZWNrYm94Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAvKiBSZW1vdmUgdGhlIGxvY2FsU3RvcmFnZSBwYXJhbWV0ZXIgcHJpbW9Qcm9tb3RlTG9naW4gaWYgdGhlIHVybCBjb250YWlucyBjbGVhckxvZ2luICovXHJcbiAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB2YXIgdXJsUGFyYW0gPSBcImNsZWFyTG9naW5cIjtcclxuICAgIHVybFBhcmFtID0gdXJsUGFyYW0ucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcXFxcJCZcIik7XHJcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgdXJsUGFyYW0gKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxyXG4gICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpO1xyXG4gICAgaWYgKHJlc3VsdHMpIHtcclxuICAgICAgaWYgKGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCBcIiBcIikpKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94ID0gZmFsc2U7XHJcbiAgICBzZWxmLmFsd2F5c1NpZ25pbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJpbW9Qcm9tb3RlTG9naW5cIik7XHJcbiAgICBpZiAoc2VsZi5hbHdheXNTaWduaW4pIHtcclxuICAgICAgc2VsZi5hbHdheXNTaWduaW5DaGVja0JveCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmFsd2F5c1NpZ25pbkNoZWNrZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94KSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJywgJ2Fsd2F5c1NpZ25pbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcmltb1Byb21vdGVMb2dpbicpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUHJvbW90ZUxvZ2luQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJG1kRGlhbG9nKSB7XHJcblxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IHBhcmVudEN0cmwgPSAgc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmxcclxuICAgIC8vY29uc29sZS5sb2cgKHNlbGYpXHJcbiAgICB2YXIgbG9jYWxlID0gcGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG4gICBcclxuICAgIHBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2Uuc2lnbkluT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKCk9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pc0xvZ2dlZEluICA9PSB0cnVlKXtcclxuICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJHNjb3BlLnByaW1vUHJvbW90ZUxvZ2luID0gJyc7XHJcbiAgICAkc2NvcGUuc2hvd1NpZ25JblBvcHVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KTtcclxuXHJcbiAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudEVsLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaHRtbC90ZW1wbGF0ZXMvcHJvbW90ZV9sb2dpbl8nICsgbG9jYWxlICsgJy5odG1sJyxcclxuICAgICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgICAgICBwcmltb1Byb21vdGVMb2dpbjogICRzY29wZS5wcmltb1Byb21vdGVMb2dpblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERpYWxvZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2cpIHtcclxuICAgICAgICAkc2NvcGUubG9naW5EaWFsb2cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHBhcmVudEN0cmwubG9naW5TZXJ2aWNlLmhhbmRsZUxvZ2luQ2xpY2soKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUuY2xvc2VEaWFsb2cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAkc2NvcGUuY2hhbmdlUHJvbW90ZU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCRzY29wZS5wcmltb1Byb21vdGVMb2dpbiA9PT0gJ25ldmVyU2lnbmluJyB8fCAkc2NvcGUucHJpbW9Qcm9tb3RlTG9naW4gPT09ICdhbHdheXNTaWduaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nLCAkc2NvcGUucHJpbW9Qcm9tb3RlTG9naW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAvL3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJywgJHNjb3BlLnByaW1vUHJvbW90ZUxvZ2luKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvKiBJZ25vcmUgdGhpcyBpbiBwcm0tbG9naW4tYWxtYS1tYXNodXAsIG9ubHkgaWYgcGFyZW50IGlzIHBybS11c2VyLWFyZWEqL1xyXG4gICAgaWYgKCAoJGVsZW1lbnQubmF0aXZlRWxlbWVudCkuY2xvc2VzdCgncHJtLXVzZXItYXJlYScpICkge1xyXG4gICAgICAgIGlmICghcGFyZW50Q3RybC5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2VbJ3ByaW1vUHJvbW90ZUxvZ2luJ10gPT09ICdhbHdheXNTaWduaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBTcmVpZGVyaWN0IHRvIGxvZ2luICovO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Q3RybC5sb2dpblNlcnZpY2UuaGFuZGxlTG9naW5DbGljaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZXNzaW9uU3RvcmFnZVsncHJpbW9Qcm9tb3RlTG9naW4nXSAmJiAhbG9jYWxTdG9yYWdlWydwcmltb1Byb21vdGVMb2dpbiddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNob3dTaWduSW5Qb3B1cCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJywgJ1NpZ25JblBvcHVwJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEF1dG9Mb2dpbkNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgcGFyZW50Q3RybCA9ICBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybFxyXG4gICAgLy8gSWdub3JlIHRoaXMgaW4gcHJtLWxvZ2luLWFsbWEtbWFzaHVwLCBvbmx5IGlmIHBhcmVudCBpcyBwcm0tdXNlci1hcmVhXHJcbiAgICBpZiAoKCRlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLmNsb3Nlc3QoJ3BybS11c2VyLWFyZWEnKSkge1xyXG4gICAgICAgIGlmICghcGFyZW50Q3RybC5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIHZhciBhdXRoID0gd2luZG93LmFwcENvbmZpZy5hdXRoZW50aWNhdGlvblswXTtcclxuICAgICAgICAgICAgdmFyIGxvZ2luVXJsID0gcGFyZW50Q3RybC5sb2dpblNlcnZpY2UubG9naW5VcmwoYXV0aFsncHJvZmlsZS1uYW1lJ10sIGF1dGhbJ2F1dGhlbnRpY2F0aW9uLXN5c3RlbSddKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGxvZ2luVXJsLnJlcGxhY2UoL2luc3RpdHV0aW9uPShbXiZdKSovLCBcImluc3RpdHV0aW9uPUtVTFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGF1dG9Mb2dpbkNoZWNrYm94Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEF1dG9Mb2dpbkNoZWNrYm94Q29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogYXV0b0xvZ2luQ2hlY2tib3hIVE1MXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgcHJvbW90ZUxvZ2luQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFByb21vdGVMb2dpbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgbGV0IGF1dG9Mb2dpbkNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBBdXRvTG9naW5Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCBhbHRtZXRyaWNIVE1MIGZyb20gJy4vYWx0bWV0cmljLmh0bWwnXHJcblxyXG5jbGFzcyBBbHRNZXRyaWNDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJHdpbmRvdywgJHRpbWVvdXQsIEFsdG1ldHJpY3NTZXJ2aWNlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgaXRlbSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW07XHJcbiAgICAvKlxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcclxuICAgICovXHJcbiAgICBzZWxmLmRvaSA9ICcnO1xyXG4gICAgc2VsZi5yZWNvcmRpZCA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICBpZiAoaXRlbSAmJiBpdGVtLnBueCAmJiBpdGVtLnBueC5hZGRhdGEgJiYgaXRlbS5wbnguYWRkYXRhLmRvaSkge1xyXG4gICAgICBzZWxmLmRvaSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmFkZGF0YS5kb2lbMF07XHJcblxyXG4gICAgICB0aGlzLnJlY29yZGlkID0gc2VsZi5yZWNvcmRpZDtcclxuICAgICAgQWx0bWV0cmljc1NlcnZpY2UuYWRkQWx0bWV0cmljcygnI2FsdG1ldHJpY3NfJyArIHNlbGYucmVjb3JkaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYWx0bWV0cmljQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7IHBhcmVudEN0cmw6ICc8JyB9LFxyXG4gIGNvbnRyb2xsZXI6IEFsdE1ldHJpY0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGFsdG1ldHJpY0hUTUxcclxufVxyXG4iLCJpbXBvcnQgYnJpZWZMb2NhdGlvbnNGb3JCaWJsaW9ncmFwaGljVmlld0hUTUwgZnJvbSAnLi9icmllZkxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3Lmh0bWwnXHJcblxyXG5jbGFzcyBCcmllZkxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3Q29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsIEZpbHRlckxvY2F0aW9uc1NlcnZpY2UpIHtcclxuICAgICAgICBzZWxmID0gdGhpc1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcclxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB0aGlzLnZpZCA9IHdpbmRvdy5hcHBDb25maWcudmlkO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyTG9jYXRpb25zU2VydmljZSA9IEZpbHRlckxvY2F0aW9uc1NlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybDtcclxuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLnBhcmVudEN0cmwucmVzdWx0O1xyXG4gICAgICAgIHRoaXMucG54ID0gdGhpcy5pdGVtLnBueDtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuZGVsaXZlcnlfbGlicmFyeSA9ICB0aGlzLkZpbHRlckxvY2F0aW9uc1NlcnZpY2UuZmlsdGVyTG9jYXRpb25zKHRoaXMucG54KTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cgKCAgdGhpcy5kZWxpdmVyeV9saWJyYXJ5IClcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLiRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpWzBdO1xyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG5CcmllZkxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3Q29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnRmlsdGVyTG9jYXRpb25zU2VydmljZSddO1xyXG5cclxuZXhwb3J0IGxldCBicmllZkxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3Q29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBCcmllZkxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3Q29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiBicmllZkxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3SFRNTFxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBzb3VyY2VJY29uSFRNTCBmcm9tICcuL3NvdXJjZUljb24uaHRtbCdcclxuXHJcbmNsYXNzIFNvdXJjZUljb25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIHBhcmVudEN0cmwgPSAkc2NvcGUuJHBhcmVudC4kY3RybC5wYXJlbnRDdHJsO1xyXG4gICAgdmFyIGljb25Db25mID0gW3tcclxuICAgICAgJ3NvdXJjZWlkJzogJ2xpcmlhcycsXHJcbiAgICAgICdpY29uVXJsJzogJy8vbGltby5saWJpcy5iZS9wcmltb19saWJyYXJ5L2xpYndlYi9saWJpcy9pbWFnZXMvbGlyaWFzLmpwZycsXHJcbiAgICAgICdpY29uVGV4dCc6ICdMaXJpYXMnXHJcbiAgICB9XTtcclxuXHJcbiAgICB2YXIgaWNvbkNvbmZTb3VyY2VzID0gaWNvbkNvbmYubWFwKG9iaiA9PiBvYmouc291cmNlaWQpO1xyXG5cclxuICAgIHNlbGYuc291cmNlaWQgPSBudWxsO1xyXG4gICAgaWYgKCdzb3VyY2VpZCcgaW4gcGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sKSB7XHJcbiAgICAgIHNlbGYuc291cmNlaWQgPSBwYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wuc291cmNlaWRbMF0udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIGlmIChpY29uQ29uZlNvdXJjZXMuaW5jbHVkZXMoc2VsZi5zb3VyY2VpZCkpIHtcclxuICAgICAgICBzZWxmLmljb24gPSBpY29uQ29uZi5maW5kKGZ1bmN0aW9uKHgpIHtcclxuICAgICAgICAgIHJldHVybiB4LnNvdXJjZWlkID09PSBzZWxmLnNvdXJjZWlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnZGl2JykuYXBwZW5kKCRjb21waWxlKHNvdXJjZUljb25IVE1MKSgkc2NvcGUpKTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5Tb3VyY2VJY29uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgc291cmNlSWNvbkNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBTb3VyY2VJY29uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQ29sbGVjdGlvbnNIVE1MIGZyb20gJy4vaHRtbC9zZWFyY2gtY29sbGVjdGlvbnMuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaENvbGxlY3Rpb25zQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAvL21pZ2h0IGJlIG5lZWRlZCBhZnRlciBuZXh0IHJlbGVhc2VcclxuICAgIC8qc2VsZi4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLmlzR2FsbGVyeUxvYmJ5PSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pc0dhbGxlcnlMb2JieTtcclxuICAgIHRoaXMuZ2V0Q29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbjsqL1xyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKmdldENvbGxlY3Rpb24oKSB7XHJcbiAgICBpZighdGhpcy5pc0dhbGxlcnlMb2JieSAmJiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5jdXJyZW50Q29sbGVjdGlvbiAhPSB1bmRlZmluZWQpe1xyXG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuY3VycmVudENvbGxlY3Rpb24ubmFtZTtcclxuICAgIH1cclxuICB9OyovXHJcblxyXG59XHJcblxyXG5TZWFyY2hDb2xsZWN0aW9uc0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IHNlYXJjaENvbGxlY3Rpb25zQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaENvbGxlY3Rpb25zQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoQ29sbGVjdGlvbnNIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHsgZW5kaWFubmVzcyB9ICBmcm9tIFwib3NcIjtcclxuXHJcbmNsYXNzIGZpbHRlckZhY2V0VmFsdWVzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgICAgICBjb25zdCBmYWNldHNGaWx0ZXJzID0gW3tcclxuICAgICAgICAgICAgdmlkOiBcIkpFU1VJVFNcIixcclxuICAgICAgICAgICAgZmlsdGVyczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwibGlicmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtcIktVTF9HT1NBX0xJQlwiLCBcIktVTF9HQklCX0xJQlwiLCBcIktVTF9HUEFSX0xJQlwiLCBcIkFORVRfVUEtQ1NUXCJdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZG9tYWluXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImluY2x1ZGVcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW1wiTElCSVNuZXQgQ2F0YWxvZ3VlXCIsIFwiUnV1c2Jyb2VjZ2Vub290c2NoYXBcIl1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgbGV0IHZpZGZhY2V0c0ZpbHRlcnMgPSBmYWNldHNGaWx0ZXJzLmZpbHRlcihmID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGYudmlkID09IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnZpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh2aWRmYWNldHNGaWx0ZXJzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCB2aWRmYWNldHNGaWx0ZXIgPSB2aWRmYWNldHNGaWx0ZXJzWzBdXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cztcclxuICAgICAgICAgICAgfSwgKG4sIG8pID0+IHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKG4gIT0gbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2aWRmYWNldHNyZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGZhY2V0c0ZpbHRlci5maWx0ZXJzLmZvckVhY2godmlkRmFjZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRmYWNldHNyZXN1bHRzID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMubWFwKGZhY2V0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmYWNldC5uYW1lID09IHZpZEZhY2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWNldC52YWx1ZXMgPSBmYWNldC52YWx1ZXMuZmlsdGVyKGZhY2V0VmFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZpZEZhY2V0LnR5cGUgPT09ICdpbmNsdWRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpZEZhY2V0LnZhbHVlcy5pbmNsdWRlcyhmYWNldFZhbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZpZEZhY2V0LnR5cGUgPT09ICdleGNsdWRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF2aWRGYWNldC52YWx1ZXMuaW5jbHVkZXMoZmFjZXRWYWwudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZmlsdGVyRmFjZXRWYWx1ZXNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBmaWx0ZXJGYWNldFZhbHVlc0NvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogZmlsdGVyRmFjZXRWYWx1ZXNDb250cm9sbGVyXHJcbn0iLCIvL2ZhY2V0cy5mYWNldC5mYWNldF9zZWFyY2hfYWxzbyBpbiBcImZhY2V0IGxhYmVsc1wiXHJcbmNsYXNzIFNlYXJjaEFsc29Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUpe1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cztcclxuICAgIH0sIChuLG8pID0+IHtcclxuICAgICAgLy9pZiAobiAhPSBvKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzLmZpbHRlcihmID0+IHtyZXR1cm4gZi5uYW1lID09ICdzZWFyY2hfYWxzbyd9KS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRTZXJ2aWNlLnJlc3VsdHMudW5zaGlmdCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfYWxzbycsXHJcbiAgICAgICAgICAgIGRpc3BsYXllZFR5cGU6ICdleGFjdCcsXHJcbiAgICAgICAgICAgIGxpbWl0Q291bnQ6IDAsXHJcbiAgICAgICAgICAgIGZhY2V0R3JvdXBDb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAvL31cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hBbHNvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczp7cGFyZW50Q3RybDonPCd9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Db250cm9sbGVyXHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaEFsc29Cb2R5SFRNTCBmcm9tICcuL3NlYXJjaEFsc29Cb2R5Lmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hBbHNvQm9keUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRsb2NhdGlvbil7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgdGhpcy50YXJnZXRzID0gdGhpcy5fdGFyZ2V0cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5IHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRHcm91cC5uYW1lO1xyXG4gIH1cclxuXHJcbiAgX3RhcmdldHMoKSB7XHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgXCJuYW1lXCI6IFwiVW5pQ2F0XCIsXHJcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly91bmljYXQuYmUvdW5pQ2F0P2Z1bmM9c2VhcmNoJnVpTGFuZ3VhZ2U9ZW4mcXVlcnk9XCIsXHJcbiAgICAgIFwiaW1nXCI6IFwiL3ByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9pbWcvdW5pY2F0X2ljb24ucG5nXCIsXHJcbiAgICAgIFwidG9vbHRpcFwiOiBcImxicy5udWkuc2VhcmNoX2Fsc28udG9vbHRpcC51bmljYXRcIixcclxuICAgICAgbWFwcGluZzogZnVuY3Rpb24gbWFwcGluZyhzZWFyY2gpIHtcclxuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHJldHVybiB0ZXJtc1syXSB8fCBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG5cclxuU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2NhdGlvbiddO1xyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hBbHNvQm9keUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0JvZHlDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBzZWFyY2hBbHNvQm9keUhUTUxcclxufVxyXG4iLCJpbXBvcnQgc2VhcmNoQWxzb0JvZHlIVE1MIGZyb20gJy4vc2VhcmNoQWxzb0JvZHkuaHRtbCdcclxuXHJcbmNsYXNzIFNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGxvY2F0aW9uKXtcclxuICAgIHRoaXMubG9jYXRpb24gPSAkbG9jYXRpb247XHJcbiAgICB0aGlzLnRhcmdldHMgPSB0aGlzLl90YXJnZXRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb24uc2VhcmNoKCkucXVlcnkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldEdyb3VwLm5hbWU7XHJcbiAgfVxyXG5cclxuICBfdGFyZ2V0cygpIHtcclxuICAgIHJldHVybiBbe1xyXG4gICAgICBcIm5hbWVcIjogXCJCaWJsaW90aGVlay5iZVwiLFxyXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmJpYmxpb3RoZWVrLmJlL2NhdGFsb2d1cz9xPVwiLFxyXG4gICAgICBcImltZ1wiOiBcIi9wcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaW1nL2JpYl9iZS5wbmdcIixcclxuICAgICAgXCJ0b29sdGlwXCI6IFwibGJzLm51aS5zZWFyY2hfYWxzby50b29sdGlwLmRlQmliXCIsXHJcbiAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIG1hcHBpbmcoc2VhcmNoKSB7XHJcbiAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICByZXR1cm4gdGVybXNbMl0gfHwgXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcblNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0JvZHlCaWJDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaEFsc29Cb2R5QmliQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoQWxzb0JvZHlIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHNlYXJjaEFsc29Cb2R5SFRNTCBmcm9tICcuL3NlYXJjaEFsc29Cb2R5Lmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hBbHNvQm9keUdvb2dsZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRsb2NhdGlvbil7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgdGhpcy50YXJnZXRzID0gdGhpcy5fdGFyZ2V0cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5IHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRHcm91cC5uYW1lO1xyXG4gIH1cclxuXHJcbiAgX3RhcmdldHMoKSB7XHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgIFwibmFtZVwiOiBcIkdvb2dsZSBTY2hvbGFyXCIsXHJcbiAgICAgICBcInVybFwiOiBcImh0dHBzOi8vc2Nob2xhci5nb29nbGUuY29tL3NjaG9sYXI/cT1cIixcclxuICAgICAgIFwiaW1nXCI6IFwiL3ByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9pbWcvZ29vZ2xlX2ljb24ucG5nXCIsXHJcbiAgICAgICBcInRvb2x0aXBcIjogXCJsYnMubnVpLnNlYXJjaF9hbHNvLnRvb2x0aXAuZ29vZ2xlX3Njb2xhclwiLFxyXG4gICAgICAgbWFwcGluZzogZnVuY3Rpb24gbWFwcGluZyhzZWFyY2gpIHtcclxuICAgICAgICAgdmFyIHRlcm1zID0gc2VhcmNoLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgcmV0dXJuIHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAgICB9XHJcbiAgICAgfSxcclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hBbHNvQm9keUdvb2dsZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvY2F0aW9uJ107XHJcblxyXG5leHBvcnQgbGV0IHNlYXJjaEFsc29Cb2R5R29vZ2xlQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcclxuICBjb250cm9sbGVyOiBTZWFyY2hBbHNvQm9keUdvb2dsZUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHNlYXJjaEFsc29Cb2R5SFRNTFxyXG59XHJcbiIsImltcG9ydCBzZWFyY2hBbHNvQm9keUhUTUwgZnJvbSAnLi9zZWFyY2hBbHNvQm9keS5odG1sJ1xyXG5cclxuY2xhc3MgU2VhcmNoQWxzb0JvZHlXb3JsZGNhdENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRsb2NhdGlvbil7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gJGxvY2F0aW9uO1xyXG4gICAgdGhpcy50YXJnZXRzID0gdGhpcy5fdGFyZ2V0cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnNlYXJjaCgpLnF1ZXJ5IHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZmFjZXRHcm91cC5uYW1lO1xyXG4gIH1cclxuXHJcbiAgX3RhcmdldHMoKSB7XHJcbiAgICByZXR1cm4gW3tcclxuICAgICAgXCJuYW1lXCI6IFwiV29ybGRjYXRcIixcclxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy53b3JsZGNhdC5vcmcvc2VhcmNoP3E9XCIsXHJcbiAgICAgIFwiaW1nXCI6IFwiL3ByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9pbWcvd29ybGRjYXRfaWNvbi5wbmdcIixcclxuICAgICAgXCJ0b29sdGlwXCI6IFwibGJzLm51aS5zZWFyY2hfYWxzby50b29sdGlwLndvcmxkY2F0XCIsXHJcbiAgICAgIG1hcHBpbmc6IGZ1bmN0aW9uIG1hcHBpbmcoc2VhcmNoKSB7XHJcbiAgICAgICAgdmFyIHR5cGVfbWFwcGluZ3MgPSB7XHJcbiAgICAgICAgICBcImFueVwiOiBcImt3XCIsXHJcbiAgICAgICAgICBcInRpdGxlXCI6IFwidGlcIixcclxuICAgICAgICAgIFwiY3JlYXRvclwiOiBcImF1XCIsXHJcbiAgICAgICAgICBcInN1YmplY3RcIjogXCJzdVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdGVybXMgPSBzZWFyY2guc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHZhciB0eXBlID0gdHlwZV9tYXBwaW5nc1t0ZXJtc1swXV0gfHwgXCJrd1wiO1xyXG4gICAgICAgIHZhciBxdWVyeSA9IHRlcm1zWzJdIHx8IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIHR5cGUgKyAnOicgKyBxdWVyeTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hBbHNvQm9keVdvcmxkY2F0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9jYXRpb24nXTtcclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoQWxzb0JvZHlXb3JsZGNhdENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoQWxzb0JvZHlXb3JsZGNhdENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHNlYXJjaEFsc29Cb2R5SFRNTFxyXG59XHJcbiIsImltcG9ydCBwYXlNeUZpbmVzSFRNTCBmcm9tICcuL3BheU15RmluZXMuaHRtbCdcclxuXHJcbmNsYXNzIFBheU15RmluZXNDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuc2hvd1BheU15RmluZXMgPSBmYWxzZTsgIFxyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eS1VMZXV2ZW4vLnRlc3Qodmlldy5jb2RlKSkge1xyXG4gICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgIGlmICh1c2VyLmZpbmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UGF5TXlGaW5lcyA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgcGF5TXlGaW5lc0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczp7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFBheU15RmluZXNDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBwYXlNeUZpbmVzSFRNTFxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGUgYWx0bWV0cmljcyBjb21wb25lbnQgY29udHJvbGxlci4gKGh0dHBzOi8vZ2l0aHViLmNvbS9EZXQtS29uZ2VsaWdlLUJpYmxpb3Rlay9wcmltby1leHBsb3JlLXJleC9ibG9iL21hc3Rlci9qcy9hbHRtZXRyaWNzLmNvbXBvbmVudC5qcylcclxuICpcclxuICovXHJcbmltcG9ydCBBbHRtZXRyaWNzQmFkZ2VIVE1MIGZyb20gJy4vYWx0bWV0cmljc0JhZGdlLmh0bWwnXHJcblxyXG5jbGFzcyBBbHRtZXRyaWNzQmFkZ2VDb250cm9sbGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRyb290U2NvcGUsICR3aW5kb3csICR0aW1lb3V0LCBBbHRtZXRyaWNzU2VydmljZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi4kZWxlbWVudCA9ICRlbGVtZW50O1xyXG4gICAgc2VsZi4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLkFsdG1ldHJpY3NTZXJ2aWNlID0gQWx0bWV0cmljc1NlcnZpY2U7XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5wYXJlbnRDdHJsID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmw7XHJcbiAgICBzZWxmLml0ZW0gPSBzZWxmLnBhcmVudEN0cmwuaXRlbTtcclxuICAgIHNlbGYucmVjb3JkaWQgPSBzZWxmLml0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICBzZWxmLmRvaSA9ICcnO1xyXG5cclxuICAgIC8vcG9seWZpbGxcclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdClcclxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24ocykge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubWF0Y2hlcyhzKSkgcmV0dXJuIGVsO1xyXG4gICAgICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50IHx8IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgIC8vZW5kIHBvbHlmaWxsXHJcblxyXG4gICAgaWYgKHNlbGYuaXRlbSAmJiBzZWxmLml0ZW0ucG54ICYmIHNlbGYuaXRlbS5wbnguYWRkYXRhICYmIHNlbGYuaXRlbS5wbnguYWRkYXRhLmRvaSkge1xyXG4gICAgICAgIHNlbGYuZG9pID0gc2VsZi5pdGVtLnBueC5hZGRhdGEuZG9pWzBdO1xyXG4gICAgICAgIHNlbGYuQWx0bWV0cmljc1NlcnZpY2UuYWRkQWx0bWV0cmljcygnI2Z1bGxfYWx0bWV0cmljc18nICsgc2VsZi5yZWNvcmRpZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIHZhciBhbHRtZXRyaWNzU2VjdGlvbiA9IHtcclxuICAgICAgICAgICAgc2Nyb2xsSWQ6IFwiYWx0bWV0cmljc1wiLFxyXG4gICAgICAgICAgICBzZXJ2aWNlTmFtZTogXCJhbHRtZXRyaWNzXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCBzZWxmLnBhcmVudEN0cmwuZnVsbFZpZXdTZXJ2aWNlLmdldFNlcnZpY2VzKCBzZWxmLnBhcmVudEN0cmwuaXRlbSwgc2VsZi5wYXJlbnRDdHJsLm9yaWdpbmF0b3IpICkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24oc2VydmljZXMpIHtcclxuICAgICAgICAgICAgICAvLyBBZGQgdG8gc2VydmljZXMgaWYgbm90IGFscmVhZCBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgIGlmICggc2VydmljZXMuZmluZEluZGV4KHNlcnZpY2UgPT4gc2VydmljZS5zY3JvbGxJZCA9PT0gXCJhbHRtZXRyaWNzXCIpIDwgMCApe1xyXG4gICAgICAgICAgICAgICAgc2VydmljZXMuc3BsaWNlKHNlcnZpY2VzLmxlbmd0aCwgMTAsIGFsdG1ldHJpY3NTZWN0aW9uKTsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCBzZWxmLmRvaSAhPT0gJycgKSB7XHJcbiAgICAgIHZhciB1bmJpbmRXYXRjaGVyID0gdGhpcy4kc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3JldHVybiBzZWxmLiRlbGVtZW50WzBdLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoNFt0cmFuc2xhdGU9XCJicmllZi5yZXN1bHRzLnRhYnMuQWx0bWV0cmljc1wiXScpO1xyXG4gICAgICAgIHJldHVybiBzZWxmLiRlbGVtZW50WzBdLmNsb3Nlc3QoJyNmdWxsVmlldycpLnF1ZXJ5U2VsZWN0b3IoJ2g0W3RyYW5zbGF0ZT1cImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJdJylcclxuICAgICAgfSwgZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbCkge1xyXG4gICAgICAgICAgLy9HZXQgdGhlIHNlY3Rpb24gYm9keSBhc3NvY2lhdGVkIHdpdGggdGhlIHZhbHVlIHdlJ3JlIHdhdGNoaW5nXHJcbiAgICAgICAgICBsZXQgYWx0bWV0cmljc0NvbnRhaW5lciA9IG5ld1ZhbC5jbG9zZXN0KCdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignZGl2LnNlY3Rpb24tYm9keScpO1xyXG4gICAgICAgICAgbGV0IGFsdG1ldHJpY3NSZXN1bHQgPSBzZWxmLiRlbGVtZW50WzBdO1xyXG4gICAgICAgICAgaWYgKGFsdG1ldHJpY3NDb250YWluZXIgJiYgYWx0bWV0cmljc0NvbnRhaW5lci5hcHBlbmRDaGlsZCAmJiBhbHRtZXRyaWNzUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGFsdG1ldHJpY3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWx0bWV0cmljc1Jlc3VsdCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5fYWx0bWV0cmljX2VtYmVkX2luaXQoYWx0bWV0cmljc0NvbnRhaW5lcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1bmJpbmRXYXRjaGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFsdG1ldHJpY3NCYWRnZUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBBbHRtZXRyaWNzQmFkZ2VDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBBbHRtZXRyaWNzQmFkZ2VIVE1MXHJcbn1cclxuIiwiaW1wb3J0IExvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3SFRNTCBmcm9tICcuL2xvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3Lmh0bWwnXHJcblxyXG5jbGFzcyBMb2NhdGlvbnNGb3JCaWJsaW9ncmFwaGljVmlld0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsIEZpbHRlckxvY2F0aW9uc1NlcnZpY2UpIHtcclxuICAgICAgICBzZWxmID0gdGhpc1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcclxuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcclxuICAgICAgICB0aGlzLnZpZCA9IHdpbmRvdy5hcHBDb25maWcudmlkO1xyXG4gICAgICAgIHRoaXMuRmlsdGVyTG9jYXRpb25zU2VydmljZSA9IEZpbHRlckxvY2F0aW9uc1NlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgJG9uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhcmVudEN0cmwgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybDtcclxuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLnBhcmVudEN0cmwuaXRlbTtcclxuICAgICAgICB0aGlzLnBueCA9IHRoaXMuaXRlbS5wbng7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmRlbGl2ZXJ5X2xpYnJhcnkgPSAgdGhpcy5GaWx0ZXJMb2NhdGlvbnNTZXJ2aWNlLmZpbHRlckxvY2F0aW9ucyh0aGlzLnBueCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nICggdGhpcy5kZWxpdmVyeV9saWJyYXJ5KVxyXG5cclxuICAgICBcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLiRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpWzBdO1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0TG9jYXRpb25zTGlua3NTZWN0aW9uKClcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRMb2NhdGlvbnNMaW5rc1NlY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRlbGl2ZXJ5X2xpYnJhcnkgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuZGVsaXZlcnlfbGlicmFyeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBhcnJheSBpcyBkZWZpbmVkIGFuZCBoYXMgYXQgbGVhc3Qgb25lIGVsZW1lbnRcclxuXHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbnNMaW5rc1NlY3Rpb25EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSWQ6IFwibG9jYXRpb25zTGlua3NcIixcclxuICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBcImxvY2F0aW9uc0xpbmtzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJicmllZi5yZXN1bHRzLnRhYnMuTG9jYXRpb25zTGlua3NcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25zTGlua3NTZWN0aW9uRWxlbWVudCA9IHRoaXMuJGVsZW1lbnQgLy8uZmluZCgnbG9jYXRpb25zLWZvci1iaWJsaW9ncmFwaGljLXZpZXcnKVswXTtcclxuICAgICAgICAgICAgdGhpcy5pbnNlcnRTZWN0aW9uKGxvY2F0aW9uc0xpbmtzU2VjdGlvbkRhdGEsIGxvY2F0aW9uc0xpbmtzU2VjdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRTZWN0aW9uKHNlY3Rpb25EYXRhLCBzZWN0aW9uRWxlbWVudCkge1xyXG4gICAgICAgIC8vIFRoZSB0aXRsZSBvZiB0aGUgbmV3IHNlY3Rpb24gaXMgdXNlZCB0byBpZGVuaXRmeSB0aGUgc2VjdGlvblxyXG4gICAgICAgIC8vIGVsZW1lbnQuXHJcbiAgICAgICAgbGV0IHNlY3Rpb25UaXRsZVNlbGVjdG9yID0gJ2g0W3RyYW5zbGF0ZT1cIicgKyBzZWN0aW9uRGF0YS50aXRsZSArICdcIl0nO1xyXG5cclxuICAgICAgICAvLyBXZSBzZXQgdXAgdGhlIHdhdGNoZXIgYmVmb3JlIGluc2VydGluZyB0aGUgc2VjdGlvbiBkYXRhLFxyXG4gICAgICAgIC8vIHRvIGVuc3VyZSB0aGF0IHRoZSB3YXRjaGVyIGNhdGNoZXMgdGhlIGNoYW5nZS5cclxuICAgICAgICB0aGlzLndhaXRGb3JmdWxsVmlld1NlcnZpY2Uoc2VjdGlvbkRhdGEpXHJcbiAgICAgICAgdGhpcy53YWl0Rm9yVGFyZ2V0VGhlbk1vdmVTZWN0aW9uKHNlY3Rpb25UaXRsZVNlbGVjdG9yLCBzZWN0aW9uRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2FpdCBmb3IgdGhlIHRhcmdldCBlbGVtZW50IHRvIGJlIGNyZWF0ZWQuXHJcbiAgICB3YWl0Rm9yVGFyZ2V0VGhlbk1vdmVTZWN0aW9uKHNlY3Rpb25UaXRsZVNlbGVjdG9yLCBzZWN0aW9uRWxlbWVudCkge1xyXG4gICAgICAgIGxldCB1bmJpbmRXYXRjaGVyID0gdGhpcy4kc2NvcGUuJHdhdGNoKCgpID0+XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25UaXRsZVNlbGVjdG9yKSxcclxuICAgICAgICAgICAgKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlU2VjdGlvbkVsZW1lbnQobmV3VmFsLCBzZWN0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5iaW5kV2F0Y2hlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlU2VjdGlvbkVsZW1lbnQoaWRlbnRpZmllckVsZW1lbnQsIHNlY3Rpb25FbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSBpZGVudGlmaWVyRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdO1xyXG4gICAgICAgIC8vIE1vdmUgdGhlIHNlY3Rpb24gaW50byB0aGUgdGFyZ2V0IGVsZW1lbnQuXHJcbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgJiYgdGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZCkge1xyXG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHNlY3Rpb25FbGVtZW50WzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2FpdEZvcmZ1bGxWaWV3U2VydmljZShzZWN0aW9uRGF0YSkge1xyXG4gICAgICAgIGxldCB1bmJpbmRXYXRjaGVyID0gdGhpcy4kc2NvcGUuJHdhdGNoKCgpID0+XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Q3RybC5mdWxsVmlld1NlcnZpY2Uuc2VydmljZXNBcnJheSxcclxuICAgICAgICAgICAgKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRTZWN0aW9uRGF0YShzZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5iaW5kV2F0Y2hlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRTZWN0aW9uRGF0YShzZWN0aW9uRGF0YSkge1xyXG4gICAgICAgIHRoaXMucGFyZW50Q3RybC5zZXJ2aWNlcy5zcGxpY2UodGhpcy5wYXJlbnRDdHJsLnNlcnZpY2VzLmxlbmd0aCAtIDEsIDAsIHNlY3Rpb25EYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXdDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICdGaWx0ZXJMb2NhdGlvbnNTZXJ2aWNlJ107XHJcblxyXG5leHBvcnQgbGV0IGxvY2F0aW9uc0ZvckJpYmxpb2dyYXBoaWNWaWV3Q29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBMb2NhdGlvbnNGb3JCaWJsaW9ncmFwaGljVmlld0NvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogTG9jYXRpb25zRm9yQmlibGlvZ3JhcGhpY1ZpZXdIVE1MXHJcbn0iLCJpbXBvcnQgYmV0YVN3aXRjaEhUTUwgZnJvbSAnLi9iZXRhU3dpdGNoLmh0bWwnXHJcblxyXG5jbGFzcyBCZXRhU3dpdGNoQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuXHJcbiAgICAkc2NvcGUuc2hvd0JldGFTd2l0Y2ggPSB0cnVlO1xyXG4gICAgJHNjb3BlLnVzZUJldGEgPSB0cnVlOyAgXHJcblxyXG4gICAgJHNjb3BlLm9uQ2hhbmdlVXNlQmV0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCEgJHNjb3BlLnVzZUJldGEpe1xyXG4gICAgICAgIHNlbGYuZ29Ub09sZFVJKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnb1RvT2xkVUkoKSB7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPScvcHJpbW9fbGlicmFyeS9saWJ3ZWIvYWN0aW9uL3NlYXJjaC5kbz92aWQ9JysgdGhpcy5vbGRWaWQ7XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgdmFyIExpbmtUb0JldGFWaWV3cyA9IHtcclxuICAgICAgJ0FDVic6J0FDVicsXHJcbiAgICAgICdCUEInOidCUEInLFxyXG4gICAgICAnRkFSTyc6J0ZBUk8nLFxyXG4gICAgICAnRk9ERklOJzonRk9ERklOJyAsXHJcbiAgICAgICdHQ0xEJzonR0NMRCcsXHJcbiAgICAgICdHU0InOidHU0InLFxyXG4gICAgICAnR1NHJzonR1NHJyxcclxuICAgICAgJ0lNRUMnOidJTUVDJyxcclxuICAgICAgJ0tBRE9DJzonS0FET0MnLFxyXG4gICAgICAnS0JDJzonS0JDJyxcclxuICAgICAgJ0tNS0cnOidLTUtHJyxcclxuICAgICAgJ0tVTGV1dmVuJzonS1VMZXV2ZW5fVVgnLFxyXG4gICAgICAnTElCQVInOidMSUJBUicsXHJcbiAgICAgICdMVUNBJzonTFVDQV9VWCcsXHJcbiAgICAgICdOQkInOidOQkInLFxyXG4gICAgICAnT0RJU0VFJzonT0RJU0VFX1VYJyxcclxuICAgICAgJ09GTyc6J09GTycsXHJcbiAgICAgICdSQklOUyc6J1JCSU5TJyxcclxuICAgICAgJ1JFTEknOidSRUxJJyxcclxuICAgICAgJ1JNQ0EnOidSTUNBJyxcclxuICAgICAgJ1NFUlYnOidTRVJWJyxcclxuICAgICAgJ1RNT1JFSyc6J1RNT1JFS19VWCcsXHJcbiAgICAgICdUTU9SRU0nOidUTU9SRU1BX1VYJyxcclxuICAgICAgJ1ZESUMnOidWRElDJyxcclxuICAgICAgJ1ZJVkVTX0tBVEhPJzonVklWRVNfS0FUSE9fVVgnLFxyXG4gICAgICAnVklWRVNfS0hCTyc6J1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnVkxQJzonVkxQJyxcclxuICAgICAgJ0tVTGV1dmVuX1RNT1JFTSc6J0tVTGV1dmVuX1RNT1JFTV9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9VQ0xMJzonS1VMZXV2ZW5fVUNMTF9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9UTU9SRUsnOidLVUxldXZlbl9UTU9SRUtfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fTFVDQSc6J0tVTGV1dmVuX0xVQ0FfVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fVklWRVNfS0hCTyc6J0tVTGV1dmVuX1ZJVkVTX0tIQk9fVVgnLFxyXG4gICAgICAnS1VMZXV2ZW5fT0RJU0VFJzonS1VMZXV2ZW5fT0RJU0VFX1VYJyxcclxuICAgICAgJ0tITElNJzonVUNMTF9MSU1CVVJHX1VYJyxcclxuICAgICAgJ0tITCc6J1VDTExfTEVVVkVOX1VYJ1xyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eRUNCLy50ZXN0KHZpZXcuY29kZSkpIHtcclxuICAgICAgICB0aGlzLnNob3dCZXRhU3dpdGNoID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vbGRWaWQgPSBPYmplY3Qua2V5cyhMaW5rVG9CZXRhVmlld3MpLmZpbmQoa2V5ID0+IExpbmtUb0JldGFWaWV3c1trZXldID09PSB2aWV3LmNvZGUpIHx8IHZpZXcuY29kZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYmV0YVN3aXRjaENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBCZXRhU3dpdGNoQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogYmV0YVN3aXRjaEhUTUxcclxufVxyXG4iLCJpbXBvcnQgaG9tZUljb25IVE1MIGZyb20gJy4vaG9tZUljb24uaHRtbCdcclxuXHJcbmNsYXNzIEhvbWVJY29uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgc2VsZi5saW5rdHlwZSA9ICdob21lSWNvbic7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKCh2aWV3KSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAgIC8vbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgICBsZXQgdmlkID0gIHdpbmRvdy5hcHBDb25maWcudmlkO1xyXG4gICAgICBpZiAodmlkID09IFwiRUNCXCIpIHtcclxuICAgICAgICBzZWxmLmxpbmt0eXBlID0gXCJuZXdTZWFyY2hCdXR0b25cIjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICBsZXQgbGlicmFyeUxvZ28gPSB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ287XHJcbiAgICAgIGxldCBsb2NhbGVMaWJyYXJ5TG9nbyA9ICdjdXN0b20vJyArIHZpZCArICcvaW1nL2xpYnJhcnktbG9nby0nICsgbG9jYWxlICsgJy5wbmcnO1xyXG5cclxuICAgICAgaWYgKGxpYnJhcnlMb2dvICE9PSBsb2NhbGVMaWJyYXJ5TG9nbykge1xyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICB1cmw6IGxvY2FsZUxpYnJhcnlMb2dvLFxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvID0gbG9jYWxlTGlicmFyeUxvZ287XHJcbiAgICAgICAgICAgICRjb21waWxlKCRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpKSgkc2NvcGUpO1xyXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcclxuXHJcbiAgICAgICRzY29wZS5yZW1vdmVTdGlja3lGYWNldHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZhY2V0cyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldCcpO1xyXG4gICAgICAgIGlmIChmYWNldHMpIHtcclxuICAgICAgICAgIHZhciBzdGlja3lGYWNldHMgPSBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5nZXRTdGlja3lGYWNldHMoKVxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGlja3lGYWNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UucmVtb3ZlU3RpY2t5RmFjZXQoc3RpY2t5RmFjZXRzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuSG9tZUljb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICckY29tcGlsZScsICckaHR0cCcsICckcm9vdFNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGhvbWVJY29uQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEhvbWVJY29uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogaG9tZUljb25IVE1MXHJcbn0iLCJjbGFzcyBMYW5ndWFnZURlcGVuZGVudExvZ29Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHAsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKCh2aWV3KSA9PiB7XHJcbiAgICAgIC8vbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgbGV0IHZpZCA9ICB3aW5kb3cuYXBwQ29uZmlnLnZpZDtcclxuXHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlOyAvL3dpbmRvdy5Qcmltby5leHBsb3JlLmhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuaTE4blNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcclxuICAgICAgbGV0IGxvY2FsZUxpYnJhcnlMb2dvID0gJ2N1c3RvbS8nICsgdmlkICsgJy9pbWcvbGlicmFyeS1sb2dvLScgKyBsb2NhbGUgKyAnLnBuZyc7XHJcblxyXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgICAgJGNvbXBpbGUoJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkpKCRzY29wZSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuTGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBsYW5ndWFnZURlcGVuZGVudExvZ29Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogTGFuZ3VhZ2VEZXBlbmRlbnRMb2dvQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufSIsImltcG9ydCBuZXdTZWFyY2hCdXR0b25IVE1MIGZyb20gJy4vbmV3U2VhcmNoQnV0dG9uLmh0bWwnXHJcblxyXG5jbGFzcyBOZXdTZWFyY2hCdXR0b25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHAsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuc2NvcGUgPSAkc2NvcGU7XHJcbiAgICBzZWxmLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5wcmVwZW5kKCRjb21waWxlKG5ld1NlYXJjaEJ1dHRvbkhUTUwpKCRzY29wZSkpO1xyXG5cclxuICAgIFByaW1vLnZpZXcudGhlbigodmlldykgPT4ge1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG4gICAgICBpZiAodmlkID09IFwiRUNCXCIpIHtcclxuICAgICAgICBzZWxmLmxpbmt0eXBlID0gXCJuZXdTZWFyY2hCdXR0b25cIjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9ICcvcHJpbW8tZXhwbG9yZS9zZWFyY2g/dmlkPScgKyB2aWQgKyBcIiZsYW5nPVwiICsgbG9jYWxlO1xyXG5cclxuICAgICAgc2VsZi5yZW1vdmVTdGlja3lGYWNldHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHBybUFkdmFuY2VkU2VhcmNoID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJtLWFkdmFuY2VkLXNlYXJjaCcpO1xyXG4gICAgICAgIGlmKHBybUFkdmFuY2VkU2VhcmNoKXtcclxuICAgICAgICAgIGxldCBjID0gcHJtQWR2YW5jZWRTZWFyY2hbMF0uY3RybCgpO1xyXG4gICAgICAgICAgYy5jbGVhclNlYXJjaEZvcm0oKTtcclxuICAgICAgICAgIGMuJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZhY2V0cyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldCcpO1xyXG4gICAgICAgIGlmIChmYWNldHMpIHtcclxuICAgICAgICAgIGxldCBzdGlja3lGYWNldHMgPSBmYWNldHNbMF0uY3RybCgpLmZhY2V0U2VydmljZS5nZXRTdGlja3lGYWNldHMoKVxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGlja3lGYWNldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmFjZXRzWzBdLmN0cmwoKS5mYWNldFNlcnZpY2UucmVtb3ZlU3RpY2t5RmFjZXQoc3RpY2t5RmFjZXRzW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBuZXdTZWFyY2hCdXR0b25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogTmV3U2VhcmNoQnV0dG9uQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgdmlld0xvZ29IVE1MIGZyb20gJy4vdmlld0xvZ28uaHRtbCdcclxuXHJcbmNsYXNzIFZpZXdMb2dvQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkZWxlbWVudCwgJGNvbXBpbGUsICRodHRwLCAkcm9vdFNjb3BlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgc2VsZi5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KClbMF0uZmlyc3RDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpWzBdLmZpcnN0Q2hpbGQpO1xyXG5cclxuXHJcbiAgICAkdHJhbnNsYXRlKCdsaW1vLmluc3RpdHV0ZVVybCcpLnRoZW4oXHJcbiAgICAgIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlICAhPSAgJ2h0dHA6Ly93d3cubGliaXMuYmUvJyApe1xyXG4gICAgICAgIHNlbGYuaG9tZVBhZ2VMaW5rID0gbWVzc2FnZVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgLy9sZXQgdmlkID0gdmlldy5jb2RlO1xyXG4gICAgICBsZXQgdmlkID0gIHdpbmRvdy5hcHBDb25maWcudmlkO1xyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcbiAgICAgIGxldCBsb2NhbGVMaWJyYXJ5TG9nbyA9ICdjdXN0b20vJyArIHZpZCArICcvaW1nL2xpYnJhcnktbG9nby0nICsgbG9jYWxlICsgJy5wbmcnO1xyXG4gICAgICBzZWxmLmhvbWVQYWdlTGluayA9ICcvcHJpbW8tZXhwbG9yZS9zZWFyY2g/dmlkPScgKyB2aWQgKyBcIiZsYW5nPVwiICsgbG9jYWxlO1xyXG4gICAgICBzZWxmLmxvY2FsZUxpYnJhcnlMb2dvID0gd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvO1xyXG5cclxuICAgICAgIGlmICggc2VsZi5sb2NhbGVMaWJyYXJ5TG9nbyAhPT0gbG9jYWxlTGlicmFyeUxvZ28pIHtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgdXJsOiBsb2NhbGVMaWJyYXJ5TG9nbyxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvID0gbG9jYWxlTGlicmFyeUxvZ287XHJcbiAgICAgICAgICBzZWxmLmxvY2FsZUxpYnJhcnlMb2dvID0gIGxvY2FsZUxpYnJhcnlMb2dvXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICBzZWxmLmxvY2FsZUxpYnJhcnlMb2dvO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblZpZXdMb2dvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckZWxlbWVudCcsICckY29tcGlsZScsICckaHR0cCcsICckcm9vdFNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IHZpZXdMb2dvQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFZpZXdMb2dvQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogdmlld0xvZ29IVE1MXHJcbn1cclxuIiwiaW1wb3J0IGZlZWRiYWNrSFRNTCBmcm9tICcuL2ZlZWRiYWNrLmh0bWwnXHJcbmltcG9ydCBmZWVkYmFja0RpYWxvZ0hUTUwgZnJvbSAnLi9mZWVkYmFja0RpYWxvZy5odG1sJ1xyXG5cclxuY2xhc3MgRmVlZGJhY2tDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgRmVlZGJhY2tTZXJ2aWNlKXtcclxuICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2RpdicpLmFwcGVuZCgkY29tcGlsZShmZWVkYmFja0hUTUwpKCRzY29wZSkpO1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UgPSBGZWVkYmFja1NlcnZpY2U7XHJcbiAgfVxyXG5cclxuICBzaG93RmVlZGJhY2tGb3JtKCRldmVudCkge1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2Uuc2hvdygkZXZlbnQsIGZlZWRiYWNrRGlhbG9nSFRNTCk7XHJcbiAgfVxyXG59XHJcblxyXG5GZWVkYmFja0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJ0ZlZWRiYWNrU2VydmljZSddO1xyXG5cclxuZXhwb3J0IGxldCBmZWVkYmFja0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBGZWVkYmFja0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiLyogY29tcG9uZW50IHRvIGRvIGFsbCB5b3VyIGV4cGVyaW1lbnRhbCBzdHVmZiAqL1xyXG4vKiBbZW58ZGlzXWFibGUgaW4gY29tcG9uZW50cyAqL1xyXG5cclxuY2xhc3MgUmVjb21tZW5kYXRpb25JdGVtQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbi8qXHJcbiAgICBjb25zb2xlLmxvZyhzZWxmKVxyXG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS5jb25maWd1cmF0aW9uVXRpbC52aWQgKTtcclxuICAgIGNvbnNvbGUubG9nKCBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS52aWQgKTtcclxuICAgIGNvbnNvbGUubG9nKCBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5pbnN0ICk7XHJcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudXNlckluc3RpdHV0aW9uICk7XHJcbiovXHJcbiAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5vcmdHZXRMaW5rID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuZ2V0TGluaztcclxuICAgIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmdldExpbmsgPSBmdW5jdGlvbigpIHsgXHJcbiAgICAgIHZhciBnZXRJdExpbmsgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5vcmdHZXRMaW5rKCk7XHJcbiAgICAgIHJldHVybiBnZXRJdExpbmsucmVwbGFjZSgvXFwvb3BlbnVybFxcL1teL10qXFwvW14/XSovLCBcIi9vcGVudXJsXFwvXCIrIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnVzZXJJbnN0aXR1dGlvbiArXCJcXC9cIisgc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLmNvbmZpZ3VyYXRpb25VdGlsLnZpZCkgXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuUmVjb21tZW5kYXRpb25JdGVtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnXVxyXG5cclxuZXhwb3J0IGxldCByZWNvbW1lbmRhdGlvbkl0ZW1Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUmVjb21tZW5kYXRpb25JdGVtQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgaWxsUmVxdWVzdEZvcm1IVE1MIGZyb20gJy4vaWxsUmVxdWVzdEZvcm0uaHRtbCdcclxuXHJcbmNsYXNzIGlsbFJlcXVlc3RGb3JtQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICR0cmFuc2xhdGUsICR3aW5kb3csICRyb290U2NvcGUpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9ICRzY29wZTtcclxuICAgICAgICB0aGlzLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnJztcclxuICAgICAgICB0aGlzLnNob3dMaW5rVG9JbGxSZXF1ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnN0aXR1dGlvbkNvZGUgPSBcIlwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAkb25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5yZXF1ZXN0c1NlcnZpY2UuYWNjb3VudFNlcnZpY2UubGlua2VkVXNlclNlbGVjdG9yU2VydmljZS5zZWxlY3RlZEluc3RpdHV0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGl0dXRpb25Db2RlID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbi5pbnN0aXR1dGlvbkNvZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGFsbWFfY29kZXMgPSB0aGlzLnJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLm1hcHBpbmdUYWJsZXNDYWNoZS5NQVBQSU5HX1RBQkxFU19DQUNIRVtcIkFsbWEgSW5zdGl0dXRpb24gQ29kZXNcIl07XHJcbiAgICAgICAgICAgIHZhciB1c2VyX2luc3QgPSB0aGlzLnJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLnVzZXJJbnN0aXR1dGlvbjtcclxuICAgICAgICAgICAgdmFyIGFsbWFfY29kZSA9IGFsbWFfY29kZXMuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai50YXJnZXQgPT0gdXNlcl9pbnN0OyB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cgKGFsbWFfY29kZVswXSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGl0dXRpb25Db2RlID0gYWxtYV9jb2RlWzBdLnNvdXJjZTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2luc3RpdHV0aW9uQ29kZTonICsgaW5zdGl0dXRpb25Db2RlKVxyXG4gICAgICAgIGlmICh0aGlzLmluc3RpdHV0aW9uQ29kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMaW5rVG9JbGxSZXF1ZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9JbGxSZXF1ZXN0VXJsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RpdHV0aW9uQ29kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMaW5rVG9JbGxSZXF1ZXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJ2h0dHBzOi8vbGV1dmVuLXByaW1vLmhvc3RlZC5leGxpYnJpc2dyb3VwLmNvbS9wZHM/ZnVuYz1zc28mdXJsPWh0dHA6Ly9ldS5hbG1hLmV4bGlicmlzZ3JvdXAuY29tL3ZpZXcvdXJlc29sdmVyLycgKyB0aGlzLmluc3RpdHV0aW9uQ29kZSArICcvb3BlbnVybD9zdmNfZGF0PWdldGl0JnN2Yy5wcm9maWxlPWdldGl0JmRpcmVjdFJlc291cmNlU2hhcmluZ1JlcXVlc3Q9dHJ1ZSZuZXdVST10cnVlJ1xyXG4gICAgICAgICAgICB0aGlzLndpbmRvdy5vcGVuKHRoaXMuaWxsUmVxdWVzdFVybCwgJ19mcmVlSWxsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmlsbFJlcXVlc3RGb3JtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckd2luZG93JywnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBpbGxSZXF1ZXN0Rm9ybUNvbmZpZyA9IHtcclxuICAgIGJpbmRpbmdzOiB7XHJcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogaWxsUmVxdWVzdEZvcm1Db250cm9sbGVyLFxyXG4gICAgdGVtcGxhdGU6IGlsbFJlcXVlc3RGb3JtSFRNTFxyXG59XHJcbiIsImltcG9ydCBicm93emluZUhUTUwgZnJvbSAnLi9icm93emluZS5odG1sJ1xyXG5cclxuY2xhc3MgQnJvd3ppbmVDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgaXRlbSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnJlc3VsdDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLT5cIixzZWxmLCBpdGVtLCAkc2NvcGUpO1xyXG5cclxuICAgICAgICBzZWxmLnJlY29yZGlkID0gJyc7XHJcblxyXG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0ucG54ICYmIGl0ZW0ucG54LmFkZGF0YSkge1xyXG4gICAgICAgICAgICBzZWxmLnJlY29yZGlkID0gaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBicm93emluZVdhdGNoZXIgPSAkc2NvcGUuJHdhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBicm93emluZS5wcmltbyA9PT0gJ29iamVjdCdcclxuICAgICAgICB9LCAobiwgbykgPT4ge1xyXG4gICAgICAgICAgICBpZiAobiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyaWdnZXIgYnJvd3ppbmUgZm9yOlwiLCBzZWxmLnJlY29yZGlkKVxyXG4gICAgICAgICAgICAgICAgbGV0IHNjb3BlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICRjdHJsOiBzZWxmLnBhcmVudEN0cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5icm93emluZS5wcmltby5zZWFyY2hSZXN1bHQoc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgYnJvd3ppbmVXYXRjaGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5Ccm93emluZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGJyb3d6aW5lQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBCcm93emluZUNvbnRyb2xsZXJcclxufSIsImltcG9ydCBwbnhYbWxIVE1MIGZyb20gJy4vcG54WG1sLmh0bWwnXHJcbmNsYXNzIFBueFhtbENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5yZWNvcmRpZCA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMucmVjb3JkaWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmIChob3RrZXlzKSB7XHJcbiAgICAgIGhvdGtleXMoXCJjdHJsK2VudGVyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgc2VsZi52aXNpYmxlID0gIXNlbGYudmlzaWJsZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbngteG1sJykpKSB7XHJcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLnZpc2libGUgPyAnZmxleCcgOiAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncG54LXhtbC10cmlnZ2VyJykubGVuZ3RoID09IDApIHtcclxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BueC14bWwtdHJpZ2dlcicpO1xyXG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpmaXhlZDtsZWZ0OjA7Ym90dG9tOjA7aGVpZ2h0OjIwcHg7d2lkdGg6MjBweDt6LWluZGV4OjEwMDA7YmFja2dyb3VuZC1jb2xvcjpibGFjaztvcGFjaXR5Oi4wMycpO1xyXG4gICAgICBkaXYub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG54LXhtbCcpKSkge1xyXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHBueFhtbENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBQbnhYbWxDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBwbnhYbWxIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHJlcG9ydEFQcm9ibGVtSFRNTCBmcm9tICcuL3JlcG9ydEFQcm9ibGVtLmh0bWwnXHJcbmltcG9ydCByZXBvcnRBUHJvYmxlbURpYWxvZ0hUTUwgZnJvbSAnLi9yZXBvcnRBUHJvYmxlbURpYWxvZy5odG1sJ1xyXG5cclxuY2xhc3MgUmVwb3J0QVByb2JsZW1Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJGh0dHAscmVwb3J0QVByb2JsZW1VUkwpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICgvXm51aVxcLmdldGl0XFwuLy50ZXN0KHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnRpdGxlKSkge1xyXG4gICAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdoNCcpLmFmdGVyKCRjb21waWxlKHJlcG9ydEFQcm9ibGVtSFRNTCkoJHNjb3BlKSk7XHJcblxyXG4gICAgICBsZXQgcmVjb3JkRGF0YSA9IHNlbGYuY3VycmVudFJlY29yZDtcclxuXHJcbiAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgc2VsZi5zaG93UmVwb3J0QVByb2JsZW1Gb3JtID0gKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXHJcbiAgICAgICAgICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiByZXBvcnRBUHJvYmxlbURpYWxvZ0hUTUwsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCAkbWREaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5yZXBvcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICdyZXBvcnQgYSBwcm9ibGVtJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhbmNlbFJlcG9ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAkbWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VuZFJlcG9ydCA9IGZ1bmN0aW9uKGFuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5yZWNvcmRpZFswXSxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoVHlwZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbklkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlY29yZERhdGEucG54LmRpc3BsYXkudGl0bGVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Jlc291cmNlX3Byb2JsZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICRzY29wZS5yZXBvcnQuc3ViamVjdCxcclxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBmZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgaXA6IHNlbGYudmlldy5pcC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICRzY29wZS5yZXBvcnQubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICByZXBseVRvOiAkc2NvcGUucmVwb3J0LnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnJlcG9ydC5yZXBseVRvLmxlbmd0aCA+IDAgJiYgJHNjb3BlLnJlcG9ydC5tZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVwb3J0QVByb2JsZW1VUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLmZhaWwnKSB8fCAnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfTsgLy9zaG93UmVwb3J0QVByb2JsZW1Gb3JtXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRSZWNvcmQoKSB7XHJcbiAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXHJcbiAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xyXG4gICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnRDdHJsKTtcclxuICAgICAgcmV0dXJuIGVsZW1lbnRDdHJsLml0ZW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcblJlcG9ydEFQcm9ibGVtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyRodHRwJywncmVwb3J0QVByb2JsZW1VUkwnXTtcclxuXHJcbmV4cG9ydCBsZXQgcmVwb3J0QVByb2JsZW1Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUmVwb3J0QVByb2JsZW1Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCByZXF1ZXN0QUNvcHlIVE1MIGZyb20gJy4vcmVxdWVzdEFDb3B5Lmh0bWwnXHJcbmltcG9ydCByZXF1ZXN0QUNvcHlEaWFsb2dIVE1MIGZyb20gJy4vcmVxdWVzdEFDb3B5RGlhbG9nLmh0bWwnXHJcblxyXG5jbGFzcyBSZXF1ZXN0QUNvcHlDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgJG1kRGlhbG9nLCAkaHR0cCwgJHJvb3RTY29wZSwgcmVxdWVzdEFDb3B5VVJMLCBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuICAgIC8vIElmIHlvdSB3YW50IHRvIGFkZCB0aGUgYnV0dG9uIHRvIHRoZSB0aXRsZSAobGlrZSByZXBvcnQgYSBwcm9ibGVtKVxyXG4gICAgLy9sZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnRpdGxlXHJcbiAgICAvL2xldCBhcHBlbmRCdXR0b25UbyA9ICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2g0Jyk7XHJcblxyXG4gICAgLy8gZnVsbCAvLyBsZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnNlcnZpY2UudGl0bGU7XHJcbiAgICAvLyBmdWxsIC8vIGxldCBhcHBlbmRCdXR0b25UbyA9ICRlbGVtZW50LnBhcmVudCgpO1xyXG5cclxuICAgIGxldCBzZXJ2aWNlVGl0bGVDb2RlID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwudGl0bGU7XHJcbiAgICAvL2xldCBhcHBlbmRCdXR0b25UbyA9ICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgbGV0IGFwcGVuZEJ1dHRvblRvID0gYW5ndWxhci5lbGVtZW50KCAoJGVsZW1lbnQubmF0aXZlRWxlbWVudCkuY2xvc2VzdCgncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcicpLnF1ZXJ5U2VsZWN0b3IoJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXItYWZ0ZXInKSApXHJcbiAgICBcclxuICAgIGxldCByZWNvcmREYXRhID0gc2VsZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgLyogY2FwdGNoYSBpbXBsZW1lbnRhdGlvbiAoQWxyZWFkeSB1c2VkIGluIClcclxuICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vVml2aWRDb3J0ZXgvYW5ndWxhci1yZWNhcHRjaGFcclxuICAgICAgICAqL1xyXG4gICAgbGV0IGNhcGNoYVB1YmxpY0tleSA9IHdpbmRvdy5hcHBDb25maWdbXCJzeXN0ZW0tY29uZmlndXJhdGlvblwiXVtcIlB1YmxpYyBDYXB0Y2hhIEtleVwiXTtcclxuXHJcbiAgICBsZXQgVHlwZXNTaG93UmVxdWVzdEFDb3B5ID0gWydjaGFwdGVyJywnam91cm5hbC1hcnRpY2xlJywndGhlc2lzLWRpc3NlcnRhdGlvbicsJ2NvbmZlcmVuY2UnLCdyZXBvcnQnLCdkYXRhc2V0JywnYy1ib29rcmV2aWV3JywnbWVkaWEnLCdzb2Z0d2FyZSddO1xyXG4gICAgbGV0IFN0YXR1c1Nob3dSZXF1ZXN0QUNvcHkgPSBbJ3B1Ymxpc2hlZCddO1xyXG5cclxuICAgIGlmICgvXm51aVxcLmdldGl0XFwuLy50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpKSB7XHJcbiAgICAgIHZhciBTaG93UmVxdWVzdEFDb3B5VHlwZSA9IHJlY29yZERhdGEucG54LmZhY2V0cy5sZmMxNi5maWx0ZXIodmFsdWUgPT4gLTEgIT09IFR5cGVzU2hvd1JlcXVlc3RBQ29weS5pbmRleE9mKHZhbHVlKSk7XHJcbiAgICAgIHZhciBTaG93UmVxdWVzdEFDb3B5U3RhdHVzID0gcmVjb3JkRGF0YS5wbnguZmFjZXRzLmxmYzEyLmZpbHRlcih2YWx1ZSA9PiAtMSAhPT0gU3RhdHVzU2hvd1JlcXVlc3RBQ29weS5pbmRleE9mKHZhbHVlKSk7XHJcblxyXG4gICAgICBpZiAoKCEvXm51aVxcLmdldGl0XFwudGFiMV9vbmxfbm9yZXN0cmljdC8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkgJiYgU2hvd1JlcXVlc3RBQ29weVR5cGUubGVuZ3RoID4gMCAmJiBTaG93UmVxdWVzdEFDb3B5U3RhdHVzLmxlbmd0aCA+IDApIHtcclxuXHJcblxyXG4gICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgICBzZWxmLm9uQ2FtcHVzID0gc2VsZi51c2VyLmlzT25DYW1wdXMoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIHNlcnZpY2VUaXRsZUNvZGUgKVxyXG4gICAgICAgICAgICBpZiAoICEgL15udWlcXC5nZXRpdFxcLnRhYjFfb25sX21heXJlc3RyaWN0Ly50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpICB8fCAvXm51aVxcLmdldGl0XFwudGFiMV9vbmxfbWF5cmVzdHJpY3QvLnRlc3Qoc2VydmljZVRpdGxlQ29kZSkgJiYgISBzZWxmLm9uQ2FtcHVzICkge1xyXG4gICAgICAgICAgICAgIGFwcGVuZEJ1dHRvblRvLmFmdGVyKCRjb21waWxlKHJlcXVlc3RBQ29weUhUTUwpKCRzY29wZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgc2VsZi5zaG93UmVxdWVzdEFDb3B5Rm9ybSA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcmVxdWVzdEFDb3B5RGlhbG9nSFRNTCxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUsICRtZERpYWxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgbGV0IHBueERpc3BsYXkgPSAgcmVjb3JkRGF0YS5wbnguZGlzcGxheTtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmdDYXB0Y2hhUmVzcG9uc2UgPSAnJztcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNhcGNoYVB1YmxpY0tleSA9IGNhcGNoYVB1YmxpY0tleTtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdGl2YXRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwbnhEaXNwbGF5LnRpdGxlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dG9yOiAoKCkgPT4geyAoIHBueERpc3BsYXkuY29udHJpYnV0b3IgPyBwbnhEaXNwbGF5LmNvbnRyaWJ1dG9yWzBdIDogJycgKSB9KSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0b3I6IHBueERpc3BsYXkuY3JlYXRvciA/IHBueERpc3BsYXkuY3JlYXRvclswXSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzcGFydG9mOiBwbnhEaXNwbGF5LmlzcGFydG9mID8gcG54RGlzcGxheS5pc3BhcnRvZlswXSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICdyZXF1ZXN0IGEgY29weSdcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNldFdpZGdldElkID0gZnVuY3Rpb24gKHdpZGdldElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdDcmVhdGVkIHdpZGdldCBJRDogJXMnLCB3aWRnZXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLndpZGdldElkID0gd2lkZ2V0SWQ7XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZXRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IHJlc3BvbnNlIGZyb20gY2FwdHVyZTpcIiArIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ0NhcHRjaGFSZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuY2JFeHBpcmF0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRXhwaXJhdGlvbiBEaXNhYmxlIFN1Ym1pdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5nQ2FwdGNoYVJlc3BvbnNlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuY2FuY2VsUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZW5kUmVxdWVzdCA9IGZ1bmN0aW9uIChhbnN3ZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAnZy1yZWNhcHRjaGEtcmVzcG9uc2UnOiAkc2NvcGUuZ0NhcHRjaGFSZXNwb25zZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25JZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkOiByZWNvcmREYXRhLnBueC5jb250cm9sLnNvdXJjZWlkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVjb3JkSWQ6IHJlY29yZERhdGEucG54LmNvbnRyb2wucmVjb3JkaWRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VSZWNvcmRJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5zb3VyY2VyZWNvcmRpZFswXSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwbnhEaXNwbGF5LnRpdGxlWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udHJpYnV0b3I6ICgoKSA9PiB7ICggcG54RGlzcGxheS5jb250cmlidXRvciA/IHBueERpc3BsYXkuY29udHJpYnV0b3JbMF0gOiAnJyApIH0pKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yOiBwbnhEaXNwbGF5LmNyZWF0b3IgPyBwbnhEaXNwbGF5LmNyZWF0b3JbMF0gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzcGFydG9mOiBwbnhEaXNwbGF5LmlzcGFydG9mID8gcG54RGlzcGxheS5pc3BhcnRvZlswXSA6ICcnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcGx5VG86ICRzY29wZS5yZXF1ZXN0LnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbW90aXZhdGlvbjogJHNjb3BlLnJlcXVlc3QubW90aXZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2cgKCBkYXRhIClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucmVxdWVzdC5yZXBseVRvLmxlbmd0aCA+IDAgJiYgJHNjb3BlLnJlcXVlc3QubW90aXZhdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDpyZXF1ZXN0QUNvcHlVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLiRyb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwuJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnJlcXVlc3RfYV9jb3B5LnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IHRoZSByZXF1ZXN0IGhhZCBiZWVuIHNlbmQhJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2UuX19zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiAkc2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURlbGF5OiA1MDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi4kcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLiR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5yZXF1ZXN0X2FfY29weS5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgdGhlIHJlcXVlc3QuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIG1lc3NhZ2UgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5fX3Nob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICRzY29wZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRGVsYXk6IDUwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTsgLy9zaG93UmVxdWVzdEFDb3B5Rm9ybVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gLy9pZiAoICggISAvXm51aVxcLmdldGl0XFwudGFiMV9vbmxfbm9yZXN0cmljdC8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSAgKSApe1xyXG4gICAgfSAvLyBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdChzZXJ2aWNlVGl0bGVDb2RlKSkgIFxyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRSZWNvcmQoKSB7XHJcbiAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXHJcbiAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Q3RybCk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Q3RybC5pdGVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5SZXF1ZXN0QUNvcHlDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICckbWREaWFsb2cnLCAnJGh0dHAnLCAnJHJvb3RTY29wZScsICdyZXF1ZXN0QUNvcHlVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgcmVxdWVzdEFDb3B5Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlcXVlc3RBQ29weUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0iLCJpbXBvcnQgcmVxdWVzdEFDb3B5T2ZFc0RvY0hUTUwgZnJvbSAnLi9yZXF1ZXN0QUNvcHlPZkVzRG9jLmh0bWwnXHJcblxyXG5jbGFzcyBSZXF1ZXN0QUNvcHlPZkVzRG9jQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgcmVxdWVzdEFDb3B5T2ZFc0RvY1VSTCwgJHdpbmRvdywgV2luZG93RXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLiRyb290U2NvcGUgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC4kcm9vdFNjb3BlO1xyXG4gICAgICAgIHNlbGYuV2luZG93RXZlbnRMaXN0ZW5lciA9IFdpbmRvd0V2ZW50TGlzdGVuZXI7XHJcbiAgICAgICAgLy8gSWYgeW91IHdhbnQgdG8gYWRkIHRoZSBidXR0b24gdG8gdGhlIHRpdGxlIChsaWtlIHJlcG9ydCBhIHByb2JsZW0pXHJcbiAgICAgICAgLy9sZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnRpdGxlXHJcbiAgICAgICAgLy9sZXQgYXBwZW5kQnV0dG9uVG8gPSAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdoNCcpO1xyXG5cclxuICAgICAgICBpZiAoc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuc2VydmljZSkge1xyXG4gICAgICAgICAgICBsZXQgc2VydmljZVRpdGxlQ29kZSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnNlcnZpY2UudGl0bGU7XHJcbiAgICAgICAgICAgIGxldCBhcHBlbmRCdXR0b25UbyA9ICRlbGVtZW50LnBhcmVudCgpO1xyXG4gICAgICAgICAgICBsZXQgcmVjb3JkRGF0YSA9IHNlbGYuY3VycmVudFJlY29yZDtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgbGV0IFR5cGVzU2hvd1JlcXVlc3RBQ29weU9mRXNEb2MgPSBbJ2NoYXB0ZXInLCAnam91cm5hbC1hcnRpY2xlJywgJ3RoZXNpcy1kaXNzZXJ0YXRpb24nLCAnY29uZmVyZW5jZScsICdyZXBvcnQnLCAnZGF0YXNldCcsICdjLWJvb2tyZXZpZXcnLCAnbWVkaWEnLCAnc29mdHdhcmUnXTtcclxuICAgICAgICAgICAgbGV0IFN0YXR1c1Nob3dSZXF1ZXN0QUNvcHlPZkVzRG9jID0gWydwdWJsaXNoZWQnXTtcclxuICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgIGlmICgvXm51aVxcLmdldGl0XFwuLy50ZXN0KHNlcnZpY2VUaXRsZUNvZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBzZWxmIClcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlKVxyXG4gICAgICAgICAgICAgICAgbGV0IHByaW1vRXhwbG9yZUp3dCA9IHNlbGYuJHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC5qd3RVdGlsU2VydmljZS5zdG9yYWdlVXRpbC5zZXNzaW9uU3RvcmFnZS5wcmltb0V4cGxvcmVKd3Q7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLiRyb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwuand0VXRpbFNlcnZpY2Uuc3RvcmFnZVV0aWwuc2Vzc2lvblN0b3JhZ2UucHJpbW9FeHBsb3JlSnd0KVxyXG5cclxuICAgICAgICAgICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBzZWxmLm9uQ2FtcHVzID0gc2VsZi51c2VyLmlzT25DYW1wdXMoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuaXNMb2dnZWRJbiA9IHNlbGYudXNlci5pc0xvZ2dlZEluKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRpc3BsYXlfbmFtZSA9IHNlbGYudXNlci5kaXNwbGF5X25hbWVcclxuICAgICAgICAgICAgICAgIHNlbGYuZW1haWwgPSBzZWxmLnVzZXIuZW1haWxcclxuKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaW1vX2luc3RfY29kZSA9IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnaW5zdGl0dXRpb24nXVsnaW5zdGl0dXRpb24tY29kZSddIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbG1hX2luc3RfbWFwcGluZyA9ICB3aW5kb3cuYXBwQ29uZmlnWydtYXBwaW5nLXRhYmxlcyddWydBbG1hIEluc3RpdHV0aW9uIENvZGVzJ11cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWxtYV9jb2RlID0gKGFsbWFfaW5zdF9tYXBwaW5nLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmoudGFyZ2V0ID09IHByaW1vX2luc3RfY29kZTsgfSkgKVswXS5zb3VyY2UxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbnggPSByZWNvcmREYXRhLnBueDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXBwZW5kQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIFJlcXVlc3QgYnV0dG9uIG9ubHkgZm9yIEFyY2hpdi1tYXRlcmlhbCBmcm9tIEVTVkxQIGFuZCBhdmFpbGFibGUgJ29uY2FtcHVzJyBPUiBTaWduZWQgaW4gXHJcbiAgICAgICAgICAgICAgICAgICAgKiAgT25seSBwaHlzaWNhbCBvciBSZXN0cmljdGVkIE9ubGluZSBtYXRlcmlhbCBjYW4gYmUgcmVxdWVzdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoICh1c2VyLmlzT25DYW1wdXMoKSB8fCB1c2VyLmlzTG9nZ2VkSW4oKSApICYmIHBueC5jb250cm9sLnNvdXJjZWlkLmluY2x1ZGVzKFwiRVNWTFBfc2NvcGVBcmNoaXZcIikgKSAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmZhY2V0cy50b3BsZXZlbC5pbmNsdWRlcyhcInByaW50X2NvcGllc1wiKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEJ1dHRvbiA9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRlbGl2ZXJ5LnJlc2RlbHNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueC5kZWxpdmVyeS5yZXNkZWxzY29wZS5pbmNsdWRlcyhcIlJFU1ZMUFwiKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQnV0dG9uID10cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXBwZW5kQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEJ1dHRvblRvLmFmdGVyKCRjb21waWxlKHJlcXVlc3RBQ29weU9mRXNEb2NIVE1MKSgkc2NvcGUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYub3BlblVybFRvSUxMID0gKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwOi8vc2VydmljZXMubGliaXMuYmUvaWxsZm9ybS8zMktVTF9TRVJWP3JmdC5nZW5yZT1ib29rJnJmdC5hZHZpc29yPSZyZnQuYXU9JnJmdC5hdWNvcnA9JnJmdC5hdWZpcnN0PSZyZnQuYXVsYXN0PSZyZnQuY29udHJpYnV0b3I9JnJmdC5jcmVhdG9yPSZyZnQuYXRpdGxlPSZyZnQuYnRpdGxlPVdvb2QmcmZ0Lmp0aXRsZT0mcmZ0LnN0aXRsZT0mcmZ0LnRpdGxlPVdvb2QmcmZ0LnNlcmllcz0mcmZ0LmRlZ3JlZT0mcmZ0LmRlc2NyaXB0aW9uPSZyZnQuZWRpdGlvbj0mcmZ0LmlkZW50aWZpZXI9JnJmdC5laXNibj0mcmZ0LmVpc3NuPSZyZnQuaXNibj05NzgwNzE0ODczNDgwJnJmdC5pc3NuPSZyZnQucGFnZXM9JnJmdC5wYXJ0PSZyZnQuZXBhZ2U9JnJmdC5zcGFnZT0mcmZ0LnNzbj0mcmZ0LnRwYWdlcz0mcmZ0LnllYXI9JnJmdC5tb250aD0mcmZ0LmRheT0mcmZ0LnZvbHVtZT0mcmZ0Lmlzc3VlPSZyZnQuZGF0ZT0mcmZ0LnBsYWNlPSZyZnQucHViPSZyZnQucHViZGF0ZT0yMDE3JnJmdC5wdWJkYXk9JnJmdC5wdWJsaXNoZXI9JnJmdC5wdWJ5ZWFyPSZsb2NhbGU9bmxfQkVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkL3ByaW1vLmV4bGlicmlzZ3JvdXAuY29tOnByaW1vMy1BcnRpY2xlLUVTVkxQX3Njb3BlQXJjaGl2JnJmdF92YWxfZm10PWluZm86b2ZpL2ZtdDprZXY6bXR4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZnQuZ2VucmVcIjogcG54LmRpc3BsYXkudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmZ0LnBhcnRcIjogcG54LmRpc3BsYXkuaXNwYXJ0b2YsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJmdC5kYXRlXCI6IHBueC5kaXNwbGF5LmNyZWF0aW9uZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmZ0LmF1XCI6IHBueC5hZGRhdGEuYXUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJmdC5yaWdodHNcIjogcG54LmRpc3BsYXkucmlnaHRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuLypcclxuXHJcbnJmdC5hdGl0bGU9e3thZGRhdGEvYXRpdGxlfX0mID0+IHBueC5kaXNwbGF5LnRpdGxlWzBdXHJcbnJmdC5qdGl0bGU9e3thZGRhdGEvanRpdGxlfX0mID0+IHBueC5kaXNwbGF5LmlzcGFydG9mWzBdXHJcbnJmdC5idGl0bGU9e3thZGRhdGEvYnRpdGxlfX0mID0+IHBueC5kaXNwbGF5LmlzcGFydG9mWzBdXHJcbnJmdC5idGl0bGU9e3thZGRhdGEvYWR0aXRsZX19JiA9PiBwbnguYWRkYXRhL2FkdGl0bGVbMF1cclxuXHJcblxyXG5yZnQuZ2VucmU9e3thZGRhdGEvZ2VucmV9fSYgPT4gcG54LmRpc3BsYXkudHlwZVswXVxyXG5yZnQucGFydD17e2FkZGF0YS9wYXJ0fX0mID0+IHBueC5kaXNwbGF5LmlzcGFydG9mWzBdXHJcbnJmdC5kYXRlPXt7YWRkYXRhL2RhdGV9fSYgPT4gcG54LmRpc3BsYXkuY3JlYXRpb25kYXRlWzBdXHJcbnJmdC5hdT17e2FkZGF0YS9hdX19JiA9PiBwbnguYWRkYXRhLmF1WzBdXHJcbnJmdC5kYXQ9PHt7Y29udHJvbC9zb3VyY2VpZH19Pnt7Y29udHJvbC9zb3VyY2VyZWNvcmRpZH19PC97e2NvbnRyb2wvc291cmNlaWR9fT4gPT4gPCBwbnguY29udHJvbC5zb3VyY2VpZFswXSA+IHBueC5jb250cm9sLnNvdXJjZXJlY29yZGlkICA8LyBwbnguY29udHJvbC5zb3VyY2VpZFswXSA+XHJcblxyXG5cclxuPz8/IHJmdC5yaWdodHMgPSBwbnguZGlzcGxheS5yaWdodHNbMF1cclxuKi9cclxuXHJcbi8qXHJcbnJmdC5hdWxhc3Q9e3thZGRhdGEvYXVsYXN0fX0mXHJcbnJmdC5hdWluaXQ9e3thZGRhdGEvYXVpbml0fX0mXHJcbnJmdC5hdWluaXQxPXt7YWRkYXRhL2F1aW5pdDF9fSZcclxucmZ0LmF1aW5pdG09e3thZGRhdGEvYXVpbml0bX19JlxyXG5yZnQuYXVzdWZmaXg9e3thZGRhdGEvYXVzdWZmaXh9fSZcclxuXHJcbnJmdC5hdWNvcnA9e3thZGRhdGEvYXVjb3JwfX0mXHJcbnJmdC52b2x1bWU9e3thZGRhdGEvdm9sdW1lfX0mXHJcbnJmdC5pc3N1ZT17e2FkZGF0YS9pc3N1ZX19JlxyXG5yZnQucXVhcnRlcj17e2FkZGF0YS9xdWFydGVyfX0mXHJcbnJmdC5zc249e3thZGRhdGEvc3NufX0mXHJcbnJmdC5zcGFnZT17e2FkZGF0YS9zcGFnZX19JlxyXG5yZnQuZXBhZ2U9e3thZGRhdGEvZXBhZ2V9fSZcclxucmZ0LnBhZ2VzPXt7YWRkYXRhL3BhZ2VzfX0mXHJcbnJmdC5hcnRudW09e3thZGRhdGEvYXJ0bnVtfX0mXHJcbnJmdC5pc3NuPXt7YWRkYXRhL2lzc259fSZcclxucmZ0LmVpc3NuPXt7YWRkYXRhL2Vpc3NufX0mXHJcbnJmdC5pc2JuPXt7YWRkYXRhL2lzYm59fSZcclxucmZ0LnNpY2k9e3thZGRhdGEvc2ljaX19JlxyXG5yZnQuY29kZW49e3thZGRhdGEvY29kZW59fSZcclxucmZ0LmlkPWluZm86ZG9pL3t7YWRkYXRhL2RvaX19JlxyXG5yZnQub2JqZWN0X2lkPXt7YWRkYXRhL29iamVjdGlkfX07JlxyXG5yZnQuZWlzYm49e3thZGRhdGEvZWlzYm59fSZcclxucmZ0LmVkaXRpb249e3tkaXNwbGF5L2VkaXRpb259fSZcclxucmZ0LnB1Yj17e2FkZGF0YS9wdWJ9fSZcclxucmZ0LnBsYWNlPXt7YWRkYXRhL2NvcH19JlxyXG5yZnQuc2VyaWVzPXt7YWRkYXRhL3Nlcmllc3RpdGxlfX0mXHJcbnJmdC5zdGl0bGU9e3thZGRhdGEvc3RpdGxlfX0mXHJcbnJmdC5iaWNpPXt7YWRkYXRhL2JpY2l9fSZcclxucmZ0LmlkPWluZm86YmliY29kZS97e2FkZGF0YS9iaWJjb2RlfX0mXHJcbnJmdC5pZD1pbmZvOmhkbC97e2FkZGF0YS9oZGxpZH19JlxyXG5yZnQuaWQ9aW5mbzpsY2NuL3t7YWRkYXRhL2xjY259fSZcclxucmZ0LmlkPWluZm86b2NsY251bS97e2FkZGF0YS9vY2xjaWR9fSZcclxucmZ0LmlkPWluZm86cG1pZC97e2FkZGF0YS9wbWlkfX0mXHJcbnJmdC5pZD1pbmZvOmVyaWMvKChhZGRhdGEvZXJpY319JlxyXG5cclxuKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wZW51cmwgPSBcIlwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG54LmRpc3BsYXkudHlwZVswXSA9PT0gXCJhcnRpY2xlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGlzcGxheS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0LmF0aXRsZT1cIiArIGVuY29kZVVSSShwbnguZGlzcGxheS50aXRsZVswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGlzcGxheS5pc3BhcnRvZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0Lmp0aXRsZT1cIiArIGVuY29kZVVSSShwbnguZGlzcGxheS5pc3BhcnRvZlswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnguZGlzcGxheS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImcmZ0LmJ0aXRsZT1cIiArIGVuY29kZVVSSShwbnguZGlzcGxheS50aXRsZVswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbnguYWRkYXRlLmFkdGl0bGVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbnVybCArPSBcIiZyZnQuYnRpdGxlPVwiICsgZW5jb2RlVVJJKHBueC5hZGRhdGUuYWR0aXRsWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcGFyYW0gaW4gY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnW3BhcmFtXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgKz0gXCImXCIgK3BhcmFtICtcIj1cIiArIGVuY29kZVVSSSggY29uZmlnW3BhcmFtXVswXSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbnVybCArPSBcIiZyZnRfZGF0PVwiICsgXCIlM0NcIiArIGVuY29kZVVSSShwbnguY29udHJvbC5zb3VyY2VpZFswXSkgKyBcIiUzRVwiICsgZW5jb2RlVVJJKHBueC5jb250cm9sLnNvdXJjZXJlY29yZGlkWzBdKSArIFwiJTNDL1wiICsgZW5jb2RlVVJJKHBueC5jb250cm9sLnNvdXJjZWlkWzBdKSArIFwiJTNFXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW51cmwgPSByZXF1ZXN0QUNvcHlPZkVzRG9jVVJMICsgXCIvXCIrIGFsbWFfY29kZSArXCI/XCIgKyBvcGVudXJsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkd2luZG93Lm9wZW4ob3BlbnVybCwgJ19ibGFuaycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50UmVjb3JkKCkge1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9ICdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJzsgLy8ncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcidcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRDdHJsID0gZWxlbWVudC5jb250cm9sbGVyKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudEN0cmwpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudEN0cmwuaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlcXVlc3RBQ29weU9mRXNEb2NDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICdyZXF1ZXN0QUNvcHlPZkVzRG9jVVJMJywgJyR3aW5kb3cnLCAnV2luZG93RXZlbnRMaXN0ZW5lciddO1xyXG5cclxuZXhwb3J0IGxldCByZXF1ZXN0QUNvcHlPZkVzRG9jQ29uZmlnID0ge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcclxuICAgIH0sXHJcbiAgICBjb250cm9sbGVyOiBSZXF1ZXN0QUNvcHlPZkVzRG9jQ29udHJvbGxlcixcclxuICAgIHRlbXBsYXRlOiAnJ1xyXG59IiwiY2xhc3MgQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coJycsICRzY29wZSk7XHJcbiAgfVxyXG59XHJcblxyXG5Bbm5vdW5jZW1lbnRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgYW5ub3VuY2VtZW50c0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge3BhcmVudEN0cmw6ICc8J30sXHJcbiAgY29udHJvbGxlcjogQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IGZlZWRiYWNrQW5ub3VuY2VtZW50SFRNTCBmcm9tICcuL2ZlZWRiYWNrQW5ub3VuY2VtZW50Lmh0bWwnXHJcbmltcG9ydCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0hUTUwgZnJvbSAnLi9mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZy5odG1sJ1xyXG5pbXBvcnQgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyIGZyb20gJy4vZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2cnXHJcblxyXG5jbGFzcyBGZWVkYmFja0Fubm91bmNlbWVudENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRyYW5zbGF0ZSwgJHRpbWVvdXQsIEZlZWRiYWNrU2VydmljZSwgTWVzc2FnZVNlcnZpY2UsIGFjdGlvbkljb25zKSB7XHJcblxyXG4gICAgLy8kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vbGV0IG1lc3NhZ2UgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuc3VydmV5LmFubm91bmNlbWVudCcpO1xyXG4gICAgICBsZXQgc2hvd0ZlZWRiYWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByaW1vRmVlZGJhY2snKTtcclxuICAgICAgaWYgKHNob3dGZWVkYmFjayA9PSBudWxsKSB7XHJcbiAgICAgICAgJHRyYW5zbGF0ZSgnbGJzLm51aS5zdXJ2ZXkuYW5ub3VuY2VtZW50JykudGhlbigobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhmZWVkYmFja0Fubm91bmNlbWVudEhUTUwucmVwbGFjZSgne3ttZXNzYWdlfX0nLCBtZXNzYWdlKSwge1xyXG4gICAgICAgICAgICBzY29wZTogJHNjb3BlLFxyXG4gICAgICAgICAgICBoaWRlRGVsYXk6IDAsXHJcbiAgICAgICAgICAgIGFjdGlvbkxhYmVsOiAkdHJhbnNsYXRlLmluc3RhbnQoJ21haW5tZW51LmxhYmVsLmZlZWRiYWNrJykgfHwgJ0ZlZWRiYWNrJyxcclxuICAgICAgICAgICAgYWN0aW9uOlxyXG4gICAgICAgICAgICAgICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIEZlZWRiYWNrU2VydmljZS5zaG93KCRldmVudCwgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dIVE1MLCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAvL30sIDIwMDApO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbkZlZWRiYWNrQW5ub3VuY2VtZW50Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCcsICdGZWVkYmFja1NlcnZpY2UnLCAnTWVzc2FnZVNlcnZpY2UnLCAnYWN0aW9uSWNvbnMnXTtcclxuXHJcbmV4cG9ydCBsZXQgZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmVlZGJhY2tBbm5vdW5jZW1lbnRDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkbWREaWFsb2csICRtZFRvYXN0LCAkdHJhbnNsYXRlLCAkaHR0cCwgZmVlZGJhY2tTZXJ2aWNlVVJMLCBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgdGhpcy5zY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XHJcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgIHRoaXMuaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwgPSBmZWVkYmFja1NlcnZpY2VVUkw7XHJcblxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICRzY29wZS5jYW5jZWxGZWVkYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5tZERpYWxvZy5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gKGFuc3dlcikgPT4ge1xyXG4gICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICBzdWJqZWN0OiAkc2NvcGUuZmVlZGJhY2suc3ViamVjdCxcclxuICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcclxuICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcclxuICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXHJcbiAgICAgICAgdHlwZTogJ3N1cnZleScsXHJcbiAgICAgICAgZmVlZGJhY2s6ICRzY29wZS5mZWVkYmFjay5hbnN3ZXJzLFxyXG4gICAgICAgIGVtYWlsOiAkc2NvcGUuZmVlZGJhY2sucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgdXNlcklkOiBzZWxmLnVzZXIuaWQgfHwgJycsXHJcbiAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNlbGYubWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICBzZWxmLmh0dHAoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICB1cmw6IHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9GZWVkYmFjaycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrISc7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLic7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcbiAgICAgICAgJHNjb3BlLmZlZWRiYWNrID0ge1xyXG4gICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgYW5zd2VyczogW10sXHJcbiAgICAgICAgICBzdWJqZWN0OiAnZmVlZGJhY2snXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJHRyYW5zbGF0ZScsICckaHR0cCcsICdmZWVkYmFja1NlcnZpY2VVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcclxuIiwiY2xhc3MgRmluZXNNZXNzYWdlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoTWVzc2FnZVNlcnZpY2UsICR0cmFuc2xhdGUsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vVE9ETzpleHRyYWN0IGh0bWwgdG8gaXRzIG93biBmaWxlLiBmaW5kIG91dCBob3cgdG8gcmVzb2x2ZSB7e319XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnlvdUhhdmVGaW5lcycpO1xyXG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xcJDAvLCB1c2VyLmZpbmVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGxldCBwYXkgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkueW91SGF2ZUZpbmVzLnBheScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coYFxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImFsaWduLXNlbGY6Y2VudGVyO1wiPiR7bWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO2NvbG9yOiB3aGl0ZTtcIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtc2VjdW5kYXJ5XCIgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvcGF5X215X2ZpbmVzJz4ke3BheX08L2E+XHJcbiAgICAgICAgICBgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5GaW5lc01lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ01lc3NhZ2VTZXJ2aWNlJywgJyR0cmFuc2xhdGUnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBmaW5lc01lc3NhZ2VDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmluZXNNZXNzYWdlQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbHRtZXRyaWNzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkY29tcGlsZSwgJG1kVG9hc3QsICR0aW1lb3V0LCAkd2luZG93KSB7XHJcbiAgICAgICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMuY29tcGlsZSA9ICRjb21waWxlO1xyXG4gICAgICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgICAgIHRoaXMudGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tBbHRtZXRyaWNzY3JpcHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSAyMDA7XHJcbiAgICAgICAgICAgIHZhciBlbmRUaW1lID0gTnVtYmVyKG5ldyBEYXRlKCkpICsgMTUwMDA7IC8vIHN0b3AgY29udHJvbCBhZnRlciA1IHNlY29uZHNcclxuXHJcbiAgICAgICAgICAgIHZhciB3YWl0X3VudGlsX2FsdG1ldHJpY3NfbG9hZGVkID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNvbmRpdGlvbiBpcyBtZXQsIHdlJ3JlIGRvbmUhIFxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHR5cGVvZiB3aW5kb3cuX2FsdG1ldHJpY19lbWJlZF9pbml0ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb25kaXRpb24gaXNuJ3QgbWV0IGJ1dCB0aGUgdGltZW91dCBoYXNuJ3QgZWxhcHNlZCwgZ28gYWdhaW5cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKE51bWJlcihuZXcgRGF0ZSgpKSA8IGVuZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRfdW50aWxfYWx0bWV0cmljc19sb2FkZWQsIGludGVydmFsLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRGlkbid0IG1hdGNoIGFuZCB0b28gbXVjaCB0aW1lLCByZWplY3QhXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdXYWl0IHVudGlsIGFsdG1ldHJpY3MgaXMgbG9hZGVkIHRpbWVkIG91dCcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHdhaXRfdW50aWxfYWx0bWV0cmljc19sb2FkZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRBbHRtZXRyaWNzKGFsdG1ldHJpY3NFbGVtZW50U2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FsdG1ldHJpY3NjcmlwdHMoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTG9hZGluZyBhbHRtZXRyaWNzOiBXZSBrdW5uZW4gc3RhcnRlbicpO1xyXG4gICAgICAgICAgICB3aW5kb3cuX2FsdG1ldHJpY19lbWJlZF9pbml0KGFsdG1ldHJpY3NFbGVtZW50U2VsZWN0b3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbkFsdG1ldHJpY3NTZXJ2aWNlLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJGNvbXBpbGUnLCAnJG1kVG9hc3QnLCAnJHRpbWVvdXQnLCAnJHdpbmRvdyddO1xyXG4iLCJleHBvcnQgbGV0IGFwaUNhbGxJbnRlcmNlcHRvciA9IFsoKSA9PiB7XHJcbiAgICB2YXIgYXBpQ2FsbEludGVyY2VwdG9yID0ge1xyXG4gICAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy9cIkFzc2Vzc2luZyBHb3NwZWwgUXVvdGF0aW9ucyBpbiBKdXN0aW4gTWFydHlyXCJcclxuICAgICAgICAgICAgbGV0IGZpeERpc3BsYXlEYXRhID0gZnVuY3Rpb24gKHBueERhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwbnhEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueERhdGEuZGlzcGxheSAmJiBwbnhEYXRhLmRpc3BsYXkuY3JlYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBueERhdGEuZGlzcGxheS5jcmVhdG9yID0gcG54RGF0YS5kaXNwbGF5LmNyZWF0b3IubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbGF0b3IgPSBjLm1hdGNoKC9cXCguKj9cXCkvaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGMuc3BsaXQoL1xcKC4qP1xcKS9pKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM9YCR7Y30gJCRRJHtkYXRhfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBueERhdGEuZGlzcGxheSAmJiBwbnhEYXRhLmRpc3BsYXkuY29udHJpYnV0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbnhEYXRhLmRpc3BsYXkuY29udHJpYnV0b3IgPSBwbnhEYXRhLmRpc3BsYXkuY29udHJpYnV0b3IubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbGF0b3IgPSBjLm1hdGNoKC9cXCguKj9cXCkvaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGMuc3BsaXQoL1xcKC4qP1xcKS9pKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM9YCR7Y30gJCRRJHtkYXRhfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBueERhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICgvXlxcL3ByaW1vX2xpYnJhcnlcXC9saWJ3ZWJcXC93ZWJzZXJ2aWNlc1xcL3Jlc3RcXC9wcmltby1leHBsb3JlXFwvdjFcXC9wbnhzLy50ZXN0KHJlc3BvbnNlLmNvbmZpZy51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcygnZG9jcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZG9jcy5tYXAocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZml4RGlzcGxheURhdGEocC5wbngpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoJ3BueCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnBueCA9IGZpeERpc3BsYXlEYXRhKGRhdGEucG54KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vUmVtb3ZlIG9wZW4gYWNjZXNzIGZyb20gZmFjZXRzXHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoJ2ZhY2V0cycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbXCJmYWNldHNcIl0gPSBkYXRhW1wiZmFjZXRzXCJdLm1hcChtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLm5hbWUgPT0gXCJ0bGV2ZWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0udmFsdWVzID0gbS52YWx1ZXMuZmlsdGVyKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC52YWx1ZSAhPT0gJ29wZW5fYWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGF0YScsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBpQ2FsbEludGVyY2VwdG9yO1xyXG59XSIsImV4cG9ydCBsZXQgZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yID0gIFsoKSA9PiB7XHJcbiAgdmFyIGh0dHBDYWxsSW50ZXJjZXB0b3IgPSB7XHJcbiAgICByZXF1ZXN0OiBmdW5jdGlvbihjb25maWcpe1xyXG4gICAgICBpZiAoY29uZmlnLnVybC5pbmNsdWRlcygncG54cycpICYmICFjb25maWcudXJsLmluY2x1ZGVzKCdkZWxpdmVyeScpICYmIGNvbmZpZy5wYXJhbXMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNvbmZpZyk7XHJcbiAgICAgICAgaWYoY29uZmlnLnBhcmFtcy5kYXRhYmFzZXMgfHwgY29uZmlnLnBhcmFtcy5qb3VybmFscyl7XHJcbiAgICAgICAgICBjb25maWcucGFyYW1zLmluc3QgPSAnS1VMJztcclxuICAgICAgICAgIGNvbmZpZy5wYXJhbXMudmlkID0gJ0tVTGV1dmVuJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaHR0cENhbGxJbnRlcmNlcHRvcjtcclxufV07XHJcbiIsImV4cG9ydCBsZXQgZmVlZFNlcnZpY2UgPSBbJyRodHRwJywgZnVuY3Rpb24oJGh0dHApIHtcclxuICB2YXIgZmVlZEFudGlDYWNoZSA9IFwiPyZ0PVwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyByYW5kb21OdW07XHJcbiAgdmFyIHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwICsgMSk7XHJcbiAgdmFyIGZlZWRkYXlzb2xkID0gNjA7XHJcblxyXG4gIHZhciBkbSA9IG5ldyBEYXRlKCk7XHJcbiAgZG0uc2V0SG91cnMoMjQsIDAsIDAsIDApO1xyXG5cclxuICB2YXIgYXBpX2VuZHBvaW50ID0gJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvZmVlZF9hZ2dyZWdhdG9yPyc7XHJcblxyXG4gIGZ1bmN0aW9uIHJlYWRGZWVkQ29uZmlnKHVybCkge1xyXG4gICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIlgtRnJvbS1FeEwtQVBJLUdhdGV3YXlcIjogdW5kZWZpbmVkXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVhZEZlZWQodXJsKSB7XHJcbiAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICB1cmw6IGFwaV9lbmRwb2ludCArIHVybCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiWC1Gcm9tLUV4TC1BUEktR2F0ZXdheVwiOiB1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYXJzZUZlZWQoY29uZikge1xyXG4gICAgcmV0dXJuIHJlYWRGZWVkKGNvbmYuZmVlZFVybCkudGhlbihmdW5jdGlvbihyZXMpIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhjb25mLmZlZWRVcmwpO1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGNvbmYuZmVlZEZpbHRlcik7XHJcbiAgICAgIHZhciBwYXR0ID0gL15lbnRyeVxcLnxeaXRlbVxcLi9pO1xyXG4gICAgICB2YXIgZmlsdGVyZWRSZXN1bHRzID0gcmVzLmRhdGEuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIHJldHZhbCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChpdGVtLnB1YkRhdGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgIGl0ZW0ucHViRGF0ZSA9IGRtO1xyXG4gICAgICAgICAgcmVzLmRhdGEuaXRlbXNbaW5kZXhdLnB1YkRhdGUgPSBkbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogbm8gZmlsdGVyIGNvbmZpZ3VyZWQgKi9cclxuICAgICAgICBpZiAoY29uZi5mZWVkRmlsdGVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZi5mZWVkRmlsdGVyLmZvckVhY2goZnVuY3Rpb24oZikge1xyXG4gICAgICAgICAgaWYgKHBhdHQudGVzdChmLnBhcmFtKSkge1xyXG4gICAgICAgICAgICB2YXIgZmYgPSBmLnBhcmFtLnJlcGxhY2UocGF0dCwgXCJcIik7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1bZmZdKSkge1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtW2ZmXS5pbmRleE9mKGYudmFsdWUpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR2YWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbVtmZl0gPT0gZi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvKiBmaWx0ZXIgb2xkIGl0ZW1zICovXHJcbiAgICAgICAgaWYgKGZlZWRkYXlzb2xkIDwgTWF0aC5jZWlsKGRtLmdldFRpbWUoKSAtIG5ldyBEYXRlKGl0ZW0ucHViRGF0ZSkuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSkge1xyXG4gICAgICAgICAgcmV0dmFsID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmV0dmFsO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZpbHRlcmVkUmVzdWx0cztcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBoYW5kbGUgZXJyb3JzXHJcbiAgICB9KTs7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzb3J0RmVlZChmZWVkcykge1xyXG4gICAgLy9yZXR1cm4gZmVlZHMuc29ydChjb21wYXJlRGF0ZXMpO1xyXG4gICAgcmV0dXJuIGZlZWRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnB1YkRhdGUpO1xyXG4gICAgICB2YXIgZGF0ZUIgPSBuZXcgRGF0ZShiLnB1YkRhdGUpO1xyXG4gICAgICBpZiAoZGF0ZUEuZ2V0VGltZSgpID09PSBkbS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBkYXRlQSA9IG5ldyBEYXRlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRlQi5nZXRUaW1lKCkgPT09IGRtLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGRhdGVCID0gbmV3IERhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZWFkRmVlZENvbmZpZzogcmVhZEZlZWRDb25maWcsXHJcbiAgICByZWFkRmVlZDogcmVhZEZlZWQsXHJcbiAgICBwYXJzZUZlZWQ6IHBhcnNlRmVlZCxcclxuICAgIHNvcnRGZWVkOiBzb3J0RmVlZFxyXG4gIH07XHJcbn1dO1xyXG4iLCJpbXBvcnQgZmVlZGJhY2tTZXJ2aWNlSFRNTCBmcm9tICcuL2ZlZWRiYWNrU2VydmljZS5odG1sJ1xyXG5pbXBvcnQgRGlhbG9nQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYWwvZGlhbG9nJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWRiYWNrU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoJG1kRGlhbG9nKSB7XHJcbiAgICB0aGlzLm1kRGlhbG9nID0gJG1kRGlhbG9nO1xyXG4gIH1cclxuXHJcbiAgc2hvdygkZXZlbnQgPSBudWxsLCBmZWVkYmFja0RpYWxvZ0hUTUwgPSBudWxsLCBmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPSBudWxsKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoZmVlZGJhY2tEaWFsb2dIVE1MID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgZGlhbG9nIGluc3RhbnRpYXRlZCcpO1xyXG4gICAgICBmZWVkYmFja0RpYWxvZ0hUTUwgPSBmZWVkYmFja1NlcnZpY2VIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBkaWFsb2cgY29udHJvbGxlciBpbnN0YW50aWF0ZWQnKTtcclxuICAgICAgZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyID0gRGlhbG9nQ29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1kRGlhbG9nLnNob3coe1xyXG4gICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcclxuICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgIHRlbXBsYXRlOiBmZWVkYmFja0RpYWxvZ0hUTUwsXHJcbiAgICAgIGNvbnRyb2xsZXI6IGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlclxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5GZWVkYmFja1NlcnZpY2UuJGluamVjdCA9IFsnJG1kRGlhbG9nJ107XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckxvY2F0aW9uc1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJGNvbXBpbGUsICRtZFRvYXN0LCAkc2NlLCAkdHJhbnNsYXRlLCAkdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgICAgIHRoaXMuc2NlID0gJHNjZTtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy5jb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICAgICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xyXG4gICAgICAgIHRoaXMudmlkID0gd2luZG93LmFwcENvbmZpZy52aWQ7XHJcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlU2VydmljZUV2ZW50SGFuZGxlciA9IHRoaXMucm9vdFNjb3BlLiRvbignJHRyYW5zbGF0ZUxvYWRpbmdFbmQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT4gdHJhbnNsYXRpb24gbG9hZGVkIDw9PT09PT09PT09XCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgZmlsdGVyTG9jYXRpb25zKHBueF9yZWNvcmQpIHtcclxuICAgICAgICB2YXIgYXZhaWxsaWJyYXJ5ID0gcG54X3JlY29yZC5kaXNwbGF5LmF2YWlsbGlicmFyeS5tYXAoKGxpYikgPT4geyByZXR1cm4gbGliLnNwbGl0KFwiJCRcIik7IH0pXHJcblxyXG4gICAgICAgIGF2YWlsbGlicmFyeSA9IGF2YWlsbGlicmFyeS5tYXAoKGxpYikgPT4ge1xyXG4gICAgICAgICAgICBsaWIuc2hpZnQoKTtcclxuICAgICAgICAgICAgbGliID0gbGliLm1hcCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBbcy5jaGFyQXQoMCldOiBzLnN1YnN0cigxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGliID0gbGliLnJlZHVjZSgodGFnLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFnW09iamVjdC5rZXlzKGZpZWxkKVswXV0gPSBPYmplY3QudmFsdWVzKGZpZWxkKVswXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YWdcclxuICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgICAgICByZXR1cm4gbGliXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nICggdGhpcy52aWQgKVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWQgPT0gXCJKRVNVSVRTXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlicmFyeV9maWx0ZXJfYXJyYXkgPSB7XHJcbiAgICAgICAgICAgICAgICBcIktVTF9HQklCX0xJQlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiIDogZnVuY3Rpb24gKGxpYikgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpYltcIk9cIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaWJbXCJPXCJdIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwbnhfcmVjb3JkLmNvbnRyb2wucmVjb3JkaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSy5VLkxldXZlbiBNYXVyaXRzIFNhYmJlYmlibGlvdGhlZWtcIixcclxuICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vXCIrZG9jdW1lbnQubG9jYXRpb24uaG9zdCtcIi9wcmltby1leHBsb3JlL2Z1bGxkaXNwbGF5P2RvY2lkPTwjcmVjb3JkaWQ+JmNvbnRleHQ9TCZ2aWQ9S1VMZXV2ZW4mc2VhcmNoX3Njb3BlPUFMTF9DT05URU5UJmlzRnJicj10cnVlJnRhYj1hbGxfY29udGVudF90YWJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiS0FET0NfS0FET0NfTElCXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCIgOiBmdW5jdGlvbiAobGliKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGliW1wiT1wiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpYltcIk9cIl0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBueF9yZWNvcmQuY29udHJvbC5yZWNvcmRpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLQURPQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6ICBcImh0dHBzOi8vXCIrZG9jdW1lbnQubG9jYXRpb24uaG9zdCtcIi9wcmltby1leHBsb3JlL2Z1bGxkaXNwbGF5P2RvY2lkPTwjcmVjb3JkaWQ+JmNvbnRleHQ9TCZ2aWQ9S0FET0Mmc2VhcmNoX3Njb3BlPUFMTF9DT05URU5UJmlzRnJicj10cnVlJnRhYj1hbGxfY29udGVudF90YWJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiQU5FVF9VQS1DU1RcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIiA6IGZ1bmN0aW9uIChsaWIpIHsgcmV0dXJuIHBueF9yZWNvcmQuc2VhcmNoLmFkZHNyY3JlY29yZGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVUFudHdlcnBlbiAtIEJpYmxpb3RoZWVrIFN0YWRzY2FtcHVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2FuZXQuYmUvcmVjb3JkL29wYWNhbmV0LzwjcmVjb3JkaWQ+XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXZhaWxsaWJyYXJ5ID0gYXZhaWxsaWJyYXJ5LmZpbHRlcigobGlicmFyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhsaWJyYXJ5W1wiTFwiXSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nICggT2JqZWN0LmtleXMobGlicmFyeV9maWx0ZXJfYXJyYXkpIClcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhsaWJyYXJ5X2ZpbHRlcl9hcnJheSkuaW5jbHVkZXMobGlicmFyeVtcIkxcIl0pIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBwbnhfcmVjb3JkLmZhY2V0cy5sZmMxMC5pbmNsdWRlcyhsaWJyYXJ5W1wiTFwiXSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBhdmFpbGxpYnJhcnkgPSBhdmFpbGxpYnJhcnkubWFwKCAobGlicmFyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlY29yZGlkID0gIChsaWJyYXJ5X2ZpbHRlcl9hcnJheVtsaWJyYXJ5W1wiTFwiXV1bXCJpZFwiXSkobGlicmFyeSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gbGlicmFyeV9maWx0ZXJfYXJyYXlbbGlicmFyeVtcIkxcIl1dW1widXJsXCJdLnJlcGxhY2UoXCI8I3JlY29yZGlkPlwiLCByZWNvcmRpZCApO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBsaWJyYXJ5X2ZpbHRlcl9hcnJheVtsaWJyYXJ5W1wiTFwiXV1bXCJuYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgbGlicmFyeSA9IHsgXCJ1cmxcIjogdXJsLCBcIm5hbWVcIjogbmFtZSwgXCJjb2RlXCI6bGlicmFyeVtcIkxcIl0gfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsaWJyYXJ5O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXNBcnIgPSBbXTtcclxuICAgICAgICAgICAgYXZhaWxsaWJyYXJ5LmZpbHRlcihmdW5jdGlvbihsaWIpe1xyXG4gICAgICAgICAgICAgIC8vIHZhciBpID0gcmVzQXJyLmZpbmRJbmRleCh4ID0+ICh4Lm5hbWUgPT0gbGliLm5hbWUgJiYgeC5jb2RlID09IGxpYi5jb2RlICAmJiB4LnVybCA9PSBsaWIudXJsICkgKTtcclxuICAgICAgICAgICAgICB2YXIgaSA9IHJlc0Fyci5maW5kSW5kZXgoeCA9PiAoeC5uYW1lID09IGxpYi5uYW1lICYmIHguY29kZSA9PSBsaWIuY29kZSkgKTtcclxuICAgICAgICAgICAgICBpZihpIDw9IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICByZXNBcnIucHVzaChsaWIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhdmFpbGxpYnJhcnkgPSByZXNBcnJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhdmFpbGxpYnJhcnkgPSBbXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF2YWlsbGlicmFyeVxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbkZpbHRlckxvY2F0aW9uc1NlcnZpY2UuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckY29tcGlsZScsICckd2luZG93J107XHJcbiIsImltcG9ydCBtZXNzYWdlU2VydmljZUhUTUwgZnJvbSAnLi9tZXNzYWdlU2VydmljZS5odG1sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICRjb21waWxlLCAkbWRUb2FzdCwgJHNjZSwgJHRyYW5zbGF0ZSwgJHRpbWVvdXQpIHtcclxuICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgdGhpcy5zY2UgPSAkc2NlO1xyXG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xyXG4gICAgdGhpcy50aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICB0aGlzLmNvbXBpbGUgPSAkY29tcGlsZTtcclxuICAgIHRoaXMucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcclxuXHJcbiAgICAvLyB0aGlzLm1lc3NhZ2VTZXJ2aWNlRXZlbnRIYW5kbGVyID0gdGhpcy5yb290U2NvcGUuJG9uKCckdHJhbnNsYXRlTG9hZGluZ0VuZCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT0+IHRyYW5zbGF0aW9uIGxvYWRlZCA8PT09PT09PT09PVwiKTtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhtZXNzYWdlID0gJycsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IHNjb3BlID0gb3B0aW9ucy5zY29wZSB8fCBudWxsO1xyXG4gICAgbGV0IGhpZGVEZWxheSA9IG9wdGlvbnMuaGlkZURlbGF5IHx8IDA7XHJcbiAgICBsZXQgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24gfHwgbnVsbDtcclxuICAgIGxldCBhY3Rpb25MYWJlbCA9IG9wdGlvbnMuYWN0aW9uTGFiZWwgfHwgJ3Vua25vd24nO1xyXG4gICAgbGV0IG1lc3NhZ2VLZXkgPSAnbGJzLmdlbmVyYWxNZXNzYWdlJztcclxuXHJcbiAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNlbGYuX19zaG93KHtcclxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgIHNjb3BlOiBzY29wZSxcclxuICAgICAgICBoaWRlRGVsYXk6IGhpZGVEZWxheSxcclxuICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICBhY3Rpb25MYWJlbDogYWN0aW9uTGFiZWxcclxuICAgICAgfSk7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi50cmFuc2xhdGUobWVzc2FnZUtleSkudGhlbigobSkgPT4ge1xyXG4gICAgICBtZXNzYWdlID0gKG0gPT0gbWVzc2FnZUtleSB8fCBtIDw9IDEpID8gJycgOiBtO1xyXG5cclxuICAgICAgc2VsZi5fX3Nob3coe1xyXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICAgICAgc2NvcGU6IHNjb3BlLFxyXG4gICAgICAgIGhpZGVEZWxheTogaGlkZURlbGF5LFxyXG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgIGFjdGlvbkxhYmVsOiBhY3Rpb25MYWJlbFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX19zaG93KG9wdGlvbnMgPSB7fSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgbGV0IHNjb3BlID0gb3B0aW9ucy5zY29wZTtcclxuICAgIGxldCBoaWRlRGVsYXkgPSBvcHRpb25zLmhpZGVEZWxheTtcclxuICAgIGxldCBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbjtcclxuICAgIGxldCBhY3Rpb25MYWJlbCA9IG9wdGlvbnMuYWN0aW9uTGFiZWw7XHJcbiAgICBsZXQgbWVzc2FnZSA9IG9wdGlvbnMubWVzc2FnZTtcclxuXHJcbiAgICAvLyBpZiAobWVzc2FnZS5sZW5ndGggPT0gMCkge1xyXG4gICAgLy8gICAvLyBjb2RlIHRhYmxlIGVudHJpZXMgY2FuIG5vdCBoYXZlIGVtcHR5IGRlc2NyaXB0aW9ucy5cclxuICAgIC8vICAgLy8gbWVzc2FnZSA8PSAxIHdpbGwgbm90IGJlIGRpc3BsYXllZCEhISFcclxuICAgIC8vICAgbGV0IG1lc3NhZ2VLZXkgPSAnbGJzLmdlbmVyYWxNZXNzYWdlJztcclxuICAgIC8vICAgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQobWVzc2FnZUtleSk7XHJcbiAgICAvLyAgIG1lc3NhZ2UgPSAobWVzc2FnZSA9PSBtZXNzYWdlS2V5IHx8IG1lc3NhZ2UgPD0gMSkgPyAnJyA6IG1lc3NhZ2U7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaWYgKG1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgdG9hc3RDb25maWcgPSB7XHJcbiAgICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdGhpcy5hY3Rpb25MYWJlbCA9IGFjdGlvbkxhYmVsO1xyXG5cclxuICAgICAgICAgIHRoaXMub25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5tZFRvYXN0LmhpZGUoKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYgKGFjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLm9uQWN0aW9uID0gKCRldmVudCA9IG51bGwpID0+IHtcclxuICAgICAgICAgICAgICBhY3Rpb24uY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICBzZWxmLm1kVG9hc3QuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHNjb3BlKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwoc2VsZi5jb21waWxlKGA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPmApKHNlbGYucm9vdFNjb3BlKS5odG1sKCkpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChzZWxmLmNvbXBpbGUoYDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+YCkoc2NvcGUpLmh0bWwoKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChtZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogbWVzc2FnZVNlcnZpY2VIVE1MLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wIGNlbnRlcicsXHJcbiAgICAgICAgaGlkZURlbGF5OiBoaWRlRGVsYXlcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5tZFRvYXN0LnNob3codG9hc3RDb25maWcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ05vIG1lc3NhZ2UgdG8gZGlzcGxheScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbk1lc3NhZ2VTZXJ2aWNlLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJGNvbXBpbGUnLCAnJG1kVG9hc3QnLCAnJHNjZScsICckdHJhbnNsYXRlJywgJyR0aW1lb3V0J107XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvd0V2ZW50TGlzdGVuZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJHdpbmRvdykge1xyXG4gICAgICAgICR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKTtcclxuICAgICAgICBsZXQgcG9zc2libGVPcmlnaW5zUGVyRXZlbnQgPSBbe1xyXG4gICAgICAgICAgICBldmVudElkIDogXCJyZXRyaWV2ZV91c2VyXCIsXHJcbiAgICAgICAgICAgIHBvc3NpYmxlT3JpZ2lucyA6IFsgXCJodHRwOi8vbG9jYWxob3N0OjkyOTJcIixcImh0dHBzOi8vc2VydmljZXMubGliaXMuYmVcIixcImh0dHBzOi8vc2FuZGJveC1ldS5hbG1hLmV4bGlicmlzZ3JvdXAuY29tXCJdXHJcbiAgICAgICAgfV1cclxuLy8gVE9ETyA6IE1hYWsgY29uZmlnIGhhc2ggdmFuIG9yaWdpbiBlbiBldmVudF9pZCA9PlxyXG4gICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZU1lc3NhZ2UoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cgKFwicmVjZWl2ZU1lc3NhZ2UgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVwiKVxyXG5cclxuICAgICAgICAgICAgaWYgKCAhIGV2ZW50LmRhdGEgKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIk5vIEV2ZW50IGRhdGEgISFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwb3NzaWJsZU9yaWdpbnNPYmogPSBwb3NzaWJsZU9yaWdpbnNQZXJFdmVudC5maW5kKGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2LmV2ZW50SWQgPT09IGV2ZW50LmRhdGEuZXZlbnRfaWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3NzaWJsZU9yaWdpbnNPYmopO1xyXG5cclxuICAgICAgICAgICAgbGV0IHByaW1vRXhwbG9yZUp3dCA9ICRyb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwuand0VXRpbFNlcnZpY2Uuc3RvcmFnZVV0aWwuc2Vzc2lvblN0b3JhZ2UucHJpbW9FeHBsb3JlSnd0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuZXZlbnRfaWQgPT09IFwicmV0cmlldmVfdXNlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZU9yaWdpbnNPYmoucG9zc2libGVPcmlnaW5zIFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggISAgcG9zc2libGVPcmlnaW5zT2JqLnBvc3NpYmxlT3JpZ2lucy5pbmNsdWRlcyhldmVudC5vcmlnaW4pICApIHJldHVybjtcclxuICAgICAgICAgICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudF9pZDogXCJyZXRyaWV2ZV91c2VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9uQ2FtcHVzXCI6IHVzZXIuaXNPbkNhbXB1cygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpc0xvZ2dlZEluXCI6IHVzZXIuaXNMb2dnZWRJbigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1YmlkXCI6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlfbmFtZVwiOiB1c2VyLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIjogdXNlci5lbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZXZlbnQub3JpZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudF9pZDogXCJqd3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhXCI6IHByaW1vRXhwbG9yZUp3dFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGV2ZW50Lm9yaWdpbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5XaW5kb3dFdmVudExpc3RlbmVyLiRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHdpbmRvdyddOyIsIi8qXHJcbiAgQ2VudHJhbCBQYWNrYWdlIExvYWRlclxyXG5cclxuICBEbyBOT1QgZWRpdCB0aGlzIGZpbGUuXHJcbiAgQWxsIGNvbXBvbmVudHMgYXJlIGRlY2xhcmVkIGluIFwiY29tcG9uZW50cy5qc1wiXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XHJcbiAgTWVobWV0IENlbGlrXHJcbiovXHJcbmltcG9ydCBQcmltbyBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS9oZWxwZXInXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cydcclxuaW1wb3J0IFRlbXBsYXRlcyBmcm9tICcuL3RlbXBsYXRlcydcclxuXHJcbmltcG9ydCB7ZmVlZFNlcnZpY2V9IGZyb20gJy4vZmFjdG9yaWVzL2ZlZWRTZXJ2aWNlJ1xyXG5pbXBvcnQge2RiU2VhcmNoSHR0cENhbGxJbnRlcmNlcHRvcn0gZnJvbSAnLi9mYWN0b3JpZXMvZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yJ1xyXG5pbXBvcnQge2FwaUNhbGxJbnRlcmNlcHRvcn0gZnJvbSAnLi9mYWN0b3JpZXMvYXBpQ2FsbEludGVyY2VwdG9yJ1xyXG5pbXBvcnQgTWVzc2FnZVNlcnZpY2UgZnJvbSAnLi9mYWN0b3JpZXMvbWVzc2FnZVNlcnZpY2UnXHJcbmltcG9ydCBGZWVkYmFja1NlcnZpY2UgZnJvbSAnLi9mYWN0b3JpZXMvZmVlZGJhY2tTZXJ2aWNlJ1xyXG5pbXBvcnQgQWx0bWV0cmljc1NlcnZpY2UgZnJvbSAnLi9mYWN0b3JpZXMvYWx0bWV0cmljc1NlcnZpY2UnXHJcblxyXG5pbXBvcnQgRmlsdGVyTG9jYXRpb25zU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9maWx0ZXJMb2NhdGlvbnNTZXJ2aWNlJ1xyXG5cclxuaW1wb3J0IFdpbmRvd0V2ZW50TGlzdGVuZXIgZnJvbSAnLi9mYWN0b3JpZXMvd2luZG93RXZlbnRMaXN0ZW5lcidcclxuXHJcblxyXG4vL21ha2UgUHJpbW8gcHVibGljXHJcbndpbmRvdy5QcmltbyA9IFByaW1vO1xyXG4vL2xvYWQgUHJpbW9FeHBsb3JlciBVSSBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBpcyByYW5cclxud2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gIGlmIChQcmltby5pc0RlYnVnRW5hYmxlZCgpKSB7XHJcbiAgICBsZXQgdWlVUkwgPSAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9tZWhtZXRjL3ByaW1vLWV4cGxvcmUtZG9tLXVpL2ZjMDg2OGRmL2pzL2N1c3RvbS5qcyc7XHJcbiAgICAvL2xldCB1aVVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvanMvY3VzdG9tLmpzJztcclxuXHJcbiAgICBIZWxwZXIubG9hZFNjcmlwdCh1aVVSTCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbmplY3RpbmcgVUknKTtcclxuICAgICAgUHJpbW8uZXhwbG9yZS51aS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSwgMjAwMCk7XHJcblxyXG4vL2xldCBzZXJ2aWNlc0hvc3QgPSAnaHR0cDovLzE5Mi4xNjguMTAwLjEwMTo5MjkyLyc7XHJcbi8vbGV0IHNlcnZpY2VzSG9zdCA9ICdodHRwOi8vbG9jYWxob3N0OjkyOTIvJztcclxubGV0IHNlcnZpY2VzSG9zdCA9ICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlLyc7XHJcblxyXG5cclxubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdjZW50cmFsQ3VzdG9tJywgWyduZ01hdGVyaWFsJywgJ3ZjUmVjYXB0Y2hhJywnZ29vZ2xlQW5hbHl0aWNzJ10pXHJcbiAgLypcclxuICAvLy5jb25zdGFudCgnc2VydmljZXNIb3N0JywgJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvJylcclxuICAgIC5jb25zdGFudCgnZmVlZGJhY2tTZXJ2aWNlVVJMJywgJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvZmVlZGJhY2snKVxyXG4gICAgLmNvbnN0YW50KCdyZXBvcnRBUHJvYmxlbVVSTCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL3JlcG9ydF9hX3Byb2JsZW0nKVxyXG4gICAgLmNvbnN0YW50KCdyZXF1ZXN0QUNvcHlVUkwnLCAnaHR0cDovLzE5Mi4xNjguMTAwLjEwMTo5MjkyLy9yZXF1ZXN0X2FfY29weScpXHJcbiAgKi9cclxuICAuY29uc3RhbnQoJ2ZlZWRiYWNrU2VydmljZVVSTCcsIHNlcnZpY2VzSG9zdCArICdmZWVkYmFjaycpXHJcbiAgLmNvbnN0YW50KCdyZXBvcnRBUHJvYmxlbVVSTCcsIHNlcnZpY2VzSG9zdCArICdyZXBvcnRfYV9wcm9ibGVtJylcclxuICAuY29uc3RhbnQoJ3JlcXVlc3RBQ29weVVSTCcsIHNlcnZpY2VzSG9zdCArICdyZXF1ZXN0X2FfY29weScpXHJcbiAgLmNvbnN0YW50KCdyZXF1ZXN0QUNvcHlPZkVzRG9jVVJMJywgc2VydmljZXNIb3N0ICsgJ2lsbGp3dGZvcm0nKVxyXG5cclxuICAuY29uZmlnKCgkc2NlRGVsZWdhdGVQcm92aWRlcikgPT4ge1xyXG4gICAgJHNjZURlbGVnYXRlUHJvdmlkZXIucmVzb3VyY2VVcmxXaGl0ZWxpc3QoW1xyXG4gICAgICAnKionXHJcbiAgICBdKTtcclxuICB9KVxyXG4gIC5ydW4oKCR0ZW1wbGF0ZUNhY2hlLCAkcm9vdFNjb3BlKSA9PiB7XHJcbiAgICAvLyR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvZnVsbFZpZXcvZnVsbC12aWV3Lmh0bWwnLCBmdWxsVmlld0hUTUwpO1xyXG4gICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vdW5wa2cuY29tL2hvdGtleXMtanNAMi4wLjgvZGlzdC9ob3RrZXlzLm1pbi5qcycpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnaG90a2V5cy5qcyBsb2FkZWQnKTtcclxuICAgIH0pO1xyXG4gICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vZDFieGg4dWFzMW1udzcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL2VtYmVkLmpzPycgKyBEYXRlLm5vdygpKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2FsdG1lcmljcyBlbWJlZC5qcyBsb2FkZWQnKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHdpbmRvdy5hcHBDb25maWcudmlkID09ICdFQ0InIHx8IHdpbmRvdy5hcHBDb25maWcudmlkLmluY2x1ZGVzKCdLVUxldXZlbicpKSB7XHJcbiAgICAgIC8vQ3JlYXRlIHRoZSBjZW50cmFsQ3VzdG9tIG1vZHVsZTtcclxuICAgICAgaWYgKHdpbmRvdy5hcHBDb25maWcudmlkID09ICdFQ0InKSB7XHJcbiAgICAgICAgd2luZG93LmJyb3d6aW5lID0ge1xyXG4gICAgICAgICAgYXBpOiBcImh0dHBzOi8vcHVibGljLWFwaS50aGlyZGlyb24uY29tL3B1YmxpYy92MS9saWJyYXJpZXMvMTYyNFwiLFxyXG4gICAgICAgICAgYXBpS2V5OiBcImU3MWQxYzMxLTc5MzgtNDcwYS04YmUyLWE2ZTM1MWUwYzAwMVwiLFxyXG4gICAgICAgICAgam91cm5hbEJyb3daaW5lV2ViTGlua1RleHQ6IFwiVmlldyBKb3VybmFsIENvbnRlbnRzXCIsXHJcbiAgICAgICAgICBhcnRpY2xlQnJvd1ppbmVXZWJMaW5rVGV4dDogXCJWaWV3IElzc3VlIENvbnRlbnRzXCIsXHJcbiAgICAgICAgICBhcnRpY2xlUERGRG93bmxvYWRMaW5rRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIGFydGljbGVQREZEb3dubG9hZExpbmtUZXh0OiBcIkRvd25sb2FkIFBERlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh3aW5kb3cuYXBwQ29uZmlnLnZpZC5pbmNsdWRlcygnS1VMZXV2ZW4nKSkge1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW50ZXJmYWNlTGFuZ3VhZ2U7XHJcbiAgICAgICAgdmFyIGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICAgJ25sX0JFJzoge1xyXG4gICAgICAgICAgICAnam91cm5hbCc6IFwiQmVraWprIGRlIGluaG91ZCB2YW4gaGV0IHRpamRzY2hyaWZ0XCIsXHJcbiAgICAgICAgICAgICdpc3N1ZSc6IFwiQmVraWprIGRlIGluaG91ZCB2YW4gaGV0IG51bW1lclwiLFxyXG4gICAgICAgICAgICAnZG93bmxvYWQnOiBcIkRvd25sb2FkIFBERlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJ2VuX1VTJzoge1xyXG4gICAgICAgICAgICAnam91cm5hbCc6IFwiVmlldyBKb3VybmFsIENvbnRlbnRzXCIsXHJcbiAgICAgICAgICAgICdpc3N1ZSc6IFwiVmlldyBJc3N1ZSBDb250ZW50c1wiLFxyXG4gICAgICAgICAgICAnZG93bmxvYWQnOiBcIkRvd25sb2FkIFBERlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYnJvd3ppbmUgPSB7XHJcbiAgICAgICAgICBhcGk6IFwiaHR0cHM6Ly9wdWJsaWMtYXBpLnRoaXJkaXJvbi5jb20vcHVibGljL3YxL2xpYnJhcmllcy8xNzgxXCIsXHJcbiAgICAgICAgICBhcGlLZXk6IFwiMTBlZDVkMmEtNGZmMC00NTQxLTg1N2QtYjhjMzZhMDFmM2VkXCIsXHJcbiAgICAgICAgICBqb3VybmFsQnJvd1ppbmVXZWJMaW5rVGV4dDogbG9jYWxlX3RleHRbbG9jYWxlXVsnam91cm5hbCddLFxyXG4gICAgICAgICAgYXJ0aWNsZUJyb3daaW5lV2ViTGlua1RleHQ6IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ2lzc3VlJ10sXHJcbiAgICAgICAgICBhcnRpY2xlUERGRG93bmxvYWRMaW5rRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIGFydGljbGVQREZEb3dubG9hZExpbmtUZXh0OiBsb2NhbGVfdGV4dFtsb2NhbGVdWydkb3dubG9hZCddLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgSGVscGVyLmxvYWRTY3JpcHQoJ2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9icm93emluZS1hZGFwdGVycy9wcmltby9icm93emluZS1wcmltby1hZGFwdGVyLmpzJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Jyb3d6aW5lLXByaW1vLWFkYXB0ZXIuanMgbG9hZGVkJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgLmZhY3RvcnkoJ0ZlZWRTZXJ2aWNlJywgZmVlZFNlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ0FsdG1ldHJpY3NTZXJ2aWNlJywgQWx0bWV0cmljc1NlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ01lc3NhZ2VTZXJ2aWNlJywgTWVzc2FnZVNlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ0ZlZWRiYWNrU2VydmljZScsIEZlZWRiYWNrU2VydmljZSlcclxuICAuc2VydmljZSgnRmlsdGVyTG9jYXRpb25zU2VydmljZScsIEZpbHRlckxvY2F0aW9uc1NlcnZpY2UpXHJcbiAgLnNlcnZpY2UoJ1dpbmRvd0V2ZW50TGlzdGVuZXInLCBXaW5kb3dFdmVudExpc3RlbmVyKVxyXG5cclxuICAuZmFjdG9yeSgnZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yJywgZGJTZWFyY2hIdHRwQ2FsbEludGVyY2VwdG9yKVxyXG4gIC5mYWN0b3J5KCdhcGlDYWxsSW50ZXJjZXB0b3InLCBhcGlDYWxsSW50ZXJjZXB0b3IpXHJcbiAgLmNvbmZpZyhbJyRodHRwUHJvdmlkZXInLCAoJGh0dHBQcm92aWRlcikgPT4geyAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdhcGlDYWxsSW50ZXJjZXB0b3InKTsgfV0pO1xyXG5cclxuICBcclxuXHJcbi8vaW50ZXJjZXB0IGFwaSBjYWxscyBmb3IgZGF0YWJhc2Ugc2VhcmNoIGFuZCBjaGFuZ2UgdG8gS1VMIChvbmx5IHJlZ2lvbmFsIHZpZXdzKVxyXG52YXIgcmVnX3ZpZXdzID0gW1wiS1VMZXV2ZW5cIiwgXCJLVUxldXZlbl9UTU9SRU1cIiwgXCJLVUxldXZlbl9UTU9SRUtcIiwgXCJLVUxldXZlbl9VQ0xMXCIsIFwiS1VMZXV2ZW5fTFVDQVwiLCBcIktVTGV1dmVuX09ESVNFRVwiXTtcclxuaWYgKHJlZ192aWV3cy5pbmNsdWRlcyh3aW5kb3cuYXBwQ29uZmlnLnZpZCkpIHtcclxuICBhcHAuY29uZmlnKFsnJGh0dHBQcm92aWRlcicsICgkaHR0cFByb3ZpZGVyKSA9PiB7ICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ2RiU2VhcmNoSHR0cENhbGxJbnRlcmNlcHRvcicpOyB9XSk7XHJcbn1cclxuXHJcbi8vZW5hYmxlIGdvb2dsZSB0YWcgbWFuYWdlclxyXG52YXIgcmVnX3ZpZXdzID0gW1wiS1VMZXV2ZW5cIiwgXCJLVUxldXZlbl9UTU9SRU1cIiwgXCJLVUxldXZlbl9UTU9SRUtcIiwgXCJLVUxldXZlbl9VQ0xMXCIsIFwiS1VMZXV2ZW5fTFVDQVwiLCBcIktVTGV1dmVuX09ESVNFRVwiLFxyXG4gXCJGQVJPXCIsIFwiVUNMTFwiLCBcIkxVQ0FcIiwgXCJPRElTRUVcIiwgXCJUTU9SRUtcIiAsIFwiVE1PUkVNXCIsIFwiVklWRVNfS0FUSE9cIiwgXCJWSVZFU19LSEJPXCJdO1xyXG5pZiAocmVnX3ZpZXdzLmluY2x1ZGVzKHdpbmRvdy5hcHBDb25maWcudmlkKSkge1xyXG4gIGFwcC52YWx1ZSgnYW5hbHl0aWNzT3B0aW9ucycsIHtcclxuICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICBzaXRlSWQ6ICdHVE0tV1IyNTlNWCcsXHJcbiAgICBkZWZhdWx0VGl0bGU6ICdEaXNjb3ZlcnkgU2VhcmNoJ1xyXG4gIH0pO1xyXG59XHJcblxyXG4vL0NvbnRhaW5zIHRoZSBhZnRlciBjb21wb25lbnQgc2VsZWN0b3JzIHRoYXQgd2lsbCBiZSBpbmplY3RlZFxyXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XHJcblxyXG4vL0NyZWF0ZSBhbGwgY29tcG9uZW50cyBhbmQgZGV0ZXJtaW5lIGluIHdoaWNoIGFmdGVyIGNvbXBvbmVudCB0aGVzZSBuZWVkIHRvIGJlXHJcbi8vaW5qZWN0ZWRcclxuY29uc29sZS5sb2coJ0xvYWRpbmcgY2VudHJhbEN1c3RvbSBjb21wb25lbnRzJyk7XHJcbkNvbXBvbmVudHMuYWxsLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbXBvbmVudC5uYW1lKVxyXG4gIGlmIChjb21wb25lbnQuZW5hYmxlZCkge1xyXG4gICAgaWYgKGNvbXBvbmVudC5hcHBlbmRUbykge1xyXG4gICAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcclxuICAgICAgLy9lbGVtZW50cy5wdXNoKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgZWxlbWVudHMucHVzaCh7XHJcbiAgICAgICAgJ25hbWUnOiBjb21wb25lbnQubmFtZSxcclxuICAgICAgICAnZW5hYmxlSW5WaWV3JzogY29tcG9uZW50LmVuYWJsZUluVmlld1xyXG4gICAgICB9KTtcclxuICAgICAgYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gPSBlbGVtZW50cztcclxuXHJcbiAgICB9XHJcbiAgICBhcHAuY29uc3RhbnQoJ2FmdGVyQ29tcG9uZW50cycsIGFmdGVyQ29tcG9uZW50cyk7XHJcbiAgICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC5uYW1lLnRvQ2FtZWxDYXNlKCksIGNvbXBvbmVudC5jb25maWcpO1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zb2xlLmxvZygnUmVwbGFjZSBUZW1wbGF0ZXMnKTtcclxuVGVtcGxhdGVzLmFsbC5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHRlbXBsYXRlLmlkKVxyXG4gIGFwcC5ydW4oKCR0ZW1wbGF0ZUNhY2hlKSA9PiB7XHJcbiAgICAkdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGUuaWQsIHRlbXBsYXRlLnRlbXBsYXRlKTtcclxuICB9KVxyXG59KVxyXG5cclxuLy9JbmplY3QgcGxhY2UgaG9sZGVycyBpbnRvIHRoZSBhZnRlciBjb21wb25lbnRzXHJcbk9iamVjdC5rZXlzKGFmdGVyQ29tcG9uZW50cykuZm9yRWFjaCgoY29tcG9uZW50LCBpKSA9PiB7XHJcbiAgbGV0IHN1YkNvbXBvbmVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50XTtcclxuXHJcbiAgYXBwLmNvbXBvbmVudChjb21wb25lbnQudG9DYW1lbENhc2UoKSwge1xyXG4gICAgYmluZGluZ3M6IHtcclxuICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IHN1YkNvbXBvbmVudHMubWFwKG0gPT4gYDwke20ubmFtZX0gcGFyZW50LWN0cmw9XCIkY3RybFwiPjwvJHttLm5hbWV9PmApLmpvaW4oXCJcIilcclxuICB9KTtcclxufSk7XHJcbiIsImltcG9ydCBFeHBsb3JlIGZyb20gJy4vcHJpbW8vZXhwbG9yZSdcclxuaW1wb3J0IFJlY29yZHMgZnJvbSAnLi9wcmltby9yZWNvcmRzJ1xyXG5pbXBvcnQgRmFjZXRzIGZyb20gJy4vcHJpbW8vZmFjZXRzJ1xyXG5pbXBvcnQgVmlldyBmcm9tICcuL3ByaW1vL3ZpZXcnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4vcHJpbW8vdXNlcidcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuLyoqXHJcbiAqIFByaW1vIG1haW4gZW50cnkgY2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW1vIHtcclxuICAvKipcclxuICAgKiBSZXR1cm4gdmVyc2lvbiBpbmZvcm1hdGlvblxyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XHJcbiAgICBsZXQgX3ZlcnNpb24gPSBcIjAuMC4xMFwiO1xyXG4gICAgcmV0dXJuIGBMaWJyYXJ5OiR7X3ZlcnNpb259IC0gUHJpbW86JHt3aW5kb3cuYXBwQ29uZmlnWydzeXN0ZW0tY29uZmlndXJhdGlvbiddLlByaW1vX1ZlcnNpb25fTnVtYmVyfToke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fSG90Rml4X051bWJlcn1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKCkgaGFzIHJhblxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgc3RhdGljIGlzRGVidWdFbmFibGVkKCkge1xyXG4gICAgcmV0dXJuIEhlbHBlci5pc0RlYnVnRW5hYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlkIHRoZSBzY3JpcHQgcmFuIG9uIGEgUHJpbW8gc2l0ZVxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XHJcbiAgICByZXR1cm4gSGVscGVyLmlzUHJpbW9BdmFpbGFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgYSBwcm94eSBjbGFzc1xyXG4gICAqIEByZXR1cm4ge0V4cGxvcmV9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCBleHBsb3JlKCkge1xyXG4gICAgcmV0dXJuIEV4cGxvcmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIGF2YWlsYWJsZSByZWNvcmRzXHJcbiAgICogQHJldHVybiB7UmVjb3Jkc31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHJlY29yZHMoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc29sdmUobmV3IFJlY29yZHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpKTtcclxuICAgIH0pXHJcbiAgICAvL3JldHVybiBuZXcgUmVjb3Jkcyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIGF2YWlsYWJsZSBmYWNldHNcclxuICAgKiBAcmV0dXJuIHtGYWNldHN9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCBmYWNldHMoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc29sdmUobmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cykpO1xyXG4gICAgfSlcclxuICAgIC8vcmV0dXJuIG5ldyBGYWNldHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byB2aWV3IHJlbGF0ZWQgbWV0YWRhdGFcclxuICAgKiBAcmV0dXJuIHtWaWV3fVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdmlldygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc29sdmUobmV3IFZpZXcoKSk7XHJcbiAgICB9KVxyXG4gICAgLy9yZXR1cm4gbmV3IFZpZXcoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gdXNlciByZWxhdGVkIG1ldGFkYXRhXHJcbiAgICogQHJldHVybiB7VXNlcn1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHVzZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBIZWxwZXIudXNlckRldGFpbHNIVFRQKCkudGhlbigodXNlckRldGFpbHMpPT57XHJcbiAgICAgICAgSGVscGVyLnVzZXJGaW5lc0hUVFAoKS50aGVuKCh1c2VyRmluZXMpID0+IHtcclxuICAgICAgICAgIEhlbHBlci51c2VyTG9hbnNIVFRQKCkudGhlbigodXNlckxvYW5zKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgVXNlcih7ZGV0YWlsczogdXNlckRldGFpbHMsIGZpbmVzOiB1c2VyRmluZXMsIGxvYW5zOiB1c2VyTG9hbnN9KSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbi8vdGhpcyBpcyBwcm94eSBjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb3JlIHtcclxuICBzdGF0aWMgZ2V0IGNvbXBvbmVudHMoKSB7XHJcbiAgICBsZXQgYyA9IG5ldyBDb21wb25lbnRzKCk7XHJcbiAgICBIZWxwZXIuY29tcG9uZW50TmFtZXMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcclxuICAgICAgYy5hZGQoc2VsZWN0b3IpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgdWkoKSB7XHJcbiAgICBpZiAodGhpcy5fdWkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGlzIGlzIGEgc3R1YiBmdW5jdGlvbiBjYWxsIFwiYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKClcIiB0byBhY3RpdmF0ZSBVSScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX3VpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBoZWxwZXIoKSB7XHJcbiAgICByZXR1cm4gSGVscGVyO1xyXG4gIH1cclxufVxyXG4iLCJ2YXIgY3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBuZXcocmVxdWlyZSgnLi4vLi4vdmVuZG9yL2Nzcy1zZWxlY3Rvci1nZW5lcmF0b3IuanMnKSkuQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcblxyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vaGVscGVyJ1xyXG5cclxuY2xhc3MgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KXtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBibGluaygpe1xyXG4gICAgSGVscGVyLmJsaW5rKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNzc1BhdGgoKXtcclxuICAgIHJldHVybiBjc3NTZWxlY3RvckdlbmVyYXRvci5nZXRTZWxlY3Rvcih0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKXtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubG9jYWxOYW1lO1xyXG4gIH1cclxuXHJcbiAgc2NvcGUoKXtcclxuICAgIGlmIChIZWxwZXIuaXNEZWJ1Z0VuYWJsZWQoKSl7XHJcbiAgICAgIHJldHVybiBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5zY29wZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHJ1biBcImFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpXCIgZmlyc3QnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN0cmwoKXtcclxuICAgIGxldCBjID0gYW5ndWxhci5lbGVtZW50KHRoaXMuZWxlbWVudCkuY29udHJvbGxlcih0aGlzLm5hbWUpO1xyXG4gICAgaWYgKGMpIHtcclxuICAgICAgcmV0dXJuIGM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygndXNpbmcgYWx0ZXJuYXRpdmUgbWV0aG9kIHRvIGdldCBjb250cm9sbGVyJyk7XHJcbiAgICAgIGxldCBzY29wZSA9IHRoaXMuc2NvcGUoKTtcclxuICAgICAgaWYgKHNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNjb3BlQ2hpbGQgPSBzY29wZS4kJGNoaWxkVGFpbDtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2NvcGUpLmluY2x1ZGVzKCckY3RybCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZS4kY3RybFxyXG4gICAgICAgIH0gZWxzZSBpZihPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJ2N0cmwnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGUuY3RybFxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcGVDaGlsZCAmJiBPYmplY3Qua2V5cyhzY29wZUNoaWxkKS5pbmNsdWRlcygnJGN0cmwnKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZUNoaWxkLiRjdHJsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcGVDaGlsZCAmJiBPYmplY3Qua2V5cyhzY29wZUNoaWxkKS5pbmNsdWRlcygnY3RybCcpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuY3RybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyAkY3RybCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRzIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgdGhpcy5fY29tcG9uZW50cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgYWRkKHNlbGVjdG9yKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBIZWxwZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICBsZXQgZWxlbWVudHNBcnJheSA9IHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IFtdO1xyXG5cclxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgICAgIGVsZW1lbnRzQXJyYXkucHVzaChuZXcgQ29tcG9uZW50KGVsZW1lbnQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdID0gZWxlbWVudHNBcnJheTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudHNBcnJheTtcclxuICB9XHJcblxyXG4gIGdldChzZWxlY3Rvcikge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBrZXlzKCl7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xyXG4gICAgc3RhdGljIGlzRGVidWdFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubmFtZSA9PT0gJ05HX0VOQUJMRV9ERUJVR19JTkZPIScgfHwgdHlwZW9mKGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm0tbG9nbycpKS5zY29wZSgpKSAhPSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNQcmltb0F2YWlsYWJsZSgpIHtcclxuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZih3aW5kb3cuYW5ndWxhcikpIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByaW1vLWV4cGxvcmUnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY29tcG9uZW50TmFtZXMoKSB7XHJcbiAgICAgICAgbGV0IHRhZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnROYW1lcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHRhZyBvZiB0YWdzKSB7XHJcbiAgICAgICAgICAgIGxldCB0YWdOYW1lID0gdGFnLmxvY2FsTmFtZTtcclxuICAgICAgICAgICAgaWYgKC9ecHJtLS8udGVzdCh0YWdOYW1lKSB8fCAvXnByaW1vLS8udGVzdCh0YWdOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnROYW1lcy5pbmNsdWRlcyh0YWdOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVzLnB1c2godGFnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudE5hbWVzID0gY29tcG9uZW50TmFtZXMuc29ydCgpLmZpbHRlcigoZSwgaSwgYSkgPT4gaSA9PT0gYS5maW5kSW5kZXgoKGUyKSA9PiBlID09PSBlMikpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnROYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5qZWN0b3IoKSB7XHJcbiAgICAgIGxldCBjID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJpbW8tZXhwbG9yZScpO1xyXG4gICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGxldCBwcmltb0V4cGxvcmUgPSBhbmd1bGFyLmVsZW1lbnQoY1swXS5lbGVtZW50KTtcclxuICAgICAgICAgIGxldCBpbmplY3RvciAgICAgPSBwcmltb0V4cGxvcmUuaW5qZWN0b3IoKTtcclxuICAgICAgICAgIGlmIChpbmplY3Rvcil7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmplY3RvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBodHRwKCkge1xyXG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XHJcbiAgICAgIGlmIChpbmplY3Rvcikge1xyXG4gICAgICAgIGxldCBoID0gaW5qZWN0b3IuZ2V0KCckaHR0cCcpO1xyXG4gICAgICAgIGlmIChoKSB7XHJcbiAgICAgICAgICByZXR1cm4gaDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgbG9hZFNjcmlwdChzY3JpcHRVUkwpIHtcclxuICAgICAgaWYgKHdpbmRvdy5hbmd1bGFyKSB7XHJcbiAgICAgICAgICBsZXQgYXBwSW5qZWN0b3IgPSBhbmd1bGFyLmluamVjdG9yKFsnbmcnLCdhbmd1bGFyTG9hZCddKTtcclxuICAgICAgICAgIGlmIChhcHBJbmplY3Rvcikge1xyXG4gICAgICAgICAgICAgIGxldCBhbmd1bGFyTG9hZCA9IGFwcEluamVjdG9yLmdldCgnYW5ndWxhckxvYWQnKTtcclxuICAgICAgICAgICAgICBpZiAoYW5ndWxhckxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyTG9hZC5sb2FkU2NyaXB0KHNjcmlwdFVSTCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvb3RTY29wZSgpIHtcclxuICAgICAgbGV0IGluamVjdG9yID0gdGhpcy5pbmplY3RvcigpO1xyXG4gICAgICBpZiAoaW5qZWN0b3IpIHtcclxuICAgICAgICAgIGxldCByb290U2NvcGUgICAgPSBpbmplY3Rvci5nZXQoJyRyb290U2NvcGUnKTtcclxuICAgICAgICAgIGlmIChyb290U2NvcGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3RTY29wZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKSB7XHJcbiAgICAgIGxldCByb290U2NvcGUgPSB0aGlzLnJvb3RTY29wZSgpO1xyXG4gICAgICBpZiAocm9vdFNjb3BlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgand0RGF0YSgpIHtcclxuICAgICAgbGV0IHVTTVMgPSB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgICAgaWYgKHVTTVMpIHtcclxuICAgICAgICBsZXQgand0RGF0YSA9IHVTTVMuand0VXRpbFNlcnZpY2UuZ2V0RGVjb2RlZFRva2VuKCkgfHwge307XHJcbiAgICAgICAgcmV0dXJuIGp3dERhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckRldGFpbHMoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuJGxvY2FsRm9yYWdlLmdldEl0ZW0oJ3VzZXJEZXRhaWxzJykudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyRGV0YWlsc0hUVFAoKSB7XHJcbiAgICAgIGxldCB2aWV3Q29kZSA9IHRoaXMuand0RGF0YSgpLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSxyZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KGAvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS91c2Vyc2V0dGluZ3M/dmlkPSR7dmlld0NvZGV9YCkudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzLmRhdGEpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJGaW5lc0hUVFAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2ZpbmVzJykudGhlbih1c2VyRmluZXMgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyRmluZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmaW5lcyA9IGRhdGEuZGF0YS5maW5lcztcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZXMuZmluZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGZpbmVzJyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyTG9hbnNIVFRQKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL215YWNjb3VudC9sb2FucycpLnRoZW4odXNlckxvYW5zID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckxvYW5zLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9hbnMgPSBkYXRhLmRhdGEubG9hbnM7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvYW5zLmxvYW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBsb2FucycpO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYmxpbmsoY29tcG9uZW50LCBudW1iZXJPZkJsaW5rcyA9IDQpIHtcclxuICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcclxuICAgICAgICBsZXQgYm9yZGVyU2VsZWN0b3IgPSBjb21wb25lbnQuZWxlbWVudC5jc3NQYXRoICsgaW5kZXggKyAnUmVjdCc7XHJcblxyXG4gICAgICAgIGxldCBjcmVhdGVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJlY3QgPSBjb21wb25lbnQuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArIDE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBib3JkZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgcmVkJztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS50b3AgPSBlbGVtZW50UmVjdC50b3AgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBlbGVtZW50UmVjdC5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGVsZW1lbnRSZWN0LndpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUubGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib3JkZXJFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBib3JkZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlbW92ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYm9yZGVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBib3JkZXJFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJsaW5rQm9yZGVyRWxlbWVudCA9IChudW1iZXJPZkJsaW5rcyA9IDQpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZCbGlua3MgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVCb3JkZXJFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAoKG51bWJlck9mQmxpbmtzICUgMikgPT0gMCkgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZCbGlua3MtLTtcclxuICAgICAgICAgICAgICAgIGludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYmxpbmtCb3JkZXJFbGVtZW50LCAxMDAwLCBudW1iZXJPZkJsaW5rcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvcmRlckVsZW1lbnQgPSBjcmVhdGVCb3JkZXJFbGVtZW50KCk7XHJcbiAgICAgICAgYmxpbmtCb3JkZXJFbGVtZW50KG51bWJlck9mQmxpbmtzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2ZhY2V0cyhjb21wb25lbnRzKTtcclxuICAgIH1cclxuICAgIF9mYWNldHMoY29tcG9uZW50cykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tZmFjZXQtYWZ0ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBnZXQgZmFjZXRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmZhY2V0cztcclxuICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBmYWNldHMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcyhjb21wb25lbnRzKTtcclxuICAgIH1cclxuICAgIF9pdGVtcyhjb21wb25lbnRzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gY29tcG9uZW50cy5nZXQoJ3BybS1zZWFyY2gtcmVzdWx0LWxpc3QtYWZ0ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN0cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuaXRlbWxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwidHJ5IGFnYWluXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCByZWNvcmRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmRhdGE7XHJcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gcmV0cmlldmUgaXRlbXMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcclxuICBjb25zdHJ1Y3Rvcih1c2VyID0gX3NrZWxVc2VyKSB7XHJcbiAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XHJcbiAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogand0RGF0YS51c2VyIHx8ICcnLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmRldGFpbHMuZW1haWwgfHwgJycsXHJcbiAgICAgICAgbmFtZTogand0RGF0YS51c2VyTmFtZSB8fCAnR3Vlc3QnLFxyXG4gICAgICAgIGRpc3BsYXlfbmFtZTogdVNtcy5nZXRVc2VyTmFtZUZvckRpc3BsYXkoKSxcclxuICAgICAgICBpc0xvZ2dlZEluOiAoKSA9PiB1U21zLmdldFVzZXJOYW1lKCkubGVuZ3RoID4gMCxcclxuICAgICAgICBpc09uQ2FtcHVzOiAoKSA9PiBqd3REYXRhLm9uQ2FtcHVzID09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIGZpbmVzOiB1c2VyLmZpbmVzLFxyXG4gICAgICAgIGxvYW5zOiB1c2VyLmxvYW5zXHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgX3NrZWxVc2VyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGV0YWlsczoge30sXHJcbiAgICAgIGZpbmVzOiB7fSxcclxuICAgICAgbG9hbnM6IHt9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgICAgbGV0IGp3dERhdGEgPSBIZWxwZXIuand0RGF0YSgpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXSxcclxuICAgICAgICBpbnN0aXR1dGlvbjoge1xyXG4gICAgICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJbnN0aXR1dGlvbkNvZGUsXHJcbiAgICAgICAgICAgIG5hbWU6IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnN0aXR1dGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW50ZXJmYWNlTGFuZ3VhZ2U6IHVTbXMuZ2V0VXNlckxhbmd1YWdlKCkgfHwgd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmludGVyZmFjZUxhbmd1YWdlLFxyXG4gICAgICAgIGlwOiB7XHJcbiAgICAgICAgICBhZGRyZXNzOiBqd3REYXRhLmlwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBDc3NTZWxlY3RvckdlbmVyYXRvciwgcm9vdCxcclxuICAgIGluZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcclxuXHJcbiAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZGVmYXVsdF9vcHRpb25zID0ge1xyXG4gICAgICBzZWxlY3RvcnM6IFsnaWQnLCAnY2xhc3MnLCAndGFnJywgJ250aGNoaWxkJ11cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gQ3NzU2VsZWN0b3JHZW5lcmF0b3Iob3B0aW9ucykge1xyXG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xyXG4gICAgICB0aGlzLnNldE9wdGlvbnModGhpcy5kZWZhdWx0X29wdGlvbnMpO1xyXG4gICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgIHZhciBrZXksIHJlc3VsdHMsIHZhbDtcclxuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHRzID0gW107XHJcbiAgICAgIGZvciAoa2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICB2YWwgPSBvcHRpb25zW2tleV07XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdF9vcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLm9wdGlvbnNba2V5XSA9IHZhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmlzRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuICEhKChlbGVtZW50ICE9IG51bGwgPyBlbGVtZW50Lm5vZGVUeXBlIDogdm9pZCAwKSA9PT0gMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRQYXJlbnRzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgY3VycmVudF9lbGVtZW50LCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBpZiAodGhpcy5pc0VsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmlzRWxlbWVudChjdXJyZW50X2VsZW1lbnQpKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50X2VsZW1lbnQpO1xyXG4gICAgICAgICAgY3VycmVudF9lbGVtZW50ID0gY3VycmVudF9lbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRUYWdTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVJdGVtKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNhbml0aXplSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgdmFyIGNoYXJhY3RlcnM7XHJcbiAgICAgIGNoYXJhY3RlcnMgPSAoaXRlbS5zcGxpdCgnJykpLm1hcChmdW5jdGlvbihjaGFyYWN0ZXIpIHtcclxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAnOicpIHtcclxuICAgICAgICAgIHJldHVybiBcIlxcXFxcIiArICgnOicuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkgKyBcIiBcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKC9bICFcIiMkJSYnKCkqKywuXFwvOzw9Pj9AXFxbXFxcXFxcXV5ge3x9fl0vLnRlc3QoY2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgY2hhcmFjdGVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZXNjYXBlKGNoYXJhY3RlcikucmVwbGFjZSgvXFwlL2csICdcXFxcJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNoYXJhY3RlcnMuam9pbignJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRJZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgaWQsIHNhbml0aXplZF9pZDtcclxuICAgICAgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgaWYgKChpZCAhPSBudWxsKSAmJiAoaWQgIT09ICcnKSAmJiAhKC9cXHMvLmV4ZWMoaWQpKSAmJiAhKC9eXFxkLy5leGVjKGlkKSkpIHtcclxuICAgICAgICBzYW5pdGl6ZWRfaWQgPSBcIiNcIiArICh0aGlzLnNhbml0aXplSXRlbShpZCkpO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzYW5pdGl6ZWRfaWQpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHNhbml0aXplZF9pZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDbGFzc1NlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGNsYXNzX3N0cmluZywgaXRlbSwgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgY2xhc3Nfc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgIGlmIChjbGFzc19zdHJpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgIGNsYXNzX3N0cmluZyA9IGNsYXNzX3N0cmluZy5yZXBsYWNlKC9cXHMrL2csICcgJyk7XHJcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL15cXHN8XFxzJC9nLCAnJyk7XHJcbiAgICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPT0gJycpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGssIGxlbiwgcmVmLCByZXN1bHRzO1xyXG4gICAgICAgICAgICByZWYgPSBjbGFzc19zdHJpbmcuc3BsaXQoL1xccysvKTtcclxuICAgICAgICAgICAgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICAgICAgICBpdGVtID0gcmVmW2tdO1xyXG4gICAgICAgICAgICAgIHJlc3VsdHMucHVzaChcIi5cIiArICh0aGlzLnNhbml0aXplSXRlbShpdGVtKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgICAgfSkuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGF0dHJpYnV0ZSwgYmxhY2tsaXN0LCBrLCBsZW4sIHJlZiwgcmVmMSwgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgYmxhY2tsaXN0ID0gWydpZCcsICdjbGFzcyddO1xyXG4gICAgICByZWYgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIGF0dHJpYnV0ZSA9IHJlZltrXTtcclxuICAgICAgICBpZiAocmVmMSA9IGF0dHJpYnV0ZS5ub2RlTmFtZSwgaW5kZXhPZi5jYWxsKGJsYWNrbGlzdCwgcmVmMSkgPCAwKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChcIltcIiArIGF0dHJpYnV0ZS5ub2RlTmFtZSArIFwiPVwiICsgYXR0cmlidXRlLm5vZGVWYWx1ZSArIFwiXVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldE50aENoaWxkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBjb3VudGVyLCBrLCBsZW4sIHBhcmVudF9lbGVtZW50LCBzaWJsaW5nLCBzaWJsaW5ncztcclxuICAgICAgcGFyZW50X2VsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgIGlmIChwYXJlbnRfZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgICAgc2libGluZ3MgPSBwYXJlbnRfZWxlbWVudC5jaGlsZE5vZGVzO1xyXG4gICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHNpYmxpbmdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgICBzaWJsaW5nID0gc2libGluZ3Nba107XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnQoc2libGluZykpIHtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIjpudGgtY2hpbGQoXCIgKyBjb3VudGVyICsgXCIpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0U2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgICB2YXIgaXNfdW5pcXVlLCByZXN1bHQ7XHJcbiAgICAgIGlzX3VuaXF1ZSA9IGZhbHNlO1xyXG4gICAgICBpZiAoKHNlbGVjdG9yICE9IG51bGwpICYmIHNlbGVjdG9yICE9PSAnJykge1xyXG4gICAgICAgIHJlc3VsdCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiByZXN1bHRbMF0gPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgIGlzX3VuaXF1ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpc191bmlxdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRBbGxTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICB0OiBudWxsLFxyXG4gICAgICAgIGk6IG51bGwsXHJcbiAgICAgICAgYzogbnVsbCxcclxuICAgICAgICBhOiBudWxsLFxyXG4gICAgICAgIG46IG51bGxcclxuICAgICAgfTtcclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAndGFnJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC50ID0gdGhpcy5nZXRUYWdTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdpZCcpID49IDApIHtcclxuICAgICAgICByZXN1bHQuaSA9IHRoaXMuZ2V0SWRTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdjbGFzcycpID49IDApIHtcclxuICAgICAgICByZXN1bHQuYyA9IHRoaXMuZ2V0Q2xhc3NTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnYXR0cmlidXRlJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5hID0gdGhpcy5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnbnRoY2hpbGQnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0Lm4gPSB0aGlzLmdldE50aENoaWxkU2VsZWN0b3IoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RVbmlxdWVuZXNzID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcclxuICAgICAgdmFyIGZvdW5kX2VsZW1lbnRzLCBwYXJlbnQ7XHJcbiAgICAgIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgZm91bmRfZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgIHJldHVybiBmb3VuZF9lbGVtZW50cy5sZW5ndGggPT09IDEgJiYgZm91bmRfZWxlbWVudHNbMF0gPT09IGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0Q29tYmluYXRpb25zID0gZnVuY3Rpb24oZWxlbWVudCwgaXRlbXMsIHRhZykge1xyXG4gICAgICB2YXIgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCByZWYsIHJlZjE7XHJcbiAgICAgIHJlZiA9IHRoaXMuZ2V0Q29tYmluYXRpb25zKGl0ZW1zKTtcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgaXRlbSA9IHJlZltrXTtcclxuICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBpdGVtKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0YWcgIT0gbnVsbCkge1xyXG4gICAgICAgIHJlZjEgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRhZyArIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XHJcbiAgICAgICAgICBpdGVtID0gcmVmMVtsXTtcclxuICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFVuaXF1ZVNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgZm91bmRfc2VsZWN0b3IsIGssIGxlbiwgcmVmLCBzZWxlY3Rvcl90eXBlLCBzZWxlY3RvcnM7XHJcbiAgICAgIHNlbGVjdG9ycyA9IHRoaXMuZ2V0QWxsU2VsZWN0b3JzKGVsZW1lbnQpO1xyXG4gICAgICByZWYgPSB0aGlzLm9wdGlvbnMuc2VsZWN0b3JzO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBzZWxlY3Rvcl90eXBlID0gcmVmW2tdO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3JfdHlwZSkge1xyXG4gICAgICAgICAgY2FzZSAnaWQnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLmkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMuaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3RhZyc6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgc2VsZWN0b3JzLnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2xhc3MnOlxyXG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5jICE9IG51bGwpICYmIHNlbGVjdG9ycy5jLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kX3NlbGVjdG9yID0gdGhpcy50ZXN0Q29tYmluYXRpb25zKGVsZW1lbnQsIHNlbGVjdG9ycy5jLCBzZWxlY3RvcnMudCk7XHJcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnYXR0cmlidXRlJzpcclxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYSAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYSwgc2VsZWN0b3JzLnQpO1xyXG4gICAgICAgICAgICAgIGlmIChmb3VuZF9zZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ250aGNoaWxkJzpcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy5uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICcqJztcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgYWxsX3NlbGVjdG9ycywgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCBwYXJlbnRzLCByZXN1bHQsIHNlbGVjdG9yLCBzZWxlY3RvcnM7XHJcbiAgICAgIGFsbF9zZWxlY3RvcnMgPSBbXTtcclxuICAgICAgcGFyZW50cyA9IHRoaXMuZ2V0UGFyZW50cyhlbGVtZW50KTtcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcGFyZW50cy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIGl0ZW0gPSBwYXJlbnRzW2tdO1xyXG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5nZXRVbmlxdWVTZWxlY3RvcihpdGVtKTtcclxuICAgICAgICBpZiAoc2VsZWN0b3IgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxsX3NlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0b3JzID0gW107XHJcbiAgICAgIGZvciAobCA9IDAsIGxlbjEgPSBhbGxfc2VsZWN0b3JzLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xyXG4gICAgICAgIGl0ZW0gPSBhbGxfc2VsZWN0b3JzW2xdO1xyXG4gICAgICAgIHNlbGVjdG9ycy51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5qb2luKCcgPiAnKTtcclxuICAgICAgICBpZiAodGhpcy50ZXN0U2VsZWN0b3IoZWxlbWVudCwgcmVzdWx0KSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihpdGVtcykge1xyXG4gICAgICB2YXIgaSwgaiwgaywgbCwgcmVmLCByZWYxLCByZXN1bHQ7XHJcbiAgICAgIGlmIChpdGVtcyA9PSBudWxsKSB7XHJcbiAgICAgICAgaXRlbXMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHQgPSBbW11dO1xyXG4gICAgICBmb3IgKGkgPSBrID0gMCwgcmVmID0gaXRlbXMubGVuZ3RoIC0gMTsgMCA8PSByZWYgPyBrIDw9IHJlZiA6IGsgPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2sgOiAtLWspIHtcclxuICAgICAgICBmb3IgKGogPSBsID0gMCwgcmVmMSA9IHJlc3VsdC5sZW5ndGggLSAxOyAwIDw9IHJlZjEgPyBsIDw9IHJlZjEgOiBsID49IHJlZjE7IGogPSAwIDw9IHJlZjEgPyArK2wgOiAtLWwpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKHJlc3VsdFtqXS5jb25jYXQoaXRlbXNbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0LnNoaWZ0KCk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmpvaW4oJycpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIENzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwgPyBkZWZpbmUuYW1kIDogdm9pZCAwKSB7XHJcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcclxuICAgIHJvb3QuQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBDc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuICB9XHJcblxyXG59KS5jYWxsKHRoaXMpO1xyXG4iLCIvKlxyXG4gIFJlcGxhY2UgdGVtcGxhdGVzLlxyXG5cclxuICBSZXBsYWNlIHRoZSBkZWZhdWx0IHByaW1vIHRlbXBsYXRlcyBodHRwOi8vbG9jYWxob3N0OjgwMDMvcHJpbW8tZXhwbG9yZS9saWIvdGVtcGxhdGVzLmpzXHJcbiAgd2l0aCBjdXN0b20gdGVtcGxhdGVzXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE4XHJcbiAgVG9tIFZhbm1lY2hlbGVuXHJcbiovXHJcbmltcG9ydCAnLi91dGlscydcclxuXHJcbi8qIGltcG9ydCB5b3VyIHRlbXBsYXRlcyAqL1xyXG5cclxuaW1wb3J0IGNoYW5nZUxhbmdXaXRob3V0VXNlckFyZWFIVE1MIGZyb20gJy4uL2h0bWwvdGVtcGxhdGVzL2NoYW5nZS1sYW5nLXdpdGhvdXQtdXNlci1hcmVhLmh0bWwnXHJcbmltcG9ydCBwcm1Mb2FuQnVnRml4SFRNTCBmcm9tICcuLi9odG1sL3RlbXBsYXRlcy9wcm0tbG9hbi1idWctZml4Lmh0bWwnXHJcbmltcG9ydCBwcm1SZXF1ZXN0QnVnRml4SFRNTCBmcm9tICcuLi9odG1sL3RlbXBsYXRlcy9wcm0tcmVxdWVzdC1idWctZml4Lmh0bWwnXHJcbmltcG9ydCBwcm1MaXJpYXNCcmllZlJlc3VsdENvbnRhaW5lckhUTUwgZnJvbSAnLi4vaHRtbC90ZW1wbGF0ZXMvcHJtLWxpcmlhcy1icmllZi1yZXN1bHQtY29udGFpbmVyLmh0bWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZXMge1xyXG4gICAgc3RhdGljIGdldCBhbGwoKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgIGlkID0gdGVtcGxhdGVJZCBpbiB0aGUgdGVtcGxhdGVDYWNoZVxyXG4gICAgICAgICAgdGVtcGxhdGUgPSB0aGUgaW1wb3J0ZWQgdGVtcGFsdGVcclxuICAgICAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcclxuICAgICAgICAgIGVuYWJsZUluVmlldyA9IHJlZ2V4IHRvIGRlZmluZSBpbiB3aGljaCB2aWV3cyB0aGUgdGVtcGxhdGUgaGFzIHRvIGJlIHJlcGxhY2VkLlxyXG5cclxuICAgICAgICAgIGV4LiB7aWQ6ICdjb21wb25lbnRzL3NlYXJjaC90b3BiYXIvdXNlckFyZWEvdXNlci1hcmVhLmh0bWwnLCB0ZW1wbGF0ZTogdXNlckFyZWFIVE1MLCBlbmFibGVkOiB0cnVlLCBlbmFibGVJblZpZXc6ICcuKid9XHJcbiAgICAgICAgICByZXN1bHRzIGluOlxyXG4gICAgICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL3RvcGJhci91c2VyQXJlYS91c2VyLWFyZWEuaHRtbCcsdXNlckFyZWFIVE1MKTtcclxuICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb21wb25lbnRzL3NlYXJjaC90b3BiYXIvdXNlckFyZWEvdXNlci1hcmVhLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGNoYW5nZUxhbmdXaXRob3V0VXNlckFyZWFIVE1MLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVuYWJsZUluVmlldzogJ1ZESUMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnY29tcG9uZW50cy9hY2NvdW50L2xvYW5zL2xvYW4uaHRtbCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcHJtTG9hbkJ1Z0ZpeEhUTUwsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlSW5WaWV3OiAnLionXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnY29tcG9uZW50cy9hY2NvdW50L3JlcXVlc3RzL3JlcXVlc3RzLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHBybVJlcXVlc3RCdWdGaXhIVE1MLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVuYWJsZUluVmlldzogJy4qJ1xyXG4gICAgICAgICAgICB9LCAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnY29tcG9uZW50cy9zZWFyY2gvYnJpZWZSZXN1bHQvYnJpZWZSZXN1bHRDb250YWluZXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcHJtTGlyaWFzQnJpZWZSZXN1bHRDb250YWluZXJIVE1MLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVuYWJsZUluVmlldzogJ0xpcmlhcydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0uZmlsdGVyKCh0ZW1wbGF0ZSkgPT4gKHRlbXBsYXRlLmVuYWJsZWQgJiYgbmV3IFJlZ0V4cCh0ZW1wbGF0ZS5lbmFibGVJblZpZXcpLnRlc3Qod2luZG93LmFwcENvbmZpZy52aWQpKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICBHZW5lcmFsXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XHJcbiAgTWVobWV0IENlbGlrXHJcbiovXHJcblN0cmluZy5wcm90b3R5cGUudG9DYW1lbENhc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuc3BsaXQoJy0nKS5tYXAoKGQsIGksIGEpID0+IGkgPiAwID8gZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGQuc2xpY2UoMSkgOiBkKS5qb2luKCcnKTtcclxufVxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2dvb2dsZUFuYWx5dGljcycsIFtdKTtcclxuYW5ndWxhci5tb2R1bGUoJ2dvb2dsZUFuYWx5dGljcycpLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGludGVydmFsLCBhbmFseXRpY3NPcHRpb25zKSB7XHJcblx0aWYoYW5hbHl0aWNzT3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShcImVuYWJsZWRcIikgJiYgYW5hbHl0aWNzT3B0aW9ucy5lbmFibGVkKSB7XHJcblx0XHRpZihhbmFseXRpY3NPcHRpb25zLmhhc093blByb3BlcnR5KFwic2l0ZUlkXCIpICYmIGFuYWx5dGljc09wdGlvbnMuc2l0ZUlkICE9ICcnKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAoZnVuY3Rpb24odyxkLHMsbCxpKXt3W2xdPXdbbF18fFtdO3dbbF0ucHVzaCh7J2d0bS5zdGFydCc6XHJcbiAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpLGV2ZW50OidndG0uanMnfSk7dmFyIGY9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXSxcclxuICAgICAgICAgICAgaj1kLmNyZWF0ZUVsZW1lbnQocyksZGw9bCE9J2RhdGFMYXllcic/JyZsPScrbDonJztqLmFzeW5jPXRydWU7ai5zcmM9XHJcbiAgICAgICAgICAgICdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JytpK2RsO2YucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaixmKTtcclxuICAgICAgICAgICAgfSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdkYXRhTGF5ZXInLGFuYWx5dGljc09wdGlvbnMuc2l0ZUlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGlubGluZVNjcmlwdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25vc2NyaXB0Jyk7XHJcbiAgICAgICAgaW5saW5lU2NyaXB0VGFnLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuXHJcbiAgICAgICAgY29uc3QgaW5saW5lQ29kZSA9ICc8bm9zY3JpcHQ+PGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ucy5odG1sP2lkPUdUTS1XUjI1OU1YXCIgaGVpZ2h0PVwiMFwiIHdpZHRoPVwiMFwiIHN0eWxlPVwiZGlzcGxheTpub25lO3Zpc2liaWxpdHk6aGlkZGVuXCI+PC9pZnJhbWU+PC9ub3NjcmlwdD4nO1xyXG5cclxuICAgICAgICAvLyBNZXRob2RzIG9mIGFkZGluZyBpbm5lciB0ZXh0IHNvbWV0aW1lcyBkb24ndCB3b3JrIGFjcm9zcyBicm93c2Vycy5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaW5saW5lU2NyaXB0VGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlubGluZUNvZGUpKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBpbmxpbmVTY3JpcHRUYWcudGV4dCA9IGlubGluZUNvZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoaW5saW5lU2NyaXB0VGFnKTtcdFx0XHJcblx0fVxyXG59KTtcclxuYW5ndWxhci5tb2R1bGUoJ2dvb2dsZUFuYWx5dGljcycpLnZhbHVlKCdhbmFseXRpY3NPcHRpb25zJywge1xyXG5cdGVuYWJsZWQ6IGZhbHNlLFxyXG5cdHNpdGVJZDogJycsXHJcblx0ZGVmYXVsdFRpdGxlOiAnJ1xyXG59KTtcclxuXHJcbi8vaW50ZXJjZXB0IGFwaSBjYWxscyBmb3IgZGF0YWJhc2Ugc2VhcmNoIGFuZCBjaGFuZ2UgdG8gS1VMIChvbmx5IHJlZ2lvbmFsIHZpZXdzKVxyXG4gIC8qXHJcbnZhciByZWdfdmlld3MgPSBbXCJLVUxldXZlbl9UTU9SRU1cIiwgXCJLVUxldXZlbl9UTU9SRUtcIiwgXCJLVUxldXZlbl9VQ0xMXCIsIFwiS1VMZXV2ZW5fTFVDQVwiLCBcIktVTGV1dmVuX09ESVNFRVwiXTtcclxuaWYgKHJlZ192aWV3cy5pbmNsdWRlcyh3aW5kb3cuYXBwQ29uZmlnLnZpZCkpIHtcclxuICBsZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3ZpZXdDdXN0b20nLCBbXSlcclxuICAgIC5mYWN0b3J5KCdodHRwQ2FsbEludGVyY2VwdG9yJywgWygpID0+IHtcclxuICAgICAgdmFyIGh0dHBDYWxsSW50ZXJjZXB0b3IgPSB7XHJcbiAgICAgICAgcmVxdWVzdDogZnVuY3Rpb24oY29uZmlnKXtcclxuICAgICAgICAgIGlmIChjb25maWcudXJsLmluY2x1ZGVzKCdwbnhzJykgJiYgIWNvbmZpZy51cmwuaW5jbHVkZXMoJ2RlbGl2ZXJ5JykgJiYgY29uZmlnLnBhcmFtcykge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICBpZihjb25maWcucGFyYW1zLmRhdGFiYXNlcyl7XHJcbiAgICAgICAgICAgICAgY29uZmlnLnBhcmFtcy5pbnN0ID0gJ0tVTCc7XHJcbiAgICAgICAgICAgICAgY29uZmlnLnBhcmFtcy52aWQgPSAnS1VMZXV2ZW4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGh0dHBDYWxsSW50ZXJjZXB0b3I7XHJcbiAgICB9XSlcclxuICAgIC5jb25maWcoWyckaHR0cFByb3ZpZGVyJywgKCRodHRwUHJvdmlkZXIpID0+IHtcclxuICAgICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnaHR0cENhbGxJbnRlcmNlcHRvcicpO1xyXG4gICAgfV0pO1xyXG59XHJcbiovXHJcbi8qXHJcbmFuZ3VsYXIuZWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdENsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gIHJldHVybiAoZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgIGlmIChlbGVtZW50WzBdLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjbG9zZXN0KGVsZW1lbnQucGFyZW50KCksIGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfSkodGhpcywgY2xhc3NOYW1lKTtcclxufTtcclxuXHJcbmFuZ3VsYXIuZWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdE5vZGUgPSBmdW5jdGlvbiAobm9kZU5hbWUpIHtcclxuICByZXR1cm4gKGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgbm9kZU5hbWUpIHtcclxuICAgIGlmIChlbGVtZW50WzBdLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnRbMF0ubm9kZU5hbWUgPT0gbm9kZU5hbWUudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjbG9zZXN0KGVsZW1lbnQucGFyZW50KCksIG5vZGVOYW1lKTtcclxuICAgIH1cclxuICB9KSh0aGlzLCBub2RlTmFtZSk7XHJcbn07XHJcbiovXHJcbiJdfQ==
