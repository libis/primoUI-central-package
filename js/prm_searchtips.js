
app.component('prmSearchtips', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchtipsController',
    template: `
        <a aria-label="{{title_label}}"
                   title="{{title_label}}" ng-click="showSearchTips()">
                    <span class ="md-headline" id="ContentSearchTips">
    {{title}}
                    </span>
                </a>
`
});

app.controller("prmSearchtipsController", ['$scope', '$http', '$mdDialog', function ($scope, $http, $mdDialog) {
    var self = this;
    var locale = self.parentCtrl.staticService.userSessionManagerService.i18nService.getLanguage();
    var vid = window.appConfig['vid'];

    var locale_text = {
        'nl_BE': {
            'title': 'Zoektips',
            'title_label': "Zoektips weergeven"
        },
        'en_US': {
            'title': 'Search Tips',
            'title_label': "Search Tips"
        },
        'fr_FR': {
            'title': 'Astuces?',
            'title_label': "Astuces?"
        },
    }
    
    $scope.title = locale_text[locale]['title'];
    $scope.title_label = locale_text[locale]['title_label'];
    console.log($scope.title)

    $scope.showSearchTips = function($event) {
        var parentEl = angular.element(document.body);
        $mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            templateUrl : 'custom/CENTRAL_PACKAGE/html/templates/searchTips_'+ locale +'.html',
            locals: {
                items: $scope.items
            },
            controller: DialogController
        });
    }

        function DialogController($scope, $mdDialog, items) {
            $scope.items = items;
            $scope.closeDialog = function () {
                $mdDialog.hide();
            }
        }
}]);