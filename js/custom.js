(function(){
"use strict";
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var app = angular.module('centralCustom', []);
var feedbackServiceURL = 'https://services.libis.be/feedback';

/*
 * Add Home Icon after the library logo 
 * And Language dependant library logo
 * add library-logo-<locale>.png to the custom/<view>/img directory
 * Tom vanmechelen
 */

app.controller('prmLogoAfterController', ['$scope', '$element', '$compile', '$http', function ($scope, $element, $compile, $http) {

  var self = this;
  var vid = window.appConfig['vid'];
  var libraryLogo = window.appConfig.customization.libraryLogo;
  var locale = window.Primo.explore.helper.userSessionManagerService().i18nService.getLanguage();
  var localeLibraryLogo = 'custom/' + vid + '/img/library-logo-' + locale + '.png';

  if (libraryLogo !== localeLibraryLogo) {
    $http({
      method: 'GET',
      url: localeLibraryLogo
    }).then(function (response) {
      window.appConfig.customization.libraryLogo = localeLibraryLogo;
      $compile($element.parent())($scope);
    }, function (response) {
      // console.log('keep using original img')
      window.appConfig.customization.libraryLogo = libraryLogo;
    });
  }

  self.getHomePageLink = getHomePageLink;
  function getHomePageLink() {
    return '/primo-explore/search?vid=' + vid + "&lang=" + locale;
  }

  self.goToHomePage = goToHomePage;
  function goToHomePage() {
    document.location.href = '/primo-explore/search?vid=' + vid + "&lang=" + locale;
  }
}]);

app.component('prmLogoAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'prmLogoAfterController',
  template: '\n<div id="home-buttons-holder"\n    ng-class ="{\'fixed-to-top\': $ctrl.fixedToTop()}"\n    layout="row"\n    layout-align="center center"\n    class ="layout-align-center-center layout-row"\n>\n<a class ="md-icon-button button-over-dark md-button md-primoExplore-theme" id="home-button" aria-label="Go to startpage" ng-click=\'$ctrl.goToHomePage()\'  href="{{$ctrl.getHomePageLink()}}" >\n<md-icon class ="md-primoExplore-theme">\n<svg id="prm_home" width="100%" height="100%" viewBox="0 0 24 24" y="0" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">\n    <path d="M10,20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n    </svg>\n    </md-icon>\n</a>\n</div>\n'
});
/*
 * Add Icon of source to briefdisplay
 * Tom Vanmechelen
 */
app.component('addSourceIcon', {
  bindings: {
    sourceId: '<'
  },
  controller: 'addSourceIconController',
  template: '<div ng-if="$ctrl.sourceid" class="sourceid"><img src="{{$ctrl.icon.iconUrl}}" class="source-icon"><span class="source-text">{{$ctrl.icon.iconText}}</span></div>'
}).controller('addSourceIconController', ['$scope', function ($scope) {
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

  self.sourceid = '';
  if ('sourceid' in parentCtrl.item.pnx.control) {
    self.sourceid = parentCtrl.item.pnx.control.sourceid[0];
    if (iconConfSources.indexOf(self.sourceid) >= 0) {
      self.icon = iconConf.find(function (x) {
        return x.sourceid === self.sourceid;
      });
    } else {
      self.sourceid = '';
    }
  }
}]);

app.component('prmBriefResultAfter', {
  bindings: {
    parentCtrl: '<'
  },
  controller: 'addSourceIconTagController',
  template: ''
}).controller('addSourceIconTagController', ['$scope', '$element', '$compile', function ($scope, $element, $compile) {
  var self = this;
  var sourceId = self.parentCtrl.item.pnx.control.sourceid[0];

  var code = angular.element('<add-source-icon></add-source-icon>');
  $element.parent().parent().find('div').append($compile(code)($scope));
}]);

app.run(function ($templateCache) {
  $templateCache.put('feedback.html', '<md-dialog id=\'lbsFeedbackForm\' aria-label=\'feedback\'>\n    <md-toolbar>\n        <div class="md-toolbar-tools">\n            <h2>Feedback</h2>\n            <span flex></span>\n            <md-button class="md-icon-button" ng-click="cancelFeedback()">\n                <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\n            </md-button>\n        </div>\n    </md-toolbar>\n    <md-dialog-content>\n      <form name=\'feedbackForm\'>\n        <div class="md-dialog-content">\n            <input type="hidden" name=\'subject\' ng-model=\'feedback.subject\'>\n            <md-input-container class="md-block">\n                <label>EMail</label>\n                <input type="email" name=\'replyTo\' title=\'Your email. So we can keep you up to date\' placeholder=\'john.doe@kuleuven.be\' required ng-model=\'feedback.replyTo\' ng-pattern="/^.+@.+\\..+$/">\n                <div ng-if=\'feedbackForm.replyTo.$error.required\' role="alert">\n                  <div>eMail is mandatory</div>\n                </div>\n                <div ng-if=\'feedbackForm.replyTo.$error.email\' role="error">\n                  <div style=\'color:tomato;\'>Please enter a valid eMail adress</div>\n                </div>\n            </md-input-container>\n            <md-input-container>\n                <label>Description</label>\n                <textarea name="message" placeholder="Describe what the problem is" md-maxlength="500" required md-no-asterisk rows="5" cols="80" ng-model="feedback.message"></textarea>\n                <div ng-if=\'feedbackForm.message.$error.required\' role="error">\n                  <div style=\'color:tomato;\'>Message is mandatory</div>\n                </div>\n            </md-input-container>\n        </div>\n      </form>\n    </md-dialog-content>\n    <md-dialog-actions layout="row">\n        <md-button class="md-raised" ng-click="cancelFeedback()">Cancel</md-button>\n        <md-button class="md-raised md-primary " ng-click=\'sendFeedback()\'>Submit</md-button>\n    </md-dialog-actions>\n</md-dialog>\n');
  $templateCache.put('main_menu_after.html', '<div class="top-nav-bar-links buttons-group" id="main menu" layout="row" role="list" layout-align="center center" flex="100">\n  <md-button tabindex="0" role="listitem" tabindex="0" ng-href="" class="zero-margin flex-button multi-line-button button-over-dark"\n             layout="column" layout-align="center center" (click)="$ctrl.showFeedbackForm($event)">\n\n      <span class="item-content" translate="mainmenu.label.feedback"></span>\n      <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\n        <span class="item-description popover animate-popover" translate="nui.mainmenu.description.feedback"></span>\n      </md-tooltip>\n  </md-button>\n</div>\n');
  $templateCache.put('pay_my_fines.html', '<div layout="row" layout-align="center center" ng-show=\'$ctrl.showPayMyFines\'>\n    <a id=\'payFinesNow\' class="md-button md-raised md-secundary" target=\'_blank\' href=\'https://services.libis.be/pay_my_fines\'>Pay fines</a>\n</div>\n');
});
app.factory('FeedService', ['$http', function ($http) {
  var feedAntiCache = "?&t=" + new Date().getTime() + randomNum;
  var randomNum = Math.floor(Math.random() * 10000 + 1);
  var feeddaysold = 60;

  var dm = new Date();
  dm.setHours(24, 0, 0, 0);

  var api_endpoint = 'https://services.libis.be/feed_aggregator?';
  function readFeedConfig(url) {
    return $http({ url: url, headers: { "X-From-ExL-API-Gateway": undefined } });
  }
  function readFeed(url) {
    return $http({ url: api_endpoint + url, headers: { "X-From-ExL-API-Gateway": undefined } });
  }
  function parseFeed(conf) {
    return readFeed(conf.feedUrl).then(function (res) {
      console.log(conf.feedUrl);
      console.log(conf.feedFilter);
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
}]);
app.component('prmFinesOverviewAfter', {
  bindings: {
    parentCtrl: '<'
  },
  templateUrl: 'pay_my_fines.html',
  controller: function controller() {
    var _this4 = this;

    var self = this;
    this.showPayMyFines = false;

    this.$onInit = function () {
      Primo.view.then(function (view) {
        if (/^KULeuven/.test(view.code)) {
          Primo.user.then(function (user) {
            console.log(user);
            if (user.fines.length > 0) {
              _this4.showPayMyFines = true;
            }
          });
        }
      });
    };
  }
});

app.component('prmFullViewAfter', {
  bindings: {
    parentCtrl: '<'
  },
  controller: 'prmFullViewAfterController',
  template: '\n        <prm-full-view-after-section-ordering parent-ctrl ="$ctrl.parentCtrl" ></prm-full-view-after-section-ordering>\n        <prm-full-view-after-altmetrics parent-ctrl ="$ctrl.parentCtrl" ></prm-full-view-after-altmetrics>\n        '
});

app.controller('prmFullViewAfterController', ['$scope', '$element', '$compile', function ($scope, $element, $compile) {
  var vm = this;
  /*
  vm.$postLink = function() {
      // Usually safe to do DOM manipulation
  }
  */
}]);
app.component('prmFullViewAfterSectionOrdering', {
  bindings: {
    parentCtrl: '<'
  },
  controller: 'prmFullViewAfterSectionOrderingController'
});

app.controller('prmFullViewAfterSectionOrderingController', ['sectionOrdering', '$scope', '$element', '$compile', function (sectionOrdering, $scope, $element, $compile) {
  var vm = this;

  vm.$onInit = function () {
    sectionOrdering(vm.parentCtrl.services);
    //        sectionOrdering(vm.parentCtrl.fullViewService.servicesArray);
  };
  /*
  vm.$postLink = function () {
      console.log('------------------------- sectionOrdering $postLink----------------');
      sectionOrdering(vm.parentCtrl.services);
  };
  */
}]);

app.component('prmMainMenuAfter', {
  bindings: {
    parentCtrl: '<'
  },
  templateUrl: 'main_menu_after.html',
  controller: function controller($mdDialog, $mdToast, $http) {
    var self = this;

    this.$onInit = function () {
      if (typeof feedbackServiceURL === 'undefined') {
        self.showFeedbackForm = function () {
          alert('Please set the "feedbackServiceURL" variable');
        };
      } else {
        Primo.user.then(function (user) {
          self.user = user;
          Primo.view.then(function (view) {
            self.view = view;
            self.showFeedbackForm = showFeedbackForm;
          });
        });
      }
    };

    var showFeedbackForm = function showFeedbackForm($event) {
      $mdDialog.show({
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        fullscreen: false,
        targetEvent: $event,
        templateUrl: 'feedback.html',
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
  }
});

app.factory('sectionOrdering', function () {
  return function (sections) {
    if (!sections) return false;

    var numSections = sections.length;
    if (!(numSections > 0)) return false;

    var sectionToRemoveArray = [];

    var sectionOrderArray = ['brief', 'citationTrails', 'activate', 'getit_link2', 'links', 'virtualBrowse', 'action_list', 'tags', 'details', 'display', 'altmetrics', 'journaltoc'];

    /* 
     * brief          : top description
     * activate       : View Online
     * 
     * citationTrails : Citation Trail
     * action_list    : exports-options, citation, mail, pnx/xml (send To)
     * links          : links
     * virtualBrowse  : virtualBrowse
     * details        : details
     * display        : More ???
     * 
     */

    for (var serviceName in sectionOrderArray) {
      //            console.log(sectionOrderArray[serviceName]);
      var section = sections.filter(function (s) {
        return s.serviceName == sectionOrderArray[serviceName];
      });
      // console.log(section)
      if (section.length >= 1) {
        section.forEach(function (sec) {
          // console.log(sec);
          sections.splice(sections.indexOf(sec), 1); //remove
          sections.splice(sections.length, 0, sec); //add to the end
        });
      }
    }

    for (var serviceName in sectionToRemoveArray) {
      //            console.log(sectionOrderArray[serviceName]);
      var section = sections.filter(function (s) {
        return s.serviceName == sectionToRemoveArray[serviceName];
      });
      // console.log(section)
      if (section.length >= 1) {
        sections.splice(sections.indexOf(section[0]), 1); //remove
      }
    }

    /*
    // Move the 'links' section.
    var linksSection = sections.filter(function (s) {
        return s.serviceName === 'links';
    });
    if (linksSection.length >= 1) {
        sections.splice(sections.indexOf(linksSection[0]), 1); //remove
        sections.splice(numSections, 0, linksSection[0]); //add to the end
    }
      // Move the 'details' section.
    var detailsSection = sections.filter(function (s) {
        return s.serviceName === 'details';
    });
    if (detailsSection.length >= 1) {
        sections.splice(sections.indexOf(detailsSection[0]), 1); //remove
        sections.splice(numSections, 0, detailsSection[0]); //add to the end
    }
      // Move the 'action_list' section.
    var detailsSection = sections.filter(function (s) {
        return s.serviceName === 'action_list';
    });
    if (detailsSection.length >= 1) {
        sections.splice(sections.indexOf(detailsSection[0]), 1); //remove
        sections.splice(numSections, 0, detailsSection[0]); //add to the end
    }
      // Move the 'virtualBrowse' section.
    var browseSection = sections.filter(function (s) {
        return s.serviceName === 'virtualBrowse';
    });
    if (browseSection.length >= 1) {
        sections.splice(sections.indexOf(browseSection[0]), 1); //remove
        sections.splice(numSections, 0, browseSection[0]); //add to the end
    }
      // drop the 'more' section.
    var displayResult = sections.filter(function (s) {
        return s.serviceName === 'display';
    });
    if (displayResult.length >= 1) {
        sections.splice(sections.indexOf(displayResult[0]), 1); //remove 'more' section
    }
    */
    return true;
  };
});
(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    'use strict';

    var _primo = require('./primo');

    var _primo2 = _interopRequireDefault(_primo);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    window.Primo = _primo2.default;
  }, { "./primo": 2 }], 2: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    }();

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

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

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
          return "0.0.8";
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
                resolve(new _user2.default({ details: userDetails, fines: userFines }));
              });
            });
          });
        }
      }]);

      return Primo;
    }();

    exports.default = Primo;
  }, { "./primo/explore": 3, "./primo/explore/helper": 5, "./primo/facets": 7, "./primo/records": 8, "./primo/user": 9, "./primo/view": 10 }], 3: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    }();

    var _components = require('./explore/components');

    var _components2 = _interopRequireDefault(_components);

    var _helper = require('./explore/helper');

    var _helper2 = _interopRequireDefault(_helper);

    var _ui = require('./explore/ui');

    var _ui2 = _interopRequireDefault(_ui);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

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

        //TODO: extract

      }, {
        key: 'ui',
        get: function get() {
          if (this._ui === undefined) {
            console.log('Creation UI');
            this._ui = new _ui2.default();
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
  }, { "./explore/components": 4, "./explore/helper": 5, "./explore/ui": 6 }], 4: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    }();

    var _helper = require('./helper');

    var _helper2 = _interopRequireDefault(_helper);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

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
  }, { "../../vendor/css-selector-generator.js": 11, "./helper": 5 }], 5: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var Helper = function () {
      function Helper() {
        _classCallCheck(this, Helper);
      }

      _createClass(Helper, null, [{
        key: 'isDebugEnabled',
        value: function isDebugEnabled() {
          return typeof angular.element(document.querySelector('prm-logo')).scope() == 'undefined' ? false : true;
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
          var tags = document.getElementsByTagName('*');
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
  }, {}], 6: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var Ui = function () {
      function Ui() {
        _classCallCheck(this, Ui);

        var vmUi = this;
        //vmUi.active = false;
        vmUi._injectDOMElement();
        vmUi.module = vmUi._createModule();

        angular.bootstrap(document.querySelector('#explorerUi'), ['explorerUi']);
        vmUi.scope = angular.element(document.querySelector('#explorerUi')).scope();
      }

      _createClass(Ui, [{
        key: '_createModule',
        value: function _createModule() {
          var vmUi = this;
          return angular.module("explorerUi", ['ngMaterial', 'angularLoad']).component("explorerUi", {
            templateUrl: 'nuDashboard.html',
            controller: ['$http', '$scope', function ($http, $scope) {
              var ctrl = this;
              ctrl.version = Primo.version || '';
              ctrl.selectedTab = 0;
              ctrl.selectedComponent = null;
              ctrl.componentFilter = '';
              ctrl.selectedComponentName = '';
              ctrl.selectedComponentDetailShow = false;
              ctrl.selectedComponentElementIdx = 0;
              ctrl.selectedComponentElementCount = 0;
              ctrl.selectedComponentElement = null;

              ctrl.components = '';

              ctrl.loadComponent = function (name) {
                var c = Primo.explore.components.get(name);
                if (c && c.length > 0) {
                  ctrl.selectedComponent = c;
                  ctrl.selectedComponentName = name;
                  ctrl.loadComponentElement(0);
                  ctrl.selectedComponentDetailShow = true;
                } else {
                  ctrl.selectedComponent = null;
                }
              };

              ctrl.loadComponentElement = function (index) {
                if (ctrl.selectedComponent) {
                  ctrl.selectedComponentElementIdx = index;
                  ctrl.selectedComponentElementCount = ctrl.selectedComponent.length;
                  ctrl.selectedComponentElement = ctrl.selectedComponent[index];
                  ctrl.selectedComponentElementProperties = ctrl.selectedComponentElementCtrlKeys();
                } else {
                  ctrl.selectedComponentElementIdx = 0;
                  ctrl.selectedComponentElementCount = 0;
                  ctrl.selectedComponentElement = null;
                  ctrl.selectedComponentElementProperties = [];
                }
              };

              ctrl.refreshComponents = function () {
                ctrl.components = Primo.explore.components.keys();
              };

              ctrl.isActive = function () {
                return vmUi.active;
              };

              ctrl.toggle = function () {
                vmUi.toggle();
                ctrl.refreshComponents();
              };

              ctrl.rselectedComponentElementCtrlKeys = function () {
                if (ctrl.selectedComponentElement) {
                  var selectedCtrl = ctrl.selectedComponentElement.ctrl();
                  if (selectedCtrl) {
                    return Object.keys(selectedCtrl); //.map((d) => {return {key: d, value:'', type:''}});
                  }
                }
                return [];
              };

              ctrl.selectedComponentElementCtrlKeys = function () {
                var sce = [];
                if (ctrl.selectedComponentElement) {
                  var selectedCtrl = ctrl.selectedComponentElement.ctrl();
                  if (selectedCtrl) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                      for (var _iterator = Object.keys(selectedCtrl)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var key = _step.value;

                        if (selectedCtrl.hasOwnProperty(key)) {
                          switch (_typeof(selectedCtrl[key])) {
                            case 'string':
                              sce.push({
                                key: key,
                                value: '"' + selectedCtrl[key] + '"',
                                type: 'string'
                              });
                              break;
                            case 'boolean':
                              sce.push({
                                key: key,
                                value: '' + selectedCtrl[key],
                                type: 'boolean'
                              });
                              break;
                            case 'number':
                              sce.push({
                                key: key,
                                value: '' + selectedCtrl[key],
                                type: 'number'
                              });
                              break;
                            case 'undefined':
                              sce.push({
                                key: key,
                                value: "Undefined",
                                type: 'undefined'
                              });
                              break;
                            case 'null':
                              sce.push({
                                key: key,
                                value: "Null",
                                type: 'null'
                              });
                              break;
                            default:
                              try {
                                sce.push({
                                  key: key,
                                  value: '' + selectedCtrl[key].constructor.name,
                                  type: _typeof(selectedCtrl[key])
                                });
                              } catch (e) {
                                sce.push({
                                  key: key,
                                  value: '' + _typeof(selectedCtrl[key]),
                                  type: _typeof(selectedCtrl[key])
                                });
                              }
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
                  }
                }
                return sce;
              };

              ctrl.selectedComponentElementPrev = function () {
                if (ctrl.selectedComponentElementIdx > 0) {
                  ctrl.selectedComponentElementIdx -= 1;
                  ctrl.loadComponentElement(ctrl.selectedComponentElementIdx);
                }
              };

              ctrl.selectedComponentElementNext = function () {
                if (ctrl.selectedComponentElementIdx < ctrl.selectedComponentElementCount - 1) {
                  ctrl.selectedComponentElementIdx += 1;
                  ctrl.loadComponentElement(ctrl.selectedComponentElementIdx);
                }
              };

              ctrl.blink = function () {
                if (ctrl.selectedComponentElement) {
                  console.log('blinking ' + ctrl.selectedComponentName + '[' + ctrl.selectedComponentElementIdx + ']');
                  ctrl.selectedComponentElement.blink();
                }
              };

              ctrl.pushToConsole = function () {
                if (ctrl.selectedComponentElement) {
                  var varName = ctrl.selectedComponentName.split('-').map(function (m, i) {
                    m = m.trim();
                    return i == 0 ? m : m[0].toUpperCase() + m.substr(1);
                  }).join('');

                  setTimeout('eval("var ' + varName + '=(Primo.explore.components.get(\'' + ctrl.selectedComponentName + '\'))[' + ctrl.selectedComponentElementIdx + '];console.log(\'access variable through -> ' + varName + '\');")', 0);
                }
              };

              ctrl.headerMove = function (event) {
                event.stopPropagation();
                event.preventDefault();

                var header = document.querySelector('#explorerUiContainer');

                var originalTop = parseInt(window.getComputedStyle(header).top);
                var mouseDownY = event.clientY;

                var originalLeft = parseInt(window.getComputedStyle(header).left);
                var mouseDownX = event.clientX;

                var dragHeader = function dragHeader(event) {
                  header.style.top = originalTop + event.clientY - mouseDownY + "px";
                  header.style.left = originalLeft + event.clientX - mouseDownX + "px";
                  event.stopPropagation();
                };

                var dropHeader = function dropHeader(event) {
                  header.removeEventListener('mousemove', dragHeader, true);
                  header.removeEventListener('mouseup', dropHeader, true);
                  event.stopPropagation();
                };

                header.addEventListener('mouseup', dropHeader, true);
                header.addEventListener('mousemove', dragHeader, true);
              };
            }]
          }).config(function ($mdIconProvider) {
            $mdIconProvider.iconSet('primo-ui', 'img/svg/svg-primo-ui.svg', 18);
          }).run(function ($templateCache) {
            $templateCache.put('nuDashboard.html', '<style>\n    .f18 {\n        min-height: 18px;\n        min-width: 18px;\n        height: 18px;\n        width: 18px;\n    }\n</style>\n<!-- $mdMedia(\'gt-md\') -->\n<div id=\'explorerUiContainer\' ng-show="$ctrl.isActive()" style=\'position:absolute;top:10px;height:90vh;background-color:white;z-index:1000000;\'>\n    <md-sidenav class="md-sidenav-left" md-component-id="primo-explorer" md-is-locked-open="true" md-whiteframe="4" style="height:100%;">\n        <header id=\'explorerUiHeader\' ng-mousedown=\'$ctrl.headerMove($event)\'>\n            <md-toolbar>\n                <div class="md-toolbar-tools">\n                    <h2 flex md-truncate>PrimoExplorer {{$ctrl.version}}</h2>\n                    <md-button class=\'md-icon-button\' ng-click="$ctrl.toggle()" aria-label="Close" title=\'Close\'>\n                        <md-icon md-svg-icon="primo-ui:close"></md-icon>\n                    </md-button>\n                </div>\n            </md-toolbar>\n        </header>\n\n        <section id=\'pe-components\'>\n            <div flex id=\'pe-components-list\' ng-hide=\'$ctrl.selectedComponentDetailShow\'>\n                <section style=\'background-color:#eee;\'>\n                    <div layout=\'row\'>\n                        <md-button ng-click=\'$ctrl.refreshComponents()\'>Reload</md-button>\n                        <md-input-container flex md-no-float>\n                            <label>Filter</label>\n                            <input ng-model="$ctrl.componentFilter">\n                        </md-input-container>\n                    </div>\n                </section>\n                <md-content style="height:90%;">\n                    <md-list class="md-dense">\n                        <md-list-item ng-repeat="component in $ctrl.components | filter:$ctrl.componentFilter" ng-click="$ctrl.loadComponent(component);$event.stopPropagation();">\n                            <span>{{component}}</span>\n                            <md-divider ng-if="!$last"></md-divider>\n                        </md-list-item>\n                    </md-list>\n                </md-content>\n            </div>\n\n            <div flex id=\'pe-components-detail\' ng-show=\'$ctrl.selectedComponentDetailShow\'>\n                <section style=\'height:100%\'>\n                    <md-toolbar class=\'md-hue-2\' style="font-size: 0.8em;min-height: 2.5em;height:2.5em;">\n                        <div class="md-toolbar-tools" style="font-size: 0.8em;min-height: 2.5em;height:2.5em;">\n\n                            <md-button class=\'md-icon-button\' ng-click="$ctrl.selectedComponentDetailShow = false" aria-label="Back" title="Back">\n                                <md-icon class="f18" md-svg-icon="primo-ui:chevron-left"></md-icon>\n                            </md-button>\n\n                              <h2 flex md-truncate>{{$ctrl.selectedComponentName}}</h2>\n\n                            <md-button class=\'md-icon-button\' ng-click="$ctrl.blink()" aria-label="Blink component" title="Blink component">\n                                <md-icon class="f18" md-svg-icon="primo-ui:bell"></md-icon>\n                            </md-button>\n                            <md-button class=\'md-icon-button\' ng-click="$ctrl.pushToConsole()" aria-label="Push to console" title="Push to console">\n                                <md-icon class="f18" md-svg-icon="primo-ui:open-in-new"></md-icon>\n                            </md-button>\n                        </div>\n                    </md-toolbar>\n                    <section style="background-color:#eee;">\n                        <div layout="row" layout-align="center center">\n                            <md-button class=\'md-icon-button\' ng-click="$ctrl.selectedComponentElementPrev()" aria-label="Previous element" title="Previous element">\n                                <md-icon class="f18" md-svg-icon="primo-ui:chevron-left"></md-icon>\n                            </md-button>\n                            <div layout-align="center center">\n                                <div>{{$ctrl.selectedComponentElementIdx+1}}/{{$ctrl.selectedComponentElementCount}}</div>\n                            </div>\n                            <md-button class=\'md-icon-button\' ng-click="$ctrl.selectedComponentElementNext()" aria-label="Next element" title="Next element">\n                                <md-icon class="f18" md-svg-icon="primo-ui:chevron-right"></md-icon>\n                            </md-button>\n                        </div>\n                        <div layout="row" layout-align="center center">\n                            <input flex style="font-size:10px;text-align:center;" type="text" name="" value="{{$ctrl.selectedComponentElement.cssPath}}">\n                        </div>\n                    </section>\n                    <section>\n                        <md-list>\n                          <md-list-item ng-repeat="property in $ctrl.selectedComponentElementProperties">\n                            <span>{{property.key}}:</span>\n                            <span class="md-secondary" style="overflow:hidden;text-overflow: ellipsis;white-space: nowrap;">{{property.value}}</span>\n                          </md-list-item>\n                        </md-list>\n                    </section>\n                </section>\n            </div>\n        </section>\n    </md-sidenav>\n</div>\n');
          });
        }
      }, {
        key: '_injectDOMElement',
        value: function _injectDOMElement() {
          var div = document.createElement('div');
          div.setAttribute('id', 'explorerUi');
          div.innerHTML = "<explorer-ui></explorer-ui>";

          //document.querySelector('primo-explore').appendChild(div);
          document.body.appendChild(div);
        }
      }, {
        key: 'show',
        value: function show() {
          this.active = true;
          //this.scope.$apply();
        }
      }, {
        key: 'hide',
        value: function hide() {
          this.active = false;
          //this.scope.$apply();
        }
      }, {
        key: 'toggle',
        value: function toggle() {
          this.active = !this.active;
          //this.scope.$apply();
        }
      }]);

      return Ui;
    }();

    exports.default = Ui;
  }, {}], 7: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    }();

    var _components = require('./explore/components');

    var _components2 = _interopRequireDefault(_components);

    var _helper = require('./explore/helper');

    var _helper2 = _interopRequireDefault(_helper);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

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
  }, { "./explore/components": 4, "./explore/helper": 5 }], 8: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    }();

    var _components = require('./explore/components');

    var _components2 = _interopRequireDefault(_components);

    var _helper = require('./explore/helper');

    var _helper2 = _interopRequireDefault(_helper);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

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
  }, { "./explore/components": 4, "./explore/helper": 5 }], 9: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _helper = require('./explore/helper');

    var _helper2 = _interopRequireDefault(_helper);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var User = function User() {
      var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { details: {}, fines: {} };

      _classCallCheck(this, User);

      var uSms = _helper2.default.userSessionManagerService();
      var jwtData = _helper2.default.jwtData();
      var self = this;

      return {
        id: jwtData.user || '',
        email: user.details.email || '-',
        name: jwtData.userName || 'Guest',
        display_name: uSms.getUserNameForDisplay(),
        isLoggedIn: function isLoggedIn() {
          return uSms.getUserName().length > 0;
        },
        isOnCampus: function isOnCampus() {
          return jwtData.onCampus == "true" ? true : false;
        },
        fines: user.fines
      };
    };

    exports.default = User;
  }, { "./explore/helper": 5 }], 10: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _helper = require('./explore/helper');

    var _helper2 = _interopRequireDefault(_helper);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

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
  }, { "./explore/helper": 5 }], 11: [function (require, module, exports) {
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
  }, {}] }, {}, [1]);
})();