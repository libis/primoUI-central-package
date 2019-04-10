class RemoveCheckLocationsController {
    constructor($scope, $http, $element, $templateCache) {
        var displayedAvailability = $scope.$ctrl.parentCtrl.parentCtrl.displayedAvailability;
        if ( displayedAvailability.indexOf("fulltext_unknown") > -1 || displayedAvailability.indexOf("may_be_restricted") > -1 ) {
            // console.log ( $scope.$parent.$parent.$parent.$ctrl.delivery )
            angular.forEach($scope.$ctrl.parentCtrl.parentCtrl.$element, function(el) {
                console.log ( el )
                if (el.localName == 'prm-search-result-availability-line' ){
                    el.remove();
                }
            })
        }
    }
}

RemoveCheckLocationsController.$inject = ['$scope', '$http', '$element', '$templateCache' ]

export let removeCheckLocationsConfig = {
    bindings: {parentCtrl: '<'},
    controller: RemoveCheckLocationsController
}