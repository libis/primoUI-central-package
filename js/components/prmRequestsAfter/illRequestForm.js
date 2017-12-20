import illRequestFormHTML from './illRequestForm.html'

class illRequestFormController {
    constructor($scope, $translate,$window,$rootScope) {
        let self = this;
        this.scope = $scope;
        this.translate = $translate;
        this.window = $window;
        this.$rootScope = $rootScope;
        this.illRequestUrl = '';   

    };

    toIllRequestUrl() {
        var institutionCode = "";
        if (this.parentCtrl.parentCtrl.requestsService.accountService.linkedUserSelectorService.selectedInstitution) {
            institutionCode = this.parentCtrl.parentCtrl.requestsService.accountService.linkedUserSelectorService.selectedInstitution.institutionCode;
        } else{
            var alma_codes = this.$rootScope.$$childHead.$ctrl.userSessionManagerService.mappingTablesCache.MAPPING_TABLES_CACHE["Alma Institution Codes"];
            var user_inst = this.$rootScope.$$childHead.$ctrl.userSessionManagerService.userInstitution;
            var alma_code = alma_codes.filter(function( obj ) { return obj.target == user_inst; });
            // console.log (alma_code[0]);
            institutionCode = alma_code[0].source1;
        }
        //console.log('institutionCode:' + institutionCode)
        if ( institutionCode ) {
            this.illRequestUrl = 'https://leuven-primo.hosted.exlibrisgroup.com/pds?func=sso&url=http://eu.alma.exlibrisgroup.com/view/uresolver/'+ institutionCode +'/openurl?svc_dat=getit&svc.profile=getit&directResourceSharingRequest=true&newUI=true'
            this.window.open(this.illRequestUrl, '_freeIll');    
        }
    };
};

illRequestFormController.$inject = ['$scope', '$translate', '$window','$rootScope'];

export let illRequestFormConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: illRequestFormController,
    template: illRequestFormHTML
}
