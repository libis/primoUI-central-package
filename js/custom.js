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


require('./utils');

var _experiment = require('./components/prmLogoAfter/experiment');

var _homeIcon = require('./components/prmLogoAfter/homeIcon');

var _betaSwitch = require('./components/prmLogoAfter/betaSwitch');

var _sourceIcon = require('./components/prmBriefResultAfter/sourceIcon');

var _pnxXml = require('./components/prmSearchResultThumbnailContainerAfter/pnxXml');

var _payMyFines = require('./components/prmFinesOverviewAfter/payMyFines');

var _feedback = require('./components/prmMainMenuAfter/feedback');

var _searchTip = require('./components/general/searchTip');

var _reportAProblem = require('./components/prmServiceHeaderAfter/reportAProblem');

var _finesMessage = require('./components/prmTopBarBefore/finesMessage');

var _announcements = require('./components/prmTopBarBefore/announcements');

var _PromoteLogin = require('./components/prmPromoteLogin/PromoteLogin');

var _feedbackAnnouncement = require('./components/prmTopBarBefore/feedbackAnnouncement');

var _staticFooter = require('./components/general/staticFooter');

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
      return [{ name: 'libis-experiment', config: _experiment.experimentConfig, enabled: false, appendTo: 'prm-logo-after', enableInView: '.*' }, { name: 'home-icon', config: _homeIcon.homeIconConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '.*' }, { name: 'beta-switch', config: _betaSwitch.betaSwitchConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '.*' }, { name: 'source-icon', config: _sourceIcon.sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '.*' }, { name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after', enableInView: '.*' }, { name: 'pay-my-fines', config: _payMyFines.payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after', enableInView: '.*' }, { name: 'feedback', config: _feedback.feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '.*' }, { name: 'report-a-problem', config: _reportAProblem.reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '.*' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'static-footer', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-explore-main-after', enableInView: '.*' }, { name: 'static-footer-account', config: _staticFooter.staticFooterConfig, enabled: true, appendTo: 'prm-account-after', enableInView: '.*' },

      /* lbs-components used in html-templates of the package */
      { name: 'promote-login-static-footer', config: _PromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView: '^KULeuven' }, { name: 'announcement-feedback', config: _feedbackAnnouncement.feedbackAnnouncementConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'announcement', config: _announcements.announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'pay-my-fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven' }].filter(function (component) {
        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/searchTip":3,"./components/general/staticFooter":4,"./components/prmBriefResultAfter/sourceIcon":5,"./components/prmFinesOverviewAfter/payMyFines":6,"./components/prmLogoAfter/betaSwitch":7,"./components/prmLogoAfter/experiment":8,"./components/prmLogoAfter/homeIcon":9,"./components/prmMainMenuAfter/feedback":10,"./components/prmPromoteLogin/PromoteLogin":11,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":12,"./components/prmServiceHeaderAfter/reportAProblem":13,"./components/prmTopBarBefore/announcements":14,"./components/prmTopBarBefore/feedbackAnnouncement":15,"./components/prmTopBarBefore/finesMessage":17,"./utils":31}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DialogController = function DialogController($scope, $mdDialog, $mdToast, $http, feedbackServiceURL) {
  var _this = this;

  _classCallCheck(this, DialogController);

  this.scope = $scope;
  this.mdDialog = $mdDialog;
  this.mdToast = $mdToast;
  this.http = $http;
  this.feedbackServiceURL = feedbackServiceURL;

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
            self.mdToast.showSimple('Thank you for your feedback!');
          }, function (response) {
            self.mdToast.showSimple('Unable to submit feedback.');
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


DialogController.$inject = ['$scope', '$mdDialog', '$mdToast', '$http', 'feedbackServiceURL'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchTipHTML = '<a aria-label="{{title_label}}" title="{{title_label}}" ng-click="showSearchTips()">\r\n  <span class ="md-headline" id="ContentSearchTips">\r\n    {{title}}\r\n  </span>\r\n</a>\r\n';
var tip_enUS_HTML = '<md-dialog aria-label="Search tips">\r\n    <md-dialog-content id="searchtips">\r\n\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Search tips</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n\r\n        <md-content>\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        For phrases use quotes: "global warming"\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        For truncated searches use an asterisk: gun* will retrieve gun, guns, gunners, gunnery, gunning, etc.\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        As a wildcard for one character, use ?:  wom?n will retrieve woman and women.\r\n                    </div>\r\n                </md-list-item>\r\n\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        To exclude a term use NOT (in uppercase): celtic NOT Irish\r\n                    </div>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        To group terms use brackets: Shakespeare (tragedy OR sonnet). OR is in uppercase\r\n                   </div>\r\n                </md-list-item>\r\n            </md-list>\r\n<!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                        For users of Internet Explorer:<br/>\r\n                        Limo should be viewed with version 9 or higher.<br />\r\n                        If you have an earlier version, it is a good idea to upgrade your browser. <br />\r\n                    </div>\r\n                </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button md-autofocus  class="md-primary" ng-click="closeDialog()">\r\n                        Close\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';
var tip_frFR_HTML = '<md-dialog aria-label="Zoektips">\r\n    <md-dialog-content id="searchtips">\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Trucs & astuces</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-content>\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        utilisez des guillemets pour les phrases/expressions exactes: "r\xE9chauffement global"\r\n                    </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez un ast\xE9risque pour les recherches tronqu\xE9es: vin* donnera vinage, vinaigre, vinasse, vineux etc.\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez ? comme caract\xE8re de remplacement: fe?me donnera femme et ferme\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            utilisez NOT (en capitales) pour exclure un mot: celtique NOT irlandais\r\n                        </div>\r\n                    </md-list-item>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        utilisez des parenth\xE8ses pour grouper les termes: Shakespeare (trag\xE9die OR sonnet). OR est \xE9crit en capitales\r\n                    </div>\r\n                </md-list-item>\r\n            </md-list>\r\n            <!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                Pour les utilisateurs d\'Internet Explorer:<br/>\r\nIl est recommand\xE9 d\'utiliser la version 9 ou ult\xE9rieure.<br/>\r\nSi vous avez une version plus ancienne, il est conseill\xE9 de mettre \xE0 jour votre navigateur.<br/>\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button md-autofocus class="md-primary" ng-click="closeDialog()">\r\n                        Sluiten\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';
var tip_nlBE_HTML = '<md-dialog aria-label="Zoektips">\r\n    <md-dialog-content id="searchtips">\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Zoektips</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-content>\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="md-list-item-text">\r\n                        Gebruik "" om te zoeken op exacte woordcombinatie: "global warming"\r\n                    </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik een * of ? om te zoeken op delen van woorden:\r\n                            <p style="padding-left:1em;">\r\n                                gun* vindt gun, guns, gunners, gunnery, gunning, enz.<br />\r\n                                wom?n vindt woman en women\r\n                            </p>\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik NOT (in hoofdletters) om een zoekterm uit te sluiten: celtic NOT Irish\r\n                        </div>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <div class="md-list-item-text">\r\n                            Gebruik haakjes om termen te groeperen: Shakespeare (tragedy OR sonnet). OR is in hoofletters\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n            <!--\r\n            <md-list class="md-dense" flex>\r\n                <md-list-item>\r\n                    <div class="demo-dialog-content">\r\n                        Voor gebruikers van Internet Explorer:<br />\r\n                        Limo wordt best bekeken via version 9 of hoger.<br />\r\n                        Gelieve uw browser te upgraden indien u over een lagere versie beschikt.<br />\r\n                        </div>\r\n                    </md-list-item>\r\n            </md-list>\r\n-->\r\n            <md-dialog-actions>\r\n                <div layout="row" class="demo-dialog-button">\r\n                    <md-button md-autofocus class="md-primary" ng-click="closeDialog()">\r\n                        Sluiten\r\n                    </md-button>\r\n                </div>\r\n            </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n';

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

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StaticFooterController = function StaticFooterController($scope, $http, $mdDialog, $element) {
    _classCallCheck(this, StaticFooterController);

    var self = this;
    var locale = "en_US";
    /*
            var locale = self.parentCtrl.parentCtrl.searchService.userSessionManagerService.i18nService.getLanguage();
            var vid = window.appConfig['vid'];
           //       $templateCache.put(staticFooterTemplateName, 'custom/CENTRAL_PACKAGE/html/templates/footer_' + locale + '.html');
    */
    $scope.getTemplateUrl = function () {
        return 'custom/CENTRAL_PACKAGE/html/templates/footer_' + locale + '.html';
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sourceIconHTML = '<style>\r\n  div.sourceid {\r\n    display: inline-flex;\r\n    margin-left: 1em;\r\n    margin-top: -2px;\r\n  }\r\n\r\n  div.sourceid img.source-icon {\r\n      display: inline-block;\r\n      max-height: 18px;\r\n      width: auto;\r\n      height: auto;\r\n      transform: none;\r\n      min-width: auto;\r\n      min-height: auto;\r\n      vertical-align: bottom;\r\n  }\r\n\r\n  div.sourceid span.source-text {\r\n      font-size:small;\r\n      margin-left: 0.4em;\r\n      text-transform: none;\r\n      letter-spacing: normal;\r\n  }\r\n</style>\r\n\r\n<div ng-if="$ctrl.sourceid" class="sourceid">\r\n  <img src="{{$ctrl.icon.iconUrl}}" class="source-icon">\r\n  <span class="source-text">{{$ctrl.icon.iconText}}</span>\r\n</div>\r\n';

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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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
        });
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

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* component to do all your experimental stuff */
/* [en|dis]able in components*/

var ExperimentController = function ExperimentController() {
  _classCallCheck(this, ExperimentController);

  console.log('Experiment:');
};

//ExperimentController.$inject = ['searchResults'];

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

var homeIconHTML = '<div id="home-buttons-holder"\r\n     ng-class="{\'fixed-to-top\': $ctrl.fixedToTop()}"\r\n     layout="row"\r\n     layout-align="center center"\r\n     class="layout-align-center-center layout-row">\r\n  <a class="md-icon-button button-over-dark md-button md-primoExplore-theme" id="home-button"\r\n     aria-label="Go to startpage"\r\n     href="{{ $ctrl.homePageLink }}">\r\n    <md-icon class="md-primoExplore-theme">\r\n      <svg id="prm_home" width="100%" height="100%" viewBox="0 0 24 24" y="0" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">\r\n    <path d="M10,20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\r\n    <path d="M0 0h24v24H0z" fill="none"/>\r\n    </svg>\r\n    </md-icon>\r\n  </a>\r\n</div>\r\n';

var HomeIconController = function HomeIconController($scope, $element, $compile, $http) {
  _classCallCheck(this, HomeIconController);

  var ctrl = this;

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

    ctrl.homePageLink = '/primo-explore/search?vid=' + vid + "&lang=" + locale;
  });
};

HomeIconController.$inject = ['$scope', '$element', '$compile', '$http'];

var homeIconConfig = exports.homeIconConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: HomeIconController,
  template: homeIconHTML
};

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var feedbackHTML = '\r\n  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\r\n             class="zero-margin flex-button multi-line-button button-over-dark"\r\n             layout="column" layout-align="center center" (click)="$ctrl.showFeedbackForm($event)"\r\n             aria-label="mainmenu.label.feedback">\r\n\r\n      <span class="item-content" translate="mainmenu.label.feedback"></span>\r\n      <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\r\n        <span class="item-description popover animate-popover"\r\n              translate="nui.mainmenu.description.feedback"></span>\r\n      </md-tooltip>\r\n  </md-button>\r\n';
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

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var promoteLoginHTML = '<!--\r\n<md-card class="default-card _md md-primoExplore-theme flex-xs-100 flex-sm-100" flex-sm="100" flex-xs="100" ng-show=\'$ctrl.showAutomaticLogin\'>\r\n  <md-card-content layout="column" layout-align="space-around center" class="layout-align-space-around-center layout-column">\r\n    <prm-primo-login label-type="text" layout="column" class="layout-column">\r\n    -->\r\n      <!--\r\n      <div>\r\n        <span translate="lbs.nui.mypref.automatic_login.title">Always Sign In</span>\r\n      </div>\r\n    -->\r\n      <md-checkbox tabindex="-1" disabled="disabled" \r\n      class="has-small-text zero-margin ng-pristine ng-untouched ng-valid md-primoExplore-theme ng-not-empty md-checked"\r\n       role="checkbox" aria-checked="true" aria-disabled="true" aria-invalid="false" \r\n       type="checkbox" ng-model="$ctrl.alwaysSigninCheckBox" ng-change="alwaysSigninChecked()"\r\n       ng-disabled="$ctrl.formMode == \'View\'">\r\n       <div class="layout-column" layout="column">\r\n          <span class="item-content" translate="lbs.nui.mypref.automatic_login.alwaysSigninOption"></span>\r\n       </div>\r\n      </md-checkbox>\r\n<!--\r\n    </prm-primo-login>\r\n    <md-divider class="card-divider layout-margin md-primoExplore-theme" layout-margin=""></md-divider>\r\n  </md-card-content>\r\n</md-card>\r\n-->\r\n\r\n';

var PromoteLoginController = function () {
  function PromoteLoginController($scope) {
    _classCallCheck(this, PromoteLoginController);

    var self = this;
    this.showAutomaticLogin = false;

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
    key: '$onInit',
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

},{}],12:[function(require,module,exports){
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
      if (document.querySelectorAll('pnx-xml-trigger').length == 0) {
        var div = document.createElement('pnx-xml-trigger');
        div.setAttribute('style', 'position:fixed;right:0;bottom:0;height:20px;width:20px;z-index:1000;background-color:black;opacity:.03');
        div.onclick = function (event) {
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

},{}],13:[function(require,module,exports){
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
        console.log(elementCtrl);
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{"./feedbackAnnouncementDialog":16}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{"../components/general/dialog":2}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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
var app = angular.module('centralCustom', ['ngMaterial']).constant('feedbackServiceURL', 'https://services.libis.be/feedback').config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
}).run(function ($templateCache) {
  //$templateCache.put('components/search/fullView/full-view.html', fullViewHTML);
}).factory('FeedService', _feedService.feedService).service('MessageService', _messageService2.default).service('FeedbackService', _feedbackService2.default);

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
      elements.push({ 'name': component.name, 'enableInView': component.enableInView });
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

},{"./components":1,"./factories/feedService":18,"./factories/feedbackService":19,"./factories/messageService":20,"./primo-explore-dom/js/primo":22,"./primo-explore-dom/js/primo/explore/helper":25}],22:[function(require,module,exports){
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

},{"./primo/explore":23,"./primo/explore/helper":25,"./primo/facets":26,"./primo/records":27,"./primo/user":28,"./primo/view":29}],23:[function(require,module,exports){
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

},{"./explore/components":24,"./explore/helper":25}],24:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":30,"./helper":25}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{"./explore/components":24,"./explore/helper":25}],27:[function(require,module,exports){
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

},{"./explore/components":24,"./explore/helper":25}],28:[function(require,module,exports){
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

},{"./explore/helper":25}],29:[function(require,module,exports){
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

},{"./explore/helper":25}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{}]},{},[21])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGRpYWxvZy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xcZ2VuZXJhbFxcc2VhcmNoVGlwLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxnZW5lcmFsXFxzdGF0aWNGb290ZXIuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUJyaWVmUmVzdWx0QWZ0ZXJcXHNvdXJjZUljb24uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUZpbmVzT3ZlcnZpZXdBZnRlclxccGF5TXlGaW5lcy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxiZXRhU3dpdGNoLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGV4cGVyaW1lbnQuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcaG9tZUljb24uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybU1haW5NZW51QWZ0ZXJcXGZlZWRiYWNrLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Qcm9tb3RlTG9naW5cXFByb21vdGVMb2dpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXJcXHBueFhtbC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtU2VydmljZUhlYWRlckFmdGVyXFxyZXBvcnRBUHJvYmxlbS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxhbm5vdW5jZW1lbnRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZlZWRiYWNrQW5ub3VuY2VtZW50LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZpbmVzTWVzc2FnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkYmFja1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGZhY3Rvcmllc1xcbWVzc2FnZVNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXG1haW4uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW8uanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmVcXGNvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXGV4cGxvcmVcXGhlbHBlci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZmFjZXRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFxyZWNvcmRzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFx1c2VyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFx2aWV3LmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHZlbmRvclxcY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdF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TyxFQUFFLE1BQUYsR0FBVyxFQUFFLE1BQXBCO0FBQ0QsT0FGUSxDQUFUO0FBR0EsZUFBUyxPQUFPLEdBQVAsQ0FBVyxVQUFTLElBQVQsRUFBZTtBQUNqQyxlQUFPLEtBQUssSUFBTCxDQUFVLEVBQVYsQ0FBUDtBQUNELE9BRlEsQ0FBVDtBQUdBLGFBQU8sTUFBUDtBQUNELEtBbkJEOztBQXFCQSxXQUFPLG9CQUFQO0FBRUQsR0FyU3NCLEVBQXZCOztBQXVTQSxNQUFJLE9BQU8sTUFBUCxLQUFrQixXQUFsQixJQUFpQyxXQUFXLElBQTVDLEdBQW1ELE9BQU8sR0FBMUQsR0FBZ0UsS0FBSyxDQUF6RSxFQUE0RTtBQUMxRSxXQUFPLEVBQVAsRUFBVyxZQUFXO0FBQ3BCLGFBQU8sb0JBQVA7QUFDRCxLQUZEO0FBR0QsR0FKRCxNQUlPO0FBQ0wsV0FBTyxPQUFPLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0MsWUFBWSxJQUE5QyxHQUFxRCxPQUFyRCxHQUErRCxJQUF0RTtBQUNBLFNBQUssb0JBQUwsR0FBNEIsb0JBQTVCO0FBQ0Q7QUFFRixDQXBURCxFQW9URyxJQXBUSDs7Ozs7QUNBQTs7Ozs7O0FBTUEsT0FBTyxTQUFQLENBQWlCLFdBQWpCLEdBQStCLFlBQVc7QUFDeEMsU0FBTyxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLENBQW9CLFVBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMO0FBQUEsV0FBWSxJQUFJLENBQUosR0FBUSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVksV0FBWixLQUE0QixFQUFFLEtBQUYsQ0FBUSxDQUFSLENBQXBDLEdBQWdELENBQTVEO0FBQUEsR0FBcEIsRUFBbUYsSUFBbkYsQ0FBd0YsRUFBeEYsQ0FBUDtBQUNELENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcclxuICBEZWNsYXJlIHlvdXIgY29tcG9uZW50cyBoZXJlLlxyXG5cclxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XHJcbiAgaHR0cDovLzJhbGl0eS5jb20vMjAxNy8wMS9pbXBvcnQtb3BlcmF0b3IuaHRtbFxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5pbXBvcnQgJy4vdXRpbHMnXHJcblxyXG4vKiBpbXBvcnQgeW91ciBjb21wb25lbnQgY29uZmlndXJhdGlvbiovXHJcbmltcG9ydCB7ZXhwZXJpbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9leHBlcmltZW50J1xyXG5pbXBvcnQge2hvbWVJY29uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL2hvbWVJY29uJ1xyXG5pbXBvcnQge2JldGFTd2l0Y2hDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvYmV0YVN3aXRjaCdcclxuaW1wb3J0IHtzb3VyY2VJY29uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9zb3VyY2VJY29uJ1xyXG5pbXBvcnQge3BueFhtbENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyL3BueFhtbCdcclxuaW1wb3J0IHtwYXlNeUZpbmVzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmluZXNPdmVydmlld0FmdGVyL3BheU15RmluZXMnXHJcbmltcG9ydCB7ZmVlZGJhY2tDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1NYWluTWVudUFmdGVyL2ZlZWRiYWNrJ1xyXG5pbXBvcnQge3NlYXJjaFRpcENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvc2VhcmNoVGlwJ1xyXG5pbXBvcnQge3JlcG9ydEFQcm9ibGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VydmljZUhlYWRlckFmdGVyL3JlcG9ydEFQcm9ibGVtJ1xyXG5pbXBvcnQge2ZpbmVzTWVzc2FnZUNvbmZpZyBhcyBwYXlNeUZpbmVzTWVzc2FnZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9maW5lc01lc3NhZ2UnXHJcbmltcG9ydCB7YW5ub3VuY2VtZW50c0NvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9hbm5vdW5jZW1lbnRzJ1xyXG5pbXBvcnQge3Byb21vdGVMb2dpbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVByb21vdGVMb2dpbi9Qcm9tb3RlTG9naW4nXHJcbmltcG9ydCB7ZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmVlZGJhY2tBbm5vdW5jZW1lbnQnXHJcbmltcG9ydCB7c3RhdGljRm9vdGVyQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9zdGF0aWNGb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlckNvbXBvbmVudHMge1xyXG5cclxuICBzdGF0aWMgZ2V0IGFsbCgpIHtcclxuICAgIC8qXHJcbiAgICAgIG5hbWUgPSB0aGUgc3ViIGVsZW1lbnQgaW4gdGhlIGFmdGVyIGVsZW1lbnRcclxuICAgICAgY29uZmlnID0gdGhlIGltcG9ydGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XHJcbiAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcclxuICAgICAgYXBwZW5kVG8gPSBUaGUgY29tcG9uZW50IHNob3VsZCBiZSBjcmVhdGVkIGluIHRoaXMgYWZ0ZXIgY29tcG9uZW50LlxyXG5cclxuICAgICAgZXguIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9XHJcbiAgICAgIHJlc3VsdHMgaW46XHJcbiAgICAgICAgPHBybS1sb2dvLWFmdGVyIHBhcmVudEN0cmw9JyRjdHJsJz5cclxuICAgICAgICAgIDxob21lLWljb24gcGFyZW50Q3RybD0nJGN0cmwnPjwvaG9tZS1pY29uPlxyXG4gICAgICAgIDwvcHJtLWxvZ28tYWZ0ZXI+XHJcbiAgICAqL1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge25hbWU6ICdsaWJpcy1leHBlcmltZW50JywgY29uZmlnOiBleHBlcmltZW50Q29uZmlnLCBlbmFibGVkOiBmYWxzZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnYmV0YS1zd2l0Y2gnLCBjb25maWc6IGJldGFTd2l0Y2hDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3NvdXJjZS1pY29uJywgY29uZmlnOiBzb3VyY2VJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3BueC14bWwnLCBjb25maWc6IHBueFhtbENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzJywgY29uZmlnOiBwYXlNeUZpbmVzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1maW5lcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1tYWluLW1lbnUtYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3JlcG9ydC1hLXByb2JsZW0nLCBjb25maWc6IHJlcG9ydEFQcm9ibGVtQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1zZXJ2aWNlLWhlYWRlci1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAncHJtLXNlYXJjaHRpcHMnLCBjb25maWc6IHNlYXJjaFRpcENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGwsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcbiAgICAgIHtuYW1lOiAnc3RhdGljLWZvb3RlcicsIGNvbmZpZzogc3RhdGljRm9vdGVyQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1leHBsb3JlLW1haW4tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxyXG4gICAgICB7bmFtZTogJ3N0YXRpYy1mb290ZXItYWNjb3VudCcsIGNvbmZpZzogc3RhdGljRm9vdGVyQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1hY2NvdW50LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcclxuICAgICAgXHJcbiAgICAgIC8qIGxicy1jb21wb25lbnRzIHVzZWQgaW4gaHRtbC10ZW1wbGF0ZXMgb2YgdGhlIHBhY2thZ2UgKi9cclxuICAgICAge25hbWU6ICdwcm9tb3RlLWxvZ2luLXN0YXRpYy1mb290ZXInLCBjb25maWc6IHByb21vdGVMb2dpbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdsYnMtcHJvbW90ZS1sb2dpbicsIGVuYWJsZUluVmlldzogICdeS1VMZXV2ZW4nfSxcclxuXHJcbiAgICAgIHtuYW1lOiAnYW5ub3VuY2VtZW50LWZlZWRiYWNrJywgY29uZmlnOiBmZWVkYmFja0Fubm91bmNlbWVudENvbmZpZywgZW5hYmxlZDp0cnVlLCBhcHBlbmRUbzogJ3BybS10b3AtYmFyLWJlZm9yZScsIGVuYWJsZUluVmlldzogJy4qJ30sXHJcblxyXG4gICAgICB7bmFtZTogJ2Fubm91bmNlbWVudCcsIGNvbmZpZzogYW5ub3VuY2VtZW50c0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICcuKid9LCAgICAgIFxyXG4gICAgICB7bmFtZTogJ3BheS1teS1maW5lcy1tZXNzYWdlJywgY29uZmlnOiBwYXlNeUZpbmVzTWVzc2FnZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICdeS1VMZXV2ZW4nfVxyXG4gICAgXS5maWx0ZXIoIChjb21wb25lbnQpID0+ICggY29tcG9uZW50LmVuYWJsZWQgJiYgbmV3IFJlZ0V4cChjb21wb25lbnQuZW5hYmxlSW5WaWV3KS50ZXN0KHdpbmRvdy5hcHBDb25maWcudmlkKSApICk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZ0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJGh0dHAsIGZlZWRiYWNrU2VydmljZVVSTCkge1xyXG4gICAgdGhpcy5zY29wZSA9ICRzY29wZTtcclxuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XHJcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgIHRoaXMuaHR0cCA9ICRodHRwO1xyXG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwgPSBmZWVkYmFja1NlcnZpY2VVUkw7XHJcblxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICRzY29wZS5jYW5jZWxGZWVkYmFjayA9ICgpID0+IHtcclxuICAgICAgdGhpcy5tZERpYWxvZy5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gdGhpcy5zZW5kRmVlZGJhY2s7XHJcbiAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gKGFuc3dlcikgPT4ge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBzdWJqZWN0OiAkc2NvcGUuZmVlZGJhY2suc3ViamVjdCxcclxuICAgICAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXHJcbiAgICAgICAgICAgIGluc3Q6IHNlbGYudmlldy5pbnN0aXR1dGlvbi5jb2RlLFxyXG4gICAgICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcclxuICAgICAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXHJcbiAgICAgICAgICAgIHVzZXI6IHNlbGYudXNlci5uYW1lLFxyXG4gICAgICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgIHR5cGU6ICdmZWVkYmFjaycsXHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiAkc2NvcGUuZmVlZGJhY2subWVzc2FnZSxcclxuICAgICAgICAgICAgZW1haWw6ICRzY29wZS5mZWVkYmFjay5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKCRzY29wZS5mZWVkYmFjay5yZXBseVRvLmxlbmd0aCA+IDAgJiYgJHNjb3BlLmZlZWRiYWNrLm1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZWxmLm1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuaHR0cCh7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgdXJsOiB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCxcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ1gtRnJvbS1FeEwtQVBJLUdhdGV3YXknOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICBzZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIHNlbGYubWRUb2FzdC5zaG93U2ltcGxlKCdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgc2VsZi52aWV3ID0gdmlldztcclxuICAgICAgICAkc2NvcGUuZmVlZGJhY2sgPSB7XHJcbiAgICAgICAgICByZXBseVRvOiBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgIHN1YmplY3Q6ICdmZWVkYmFjaydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuRGlhbG9nQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyRodHRwJywgJ2ZlZWRiYWNrU2VydmljZVVSTCddO1xyXG4iLCJpbXBvcnQgc2VhcmNoVGlwSFRNTCBmcm9tICcuL3NlYXJjaFRpcC5odG1sJ1xyXG5pbXBvcnQgdGlwX2VuVVNfSFRNTCBmcm9tICcuL3NlYXJjaFRpcC9lblVTLmh0bWwnXHJcbmltcG9ydCB0aXBfZnJGUl9IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2ZyRlIuaHRtbCdcclxuaW1wb3J0IHRpcF9ubEJFX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvbmxCRS5odG1sJ1xyXG5cclxuY2xhc3MgU2VhcmNoVGlwQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJG1kRGlhbG9nKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuXHJcbiAgICAgIGxldCBsb2NhbGVfdGV4dCA9IHtcclxuICAgICAgICAnbmxfQkUnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnWm9la3RpcHMnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJab2VrdGlwcyB3ZWVyZ2V2ZW5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2VuX1VTJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ1NlYXJjaCBUaXBzJyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiU2VhcmNoIFRpcHNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2ZyX0ZSJzoge1xyXG4gICAgICAgICAgJ3RpdGxlJzogJ0FzdHVjZXM/JyxcclxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQXN0dWNlcz9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCB0aXBzSFRNTCA9IHRpcF9lblVTX0hUTUw7XHJcbiAgICAgIHN3aXRjaCAobG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZnJfRlInOlxyXG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfZnJGUl9IVE1MO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbmxfQkUnOlxyXG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfbmxCRV9IVE1MO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRpcHNIVE1MID0gdGlwX2VuVVNfSFRNTDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJHNjb3BlLnRpdGxlID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGUnXTtcclxuICAgICAgJHNjb3BlLnRpdGxlX2xhYmVsID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGVfbGFiZWwnXTtcclxuXHJcbiAgICAgICRzY29wZS5zaG93U2VhcmNoVGlwcyA9IGZ1bmN0aW9uKCRldmVudCkge1xyXG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudEVsLFxyXG4gICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgIHRlbXBsYXRlOiB0aXBzSFRNTCxcclxuICAgICAgICAgIGxvY2Fsczoge1xyXG4gICAgICAgICAgICBpdGVtczogJHNjb3BlLml0ZW1zXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBEaWFsb2dDb250cm9sbGVyKCRzY29wZSwgJG1kRGlhbG9nLCBpdGVtcykge1xyXG4gICAgICAgICRzY29wZS5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgICRzY29wZS5jbG9zZURpYWxvZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuU2VhcmNoVGlwQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJ11cclxuXHJcbmV4cG9ydCBsZXQgc2VhcmNoVGlwQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFNlYXJjaFRpcENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHNlYXJjaFRpcEhUTUxcclxufVxyXG4iLCJcclxuY2xhc3MgU3RhdGljRm9vdGVyQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2csICRlbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsb2NhbGUgPSBcImVuX1VTXCJcclxuLypcclxuICAgICAgICB2YXIgbG9jYWxlID0gc2VsZi5wYXJlbnRDdHJsLnBhcmVudEN0cmwuc2VhcmNoU2VydmljZS51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcbiAgICAgICAgdmFyIHZpZCA9IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xyXG4gICAgICAgLy8gICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KHN0YXRpY0Zvb3RlclRlbXBsYXRlTmFtZSwgJ2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvaHRtbC90ZW1wbGF0ZXMvZm9vdGVyXycgKyBsb2NhbGUgKyAnLmh0bWwnKTtcclxuKi9cclxuICAgICAgICAkc2NvcGUuZ2V0VGVtcGxhdGVVcmwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9odG1sL3RlbXBsYXRlcy9mb290ZXJfJyArIGxvY2FsZSArICcuaHRtbCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5TdGF0aWNGb290ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnLCAnJGVsZW1lbnQnXVxyXG5cclxuZXhwb3J0IGxldCBzdGF0aWNGb290ZXJDb25maWcgPSB7XHJcbiAgICBiaW5kaW5nczoge1xyXG4gICAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IFN0YXRpY0Zvb3RlckNvbnRyb2xsZXIsXHJcbiAgICB0ZW1wbGF0ZTogJzxuZy1pbmNsdWRlIHNyYz1cImdldFRlbXBsYXRlVXJsKClcIi8+JyxcclxufVxyXG4iLCJpbXBvcnQgc291cmNlSWNvbkhUTUwgZnJvbSAnLi9zb3VyY2VJY29uLmh0bWwnXHJcblxyXG5jbGFzcyBTb3VyY2VJY29uQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHZhciBwYXJlbnRDdHJsID0gJHNjb3BlLiRwYXJlbnQuJGN0cmwucGFyZW50Q3RybDtcclxuICAgIHZhciBpY29uQ29uZiA9IFt7XHJcbiAgICAgICdzb3VyY2VpZCc6ICdsaXJpYXMnLFxyXG4gICAgICAnaWNvblVybCc6ICcvL2xpbW8ubGliaXMuYmUvcHJpbW9fbGlicmFyeS9saWJ3ZWIvbGliaXMvaW1hZ2VzL2xpcmlhcy5qcGcnLFxyXG4gICAgICAnaWNvblRleHQnOiAnTGlyaWFzJ1xyXG4gICAgfV07XHJcblxyXG4gICAgdmFyIGljb25Db25mU291cmNlcyA9IGljb25Db25mLm1hcChvYmogPT4gb2JqLnNvdXJjZWlkKTtcclxuXHJcbiAgICBzZWxmLnNvdXJjZWlkID0gbnVsbDtcclxuICAgIGlmICgnc291cmNlaWQnIGluIHBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbCkge1xyXG4gICAgICBzZWxmLnNvdXJjZWlkID0gcGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnNvdXJjZWlkWzBdO1xyXG5cclxuICAgICAgaWYgKGljb25Db25mU291cmNlcy5pbmNsdWRlcyhzZWxmLnNvdXJjZWlkKSkge1xyXG4gICAgICAgIHNlbGYuaWNvbiA9IGljb25Db25mLmZpbmQoZnVuY3Rpb24oeCkge1xyXG4gICAgICAgICAgcmV0dXJuIHguc291cmNlaWQgPT09IHNlbGYuc291cmNlaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdkaXYnKS5hcHBlbmQoJGNvbXBpbGUoc291cmNlSWNvbkhUTUwpKCRzY29wZSkpO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblNvdXJjZUljb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICckY29tcGlsZSddO1xyXG5cclxuZXhwb3J0IGxldCBzb3VyY2VJY29uQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFNvdXJjZUljb25Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCBwYXlNeUZpbmVzSFRNTCBmcm9tICcuL3BheU15RmluZXMuaHRtbCdcclxuXHJcbmNsYXNzIFBheU15RmluZXNDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuc2hvd1BheU15RmluZXMgPSBmYWxzZTsgIFxyXG4gIH1cclxuXHJcbiAgJG9uSW5pdCgpIHtcclxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgaWYgKC9eS1VMZXV2ZW4vLnRlc3Qodmlldy5jb2RlKSkge1xyXG4gICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgIGlmICh1c2VyLmZpbmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UGF5TXlGaW5lcyA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBsZXQgcGF5TXlGaW5lc0NvbmZpZyA9IHtcclxuICBiaW5kaW5nczp7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFBheU15RmluZXNDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBwYXlNeUZpbmVzSFRNTFxyXG59XHJcbiIsImltcG9ydCBiZXRhU3dpdGNoSFRNTCBmcm9tICcuL2JldGFTd2l0Y2guaHRtbCdcclxuXHJcbmNsYXNzIEJldGFTd2l0Y2hDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuJHNjb3BlID0gJHNjb3BlO1xyXG5cclxuICAgICRzY29wZS5zaG93QmV0YVN3aXRjaCA9IHRydWU7XHJcbiAgICAkc2NvcGUudXNlQmV0YSA9IHRydWU7ICBcclxuXHJcbiAgICAkc2NvcGUub25DaGFuZ2VVc2VCZXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoISAkc2NvcGUudXNlQmV0YSl7XHJcbiAgICAgICAgc2VsZi5nb1RvT2xkVUkoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdvVG9PbGRVSSgpIHtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9Jy9wcmltb19saWJyYXJ5L2xpYndlYi9hY3Rpb24vc2VhcmNoLmRvP3ZpZD0nKyB0aGlzLm9sZFZpZDtcclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICB2YXIgTGlua1RvQmV0YVZpZXdzID0ge1xyXG4gICAgICAnQUNWJzonQUNWJyxcclxuICAgICAgJ0JQQic6J0JQQicsXHJcbiAgICAgICdGQVJPJzonRkFSTycsXHJcbiAgICAgICdGT0RGSU4nOidGT0RGSU4nICxcclxuICAgICAgJ0dDTEQnOidHQ0xEJyxcclxuICAgICAgJ0dTQic6J0dTQicsXHJcbiAgICAgICdHU0cnOidHU0cnLFxyXG4gICAgICAnSU1FQyc6J0lNRUMnLFxyXG4gICAgICAnS0FET0MnOidLQURPQycsXHJcbiAgICAgICdLQkMnOidLQkMnLFxyXG4gICAgICAnS01LRyc6J0tNS0cnLFxyXG4gICAgICAnS1VMZXV2ZW4nOidLVUxldXZlbl9VWCcsXHJcbiAgICAgICdMSUJBUic6J0xJQkFSJyxcclxuICAgICAgJ0xVQ0EnOidMVUNBX1VYJyxcclxuICAgICAgJ05CQic6J05CQicsXHJcbiAgICAgICdPRElTRUUnOidPRElTRUVfVVgnLFxyXG4gICAgICAnT0ZPJzonT0ZPJyxcclxuICAgICAgJ1JCSU5TJzonUkJJTlMnLFxyXG4gICAgICAnUkVMSSc6J1JFTEknLFxyXG4gICAgICAnUk1DQSc6J1JNQ0EnLFxyXG4gICAgICAnU0VSVic6J1NFUlYnLFxyXG4gICAgICAnVE1PUkVLJzonVE1PUkVLX1VYJyxcclxuICAgICAgJ1RNT1JFTSc6J1RNT1JFTUFfVVgnLFxyXG4gICAgICAnVkRJQyc6J1ZESUMnLFxyXG4gICAgICAnVklWRVNfS0FUSE8nOidWSVZFU19LQVRIT19VWCcsXHJcbiAgICAgICdWSVZFU19LSEJPJzonVklWRVNfS0hCT19VWCcsXHJcbiAgICAgICdWTFAnOidWTFAnLFxyXG4gICAgICAnS1VMZXV2ZW5fVE1PUkVNJzonS1VMZXV2ZW5fVE1PUkVNX1VYJyxcclxuICAgICAgJ0tVTGV1dmVuX1VDTEwnOidLVUxldXZlbl9VQ0xMX1VYJyxcclxuICAgICAgJ0tVTGV1dmVuX1RNT1JFSyc6J0tVTGV1dmVuX1RNT1JFS19VWCcsXHJcbiAgICAgICdLVUxldXZlbl9MVUNBJzonS1VMZXV2ZW5fTFVDQV9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9WSVZFU19LSEJPJzonS1VMZXV2ZW5fVklWRVNfS0hCT19VWCcsXHJcbiAgICAgICdLVUxldXZlbl9PRElTRUUnOidLVUxldXZlbl9PRElTRUVfVVgnLFxyXG4gICAgICAnS0hMSU0nOidVQ0xMX0xJTUJVUkdfVVgnLFxyXG4gICAgICAnS0hMJzonVUNMTF9MRVVWRU5fVVgnXHJcbiAgICB9XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBpZiAoL15FQ0IvLnRlc3Qodmlldy5jb2RlKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0JldGFTd2l0Y2ggPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9sZFZpZCA9IE9iamVjdC5rZXlzKExpbmtUb0JldGFWaWV3cykuZmluZChrZXkgPT4gTGlua1RvQmV0YVZpZXdzW2tleV0gPT09IHZpZXcuY29kZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGJldGFTd2l0Y2hDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogQmV0YVN3aXRjaENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGJldGFTd2l0Y2hIVE1MXHJcbn1cclxuIiwiLyogY29tcG9uZW50IHRvIGRvIGFsbCB5b3VyIGV4cGVyaW1lbnRhbCBzdHVmZiAqL1xyXG4vKiBbZW58ZGlzXWFibGUgaW4gY29tcG9uZW50cyovXHJcblxyXG5jbGFzcyBFeHBlcmltZW50Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRXhwZXJpbWVudDonKTtcclxuICB9XHJcbn1cclxuXHJcbi8vRXhwZXJpbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnc2VhcmNoUmVzdWx0cyddO1xyXG5cclxuZXhwb3J0IGxldCBleHBlcmltZW50Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEV4cGVyaW1lbnRDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCBob21lSWNvbkhUTUwgZnJvbSAnLi9ob21lSWNvbi5odG1sJ1xyXG5cclxuY2xhc3MgSG9tZUljb25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHApIHtcclxuICAgIGxldCBjdHJsID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7IC8vd2luZG93LlByaW1vLmV4cGxvcmUuaGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAgICAgbGV0IGxpYnJhcnlMb2dvID0gd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvO1xyXG4gICAgICBsZXQgbG9jYWxlTGlicmFyeUxvZ28gPSAnY3VzdG9tLycgKyB2aWQgKyAnL2ltZy9saWJyYXJ5LWxvZ28tJyArIGxvY2FsZSArICcucG5nJztcclxuXHJcbiAgICAgIGlmIChsaWJyYXJ5TG9nbyAhPT0gbG9jYWxlTGlicmFyeUxvZ28pIHtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgdXJsOiBsb2NhbGVMaWJyYXJ5TG9nbyxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsb2NhbGVMaWJyYXJ5TG9nbztcclxuICAgICAgICAgICRjb21waWxlKCRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpKSgkc2NvcGUpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN0cmwuaG9tZVBhZ2VMaW5rID0gJy9wcmltby1leHBsb3JlL3NlYXJjaD92aWQ9JyArIHZpZCArIFwiJmxhbmc9XCIgKyBsb2NhbGU7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkhvbWVJY29uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnXTtcclxuXHJcbmV4cG9ydCBsZXQgaG9tZUljb25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogSG9tZUljb25Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBob21lSWNvbkhUTUxcclxufSIsImltcG9ydCBmZWVkYmFja0hUTUwgZnJvbSAnLi9mZWVkYmFjay5odG1sJ1xyXG5pbXBvcnQgZmVlZGJhY2tEaWFsb2dIVE1MIGZyb20gJy4vZmVlZGJhY2tEaWFsb2cuaHRtbCdcclxuXHJcbmNsYXNzIEZlZWRiYWNrQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsIEZlZWRiYWNrU2VydmljZSl7XHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdkaXYnKS5hcHBlbmQoJGNvbXBpbGUoZmVlZGJhY2tIVE1MKSgkc2NvcGUpKTtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlID0gRmVlZGJhY2tTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgc2hvd0ZlZWRiYWNrRm9ybSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLnNob3coJGV2ZW50LCBmZWVkYmFja0RpYWxvZ0hUTUwpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkZlZWRiYWNrQ29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnRmVlZGJhY2tTZXJ2aWNlJ107XHJcblxyXG5leHBvcnQgbGV0IGZlZWRiYWNrQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEZlZWRiYWNrQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgcHJvbW90ZUxvZ2luSFRNTCBmcm9tICcuL3Byb21vdGVMb2dpbkNvbmZpZy5odG1sJ1xyXG5cclxuY2xhc3MgUHJvbW90ZUxvZ2luQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLnNob3dBdXRvbWF0aWNMb2dpbiA9IGZhbHNlOyAgXHJcblxyXG4gICAgc2VsZi5hbHdheXNTaWduaW5DaGVja0JveCA9IGZhbHNlO1xyXG4gICAgc2VsZi5hbHdheXNTaWduaW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByaW1vUHJvbW90ZUxvZ2luXCIpO1xyXG4gICAgaWYgKHNlbGYuYWx3YXlzU2lnbmluKSB7XHJcbiAgICAgIHNlbGYuYWx3YXlzU2lnbmluQ2hlY2tCb3ggPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5hbHdheXNTaWduaW5DaGVja2VkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICggc2VsZi5hbHdheXNTaWduaW5DaGVja0JveCApe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmltb1Byb21vdGVMb2dpbicsICdhbHdheXNTaWduaW4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGlmICgvXktVTGV1dmVuLy50ZXN0KHZpZXcuY29kZSkpIHtcclxuICAgICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNob3dBdXRvbWF0aWNMb2dpbiA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zaG93QXV0b21hdGljTG9naW4gPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwcm9tb3RlTG9naW5Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6e1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBQcm9tb3RlTG9naW5Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBwcm9tb3RlTG9naW5IVE1MXHJcbn1cclxuIiwiaW1wb3J0IHBueFhtbEhUTUwgZnJvbSAnLi9wbnhYbWwuaHRtbCdcclxuY2xhc3MgUG54WG1sQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGhpcy5yZWNvcmRpZCA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wucmVjb3JkaWRbMF07XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgdGhpcy5yZWNvcmRpZCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCl7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncG54LXhtbC10cmlnZ2VyJykubGVuZ3RoID09IDApIHtcclxuICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BueC14bWwtdHJpZ2dlcicpO1xyXG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpmaXhlZDtyaWdodDowO2JvdHRvbTowO2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7ei1pbmRleDoxMDAwO2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouMDMnKTtcclxuICAgICAgZGl2Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZWxmLnZpc2libGUgPSAhc2VsZi52aXNpYmxlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcclxuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNlbGYudmlzaWJsZSA/ICdmbGV4JyA6ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgcG54WG1sQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzIDoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBQbnhYbWxDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBwbnhYbWxIVE1MXHJcbn1cclxuIiwiaW1wb3J0IHJlcG9ydEFQcm9ibGVtSFRNTCBmcm9tICcuL3JlcG9ydEFQcm9ibGVtLmh0bWwnXHJcbmltcG9ydCByZXBvcnRBUHJvYmxlbURpYWxvZ0hUTUwgZnJvbSAnLi9yZXBvcnRBUHJvYmxlbURpYWxvZy5odG1sJ1xyXG5cclxuY2xhc3MgUmVwb3J0QVByb2JsZW1Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJGh0dHApIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICgvXm51aVxcLmdldGl0XFwuLy50ZXN0KHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnRpdGxlKSkge1xyXG4gICAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdoNCcpLmFmdGVyKCRjb21waWxlKHJlcG9ydEFQcm9ibGVtSFRNTCkoJHNjb3BlKSk7XHJcblxyXG4gICAgICBsZXQgcmVjb3JkRGF0YSA9IHNlbGYuY3VycmVudFJlY29yZDtcclxuXHJcbiAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XHJcblxyXG4gICAgICAgICAgc2VsZi5zaG93UmVwb3J0QVByb2JsZW1Gb3JtID0gKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAkbWREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXHJcbiAgICAgICAgICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiByZXBvcnRBUHJvYmxlbURpYWxvZ0hUTUwsXHJcbiAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCAkbWREaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5yZXBvcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICdyZXBvcnQgYSBwcm9ibGVtJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhbmNlbFJlcG9ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAkbWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VuZFJlcG9ydCA9IGZ1bmN0aW9uKGFuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5yZWNvcmRpZFswXSxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoVHlwZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbklkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhYjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlY29yZERhdGEucG54LmRpc3BsYXkudGl0bGVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Jlc291cmNlX3Byb2JsZW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICRzY29wZS5yZXBvcnQuc3ViamVjdCxcclxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBmZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgaXA6IHNlbGYudmlldy5pcC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICRzY29wZS5yZXBvcnQubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICByZXBseVRvOiAkc2NvcGUucmVwb3J0LnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnJlcG9ydC5yZXBseVRvLmxlbmd0aCA+IDAgJiYgJHNjb3BlLnJlcG9ydC5tZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL3JlcG9ydF9hX3Byb2JsZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtRnJvbS1FeEwtQVBJLUdhdGV3YXknOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBzZWxmLnRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLmZlZWRiYWNrLnN1Y2Nlc3MnKSB8fCAnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrISc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suZmFpbCcpIHx8ICdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9OyAvL3Nob3dSZXBvcnRBUHJvYmxlbUZvcm1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY3VycmVudFJlY29yZCgpIHtcclxuICAgIGxldCBzZWxlY3RvciA9ICdwcm0tZnVsbC12aWV3LXNlcnZpY2UtY29udGFpbmVyJzsgLy8ncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcidcclxuICAgIGxldCBlbGVtZW50ID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKTtcclxuICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgIGxldCBlbGVtZW50Q3RybCA9IGVsZW1lbnQuY29udHJvbGxlcihzZWxlY3Rvcik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRDdHJsKTtcclxuICAgICAgcmV0dXJuIGVsZW1lbnRDdHJsLml0ZW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcblJlcG9ydEFQcm9ibGVtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyRodHRwJ107XHJcblxyXG5leHBvcnQgbGV0IHJlcG9ydEFQcm9ibGVtQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJjbGFzcyBBbm5vdW5jZW1lbnRzQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgTWVzc2FnZVNlcnZpY2Uuc2hvdygnJywgJHNjb3BlKTtcclxuICB9XHJcbn1cclxuXHJcbkFubm91bmNlbWVudHNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICdNZXNzYWdlU2VydmljZSddO1xyXG5cclxuZXhwb3J0IGxldCBhbm5vdW5jZW1lbnRzQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcclxuICBjb250cm9sbGVyOiBBbm5vdW5jZW1lbnRzQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJpbXBvcnQgZmVlZGJhY2tBbm5vdW5jZW1lbnRIVE1MIGZyb20gJy4vZmVlZGJhY2tBbm5vdW5jZW1lbnQuaHRtbCdcclxuaW1wb3J0IGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nSFRNTCBmcm9tICcuL2ZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nLmh0bWwnXHJcbmltcG9ydCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIgZnJvbSAnLi9mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZydcclxuXHJcbmNsYXNzIEZlZWRiYWNrQW5ub3VuY2VtZW50Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkdGltZW91dCwgRmVlZGJhY2tTZXJ2aWNlLCBNZXNzYWdlU2VydmljZSwgYWN0aW9uSWNvbnMpIHtcclxuXHJcbiAgICAvLyR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgLy9sZXQgbWVzc2FnZSA9ICR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5zdXJ2ZXkuYW5ub3VuY2VtZW50Jyk7XHJcbiAgICAgIGxldCBzaG93RmVlZGJhY2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJpbW9GZWVkYmFjaycpO1xyXG4gICAgICBpZiAoc2hvd0ZlZWRiYWNrID09IG51bGwpIHtcclxuICAgICAgICAkdHJhbnNsYXRlKCdsYnMubnVpLnN1cnZleS5hbm5vdW5jZW1lbnQnKS50aGVuKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KGZlZWRiYWNrQW5ub3VuY2VtZW50SFRNTC5yZXBsYWNlKCd7e21lc3NhZ2V9fScsIG1lc3NhZ2UpLCB7XHJcbiAgICAgICAgICAgIHNjb3BlOiAkc2NvcGUsXHJcbiAgICAgICAgICAgIGhpZGVEZWxheTogMCxcclxuICAgICAgICAgICAgYWN0aW9uTGFiZWw6ICR0cmFuc2xhdGUuaW5zdGFudCgnbWFpbm1lbnUubGFiZWwuZmVlZGJhY2snKSB8fCAnRmVlZGJhY2snLFxyXG4gICAgICAgICAgICBhY3Rpb246XHJcbiAgICAgICAgICAgICAgKCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgRmVlZGJhY2tTZXJ2aWNlLnNob3coJGV2ZW50LCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0hUTUwsIGZlZWRiYWNrQW5ub3VuY2VtZW50RGlhbG9nQ29udHJvbGxlcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIC8vfSwgMjAwMCk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuRmVlZGJhY2tBbm5vdW5jZW1lbnRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckdHJhbnNsYXRlJywgJyR0aW1lb3V0JywgJ0ZlZWRiYWNrU2VydmljZScsICdNZXNzYWdlU2VydmljZScsICdhY3Rpb25JY29ucyddO1xyXG5cclxuZXhwb3J0IGxldCBmZWVkYmFja0Fubm91bmNlbWVudENvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBGZWVkYmFja0Fubm91bmNlbWVudENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICR0cmFuc2xhdGUsICRodHRwLCBmZWVkYmFja1NlcnZpY2VVUkwsIE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNjb3BlID0gJHNjb3BlO1xyXG4gICAgdGhpcy5tZERpYWxvZyA9ICRtZERpYWxvZztcclxuICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xyXG4gICAgdGhpcy5odHRwID0gJGh0dHA7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XHJcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCA9IGZlZWRiYWNrU2VydmljZVVSTDtcclxuXHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgJHNjb3BlLmNhbmNlbEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLm1kRGlhbG9nLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5zZW5kRmVlZGJhY2sgPSAoYW5zd2VyKSA9PiB7XHJcbiAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIHN1YmplY3Q6ICRzY29wZS5mZWVkYmFjay5zdWJqZWN0LFxyXG4gICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxyXG4gICAgICAgIGluc3Q6IHNlbGYudmlldy5pbnN0aXR1dGlvbi5jb2RlLFxyXG4gICAgICAgIGxvZ2dlZEluOiBzZWxmLnVzZXIuaXNMb2dnZWRJbigpLFxyXG4gICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxyXG4gICAgICAgIHVzZXI6IHNlbGYudXNlci5uYW1lLFxyXG4gICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcclxuICAgICAgICB0eXBlOiAnc3VydmV5JyxcclxuICAgICAgICBmZWVkYmFjazogJHNjb3BlLmZlZWRiYWNrLmFuc3dlcnMsXHJcbiAgICAgICAgZW1haWw6ICRzY29wZS5mZWVkYmFjay5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICB1c2VySWQ6IHNlbGYudXNlci5pZCB8fCAnJyxcclxuICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICgkc2NvcGUuZmVlZGJhY2sucmVwbHlUby5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2VsZi5tZERpYWxvZy5oaWRlKCk7XHJcblxyXG4gICAgICAgIHNlbGYuaHR0cCh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHVybDogdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmltb0ZlZWRiYWNrJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJztcclxuICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAvL3NlbGYubWRUb2FzdC5zaG93U2ltcGxlKCdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJyk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJztcclxuICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XHJcbiAgICAgICAgICAvL3NlbGYubWRUb2FzdC5zaG93U2ltcGxlKCdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgc2VsZi52aWV3ID0gdmlldztcclxuICAgICAgICAkc2NvcGUuZmVlZGJhY2sgPSB7XHJcbiAgICAgICAgICByZXBseVRvOiBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICBhbnN3ZXJzOiBbXSxcclxuICAgICAgICAgIHN1YmplY3Q6ICdmZWVkYmFjaydcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckdHJhbnNsYXRlJywgJyRodHRwJywgJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdNZXNzYWdlU2VydmljZSddO1xyXG4iLCJjbGFzcyBGaW5lc01lc3NhZ2VDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcihNZXNzYWdlU2VydmljZSwgJHRyYW5zbGF0ZSwgJHJvb3RTY29wZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBzZWxmLnVzZXIgPSB1c2VyO1xyXG4gICAgICBpZiAodXNlci5maW5lcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy9UT0RPOmV4dHJhY3QgaHRtbCB0byBpdHMgb3duIGZpbGUuIGZpbmQgb3V0IGhvdyB0byByZXNvbHZlIHt7fX1cclxuXHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkueW91SGF2ZUZpbmVzJyk7XHJcbiAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgvXFwkMC8sIHVzZXIuZmluZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbGV0IHBheSA9ICR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS55b3VIYXZlRmluZXMucGF5Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhgXHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiYWxpZ24tc2VsZjpjZW50ZXI7XCI+JHttZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGEgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87Y29sb3I6IHdoaXRlO1wiXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibWQtYnV0dG9uIG1kLXJhaXNlZCBtZC1zZWN1bmRhcnlcIiB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9wYXlfbXlfZmluZXMnPiR7cGF5fTwvYT5cclxuICAgICAgICAgIGApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkZpbmVzTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnTWVzc2FnZVNlcnZpY2UnLCAnJHRyYW5zbGF0ZScsICckcm9vdFNjb3BlJ107XHJcblxyXG5leHBvcnQgbGV0IGZpbmVzTWVzc2FnZUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBGaW5lc01lc3NhZ2VDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImV4cG9ydCBsZXQgZmVlZFNlcnZpY2UgPSBbJyRodHRwJywgZnVuY3Rpb24oJGh0dHApIHtcclxuICB2YXIgZmVlZEFudGlDYWNoZSA9IFwiPyZ0PVwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyByYW5kb21OdW07XHJcbiAgdmFyIHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwICsgMSk7XHJcbiAgdmFyIGZlZWRkYXlzb2xkID0gNjA7XHJcblxyXG4gIHZhciBkbSA9IG5ldyBEYXRlKCk7XHJcbiAgZG0uc2V0SG91cnMoMjQsIDAsIDAsIDApO1xyXG5cclxuICB2YXIgYXBpX2VuZHBvaW50ID0gJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvZmVlZF9hZ2dyZWdhdG9yPyc7XHJcblxyXG4gIGZ1bmN0aW9uIHJlYWRGZWVkQ29uZmlnKHVybCkge1xyXG4gICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIlgtRnJvbS1FeEwtQVBJLUdhdGV3YXlcIjogdW5kZWZpbmVkXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVhZEZlZWQodXJsKSB7XHJcbiAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICB1cmw6IGFwaV9lbmRwb2ludCArIHVybCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiWC1Gcm9tLUV4TC1BUEktR2F0ZXdheVwiOiB1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYXJzZUZlZWQoY29uZikge1xyXG4gICAgcmV0dXJuIHJlYWRGZWVkKGNvbmYuZmVlZFVybCkudGhlbihmdW5jdGlvbihyZXMpIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhjb25mLmZlZWRVcmwpO1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGNvbmYuZmVlZEZpbHRlcik7XHJcbiAgICAgIHZhciBwYXR0ID0gL15lbnRyeVxcLnxeaXRlbVxcLi9pO1xyXG4gICAgICB2YXIgZmlsdGVyZWRSZXN1bHRzID0gcmVzLmRhdGEuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIHJldHZhbCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChpdGVtLnB1YkRhdGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgIGl0ZW0ucHViRGF0ZSA9IGRtO1xyXG4gICAgICAgICAgcmVzLmRhdGEuaXRlbXNbaW5kZXhdLnB1YkRhdGUgPSBkbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogbm8gZmlsdGVyIGNvbmZpZ3VyZWQgKi9cclxuICAgICAgICBpZiAoY29uZi5mZWVkRmlsdGVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZi5mZWVkRmlsdGVyLmZvckVhY2goZnVuY3Rpb24oZikge1xyXG4gICAgICAgICAgaWYgKHBhdHQudGVzdChmLnBhcmFtKSkge1xyXG4gICAgICAgICAgICB2YXIgZmYgPSBmLnBhcmFtLnJlcGxhY2UocGF0dCwgXCJcIik7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1bZmZdKSkge1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtW2ZmXS5pbmRleE9mKGYudmFsdWUpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR2YWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbVtmZl0gPT0gZi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvKiBmaWx0ZXIgb2xkIGl0ZW1zICovXHJcbiAgICAgICAgaWYgKGZlZWRkYXlzb2xkIDwgTWF0aC5jZWlsKGRtLmdldFRpbWUoKSAtIG5ldyBEYXRlKGl0ZW0ucHViRGF0ZSkuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSkge1xyXG4gICAgICAgICAgcmV0dmFsID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmV0dmFsO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZpbHRlcmVkUmVzdWx0cztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc29ydEZlZWQoZmVlZHMpIHtcclxuICAgIC8vcmV0dXJuIGZlZWRzLnNvcnQoY29tcGFyZURhdGVzKTtcclxuICAgIHJldHVybiBmZWVkcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS5wdWJEYXRlKTtcclxuICAgICAgdmFyIGRhdGVCID0gbmV3IERhdGUoYi5wdWJEYXRlKTtcclxuICAgICAgaWYgKGRhdGVBLmdldFRpbWUoKSA9PT0gZG0uZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgZGF0ZUEgPSBuZXcgRGF0ZSgwKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0ZUIuZ2V0VGltZSgpID09PSBkbS5nZXRUaW1lKCkpIHtcclxuICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKDApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVhZEZlZWRDb25maWc6IHJlYWRGZWVkQ29uZmlnLFxyXG4gICAgcmVhZEZlZWQ6IHJlYWRGZWVkLFxyXG4gICAgcGFyc2VGZWVkOiBwYXJzZUZlZWQsXHJcbiAgICBzb3J0RmVlZDogc29ydEZlZWRcclxuICB9O1xyXG59XTtcclxuIiwiaW1wb3J0IGZlZWRiYWNrU2VydmljZUhUTUwgZnJvbSAnLi9mZWVkYmFja1NlcnZpY2UuaHRtbCdcclxuaW1wb3J0IERpYWxvZ0NvbnRyb2xsZXIgZnJvbSAnLi4vY29tcG9uZW50cy9nZW5lcmFsL2RpYWxvZydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGZWVkYmFja1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCRtZERpYWxvZykge1xyXG4gICAgdGhpcy5tZERpYWxvZyA9ICRtZERpYWxvZztcclxuICB9XHJcblxyXG4gIHNob3coJGV2ZW50ID0gbnVsbCwgZmVlZGJhY2tEaWFsb2dIVE1MID0gbnVsbCwgZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyID0gbnVsbCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKGZlZWRiYWNrRGlhbG9nSFRNTCA9PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IGRpYWxvZyBpbnN0YW50aWF0ZWQnKTtcclxuICAgICAgZmVlZGJhY2tEaWFsb2dIVE1MID0gZmVlZGJhY2tTZXJ2aWNlSFRNTDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyID09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgZGlhbG9nIGNvbnRyb2xsZXIgaW5zdGFudGlhdGVkJyk7XHJcbiAgICAgIGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlciA9IERpYWxvZ0NvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZERpYWxvZy5zaG93KHtcclxuICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXHJcbiAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICB0ZW1wbGF0ZTogZmVlZGJhY2tEaWFsb2dIVE1MLFxyXG4gICAgICBjb250cm9sbGVyOiBmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXJcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuRmVlZGJhY2tTZXJ2aWNlLiRpbmplY3QgPSBbJyRtZERpYWxvZyddO1xyXG4iLCJpbXBvcnQgbWVzc2FnZVNlcnZpY2VIVE1MIGZyb20gJy4vbWVzc2FnZVNlcnZpY2UuaHRtbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkY29tcGlsZSwgJG1kVG9hc3QsICRzY2UsICR0cmFuc2xhdGUsICR0aW1lb3V0KSB7XHJcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgIHRoaXMuc2NlID0gJHNjZTtcclxuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICAgIHRoaXMudGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgdGhpcy5jb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICB0aGlzLnJvb3RTY29wZSA9ICRyb290U2NvcGU7XHJcbiAgfVxyXG5cclxuICBzaG93KG1lc3NhZ2UgPSAnJywgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IG51bGw7XHJcbiAgICBsZXQgaGlkZURlbGF5ID0gb3B0aW9ucy5oaWRlRGVsYXkgfHwgMDtcclxuICAgIGxldCBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbiB8fCBudWxsO1xyXG4gICAgbGV0IGFjdGlvbkxhYmVsID0gb3B0aW9ucy5hY3Rpb25MYWJlbCB8fCAndW5rbm93bic7XHJcblxyXG4gICAgdGhpcy50aW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAobWVzc2FnZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIC8vIGNvZGUgdGFibGUgZW50cmllcyBjYW4gbm90IGhhdmUgZW1wdHkgZGVzY3JpcHRpb25zLlxyXG4gICAgICAgIC8vIG1lc3NhZ2UgPD0gMSB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQhISEhXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VLZXkgPSAnbGJzLmdlbmVyYWxNZXNzYWdlJztcclxuICAgICAgICBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudChtZXNzYWdlS2V5KTtcclxuICAgICAgICBtZXNzYWdlID0gKG1lc3NhZ2UgPT0gbWVzc2FnZUtleSB8fCBtZXNzYWdlIDw9IDEpID8gJycgOiBtZXNzYWdlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHRvYXN0Q29uZmlnID0ge1xyXG4gICAgICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXHJcbiAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25MYWJlbCA9IGFjdGlvbkxhYmVsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5vbkFjdGlvbiA9ICgkZXZlbnQgPSBudWxsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgc2VsZi5tZFRvYXN0LmhpZGUoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzY29wZSkge1xyXG4gICAgICAgICAgICAgIC8vdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwoc2VsZi5jb21waWxlKGA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPmApKHNlbGYucm9vdFNjb3BlKS5odG1sKCkpO1xyXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKHNlbGYuY29tcGlsZShgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKShzY29wZSkuaHRtbCgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogbWVzc2FnZVNlcnZpY2VIVE1MLFxyXG4gICAgICAgICAgcG9zaXRpb246ICd0b3AgY2VudGVyJyxcclxuICAgICAgICAgIGhpZGVEZWxheTogaGlkZURlbGF5XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxmLm1kVG9hc3Quc2hvdyh0b2FzdENvbmZpZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vIG1lc3NhZ2UgdG8gZGlzcGxheScpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyMDAwKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5NZXNzYWdlU2VydmljZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRjb21waWxlJywgJyRtZFRvYXN0JywgJyRzY2UnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCddO1xyXG4iLCIvKlxyXG4gIENlbnRyYWwgUGFja2FnZSBMb2FkZXJcclxuXHJcbiAgRG8gTk9UIGVkaXQgdGhpcyBmaWxlLlxyXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5pbXBvcnQgUHJpbW8gZnJvbSAnLi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltbydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXHJcblxyXG5pbXBvcnQge2ZlZWRTZXJ2aWNlfSBmcm9tICcuL2ZhY3Rvcmllcy9mZWVkU2VydmljZSdcclxuaW1wb3J0IE1lc3NhZ2VTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL21lc3NhZ2VTZXJ2aWNlJ1xyXG5pbXBvcnQgRmVlZGJhY2tTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL2ZlZWRiYWNrU2VydmljZSdcclxuXHJcbi8vbWFrZSBQcmltbyBwdWJsaWNcclxud2luZG93LlByaW1vID0gUHJpbW87XHJcbi8vbG9hZCBQcmltb0V4cGxvcmVyIFVJIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGlzIHJhblxyXG53aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICBpZiAoUHJpbW8uaXNEZWJ1Z0VuYWJsZWQoKSkge1xyXG4gICAgbGV0IHVpVVJMID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vbWVobWV0Yy9wcmltby1leHBsb3JlLWRvbS11aS9mYzA4NjhkZi9qcy9jdXN0b20uanMnO1xyXG4gICAgLy9sZXQgdWlVUkwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2pzL2N1c3RvbS5qcyc7XHJcblxyXG4gICAgSGVscGVyLmxvYWRTY3JpcHQodWlVUkwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5qZWN0aW5nIFVJJyk7XHJcbiAgICAgIFByaW1vLmV4cGxvcmUudWkudG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0sIDIwMDApO1xyXG5cclxuLy9DcmVhdGUgdGhlIGNlbnRyYWxDdXN0b20gbW9kdWxlO1xyXG5sZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2NlbnRyYWxDdXN0b20nLFsnbmdNYXRlcmlhbCddKVxyXG4gICAgICAgICAgICAgICAgIC5jb25zdGFudCgnZmVlZGJhY2tTZXJ2aWNlVVJMJywgJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvZmVlZGJhY2snKVxyXG4gICAgICAgICAgICAgICAgIC5jb25maWcoKCRzY2VEZWxlZ2F0ZVByb3ZpZGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAkc2NlRGVsZWdhdGVQcm92aWRlci5yZXNvdXJjZVVybFdoaXRlbGlzdChbXHJcbiAgICAgICAgICAgICAgICAgICAgICcqKidcclxuICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIC8vJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC9mdWxsVmlldy9mdWxsLXZpZXcuaHRtbCcsIGZ1bGxWaWV3SFRNTCk7XHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAuZmFjdG9yeSgnRmVlZFNlcnZpY2UnLCBmZWVkU2VydmljZSlcclxuICAgICAgICAgICAgICAgICAuc2VydmljZSgnTWVzc2FnZVNlcnZpY2UnLCBNZXNzYWdlU2VydmljZSlcclxuICAgICAgICAgICAgICAgICAuc2VydmljZSgnRmVlZGJhY2tTZXJ2aWNlJywgRmVlZGJhY2tTZXJ2aWNlKTtcclxuXHJcblxyXG4vL0NvbnRhaW5zIHRoZSBhZnRlciBjb21wb25lbnQgc2VsZWN0b3JzIHRoYXQgd2lsbCBiZSBpbmplY3RlZFxyXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XHJcblxyXG4vL0NyZWF0ZSBhbGwgY29tcG9uZW50cyBhbmQgZGV0ZXJtaW5lIGluIHdoaWNoIGFmdGVyIGNvbXBvbmVudCB0aGVzZSBuZWVkIHRvIGJlXHJcbi8vaW5qZWN0ZWRcclxuY29uc29sZS5sb2coJ0xvYWRpbmcgY2VudHJhbEN1c3RvbSBjb21wb25lbnRzJyk7XHJcbkNvbXBvbmVudHMuYWxsLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbXBvbmVudC5uYW1lKVxyXG4gIGlmIChjb21wb25lbnQuZW5hYmxlZCkge1xyXG4gICAgaWYgKGNvbXBvbmVudC5hcHBlbmRUbykge1xyXG4gICAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcclxuICAgICAgLy9lbGVtZW50cy5wdXNoKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgZWxlbWVudHMucHVzaCh7ICduYW1lJzogY29tcG9uZW50Lm5hbWUsICdlbmFibGVJblZpZXcnOiBjb21wb25lbnQuZW5hYmxlSW5WaWV3IH0pO1xyXG4gICAgICBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSA9IGVsZW1lbnRzO1xyXG5cclxuICAgIH1cclxuICAgIGFwcC5jb25zdGFudCgnYWZ0ZXJDb21wb25lbnRzJywgYWZ0ZXJDb21wb25lbnRzKTtcclxuICAgIGFwcC5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUudG9DYW1lbENhc2UoKSwgY29tcG9uZW50LmNvbmZpZyk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4vL0luamVjdCBwbGFjZSBob2xkZXJzIGludG8gdGhlIGFmdGVyIGNvbXBvbmVudHNcclxuT2JqZWN0LmtleXMoYWZ0ZXJDb21wb25lbnRzKS5mb3JFYWNoKChjb21wb25lbnQsaSkgPT4ge1xyXG4gIGxldCBzdWJDb21wb25lbnRzID0gYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudF07XHJcblxyXG4gIGFwcC5jb21wb25lbnQoY29tcG9uZW50LnRvQ2FtZWxDYXNlKCksIHtcclxuICAgIGJpbmRpbmdzOntcclxuICAgICAgcGFyZW50Q3RybDogJzwnXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IHN1YkNvbXBvbmVudHMubWFwKG0gPT4gYDwke20ubmFtZX0gcGFyZW50LWN0cmw9XCIkY3RybFwiPjwvJHttLm5hbWV9PmApLmpvaW4oXCJcIilcclxuICB9KTtcclxufSk7XHJcbiIsImltcG9ydCBFeHBsb3JlIGZyb20gJy4vcHJpbW8vZXhwbG9yZSdcclxuaW1wb3J0IFJlY29yZHMgZnJvbSAnLi9wcmltby9yZWNvcmRzJ1xyXG5pbXBvcnQgRmFjZXRzIGZyb20gJy4vcHJpbW8vZmFjZXRzJ1xyXG5pbXBvcnQgVmlldyBmcm9tICcuL3ByaW1vL3ZpZXcnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4vcHJpbW8vdXNlcidcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuLyoqXHJcbiAqIFByaW1vIG1haW4gZW50cnkgY2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW1vIHtcclxuICAvKipcclxuICAgKiBSZXR1cm4gdmVyc2lvbiBpbmZvcm1hdGlvblxyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XHJcbiAgICBsZXQgX3ZlcnNpb24gPSBcIjAuMC4xMFwiO1xyXG4gICAgcmV0dXJuIGBMaWJyYXJ5OiR7X3ZlcnNpb259IC0gUHJpbW86JHt3aW5kb3cuYXBwQ29uZmlnWydzeXN0ZW0tY29uZmlndXJhdGlvbiddLlByaW1vX1ZlcnNpb25fTnVtYmVyfToke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fSG90Rml4X051bWJlcn1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKCkgaGFzIHJhblxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgc3RhdGljIGlzRGVidWdFbmFibGVkKCkge1xyXG4gICAgcmV0dXJuIEhlbHBlci5pc0RlYnVnRW5hYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlkIHRoZSBzY3JpcHQgcmFuIG9uIGEgUHJpbW8gc2l0ZVxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XHJcbiAgICByZXR1cm4gSGVscGVyLmlzUHJpbW9BdmFpbGFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgYSBwcm94eSBjbGFzc1xyXG4gICAqIEByZXR1cm4ge0V4cGxvcmV9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCBleHBsb3JlKCkge1xyXG4gICAgcmV0dXJuIEV4cGxvcmU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIGF2YWlsYWJsZSByZWNvcmRzXHJcbiAgICogQHJldHVybiB7UmVjb3Jkc31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHJlY29yZHMoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc29sdmUobmV3IFJlY29yZHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpKTtcclxuICAgIH0pXHJcbiAgICAvL3JldHVybiBuZXcgUmVjb3Jkcyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIGF2YWlsYWJsZSBmYWNldHNcclxuICAgKiBAcmV0dXJuIHtGYWNldHN9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCBmYWNldHMoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc29sdmUobmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cykpO1xyXG4gICAgfSlcclxuICAgIC8vcmV0dXJuIG5ldyBGYWNldHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byB2aWV3IHJlbGF0ZWQgbWV0YWRhdGFcclxuICAgKiBAcmV0dXJuIHtWaWV3fVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdmlldygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlc29sdmUobmV3IFZpZXcoKSk7XHJcbiAgICB9KVxyXG4gICAgLy9yZXR1cm4gbmV3IFZpZXcoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gdXNlciByZWxhdGVkIG1ldGFkYXRhXHJcbiAgICogQHJldHVybiB7VXNlcn1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHVzZXIoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBIZWxwZXIudXNlckRldGFpbHNIVFRQKCkudGhlbigodXNlckRldGFpbHMpPT57XHJcbiAgICAgICAgSGVscGVyLnVzZXJGaW5lc0hUVFAoKS50aGVuKCh1c2VyRmluZXMpID0+IHtcclxuICAgICAgICAgIEhlbHBlci51c2VyTG9hbnNIVFRQKCkudGhlbigodXNlckxvYW5zKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgVXNlcih7ZGV0YWlsczogdXNlckRldGFpbHMsIGZpbmVzOiB1c2VyRmluZXMsIGxvYW5zOiB1c2VyTG9hbnN9KSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbi8vdGhpcyBpcyBwcm94eSBjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb3JlIHtcclxuICBzdGF0aWMgZ2V0IGNvbXBvbmVudHMoKSB7XHJcbiAgICBsZXQgYyA9IG5ldyBDb21wb25lbnRzKCk7XHJcbiAgICBIZWxwZXIuY29tcG9uZW50TmFtZXMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcclxuICAgICAgYy5hZGQoc2VsZWN0b3IpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgdWkoKSB7XHJcbiAgICBpZiAodGhpcy5fdWkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGlzIGlzIGEgc3R1YiBmdW5jdGlvbiBjYWxsIFwiYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKClcIiB0byBhY3RpdmF0ZSBVSScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX3VpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBoZWxwZXIoKSB7XHJcbiAgICByZXR1cm4gSGVscGVyO1xyXG4gIH1cclxufVxyXG4iLCJ2YXIgY3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBuZXcocmVxdWlyZSgnLi4vLi4vdmVuZG9yL2Nzcy1zZWxlY3Rvci1nZW5lcmF0b3IuanMnKSkuQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcblxyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vaGVscGVyJ1xyXG5cclxuY2xhc3MgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KXtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBibGluaygpe1xyXG4gICAgSGVscGVyLmJsaW5rKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNzc1BhdGgoKXtcclxuICAgIHJldHVybiBjc3NTZWxlY3RvckdlbmVyYXRvci5nZXRTZWxlY3Rvcih0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKXtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubG9jYWxOYW1lO1xyXG4gIH1cclxuXHJcbiAgc2NvcGUoKXtcclxuICAgIGlmIChIZWxwZXIuaXNEZWJ1Z0VuYWJsZWQoKSl7XHJcbiAgICAgIHJldHVybiBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5zY29wZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHJ1biBcImFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpXCIgZmlyc3QnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN0cmwoKXtcclxuICAgIGxldCBjID0gYW5ndWxhci5lbGVtZW50KHRoaXMuZWxlbWVudCkuY29udHJvbGxlcih0aGlzLm5hbWUpO1xyXG4gICAgaWYgKGMpIHtcclxuICAgICAgcmV0dXJuIGM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygndXNpbmcgYWx0ZXJuYXRpdmUgbWV0aG9kIHRvIGdldCBjb250cm9sbGVyJyk7XHJcbiAgICAgIGxldCBzY29wZSA9IHRoaXMuc2NvcGUoKTtcclxuICAgICAgaWYgKHNjb3BlKSB7XHJcbiAgICAgICAgbGV0IHNjb3BlQ2hpbGQgPSBzY29wZS4kJGNoaWxkVGFpbDtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc2NvcGUpLmluY2x1ZGVzKCckY3RybCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZS4kY3RybFxyXG4gICAgICAgIH0gZWxzZSBpZihPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJ2N0cmwnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2NvcGUuY3RybFxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcGVDaGlsZCAmJiBPYmplY3Qua2V5cyhzY29wZUNoaWxkKS5pbmNsdWRlcygnJGN0cmwnKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBzY29wZUNoaWxkLiRjdHJsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2NvcGVDaGlsZCAmJiBPYmplY3Qua2V5cyhzY29wZUNoaWxkKS5pbmNsdWRlcygnY3RybCcpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuY3RybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyAkY3RybCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRzIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgdGhpcy5fY29tcG9uZW50cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgYWRkKHNlbGVjdG9yKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBIZWxwZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICBsZXQgZWxlbWVudHNBcnJheSA9IHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IFtdO1xyXG5cclxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgICAgIGVsZW1lbnRzQXJyYXkucHVzaChuZXcgQ29tcG9uZW50KGVsZW1lbnQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdID0gZWxlbWVudHNBcnJheTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudHNBcnJheTtcclxuICB9XHJcblxyXG4gIGdldChzZWxlY3Rvcikge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBrZXlzKCl7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xyXG4gICAgc3RhdGljIGlzRGVidWdFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubmFtZSA9PT0gJ05HX0VOQUJMRV9ERUJVR19JTkZPIScgfHwgdHlwZW9mKGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm0tbG9nbycpKS5zY29wZSgpKSAhPSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNQcmltb0F2YWlsYWJsZSgpIHtcclxuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZih3aW5kb3cuYW5ndWxhcikpIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByaW1vLWV4cGxvcmUnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY29tcG9uZW50TmFtZXMoKSB7XHJcbiAgICAgICAgbGV0IHRhZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnROYW1lcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHRhZyBvZiB0YWdzKSB7XHJcbiAgICAgICAgICAgIGxldCB0YWdOYW1lID0gdGFnLmxvY2FsTmFtZTtcclxuICAgICAgICAgICAgaWYgKC9ecHJtLS8udGVzdCh0YWdOYW1lKSB8fCAvXnByaW1vLS8udGVzdCh0YWdOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnROYW1lcy5pbmNsdWRlcyh0YWdOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVzLnB1c2godGFnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudE5hbWVzID0gY29tcG9uZW50TmFtZXMuc29ydCgpLmZpbHRlcigoZSwgaSwgYSkgPT4gaSA9PT0gYS5maW5kSW5kZXgoKGUyKSA9PiBlID09PSBlMikpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnROYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5qZWN0b3IoKSB7XHJcbiAgICAgIGxldCBjID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJpbW8tZXhwbG9yZScpO1xyXG4gICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGxldCBwcmltb0V4cGxvcmUgPSBhbmd1bGFyLmVsZW1lbnQoY1swXS5lbGVtZW50KTtcclxuICAgICAgICAgIGxldCBpbmplY3RvciAgICAgPSBwcmltb0V4cGxvcmUuaW5qZWN0b3IoKTtcclxuICAgICAgICAgIGlmIChpbmplY3Rvcil7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmplY3RvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBodHRwKCkge1xyXG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XHJcbiAgICAgIGlmIChpbmplY3Rvcikge1xyXG4gICAgICAgIGxldCBoID0gaW5qZWN0b3IuZ2V0KCckaHR0cCcpO1xyXG4gICAgICAgIGlmIChoKSB7XHJcbiAgICAgICAgICByZXR1cm4gaDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgbG9hZFNjcmlwdChzY3JpcHRVUkwpIHtcclxuICAgICAgaWYgKHdpbmRvdy5hbmd1bGFyKSB7XHJcbiAgICAgICAgICBsZXQgYXBwSW5qZWN0b3IgPSBhbmd1bGFyLmluamVjdG9yKFsnbmcnLCdhbmd1bGFyTG9hZCddKTtcclxuICAgICAgICAgIGlmIChhcHBJbmplY3Rvcikge1xyXG4gICAgICAgICAgICAgIGxldCBhbmd1bGFyTG9hZCA9IGFwcEluamVjdG9yLmdldCgnYW5ndWxhckxvYWQnKTtcclxuICAgICAgICAgICAgICBpZiAoYW5ndWxhckxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyTG9hZC5sb2FkU2NyaXB0KHNjcmlwdFVSTCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvb3RTY29wZSgpIHtcclxuICAgICAgbGV0IGluamVjdG9yID0gdGhpcy5pbmplY3RvcigpO1xyXG4gICAgICBpZiAoaW5qZWN0b3IpIHtcclxuICAgICAgICAgIGxldCByb290U2NvcGUgICAgPSBpbmplY3Rvci5nZXQoJyRyb290U2NvcGUnKTtcclxuICAgICAgICAgIGlmIChyb290U2NvcGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3RTY29wZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKSB7XHJcbiAgICAgIGxldCByb290U2NvcGUgPSB0aGlzLnJvb3RTY29wZSgpO1xyXG4gICAgICBpZiAocm9vdFNjb3BlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgand0RGF0YSgpIHtcclxuICAgICAgbGV0IHVTTVMgPSB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgICAgaWYgKHVTTVMpIHtcclxuICAgICAgICBsZXQgand0RGF0YSA9IHVTTVMuand0VXRpbFNlcnZpY2UuZ2V0RGVjb2RlZFRva2VuKCkgfHwge307XHJcbiAgICAgICAgcmV0dXJuIGp3dERhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckRldGFpbHMoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuJGxvY2FsRm9yYWdlLmdldEl0ZW0oJ3VzZXJEZXRhaWxzJykudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyRGV0YWlsc0hUVFAoKSB7XHJcbiAgICAgIGxldCB2aWV3Q29kZSA9IHRoaXMuand0RGF0YSgpLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSxyZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KGAvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS91c2Vyc2V0dGluZ3M/dmlkPSR7dmlld0NvZGV9YCkudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzLmRhdGEpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJGaW5lc0hUVFAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2ZpbmVzJykudGhlbih1c2VyRmluZXMgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyRmluZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmaW5lcyA9IGRhdGEuZGF0YS5maW5lcztcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZXMuZmluZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGZpbmVzJyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyTG9hbnNIVFRQKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL215YWNjb3VudC9sb2FucycpLnRoZW4odXNlckxvYW5zID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckxvYW5zLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9hbnMgPSBkYXRhLmRhdGEubG9hbnM7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvYW5zLmxvYW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBsb2FucycpO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYmxpbmsoY29tcG9uZW50LCBudW1iZXJPZkJsaW5rcyA9IDQpIHtcclxuICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcclxuICAgICAgICBsZXQgYm9yZGVyU2VsZWN0b3IgPSBjb21wb25lbnQuZWxlbWVudC5jc3NQYXRoICsgaW5kZXggKyAnUmVjdCc7XHJcblxyXG4gICAgICAgIGxldCBjcmVhdGVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJlY3QgPSBjb21wb25lbnQuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArIDE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBib3JkZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgcmVkJztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS50b3AgPSBlbGVtZW50UmVjdC50b3AgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBlbGVtZW50UmVjdC5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGVsZW1lbnRSZWN0LndpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUubGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib3JkZXJFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBib3JkZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlbW92ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYm9yZGVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBib3JkZXJFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJsaW5rQm9yZGVyRWxlbWVudCA9IChudW1iZXJPZkJsaW5rcyA9IDQpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZCbGlua3MgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVCb3JkZXJFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAoKG51bWJlck9mQmxpbmtzICUgMikgPT0gMCkgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZCbGlua3MtLTtcclxuICAgICAgICAgICAgICAgIGludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYmxpbmtCb3JkZXJFbGVtZW50LCAxMDAwLCBudW1iZXJPZkJsaW5rcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvcmRlckVsZW1lbnQgPSBjcmVhdGVCb3JkZXJFbGVtZW50KCk7XHJcbiAgICAgICAgYmxpbmtCb3JkZXJFbGVtZW50KG51bWJlck9mQmxpbmtzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2ZhY2V0cyhjb21wb25lbnRzKTtcclxuICAgIH1cclxuICAgIF9mYWNldHMoY29tcG9uZW50cykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tZmFjZXQtYWZ0ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBnZXQgZmFjZXRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmZhY2V0cztcclxuICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBmYWNldHMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcyhjb21wb25lbnRzKTtcclxuICAgIH1cclxuICAgIF9pdGVtcyhjb21wb25lbnRzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gY29tcG9uZW50cy5nZXQoJ3BybS1zZWFyY2gtcmVzdWx0LWxpc3QtYWZ0ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN0cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuaXRlbWxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwidHJ5IGFnYWluXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCByZWNvcmRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmRhdGE7XHJcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gcmV0cmlldmUgaXRlbXMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcclxuICBjb25zdHJ1Y3Rvcih1c2VyID0gX3NrZWxVc2VyKSB7XHJcbiAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XHJcbiAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogand0RGF0YS51c2VyIHx8ICcnLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmRldGFpbHMuZW1haWwgfHwgJycsXHJcbiAgICAgICAgbmFtZTogand0RGF0YS51c2VyTmFtZSB8fCAnR3Vlc3QnLFxyXG4gICAgICAgIGRpc3BsYXlfbmFtZTogdVNtcy5nZXRVc2VyTmFtZUZvckRpc3BsYXkoKSxcclxuICAgICAgICBpc0xvZ2dlZEluOiAoKSA9PiB1U21zLmdldFVzZXJOYW1lKCkubGVuZ3RoID4gMCxcclxuICAgICAgICBpc09uQ2FtcHVzOiAoKSA9PiBqd3REYXRhLm9uQ2FtcHVzID09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIGZpbmVzOiB1c2VyLmZpbmVzLFxyXG4gICAgICAgIGxvYW5zOiB1c2VyLmxvYW5zXHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgX3NrZWxVc2VyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGV0YWlsczoge30sXHJcbiAgICAgIGZpbmVzOiB7fSxcclxuICAgICAgbG9hbnM6IHt9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgICAgbGV0IGp3dERhdGEgPSBIZWxwZXIuand0RGF0YSgpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXSxcclxuICAgICAgICBpbnN0aXR1dGlvbjoge1xyXG4gICAgICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJbnN0aXR1dGlvbkNvZGUsXHJcbiAgICAgICAgICAgIG5hbWU6IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnN0aXR1dGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW50ZXJmYWNlTGFuZ3VhZ2U6IHVTbXMuZ2V0VXNlckxhbmd1YWdlKCkgfHwgd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmludGVyZmFjZUxhbmd1YWdlLFxyXG4gICAgICAgIGlwOiB7XHJcbiAgICAgICAgICBhZGRyZXNzOiBqd3REYXRhLmlwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBDc3NTZWxlY3RvckdlbmVyYXRvciwgcm9vdCxcclxuICAgIGluZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcclxuXHJcbiAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZGVmYXVsdF9vcHRpb25zID0ge1xyXG4gICAgICBzZWxlY3RvcnM6IFsnaWQnLCAnY2xhc3MnLCAndGFnJywgJ250aGNoaWxkJ11cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gQ3NzU2VsZWN0b3JHZW5lcmF0b3Iob3B0aW9ucykge1xyXG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xyXG4gICAgICB0aGlzLnNldE9wdGlvbnModGhpcy5kZWZhdWx0X29wdGlvbnMpO1xyXG4gICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgIHZhciBrZXksIHJlc3VsdHMsIHZhbDtcclxuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHRzID0gW107XHJcbiAgICAgIGZvciAoa2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICB2YWwgPSBvcHRpb25zW2tleV07XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdF9vcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLm9wdGlvbnNba2V5XSA9IHZhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmlzRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuICEhKChlbGVtZW50ICE9IG51bGwgPyBlbGVtZW50Lm5vZGVUeXBlIDogdm9pZCAwKSA9PT0gMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRQYXJlbnRzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgY3VycmVudF9lbGVtZW50LCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBpZiAodGhpcy5pc0VsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmlzRWxlbWVudChjdXJyZW50X2VsZW1lbnQpKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50X2VsZW1lbnQpO1xyXG4gICAgICAgICAgY3VycmVudF9lbGVtZW50ID0gY3VycmVudF9lbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRUYWdTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVJdGVtKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNhbml0aXplSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgdmFyIGNoYXJhY3RlcnM7XHJcbiAgICAgIGNoYXJhY3RlcnMgPSAoaXRlbS5zcGxpdCgnJykpLm1hcChmdW5jdGlvbihjaGFyYWN0ZXIpIHtcclxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAnOicpIHtcclxuICAgICAgICAgIHJldHVybiBcIlxcXFxcIiArICgnOicuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkgKyBcIiBcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKC9bICFcIiMkJSYnKCkqKywuXFwvOzw9Pj9AXFxbXFxcXFxcXV5ge3x9fl0vLnRlc3QoY2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgY2hhcmFjdGVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZXNjYXBlKGNoYXJhY3RlcikucmVwbGFjZSgvXFwlL2csICdcXFxcJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNoYXJhY3RlcnMuam9pbignJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRJZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgaWQsIHNhbml0aXplZF9pZDtcclxuICAgICAgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgaWYgKChpZCAhPSBudWxsKSAmJiAoaWQgIT09ICcnKSAmJiAhKC9cXHMvLmV4ZWMoaWQpKSAmJiAhKC9eXFxkLy5leGVjKGlkKSkpIHtcclxuICAgICAgICBzYW5pdGl6ZWRfaWQgPSBcIiNcIiArICh0aGlzLnNhbml0aXplSXRlbShpZCkpO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzYW5pdGl6ZWRfaWQpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHNhbml0aXplZF9pZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDbGFzc1NlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGNsYXNzX3N0cmluZywgaXRlbSwgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgY2xhc3Nfc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgIGlmIChjbGFzc19zdHJpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgIGNsYXNzX3N0cmluZyA9IGNsYXNzX3N0cmluZy5yZXBsYWNlKC9cXHMrL2csICcgJyk7XHJcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL15cXHN8XFxzJC9nLCAnJyk7XHJcbiAgICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPT0gJycpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGssIGxlbiwgcmVmLCByZXN1bHRzO1xyXG4gICAgICAgICAgICByZWYgPSBjbGFzc19zdHJpbmcuc3BsaXQoL1xccysvKTtcclxuICAgICAgICAgICAgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICAgICAgICBpdGVtID0gcmVmW2tdO1xyXG4gICAgICAgICAgICAgIHJlc3VsdHMucHVzaChcIi5cIiArICh0aGlzLnNhbml0aXplSXRlbShpdGVtKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgICAgfSkuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGF0dHJpYnV0ZSwgYmxhY2tsaXN0LCBrLCBsZW4sIHJlZiwgcmVmMSwgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgYmxhY2tsaXN0ID0gWydpZCcsICdjbGFzcyddO1xyXG4gICAgICByZWYgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIGF0dHJpYnV0ZSA9IHJlZltrXTtcclxuICAgICAgICBpZiAocmVmMSA9IGF0dHJpYnV0ZS5ub2RlTmFtZSwgaW5kZXhPZi5jYWxsKGJsYWNrbGlzdCwgcmVmMSkgPCAwKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChcIltcIiArIGF0dHJpYnV0ZS5ub2RlTmFtZSArIFwiPVwiICsgYXR0cmlidXRlLm5vZGVWYWx1ZSArIFwiXVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldE50aENoaWxkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBjb3VudGVyLCBrLCBsZW4sIHBhcmVudF9lbGVtZW50LCBzaWJsaW5nLCBzaWJsaW5ncztcclxuICAgICAgcGFyZW50X2VsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgIGlmIChwYXJlbnRfZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgICAgc2libGluZ3MgPSBwYXJlbnRfZWxlbWVudC5jaGlsZE5vZGVzO1xyXG4gICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHNpYmxpbmdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgICBzaWJsaW5nID0gc2libGluZ3Nba107XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnQoc2libGluZykpIHtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIjpudGgtY2hpbGQoXCIgKyBjb3VudGVyICsgXCIpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0U2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgICB2YXIgaXNfdW5pcXVlLCByZXN1bHQ7XHJcbiAgICAgIGlzX3VuaXF1ZSA9IGZhbHNlO1xyXG4gICAgICBpZiAoKHNlbGVjdG9yICE9IG51bGwpICYmIHNlbGVjdG9yICE9PSAnJykge1xyXG4gICAgICAgIHJlc3VsdCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiByZXN1bHRbMF0gPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgIGlzX3VuaXF1ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpc191bmlxdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRBbGxTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICB0OiBudWxsLFxyXG4gICAgICAgIGk6IG51bGwsXHJcbiAgICAgICAgYzogbnVsbCxcclxuICAgICAgICBhOiBudWxsLFxyXG4gICAgICAgIG46IG51bGxcclxuICAgICAgfTtcclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAndGFnJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC50ID0gdGhpcy5nZXRUYWdTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdpZCcpID49IDApIHtcclxuICAgICAgICByZXN1bHQuaSA9IHRoaXMuZ2V0SWRTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdjbGFzcycpID49IDApIHtcclxuICAgICAgICByZXN1bHQuYyA9IHRoaXMuZ2V0Q2xhc3NTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnYXR0cmlidXRlJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5hID0gdGhpcy5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnbnRoY2hpbGQnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0Lm4gPSB0aGlzLmdldE50aENoaWxkU2VsZWN0b3IoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RVbmlxdWVuZXNzID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcclxuICAgICAgdmFyIGZvdW5kX2VsZW1lbnRzLCBwYXJlbnQ7XHJcbiAgICAgIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgZm91bmRfZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgIHJldHVybiBmb3VuZF9lbGVtZW50cy5sZW5ndGggPT09IDEgJiYgZm91bmRfZWxlbWVudHNbMF0gPT09IGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0Q29tYmluYXRpb25zID0gZnVuY3Rpb24oZWxlbWVudCwgaXRlbXMsIHRhZykge1xyXG4gICAgICB2YXIgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCByZWYsIHJlZjE7XHJcbiAgICAgIHJlZiA9IHRoaXMuZ2V0Q29tYmluYXRpb25zKGl0ZW1zKTtcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgaXRlbSA9IHJlZltrXTtcclxuICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBpdGVtKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0YWcgIT0gbnVsbCkge1xyXG4gICAgICAgIHJlZjEgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRhZyArIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XHJcbiAgICAgICAgICBpdGVtID0gcmVmMVtsXTtcclxuICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFVuaXF1ZVNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgZm91bmRfc2VsZWN0b3IsIGssIGxlbiwgcmVmLCBzZWxlY3Rvcl90eXBlLCBzZWxlY3RvcnM7XHJcbiAgICAgIHNlbGVjdG9ycyA9IHRoaXMuZ2V0QWxsU2VsZWN0b3JzKGVsZW1lbnQpO1xyXG4gICAgICByZWYgPSB0aGlzLm9wdGlvbnMuc2VsZWN0b3JzO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBzZWxlY3Rvcl90eXBlID0gcmVmW2tdO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3JfdHlwZSkge1xyXG4gICAgICAgICAgY2FzZSAnaWQnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLmkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMuaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3RhZyc6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgc2VsZWN0b3JzLnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2xhc3MnOlxyXG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5jICE9IG51bGwpICYmIHNlbGVjdG9ycy5jLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kX3NlbGVjdG9yID0gdGhpcy50ZXN0Q29tYmluYXRpb25zKGVsZW1lbnQsIHNlbGVjdG9ycy5jLCBzZWxlY3RvcnMudCk7XHJcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnYXR0cmlidXRlJzpcclxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYSAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYSwgc2VsZWN0b3JzLnQpO1xyXG4gICAgICAgICAgICAgIGlmIChmb3VuZF9zZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ250aGNoaWxkJzpcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy5uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICcqJztcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgYWxsX3NlbGVjdG9ycywgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCBwYXJlbnRzLCByZXN1bHQsIHNlbGVjdG9yLCBzZWxlY3RvcnM7XHJcbiAgICAgIGFsbF9zZWxlY3RvcnMgPSBbXTtcclxuICAgICAgcGFyZW50cyA9IHRoaXMuZ2V0UGFyZW50cyhlbGVtZW50KTtcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcGFyZW50cy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIGl0ZW0gPSBwYXJlbnRzW2tdO1xyXG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5nZXRVbmlxdWVTZWxlY3RvcihpdGVtKTtcclxuICAgICAgICBpZiAoc2VsZWN0b3IgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxsX3NlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0b3JzID0gW107XHJcbiAgICAgIGZvciAobCA9IDAsIGxlbjEgPSBhbGxfc2VsZWN0b3JzLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xyXG4gICAgICAgIGl0ZW0gPSBhbGxfc2VsZWN0b3JzW2xdO1xyXG4gICAgICAgIHNlbGVjdG9ycy51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5qb2luKCcgPiAnKTtcclxuICAgICAgICBpZiAodGhpcy50ZXN0U2VsZWN0b3IoZWxlbWVudCwgcmVzdWx0KSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihpdGVtcykge1xyXG4gICAgICB2YXIgaSwgaiwgaywgbCwgcmVmLCByZWYxLCByZXN1bHQ7XHJcbiAgICAgIGlmIChpdGVtcyA9PSBudWxsKSB7XHJcbiAgICAgICAgaXRlbXMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHQgPSBbW11dO1xyXG4gICAgICBmb3IgKGkgPSBrID0gMCwgcmVmID0gaXRlbXMubGVuZ3RoIC0gMTsgMCA8PSByZWYgPyBrIDw9IHJlZiA6IGsgPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2sgOiAtLWspIHtcclxuICAgICAgICBmb3IgKGogPSBsID0gMCwgcmVmMSA9IHJlc3VsdC5sZW5ndGggLSAxOyAwIDw9IHJlZjEgPyBsIDw9IHJlZjEgOiBsID49IHJlZjE7IGogPSAwIDw9IHJlZjEgPyArK2wgOiAtLWwpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKHJlc3VsdFtqXS5jb25jYXQoaXRlbXNbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0LnNoaWZ0KCk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmpvaW4oJycpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIENzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwgPyBkZWZpbmUuYW1kIDogdm9pZCAwKSB7XHJcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcclxuICAgIHJvb3QuQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBDc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuICB9XHJcblxyXG59KS5jYWxsKHRoaXMpO1xyXG4iLCIvKlxyXG4gIEdlbmVyYWwgXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XHJcbiAgTWVobWV0IENlbGlrXHJcbiovXHJcblN0cmluZy5wcm90b3R5cGUudG9DYW1lbENhc2UgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gdGhpcy5zcGxpdCgnLScpLm1hcCgoZCxpLGEpID0+ICBpID4gMCA/IGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkLnNsaWNlKDEpIDpkKS5qb2luKCcnKTtcclxufVxyXG4iXX0=
