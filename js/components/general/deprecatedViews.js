
class DeprecatedViewsController {
    constructor($scope) {
        let self = this;
        let scope = $scope;
        var deprecated_vids = ['UCLL_LIMBURG','UCLL_LEUVEN','KULeuven_UX'];
        let parentEl = angular.element(document.querySelector('primo-explore'));
        if ( deprecated_vids.includes( window.appConfig.vid  ) ) {
            console.log ("This is an old view !!!!")
            window.location.replace ( "https://"+document.location.host )
        }

    }
}

DeprecatedViewsController.$inject = ['$scope']

export let DeprecatedViewsConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: DeprecatedViewsController,
    template: '',
}
