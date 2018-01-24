
class StaticFooterController {
    constructor($scope, $http, $mdDialog, $element) {
        let self = this;
        let scope = $scope;
        var locale = "en_US"

        var viewWithCustomFooter = ['Lirias','wereldwijzer','ECB']
/*
        console.log (self )
        console.log (scope )
        console.log (scope.$root.$$childHead.$ctrl.userSessionManagerService )
*/
        locale = scope.$root.$$childHead.$ctrl.userSessionManagerService.i18nService.getLanguage();
        /*
        var vid = window.appConfig['vid'];
       //       $templateCache.put(staticFooterTemplateName, 'custom/CENTRAL_PACKAGE/html/templates/footer_' + locale + '.html');
*/
        var vid = window.appConfig['vid'];
        var templateUrl = 'custom/CENTRAL_PACKAGE/html/templates/footer_' + locale + '.html';
        if ( viewWithCustomFooter.includes(vid) )  {
            templateUrl = 'custom/CENTRAL_PACKAGE/html/templates/footer_' + vid + '_' + locale + '.html';
        }

        $scope.getTemplateUrl = function () {
            return templateUrl;
        }
    }
}

StaticFooterController.$inject = ['$scope', '$http', '$mdDialog', '$element']

export let staticFooterConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: StaticFooterController,
    template: '<ng-include src="getTemplateUrl()"/>',
}
