app.component('prmFullViewAfter', {
    bindings: {
        parentCtrl: '<'
    },
    controller: 'prmFullViewAfterController',
    template: `
        <prm-full-view-after-section-ordering parent-ctrl ="$ctrl.parentCtrl" ></prm-full-view-after-section-ordering>
        <prm-full-view-after-altmetrics parent-ctrl ="$ctrl.parentCtrl" ></prm-full-view-after-altmetrics>
        `
});


app.controller('prmFullViewAfterController', ['$scope', '$element', '$compile', function ($scope, $element, $compile) {
    var vm = this;
    /*
    vm.$postLink = function() {
        // Usually safe to do DOM manipulation
    }
    */
}]);