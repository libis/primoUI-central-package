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
}).controller('addSourceIconController', ['$scope', function($scope) {
    var self = this;
    var parentCtrl = $scope.$parent.$ctrl.parentCtrl;

    var iconConf = [{
        'sourceid': 'lirias',
        'iconUrl': '//limo.libis.be/primo_library/libweb/libis/images/lirias.jpg',
        'iconText': 'Lirias'
    }];

    var iconConfSources = iconConf.map(function(obj) {
        return obj.sourceid;
    });

    self.sourceid = '';
    if ('sourceid' in parentCtrl.item.pnx.control) {
        self.sourceid = parentCtrl.item.pnx.control.sourceid[0];
        if (iconConfSources.indexOf(self.sourceid) >= 0) {
            self.icon = iconConf.find(function(x) {
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
}).controller('addSourceIconTagController', ['$scope', '$element', '$compile', function($scope, $element, $compile) {
    var self = this;
    var sourceId = self.parentCtrl.item.pnx.control.sourceid[0];

    var code = angular.element('<add-source-icon></add-source-icon>');
    $element.parent().parent().find('div').append($compile(code)($scope));
}]);
