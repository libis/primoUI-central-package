
class RemoveAlertsController {
    constructor($scope, $http,  $translate, $element, $templateCache) {
        this.translate = $translate;
        let self = this;
        let scope = $scope;
        var locale = "en_US"
        locale = scope.$root.$$childHead.$ctrl.userSessionManagerService.i18nService.getLanguage();

        $templateCache.put('components/search/savedQueries/addAlertToast/add-alert-toast.html',`
        <md-toast ng-class="{\'mobile-define\':$ctrl.detectMobile(),\'layout-column\':$ctrl.detectMobile()}" class="md-toast-content">
    <div layout="row" layout-align="center center" class="md-toast-content" ng-class="{\'end-content\':!$ctrl.detectMobile()}">
        <span class="md-toast-text">
            <span ng-if="!$ctrl.addMode" translate="nui.favorites.search.alert.message"></span>
            <span ng-if="$ctrl.addMode" translate="nui.savesearch.message.description"></span>
            <strong ng-if="!$ctrl.addMode">{{$ctrl.email}}</strong>
        </span>
    </div>
    <div layout="row" layout-align="start start" class="md-toast-content" ng-class="{\'start-content\':!$ctrl.detectMobile()}">
        <md-button ng-click="$ctrl.onDismiss()" aria-label="{{::(\'nui.message.dismiss\' | translate)}} ">
            <span class="ng-scope" translate="nui.message.dismiss"></span>
        </md-button>
    </div>
</md-toast>
<prm-add-alert-toast-after parent-ctrl="$ctrl"></prm-add-alert-toast-after>
        `);
    }
}

RemoveAlertsController.$inject = ['$scope', '$http', '$translate', '$element', '$templateCache' ]

export let removeAlertsConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: RemoveAlertsController,
    template: '<style>md-template prm-add-alert-toast md-toast *[aria-label="{{\'nui.aria.savedQueriesList.alert\' | translate}}"] {  display: none; }</style>'
}
