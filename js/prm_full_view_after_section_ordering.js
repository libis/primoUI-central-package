app.component('prmFullViewAfterSectionOrdering', {
    bindings: {
        parentCtrl: '<'
    },
    controller: 'prmFullViewAfterSectionOrderingController',
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

}]
);
