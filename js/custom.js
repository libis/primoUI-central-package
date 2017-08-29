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

var _generalMessage = require('./components/prmTopBarBefore/generalMessage');

var _PromoteLogin = require('./components/prmPromoteLogin/PromoteLogin');

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
      return [{ name: 'libis-experiment', config: _experiment.experimentConfig, enabled: false, appendTo: 'prm-logo-after' }, { name: 'home-icon', config: _homeIcon.homeIconConfig, enabled: true, appendTo: 'prm-logo-after' }, { name: 'beta-switch', config: _betaSwitch.betaSwitchConfig, enabled: true, appendTo: 'prm-logo-after' }, { name: 'source-icon', config: _sourceIcon.sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after' }, { name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after' }, { name: 'pay-my-fines', config: _payMyFines.payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after' }, { name: 'feedback', config: _feedback.feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after' }, { name: 'report-a-problem', config: _reportAProblem.reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null }, { name: 'fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before' }, { name: 'announcement', config: _generalMessage.generalMessageConfig, enabled: true, appendTo: 'prm-top-bar-before' }, { name: 'promote-login', config: _PromoteLogin.promoteLoginConfig, enabled: true, appendTo: 'prm-personal-info-after' }].filter(function (m) {
        return m.enabled;
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/searchTip":2,"./components/prmBriefResultAfter/sourceIcon":3,"./components/prmFinesOverviewAfter/payMyFines":4,"./components/prmLogoAfter/betaSwitch":5,"./components/prmLogoAfter/experiment":6,"./components/prmLogoAfter/homeIcon":7,"./components/prmMainMenuAfter/feedback":8,"./components/prmPromoteLogin/PromoteLogin":9,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":10,"./components/prmServiceHeaderAfter/reportAProblem":11,"./components/prmTopBarBefore/finesMessage":12,"./components/prmTopBarBefore/generalMessage":13,"./utils":26}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var betaSwitchHTML = '<div id="beta-switch">\r\n    <span data-ribbon="Beta">\r\n        <span>   \r\n            <md-switch ng-model="useBeta" aria-label="use Beta version" ng-class="md-primary" ng-change="onChangeUseBeta()" ng-show=\'showBetaSwitch\'>\r\n          Try the Beta version\r\n            </md-switch>\r\n        </span>\r\n    </span>\r\n</div>\r\n';

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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var homeIconHTML = '<style>\r\n  prm-topbar prm-logo, prm-topbar prm-logo, prm-logo-after, home-icon{\r\n          display: flex;\r\n  }\r\n  prm-logo-after a.md-primoExplore-theme.md-button.md-icon-button {\r\n        min-width: 40px;\r\n  }\r\n</style>\r\n\r\n<div id="home-buttons-holder"\r\n     ng-class="{\'fixed-to-top\': $ctrl.fixedToTop()}"\r\n     layout="row"\r\n     layout-align="center center"\r\n     class="layout-align-center-center layout-row">\r\n  <a class="md-icon-button button-over-dark md-button md-primoExplore-theme" id="home-button"\r\n     aria-label="Go to startpage"\r\n     href="{{ $ctrl.homePageLink }}">\r\n    <md-icon class="md-primoExplore-theme">\r\n      <svg id="prm_home" width="100%" height="100%" viewBox="0 0 24 24" y="0" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">\r\n    <path d="M10,20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\r\n    <path d="M0 0h24v24H0z" fill="none"/>\r\n    </svg>\r\n    </md-icon>\r\n  </a>\r\n</div>\r\n';

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

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var feedbackHTML = '\r\n  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\r\n             class="zero-margin flex-button multi-line-button button-over-dark"\r\n             layout="column" layout-align="center center" (click)="$ctrl.showFeedbackForm($event)"\r\n             aria-label="mainmenu.label.feedback">\r\n\r\n      <span class="item-content" translate="mainmenu.label.feedback"></span>\r\n      <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\r\n        <span class="item-description popover animate-popover"\r\n              translate="nui.mainmenu.description.feedback"></span>\r\n      </md-tooltip>\r\n  </md-button>\r\n';
var feedbackDialogHTML = '<!-- translations in CODE TABLES -> View Labels -->\r\n<md-dialog id=\'lbsFeedbackForm\' aria-label=\'feedback\'>\r\n    <md-toolbar>\r\n        <div class="md-toolbar-tools">\r\n            <h2><span translate=\'mainmenu.label.feedback\'></span></h2>\r\n            <span flex></span>\r\n            <md-button class="md-icon-button" ng-click="cancelFeedback()">\r\n                <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\r\n            </md-button>\r\n        </div>\r\n    </md-toolbar>\r\n    <md-dialog-content>\r\n      <form name=\'feedbackForm\'>\r\n        <div class="md-dialog-content">\r\n            <input type="hidden" name=\'subject\' ng-model=\'feedback.subject\'>\r\n            <md-input-container class="md-block">\r\n                <label><span translate="lbs.nui.details.email"></span></label>\r\n                <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'feedback.replyTo\' ng-pattern="/^.+@.+\\..+$/">\r\n                <div ng-if=\'feedbackForm.replyTo.$error.required\' role="alert">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\r\n                </div>\r\n                <div ng-if=\'feedbackForm.replyTo.$error.email\' role="error">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\r\n                </div>\r\n            </md-input-container>\r\n            <md-input-container>\r\n                <label><span translate="lbs.nui.details.message.description.label"></span></label>\r\n                <textarea name="message" placeholder="{{ \'lbs.nui.details.message.description\' | translate }}" md-maxlength="5000" required md-no-asterisk rows="5" cols="80" ng-model="feedback.message"></textarea>\r\n                <div ng-if=\'feedbackForm.message.$error.required\' role="error">\r\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.message.mandatory"></span></div>\r\n                </div>\r\n            </md-input-container>\r\n        </div>\r\n      </form>\r\n    </md-dialog-content>\r\n    <md-dialog-actions layout="row">\r\n        <md-button class="md-raised" ng-click="cancelFeedback()">Cancel</md-button>\r\n        <md-button class="md-raised md-primary " ng-click=\'sendFeedback()\'>Submit</md-button>\r\n    </md-dialog-actions>\r\n</md-dialog>\r\n';

//TODO:Separate feedbackDialogController

var FeedbackController = function FeedbackController($element, $compile, $scope, $mdDialog, $mdToast, $http, feedbackServiceURL) {
  _classCallCheck(this, FeedbackController);

  var self = this;

  self.$element = $element;
  self.$compile = $compile;
  self.$scope = $scope;

  $element.parent().parent().find('div').append($compile(feedbackHTML)($scope));

  if (typeof feedbackServiceURL === 'undefined') {
    this.showFeedbackForm = function () {
      alert('Please set the "feedbackServiceURL" variable');
    };
  } else {
    Primo.user.then(function (user) {
      self.user = user;
      Primo.view.then(function (view) {
        self.view = view;
        self.showFeedbackForm = function ($event) {
          $mdDialog.show({
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: false,
            targetEvent: $event,
            template: feedbackDialogHTML,
            controller: function controller($scope, $mdDialog) {
              $scope.feedback = {
                replyTo: self.user.email,
                message: '',
                subject: 'feedback'
              };
              $scope.cancelFeedback = function () {
                $mdDialog.cancel();
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
                  type: 'feedback',
                  feedback: $scope.feedback.message,
                  email: $scope.feedback.replyTo || self.user.email,
                  userAgent: navigator.userAgent
                };
                if ($scope.feedback.replyTo.length > 0 && $scope.feedback.message.length > 0) {
                  $mdDialog.hide();

                  $http({
                    method: 'POST',
                    url: feedbackServiceURL,
                    headers: {
                      'Content-Type': 'application/json',
                      'X-From-ExL-API-Gateway': undefined
                    },
                    cache: false,
                    data: data
                  }).then(function (response) {
                    $mdToast.showSimple('Thank you for your feedback!');
                  }, function (response) {
                    $mdToast.showSimple('Unable to submit feedback.');
                  });
                }
              };
            }
          });
        };
      });
    });
  }
}

//  $onInit(){
//    this.$element.parent().find('div').append(this.$compile(feedbackDialogHTML)(this.$scope));
//  }
;

FeedbackController.$inject = ['$element', '$compile', '$scope', '$mdDialog', '$mdToast', '$http', 'feedbackServiceURL'];

var feedbackConfig = exports.feedbackConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: FeedbackController,
  template: ''
};

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var promoteLoginHTML = '<md-card class="default-card _md md-primoExplore-theme flex-xs-100 flex-sm-100" flex-sm="100" flex-xs="100" ng-show=\'$ctrl.showAutomaticLogin\'>\r\n  <md-card-content layout="column" layout-align="space-around center" class="layout-align-space-around-center layout-column">\r\n    <prm-primo-login label-type="text" layout="column" class="layout-column">\r\n      <div>\r\n        <span translate="lbs.nui.mypref.automatic_login.title">Always Sign In</span>\r\n      </div>\r\n\r\n      <md-checkbox tabindex="-1" disabled="disabled" \r\n      class="has-small-text zero-margin ng-pristine ng-untouched ng-valid md-primoExplore-theme ng-not-empty md-checked flex-50"\r\n       role="checkbox" aria-checked="true" aria-disabled="true" aria-invalid="false" \r\n       type="checkbox" flex="50" ng-model="$ctrl.alwaysSigninCheckBox" ng-change="alwaysSigninChecked"\r\n       ng-disabled="$ctrl.formMode == \'View\'">\r\n       <div class="layout-column" layout="column">\r\n          <span class="item-content" translate="lbs.nui.mypref.automatic_login.alwaysSigninOption"></span>\r\n       </div>\r\n      </md-checkbox>\r\n    </prm-primo-login>\r\n    <md-divider class="card-divider layout-margin md-primoExplore-theme" layout-margin=""></md-divider>\r\n    <!---->\r\n  </md-card-content>\r\n</md-card>\r\n\r\n';

var PromoteLoginController = function () {
  function PromoteLoginController($scope) {
    _classCallCheck(this, PromoteLoginController);

    var self = this;
    this.showAutomaticLogin = false;

    this.alwaysSignin = localStorage.getItem("primoPromoteLogin");
    this.alwaysSigninCheckBox = true;
    $scope.alwaysSigninChecked = function () {
      if (this.alwaysSigninCheckBox) {
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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
      (function () {
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
                        $mdToast.showSimple('Thank you for your feedback!');
                      }, function (response) {
                        $mdToast.showSimple('Unable to submit feedback.');
                      });
                    }
                  };
                }
              });
            }; //showReportAProblemForm
          });
        });
      })();
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeneralMessageController = function GeneralMessageController(MessageService) {
  _classCallCheck(this, GeneralMessageController);

  MessageService.show();
};

GeneralMessageController.$inject = ['MessageService'];

var generalMessageConfig = exports.generalMessageConfig = {
  bindings: { parentCtrl: '<' },
  controller: GeneralMessageController,
  template: ''
};

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var messageServiceHTML = '<div layout="row" class="bar alert-bar" layout-align="center center">\r\n  <span class="bar-text" ng-bind-html="ctrl.message" style="display:flex"></span>\r\n  <md-divider></md-divider>\r\n  <md-button aria-label="{{::(\'nui.message.dismiss\' | translate)}}" (click)="ctrl.onClose()" class="dismiss-alert-button zero-margin" ng-class="md-icon-button">\r\n    <span translate="nui.message.dismiss" hide-xs></span>\r\n  </md-button>\r\n</div>\r\n';

var MessageService = function () {
  function MessageService($mdToast, $sce, $translate) {
    _classCallCheck(this, MessageService);

    this.mdToast = $mdToast;
    this.sce = $sce;
    this.translate = $translate;
  }

  _createClass(MessageService, [{
    key: 'show',
    value: function show() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var hideDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var self = this;

      if (message.length == 0) {
        // code table entries can not have empty descriptions.
        // message <= 1 will not be displayed!!!!
        var messageKey = 'lbs.generalMessage';
        message = this.translate.instant(messageKey);
        message = message == messageKey || message <= 1 ? '' : message;
      }

      if (message.length > 0) {
        var toastConfig = {
          parent: document.body,
          controllerAs: 'ctrl',
          controller: function controller() {
            this.onClose = function () {
              self.mdToast.hide();
            };

            this.message = self.sce.trustAsHtml(message);
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


MessageService.$inject = ['$mdToast', '$sce', '$translate'];

},{}],16:[function(require,module,exports){
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
var app = angular.module('centralCustom', ['ngMaterial']).constant('feedbackServiceURL', 'https://services.libis.be/feedback').run(function ($templateCache) {
  //$templateCache.put('components/search/fullView/full-view.html', fullViewHTML);
}).factory('FeedService', _feedService.feedService).service('MessageService', _messageService2.default);

//Contains the after component selectors that will be injected
var afterComponents = {};

//Create all components and determine in which after component these need to be
//injected
console.log('Loading centralCustom components');
_components2.default.all.forEach(function (component) {
  if (component.appendTo) {
    var elements = afterComponents[component.appendTo] || [];
    elements.push(component.name);
    afterComponents[component.appendTo] = elements;
  }

  console.log('\t\t' + component.name);
  app.component(component.name.toCamelCase(), component.config);
});

//Inject place holders into the after components
Object.keys(afterComponents).forEach(function (component, i) {
  var subComponents = afterComponents[component];

  app.component(component.toCamelCase(), {
    bindings: {
      parentCtrl: '<'
    },
    template: subComponents.map(function (m) {
      return '<' + m + ' parent-ctrl="$ctrl"></' + m + '>';
    }).join("")
  });
});

},{"./components":1,"./factories/feedService":14,"./factories/messageService":15,"./primo-explore-dom/js/primo":17,"./primo-explore-dom/js/primo/explore/helper":20}],17:[function(require,module,exports){
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
      var _version = "0.0.9";
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

},{"./primo/explore":18,"./primo/explore/helper":20,"./primo/facets":21,"./primo/records":22,"./primo/user":23,"./primo/view":24}],18:[function(require,module,exports){
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

},{"./explore/components":19,"./explore/helper":20}],19:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":25,"./helper":20}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{"./explore/components":19,"./explore/helper":20}],22:[function(require,module,exports){
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

},{"./explore/components":19,"./explore/helper":20}],23:[function(require,module,exports){
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

},{"./explore/helper":20}],24:[function(require,module,exports){
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

},{"./explore/helper":20}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{}]},{},[16])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXGdlbmVyYWxcXHNlYXJjaFRpcC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtQnJpZWZSZXN1bHRBZnRlclxcc291cmNlSWNvbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtRmluZXNPdmVydmlld0FmdGVyXFxwYXlNeUZpbmVzLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Mb2dvQWZ0ZXJcXGJldGFTd2l0Y2guanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybUxvZ29BZnRlclxcZXhwZXJpbWVudC5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTG9nb0FmdGVyXFxob21lSWNvbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtTWFpbk1lbnVBZnRlclxcZmVlZGJhY2suanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXGNvbXBvbmVudHNcXHBybVByb21vdGVMb2dpblxcUHJvbW90ZUxvZ2luLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlclxccG54WG1sLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1TZXJ2aWNlSGVhZGVyQWZ0ZXJcXHJlcG9ydEFQcm9ibGVtLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxjb21wb25lbnRzXFxwcm1Ub3BCYXJCZWZvcmVcXGZpbmVzTWVzc2FnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcY29tcG9uZW50c1xccHJtVG9wQmFyQmVmb3JlXFxnZW5lcmFsTWVzc2FnZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxmZWVkU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcZmFjdG9yaWVzXFxtZXNzYWdlU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xcbWFpbi5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltby5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZS5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmVcXGN1c3RvbVxcQ0VOVFJBTF9QQUNLQUdFXFxqc1xccHJpbW8tZXhwbG9yZS1kb21cXGpzXFxwcmltb1xcZXhwbG9yZVxcaGVscGVyLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFxwcmltby1leHBsb3JlLWRvbVxcanNcXHByaW1vXFxmYWNldHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHJlY29yZHMuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHVzZXIuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xccHJpbW9cXHZpZXcuanMiLCJwcmltby1leHBsb3JlXFxjdXN0b21cXENFTlRSQUxfUEFDS0FHRVxcanNcXHByaW1vLWV4cGxvcmUtZG9tXFxqc1xcdmVuZG9yXFxjc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzIiwicHJpbW8tZXhwbG9yZVxcY3VzdG9tXFxDRU5UUkFMX1BBQ0tBR0VcXGpzXFx1dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxakJDQUE7Ozs7Ozs7Ozs7O0FBV0E7OztBQUZBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0lBRXFCLGU7Ozs7Ozs7d0JBRUY7QUFDZjs7Ozs7Ozs7Ozs7QUFZQSxhQUFPLENBQ0wsRUFBQyxNQUFNLGtCQUFQLEVBQTJCLG9DQUEzQixFQUFxRCxTQUFTLEtBQTlELEVBQXFFLFVBQVUsZ0JBQS9FLEVBREssRUFFTCxFQUFDLE1BQU0sV0FBUCxFQUFvQixnQ0FBcEIsRUFBNEMsU0FBUyxJQUFyRCxFQUEyRCxVQUFVLGdCQUFyRSxFQUZLLEVBR0wsRUFBQyxNQUFNLGFBQVAsRUFBc0Isb0NBQXRCLEVBQWdELFNBQVMsSUFBekQsRUFBK0QsVUFBVSxnQkFBekUsRUFISyxFQUlMLEVBQUMsTUFBTSxhQUFQ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QUNELENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcclxuICBEZWNsYXJlIHlvdXIgY29tcG9uZW50cyBoZXJlLlxyXG5cclxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XHJcbiAgaHR0cDovLzJhbGl0eS5jb20vMjAxNy8wMS9pbXBvcnQtb3BlcmF0b3IuaHRtbFxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5pbXBvcnQgJy4vdXRpbHMnXHJcblxyXG4vKiBpbXBvcnQgeW91ciBjb21wb25lbnQgY29uZmlndXJhdGlvbiovXHJcbmltcG9ydCB7ZXhwZXJpbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9leHBlcmltZW50J1xyXG5pbXBvcnQge2hvbWVJY29uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTG9nb0FmdGVyL2hvbWVJY29uJ1xyXG5pbXBvcnQge2JldGFTd2l0Y2hDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvYmV0YVN3aXRjaCdcclxuaW1wb3J0IHtzb3VyY2VJY29uQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9zb3VyY2VJY29uJ1xyXG5pbXBvcnQge3BueFhtbENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVNlYXJjaFJlc3VsdFRodW1ibmFpbENvbnRhaW5lckFmdGVyL3BueFhtbCdcclxuaW1wb3J0IHtwYXlNeUZpbmVzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmluZXNPdmVydmlld0FmdGVyL3BheU15RmluZXMnXHJcbmltcG9ydCB7ZmVlZGJhY2tDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1NYWluTWVudUFmdGVyL2ZlZWRiYWNrJ1xyXG5pbXBvcnQge3NlYXJjaFRpcENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyYWwvc2VhcmNoVGlwJ1xyXG5pbXBvcnQge3JlcG9ydEFQcm9ibGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VydmljZUhlYWRlckFmdGVyL3JlcG9ydEFQcm9ibGVtJ1xyXG5pbXBvcnQge2ZpbmVzTWVzc2FnZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9maW5lc01lc3NhZ2UnXHJcbmltcG9ydCB7Z2VuZXJhbE1lc3NhZ2VDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZ2VuZXJhbE1lc3NhZ2UnXHJcbmltcG9ydCB7cHJvbW90ZUxvZ2luQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtUHJvbW90ZUxvZ2luL1Byb21vdGVMb2dpbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFmdGVyQ29tcG9uZW50cyB7XHJcblxyXG4gIHN0YXRpYyBnZXQgYWxsKCkge1xyXG4gICAgLypcclxuICAgICAgbmFtZSA9IHRoZSBzdWIgZWxlbWVudCBpbiB0aGUgYWZ0ZXIgZWxlbWVudFxyXG4gICAgICBjb25maWcgPSB0aGUgaW1wb3J0ZWQgY29uZmlndXJhdGlvbiBvYmplY3RcclxuICAgICAgZW5hYmxlZCA9IHRydWUvZmFsc2Ugc2hvdWxkIHRoZSBjb21wb25lbnQgYmUgY3JlYXRlZFxyXG4gICAgICBhcHBlbmRUbyA9IFRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gdGhpcyBhZnRlciBjb21wb25lbnQuXHJcblxyXG4gICAgICBleC4ge25hbWU6ICdob21lLWljb24nLCBjb25maWc6IGhvbWVJY29uQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ31cclxuICAgICAgcmVzdWx0cyBpbjpcclxuICAgICAgICA8cHJtLWxvZ28tYWZ0ZXIgcGFyZW50Q3RybD0nJGN0cmwnPlxyXG4gICAgICAgICAgPGhvbWUtaWNvbiBwYXJlbnRDdHJsPSckY3RybCc+PC9ob21lLWljb24+XHJcbiAgICAgICAgPC9wcm0tbG9nby1hZnRlcj5cclxuICAgICovXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7bmFtZTogJ2xpYmlzLWV4cGVyaW1lbnQnLCBjb25maWc6IGV4cGVyaW1lbnRDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ30sXHJcbiAgICAgIHtuYW1lOiAnaG9tZS1pY29uJywgY29uZmlnOiBob21lSWNvbkNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tbG9nby1hZnRlcid9LFxyXG4gICAgICB7bmFtZTogJ2JldGEtc3dpdGNoJywgY29uZmlnOiBiZXRhU3dpdGNoQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ30sXHJcbiAgICAgIHtuYW1lOiAnc291cmNlLWljb24nLCBjb25maWc6IHNvdXJjZUljb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWJyaWVmLXJlc3VsdC1hZnRlcid9LFxyXG4gICAgICB7bmFtZTogJ3BueC14bWwnLCBjb25maWc6IHBueFhtbENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tYnJpZWYtcmVzdWx0LWNvbnRhaW5lci1hZnRlcid9LFxyXG4gICAgICB7bmFtZTogJ3BheS1teS1maW5lcycsIGNvbmZpZzogcGF5TXlGaW5lc0NvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tZmluZXMtb3ZlcnZpZXctYWZ0ZXInfSxcclxuICAgICAge25hbWU6ICdmZWVkYmFjaycsIGNvbmZpZzogZmVlZGJhY2tDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcid9LFxyXG4gICAgICB7bmFtZTogJ3JlcG9ydC1hLXByb2JsZW0nLCBjb25maWc6IHJlcG9ydEFQcm9ibGVtQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1zZXJ2aWNlLWhlYWRlci1hZnRlcid9LFxyXG4gICAgICB7bmFtZTogJ3BybS1zZWFyY2h0aXBzJywgY29uZmlnOiBzZWFyY2hUaXBDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiBudWxsfSxcclxuICAgICAge25hbWU6ICdmaW5lcy1tZXNzYWdlJywgY29uZmlnOiBmaW5lc01lc3NhZ2VDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJ30sXHJcbiAgICAgIHtuYW1lOiAnYW5ub3VuY2VtZW50JywgY29uZmlnOiBnZW5lcmFsTWVzc2FnZUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tdG9wLWJhci1iZWZvcmUnfSxcclxuICAgICAge25hbWU6ICdwcm9tb3RlLWxvZ2luJywgY29uZmlnOiBwcm9tb3RlTG9naW5Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXBlcnNvbmFsLWluZm8tYWZ0ZXInfVxyXG4gICAgXS5maWx0ZXIoKG0pID0+IG0uZW5hYmxlZCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBzZWFyY2hUaXBIVE1MIGZyb20gJy4vc2VhcmNoVGlwLmh0bWwnXHJcbmltcG9ydCB0aXBfZW5VU19IVE1MIGZyb20gJy4vc2VhcmNoVGlwL2VuVVMuaHRtbCdcclxuaW1wb3J0IHRpcF9mckZSX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvZnJGUi5odG1sJ1xyXG5pbXBvcnQgdGlwX25sQkVfSFRNTCBmcm9tICcuL3NlYXJjaFRpcC9ubEJFLmh0bWwnXHJcblxyXG5jbGFzcyBTZWFyY2hUaXBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRodHRwLCAkbWREaWFsb2cpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGxldCBsb2NhbGUgPSB2aWV3LmludGVyZmFjZUxhbmd1YWdlO1xyXG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xyXG5cclxuICAgICAgbGV0IGxvY2FsZV90ZXh0ID0ge1xyXG4gICAgICAgICdubF9CRSc6IHtcclxuICAgICAgICAgICd0aXRsZSc6ICdab2VrdGlwcycsXHJcbiAgICAgICAgICAndGl0bGVfbGFiZWwnOiBcIlpvZWt0aXBzIHdlZXJnZXZlblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZW5fVVMnOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnU2VhcmNoIFRpcHMnLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJTZWFyY2ggVGlwc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZnJfRlInOiB7XHJcbiAgICAgICAgICAndGl0bGUnOiAnQXN0dWNlcz8nLFxyXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJBc3R1Y2VzP1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHRpcHNIVE1MID0gdGlwX2VuVVNfSFRNTDtcclxuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdmcl9GUic6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9mckZSX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdubF9CRSc6XHJcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9ubEJFX0hUTUw7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGlwc0hUTUwgPSB0aXBfZW5VU19IVE1MO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkc2NvcGUudGl0bGUgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZSddO1xyXG4gICAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZV9sYWJlbCddO1xyXG5cclxuICAgICAgJHNjb3BlLnNob3dTZWFyY2hUaXBzID0gZnVuY3Rpb24oJGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgIHBhcmVudDogcGFyZW50RWwsXHJcbiAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IHRpcHNIVE1MLFxyXG4gICAgICAgICAgbG9jYWxzOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiAkc2NvcGUuaXRlbXNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIERpYWxvZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2csIGl0ZW1zKSB7XHJcbiAgICAgICAgJHNjb3BlLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgJHNjb3BlLmNsb3NlRGlhbG9nID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5TZWFyY2hUaXBDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckaHR0cCcsICckbWREaWFsb2cnXVxyXG5cclxuZXhwb3J0IGxldCBzZWFyY2hUaXBDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogU2VhcmNoVGlwQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogc2VhcmNoVGlwSFRNTFxyXG59XHJcbiIsImltcG9ydCBzb3VyY2VJY29uSFRNTCBmcm9tICcuL3NvdXJjZUljb24uaHRtbCdcclxuXHJcbmNsYXNzIFNvdXJjZUljb25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdmFyIHBhcmVudEN0cmwgPSAkc2NvcGUuJHBhcmVudC4kY3RybC5wYXJlbnRDdHJsO1xyXG4gICAgdmFyIGljb25Db25mID0gW3tcclxuICAgICAgJ3NvdXJjZWlkJzogJ2xpcmlhcycsXHJcbiAgICAgICdpY29uVXJsJzogJy8vbGltby5saWJpcy5iZS9wcmltb19saWJyYXJ5L2xpYndlYi9saWJpcy9pbWFnZXMvbGlyaWFzLmpwZycsXHJcbiAgICAgICdpY29uVGV4dCc6ICdMaXJpYXMnXHJcbiAgICB9XTtcclxuXHJcbiAgICB2YXIgaWNvbkNvbmZTb3VyY2VzID0gaWNvbkNvbmYubWFwKG9iaiA9PiBvYmouc291cmNlaWQpO1xyXG5cclxuICAgIHNlbGYuc291cmNlaWQgPSBudWxsO1xyXG4gICAgaWYgKCdzb3VyY2VpZCcgaW4gcGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sKSB7XHJcbiAgICAgIHNlbGYuc291cmNlaWQgPSBwYXJlbnRDdHJsLml0ZW0ucG54LmNvbnRyb2wuc291cmNlaWRbMF07XHJcblxyXG4gICAgICBpZiAoaWNvbkNvbmZTb3VyY2VzLmluY2x1ZGVzKHNlbGYuc291cmNlaWQpKSB7XHJcbiAgICAgICAgc2VsZi5pY29uID0gaWNvbkNvbmYuZmluZChmdW5jdGlvbih4KSB7XHJcbiAgICAgICAgICByZXR1cm4geC5zb3VyY2VpZCA9PT0gc2VsZi5zb3VyY2VpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2RpdicpLmFwcGVuZCgkY29tcGlsZShzb3VyY2VJY29uSFRNTCkoJHNjb3BlKSk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuU291cmNlSWNvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJ107XHJcblxyXG5leHBvcnQgbGV0IHNvdXJjZUljb25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogU291cmNlSWNvbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiaW1wb3J0IHBheU15RmluZXNIVE1MIGZyb20gJy4vcGF5TXlGaW5lcy5odG1sJ1xyXG5cclxuY2xhc3MgUGF5TXlGaW5lc0NvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5zaG93UGF5TXlGaW5lcyA9IGZhbHNlOyAgXHJcbiAgfVxyXG5cclxuICAkb25Jbml0KCkge1xyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBpZiAoL15LVUxldXZlbi8udGVzdCh2aWV3LmNvZGUpKSB7XHJcbiAgICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dQYXlNeUZpbmVzID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBwYXlNeUZpbmVzQ29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOntcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogUGF5TXlGaW5lc0NvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHBheU15RmluZXNIVE1MXHJcbn1cclxuIiwiaW1wb3J0IGJldGFTd2l0Y2hIVE1MIGZyb20gJy4vYmV0YVN3aXRjaC5odG1sJ1xyXG5cclxuY2xhc3MgQmV0YVN3aXRjaENvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi4kc2NvcGUgPSAkc2NvcGU7XHJcblxyXG4gICAgJHNjb3BlLnNob3dCZXRhU3dpdGNoID0gdHJ1ZTtcclxuICAgICRzY29wZS51c2VCZXRhID0gdHJ1ZTtcclxuXHJcbiAgICAkc2NvcGUub25DaGFuZ2VVc2VCZXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoISAkc2NvcGUudXNlQmV0YSl7XHJcbiAgICAgICAgc2VsZi5nb1RvT2xkVUkoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdvVG9PbGRVSSgpIHtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9Jy9wcmltb19saWJyYXJ5L2xpYndlYi9hY3Rpb24vc2VhcmNoLmRvP3ZpZD0nKyB0aGlzLm9sZFZpZDtcclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICB2YXIgTGlua1RvQmV0YVZpZXdzID0ge1xyXG4gICAgICAnQUNWJzonQUNWJyxcclxuICAgICAgJ0JQQic6J0JQQicsXHJcbiAgICAgICdGQVJPJzonRkFSTycsXHJcbiAgICAgICdGT0RGSU4nOidGT0RGSU4nICxcclxuICAgICAgJ0dDTEQnOidHQ0xEJyxcclxuICAgICAgJ0dTQic6J0dTQicsXHJcbiAgICAgICdHU0cnOidHU0cnLFxyXG4gICAgICAnSU1FQyc6J0lNRUMnLFxyXG4gICAgICAnS0FET0MnOidLQURPQycsXHJcbiAgICAgICdLQkMnOidLQkMnLFxyXG4gICAgICAnS01LRyc6J0tNS0cnLFxyXG4gICAgICAnS1VMZXV2ZW4nOidLVUxldXZlbl9VWCcsXHJcbiAgICAgICdMSUJBUic6J0xJQkFSJyxcclxuICAgICAgJ0xVQ0EnOidMVUNBX1VYJyxcclxuICAgICAgJ05CQic6J05CQicsXHJcbiAgICAgICdPRElTRUUnOidPRElTRUVfVVgnLFxyXG4gICAgICAnT0ZPJzonT0ZPJyxcclxuICAgICAgJ1JCSU5TJzonUkJJTlMnLFxyXG4gICAgICAnUkVMSSc6J1JFTEknLFxyXG4gICAgICAnUk1DQSc6J1JNQ0EnLFxyXG4gICAgICAnU0VSVic6J1NFUlYnLFxyXG4gICAgICAnVE1PUkVLJzonVE1PUkVLX1VYJyxcclxuICAgICAgJ1RNT1JFTSc6J1RNT1JFTUFfVVgnLFxyXG4gICAgICAnVkRJQyc6J1ZESUMnLFxyXG4gICAgICAnVklWRVNfS0FUSE8nOidWSVZFU19LQVRIT19VWCcsXHJcbiAgICAgICdWSVZFU19LSEJPJzonVklWRVNfS0hCT19VWCcsXHJcbiAgICAgICdWTFAnOidWTFAnLFxyXG4gICAgICAnS1VMZXV2ZW5fVE1PUkVNJzonS1VMZXV2ZW5fVE1PUkVNX1VYJyxcclxuICAgICAgJ0tVTGV1dmVuX1VDTEwnOidLVUxldXZlbl9VQ0xMX1VYJyxcclxuICAgICAgJ0tVTGV1dmVuX1RNT1JFSyc6J0tVTGV1dmVuX1RNT1JFS19VWCcsXHJcbiAgICAgICdLVUxldXZlbl9MVUNBJzonS1VMZXV2ZW5fTFVDQV9VWCcsXHJcbiAgICAgICdLVUxldXZlbl9WSVZFU19LSEJPJzonS1VMZXV2ZW5fVklWRVNfS0hCT19VWCcsXHJcbiAgICAgICdLVUxldXZlbl9PRElTRUUnOidLVUxldXZlbl9PRElTRUVfVVgnLFxyXG4gICAgICAnS0hMSU0nOidVQ0xMX0xJTUJVUkdfVVgnLFxyXG4gICAgICAnS0hMJzonVUNMTF9MRVVWRU5fVVgnXHJcbiAgICB9XHJcblxyXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICBpZiAoL15FQ0IvLnRlc3Qodmlldy5jb2RlKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0JldGFTd2l0Y2ggPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9sZFZpZCA9IE9iamVjdC5rZXlzKExpbmtUb0JldGFWaWV3cykuZmluZChrZXkgPT4gTGlua1RvQmV0YVZpZXdzW2tleV0gPT09IHZpZXcuY29kZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgbGV0IGJldGFTd2l0Y2hDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogQmV0YVN3aXRjaENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IGJldGFTd2l0Y2hIVE1MXHJcbn1cclxuIiwiLyogY29tcG9uZW50IHRvIGRvIGFsbCB5b3VyIGV4cGVyaW1lbnRhbCBzdHVmZiAqL1xyXG4vKiBbZW58ZGlzXWFibGUgaW4gY29tcG9uZW50cyovXHJcblxyXG5jbGFzcyBFeHBlcmltZW50Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRXhwZXJpbWVudDonKTtcclxuICB9XHJcbn1cclxuXHJcbi8vRXhwZXJpbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnc2VhcmNoUmVzdWx0cyddO1xyXG5cclxuZXhwb3J0IGxldCBleHBlcmltZW50Q29uZmlnID0ge1xyXG4gIGJpbmRpbmdzOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IEV4cGVyaW1lbnRDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCBob21lSWNvbkhUTUwgZnJvbSAnLi9ob21lSWNvbi5odG1sJ1xyXG5cclxuY2xhc3MgSG9tZUljb25Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHApIHtcclxuICAgIGxldCBjdHJsID0gdGhpcztcclxuXHJcbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcclxuICAgICAgbGV0IHZpZCA9IHZpZXcuY29kZTtcclxuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7IC8vd2luZG93LlByaW1vLmV4cGxvcmUuaGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5pMThuU2VydmljZS5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAgICAgbGV0IGxpYnJhcnlMb2dvID0gd2luZG93LmFwcENvbmZpZy5jdXN0b21pemF0aW9uLmxpYnJhcnlMb2dvO1xyXG4gICAgICBsZXQgbG9jYWxlTGlicmFyeUxvZ28gPSAnY3VzdG9tLycgKyB2aWQgKyAnL2ltZy9saWJyYXJ5LWxvZ28tJyArIGxvY2FsZSArICcucG5nJztcclxuXHJcbiAgICAgIGlmIChsaWJyYXJ5TG9nbyAhPT0gbG9jYWxlTGlicmFyeUxvZ28pIHtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgdXJsOiBsb2NhbGVMaWJyYXJ5TG9nbyxcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsb2NhbGVMaWJyYXJ5TG9nbztcclxuICAgICAgICAgICRjb21waWxlKCRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpKSgkc2NvcGUpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN0cmwuaG9tZVBhZ2VMaW5rID0gJy9wcmltby1leHBsb3JlL3NlYXJjaD92aWQ9JyArIHZpZCArIFwiJmxhbmc9XCIgKyBsb2NhbGU7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkhvbWVJY29uQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJGh0dHAnXTtcclxuXHJcbmV4cG9ydCBsZXQgaG9tZUljb25Db25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogSG9tZUljb25Db250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiBob21lSWNvbkhUTUxcclxufVxyXG4iLCJpbXBvcnQgZmVlZGJhY2tIVE1MIGZyb20gJy4vZmVlZGJhY2suaHRtbCdcclxuaW1wb3J0IGZlZWRiYWNrRGlhbG9nSFRNTCBmcm9tICcuL2ZlZWRiYWNrRGlhbG9nLmh0bWwnXHJcblxyXG4vL1RPRE86U2VwYXJhdGUgZmVlZGJhY2tEaWFsb2dDb250cm9sbGVyXHJcbmNsYXNzIEZlZWRiYWNrQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwLCBmZWVkYmFja1NlcnZpY2VVUkwpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICBzZWxmLiRlbGVtZW50ID0gJGVsZW1lbnQ7XHJcbiAgICBzZWxmLiRjb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICBzZWxmLiRzY29wZSA9ICRzY29wZTtcclxuXHJcbiAgICAkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCdkaXYnKS5hcHBlbmQoJGNvbXBpbGUoZmVlZGJhY2tIVE1MKSgkc2NvcGUpKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGZlZWRiYWNrU2VydmljZVVSTCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5zaG93RmVlZGJhY2tGb3JtID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZXQgdGhlIFwiZmVlZGJhY2tTZXJ2aWNlVVJMXCIgdmFyaWFibGUnKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgc2VsZi52aWV3ID0gdmlldztcclxuICAgICAgICAgIHNlbGYuc2hvd0ZlZWRiYWNrRm9ybSA9ICgkZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgJG1kRGlhbG9nLnNob3coe1xyXG4gICAgICAgICAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxyXG4gICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogZmVlZGJhY2tEaWFsb2dIVE1MLFxyXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSwgJG1kRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2sgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICdmZWVkYmFjaydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxGZWVkYmFjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAkbWREaWFsb2cuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VuZEZlZWRiYWNrID0gZnVuY3Rpb24oYW5zd2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICRzY29wZS5mZWVkYmFjay5zdWJqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGluc3Q6IHNlbGYudmlldy5pbnN0aXR1dGlvbi5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlZEluOiBzZWxmLnVzZXIuaXNMb2dnZWRJbigpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHNlbGYudXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmVlZGJhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrOiAkc2NvcGUuZmVlZGJhY2subWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8ubGVuZ3RoID4gMCAmJiAkc2NvcGUuZmVlZGJhY2subWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cmw6IGZlZWRiYWNrU2VydmljZVVSTCxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtRnJvbS1FeEwtQVBJLUdhdGV3YXknOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJG1kVG9hc3Quc2hvd1NpbXBsZSgnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkbWRUb2FzdC5zaG93U2ltcGxlKCdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8vICAkb25Jbml0KCl7XHJcbi8vICAgIHRoaXMuJGVsZW1lbnQucGFyZW50KCkuZmluZCgnZGl2JykuYXBwZW5kKHRoaXMuJGNvbXBpbGUoZmVlZGJhY2tEaWFsb2dIVE1MKSh0aGlzLiRzY29wZSkpO1xyXG4vLyAgfVxyXG59XHJcblxyXG5GZWVkYmFja0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckaHR0cCcsICdmZWVkYmFja1NlcnZpY2VVUkwnXTtcclxuXHJcbmV4cG9ydCBsZXQgZmVlZGJhY2tDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmVlZGJhY2tDb250cm9sbGVyLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59XHJcbiIsImltcG9ydCBwcm9tb3RlTG9naW5IVE1MIGZyb20gJy4vcHJvbW90ZUxvZ2luQ29uZmlnLmh0bWwnXHJcblxyXG5jbGFzcyBQcm9tb3RlTG9naW5Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigkc2NvcGUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuc2hvd0F1dG9tYXRpY0xvZ2luID0gZmFsc2U7ICBcclxuXHJcbiAgICB0aGlzLmFsd2F5c1NpZ25pbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJpbW9Qcm9tb3RlTG9naW5cIik7XHJcbiAgICB0aGlzLmFsd2F5c1NpZ25pbkNoZWNrQm94ID0gdHJ1ZTtcclxuICAgICRzY29wZS5hbHdheXNTaWduaW5DaGVja2VkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICggdGhpcy5hbHdheXNTaWduaW5DaGVja0JveCApe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmltb1Byb21vdGVMb2dpbicsICdhbHdheXNTaWduaW4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJpbW9Qcm9tb3RlTG9naW4nKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gICRvbkluaXQoKSB7XHJcbiAgICBQcmltby52aWV3LnRoZW4odmlldyA9PiB7XHJcbiAgICAgIGlmICgvXktVTGV1dmVuLy50ZXN0KHZpZXcuY29kZSkpIHtcclxuICAgICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0F1dG9tYXRpY0xvZ2luID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHByb21vdGVMb2dpbkNvbmZpZyA9IHtcclxuICBiaW5kaW5nczp7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFByb21vdGVMb2dpbkNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHByb21vdGVMb2dpbkhUTUxcclxufVxyXG4iLCJpbXBvcnQgcG54WG1sSFRNTCBmcm9tICcuL3BueFhtbC5odG1sJ1xyXG5jbGFzcyBQbnhYbWxDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB0aGlzLnJlY29yZGlkID0gdGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5yZWNvcmRpZFswXTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICB0aGlzLnJlY29yZGlkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICRvbkluaXQoKXtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwbngteG1sLXRyaWdnZXInKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncG54LXhtbC10cmlnZ2VyJyk7XHJcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7Ym90dG9tOjA7aGVpZ2h0OjIwcHg7d2lkdGg6MjBweDt6LWluZGV4OjEwMDA7YmFja2dyb3VuZC1jb2xvcjpibGFjaztvcGFjaXR5Oi4wMycpO1xyXG4gICAgICBkaXYub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNlbGYudmlzaWJsZSA9ICFzZWxmLnZpc2libGU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG54LXhtbCcpKSkge1xyXG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi52aXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwbnhYbWxDb25maWcgPSB7XHJcbiAgYmluZGluZ3MgOiB7XHJcbiAgICBwYXJlbnRDdHJsOiAnPCdcclxuICB9LFxyXG4gIGNvbnRyb2xsZXI6IFBueFhtbENvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6IHBueFhtbEhUTUxcclxufVxyXG4iLCJpbXBvcnQgcmVwb3J0QVByb2JsZW1IVE1MIGZyb20gJy4vcmVwb3J0QVByb2JsZW0uaHRtbCdcclxuaW1wb3J0IHJlcG9ydEFQcm9ibGVtRGlhbG9nSFRNTCBmcm9tICcuL3JlcG9ydEFQcm9ibGVtRGlhbG9nLmh0bWwnXHJcblxyXG5jbGFzcyBSZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKCRlbGVtZW50LCAkY29tcGlsZSwgJHNjb3BlLCAkbWREaWFsb2csICRtZFRvYXN0LCAkaHR0cCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKC9ebnVpXFwuZ2V0aXRcXC4vLnRlc3QodGhpcy5wYXJlbnRDdHJsLnBhcmVudEN0cmwudGl0bGUpKSB7XHJcbiAgICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2g0JykuYWZ0ZXIoJGNvbXBpbGUocmVwb3J0QVByb2JsZW1IVE1MKSgkc2NvcGUpKTtcclxuXHJcbiAgICAgIGxldCByZWNvcmREYXRhID0gc2VsZi5jdXJyZW50UmVjb3JkO1xyXG5cclxuICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgIHNlbGYudXNlciA9IHVzZXI7XHJcbiAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgc2VsZi52aWV3ID0gdmlldztcclxuXHJcbiAgICAgICAgICBzZWxmLnNob3dSZXBvcnRBUHJvYmxlbUZvcm0gPSAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICRtZERpYWxvZy5zaG93KHtcclxuICAgICAgICAgICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcclxuICAgICAgICAgICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHRhcmdldEV2ZW50OiAkZXZlbnQsXHJcbiAgICAgICAgICAgICAgdGVtcGxhdGU6IHJlcG9ydEFQcm9ibGVtRGlhbG9nSFRNTCxcclxuICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRtZERpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlcG9ydCA9IHtcclxuICAgICAgICAgICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgc3ViamVjdDogJ3JlcG9ydCBhIHByb2JsZW0nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2FuY2VsUmVwb3J0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5zZW5kUmVwb3J0ID0gZnVuY3Rpb24oYW5zd2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZElkOiByZWNvcmREYXRhLnBueC5jb250cm9sLnJlY29yZGlkWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUeXBlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uSWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVjb3JkRGF0YS5wbnguZGlzcGxheS50aXRsZVswXSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVzb3VyY2VfcHJvYmxlbScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJHNjb3BlLnJlcG9ydC5zdWJqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IHNlbGYudmlldy5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGluc3Q6IHNlbGYudmlldy5pbnN0aXR1dGlvbi5jb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlZEluOiBzZWxmLnVzZXIuaXNMb2dnZWRJbigpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FtcHVzOiBzZWxmLnVzZXIuaXNPbkNhbXB1cygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHNlbGYudXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGZlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBpcDogc2VsZi52aWV3LmlwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJHNjb3BlLnJlcG9ydC5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcGx5VG86ICRzY29wZS5yZXBvcnQucmVwbHlUbyB8fCBzZWxmLnVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucmVwb3J0LnJlcGx5VG8ubGVuZ3RoID4gMCAmJiAkc2NvcGUucmVwb3J0Lm1lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc2VydmljZXMubGliaXMuYmUvcmVwb3J0X2FfcHJvYmxlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkbWRUb2FzdC5zaG93U2ltcGxlKCdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICRtZFRvYXN0LnNob3dTaW1wbGUoJ1VuYWJsZSB0byBzdWJtaXQgZmVlZGJhY2suJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfTsgLy9zaG93UmVwb3J0QVByb2JsZW1Gb3JtXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRSZWNvcmQoKSB7XHJcbiAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXHJcbiAgICBsZXQgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50Q3RybCk7XHJcbiAgICAgIHJldHVybiBlbGVtZW50Q3RybC5pdGVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5SZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGVsZW1lbnQnLCAnJGNvbXBpbGUnLCAnJHNjb3BlJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsICckaHR0cCddO1xyXG5cclxuZXhwb3J0IGxldCByZXBvcnRBUHJvYmxlbUNvbmZpZyA9IHtcclxuICBiaW5kaW5nczoge1xyXG4gICAgcGFyZW50Q3RybDogJzwnXHJcbiAgfSxcclxuICBjb250cm9sbGVyOiBSZXBvcnRBUHJvYmxlbUNvbnRyb2xsZXIsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn1cclxuIiwiY2xhc3MgRmluZXNNZXNzYWdlQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoTWVzc2FnZVNlcnZpY2UsICR0cmFuc2xhdGUsICRyb290U2NvcGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcclxuICAgICAgc2VsZi51c2VyID0gdXNlcjtcclxuICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vVE9ETzpleHRyYWN0IGh0bWwgdG8gaXRzIG93biBmaWxlLiBmaW5kIG91dCBob3cgdG8gcmVzb2x2ZSB7e319XHJcblxyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnlvdUhhdmVGaW5lcycpO1xyXG4gICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoL1xcJDAvLCB1c2VyLmZpbmVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGxldCBwYXkgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkueW91SGF2ZUZpbmVzLnBheScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3coYFxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImFsaWduLXNlbGY6Y2VudGVyO1wiPiR7bWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO2NvbG9yOiB3aGl0ZTtcIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1yYWlzZWQgbWQtc2VjdW5kYXJ5XCIgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvcGF5X215X2ZpbmVzJz4ke3BheX08L2E+XHJcbiAgICAgICAgICBgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5GaW5lc01lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ01lc3NhZ2VTZXJ2aWNlJywgJyR0cmFuc2xhdGUnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuZXhwb3J0IGxldCBmaW5lc01lc3NhZ2VDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtcclxuICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gIH0sXHJcbiAgY29udHJvbGxlcjogRmluZXNNZXNzYWdlQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJjbGFzcyBHZW5lcmFsTWVzc2FnZUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yKE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgICBNZXNzYWdlU2VydmljZS5zaG93KCk7XHJcbiAgfVxyXG59XHJcblxyXG5HZW5lcmFsTWVzc2FnZUNvbnRyb2xsZXIuJGluamVjdCA9IFsnTWVzc2FnZVNlcnZpY2UnXTtcclxuXHJcbmV4cG9ydCBsZXQgZ2VuZXJhbE1lc3NhZ2VDb25maWcgPSB7XHJcbiAgYmluZGluZ3M6IHtwYXJlbnRDdHJsOiAnPCd9LFxyXG4gIGNvbnRyb2xsZXI6IEdlbmVyYWxNZXNzYWdlQ29udHJvbGxlcixcclxuICB0ZW1wbGF0ZTogJydcclxufVxyXG4iLCJleHBvcnQgbGV0IGZlZWRTZXJ2aWNlID0gWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XHJcbiAgdmFyIGZlZWRBbnRpQ2FjaGUgPSBcIj8mdD1cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcmFuZG9tTnVtO1xyXG4gIHZhciByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCArIDEpO1xyXG4gIHZhciBmZWVkZGF5c29sZCA9IDYwO1xyXG5cclxuICB2YXIgZG0gPSBuZXcgRGF0ZSgpO1xyXG4gIGRtLnNldEhvdXJzKDI0LCAwLCAwLCAwKTtcclxuXHJcbiAgdmFyIGFwaV9lbmRwb2ludCA9ICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRfYWdncmVnYXRvcj8nO1xyXG5cclxuICBmdW5jdGlvbiByZWFkRmVlZENvbmZpZyh1cmwpIHtcclxuICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJYLUZyb20tRXhMLUFQSS1HYXRld2F5XCI6IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlYWRGZWVkKHVybCkge1xyXG4gICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgdXJsOiBhcGlfZW5kcG9pbnQgKyB1cmwsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIlgtRnJvbS1FeEwtQVBJLUdhdGV3YXlcIjogdW5kZWZpbmVkXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VGZWVkKGNvbmYpIHtcclxuICAgIHJldHVybiByZWFkRmVlZChjb25mLmZlZWRVcmwpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coY29uZi5mZWVkVXJsKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhjb25mLmZlZWRGaWx0ZXIpO1xyXG4gICAgICB2YXIgcGF0dCA9IC9eZW50cnlcXC58Xml0ZW1cXC4vaTtcclxuICAgICAgdmFyIGZpbHRlcmVkUmVzdWx0cyA9IHJlcy5kYXRhLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHZhciByZXR2YWwgPSBmYWxzZTtcclxuICAgICAgICBpZiAoaXRlbS5wdWJEYXRlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICBpdGVtLnB1YkRhdGUgPSBkbTtcclxuICAgICAgICAgIHJlcy5kYXRhLml0ZW1zW2luZGV4XS5wdWJEYXRlID0gZG07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIG5vIGZpbHRlciBjb25maWd1cmVkICovXHJcbiAgICAgICAgaWYgKGNvbmYuZmVlZEZpbHRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmYuZmVlZEZpbHRlci5mb3JFYWNoKGZ1bmN0aW9uKGYpIHtcclxuICAgICAgICAgIGlmIChwYXR0LnRlc3QoZi5wYXJhbSkpIHtcclxuICAgICAgICAgICAgdmFyIGZmID0gZi5wYXJhbS5yZXBsYWNlKHBhdHQsIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtW2ZmXSkpIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbVtmZl0uaW5kZXhPZihmLnZhbHVlKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW1bZmZdID09IGYudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHZhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyogZmlsdGVyIG9sZCBpdGVtcyAqL1xyXG4gICAgICAgIGlmIChmZWVkZGF5c29sZCA8IE1hdGguY2VpbChkbS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShpdGVtLnB1YkRhdGUpLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpIHtcclxuICAgICAgICAgIHJldHZhbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldHZhbDtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZFJlc3VsdHM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNvcnRGZWVkKGZlZWRzKSB7XHJcbiAgICAvL3JldHVybiBmZWVkcy5zb3J0KGNvbXBhcmVEYXRlcyk7XHJcbiAgICByZXR1cm4gZmVlZHMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEucHViRGF0ZSk7XHJcbiAgICAgIHZhciBkYXRlQiA9IG5ldyBEYXRlKGIucHViRGF0ZSk7XHJcbiAgICAgIGlmIChkYXRlQS5nZXRUaW1lKCkgPT09IGRtLmdldFRpbWUoKSkge1xyXG4gICAgICAgIGRhdGVBID0gbmV3IERhdGUoMCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGVCLmdldFRpbWUoKSA9PT0gZG0uZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgZGF0ZUIgPSBuZXcgRGF0ZSgwKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlYWRGZWVkQ29uZmlnOiByZWFkRmVlZENvbmZpZyxcclxuICAgIHJlYWRGZWVkOiByZWFkRmVlZCxcclxuICAgIHBhcnNlRmVlZDogcGFyc2VGZWVkLFxyXG4gICAgc29ydEZlZWQ6IHNvcnRGZWVkXHJcbiAgfTtcclxufV07XHJcbiIsImltcG9ydCBtZXNzYWdlU2VydmljZUhUTUwgZnJvbSAnLi9tZXNzYWdlU2VydmljZS5odG1sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCRtZFRvYXN0LCAkc2NlLCAkdHJhbnNsYXRlKSB7XHJcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcclxuICAgIHRoaXMuc2NlID0gJHNjZTtcclxuICAgIHRoaXMudHJhbnNsYXRlID0gJHRyYW5zbGF0ZTtcclxuICB9XHJcblxyXG4gIHNob3cobWVzc2FnZSA9ICcnLCBoaWRlRGVsYXkgPSAwKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgaWYgKG1lc3NhZ2UubGVuZ3RoID09IDApIHtcclxuICAgICAgLy8gY29kZSB0YWJsZSBlbnRyaWVzIGNhbiBub3QgaGF2ZSBlbXB0eSBkZXNjcmlwdGlvbnMuXHJcbiAgICAgIC8vIG1lc3NhZ2UgPD0gMSB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQhISEhXHJcbiAgICAgIGxldCBtZXNzYWdlS2V5ID0gJ2xicy5nZW5lcmFsTWVzc2FnZSc7XHJcbiAgICAgIG1lc3NhZ2UgPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KG1lc3NhZ2VLZXkpO1xyXG4gICAgICBtZXNzYWdlID0gKG1lc3NhZ2UgPT0gbWVzc2FnZUtleSB8fCBtZXNzYWdlIDw9IDEpID8gJycgOiBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IHRvYXN0Q29uZmlnID0ge1xyXG4gICAgICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcclxuICAgICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcclxuICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRoaXMub25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5tZFRvYXN0LmhpZGUoKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlID0gc2VsZi5zY2UudHJ1c3RBc0h0bWwobWVzc2FnZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogbWVzc2FnZVNlcnZpY2VIVE1MLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wIGNlbnRlcicsXHJcbiAgICAgICAgaGlkZURlbGF5OiBoaWRlRGVsYXlcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5tZFRvYXN0LnNob3codG9hc3RDb25maWcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ05vIG1lc3NhZ2UgdG8gZGlzcGxheScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbk1lc3NhZ2VTZXJ2aWNlLiRpbmplY3QgPSBbJyRtZFRvYXN0JywgJyRzY2UnLCAnJHRyYW5zbGF0ZSddO1xyXG4iLCIvKlxyXG4gIENlbnRyYWwgUGFja2FnZSBMb2FkZXJcclxuXHJcbiAgRG8gTk9UIGVkaXQgdGhpcyBmaWxlLlxyXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxyXG5cclxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xyXG4gIE1laG1ldCBDZWxpa1xyXG4qL1xyXG5pbXBvcnQgUHJpbW8gZnJvbSAnLi9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltbydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnXHJcblxyXG5pbXBvcnQge2ZlZWRTZXJ2aWNlfSBmcm9tICcuL2ZhY3Rvcmllcy9mZWVkU2VydmljZSdcclxuaW1wb3J0IE1lc3NhZ2VTZXJ2aWNlIGZyb20gJy4vZmFjdG9yaWVzL21lc3NhZ2VTZXJ2aWNlJ1xyXG5cclxuLy9tYWtlIFByaW1vIHB1YmxpY1xyXG53aW5kb3cuUHJpbW8gPSBQcmltbztcclxuLy9sb2FkIFByaW1vRXhwbG9yZXIgVUkgaWYgYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKCkgaXMgcmFuXHJcbndpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gIGlmIChQcmltby5pc0RlYnVnRW5hYmxlZCgpKSB7XHJcbiAgICBsZXQgdWlVUkwgPSAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9tZWhtZXRjL3ByaW1vLWV4cGxvcmUtZG9tLXVpL2ZjMDg2OGRmL2pzL2N1c3RvbS5qcyc7XHJcbiAgICAvL2xldCB1aVVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvanMvY3VzdG9tLmpzJztcclxuXHJcbiAgICBIZWxwZXIubG9hZFNjcmlwdCh1aVVSTCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbmplY3RpbmcgVUknKTtcclxuICAgICAgUHJpbW8uZXhwbG9yZS51aS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSwgMjAwMCk7XHJcblxyXG4vL0NyZWF0ZSB0aGUgY2VudHJhbEN1c3RvbSBtb2R1bGU7XHJcbmxldCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnY2VudHJhbEN1c3RvbScsWyduZ01hdGVyaWFsJ10pXHJcbiAgICAgICAgICAgICAgICAgLmNvbnN0YW50KCdmZWVkYmFja1NlcnZpY2VVUkwnLCAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9mZWVkYmFjaycpXHJcbiAgICAgICAgICAgICAgICAgLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIC8vJHRlbXBsYXRlQ2FjaGUucHV0KCdjb21wb25lbnRzL3NlYXJjaC9mdWxsVmlldy9mdWxsLXZpZXcuaHRtbCcsIGZ1bGxWaWV3SFRNTCk7XHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAuZmFjdG9yeSgnRmVlZFNlcnZpY2UnLCBmZWVkU2VydmljZSlcclxuICAgICAgICAgICAgICAgICAuc2VydmljZSgnTWVzc2FnZVNlcnZpY2UnLCBNZXNzYWdlU2VydmljZSk7XHJcblxyXG5cclxuLy9Db250YWlucyB0aGUgYWZ0ZXIgY29tcG9uZW50IHNlbGVjdG9ycyB0aGF0IHdpbGwgYmUgaW5qZWN0ZWRcclxubGV0IGFmdGVyQ29tcG9uZW50cyA9IHt9O1xyXG5cclxuLy9DcmVhdGUgYWxsIGNvbXBvbmVudHMgYW5kIGRldGVybWluZSBpbiB3aGljaCBhZnRlciBjb21wb25lbnQgdGhlc2UgbmVlZCB0byBiZVxyXG4vL2luamVjdGVkXHJcbmNvbnNvbGUubG9nKCdMb2FkaW5nIGNlbnRyYWxDdXN0b20gY29tcG9uZW50cycpO1xyXG5Db21wb25lbnRzLmFsbC5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICBpZiAoY29tcG9uZW50LmFwcGVuZFRvKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcclxuICAgIGVsZW1lbnRzLnB1c2goY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudC5hcHBlbmRUb10gPSBlbGVtZW50cztcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGBcXHRcXHQke2NvbXBvbmVudC5uYW1lfWApO1xyXG4gIGFwcC5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUudG9DYW1lbENhc2UoKSwgY29tcG9uZW50LmNvbmZpZyk7XHJcbn0pO1xyXG5cclxuLy9JbmplY3QgcGxhY2UgaG9sZGVycyBpbnRvIHRoZSBhZnRlciBjb21wb25lbnRzXHJcbk9iamVjdC5rZXlzKGFmdGVyQ29tcG9uZW50cykuZm9yRWFjaCgoY29tcG9uZW50LGkpID0+IHtcclxuICBsZXQgc3ViQ29tcG9uZW50cyA9IGFmdGVyQ29tcG9uZW50c1tjb21wb25lbnRdO1xyXG5cclxuICBhcHAuY29tcG9uZW50KGNvbXBvbmVudC50b0NhbWVsQ2FzZSgpLCB7XHJcbiAgICBiaW5kaW5nczp7XHJcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBzdWJDb21wb25lbnRzLm1hcChtID0+IGA8JHttfSBwYXJlbnQtY3RybD1cIiRjdHJsXCI+PC8ke219PmApLmpvaW4oXCJcIilcclxuICB9KTtcclxufSk7XHJcbiIsImltcG9ydCBFeHBsb3JlIGZyb20gJy4vcHJpbW8vZXhwbG9yZSdcclxuaW1wb3J0IFJlY29yZHMgZnJvbSAnLi9wcmltby9yZWNvcmRzJ1xyXG5pbXBvcnQgRmFjZXRzIGZyb20gJy4vcHJpbW8vZmFjZXRzJ1xyXG5pbXBvcnQgVmlldyBmcm9tICcuL3ByaW1vL3ZpZXcnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4vcHJpbW8vdXNlcidcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuLyoqXHJcbiAqIFByaW1vIG1haW4gZW50cnkgY2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW1vIHtcclxuICAvKipcclxuICAgKiBSZXR1cm4gdmVyc2lvbiBpbmZvcm1hdGlvblxyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XHJcbiAgICBsZXQgX3ZlcnNpb24gPSBcIjAuMC45XCI7XHJcbiAgICByZXR1cm4gYExpYnJhcnk6JHtfdmVyc2lvbn0gLSBQcmltbzoke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fVmVyc2lvbl9OdW1iZXJ9OiR7d2luZG93LmFwcENvbmZpZ1snc3lzdGVtLWNvbmZpZ3VyYXRpb24nXS5Qcmltb19Ib3RGaXhfTnVtYmVyfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBoYXMgcmFuXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBzdGF0aWMgaXNEZWJ1Z0VuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gSGVscGVyLmlzRGVidWdFbmFibGVkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaWQgdGhlIHNjcmlwdCByYW4gb24gYSBQcmltbyBzaXRlXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBzdGF0aWMgaXNQcmltb0F2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiBIZWxwZXIuaXNQcmltb0F2YWlsYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIHByb3h5IGNsYXNzXHJcbiAgICogQHJldHVybiB7RXhwbG9yZX1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGV4cGxvcmUoKSB7XHJcbiAgICByZXR1cm4gRXhwbG9yZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIHJlY29yZHNcclxuICAgKiBAcmV0dXJuIHtSZWNvcmRzfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgcmVjb3Jkcygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgUmVjb3Jkcyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cykpO1xyXG4gICAgfSlcclxuICAgIC8vcmV0dXJuIG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHBvaW50ZXIgdG8gYXZhaWxhYmxlIGZhY2V0c1xyXG4gICAqIEByZXR1cm4ge0ZhY2V0c31cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGZhY2V0cygpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XHJcbiAgICB9KVxyXG4gICAgLy9yZXR1cm4gbmV3IEZhY2V0cyh0aGlzLmV4cGxvcmUuY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHZpZXcgcmVsYXRlZCBtZXRhZGF0YVxyXG4gICAqIEByZXR1cm4ge1ZpZXd9XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCB2aWV3KCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcmVzb2x2ZShuZXcgVmlldygpKTtcclxuICAgIH0pXHJcbiAgICAvL3JldHVybiBuZXcgVmlldygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcG9pbnRlciB0byB1c2VyIHJlbGF0ZWQgbWV0YWRhdGFcclxuICAgKiBAcmV0dXJuIHtVc2VyfVxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXQgdXNlcigpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIEhlbHBlci51c2VyRGV0YWlsc0hUVFAoKS50aGVuKCh1c2VyRGV0YWlscyk9PntcclxuICAgICAgICBIZWxwZXIudXNlckZpbmVzSFRUUCgpLnRoZW4oKHVzZXJGaW5lcykgPT4ge1xyXG4gICAgICAgICAgSGVscGVyLnVzZXJMb2Fuc0hUVFAoKS50aGVuKCh1c2VyTG9hbnMpID0+IHtcclxuICAgICAgICAgICAgICByZXNvbHZlKG5ldyBVc2VyKHtkZXRhaWxzOiB1c2VyRGV0YWlscywgZmluZXM6IHVzZXJGaW5lcywgbG9hbnM6IHVzZXJMb2Fuc30pKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnRzIGZyb20gJy4vZXhwbG9yZS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG4vL3RoaXMgaXMgcHJveHkgY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9yZSB7XHJcbiAgc3RhdGljIGdldCBjb21wb25lbnRzKCkge1xyXG4gICAgbGV0IGMgPSBuZXcgQ29tcG9uZW50cygpO1xyXG4gICAgSGVscGVyLmNvbXBvbmVudE5hbWVzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XHJcbiAgICAgIGMuYWRkKHNlbGVjdG9yKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHVpKCkge1xyXG4gICAgaWYgKHRoaXMuX3VpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhpcyBpcyBhIHN0dWIgZnVuY3Rpb24gY2FsbCBcImFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpXCIgdG8gYWN0aXZhdGUgVUknKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl91aTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaGVscGVyKCkge1xyXG4gICAgcmV0dXJuIEhlbHBlcjtcclxuICB9XHJcbn1cclxuIiwidmFyIGNzc1NlbGVjdG9yR2VuZXJhdG9yID0gbmV3KHJlcXVpcmUoJy4uLy4uL3ZlbmRvci9jc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzJykpLkNzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG5cclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcidcclxuXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCl7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYmxpbmsoKXtcclxuICAgIEhlbHBlci5ibGluayh0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCBjc3NQYXRoKCl7XHJcbiAgICByZXR1cm4gY3NzU2VsZWN0b3JHZW5lcmF0b3IuZ2V0U2VsZWN0b3IodGhpcy5lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCl7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmxvY2FsTmFtZTtcclxuICB9XHJcblxyXG4gIHNjb3BlKCl7XHJcbiAgICBpZiAoSGVscGVyLmlzRGVidWdFbmFibGVkKCkpe1xyXG4gICAgICByZXR1cm4gYW5ndWxhci5lbGVtZW50KHRoaXMuZWxlbWVudCkuc2NvcGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBydW4gXCJhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKVwiIGZpcnN0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjdHJsKCl7XHJcbiAgICBsZXQgc2NvcGUgPSB0aGlzLnNjb3BlKCk7XHJcbiAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgbGV0IHNjb3BlQ2hpbGQgPSBzY29wZS4kJGNoaWxkVGFpbDtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnJGN0cmwnKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHNjb3BlLiRjdHJsXHJcbiAgICAgIH0gZWxzZSBpZihPYmplY3Qua2V5cyhzY29wZSkuaW5jbHVkZXMoJ2N0cmwnKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHNjb3BlLmN0cmxcclxuICAgICAgfSBlbHNlIGlmIChzY29wZUNoaWxkICYmIE9iamVjdC5rZXlzKHNjb3BlQ2hpbGQpLmluY2x1ZGVzKCckY3RybCcpKXtcclxuICAgICAgICAgIHJldHVybiBzY29wZUNoaWxkLiRjdHJsO1xyXG4gICAgICB9IGVsc2UgaWYgKHNjb3BlQ2hpbGQgJiYgT2JqZWN0LmtleXMoc2NvcGVDaGlsZCkuaW5jbHVkZXMoJ2N0cmwnKSl7XHJcbiAgICAgICAgICByZXR1cm4gc2NvcGVDaGlsZC5jdHJsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignTm8gJGN0cmwgZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRzIHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgdGhpcy5fY29tcG9uZW50cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgYWRkKHNlbGVjdG9yKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBIZWxwZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICBsZXQgZWxlbWVudHNBcnJheSA9IHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IFtdO1xyXG5cclxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgICAgIGVsZW1lbnRzQXJyYXkucHVzaChuZXcgQ29tcG9uZW50KGVsZW1lbnQpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdID0gZWxlbWVudHNBcnJheTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudHNBcnJheTtcclxuICB9XHJcblxyXG4gIGdldChzZWxlY3Rvcikge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHNbc2VsZWN0b3JdIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBrZXlzKCl7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50cyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xyXG4gICAgc3RhdGljIGlzRGVidWdFbmFibGVkKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cubmFtZSA9PT0gJ05HX0VOQUJMRV9ERUJVR19JTkZPIScgfHwgdHlwZW9mKGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcm0tbG9nbycpKS5zY29wZSgpKSAhPSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNQcmltb0F2YWlsYWJsZSgpIHtcclxuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZih3aW5kb3cuYW5ndWxhcikpIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByaW1vLWV4cGxvcmUnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY29tcG9uZW50TmFtZXMoKSB7XHJcbiAgICAgICAgbGV0IHRhZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnROYW1lcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHRhZyBvZiB0YWdzKSB7XHJcbiAgICAgICAgICAgIGxldCB0YWdOYW1lID0gdGFnLmxvY2FsTmFtZTtcclxuICAgICAgICAgICAgaWYgKC9ecHJtLS8udGVzdCh0YWdOYW1lKSB8fCAvXnByaW1vLS8udGVzdCh0YWdOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnROYW1lcy5pbmNsdWRlcyh0YWdOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVzLnB1c2godGFnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudE5hbWVzID0gY29tcG9uZW50TmFtZXMuc29ydCgpLmZpbHRlcigoZSwgaSwgYSkgPT4gaSA9PT0gYS5maW5kSW5kZXgoKGUyKSA9PiBlID09PSBlMikpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnROYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5qZWN0b3IoKSB7XHJcbiAgICAgIGxldCBjID0gUHJpbW8uZXhwbG9yZS5jb21wb25lbnRzLmdldCgncHJpbW8tZXhwbG9yZScpO1xyXG4gICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGxldCBwcmltb0V4cGxvcmUgPSBhbmd1bGFyLmVsZW1lbnQoY1swXS5lbGVtZW50KTtcclxuICAgICAgICAgIGxldCBpbmplY3RvciAgICAgPSBwcmltb0V4cGxvcmUuaW5qZWN0b3IoKTtcclxuICAgICAgICAgIGlmIChpbmplY3Rvcil7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmplY3RvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBodHRwKCkge1xyXG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XHJcbiAgICAgIGlmIChpbmplY3Rvcikge1xyXG4gICAgICAgIGxldCBoID0gaW5qZWN0b3IuZ2V0KCckaHR0cCcpO1xyXG4gICAgICAgIGlmIChoKSB7XHJcbiAgICAgICAgICByZXR1cm4gaDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgbG9hZFNjcmlwdChzY3JpcHRVUkwpIHtcclxuICAgICAgaWYgKHdpbmRvdy5hbmd1bGFyKSB7XHJcbiAgICAgICAgICBsZXQgYXBwSW5qZWN0b3IgPSBhbmd1bGFyLmluamVjdG9yKFsnbmcnLCdhbmd1bGFyTG9hZCddKTtcclxuICAgICAgICAgIGlmIChhcHBJbmplY3Rvcikge1xyXG4gICAgICAgICAgICAgIGxldCBhbmd1bGFyTG9hZCA9IGFwcEluamVjdG9yLmdldCgnYW5ndWxhckxvYWQnKTtcclxuICAgICAgICAgICAgICBpZiAoYW5ndWxhckxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyTG9hZC5sb2FkU2NyaXB0KHNjcmlwdFVSTCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvb3RTY29wZSgpIHtcclxuICAgICAgbGV0IGluamVjdG9yID0gdGhpcy5pbmplY3RvcigpO1xyXG4gICAgICBpZiAoaW5qZWN0b3IpIHtcclxuICAgICAgICAgIGxldCByb290U2NvcGUgICAgPSBpbmplY3Rvci5nZXQoJyRyb290U2NvcGUnKTtcclxuICAgICAgICAgIGlmIChyb290U2NvcGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3RTY29wZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKSB7XHJcbiAgICAgIGxldCByb290U2NvcGUgPSB0aGlzLnJvb3RTY29wZSgpO1xyXG4gICAgICBpZiAocm9vdFNjb3BlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgand0RGF0YSgpIHtcclxuICAgICAgbGV0IHVTTVMgPSB0aGlzLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgICAgaWYgKHVTTVMpIHtcclxuICAgICAgICBsZXQgand0RGF0YSA9IHVTTVMuand0VXRpbFNlcnZpY2UuZ2V0RGVjb2RlZFRva2VuKCkgfHwge307XHJcbiAgICAgICAgcmV0dXJuIGp3dERhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlckRldGFpbHMoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuJGxvY2FsRm9yYWdlLmdldEl0ZW0oJ3VzZXJEZXRhaWxzJykudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyRGV0YWlsc0hUVFAoKSB7XHJcbiAgICAgIGxldCB2aWV3Q29kZSA9IHRoaXMuand0RGF0YSgpLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSxyZWplY3QpID0+IHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KGAvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS91c2Vyc2V0dGluZ3M/dmlkPSR7dmlld0NvZGV9YCkudGhlbih1c2VyRGV0YWlscyA9PiByZXNvbHZlKHVzZXJEZXRhaWxzLmRhdGEpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZXJGaW5lc0hUVFAoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2ZpbmVzJykudGhlbih1c2VyRmluZXMgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB1c2VyRmluZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmaW5lcyA9IGRhdGEuZGF0YS5maW5lcztcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZXMuZmluZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGZpbmVzJyk7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1c2VyTG9hbnNIVFRQKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL215YWNjb3VudC9sb2FucycpLnRoZW4odXNlckxvYW5zID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckxvYW5zLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9hbnMgPSBkYXRhLmRhdGEubG9hbnM7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvYW5zLmxvYW4pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBsb2FucycpO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYmxpbmsoY29tcG9uZW50LCBudW1iZXJPZkJsaW5rcyA9IDQpIHtcclxuICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGJvcmRlckVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcclxuICAgICAgICBsZXQgYm9yZGVyU2VsZWN0b3IgPSBjb21wb25lbnQuZWxlbWVudC5jc3NQYXRoICsgaW5kZXggKyAnUmVjdCc7XHJcblxyXG4gICAgICAgIGxldCBjcmVhdGVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJlY3QgPSBjb21wb25lbnQuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArIDE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBib3JkZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgcmVkJztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS50b3AgPSBlbGVtZW50UmVjdC50b3AgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBlbGVtZW50UmVjdC5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGVsZW1lbnRSZWN0LndpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUubGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib3JkZXJFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBib3JkZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlbW92ZUJvcmRlckVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYm9yZGVyRWxlbWVudCkge1xyXG4gICAgICAgICAgICBib3JkZXJFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJsaW5rQm9yZGVyRWxlbWVudCA9IChudW1iZXJPZkJsaW5rcyA9IDQpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZCbGlua3MgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVCb3JkZXJFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAoKG51bWJlck9mQmxpbmtzICUgMikgPT0gMCkgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZCbGlua3MtLTtcclxuICAgICAgICAgICAgICAgIGludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYmxpbmtCb3JkZXJFbGVtZW50LCAxMDAwLCBudW1iZXJPZkJsaW5rcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvcmRlckVsZW1lbnQgPSBjcmVhdGVCb3JkZXJFbGVtZW50KCk7XHJcbiAgICAgICAgYmxpbmtCb3JkZXJFbGVtZW50KG51bWJlck9mQmxpbmtzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2ZhY2V0cyhjb21wb25lbnRzKTtcclxuICAgIH1cclxuICAgIF9mYWNldHMoY29tcG9uZW50cykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYyA9IGNvbXBvbmVudHMuZ2V0KCdwcm0tZmFjZXQtYWZ0ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHJsLmZhY2V0U2VydmljZS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3RyeWluZyB0byBnZXQgZmFjZXRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmZhY2V0cztcclxuICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBmYWNldHMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2V4cGxvcmUvaGVscGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcyhjb21wb25lbnRzKTtcclxuICAgIH1cclxuICAgIF9pdGVtcyhjb21wb25lbnRzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjID0gY29tcG9uZW50cy5nZXQoJ3BybS1zZWFyY2gtcmVzdWx0LWxpc3QtYWZ0ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN0cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuaXRlbWxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwidHJ5IGFnYWluXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCByZWNvcmRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICByZXR1cm4gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKS5zZWFyY2hTdGF0ZVNlcnZpY2UucmVzdWx0T2JqZWN0LmRhdGE7XHJcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd1bmFibGUgdG8gcmV0cmlldmUgaXRlbXMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcclxuICBjb25zdHJ1Y3Rvcih1c2VyID0gX3NrZWxVc2VyKSB7XHJcbiAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XHJcbiAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogand0RGF0YS51c2VyIHx8ICcnLFxyXG4gICAgICAgIGVtYWlsOiB1c2VyLmRldGFpbHMuZW1haWwgfHwgJycsXHJcbiAgICAgICAgbmFtZTogand0RGF0YS51c2VyTmFtZSB8fCAnR3Vlc3QnLFxyXG4gICAgICAgIGRpc3BsYXlfbmFtZTogdVNtcy5nZXRVc2VyTmFtZUZvckRpc3BsYXkoKSxcclxuICAgICAgICBpc0xvZ2dlZEluOiAoKSA9PiB1U21zLmdldFVzZXJOYW1lKCkubGVuZ3RoID4gMCxcclxuICAgICAgICBpc09uQ2FtcHVzOiAoKSA9PiBqd3REYXRhLm9uQ2FtcHVzID09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIGZpbmVzOiB1c2VyLmZpbmVzLFxyXG4gICAgICAgIGxvYW5zOiB1c2VyLmxvYW5zXHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgX3NrZWxVc2VyKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGV0YWlsczoge30sXHJcbiAgICAgIGZpbmVzOiB7fSxcclxuICAgICAgbG9hbnM6IHt9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIGxldCB1U21zID0gSGVscGVyLnVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKTtcclxuICAgICAgbGV0IGp3dERhdGEgPSBIZWxwZXIuand0RGF0YSgpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXSxcclxuICAgICAgICBpbnN0aXR1dGlvbjoge1xyXG4gICAgICAgICAgICBjb2RlOiBqd3REYXRhLnZpZXdJbnN0aXR1dGlvbkNvZGUsXHJcbiAgICAgICAgICAgIG5hbWU6IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnN0aXR1dGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW50ZXJmYWNlTGFuZ3VhZ2U6IHVTbXMuZ2V0VXNlckxhbmd1YWdlKCkgfHwgd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmludGVyZmFjZUxhbmd1YWdlLFxyXG4gICAgICAgIGlwOiB7XHJcbiAgICAgICAgICBhZGRyZXNzOiBqd3REYXRhLmlwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBDc3NTZWxlY3RvckdlbmVyYXRvciwgcm9vdCxcclxuICAgIGluZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcclxuXHJcbiAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZGVmYXVsdF9vcHRpb25zID0ge1xyXG4gICAgICBzZWxlY3RvcnM6IFsnaWQnLCAnY2xhc3MnLCAndGFnJywgJ250aGNoaWxkJ11cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gQ3NzU2VsZWN0b3JHZW5lcmF0b3Iob3B0aW9ucykge1xyXG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xyXG4gICAgICB0aGlzLnNldE9wdGlvbnModGhpcy5kZWZhdWx0X29wdGlvbnMpO1xyXG4gICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNldE9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgIHZhciBrZXksIHJlc3VsdHMsIHZhbDtcclxuICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHRzID0gW107XHJcbiAgICAgIGZvciAoa2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICB2YWwgPSBvcHRpb25zW2tleV07XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdF9vcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLm9wdGlvbnNba2V5XSA9IHZhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmlzRWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuICEhKChlbGVtZW50ICE9IG51bGwgPyBlbGVtZW50Lm5vZGVUeXBlIDogdm9pZCAwKSA9PT0gMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRQYXJlbnRzID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgY3VycmVudF9lbGVtZW50LCByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IFtdO1xyXG4gICAgICBpZiAodGhpcy5pc0VsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmlzRWxlbWVudChjdXJyZW50X2VsZW1lbnQpKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50X2VsZW1lbnQpO1xyXG4gICAgICAgICAgY3VycmVudF9lbGVtZW50ID0gY3VycmVudF9lbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRUYWdTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVJdGVtKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnNhbml0aXplSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgdmFyIGNoYXJhY3RlcnM7XHJcbiAgICAgIGNoYXJhY3RlcnMgPSAoaXRlbS5zcGxpdCgnJykpLm1hcChmdW5jdGlvbihjaGFyYWN0ZXIpIHtcclxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSAnOicpIHtcclxuICAgICAgICAgIHJldHVybiBcIlxcXFxcIiArICgnOicuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkgKyBcIiBcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKC9bICFcIiMkJSYnKCkqKywuXFwvOzw9Pj9AXFxbXFxcXFxcXV5ge3x9fl0vLnRlc3QoY2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgY2hhcmFjdGVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZXNjYXBlKGNoYXJhY3RlcikucmVwbGFjZSgvXFwlL2csICdcXFxcJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNoYXJhY3RlcnMuam9pbignJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRJZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgaWQsIHNhbml0aXplZF9pZDtcclxuICAgICAgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgaWYgKChpZCAhPSBudWxsKSAmJiAoaWQgIT09ICcnKSAmJiAhKC9cXHMvLmV4ZWMoaWQpKSAmJiAhKC9eXFxkLy5leGVjKGlkKSkpIHtcclxuICAgICAgICBzYW5pdGl6ZWRfaWQgPSBcIiNcIiArICh0aGlzLnNhbml0aXplSXRlbShpZCkpO1xyXG4gICAgICAgIGlmIChlbGVtZW50Lm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzYW5pdGl6ZWRfaWQpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuIHNhbml0aXplZF9pZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDbGFzc1NlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGNsYXNzX3N0cmluZywgaXRlbSwgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgY2xhc3Nfc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgIGlmIChjbGFzc19zdHJpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgIGNsYXNzX3N0cmluZyA9IGNsYXNzX3N0cmluZy5yZXBsYWNlKC9cXHMrL2csICcgJyk7XHJcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL15cXHN8XFxzJC9nLCAnJyk7XHJcbiAgICAgICAgaWYgKGNsYXNzX3N0cmluZyAhPT0gJycpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGssIGxlbiwgcmVmLCByZXN1bHRzO1xyXG4gICAgICAgICAgICByZWYgPSBjbGFzc19zdHJpbmcuc3BsaXQoL1xccysvKTtcclxuICAgICAgICAgICAgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICAgICAgICBpdGVtID0gcmVmW2tdO1xyXG4gICAgICAgICAgICAgIHJlc3VsdHMucHVzaChcIi5cIiArICh0aGlzLnNhbml0aXplSXRlbShpdGVtKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgICAgfSkuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEF0dHJpYnV0ZVNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgdmFyIGF0dHJpYnV0ZSwgYmxhY2tsaXN0LCBrLCBsZW4sIHJlZiwgcmVmMSwgcmVzdWx0O1xyXG4gICAgICByZXN1bHQgPSBbXTtcclxuICAgICAgYmxhY2tsaXN0ID0gWydpZCcsICdjbGFzcyddO1xyXG4gICAgICByZWYgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XHJcbiAgICAgIGZvciAoayA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIGF0dHJpYnV0ZSA9IHJlZltrXTtcclxuICAgICAgICBpZiAocmVmMSA9IGF0dHJpYnV0ZS5ub2RlTmFtZSwgaW5kZXhPZi5jYWxsKGJsYWNrbGlzdCwgcmVmMSkgPCAwKSB7XHJcbiAgICAgICAgICByZXN1bHQucHVzaChcIltcIiArIGF0dHJpYnV0ZS5ub2RlTmFtZSArIFwiPVwiICsgYXR0cmlidXRlLm5vZGVWYWx1ZSArIFwiXVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldE50aENoaWxkU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciBjb3VudGVyLCBrLCBsZW4sIHBhcmVudF9lbGVtZW50LCBzaWJsaW5nLCBzaWJsaW5ncztcclxuICAgICAgcGFyZW50X2VsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgIGlmIChwYXJlbnRfZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgICAgc2libGluZ3MgPSBwYXJlbnRfZWxlbWVudC5jaGlsZE5vZGVzO1xyXG4gICAgICAgIGZvciAoayA9IDAsIGxlbiA9IHNpYmxpbmdzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgICBzaWJsaW5nID0gc2libGluZ3Nba107XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnQoc2libGluZykpIHtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIjpudGgtY2hpbGQoXCIgKyBjb3VudGVyICsgXCIpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0U2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgICB2YXIgaXNfdW5pcXVlLCByZXN1bHQ7XHJcbiAgICAgIGlzX3VuaXF1ZSA9IGZhbHNlO1xyXG4gICAgICBpZiAoKHNlbGVjdG9yICE9IG51bGwpICYmIHNlbGVjdG9yICE9PSAnJykge1xyXG4gICAgICAgIHJlc3VsdCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiByZXN1bHRbMF0gPT09IGVsZW1lbnQpIHtcclxuICAgICAgICAgIGlzX3VuaXF1ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpc191bmlxdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRBbGxTZWxlY3RvcnMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICB0OiBudWxsLFxyXG4gICAgICAgIGk6IG51bGwsXHJcbiAgICAgICAgYzogbnVsbCxcclxuICAgICAgICBhOiBudWxsLFxyXG4gICAgICAgIG46IG51bGxcclxuICAgICAgfTtcclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAndGFnJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC50ID0gdGhpcy5nZXRUYWdTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdpZCcpID49IDApIHtcclxuICAgICAgICByZXN1bHQuaSA9IHRoaXMuZ2V0SWRTZWxlY3RvcihlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdjbGFzcycpID49IDApIHtcclxuICAgICAgICByZXN1bHQuYyA9IHRoaXMuZ2V0Q2xhc3NTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnYXR0cmlidXRlJykgPj0gMCkge1xyXG4gICAgICAgIHJlc3VsdC5hID0gdGhpcy5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGluZGV4T2YuY2FsbCh0aGlzLm9wdGlvbnMuc2VsZWN0b3JzLCAnbnRoY2hpbGQnKSA+PSAwKSB7XHJcbiAgICAgICAgcmVzdWx0Lm4gPSB0aGlzLmdldE50aENoaWxkU2VsZWN0b3IoZWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RVbmlxdWVuZXNzID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcclxuICAgICAgdmFyIGZvdW5kX2VsZW1lbnRzLCBwYXJlbnQ7XHJcbiAgICAgIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgZm91bmRfZWxlbWVudHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICAgIHJldHVybiBmb3VuZF9lbGVtZW50cy5sZW5ndGggPT09IDEgJiYgZm91bmRfZWxlbWVudHNbMF0gPT09IGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0Q29tYmluYXRpb25zID0gZnVuY3Rpb24oZWxlbWVudCwgaXRlbXMsIHRhZykge1xyXG4gICAgICB2YXIgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCByZWYsIHJlZjE7XHJcbiAgICAgIHJlZiA9IHRoaXMuZ2V0Q29tYmluYXRpb25zKGl0ZW1zKTtcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XHJcbiAgICAgICAgaXRlbSA9IHJlZltrXTtcclxuICAgICAgICBpZiAodGhpcy50ZXN0VW5pcXVlbmVzcyhlbGVtZW50LCBpdGVtKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0YWcgIT0gbnVsbCkge1xyXG4gICAgICAgIHJlZjEgPSBpdGVtcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRhZyArIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBsIDwgbGVuMTsgbCsrKSB7XHJcbiAgICAgICAgICBpdGVtID0gcmVmMVtsXTtcclxuICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFVuaXF1ZVNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgZm91bmRfc2VsZWN0b3IsIGssIGxlbiwgcmVmLCBzZWxlY3Rvcl90eXBlLCBzZWxlY3RvcnM7XHJcbiAgICAgIHNlbGVjdG9ycyA9IHRoaXMuZ2V0QWxsU2VsZWN0b3JzKGVsZW1lbnQpO1xyXG4gICAgICByZWYgPSB0aGlzLm9wdGlvbnMuc2VsZWN0b3JzO1xyXG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcclxuICAgICAgICBzZWxlY3Rvcl90eXBlID0gcmVmW2tdO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3JfdHlwZSkge1xyXG4gICAgICAgICAgY2FzZSAnaWQnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLmkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMuaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ3RhZyc6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGVzdFVuaXF1ZW5lc3MoZWxlbWVudCwgc2VsZWN0b3JzLnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY2xhc3MnOlxyXG4gICAgICAgICAgICBpZiAoKHNlbGVjdG9ycy5jICE9IG51bGwpICYmIHNlbGVjdG9ycy5jLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgIGZvdW5kX3NlbGVjdG9yID0gdGhpcy50ZXN0Q29tYmluYXRpb25zKGVsZW1lbnQsIHNlbGVjdG9ycy5jLCBzZWxlY3RvcnMudCk7XHJcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmRfc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnYXR0cmlidXRlJzpcclxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYSAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICBmb3VuZF9zZWxlY3RvciA9IHRoaXMudGVzdENvbWJpbmF0aW9ucyhlbGVtZW50LCBzZWxlY3RvcnMuYSwgc2VsZWN0b3JzLnQpO1xyXG4gICAgICAgICAgICAgIGlmIChmb3VuZF9zZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ250aGNoaWxkJzpcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy5uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICcqJztcclxuICAgIH07XHJcblxyXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICB2YXIgYWxsX3NlbGVjdG9ycywgaXRlbSwgaywgbCwgbGVuLCBsZW4xLCBwYXJlbnRzLCByZXN1bHQsIHNlbGVjdG9yLCBzZWxlY3RvcnM7XHJcbiAgICAgIGFsbF9zZWxlY3RvcnMgPSBbXTtcclxuICAgICAgcGFyZW50cyA9IHRoaXMuZ2V0UGFyZW50cyhlbGVtZW50KTtcclxuICAgICAgZm9yIChrID0gMCwgbGVuID0gcGFyZW50cy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xyXG4gICAgICAgIGl0ZW0gPSBwYXJlbnRzW2tdO1xyXG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5nZXRVbmlxdWVTZWxlY3RvcihpdGVtKTtcclxuICAgICAgICBpZiAoc2VsZWN0b3IgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxsX3NlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2VsZWN0b3JzID0gW107XHJcbiAgICAgIGZvciAobCA9IDAsIGxlbjEgPSBhbGxfc2VsZWN0b3JzLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xyXG4gICAgICAgIGl0ZW0gPSBhbGxfc2VsZWN0b3JzW2xdO1xyXG4gICAgICAgIHNlbGVjdG9ycy51bnNoaWZ0KGl0ZW0pO1xyXG4gICAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5qb2luKCcgPiAnKTtcclxuICAgICAgICBpZiAodGhpcy50ZXN0U2VsZWN0b3IoZWxlbWVudCwgcmVzdWx0KSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihpdGVtcykge1xyXG4gICAgICB2YXIgaSwgaiwgaywgbCwgcmVmLCByZWYxLCByZXN1bHQ7XHJcbiAgICAgIGlmIChpdGVtcyA9PSBudWxsKSB7XHJcbiAgICAgICAgaXRlbXMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHQgPSBbW11dO1xyXG4gICAgICBmb3IgKGkgPSBrID0gMCwgcmVmID0gaXRlbXMubGVuZ3RoIC0gMTsgMCA8PSByZWYgPyBrIDw9IHJlZiA6IGsgPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2sgOiAtLWspIHtcclxuICAgICAgICBmb3IgKGogPSBsID0gMCwgcmVmMSA9IHJlc3VsdC5sZW5ndGggLSAxOyAwIDw9IHJlZjEgPyBsIDw9IHJlZjEgOiBsID49IHJlZjE7IGogPSAwIDw9IHJlZjEgPyArK2wgOiAtLWwpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKHJlc3VsdFtqXS5jb25jYXQoaXRlbXNbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0LnNoaWZ0KCk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmpvaW4oJycpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIENzc1NlbGVjdG9yR2VuZXJhdG9yO1xyXG5cclxuICB9KSgpO1xyXG5cclxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwgPyBkZWZpbmUuYW1kIDogdm9pZCAwKSB7XHJcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcclxuICAgIHJvb3QuQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSBDc3NTZWxlY3RvckdlbmVyYXRvcjtcclxuICB9XHJcblxyXG59KS5jYWxsKHRoaXMpO1xyXG4iLCIvKlxyXG4gIEdlbmVyYWwgXHJcblxyXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XHJcbiAgTWVobWV0IENlbGlrXHJcbiovXHJcblN0cmluZy5wcm90b3R5cGUudG9DYW1lbENhc2UgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gdGhpcy5zcGxpdCgnLScpLm1hcCgoZCxpLGEpID0+ICBpID4gMCA/IGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkLnNsaWNlKDEpIDpkKS5qb2luKCcnKTtcclxufVxyXG4iXX0=
