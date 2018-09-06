(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

var _finesMessage = require('./components/prmTopBarBefore/finesMessage');

var _announcements = require('./components/prmTopBarBefore/announcements');

var _PromoteLogin = require('./components/prmPromoteLogin/PromoteLogin');

var _feedbackAnnouncement = require('./components/prmTopBarBefore/feedbackAnnouncement');

var _staticFooter = require('./components/general/staticFooter');

var _removeAlerts = require('./components/general/removeAlerts');

var _illRequestForm = require('./components/prmRequestsAfter/illRequestForm');

var _recommendationItem = require('./components/prmRecommendationItemAfter/recommendationItem');

var _databaseLink = require('./components/general/databaseLink');

var _removeOpenAccess = require('./components/prmFacetAfter/removeOpenAccess');

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
      return [{ name: 'libis-experiment', config: _experiment.experimentConfig, enabled: false, appendTo: 'prm-messages-and-blocks-overview-after', enableInView: '.*' }, { name: 'home-icon', config: _homeIcon.homeIconConfig, enabled: false, appendTo: null, enableInView: '' }, { name: 'beta-switch', config: _betaSwitch.betaSwitchConfig, enabled: false, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'language-dependent-logo', config: _languageDependentLogo.languageDependentLogoConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'view-logo', config: _viewLogo.viewLogoConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'source-icon', config: _sourceIcon.sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^(?!Lirias)' }, { name: 'altmetric', config: _altmetric.altmetricConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB' }, { name: 'altmetrics-badge', config: _altmetricsBadge.altmetricsBadgeConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB' }, { name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after', enableInView: '.*' }, { name: 'pay-my-fines', config: _payMyFines.payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after', enableInView: '.*' }, { name: 'feedback', config: _feedback.feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'language-selection', config: _ConfigLanguageSelection.LanguageSelectionConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'new-search-button', config: _newSearchButton.newSearchButtonConfig, enabled: true, appendTo: 'prm-top-nav-bar-links-after', enableInView: '^(?!ECB)' }, { name: 'report-a-problem', config: _reportAProblem.reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '.*' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'prm-disclaimer', config: _disclaimer.disclaimerConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'static-footer', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-explore-footer-after', enableInView: '.*' },
      //{name: 'static-footer-account', config: staticFooterConfig, enabled: true, appendTo: 'prm-account-after', enableInView: '.*'},
      { name: 'remove-alerts', config: _removeAlerts.removeAlertsConfig, enabled: true, appendTo: 'prm-add-query-to-saved-searches-after', enableInView: '.*' }, { name: 'prm-dblink', config: _databaseLink.databaseLinkConfig, enabled: false, appendTo: null, enableInView: '.*' },

      /* lbs-components used in html-templates of the package */
      { name: 'promote-login-static-footer', config: _PromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView: '^KULeuven' }, { name: 'ill-request-form-overview', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-overview-after', enableInView: '.*' }, { name: 'ill-request-form', config: _illRequestForm.illRequestFormConfig, enabled: true, appendTo: 'prm-requests-after', enableInView: '^KULeuven|^VIVES' }, { name: 'announcement-feedback', config: _feedbackAnnouncement.feedbackAnnouncementConfig, enabled: false, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'override-getlink-recommendation', config: _recommendationItem.recommendationItemConfig, enabled: true, appendTo: 'prm-recomendation-item-after', enableInView: '.*' }, { name: 'announcement', config: _announcements.announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'pay-my-fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven' }, { name: 'remove-open-access', config: _removeOpenAccess.removeOpenAccessConfig, enabled: true, appendTo: 'prm-facet-after', enableInView: '.*' }, { name: 'search-also', config: _searchAlso.searchAlsoConfig, enabled: true, appendTo: 'prm-facet-after', enableInView: '^KULeuven' }, { name: 'search-also-body', config: _searchAlsoBody.searchAlsoBodyConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^KULeuven' }, { name: 'browzine', config: _browzine.browzineConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '^ECB' }].filter(function (component) {
        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/ConfigLanguageSelection":2,"./components/general/databaseLink":3,"./components/general/disclaimer":5,"./components/general/experiment":6,"./components/general/removeAlerts":7,"./components/general/searchTip":8,"./components/general/staticFooter":9,"./components/prmBriefResultAfter/altmetric":10,"./components/prmBriefResultAfter/sourceIcon":11,"./components/prmFacetAfter/removeOpenAccess":12,"./components/prmFacetAfter/searchAlso":13,"./components/prmFacetExactAfter/searchAlsoBody":14,"./components/prmFinesOverviewAfter/payMyFines":15,"./components/prmFullViewAfter/altmetricsBadge":16,"./components/prmLogoAfter/betaSwitch":17,"./components/prmLogoAfter/homeIcon":18,"./components/prmLogoAfter/languageDependentLogo":19,"./components/prmLogoAfter/newSearchButton":20,"./components/prmLogoAfter/viewLogo":21,"./components/prmMainMenuAfter/feedback":22,"./components/prmPromoteLogin/PromoteLogin":23,"./components/prmRecommendationItemAfter/recommendationItem":24,"./components/prmRequestsAfter/illRequestForm":25,"./components/prmSearchResultAvailabilityLineAfterController/browzine":26,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":27,"./components/prmServiceHeaderAfter/reportAProblem":28,"./components/prmTopBarBefore/announcements":29,"./components/prmTopBarBefore/feedbackAnnouncement":30,"./components/prmTopBarBefore/finesMessage":32,"./utils":47}],2:[function(require,module,exports){
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

var databaseLinkHTML = '\n<a aria-label="{{title_label}}" title="{{title_label}}" ng-click="databaseLink()">\n  <span class ="md-headline" id="ContentDatabasLink">\n    {{title}}\n  </span>\n</a>\n';

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

var disclaimerDialogHTML = '\uFEFF<md-dialog aria-label="Disclaimer">\n    <md-dialog-content id="disclaimerDialog">\n        <md-toolbar md-autofocus >\n            <div class="md-toolbar-tools">\n                <h2>Cookiebeleid Limo</h2>\n                <span flex></span>\n                <md-button class="md-icon-button" ng-click="closeDialog()">\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n                </md-button>\n            </div>\n        </md-toolbar>\n        <md-content>\n            Limo gebruikt cookies die het gebruik van de zoekmachine vergemakkelijken.\n\n            <h3>WAT IS EEN COOKIE?</h3>\n            Cookies zijn kleine tekstbestanden die je voorkeuren tijdens het surfen onthouden en opslaan op je eigen computer of toestel.\n\n            <h3>COOKIEGEBRUIK IN LIMO</h3>\n            <p>\n                Enerzijds zijn er functionele cookies. Deze cookies onthouden bepaalde keuzes en instellingen die je een eerste keer hebt\n                gekozen om bij volgende bezoeken effici\xEBnter, sneller en eenvoudiger te kunnen zoeken in Limo. Deze cookies\n                onthouden voorkeursinstellingen,\u2026\n            </p>\n            <p>\n                Voor gebruikers van de de KU Leuven Associatie kunnen loginnamen onthouden worden bij het aanmelden via de Centrale login.\n            </p>\n            <p>\n                Anderzijds worden cookies ook gebruikt om bezoek- en klikgedrag te onthouden. Hiermee worden geanonimiseerde rapporten gemaakt\n                van het gebruik van Limo.\n            </p>\n            <!--                \n                KU Leuven gebruikt onder andere volgende cookies op de centraal beheerde websites:\n                <ul>\n                    <li>\n                    NSC_* : Deze cookies worden gebruikt door de netscaler om de loadbalancing te sturen\n                    </li>\n                <li>_ga* en _utm*: Dit zijn Google Analytics cookies, gebruikt voor user-tracking (meer info over Google Analytics)\n                 </li>\n                <li>\t_pk_id* : piwik cookies die gebruikt worden door de user-tracking omgeving van KU Leuven\n                 </li>\n                <li>\tJSESSIONID: cookies die gebruikt worden in toledo en kuloket\n                 </li>\n                <li>\tPHPSESSID: cookies die gebruikt voor de lamp omgeving (php)\n                 </li>\n                <li>\t_shibsession* en _saml*: cookies die nodig zijn voor de centrale login van KU Leuven\n                </li>\n                </ul>\n            -->\n            <h3>WIJZIGINGEN VAN BROWSERINSTELLINGEN</h3>\n            <p>\n                Cookies kan je via de browserinstellingen op je computer weigeren of verwijderen. De wijze hoe dit kan gebeuren verschilt\n                van browser tot browser. Raadpleeg indien nodig de helpfunctie van je browser. Deze instellingen moet je\n                steeds per browser en per computer apart instellen!\n            </p>\n            <ul>\n                <li>\n                    <a href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies#ie=ie-10-win-7" target="_blank">Cookie-instellingen in Internet Explorer</a>\n                </li>\n                <li>\n                    <a href="https://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Cookie-instellingen in Chrome</a>\n                </li>\n                <li>\n                    <a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies"\n                        target="_blank">Cookie-instellingen in Firefox</a>\n                </li>\n                <li>\n                    <a href="https://support.apple.com/kb/PH19214?locale=nl_BE" target="_blank">Cookie-instellingen in Safari</a>\n                </li>\n            </ul>\n            <p>\n                Het niet-aanvaarden of verwijderen of uitzetten van cookies kan tot gevolg hebben dat bepaalde functionaliteiten van Limo\n                niet meer toegankelijk zijn of slecht functioneren. Daardoor kan de beleving van de site tegenvallen.\n            </p>\n            <h3>SOCIALE MEDIA EN DE BIJHORENDE PLUG-INS</h3>\n            <p>\n                Facebook ontvangt heel wat informatie over je surfgedrag via deze social plug-in op hun websites (via bijvoorbeeld de knoppen\n                \u201CVind ik leuk\u201D of \u201CDelen\u201D).\n            </p>\n            <p>\n                Deze knoppen kunnen zich ook bevinden op de resultatenpagina van Limo.\n            </p>\n            <p>\n                Indien je je hiertegen wilt beschermen, dan wordt er (door onder meer het Centrum voor de Bescherming van de Persoonlijke\n                Levenssfeer) aangeraden om \xE9\xE9n van de onderstaande maatregelen te nemen.\n            </p>\n\n            <ol>\n                <li>Installeer een browser add-on die tracking blokkeert. Voorbeelden van dergelijke browser add-ons zijn:\n                    <ul>\n                        <li>Privacy Badger (\n                            <a href="http://www.eff.org/privacybadger" target="_blank">http://www.eff.org/privacybadger</a>)</li>\n                        <li>Ghostery (\n                            <a href="https://www.ghostery.com/" target="_blank">https://www.ghostery.com</a>)</li>\n                        <li>Disconnect (\n                            <a href="https://disconnect.me/disconnect" target="_blank">https://disconnect.me/disconnect</a>)</li>\n                    </ul>\n                </li>\n\n                <li>Maak gebruik van de incognito of \u201Cprivate nagivation\u201D-modus van uw browser. Recente versies van de meest\n                    courante browsers bieden zo\u2019n priv\xE9-modus als functionaliteit aan:\n                    <ul>\n                        <li> Internet Explorer </li>\n                        <li>Firefox</li>\n                        <li>Chrome</li>\n                        <li> Safari</li>\n                    </ul>\n                </li>\n            </ol>\n\n\n            <p>Deze functie dwingt de browser om sporen van je surfgedrag (cookies, historiek, enz.) te wissen nadat het venster\n                wordt gesloten en beschermt je aldus om door derden gevolgd te worden (opgelet: deze functie maakt jou niet\n                anoniem op het web). Er bestaan ook speciale privacybeschermende browsers, zoals Epic Privacy Browser (\n                <a href="http://www.epicbrowser.com/" target="_blank">www.epicbrowser.com</a>).</p>\n\n            <p>Sociale media en andere websites gebruiken informatie over het surfgedrag van zijn gebruikers om hen gerichte\n                reclame aan te bieden. Wil je niet meer gevolgd worden voor gerichte reclame dan kan je je\n                <strong>uitschrijven voor gerichte advertenties</strong> via de opt-out website van de European Interactive Digital\n                Advertising Alliance (\n                <a href="http://www.youronlinechoices.eu/" target="_blank">www.youronlinechoices.eu</a>).\n            </p>\n                <p>\n                <br> Uitschrijven voor gerichte advertenties betekent niet dat er geen informatie meer verzameld wordt over je\n                surfgedrag. Indien je je ook wil beschermen tegen de inzameling van deze informatie wordt er geadviseerd\n                om daarnaast ook gebruik te maken van de incognito-modus van uw browser of \xE9\xE9n van de bovenvermelde browser\n                add-ons te gebruiken..</p>\n\n            <h3>MEER WETEN?</h3>\n\n            <p>Meer info vind je onder andere op volgende websites:\n                <a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a>&nbsp;en\n                <a href="http://www.youronlinechoices.com/be-nl/" target="_blank">www.youronlinechoices.com/be-nl</a>\n            </p>.\n\n            <md-dialog-actions>\n                <div layout="row" class="demo-dialog-button">\n                    <md-button class="md-primary" ng-click="closeDialog()">\n                        Sluiten\n                    </md-button>\n                </div>\n            </md-dialog-actions>\n        </md-content>\n    </md-dialog-content>\n</md-dialog>';
var cookiePolicyDialogHTML = '<md-dialog aria-label="Disclaimer">\n\t\t<md-dialog-content id="disclaimerDialog">\n\t\t\t<md-toolbar md-autofocus >\n\t\t\t\t<div class="md-toolbar-tools">\n\t\t\t\t\t<h2>LIMO COOKIE POLICY</h2>\n\t\t\t\t\t<span flex></span>\n\t\t\t\t\t<md-button  class="md-icon-button" ng-click="closeDialog()">\n\t\t\t\t\t\t<md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n\t\t\t\t\t</md-button>\n\t\t\t\t</div>\n\t\t\t</md-toolbar>\n\t\t\t<md-content>\n\t\t\t\t\tLimo uses cookies that facilitate the use of the search engine.\n\t\n\t\t\t\t<h3>WHAT IS A COOKIE?</h3>\n\t\t\t\tCookies are small text files that record your preferences during your browser activities and are saved on your own computer or device.\n\t\n\t\t\t\t<h3>USE OF COOKIES IN LIMO</h3>\n\t\t\t\t<p>\n\t\t\t\t\t\tCookies can on the one hand be <u>functional</u>. These cookies record certain of the choices and settings made on your first visit to allow you to navigate more efficiently, quickly and simply on subsequent visits. These cookies record for example preference settings.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tFor users of the KU Leuven Association, login names can be recorded when logging in via the Central Login page.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tOn the other hand, cookies can also be used to record <u>visit and click activity</u>. This can be used to make anonimised reports of the user of Limo.\n\t\t\t\t</p>\n\t\t\t\t<!--                \n\t\t\t\t\tKU Leuven gebruikt onder andere volgende cookies op de centraal beheerde websites:\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\tNSC_* : Deze cookies worden gebruikt door de netscaler om de loadbalancing te sturen\n\t\t\t\t\t\t</li>\n\t\t\t\t\t<li>_ga* en _utm*: Dit zijn Google Analytics cookies, gebruikt voor user-tracking (meer info over Google Analytics)\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\t_pk_id* : piwik cookies die gebruikt worden door de user-tracking omgeving van KU Leuven\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\tJSESSIONID: cookies die gebruikt worden in toledo en kuloket\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\tPHPSESSID: cookies die gebruikt voor de lamp omgeving (php)\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\t_shibsession* en _saml*: cookies die nodig zijn voor de centrale login van KU Leuven\n\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t-->\n\t\t\t\t<h3>CHANGING BROWSER SETTINGS</h3>\n\t\t\t\t<p>\n\t\t\t\t\t\tYou can enable or delete cookies on your computer through your browser settings. \n\t\t\t\t\t\tThe way in which this works varies from browser to browser. Consult your browser\u2019s help function if necessary. You must always make this adjustment per browser and per computer!\n\t\t\t\t</p>\n\t\t\t\n\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies#ie=ie-10-win-7" target="_blank">Cookie settings in Internet Explorer</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Cookie settings in Chrome</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies"\n\t\t\t\t\t\t\ttarget="_blank">Cookie settings in Firefox</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://support.apple.com/kb/PH19214?locale=nl_BE" target="_blank">Cookie settings in Safari</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>\n\t\t\t\t\t\tNot accepting, disabling or deleting cookies may result in certain functionalities of the Limo website being no longer accessible or operating normally. \n\t\t\t\t\t\tThis may make your website experience unsatisfactory.\n\t\t\t\t</p>\n\t\t\t\t<h3>SOCIAL MEDIA AND THE CORRESPONDING PLUG-INS</h3>\n\t\t\t\t<p>\n\t\t\t\t\t\tMany social media (such as, Facebook, Linkedin, Twitter, Google+, Tumblr, etc.) \n\t\t\t\t\t\treceive a lot of information on your browsing habits through social plug-ins on their websites (for example by way of the Like or Share buttons).\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tThese buttons may also be found on the web pages of the Limo results list.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tIf you want to protect yourself from these, then you are advised (by, among other agencies, the Belgian Commission for the Protection of Privacy) to take one of the steps below.\n\t\t\t\t</p>\n\t\n\t\t\t\t<ol>\n\t\t\t\t\t<li>Install a browser that blocks add-on tracking. Examples of such browser add-ons are:\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Privacy Badger (\n\t\t\t\t\t\t\t\t<a href="http://www.eff.org/privacybadger" target="_blank">http://www.eff.org/privacybadger</a>)</li>\n\t\t\t\t\t\t\t<li>Ghostery (\n\t\t\t\t\t\t\t\t<a href="https://www.ghostery.com/" target="_blank">https://www.ghostery.com</a>)</li>\n\t\t\t\t\t\t\t<li>Disconnect (\n\t\t\t\t\t\t\t\t<a href="https://disconnect.me/disconnect" target="_blank">https://disconnect.me/disconnect</a>)</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\n\t\t\t\t\t<li>Make use of your browser\u2019s incognito or private navigation mode. \n\t\t\t\t\t\tRecent versions of the most popular browsers provide such a private navigation mode:\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href="https://support.microsoft.com/en-us/products/windows?os=windows-10">Internet Explorer</a></li>\n\t\t\t\t\t\t\t<li><a href="https://support.mozilla.org/nl/kb/privenavigatie-firefox-gebruiken-zonder-geschiedenis">Firefox</a></li>\n\t\t\t\t\t\t\t<li><a href="https://support.google.com/chrome/answer/95464?hl=nl">Chrome</a></li>\n\t\t\t\t\t\t\t<li><a href="https://support.apple.com/kb/PH19216?locale=nl_NL">Safari</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ol>\n\t\n\t\n\t\t\t\t<p>\n\t\t\t\t\t\tThis function forces your browser to erase all tracks of your browsing activity (cookies, history, etc.) after you have closed the window and therefore protects you from being tracked by third parties (please note: this function does not make you anonymous on the web). \n\t\t\t\t\t\tThere are also special browsers that protect privacy, such as Privacy Browser  \n\t\t\t\t\t\t(<a href="http://www.epicbrowser.com/" target="_blank">www.epicbrowser.com</a>).</p>\n\t\n\t\t\t\t<p>\n\t\t\t\t\t\tSocial media and other websites use information about the browsing activity of its users to provide them with targeted advertising. If you no longer want to be tracked by targeted advertising, \n\t\t\t\t\t\tyou can choose to opt out of targeted advertisements via the opt-out website of the European Interactive Digital Advertising Alliance \n\t\t\t\t\t (<a href="http://www.youronlinechoices.eu/" target="_blank">www.youronlinechoices.eu</a>).\n\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t\tOpting out of targeted advertisements does not mean that information is no longer collected on your browsing activities. If you also want to protect yourself from the collection of this information, \n\t\t\t\t\t\t\tyou are advised to also use the incognito mode of your browser or one of the above-mentioned browser add-ons..</p>\n\t\n\t\t\t\t<h3>WANT MORE INFORMATION?</h3>\n\t\n\t\t\t\t<p>You will find more information on the following websites: \n\t\t\t\t\t<a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a> and \n\t\t\t\t\t<a href="http://www.youronlinechoices.com/be-nl/" target="_blank">www.youronlinechoices.com/be-nl</a>\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\tLIBIS reserves the right to amend this policy at any time. You will always find the most recent version of the Cookie Statement on this page.\n\t\t\t</p>\n\n\t\t\t\t<md-dialog-actions>\n\t\t\t\t\t<div layout="row" class="demo-dialog-button">\n\t\t\t\t\t\t<md-button class="md-primary" ng-click="closeDialog()">\n\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t</md-button>\n\t\t\t\t\t</div>\n\t\t\t\t</md-dialog-actions>\n\t\t\t\t\n\t\t\t</md-content>\n\t\t</md-dialog-content>\n\t</md-dialog>';
var disclaimerDialog_frFR_HTML = '<md-dialog aria-label="Disclaimer">\n\t\t<md-dialog-content id="disclaimerDialog">\n\t\t\t<md-toolbar md-autofocus >\n\t\t\t\t<div class="md-toolbar-tools">\n\t\t\t\t\t<h2>LIMO COOKIE POLICY</h2>\n\t\t\t\t\t<span flex></span>\n\t\t\t\t\t<md-button  class="md-icon-button" ng-click="closeDialog()">\n\t\t\t\t\t\t<md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n\t\t\t\t\t</md-button>\n\t\t\t\t</div>\n\t\t\t</md-toolbar>\n\t\t\t<md-content>\n\t\t\t\t\tLimo uses cookies that facilitate the use of the search engine.\n\t\n\t\t\t\t<h3>WHAT IS A COOKIE?</h3>\n\t\t\t\tCookies are small text files that record your preferences during your browser activities and are saved on your own computer or device.\n\t\n\t\t\t\t<h3>USE OF COOKIES IN LIMO</h3>\n\t\t\t\t<p>\n\t\t\t\t\t\tCookies can on the one hand be <u>functional</u>. These cookies record certain of the choices and settings made on your first visit to allow you to navigate more efficiently, quickly and simply on subsequent visits. These cookies record for example preference settings.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tFor users of the KU Leuven Association, login names can be recorded when logging in via the Central Login page.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tOn the other hand, cookies can also be used to record <u>visit and click activity</u>. This can be used to make anonimised reports of the user of Limo.\n\t\t\t\t</p>\n\t\t\t\t<!--                \n\t\t\t\t\tKU Leuven gebruikt onder andere volgende cookies op de centraal beheerde websites:\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\tNSC_* : Deze cookies worden gebruikt door de netscaler om de loadbalancing te sturen\n\t\t\t\t\t\t</li>\n\t\t\t\t\t<li>_ga* en _utm*: Dit zijn Google Analytics cookies, gebruikt voor user-tracking (meer info over Google Analytics)\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\t_pk_id* : piwik cookies die gebruikt worden door de user-tracking omgeving van KU Leuven\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\tJSESSIONID: cookies die gebruikt worden in toledo en kuloket\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\tPHPSESSID: cookies die gebruikt voor de lamp omgeving (php)\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\t_shibsession* en _saml*: cookies die nodig zijn voor de centrale login van KU Leuven\n\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t-->\n\t\t\t\t<h3>CHANGING BROWSER SETTINGS</h3>\n\t\t\t\t<p>\n\t\t\t\t\t\tYou can enable or delete cookies on your computer through your browser settings. \n\t\t\t\t\t\tThe way in which this works varies from browser to browser. Consult your browser\u2019s help function if necessary. You must always make this adjustment per browser and per computer!\n\t\t\t\t</p>\n\t\t\t\n\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies#ie=ie-10-win-7" target="_blank">Cookie settings in Internet Explorer</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Cookie settings in Chrome</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies"\n\t\t\t\t\t\t\ttarget="_blank">Cookie settings in Firefox</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://support.apple.com/kb/PH19214?locale=nl_BE" target="_blank">Cookie settings in Safari</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>\n\t\t\t\t\t\tNot accepting, disabling or deleting cookies may result in certain functionalities of the Limo website being no longer accessible or operating normally. \n\t\t\t\t\t\tThis may make your website experience unsatisfactory.\n\t\t\t\t</p>\n\t\t\t\t<h3>SOCIAL MEDIA AND THE CORRESPONDING PLUG-INS</h3>\n\t\t\t\t<p>\n\t\t\t\t\t\tMany social media (such as, Facebook, Linkedin, Twitter, Google+, Tumblr, etc.) \n\t\t\t\t\t\treceive a lot of information on your browsing habits through social plug-ins on their websites (for example by way of the Like or Share buttons).\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tThese buttons may also be found on the web pages of the Limo results list.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tIf you want to protect yourself from these, then you are advised (by, among other agencies, the Belgian Commission for the Protection of Privacy) to take one of the steps below.\n\t\t\t\t</p>\n\t\n\t\t\t\t<ol>\n\t\t\t\t\t<li>Install a browser that blocks add-on tracking. Examples of such browser add-ons are:\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Privacy Badger (\n\t\t\t\t\t\t\t\t<a href="http://www.eff.org/privacybadger" target="_blank">http://www.eff.org/privacybadger</a>)</li>\n\t\t\t\t\t\t\t<li>Ghostery (\n\t\t\t\t\t\t\t\t<a href="https://www.ghostery.com/" target="_blank">https://www.ghostery.com</a>)</li>\n\t\t\t\t\t\t\t<li>Disconnect (\n\t\t\t\t\t\t\t\t<a href="https://disconnect.me/disconnect" target="_blank">https://disconnect.me/disconnect</a>)</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\n\t\t\t\t\t<li>Make use of your browser\u2019s incognito or private navigation mode. \n\t\t\t\t\t\tRecent versions of the most popular browsers provide such a private navigation mode:\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href="https://support.microsoft.com/en-us/products/windows?os=windows-10">Internet Explorer</a></li>\n\t\t\t\t\t\t\t<li><a href="https://support.mozilla.org/nl/kb/privenavigatie-firefox-gebruiken-zonder-geschiedenis">Firefox</a></li>\n\t\t\t\t\t\t\t<li><a href="https://support.google.com/chrome/answer/95464?hl=nl">Chrome</a></li>\n\t\t\t\t\t\t\t<li><a href="https://support.apple.com/kb/PH19216?locale=nl_NL">Safari</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ol>\n\t\n\t\n\t\t\t\t<p>\n\t\t\t\t\t\tThis function forces your browser to erase all tracks of your browsing activity (cookies, history, etc.) after you have closed the window and therefore protects you from being tracked by third parties (please note: this function does not make you anonymous on the web). \n\t\t\t\t\t\tThere are also special browsers that protect privacy, such as Privacy Browser  \n\t\t\t\t\t\t(<a href="http://www.epicbrowser.com/" target="_blank">www.epicbrowser.com</a>).</p>\n\t\n\t\t\t\t<p>\n\t\t\t\t\t\tSocial media and other websites use information about the browsing activity of its users to provide them with targeted advertising. If you no longer want to be tracked by targeted advertising, \n\t\t\t\t\t\tyou can choose to opt out of targeted advertisements via the opt-out website of the European Interactive Digital Advertising Alliance \n\t\t\t\t\t (<a href="http://www.youronlinechoices.eu/" target="_blank">www.youronlinechoices.eu</a>).\n\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t\tOpting out of targeted advertisements does not mean that information is no longer collected on your browsing activities. If you also want to protect yourself from the collection of this information, \n\t\t\t\t\t\t\tyou are advised to also use the incognito mode of your browser or one of the above-mentioned browser add-ons..</p>\n\t\n\t\t\t\t<h3>WANT MORE INFORMATION?</h3>\n\t\n\t\t\t\t<p>You will find more information on the following websites: \n\t\t\t\t\t<a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a> and \n\t\t\t\t\t<a href="http://www.youronlinechoices.com/be-nl/" target="_blank">www.youronlinechoices.com/be-nl</a>\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\tLIBIS reserves the right to amend this policy at any time. You will always find the most recent version of the Cookie Statement on this page.\n\t\t\t</p>\n\n\t\t\t\t<md-dialog-actions>\n\t\t\t\t\t<div layout="row" class="demo-dialog-button">\n\t\t\t\t\t\t<md-button class="md-primary" ng-click="closeDialog()">\n\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t</md-button>\n\t\t\t\t\t</div>\n\t\t\t\t</md-dialog-actions>\n\t\t\t\t\n\t\t\t</md-content>\n\t\t</md-dialog-content>\n\t</md-dialog>';
var disclaimerDialog_nlBE_HTML = '<md-dialog aria-label="Disclaimer">\n\t\t<md-dialog-content id="disclaimerDialog">\n\t\t\t<md-toolbar md-autofocus >\n\t\t\t\t<div class="md-toolbar-tools">\n\t\t\t\t\t<h2>Cookiebeleid Limo</h2>\n\t\t\t\t\t<span flex></span>\n\t\t\t\t\t<md-button class="md-icon-button" ng-click="closeDialog()">\n\t\t\t\t\t\t<md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n\t\t\t\t\t</md-button>\n\t\t\t\t</div>\n\t\t\t</md-toolbar>\n\t\t\t<md-content>\n\t\t\t\tLimo gebruikt cookies die het gebruik van de zoekmachine vergemakkelijken.\n\t\n\t\t\t\t<h3>WAT IS EEN COOKIE?</h3>\n\t\t\t\tCookies zijn kleine tekstbestanden die je voorkeuren tijdens het surfen onthouden en opslaan op je eigen computer of toestel.\n\t\n\t\t\t\t<h3>COOKIEGEBRUIK IN LIMO</h3>\n\t\t\t\t<p>\n\t\t\t\t\tEnerzijds zijn er functionele cookies. Deze cookies onthouden bepaalde keuzes en instellingen die je een eerste keer hebt\n\t\t\t\t\tgekozen om bij volgende bezoeken effici\xEBnter, sneller en eenvoudiger te kunnen zoeken in Limo. Deze cookies\n\t\t\t\t\tonthouden ondermeer voorkeursinstellingen.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tVoor gebruikers van de KU Leuven Associatie kunnen loginnamen onthouden worden bij het aanmelden via de Centrale login.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tAnderzijds worden cookies ook gebruikt om bezoek- en klikgedrag te onthouden. Hiermee worden geanonimiseerde rapporten gemaakt\n\t\t\t\t\tvan het gebruik van Limo.\n\t\t\t\t</p>\n\t\t\t\t<!--                \n\t\t\t\t\tKU Leuven gebruikt onder andere volgende cookies op de centraal beheerde websites:\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\tNSC_* : Deze cookies worden gebruikt door de netscaler om de loadbalancing te sturen\n\t\t\t\t\t\t</li>\n\t\t\t\t\t<li>_ga* en _utm*: Dit zijn Google Analytics cookies, gebruikt voor user-tracking (meer info over Google Analytics)\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\t_pk_id* : piwik cookies die gebruikt worden door de user-tracking omgeving van KU Leuven\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\tJSESSIONID: cookies die gebruikt worden in toledo en kuloket\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\tPHPSESSID: cookies die gebruikt voor de lamp omgeving (php)\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\t_shibsession* en _saml*: cookies die nodig zijn voor de centrale login van KU Leuven\n\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t-->\n\t\t\t\t<h3>WIJZIGINGEN VAN BROWSERINSTELLINGEN</h3>\n\t\t\t\t<p>\n\t\t\t\t\tCookies kan je via de browserinstellingen op je computer weigeren of verwijderen. De wijze waarop dit kan gebeuren verschilt\n\t\t\t\t\tvan browser tot browser. Raadpleeg indien nodig de helpfunctie van je browser. Deze instellingen moet je\n\t\t\t\t\tsteeds per browser en per computer apart instellen!\n\t\t\t\t</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies#ie=ie-10-win-7" target="_blank">Cookie-instellingen in Internet Explorer</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Cookie-instellingen in Chrome</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies"\n\t\t\t\t\t\t\ttarget="_blank">Cookie-instellingen in Firefox</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://support.apple.com/kb/PH19214?locale=nl_BE" target="_blank">Cookie-instellingen in Safari</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>\n\t\t\t\t\tHet niet-aanvaarden of verwijderen of uitzetten van cookies kan tot gevolg hebben dat bepaalde functionaliteiten van Limo\n\t\t\t\t\tniet meer toegankelijk zijn of slecht functioneren. Daardoor kan de beleving van de site tegenvallen.\n\t\t\t\t</p>\n\t\t\t\t<h3>SOCIALE MEDIA EN DE BIJHORENDE PLUG-INS</h3>\n\t\t\t\t<p>\n\t\t\t\t\tFacebook ontvangt heel wat informatie over je surfgedrag via deze social plug-in op hun websites (via bijvoorbeeld de knoppen\n\t\t\t\t\t\u201CVind ik leuk\u201D of \u201CDelen\u201D).\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tDeze knoppen kunnen zich ook bevinden op de resultatenpagina van Limo.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tIndien je je hiertegen wilt beschermen, dan wordt er (door onder meer het Centrum voor de Bescherming van de Persoonlijke\n\t\t\t\t\tLevenssfeer) aangeraden om \xE9\xE9n van de onderstaande maatregelen te nemen.\n\t\t\t\t</p>\n\t\n\t\t\t\t<ol>\n\t\t\t\t\t<li>Installeer een browser add-on die tracking blokkeert. Voorbeelden van dergelijke browser add-ons zijn:\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Privacy Badger (\n\t\t\t\t\t\t\t\t<a href="http://www.eff.org/privacybadger" target="_blank">http://www.eff.org/privacybadger</a>)</li>\n\t\t\t\t\t\t\t<li>Ghostery (\n\t\t\t\t\t\t\t\t<a href="https://www.ghostery.com/" target="_blank">https://www.ghostery.com</a>)</li>\n\t\t\t\t\t\t\t<li>Disconnect (\n\t\t\t\t\t\t\t\t<a href="https://disconnect.me/disconnect" target="_blank">https://disconnect.me/disconnect</a>)</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\n\t\t\t\t\t<li>Maak gebruik van de incognito of \u201Cprivate nagivation\u201D-modus van uw browser. Recente versies van de meest\n\t\t\t\t\t\tcourante browsers bieden zo\u2019n priv\xE9-modus als functionaliteit aan:\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li> Internet Explorer </li>\n\t\t\t\t\t\t\t<li>Firefox</li>\n\t\t\t\t\t\t\t<li>Chrome</li>\n\t\t\t\t\t\t\t<li> Safari</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ol>\n\t\n\t\n\t\t\t\t<p>Deze functie dwingt de browser om sporen van je surfgedrag (cookies, historiek, enz.) te wissen nadat het venster\n\t\t\t\t\twordt gesloten en beschermt je aldus om door derden gevolgd te worden (opgelet: deze functie maakt jou niet\n\t\t\t\t\tanoniem op het web). Er bestaan ook speciale privacybeschermende browsers, zoals Epic Privacy Browser (\n\t\t\t\t\t<a href="http://www.epicbrowser.com/" target="_blank">www.epicbrowser.com</a>).</p>\n\t\n\t\t\t\t<p>Sociale media en andere websites gebruiken informatie over het surfgedrag van hun gebruikers om hen gerichte\n\t\t\t\t\treclame aan te bieden. Wil je niet meer gevolgd worden voor gerichte reclame dan kan je je\n\t\t\t\t\t<strong>uitschrijven voor gerichte advertenties</strong> via de opt-out website van de European Interactive Digital\n\t\t\t\t\tAdvertising Alliance (\n\t\t\t\t\t<a href="http://www.youronlinechoices.eu/" target="_blank">www.youronlinechoices.eu</a>).\n\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t<br> Uitschrijven voor gerichte advertenties betekent niet dat er geen informatie meer verzameld wordt over je\n\t\t\t\t\tsurfgedrag. Indien je je ook wil beschermen tegen de inzameling van deze informatie wordt er geadviseerd\n\t\t\t\t\tom daarnaast ook gebruik te maken van de incognito-modus van uw browser of \xE9\xE9n van de bovenvermelde browser\n\t\t\t\t\tadd-ons te gebruiken..</p>\n\t\n\t\t\t\t<h3>MEER WETEN?</h3>\n\t\n\t\t\t\t<p>Meer info vind je onder andere op volgende websites:\n\t\t\t\t\t<a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a>&nbsp;en\n\t\t\t\t\t<a href="http://www.youronlinechoices.com/be-nl/" target="_blank">www.youronlinechoices.com/be-nl</a>\n\t\t\t\t</p>\n<p>\n\t\t\t\tLIBIS behoudt zich het recht voor om deze cookieverklaring op ieder moment te wijzigen. De meest recente versie van de cookieverklaring vind je altijd op deze pagina.\n\t\t\t</p>\n\t\t\t\t<md-dialog-actions>\n\t\t\t\t\t<div layout="row" class="demo-dialog-button">\n\t\t\t\t\t\t<md-button class="md-primary" ng-click="closeDialog()">\n\t\t\t\t\t\t\tSluiten\n\t\t\t\t\t\t</md-button>\n\t\t\t\t\t</div>\n\t\t\t\t</md-dialog-actions>\n\t\t\t</md-content>\n\t\t</md-dialog-content>\n\t</md-dialog>';
var disclaimerDialog_enUS_HTML = '<md-dialog aria-label="Disclaimer">\n\t\t<md-dialog-content id="disclaimerDialog">\n\t\t\t<md-toolbar md-autofocus >\n\t\t\t\t<div class="md-toolbar-tools">\n\t\t\t\t\t<h2>LIMO COOKIE POLICY</h2>\n\t\t\t\t\t<span flex></span>\n\t\t\t\t\t<md-button  class="md-icon-button" ng-click="closeDialog()">\n\t\t\t\t\t\t<md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n\t\t\t\t\t</md-button>\n\t\t\t\t</div>\n\t\t\t</md-toolbar>\n\t\t\t<md-content>\n\t\t\t\t\tLimo uses cookies that facilitate the use of the search engine.\n\t\n\t\t\t\t<h3>WHAT IS A COOKIE?</h3>\n\t\t\t\tCookies are small text files that record your preferences during your browser activities and are saved on your own computer or device.\n\t\n\t\t\t\t<h3>USE OF COOKIES IN LIMO</h3>\n\t\t\t\t<p>\n\t\t\t\t\t\tCookies can on the one hand be <u>functional</u>. These cookies record certain of the choices and settings made on your first visit to allow you to navigate more efficiently, quickly and simply on subsequent visits. These cookies record for example preference settings.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tFor users of the KU Leuven Association, login names can be recorded when logging in via the Central Login page.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tOn the other hand, cookies can also be used to record <u>visit and click activity</u>. This can be used to make anonimised reports of the user of Limo.\n\t\t\t\t</p>\n\t\t\t\t<!--                \n\t\t\t\t\tKU Leuven gebruikt onder andere volgende cookies op de centraal beheerde websites:\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\tNSC_* : Deze cookies worden gebruikt door de netscaler om de loadbalancing te sturen\n\t\t\t\t\t\t</li>\n\t\t\t\t\t<li>_ga* en _utm*: Dit zijn Google Analytics cookies, gebruikt voor user-tracking (meer info over Google Analytics)\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\t_pk_id* : piwik cookies die gebruikt worden door de user-tracking omgeving van KU Leuven\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\tJSESSIONID: cookies die gebruikt worden in toledo en kuloket\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\tPHPSESSID: cookies die gebruikt voor de lamp omgeving (php)\n\t\t\t\t\t </li>\n\t\t\t\t\t<li>\t_shibsession* en _saml*: cookies die nodig zijn voor de centrale login van KU Leuven\n\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t-->\n\t\t\t\t<h3>CHANGING BROWSER SETTINGS</h3>\n\t\t\t\t<p>\n\t\t\t\t\t\tYou can enable or delete cookies on your computer through your browser settings. \n\t\t\t\t\t\tThe way in which this works varies from browser to browser. Consult your browser\u2019s help function if necessary. You must always make this adjustment per browser and per computer!\n\t\t\t\t</p>\n\t\t\t\n\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="http://windows.microsoft.com/en-US/internet-explorer/delete-manage-cookies#ie=ie-10-win-7" target="_blank">Cookie settings in Internet Explorer</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://support.google.com/chrome/bin/answer.py?hl=en&amp;answer=95647" target="_blank">Cookie settings in Chrome</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies"\n\t\t\t\t\t\t\ttarget="_blank">Cookie settings in Firefox</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="https://support.apple.com/kb/PH19214?locale=nl_BE" target="_blank">Cookie settings in Safari</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>\n\t\t\t\t\t\tNot accepting, disabling or deleting cookies may result in certain functionalities of the Limo website being no longer accessible or operating normally. \n\t\t\t\t\t\tThis may make your website experience unsatisfactory.\n\t\t\t\t</p>\n\t\t\t\t<h3>SOCIAL MEDIA AND THE CORRESPONDING PLUG-INS</h3>\n\t\t\t\t<p>\n\t\t\t\t\t\tMany social media (such as, Facebook, Linkedin, Twitter, Google+, Tumblr, etc.) \n\t\t\t\t\t\treceive a lot of information on your browsing habits through social plug-ins on their websites (for example by way of the Like or Share buttons).\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tThese buttons may also be found on the web pages of the Limo results list.\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t\tIf you want to protect yourself from these, then you are advised (by, among other agencies, the Belgian Commission for the Protection of Privacy) to take one of the steps below.\n\t\t\t\t</p>\n\t\n\t\t\t\t<ol>\n\t\t\t\t\t<li>Install a browser that blocks add-on tracking. Examples of such browser add-ons are:\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Privacy Badger (\n\t\t\t\t\t\t\t\t<a href="http://www.eff.org/privacybadger" target="_blank">http://www.eff.org/privacybadger</a>)</li>\n\t\t\t\t\t\t\t<li>Ghostery (\n\t\t\t\t\t\t\t\t<a href="https://www.ghostery.com/" target="_blank">https://www.ghostery.com</a>)</li>\n\t\t\t\t\t\t\t<li>Disconnect (\n\t\t\t\t\t\t\t\t<a href="https://disconnect.me/disconnect" target="_blank">https://disconnect.me/disconnect</a>)</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\n\t\t\t\t\t<li>Make use of your browser\u2019s incognito or private navigation mode. \n\t\t\t\t\t\tRecent versions of the most popular browsers provide such a private navigation mode:\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href="https://support.microsoft.com/en-us/products/windows?os=windows-10">Internet Explorer</a></li>\n\t\t\t\t\t\t\t<li><a href="https://support.mozilla.org/nl/kb/privenavigatie-firefox-gebruiken-zonder-geschiedenis">Firefox</a></li>\n\t\t\t\t\t\t\t<li><a href="https://support.google.com/chrome/answer/95464?hl=nl">Chrome</a></li>\n\t\t\t\t\t\t\t<li><a href="https://support.apple.com/kb/PH19216?locale=nl_NL">Safari</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ol>\n\t\n\t\n\t\t\t\t<p>\n\t\t\t\t\t\tThis function forces your browser to erase all tracks of your browsing activity (cookies, history, etc.) after you have closed the window and therefore protects you from being tracked by third parties (please note: this function does not make you anonymous on the web). \n\t\t\t\t\t\tThere are also special browsers that protect privacy, such as Privacy Browser  \n\t\t\t\t\t\t(<a href="http://www.epicbrowser.com/" target="_blank">www.epicbrowser.com</a>).</p>\n\t\n\t\t\t\t<p>\n\t\t\t\t\t\tSocial media and other websites use information about the browsing activity of its users to provide them with targeted advertising. If you no longer want to be tracked by targeted advertising, \n\t\t\t\t\t\tyou can choose to opt out of targeted advertisements via the opt-out website of the European Interactive Digital Advertising Alliance \n\t\t\t\t\t (<a href="http://www.youronlinechoices.eu/" target="_blank">www.youronlinechoices.eu</a>).\n\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t\tOpting out of targeted advertisements does not mean that information is no longer collected on your browsing activities. If you also want to protect yourself from the collection of this information, \n\t\t\t\t\t\t\tyou are advised to also use the incognito mode of your browser or one of the above-mentioned browser add-ons..</p>\n\t\n\t\t\t\t<h3>WANT MORE INFORMATION?</h3>\n\t\n\t\t\t\t<p>You will find more information on the following websites: \n\t\t\t\t\t<a href="http://www.allaboutcookies.org/" target="_blank">www.allaboutcookies.org</a> and \n\t\t\t\t\t<a href="http://www.youronlinechoices.com/be-nl/" target="_blank">www.youronlinechoices.com/be-nl</a>\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\tLIBIS reserves the right to amend this policy at any time. You will always find the most recent version of the Cookie Statement on this page.\n\t\t\t</p>\n\n\t\t\t\t<md-dialog-actions>\n\t\t\t\t\t<div layout="row" class="demo-dialog-button">\n\t\t\t\t\t\t<md-button class="md-primary" ng-click="closeDialog()">\n\t\t\t\t\t\t\tClose\n\t\t\t\t\t\t</md-button>\n\t\t\t\t\t</div>\n\t\t\t\t</md-dialog-actions>\n\t\t\t\t\n\t\t\t</md-content>\n\t\t</md-dialog-content>\n\t</md-dialog>';
var disclaimerLinkHTML = '<a aria-label="{{title_label}}" title="{{title_label}}" ng-click="showDisclaimerDialog()">\n  <span id="FooterDisclaimer">\n    {{title}}\n  </span>\n</a>\n';

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

var searchTipHTML = '<a aria-label="{{title_label}}" title="{{title_label}}" ng-click="showSearchTips()">\n  <span class ="md-headline" id="ContentSearchTips">\n    {{title}}\n  </span>\n</a>\n';
var tip_enUS_HTML = '<md-dialog aria-label="Search tips">\n    <md-dialog-content id="searchtips">\n\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Search tips</h2>\n                <span flex></span>\n                <md-button class="md-icon-button" ng-click="closeDialog()">\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n                </md-button>\n            </div>\n        </md-toolbar>\n\n        <md-content>\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        For phrases use quotes: "global warming"\n                    </div>\n                </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        For truncated searches use an asterisk: gun* will retrieve gun, guns, gunners, gunnery, gunning, etc.\n                    </div>\n                </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        As a wildcard for one character, use ?:  wom?n will retrieve woman and women.\n                    </div>\n                </md-list-item>\n\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        To exclude a term use NOT (in uppercase): celtic NOT Irish\n                    </div>\n                </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        To group terms use brackets: Shakespeare (tragedy OR sonnet). OR is in uppercase\n                   </div>\n                </md-list-item>\n            </md-list>\n<!--\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="demo-dialog-content">\n                        For users of Internet Explorer:<br/>\n                        Limo should be viewed with version 9 or higher.<br />\n                        If you have an earlier version, it is a good idea to upgrade your browser. <br />\n                    </div>\n                </md-list-item>\n            </md-list>\n-->\n            <md-dialog-actions>\n                <div layout="row" class="demo-dialog-button">\n                    <md-button class="md-primary" ng-click="closeDialog()">\n                        Close\n                    </md-button>\n                </div>\n            </md-dialog-actions>\n        </md-content>\n    </md-dialog-content>\n</md-dialog>\n';
var tip_frFR_HTML = '<md-dialog aria-label="Zoektips">\n    <md-dialog-content id="searchtips">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Trucs & astuces</h2>\n                <span flex></span>\n                <md-button class="md-icon-button" ng-click="closeDialog()">\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n                </md-button>\n            </div>\n        </md-toolbar>\n        <md-content>\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        utilisez des guillemets pour les phrases/expressions exactes: "r\xE9chauffement global"\n                    </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            utilisez un ast\xE9risque pour les recherches tronqu\xE9es: vin* donnera vinage, vinaigre, vinasse, vineux etc.\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            utilisez ? comme caract\xE8re de remplacement: fe?me donnera femme et ferme\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            utilisez NOT (en capitales) pour exclure un mot: celtique NOT irlandais\n                        </div>\n                    </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        utilisez des parenth\xE8ses pour grouper les termes: Shakespeare (trag\xE9die OR sonnet). OR est \xE9crit en capitales\n                    </div>\n                </md-list-item>\n            </md-list>\n            <!--\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="demo-dialog-content">\n                Pour les utilisateurs d\'Internet Explorer:<br/>\nIl est recommand\xE9 d\'utiliser la version 9 ou ult\xE9rieure.<br/>\nSi vous avez une version plus ancienne, il est conseill\xE9 de mettre \xE0 jour votre navigateur.<br/>\n                        </div>\n                    </md-list-item>\n            </md-list>\n-->\n            <md-dialog-actions>\n                <div layout="row" class="demo-dialog-button">\n                    <md-button class="md-primary" ng-click="closeDialog()">\n                        Astuces\n                    </md-button>\n                </div>\n            </md-dialog-actions>\n        </md-content>\n    </md-dialog-content>\n</md-dialog>\n';
var tip_nlBE_HTML = '<md-dialog aria-label="Zoektips">\n    <md-dialog-content id="searchtips">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Zoektips</h2>\n                <span flex></span>\n                <md-button class="md-icon-button" ng-click="closeDialog()">\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n                </md-button>\n            </div>\n        </md-toolbar>\n        <md-content>\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        Gebruik "" om te zoeken op exacte woordcombinatie: "global warming"\n                    </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            Gebruik een * of ? om te zoeken op delen van woorden:\n                            <p style="padding-left:1em;">\n                                gun* vindt gun, guns, gunners, gunnery, gunning, enz.<br />\n                                wom?n vindt woman en women\n                            </p>\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            Gebruik NOT (in hoofdletters) om een zoekterm uit te sluiten: celtic NOT Irish\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            Gebruik haakjes om termen te groeperen: Shakespeare (tragedy OR sonnet). OR is in hoofletters\n                        </div>\n                    </md-list-item>\n            </md-list>\n            <!--\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="demo-dialog-content">\n                        Voor gebruikers van Internet Explorer:<br />\n                        Limo wordt best bekeken via version 9 of hoger.<br />\n                        Gelieve uw browser te upgraden indien u over een lagere versie beschikt.<br />\n                        </div>\n                    </md-list-item>\n            </md-list>\n-->\n            <md-dialog-actions>\n                <div layout="row" class="demo-dialog-button">\n                    <md-button class="md-primary" ng-click="closeDialog()">\n                        Sluiten\n                    </md-button>\n                </div>\n            </md-dialog-actions>\n        </md-content>\n    </md-dialog-content>\n</md-dialog>\n';

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

var altmetricHTML = '<div  id="altmetrics_{{$ctrl.recordid}}">\n<div ng-if="$ctrl.doi" class="altmetric-embed" style="padding-top:0.5em"\n    data-badge-popover="right" data-badge-type="2" data-hide-no-mentions="true" data-link-target="_blank" class="altmetric-embed"\n    data-doi="{{$ctrl.doi}}"\n    aria-label="Social Popularity Statistics (AltMetrics)">\n</div>\n</div>';

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

var sourceIconHTML = '<style>\n  div.sourceid {\n    display: inline-flex;\n    /* margin-left: 1em; */\n     /* margin-top: -2px; */\n    position: relative; \n  }\n\n\n  div.sourceid img.source-icon {\n    display: inline-block;\n    max-height: 18px;\n    width: auto;\n    height: auto;\n    transform: none;\n    min-width: auto;\n    min-height: auto;\n    vertical-align: bottom;\n  }\n\n  div.sourceid span.source-text {\n    font-size: small;\n    margin-left: 0.4em;\n    text-transform: none;\n    letter-spacing: normal;\n  }\n</style>\n\n<div ng-if="$ctrl.sourceid" class="sourceid">\n  <img src="{{$ctrl.icon.iconUrl}}" class="source-icon">\n  <span class="source-text">{{$ctrl.icon.iconText}}</span>\n</div>\n';

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

var RemoveOpenAccessController = function RemoveOpenAccessController($scope) {
  var _this = this;

  _classCallCheck(this, RemoveOpenAccessController);

  var removeOpenAccess = $scope.$watch(function () {
    return _this.parentCtrl.parentCtrl.facetService.results;
  }, function (n, o) {
    if (n != o) {
      if (_this.parentCtrl.parentCtrl.facetService.results.filter(function (f) {
        return f.name == 'tlevel';
      }).length > 0) {
        removeOpenAccess();
        _this.parentCtrl.parentCtrl.facetService.results = _this.parentCtrl.parentCtrl.facetService.results.map(function (a) {
          if (a.name == 'tlevel') {
            a.values = a.values.filter(function (t) {
              return t.value !== 'open_access';
            });
          }
          return a;
        });
      }
    }
  });
};

RemoveOpenAccessController.$inject = ['$scope'];

var removeOpenAccessConfig = exports.removeOpenAccessConfig = {
  bindings: { parentCtrl: '<' },
  controller: RemoveOpenAccessController
};

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchAlsoBodyHTML = '<div ng-if="$ctrl.name === \'search_also\'" class="lbs-search-also">\n  <div ng-hide="$ctrl.parentCtrl.parentCtrl.facetGroup.facetGroupCollapsed">\n    <div class="section-content animate-max-height-variable">\n      <div class="md-chips md-chips-wrap">\n        <div ng-repeat="target in $ctrl.targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">\n          <div class="md-chip-content layout-row" role="button" tabindex="9">\n            <strong dir="auto" title="{{ target.name }}">\n              <a ng-href="{{ target.url + target.mapping($ctrl.search) }}" target="_blank"  title="{{ (target.tooltip | translate )}}">\n                <img ng-src="{{ target.img }}" width="22" height="22" style="vertical-align:middle;padding-right:2px;"> {{ target.name }}\n              </a>\n            </strong>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';

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

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var payMyFinesHTML = '<style>\n  .md-button[id=payFinesNow] {\n    color: white;\n    background-color: tomato;\n  }\n\n  .md-button[id=payFinesNow]:hover {\n    background-color: tomato;\n    filter: brightness(80%);\n    color: white;\n  }\n</style>\n\n<div layout="row" layout-align="center center" ng-show=\'$ctrl.showPayMyFines\'>\n  <a id=\'payFinesNow\' class="md-button md-raised md-secundary" target=\'_blank\' href=\'https://services.libis.be/pay_my_fines\'>Pay fines</a>\n</div>\n';

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

},{}],16:[function(require,module,exports){
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
var AltmetricsBadgeHTML = '\n<!--\n<div ng-if="$ctrl.doi" class="altmetric-embed" data-badge-type="medium-donut" data-badge-details="right" data-doi="{{$ctrl.doi}}"></div>\n-->\n<!-- Brief results altmetrics -->\n<div  id="full_altmetrics_{{$ctrl.recordid}}">\n    <div ng-if="$ctrl.doi" class="altmetric-embed" style="padding-top:0.5em"\n        data-badge-type=\'donut\' \n        data-badge-details=\'right\'\n\n        data-link-target="_blank" \n        data-doi="{{$ctrl.doi}}"\n\n\n          data-condensed=\'true\' \n\n\n        aria-label="Social Popularity Statistics (AltMetrics)">\n    </div>\n</div>\n';

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

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var betaSwitchHTML = '<div id="beta-switch">\n    <span data-ribbon="Beta">\n        <span ng-click="useBeta=false; onChangeUseBeta();"> \n                <span translate="lbs.nui.default.nui.beta_switch"></span>\n        </span>\n    </span>\n</div>\n';

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

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var homeIconHTML = '<div id="home-buttons-holder" ng-class="{\'fixed-to-top\': $ctrl.fixedToTop()}" \n  layout="row" layout-align="center center" class="layout-align-center-center layout-row"\n  ng-switch on="$ctrl.linktype">\n\n  <a ng-click="removeStickyFacets()" class="zero-margin flex-button multi-line-button button-over-dark md-button md-primoExplore-theme md-ink-ripple layout-align-center-center layout-column" \n    id="new-search-button" aria-label="Go to startpage"\n    href="{{ $ctrl.homePageLink }}" ng-switch-when="newSearchButton">\n      <span layout="row" layout-align="start center" class="layout-align-start-center layout-row">\n          <span translate="lbs.nui.default.nui.new_search">New Search</span>\n      </span>\n\n  </a>\n\n  <a ng-click="removeStickyFacets()" class="md-icon-button button-over-dark md-button md-primoExplore-theme" id="home-button"\n    aria-label="Go to startpage" href="{{ $ctrl.homePageLink }}" ng-switch-default>\n    <md-icon class="md-primoExplore-theme">\n      <svg id="prm_home" width="100%" height="100%" viewBox="0 0 24 24" y="0" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet"\n        focusable="false">\n        <path d="M10,20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />\n        <path d="M0 0h24v24H0z" fill="none" />\n      </svg>\n    </md-icon>\n  </a>\n</div>';

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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newSearchButtonHTML = "<a class=\"zero-margin flex-button multi-line-button button-over-dark md-button md-primoExplore-theme md-ink-ripple layout-align-center-center layout-column\"\nhref=\"{{ $ctrl.homePageLink }}\"  layout=\"column\" layout-align=\"center center\" (click)=\"::$ctrl.removeStickyFacets()\" \n    aria-label=\"New Search\" aria-hidden=\"false\" tabindex=\"0\">\n    <span class=\"item-content\" translate=\"lbs.nui.default.nui.new_search\">New Search</span>\n</a>";

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

NewSearchButtonController.$inject = ['$scope', '$element', '$compile', '$http', '$rootScope'];

var newSearchButtonConfig = exports.newSearchButtonConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: NewSearchButtonController,
  template: ''
};

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var viewLogoHTML = '\n <div class="product-logo" id="banner" aria-label="{{ \'nui.aria.logo.link.open\' | translate}}">\n  <a ng-href="{{ $ctrl.homePageLink }}" ng-click=" $ctrl.logoClick() " href="{{ $ctrl.homePageLink }} "> \n    <img class="logo-image" translate-attr="{ alt: \'nui.header.LogoAlt\' }" ng-src="{{  $ctrl.localeLibraryLogo }}" src="{{  $ctrl.localeLibraryLogo }}" />\n  </a>\n</div>\n';

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

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var feedbackHTML = '<!--\n  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\n             class="zero-margin flex-button multi-line-button button-over-dark"\n             layout="column" layout-align="center center" (click)="$ctrl.showFeedbackForm($event)"\n             aria-label="mainmenu.label.feedback">\n\n      <span class="item-content" translate="mainmenu.label.feedback"></span>\n      <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\n        <span class="item-description popover animate-popover"\n              translate="nui.mainmenu.description.feedback"></span>\n      </md-tooltip>\n  </md-button>\n-->\n\n<style>\n  #mainMenu #mainMenuHelp {\n    display: none;\n  }\n\n  #mainMenu #mainMenuFeedback,\n  #mainMenu #mainMenuHelp {\n    max-width: 60px;\n    min-width: 55px;\n  }\n\n  #mainMenu #mainMenuFeedback {\n    margin-left: 3em !important;\n    box-shadow: 1px 0 0 0 rgba(0, 0, 0, .1), -1px 0 0 0 rgba(0, 0, 0, .1);\n  }\n\n  @media (max-width : 959px) {\n    #mainMenu #mainMenuFeedback,\n    #mainMenu #mainMenuHelp {\n      padding-left: 0.2em;\n      padding-right: 0.2em;\n    }\n  }\n\n  @media (max-width : 750px) {\n    #mainMenu #mainMenuFeedback,\n    #mainMenu #mainMenuHelp {\n      display: none;\n    }\n  }\n</style>\n\n<md-button id=\'mainMenuFeedback\' tabindex="0" role="listitem" tabindex="0" ng-href="" class="zero-margin flex-button multi-line-button button-over-dark"\n  layout="column" layout-align="center center" (click)="$ctrl.showFeedbackForm($event)" aria-label="mainmenu.label.feedback">\n  <!--\n        <span class="item-content" translate="mainmenu.label.feedback"></span>\n                -->\n  <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_announcement_24px"></prm-icon>\n\n  <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\n    <span class="item-description popover animate-popover" translate="nui.mainmenu.description.feedback"></span>\n  </md-tooltip>\n</md-button>\n\n\n<md-button id=\'mainMenuHelp\' tabindex="0" role="listitem" tabindex="0" ng-href="https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/050New_Primo_User_Interface/End_User_Help_-_New_UI"\n  class="zero-margin flex-button multi-line-button button-over-dark" layout="column" layout-align="center center" aria-label="mainmenu.label.help"\n  target="_blank">\n  <!--\n        <span class="item-content" translate="mainmenu.label.help"></span>\n                -->\n  <prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="help-circle-outline"></prm-icon>\n\n  <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\n    <span class="item-description popover animate-popover" translate="nui.mainmenu.description.help"></span>\n  </md-tooltip>\n</md-button>';
var feedbackDialogHTML = '<!-- translations in CODE TABLES -> View Labels -->\n<md-dialog id=\'lbsFeedbackForm\' aria-label=\'feedback\'>\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2><span translate=\'mainmenu.label.feedback\'></span></h2>\n            <span flex></span>\n            <md-button class="md-icon-button" ng-click="cancelFeedback()">\n                <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content>\n      <form name=\'feedbackForm\'>\n        <div class="md-dialog-content">\n            <input type="hidden" name=\'subject\' ng-model=\'feedback.subject\'>\n            <md-input-container class="md-block">\n                <label><span translate="lbs.nui.details.email"></span></label>\n                <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'feedback.replyTo\' ng-pattern="/^.+@.+\\..+$/">\n                <div ng-if=\'feedbackForm.replyTo.$error.required\' role="alert">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\n                </div>\n                <div ng-if=\'feedbackForm.replyTo.$error.email\' role="error">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\n                </div>\n            </md-input-container>\n            <md-input-container>\n                <label><span translate="lbs.nui.details.message.description.label"></span></label>\n                <textarea name="message" placeholder="{{ \'lbs.nui.details.message.description\' | translate }}" md-maxlength="5000" required md-no-asterisk rows="5" cols="80" ng-model="feedback.message"></textarea>\n                <div ng-if=\'feedbackForm.message.$error.required\' role="error">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.message.mandatory"></span></div>\n                </div>\n            </md-input-container>\n        </div>\n      </form>\n    </md-dialog-content>\n    <md-dialog-actions layout="row">\n        <md-button class="md-raised" ng-click="cancelFeedback()"><span translate="lbs.nui.survey.cancel"></span></md-button>\n        <md-button class="md-raised md-primary " ng-click=\'sendFeedback()\'><span translate="lbs.nui.survey.submit"></span></md-button>\n    </md-dialog-actions>\n</md-dialog>\n';

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

},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var promoteLoginHTML = "<!--\n<md-card class=\"default-card _md md-primoExplore-theme flex-xs-100 flex-sm-100\" flex-sm=\"100\" flex-xs=\"100\" ng-show='$ctrl.showAutomaticLogin'>\n  <md-card-content layout=\"column\" layout-align=\"space-around center\" class=\"layout-align-space-around-center layout-column\">\n    <prm-primo-login label-type=\"text\" layout=\"column\" class=\"layout-column\">\n    -->\n      <!--\n      <div>\n        <span translate=\"lbs.nui.mypref.automatic_login.title\">Always Sign In</span>\n      </div>\n    -->\n      <md-checkbox tabindex=\"-1\" disabled=\"disabled\" \n      class=\"has-small-text zero-margin ng-pristine ng-untouched ng-valid md-primoExplore-theme ng-not-empty md-checked\"\n       role=\"checkbox\" aria-checked=\"true\" aria-disabled=\"true\" aria-invalid=\"false\" \n       type=\"checkbox\" ng-model=\"$ctrl.alwaysSigninCheckBox\" ng-change=\"alwaysSigninChecked()\"\n       ng-disabled=\"$ctrl.formMode == 'View'\">\n       <div class=\"layout-column\" layout=\"column\">\n          <span class=\"item-content\" translate=\"lbs.nui.mypref.automatic_login.alwaysSigninOption\"></span>\n       </div>\n      </md-checkbox>\n<!--\n    </prm-primo-login>\n    <md-divider class=\"card-divider layout-margin md-primoExplore-theme\" layout-margin=\"\"></md-divider>\n  </md-card-content>\n</md-card>\n-->\n\n";

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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var illRequestFormHTML = '<style>\n  /*\n  .md-button[id=illRequest] {\n    color: white;\n    background-color: tomato;\n  }\n\n  .md-button[id=illRequest]:hover {\n    background-color: tomato;\n    filter: brightness(80%);\n    color: white;\n  }\n  */\n</style>\n\n<a id=\'illRequest\' target=\'_blank\'  ng-click="$ctrl.toIllRequestUrl()" ng-show=\'$ctrl.showLinkToIllRequest\'><span translate="lbs.nui.default.nui.order_in_another_library"></span></a>\n\n\n';

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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pnxXmlHTML = '<style>\n  .pnx-xml {\n    font-size:0.5em;\n    display:none;\n    justify-content:space-around;    \n  }\n</style>\n\n<div class=\'pnx-xml\'>\n  <a target="_blank" ng-href="/primo_library/libweb/jqp/record/{{ $ctrl.recordid }}.xml?needSession=0">XML</a> |\n  <a target="_blank" ng-href="/primo_library/libweb/jqp/record/{{ $ctrl.recordid }}.pnx?needSession=0">PNX</a>\n</div>\n';

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

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reportAProblemHTML = '  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\n             class="zero-margin button-link md-button md-primoExplore-theme md-ink-ripple"\n             layout="column" layout-align="center center" (click)="$ctrl.showReportAProblemForm($event)"\n             aria-label="lbs.nui.details.report_a_problem">\n\n      <span class="item-content" translate="lbs.nui.details.report_a_problem"></span>\n      <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\n        <span class="item-description popover animate-popover"\n              translate="lbs.nui.details.description.report_a_problem"></span>\n      </md-tooltip>\n  </md-button>\n';
var reportAProblemDialogHTML = '<!-- translations in CODE TABLES -> View Labels -->\n<md-dialog id=\'lbsReportAProblemForm\' aria-label=\'Report a problem\'>\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2><span translate="lbs.nui.details.report_a_problem"></span></h2>\n            <span flex></span>\n            <md-button class="md-icon-button" ng-click="cancelReport()">\n                <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content>\n      <form name=\'reportAProblemForm\'>\n        <div class="md-dialog-content">\n            <input type="hidden" name=\'subject\' ng-model=\'report.subject\'>\n            <md-input-container class="md-block">\n                <label><span translate="lbs.nui.details.email"></span></label>\n                <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'report.replyTo\' ng-pattern="/^.+@.+\\..+$/">\n                <div ng-if=\'reportAProblemForm.replyTo.$error.required\' role="alert">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\n                </div>\n                <div ng-if=\'reportAProblemForm.replyTo.$error.email\' role="error">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\n                </div>\n            </md-input-container>\n            <md-input-container>\n                <label><span translate="lbs.nui.details.message.description.label"></span></label>\n                <textarea name="message" placeholder="{{ \'lbs.nui.details.message.description\' | translate }}" md-maxlength="5000" required md-no-asterisk rows="5" cols="80" ng-model="report.message"></textarea>\n                <div ng-if=\'reportAProblemForm.message.$error.required\' role="error">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.message.mandatory"></span></div>\n                </div>\n            </md-input-container>\n        </div>\n      </form>\n    </md-dialog-content>\n    <md-dialog-actions layout="row">\n        <md-button class="md-raised" ng-click="cancelReport()">Cancel</md-button>\n        <md-button class="md-raised md-primary " ng-click=\'sendReport()\'>Submit</md-button>\n    </md-dialog-actions>\n</md-dialog>\n';

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

var feedbackAnnouncementHTML = '<span layout=\'center\'>\n  <span>{{message}}</span>  \n</span>\n';
var feedbackAnnouncementDialogHTML = '<md-dialog id=\'lbsFeedbackForm\' aria-label=\'feedback\'>\n  <md-toolbar>\n    <div class="md-toolbar-tools">\n      <h2>\n        <span translate="lbs.nui.survey.title"></span>\n      </h2>\n      <span flex></span>\n      <md-button class="md-icon-button" ng-click="cancelFeedback()">\n        <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\n      </md-button>\n    </div>\n  </md-toolbar>\n  <md-dialog-content>\n    <form name=\'feedbackAnnouncementForm\' style="padding:20px;background-color:white;">\n      <input type="hidden" name=\'subject\' ng-model=\'feedback.subject\'>\n      <p><span translate="lbs.nui.survey.email"></span></p>\n      <md-input-container class="md-block">\n        <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'feedback.replyTo\' ng-pattern="/^.+@.+\\..+$/">\n        <div ng-if=\'feedbackAnnouncementForm.replyTo.$error.required\' role="alert">\n          <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\n        </div>\n        <div ng-if=\'feedbackAnnouncementForm.replyTo.$error.email\' role="error">\n          <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\n        </div>\n      </md-input-container>\n\n      <br /><br />\n\n      <p><span translate="lbs.nui.survey.description"></span></p>\n      <div>\n        <ol>\n          <li>\n            <p><span translate="lbs.nui.survey.q1"></span></p>\n            <md-radio-group ng-model="feedback.answers[0]" class="md-block">\n              <md-radio-button value="1"><span translate="lbs.nui.survey.q1.a1"></span></md-radio-button>\n              <md-radio-button value="2"><span translate="lbs.nui.survey.q1.a2"></span></md-radio-button>\n              <md-radio-button value="3"><span translate="lbs.nui.survey.q1.a3"></span></md-radio-button>\n              <md-radio-button value="4"><span translate="lbs.nui.survey.q1.a4"></span></md-radio-button>\n            </md-radio-group>\n          </li>\n          <li>\n            <p><span translate="lbs.nui.survey.q2"></span></p>\n            <md-radio-group ng-model=\'feedback.answers[1]\' class="md-block">\n              <md-radio-button value="1"><span translate="lbs.nui.survey.q2.a1"></span></md-radio-button>\n              <md-radio-button value="2"><span translate="lbs.nui.survey.q2.a2"></span></md-radio-button>\n            </md-radio-group>\n          </li>\n          <li>\n            <p><span translate="lbs.nui.survey.q3"></span></p>\n            <md-input-container class="md-block" class="md-block">\n              <textarea ng-model="feedback.answers[2]" md-maxlength="5000" rows="5" style="border: 1px dashed gray;padding: 5px;"></textarea>\n            </md-input-container>\n          </li>\n        </ol>\n      </div>\n    </form>\n\n  </md-dialog-content>\n  <md-dialog-actions layout="row">\n    <md-button class="md-raised" ng-click="cancelFeedback()"><span translate="lbs.nui.survey.cancel"></span></md-button>\n    <md-button class="md-raised md-primary" ng-click=\'sendFeedback()\'><span translate="lbs.nui.survey.submit"></span></md-button>\n  </md-dialog-actions>\n</md-dialog>\n';

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

var feedbackServiceHTML = '<!-- translations in CODE TABLES -> View Labels -->\n<md-dialog id=\'lbsFeedbackForm\' aria-label=\'feedback\'>\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2><span translate=\'mainmenu.label.feedback\'></span></h2>\n            <span flex></span>\n            <md-button class="md-icon-button" ng-click="cancelFeedback()">\n                <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content>\n      <form name=\'feedbackForm\'>\n        <div class="md-dialog-content">\n            <input type="hidden" name=\'subject\' ng-model=\'feedback.subject\'>\n            <md-input-container class="md-block">\n                <label><span translate="lbs.nui.details.email"></span></label>\n                <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'feedback.replyTo\' ng-pattern="/^.+@.+\\..+$/">\n                <div ng-if=\'feedbackForm.replyTo.$error.required\' role="alert">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\n                </div>\n                <div ng-if=\'feedbackForm.replyTo.$error.email\' role="error">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\n                </div>\n            </md-input-container>\n            <md-input-container>\n                <label><span translate="lbs.nui.details.message.description.label"></span></label>\n                <textarea name="message" placeholder="{{ \'lbs.nui.details.message.description\' | translate }}" md-maxlength="5000" required md-no-asterisk rows="5" cols="80" ng-model="feedback.message"></textarea>\n                <div ng-if=\'feedbackForm.message.$error.required\' role="error">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.message.mandatory"></span></div>\n                </div>\n            </md-input-container>\n        </div>\n      </form>\n    </md-dialog-content>\n    <md-dialog-actions layout="row">\n        <md-button class="md-raised" ng-click="cancelFeedback()">Cancel</md-button>\n        <md-button class="md-raised md-primary " ng-click=\'sendFeedback()\'>Submit</md-button>\n    </md-dialog-actions>\n</md-dialog>\n';

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

var messageServiceHTML = '<div layout="row" class="bar alert-bar lbs-message-service" layout-align="center center">\n  <span class="bar-text" ng-bind-html="ctrl.message" style="display:flex"></span>\n  <md-button ng-show="ctrl.onAction" (click)="ctrl.onAction()" class="dismiss-alert-button zero-margin" ng-class="md-icon-button">\n    <span hide-xs>{{ctrl.actionLabel}}</span>\n  </md-button>\n  <md-divider></md-divider>\n  <md-button aria-label="{{::(\'nui.message.dismiss\' | translate)}}" (click)="ctrl.onClose()" class="dismiss-alert-button zero-margin" ng-class="md-icon-button">\n    <span translate="nui.message.dismiss" hide-xs></span>\n  </md-button>\n</div>\n';

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

},{"./primo/explore":38,"./primo/explore/helper":40,"./primo/facets":41,"./primo/records":42,"./primo/user":43,"./primo/view":44}],38:[function(require,module,exports){
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

},{"./explore/components":39,"./explore/helper":40}],39:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":45,"./helper":40}],40:[function(require,module,exports){
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

},{}],41:[function(require,module,exports){
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

},{"./explore/components":39,"./explore/helper":40}],42:[function(require,module,exports){
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

},{"./explore/components":39,"./explore/helper":40}],43:[function(require,module,exports){
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

},{"./explore/helper":40}],44:[function(require,module,exports){
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

},{"./explore/helper":40}],45:[function(require,module,exports){
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

},{}],46:[function(require,module,exports){
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

var changeLangWithoutUserAreaHTML = '<style>\n\nprm-user-area {\n    background-color: transparent;\n    display: flex;\n}\n\nprm-change-lang{\n    display: flex;\n    align-items: center;\n}\n\n</style>\n\n<span id="loggedInIndicator" role="alert" class="accessible-only hidden" ng-style="{\'display\': $ctrl.isBlocked}">{{$ctrl.getRoleAlertMessage()}}</span>\n<md-button tabindex="-1" class="user-menu-button accessible-only" aria-label="{{($ctrl.userName().length==0 ?  \'nui.clisckSignIn.tooltip\'  : \'nui.clisckSignOut.tooltip\') | translate}}"\n    ng-click="$event.stopPropagation();$ctrl.enableMobileMenu()" hide-xs>\n</md-button>\n<md-button style="display:none" class="user-menu-button accessible-only" aria-label="{{($ctrl.userName().length==0 ?  \'nui.clisckSignIn.tooltip\'  : \'nui.clisckSignOut.tooltip\') | translate}}"\n    (click)="$ctrl.changUserStatus()" hide-xs>\n</md-button>\n\n<prm-change-lang aria-label="{{\'eshelf.signin.title\' | translate}}" \nng-if="$ctrl.displayLanguage && $ctrl.userName().length == 0 && !$ctrl.detectMobile()"\nlabel-type="icon"></prm-change-lang>';
var prmLoanBugFixHTML = '<div class="md-list-item-text md-list-item-with-checkbox" layout="row" layout-wrap flex aria-live="assertive">\n    <md-checkbox ng-model="$ctrl.selectedIds[$ctrl.item.loanid]" aria-label="Checkbox {{$index}}" ng-change="$ctrl.toggleSelected($ctrl.item.loanid)"\n        ng-if="$ctrl.item[$ctrl.selector]"></md-checkbox>\n    <span class="item-index">{{$ctrl.index}}</span>\n    <div flex="40" flex-xs="100">\n        <div layout="row" class="title-row" ng-class="{\'is-hovered\': isHovered && $ctrl.item[$ctrl.selector]}" ng-mouseenter="isHovered = true"\n            ng-mouseleave="isHovered = false">\n            <h3 ng-if="::$ctrl.item.title" title="{{::$ctrl.item.title}}">\n                    {{::$ctrl.item.title}} \n                <span ng-if="!$ctrl.item[$ctrl.selector]">{{::$ctrl.item.title}}</span>\n            </h3>\n        </div>\n        <h4 ng-class="{\'loans-brief-display\':!$ctrl.isExpanded}">\n            <span translate="nui.loan.brief.1"></span> {{::($ctrl.item.getBriefDisplayLine(1))}}</h4>\n    </div>\n    <div flex="40" flex-xs="100" class="weak-text">\n        <div ng-if="::$ctrl.item.isActiveLoan()">\n            <p class="normal-text" ng-style="$ctrl.item.isDueAlert() && {\'color\':\'tomato\'}">\n                <prm-icon ng-if="::$ctrl.item.isDueAlert()" class="alert-red" icon-type="{{::$ctrl.accountIcons.timerIcon.type}}"\n                    svg-icon-set="{{::$ctrl.accountIcons.timerIcon.iconSet}}" icon-definition="{{::$ctrl.accountIcons.timerIcon.icon}}"></prm-icon>\n                <span translate="{{$ctrl.item.getCodeAlert()}}"></span>: {{($ctrl.item.getDateForBriefDisplay())}}.\n                <span ng-if="::($ctrl.item.isFine())">\n                    <span translate="nui.loan.fine"></span>: {{::$ctrl.item.fine}}</span>\n            </p>\n        </div>\n        <div ng-if="::(!$ctrl.item.isActiveLoan())">\n            <span translate="loans.return_date"></span> {{::($ctrl.item.getDateForBriefDisplay())}}</div>\n        <p class="normal-text" ng-class="{\'loans-brief-display\':!$ctrl.isExpanded}">\n            <span translate="nui.loan.brief.2"></span>{{::($ctrl.item.getBriefDisplayLine(2))}}</p>\n        <div ng-if="$ctrl.isExpanded">\n            <p ng-repeat="line in ::$ctrl.item.fullDisplayValues" class="normal-text">\n                <span translate="loans.{{::line.key}}"></span> {{::line.value}}</p>\n        </div>\n    </div>\n    <div layout-align="end center" layout="row" flex="20" flex-xs="100" ng-class="{\'not-clickable\': $ctrl.renewAllInProgress}"\n        class="list-item-actions">\n        <div ng-if="$ctrl.isRenewable && !$ctrl.isRenewed && !$ctrl.renewInProgress">\n            <md-button class="button-with-icon zero-margin button-link" (click)="$ctrl.renewLoan()" aria-label="{{\'nui.loans.renew\' | translate}}">\n                <prm-icon class="h-flipped" icon-type="{{::$ctrl.accountIcons.renewLoanIcon.type}}" svg-icon-set="{{::$ctrl.accountIcons.renewLoanIcon.iconSet}}"\n                    icon-definition="{{::$ctrl.accountIcons.renewLoanIcon.icon}}"></prm-icon>\n                <span translate="nui.loans.renew"></span>\n            </md-button>\n        </div>\n        <prm-spinner class="inline-loader half-transparent no-text" layout="row" layout-align="center center" ng-if="$ctrl.renewInProgress"></prm-spinner>\n        <div class="item-respond" ng-if="$ctrl.isRenewed">\n            <span ng-style="$ctrl.renewResponse.renewed === \'N\' && {\'color\':\'tomato\'} || $ctrl.renewResponse.renewed === \'Y\' && {\'color\':\'green\'}">\n                <span translate="{{$ctrl.renewResponse.response || \'loans.renewed.\' + $ctrl.renewResponse.renewed}}"></span>\n            </span>\n        </div>\n    </div>\n</div>\n<div class="align-self-stretch" flex-xs="100">\n    <md-button class="item-expand-button" aria-label="{{\'nui.aria.account.requests.expandcollapse\' | translate:\'{title: $ctrl.item.title}\'}}"\n        (click)="$ctrl.toggleDisplayMode()">\n        <prm-icon ng-class="{\'rotate-180\':$ctrl.isExpanded}" icon-type="{{::$ctrl.accountIcons.expandIcon.type}}" svg-icon-set="{{::$ctrl.accountIcons.expandIcon.iconSet}}"\n            icon-definition="{{::$ctrl.accountIcons.expandIcon.icon}}"></prm-icon>\n    </md-button>\n    <div ng-init="messageAdded = \'open\' ;\\r\\n                      messageRemoved = \'close\' " class="accessible-only"\n        aria-label="{{$ctrl.isExpanded ? messageAdded : messageRemoved}}" aria-live="assertive">{{$ctrl.isExpanded ? messageAdded : messageRemoved}}</div>\n</div>\n<prm-loan-after parent-ctrl="$ctrl"></prm-loan-after>';

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

},{"./utils":47}],47:[function(require,module,exports){
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

},{}],48:[function(require,module,exports){
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

var app = angular.module('centralCustom', ['ngMaterial']).constant('feedbackServiceURL', 'https://services.libis.be/feedback').config(function ($sceDelegateProvider) {
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

},{"./components":1,"./factories/altmetricsService":33,"./factories/feedService":34,"./factories/feedbackService":35,"./factories/messageService":36,"./primo-explore-dom/js/primo":37,"./primo-explore-dom/js/primo/explore/helper":40,"./templates":46}]},{},[48])


//# sourceMappingURL=custom.js.map
