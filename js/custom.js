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

var _staticAfter = require('./components/prmFullViewAfter/staticAfter');

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
      return [{ name: 'libis-experiment', config: _experiment.experimentConfig, enabled: false, appendTo: 'prm-logo-after', enableInView: '.*' }, { name: 'home-icon', config: _homeIcon.homeIconConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '.*' }, { name: 'beta-switch', config: _betaSwitch.betaSwitchConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '.*' }, { name: 'source-icon', config: _sourceIcon.sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '.*' }, { name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after', enableInView: '.*' }, { name: 'pay-my-fines', config: _payMyFines.payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after', enableInView: '.*' }, { name: 'feedback', config: _feedback.feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '.*' }, { name: 'report-a-problem', config: _reportAProblem.reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '.*' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null, enableInView: '.*' }, { name: 'promote-login', config: _PromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'prm-explore-main-after', enableInView: '^KULeuven' }, { name: 'announcement-feedback', config: _feedbackAnnouncement.feedbackAnnouncementConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'static-after', config: _staticAfter.staticAfterConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '^KULeuven' }, { name: 'announcement', config: _announcements.announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*' }, { name: 'pay-my-fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven' }].filter(function (component) {
        return component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid);
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/searchTip":3,"./components/prmBriefResultAfter/sourceIcon":4,"./components/prmFinesOverviewAfter/payMyFines":5,"./components/prmFullViewAfter/staticAfter":6,"./components/prmLogoAfter/betaSwitch":7,"./components/prmLogoAfter/experiment":8,"./components/prmLogoAfter/homeIcon":9,"./components/prmMainMenuAfter/feedback":10,"./components/prmPromoteLogin/PromoteLogin":11,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":12,"./components/prmServiceHeaderAfter/reportAProblem":13,"./components/prmTopBarBefore/announcements":14,"./components/prmTopBarBefore/feedbackAnnouncement":15,"./components/prmTopBarBefore/finesMessage":17,"./utils":22}],2:[function(require,module,exports){
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

var searchTipHTML = '<a aria-label="{{title_label}}" title="{{title_label}}" ng-click="showSearchTips()">\n  <span class ="md-headline" id="ContentSearchTips">\n    {{title}}\n  </span>\n</a>\n';
var tip_enUS_HTML = '<md-dialog aria-label="Search tips">\n    <md-dialog-content id="searchtips">\n\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Search tips</h2>\n                <span flex></span>\n                <md-button class="md-icon-button" ng-click="closeDialog()">\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n                </md-button>\n            </div>\n        </md-toolbar>\n\n        <md-content>\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        For phrases use quotes: "global warming"\n                    </div>\n                </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        For truncated searches use an asterisk: gun* will retrieve gun, guns, gunners, gunnery, gunning, etc.\n                    </div>\n                </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        As a wildcard for one character, use ?:  wom?n will retrieve woman and women.\n                    </div>\n                </md-list-item>\n\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        To exclude a term use NOT (in uppercase): celtic NOT Irish\n                    </div>\n                </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        To group terms use brackets: Shakespeare (tragedy OR sonnet). OR is in uppercase\n                   </div>\n                </md-list-item>\n            </md-list>\n<!--\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="demo-dialog-content">\n                        For users of Internet Explorer:<br/>\n                        Limo should be viewed with version 9 or higher.<br />\n                        If you have an earlier version, it is a good idea to upgrade your browser. <br />\n                    </div>\n                </md-list-item>\n            </md-list>\n-->\n            <md-dialog-actions>\n                <div layout="row" class="demo-dialog-button">\n                    <md-button md-autofocus  class="md-primary" ng-click="closeDialog()">\n                        Close\n                    </md-button>\n                </div>\n            </md-dialog-actions>\n        </md-content>\n    </md-dialog-content>\n</md-dialog>\n';
var tip_frFR_HTML = '<md-dialog aria-label="Zoektips">\n    <md-dialog-content id="searchtips">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Trucs & astuces</h2>\n                <span flex></span>\n                <md-button class="md-icon-button" ng-click="closeDialog()">\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n                </md-button>\n            </div>\n        </md-toolbar>\n        <md-content>\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        utilisez des guillemets pour les phrases/expressions exactes: "r\xE9chauffement global"\n                    </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            utilisez un ast\xE9risque pour les recherches tronqu\xE9es: vin* donnera vinage, vinaigre, vinasse, vineux etc.\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            utilisez ? comme caract\xE8re de remplacement: fe?me donnera femme et ferme\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            utilisez NOT (en capitales) pour exclure un mot: celtique NOT irlandais\n                        </div>\n                    </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        utilisez des parenth\xE8ses pour grouper les termes: Shakespeare (trag\xE9die OR sonnet). OR est \xE9crit en capitales\n                    </div>\n                </md-list-item>\n            </md-list>\n            <!--\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="demo-dialog-content">\n                Pour les utilisateurs d\'Internet Explorer:<br/>\nIl est recommand\xE9 d\'utiliser la version 9 ou ult\xE9rieure.<br/>\nSi vous avez une version plus ancienne, il est conseill\xE9 de mettre \xE0 jour votre navigateur.<br/>\n                        </div>\n                    </md-list-item>\n            </md-list>\n-->\n            <md-dialog-actions>\n                <div layout="row" class="demo-dialog-button">\n                    <md-button md-autofocus class="md-primary" ng-click="closeDialog()">\n                        Sluiten\n                    </md-button>\n                </div>\n            </md-dialog-actions>\n        </md-content>\n    </md-dialog-content>\n</md-dialog>\n';
var tip_nlBE_HTML = '<md-dialog aria-label="Zoektips">\n    <md-dialog-content id="searchtips">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Zoektips</h2>\n                <span flex></span>\n                <md-button class="md-icon-button" ng-click="closeDialog()">\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n                </md-button>\n            </div>\n        </md-toolbar>\n        <md-content>\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        Gebruik "" om te zoeken op exacte woordcombinatie: "global warming"\n                    </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            Gebruik een * of ? om te zoeken op delen van woorden:\n                            <p style="padding-left:1em;">\n                                gun* vindt gun, guns, gunners, gunnery, gunning, enz.<br />\n                                wom?n vindt woman en women\n                            </p>\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            Gebruik NOT (in hoofdletters) om een zoekterm uit te sluiten: celtic NOT Irish\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            Gebruik haakjes om termen te groeperen: Shakespeare (tragedy OR sonnet). OR is in hoofletters\n                        </div>\n                    </md-list-item>\n            </md-list>\n            <!--\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="demo-dialog-content">\n                        Voor gebruikers van Internet Explorer:<br />\n                        Limo wordt best bekeken via version 9 of hoger.<br />\n                        Gelieve uw browser te upgraden indien u over een lagere versie beschikt.<br />\n                        </div>\n                    </md-list-item>\n            </md-list>\n-->\n            <md-dialog-actions>\n                <div layout="row" class="demo-dialog-button">\n                    <md-button md-autofocus class="md-primary" ng-click="closeDialog()">\n                        Sluiten\n                    </md-button>\n                </div>\n            </md-dialog-actions>\n        </md-content>\n    </md-dialog-content>\n</md-dialog>\n';

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

var sourceIconHTML = '<style>\n  div.sourceid {\n    display: inline-flex;\n    margin-left: 1em;\n    margin-top: -2px;\n  }\n\n  div.sourceid img.source-icon {\n      display: inline-block;\n      max-height: 18px;\n      width: auto;\n      height: auto;\n      transform: none;\n      min-width: auto;\n      min-height: auto;\n      vertical-align: bottom;\n  }\n\n  div.sourceid span.source-text {\n      font-size:small;\n      margin-left: 0.4em;\n      text-transform: none;\n      letter-spacing: normal;\n  }\n</style>\n\n<div ng-if="$ctrl.sourceid" class="sourceid">\n  <img src="{{$ctrl.icon.iconUrl}}" class="source-icon">\n  <span class="source-text">{{$ctrl.icon.iconText}}</span>\n</div>\n';

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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The altmetrics component controller. (https://github.com/Det-Kongelige-Bibliotek/primo-explore-rex/blob/master/js/altmetrics.component.js)
 */
var staticAfterHTML = '<div>\n    <h3>Static Insertion</h3>\n</div>';

var staticAfterController = function () {
  function staticAfterController($scope, $window, $http, $element, angularLoad, FullViewSectionService) {
    _classCallCheck(this, staticAfterController);

    console.log('staticAfterController + constructor');
    this.$http = $http;
    this.$scope = $scope;
    this.angularLoad = angularLoad;
    this.FullViewSectionService = FullViewSectionService;
    this.$element = $element;
  }

  _createClass(staticAfterController, [{
    key: '$onchange',
    value: function $onchange() {
      console.log('something has changed for staticAfterController');
    }
  }, {
    key: '$onInit',
    value: function $onInit() {
      var _this = this;

      try {
        console.log('staticAfterController + onInit');
        this.doi = this.parentCtrl.parentCtrl.item.pnx.addata.doi ? this.parentCtrl.parentCtrl.item.pnx.addata.doi[0] : '';
        this.services = this.parentCtrl.parentCtrl.services;
      } catch (e) {
        console.log(e.message);
      };

      var fullViewElement = this.$element.parent().parent()[0];

      this.staticAfterSectionData = {
        scrollId: "staticInt",
        serviceName: "staticInt",
        title: "Static Insertion"
      };

      // alert ('A potpourri of pediatric urology Wilcox, Duncan')
      var sectionTitleSelector = 'h4[translate="' + this.staticAfterSectionData.title + '"]';

      var unbindStaticWatcher = this.$scope.$watch(function () {
        return fullViewElement.querySelector(sectionTitleSelector);
      },
      //  fullViewElement.querySelector('div#services-index'),
      function (newVal, oldVal) {
        console.log('new ' + sectionTitleSelector);
        console.log(newVal);
        console.log('old' + sectionTitleSelector);
        console.log(oldVal);
        if (newVal) {
          var sectionBody = newVal.parentElement.parentElement.parentElement.parentElement.querySelector('div.section-body');
          console.log('watch sectionTitleSelector');
          console.log(_this.$element);
          sectionBody.appendChild(_this.$element[0]);
          unbindStaticWatcher();
        }
      });

      /*
      if (this.doi) {
        this.FullViewSectionService.insertSectionData(this.services, altmetricsSectionData);
      }
      //this.$scope.$apply();
      */
      this.FullViewSectionService.insertSectionData(this.services, this.staticAfterSectionData);

      return;
    }

    /**
     *  Method to load the altmetrics badge.
     *  @return {Promise} A Promise to be fulfilled if the badge is loaded, 
     *  and to be rejected if it could not be loaded.
     */

  }, {
    key: '$onDestroy',
    value: function $onDestroy() {
      if (this.$window.staticAfter) {
        delete this.$window.staticAfter;
      }

      // TODO: Remove any other JS or CSS files that are loaded. The URLs below may change!
      /*
      this.scriptLoaderService.unload('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js', 'js');
      this.scriptLoaderService.unload('https://d1bxh8uas1mnw7.cloudfront.net/assets/altmetric_badges-8f271adb184c21cc5169a7f67f7fe5ab.js', 'js');
      this.scriptLoaderService.unload('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed-2c47105b6381604898bbf8ae8a680350.css', 'css');
      */
      console.log('staticAfter is destroyed!.');
    }
  }]);

  return staticAfterController;
}();

;

staticAfterController.$inject = ['$scope', '$window', '$http', '$element', 'angularLoad', 'FullViewSectionService'];

var staticAfterConfig = exports.staticAfterConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: staticAfterController,
  template: staticAfterHTML
};

},{}],7:[function(require,module,exports){
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

var homeIconHTML = '<div id="home-buttons-holder"\n     ng-class="{\'fixed-to-top\': $ctrl.fixedToTop()}"\n     layout="row"\n     layout-align="center center"\n     class="layout-align-center-center layout-row">\n  <a class="md-icon-button button-over-dark md-button md-primoExplore-theme" id="home-button"\n     aria-label="Go to startpage"\n     href="{{ $ctrl.homePageLink }}">\n    <md-icon class="md-primoExplore-theme">\n      <svg id="prm_home" width="100%" height="100%" viewBox="0 0 24 24" y="0" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">\n    <path d="M10,20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n    </svg>\n    </md-icon>\n  </a>\n</div>\n';

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

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var promoteLoginHTML = '<md-card class="default-card _md md-primoExplore-theme flex-xs-100 flex-sm-100" flex-sm="100" flex-xs="100" ng-show=\'$ctrl.showAutomaticLogin\'>\n  <md-card-content layout="column" layout-align="space-around center" class="layout-align-space-around-center layout-column">\n    <prm-primo-login label-type="text" layout="column" class="layout-column">\n      <div>\n        <span translate="lbs.nui.mypref.automatic_login.title">Always Sign In</span>\n      </div>\n\n      <md-checkbox tabindex="-1" disabled="disabled" \n      class="has-small-text zero-margin ng-pristine ng-untouched ng-valid md-primoExplore-theme ng-not-empty md-checked flex-50"\n       role="checkbox" aria-checked="true" aria-disabled="true" aria-invalid="false" \n       type="checkbox" flex="50" ng-model="$ctrl.alwaysSigninCheckBox" ng-change="alwaysSigninChecked()"\n       ng-disabled="$ctrl.formMode == \'View\'">\n       <div class="layout-column" layout="column">\n          <span class="item-content" translate="lbs.nui.mypref.automatic_login.alwaysSigninOption"></span>\n       </div>\n      </md-checkbox>\n    </prm-primo-login>\n    <md-divider class="card-divider layout-margin md-primoExplore-theme" layout-margin=""></md-divider>\n    <!---->\n  </md-card-content>\n</md-card>\n\n';

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

},{"../components/general/dialog":2}],20:[function(require,module,exports){
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

},{"./components":1,"./factories/feedService":18,"./factories/feedbackService":19,"./factories/messageService":20,"./primo-explore-dom/js/primo":23,"./primo-explore-dom/js/primo/explore/helper":26}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{"./primo/explore":24,"./primo/explore/helper":26,"./primo/facets":27,"./primo/records":28,"./primo/user":29,"./primo/view":30}],24:[function(require,module,exports){
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

},{"./explore/components":25,"./explore/helper":26}],25:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":31,"./helper":26}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{"./explore/components":25,"./explore/helper":26}],28:[function(require,module,exports){
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

},{"./explore/components":25,"./explore/helper":26}],29:[function(require,module,exports){
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

},{"./explore/helper":26}],30:[function(require,module,exports){
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

},{"./explore/helper":26}],31:[function(require,module,exports){
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

},{}]},{},[21])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL2dlbmVyYWwvZGlhbG9nLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvZ2VuZXJhbC9zZWFyY2hUaXAuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1CcmllZlJlc3VsdEFmdGVyL3NvdXJjZUljb24uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1GaW5lc092ZXJ2aWV3QWZ0ZXIvcGF5TXlGaW5lcy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUZ1bGxWaWV3QWZ0ZXIvc3RhdGljQWZ0ZXIuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvYmV0YVN3aXRjaC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUxvZ29BZnRlci9leHBlcmltZW50LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL2hvbWVJY29uLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtTWFpbk1lbnVBZnRlci9mZWVkYmFjay5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVByb21vdGVMb2dpbi9Qcm9tb3RlTG9naW4uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlci9wbnhYbWwuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1TZXJ2aWNlSGVhZGVyQWZ0ZXIvcmVwb3J0QVByb2JsZW0uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvYW5ub3VuY2VtZW50cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9mZWVkYmFja0Fubm91bmNlbWVudC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9maW5lc01lc3NhZ2UuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvZmFjdG9yaWVzL2ZlZWRTZXJ2aWNlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL2ZhY3Rvcmllcy9mZWVkYmFja1NlcnZpY2UuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvZmFjdG9yaWVzL21lc3NhZ2VTZXJ2aWNlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL21haW4uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvdXRpbHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlL2NvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby9leHBsb3JlL2hlbHBlci5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2ZhY2V0cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL3JlY29yZHMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby91c2VyLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vdmlldy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ZlbmRvci9jc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7Ozs7Ozs7Ozs7QUFXQTs7O0FBRkE7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7SUFHcUIsZTs7Ozs7Ozt3QkFFRjtBQUNmOzs7Ozs7Ozs7OztBQVlBLGFBQU8sQ0FDTCxFQUFDLE1BQU0sa0JBQVAsRUFBMkIsb0NBQTNCLEVBQXFELFNBQVMsS0FBOUQsRUFBcUUsVUFBVSxnQkFBL0UsRUFBaUcsY0FBYyxJQUEvRyxFQURLLEVBRUwsRUFBQyxNQUFNLFdBQVAsRUFBb0IsZ0NBQXBCLEVBQTRDLFNBQVMsSUFB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Q0FBUixFQUFXLE9BQU8sT0FBTyxNQUFQLEdBQWdCLENBQXZDLEVBQTBDLEtBQUssSUFBTCxHQUFZLEtBQUssSUFBakIsR0FBd0IsS0FBSyxJQUF2RSxFQUE2RSxJQUFJLEtBQUssSUFBTCxHQUFZLEVBQUUsQ0FBZCxHQUFrQixFQUFFLENBQXJHLEVBQXdHO0FBQ3RHLGlCQUFPLElBQVAsQ0FBWSxPQUFPLENBQVAsRUFBVSxNQUFWLENBQWlCLE1BQU0sQ0FBTixDQUFqQixDQUFaO0FBQ0Q7QUFDRjtBQUNELGFBQU8sS0FBUDtBQUNBLGVBQVMsT0FBTyxJQUFQLENBQVksVUFBUyxDQUFULEVBQVksQ0FBWixFQUFlO0FBQ2xDLGVBQU8sRUFBRSxNQUFGLEdBQVcsRUFBRSxNQUFwQjtBQUNELE9BRlEsQ0FBVDtBQUdBLGVBQVMsT0FBTyxHQUFQLENBQVcsVUFBUyxJQUFULEVBQWU7QUFDakMsZUFBTyxLQUFLLElBQUwsQ0FBVSxFQUFWLENBQVA7QUFDRCxPQUZRLENBQVQ7QUFHQSxhQUFPLE1BQVA7QUFDRCxLQW5CRDs7QUFxQkEsV0FBTyxvQkFBUDtBQUVELEdBclNzQixFQUF2Qjs7QUF1U0EsTUFBSSxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsV0FBVyxJQUE1QyxHQUFtRCxPQUFPLEdBQTFELEdBQWdFLEtBQUssQ0FBekUsRUFBNEU7QUFDMUUsV0FBTyxFQUFQLEVBQVcsWUFBVztBQUNwQixhQUFPLG9CQUFQO0FBQ0QsS0FGRDtBQUdELEdBSkQsTUFJTztBQUNMLFdBQU8sT0FBTyxPQUFQLEtBQW1CLFdBQW5CLElBQWtDLFlBQVksSUFBOUMsR0FBcUQsT0FBckQsR0FBK0QsSUFBdEU7QUFDQSxTQUFLLG9CQUFMLEdBQTRCLG9CQUE1QjtBQUNEO0FBRUYsQ0FwVEQsRUFvVEcsSUFwVEgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAgRGVjbGFyZSB5b3VyIGNvbXBvbmVudHMgaGVyZS5cblxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XG4gIGh0dHA6Ly8yYWxpdHkuY29tLzIwMTcvMDEvaW1wb3J0LW9wZXJhdG9yLmh0bWxcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5pbXBvcnQgJy4vdXRpbHMnXG5cbi8qIGltcG9ydCB5b3VyIGNvbXBvbmVudCBjb25maWd1cmF0aW9uKi9cbmltcG9ydCB7ZXhwZXJpbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9leHBlcmltZW50J1xuaW1wb3J0IHtob21lSWNvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9ob21lSWNvbidcbmltcG9ydCB7YmV0YVN3aXRjaENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9iZXRhU3dpdGNoJ1xuaW1wb3J0IHtzb3VyY2VJY29uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9zb3VyY2VJY29uJ1xuaW1wb3J0IHtwbnhYbWxDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlci9wbnhYbWwnXG5pbXBvcnQge3BheU15RmluZXNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1GaW5lc092ZXJ2aWV3QWZ0ZXIvcGF5TXlGaW5lcydcbmltcG9ydCB7ZmVlZGJhY2tDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1NYWluTWVudUFmdGVyL2ZlZWRiYWNrJ1xuaW1wb3J0IHtzZWFyY2hUaXBDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmFsL3NlYXJjaFRpcCdcbmltcG9ydCB7cmVwb3J0QVByb2JsZW1Db25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1TZXJ2aWNlSGVhZGVyQWZ0ZXIvcmVwb3J0QVByb2JsZW0nXG5pbXBvcnQge2ZpbmVzTWVzc2FnZUNvbmZpZyBhcyBwYXlNeUZpbmVzTWVzc2FnZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9maW5lc01lc3NhZ2UnXG5pbXBvcnQge2Fubm91bmNlbWVudHNDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvYW5ub3VuY2VtZW50cydcbmltcG9ydCB7cHJvbW90ZUxvZ2luQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtUHJvbW90ZUxvZ2luL1Byb21vdGVMb2dpbidcbmltcG9ydCB7ZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmVlZGJhY2tBbm5vdW5jZW1lbnQnXG5pbXBvcnQge3N0YXRpY0FmdGVyQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRnVsbFZpZXdBZnRlci9zdGF0aWNBZnRlcidcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZnRlckNvbXBvbmVudHMge1xuXG4gIHN0YXRpYyBnZXQgYWxsKCkge1xuICAgIC8qXG4gICAgICBuYW1lID0gdGhlIHN1YiBlbGVtZW50IGluIHRoZSBhZnRlciBlbGVtZW50XG4gICAgICBjb25maWcgPSB0aGUgaW1wb3J0ZWQgY29uZmlndXJhdGlvbiBvYmplY3RcbiAgICAgIGVuYWJsZWQgPSB0cnVlL2ZhbHNlIHNob3VsZCB0aGUgY29tcG9uZW50IGJlIGNyZWF0ZWRcbiAgICAgIGFwcGVuZFRvID0gVGhlIGNvbXBvbmVudCBzaG91bGQgYmUgY3JlYXRlZCBpbiB0aGlzIGFmdGVyIGNvbXBvbmVudC5cblxuICAgICAgZXguIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9XG4gICAgICByZXN1bHRzIGluOlxuICAgICAgICA8cHJtLWxvZ28tYWZ0ZXIgcGFyZW50Q3RybD0nJGN0cmwnPlxuICAgICAgICAgIDxob21lLWljb24gcGFyZW50Q3RybD0nJGN0cmwnPjwvaG9tZS1pY29uPlxuICAgICAgICA8L3BybS1sb2dvLWFmdGVyPlxuICAgICovXG4gICAgcmV0dXJuIFtcbiAgICAgIHtuYW1lOiAnbGliaXMtZXhwZXJpbWVudCcsIGNvbmZpZzogZXhwZXJpbWVudENvbmZpZywgZW5hYmxlZDogZmFsc2UsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxuICAgICAge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcbiAgICAgIHtuYW1lOiAnYmV0YS1zd2l0Y2gnLCBjb25maWc6IGJldGFTd2l0Y2hDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInLCBlbmFibGVJblZpZXc6ICcuKid9LFxuICAgICAge25hbWU6ICdzb3VyY2UtaWNvbicsIGNvbmZpZzogc291cmNlSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcbiAgICAgIHtuYW1lOiAncG54LXhtbCcsIGNvbmZpZzogcG54WG1sQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1icmllZi1yZXN1bHQtY29udGFpbmVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzJywgY29uZmlnOiBwYXlNeUZpbmVzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1maW5lcy1vdmVydmlldy1hZnRlcicsIGVuYWJsZUluVmlldzogJy4qJ30sXG4gICAgICB7bmFtZTogJ2ZlZWRiYWNrJywgY29uZmlnOiBmZWVkYmFja0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbWFpbi1tZW51LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcbiAgICAgIHtuYW1lOiAncmVwb3J0LWEtcHJvYmxlbScsIGNvbmZpZzogcmVwb3J0QVByb2JsZW1Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXNlcnZpY2UtaGVhZGVyLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnLionfSxcbiAgICAgIHtuYW1lOiAncHJtLXNlYXJjaHRpcHMnLCBjb25maWc6IHNlYXJjaFRpcENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGwsIGVuYWJsZUluVmlldzogJy4qJ30sXG4gICAgICB7bmFtZTogJ3Byb21vdGUtbG9naW4nLCBjb25maWc6IHByb21vdGVMb2dpbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZXhwbG9yZS1tYWluLWFmdGVyJywgZW5hYmxlSW5WaWV3OiAgJ15LVUxldXZlbid9LFxuICAgICAge25hbWU6ICdhbm5vdW5jZW1lbnQtZmVlZGJhY2snLCBjb25maWc6IGZlZWRiYWNrQW5ub3VuY2VtZW50Q29uZmlnLCBlbmFibGVkOnRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJywgZW5hYmxlSW5WaWV3OiAnLionfSxcbiAgICAgIHtuYW1lOiAnc3RhdGljLWFmdGVyJywgY29uZmlnOiBzdGF0aWNBZnRlckNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZnVsbC12aWV3LWFmdGVyJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVuJ30sXG4gICAgICB7bmFtZTogJ2Fubm91bmNlbWVudCcsIGNvbmZpZzogYW5ub3VuY2VtZW50c0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnLCBlbmFibGVJblZpZXc6ICcuKid9LCAgICAgIFxuICAgICAge25hbWU6ICdwYXktbXktZmluZXMtbWVzc2FnZScsIGNvbmZpZzogcGF5TXlGaW5lc01lc3NhZ2VDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJywgZW5hYmxlSW5WaWV3OiAnXktVTGV1dmVuJ31cbiAgICBdLmZpbHRlciggKGNvbXBvbmVudCkgPT4gKCBjb21wb25lbnQuZW5hYmxlZCAmJiBuZXcgUmVnRXhwKGNvbXBvbmVudC5lbmFibGVJblZpZXcpLnRlc3Qod2luZG93LmFwcENvbmZpZy52aWQpICkgKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJGh0dHAsIGZlZWRiYWNrU2VydmljZVVSTCkge1xuICAgIHRoaXMuc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy5tZERpYWxvZyA9ICRtZERpYWxvZztcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcbiAgICB0aGlzLmh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCA9IGZlZWRiYWNrU2VydmljZVVSTDtcblxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICRzY29wZS5jYW5jZWxGZWVkYmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMubWREaWFsb2cuY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IHRoaXMuc2VuZEZlZWRiYWNrO1xuICAgICRzY29wZS5zZW5kRmVlZGJhY2sgPSAoYW5zd2VyKSA9PiB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcbiAgICAgICAgc2VsZi51c2VyID0gdXNlcjtcbiAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xuICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XG5cbiAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHN1YmplY3Q6ICRzY29wZS5mZWVkYmFjay5zdWJqZWN0LFxuICAgICAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXG4gICAgICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcbiAgICAgICAgICAgIGxvZ2dlZEluOiBzZWxmLnVzZXIuaXNMb2dnZWRJbigpLFxuICAgICAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXG4gICAgICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcbiAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcbiAgICAgICAgICAgIHR5cGU6ICdmZWVkYmFjaycsXG4gICAgICAgICAgICBmZWVkYmFjazogJHNjb3BlLmZlZWRiYWNrLm1lc3NhZ2UsXG4gICAgICAgICAgICBlbWFpbDogJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxuICAgICAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8ubGVuZ3RoID4gMCAmJiAkc2NvcGUuZmVlZGJhY2subWVzc2FnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxmLm1kRGlhbG9nLmhpZGUoKTtcblxuICAgICAgICAgICAgc2VsZi5odHRwKHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIHVybDogdGhpcy5mZWVkYmFja1NlcnZpY2VVUkwsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLUZyb20tRXhMLUFQSS1HYXRld2F5JzogdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICBzZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xuICAgICAgc2VsZi51c2VyID0gdXNlcjtcbiAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgICAgc2VsZi52aWV3ID0gdmlldztcbiAgICAgICAgJHNjb3BlLmZlZWRiYWNrID0ge1xuICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcbiAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgICBzdWJqZWN0OiAnZmVlZGJhY2snXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn1cblxuRGlhbG9nQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyRodHRwJywgJ2ZlZWRiYWNrU2VydmljZVVSTCddO1xuIiwiaW1wb3J0IHNlYXJjaFRpcEhUTUwgZnJvbSAnLi9zZWFyY2hUaXAuaHRtbCdcbmltcG9ydCB0aXBfZW5VU19IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2VuVVMuaHRtbCdcbmltcG9ydCB0aXBfZnJGUl9IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2ZyRlIuaHRtbCdcbmltcG9ydCB0aXBfbmxCRV9IVE1MIGZyb20gJy4vc2VhcmNoVGlwL25sQkUuaHRtbCdcblxuY2xhc3MgU2VhcmNoVGlwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGh0dHAsICRtZERpYWxvZykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcblxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xuICAgICAgICAnbmxfQkUnOiB7XG4gICAgICAgICAgJ3RpdGxlJzogJ1pvZWt0aXBzJyxcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIlpvZWt0aXBzIHdlZXJnZXZlblwiXG4gICAgICAgIH0sXG4gICAgICAgICdlbl9VUyc6IHtcbiAgICAgICAgICAndGl0bGUnOiAnU2VhcmNoIFRpcHMnLFxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiU2VhcmNoIFRpcHNcIlxuICAgICAgICB9LFxuICAgICAgICAnZnJfRlInOiB7XG4gICAgICAgICAgJ3RpdGxlJzogJ0FzdHVjZXM/JyxcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIkFzdHVjZXM/XCJcbiAgICAgICAgfSxcbiAgICAgIH1cblxuICAgICAgbGV0IHRpcHNIVE1MID0gdGlwX2VuVVNfSFRNTDtcbiAgICAgIHN3aXRjaCAobG9jYWxlKSB7XG4gICAgICAgIGNhc2UgJ2ZyX0ZSJzpcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9mckZSX0hUTUw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ25sX0JFJzpcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9ubEJFX0hUTUw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfZW5VU19IVE1MO1xuICAgICAgfVxuXG4gICAgICAkc2NvcGUudGl0bGUgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZSddO1xuICAgICAgJHNjb3BlLnRpdGxlX2xhYmVsID0gbG9jYWxlX3RleHRbbG9jYWxlXVsndGl0bGVfbGFiZWwnXTtcblxuICAgICAgJHNjb3BlLnNob3dTZWFyY2hUaXBzID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGxldCBwYXJlbnRFbCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgJG1kRGlhbG9nLnNob3coe1xuICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXG4gICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcbiAgICAgICAgICB0ZW1wbGF0ZTogdGlwc0hUTUwsXG4gICAgICAgICAgbG9jYWxzOiB7XG4gICAgICAgICAgICBpdGVtczogJHNjb3BlLml0ZW1zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBEaWFsb2dDb250cm9sbGVyKCRzY29wZSwgJG1kRGlhbG9nLCBpdGVtcykge1xuICAgICAgICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblNlYXJjaFRpcENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRodHRwJywgJyRtZERpYWxvZyddXG5cbmV4cG9ydCBsZXQgc2VhcmNoVGlwQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBTZWFyY2hUaXBDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogc2VhcmNoVGlwSFRNTFxufVxuIiwiaW1wb3J0IHNvdXJjZUljb25IVE1MIGZyb20gJy4vc291cmNlSWNvbi5odG1sJ1xuXG5jbGFzcyBTb3VyY2VJY29uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQsICRjb21waWxlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwYXJlbnRDdHJsID0gJHNjb3BlLiRwYXJlbnQuJGN0cmwucGFyZW50Q3RybDtcbiAgICB2YXIgaWNvbkNvbmYgPSBbe1xuICAgICAgJ3NvdXJjZWlkJzogJ2xpcmlhcycsXG4gICAgICAnaWNvblVybCc6ICcvL2xpbW8ubGliaXMuYmUvcHJpbW9fbGlicmFyeS9saWJ3ZWIvbGliaXMvaW1hZ2VzL2xpcmlhcy5qcGcnLFxuICAgICAgJ2ljb25UZXh0JzogJ0xpcmlhcydcbiAgICB9XTtcblxuICAgIHZhciBpY29uQ29uZlNvdXJjZXMgPSBpY29uQ29uZi5tYXAob2JqID0+IG9iai5zb3VyY2VpZCk7XG5cbiAgICBzZWxmLnNvdXJjZWlkID0gbnVsbDtcbiAgICBpZiAoJ3NvdXJjZWlkJyBpbiBwYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wpIHtcbiAgICAgIHNlbGYuc291cmNlaWQgPSBwYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wuc291cmNlaWRbMF07XG5cbiAgICAgIGlmIChpY29uQ29uZlNvdXJjZXMuaW5jbHVkZXMoc2VsZi5zb3VyY2VpZCkpIHtcbiAgICAgICAgc2VsZi5pY29uID0gaWNvbkNvbmYuZmluZChmdW5jdGlvbih4KSB7XG4gICAgICAgICAgcmV0dXJuIHguc291cmNlaWQgPT09IHNlbGYuc291cmNlaWQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2RpdicpLmFwcGVuZCgkY29tcGlsZShzb3VyY2VJY29uSFRNTCkoJHNjb3BlKSk7XG5cbiAgfVxufVxuXG5Tb3VyY2VJY29uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnXTtcblxuZXhwb3J0IGxldCBzb3VyY2VJY29uQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBTb3VyY2VJY29uQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6ICcnXG59XG4iLCJpbXBvcnQgcGF5TXlGaW5lc0hUTUwgZnJvbSAnLi9wYXlNeUZpbmVzLmh0bWwnXG5cbmNsYXNzIFBheU15RmluZXNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuc2hvd1BheU15RmluZXMgPSBmYWxzZTsgIFxuICB9XG5cbiAgJG9uSW5pdCgpIHtcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XG4gICAgICBpZiAoL15LVUxldXZlbi8udGVzdCh2aWV3LmNvZGUpKSB7XG4gICAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcbiAgICAgICAgICBpZiAodXNlci5maW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQYXlNeUZpbmVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuZXhwb3J0IGxldCBwYXlNeUZpbmVzQ29uZmlnID0ge1xuICBiaW5kaW5nczp7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFBheU15RmluZXNDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogcGF5TXlGaW5lc0hUTUxcbn1cbiIsIi8qKlxuICogVGhlIGFsdG1ldHJpY3MgY29tcG9uZW50IGNvbnRyb2xsZXIuIChodHRwczovL2dpdGh1Yi5jb20vRGV0LUtvbmdlbGlnZS1CaWJsaW90ZWsvcHJpbW8tZXhwbG9yZS1yZXgvYmxvYi9tYXN0ZXIvanMvYWx0bWV0cmljcy5jb21wb25lbnQuanMpXG4gKi9cbmltcG9ydCBzdGF0aWNBZnRlckhUTUwgZnJvbSAnLi9zdGF0aWNBZnRlci5odG1sJ1xuXG5jbGFzcyBzdGF0aWNBZnRlckNvbnRyb2xsZXIge1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJHdpbmRvdywgJGh0dHAsICRlbGVtZW50LCBhbmd1bGFyTG9hZCwgRnVsbFZpZXdTZWN0aW9uU2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKCdzdGF0aWNBZnRlckNvbnRyb2xsZXIgKyBjb25zdHJ1Y3RvcicpXG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuYW5ndWxhckxvYWQgPSBhbmd1bGFyTG9hZDtcbiAgICB0aGlzLkZ1bGxWaWV3U2VjdGlvblNlcnZpY2UgPSBGdWxsVmlld1NlY3Rpb25TZXJ2aWNlO1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgfVxuXG4gICRvbmNoYW5nZSgpe1xuICAgIGNvbnNvbGUubG9nKCdzb21ldGhpbmcgaGFzIGNoYW5nZWQgZm9yIHN0YXRpY0FmdGVyQ29udHJvbGxlcicpO1xuICB9XG4gICRvbkluaXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdGF0aWNBZnRlckNvbnRyb2xsZXIgKyBvbkluaXQnKVxuICAgICAgdGhpcy5kb2kgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtLnBueC5hZGRhdGEuZG9pID8gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguYWRkYXRhLmRvaVswXSA6ICcnO1xuICAgICAgdGhpcy5zZXJ2aWNlcyA9IHRoaXMucGFyZW50Q3RybC5wYXJlbnRDdHJsLnNlcnZpY2VzO1xuICAgICBcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgIH07XG5cblxuICAgIGxldCBmdWxsVmlld0VsZW1lbnQgPSB0aGlzLiRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpWzBdO1xuXG4gICAgdGhpcy5zdGF0aWNBZnRlclNlY3Rpb25EYXRhID0ge1xuICAgICAgc2Nyb2xsSWQ6IFwic3RhdGljSW50XCIsXG4gICAgICBzZXJ2aWNlTmFtZTogXCJzdGF0aWNJbnRcIixcbiAgICAgIHRpdGxlOiBcIlN0YXRpYyBJbnNlcnRpb25cIlxuICAgIH07XG5cbiAgICAvLyBhbGVydCAoJ0EgcG90cG91cnJpIG9mIHBlZGlhdHJpYyB1cm9sb2d5IFdpbGNveCwgRHVuY2FuJylcbiAgICBsZXQgc2VjdGlvblRpdGxlU2VsZWN0b3IgPSAnaDRbdHJhbnNsYXRlPVwiJyArIHRoaXMuc3RhdGljQWZ0ZXJTZWN0aW9uRGF0YS50aXRsZSArICdcIl0nO1xuICAgIFxuICAgIGxldCB1bmJpbmRTdGF0aWNXYXRjaGVyID0gdGhpcy4kc2NvcGUuJHdhdGNoKCgpID0+XG4gICAgICBmdWxsVmlld0VsZW1lbnQucXVlcnlTZWxlY3RvcihzZWN0aW9uVGl0bGVTZWxlY3RvciksXG4gICAgLy8gIGZ1bGxWaWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjc2VydmljZXMtaW5kZXgnKSxcbiAgICAgIChuZXdWYWwsIG9sZFZhbCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbmV3ICcgKyBzZWN0aW9uVGl0bGVTZWxlY3Rvcik7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbClcbiAgICAgICAgY29uc29sZS5sb2coJ29sZCcgK3NlY3Rpb25UaXRsZVNlbGVjdG9yICk7XG4gICAgICAgIGNvbnNvbGUubG9nKG9sZFZhbCk7XG4gICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICBsZXQgc2VjdGlvbkJvZHkgPSBuZXdWYWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuc2VjdGlvbi1ib2R5Jyk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3dhdGNoIHNlY3Rpb25UaXRsZVNlbGVjdG9yJyk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy4kZWxlbWVudCk7XG4gICAgICAgICAgc2VjdGlvbkJvZHkuYXBwZW5kQ2hpbGQodGhpcy4kZWxlbWVudFswXSk7XG4gICAgICAgICAgdW5iaW5kU3RhdGljV2F0Y2hlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgXG4gICAgLypcbiAgICBpZiAodGhpcy5kb2kpIHtcbiAgICAgIHRoaXMuRnVsbFZpZXdTZWN0aW9uU2VydmljZS5pbnNlcnRTZWN0aW9uRGF0YSh0aGlzLnNlcnZpY2VzLCBhbHRtZXRyaWNzU2VjdGlvbkRhdGEpO1xuICAgIH1cbiAgICAvL3RoaXMuJHNjb3BlLiRhcHBseSgpO1xuICAgICovXG4gICAgdGhpcy5GdWxsVmlld1NlY3Rpb25TZXJ2aWNlLmluc2VydFNlY3Rpb25EYXRhKHRoaXMuc2VydmljZXMsIHRoaXMuc3RhdGljQWZ0ZXJTZWN0aW9uRGF0YSk7XG5cbiAgICByZXR1cm4gXG4gIH1cblxuICAvKipcbiAgICogIE1ldGhvZCB0byBsb2FkIHRoZSBhbHRtZXRyaWNzIGJhZGdlLlxuICAgKiAgQHJldHVybiB7UHJvbWlzZX0gQSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZCBpZiB0aGUgYmFkZ2UgaXMgbG9hZGVkLCBcbiAgICogIGFuZCB0byBiZSByZWplY3RlZCBpZiBpdCBjb3VsZCBub3QgYmUgbG9hZGVkLlxuICAgKi9cbiAgXG4gICRvbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuJHdpbmRvdy5zdGF0aWNBZnRlcikge1xuICAgICAgZGVsZXRlIHRoaXMuJHdpbmRvdy5zdGF0aWNBZnRlcjtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBSZW1vdmUgYW55IG90aGVyIEpTIG9yIENTUyBmaWxlcyB0aGF0IGFyZSBsb2FkZWQuIFRoZSBVUkxzIGJlbG93IG1heSBjaGFuZ2UhXG4gICAgLypcbiAgICB0aGlzLnNjcmlwdExvYWRlclNlcnZpY2UudW5sb2FkKCdodHRwczovL2QxYnhoOHVhczFtbnc3LmNsb3VkZnJvbnQubmV0L2Fzc2V0cy9lbWJlZC5qcycsICdqcycpO1xuICAgIHRoaXMuc2NyaXB0TG9hZGVyU2VydmljZS51bmxvYWQoJ2h0dHBzOi8vZDFieGg4dWFzMW1udzcuY2xvdWRmcm9udC5uZXQvYXNzZXRzL2FsdG1ldHJpY19iYWRnZXMtOGYyNzFhZGIxODRjMjFjYzUxNjlhN2Y2N2Y3ZmU1YWIuanMnLCAnanMnKTtcbiAgICB0aGlzLnNjcmlwdExvYWRlclNlcnZpY2UudW5sb2FkKCdodHRwczovL2QxYnhoOHVhczFtbnc3LmNsb3VkZnJvbnQubmV0L2Fzc2V0cy9lbWJlZC0yYzQ3MTA1YjYzODE2MDQ4OThiYmY4YWU4YTY4MDM1MC5jc3MnLCAnY3NzJyk7XG4gICAqL1xuICAgIGNvbnNvbGUubG9nKCdzdGF0aWNBZnRlciBpcyBkZXN0cm95ZWQhLicpO1xuICB9O1xufTtcblxuc3RhdGljQWZ0ZXJDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckd2luZG93JywgJyRodHRwJywgJyRlbGVtZW50JywgJ2FuZ3VsYXJMb2FkJywgJ0Z1bGxWaWV3U2VjdGlvblNlcnZpY2UnXTtcblxuZXhwb3J0IGxldCBzdGF0aWNBZnRlckNvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogc3RhdGljQWZ0ZXJDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogc3RhdGljQWZ0ZXJIVE1MXG59XG4iLCJpbXBvcnQgYmV0YVN3aXRjaEhUTUwgZnJvbSAnLi9iZXRhU3dpdGNoLmh0bWwnXG5cbmNsYXNzIEJldGFTd2l0Y2hDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYuJHNjb3BlID0gJHNjb3BlO1xuXG4gICAgJHNjb3BlLnNob3dCZXRhU3dpdGNoID0gdHJ1ZTtcbiAgICAkc2NvcGUudXNlQmV0YSA9IHRydWU7ICBcblxuICAgICRzY29wZS5vbkNoYW5nZVVzZUJldGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoISAkc2NvcGUudXNlQmV0YSl7XG4gICAgICAgIHNlbGYuZ29Ub09sZFVJKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdvVG9PbGRVSSgpIHtcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPScvcHJpbW9fbGlicmFyeS9saWJ3ZWIvYWN0aW9uL3NlYXJjaC5kbz92aWQ9JysgdGhpcy5vbGRWaWQ7XG4gIH1cblxuICAkb25Jbml0KCkge1xuICAgIHZhciBMaW5rVG9CZXRhVmlld3MgPSB7XG4gICAgICAnQUNWJzonQUNWJyxcbiAgICAgICdCUEInOidCUEInLFxuICAgICAgJ0ZBUk8nOidGQVJPJyxcbiAgICAgICdGT0RGSU4nOidGT0RGSU4nICxcbiAgICAgICdHQ0xEJzonR0NMRCcsXG4gICAgICAnR1NCJzonR1NCJyxcbiAgICAgICdHU0cnOidHU0cnLFxuICAgICAgJ0lNRUMnOidJTUVDJyxcbiAgICAgICdLQURPQyc6J0tBRE9DJyxcbiAgICAgICdLQkMnOidLQkMnLFxuICAgICAgJ0tNS0cnOidLTUtHJyxcbiAgICAgICdLVUxldXZlbic6J0tVTGV1dmVuX1VYJyxcbiAgICAgICdMSUJBUic6J0xJQkFSJyxcbiAgICAgICdMVUNBJzonTFVDQV9VWCcsXG4gICAgICAnTkJCJzonTkJCJyxcbiAgICAgICdPRElTRUUnOidPRElTRUVfVVgnLFxuICAgICAgJ09GTyc6J09GTycsXG4gICAgICAnUkJJTlMnOidSQklOUycsXG4gICAgICAnUkVMSSc6J1JFTEknLFxuICAgICAgJ1JNQ0EnOidSTUNBJyxcbiAgICAgICdTRVJWJzonU0VSVicsXG4gICAgICAnVE1PUkVLJzonVE1PUkVLX1VYJyxcbiAgICAgICdUTU9SRU0nOidUTU9SRU1BX1VYJyxcbiAgICAgICdWRElDJzonVkRJQycsXG4gICAgICAnVklWRVNfS0FUSE8nOidWSVZFU19LQVRIT19VWCcsXG4gICAgICAnVklWRVNfS0hCTyc6J1ZJVkVTX0tIQk9fVVgnLFxuICAgICAgJ1ZMUCc6J1ZMUCcsXG4gICAgICAnS1VMZXV2ZW5fVE1PUkVNJzonS1VMZXV2ZW5fVE1PUkVNX1VYJyxcbiAgICAgICdLVUxldXZlbl9VQ0xMJzonS1VMZXV2ZW5fVUNMTF9VWCcsXG4gICAgICAnS1VMZXV2ZW5fVE1PUkVLJzonS1VMZXV2ZW5fVE1PUkVLX1VYJyxcbiAgICAgICdLVUxldXZlbl9MVUNBJzonS1VMZXV2ZW5fTFVDQV9VWCcsXG4gICAgICAnS1VMZXV2ZW5fVklWRVNfS0hCTyc6J0tVTGV1dmVuX1ZJVkVTX0tIQk9fVVgnLFxuICAgICAgJ0tVTGV1dmVuX09ESVNFRSc6J0tVTGV1dmVuX09ESVNFRV9VWCcsXG4gICAgICAnS0hMSU0nOidVQ0xMX0xJTUJVUkdfVVgnLFxuICAgICAgJ0tITCc6J1VDTExfTEVVVkVOX1VYJ1xuICAgIH1cblxuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgIGlmICgvXkVDQi8udGVzdCh2aWV3LmNvZGUpKSB7XG4gICAgICAgIHRoaXMuc2hvd0JldGFTd2l0Y2ggPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMub2xkVmlkID0gT2JqZWN0LmtleXMoTGlua1RvQmV0YVZpZXdzKS5maW5kKGtleSA9PiBMaW5rVG9CZXRhVmlld3Nba2V5XSA9PT0gdmlldy5jb2RlKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBsZXQgYmV0YVN3aXRjaENvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogQmV0YVN3aXRjaENvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBiZXRhU3dpdGNoSFRNTFxufVxuIiwiLyogY29tcG9uZW50IHRvIGRvIGFsbCB5b3VyIGV4cGVyaW1lbnRhbCBzdHVmZiAqL1xuLyogW2VufGRpc11hYmxlIGluIGNvbXBvbmVudHMqL1xuXG5jbGFzcyBFeHBlcmltZW50Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdFeHBlcmltZW50OicpO1xuICB9XG59XG5cbi8vRXhwZXJpbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnc2VhcmNoUmVzdWx0cyddO1xuXG5leHBvcnQgbGV0IGV4cGVyaW1lbnRDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEV4cGVyaW1lbnRDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImltcG9ydCBob21lSWNvbkhUTUwgZnJvbSAnLi9ob21lSWNvbi5odG1sJ1xuXG5jbGFzcyBIb21lSWNvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHApIHtcbiAgICBsZXQgY3RybCA9IHRoaXM7XG5cbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcbiAgICAgIGxldCB2aWQgPSB2aWV3LmNvZGU7XG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XG5cbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcbiAgICAgIGxldCBsb2NhbGVMaWJyYXJ5TG9nbyA9ICdjdXN0b20vJyArIHZpZCArICcvaW1nL2xpYnJhcnktbG9nby0nICsgbG9jYWxlICsgJy5wbmcnO1xuXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XG4gICAgICAgICRodHRwKHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsb2NhbGVMaWJyYXJ5TG9nbztcbiAgICAgICAgICAkY29tcGlsZSgkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSkoJHNjb3BlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgICAgY3RybC5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcbiAgICB9KTtcbiAgfVxufVxuXG5Ib21lSWNvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRodHRwJ107XG5cbmV4cG9ydCBsZXQgaG9tZUljb25Db25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEhvbWVJY29uQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IGhvbWVJY29uSFRNTFxufVxuIiwiaW1wb3J0IGZlZWRiYWNrSFRNTCBmcm9tICcuL2ZlZWRiYWNrLmh0bWwnXG5pbXBvcnQgZmVlZGJhY2tEaWFsb2dIVE1MIGZyb20gJy4vZmVlZGJhY2tEaWFsb2cuaHRtbCdcblxuY2xhc3MgRmVlZGJhY2tDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsIEZlZWRiYWNrU2VydmljZSl7XG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnZGl2JykuYXBwZW5kKCRjb21waWxlKGZlZWRiYWNrSFRNTCkoJHNjb3BlKSk7XG4gICAgdGhpcy5mZWVkYmFja1NlcnZpY2UgPSBGZWVkYmFja1NlcnZpY2U7XG4gIH1cblxuICBzaG93RmVlZGJhY2tGb3JtKCRldmVudCkge1xuICAgIHRoaXMuZmVlZGJhY2tTZXJ2aWNlLnNob3coJGV2ZW50LCBmZWVkYmFja0RpYWxvZ0hUTUwpO1xuICB9XG5cbn1cblxuRmVlZGJhY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICdGZWVkYmFja1NlcnZpY2UnXTtcblxuZXhwb3J0IGxldCBmZWVkYmFja0NvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogRmVlZGJhY2tDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImltcG9ydCBwcm9tb3RlTG9naW5IVE1MIGZyb20gJy4vcHJvbW90ZUxvZ2luQ29uZmlnLmh0bWwnXG5cbmNsYXNzIFByb21vdGVMb2dpbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5zaG93QXV0b21hdGljTG9naW4gPSBmYWxzZTsgIFxuXG4gICAgc2VsZi5hbHdheXNTaWduaW5DaGVja0JveCA9IGZhbHNlO1xuICAgIHNlbGYuYWx3YXlzU2lnbmluID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmltb1Byb21vdGVMb2dpblwiKTtcbiAgICBpZiAoc2VsZi5hbHdheXNTaWduaW4pIHtcbiAgICAgIHNlbGYuYWx3YXlzU2lnbmluQ2hlY2tCb3ggPSB0cnVlO1xuICAgIH1cblxuICAgICRzY29wZS5hbHdheXNTaWduaW5DaGVja2VkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIHNlbGYuYWx3YXlzU2lnbmluQ2hlY2tCb3ggKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJywgJ2Fsd2F5c1NpZ25pbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3ByaW1vUHJvbW90ZUxvZ2luJyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gICRvbkluaXQoKSB7XG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xuICAgICAgaWYgKC9eS1VMZXV2ZW4vLnRlc3Qodmlldy5jb2RlKSkge1xuICAgICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgdGhpcy5zaG93QXV0b21hdGljTG9naW4gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNob3dBdXRvbWF0aWNMb2dpbiA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGxldCBwcm9tb3RlTG9naW5Db25maWcgPSB7XG4gIGJpbmRpbmdzOntcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogUHJvbW90ZUxvZ2luQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IHByb21vdGVMb2dpbkhUTUxcbn1cbiIsImltcG9ydCBwbnhYbWxIVE1MIGZyb20gJy4vcG54WG1sLmh0bWwnXG5jbGFzcyBQbnhYbWxDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0cnkge1xuICAgICAgICB0aGlzLnJlY29yZGlkID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHRoaXMucmVjb3JkaWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gICRvbkluaXQoKXtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3BueC14bWwtdHJpZ2dlcicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncG54LXhtbC10cmlnZ2VyJyk7XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwb3NpdGlvbjpmaXhlZDtyaWdodDowO2JvdHRvbTowO2hlaWdodDoyMHB4O3dpZHRoOjIwcHg7ei1pbmRleDoxMDAwO2JhY2tncm91bmQtY29sb3I6YmxhY2s7b3BhY2l0eTouMDMnKTtcbiAgICAgIGRpdi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XG5cbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbngteG1sJykpKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgbGV0IHBueFhtbENvbmZpZyA9IHtcbiAgYmluZGluZ3MgOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFBueFhtbENvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBwbnhYbWxIVE1MXG59XG4iLCJpbXBvcnQgcmVwb3J0QVByb2JsZW1IVE1MIGZyb20gJy4vcmVwb3J0QVByb2JsZW0uaHRtbCdcbmltcG9ydCByZXBvcnRBUHJvYmxlbURpYWxvZ0hUTUwgZnJvbSAnLi9yZXBvcnRBUHJvYmxlbURpYWxvZy5odG1sJ1xuXG5jbGFzcyBSZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigkZWxlbWVudCwgJGNvbXBpbGUsICRzY29wZSwgJG1kRGlhbG9nLCAkbWRUb2FzdCwgJGh0dHApIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKC9ebnVpXFwuZ2V0aXRcXC4vLnRlc3QodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwudGl0bGUpKSB7XG4gICAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdoNCcpLmFmdGVyKCRjb21waWxlKHJlcG9ydEFQcm9ibGVtSFRNTCkoJHNjb3BlKSk7XG5cbiAgICAgIGxldCByZWNvcmREYXRhID0gc2VsZi5jdXJyZW50UmVjb3JkO1xuXG4gICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XG4gICAgICAgIHNlbGYudXNlciA9IHVzZXI7XG4gICAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xuXG4gICAgICAgICAgc2VsZi5zaG93UmVwb3J0QVByb2JsZW1Gb3JtID0gKCRldmVudCkgPT4ge1xuICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xuICAgICAgICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcbiAgICAgICAgICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiByZXBvcnRBUHJvYmxlbURpYWxvZ0hUTUwsXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJG1kRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlcG9ydCA9IHtcbiAgICAgICAgICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgICAgICAgc3ViamVjdDogJ3JlcG9ydCBhIHByb2JsZW0nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxSZXBvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbmRSZXBvcnQgPSBmdW5jdGlvbihhbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmRJZDogcmVjb3JkRGF0YS5wbnguY29udHJvbC5yZWNvcmRpZFswXSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUeXBlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbklkOiB1c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICB0YWI6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVjb3JkRGF0YS5wbnguZGlzcGxheS50aXRsZVswXSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3Jlc291cmNlX3Byb2JsZW0nLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAkc2NvcGUucmVwb3J0LnN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBpbnN0OiBzZWxmLnZpZXcuaW5zdGl0dXRpb24uY29kZSxcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VkSW46IHNlbGYudXNlci5pc0xvZ2dlZEluKCksXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBzZWxmLnVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICRzY29wZS5yZXBvcnQubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlUbzogJHNjb3BlLnJlcG9ydC5yZXBseVRvIHx8IHNlbGYudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yZXBvcnQucmVwbHlUby5sZW5ndGggPiAwICYmICRzY29wZS5yZXBvcnQubWVzc2FnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL3JlcG9ydF9hX3Byb2JsZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtRnJvbS1FeEwtQVBJLUdhdGV3YXknOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkuZmVlZGJhY2suc3VjY2VzcycpIHx8ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJztcbiAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJztcbiAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pOyAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9OyAvL3Nob3dSZXBvcnRBUHJvYmxlbUZvcm1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgY3VycmVudFJlY29yZCgpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXG4gICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudEN0cmwpO1xuICAgICAgcmV0dXJuIGVsZW1lbnRDdHJsLml0ZW07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cblJlcG9ydEFQcm9ibGVtQ29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyRodHRwJ107XG5cbmV4cG9ydCBsZXQgcmVwb3J0QVByb2JsZW1Db25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6ICcnXG59XG4iLCJjbGFzcyBBbm5vdW5jZW1lbnRzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgTWVzc2FnZVNlcnZpY2UpIHtcbiAgICBNZXNzYWdlU2VydmljZS5zaG93KCcnLCAkc2NvcGUpO1xuICB9XG59XG5cbkFubm91bmNlbWVudHNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICdNZXNzYWdlU2VydmljZSddO1xuXG5leHBvcnQgbGV0IGFubm91bmNlbWVudHNDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcbiAgY29udHJvbGxlcjogQW5ub3VuY2VtZW50c0NvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiAnJ1xufVxuIiwiaW1wb3J0IGZlZWRiYWNrQW5ub3VuY2VtZW50SFRNTCBmcm9tICcuL2ZlZWRiYWNrQW5ub3VuY2VtZW50Lmh0bWwnXG5pbXBvcnQgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dIVE1MIGZyb20gJy4vZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2cuaHRtbCdcbmltcG9ydCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIgZnJvbSAnLi9mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZydcblxuY2xhc3MgRmVlZGJhY2tBbm5vdW5jZW1lbnRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkdHJhbnNsYXRlLCAkdGltZW91dCwgRmVlZGJhY2tTZXJ2aWNlLCBNZXNzYWdlU2VydmljZSwgYWN0aW9uSWNvbnMpIHtcblxuICAgIC8vJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy9sZXQgbWVzc2FnZSA9ICR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5zdXJ2ZXkuYW5ub3VuY2VtZW50Jyk7XG4gICAgICBsZXQgc2hvd0ZlZWRiYWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByaW1vRmVlZGJhY2snKTtcbiAgICAgIGlmIChzaG93RmVlZGJhY2sgPT0gbnVsbCkge1xuICAgICAgICAkdHJhbnNsYXRlKCdsYnMubnVpLnN1cnZleS5hbm5vdW5jZW1lbnQnKS50aGVuKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhmZWVkYmFja0Fubm91bmNlbWVudEhUTUwucmVwbGFjZSgne3ttZXNzYWdlfX0nLCBtZXNzYWdlKSwge1xuICAgICAgICAgICAgc2NvcGU6ICRzY29wZSxcbiAgICAgICAgICAgIGhpZGVEZWxheTogMCxcbiAgICAgICAgICAgIGFjdGlvbkxhYmVsOiAkdHJhbnNsYXRlLmluc3RhbnQoJ21haW5tZW51LmxhYmVsLmZlZWRiYWNrJykgfHwgJ0ZlZWRiYWNrJyxcbiAgICAgICAgICAgIGFjdGlvbjpcbiAgICAgICAgICAgICAgKCRldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIEZlZWRiYWNrU2VydmljZS5zaG93KCRldmVudCwgZmVlZGJhY2tBbm5vdW5jZW1lbnREaWFsb2dIVE1MLCBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIC8vfSwgMjAwMCk7XG5cbiAgfVxufVxuXG5GZWVkYmFja0Fubm91bmNlbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyR0cmFuc2xhdGUnLCAnJHRpbWVvdXQnLCAnRmVlZGJhY2tTZXJ2aWNlJywgJ01lc3NhZ2VTZXJ2aWNlJywgJ2FjdGlvbkljb25zJ107XG5cbmV4cG9ydCBsZXQgZmVlZGJhY2tBbm5vdW5jZW1lbnRDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEZlZWRiYWNrQW5ub3VuY2VtZW50Q29udHJvbGxlcixcbiAgdGVtcGxhdGU6ICcnXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBmZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICR0cmFuc2xhdGUsICRodHRwLCBmZWVkYmFja1NlcnZpY2VVUkwsIE1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5zY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLm1kRGlhbG9nID0gJG1kRGlhbG9nO1xuICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xuICAgIHRoaXMuaHR0cCA9ICRodHRwO1xuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcbiAgICB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCA9IGZlZWRiYWNrU2VydmljZVVSTDtcblxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICRzY29wZS5jYW5jZWxGZWVkYmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMubWREaWFsb2cuY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IChhbnN3ZXIpID0+IHtcbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICBzdWJqZWN0OiAkc2NvcGUuZmVlZGJhY2suc3ViamVjdCxcbiAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXG4gICAgICAgIGluc3Q6IHNlbGYudmlldy5pbnN0aXR1dGlvbi5jb2RlLFxuICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcbiAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXG4gICAgICAgIHVzZXI6IHNlbGYudXNlci5uYW1lLFxuICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXG4gICAgICAgIHR5cGU6ICdzdXJ2ZXknLFxuICAgICAgICBmZWVkYmFjazogJHNjb3BlLmZlZWRiYWNrLmFuc3dlcnMsXG4gICAgICAgIGVtYWlsOiAkc2NvcGUuZmVlZGJhY2sucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXG4gICAgICAgIHVzZXJJZDogc2VsZi51c2VyLmlkIHx8ICcnLFxuICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgIH07XG5cbiAgICAgIGlmICgkc2NvcGUuZmVlZGJhY2sucmVwbHlUby5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNlbGYubWREaWFsb2cuaGlkZSgpO1xuXG4gICAgICAgIHNlbGYuaHR0cCh7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgdXJsOiB0aGlzLmZlZWRiYWNrU2VydmljZVVSTCxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ1gtRnJvbS1FeEwtQVBJLUdhdGV3YXknOiB1bmRlZmluZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJpbW9GZWVkYmFjaycsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5zdWNjZXNzJykgfHwgJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnO1xuICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3cobWVzc2FnZSwge3Njb3BlOiRzY29wZSwgaGlkZURlbGF5OiA1MDAwfSk7XG4gICAgICAgICAgLy9zZWxmLm1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xuICAgICAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGxldCBtZXNzYWdlID0gc2VsZi50cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS5mZWVkYmFjay5mYWlsJykgfHwgJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJztcbiAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KG1lc3NhZ2UsIHtzY29wZTokc2NvcGUsIGhpZGVEZWxheTogNTAwMH0pO1xuICAgICAgICAgIC8vc2VsZi5tZFRvYXN0LnNob3dTaW1wbGUoJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcbiAgICAgIHNlbGYudXNlciA9IHVzZXI7XG4gICAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XG4gICAgICAgIHNlbGYudmlldyA9IHZpZXc7XG4gICAgICAgICRzY29wZS5mZWVkYmFjayA9IHtcbiAgICAgICAgICByZXBseVRvOiBzZWxmLnVzZXIuZW1haWwsXG4gICAgICAgICAgYW5zd2VyczogW10sXG4gICAgICAgICAgc3ViamVjdDogJ2ZlZWRiYWNrJ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mZWVkYmFja0Fubm91bmNlbWVudERpYWxvZ0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckdHJhbnNsYXRlJywgJyRodHRwJywgJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdNZXNzYWdlU2VydmljZSddO1xuIiwiY2xhc3MgRmluZXNNZXNzYWdlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKE1lc3NhZ2VTZXJ2aWNlLCAkdHJhbnNsYXRlLCAkcm9vdFNjb3BlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcbiAgICAgIHNlbGYudXNlciA9IHVzZXI7XG4gICAgICBpZiAodXNlci5maW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vVE9ETzpleHRyYWN0IGh0bWwgdG8gaXRzIG93biBmaWxlLiBmaW5kIG91dCBob3cgdG8gcmVzb2x2ZSB7e319XG5cbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkueW91SGF2ZUZpbmVzJyk7XG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xcJDAvLCB1c2VyLmZpbmVzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IHBheSA9ICR0cmFuc2xhdGUuaW5zdGFudCgnbGJzLm51aS55b3VIYXZlRmluZXMucGF5Jyk7XG4gICAgICAgIFxuICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93KGBcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiYWxpZ24tc2VsZjpjZW50ZXI7XCI+JHttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxhIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO2NvbG9yOiB3aGl0ZTtcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJtZC1idXR0b24gbWQtcmFpc2VkIG1kLXNlY3VuZGFyeVwiIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9wYXlfbXlfZmluZXMnPiR7cGF5fTwvYT5cbiAgICAgICAgICBgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5GaW5lc01lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ01lc3NhZ2VTZXJ2aWNlJywgJyR0cmFuc2xhdGUnLCAnJHJvb3RTY29wZSddO1xuXG5leHBvcnQgbGV0IGZpbmVzTWVzc2FnZUNvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogRmluZXNNZXNzYWdlQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6ICcnXG59XG4iLCJleHBvcnQgbGV0IGZlZWRTZXJ2aWNlID0gWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XG4gIHZhciBmZWVkQW50aUNhY2hlID0gXCI/JnQ9XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHJhbmRvbU51bTtcbiAgdmFyIHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwICsgMSk7XG4gIHZhciBmZWVkZGF5c29sZCA9IDYwO1xuXG4gIHZhciBkbSA9IG5ldyBEYXRlKCk7XG4gIGRtLnNldEhvdXJzKDI0LCAwLCAwLCAwKTtcblxuICB2YXIgYXBpX2VuZHBvaW50ID0gJ2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvZmVlZF9hZ2dyZWdhdG9yPyc7XG5cbiAgZnVuY3Rpb24gcmVhZEZlZWRDb25maWcodXJsKSB7XG4gICAgcmV0dXJuICRodHRwKHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlgtRnJvbS1FeEwtQVBJLUdhdGV3YXlcIjogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWFkRmVlZCh1cmwpIHtcbiAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgdXJsOiBhcGlfZW5kcG9pbnQgKyB1cmwsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiWC1Gcm9tLUV4TC1BUEktR2F0ZXdheVwiOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlRmVlZChjb25mKSB7XG4gICAgcmV0dXJuIHJlYWRGZWVkKGNvbmYuZmVlZFVybCkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29uZi5mZWVkVXJsKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29uZi5mZWVkRmlsdGVyKTtcbiAgICAgIHZhciBwYXR0ID0gL15lbnRyeVxcLnxeaXRlbVxcLi9pO1xuICAgICAgdmFyIGZpbHRlcmVkUmVzdWx0cyA9IHJlcy5kYXRhLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICB2YXIgcmV0dmFsID0gZmFsc2U7XG4gICAgICAgIGlmIChpdGVtLnB1YkRhdGUgPT09IFwiXCIpIHtcbiAgICAgICAgICBpdGVtLnB1YkRhdGUgPSBkbTtcbiAgICAgICAgICByZXMuZGF0YS5pdGVtc1tpbmRleF0ucHViRGF0ZSA9IGRtO1xuICAgICAgICB9XG4gICAgICAgIC8qIG5vIGZpbHRlciBjb25maWd1cmVkICovXG4gICAgICAgIGlmIChjb25mLmZlZWRGaWx0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25mLmZlZWRGaWx0ZXIuZm9yRWFjaChmdW5jdGlvbihmKSB7XG4gICAgICAgICAgaWYgKHBhdHQudGVzdChmLnBhcmFtKSkge1xuICAgICAgICAgICAgdmFyIGZmID0gZi5wYXJhbS5yZXBsYWNlKHBhdHQsIFwiXCIpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbVtmZl0pKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtW2ZmXS5pbmRleE9mKGYudmFsdWUpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW1bZmZdID09IGYudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR2YWwgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLyogZmlsdGVyIG9sZCBpdGVtcyAqL1xuICAgICAgICBpZiAoZmVlZGRheXNvbGQgPCBNYXRoLmNlaWwoZG0uZ2V0VGltZSgpIC0gbmV3IERhdGUoaXRlbS5wdWJEYXRlKS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSB7XG4gICAgICAgICAgcmV0dmFsID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dmFsO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc29ydEZlZWQoZmVlZHMpIHtcbiAgICAvL3JldHVybiBmZWVkcy5zb3J0KGNvbXBhcmVEYXRlcyk7XG4gICAgcmV0dXJuIGZlZWRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgdmFyIGRhdGVBID0gbmV3IERhdGUoYS5wdWJEYXRlKTtcbiAgICAgIHZhciBkYXRlQiA9IG5ldyBEYXRlKGIucHViRGF0ZSk7XG4gICAgICBpZiAoZGF0ZUEuZ2V0VGltZSgpID09PSBkbS5nZXRUaW1lKCkpIHtcbiAgICAgICAgZGF0ZUEgPSBuZXcgRGF0ZSgwKTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRlQi5nZXRUaW1lKCkgPT09IGRtLmdldFRpbWUoKSkge1xuICAgICAgICBkYXRlQiA9IG5ldyBEYXRlKDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGVCIC0gZGF0ZUE7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlYWRGZWVkQ29uZmlnOiByZWFkRmVlZENvbmZpZyxcbiAgICByZWFkRmVlZDogcmVhZEZlZWQsXG4gICAgcGFyc2VGZWVkOiBwYXJzZUZlZWQsXG4gICAgc29ydEZlZWQ6IHNvcnRGZWVkXG4gIH07XG59XTtcbiIsImltcG9ydCBmZWVkYmFja1NlcnZpY2VIVE1MIGZyb20gJy4vZmVlZGJhY2tTZXJ2aWNlLmh0bWwnXG5pbXBvcnQgRGlhbG9nQ29udHJvbGxlciBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYWwvZGlhbG9nJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZlZWRiYWNrU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCRtZERpYWxvZykge1xuICAgIHRoaXMubWREaWFsb2cgPSAkbWREaWFsb2c7XG4gIH1cblxuICBzaG93KCRldmVudCA9IG51bGwsIGZlZWRiYWNrRGlhbG9nSFRNTCA9IG51bGwsIGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlciA9IG51bGwpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKGZlZWRiYWNrRGlhbG9nSFRNTCA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBkaWFsb2cgaW5zdGFudGlhdGVkJyk7XG4gICAgICBmZWVkYmFja0RpYWxvZ0hUTUwgPSBmZWVkYmFja1NlcnZpY2VIVE1MO1xuICAgIH1cblxuICAgIGlmIChmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgZGlhbG9nIGNvbnRyb2xsZXIgaW5zdGFudGlhdGVkJyk7XG4gICAgICBmZWVkYmFja0RpYWxvZ0NvbnRyb2xsZXIgPSBEaWFsb2dDb250cm9sbGVyO1xuICAgIH1cblxuICAgIHRoaXMubWREaWFsb2cuc2hvdyh7XG4gICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcbiAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXG4gICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXG4gICAgICB0ZW1wbGF0ZTogZmVlZGJhY2tEaWFsb2dIVE1MLFxuICAgICAgY29udHJvbGxlcjogZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyXG4gICAgfSk7XG4gIH1cbn1cblxuRmVlZGJhY2tTZXJ2aWNlLiRpbmplY3QgPSBbJyRtZERpYWxvZyddO1xuIiwiaW1wb3J0IG1lc3NhZ2VTZXJ2aWNlSFRNTCBmcm9tICcuL21lc3NhZ2VTZXJ2aWNlLmh0bWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoJHJvb3RTY29wZSwgJGNvbXBpbGUsICRtZFRvYXN0LCAkc2NlLCAkdHJhbnNsYXRlLCAkdGltZW91dCkge1xuICAgIHRoaXMubWRUb2FzdCA9ICRtZFRvYXN0O1xuICAgIHRoaXMuc2NlID0gJHNjZTtcbiAgICB0aGlzLnRyYW5zbGF0ZSA9ICR0cmFuc2xhdGU7XG4gICAgdGhpcy50aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgdGhpcy5jb21waWxlID0gJGNvbXBpbGU7XG4gICAgdGhpcy5yb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICB9XG5cbiAgc2hvdyhtZXNzYWdlID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IG51bGw7XG4gICAgbGV0IGhpZGVEZWxheSA9IG9wdGlvbnMuaGlkZURlbGF5IHx8IDA7XG4gICAgbGV0IGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uIHx8IG51bGw7XG4gICAgbGV0IGFjdGlvbkxhYmVsID0gb3B0aW9ucy5hY3Rpb25MYWJlbCB8fCAndW5rbm93bic7XG5cbiAgICB0aGlzLnRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobWVzc2FnZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyBjb2RlIHRhYmxlIGVudHJpZXMgY2FuIG5vdCBoYXZlIGVtcHR5IGRlc2NyaXB0aW9ucy5cbiAgICAgICAgLy8gbWVzc2FnZSA8PSAxIHdpbGwgbm90IGJlIGRpc3BsYXllZCEhISFcbiAgICAgICAgbGV0IG1lc3NhZ2VLZXkgPSAnbGJzLmdlbmVyYWxNZXNzYWdlJztcbiAgICAgICAgbWVzc2FnZSA9IHNlbGYudHJhbnNsYXRlLmluc3RhbnQobWVzc2FnZUtleSk7XG4gICAgICAgIG1lc3NhZ2UgPSAobWVzc2FnZSA9PSBtZXNzYWdlS2V5IHx8IG1lc3NhZ2UgPD0gMSkgPyAnJyA6IG1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHRvYXN0Q29uZmlnID0ge1xuICAgICAgICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcbiAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTGFiZWwgPSBhY3Rpb25MYWJlbDtcblxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgICBzZWxmLm1kVG9hc3QuaGlkZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICB0aGlzLm9uQWN0aW9uID0gKCRldmVudCA9IG51bGwpID0+IHtcbiAgICAgICAgICAgICAgICAgYWN0aW9uLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgICAgICAgIC8vdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwoc2VsZi5jb21waWxlKGA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPmApKHNlbGYucm9vdFNjb3BlKS5odG1sKCkpO1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChzZWxmLmNvbXBpbGUoYDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+YCkoc2NvcGUpLmh0bWwoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzZWxmLnNjZS50cnVzdEFzSHRtbChtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGVtcGxhdGU6IG1lc3NhZ2VTZXJ2aWNlSFRNTCxcbiAgICAgICAgICBwb3NpdGlvbjogJ3RvcCBjZW50ZXInLFxuICAgICAgICAgIGhpZGVEZWxheTogaGlkZURlbGF5XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLm1kVG9hc3Quc2hvdyh0b2FzdENvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gbWVzc2FnZSB0byBkaXNwbGF5Jyk7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH1cblxufVxuXG5NZXNzYWdlU2VydmljZS4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRjb21waWxlJywgJyRtZFRvYXN0JywgJyRzY2UnLCAnJHRyYW5zbGF0ZScsICckdGltZW91dCddO1xuIiwiLypcbiAgQ2VudHJhbCBQYWNrYWdlIExvYWRlclxuXG4gIERvIE5PVCBlZGl0IHRoaXMgZmlsZS5cbiAgQWxsIGNvbXBvbmVudHMgYXJlIGRlY2xhcmVkIGluIFwiY29tcG9uZW50cy5qc1wiXG5cbiAgS1VMZXV2ZW4vTElCSVMgKGMpIDIwMTdcbiAgTWVobWV0IENlbGlrXG4qL1xuaW1wb3J0IFByaW1vIGZyb20gJy4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8nXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS9oZWxwZXInXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXG5cbmltcG9ydCB7ZmVlZFNlcnZpY2V9IGZyb20gJy4vZmFjdG9yaWVzL2ZlZWRTZXJ2aWNlJ1xuaW1wb3J0IE1lc3NhZ2VTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL21lc3NhZ2VTZXJ2aWNlJ1xuaW1wb3J0IEZlZWRiYWNrU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9mZWVkYmFja1NlcnZpY2UnXG5cbi8vbWFrZSBQcmltbyBwdWJsaWNcbndpbmRvdy5QcmltbyA9IFByaW1vO1xuLy9sb2FkIFByaW1vRXhwbG9yZXIgVUkgaWYgYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKCkgaXMgcmFuXG53aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgaWYgKFByaW1vLmlzRGVidWdFbmFibGVkKCkpIHtcbiAgICBsZXQgdWlVUkwgPSAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9tZWhtZXRjL3ByaW1vLWV4cGxvcmUtZG9tLXVpL2ZjMDg2OGRmL2pzL2N1c3RvbS5qcyc7XG4gICAgLy9sZXQgdWlVUkwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2pzL2N1c3RvbS5qcyc7XG5cbiAgICBIZWxwZXIubG9hZFNjcmlwdCh1aVVSTCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnSW5qZWN0aW5nIFVJJyk7XG4gICAgICBQcmltby5leHBsb3JlLnVpLnRvZ2dsZSgpO1xuICAgIH0pO1xuICB9XG59LCAyMDAwKTtcblxuLy9DcmVhdGUgdGhlIGNlbnRyYWxDdXN0b20gbW9kdWxlO1xubGV0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdjZW50cmFsQ3VzdG9tJyxbJ25nTWF0ZXJpYWwnXSlcbiAgICAgICAgICAgICAgICAgLmNvbnN0YW50KCdmZWVkYmFja1NlcnZpY2VVUkwnLCAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9mZWVkYmFjaycpXG4gICAgICAgICAgICAgICAgIC5jb25maWcoKCRzY2VEZWxlZ2F0ZVByb3ZpZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgJHNjZURlbGVnYXRlUHJvdmlkZXIucmVzb3VyY2VVcmxXaGl0ZWxpc3QoW1xuICAgICAgICAgICAgICAgICAgICAgJyoqJ1xuICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAucnVuKCgkdGVtcGxhdGVDYWNoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgIC8vJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC9mdWxsVmlldy9mdWxsLXZpZXcuaHRtbCcsIGZ1bGxWaWV3SFRNTCk7XG4gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgIC5mYWN0b3J5KCdGZWVkU2VydmljZScsIGZlZWRTZXJ2aWNlKVxuICAgICAgICAgICAgICAgICAuc2VydmljZSgnTWVzc2FnZVNlcnZpY2UnLCBNZXNzYWdlU2VydmljZSlcbiAgICAgICAgICAgICAgICAgLnNlcnZpY2UoJ0ZlZWRiYWNrU2VydmljZScsIEZlZWRiYWNrU2VydmljZSk7XG5cblxuLy9Db250YWlucyB0aGUgYWZ0ZXIgY29tcG9uZW50IHNlbGVjdG9ycyB0aGF0IHdpbGwgYmUgaW5qZWN0ZWRcbmxldCBhZnRlckNvbXBvbmVudHMgPSB7fTtcblxuLy9DcmVhdGUgYWxsIGNvbXBvbmVudHMgYW5kIGRldGVybWluZSBpbiB3aGljaCBhZnRlciBjb21wb25lbnQgdGhlc2UgbmVlZCB0byBiZVxuLy9pbmplY3RlZFxuY29uc29sZS5sb2coJ0xvYWRpbmcgY2VudHJhbEN1c3RvbSBjb21wb25lbnRzJyk7XG5Db21wb25lbnRzLmFsbC5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgY29uc29sZS5sb2coY29tcG9uZW50Lm5hbWUpXG4gIGlmIChjb21wb25lbnQuZW5hYmxlZCkge1xuICAgIGlmIChjb21wb25lbnQuYXBwZW5kVG8pIHtcbiAgICAgIGxldCBlbGVtZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dIHx8IFtdO1xuICAgICAgLy9lbGVtZW50cy5wdXNoKGNvbXBvbmVudC5uYW1lKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goeyAnbmFtZSc6IGNvbXBvbmVudC5uYW1lLCAnZW5hYmxlSW5WaWV3JzogY29tcG9uZW50LmVuYWJsZUluVmlldyB9KTtcbiAgICAgIGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnQuYXBwZW5kVG9dID0gZWxlbWVudHM7XG5cbiAgICB9XG4gICAgYXBwLmNvbnN0YW50KCdhZnRlckNvbXBvbmVudHMnLCBhZnRlckNvbXBvbmVudHMpO1xuICAgIGFwcC5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUudG9DYW1lbENhc2UoKSwgY29tcG9uZW50LmNvbmZpZyk7XG4gIH1cbn0pO1xuXG5cbi8vSW5qZWN0IHBsYWNlIGhvbGRlcnMgaW50byB0aGUgYWZ0ZXIgY29tcG9uZW50c1xuT2JqZWN0LmtleXMoYWZ0ZXJDb21wb25lbnRzKS5mb3JFYWNoKChjb21wb25lbnQsaSkgPT4ge1xuICBsZXQgc3ViQ29tcG9uZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnRdO1xuXG4gIGFwcC5jb21wb25lbnQoY29tcG9uZW50LnRvQ2FtZWxDYXNlKCksIHtcbiAgICBiaW5kaW5nczp7XG4gICAgICBwYXJlbnRDdHJsOiAnPCdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBzdWJDb21wb25lbnRzLm1hcChtID0+IGA8JHttLm5hbWV9IHBhcmVudC1jdHJsPVwiJGN0cmxcIj48LyR7bS5uYW1lfT5gKS5qb2luKFwiXCIpXG4gIH0pO1xufSk7XG4iLCIvKlxuICBHZW5lcmFsIFxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cblN0cmluZy5wcm90b3R5cGUudG9DYW1lbENhc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc3BsaXQoJy0nKS5tYXAoKGQsaSxhKSA9PiAgaSA+IDAgPyBkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZC5zbGljZSgxKSA6ZCkuam9pbignJyk7XG59XG4iLCJpbXBvcnQgRXhwbG9yZSBmcm9tICcuL3ByaW1vL2V4cGxvcmUnXG5pbXBvcnQgUmVjb3JkcyBmcm9tICcuL3ByaW1vL3JlY29yZHMnXG5pbXBvcnQgRmFjZXRzIGZyb20gJy4vcHJpbW8vZmFjZXRzJ1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9wcmltby92aWV3J1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9wcmltby91c2VyJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xuXG4vKipcbiAqIFByaW1vIG1haW4gZW50cnkgY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbW8ge1xuICAvKipcbiAgICogUmV0dXJuIHZlcnNpb24gaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCB2ZXJzaW9uKCkge1xuICAgIGxldCBfdmVyc2lvbiA9IFwiMC4wLjEwXCI7XG4gICAgcmV0dXJuIGBMaWJyYXJ5OiR7X3ZlcnNpb259IC0gUHJpbW86JHt3aW5kb3cuYXBwQ29uZmlnWydzeXN0ZW0tY29uZmlndXJhdGlvbiddLlByaW1vX1ZlcnNpb25fTnVtYmVyfToke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fSG90Rml4X051bWJlcn1gO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGhhcyByYW5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gSGVscGVyLmlzRGVidWdFbmFibGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlkIHRoZSBzY3JpcHQgcmFuIG9uIGEgUHJpbW8gc2l0ZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuIEhlbHBlci5pc1ByaW1vQXZhaWxhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByb3h5IGNsYXNzXG4gICAqIEByZXR1cm4ge0V4cGxvcmV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGV4cGxvcmUoKSB7XG4gICAgcmV0dXJuIEV4cGxvcmU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciB0byBhdmFpbGFibGUgcmVjb3Jkc1xuICAgKiBAcmV0dXJuIHtSZWNvcmRzfVxuICAgKi9cbiAgc3RhdGljIGdldCByZWNvcmRzKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlc29sdmUobmV3IFJlY29yZHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpKTtcbiAgICB9KVxuICAgIC8vcmV0dXJuIG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIGF2YWlsYWJsZSBmYWNldHNcbiAgICogQHJldHVybiB7RmFjZXRzfVxuICAgKi9cbiAgc3RhdGljIGdldCBmYWNldHMoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzb2x2ZShuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XG4gICAgfSlcbiAgICAvL3JldHVybiBuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHZpZXcgcmVsYXRlZCBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIHtWaWV3fVxuICAgKi9cbiAgc3RhdGljIGdldCB2aWV3KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXNvbHZlKG5ldyBWaWV3KCkpO1xuICAgIH0pXG4gICAgLy9yZXR1cm4gbmV3IFZpZXcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHVzZXIgcmVsYXRlZCBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIHtVc2VyfVxuICAgKi9cbiAgc3RhdGljIGdldCB1c2VyKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBIZWxwZXIudXNlckRldGFpbHNIVFRQKCkudGhlbigodXNlckRldGFpbHMpPT57XG4gICAgICAgIEhlbHBlci51c2VyRmluZXNIVFRQKCkudGhlbigodXNlckZpbmVzKSA9PiB7XG4gICAgICAgICAgSGVscGVyLnVzZXJMb2Fuc0hUVFAoKS50aGVuKCh1c2VyTG9hbnMpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgVXNlcih7ZGV0YWlsczogdXNlckRldGFpbHMsIGZpbmVzOiB1c2VyRmluZXMsIGxvYW5zOiB1c2VyTG9hbnN9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG4vL3RoaXMgaXMgcHJveHkgY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvcmUge1xuICBzdGF0aWMgZ2V0IGNvbXBvbmVudHMoKSB7XG4gICAgbGV0IGMgPSBuZXcgQ29tcG9uZW50cygpO1xuICAgIEhlbHBlci5jb21wb25lbnROYW1lcy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgICAgYy5hZGQoc2VsZWN0b3IpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdWkoKSB7XG4gICAgaWYgKHRoaXMuX3VpID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgaXMgYSBzdHViIGZ1bmN0aW9uIGNhbGwgXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIHRvIGFjdGl2YXRlIFVJJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl91aTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaGVscGVyKCkge1xuICAgIHJldHVybiBIZWxwZXI7XG4gIH1cbn1cbiIsInZhciBjc3NTZWxlY3RvckdlbmVyYXRvciA9IG5ldyhyZXF1aXJlKCcuLi8uLi92ZW5kb3IvY3NzLXNlbGVjdG9yLWdlbmVyYXRvci5qcycpKS5Dc3NTZWxlY3RvckdlbmVyYXRvcjtcblxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcidcblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCl7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGJsaW5rKCl7XG4gICAgSGVscGVyLmJsaW5rKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGNzc1BhdGgoKXtcbiAgICByZXR1cm4gY3NzU2VsZWN0b3JHZW5lcmF0b3IuZ2V0U2VsZWN0b3IodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGdldCBuYW1lKCl7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5sb2NhbE5hbWU7XG4gIH1cblxuICBzY29wZSgpe1xuICAgIGlmIChIZWxwZXIuaXNEZWJ1Z0VuYWJsZWQoKSl7XG4gICAgICByZXR1cm4gYW5ndWxhci5lbGVtZW50KHRoaXMuZWxlbWVudCkuc2NvcGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHJ1biBcImFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpXCIgZmlyc3QnKTtcbiAgICB9XG4gIH1cblxuICBjdHJsKCl7XG4gICAgbGV0IGMgPSBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5jb250cm9sbGVyKHRoaXMubmFtZSk7XG4gICAgaWYgKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygndXNpbmcgYWx0ZXJuYXRpdmUgbWV0aG9kIHRvIGdldCBjb250cm9sbGVyJyk7XG4gICAgICBsZXQgc2NvcGUgPSB0aGlzLnNjb3BlKCk7XG4gICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgbGV0IHNjb3BlQ2hpbGQgPSBzY29wZS4kJGNoaWxkVGFpbDtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnJGN0cmwnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLiRjdHJsXG4gICAgICAgIH0gZWxzZSBpZihPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJ2N0cmwnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjb3BlLmN0cmxcbiAgICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCckY3RybCcpKXtcbiAgICAgICAgICAgIHJldHVybiBzY29wZUNoaWxkLiRjdHJsO1xuICAgICAgICB9IGVsc2UgaWYgKHNjb3BlQ2hpbGQgJiYgT2JqZWN0LmtleXMoc2NvcGVDaGlsZCkuaW5jbHVkZXMoJ2N0cmwnKSl7XG4gICAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC5jdHJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gJGN0cmwgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50cyB7XG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSB7fTtcbiAgfVxuXG4gIGFkZChzZWxlY3Rvcikge1xuICAgIGxldCBlbGVtZW50cyA9IEhlbHBlci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBsZXQgZWxlbWVudHNBcnJheSA9IHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IFtdO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCk9PntcbiAgICAgIGVsZW1lbnRzQXJyYXkucHVzaChuZXcgQ29tcG9uZW50KGVsZW1lbnQpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdID0gZWxlbWVudHNBcnJheTtcblxuICAgIHJldHVybiBlbGVtZW50c0FycmF5O1xuICB9XG5cbiAgZ2V0KHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBrZXlzKCl7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2NvbXBvbmVudHMpO1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlciB7XG4gICAgc3RhdGljIGlzRGVidWdFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gd2luZG93Lm5hbWUgPT09ICdOR19FTkFCTEVfREVCVUdfSU5GTyEnIHx8IHR5cGVvZihhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJtLWxvZ28nKSkuc2NvcGUoKSkgIT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XG4gICAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mKHdpbmRvdy5hbmd1bGFyKSkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByaW1vLWV4cGxvcmUnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGNvbXBvbmVudE5hbWVzKCkge1xuICAgICAgICBsZXQgdGFncyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSk7XG4gICAgICAgIGxldCBjb21wb25lbnROYW1lcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCB0YWcgb2YgdGFncykge1xuICAgICAgICAgICAgbGV0IHRhZ05hbWUgPSB0YWcubG9jYWxOYW1lO1xuICAgICAgICAgICAgaWYgKC9ecHJtLS8udGVzdCh0YWdOYW1lKSB8fCAvXnByaW1vLS8udGVzdCh0YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50TmFtZXMuaW5jbHVkZXModGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZXMucHVzaCh0YWdOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnROYW1lcyA9IGNvbXBvbmVudE5hbWVzLnNvcnQoKS5maWx0ZXIoKGUsIGksIGEpID0+IGkgPT09IGEuZmluZEluZGV4KChlMikgPT4gZSA9PT0gZTIpKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudE5hbWVzO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5qZWN0b3IoKSB7XG4gICAgICBsZXQgYyA9IFByaW1vLmV4cGxvcmUuY29tcG9uZW50cy5nZXQoJ3ByaW1vLWV4cGxvcmUnKTtcbiAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBwcmltb0V4cGxvcmUgPSBhbmd1bGFyLmVsZW1lbnQoY1swXS5lbGVtZW50KTtcbiAgICAgICAgICBsZXQgaW5qZWN0b3IgICAgID0gcHJpbW9FeHBsb3JlLmluamVjdG9yKCk7XG4gICAgICAgICAgaWYgKGluamVjdG9yKXtcbiAgICAgICAgICAgIHJldHVybiBpbmplY3RvcjtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgaHR0cCgpIHtcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcbiAgICAgIGlmIChpbmplY3Rvcikge1xuICAgICAgICBsZXQgaCA9IGluamVjdG9yLmdldCgnJGh0dHAnKTtcbiAgICAgICAgaWYgKGgpIHtcbiAgICAgICAgICByZXR1cm4gaDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBsb2FkU2NyaXB0KHNjcmlwdFVSTCkge1xuICAgICAgaWYgKHdpbmRvdy5hbmd1bGFyKSB7XG4gICAgICAgICAgbGV0IGFwcEluamVjdG9yID0gYW5ndWxhci5pbmplY3RvcihbJ25nJywnYW5ndWxhckxvYWQnXSk7XG4gICAgICAgICAgaWYgKGFwcEluamVjdG9yKSB7XG4gICAgICAgICAgICAgIGxldCBhbmd1bGFyTG9hZCA9IGFwcEluamVjdG9yLmdldCgnYW5ndWxhckxvYWQnKTtcbiAgICAgICAgICAgICAgaWYgKGFuZ3VsYXJMb2FkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJMb2FkLmxvYWRTY3JpcHQoc2NyaXB0VVJMKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcm9vdFNjb3BlKCkge1xuICAgICAgbGV0IGluamVjdG9yID0gdGhpcy5pbmplY3RvcigpO1xuICAgICAgaWYgKGluamVjdG9yKSB7XG4gICAgICAgICAgbGV0IHJvb3RTY29wZSAgICA9IGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpO1xuICAgICAgICAgIGlmIChyb290U2NvcGUpIHtcbiAgICAgICAgICAgIHJldHVybiByb290U2NvcGU7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpIHtcbiAgICAgIGxldCByb290U2NvcGUgPSB0aGlzLnJvb3RTY29wZSgpO1xuICAgICAgaWYgKHJvb3RTY29wZSkge1xuICAgICAgICByZXR1cm4gcm9vdFNjb3BlLiQkY2hpbGRIZWFkLiRjdHJsLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBqd3REYXRhKCkge1xuICAgICAgbGV0IHVTTVMgPSB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcbiAgICAgIGlmICh1U01TKSB7XG4gICAgICAgIGxldCBqd3REYXRhID0gdVNNUy5qd3RVdGlsU2VydmljZS5nZXREZWNvZGVkVG9rZW4oKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGp3dERhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuJGxvY2FsRm9yYWdlLmdldEl0ZW0oJ3VzZXJEZXRhaWxzJykudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXNlckRldGFpbHNIVFRQKCkge1xuICAgICAgbGV0IHZpZXdDb2RlID0gdGhpcy5qd3REYXRhKCkudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5odHRwLmdldChgL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvdXNlcnNldHRpbmdzP3ZpZD0ke3ZpZXdDb2RlfWApLnRoZW4odXNlckRldGFpbHMgPT4gcmVzb2x2ZSh1c2VyRGV0YWlscy5kYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdXNlckZpbmVzSFRUUCgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL215YWNjb3VudC9maW5lcycpLnRoZW4odXNlckZpbmVzID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyRmluZXMuZGF0YTtcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAnb2snKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbmVzID0gZGF0YS5kYXRhLmZpbmVzO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZXMuZmluZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gZmluZXMnKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJMb2Fuc0hUVFAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvbG9hbnMnKS50aGVuKHVzZXJMb2FucyA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckxvYW5zLmRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xuICAgICAgICAgICAgICAgIGxldCBsb2FucyA9IGRhdGEuZGF0YS5sb2FucztcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvYW5zLmxvYW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGxvYW5zJyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBibGluayhjb21wb25lbnQsIG51bWJlck9mQmxpbmtzID0gNCkge1xuICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xuICAgICAgICBsZXQgYm9yZGVyU2VsZWN0b3IgPSBjb21wb25lbnQuZWxlbWVudC5jc3NQYXRoICsgaW5kZXggKyAnUmVjdCc7XG5cbiAgICAgICAgbGV0IGNyZWF0ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRSZWN0ID0gY29tcG9uZW50LmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArIDE7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYm9yZGVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzNweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUudG9wID0gZWxlbWVudFJlY3QudG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnRSZWN0LmhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGVsZW1lbnRSZWN0LndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvcmRlckVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYm9yZGVyU2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZW1vdmVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChib3JkZXJFbGVtZW50KSB7XG4gICAgICAgICAgICBib3JkZXJFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBibGlua0JvcmRlckVsZW1lbnQgPSAobnVtYmVyT2ZCbGlua3MgPSA0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcblxuICAgICAgICAgICAgaWYgKG51bWJlck9mQmxpbmtzIDwgMCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUJvcmRlckVsZW1lbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKChudW1iZXJPZkJsaW5rcyAlIDIpID09IDApID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBudW1iZXJPZkJsaW5rcy0tO1xuICAgICAgICAgICAgICAgIGludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYmxpbmtCb3JkZXJFbGVtZW50LCAxMDAwLCBudW1iZXJPZkJsaW5rcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBib3JkZXJFbGVtZW50ID0gY3JlYXRlQm9yZGVyRWxlbWVudCgpO1xuICAgICAgICBibGlua0JvcmRlckVsZW1lbnQobnVtYmVyT2ZCbGlua3MpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldHMge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9mYWNldHMoY29tcG9uZW50cyk7XG4gICAgfVxuICAgIF9mYWNldHMoY29tcG9uZW50cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tZmFjZXQtYWZ0ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN0cmwgPSBjWzBdLmN0cmw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IGZhY2V0cyB0aHJvdWdoIHRoZSByb290U2NvcGUnKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmZhY2V0cztcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGZhY2V0cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkcyB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zKGNvbXBvbmVudHMpO1xuICAgIH1cbiAgICBfaXRlbXMoY29tcG9uZW50cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tc2VhcmNoLXJlc3VsdC1saXN0LWFmdGVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5pdGVtbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcInRyeSBhZ2FpblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0cnlpbmcgdG8gZ2V0IHJlY29yZHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmV0dXJuIEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuc2VhcmNoU3RhdGVTZXJ2aWNlLnJlc3VsdE9iamVjdC5kYXRhO1xuICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gcmV0cmlldmUgaXRlbXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlciA9IF9za2VsVXNlcikge1xuICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcbiAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGp3dERhdGEudXNlciB8fCAnJyxcbiAgICAgICAgZW1haWw6IHVzZXIuZGV0YWlscy5lbWFpbCB8fCAnJyxcbiAgICAgICAgbmFtZTogand0RGF0YS51c2VyTmFtZSB8fCAnR3Vlc3QnLFxuICAgICAgICBkaXNwbGF5X25hbWU6IHVTbXMuZ2V0VXNlck5hbWVGb3JEaXNwbGF5KCksXG4gICAgICAgIGlzTG9nZ2VkSW46ICgpID0+IHVTbXMuZ2V0VXNlck5hbWUoKS5sZW5ndGggPiAwLFxuICAgICAgICBpc09uQ2FtcHVzOiAoKSA9PiBqd3REYXRhLm9uQ2FtcHVzID09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBmaW5lczogdXNlci5maW5lcyxcbiAgICAgICAgbG9hbnM6IHVzZXIubG9hbnNcbiAgICAgIH07XG4gIH1cblxuICBnZXQgX3NrZWxVc2VyKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXRhaWxzOiB7fSxcbiAgICAgIGZpbmVzOiB7fSxcbiAgICAgIGxvYW5zOiB7fVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcbiAgICAgIGxldCBqd3REYXRhID0gSGVscGVyLmp3dERhdGEoKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogand0RGF0YS52aWV3SWQgfHwgd2luZG93LmFwcENvbmZpZ1sndmlkJ10sXG4gICAgICAgIGluc3RpdHV0aW9uOiB7XG4gICAgICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJbnN0aXR1dGlvbkNvZGUsXG4gICAgICAgICAgICBuYW1lOiB3aW5kb3cuYXBwQ29uZmlnWydwcmltby12aWV3J11bJ2F0dHJpYnV0ZXMtbWFwJ10uaW5zdGl0dXRpb25cbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJmYWNlTGFuZ3VhZ2U6IHVTbXMuZ2V0VXNlckxhbmd1YWdlKCkgfHwgd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmludGVyZmFjZUxhbmd1YWdlLFxuICAgICAgICBpcDoge1xuICAgICAgICAgIGFkZHJlc3M6IGp3dERhdGEuaXBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIENzc1NlbGVjdG9yR2VuZXJhdG9yLCByb290LFxuICAgIGluZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcblxuICBDc3NTZWxlY3RvckdlbmVyYXRvciA9IChmdW5jdGlvbigpIHtcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZGVmYXVsdF9vcHRpb25zID0ge1xuICAgICAgc2VsZWN0b3JzOiBbJ2lkJywgJ2NsYXNzJywgJ3RhZycsICdudGhjaGlsZCddXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENzc1NlbGVjdG9yR2VuZXJhdG9yKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICB0aGlzLnNldE9wdGlvbnModGhpcy5kZWZhdWx0X29wdGlvbnMpO1xuICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGtleSwgcmVzdWx0cywgdmFsO1xuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHZhbCA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdF9vcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5vcHRpb25zW2tleV0gPSB2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmlzRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAhISgoZWxlbWVudCAhPSBudWxsID8gZWxlbWVudC5ub2RlVHlwZSA6IHZvaWQgMCkgPT09IDEpO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0UGFyZW50cyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBjdXJyZW50X2VsZW1lbnQsIHJlc3VsdDtcbiAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgaWYgKHRoaXMuaXNFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgIGN1cnJlbnRfZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHdoaWxlICh0aGlzLmlzRWxlbWVudChjdXJyZW50X2VsZW1lbnQpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudF9lbGVtZW50KTtcbiAgICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBjdXJyZW50X2VsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFRhZ1NlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVJdGVtKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNhbml0aXplSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBjaGFyYWN0ZXJzO1xuICAgICAgY2hhcmFjdGVycyA9IChpdGVtLnNwbGl0KCcnKSkubWFwKGZ1bmN0aW9uKGNoYXJhY3Rlcikge1xuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAnOicpIHtcbiAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyAoJzonLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpICsgXCIgXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoL1sgIVwiIyQlJicoKSorLC5cXC87PD0+P0BcXFtcXFxcXFxdXmB7fH1+XS8udGVzdChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgY2hhcmFjdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBlc2NhcGUoY2hhcmFjdGVyKS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2hhcmFjdGVycy5qb2luKCcnKTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldElkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgaWQsIHNhbml0aXplZF9pZDtcbiAgICAgIGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICBpZiAoKGlkICE9IG51bGwpICYmIChpZCAhPT0gJycpICYmICEoL1xccy8uZXhlYyhpZCkpICYmICEoL15cXGQvLmV4ZWMoaWQpKSkge1xuICAgICAgICBzYW5pdGl6ZWRfaWQgPSBcIiNcIiArICh0aGlzLnNhbml0aXplSXRlbShpZCkpO1xuICAgICAgICBpZiAoZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2FuaXRpemVkX2lkKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gc2FuaXRpemVkX2lkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENsYXNzU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGNsYXNzX3N0cmluZywgaXRlbSwgcmVzdWx0O1xuICAgICAgcmVzdWx0ID0gW107XG4gICAgICBjbGFzc19zdHJpbmcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIGlmIChjbGFzc19zdHJpbmcgIT0gbnVsbCkge1xuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICAgICAgICBjbGFzc19zdHJpbmcgPSBjbGFzc19zdHJpbmcucmVwbGFjZSgvXlxcc3xcXHMkL2csICcnKTtcbiAgICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICByZXN1bHQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaywgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgICAgICAgICByZWYgPSBjbGFzc19zdHJpbmcuc3BsaXQoL1xccysvKTtcbiAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgICAgICBpdGVtID0gcmVmW2tdO1xuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goXCIuXCIgKyAodGhpcy5zYW5pdGl6ZUl0ZW0oaXRlbSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgYXR0cmlidXRlLCBibGFja2xpc3QsIGssIGxlbiwgcmVmLCByZWYxLCByZXN1bHQ7XG4gICAgICByZXN1bHQgPSBbXTtcbiAgICAgIGJsYWNrbGlzdCA9IFsnaWQnLCAnY2xhc3MnXTtcbiAgICAgIHJlZiA9IGVsZW1lbnQuYXR0cmlidXRlcztcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICBhdHRyaWJ1dGUgPSByZWZba107XG4gICAgICAgIGlmIChyZWYxID0gYXR0cmlidXRlLm5vZGVOYW1lLCBpbmRleE9mLmNhbGwoYmxhY2tsaXN0LCByZWYxKSA8IDApIHtcbiAgICAgICAgICByZXN1bHQucHVzaChcIltcIiArIGF0dHJpYnV0ZS5ub2RlTmFtZSArIFwiPVwiICsgYXR0cmlidXRlLm5vZGVWYWx1ZSArIFwiXVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldE50aENoaWxkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgY291bnRlciwgaywgbGVuLCBwYXJlbnRfZWxlbWVudCwgc2libGluZywgc2libGluZ3M7XG4gICAgICBwYXJlbnRfZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIGlmIChwYXJlbnRfZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICBzaWJsaW5ncyA9IHBhcmVudF9lbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHNpYmxpbmdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgc2libGluZyA9IHNpYmxpbmdzW2tdO1xuICAgICAgICAgIGlmICh0aGlzLmlzRWxlbWVudChzaWJsaW5nKSkge1xuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiOm50aC1jaGlsZChcIiArIGNvdW50ZXIgKyBcIilcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIHZhciBpc191bmlxdWUsIHJlc3VsdDtcbiAgICAgIGlzX3VuaXF1ZSA9IGZhbHNlO1xuICAgICAgaWYgKChzZWxlY3RvciAhPSBudWxsKSAmJiBzZWxlY3RvciAhPT0gJycpIHtcbiAgICAgICAgcmVzdWx0ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiByZXN1bHRbMF0gPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBpc191bmlxdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNfdW5pcXVlO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QWxsU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdDogbnVsbCxcbiAgICAgICAgaTogbnVsbCxcbiAgICAgICAgYzogbnVsbCxcbiAgICAgICAgYTogbnVsbCxcbiAgICAgICAgbjogbnVsbFxuICAgICAgfTtcbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ3RhZycpID49IDApIHtcbiAgICAgICAgcmVzdWx0LnQgPSB0aGlzLmdldFRhZ1NlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnaWQnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5pID0gdGhpcy5nZXRJZFNlbGVjdG9yKGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnY2xhc3MnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5jID0gdGhpcy5nZXRDbGFzc1NlbGVjdG9ycyhlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2F0dHJpYnV0ZScpID49IDApIHtcbiAgICAgICAgcmVzdWx0LmEgPSB0aGlzLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyhlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ250aGNoaWxkJykgPj0gMCkge1xuICAgICAgICByZXN1bHQubiA9IHRoaXMuZ2V0TnRoQ2hpbGRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0VW5pcXVlbmVzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICB2YXIgZm91bmRfZWxlbWVudHMsIHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIGZvdW5kX2VsZW1lbnRzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgcmV0dXJuIGZvdW5kX2VsZW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBmb3VuZF9lbGVtZW50c1swXSA9PT0gZWxlbWVudDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihlbGVtZW50LCBpdGVtcywgdGFnKSB7XG4gICAgICB2YXIgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCByZWYsIHJlZjE7XG4gICAgICByZWYgPSB0aGlzLmdldENvbWJpbmF0aW9ucyhpdGVtcyk7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgaXRlbSA9IHJlZltrXTtcbiAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRhZyAhPSBudWxsKSB7XG4gICAgICAgIHJlZjEgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiB0YWcgKyBpdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XG4gICAgICAgICAgaXRlbSA9IHJlZjFbbF07XG4gICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRVbmlxdWVTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBmb3VuZF9zZWxlY3RvciwgaywgbGVuLCByZWYsIHNlbGVjdG9yX3R5cGUsIHNlbGVjdG9ycztcbiAgICAgIHNlbGVjdG9ycyA9IHRoaXMuZ2V0QWxsU2VsZWN0b3JzKGVsZW1lbnQpO1xuICAgICAgcmVmID0gdGhpcy5vcHRpb25zLnNlbGVjdG9ycztcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICBzZWxlY3Rvcl90eXBlID0gcmVmW2tdO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yX3R5cGUpIHtcbiAgICAgICAgICBjYXNlICdpZCc6XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLmkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLmk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd0YWcnOlxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgc2VsZWN0b3JzLnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5jICE9IG51bGwpICYmIHNlbGVjdG9ycy5jLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYywgc2VsZWN0b3JzLnQpO1xuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZSc6XG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5hICE9IG51bGwpICYmIHNlbGVjdG9ycy5hLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYSwgc2VsZWN0b3JzLnQpO1xuICAgICAgICAgICAgICBpZiAoZm91bmRfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ250aGNoaWxkJzpcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMubiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMubjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcqJztcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGFsbF9zZWxlY3RvcnMsIGl0ZW0sIGssIGwsIGxlbiwgbGVuMSwgcGFyZW50cywgcmVzdWx0LCBzZWxlY3Rvciwgc2VsZWN0b3JzO1xuICAgICAgYWxsX3NlbGVjdG9ycyA9IFtdO1xuICAgICAgcGFyZW50cyA9IHRoaXMuZ2V0UGFyZW50cyhlbGVtZW50KTtcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHBhcmVudHMubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgaXRlbSA9IHBhcmVudHNba107XG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5nZXRVbmlxdWVTZWxlY3RvcihpdGVtKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yICE9IG51bGwpIHtcbiAgICAgICAgICBhbGxfc2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZWxlY3RvcnMgPSBbXTtcbiAgICAgIGZvciAobCA9IDAsIGxlbjEgPSBhbGxfc2VsZWN0b3JzLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xuICAgICAgICBpdGVtID0gYWxsX3NlbGVjdG9yc1tsXTtcbiAgICAgICAgc2VsZWN0b3JzLnVuc2hpZnQoaXRlbSk7XG4gICAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5qb2luKCcgPiAnKTtcbiAgICAgICAgaWYgKHRoaXMudGVzdFNlbGVjdG9yKGVsZW1lbnQsIHJlc3VsdCkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldENvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICB2YXIgaSwgaiwgaywgbCwgcmVmLCByZWYxLCByZXN1bHQ7XG4gICAgICBpZiAoaXRlbXMgPT0gbnVsbCkge1xuICAgICAgICBpdGVtcyA9IFtdO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gW1tdXTtcbiAgICAgIGZvciAoaSA9IGsgPSAwLCByZWYgPSBpdGVtcy5sZW5ndGggLSAxOyAwIDw9IHJlZiA/IGsgPD0gcmVmIDogayA+PSByZWY7IGkgPSAwIDw9IHJlZiA/ICsrayA6IC0taykge1xuICAgICAgICBmb3IgKGogPSBsID0gMCwgcmVmMSA9IHJlc3VsdC5sZW5ndGggLSAxOyAwIDw9IHJlZjEgPyBsIDw9IHJlZjEgOiBsID49IHJlZjE7IGogPSAwIDw9IHJlZjEgPyArK2wgOiAtLWwpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChyZXN1bHRbal0uY29uY2F0KGl0ZW1zW2ldKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5zaGlmdCgpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmpvaW4oJycpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XG5cbiAgfSkoKTtcblxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwgPyBkZWZpbmUuYW1kIDogdm9pZCAwKSB7XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBDc3NTZWxlY3RvckdlbmVyYXRvcjtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByb290ID0gdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cyAhPT0gbnVsbCA/IGV4cG9ydHMgOiB0aGlzO1xuICAgIHJvb3QuQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBDc3NTZWxlY3RvckdlbmVyYXRvcjtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuIl19
