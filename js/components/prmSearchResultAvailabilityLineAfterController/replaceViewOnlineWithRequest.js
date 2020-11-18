
class BriefReplaceViewOnlineWithRequestController {
    constructor($scope, $window, $http, $element, angularLoad) {
        this.$http = $http;
        this.$scope = $scope;
        this.angularLoad = angularLoad;
        this.$element = $element;
        var displayedAvailability = $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.displayedAvailability;
        let pnx = $scope.$ctrl.parentCtrl.parentCtrl.result.pnx;

        if ( 
            pnx.control.sourceid.includes("ESVLP_scopeArchiv") && displayedAvailability.indexOf("not_restricted") > -1
        ) {
            var availabilityLinksUrl = $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.link.filter(link => link.linkType == "http://purl.org/pnx/linkType/lln02");

            $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.availability = ["ScopeArchiv_free"];
            $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.deliveryCategory = ["Remote Search Resource"];
            $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.displayedAvailability = "ScopeArchiv_free";
            $scope.$ctrl.parentCtrl.parentCtrl.result.delivery.availabilityLinksUrl = [ availabilityLinksUrl[0].linkURL ];

        }

/*
        if (  pnx.control.sourceid.includes("ESVLP_scopeArchiv") && displayedAvailability.indexOf("not_restricted") > -1 ) {
            // console.log ( $scope.$parent.$parent.$parent.$ctrl.delivery )
            angular.forEach($scope.$ctrl.parentCtrl.parentCtrl.$element, function(el) {
                console.log ( el )
                if (el.localName == 'prm-search-result-availability-line' ){
                    el.remove();
                }
            })
        }
*/

    }
}

BriefReplaceViewOnlineWithRequestController.$inject = ['$scope', '$window', '$http', '$element', 'angularLoad'];

export let briefReplaceViewOnlineWithRequestConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: BriefReplaceViewOnlineWithRequestController,
    template: ''
}