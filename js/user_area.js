app.controller('prmUserAreaAfterController', ['$scope', '$element', '$location', '$mdDialog', '$compile', '$templateCache', function ($scope, $element, $location, $mdDialog, $compile, $templateCache) {
    var self = this;
    self.$onInit = function () {
        $compile($element.parent())($scope);
    };

    $templateCache.put('components/search/topbar/userArea/user-area.html', `
            <div layout='row' layout-align="center center">
            <prm-change-lang aria-label="{{'eshelf.signin.title' | translate}}" ng-if="$ctrl.displayLanguage && !$ctrl.userName()" label-type="icon"></prm-change-lang>
            <prm-authentication layout="flex"[is-logged-in]="$ctrl.userName().length > 0"></prm-authentication>
            <prm-library-card-menu ng-if="$ctrl.userName()"></prm-library-card-menu>
             `
  )

}]);

app.component('prmUserAreaAfter', {
    bindings: {
        parentCtrl: '<'
    },
    controller: 'prmUserAreaAfterController'
});