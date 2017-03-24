app.component('prmUserAreaAfter', {
    bindings: {
        parentCtrl: '<'
    },
    controller: function($compile, $scope, $templateCache, $element) {
      $templateCache.put('components/search/topbar/userArea/user-area.html', `
          <div layout='row' layout-align="center center">
            <prm-authentication layout="flex" [is-logged-in]="$ctrl.userName().length > 0"></prm-authentication>
            <prm-change-lang aria-label="{{'eshelf.signin.title' | translate}}" ng-if="$ctrl.displayLanguage" label-type="icon"></prm-change-lang>
            <prm-library-card-menu></prm-library-card-menu>
          </div>`);

      $compile($element.parent())($scope);
    }
})
