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

var _sourceIcon = require('./components/prmBriefResultAfter/sourceIcon');

var _pnxXml = require('./components/prmSearchResultThumbnailContainerAfter/pnxXml');

var _payMyFines = require('./components/prmFinesOverviewAfter/payMyFines');

var _feedback = require('./components/prmMainMenuAfter/feedback');

var _searchTip = require('./components/general/searchTip');

var _reportAProblem = require('./components/prmServiceHeaderAfter/reportAProblem');

var _finesMessage = require('./components/prmTopBarBefore/finesMessage');

var _generalMessage = require('./components/prmTopBarBefore/generalMessage');

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
      return [{ name: 'libis-experiment', config: _experiment.experimentConfig, enabled: false, appendTo: 'prm-logo-after' }, { name: 'home-icon', config: _homeIcon.homeIconConfig, enabled: true, appendTo: 'prm-logo-after' }, { name: 'source-icon', config: _sourceIcon.sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after' }, { name: 'pnx-xml', config: _pnxXml.pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after' }, { name: 'pay-my-fines', config: _payMyFines.payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after' }, { name: 'feedback', config: _feedback.feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after' }, { name: 'report-a-problem', config: _reportAProblem.reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after' }, { name: 'prm-searchtips', config: _searchTip.searchTipConfig, enabled: true, appendTo: null }, { name: 'fines-message', config: _finesMessage.finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before' }, { name: 'announcement', config: _generalMessage.generalMessageConfig, enabled: true, appendTo: 'prm-top-bar-before' }].filter(function (m) {
        return m.enabled;
      });
    }
  }]);

  return AfterComponents;
}();

exports.default = AfterComponents;

},{"./components/general/searchTip":2,"./components/prmBriefResultAfter/sourceIcon":3,"./components/prmFinesOverviewAfter/payMyFines":4,"./components/prmLogoAfter/experiment":5,"./components/prmLogoAfter/homeIcon":6,"./components/prmMainMenuAfter/feedback":7,"./components/prmSearchResultThumbnailContainerAfter/pnxXml":8,"./components/prmServiceHeaderAfter/reportAProblem":9,"./components/prmTopBarBefore/finesMessage":10,"./components/prmTopBarBefore/generalMessage":11,"./utils":15}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchTipHTML = '<a aria-label="{{title_label}}" title="{{title_label}}" ng-click="showSearchTips()">\n  <span class ="md-headline" id="ContentSearchTips">\n    {{title}}\n  </span>\n</a>\n';
var tip_enUS_HTML = '<md-dialog aria-label="Search tips">\n    <md-dialog-content id="searchtips">\n\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Search tips</h2>\n                <span flex></span>\n                <md-button class="md-icon-button" ng-click="closeDialog()">\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n                </md-button>\n            </div>\n        </md-toolbar>\n\n        <md-content>\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        For phrases use quotes: "global warming"\n                    </div>\n                </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        For truncated searches use an asterisk: gun* will retrieve gun, guns, gunners, gunnery, gunning, etc.\n                    </div>\n                </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        As a wildcard for one character, use ?:  wom?n will retrieve woman and women.\n                    </div>\n                </md-list-item>\n\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        To exclude a term use NOT (in uppercase): celtic NOT Irish\n                    </div>\n                </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        To group terms use brackets: Shakespeare (tragedy OR sonnet). OR is in uppercase\n                   </div>\n                </md-list-item>\n            </md-list>\n<!--\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="demo-dialog-content">\n                        For users of Internet Explorer:<br/>\n                        Limo should be viewed with version 9 or higher.<br />\n                        If you have an earlier version, it is a good idea to upgrade your browser. <br />\n                    </div>\n                </md-list-item>\n            </md-list>\n-->\n            <md-dialog-actions>\n                <div layout="row" class="demo-dialog-button">\n                    <md-button md-autofocus flex class="md-primary" ng-click="closeDialog()">\n                        Close\n                    </md-button>\n                </div>\n            </md-dialog-actions>\n        </md-content>\n    </md-dialog-content>\n</md-dialog>\n';
var tip_frFR_HTML = '<md-dialog aria-label="Zoektips">\n    <md-dialog-content id="searchtips">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Trucs & astuces</h2>\n                <span flex></span>\n                <md-button class="md-icon-button" ng-click="closeDialog()">\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n                </md-button>\n            </div>\n        </md-toolbar>\n        <md-content>\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        utilisez des guillemets pour les phrases/expressions exactes: "r\xE9chauffement global"\n                    </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            utilisez un ast\xE9risque pour les recherches tronqu\xE9es: vin* donnera vinage, vinaigre, vinasse, vineux etc.\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            utilisez ? comme caract\xE8re de remplacement: fe?me donnera femme et ferme\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            utilisez NOT (en capitales) pour exclure un mot: celtique NOT irlandais\n                        </div>\n                    </md-list-item>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        utilisez des parenth\xE8ses pour grouper les termes: Shakespeare (trag\xE9die OR sonnet). OR est \xE9crit en capitales\n                    </div>\n                </md-list-item>\n            </md-list>\n            <!--\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="demo-dialog-content">\n                Pour les utilisateurs d\'Internet Explorer:<br/>\nIl est recommand\xE9 d\'utiliser la version 9 ou ult\xE9rieure.<br/>\nSi vous avez une version plus ancienne, il est conseill\xE9 de mettre \xE0 jour votre navigateur.<br/>\n                        </div>\n                    </md-list-item>\n            </md-list>\n-->\n            <md-dialog-actions>\n                <div layout="row" class="demo-dialog-button">\n                    <md-button md-autofocus flex class="md-primary" ng-click="closeDialog()">\n                        Sluiten\n                    </md-button>\n                </div>\n            </md-dialog-actions>\n        </md-content>\n    </md-dialog-content>\n</md-dialog>\n';
var tip_nlBE_HTML = '<md-dialog aria-label="Zoektips">\n    <md-dialog-content id="searchtips">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Zoektips</h2>\n                <span flex></span>\n                <md-button class="md-icon-button" ng-click="closeDialog()">\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n                </md-button>\n            </div>\n        </md-toolbar>\n        <md-content>\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="md-list-item-text">\n                        Gebruik "" om te zoeken op exacte woordcombinatie: "global warming"\n                    </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            Gebruik een * of ? om te zoeken op delen van woorden:\n                            <p style="padding-left:1em;">\n                                gun* vindt gun, guns, gunners, gunnery, gunning, enz.<br />\n                                wom?n vindt woman en women\n                            </p>\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            Gebruik NOT (in hoofdletters) om een zoekterm uit te sluiten: celtic NOT Irish\n                        </div>\n                    </md-list-item>\n                    <md-list-item>\n                        <div class="md-list-item-text">\n                            Gebruik haakjes om termen te groeperen: Shakespeare (tragedy OR sonnet). OR is in hoofletters\n                        </div>\n                    </md-list-item>\n            </md-list>\n            <!--\n            <md-list class="md-dense" flex>\n                <md-list-item>\n                    <div class="demo-dialog-content">\n                        Voor gebruikers van Internet Explorer:<br />\n                        Limo wordt best bekeken via version 9 of hoger.<br />\n                        Gelieve uw browser te upgraden indien u over een lagere versie beschikt.<br />\n                        </div>\n                    </md-list-item>\n            </md-list>\n-->\n            <md-dialog-actions>\n                <div layout="row" class="demo-dialog-button">\n                    <md-button md-autofocus flex class="md-primary" ng-click="closeDialog()">\n                        Sluiten\n                    </md-button>\n                </div>\n            </md-dialog-actions>\n        </md-content>\n    </md-dialog-content>\n</md-dialog>\n';

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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var homeIconHTML = '<style>\n  prm-topbar prm-logo, prm-topbar prm-logo, prm-logo-after, home-icon{\n          display: flex;\n  }\n</style>\n\n<div id="home-buttons-holder"\n     ng-class="{\'fixed-to-top\': $ctrl.fixedToTop()}"\n     layout="row"\n     layout-align="center center"\n     class="layout-align-center-center layout-row">\n  <a class="md-icon-button button-over-dark md-button md-primoExplore-theme" id="home-button"\n     aria-label="Go to startpage"\n     href="{{ $ctrl.homePageLink }}">\n    <md-icon class="md-primoExplore-theme">\n      <svg id="prm_home" width="100%" height="100%" viewBox="0 0 24 24" y="0" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">\n    <path d="M10,20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n    </svg>\n    </md-icon>\n  </a>\n</div>\n';

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

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var feedbackHTML = '\n  <md-button tabindex="0" role="listitem" tabindex="0" ng-href=""\n             class="zero-margin flex-button multi-line-button button-over-dark"\n             layout="column" layout-align="center center" (click)="$ctrl.showFeedbackForm($event)"\n             aria-label="mainmenu.label.feedback">\n\n      <span class="item-content" translate="mainmenu.label.feedback"></span>\n      <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\n        <span class="item-description popover animate-popover"\n              translate="nui.mainmenu.description.feedback"></span>\n      </md-tooltip>\n  </md-button>\n';
var feedbackDialogHTML = '<!-- translations in CODE TABLES -> View Labels -->\n<md-dialog id=\'lbsFeedbackForm\' aria-label=\'feedback\'>\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2><span translate=\'mainmenu.label.feedback\'></span></h2>\n            <span flex></span>\n            <md-button class="md-icon-button" ng-click="cancelFeedback()">\n                <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content>\n      <form name=\'feedbackForm\'>\n        <div class="md-dialog-content">\n            <input type="hidden" name=\'subject\' ng-model=\'feedback.subject\'>\n            <md-input-container class="md-block">\n                <label><span translate="lbs.nui.details.email"></span></label>\n                <input type="email" name=\'replyTo\' title="{{ \'lbs.nui.details.email.why\' | translate}}" placeholder=\'john.doe@kuleuven.be\' required ng-model=\'feedback.replyTo\' ng-pattern="/^.+@.+\\..+$/">\n                <div ng-if=\'feedbackForm.replyTo.$error.required\' role="alert">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory"></span></div>\n                </div>\n                <div ng-if=\'feedbackForm.replyTo.$error.email\' role="error">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.email.mandatory.error"></span></div>\n                </div>\n            </md-input-container>\n            <md-input-container>\n                <label><span translate="lbs.nui.details.message.description.label"></span></label>\n                <textarea name="message" placeholder="{{ \'lbs.nui.details.message.description\' | translate }}" md-maxlength="5000" required md-no-asterisk rows="5" cols="80" ng-model="feedback.message"></textarea>\n                <div ng-if=\'feedbackForm.message.$error.required\' role="error">\n                  <div style=\'color:tomato;\'><span translate="lbs.nui.details.message.mandatory"></span></div>\n                </div>\n            </md-input-container>\n        </div>\n      </form>\n    </md-dialog-content>\n    <md-dialog-actions layout="row">\n        <md-button class="md-raised" ng-click="cancelFeedback()">Cancel</md-button>\n        <md-button class="md-raised md-primary " ng-click=\'sendFeedback()\'>Submit</md-button>\n    </md-dialog-actions>\n</md-dialog>\n';

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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var messageServiceHTML = '<div layout="row" class="bar alert-bar" layout-align="center center">\n  <span class="bar-text" ng-bind-html="ctrl.message" style="display:flex"></span>\n  <md-divider></md-divider>\n  <md-button aria-label="{{::(\'nui.message.dismiss\' | translate)}}" (click)="ctrl.onClose()" class="dismiss-alert-button zero-margin" ng-class="md-icon-button">\n    <span translate="nui.message.dismiss" hide-xs></span>\n  </md-button>\n</div>\n';

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

},{}],14:[function(require,module,exports){
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

},{"./components":1,"./factories/feedService":12,"./factories/messageService":13,"./primo-explore-dom/js/primo":16,"./primo-explore-dom/js/primo/explore/helper":19}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{"./primo/explore":17,"./primo/explore/helper":19,"./primo/facets":20,"./primo/records":21,"./primo/user":22,"./primo/view":23}],17:[function(require,module,exports){
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

},{"./explore/components":18,"./explore/helper":19}],18:[function(require,module,exports){
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

},{"../../vendor/css-selector-generator.js":24,"./helper":19}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{"./explore/components":18,"./explore/helper":19}],21:[function(require,module,exports){
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

},{"./explore/components":18,"./explore/helper":19}],22:[function(require,module,exports){
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

},{"./explore/helper":19}],23:[function(require,module,exports){
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

},{"./explore/helper":19}],24:[function(require,module,exports){
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

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL2dlbmVyYWwvc2VhcmNoVGlwLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtQnJpZWZSZXN1bHRBZnRlci9zb3VyY2VJY29uLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtRmluZXNPdmVydmlld0FmdGVyL3BheU15RmluZXMuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1Mb2dvQWZ0ZXIvZXhwZXJpbWVudC5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybUxvZ29BZnRlci9ob21lSWNvbi5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9jb21wb25lbnRzL3BybU1haW5NZW51QWZ0ZXIvZmVlZGJhY2suanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1TZWFyY2hSZXN1bHRUaHVtYm5haWxDb250YWluZXJBZnRlci9wbnhYbWwuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1TZXJ2aWNlSGVhZGVyQWZ0ZXIvcmVwb3J0QVByb2JsZW0uanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmluZXNNZXNzYWdlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL2NvbXBvbmVudHMvcHJtVG9wQmFyQmVmb3JlL2dlbmVyYWxNZXNzYWdlLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vQ0VOVFJBTF9QQUNLQUdFL2pzL2ZhY3Rvcmllcy9mZWVkU2VydmljZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy9mYWN0b3JpZXMvbWVzc2FnZVNlcnZpY2UuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9DRU5UUkFMX1BBQ0tBR0UvanMvbWFpbi5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL0NFTlRSQUxfUEFDS0FHRS9qcy91dGlscy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZXhwbG9yZS5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvY29tcG9uZW50cy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vZmFjZXRzLmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vcHJpbW8tZXhwbG9yZS1kb20vanMvcHJpbW8vcmVjb3Jkcy5qcyIsInByaW1vLWV4cGxvcmUvY3VzdG9tL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL3VzZXIuanMiLCJwcmltby1leHBsb3JlL2N1c3RvbS9wcmltby1leHBsb3JlLWRvbS9qcy9wcmltby92aWV3LmpzIiwicHJpbW8tZXhwbG9yZS9jdXN0b20vcHJpbW8tZXhwbG9yZS1kb20vanMvdmVuZG9yL2Nzcy1zZWxlY3Rvci1nZW5lcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBw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Z2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAgRGVjbGFyZSB5b3VyIGNvbXBvbmVudHMgaGVyZS5cblxuICBSZXdyaXRlIHRoaXMgd2hlbiBpbXBvcnRzIGNhbiBiZSBkb25lIGR5bmFtaWNhbGx5XG4gIGh0dHA6Ly8yYWxpdHkuY29tLzIwMTcvMDEvaW1wb3J0LW9wZXJhdG9yLmh0bWxcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5pbXBvcnQgJy4vdXRpbHMnXG5cbi8qIGltcG9ydCB5b3VyIGNvbXBvbmVudCBjb25maWd1cmF0aW9uKi9cbmltcG9ydCB7ZXhwZXJpbWVudENvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9leHBlcmltZW50J1xuaW1wb3J0IHtob21lSWNvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUxvZ29BZnRlci9ob21lSWNvbidcbmltcG9ydCB7c291cmNlSWNvbkNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybUJyaWVmUmVzdWx0QWZ0ZXIvc291cmNlSWNvbidcbmltcG9ydCB7cG54WG1sQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VhcmNoUmVzdWx0VGh1bWJuYWlsQ29udGFpbmVyQWZ0ZXIvcG54WG1sJ1xuaW1wb3J0IHtwYXlNeUZpbmVzQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtRmluZXNPdmVydmlld0FmdGVyL3BheU15RmluZXMnXG5pbXBvcnQge2ZlZWRiYWNrQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtTWFpbk1lbnVBZnRlci9mZWVkYmFjaydcbmltcG9ydCB7c2VhcmNoVGlwQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvZ2VuZXJhbC9zZWFyY2hUaXAnXG5pbXBvcnQge3JlcG9ydEFQcm9ibGVtQ29uZmlnfSBmcm9tICcuL2NvbXBvbmVudHMvcHJtU2VydmljZUhlYWRlckFmdGVyL3JlcG9ydEFQcm9ibGVtJ1xuaW1wb3J0IHtmaW5lc01lc3NhZ2VDb25maWd9IGZyb20gJy4vY29tcG9uZW50cy9wcm1Ub3BCYXJCZWZvcmUvZmluZXNNZXNzYWdlJ1xuaW1wb3J0IHtnZW5lcmFsTWVzc2FnZUNvbmZpZ30gZnJvbSAnLi9jb21wb25lbnRzL3BybVRvcEJhckJlZm9yZS9nZW5lcmFsTWVzc2FnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWZ0ZXJDb21wb25lbnRzIHtcblxuICBzdGF0aWMgZ2V0IGFsbCgpIHtcbiAgICAvKlxuICAgICAgbmFtZSA9IHRoZSBzdWIgZWxlbWVudCBpbiB0aGUgYWZ0ZXIgZWxlbWVudFxuICAgICAgY29uZmlnID0gdGhlIGltcG9ydGVkIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICBlbmFibGVkID0gdHJ1ZS9mYWxzZSBzaG91bGQgdGhlIGNvbXBvbmVudCBiZSBjcmVhdGVkXG4gICAgICBhcHBlbmRUbyA9IFRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gdGhpcyBhZnRlciBjb21wb25lbnQuXG5cbiAgICAgIGV4LiB7bmFtZTogJ2hvbWUtaWNvbicsIGNvbmZpZzogaG9tZUljb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInfVxuICAgICAgcmVzdWx0cyBpbjpcbiAgICAgICAgPHBybS1sb2dvLWFmdGVyIHBhcmVudEN0cmw9JyRjdHJsJz5cbiAgICAgICAgICA8aG9tZS1pY29uIHBhcmVudEN0cmw9JyRjdHJsJz48L2hvbWUtaWNvbj5cbiAgICAgICAgPC9wcm0tbG9nby1hZnRlcj5cbiAgICAqL1xuICAgIHJldHVybiBbXG4gICAgICB7bmFtZTogJ2xpYmlzLWV4cGVyaW1lbnQnLCBjb25maWc6IGV4cGVyaW1lbnRDb25maWcsIGVuYWJsZWQ6IGZhbHNlLCBhcHBlbmRUbzogJ3BybS1sb2dvLWFmdGVyJ30sXG4gICAgICB7bmFtZTogJ2hvbWUtaWNvbicsIGNvbmZpZzogaG9tZUljb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWxvZ28tYWZ0ZXInfSxcbiAgICAgIHtuYW1lOiAnc291cmNlLWljb24nLCBjb25maWc6IHNvdXJjZUljb25Db25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWJyaWVmLXJlc3VsdC1hZnRlcid9LFxuICAgICAge25hbWU6ICdwbngteG1sJywgY29uZmlnOiBwbnhYbWxDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLWJyaWVmLXJlc3VsdC1jb250YWluZXItYWZ0ZXInfSxcbiAgICAgIHtuYW1lOiAncGF5LW15LWZpbmVzJywgY29uZmlnOiBwYXlNeUZpbmVzQ29uZmlnLCBlbmFibGVkOiB0cnVlLCBhcHBlbmRUbzogJ3BybS1maW5lcy1vdmVydmlldy1hZnRlcid9LFxuICAgICAge25hbWU6ICdmZWVkYmFjaycsIGNvbmZpZzogZmVlZGJhY2tDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLW1haW4tbWVudS1hZnRlcid9LFxuICAgICAge25hbWU6ICdyZXBvcnQtYS1wcm9ibGVtJywgY29uZmlnOiByZXBvcnRBUHJvYmxlbUNvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86ICdwcm0tc2VydmljZS1oZWFkZXItYWZ0ZXInfSxcbiAgICAgIHtuYW1lOiAncHJtLXNlYXJjaHRpcHMnLCBjb25maWc6IHNlYXJjaFRpcENvbmZpZywgZW5hYmxlZDogdHJ1ZSwgYXBwZW5kVG86IG51bGx9LFxuICAgICAge25hbWU6ICdmaW5lcy1tZXNzYWdlJywgY29uZmlnOiBmaW5lc01lc3NhZ2VDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJ30sXG4gICAgICB7bmFtZTogJ2Fubm91bmNlbWVudCcsIGNvbmZpZzogZ2VuZXJhbE1lc3NhZ2VDb25maWcsIGVuYWJsZWQ6IHRydWUsIGFwcGVuZFRvOiAncHJtLXRvcC1iYXItYmVmb3JlJ31cbiAgICBdLmZpbHRlcigobSkgPT4gbS5lbmFibGVkKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgc2VhcmNoVGlwSFRNTCBmcm9tICcuL3NlYXJjaFRpcC5odG1sJ1xuaW1wb3J0IHRpcF9lblVTX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvZW5VUy5odG1sJ1xuaW1wb3J0IHRpcF9mckZSX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvZnJGUi5odG1sJ1xuaW1wb3J0IHRpcF9ubEJFX0hUTUwgZnJvbSAnLi9zZWFyY2hUaXAvbmxCRS5odG1sJ1xuXG5jbGFzcyBTZWFyY2hUaXBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkaHR0cCwgJG1kRGlhbG9nKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xuICAgICAgbGV0IGxvY2FsZSA9IHZpZXcuaW50ZXJmYWNlTGFuZ3VhZ2U7XG4gICAgICBsZXQgdmlkID0gdmlldy5jb2RlO1xuXG4gICAgICBsZXQgbG9jYWxlX3RleHQgPSB7XG4gICAgICAgICdubF9CRSc6IHtcbiAgICAgICAgICAndGl0bGUnOiAnWm9la3RpcHMnLFxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiWm9la3RpcHMgd2VlcmdldmVuXCJcbiAgICAgICAgfSxcbiAgICAgICAgJ2VuX1VTJzoge1xuICAgICAgICAgICd0aXRsZSc6ICdTZWFyY2ggVGlwcycsXG4gICAgICAgICAgJ3RpdGxlX2xhYmVsJzogXCJTZWFyY2ggVGlwc1wiXG4gICAgICAgIH0sXG4gICAgICAgICdmcl9GUic6IHtcbiAgICAgICAgICAndGl0bGUnOiAnQXN0dWNlcz8nLFxuICAgICAgICAgICd0aXRsZV9sYWJlbCc6IFwiQXN0dWNlcz9cIlxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICBsZXQgdGlwc0hUTUwgPSB0aXBfZW5VU19IVE1MO1xuICAgICAgc3dpdGNoIChsb2NhbGUpIHtcbiAgICAgICAgY2FzZSAnZnJfRlInOlxuICAgICAgICAgIHRpcHNIVE1MID0gdGlwX2ZyRlJfSFRNTDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbmxfQkUnOlxuICAgICAgICAgIHRpcHNIVE1MID0gdGlwX25sQkVfSFRNTDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aXBzSFRNTCA9IHRpcF9lblVTX0hUTUw7XG4gICAgICB9XG5cbiAgICAgICRzY29wZS50aXRsZSA9IGxvY2FsZV90ZXh0W2xvY2FsZV1bJ3RpdGxlJ107XG4gICAgICAkc2NvcGUudGl0bGVfbGFiZWwgPSBsb2NhbGVfdGV4dFtsb2NhbGVdWyd0aXRsZV9sYWJlbCddO1xuXG4gICAgICAkc2NvcGUuc2hvd1NlYXJjaFRpcHMgPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgbGV0IHBhcmVudEVsID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAkbWREaWFsb2cuc2hvdyh7XG4gICAgICAgICAgcGFyZW50OiBwYXJlbnRFbCxcbiAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxuICAgICAgICAgIHRlbXBsYXRlOiB0aXBzSFRNTCxcbiAgICAgICAgICBsb2NhbHM6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAkc2NvcGUuaXRlbXNcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIERpYWxvZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbWREaWFsb2csIGl0ZW1zKSB7XG4gICAgICAgICRzY29wZS5pdGVtcyA9IGl0ZW1zO1xuICAgICAgICAkc2NvcGUuY2xvc2VEaWFsb2cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkbWREaWFsb2cuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuU2VhcmNoVGlwQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGh0dHAnLCAnJG1kRGlhbG9nJ11cblxuZXhwb3J0IGxldCBzZWFyY2hUaXBDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFNlYXJjaFRpcENvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBzZWFyY2hUaXBIVE1MXG59XG4iLCJpbXBvcnQgc291cmNlSWNvbkhUTUwgZnJvbSAnLi9zb3VyY2VJY29uLmh0bWwnXG5cbmNsYXNzIFNvdXJjZUljb25Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkZWxlbWVudCwgJGNvbXBpbGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHBhcmVudEN0cmwgPSAkc2NvcGUuJHBhcmVudC4kY3RybC5wYXJlbnRDdHJsO1xuICAgIHZhciBpY29uQ29uZiA9IFt7XG4gICAgICAnc291cmNlaWQnOiAnbGlyaWFzJyxcbiAgICAgICdpY29uVXJsJzogJy8vbGltby5saWJpcy5iZS9wcmltb19saWJyYXJ5L2xpYndlYi9saWJpcy9pbWFnZXMvbGlyaWFzLmpwZycsXG4gICAgICAnaWNvblRleHQnOiAnTGlyaWFzJ1xuICAgIH1dO1xuXG4gICAgdmFyIGljb25Db25mU291cmNlcyA9IGljb25Db25mLm1hcChvYmogPT4gb2JqLnNvdXJjZWlkKTtcblxuICAgIHNlbGYuc291cmNlaWQgPSBudWxsO1xuICAgIGlmICgnc291cmNlaWQnIGluIHBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbCkge1xuICAgICAgc2VsZi5zb3VyY2VpZCA9IHBhcmVudEN0cmwuaXRlbS5wbnguY29udHJvbC5zb3VyY2VpZFswXTtcblxuICAgICAgaWYgKGljb25Db25mU291cmNlcy5pbmNsdWRlcyhzZWxmLnNvdXJjZWlkKSkge1xuICAgICAgICBzZWxmLmljb24gPSBpY29uQ29uZi5maW5kKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgICByZXR1cm4geC5zb3VyY2VpZCA9PT0gc2VsZi5zb3VyY2VpZDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnZGl2JykuYXBwZW5kKCRjb21waWxlKHNvdXJjZUljb25IVE1MKSgkc2NvcGUpKTtcblxuICB9XG59XG5cblNvdXJjZUljb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckZWxlbWVudCcsICckY29tcGlsZSddO1xuXG5leHBvcnQgbGV0IHNvdXJjZUljb25Db25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IFNvdXJjZUljb25Db250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImltcG9ydCBwYXlNeUZpbmVzSFRNTCBmcm9tICcuL3BheU15RmluZXMuaHRtbCdcblxuY2xhc3MgUGF5TXlGaW5lc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5zaG93UGF5TXlGaW5lcyA9IGZhbHNlOyAgXG4gIH1cblxuICAkb25Jbml0KCkge1xuICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgIGlmICgvXktVTGV1dmVuLy50ZXN0KHZpZXcuY29kZSkpIHtcbiAgICAgICAgUHJpbW8udXNlci50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgIGlmICh1c2VyLmZpbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BheU15RmluZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5leHBvcnQgbGV0IHBheU15RmluZXNDb25maWcgPSB7XG4gIGJpbmRpbmdzOntcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogUGF5TXlGaW5lc0NvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiBwYXlNeUZpbmVzSFRNTFxufVxuIiwiLyogY29tcG9uZW50IHRvIGRvIGFsbCB5b3VyIGV4cGVyaW1lbnRhbCBzdHVmZiAqL1xuLyogW2VufGRpc11hYmxlIGluIGNvbXBvbmVudHMqL1xuXG5jbGFzcyBFeHBlcmltZW50Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdFeHBlcmltZW50OicpO1xuICB9XG59XG5cbi8vRXhwZXJpbWVudENvbnRyb2xsZXIuJGluamVjdCA9IFsnc2VhcmNoUmVzdWx0cyddO1xuXG5leHBvcnQgbGV0IGV4cGVyaW1lbnRDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEV4cGVyaW1lbnRDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImltcG9ydCBob21lSWNvbkhUTUwgZnJvbSAnLi9ob21lSWNvbi5odG1sJ1xuXG5jbGFzcyBIb21lSWNvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRlbGVtZW50LCAkY29tcGlsZSwgJGh0dHApIHtcbiAgICBsZXQgY3RybCA9IHRoaXM7XG5cbiAgICBQcmltby52aWV3LnRoZW4oKHZpZXcpID0+IHtcbiAgICAgIGxldCB2aWQgPSB2aWV3LmNvZGU7XG4gICAgICBsZXQgbG9jYWxlID0gdmlldy5pbnRlcmZhY2VMYW5ndWFnZTsgLy93aW5kb3cuUHJpbW8uZXhwbG9yZS5oZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLmkxOG5TZXJ2aWNlLmdldExhbmd1YWdlKCk7XG5cbiAgICAgIGxldCBsaWJyYXJ5TG9nbyA9IHdpbmRvdy5hcHBDb25maWcuY3VzdG9taXphdGlvbi5saWJyYXJ5TG9nbztcbiAgICAgIGxldCBsb2NhbGVMaWJyYXJ5TG9nbyA9ICdjdXN0b20vJyArIHZpZCArICcvaW1nL2xpYnJhcnktbG9nby0nICsgbG9jYWxlICsgJy5wbmcnO1xuXG4gICAgICBpZiAobGlicmFyeUxvZ28gIT09IGxvY2FsZUxpYnJhcnlMb2dvKSB7XG4gICAgICAgICRodHRwKHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIHVybDogbG9jYWxlTGlicmFyeUxvZ28sXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsb2NhbGVMaWJyYXJ5TG9nbztcbiAgICAgICAgICAkY29tcGlsZSgkZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSkoJHNjb3BlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICB3aW5kb3cuYXBwQ29uZmlnLmN1c3RvbWl6YXRpb24ubGlicmFyeUxvZ28gPSBsaWJyYXJ5TG9nbztcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgICAgY3RybC5ob21lUGFnZUxpbmsgPSAnL3ByaW1vLWV4cGxvcmUvc2VhcmNoP3ZpZD0nICsgdmlkICsgXCImbGFuZz1cIiArIGxvY2FsZTtcbiAgICB9KTtcbiAgfVxufVxuXG5Ib21lSWNvbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRodHRwJ107XG5cbmV4cG9ydCBsZXQgaG9tZUljb25Db25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEhvbWVJY29uQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IGhvbWVJY29uSFRNTFxufVxuIiwiaW1wb3J0IGZlZWRiYWNrSFRNTCBmcm9tICcuL2ZlZWRiYWNrLmh0bWwnXG5pbXBvcnQgZmVlZGJhY2tEaWFsb2dIVE1MIGZyb20gJy4vZmVlZGJhY2tEaWFsb2cuaHRtbCdcblxuLy9UT0RPOlNlcGFyYXRlIGZlZWRiYWNrRGlhbG9nQ29udHJvbGxlclxuY2xhc3MgRmVlZGJhY2tDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoJGVsZW1lbnQsICRjb21waWxlLCAkc2NvcGUsICRtZERpYWxvZywgJG1kVG9hc3QsICRodHRwLCBmZWVkYmFja1NlcnZpY2VVUkwpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBzZWxmLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgc2VsZi4kY29tcGlsZSA9ICRjb21waWxlO1xuICAgIHNlbGYuJHNjb3BlID0gJHNjb3BlO1xuXG4gICAgJGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnZGl2JykuYXBwZW5kKCRjb21waWxlKGZlZWRiYWNrSFRNTCkoJHNjb3BlKSk7XG5cbiAgICBpZiAodHlwZW9mIGZlZWRiYWNrU2VydmljZVVSTCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuc2hvd0ZlZWRiYWNrRm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBhbGVydCgnUGxlYXNlIHNldCB0aGUgXCJmZWVkYmFja1NlcnZpY2VVUkxcIiB2YXJpYWJsZScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XG4gICAgICAgIHNlbGYudXNlciA9IHVzZXI7XG4gICAgICAgIFByaW1vLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgICAgICBzZWxmLnZpZXcgPSB2aWV3O1xuICAgICAgICAgIHNlbGYuc2hvd0ZlZWRiYWNrRm9ybSA9ICgkZXZlbnQpID0+IHtcbiAgICAgICAgICAgICRtZERpYWxvZy5zaG93KHtcbiAgICAgICAgICAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXG4gICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgICB0YXJnZXRFdmVudDogJGV2ZW50LFxuICAgICAgICAgICAgICB0ZW1wbGF0ZTogZmVlZGJhY2tEaWFsb2dIVE1MLFxuICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigkc2NvcGUsICRtZERpYWxvZykge1xuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFjayA9IHtcbiAgICAgICAgICAgICAgICAgIHJlcGx5VG86IHNlbGYudXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgICAgICAgc3ViamVjdDogJ2ZlZWRiYWNrJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkc2NvcGUuY2FuY2VsRmVlZGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbmRGZWVkYmFjayA9IGZ1bmN0aW9uKGFuc3dlcikge1xuICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICRzY29wZS5mZWVkYmFjay5zdWJqZWN0LFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBzZWxmLnZpZXcuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgaW5zdDogc2VsZi52aWV3Lmluc3RpdHV0aW9uLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlZEluOiBzZWxmLnVzZXIuaXNMb2dnZWRJbigpLFxuICAgICAgICAgICAgICAgICAgICBvbkNhbXB1czogc2VsZi51c2VyLmlzT25DYW1wdXMoKSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogc2VsZi51c2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZlZWRiYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2s6ICRzY29wZS5mZWVkYmFjay5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmZlZWRiYWNrLnJlcGx5VG8ubGVuZ3RoID4gMCAmJiAkc2NvcGUuZmVlZGJhY2subWVzc2FnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRtZERpYWxvZy5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xuICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgIHVybDogZmVlZGJhY2tTZXJ2aWNlVVJMLFxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICRtZFRvYXN0LnNob3dTaW1wbGUoJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkbWRUb2FzdC5zaG93U2ltcGxlKCdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLicpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbi8vICAkb25Jbml0KCl7XG4vLyAgICB0aGlzLiRlbGVtZW50LnBhcmVudCgpLmZpbmQoJ2RpdicpLmFwcGVuZCh0aGlzLiRjb21waWxlKGZlZWRiYWNrRGlhbG9nSFRNTCkodGhpcy4kc2NvcGUpKTtcbi8vICB9XG59XG5cbkZlZWRiYWNrQ29udHJvbGxlci4kaW5qZWN0ID0gWyckZWxlbWVudCcsICckY29tcGlsZScsICckc2NvcGUnLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgJyRodHRwJywgJ2ZlZWRiYWNrU2VydmljZVVSTCddO1xuXG5leHBvcnQgbGV0IGZlZWRiYWNrQ29uZmlnID0ge1xuICBiaW5kaW5nczoge1xuICAgIHBhcmVudEN0cmw6ICc8J1xuICB9LFxuICBjb250cm9sbGVyOiBGZWVkYmFja0NvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiAnJ1xufVxuIiwiaW1wb3J0IHBueFhtbEhUTUwgZnJvbSAnLi9wbnhYbWwuaHRtbCdcbmNsYXNzIFBueFhtbENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRyeSB7XG4gICAgICAgIHRoaXMucmVjb3JkaWQgPSB0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC5pdGVtLnBueC5jb250cm9sLnJlY29yZGlkWzBdO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgdGhpcy5yZWNvcmRpZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgJG9uSW5pdCgpe1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncG54LXhtbC10cmlnZ2VyJykubGVuZ3RoID09IDApIHtcbiAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwbngteG1sLXRyaWdnZXInKTtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7Ym90dG9tOjA7aGVpZ2h0OjIwcHg7d2lkdGg6MjBweDt6LWluZGV4OjEwMDA7YmFja2dyb3VuZC1jb2xvcjpibGFjaztvcGFjaXR5Oi4wMycpO1xuICAgICAgZGl2Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2VsZi52aXNpYmxlID0gIXNlbGYudmlzaWJsZTtcblxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBueC14bWwnKSkpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLnZpc2libGUgPyAnZmxleCcgOiAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBsZXQgcG54WG1sQ29uZmlnID0ge1xuICBiaW5kaW5ncyA6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogUG54WG1sQ29udHJvbGxlcixcbiAgdGVtcGxhdGU6IHBueFhtbEhUTUxcbn1cbiIsImltcG9ydCByZXBvcnRBUHJvYmxlbUhUTUwgZnJvbSAnLi9yZXBvcnRBUHJvYmxlbS5odG1sJ1xuaW1wb3J0IHJlcG9ydEFQcm9ibGVtRGlhbG9nSFRNTCBmcm9tICcuL3JlcG9ydEFQcm9ibGVtRGlhbG9nLmh0bWwnXG5cbmNsYXNzIFJlcG9ydEFQcm9ibGVtQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRlbGVtZW50LCAkY29tcGlsZSwgJHNjb3BlLCAkbWREaWFsb2csICRtZFRvYXN0LCAkaHR0cCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAoL15udWlcXC5nZXRpdFxcLi8udGVzdCh0aGlzLnBhcmVudEN0cmwucGFyZW50Q3RybC50aXRsZSkpIHtcbiAgICAgICRlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJ2g0JykuYWZ0ZXIoJGNvbXBpbGUocmVwb3J0QVByb2JsZW1IVE1MKSgkc2NvcGUpKTtcblxuICAgICAgbGV0IHJlY29yZERhdGEgPSBzZWxmLmN1cnJlbnRSZWNvcmQ7XG5cbiAgICAgIFByaW1vLnVzZXIudGhlbih1c2VyID0+IHtcbiAgICAgICAgc2VsZi51c2VyID0gdXNlcjtcbiAgICAgICAgUHJpbW8udmlldy50aGVuKHZpZXcgPT4ge1xuICAgICAgICAgIHNlbGYudmlldyA9IHZpZXc7XG5cbiAgICAgICAgICBzZWxmLnNob3dSZXBvcnRBUHJvYmxlbUZvcm0gPSAoJGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAkbWREaWFsb2cuc2hvdyh7XG4gICAgICAgICAgICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxuICAgICAgICAgICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgdGFyZ2V0RXZlbnQ6ICRldmVudCxcbiAgICAgICAgICAgICAgdGVtcGxhdGU6IHJlcG9ydEFQcm9ibGVtRGlhbG9nSFRNTCxcbiAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCAkbWREaWFsb2cpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUucmVwb3J0ID0ge1xuICAgICAgICAgICAgICAgICAgcmVwbHlUbzogc2VsZi51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICAgICAgICBzdWJqZWN0OiAncmVwb3J0IGEgcHJvYmxlbSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhbmNlbFJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VuZFJlcG9ydCA9IGZ1bmN0aW9uKGFuc3dlcikge1xuICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZElkOiByZWNvcmREYXRhLnBueC5jb250cm9sLnJlY29yZGlkWzBdLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogMCxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogJycsXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFR5cGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uSWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIHRhYjogJycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZWNvcmREYXRhLnBueC5kaXNwbGF5LnRpdGxlWzBdLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVzb3VyY2VfcHJvYmxlbScsXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICRzY29wZS5yZXBvcnQuc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogc2VsZi52aWV3LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGluc3Q6IHNlbGYudmlldy5pbnN0aXR1dGlvbi5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBsb2dnZWRJbjogc2VsZi51c2VyLmlzTG9nZ2VkSW4oKSxcbiAgICAgICAgICAgICAgICAgICAgb25DYW1wdXM6IHNlbGYudXNlci5pc09uQ2FtcHVzKCksXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHNlbGYudXNlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBmZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGlwOiBzZWxmLnZpZXcuaXAuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJHNjb3BlLnJlcG9ydC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICByZXBseVRvOiAkc2NvcGUucmVwb3J0LnJlcGx5VG8gfHwgc2VsZi51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnJlcG9ydC5yZXBseVRvLmxlbmd0aCA+IDAgJiYgJHNjb3BlLnJlcG9ydC5tZXNzYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJG1kRGlhbG9nLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc2VydmljZXMubGliaXMuYmUvcmVwb3J0X2FfcHJvYmxlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1Gcm9tLUV4TC1BUEktR2F0ZXdheSc6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICRtZFRvYXN0LnNob3dTaW1wbGUoJ1RoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFjayEnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkbWRUb2FzdC5zaG93U2ltcGxlKCdVbmFibGUgdG8gc3VibWl0IGZlZWRiYWNrLicpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICB9OyAvL3Nob3dSZXBvcnRBUHJvYmxlbUZvcm1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgY3VycmVudFJlY29yZCgpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSAncHJtLWZ1bGwtdmlldy1zZXJ2aWNlLWNvbnRhaW5lcic7IC8vJ3BybS1mdWxsLXZpZXctc2VydmljZS1jb250YWluZXInXG4gICAgbGV0IGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBsZXQgZWxlbWVudEN0cmwgPSBlbGVtZW50LmNvbnRyb2xsZXIoc2VsZWN0b3IpO1xuICAgICAgY29uc29sZS5sb2coZWxlbWVudEN0cmwpO1xuICAgICAgcmV0dXJuIGVsZW1lbnRDdHJsLml0ZW07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuUmVwb3J0QVByb2JsZW1Db250cm9sbGVyLiRpbmplY3QgPSBbJyRlbGVtZW50JywgJyRjb21waWxlJywgJyRzY29wZScsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCAnJGh0dHAnXTtcblxuZXhwb3J0IGxldCByZXBvcnRBUHJvYmxlbUNvbmZpZyA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBwYXJlbnRDdHJsOiAnPCdcbiAgfSxcbiAgY29udHJvbGxlcjogUmVwb3J0QVByb2JsZW1Db250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImNsYXNzIEZpbmVzTWVzc2FnZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihNZXNzYWdlU2VydmljZSwgJHRyYW5zbGF0ZSwgJHJvb3RTY29wZSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBQcmltby51c2VyLnRoZW4odXNlciA9PiB7XG4gICAgICBzZWxmLnVzZXIgPSB1c2VyO1xuICAgICAgaWYgKHVzZXIuZmluZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAvL1RPRE86ZXh0cmFjdCBodG1sIHRvIGl0cyBvd24gZmlsZS4gZmluZCBvdXQgaG93IHRvIHJlc29sdmUge3t9fVxuXG4gICAgICAgIGxldCBtZXNzYWdlID0gJHRyYW5zbGF0ZS5pbnN0YW50KCdsYnMubnVpLnlvdUhhdmVGaW5lcycpO1xuICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKC9cXCQwLywgdXNlci5maW5lcy5sZW5ndGgpO1xuXG4gICAgICAgIGxldCBwYXkgPSAkdHJhbnNsYXRlLmluc3RhbnQoJ2xicy5udWkueW91SGF2ZUZpbmVzLnBheScpO1xuICAgICAgICBcbiAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvdyhgXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImFsaWduLXNlbGY6Y2VudGVyO1wiPiR7bWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICA8YSBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHRvbWF0bztjb2xvcjogd2hpdGU7XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibWQtYnV0dG9uIG1kLXJhaXNlZCBtZC1zZWN1bmRhcnlcIiB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vc2VydmljZXMubGliaXMuYmUvcGF5X215X2ZpbmVzJz4ke3BheX08L2E+XG4gICAgICAgICAgYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuRmluZXNNZXNzYWdlQ29udHJvbGxlci4kaW5qZWN0ID0gWydNZXNzYWdlU2VydmljZScsICckdHJhbnNsYXRlJywgJyRyb290U2NvcGUnXTtcblxuZXhwb3J0IGxldCBmaW5lc01lc3NhZ2VDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgcGFyZW50Q3RybDogJzwnXG4gIH0sXG4gIGNvbnRyb2xsZXI6IEZpbmVzTWVzc2FnZUNvbnRyb2xsZXIsXG4gIHRlbXBsYXRlOiAnJ1xufVxuIiwiY2xhc3MgR2VuZXJhbE1lc3NhZ2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoTWVzc2FnZVNlcnZpY2UpIHtcbiAgICBNZXNzYWdlU2VydmljZS5zaG93KCk7XG4gIH1cbn1cblxuR2VuZXJhbE1lc3NhZ2VDb250cm9sbGVyLiRpbmplY3QgPSBbJ01lc3NhZ2VTZXJ2aWNlJ107XG5cbmV4cG9ydCBsZXQgZ2VuZXJhbE1lc3NhZ2VDb25maWcgPSB7XG4gIGJpbmRpbmdzOiB7cGFyZW50Q3RybDogJzwnfSxcbiAgY29udHJvbGxlcjogR2VuZXJhbE1lc3NhZ2VDb250cm9sbGVyLFxuICB0ZW1wbGF0ZTogJydcbn1cbiIsImV4cG9ydCBsZXQgZmVlZFNlcnZpY2UgPSBbJyRodHRwJywgZnVuY3Rpb24oJGh0dHApIHtcbiAgdmFyIGZlZWRBbnRpQ2FjaGUgPSBcIj8mdD1cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgcmFuZG9tTnVtO1xuICB2YXIgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAgKyAxKTtcbiAgdmFyIGZlZWRkYXlzb2xkID0gNjA7XG5cbiAgdmFyIGRtID0gbmV3IERhdGUoKTtcbiAgZG0uc2V0SG91cnMoMjQsIDAsIDAsIDApO1xuXG4gIHZhciBhcGlfZW5kcG9pbnQgPSAnaHR0cHM6Ly9zZXJ2aWNlcy5saWJpcy5iZS9mZWVkX2FnZ3JlZ2F0b3I/JztcblxuICBmdW5jdGlvbiByZWFkRmVlZENvbmZpZyh1cmwpIHtcbiAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiWC1Gcm9tLUV4TC1BUEktR2F0ZXdheVwiOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRGZWVkKHVybCkge1xuICAgIHJldHVybiAkaHR0cCh7XG4gICAgICB1cmw6IGFwaV9lbmRwb2ludCArIHVybCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJYLUZyb20tRXhMLUFQSS1HYXRld2F5XCI6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VGZWVkKGNvbmYpIHtcbiAgICByZXR1cm4gcmVhZEZlZWQoY29uZi5mZWVkVXJsKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhjb25mLmZlZWRVcmwpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhjb25mLmZlZWRGaWx0ZXIpO1xuICAgICAgdmFyIHBhdHQgPSAvXmVudHJ5XFwufF5pdGVtXFwuL2k7XG4gICAgICB2YXIgZmlsdGVyZWRSZXN1bHRzID0gcmVzLmRhdGEuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHZhciByZXR2YWwgPSBmYWxzZTtcbiAgICAgICAgaWYgKGl0ZW0ucHViRGF0ZSA9PT0gXCJcIikge1xuICAgICAgICAgIGl0ZW0ucHViRGF0ZSA9IGRtO1xuICAgICAgICAgIHJlcy5kYXRhLml0ZW1zW2luZGV4XS5wdWJEYXRlID0gZG07XG4gICAgICAgIH1cbiAgICAgICAgLyogbm8gZmlsdGVyIGNvbmZpZ3VyZWQgKi9cbiAgICAgICAgaWYgKGNvbmYuZmVlZEZpbHRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR2YWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbmYuZmVlZEZpbHRlci5mb3JFYWNoKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICBpZiAocGF0dC50ZXN0KGYucGFyYW0pKSB7XG4gICAgICAgICAgICB2YXIgZmYgPSBmLnBhcmFtLnJlcGxhY2UocGF0dCwgXCJcIik7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtW2ZmXSkpIHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW1bZmZdLmluZGV4T2YoZi52YWx1ZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR2YWwgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoaXRlbVtmZl0gPT0gZi52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHZhbCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvKiBmaWx0ZXIgb2xkIGl0ZW1zICovXG4gICAgICAgIGlmIChmZWVkZGF5c29sZCA8IE1hdGguY2VpbChkbS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShpdGVtLnB1YkRhdGUpLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpIHtcbiAgICAgICAgICByZXR2YWwgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR2YWw7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmaWx0ZXJlZFJlc3VsdHM7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzb3J0RmVlZChmZWVkcykge1xuICAgIC8vcmV0dXJuIGZlZWRzLnNvcnQoY29tcGFyZURhdGVzKTtcbiAgICByZXR1cm4gZmVlZHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICB2YXIgZGF0ZUEgPSBuZXcgRGF0ZShhLnB1YkRhdGUpO1xuICAgICAgdmFyIGRhdGVCID0gbmV3IERhdGUoYi5wdWJEYXRlKTtcbiAgICAgIGlmIChkYXRlQS5nZXRUaW1lKCkgPT09IGRtLmdldFRpbWUoKSkge1xuICAgICAgICBkYXRlQSA9IG5ldyBEYXRlKDApO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGVCLmdldFRpbWUoKSA9PT0gZG0uZ2V0VGltZSgpKSB7XG4gICAgICAgIGRhdGVCID0gbmV3IERhdGUoMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0ZUIgLSBkYXRlQTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVhZEZlZWRDb25maWc6IHJlYWRGZWVkQ29uZmlnLFxuICAgIHJlYWRGZWVkOiByZWFkRmVlZCxcbiAgICBwYXJzZUZlZWQ6IHBhcnNlRmVlZCxcbiAgICBzb3J0RmVlZDogc29ydEZlZWRcbiAgfTtcbn1dO1xuIiwiaW1wb3J0IG1lc3NhZ2VTZXJ2aWNlSFRNTCBmcm9tICcuL21lc3NhZ2VTZXJ2aWNlLmh0bWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoJG1kVG9hc3QsICRzY2UsICR0cmFuc2xhdGUpIHtcbiAgICB0aGlzLm1kVG9hc3QgPSAkbWRUb2FzdDtcbiAgICB0aGlzLnNjZSA9ICRzY2U7XG4gICAgdGhpcy50cmFuc2xhdGUgPSAkdHJhbnNsYXRlO1xuICB9XG5cbiAgc2hvdyhtZXNzYWdlID0gJycsIGhpZGVEZWxheSA9IDApIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAobWVzc2FnZS5sZW5ndGggPT0gMCkge1xuICAgICAgLy8gY29kZSB0YWJsZSBlbnRyaWVzIGNhbiBub3QgaGF2ZSBlbXB0eSBkZXNjcmlwdGlvbnMuXG4gICAgICAvLyBtZXNzYWdlIDw9IDEgd2lsbCBub3QgYmUgZGlzcGxheWVkISEhIVxuICAgICAgbGV0IG1lc3NhZ2VLZXkgPSAnbGJzLmdlbmVyYWxNZXNzYWdlJztcbiAgICAgIG1lc3NhZ2UgPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KG1lc3NhZ2VLZXkpO1xuICAgICAgbWVzc2FnZSA9IChtZXNzYWdlID09IG1lc3NhZ2VLZXkgfHwgbWVzc2FnZSA8PSAxKSA/ICcnIDogbWVzc2FnZTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdG9hc3RDb25maWcgPSB7XG4gICAgICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMub25DbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHNlbGYubWRUb2FzdC5oaWRlKCk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHNlbGYuc2NlLnRydXN0QXNIdG1sKG1lc3NhZ2UpO1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZTogbWVzc2FnZVNlcnZpY2VIVE1MLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcCBjZW50ZXInLFxuICAgICAgICBoaWRlRGVsYXk6IGhpZGVEZWxheVxuICAgICAgfVxuXG4gICAgICBzZWxmLm1kVG9hc3Quc2hvdyh0b2FzdENvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBtZXNzYWdlIHRvIGRpc3BsYXknKTtcbiAgICB9XG4gIH1cblxufVxuXG5NZXNzYWdlU2VydmljZS4kaW5qZWN0ID0gWyckbWRUb2FzdCcsICckc2NlJywgJyR0cmFuc2xhdGUnXTtcbiIsIi8qXG4gIENlbnRyYWwgUGFja2FnZSBMb2FkZXJcblxuICBEbyBOT1QgZWRpdCB0aGlzIGZpbGUuXG4gIEFsbCBjb21wb25lbnRzIGFyZSBkZWNsYXJlZCBpbiBcImNvbXBvbmVudHMuanNcIlxuXG4gIEtVTGV1dmVuL0xJQklTIChjKSAyMDE3XG4gIE1laG1ldCBDZWxpa1xuKi9cbmltcG9ydCBQcmltbyBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL3ByaW1vLWV4cGxvcmUtZG9tL2pzL3ByaW1vL2V4cGxvcmUvaGVscGVyJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJ1xuXG5pbXBvcnQge2ZlZWRTZXJ2aWNlfSBmcm9tICcuL2ZhY3Rvcmllcy9mZWVkU2VydmljZSdcbmltcG9ydCBNZXNzYWdlU2VydmljZSBmcm9tICcuL2ZhY3Rvcmllcy9tZXNzYWdlU2VydmljZSdcblxuLy9tYWtlIFByaW1vIHB1YmxpY1xud2luZG93LlByaW1vID0gUHJpbW87XG4vL2xvYWQgUHJpbW9FeHBsb3JlciBVSSBpZiBhbmd1bGFyLnJlbG9hZFdpdGhEZWJ1Z0luZm8oKSBpcyByYW5cbndpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICBpZiAoUHJpbW8uaXNEZWJ1Z0VuYWJsZWQoKSkge1xuICAgIGxldCB1aVVSTCA9ICdodHRwczovL2Nkbi5yYXdnaXQuY29tL21laG1ldGMvcHJpbW8tZXhwbG9yZS1kb20tdWkvZmMwODY4ZGYvanMvY3VzdG9tLmpzJztcbiAgICAvL2xldCB1aVVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvanMvY3VzdG9tLmpzJztcblxuICAgIEhlbHBlci5sb2FkU2NyaXB0KHVpVVJMKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdJbmplY3RpbmcgVUknKTtcbiAgICAgIFByaW1vLmV4cGxvcmUudWkudG9nZ2xlKCk7XG4gICAgfSk7XG4gIH1cbn0sIDIwMDApO1xuXG4vL0NyZWF0ZSB0aGUgY2VudHJhbEN1c3RvbSBtb2R1bGU7XG5sZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2NlbnRyYWxDdXN0b20nLFsnbmdNYXRlcmlhbCddKVxuICAgICAgICAgICAgICAgICAuY29uc3RhbnQoJ2ZlZWRiYWNrU2VydmljZVVSTCcsICdodHRwczovL3NlcnZpY2VzLmxpYmlzLmJlL2ZlZWRiYWNrJylcbiAgICAgICAgICAgICAgICAgLnJ1bigoJHRlbXBsYXRlQ2FjaGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAvLyR0ZW1wbGF0ZUNhY2hlLnB1dCgnY29tcG9uZW50cy9zZWFyY2gvZnVsbFZpZXcvZnVsbC12aWV3Lmh0bWwnLCBmdWxsVmlld0hUTUwpO1xuICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAuZmFjdG9yeSgnRmVlZFNlcnZpY2UnLCBmZWVkU2VydmljZSlcbiAgICAgICAgICAgICAgICAgLnNlcnZpY2UoJ01lc3NhZ2VTZXJ2aWNlJywgTWVzc2FnZVNlcnZpY2UpO1xuXG5cbi8vQ29udGFpbnMgdGhlIGFmdGVyIGNvbXBvbmVudCBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIGluamVjdGVkXG5sZXQgYWZ0ZXJDb21wb25lbnRzID0ge307XG5cbi8vQ3JlYXRlIGFsbCBjb21wb25lbnRzIGFuZCBkZXRlcm1pbmUgaW4gd2hpY2ggYWZ0ZXIgY29tcG9uZW50IHRoZXNlIG5lZWQgdG8gYmVcbi8vaW5qZWN0ZWRcbmNvbnNvbGUubG9nKCdMb2FkaW5nIGNlbnRyYWxDdXN0b20gY29tcG9uZW50cycpO1xuQ29tcG9uZW50cy5hbGwuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gIGlmIChjb21wb25lbnQuYXBwZW5kVG8pIHtcbiAgICBsZXQgZWxlbWVudHMgPSBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSB8fCBbXTtcbiAgICBlbGVtZW50cy5wdXNoKGNvbXBvbmVudC5uYW1lKTtcbiAgICBhZnRlckNvbXBvbmVudHNbY29tcG9uZW50LmFwcGVuZFRvXSA9IGVsZW1lbnRzO1xuICB9XG5cbiAgY29uc29sZS5sb2coYFxcdFxcdCR7Y29tcG9uZW50Lm5hbWV9YCk7XG4gIGFwcC5jb21wb25lbnQoY29tcG9uZW50Lm5hbWUudG9DYW1lbENhc2UoKSwgY29tcG9uZW50LmNvbmZpZyk7XG59KTtcblxuLy9JbmplY3QgcGxhY2UgaG9sZGVycyBpbnRvIHRoZSBhZnRlciBjb21wb25lbnRzXG5PYmplY3Qua2V5cyhhZnRlckNvbXBvbmVudHMpLmZvckVhY2goKGNvbXBvbmVudCxpKSA9PiB7XG4gIGxldCBzdWJDb21wb25lbnRzID0gYWZ0ZXJDb21wb25lbnRzW2NvbXBvbmVudF07XG5cbiAgYXBwLmNvbXBvbmVudChjb21wb25lbnQudG9DYW1lbENhc2UoKSwge1xuICAgIGJpbmRpbmdzOntcbiAgICAgIHBhcmVudEN0cmw6ICc8J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6IHN1YkNvbXBvbmVudHMubWFwKG0gPT4gYDwke219IHBhcmVudC1jdHJsPVwiJGN0cmxcIj48LyR7bX0+YCkuam9pbihcIlwiKVxuICB9KTtcbn0pO1xuIiwiLypcbiAgR2VuZXJhbCBcblxuICBLVUxldXZlbi9MSUJJUyAoYykgMjAxN1xuICBNZWhtZXQgQ2VsaWtcbiovXG5TdHJpbmcucHJvdG90eXBlLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNwbGl0KCctJykubWFwKChkLGksYSkgPT4gIGkgPiAwID8gZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGQuc2xpY2UoMSkgOmQpLmpvaW4oJycpO1xufVxuIiwiaW1wb3J0IEV4cGxvcmUgZnJvbSAnLi9wcmltby9leHBsb3JlJ1xuaW1wb3J0IFJlY29yZHMgZnJvbSAnLi9wcmltby9yZWNvcmRzJ1xuaW1wb3J0IEZhY2V0cyBmcm9tICcuL3ByaW1vL2ZhY2V0cydcbmltcG9ydCBWaWV3IGZyb20gJy4vcHJpbW8vdmlldydcbmltcG9ydCBVc2VyIGZyb20gJy4vcHJpbW8vdXNlcidcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9wcmltby9leHBsb3JlL2hlbHBlcidcblxuLyoqXG4gKiBQcmltbyBtYWluIGVudHJ5IGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW1vIHtcbiAgLyoqXG4gICAqIFJldHVybiB2ZXJzaW9uIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcbiAgICBsZXQgX3ZlcnNpb24gPSBcIjAuMC45XCI7XG4gICAgcmV0dXJuIGBMaWJyYXJ5OiR7X3ZlcnNpb259IC0gUHJpbW86JHt3aW5kb3cuYXBwQ29uZmlnWydzeXN0ZW0tY29uZmlndXJhdGlvbiddLlByaW1vX1ZlcnNpb25fTnVtYmVyfToke3dpbmRvdy5hcHBDb25maWdbJ3N5c3RlbS1jb25maWd1cmF0aW9uJ10uUHJpbW9fSG90Rml4X051bWJlcn1gO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpIGhhcyByYW5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gSGVscGVyLmlzRGVidWdFbmFibGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlkIHRoZSBzY3JpcHQgcmFuIG9uIGEgUHJpbW8gc2l0ZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzUHJpbW9BdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuIEhlbHBlci5pc1ByaW1vQXZhaWxhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByb3h5IGNsYXNzXG4gICAqIEByZXR1cm4ge0V4cGxvcmV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGV4cGxvcmUoKSB7XG4gICAgcmV0dXJuIEV4cGxvcmU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciB0byBhdmFpbGFibGUgcmVjb3Jkc1xuICAgKiBAcmV0dXJuIHtSZWNvcmRzfVxuICAgKi9cbiAgc3RhdGljIGdldCByZWNvcmRzKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlc29sdmUobmV3IFJlY29yZHModGhpcy5leHBsb3JlLmNvbXBvbmVudHMpKTtcbiAgICB9KVxuICAgIC8vcmV0dXJuIG5ldyBSZWNvcmRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIGF2YWlsYWJsZSBmYWNldHNcbiAgICogQHJldHVybiB7RmFjZXRzfVxuICAgKi9cbiAgc3RhdGljIGdldCBmYWNldHMoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmVzb2x2ZShuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKSk7XG4gICAgfSlcbiAgICAvL3JldHVybiBuZXcgRmFjZXRzKHRoaXMuZXhwbG9yZS5jb21wb25lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHZpZXcgcmVsYXRlZCBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIHtWaWV3fVxuICAgKi9cbiAgc3RhdGljIGdldCB2aWV3KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXNvbHZlKG5ldyBWaWV3KCkpO1xuICAgIH0pXG4gICAgLy9yZXR1cm4gbmV3IFZpZXcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBwb2ludGVyIHRvIHVzZXIgcmVsYXRlZCBtZXRhZGF0YVxuICAgKiBAcmV0dXJuIHtVc2VyfVxuICAgKi9cbiAgc3RhdGljIGdldCB1c2VyKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBIZWxwZXIudXNlckRldGFpbHNIVFRQKCkudGhlbigodXNlckRldGFpbHMpPT57XG4gICAgICAgIEhlbHBlci51c2VyRmluZXNIVFRQKCkudGhlbigodXNlckZpbmVzKSA9PiB7XG4gICAgICAgICAgSGVscGVyLnVzZXJMb2Fuc0hUVFAoKS50aGVuKCh1c2VyTG9hbnMpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgVXNlcih7ZGV0YWlsczogdXNlckRldGFpbHMsIGZpbmVzOiB1c2VyRmluZXMsIGxvYW5zOiB1c2VyTG9hbnN9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXG5cbi8vdGhpcyBpcyBwcm94eSBjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwbG9yZSB7XG4gIHN0YXRpYyBnZXQgY29tcG9uZW50cygpIHtcbiAgICBsZXQgYyA9IG5ldyBDb21wb25lbnRzKCk7XG4gICAgSGVscGVyLmNvbXBvbmVudE5hbWVzLmZvckVhY2goKHNlbGVjdG9yKSA9PiB7XG4gICAgICBjLmFkZChzZWxlY3Rvcik7XG4gICAgfSlcblxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgc3RhdGljIGdldCB1aSgpIHtcbiAgICBpZiAodGhpcy5fdWkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5lcnJvcignVGhpcyBpcyBhIHN0dWIgZnVuY3Rpb24gY2FsbCBcImFuZ3VsYXIucmVsb2FkV2l0aERlYnVnSW5mbygpXCIgdG8gYWN0aXZhdGUgVUknKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3VpO1xuICB9XG5cbiAgc3RhdGljIGdldCBoZWxwZXIoKSB7XG4gICAgcmV0dXJuIEhlbHBlcjtcbiAgfVxufVxuIiwidmFyIGNzc1NlbGVjdG9yR2VuZXJhdG9yID0gbmV3KHJlcXVpcmUoJy4uLy4uL3ZlbmRvci9jc3Mtc2VsZWN0b3ItZ2VuZXJhdG9yLmpzJykpLkNzc1NlbGVjdG9yR2VuZXJhdG9yO1xuXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vaGVscGVyJ1xuXG5jbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KXtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYmxpbmsoKXtcbiAgICBIZWxwZXIuYmxpbmsodGhpcyk7XG4gIH1cblxuICBnZXQgY3NzUGF0aCgpe1xuICAgIHJldHVybiBjc3NTZWxlY3RvckdlbmVyYXRvci5nZXRTZWxlY3Rvcih0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0IG5hbWUoKXtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmxvY2FsTmFtZTtcbiAgfVxuXG4gIHNjb3BlKCl7XG4gICAgaWYgKEhlbHBlci5pc0RlYnVnRW5hYmxlZCgpKXtcbiAgICAgIHJldHVybiBhbmd1bGFyLmVsZW1lbnQodGhpcy5lbGVtZW50KS5zY29wZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdQbGVhc2UgcnVuIFwiYW5ndWxhci5yZWxvYWRXaXRoRGVidWdJbmZvKClcIiBmaXJzdCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0cmwoKXtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLnNjb3BlKCk7XG4gICAgaWYgKHNjb3BlKSB7XG4gICAgICBsZXQgc2NvcGVDaGlsZCA9IHNjb3BlLiQkY2hpbGRUYWlsO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnJGN0cmwnKSkge1xuICAgICAgICAgIHJldHVybiBzY29wZS4kY3RybFxuICAgICAgfSBlbHNlIGlmKE9iamVjdC5rZXlzKHNjb3BlKS5pbmNsdWRlcygnY3RybCcpKSB7XG4gICAgICAgICAgcmV0dXJuIHNjb3BlLmN0cmxcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGVDaGlsZCAmJiBPYmplY3Qua2V5cyhzY29wZUNoaWxkKS5pbmNsdWRlcygnJGN0cmwnKSl7XG4gICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuJGN0cmw7XG4gICAgICB9IGVsc2UgaWYgKHNjb3BlQ2hpbGQgJiYgT2JqZWN0LmtleXMoc2NvcGVDaGlsZCkuaW5jbHVkZXMoJ2N0cmwnKSl7XG4gICAgICAgICAgcmV0dXJuIHNjb3BlQ2hpbGQuY3RybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignTm8gJGN0cmwgZGVmaW5lZCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudHMge1xuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICB0aGlzLl9jb21wb25lbnRzID0ge307XG4gIH1cblxuICBhZGQoc2VsZWN0b3IpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBIZWxwZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgbGV0IGVsZW1lbnRzQXJyYXkgPSB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSB8fCBbXTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpPT57XG4gICAgICBlbGVtZW50c0FycmF5LnB1c2gobmV3IENvbXBvbmVudChlbGVtZW50KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSA9IGVsZW1lbnRzQXJyYXk7XG5cbiAgICByZXR1cm4gZWxlbWVudHNBcnJheTtcbiAgfVxuXG4gIGdldChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLl9jb21wb25lbnRzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAga2V5cygpe1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRzKTtcbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xuICAgIHN0YXRpYyBpc0RlYnVnRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5uYW1lID09PSAnTkdfRU5BQkxFX0RFQlVHX0lORk8hJyB8fCB0eXBlb2YoYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BybS1sb2dvJykpLnNjb3BlKCkpICE9ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1ByaW1vQXZhaWxhYmxlKCkge1xuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZih3aW5kb3cuYW5ndWxhcikpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmltby1leHBsb3JlJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBjb21wb25lbnROYW1lcygpIHtcbiAgICAgICAgbGV0IHRhZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJykpO1xuICAgICAgICBsZXQgY29tcG9uZW50TmFtZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICAgIGxldCB0YWdOYW1lID0gdGFnLmxvY2FsTmFtZTtcbiAgICAgICAgICAgIGlmICgvXnBybS0vLnRlc3QodGFnTmFtZSkgfHwgL15wcmltby0vLnRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWVzLmluY2x1ZGVzKHRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVzLnB1c2godGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50TmFtZXMgPSBjb21wb25lbnROYW1lcy5zb3J0KCkuZmlsdGVyKChlLCBpLCBhKSA9PiBpID09PSBhLmZpbmRJbmRleCgoZTIpID0+IGUgPT09IGUyKSk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnROYW1lcztcbiAgICB9XG5cbiAgICBzdGF0aWMgcXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluamVjdG9yKCkge1xuICAgICAgbGV0IGMgPSBQcmltby5leHBsb3JlLmNvbXBvbmVudHMuZ2V0KCdwcmltby1leHBsb3JlJyk7XG4gICAgICBpZiAoYyAmJiBjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgcHJpbW9FeHBsb3JlID0gYW5ndWxhci5lbGVtZW50KGNbMF0uZWxlbWVudCk7XG4gICAgICAgICAgbGV0IGluamVjdG9yICAgICA9IHByaW1vRXhwbG9yZS5pbmplY3RvcigpO1xuICAgICAgICAgIGlmIChpbmplY3Rvcil7XG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0b3I7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGh0dHAoKSB7XG4gICAgICBsZXQgaW5qZWN0b3IgPSB0aGlzLmluamVjdG9yKCk7XG4gICAgICBpZiAoaW5qZWN0b3IpIHtcbiAgICAgICAgbGV0IGggPSBpbmplY3Rvci5nZXQoJyRodHRwJyk7XG4gICAgICAgIGlmIChoKSB7XG4gICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgbG9hZFNjcmlwdChzY3JpcHRVUkwpIHtcbiAgICAgIGlmICh3aW5kb3cuYW5ndWxhcikge1xuICAgICAgICAgIGxldCBhcHBJbmplY3RvciA9IGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsJ2FuZ3VsYXJMb2FkJ10pO1xuICAgICAgICAgIGlmIChhcHBJbmplY3Rvcikge1xuICAgICAgICAgICAgICBsZXQgYW5ndWxhckxvYWQgPSBhcHBJbmplY3Rvci5nZXQoJ2FuZ3VsYXJMb2FkJyk7XG4gICAgICAgICAgICAgIGlmIChhbmd1bGFyTG9hZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbmd1bGFyTG9hZC5sb2FkU2NyaXB0KHNjcmlwdFVSTCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJvb3RTY29wZSgpIHtcbiAgICAgIGxldCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3IoKTtcbiAgICAgIGlmIChpbmplY3Rvcikge1xuICAgICAgICAgIGxldCByb290U2NvcGUgICAgPSBpbmplY3Rvci5nZXQoJyRyb290U2NvcGUnKTtcbiAgICAgICAgICBpZiAocm9vdFNjb3BlKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdFNjb3BlO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJTZXNzaW9uTWFuYWdlclNlcnZpY2UoKSB7XG4gICAgICBsZXQgcm9vdFNjb3BlID0gdGhpcy5yb290U2NvcGUoKTtcbiAgICAgIGlmIChyb290U2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3RTY29wZS4kJGNoaWxkSGVhZC4kY3RybC51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgand0RGF0YSgpIHtcbiAgICAgIGxldCB1U01TID0gdGhpcy51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XG4gICAgICBpZiAodVNNUykge1xuICAgICAgICBsZXQgand0RGF0YSA9IHVTTVMuand0VXRpbFNlcnZpY2UuZ2V0RGVjb2RlZFRva2VuKCkgfHwge307XG4gICAgICAgIHJldHVybiBqd3REYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB1c2VyRGV0YWlscygpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLiRsb2NhbEZvcmFnZS5nZXRJdGVtKCd1c2VyRGV0YWlscycpLnRoZW4odXNlckRldGFpbHMgPT4gcmVzb2x2ZSh1c2VyRGV0YWlscykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJEZXRhaWxzSFRUUCgpIHtcbiAgICAgIGxldCB2aWV3Q29kZSA9IHRoaXMuand0RGF0YSgpLnZpZXdJZCB8fCB3aW5kb3cuYXBwQ29uZmlnWyd2aWQnXTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQoYC9wcmltb19saWJyYXJ5L2xpYndlYi93ZWJzZXJ2aWNlcy9yZXN0L3YxL3VzZXJzZXR0aW5ncz92aWQ9JHt2aWV3Q29kZX1gKS50aGVuKHVzZXJEZXRhaWxzID0+IHJlc29sdmUodXNlckRldGFpbHMuZGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVzZXJGaW5lc0hUVFAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmh0dHAuZ2V0KCcvcHJpbW9fbGlicmFyeS9saWJ3ZWIvd2Vic2VydmljZXMvcmVzdC92MS9teWFjY291bnQvZmluZXMnKS50aGVuKHVzZXJGaW5lcyA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdXNlckZpbmVzLmRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gJ29rJykge1xuICAgICAgICAgICAgICAgIGxldCBmaW5lcyA9IGRhdGEuZGF0YS5maW5lcztcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmVzLmZpbmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGZpbmVzJyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyB1c2VyTG9hbnNIVFRQKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL3ByaW1vX2xpYnJhcnkvbGlid2ViL3dlYnNlcnZpY2VzL3Jlc3QvdjEvbXlhY2NvdW50L2xvYW5zJykudGhlbih1c2VyTG9hbnMgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHVzZXJMb2Fucy5kYXRhO1xuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09ICdvaycpIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9hbnMgPSBkYXRhLmRhdGEubG9hbnM7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2Fucy5sb2FuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBsb2FucycpO1xuICAgICAgICAgICAgICByZXNvbHZlKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgcmVzb2x2ZShbXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYmxpbmsoY29tcG9uZW50LCBudW1iZXJPZkJsaW5rcyA9IDQpIHtcbiAgICAgICAgbGV0IGludGVydmFsSWQgPSBudWxsO1xuICAgICAgICBsZXQgYm9yZGVyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMDAwIC0gMSkpICsgMTtcbiAgICAgICAgbGV0IGJvcmRlclNlbGVjdG9yID0gY29tcG9uZW50LmVsZW1lbnQuY3NzUGF0aCArIGluZGV4ICsgJ1JlY3QnO1xuXG4gICAgICAgIGxldCBjcmVhdGVCb3JkZXJFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UmVjdCA9IGNvbXBvbmVudC5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGxldCBib3JkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKyAxO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGJvcmRlclNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgcmVkJztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICBib3JkZXJFbGVtZW50LnN0eWxlLnRvcCA9IGVsZW1lbnRSZWN0LnRvcCArICdweCc7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBlbGVtZW50UmVjdC5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUud2lkdGggPSBlbGVtZW50UmVjdC53aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gZWxlbWVudFJlY3QubGVmdCArICdweCc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChib3JkZXJFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGJvcmRlclNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVtb3ZlQm9yZGVyRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoYm9yZGVyRWxlbWVudCkge1xuICAgICAgICAgICAgYm9yZGVyRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmxpbmtCb3JkZXJFbGVtZW50ID0gKG51bWJlck9mQmxpbmtzID0gNCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG5cbiAgICAgICAgICAgIGlmIChudW1iZXJPZkJsaW5rcyA8IDApIHtcbiAgICAgICAgICAgICAgICByZW1vdmVCb3JkZXJFbGVtZW50KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvcmRlckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICgobnVtYmVyT2ZCbGlua3MgJSAyKSA9PSAwKSA/ICdub25lJyA6ICdibG9jayc7XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZCbGlua3MtLTtcbiAgICAgICAgICAgICAgICBpbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKGJsaW5rQm9yZGVyRWxlbWVudCwgMTAwMCwgbnVtYmVyT2ZCbGlua3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYm9yZGVyRWxlbWVudCA9IGNyZWF0ZUJvcmRlckVsZW1lbnQoKTtcbiAgICAgICAgYmxpbmtCb3JkZXJFbGVtZW50KG51bWJlck9mQmxpbmtzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50cyBmcm9tICcuL2V4cGxvcmUvY29tcG9uZW50cydcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXRzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmFjZXRzKGNvbXBvbmVudHMpO1xuICAgIH1cbiAgICBfZmFjZXRzKGNvbXBvbmVudHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLWZhY2V0LWFmdGVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdHJsID0gY1swXS5jdHJsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3RybC5mYWNldFNlcnZpY2UucmVzdWx0cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCBmYWNldHMgdGhyb3VnaCB0aGUgcm9vdFNjb3BlJyk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmV0dXJuIEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCkuc2VhcmNoU3RhdGVTZXJ2aWNlLnJlc3VsdE9iamVjdC5mYWNldHM7XG4gICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VuYWJsZSB0byByZXRyaWV2ZSBmYWNldHMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudHMgZnJvbSAnLi9leHBsb3JlL2NvbXBvbmVudHMnXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vZXhwbG9yZS9oZWxwZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZHMge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcyhjb21wb25lbnRzKTtcbiAgICB9XG4gICAgX2l0ZW1zKGNvbXBvbmVudHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjb21wb25lbnRzLmdldCgncHJtLXNlYXJjaC1yZXN1bHQtbGlzdC1hZnRlcicpO1xuICAgICAgICAgICAgICAgIGlmIChjICYmIGMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3RybCA9IGNbMF0uY3RybCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3RybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN0cmwuaXRlbWxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJ0cnkgYWdhaW5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGdldCByZWNvcmRzIHRocm91Z2ggdGhlIHJvb3RTY29wZScpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHJldHVybiBIZWxwZXIudXNlclNlc3Npb25NYW5hZ2VyU2VydmljZSgpLnNlYXJjaFN0YXRlU2VydmljZS5yZXN1bHRPYmplY3QuZGF0YTtcbiAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIHJldHJpZXZlIGl0ZW1zJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIgPSBfc2tlbFVzZXIpIHtcbiAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XG4gICAgbGV0IGp3dERhdGEgPSBIZWxwZXIuand0RGF0YSgpO1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBqd3REYXRhLnVzZXIgfHwgJycsXG4gICAgICAgIGVtYWlsOiB1c2VyLmRldGFpbHMuZW1haWwgfHwgJycsXG4gICAgICAgIG5hbWU6IGp3dERhdGEudXNlck5hbWUgfHwgJ0d1ZXN0JyxcbiAgICAgICAgZGlzcGxheV9uYW1lOiB1U21zLmdldFVzZXJOYW1lRm9yRGlzcGxheSgpLFxuICAgICAgICBpc0xvZ2dlZEluOiAoKSA9PiB1U21zLmdldFVzZXJOYW1lKCkubGVuZ3RoID4gMCxcbiAgICAgICAgaXNPbkNhbXB1czogKCkgPT4gand0RGF0YS5vbkNhbXB1cyA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgZmluZXM6IHVzZXIuZmluZXMsXG4gICAgICAgIGxvYW5zOiB1c2VyLmxvYW5zXG4gICAgICB9O1xuICB9XG5cbiAgZ2V0IF9za2VsVXNlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGV0YWlsczoge30sXG4gICAgICBmaW5lczoge30sXG4gICAgICBsb2Fuczoge31cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBIZWxwZXIgZnJvbSAnLi9leHBsb3JlL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBsZXQgdVNtcyA9IEhlbHBlci51c2VyU2Vzc2lvbk1hbmFnZXJTZXJ2aWNlKCk7XG4gICAgICBsZXQgand0RGF0YSA9IEhlbHBlci5qd3REYXRhKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IGp3dERhdGEudmlld0lkIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ZpZCddLFxuICAgICAgICBpbnN0aXR1dGlvbjoge1xuICAgICAgICAgICAgY29kZTogand0RGF0YS52aWV3SW5zdGl0dXRpb25Db2RlLFxuICAgICAgICAgICAgbmFtZTogd2luZG93LmFwcENvbmZpZ1sncHJpbW8tdmlldyddWydhdHRyaWJ1dGVzLW1hcCddLmluc3RpdHV0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGludGVyZmFjZUxhbmd1YWdlOiB1U21zLmdldFVzZXJMYW5ndWFnZSgpIHx8IHdpbmRvdy5hcHBDb25maWdbJ3ByaW1vLXZpZXcnXVsnYXR0cmlidXRlcy1tYXAnXS5pbnRlcmZhY2VMYW5ndWFnZSxcbiAgICAgICAgaXA6IHtcbiAgICAgICAgICBhZGRyZXNzOiBqd3REYXRhLmlwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBDc3NTZWxlY3RvckdlbmVyYXRvciwgcm9vdCxcbiAgICBpbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7IGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHsgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTsgfSByZXR1cm4gLTE7IH07XG5cbiAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmRlZmF1bHRfb3B0aW9ucyA9IHtcbiAgICAgIHNlbGVjdG9yczogWydpZCcsICdjbGFzcycsICd0YWcnLCAnbnRoY2hpbGQnXVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDc3NTZWxlY3RvckdlbmVyYXRvcihvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5zZXRPcHRpb25zKHRoaXMuZGVmYXVsdF9vcHRpb25zKTtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBrZXksIHJlc3VsdHMsIHZhbDtcbiAgICAgIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICB2YWwgPSBvcHRpb25zW2tleV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRfb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMub3B0aW9uc1trZXldID0gdmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5pc0VsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICByZXR1cm4gISEoKGVsZW1lbnQgIT0gbnVsbCA/IGVsZW1lbnQubm9kZVR5cGUgOiB2b2lkIDApID09PSAxKTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldFBhcmVudHMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgY3VycmVudF9lbGVtZW50LCByZXN1bHQ7XG4gICAgICByZXN1bHQgPSBbXTtcbiAgICAgIGlmICh0aGlzLmlzRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgICBjdXJyZW50X2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB3aGlsZSAodGhpcy5pc0VsZW1lbnQoY3VycmVudF9lbGVtZW50KSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRfZWxlbWVudCk7XG4gICAgICAgICAgY3VycmVudF9lbGVtZW50ID0gY3VycmVudF9lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRUYWdTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXplSXRlbShlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5zYW5pdGl6ZUl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIgY2hhcmFjdGVycztcbiAgICAgIGNoYXJhY3RlcnMgPSAoaXRlbS5zcGxpdCgnJykpLm1hcChmdW5jdGlvbihjaGFyYWN0ZXIpIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJzonKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXFxcXFwiICsgKCc6Jy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKSArIFwiIFwiO1xuICAgICAgICB9IGVsc2UgaWYgKC9bICFcIiMkJSYnKCkqKywuXFwvOzw9Pj9AXFxbXFxcXFxcXV5ge3x9fl0vLnRlc3QoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIHJldHVybiBcIlxcXFxcIiArIGNoYXJhY3RlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZXNjYXBlKGNoYXJhY3RlcikucmVwbGFjZSgvXFwlL2csICdcXFxcJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNoYXJhY3RlcnMuam9pbignJyk7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRJZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGlkLCBzYW5pdGl6ZWRfaWQ7XG4gICAgICBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgaWYgKChpZCAhPSBudWxsKSAmJiAoaWQgIT09ICcnKSAmJiAhKC9cXHMvLmV4ZWMoaWQpKSAmJiAhKC9eXFxkLy5leGVjKGlkKSkpIHtcbiAgICAgICAgc2FuaXRpemVkX2lkID0gXCIjXCIgKyAodGhpcy5zYW5pdGl6ZUl0ZW0oaWQpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNhbml0aXplZF9pZCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIHNhbml0aXplZF9pZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDbGFzc1NlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBjbGFzc19zdHJpbmcsIGl0ZW0sIHJlc3VsdDtcbiAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgY2xhc3Nfc3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICBpZiAoY2xhc3Nfc3RyaW5nICE9IG51bGwpIHtcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKTtcbiAgICAgICAgY2xhc3Nfc3RyaW5nID0gY2xhc3Nfc3RyaW5nLnJlcGxhY2UoL15cXHN8XFxzJC9nLCAnJyk7XG4gICAgICAgIGlmIChjbGFzc19zdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgcmVzdWx0ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGssIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgICAgICAgICAgcmVmID0gY2xhc3Nfc3RyaW5nLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgICAgICAgaXRlbSA9IHJlZltrXTtcbiAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKFwiLlwiICsgKHRoaXMuc2FuaXRpemVJdGVtKGl0ZW0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0QXR0cmlidXRlU2VsZWN0b3JzID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGF0dHJpYnV0ZSwgYmxhY2tsaXN0LCBrLCBsZW4sIHJlZiwgcmVmMSwgcmVzdWx0O1xuICAgICAgcmVzdWx0ID0gW107XG4gICAgICBibGFja2xpc3QgPSBbJ2lkJywgJ2NsYXNzJ107XG4gICAgICByZWYgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgYXR0cmlidXRlID0gcmVmW2tdO1xuICAgICAgICBpZiAocmVmMSA9IGF0dHJpYnV0ZS5ub2RlTmFtZSwgaW5kZXhPZi5jYWxsKGJsYWNrbGlzdCwgcmVmMSkgPCAwKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goXCJbXCIgKyBhdHRyaWJ1dGUubm9kZU5hbWUgKyBcIj1cIiArIGF0dHJpYnV0ZS5ub2RlVmFsdWUgKyBcIl1cIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXROdGhDaGlsZFNlbGVjdG9yID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGNvdW50ZXIsIGssIGxlbiwgcGFyZW50X2VsZW1lbnQsIHNpYmxpbmcsIHNpYmxpbmdzO1xuICAgICAgcGFyZW50X2VsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBpZiAocGFyZW50X2VsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICBjb3VudGVyID0gMDtcbiAgICAgICAgc2libGluZ3MgPSBwYXJlbnRfZWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKGsgPSAwLCBsZW4gPSBzaWJsaW5ncy5sZW5ndGg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nc1trXTtcbiAgICAgICAgICBpZiAodGhpcy5pc0VsZW1lbnQoc2libGluZykpIHtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBcIjpudGgtY2hpbGQoXCIgKyBjb3VudGVyICsgXCIpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLnRlc3RTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgICB2YXIgaXNfdW5pcXVlLCByZXN1bHQ7XG4gICAgICBpc191bmlxdWUgPSBmYWxzZTtcbiAgICAgIGlmICgoc2VsZWN0b3IgIT0gbnVsbCkgJiYgc2VsZWN0b3IgIT09ICcnKSB7XG4gICAgICAgIHJlc3VsdCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDEgJiYgcmVzdWx0WzBdID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgaXNfdW5pcXVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzX3VuaXF1ZTtcbiAgICB9O1xuXG4gICAgQ3NzU2VsZWN0b3JHZW5lcmF0b3IucHJvdG90eXBlLmdldEFsbFNlbGVjdG9ycyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIHQ6IG51bGwsXG4gICAgICAgIGk6IG51bGwsXG4gICAgICAgIGM6IG51bGwsXG4gICAgICAgIGE6IG51bGwsXG4gICAgICAgIG46IG51bGxcbiAgICAgIH07XG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICd0YWcnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC50ID0gdGhpcy5nZXRUYWdTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2lkJykgPj0gMCkge1xuICAgICAgICByZXN1bHQuaSA9IHRoaXMuZ2V0SWRTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgJ2NsYXNzJykgPj0gMCkge1xuICAgICAgICByZXN1bHQuYyA9IHRoaXMuZ2V0Q2xhc3NTZWxlY3RvcnMoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdhdHRyaWJ1dGUnKSA+PSAwKSB7XG4gICAgICAgIHJlc3VsdC5hID0gdGhpcy5nZXRBdHRyaWJ1dGVTZWxlY3RvcnMoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXhPZi5jYWxsKHRoaXMub3B0aW9ucy5zZWxlY3RvcnMsICdudGhjaGlsZCcpID49IDApIHtcbiAgICAgICAgcmVzdWx0Lm4gPSB0aGlzLmdldE50aENoaWxkU2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUudGVzdFVuaXF1ZW5lc3MgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgICAgdmFyIGZvdW5kX2VsZW1lbnRzLCBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBmb3VuZF9lbGVtZW50cyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgIHJldHVybiBmb3VuZF9lbGVtZW50cy5sZW5ndGggPT09IDEgJiYgZm91bmRfZWxlbWVudHNbMF0gPT09IGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS50ZXN0Q29tYmluYXRpb25zID0gZnVuY3Rpb24oZWxlbWVudCwgaXRlbXMsIHRhZykge1xuICAgICAgdmFyIGl0ZW0sIGssIGwsIGxlbiwgbGVuMSwgcmVmLCByZWYxO1xuICAgICAgcmVmID0gdGhpcy5nZXRDb21iaW5hdGlvbnMoaXRlbXMpO1xuICAgICAgZm9yIChrID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGl0ZW0gPSByZWZba107XG4gICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0YWcgIT0gbnVsbCkge1xuICAgICAgICByZWYxID0gaXRlbXMubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gdGFnICsgaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAobCA9IDAsIGxlbjEgPSByZWYxLmxlbmd0aDsgbCA8IGxlbjE7IGwrKykge1xuICAgICAgICAgIGl0ZW0gPSByZWYxW2xdO1xuICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBDc3NTZWxlY3RvckdlbmVyYXRvci5wcm90b3R5cGUuZ2V0VW5pcXVlU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICB2YXIgZm91bmRfc2VsZWN0b3IsIGssIGxlbiwgcmVmLCBzZWxlY3Rvcl90eXBlLCBzZWxlY3RvcnM7XG4gICAgICBzZWxlY3RvcnMgPSB0aGlzLmdldEFsbFNlbGVjdG9ycyhlbGVtZW50KTtcbiAgICAgIHJlZiA9IHRoaXMub3B0aW9ucy5zZWxlY3RvcnM7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgc2VsZWN0b3JfdHlwZSA9IHJlZltrXTtcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcl90eXBlKSB7XG4gICAgICAgICAgY2FzZSAnaWQnOlxuICAgICAgICAgICAgaWYgKHNlbGVjdG9ycy5pICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9ycy5pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgICAgIGlmIChzZWxlY3RvcnMudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnRlc3RVbmlxdWVuZXNzKGVsZW1lbnQsIHNlbGVjdG9ycy50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcnMudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYyAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmMsIHNlbGVjdG9ycy50KTtcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhdHRyaWJ1dGUnOlxuICAgICAgICAgICAgaWYgKChzZWxlY3RvcnMuYSAhPSBudWxsKSAmJiBzZWxlY3RvcnMuYS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgZm91bmRfc2VsZWN0b3IgPSB0aGlzLnRlc3RDb21iaW5hdGlvbnMoZWxlbWVudCwgc2VsZWN0b3JzLmEsIHNlbGVjdG9ycy50KTtcbiAgICAgICAgICAgICAgaWYgKGZvdW5kX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kX3NlbGVjdG9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdudGhjaGlsZCc6XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JzLm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3JzLm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAnKic7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRTZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIHZhciBhbGxfc2VsZWN0b3JzLCBpdGVtLCBrLCBsLCBsZW4sIGxlbjEsIHBhcmVudHMsIHJlc3VsdCwgc2VsZWN0b3IsIHNlbGVjdG9ycztcbiAgICAgIGFsbF9zZWxlY3RvcnMgPSBbXTtcbiAgICAgIHBhcmVudHMgPSB0aGlzLmdldFBhcmVudHMoZWxlbWVudCk7XG4gICAgICBmb3IgKGsgPSAwLCBsZW4gPSBwYXJlbnRzLmxlbmd0aDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgIGl0ZW0gPSBwYXJlbnRzW2tdO1xuICAgICAgICBzZWxlY3RvciA9IHRoaXMuZ2V0VW5pcXVlU2VsZWN0b3IoaXRlbSk7XG4gICAgICAgIGlmIChzZWxlY3RvciAhPSBudWxsKSB7XG4gICAgICAgICAgYWxsX3NlbGVjdG9ycy5wdXNoKHNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZWN0b3JzID0gW107XG4gICAgICBmb3IgKGwgPSAwLCBsZW4xID0gYWxsX3NlbGVjdG9ycy5sZW5ndGg7IGwgPCBsZW4xOyBsKyspIHtcbiAgICAgICAgaXRlbSA9IGFsbF9zZWxlY3RvcnNbbF07XG4gICAgICAgIHNlbGVjdG9ycy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICByZXN1bHQgPSBzZWxlY3RvcnMuam9pbignID4gJyk7XG4gICAgICAgIGlmICh0aGlzLnRlc3RTZWxlY3RvcihlbGVtZW50LCByZXN1bHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIENzc1NlbGVjdG9yR2VuZXJhdG9yLnByb3RvdHlwZS5nZXRDb21iaW5hdGlvbnMgPSBmdW5jdGlvbihpdGVtcykge1xuICAgICAgdmFyIGksIGosIGssIGwsIHJlZiwgcmVmMSwgcmVzdWx0O1xuICAgICAgaWYgKGl0ZW1zID09IG51bGwpIHtcbiAgICAgICAgaXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IFtbXV07XG4gICAgICBmb3IgKGkgPSBrID0gMCwgcmVmID0gaXRlbXMubGVuZ3RoIC0gMTsgMCA8PSByZWYgPyBrIDw9IHJlZiA6IGsgPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2sgOiAtLWspIHtcbiAgICAgICAgZm9yIChqID0gbCA9IDAsIHJlZjEgPSByZXN1bHQubGVuZ3RoIC0gMTsgMCA8PSByZWYxID8gbCA8PSByZWYxIDogbCA+PSByZWYxOyBqID0gMCA8PSByZWYxID8gKytsIDogLS1sKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gocmVzdWx0W2pdLmNvbmNhdChpdGVtc1tpXSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQuc2hpZnQoKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5qb2luKCcnKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENzc1NlbGVjdG9yR2VuZXJhdG9yO1xuXG4gIH0pKCk7XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09IFwidW5kZWZpbmVkXCIgJiYgZGVmaW5lICE9PSBudWxsID8gZGVmaW5lLmFtZCA6IHZvaWQgMCkge1xuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcbiAgICByb290LkNzc1NlbGVjdG9yR2VuZXJhdG9yID0gQ3NzU2VsZWN0b3JHZW5lcmF0b3I7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcbiJdfQ==
