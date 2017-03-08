(function(){
"use strict";
'use strict';

var app = angular.module('centralCustom', []);

var feedbackServiceURL = 'https://services.libis.be/feedback';

/*
 * Add Home Icon after the library logo 
 * Tom vanmechelen
 */

app.controller('prmLogoAfterController', [function () {
    var vm = this;
    var vid = window.appConfig['vid'];
    vm.getHomePageLink = getHomePageLink;
    function getHomePageLink() {
        return '/primo-explore/search?vid=' + vid;
    }

    vm.goToHomePage = goToHomePage;
    function goToHomePage() {
        document.location.href = '/primo-explore/search?vid=' + vid;
    }
}]);

app.component('prmLogoAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmLogoAfterController',
    template: '\n<div id="fixed-buttons-holder"\n    ng-class ="{\'fixed-to-top\': $ctrl.fixedToTop()}"\n    layout="row"\n    layout-align="center center"\n    class ="layout-align-center-center layout-row"\n>\n<a class ="md-icon-button button-over-dark md-button md-primoExplore-theme" id="home-button" aria-label="Go to startpage" ng-click=\'$ctrl.goToHomePage()\'  href="{{$ctrl.getHomePageLink()}}" >\n<md-icon class ="md-primoExplore-theme">\n<svg id="prm_home" width="100%" height="100%" viewBox="0 0 24 24" y="0" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">\n    <path d="M10,20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n    </svg>\n    </md-icon>\n</a>\n</div>\n'
});
insertActions([{
    name: "PNX",
    type: 'template',
    icon: {
        set: 'action',
        name: 'ic_stars_24px'
    },
    action: "/primo_library/libweb/jqp/record/{pnx.control.recordid}.pnx"
}, {
    name: "XML",
    type: 'template',
    templateVar: ['.xml'],
    icon: {
        set: 'action',
        name: 'ic_stars_24px'
    },
    action: "/primo_library/libweb/jqp/record/{pnx.control.recordid}.xml"
}]);

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

app.component('prmMainMenuAfter', {
    bindings: {
        parentCtrl: '<'
    },
    template: '\n    <md-button aria-label="Send feedback"\n               tabindex="0"\n               class="zero-margin flex-button multi-line-button button-over-dark"\n               layout="column"\n               layout-align="center center"\n               ng-click="$ctrl.displaySendFeedback()">\n\n        <span class="item-content">feedback</span>\n        <md-tooltip md-direction="down" md-delay="400" class="multi-row-tooltip slide-tooltip-anim">\n            <span class="item-description popover animate-popover">FEEDBACK</span>\n        </md-tooltip>\n    </md-button>\n    ',
    controller: ['$q', '$mdToast', '$localForage', '$mdDialog', '$http', function ($q, $mdToast, $localForage, $mdDialog, $http) {
        var self = this;
        var uSms = this.parentCtrl.userSessionManagerService;

        self.session = {};
        self.$onInit = function () {
            //self.session = session(uSms);
            if (typeof feedbackServiceURL === 'undefined') {
                self.displaySendFeedback = function () {
                    alert('Please set the "feedbackServiceURL" variable');
                };
            } else {
                self.displaySendFeedback = displaySendFeedback;
            }
        };

        var displaySendFeedback = function displaySendFeedback() {
            self.session = session(uSms);

            $mdDialog.show({
                template: '\n                <div layout="row" layout-wrap layout-margin layout-align="center">\n                    <md-dialog id=\'lbsFeedbackForm\' aria-label=\'feedback\'>\n                        <md-toolbar>\n                            <div class="md-toolbar-tools">\n                                <h2>Feedback</h2>\n                                <span flex></span>\n                                <md-button class="md-icon-button" ng-click="cancelSendFeedback()">\n                                    <md-icon md-svg-icon="navigation:ic_close_24px" aria-label="Close dialog"></md-icon>\n                                </md-button>\n                            </div>\n                        </md-toolbar>\n\n                        <md-dialog-content>\n                            <div class="md-dialog-content">\n                                <input type="hidden" name=\'subject\' ng-model=\'feedback.subject\'>\n                                <md-input-container class="md-block">\n                                    <label>EMail</label>\n                                    <input type="email" name=\'replyTo\' title=\'Your email. So we can keep you up to date\' placeholder=\'john.doe@kuleuven.be\' required ng-model=\'feedback.replyTo\'>\n                                </md-input-container>\n\n                                <md-input-container>\n                                    <label>Description</label>\n                                    <textarea name="message" placeholder="Describe what the problem is" md-maxlength="500" required md-no-asterisk rows="8" cols="80" ng-model="feedback.message"></textarea>\n                                </md-input-container>\n                            </div>\n                        </md-dialog-content>\n\n                        <md-dialog-actions layout="row">\n                            <md-button class="md-raised" ng-click="cancelSendFeedback()">Cancel</md-button>\n                            <md-button class="md-raised md-primary" ng-click=\'sendFeedback()\'>Submit</md-button>\n                        </md-dialog-actions>\n                    </md-dialog>\n                </div>\n                ',
                controller: function controller($scope, $mdDialog) {
                    $scope.feedback = {
                        replyTo: self.session.user.email,
                        message: '',
                        subject: 'feedback'
                    };

                    $scope.cancelSendFeedback = function () {
                        $mdDialog.cancel();
                    };

                    $scope.sendFeedback = function (answer) {
                        var data = {
                            subject: $scope.feedback.subject,
                            sessionId: self.session.id,
                            view: self.session.view.code,
                            inst: self.session.view.institution.code,
                            loggedIn: self.session.user.isLoggedIn(),
                            onCampus: self.session.user.isOnCampus(),
                            user: self.session.user.name,
                            ip: self.session.ip.address,
                            type: 'feedback',
                            feedback: $scope.feedback.message,
                            email: $scope.feedback.replyTo || self.session.user.email,
                            userAgent: navigator.userAgent
                        };

                        $http({
                            method: 'POST',
                            url: feedbackServiceURL,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            cache: false,
                            data: data
                        }).then(function (response) {
                            $mdToast.showSimple('Thank you for your feedback!');
                        }, function (response) {
                            $mdToast.showSimple('Unable to submit feedback.');
                        });
                        //$http is not usable today because of a sticky Authorization header
                        // let request = new Request(feedbackServiceURL, {
                        //     method: 'POST',
                        //     headers: {
                        //         'Content-Type': 'application/json'
                        //     },
                        //     mode: 'cors',
                        //     cache: 'no-cache',
                        //     body: JSON.stringify(data)
                        // });
                        // fetch(request)
                        //     .then((response) => {
                        //         $mdToast.showSimple('Thank you for your feedback!');
                        //     }, (response) => {
                        //         $mdToast.showSimple('submitting feedback');
                        //     });

                        $mdDialog.hide(answer);
                    };
                },
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: false
            }).then(function () {
                console.log('Feedback handeled');
            }, function () {
                console.log('Cancelling feedback');
            });
        };

        var session = function session(uSms) {
            console.log('get session called', self.session);
            var jwtData = uSms.jwtUtilService.getDecodedToken();
            var s = {
                id: jwtData.jti,
                view: {
                    code: jwtData.viewId,
                    institution: {
                        code: jwtData.viewInstitutionCode || window.appConfig['vid'],
                        name: window.appConfig['primo-view']['attributes-map'].institution
                    },
                    interfaceLanguage: ''
                },
                ip: {
                    address: jwtData.ip
                },
                user: {
                    id: jwtData.user || '',
                    email: '',
                    name: jwtData.userName || 'Guest',
                    isLoggedIn: function isLoggedIn() {
                        return uSms.getUserName().length > 0;
                    },
                    isOnCampus: function isOnCampus() {
                        return jwtData.onCampus == "true" ? true : false;
                    }
                }
            };

            $localForage.getItem('userDetails').then(function (data) {
                s.view.interfaceLanguage = data ? data.interfaceLanguage : '';
                s.user.email = data ? data.email : '';
            });

            return s;
        };

        self.session = session(uSms);
    }]
});

angular.module('viewCustom').component('prmFullViewAfter', {
    bindings: {
        parentCtrl: '<'
    },
    controller: ['sectionOrdering', function (sectionOrdering) {
        var ctrl = this;

        ctrl.$onInit = function () {
            sectionOrdering(ctrl.parentCtrl.services);
        };
    }]
});
angular.module('viewCustom').factory('sectionOrdering', function () {
    return function (sections) {
        if (!sections) return false;

        var numSections = sections.length;
        if (!(numSections > 0)) return false;

        // Check if there is a 'details' section.
        var filterResult = sections.filter(function (s) {
            return s.serviceName === 'details';
        });
        if (filterResult.length !== 1) return false;
        var detailsSection = filterResult[0];

        var index = sections.indexOf(detailsSection);

        // Remove the 'details' section from the array.
        sections.splice(index, 1);

        // Append the 'details' section to the array.
        sections.splice(numSections, 0, detailsSection);

        return true;
    };
});
function insertActions(actions) {
    app.service('customActionService', function () {
        return {
            actions: [],
            processCustomAction: function processCustomAction(prmActionCtrl, action) {
                action.slug = action.name.replace(/\s+/g, ''); // remove whitespace
                action.iconname = action.slug.toLowerCase();
                action.index = Object.keys(prmActionCtrl.actionListService.actionsToIndex).length - 1; // ignore "none" and RISPushTo
                this.actions.push(action);
                return action;
            },
            setCustomAction: function setCustomAction(prmActionCtrl, action) {
                prmActionCtrl.actionLabelNamesMap[action.slug] = action.name;
                prmActionCtrl.actionIconNamesMap[action.slug] = action.iconname;
                prmActionCtrl.actionIcons[action.iconname] = {
                    icon: action.icon.name,
                    iconSet: action.icon.set,
                    type: "svg"
                };
                if (!prmActionCtrl.actionListService.actionsToIndex[action.slug]) {
                    // ensure we aren't duplicating the entry
                    prmActionCtrl.actionListService.requiredActionsList[action.index] = action.slug;
                    prmActionCtrl.actionListService.actionsToDisplay.unshift(action.slug);
                    prmActionCtrl.actionListService.actionsToIndex[action.slug] = action.index;
                }
                if (action.type === 'template') {
                    if (action.hasOwnProperty('templateVar')) {
                        action.action = action.action.replace(/{\d}/g, function (r) {
                            return action.templateVar[r.replace(/[^\d]/g, '')];
                        });
                    }
                    action.action = action.action.replace(/{recordId}/g, function (r) {
                        return prmActionCtrl.item.pnx.search.recordid[0];
                    });
                }
                prmActionCtrl.onToggle[action.slug] = function () {
                    window.open(action.action, '_blank'); // opens the url in a new window
                };
            },
            setCustomActionContainer: function setCustomActionContainer(mdTabsCtrl, action) {// for further review...
            },
            getCustomActions: function getCustomActions() {
                return this.actions;
            }
        };
    }).component('prmActionListAfter', {
        require: {
            prmActionCtrl: '^prmActionList'
        },
        controller: 'customActionController'
    }).component('prmActionContainerAfter', {
        require: {
            mdTabsCtrl: '^mdTabs'
        },
        controller: 'customActionContainerController'
    }).controller('customActionController', ['$scope', 'customActionService', function ($scope, customActionService) {
        var vm = this;
        vm.$onInit = function () {
            console.log(vm.prmActionCtrl);
            actions.forEach(function (action) {
                var processedAction = customActionService.processCustomAction(vm.prmActionCtrl, action);
                customActionService.setCustomAction(vm.prmActionCtrl, processedAction);
            });
        };
    }]).controller('customActionContainerController', ['$scope', 'customActionService', function ($scope, customActionService) {
        var vm = this;
        vm.$onInit = function () {
            console.log(vm.mdTabsCtrl);
        };
    }]);
}
})();