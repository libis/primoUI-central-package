(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

var _altmetric = require('./components/prmBriefResultAfter/altmetric');

var _altmetricsBadge = require('./components/prmFullViewAfter/altmetricsBadge');

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

var _removeOpenAccess = require('./components/prmFacetAfter/removeOpenAccess');

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
      return [{ name: 'libis-experiment', config: _experiment.experimentConfig, enabled: false, appendTo: 'prm-messages-and-blocks-overview-after', enableInView: '.*' }, { name: 'home-icon', config: _homeIcon.homeIconConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'beta-switch', config: _betaSwitch.betaSwitchConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)' }, { name: 'source-icon', config: _sourceIcon.sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '.*' }, { name: 'altmetric', config: _altmetric.altmetricConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '.*' }, { name: 'altmetrics-badge', config: _altmetricsBadge.altmetricsBadgeConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: 'Lirias' }, { name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after', enableInView: '.*' }, { name: 'pay-my-fines', config: _payMyFines.payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after', enableInView: '.*' }, { name: 'feedback', config: _feedback.feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)' }, { name: 'report-a-problem', config: _reportAProblem.reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '.*' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'prm-disclaimer', config: _disclaimer.disclaimerConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'static-footer', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-explore-main-after', enableInView: '.*' }, { name: 'static-footer-account', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-account-after', enableInView: '.*' }, { name: 'remove-alerts', config: _removeAlerts.removeAlertsConfig, enabled: true, appendTo: 'prm-add-query-to-saved-searches-after', enableInView: '.*' }, { name: 'prm-dblink', config: _databaseLink.databaseLinkConfig, enabled: false, appendTo: null, enableInView: '.*' },

      /* lbs-components used in html-templates of the package */
      { name: 'promote-login-static-footer', config: _PromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView: '^KULeuven' }, { name: 'ill-request-form-overview', config: _illRequestForm.illRequestFormConfig, enabled: false, appendTo: 'prm-requests-overview-after', enableInView: '.*' }, { name: 'ill-request-form', config: _illRequestForm.illRequestFormConfig, enabled: true, appendTo: 'prm-requests-after', enableInView: '^KULeuven|^VIVES' }, { name: 'announcement-feedback', config: _feedbackAnnouncement.feedbackAnnouncementConfig, enabled: false, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'override-getlink-recommendation', config: _recommendationItem.recommendationItemConfig, enabled: true, appendTo: 'prm-recomendation-item-after', enableInView: '.*' }, { name: 'announcement', config: _announcements.announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'pay-my-fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven' }, { name: 'remove-open-access', config: _removeOpenAccess.removeOpenAccessConfig, enabled: true, appendTo: 'prm-facet-after', enableInView: '.*' }].filter(function (component) {
        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/databaseLink":2,"./components/general/disclaimer":4,"./components/general/experiment":5,"./components/general/removeAlerts":6,"./components/general/searchTip":7,"./components/general/staticFooter":8,"./components/prmBriefResultAfter/altmetric":9,"./components/prmBriefResultAfter/sourceIcon":10,"./components/prmFacetAfter/removeOpenAccess":11,"./components/prmFinesOverviewAfter/payMyFines":12,"./components/prmFullViewAfter/altmetricsBadge":13,"./components/prmLogoAfter/betaSwitch":14,"./components/prmLogoAfter/homeIcon":15,"./components/prmMainMenuAfter/feedback":16,"./components/prmPromoteLogin/PromoteLogin":17,"./components/prmRecommendationItemAfter/recommendationItem":18,"./components/prmRequestsAfter/illRequestForm":19,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":20,"./components/prmServiceHeaderAfter/reportAProblem":21,"./components/prmTopBarBefore/announcements":22,"./components/prmTopBarBefore/feedbackAnnouncement":23,"./components/prmTopBarBefore/finesMessage":25,"./utils":30}],2:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var feedbackHTML = '\n  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\n             class="zero-margin flex-button multi-line-button button-over-dark"\n             layout="column" layout-align="center center" (click)="$ctrl.showFeedbackForm($event)"\n             aria-label="mainmenu.label.feedback">\n\n      <span class="item-content" translate="mainmenu.label.feedback"></span>\n      <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\n        <span class="item-description popover animate-popover"\n              translate="nui.mainmenu.description.feedback"></span>\n      </md-tooltip>\n  </md-button>\n';
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{"./feedbackAnnouncementDialog":24}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
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

},{"../components/general/dialog":3}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{"./primo/explore":32,"./primo/explore/helper":34,"./primo/facets":35,"./primo/records":36,"./primo/user":37,"./primo/view":38}],32:[function(require,module,exports){
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

},{"./explore/components":33,"./explore/helper":34}],33:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":39,"./helper":34}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

},{"./explore/components":33,"./explore/helper":34}],36:[function(require,module,exports){
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

},{"./explore/components":33,"./explore/helper":34}],37:[function(require,module,exports){
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

},{"./explore/helper":34}],38:[function(require,module,exports){
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

},{"./explore/helper":34}],39:[function(require,module,exports){
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

},{}],40:[function(require,module,exports){
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

var _altmetricsService = require('./factories/altmetricsService');

var _altmetricsService2 = _interopRequireDefault(_altmetricsService);

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

//Create the centralCustom module;
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
}).factory('FeedService', _feedService.feedService).service('AltmetricsService', _altmetricsService2.default).service('MessageService', _messageService2.default).service('FeedbackService', _feedbackService2.default).factory('apiCallInterceptor', [function () {
  var apiCallInterceptor = {
    response: function response(_response) {
      //"Assessing Gospel Quotations in Justin Martyr"
      var fixDisplayData = function fixDisplayData(pnxData) {
        if (pnxData) {
          try {
            if (pnxData.display && pnxData.display.creator) {
              pnxData.display.creator = pnxData.display.creator.map(function (c) {
                var relator = c.match(/\(.*?\)/i);
                var data = c.split(/\(.*?\)/i).join("");

                if (relator) {
                  c = c + ' $$Q' + data;
                }
                return c;
              });
            }

            if (pnxData.display && pnxData.display.contributor) {
              pnxData.display.contributor = pnxData.display.contributor.map(function (c) {
                var relator = c.match(/\(.*?\)/i);
                var data = c.split(/\(.*?\)/i).join("");

                if (relator) {
                  c = c + ' $$Q' + data;
                }
                return c;
              });
            }
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

},{"./components":1,"./factories/altmetricsService":26,"./factories/feedService":27,"./factories/feedbackService":28,"./factories/messageService":29,"./primo-explore-dom/js/primo":31,"./primo-explore-dom/js/primo/explore/helper":34}]},{},[40])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL2dlbmVyYWwvZGF0YWJhc2VMaW5rLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9kaWFsb2cuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9nZW5lcmFsL2Rpc2NsYWltZXIuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9nZW5lcmFsL2V4cGVyaW1lbnQuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9nZW5lcmFsL3JlbW92ZUFsZXJ0cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL2dlbmVyYWwvc2VhcmNoVGlwLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9zdGF0aWNGb290ZXIuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1CcmllZlJlc3VsdEFmdGVyL2FsdG1ldHJpYy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUJyaWVmUmVzdWx0QWZ0ZXIvc291cmNlSWNvbi5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUZhY2V0QWZ0ZXIvcmVtb3ZlT3BlbkFjY2Vzcy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUZpbmVzT3ZlcnZpZXdBZnRlci9wYXlNeUZpbmVzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtRnVsbFZpZXdBZnRlci9hbHRtZXRyaWNzQmFkZ2UuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvYmV0YVN3aXRjaC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUxvZ29BZnRlci9ob21lSWNvbi5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybU1haW5NZW51QWZ0ZXIvZmVlZGJhY2suanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1Qcm9tb3RlTG9naW4vUHJvbW90ZUxvZ2luLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtUmVjb21tZW5kYXRpb25JdGVtQWZ0ZXIvcmVjb21tZW5kYXRpb25JdGVtLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtUmVxdWVzdHNBZnRlci9pbGxSZXF1ZXN0Rm9ybS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyL3BueFhtbC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVNlcnZpY2VIZWFkZXJBZnRlci9yZXBvcnRBUHJvYmxlbS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9hbm5vdW5jZW1lbnRzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2ZlZWRiYWNrQW5ub3VuY2VtZW50LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2ZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2ZpbmVzTWVzc2FnZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL0NFTlRSQUxfUEFDS0FHRS9qcy9mYWN0b3JpZXMvYWx0bWV0cmljc1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9DRU5UUkFMX1BBQ0tBR0UvanMvZmFjdG9yaWVzL2ZlZWRTZXJ2aWNlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vQ0VOVFJBTF9QQUNLQUdFL2pzL2ZhY3Rvcmllcy9mZWVkYmFja1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9DRU5UUkFMX1BBQ0tBR0UvanMvZmFjdG9yaWVzL21lc3NhZ2VTZXJ2aWNlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vQ0VOVFJBTF9QQUNLQUdFL2pzL3V0aWxzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS9jb21wb25lbnRzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS9oZWxwZXIuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9mYWNldHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9yZWNvcmRzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20ua3VsZXV2ZW4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vdXNlci5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tLmt1bGV1dmVuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL3ZpZXcuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS5rdWxldXZlbi9wcmltby1leHBsb3JlLWRvbS9qcy92ZW5kb3IvY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7Ozs7Ozs7Ozs7QUFXQTs7O0FBRkE7O0FBR0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7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ckMsY0FBVSxjQUFjLEdBQWQsQ0FBa0I7QUFBQSxtQkFBUyxFQUFFLElBQVgsK0JBQXlDLEVBQUUsSUFBM0M7QUFBQSxLQUFsQixFQUFzRSxJQUF0RSxDQUEyRSxFQUEzRTtBQUoyQixHQUF2QztBQU1ELENBVEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIi8qXG4gIERlY2xhcmUgeW91ciBjb21wb25lbnRzIGhlcmUuXG5cbiAgUmV3cml0ZSB0aGlzIHdoZW4gaW1wb3J0cyBjYW4gYmUgZG9uZSBkeW5hbWljYWxseVxuICBodHRwOi8vMmFsaXR5LmNvbS8yMDE3LzAxL2ltcG9ydC1vcGVyYXRvci5odG1sXG5cbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcbiAgTWVobWV0IENlbGlrXG4qL1xuaW1wb3J0ICcuL3V0aWxzJ1xuXG4vKiBpbXBvcnQgeW91ciBjb21wb25lbnQgY29uZmlndXJhdGlvbiovXG5pbXBvcnQge2V4cGVyaW1lbnRDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2V4cGVyaW1lbnQnXG5cbmltcG9ydCB7aG9tZUljb25Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvaG9tZUljb24nXG5pbXBvcnQge2JldGFTd2l0Y2hDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvYmV0YVN3aXRjaCdcbmltcG9ydCB7c291cmNlSWNvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUJyaWVmUmVzdWx0QWZ0ZXIvc291cmNlSWNvbidcbmltcG9ydCB7YWx0bWV0cmljQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9hbHRtZXRyaWMnXG5cbmltcG9ydCB7YWx0bWV0cmljc0JhZGdlQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRnVsbFZpZXdBZnRlci9hbHRtZXRyaWNzQmFkZ2UnXG5cbmltcG9ydCB7cG54WG1sQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXIvcG54WG1sJ1xuaW1wb3J0IHtwYXlNeUZpbmVzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmluZXNPdmVydmlld0FmdGVyL3BheU15RmluZXMnXG5pbXBvcnQge2ZlZWRiYWNrQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTWFpbk1lbnVBZnRlci9mZWVkYmFjaydcbmltcG9ydCB7c2VhcmNoVGlwQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9zZWFyY2hUaXAnXG5pbXBvcnQge2Rpc2NsYWltZXJDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL2Rpc2NsYWltZXInXG5pbXBvcnQge3JlcG9ydEFQcm9ibGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VydmljZUhlYWRlckFmdGVyL3JlcG9ydEFQcm9ibGVtJ1xuaW1wb3J0IHtmaW5lc01lc3NhZ2VDb25maWcgYXMgcGF5TXlGaW5lc01lc3NhZ2VDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmluZXNNZXNzYWdlJ1xuaW1wb3J0IHthbm5vdW5jZW1lbnRzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2Fubm91bmNlbWVudHMnXG5pbXBvcnQge3Byb21vdGVMb2dpbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVByb21vdGVMb2dpbi9Qcm9tb3RlTG9naW4nXG5pbXBvcnQge2ZlZWRiYWNrQW5ub3VuY2VtZW50Q29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2ZlZWRiYWNrQW5ub3VuY2VtZW50J1xuaW1wb3J0IHtzdGF0aWNGb290ZXJDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3N0YXRpY0Zvb3RlcidcbmltcG9ydCB7cmVtb3ZlQWxlcnRzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9yZW1vdmVBbGVydHMnXG5pbXBvcnQge2lsbFJlcXVlc3RGb3JtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtUmVxdWVzdHNBZnRlci9pbGxSZXF1ZXN0Rm9ybSdcbmltcG9ydCB7cmVjb21tZW5kYXRpb25JdGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtUmVjb21tZW5kYXRpb25JdGVtQWZ0ZXIvcmVjb21tZW5kYXRpb25JdGVtJ1xuXG5pbXBvcnQge2RhdGFiYXNlTGlua0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvZGF0YWJhc2VMaW5rJ1xuaW1wb3J0IHtyZW1vdmVPcGVuQWNjZXNzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmFjZXRBZnRlci9yZW1vdmVPcGVuQWNjZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlckNvbXBvbmVudHMge1xuXG4gIHN0YXRpYyBnZXQgYWxsKCkge1xuICAgIC8qXG4gICAgICBuYW1lID0gdGhlIHN1YiBlbGVtZW50IGluIHRoZSBhZnRlciBlbGVtZW50XG4gICAgICBjb25maWcgPSB0aGUgaW1wb3J0ZWQgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcbiAgICAgIGFwcGVuZFRvID0gVGhlIGNvbXBvbmVudCBzaG91bGQgYmUgY3JlYXRlZCBpbiB0aGlzIGFmdGVyIGNvbXBvbmVudC5cblxuICAgICAgZXguIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9XG4gICAgICByZXN1bHRzIGluOlxuICAgICAgICA8cHJtLWxvZ28tYWZ0ZXIgcGFyZW50Q3RybD0nJGN0cmwnPlxuICAgICAgICAgIDxob21lLWljb24gcGFyZW50Q3RybD0nJGN0cmwnPjwvaG9tZS1pY29uPlxuICAgICAgICA8L3BybS1sb2dvLWFmdGVyPlxuICAgICovXG4gICAgcmV0dXJuIFtcbiAgICAgIHtuYW1lOiAnbGliaXMtZXhwZXJpbWVudCcsIGNvbmZpZzogZXhwZXJpbWVudENvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLW1lc3NhZ2VzLWFuZC1ibG9ja3Mtb3ZlcnZpZXctYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxuICAgICAge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXig/IUVDQiknfSxcbiAgICAgIHtuYW1lOiAnYmV0YS1zd2l0Y2gnLCBjb25maWc6IGJldGFTd2l0Y2hDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxuICAgICAge25hbWU6ICdzb3VyY2UtaWNvbicsIGNvbmZpZzogc291cmNlSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcbiAgICAgIHtuYW1lOiAnYWx0bWV0cmljJywgY29uZmlnOiBhbHRtZXRyaWNDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWJyaWVmLXJlc3VsdC1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXG5cbiAgICAgIHtuYW1lOiAnYWx0bWV0cmljcy1iYWRnZScsIGNvbmZpZzogYWx0bWV0cmljc0JhZGdlQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1mdWxsLXZpZXctYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdMaXJpYXMnfSxcblxuICAgICAge25hbWU6ICdwbngteG1sJywgY29uZmlnOiBwbnhYbWxDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWJyaWVmLXJlc3VsdC1jb250YWluZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxuICAgICAge25hbWU6ICdwYXktbXktZmluZXMnLCBjb25maWc6IHBheU15RmluZXNDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWZpbmVzLW92ZXJ2aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcbiAgICAgIHtuYW1lOiAnZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1tYWluLW1lbnUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICdeKD8hRUNCKSd9LFxuICAgICAge25hbWU6ICdyZXBvcnQtYS1wcm9ibGVtJywgY29uZmlnOiByZXBvcnRBUHJvYmxlbUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VydmljZS1oZWFkZXItYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxuICAgICAge25hbWU6ICdwcm0tc2VhcmNodGlwcycsIGNvbmZpZzogc2VhcmNoVGlwQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnLionfSxcbiAgICAgIHtuYW1lOiAncHJtLWRpc2NsYWltZXInLCBjb25maWc6IGRpc2NsYWltZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsLCBlbmFibGVJblZpZXc6ICcuKid9LFxuICAgICAge25hbWU6ICdzdGF0aWMtZm9vdGVyJywgY29uZmlnOiBzdGF0aWNGb290ZXJDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWV4cGxvcmUtbWFpbi1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXG4gICAgICB7bmFtZTogJ3N0YXRpYy1mb290ZXItYWNjb3VudCcsIGNvbmZpZzogc3RhdGljRm9vdGVyQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1hY2NvdW50LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcbiAgICAgIHtuYW1lOiAncmVtb3ZlLWFsZXJ0cycsIGNvbmZpZzogcmVtb3ZlQWxlcnRzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1hZGQtcXVlcnktdG8tc2F2ZWQtc2VhcmNoZXMtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxuICAgICAge25hbWU6ICdwcm0tZGJsaW5rJywgY29uZmlnOiBkYXRhYmFzZUxpbmtDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogbnVsbCwgZW5hYmxlSW5WaWV3OiAnLionfSxcblxuICAgICAgLyogbGJzLWNvbXBvbmVudHMgdXNlZCBpbiBodG1sLXRlbXBsYXRlcyBvZiB0aGUgcGFja2FnZSAqL1xuICAgICAge25hbWU6ICdwcm9tb3RlLWxvZ2luLXN0YXRpYy1mb290ZXInLCBjb25maWc6IHByb21vdGVMb2dpbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdsYnMtcHJvbW90ZS1sb2dpbicsIGVuYWJsZUluVmlldzogICdeS1VMZXV2ZW4nfSxcblxuICAgICAge25hbWU6ICdpbGwtcmVxdWVzdC1mb3JtLW92ZXJ2aWV3JywgY29uZmlnOiBpbGxSZXF1ZXN0Rm9ybUNvbmZpZywgZW5hYmxlZDpmYWxzZSwgYXBwZW5kVG86ICdwcm0tcmVxdWVzdHMtb3ZlcnZpZXctYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxuICAgICAge25hbWU6ICdpbGwtcmVxdWVzdC1mb3JtJywgY29uZmlnOiBpbGxSZXF1ZXN0Rm9ybUNvbmZpZywgZW5hYmxlZDp0cnVlLCBhcHBlbmRUbzogJ3BybS1yZXF1ZXN0cy1hZnRlcicsIGVuYWJsZUluVmlldzogJ15LVUxldXZlbnxeVklWRVMnfSxcblxuICAgICAge25hbWU6ICdhbm5vdW5jZW1lbnQtZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQW5ub3VuY2VtZW50Q29uZmlnLCBlbmFibGVkOmZhbHNlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJy4qJ30sXG5cbiAgICAgIHtuYW1lOiAnb3ZlcnJpZGUtZ2V0bGluay1yZWNvbW1lbmRhdGlvbicsIGNvbmZpZzogcmVjb21tZW5kYXRpb25JdGVtQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1yZWNvbWVuZGF0aW9uLWl0ZW0tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxuXG4gICAgICB7bmFtZTogJ2Fubm91bmNlbWVudCcsIGNvbmZpZzogYW5ub3VuY2VtZW50c0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICcuKid9LFxuICAgICAge25hbWU6ICdwYXktbXktZmluZXMtbWVzc2FnZScsIGNvbmZpZzogcGF5TXlGaW5lc01lc3NhZ2VDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVuJ30sXG4gICAgICB7bmFtZTogJ3JlbW92ZS1vcGVuLWFjY2VzcycsIGNvbmZpZzogcmVtb3ZlT3BlbkFjY2Vzc0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZmFjZXQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9XG4gICAgXS5maWx0ZXIoIChjb21wb25lbnQpID0+ICggY29tcG9uZW50LmVuYWJsZWQgJiYgbmV3IFJlZ0V4cChjb21wb25lbnQuZW5hYmxlSW5WaWV3KS50ZXN0KHdpbmRvdy5hcHBDb25maWcudmlkKSApICk7XG4gIH1cbn1cbiIsImltcG9ydCBkYXRhYmFzZUxpbmtIVE1MIGZyb20gJy4vZGF0YWJhc2VMaW5rLmh0bWwnXG5cbmNsYXNzIERhdGFiYXNlTGlua0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgJHNjb3BlLnRpdGxlID0gJ2RhdGFiYXNlcyc7XG4gICAgJHNjb3BlLnRpdGxlX2xhYmVsID0gJ3NlYXJjaCBkYXRhYmFzZXMnO1xuICAgICRzY29wZS5kYXRhYmFzZUxpbmsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLWRhdGFiYXNlXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsKVxuXG4gICAgICAgIHZhciBkYXRhYmFzZUZhY2V0ID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6XCJydHlwZVwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6XCJpbmNsdWRlXCIsXG4gICAgICAgICAgICBcInZhbHVlXCI6XCJkYXRhYmFzZXNcIixcbiAgICAgICAgICAgIFwiZGlzcGxheVZhbHVlXCI6XCJkYXRhYmFzZXNcIixcbiAgICAgICAgICAgIFwiZGlzcGxheWVkVHlwZVwiOlwiZXhhY3RcIixcbiAgICAgICAgICAgIFwibGFiZWxcIjpcIkRhdGFiYW5rZW5cIixcbiAgICAgICAgICAgIFwiaXNNdWx0aUZhY2V0XCI6ZmFsc2UsXG4gICAgICAgICAgICBcInRvb2x0aXBcIjpcIlZlcndpamRlciBUeXBlIGJyb24gRGF0YWJhbmtlblwiLFxuICAgICAgICAgICAgXCIkJGhhc2hLZXlcIjpcIm9iamVjdDoyODA4XCJcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyggJHNjb3BlLiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJGN0cmwuc2VhcmNoU3RhdGVTZXJ2aWNlLnNlYXJjaE9iamVjdCApXG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL21laG1ldGMvcHJpbW8tZXhwbG9yZS1jb2xsZWN0aW9uLXZpZXdlci9ibG9iL21hc3Rlci9qcy9uZy1wcmltby5qc1xuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4gICAgICAgICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFNlcnZpY2Uuc2V0U29ydEJ5KCd0aXRsZScpO1xuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLmZhY2V0U2VydmljZS5hZGRTdGlja3lGYWNldChkYXRhYmFzZUZhY2V0KTtcbiAgICAgICAgY29uc29sZS5sb2coICRzY29wZS4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kcGFyZW50LiRjdHJsLnNlYXJjaFN0YXRlU2VydmljZS5zZWFyY2hPYmplY3QgKVxuICAgICAgICAkc2NvcGUuJHBhcmVudC4kcGFyZW50LiRwYXJlbnQuJHBhcmVudC4kY3RybC5zZWFyY2hTZXJ2aWNlLnNlYXJjaCgpO1xuLypcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInN0aWNreUZhY2V0c1wiLFxuICAgICAgICdbe1wibmFtZVwiOlwicnR5cGVcIixcInR5cGVcIjpcImluY2x1ZGVcIixcInZhbHVlXCI6XCJkYXRhYmFzZXNcIixcImRpc3BsYXlWYWx1ZVwiOlwiZGF0YWJhc2VzXCIsXCJkaXNwbGF5ZWRUeXBlXCI6XCJleGFjdFwiLFwibGFiZWxcIjpcIkRhdGFiYW5rZW5cIixcImlzTXVsdGlGYWNldFwiOmZhbHNlLFwidG9vbHRpcFwiOlwiVmVyd2lqZGVyIFR5cGUgYnJvbiBEYXRhYmFua2VuXCIsXCIkJGhhc2hLZXlcIjpcIm9iamVjdDoyODA4XCIsXCJwZXJzaXN0ZW50XCI6dHJ1ZSxcIm9wZXJhdGlvblwiOlwiYWRkXCJ9XScpO1xuICAgICAgICovXG4gICAgIC8vICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAzL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3F1ZXJ5PWFueSxjb250YWlucyxkYXRhYmFzZXMmdGFiPWFsbF9jb250ZW50X3RhYiZzZWFyY2hfc2NvcGU9QUxMX0NPTlRFTlQmXCJcbiAgICB9XG4gIH1cbn1cblxuRGF0YWJhc2VMaW5rQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJ11cblxuZXhwb3J0IGxldCBkYXRhYmFzZUxpbmtDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IERhdGFiYXNlTGlua0NvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBkYXRhYmFzZUxpbmtIVE1MXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2dDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkbWREaWFsb2csICRtZFRvYXN0LCAkaHR0cCwgJHRyYW5zbGF0ZSwgZmVlZGJhY2tTZXJ2aWNlVVJMLCBNZXNzYWdlU2VydmljZSkge1xuICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy5tZERpYWxvZyA9ICRtZERpYWxvZztcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcbiAgICB0aGlzLmh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCA9IGZlZWRiYWNrU2VydmljZVVSTDtcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XG5cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAkc2NvcGUuY2FuY2VsRmVlZGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLm1kRGlhbG9nLmNhbmNlbCgpO1xuICAgIH1cblxuICAgICRzY29wZS5zZW5kRmVlZGJhY2sgPSB0aGlzLnNlbmRGZWVkYmFjaztcbiAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gKGFuc3dlcikgPT4ge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XG4gICAgICAgIHNlbGYudXNlciA9IHVzZXI7XG4gICAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xuXG4gICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBzdWJqZWN0OiAkc2NvcGUuZmVlZGJhY2suc3ViamVjdCxcbiAgICAgICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxuICAgICAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXG4gICAgICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcbiAgICAgICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxuICAgICAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXG4gICAgICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXG4gICAgICAgICAgICB0eXBlOiAnZmVlZGJhY2snLFxuICAgICAgICAgICAgZmVlZGJhY2s6ICRzY29wZS5mZWVkYmFjay5tZXNzYWdlLFxuICAgICAgICAgICAgZW1haWw6ICRzY29wZS5mZWVkYmFjay5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKCRzY29wZS5mZWVkYmFjay5yZXBseVRvLmxlbmd0aCA+IDAgJiYgJHNjb3BlLmZlZWRiYWNrLm1lc3NhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VsZi5tZERpYWxvZy5oaWRlKCk7XG5cbiAgICAgICAgICAgIHNlbGYuaHR0cCh7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICB1cmw6IHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xuICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJztcbiAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJyk7XG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJztcbiAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XG4gICAgICBzZWxmLnVzZXIgPSB1c2VyO1xuICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xuICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xuICAgICAgICAkc2NvcGUuZmVlZGJhY2sgPSB7XG4gICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxuICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgIHN1YmplY3Q6ICdmZWVkYmFjaydcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5EaWFsb2dDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJGh0dHAnLCAnJHRyYW5zbGF0ZScsICdmZWVkYmFja1NlcnZpY2VVUkwnLCAnTWVzc2FnZVNlcnZpY2UnXTtcbiIsImltcG9ydCBkaXNjbGFpbWVyRGlhbG9nSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9kaXNjbGFpbWVyRGlhbG9nLmh0bWwnXG5pbXBvcnQgY29va2llUG9saWN5RGlhbG9nSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X2VuX1VTLmh0bWwnXG5pbXBvcnQgZGlzY2xhaW1lckRpYWxvZ19mckZSX0hUTUwgZnJvbSAnLi4vLi4vLi4vaHRtbC90ZW1wbGF0ZXMvY29va2llX3BvbGljeV9lbl9VUy5odG1sJ1xuaW1wb3J0IGRpc2NsYWltZXJEaWFsb2dfbmxCRV9IVE1MIGZyb20gJy4uLy4uLy4uL2h0bWwvdGVtcGxhdGVzL2Nvb2tpZV9wb2xpY3lfbmxfQkUuaHRtbCdcbmltcG9ydCBkaXNjbGFpbWVyRGlhbG9nX2VuVVNfSFRNTCBmcm9tICcuLi8uLi8uLi9odG1sL3RlbXBsYXRlcy9jb29raWVfcG9saWN5X2VuX1VTLmh0bWwnXG5cbmltcG9ydCBkaXNjbGFpbWVyTGlua0hUTUwgZnJvbSAnZGlzY2xhaW1lci5odG1sJ1xuXG5jbGFzcyBkaXNjbGFpbWVyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcblxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xuICAgICAgICAnbmxfQkUnOiB7XG4gICAgICAgICAgJ3RpdGxlJzogJ0Nvb2tpZWJlbGVpZCcsXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJDb29raWViZWxlaWRcIlxuICAgICAgICB9LFxuICAgICAgICAnZW5fVVMnOiB7XG4gICAgICAgICAgJ3RpdGxlJzogJ0Nvb2tpZSBQb2xpY3knLFxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQ29va2llIFBvbGljeVwiXG4gICAgICAgIH0sXG4gICAgICAgICdmcl9GUic6IHtcbiAgICAgICAgICAndGl0bGUnOiAnQ29va2llIFBvbGljeScsXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJDb29raWUgUG9saWN5XCJcbiAgICAgICAgfSxcbiAgICAgIH1cblxuLyogVG9kbyBSZWZhY3RvcnkgZGlzY2xhaW1lckRpYWxvZyAvIGNvb2tpZVBvbGljeSA/Pz8gKi9cbi8vICAgIGxldCBkaXNjbGFpbWVyRGlhbG9nID0gZGlzY2xhaW1lckRpYWxvZ0hUTUw7IFxuICAgICAgbGV0IGRpc2NsYWltZXJEaWFsb2cgPSBjb29raWVQb2xpY3lEaWFsb2dIVE1MO1xuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcbiAgICAgICAgY2FzZSAnZnJfRlInOlxuICAgICAgICBkaXNjbGFpbWVyRGlhbG9nID0gZGlzY2xhaW1lckRpYWxvZ19mckZSX0hUTUw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25sX0JFJzpcbiAgICAgICAgZGlzY2xhaW1lckRpYWxvZyA9IGRpc2NsYWltZXJEaWFsb2dfbmxCRV9IVE1MO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICBkaXNjbGFpbWVyRGlhbG9nID0gZGlzY2xhaW1lckRpYWxvZ19lblVTX0hUTUw7XG4gICAgICB9XG5cbiAgICAgICRzY29wZS50aXRsZSA9IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ3RpdGxlJ107XG4gICAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZV9sYWJlbCddO1xuXG4gICAgICAkc2NvcGUuc2hvd0Rpc2NsYWltZXJEaWFsb2cgPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAkbWREaWFsb2cuc2hvdyh7XG4gICAgICAgICAgcGFyZW50OiBwYXJlbnRFbCxcbiAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxuICAgICAgICAgIHRlbXBsYXRlOiBkaXNjbGFpbWVyRGlhbG9nLFxuICAgICAgICAgIGxvY2Fsczoge1xuICAgICAgICAgICAgaXRlbXM6ICRzY29wZS5pdGVtc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlclxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gRGlhbG9nQ29udHJvbGxlcigkc2NvcGUsICRtZERpYWxvZywgaXRlbXMpIHtcbiAgICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XG4gICAgICAgICRzY29wZS5jbG9zZURpYWxvZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5kaXNjbGFpbWVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJ11cblxuZXhwb3J0IGxldCBkaXNjbGFpbWVyQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBkaXNjbGFpbWVyQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IGRpc2NsYWltZXJMaW5rSFRNTFxufSIsIi8qIGNvbXBvbmVudCB0byBkbyBhbGwgeW91ciBleHBlcmltZW50YWwgc3R1ZmYgKi9cbi8qIFtlbnxkaXNdYWJsZSBpbiBjb21wb25lbnRzKi9cblxuY2xhc3MgRXhwZXJpbWVudENvbnRyb2xsZXIge1xuIFxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCR0ZW1wbGF0ZUNhY2hlLCAkY29tcGlsZSwkaW5qZWN0b3IsJHJvb3RTY29wZSwkdHJhbnNsYXRlLCAkd2luZG93KSB7XG4gICAgY29uc29sZS5sb2coJ0V4cGVyaW1lbnQ6Jyk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgIHRoaXMuJHRlbXBsYXRlQ2FjaGUgPSAkdGVtcGxhdGVDYWNoZTtcbiAgICB0aGlzLiRjb21waWxlID0gJGNvbXBpbGU7XG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xuICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcbiAgICB0aGlzLmlsbFJlcXVlc3RVcmwgPSAnJzsgXG5cbiAgICBjb25zb2xlLmxvZyhzZWxmKVxuICAgIGNvbnNvbGUubG9nKCdyb290U2NvcGU6JylcbiAgICBjb25zb2xlLmxvZygkcm9vdFNjb3BlKVxuICAgIGNvbnNvbGUubG9nKCd0ZW1wbGF0ZUNhY2hlJylcbiAgICBjb25zb2xlLmxvZygkdGVtcGxhdGVDYWNoZSkgICBcbiAgICB2YXIgdGVtcGxhdGUgPSAkdGVtcGxhdGVDYWNoZS5nZXQoJ2NvbXBvbmVudHMvYWNjb3VudC9vdmVydmlldy9yZXF1ZXN0c092ZXJ2aWV3L3JlcXVlc3RzLW92ZXJ2aWV3Lmh0bWwnKTtcbiAgICAvLyB2YXIgdGVtcGxhdGUgPSB0ZW1wbGF0ZSArIFwiPEgxIGlkPSdvbXRlbGFjaHRlbic+TEFMQUxBPGlsbC1yZXF1ZXN0LWZvcm0tb3ZlcnZpZXc+PC9pbGwtcmVxdWVzdC1mb3JtLW92ZXJ2aWV3PjwvSDE+XCI7XG4gICAgdmFyIHRlbXBsYXRlID0gdGVtcGxhdGUgKyBcIjxIMSBpZD0nb210ZWxhY2h0ZW4nPkxBTEFMQTwvSDE+XCI7XG4gICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL2FjY291bnQvb3ZlcnZpZXcvcmVxdWVzdHNPdmVydmlldy9yZXF1ZXN0cy1vdmVydmlldy5odG1sJywgdGVtcGxhdGUpO1xuICAgIGNvbnNvbGUubG9nKCR0ZW1wbGF0ZUNhY2hlLmdldCgnY29tcG9uZW50cy9hY2NvdW50L292ZXJ2aWV3L3JlcXVlc3RzT3ZlcnZpZXcvcmVxdWVzdHMtb3ZlcnZpZXcuaHRtbCcpKVxufTtcblxuICB0b0lsbFJlcXVlc3RVcmwoKSB7XG4gICAgICB2YXIgaW5zdGl0dXRpb25Db2RlID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbi5pbnN0aXR1dGlvbkNvZGU7XG4gICAgICAvL2NvbnNvbGUubG9nKCdpbnN0aXR1dGlvbkNvZGU6JyArIGluc3RpdHV0aW9uQ29kZSlcbiAgICAgIHRoaXMuaWxsUmVxdWVzdFVybCA9ICdodHRwczovL2xldXZlbi1wcmltby5ob3N0ZWQuZXhsaWJyaXNncm91cC5jb20vcGRzP2Z1bmM9c3NvJnVybD1odHRwOi8vZXUuYWxtYS5leGxpYnJpc2dyb3VwLmNvbS92aWV3L3VyZXNvbHZlci8nKyBpbnN0aXR1dGlvbkNvZGUgKycvb3BlbnVybD9zdmNfZGF0PWdldGl0JnN2Yy5wcm9maWxlPWdldGl0JmRpcmVjdFJlc291cmNlU2hhcmluZ1JlcXVlc3Q9dHJ1ZSZuZXdVST10cnVlJ1xuICAgICAgdGhpcy53aW5kb3cub3Blbih0aGlzLmlsbFJlcXVlc3RVcmwsICdfZnJlZUlsbCcpO1xuICB9O1xuICAgIFxuICAkb25Jbml0KCkgeyAgXG4gICAgXG4gICAgY29uc29sZS5sb2cgKCduZXdFbGVtZW50OicpXG4gIC8vICBjb25zb2xlLmxvZyAoYW5ndWxhci5lbGVtZW50KCAnI29tdGVsYWNodGVuJykubGVuZ3RoKVxuICAgLy8gaWYgKCBhbmd1bGFyLmVsZW1lbnQoICdIMScpLmxlbmd0aCA9PSAwICkge1xuICAgICAgY29uc29sZS5sb2cgKCdcXCd0IElzIG5pIG9tIHRlIGxhY2h0ZW4nKVxuICAgICAgIHZhciBlbGVtZW50TmFtZSA9ICdwcm0tcmVxdWVzdHMtb3ZlcnZpZXcnXG4gICAgICAgLy9sZXQgZWxlbWVudCA9ICRlbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgIGxldCBlbGVtZW50ID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudE5hbWUpKTtcbiAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgbGV0IGVsZW1lbnRTY29wZSA9IGVsZW1lbnQuc2NvcGUoKTtcbiAgICAgICAgIGNvbnNvbGUubG9nIChlbGVtZW50U2NvcGUpXG4gICAgICAgICB0aGlzLiRjb21waWxlKGVsZW1lbnQpKGVsZW1lbnRTY29wZSk7XG4gICAgICAgICAvL2VsZW1lbnRTY29wZS4kYXBwbHkoKVxuICAgICAgIH0gICAgIFxuICAvLyAgIH1cbiAgICB9XG59XG5cbkV4cGVyaW1lbnRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICAnJHRlbXBsYXRlQ2FjaGUnLCAnJGNvbXBpbGUnLCckaW5qZWN0b3InLCckcm9vdFNjb3BlJywnJHRyYW5zbGF0ZScsICckd2luZG93J11cblxuZXhwb3J0IGxldCBleHBlcmltZW50Q29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBFeHBlcmltZW50Q29udHJvbGxlcixcbiAgdGVtcGxhdGU6ICcnXG59XG4iLCJcbmNsYXNzIFJlbW92ZUFsZXJ0c0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICAkdHJhbnNsYXRlLCAkZWxlbWVudCwgJHRlbXBsYXRlQ2FjaGUpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdmFyIGxvY2FsZSA9IFwiZW5fVVNcIlxuICAgICAgICBsb2NhbGUgPSBzY29wZS4kcm9vdC4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XG5cbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC9zYXZlZFF1ZXJpZXMvYWRkQWxlcnRUb2FzdC9hZGQtYWxlcnQtdG9hc3QuaHRtbCcsYFxuICAgICAgICA8bWQtdG9hc3QgbmctY2xhc3M9XCJ7XFwnbW9iaWxlLWRlZmluZVxcJzokY3RybC5kZXRlY3RNb2JpbGUoKSxcXCdsYXlvdXQtY29sdW1uXFwnOiRjdHJsLmRldGVjdE1vYmlsZSgpfVwiIGNsYXNzPVwibWQtdG9hc3QtY29udGVudFwiPlxuICAgIDxkaXYgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibWQtdG9hc3QtY29udGVudFwiIG5nLWNsYXNzPVwie1xcJ2VuZC1jb250ZW50XFwnOiEkY3RybC5kZXRlY3RNb2JpbGUoKX1cIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtZC10b2FzdC10ZXh0XCI+XG4gICAgICAgICAgICA8c3BhbiBuZy1pZj1cIiEkY3RybC5hZGRNb2RlXCIgdHJhbnNsYXRlPVwibnVpLmZhdm9yaXRlcy5zZWFyY2guYWxlcnQubWVzc2FnZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIG5nLWlmPVwiJGN0cmwuYWRkTW9kZVwiIHRyYW5zbGF0ZT1cIm51aS5zYXZlc2VhcmNoLm1lc3NhZ2UuZGVzY3JpcHRpb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3Ryb25nIG5nLWlmPVwiISRjdHJsLmFkZE1vZGVcIj57eyRjdHJsLmVtYWlsfX08L3N0cm9uZz5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgbGF5b3V0PVwicm93XCIgbGF5b3V0LWFsaWduPVwic3RhcnQgc3RhcnRcIiBjbGFzcz1cIm1kLXRvYXN0LWNvbnRlbnRcIiBuZy1jbGFzcz1cIntcXCdzdGFydC1jb250ZW50XFwnOiEkY3RybC5kZXRlY3RNb2JpbGUoKX1cIj5cbiAgICAgICAgPG1kLWJ1dHRvbiBuZy1jbGljaz1cIiRjdHJsLm9uRGlzbWlzcygpXCIgYXJpYS1sYWJlbD1cInt7OjooXFwnbnVpLm1lc3NhZ2UuZGlzbWlzc1xcJyB8IHRyYW5zbGF0ZSl9fSBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmctc2NvcGVcIiB0cmFuc2xhdGU9XCJudWkubWVzc2FnZS5kaXNtaXNzXCI+PC9zcGFuPlxuICAgICAgICA8L21kLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbjwvbWQtdG9hc3Q+XG48cHJtLWFkZC1hbGVydC10b2FzdC1hZnRlciBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC9wcm0tYWRkLWFsZXJ0LXRvYXN0LWFmdGVyPlxuICAgICAgICBgKTtcbiAgICB9XG59XG5cblJlbW92ZUFsZXJ0c0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyR0cmFuc2xhdGUnLCAnJGVsZW1lbnQnLCAnJHRlbXBsYXRlQ2FjaGUnIF1cblxuZXhwb3J0IGxldCByZW1vdmVBbGVydHNDb25maWcgPSB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBSZW1vdmVBbGVydHNDb250cm9sbGVyLFxuICAgIHRlbXBsYXRlOiAnPHN0eWxlPm1kLXRlbXBsYXRlIHBybS1hZGQtYWxlcnQtdG9hc3QgbWQtdG9hc3QgKlthcmlhLWxhYmVsPVwie3tcXCdudWkuYXJpYS5zYXZlZFF1ZXJpZXNMaXN0LmFsZXJ0XFwnIHwgdHJhbnNsYXRlfX1cIl0geyAgZGlzcGxheTogbm9uZTsgfTwvc3R5bGU+J1xufVxuIiwiaW1wb3J0IHNlYXJjaFRpcEhUTUwgZnJvbSAnLi9zZWFyY2hUaXAuaHRtbCdcbmltcG9ydCB0aXBfZW5VU19IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2VuVVMuaHRtbCdcbmltcG9ydCB0aXBfZnJGUl9IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2ZyRlIuaHRtbCdcbmltcG9ydCB0aXBfbmxCRV9IVE1MIGZyb20gJy4vc2VhcmNoVGlwL25sQkUuaHRtbCdcblxuY2xhc3MgU2VhcmNoVGlwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcblxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xuICAgICAgICAnbmxfQkUnOiB7XG4gICAgICAgICAgJ3RpdGxlJzogJ1pvZWt0aXBzJyxcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIlpvZWt0aXBzIHdlZXJnZXZlblwiXG4gICAgICAgIH0sXG4gICAgICAgICdlbl9VUyc6IHtcbiAgICAgICAgICAndGl0bGUnOiAnU2VhcmNoIFRpcHMnLFxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiU2VhcmNoIFRpcHNcIlxuICAgICAgICB9LFxuICAgICAgICAnZnJfRlInOiB7XG4gICAgICAgICAgJ3RpdGxlJzogJ0FzdHVjZXM/JyxcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIkFzdHVjZXM/XCJcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgbGV0IHRpcHNIVE1MID0gdGlwX2VuVVNfSFRNTDtcbiAgICAgIHN3aXRjaCAobG9jYWxlKSB7XG4gICAgICAgIGNhc2UgJ2ZyX0ZSJzpcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9mckZSX0hUTUw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25sX0JFJzpcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9ubEJFX0hUTUw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfZW5VU19IVE1MO1xuICAgICAgfVxuXG4gICAgICAkc2NvcGUudGl0bGUgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZSddO1xuICAgICAgJHNjb3BlLnRpdGxlX2xhYmVsID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGVfbGFiZWwnXTtcblxuICAgICAgJHNjb3BlLnNob3dTZWFyY2hUaXBzID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgJG1kRGlhbG9nLnNob3coe1xuICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXG4gICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcbiAgICAgICAgICB0ZW1wbGF0ZTogdGlwc0hUTUwsXG4gICAgICAgICAgbG9jYWxzOiB7XG4gICAgICAgICAgICBpdGVtczogJHNjb3BlLml0ZW1zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBEaWFsb2dDb250cm9sbGVyKCRzY29wZSwgJG1kRGlhbG9nLCBpdGVtcykge1xuICAgICAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblNlYXJjaFRpcENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyRtZERpYWxvZyddXG5cbmV4cG9ydCBsZXQgc2VhcmNoVGlwQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBTZWFyY2hUaXBDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogc2VhcmNoVGlwSFRNTFxufVxuIiwiXG5jbGFzcyBTdGF0aWNGb290ZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2csICRlbGVtZW50KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB2YXIgbG9jYWxlID0gXCJlbl9VU1wiXG5cbiAgICAgICAgdmFyIHZpZXdXaXRoQ3VzdG9tRm9vdGVyID0gWydMaXJpYXMnLCd3ZXJlbGR3aWp6ZXInLCdFQ0InXVxuLypcbiAgICAgICAgY29uc29sZS5sb2cgKHNlbGYgKVxuICAgICAgICBjb25zb2xlLmxvZyAoc2NvcGUgKVxuICAgICAgICBjb25zb2xlLmxvZyAoc2NvcGUuJHJvb3QuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSApXG4qL1xuICAgICAgICBsb2NhbGUgPSBzY29wZS4kcm9vdC4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XG4gICAgICAgIC8qXG4gICAgICAgIHZhciB2aWQgPSB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcbiAgICAgICAvLyAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoc3RhdGljRm9vdGVyVGVtcGxhdGVOYW1lLCAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIGxvY2FsZSArICcuaHRtbCcpO1xuKi9cbiAgICAgICAgdmFyIHZpZCA9IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xuICAgICAgICB2YXIgdGVtcGxhdGVVcmwgPSAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIGxvY2FsZSArICcuaHRtbCc7XG4gICAgICAgIGlmICggdmlld1dpdGhDdXN0b21Gb290ZXIuaW5jbHVkZXModmlkKSApICB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybCA9ICdjdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2h0bWwvdGVtcGxhdGVzL2Zvb3Rlcl8nICsgdmlkICsgJ18nICsgbG9jYWxlICsgJy5odG1sJztcbiAgICAgICAgfVxuXG4gICAgICAgICRzY29wZS5nZXRUZW1wbGF0ZVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZVVybDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuU3RhdGljRm9vdGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJywgJyRlbGVtZW50J11cblxuZXhwb3J0IGxldCBzdGF0aWNGb290ZXJDb25maWcgPSB7XG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBTdGF0aWNGb290ZXJDb250cm9sbGVyLFxuICAgIHRlbXBsYXRlOiAnPG5nLWluY2x1ZGUgc3JjPVwiZ2V0VGVtcGxhdGVVcmwoKVwiLz4nLFxufVxuIiwiaW1wb3J0IGFsdG1ldHJpY0hUTUwgZnJvbSAnLi9hbHRtZXRyaWMuaHRtbCdcblxuY2xhc3MgQWx0TWV0cmljQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlLCAkd2luZG93LCAkdGltZW91dCwgQWx0bWV0cmljc1NlcnZpY2UpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGl0ZW0gPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtO1xuICAgIC8qXG4gICAgICAgIHRoaXMuZWxlbWVudCA9ICRlbGVtZW50O1xuICAgICAgICB0aGlzLndpbmRvdyA9ICR3aW5kb3c7XG4gICAgKi9cbiAgICBzZWxmLmRvaSA9ICcnO1xuICAgIHNlbGYucmVjb3JkaWQgPSBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xuICAgIGlmIChpdGVtICYmIGl0ZW0ucG54ICYmIGl0ZW0ucG54LmFkZGF0YSAmJiBpdGVtLnBueC5hZGRhdGEuZG9pKSB7XG4gICAgICBzZWxmLmRvaSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmFkZGF0YS5kb2lbMF07XG5cbiAgICAgIHRoaXMucmVjb3JkaWQgPSBzZWxmLnJlY29yZGlkO1xuICAgICAgQWx0bWV0cmljc1NlcnZpY2UuYWRkQWx0bWV0cmljcygnI2FsdG1ldHJpY3NfJyArIHNlbGYucmVjb3JkaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBsZXQgYWx0bWV0cmljQ29uZmlnID0ge1xuICBiaW5kaW5nczogeyBwYXJlbnRDdHJsOiAnPCcgfSxcbiAgY29udHJvbGxlcjogQWx0TWV0cmljQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IGFsdG1ldHJpY0hUTUxcbn1cbiIsImltcG9ydCBzb3VyY2VJY29uSFRNTCBmcm9tICcuL3NvdXJjZUljb24uaHRtbCdcblxuY2xhc3MgU291cmNlSWNvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcGFyZW50Q3RybCA9ICRzY29wZS4kcGFyZW50LiRjdHJsLnBhcmVudEN0cmw7XG4gICAgdmFyIGljb25Db25mID0gW3tcbiAgICAgICdzb3VyY2VpZCc6ICdsaXJpYXMnLFxuICAgICAgJ2ljb25VcmwnOiAnLy9saW1vLmxpYmlzLmJlL3ByaW1vX2xpYnJhcnkvbGlid2ViL2xpYmlzL2ltYWdlcy9saXJpYXMuanBnJyxcbiAgICAgICdpY29uVGV4dCc6ICdMaXJpYXMnXG4gICAgfV07XG5cbiAgICB2YXIgaWNvbkNvbmZTb3VyY2VzID0gaWNvbkNvbmYubWFwKG9iaiA9PiBvYmouc291cmNlaWQpO1xuXG4gICAgc2VsZi5zb3VyY2VpZCA9IG51bGw7XG4gICAgaWYgKCdzb3VyY2VpZCcgaW4gcGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sKSB7XG4gICAgICBzZWxmLnNvdXJjZWlkID0gcGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnNvdXJjZWlkWzBdO1xuXG4gICAgICBpZiAoaWNvbkNvbmZTb3VyY2VzLmluY2x1ZGVzKHNlbGYuc291cmNlaWQpKSB7XG4gICAgICAgIHNlbGYuaWNvbiA9IGljb25Db25mLmZpbmQoZnVuY3Rpb24oeCkge1xuICAgICAgICAgIHJldHVybiB4LnNvdXJjZWlkID09PSBzZWxmLnNvdXJjZWlkO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdkaXYnKS5hcHBlbmQoJGNvbXBpbGUoc291cmNlSWNvbkhUTUwpKCRzY29wZSkpO1xuXG4gIH1cbn1cblxuU291cmNlSWNvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJ107XG5cbmV4cG9ydCBsZXQgc291cmNlSWNvbkNvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogU291cmNlSWNvbkNvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiAnJ1xufVxuIiwiY2xhc3MgUmVtb3ZlT3BlbkFjY2Vzc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcbiAgICBsZXQgcmVtb3ZlT3BlbkFjY2VzcyA9ICRzY29wZS4kd2F0Y2goKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xuICAgIH0sIChuLG8pID0+IHtcbiAgICAgIGlmIChuICE9IG8pIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzLmZpbHRlcihmID0+IHtyZXR1cm4gZi5uYW1lID09ICd0bGV2ZWwnfSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlbW92ZU9wZW5BY2Nlc3MoKTtcbiAgICAgICAgICB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5mYWNldFNlcnZpY2UucmVzdWx0cyA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzLm1hcChhID0+IHtcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPT0gJ3RsZXZlbCcpIHtcbiAgICAgICAgICAgICAgIGEudmFsdWVzID0gYS52YWx1ZXMuZmlsdGVyKHQgPT4geyByZXR1cm4gdC52YWx1ZSAhPT0gJ29wZW5fYWNjZXNzJ30pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblJlbW92ZU9wZW5BY2Nlc3NDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZSddO1xuXG5leHBvcnQgbGV0IHJlbW92ZU9wZW5BY2Nlc3NDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcbiAgY29udHJvbGxlcjogUmVtb3ZlT3BlbkFjY2Vzc0NvbnRyb2xsZXJcbn1cbiIsImltcG9ydCBwYXlNeUZpbmVzSFRNTCBmcm9tICcuL3BheU15RmluZXMuaHRtbCdcblxuY2xhc3MgUGF5TXlGaW5lc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5zaG93UGF5TXlGaW5lcyA9IGZhbHNlOyAgXG4gIH1cblxuICAkb25Jbml0KCkge1xuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgIGlmICgvXktVTGV1dmVuLy50ZXN0KHZpZXcuY29kZSkpIHtcbiAgICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgIGlmICh1c2VyLmZpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BheU15RmluZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5leHBvcnQgbGV0IHBheU15RmluZXNDb25maWcgPSB7XG4gIGJpbmRpbmdzOntcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogUGF5TXlGaW5lc0NvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBwYXlNeUZpbmVzSFRNTFxufVxuIiwiLyoqXG4gKiBUaGUgYWx0bWV0cmljcyBjb21wb25lbnQgY29udHJvbGxlci4gKGh0dHBzOi8vZ2l0aHViLmNvbS9EZXQtS29uZ2VsaWdlLUJpYmxpb3Rlay9wcmltby1leHBsb3JlLXJleC9ibG9iL21hc3Rlci9qcy9hbHRtZXRyaWNzLmNvbXBvbmVudC5qcylcbiAqIFxuICovXG5pbXBvcnQgQWx0bWV0cmljc0JhZGdlSFRNTCBmcm9tICcuL2FsdG1ldHJpY3NCYWRnZS5odG1sJ1xuXG5jbGFzcyBBbHRtZXRyaWNzQmFkZ2VDb250cm9sbGVyIHtcblxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHRpbWVvdXQsIEFsdG1ldHJpY3NTZXJ2aWNlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuLy8gICAgdGhpcy5BbHRtZXRyaWNzU2VydmljZSA9IEFsdG1ldHJpY3NTZXJ2aWNlO1xuICAgIHZhciBwYXJlbnRDdHJsID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmw7XG4gICAgbGV0IGl0ZW0gPSBwYXJlbnRDdHJsLml0ZW07XG4gICAgc2VsZi5yZWNvcmRpZCA9IGl0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XG4gICAgc2VsZi5kb2kgPSAnJztcblxuICAgIGlmIChpdGVtICYmIGl0ZW0ucG54ICYmIGl0ZW0ucG54LmFkZGF0YSAmJiBpdGVtLnBueC5hZGRhdGEuZG9pKSB7XG4gICAgICBzZWxmLmRvaSA9IHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmFkZGF0YS5kb2lbMF07XG4gICAgICBBbHRtZXRyaWNzU2VydmljZS5hZGRBbHRtZXRyaWNzKCcjZnVsbF9hbHRtZXRyaWNzXycgKyBzZWxmLnJlY29yZGlkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHZhciBhbHRtZXRyaWNzU2VjdGlvbiA9IHtcbiAgICAgICAgICAgIHNjcm9sbElkOiBcImFsdG1ldHJpY3NcIixcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lOiBcImFsdG1ldHJpY3NcIixcbiAgICAgICAgICAgIHRpdGxlOiBcImJyaWVmLnJlc3VsdHMudGFicy5BbHRtZXRyaWNzXCJcbiAgICAgICAgICB9O1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSggIHBhcmVudEN0cmwuZnVsbFZpZXdTZXJ2aWNlLmdldFNlcnZpY2VzKHBhcmVudEN0cmwuaXRlbSwgcGFyZW50Q3RybC5vcmlnaW5hdG9yKSApLnRoZW4oZnVuY3Rpb24oc2VydmljZXMpIHtcbiAgICAgICAgICAgIHNlcnZpY2VzLnNwbGljZShzZXJ2aWNlcy5sZW5ndGgsIDEwLCBhbHRtZXRyaWNzU2VjdGlvbik7XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgJG9uSW5pdCgpIHtcbiAgICBsZXQgZG9pID0gdGhpcy5kb2lcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKGRvaSAhPT0gJycpIHtcbiAgICAgIHZhciB1bmJpbmRXYXRjaGVyID0gdGhpcy4kc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9yZXR1cm4gc2VsZi4kZWxlbWVudFswXS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaDRbdHJhbnNsYXRlPVwiYnJpZWYucmVzdWx0cy50YWJzLkFsdG1ldHJpY3NcIl0nKTtcbiAgICAgICAgcmV0dXJuIHNlbGYuJGVsZW1lbnRbMF0uY2xvc2VzdCgnI2Z1bGxWaWV3JykucXVlcnlTZWxlY3RvcignaDRbdHJhbnNsYXRlPVwiYnJpZWYucmVzdWx0cy50YWJzLkFsdG1ldHJpY3NcIl0nKVxuICAgICAgfSwgZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICAvL0dldCB0aGUgc2VjdGlvbiBib2R5IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmFsdWUgd2UncmUgd2F0Y2hpbmdcbiAgICAgICAgICBsZXQgYWx0bWV0cmljc0NvbnRhaW5lciA9IG5ld1ZhbC5jbG9zZXN0KCdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJykucXVlcnlTZWxlY3RvcignZGl2LnNlY3Rpb24tYm9keScpO1xuICAgICAgICAgIGxldCBhbHRtZXRyaWNzUmVzdWx0ID0gc2VsZi4kZWxlbWVudFswXTtcblxuICAgICAgICAgIGlmIChhbHRtZXRyaWNzQ29udGFpbmVyICYmIGFsdG1ldHJpY3NDb250YWluZXIuYXBwZW5kQ2hpbGQgJiYgYWx0bWV0cmljc1Jlc3VsdCkge1xuICAgICAgICAgICAgYWx0bWV0cmljc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhbHRtZXRyaWNzUmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdW5iaW5kV2F0Y2hlcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgYWx0bWV0cmljc0JhZGdlQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBBbHRtZXRyaWNzQmFkZ2VDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogQWx0bWV0cmljc0JhZGdlSFRNTFxufVxuXG4iLCJpbXBvcnQgYmV0YVN3aXRjaEhUTUwgZnJvbSAnLi9iZXRhU3dpdGNoLmh0bWwnXG5cbmNsYXNzIEJldGFTd2l0Y2hDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuJHNjb3BlID0gJHNjb3BlO1xuXG4gICAgJHNjb3BlLnNob3dCZXRhU3dpdGNoID0gdHJ1ZTtcbiAgICAkc2NvcGUudXNlQmV0YSA9IHRydWU7ICBcblxuICAgICRzY29wZS5vbkNoYW5nZVVzZUJldGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoISAkc2NvcGUudXNlQmV0YSl7XG4gICAgICAgIHNlbGYuZ29Ub09sZFVJKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdvVG9PbGRVSSgpIHtcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPScvcHJpbW9fbGlicmFyeS9saWJ3ZWIvYWN0aW9uL3NlYXJjaC5kbz92aWQ9JysgdGhpcy5vbGRWaWQ7XG4gIH1cblxuICAkb25Jbml0KCkge1xuICAgIHZhciBMaW5rVG9CZXRhVmlld3MgPSB7XG4gICAgICAnQUNWJzonQUNWJyxcbiAgICAgICdCUEInOidCUEInLFxuICAgICAgJ0ZBUk8nOidGQVJPJyxcbiAgICAgICdGT0RGSU4nOidGT0RGSU4nICxcbiAgICAgICdHQ0xEJzonR0NMRCcsXG4gICAgICAnR1NCJzonR1NCJyxcbiAgICAgICdHU0cnOidHU0cnLFxuICAgICAgJ0lNRUMnOidJTUVDJyxcbiAgICAgICdLQURPQyc6J0tBRE9DJyxcbiAgICAgICdLQkMnOidLQkMnLFxuICAgICAgJ0tNS0cnOidLTUtHJyxcbiAgICAgICdLVUxldXZlbic6J0tVTGV1dmVuX1VYJyxcbiAgICAgICdMSUJBUic6J0xJQkFSJyxcbiAgICAgICdMVUNBJzonTFVDQV9VWCcsXG4gICAgICAnTkJCJzonTkJCJyxcbiAgICAgICdPRElTRUUnOidPRElTRUVfVVgnLFxuICAgICAgJ09GTyc6J09GTycsXG4gICAgICAnUkJJTlMnOidSQklOUycsXG4gICAgICAnUkVMSSc6J1JFTEknLFxuICAgICAgJ1JNQ0EnOidSTUNBJyxcbiAgICAgICdTRVJWJzonU0VSVicsXG4gICAgICAnVE1PUkVLJzonVE1PUkVLX1VYJyxcbiAgICAgICdUTU9SRU0nOidUTU9SRU1BX1VYJyxcbiAgICAgICdWRElDJzonVkRJQycsXG4gICAgICAnVklWRVNfS0FUSE8nOidWSVZFU19LQVRIT19VWCcsXG4gICAgICAnVklWRVNfS0hCTyc6J1ZJVkVTX0tIQk9fVVgnLFxuICAgICAgJ1ZMUCc6J1ZMUCcsXG4gICAgICAnS1VMZXV2ZW5fVE1PUkVNJzonS1VMZXV2ZW5fVE1PUkVNX1VYJyxcbiAgICAgICdLVUxldXZlbl9VQ0xMJzonS1VMZXV2ZW5fVUNMTF9VWCcsXG4gICAgICAnS1VMZXV2ZW5fVE1PUkVLJzonS1VMZXV2ZW5fVE1PUkVLX1VYJyxcbiAgICAgICdLVUxldXZlbl9MVUNBJzonS1VMZXV2ZW5fTFVDQV9VWCcsXG4gICAgICAnS1VMZXV2ZW5fVklWRVNfS0hCTyc6J0tVTGV1dmVuX1ZJVkVTX0tIQk9fVVgnLFxuICAgICAgJ0tVTGV1dmVuX09ESVNFRSc6J0tVTGV1dmVuX09ESVNFRV9VWCcsXG4gICAgICAnS0hMSU0nOidVQ0xMX0xJTUJVUkdfVVgnLFxuICAgICAgJ0tITCc6J1VDTExfTEVVVkVOX1VYJ1xuICAgIH1cblxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgIGlmICgvXkVDQi8udGVzdCh2aWV3LmNvZGUpKSB7XG4gICAgICAgIHRoaXMuc2hvd0JldGFTd2l0Y2ggPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMub2xkVmlkID0gT2JqZWN0LmtleXMoTGlua1RvQmV0YVZpZXdzKS5maW5kKGtleSA9PiBMaW5rVG9CZXRhVmlld3Nba2V5XSA9PT0gdmlldy5jb2RlKSB8fCB2aWV3LmNvZGU7XG4gICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgbGV0IGJldGFTd2l0Y2hDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEJldGFTd2l0Y2hDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogYmV0YVN3aXRjaEhUTUxcbn1cbiIsImltcG9ydCBob21lSWNvbkhUTUwgZnJvbSAnLi9ob21lSWNvbi5odG1sJ1xuXG5jbGFzcyBIb21lSWNvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHAsICRyb290U2NvcGUpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5zY29wZSA9ICRzY29wZTtcbiAgICBzZWxmLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgc2VsZi5saW5rdHlwZSA9ICdob21lSWNvbic7XG5cbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcbiAgICAgIGxldCB2aWQgPSB2aWV3LmNvZGU7XG4gICAgICBpZiAodmlkID09IFwiRUNCXCIpIHtcbiAgICAgICAgc2VsZi5saW5rdHlwZSA9IFwibmV3U2VhcmNoQnV0dG9uXCI7XG4gICAgICB9XG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XG5cbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcbiAgICAgIGxldCBsb2NhbGVMaWJyYXJ5TG9nbyA9ICdjdXN0b20vJyArIHZpZCArICcvaW1nL2xpYnJhcnktbG9nby0nICsgbG9jYWxlICsgJy5wbmcnO1xuXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XG4gICAgICAgICRodHRwKHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvID0gbG9jYWxlTGlicmFyeUxvZ287XG4gICAgICAgICAgJGNvbXBpbGUoJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkpKCRzY29wZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbyA9IGxpYnJhcnlMb2dvO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgc2VsZi5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcblxuICAgICAgJHNjb3BlLnJlbW92ZVN0aWNreUZhY2V0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZhY2V0cyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3BybS1mYWNldCcpO1xuICAgICAgICBpZiAoZmFjZXRzKSB7XG4gICAgICAgICAgdmFyIHN0aWNreUZhY2V0cyA9IGZhY2V0c1swXS5jdHJsKCkuZmFjZXRTZXJ2aWNlLmdldFN0aWNreUZhY2V0cygpXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGlja3lGYWNldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZhY2V0c1swXS5jdHJsKCkuZmFjZXRTZXJ2aWNlLnJlbW92ZVN0aWNreUZhY2V0KHN0aWNreUZhY2V0c1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuSG9tZUljb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICckY29tcGlsZScsICckaHR0cCcsICckcm9vdFNjb3BlJ107XG5cbmV4cG9ydCBsZXQgaG9tZUljb25Db25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEhvbWVJY29uQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IGhvbWVJY29uSFRNTFxufSIsImltcG9ydCBmZWVkYmFja0hUTUwgZnJvbSAnLi9mZWVkYmFjay5odG1sJ1xuaW1wb3J0IGZlZWRiYWNrRGlhbG9nSFRNTCBmcm9tICcuL2ZlZWRiYWNrRGlhbG9nLmh0bWwnXG5cbmNsYXNzIEZlZWRiYWNrQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRlbGVtZW50LCAkY29tcGlsZSwgJHNjb3BlLCBGZWVkYmFja1NlcnZpY2Upe1xuICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2RpdicpLmFwcGVuZCgkY29tcGlsZShmZWVkYmFja0hUTUwpKCRzY29wZSkpO1xuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlID0gRmVlZGJhY2tTZXJ2aWNlO1xuICB9XG5cbiAgc2hvd0ZlZWRiYWNrRm9ybSgkZXZlbnQpIHtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZS5zaG93KCRldmVudCwgZmVlZGJhY2tEaWFsb2dIVE1MKTtcbiAgfVxuXG59XG5cbkZlZWRiYWNrQ29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnRmVlZGJhY2tTZXJ2aWNlJ107XG5cbmV4cG9ydCBsZXQgZmVlZGJhY2tDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEZlZWRiYWNrQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6ICcnXG59XG4iLCJpbXBvcnQgcHJvbW90ZUxvZ2luSFRNTCBmcm9tICcuL3Byb21vdGVMb2dpbkNvbmZpZy5odG1sJ1xuXG5jbGFzcyBQcm9tb3RlTG9naW5Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuc2hvd0F1dG9tYXRpY0xvZ2luID0gZmFsc2U7ICBcbi8qIFJlbW92ZSB0aGUgbG9jYWxTdG9yYWdlIHBhcmFtZXRlciBwcmltb1Byb21vdGVMb2dpbiBpZiB0aGUgdXJsIGNvbnRhaW5zIGNsZWFyTG9naW4gKi9cbiAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIHVybFBhcmFtID0gXCJjbGVhckxvZ2luXCI7XG4gICAgdXJsUGFyYW0gPSB1cmxQYXJhbS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgdXJsUGFyYW0gKyBcIig9KFteJiNdKil8JnwjfCQpXCIpLFxuICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XG4gICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGlmIChkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKSl7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcmltb1Byb21vdGVMb2dpbicpO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGYuYWx3YXlzU2lnbmluQ2hlY2tCb3ggPSBmYWxzZTtcbiAgICBzZWxmLmFsd2F5c1NpZ25pbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJpbW9Qcm9tb3RlTG9naW5cIik7XG4gICAgaWYgKHNlbGYuYWx3YXlzU2lnbmluKSB7XG4gICAgICBzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAkc2NvcGUuYWx3YXlzU2lnbmluQ2hlY2tlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCBzZWxmLmFsd2F5c1NpZ25pbkNoZWNrQm94ICl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmltb1Byb21vdGVMb2dpbicsICdhbHdheXNTaWduaW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcmltb1Byb21vdGVMb2dpbicpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAkb25Jbml0KCkge1xuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgIGlmICgvXktVTGV1dmVuLy50ZXN0KHZpZXcuY29kZSkpIHtcbiAgICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgIHRoaXMuc2hvd0F1dG9tYXRpY0xvZ2luID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zaG93QXV0b21hdGljTG9naW4gPSB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgcHJvbW90ZUxvZ2luQ29uZmlnID0ge1xuICBiaW5kaW5nczp7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFByb21vdGVMb2dpbkNvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBwcm9tb3RlTG9naW5IVE1MXG59XG4iLCIvKiBjb21wb25lbnQgdG8gZG8gYWxsIHlvdXIgZXhwZXJpbWVudGFsIHN0dWZmICovXG4vKiBbZW58ZGlzXWFibGUgaW4gY29tcG9uZW50cyAqL1xuXG5jbGFzcyBSZWNvbW1lbmRhdGlvbkl0ZW1Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4vKlxuICAgIGNvbnNvbGUubG9nKHNlbGYpXG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS5jb25maWd1cmF0aW9uVXRpbC52aWQgKTtcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudmlkICk7XG4gICAgY29uc29sZS5sb2coIHNlbGYucGFyZW50Q3RybC5wYXJlbnRDdHJsLnByaW1vbHl0aWNzU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmluc3QgKTtcbiAgICBjb25zb2xlLmxvZyggc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudXNlckluc3RpdHV0aW9uICk7XG4qL1xuICAgIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLm9yZ0dldExpbmsgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5nZXRMaW5rO1xuICAgIHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLmdldExpbmsgPSBmdW5jdGlvbigpIHsgXG4gICAgICB2YXIgZ2V0SXRMaW5rID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwub3JnR2V0TGluaygpO1xuICAgICAgcmV0dXJuIGdldEl0TGluay5yZXBsYWNlKC9cXC9vcGVudXJsXFwvW14vXSpcXC9bXj9dKi8sIFwiL29wZW51cmxcXC9cIisgc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwucHJpbW9seXRpY3NTZXJ2aWNlLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudXNlckluc3RpdHV0aW9uICtcIlxcL1wiKyBzZWxmLnBhcmVudEN0cmwucGFyZW50Q3RybC5wcmltb2x5dGljc1NlcnZpY2UuY29uZmlndXJhdGlvblV0aWwudmlkKSBcbiAgICB9O1xuICB9XG59XG5cblJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50J11cblxuZXhwb3J0IGxldCByZWNvbW1lbmRhdGlvbkl0ZW1Db25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFJlY29tbWVuZGF0aW9uSXRlbUNvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiAnJ1xufVxuIiwiaW1wb3J0IGlsbFJlcXVlc3RGb3JtSFRNTCBmcm9tICcuL2lsbFJlcXVlc3RGb3JtLmh0bWwnXG5cbmNsYXNzIGlsbFJlcXVlc3RGb3JtQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkd2luZG93LCAkcm9vdFNjb3BlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XG4gICAgICAgIHRoaXMud2luZG93ID0gJHdpbmRvdztcbiAgICAgICAgdGhpcy5pbGxSZXF1ZXN0VXJsID0gJyc7XG4gICAgICAgIHRoaXMuc2hvd0xpbmtUb0lsbFJlcXVlc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbnN0aXR1dGlvbkNvZGUgPSBcIlwiO1xuICAgIH07XG5cbiAgICAkb25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwucmVxdWVzdHNTZXJ2aWNlLmFjY291bnRTZXJ2aWNlLmxpbmtlZFVzZXJTZWxlY3RvclNlcnZpY2Uuc2VsZWN0ZWRJbnN0aXR1dGlvbikge1xuICAgICAgICAgICAgdGhpcy5pbnN0aXR1dGlvbkNvZGUgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5yZXF1ZXN0c1NlcnZpY2UuYWNjb3VudFNlcnZpY2UubGlua2VkVXNlclNlbGVjdG9yU2VydmljZS5zZWxlY3RlZEluc3RpdHV0aW9uLmluc3RpdHV0aW9uQ29kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhbG1hX2NvZGVzID0gdGhpcy5yb290U2NvcGUuJCRjaGlsZEhlYWQuJGN0cmwudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZS5tYXBwaW5nVGFibGVzQ2FjaGUuTUFQUElOR19UQUJMRVNfQ0FDSEVbXCJBbG1hIEluc3RpdHV0aW9uIENvZGVzXCJdO1xuICAgICAgICAgICAgdmFyIHVzZXJfaW5zdCA9IHRoaXMucm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UudXNlckluc3RpdHV0aW9uO1xuICAgICAgICAgICAgdmFyIGFsbWFfY29kZSA9IGFsbWFfY29kZXMuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai50YXJnZXQgPT0gdXNlcl9pbnN0OyB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nIChhbG1hX2NvZGVbMF0pO1xuICAgICAgICAgICAgdGhpcy5pbnN0aXR1dGlvbkNvZGUgPSBhbG1hX2NvZGVbMF0uc291cmNlMTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdpbnN0aXR1dGlvbkNvZGU6JyArIGluc3RpdHV0aW9uQ29kZSlcbiAgICAgICAgaWYgKHRoaXMuaW5zdGl0dXRpb25Db2RlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dMaW5rVG9JbGxSZXF1ZXN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvSWxsUmVxdWVzdFVybCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGl0dXRpb25Db2RlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dMaW5rVG9JbGxSZXF1ZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaWxsUmVxdWVzdFVybCA9ICdodHRwczovL2xldXZlbi1wcmltby5ob3N0ZWQuZXhsaWJyaXNncm91cC5jb20vcGRzP2Z1bmM9c3NvJnVybD1odHRwOi8vZXUuYWxtYS5leGxpYnJpc2dyb3VwLmNvbS92aWV3L3VyZXNvbHZlci8nICsgdGhpcy5pbnN0aXR1dGlvbkNvZGUgKyAnL29wZW51cmw/c3ZjX2RhdD1nZXRpdCZzdmMucHJvZmlsZT1nZXRpdCZkaXJlY3RSZXNvdXJjZVNoYXJpbmdSZXF1ZXN0PXRydWUmbmV3VUk9dHJ1ZSdcbiAgICAgICAgICAgIHRoaXMud2luZG93Lm9wZW4odGhpcy5pbGxSZXF1ZXN0VXJsLCAnX2ZyZWVJbGwnKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5pbGxSZXF1ZXN0Rm9ybUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJHdpbmRvdycsJyRyb290U2NvcGUnXTtcblxuZXhwb3J0IGxldCBpbGxSZXF1ZXN0Rm9ybUNvbmZpZyA9IHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IGlsbFJlcXVlc3RGb3JtQ29udHJvbGxlcixcbiAgICB0ZW1wbGF0ZTogaWxsUmVxdWVzdEZvcm1IVE1MXG59XG4iLCJpbXBvcnQgcG54WG1sSFRNTCBmcm9tICcuL3BueFhtbC5odG1sJ1xuY2xhc3MgUG54WG1sQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnJlY29yZGlkID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnJlY29yZGlkID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAkb25Jbml0KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAoaG90a2V5cykge1xuICAgICAgaG90a2V5cyhcImN0cmwrZW50ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgc2VsZi52aXNpYmxlID0gIXNlbGYudmlzaWJsZTtcblxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLnZpc2libGUgPyAnZmxleCcgOiAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwbngteG1sLXRyaWdnZXInKS5sZW5ndGggPT0gMCkge1xuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BueC14bWwtdHJpZ2dlcicpO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9zaXRpb246Zml4ZWQ7bGVmdDowO2JvdHRvbTowO2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7ei1pbmRleDoxMDAwO2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouMDMnKTtcbiAgICAgIGRpdi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XG5cbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbngteG1sJykpKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuXG4gIH1cbn1cblxuZXhwb3J0IGxldCBwbnhYbWxDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFBueFhtbENvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBwbnhYbWxIVE1MXG59XG4iLCJpbXBvcnQgcmVwb3J0QVByb2JsZW1IVE1MIGZyb20gJy4vcmVwb3J0QVByb2JsZW0uaHRtbCdcbmltcG9ydCByZXBvcnRBUHJvYmxlbURpYWxvZ0hUTUwgZnJvbSAnLi9yZXBvcnRBUHJvYmxlbURpYWxvZy5odG1sJ1xuXG5jbGFzcyBSZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJGh0dHApIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKC9ebnVpXFwuZ2V0aXRcXC4vLnRlc3QodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwudGl0bGUpKSB7XG4gICAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdoNCcpLmFmdGVyKCRjb21waWxlKHJlcG9ydEFQcm9ibGVtSFRNTCkoJHNjb3BlKSk7XG5cbiAgICAgIGxldCByZWNvcmREYXRhID0gc2VsZi5jdXJyZW50UmVjb3JkO1xuXG4gICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XG4gICAgICAgIHNlbGYudXNlciA9IHVzZXI7XG4gICAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xuXG4gICAgICAgICAgc2VsZi5zaG93UmVwb3J0QVByb2JsZW1Gb3JtID0gKCRldmVudCkgPT4ge1xuICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xuICAgICAgICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcbiAgICAgICAgICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiByZXBvcnRBUHJvYmxlbURpYWxvZ0hUTUwsXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJG1kRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlcG9ydCA9IHtcbiAgICAgICAgICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgICAgICAgc3ViamVjdDogJ3JlcG9ydCBhIHByb2JsZW0nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxSZXBvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbmRSZXBvcnQgPSBmdW5jdGlvbihhbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5yZWNvcmRpZFswXSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUeXBlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbklkOiB1c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICB0YWI6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVjb3JkRGF0YS5wbnguZGlzcGxheS50aXRsZVswXSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Jlc291cmNlX3Byb2JsZW0nLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAkc2NvcGUucmVwb3J0LnN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICRzY29wZS5yZXBvcnQubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlUbzogJHNjb3BlLnJlcG9ydC5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yZXBvcnQucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5yZXBvcnQubWVzc2FnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL3JlcG9ydF9hX3Byb2JsZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtRnJvbS1FeEwtQVBJLUdhdGV3YXknOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJztcbiAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJztcbiAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pOyAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9OyAvL3Nob3dSZXBvcnRBUHJvYmxlbUZvcm1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgY3VycmVudFJlY29yZCgpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXG4gICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xuICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50Q3RybCk7XG4gICAgICByZXR1cm4gZWxlbWVudEN0cmwuaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuUmVwb3J0QVByb2JsZW1Db250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJGh0dHAnXTtcblxuZXhwb3J0IGxldCByZXBvcnRBUHJvYmxlbUNvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogUmVwb3J0QVByb2JsZW1Db250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImNsYXNzIEFubm91bmNlbWVudHNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlLCBNZXNzYWdlU2VydmljZSkge1xuICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coJycsICRzY29wZSk7XG4gIH1cbn1cblxuQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJ01lc3NhZ2VTZXJ2aWNlJ107XG5cbmV4cG9ydCBsZXQgYW5ub3VuY2VtZW50c0NvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxuICBjb250cm9sbGVyOiBBbm5vdW5jZW1lbnRzQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6ICcnXG59XG4iLCJpbXBvcnQgZmVlZGJhY2tBbm5vdW5jZW1lbnRIVE1MIGZyb20gJy4vZmVlZGJhY2tBbm5vdW5jZW1lbnQuaHRtbCdcbmltcG9ydCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0hUTUwgZnJvbSAnLi9mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZy5odG1sJ1xuaW1wb3J0IGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlciBmcm9tICcuL2ZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nJ1xuXG5jbGFzcyBGZWVkYmFja0Fubm91bmNlbWVudENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICR0cmFuc2xhdGUsICR0aW1lb3V0LCBGZWVkYmFja1NlcnZpY2UsIE1lc3NhZ2VTZXJ2aWNlLCBhY3Rpb25JY29ucykge1xuXG4gICAgLy8kdGltZW91dCgoKSA9PiB7XG4gICAgICAvL2xldCBtZXNzYWdlID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnN1cnZleS5hbm5vdW5jZW1lbnQnKTtcbiAgICAgIGxldCBzaG93RmVlZGJhY2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJpbW9GZWVkYmFjaycpO1xuICAgICAgaWYgKHNob3dGZWVkYmFjayA9PSBudWxsKSB7XG4gICAgICAgICR0cmFuc2xhdGUoJ2xicy5udWkuc3VydmV5LmFubm91bmNlbWVudCcpLnRoZW4oKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KGZlZWRiYWNrQW5ub3VuY2VtZW50SFRNTC5yZXBsYWNlKCd7e21lc3NhZ2V9fScsIG1lc3NhZ2UpLCB7XG4gICAgICAgICAgICBzY29wZTogJHNjb3BlLFxuICAgICAgICAgICAgaGlkZURlbGF5OiAwLFxuICAgICAgICAgICAgYWN0aW9uTGFiZWw6ICR0cmFuc2xhdGUuaW5zdGFudCgnbWFpbm1lbnUubGFiZWwuZmVlZGJhY2snKSB8fCAnRmVlZGJhY2snLFxuICAgICAgICAgICAgYWN0aW9uOlxuICAgICAgICAgICAgICAoJGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgRmVlZGJhY2tTZXJ2aWNlLnNob3coJGV2ZW50LCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0hUTUwsIGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgLy99LCAyMDAwKTtcblxuICB9XG59XG5cbkZlZWRiYWNrQW5ub3VuY2VtZW50Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCcsICdGZWVkYmFja1NlcnZpY2UnLCAnTWVzc2FnZVNlcnZpY2UnLCAnYWN0aW9uSWNvbnMnXTtcblxuZXhwb3J0IGxldCBmZWVkYmFja0Fubm91bmNlbWVudENvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogRmVlZGJhY2tBbm5vdW5jZW1lbnRDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJHRyYW5zbGF0ZSwgJGh0dHAsIGZlZWRiYWNrU2VydmljZVVSTCwgTWVzc2FnZVNlcnZpY2UpIHtcbiAgICB0aGlzLnNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XG4gICAgdGhpcy5tZFRvYXN0ID0gJG1kVG9hc3Q7XG4gICAgdGhpcy5odHRwID0gJGh0dHA7XG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMID0gZmVlZGJhY2tTZXJ2aWNlVVJMO1xuXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgJHNjb3BlLmNhbmNlbEZlZWRiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5tZERpYWxvZy5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gKGFuc3dlcikgPT4ge1xuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIHN1YmplY3Q6ICRzY29wZS5mZWVkYmFjay5zdWJqZWN0LFxuICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcbiAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXG4gICAgICAgIGxvZ2dlZEluOiBzZWxmLnVzZXIuaXNMb2dnZWRJbigpLFxuICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcbiAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXG4gICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcbiAgICAgICAgdHlwZTogJ3N1cnZleScsXG4gICAgICAgIGZlZWRiYWNrOiAkc2NvcGUuZmVlZGJhY2suYW5zd2VycyxcbiAgICAgICAgZW1haWw6ICRzY29wZS5mZWVkYmFjay5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcbiAgICAgICAgdXNlcklkOiBzZWxmLnVzZXIuaWQgfHwgJycsXG4gICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgfTtcblxuICAgICAgaWYgKCRzY29wZS5mZWVkYmFjay5yZXBseVRvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VsZi5tZERpYWxvZy5oaWRlKCk7XG5cbiAgICAgICAgc2VsZi5odHRwKHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICB1cmw6IHRoaXMuZmVlZGJhY2tTZXJ2aWNlVVJMLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmltb0ZlZWRiYWNrJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrISc7XG4gICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhtZXNzYWdlLCB7c2NvcGU6JHNjb3BlLCBoaWRlRGVsYXk6IDUwMDB9KTtcbiAgICAgICAgICAvL3NlbGYubWRUb2FzdC5zaG93U2ltcGxlKCdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLmZhaWwnKSB8fCAnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nO1xuICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVW5hYmxlIHRvIHN1Ym1pdCBmZWVkYmFjay4nKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xuICAgICAgc2VsZi51c2VyID0gdXNlcjtcbiAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgICAgc2VsZi52aWV3ID0gdmlldztcbiAgICAgICAgJHNjb3BlLmZlZWRiYWNrID0ge1xuICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcbiAgICAgICAgICBhbnN3ZXJzOiBbXSxcbiAgICAgICAgICBzdWJqZWN0OiAnZmVlZGJhY2snXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyR0cmFuc2xhdGUnLCAnJGh0dHAnLCAnZmVlZGJhY2tTZXJ2aWNlVVJMJywgJ01lc3NhZ2VTZXJ2aWNlJ107XG4iLCJjbGFzcyBGaW5lc01lc3NhZ2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoTWVzc2FnZVNlcnZpY2UsICR0cmFuc2xhdGUsICRyb290U2NvcGUpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xuICAgICAgc2VsZi51c2VyID0gdXNlcjtcbiAgICAgIGlmICh1c2VyLmZpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy9UT0RPOmV4dHJhY3QgaHRtbCB0byBpdHMgb3duIGZpbGUuIGZpbmQgb3V0IGhvdyB0byByZXNvbHZlIHt7fX1cblxuICAgICAgICBsZXQgbWVzc2FnZSA9ICR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS55b3VIYXZlRmluZXMnKTtcbiAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgvXFwkMC8sIHVzZXIuZmluZXMubGVuZ3RoKTtcblxuICAgICAgICBsZXQgcGF5ID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnlvdUhhdmVGaW5lcy5wYXknKTtcbiAgICAgICAgXG4gICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coYFxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJhbGlnbi1zZWxmOmNlbnRlcjtcIj4ke21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgPGEgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87Y29sb3I6IHdoaXRlO1wiXG4gICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtc2VjdW5kYXJ5XCIgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICBocmVmPSdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL3BheV9teV9maW5lcyc+JHtwYXl9PC9hPlxuICAgICAgICAgIGApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbkZpbmVzTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnTWVzc2FnZVNlcnZpY2UnLCAnJHRyYW5zbGF0ZScsICckcm9vdFNjb3BlJ107XG5cbmV4cG9ydCBsZXQgZmluZXNNZXNzYWdlQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBGaW5lc01lc3NhZ2VDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsdG1ldHJpY3NTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkY29tcGlsZSwgJG1kVG9hc3QsICR0aW1lb3V0LCAkd2luZG93KSB7XG4gICAgICAgIHRoaXMucm9vdFNjb3BlID0gJHJvb3RTY29wZTtcbiAgICAgICAgdGhpcy5jb21waWxlID0gJGNvbXBpbGU7XG4gICAgICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSAkdGltZW91dDtcbiAgICAgICAgdGhpcy53aW5kb3cgPSAkd2luZG93O1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICAgICAgdGhpcy5jaGVja0FsdG1ldHJpY3NjcmlwdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSAyMDA7XG4gICAgICAgICAgICB2YXIgZW5kVGltZSA9IE51bWJlcihuZXcgRGF0ZSgpKSArIDE1MDAwOyAvLyBzdG9wIGNvbnRyb2wgYWZ0ZXIgNSBzZWNvbmRzXG5cbiAgICAgICAgICAgIHZhciB3YWl0X3VudGlsX2FsdG1ldHJpY3NfbG9hZGVkID0gZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb25kaXRpb24gaXMgbWV0LCB3ZSdyZSBkb25lISBcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdHlwZW9mIHdpbmRvdy5fYWx0bWV0cmljX2VtYmVkX2luaXQgPT09ICdmdW5jdGlvbic7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb25kaXRpb24gaXNuJ3QgbWV0IGJ1dCB0aGUgdGltZW91dCBoYXNuJ3QgZWxhcHNlZCwgZ28gYWdhaW5cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChOdW1iZXIobmV3IERhdGUoKSkgPCBlbmRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQod2FpdF91bnRpbF9hbHRtZXRyaWNzX2xvYWRlZCwgaW50ZXJ2YWwsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERpZG4ndCBtYXRjaCBhbmQgdG9vIG11Y2ggdGltZSwgcmVqZWN0IVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdXYWl0IHVudGlsIGFsdG1ldHJpY3MgaXMgbG9hZGVkIHRpbWVkIG91dCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHdhaXRfdW50aWxfYWx0bWV0cmljc19sb2FkZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQWx0bWV0cmljcyhhbHRtZXRyaWNzRWxlbWVudFNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQWx0bWV0cmljc2NyaXB0cygpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIC8vICBjb25zb2xlLmxvZygnTG9hZGluZyBhbHRtZXRyaWNzOiBXZSBrdW5uZW4gc3RhcnRlbicpO1xuICAgICAgICAgICAgd2luZG93Ll9hbHRtZXRyaWNfZW1iZWRfaW5pdChhbHRtZXRyaWNzRWxlbWVudFNlbGVjdG9yKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxufTtcblxuQWx0bWV0cmljc1NlcnZpY2UuJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckY29tcGlsZScsICckbWRUb2FzdCcsICckdGltZW91dCcsICckd2luZG93J107XG4iLCJleHBvcnQgbGV0IGZlZWRTZXJ2aWNlID0gWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XG4gIHZhciBmZWVkQW50aUNhY2hlID0gXCI/JnQ9XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHJhbmRvbU51bTtcbiAgdmFyIHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwICsgMSk7XG4gIHZhciBmZWVkZGF5c29sZCA9IDYwO1xuXG4gIHZhciBkbSA9IG5ldyBEYXRlKCk7XG4gIGRtLnNldEhvdXJzKDI0LCAwLCAwLCAwKTtcblxuICB2YXIgYXBpX2VuZHBvaW50ID0gJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvZmVlZF9hZ2dyZWdhdG9yPyc7XG5cbiAgZnVuY3Rpb24gcmVhZEZlZWRDb25maWcodXJsKSB7XG4gICAgcmV0dXJuICRodHRwKHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlgtRnJvbS1FeEwtQVBJLUdhdGV3YXlcIjogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWFkRmVlZCh1cmwpIHtcbiAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgdXJsOiBhcGlfZW5kcG9pbnQgKyB1cmwsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiWC1Gcm9tLUV4TC1BUEktR2F0ZXdheVwiOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRmVlZChjb25mKSB7XG4gICAgcmV0dXJuIHJlYWRGZWVkKGNvbmYuZmVlZFVybCkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29uZi5mZWVkVXJsKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29uZi5mZWVkRmlsdGVyKTtcbiAgICAgIHZhciBwYXR0ID0gL15lbnRyeVxcLnxeaXRlbVxcLi9pO1xuICAgICAgdmFyIGZpbHRlcmVkUmVzdWx0cyA9IHJlcy5kYXRhLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICB2YXIgcmV0dmFsID0gZmFsc2U7XG4gICAgICAgIGlmIChpdGVtLnB1YkRhdGUgPT09IFwiXCIpIHtcbiAgICAgICAgICBpdGVtLnB1YkRhdGUgPSBkbTtcbiAgICAgICAgICByZXMuZGF0YS5pdGVtc1tpbmRleF0ucHViRGF0ZSA9IGRtO1xuICAgICAgICB9XG4gICAgICAgIC8qIG5vIGZpbHRlciBjb25maWd1cmVkICovXG4gICAgICAgIGlmIChjb25mLmZlZWRGaWx0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25mLmZlZWRGaWx0ZXIuZm9yRWFjaChmdW5jdGlvbihmKSB7XG4gICAgICAgICAgaWYgKHBhdHQudGVzdChmLnBhcmFtKSkge1xuICAgICAgICAgICAgdmFyIGZmID0gZi5wYXJhbS5yZXBsYWNlKHBhdHQsIFwiXCIpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbVtmZl0pKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtW2ZmXS5pbmRleE9mKGYudmFsdWUpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW1bZmZdID09IGYudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR2YWwgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLyogZmlsdGVyIG9sZCBpdGVtcyAqL1xuICAgICAgICBpZiAoZmVlZGRheXNvbGQgPCBNYXRoLmNlaWwoZG0uZ2V0VGltZSgpIC0gbmV3IERhdGUoaXRlbS5wdWJEYXRlKS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSB7XG4gICAgICAgICAgcmV0dmFsID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dmFsO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc29ydEZlZWQoZmVlZHMpIHtcbiAgICAvL3JldHVybiBmZWVkcy5zb3J0KGNvbXBhcmVEYXRlcyk7XG4gICAgcmV0dXJuIGZlZWRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS5wdWJEYXRlKTtcbiAgICAgIHZhciBkYXRlQiA9IG5ldyBEYXRlKGIucHViRGF0ZSk7XG4gICAgICBpZiAoZGF0ZUEuZ2V0VGltZSgpID09PSBkbS5nZXRUaW1lKCkpIHtcbiAgICAgICAgZGF0ZUEgPSBuZXcgRGF0ZSgwKTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRlQi5nZXRUaW1lKCkgPT09IGRtLmdldFRpbWUoKSkge1xuICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlYWRGZWVkQ29uZmlnOiByZWFkRmVlZENvbmZpZyxcbiAgICByZWFkRmVlZDogcmVhZEZlZWQsXG4gICAgcGFyc2VGZWVkOiBwYXJzZUZlZWQsXG4gICAgc29ydEZlZWQ6IHNvcnRGZWVkXG4gIH07XG59XTtcbiIsImltcG9ydCBmZWVkYmFja1NlcnZpY2VIVE1MIGZyb20gJy4vZmVlZGJhY2tTZXJ2aWNlLmh0bWwnXG5pbXBvcnQgRGlhbG9nQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYWwvZGlhbG9nJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWRiYWNrU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCRtZERpYWxvZykge1xuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XG4gIH1cblxuICBzaG93KCRldmVudCA9IG51bGwsIGZlZWRiYWNrRGlhbG9nSFRNTCA9IG51bGwsIGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlciA9IG51bGwpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKGZlZWRiYWNrRGlhbG9nSFRNTCA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBkaWFsb2cgaW5zdGFudGlhdGVkJyk7XG4gICAgICBmZWVkYmFja0RpYWxvZ0hUTUwgPSBmZWVkYmFja1NlcnZpY2VIVE1MO1xuICAgIH1cblxuICAgIGlmIChmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgZGlhbG9nIGNvbnRyb2xsZXIgaW5zdGFudGlhdGVkJyk7XG4gICAgICBmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPSBEaWFsb2dDb250cm9sbGVyO1xuICAgIH1cblxuICAgIHRoaXMubWREaWFsb2cuc2hvdyh7XG4gICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcbiAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXG4gICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXG4gICAgICB0ZW1wbGF0ZTogZmVlZGJhY2tEaWFsb2dIVE1MLFxuICAgICAgY29udHJvbGxlcjogZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyXG4gICAgfSk7XG4gIH1cbn1cblxuRmVlZGJhY2tTZXJ2aWNlLiRpbmplY3QgPSBbJyRtZERpYWxvZyddO1xuIiwiaW1wb3J0IG1lc3NhZ2VTZXJ2aWNlSFRNTCBmcm9tICcuL21lc3NhZ2VTZXJ2aWNlLmh0bWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJGNvbXBpbGUsICRtZFRvYXN0LCAkc2NlLCAkdHJhbnNsYXRlLCAkdGltZW91dCkge1xuICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xuICAgIHRoaXMuc2NlID0gJHNjZTtcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XG4gICAgdGhpcy50aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgdGhpcy5jb21waWxlID0gJGNvbXBpbGU7XG4gICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICB9XG5cbiAgc2hvdyhtZXNzYWdlID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IG51bGw7XG4gICAgbGV0IGhpZGVEZWxheSA9IG9wdGlvbnMuaGlkZURlbGF5IHx8IDA7XG4gICAgbGV0IGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uIHx8IG51bGw7XG4gICAgbGV0IGFjdGlvbkxhYmVsID0gb3B0aW9ucy5hY3Rpb25MYWJlbCB8fCAndW5rbm93bic7XG5cbiAgICB0aGlzLnRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobWVzc2FnZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyBjb2RlIHRhYmxlIGVudHJpZXMgY2FuIG5vdCBoYXZlIGVtcHR5IGRlc2NyaXB0aW9ucy5cbiAgICAgICAgLy8gbWVzc2FnZSA8PSAxIHdpbGwgbm90IGJlIGRpc3BsYXllZCEhISFcbiAgICAgICAgbGV0IG1lc3NhZ2VLZXkgPSAnbGJzLmdlbmVyYWxNZXNzYWdlJztcbiAgICAgICAgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQobWVzc2FnZUtleSk7XG4gICAgICAgIG1lc3NhZ2UgPSAobWVzc2FnZSA9PSBtZXNzYWdlS2V5IHx8IG1lc3NhZ2UgPD0gMSkgPyAnJyA6IG1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHRvYXN0Q29uZmlnID0ge1xuICAgICAgICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcbiAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTGFiZWwgPSBhY3Rpb25MYWJlbDtcblxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgICBzZWxmLm1kVG9hc3QuaGlkZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICB0aGlzLm9uQWN0aW9uID0gKCRldmVudCA9IG51bGwpID0+IHtcbiAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgICAgICAgIC8vdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwoc2VsZi5jb21waWxlKGA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPmApKHNlbGYucm9vdFNjb3BlKS5odG1sKCkpO1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChzZWxmLmNvbXBpbGUoYDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+YCkoc2NvcGUpLmh0bWwoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGVtcGxhdGU6IG1lc3NhZ2VTZXJ2aWNlSFRNTCxcbiAgICAgICAgICBwb3NpdGlvbjogJ3RvcCBjZW50ZXInLFxuICAgICAgICAgIGhpZGVEZWxheTogaGlkZURlbGF5XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLm1kVG9hc3Quc2hvdyh0b2FzdENvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gbWVzc2FnZSB0byBkaXNwbGF5Jyk7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH1cblxufVxuXG5NZXNzYWdlU2VydmljZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRjb21waWxlJywgJyRtZFRvYXN0JywgJyRzY2UnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCddO1xuIiwiLypcbiAgR2VuZXJhbCBcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5TdHJpbmcucHJvdG90eXBlLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNwbGl0KCctJykubWFwKChkLGksYSkgPT4gIGkgPiAwID8gZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGQuc2xpY2UoMSkgOmQpLmpvaW4oJycpO1xufVxuIiwiaW1wb3J0IEV4cGxvcmUgZnJvbSAnLi9wcmltby9leHBsb3JlJ1xuaW1wb3J0IFJlY29yZHMgZnJvbSAnLi9wcmltby9yZWNvcmRzJ1xuaW1wb3J0IEZhY2V0cyBmcm9tICcuL3ByaW1vL2ZhY2V0cydcbmltcG9ydCBWaWV3IGZyb20gJy4vcHJpbW8vdmlldydcbmltcG9ydCBVc2VyIGZyb20gJy4vcHJpbW8vdXNlcidcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9wcmltby9leHBsb3JlL2hlbHBlcidcblxuLyoqXG4gKiBQcmltbyBtYWluIGVudHJ5IGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW1vIHtcbiAgLyoqXG4gICAqIFJldHVybiB2ZXJzaW9uIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcbiAgICBsZXQgX3ZlcnNpb24gPSBcIjAuMC4xMFwiO1xuICAgIHJldHVybiBgTGlicmFyeToke192ZXJzaW9ufSAtIFByaW1vOiR7d2luZG93LmFwcENvbmZpZ1snc3lzdGVtLWNvbmZpZ3VyYXRpb24nXS5Qcmltb19WZXJzaW9uX051bWJlcn06JHt3aW5kb3cuYXBwQ29uZmlnWydzeXN0ZW0tY29uZmlndXJhdGlvbiddLlByaW1vX0hvdEZpeF9OdW1iZXJ9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBoYXMgcmFuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIEhlbHBlci5pc0RlYnVnRW5hYmxlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpZCB0aGUgc2NyaXB0IHJhbiBvbiBhIFByaW1vIHNpdGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc1ByaW1vQXZhaWxhYmxlKCkge1xuICAgIHJldHVybiBIZWxwZXIuaXNQcmltb0F2YWlsYWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcm94eSBjbGFzc1xuICAgKiBAcmV0dXJuIHtFeHBsb3JlfVxuICAgKi9cbiAgc3RhdGljIGdldCBleHBsb3JlKCkge1xuICAgIHJldHVybiBFeHBsb3JlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIHJlY29yZHNcbiAgICogQHJldHVybiB7UmVjb3Jkc31cbiAgICovXG4gIHN0YXRpYyBnZXQgcmVjb3Jkcygpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXNvbHZlKG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XG4gICAgfSlcbiAgICAvL3JldHVybiBuZXcgUmVjb3Jkcyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciB0byBhdmFpbGFibGUgZmFjZXRzXG4gICAqIEByZXR1cm4ge0ZhY2V0c31cbiAgICovXG4gIHN0YXRpYyBnZXQgZmFjZXRzKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlc29sdmUobmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cykpO1xuICAgIH0pXG4gICAgLy9yZXR1cm4gbmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciB0byB2aWV3IHJlbGF0ZWQgbWV0YWRhdGFcbiAgICogQHJldHVybiB7Vmlld31cbiAgICovXG4gIHN0YXRpYyBnZXQgdmlldygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzb2x2ZShuZXcgVmlldygpKTtcbiAgICB9KVxuICAgIC8vcmV0dXJuIG5ldyBWaWV3KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciB0byB1c2VyIHJlbGF0ZWQgbWV0YWRhdGFcbiAgICogQHJldHVybiB7VXNlcn1cbiAgICovXG4gIHN0YXRpYyBnZXQgdXNlcigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgSGVscGVyLnVzZXJEZXRhaWxzSFRUUCgpLnRoZW4oKHVzZXJEZXRhaWxzKT0+e1xuICAgICAgICBIZWxwZXIudXNlckZpbmVzSFRUUCgpLnRoZW4oKHVzZXJGaW5lcykgPT4ge1xuICAgICAgICAgIEhlbHBlci51c2VyTG9hbnNIVFRQKCkudGhlbigodXNlckxvYW5zKSA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUobmV3IFVzZXIoe2RldGFpbHM6IHVzZXJEZXRhaWxzLCBmaW5lczogdXNlckZpbmVzLCBsb2FuczogdXNlckxvYW5zfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuLy90aGlzIGlzIHByb3h5IGNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb3JlIHtcbiAgc3RhdGljIGdldCBjb21wb25lbnRzKCkge1xuICAgIGxldCBjID0gbmV3IENvbXBvbmVudHMoKTtcbiAgICBIZWxwZXIuY29tcG9uZW50TmFtZXMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICAgIGMuYWRkKHNlbGVjdG9yKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHVpKCkge1xuICAgIGlmICh0aGlzLl91aSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUaGlzIGlzIGEgc3R1YiBmdW5jdGlvbiBjYWxsIFwiYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKClcIiB0byBhY3RpdmF0ZSBVSScpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdWk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGhlbHBlcigpIHtcbiAgICByZXR1cm4gSGVscGVyO1xuICB9XG59XG4iLCJ2YXIgY3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBuZXcocmVxdWlyZSgnLi4vLi4vdmVuZG9yL2Nzcy1zZWxlY3Rvci1nZW5lcmF0b3IuanMnKSkuQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XG5cbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9oZWxwZXInXG5cbmNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpe1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBibGluaygpe1xuICAgIEhlbHBlci5ibGluayh0aGlzKTtcbiAgfVxuXG4gIGdldCBjc3NQYXRoKCl7XG4gICAgcmV0dXJuIGNzc1NlbGVjdG9yR2VuZXJhdG9yLmdldFNlbGVjdG9yKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBnZXQgbmFtZSgpe1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubG9jYWxOYW1lO1xuICB9XG5cbiAgc2NvcGUoKXtcbiAgICBpZiAoSGVscGVyLmlzRGVidWdFbmFibGVkKCkpe1xuICAgICAgcmV0dXJuIGFuZ3VsYXIuZWxlbWVudCh0aGlzLmVsZW1lbnQpLnNjb3BlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBydW4gXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIGZpcnN0Jyk7XG4gICAgfVxuICB9XG5cbiAgY3RybCgpe1xuICAgIGxldCBjID0gYW5ndWxhci5lbGVtZW50KHRoaXMuZWxlbWVudCkuY29udHJvbGxlcih0aGlzLm5hbWUpO1xuICAgIGlmIChjKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3VzaW5nIGFsdGVybmF0aXZlIG1ldGhvZCB0byBnZXQgY29udHJvbGxlcicpO1xuICAgICAgbGV0IHNjb3BlID0gdGhpcy5zY29wZSgpO1xuICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgIGxldCBzY29wZUNoaWxkID0gc2NvcGUuJCRjaGlsZFRhaWw7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJyRjdHJsJykpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZS4kY3RybFxuICAgICAgICB9IGVsc2UgaWYoT2JqZWN0LmtleXMoc2NvcGUpLmluY2x1ZGVzKCdjdHJsJykpIHtcbiAgICAgICAgICAgIHJldHVybiBzY29wZS5jdHJsXG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcGVDaGlsZCAmJiBPYmplY3Qua2V5cyhzY29wZUNoaWxkKS5pbmNsdWRlcygnJGN0cmwnKSl7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC4kY3RybDtcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCdjdHJsJykpe1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuY3RybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vICRjdHJsIGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudHMge1xuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICB0aGlzLl9jb21wb25lbnRzID0ge307XG4gIH1cblxuICBhZGQoc2VsZWN0b3IpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBIZWxwZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgbGV0IGVsZW1lbnRzQXJyYXkgPSB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSB8fCBbXTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpPT57XG4gICAgICBlbGVtZW50c0FycmF5LnB1c2gobmV3IENvbXBvbmVudChlbGVtZW50KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSA9IGVsZW1lbnRzQXJyYXk7XG5cbiAgICByZXR1cm4gZWxlbWVudHNBcnJheTtcbiAgfVxuXG4gIGdldChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAga2V5cygpe1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xuICAgIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYW1lID09PSAnTkdfRU5BQkxFX0RFQlVHX0lORk8hJyB8fCB0eXBlb2YoYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1sb2dvJykpLnNjb3BlKCkpICE9ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1ByaW1vQXZhaWxhYmxlKCkge1xuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZih3aW5kb3cuYW5ndWxhcikpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmltby1leHBsb3JlJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBjb21wb25lbnROYW1lcygpIHtcbiAgICAgICAgbGV0IHRhZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpO1xuICAgICAgICBsZXQgY29tcG9uZW50TmFtZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICAgIGxldCB0YWdOYW1lID0gdGFnLmxvY2FsTmFtZTtcbiAgICAgICAgICAgIGlmICgvXnBybS0vLnRlc3QodGFnTmFtZSkgfHwgL15wcmltby0vLnRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWVzLmluY2x1ZGVzKHRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVzLnB1c2godGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50TmFtZXMgPSBjb21wb25lbnROYW1lcy5zb3J0KCkuZmlsdGVyKChlLCBpLCBhKSA9PiBpID09PSBhLmZpbmRJbmRleCgoZTIpID0+IGUgPT09IGUyKSk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnROYW1lcztcbiAgICB9XG5cbiAgICBzdGF0aWMgcXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluamVjdG9yKCkge1xuICAgICAgbGV0IGMgPSBQcmltby5leHBsb3JlLmNvbXBvbmVudHMuZ2V0KCdwcmltby1leHBsb3JlJyk7XG4gICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgcHJpbW9FeHBsb3JlID0gYW5ndWxhci5lbGVtZW50KGNbMF0uZWxlbWVudCk7XG4gICAgICAgICAgbGV0IGluamVjdG9yICAgICA9IHByaW1vRXhwbG9yZS5pbmplY3RvcigpO1xuICAgICAgICAgIGlmIChpbmplY3Rvcil7XG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0b3I7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGh0dHAoKSB7XG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XG4gICAgICBpZiAoaW5qZWN0b3IpIHtcbiAgICAgICAgbGV0IGggPSBpbmplY3Rvci5nZXQoJyRodHRwJyk7XG4gICAgICAgIGlmIChoKSB7XG4gICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbG9hZFNjcmlwdChzY3JpcHRVUkwpIHtcbiAgICAgIGlmICh3aW5kb3cuYW5ndWxhcikge1xuICAgICAgICAgIGxldCBhcHBJbmplY3RvciA9IGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsJ2FuZ3VsYXJMb2FkJ10pO1xuICAgICAgICAgIGlmIChhcHBJbmplY3Rvcikge1xuICAgICAgICAgICAgICBsZXQgYW5ndWxhckxvYWQgPSBhcHBJbmplY3Rvci5nZXQoJ2FuZ3VsYXJMb2FkJyk7XG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyTG9hZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyTG9hZC5sb2FkU2NyaXB0KHNjcmlwdFVSTCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJvb3RTY29wZSgpIHtcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcbiAgICAgIGlmIChpbmplY3Rvcikge1xuICAgICAgICAgIGxldCByb290U2NvcGUgICAgPSBpbmplY3Rvci5nZXQoJyRyb290U2NvcGUnKTtcbiAgICAgICAgICBpZiAocm9vdFNjb3BlKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdFNjb3BlO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKSB7XG4gICAgICBsZXQgcm9vdFNjb3BlID0gdGhpcy5yb290U2NvcGUoKTtcbiAgICAgIGlmIChyb290U2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgand0RGF0YSgpIHtcbiAgICAgIGxldCB1U01TID0gdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XG4gICAgICBpZiAodVNNUykge1xuICAgICAgICBsZXQgand0RGF0YSA9IHVTTVMuand0VXRpbFNlcnZpY2UuZ2V0RGVjb2RlZFRva2VuKCkgfHwge307XG4gICAgICAgIHJldHVybiBqd3REYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB1c2VyRGV0YWlscygpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLiRsb2NhbEZvcmFnZS5nZXRJdGVtKCd1c2VyRGV0YWlscycpLnRoZW4odXNlckRldGFpbHMgPT4gcmVzb2x2ZSh1c2VyRGV0YWlscykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzSFRUUCgpIHtcbiAgICAgIGxldCB2aWV3Q29kZSA9IHRoaXMuand0RGF0YSgpLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoYC9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL3VzZXJzZXR0aW5ncz92aWQ9JHt2aWV3Q29kZX1gKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMuZGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJGaW5lc0hUVFAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvZmluZXMnKS50aGVuKHVzZXJGaW5lcyA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckZpbmVzLmRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xuICAgICAgICAgICAgICAgIGxldCBmaW5lcyA9IGRhdGEuZGF0YS5maW5lcztcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmVzLmZpbmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGZpbmVzJyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyB1c2VyTG9hbnNIVFRQKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2xvYW5zJykudGhlbih1c2VyTG9hbnMgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJMb2Fucy5kYXRhO1xuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9hbnMgPSBkYXRhLmRhdGEubG9hbnM7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2Fucy5sb2FuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBsb2FucycpO1xuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYmxpbmsoY29tcG9uZW50LCBudW1iZXJPZkJsaW5rcyA9IDQpIHtcbiAgICAgICAgbGV0IGludGVydmFsSWQgPSBudWxsO1xuICAgICAgICBsZXQgYm9yZGVyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcbiAgICAgICAgbGV0IGJvcmRlclNlbGVjdG9yID0gY29tcG9uZW50LmVsZW1lbnQuY3NzUGF0aCArIGluZGV4ICsgJ1JlY3QnO1xuXG4gICAgICAgIGxldCBjcmVhdGVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UmVjdCA9IGNvbXBvbmVudC5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGJvcmRlclNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgcmVkJztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnRvcCA9IGVsZW1lbnRSZWN0LnRvcCArICdweCc7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBlbGVtZW50UmVjdC5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUud2lkdGggPSBlbGVtZW50UmVjdC53aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudFJlY3QubGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib3JkZXJFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJvcmRlclNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVtb3ZlQm9yZGVyRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoYm9yZGVyRWxlbWVudCkge1xuICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmxpbmtCb3JkZXJFbGVtZW50ID0gKG51bWJlck9mQmxpbmtzID0gNCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG5cbiAgICAgICAgICAgIGlmIChudW1iZXJPZkJsaW5rcyA8IDApIHtcbiAgICAgICAgICAgICAgICByZW1vdmVCb3JkZXJFbGVtZW50KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICgobnVtYmVyT2ZCbGlua3MgJSAyKSA9PSAwKSA/ICdub25lJyA6ICdibG9jayc7XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZCbGlua3MtLTtcbiAgICAgICAgICAgICAgICBpbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKGJsaW5rQm9yZGVyRWxlbWVudCwgMTAwMCwgbnVtYmVyT2ZCbGlua3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYm9yZGVyRWxlbWVudCA9IGNyZWF0ZUJvcmRlckVsZW1lbnQoKTtcbiAgICAgICAgYmxpbmtCb3JkZXJFbGVtZW50KG51bWJlck9mQmxpbmtzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXRzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmFjZXRzKGNvbXBvbmVudHMpO1xuICAgIH1cbiAgICBfZmFjZXRzKGNvbXBvbmVudHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLWZhY2V0LWFmdGVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5mYWNldFNlcnZpY2UucmVzdWx0cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCBmYWNldHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmV0dXJuIEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuc2VhcmNoU3RhdGVTZXJ2aWNlLnJlc3VsdE9iamVjdC5mYWNldHM7XG4gICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBmYWNldHMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZHMge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcyhjb21wb25lbnRzKTtcbiAgICB9XG4gICAgX2l0ZW1zKGNvbXBvbmVudHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLXNlYXJjaC1yZXN1bHQtbGlzdC1hZnRlcicpO1xuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3RybCA9IGNbMF0uY3RybCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3RybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuaXRlbWxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJ0cnkgYWdhaW5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCByZWNvcmRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZGF0YTtcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGl0ZW1zJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIgPSBfc2tlbFVzZXIpIHtcbiAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XG4gICAgbGV0IGp3dERhdGEgPSBIZWxwZXIuand0RGF0YSgpO1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBqd3REYXRhLnVzZXIgfHwgJycsXG4gICAgICAgIGVtYWlsOiB1c2VyLmRldGFpbHMuZW1haWwgfHwgJycsXG4gICAgICAgIG5hbWU6IGp3dERhdGEudXNlck5hbWUgfHwgJ0d1ZXN0JyxcbiAgICAgICAgZGlzcGxheV9uYW1lOiB1U21zLmdldFVzZXJOYW1lRm9yRGlzcGxheSgpLFxuICAgICAgICBpc0xvZ2dlZEluOiAoKSA9PiB1U21zLmdldFVzZXJOYW1lKCkubGVuZ3RoID4gMCxcbiAgICAgICAgaXNPbkNhbXB1czogKCkgPT4gand0RGF0YS5vbkNhbXB1cyA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgZmluZXM6IHVzZXIuZmluZXMsXG4gICAgICAgIGxvYW5zOiB1c2VyLmxvYW5zXG4gICAgICB9O1xuICB9XG5cbiAgZ2V0IF9za2VsVXNlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGV0YWlsczoge30sXG4gICAgICBmaW5lczoge30sXG4gICAgICBsb2Fuczoge31cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XG4gICAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IGp3dERhdGEudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddLFxuICAgICAgICBpbnN0aXR1dGlvbjoge1xuICAgICAgICAgICAgY29kZTogand0RGF0YS52aWV3SW5zdGl0dXRpb25Db2RlLFxuICAgICAgICAgICAgbmFtZTogd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmluc3RpdHV0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGludGVyZmFjZUxhbmd1YWdlOiB1U21zLmdldFVzZXJMYW5ndWFnZSgpIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnRlcmZhY2VMYW5ndWFnZSxcbiAgICAgICAgaXA6IHtcbiAgICAgICAgICBhZGRyZXNzOiBqd3REYXRhLmlwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBDc3NTZWxlY3RvckdlbmVyYXRvciwgcm9vdCxcbiAgICBpbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XG5cbiAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmRlZmF1bHRfb3B0aW9ucyA9IHtcbiAgICAgIHNlbGVjdG9yczogWydpZCcsICdjbGFzcycsICd0YWcnLCAnbnRoY2hpbGQnXVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDc3NTZWxlY3RvckdlbmVyYXRvcihvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5zZXRPcHRpb25zKHRoaXMuZGVmYXVsdF9vcHRpb25zKTtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBrZXksIHJlc3VsdHMsIHZhbDtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICB2YWwgPSBvcHRpb25zW2tleV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRfb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMub3B0aW9uc1trZXldID0gdmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5pc0VsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICByZXR1cm4gISEoKGVsZW1lbnQgIT0gbnVsbCA/IGVsZW1lbnQubm9kZVR5cGUgOiB2b2lkIDApID09PSAxKTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFBhcmVudHMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgY3VycmVudF9lbGVtZW50LCByZXN1bHQ7XG4gICAgICByZXN1bHQgPSBbXTtcbiAgICAgIGlmICh0aGlzLmlzRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB3aGlsZSAodGhpcy5pc0VsZW1lbnQoY3VycmVudF9lbGVtZW50KSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRfZWxlbWVudCk7XG4gICAgICAgICAgY3VycmVudF9lbGVtZW50ID0gY3VycmVudF9lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRUYWdTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplSXRlbShlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5zYW5pdGl6ZUl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIgY2hhcmFjdGVycztcbiAgICAgIGNoYXJhY3RlcnMgPSAoaXRlbS5zcGxpdCgnJykpLm1hcChmdW5jdGlvbihjaGFyYWN0ZXIpIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJzonKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgKCc6Jy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKSArIFwiIFwiO1xuICAgICAgICB9IGVsc2UgaWYgKC9bICFcIiMkJSYnKCkqKywuXFwvOzw9Pj9AXFxbXFxcXFxcXV5ge3x9fl0vLnRlc3QoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIHJldHVybiBcIlxcXFxcIiArIGNoYXJhY3RlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZXNjYXBlKGNoYXJhY3RlcikucmVwbGFjZSgvXFwlL2csICdcXFxcJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNoYXJhY3RlcnMuam9pbignJyk7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRJZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGlkLCBzYW5pdGl6ZWRfaWQ7XG4gICAgICBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgaWYgKChpZCAhPSBudWxsKSAmJiAoaWQgIT09ICcnKSAmJiAhKC9cXHMvLmV4ZWMoaWQpKSAmJiAhKC9eXFxkLy5leGVjKGlkKSkpIHtcbiAgICAgICAgc2FuaXRpemVkX2lkID0gXCIjXCIgKyAodGhpcy5zYW5pdGl6ZUl0ZW0oaWQpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNhbml0aXplZF9pZCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIHNhbml0aXplZF9pZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDbGFzc1NlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBjbGFzc19zdHJpbmcsIGl0ZW0sIHJlc3VsdDtcbiAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgY2xhc3Nfc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICBpZiAoY2xhc3Nfc3RyaW5nICE9IG51bGwpIHtcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKTtcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL15cXHN8XFxzJC9nLCAnJyk7XG4gICAgICAgIGlmIChjbGFzc19zdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgcmVzdWx0ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGssIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgICAgICAgICAgcmVmID0gY2xhc3Nfc3RyaW5nLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgICAgICAgaXRlbSA9IHJlZltrXTtcbiAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKFwiLlwiICsgKHRoaXMuc2FuaXRpemVJdGVtKGl0ZW0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QXR0cmlidXRlU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGF0dHJpYnV0ZSwgYmxhY2tsaXN0LCBrLCBsZW4sIHJlZiwgcmVmMSwgcmVzdWx0O1xuICAgICAgcmVzdWx0ID0gW107XG4gICAgICBibGFja2xpc3QgPSBbJ2lkJywgJ2NsYXNzJ107XG4gICAgICByZWYgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgYXR0cmlidXRlID0gcmVmW2tdO1xuICAgICAgICBpZiAocmVmMSA9IGF0dHJpYnV0ZS5ub2RlTmFtZSwgaW5kZXhPZi5jYWxsKGJsYWNrbGlzdCwgcmVmMSkgPCAwKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goXCJbXCIgKyBhdHRyaWJ1dGUubm9kZU5hbWUgKyBcIj1cIiArIGF0dHJpYnV0ZS5ub2RlVmFsdWUgKyBcIl1cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXROdGhDaGlsZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGNvdW50ZXIsIGssIGxlbiwgcGFyZW50X2VsZW1lbnQsIHNpYmxpbmcsIHNpYmxpbmdzO1xuICAgICAgcGFyZW50X2VsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBpZiAocGFyZW50X2VsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgc2libGluZ3MgPSBwYXJlbnRfZWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSBzaWJsaW5ncy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nc1trXTtcbiAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnQoc2libGluZykpIHtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBcIjpudGgtY2hpbGQoXCIgKyBjb3VudGVyICsgXCIpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICB2YXIgaXNfdW5pcXVlLCByZXN1bHQ7XG4gICAgICBpc191bmlxdWUgPSBmYWxzZTtcbiAgICAgIGlmICgoc2VsZWN0b3IgIT0gbnVsbCkgJiYgc2VsZWN0b3IgIT09ICcnKSB7XG4gICAgICAgIHJlc3VsdCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEgJiYgcmVzdWx0WzBdID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgaXNfdW5pcXVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzX3VuaXF1ZTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEFsbFNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIHQ6IG51bGwsXG4gICAgICAgIGk6IG51bGwsXG4gICAgICAgIGM6IG51bGwsXG4gICAgICAgIGE6IG51bGwsXG4gICAgICAgIG46IG51bGxcbiAgICAgIH07XG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICd0YWcnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC50ID0gdGhpcy5nZXRUYWdTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2lkJykgPj0gMCkge1xuICAgICAgICByZXN1bHQuaSA9IHRoaXMuZ2V0SWRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2NsYXNzJykgPj0gMCkge1xuICAgICAgICByZXN1bHQuYyA9IHRoaXMuZ2V0Q2xhc3NTZWxlY3RvcnMoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdhdHRyaWJ1dGUnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5hID0gdGhpcy5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdudGhjaGlsZCcpID49IDApIHtcbiAgICAgICAgcmVzdWx0Lm4gPSB0aGlzLmdldE50aENoaWxkU2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFVuaXF1ZW5lc3MgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgdmFyIGZvdW5kX2VsZW1lbnRzLCBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBmb3VuZF9lbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgIHJldHVybiBmb3VuZF9lbGVtZW50cy5sZW5ndGggPT09IDEgJiYgZm91bmRfZWxlbWVudHNbMF0gPT09IGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0Q29tYmluYXRpb25zID0gZnVuY3Rpb24oZWxlbWVudCwgaXRlbXMsIHRhZykge1xuICAgICAgdmFyIGl0ZW0sIGssIGwsIGxlbiwgbGVuMSwgcmVmLCByZWYxO1xuICAgICAgcmVmID0gdGhpcy5nZXRDb21iaW5hdGlvbnMoaXRlbXMpO1xuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGl0ZW0gPSByZWZba107XG4gICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0YWcgIT0gbnVsbCkge1xuICAgICAgICByZWYxID0gaXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gdGFnICsgaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobCA9IDAsIGxlbjEgPSByZWYxLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xuICAgICAgICAgIGl0ZW0gPSByZWYxW2xdO1xuICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0VW5pcXVlU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgZm91bmRfc2VsZWN0b3IsIGssIGxlbiwgcmVmLCBzZWxlY3Rvcl90eXBlLCBzZWxlY3RvcnM7XG4gICAgICBzZWxlY3RvcnMgPSB0aGlzLmdldEFsbFNlbGVjdG9ycyhlbGVtZW50KTtcbiAgICAgIHJlZiA9IHRoaXMub3B0aW9ucy5zZWxlY3RvcnM7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgc2VsZWN0b3JfdHlwZSA9IHJlZltrXTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcl90eXBlKSB7XG4gICAgICAgICAgY2FzZSAnaWQnOlxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy5pICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIHNlbGVjdG9ycy50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYyAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmMsIHNlbGVjdG9ycy50KTtcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhdHRyaWJ1dGUnOlxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYSAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmEsIHNlbGVjdG9ycy50KTtcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdudGhjaGlsZCc6XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAnKic7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBhbGxfc2VsZWN0b3JzLCBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHBhcmVudHMsIHJlc3VsdCwgc2VsZWN0b3IsIHNlbGVjdG9ycztcbiAgICAgIGFsbF9zZWxlY3RvcnMgPSBbXTtcbiAgICAgIHBhcmVudHMgPSB0aGlzLmdldFBhcmVudHMoZWxlbWVudCk7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSBwYXJlbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGl0ZW0gPSBwYXJlbnRzW2tdO1xuICAgICAgICBzZWxlY3RvciA9IHRoaXMuZ2V0VW5pcXVlU2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmIChzZWxlY3RvciAhPSBudWxsKSB7XG4gICAgICAgICAgYWxsX3NlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZWN0b3JzID0gW107XG4gICAgICBmb3IgKGwgPSAwLCBsZW4xID0gYWxsX3NlbGVjdG9ycy5sZW5ndGg7IGwgPCBsZW4xOyBsKyspIHtcbiAgICAgICAgaXRlbSA9IGFsbF9zZWxlY3RvcnNbbF07XG4gICAgICAgIHNlbGVjdG9ycy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICByZXN1bHQgPSBzZWxlY3RvcnMuam9pbignID4gJyk7XG4gICAgICAgIGlmICh0aGlzLnRlc3RTZWxlY3RvcihlbGVtZW50LCByZXN1bHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihpdGVtcykge1xuICAgICAgdmFyIGksIGosIGssIGwsIHJlZiwgcmVmMSwgcmVzdWx0O1xuICAgICAgaWYgKGl0ZW1zID09IG51bGwpIHtcbiAgICAgICAgaXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IFtbXV07XG4gICAgICBmb3IgKGkgPSBrID0gMCwgcmVmID0gaXRlbXMubGVuZ3RoIC0gMTsgMCA8PSByZWYgPyBrIDw9IHJlZiA6IGsgPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2sgOiAtLWspIHtcbiAgICAgICAgZm9yIChqID0gbCA9IDAsIHJlZjEgPSByZXN1bHQubGVuZ3RoIC0gMTsgMCA8PSByZWYxID8gbCA8PSByZWYxIDogbCA+PSByZWYxOyBqID0gMCA8PSByZWYxID8gKytsIDogLS1sKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gocmVzdWx0W2pdLmNvbmNhdChpdGVtc1tpXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQuc2hpZnQoKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5qb2luKCcnKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENzc1NlbGVjdG9yR2VuZXJhdG9yO1xuXG4gIH0pKCk7XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsID8gZGVmaW5lLmFtZCA6IHZvaWQgMCkge1xuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcbiAgICByb290LkNzc1NlbGVjdG9yR2VuZXJhdG9yID0gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qXG4gIENlbnRyYWwgUGFja2FnZSBMb2FkZXJcblxuICBEbyBOT1QgZWRpdCB0aGlzIGZpbGUuXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cbmltcG9ydCBQcmltbyBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xuXG5pbXBvcnQge1xuICBmZWVkU2VydmljZVxufSBmcm9tICcuL2ZhY3Rvcmllcy9mZWVkU2VydmljZSdcbmltcG9ydCBNZXNzYWdlU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9tZXNzYWdlU2VydmljZSdcbmltcG9ydCBGZWVkYmFja1NlcnZpY2UgZnJvbSAnLi9mYWN0b3JpZXMvZmVlZGJhY2tTZXJ2aWNlJ1xuaW1wb3J0IEFsdG1ldHJpY3NTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL2FsdG1ldHJpY3NTZXJ2aWNlJ1xuXG4vL21ha2UgUHJpbW8gcHVibGljXG53aW5kb3cuUHJpbW8gPSBQcmltbztcbi8vbG9hZCBQcmltb0V4cGxvcmVyIFVJIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGlzIHJhblxud2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gIGlmIChQcmltby5pc0RlYnVnRW5hYmxlZCgpKSB7XG4gICAgbGV0IHVpVVJMID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vbWVobWV0Yy9wcmltby1leHBsb3JlLWRvbS11aS9mYzA4NjhkZi9qcy9jdXN0b20uanMnO1xuICAgIC8vbGV0IHVpVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9qcy9jdXN0b20uanMnO1xuXG4gICAgSGVscGVyLmxvYWRTY3JpcHQodWlVUkwpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0luamVjdGluZyBVSScpO1xuICAgICAgUHJpbW8uZXhwbG9yZS51aS50b2dnbGUoKTtcbiAgICB9KTtcbiAgfVxufSwgMjAwMCk7XG5cbi8vQ3JlYXRlIHRoZSBjZW50cmFsQ3VzdG9tIG1vZHVsZTtcbmxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnY2VudHJhbEN1c3RvbScsIFsnbmdNYXRlcmlhbCddKVxuICAuY29uc3RhbnQoJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRiYWNrJylcbiAgLmNvbmZpZygoJHNjZURlbGVnYXRlUHJvdmlkZXIpID0+IHtcbiAgICAkc2NlRGVsZWdhdGVQcm92aWRlci5yZXNvdXJjZVVybFdoaXRlbGlzdChbXG4gICAgICAnKionXG4gICAgXSk7XG4gIH0pXG4gIC5ydW4oKCR0ZW1wbGF0ZUNhY2hlLCAkcm9vdFNjb3BlKSA9PiB7XG4gICAgLy8kdGVtcGxhdGVDYWNoZS5wdXQoJ2NvbXBvbmVudHMvc2VhcmNoL2Z1bGxWaWV3L2Z1bGwtdmlldy5odG1sJywgZnVsbFZpZXdIVE1MKTtcbiAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly91bnBrZy5jb20vaG90a2V5cy1qc0AyLjAuOC9kaXN0L2hvdGtleXMubWluLmpzJykudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnaG90a2V5cy5qcyBsb2FkZWQnKTtcbiAgICB9KTtcbiAgICBIZWxwZXIubG9hZFNjcmlwdCgnaHR0cHM6Ly9kMWJ4aDh1YXMxbW53Ny5jbG91ZGZyb250Lm5ldC9hc3NldHMvZW1iZWQuanM/JyArIERhdGUubm93KCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnYWx0bWVyaWNzIGVtYmVkLmpzIGxvYWRlZCcpO1xuICAgIH0pO1xuICB9KVxuICAuZmFjdG9yeSgnRmVlZFNlcnZpY2UnLCBmZWVkU2VydmljZSlcbiAgLnNlcnZpY2UoJ0FsdG1ldHJpY3NTZXJ2aWNlJywgQWx0bWV0cmljc1NlcnZpY2UpXG4gIC5zZXJ2aWNlKCdNZXNzYWdlU2VydmljZScsIE1lc3NhZ2VTZXJ2aWNlKVxuICAuc2VydmljZSgnRmVlZGJhY2tTZXJ2aWNlJywgRmVlZGJhY2tTZXJ2aWNlKVxuICAuZmFjdG9yeSgnYXBpQ2FsbEludGVyY2VwdG9yJywgWygpID0+IHtcbiAgICB2YXIgYXBpQ2FsbEludGVyY2VwdG9yID0ge1xuICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vXCJBc3Nlc3NpbmcgR29zcGVsIFF1b3RhdGlvbnMgaW4gSnVzdGluIE1hcnR5clwiXG4gICAgICAgIGxldCBmaXhEaXNwbGF5RGF0YSA9IGZ1bmN0aW9uKHBueERhdGEpIHtcbiAgICAgICAgICBpZiAocG54RGF0YSkge1xuICAgICAgICAgICAgdHJ5IHsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAocG54RGF0YS5kaXNwbGF5ICYmIHBueERhdGEuZGlzcGxheS5jcmVhdG9yKSB7XG4gICAgICAgICAgICAgICAgcG54RGF0YS5kaXNwbGF5LmNyZWF0b3IgPSBwbnhEYXRhLmRpc3BsYXkuY3JlYXRvci5tYXAoYyA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgcmVsYXRvciA9IGMubWF0Y2goL1xcKC4qP1xcKS9pKTtcbiAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYy5zcGxpdCgvXFwoLio/XFwpL2kpLmpvaW4oXCJcIik7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChyZWxhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGM9YCR7Y30gJCRRJHtkYXRhfWA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChwbnhEYXRhLmRpc3BsYXkgJiYgcG54RGF0YS5kaXNwbGF5LmNvbnRyaWJ1dG9yKSB7XG4gICAgICAgICAgICAgICAgcG54RGF0YS5kaXNwbGF5LmNvbnRyaWJ1dG9yID0gcG54RGF0YS5kaXNwbGF5LmNvbnRyaWJ1dG9yLm1hcChjID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCByZWxhdG9yID0gYy5tYXRjaCgvXFwoLio/XFwpL2kpO1xuICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBjLnNwbGl0KC9cXCguKj9cXCkvaSkuam9pbihcIlwiKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgYz1gJHtjfSAkJFEke2RhdGF9YDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkYXRhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwbnhEYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC9eXFwvcHJpbW9fbGlicmFyeVxcL2xpYndlYlxcL3dlYnNlcnZpY2VzXFwvcmVzdFxcL3ByaW1vLWV4cGxvcmVcXC92MVxcL3BueHMvLnRlc3QocmVzcG9uc2UuY29uZmlnLnVybCkpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5pbmNsdWRlcygnZG9jcycpKSB7XG4gICAgICAgICAgICAgIGRhdGEuZG9jcy5tYXAocCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpeERpc3BsYXlEYXRhKHAucG54KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkuaW5jbHVkZXMoJ3BueCcpKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5wbnggPSBmaXhEaXNwbGF5RGF0YShkYXRhLnBueCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFwaUNhbGxJbnRlcmNlcHRvcjtcbiAgfV0pXG4gIC5jb25maWcoWyckaHR0cFByb3ZpZGVyJywgKCRodHRwUHJvdmlkZXIpID0+IHtcbiAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdhcGlDYWxsSW50ZXJjZXB0b3InKTtcbiAgfV0pO1xuXG5cbi8vQ29udGFpbnMgdGhlIGFmdGVyIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIGluamVjdGVkXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XG5cbi8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcbi8vaW5qZWN0ZWRcbmNvbnNvbGUubG9nKCdMb2FkaW5nIGNlbnRyYWxDdXN0b20gY29tcG9uZW50cycpO1xuQ29tcG9uZW50cy5hbGwuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbXBvbmVudC5uYW1lKVxuICBpZiAoY29tcG9uZW50LmVuYWJsZWQpIHtcbiAgICBpZiAoY29tcG9uZW50LmFwcGVuZFRvKSB7XG4gICAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcbiAgICAgIC8vZWxlbWVudHMucHVzaChjb21wb25lbnQubmFtZSk7XG4gICAgICBlbGVtZW50cy5wdXNoKHtcbiAgICAgICAgJ25hbWUnOiBjb21wb25lbnQubmFtZSxcbiAgICAgICAgJ2VuYWJsZUluVmlldyc6IGNvbXBvbmVudC5lbmFibGVJblZpZXdcbiAgICAgIH0pO1xuICAgICAgYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gPSBlbGVtZW50cztcblxuICAgIH1cbiAgICBhcHAuY29uc3RhbnQoJ2FmdGVyQ29tcG9uZW50cycsIGFmdGVyQ29tcG9uZW50cyk7XG4gICAgYXBwLmNvbXBvbmVudChjb21wb25lbnQubmFtZS50b0NhbWVsQ2FzZSgpLCBjb21wb25lbnQuY29uZmlnKTtcbiAgfVxufSk7XG5cblxuLy9JbmplY3QgcGxhY2UgaG9sZGVycyBpbnRvIHRoZSBhZnRlciBjb21wb25lbnRzXG5PYmplY3Qua2V5cyhhZnRlckNvbXBvbmVudHMpLmZvckVhY2goKGNvbXBvbmVudCwgaSkgPT4ge1xuICBsZXQgc3ViQ29tcG9uZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnRdO1xuXG4gIGFwcC5jb21wb25lbnQoY29tcG9uZW50LnRvQ2FtZWxDYXNlKCksIHtcbiAgICBiaW5kaW5nczoge1xuICAgICAgcGFyZW50Q3RybDogJzwnXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogc3ViQ29tcG9uZW50cy5tYXAobSA9PiBgPCR7bS5uYW1lfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke20ubmFtZX0+YCkuam9pbihcIlwiKVxuICB9KTtcbn0pO1xuIl19
