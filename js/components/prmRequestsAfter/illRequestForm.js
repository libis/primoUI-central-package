import illRequestFormHTML from './illRequestForm.html'

class illRequestFormController {
    constructor($scope, $translate, $window) {
        let self = this;
        this.scope = $scope;
        this.translate = $translate;
        this.window = $window;
        this.illRequestUrl = '';       
    };

    toIllRequestUrl() {
        var institutionCode = this.parentCtrl.parentCtrl.requestsService.accountService.linkedUserSelectorService.selectedInstitution.institutionCode;
        //console.log('institutionCode:' + institutionCode)
        this.illRequestUrl = 'https://leuven-primo.hosted.exlibrisgroup.com/pds?func=sso&url=http://eu.alma.exlibrisgroup.com/view/uresolver/'+ institutionCode +'/openurl?svc_dat=getit&svc.profile=getit&directResourceSharingRequest=true&newUI=true'
        this.window.open(this.illRequestUrl, '_freeIll');
    };

};

illRequestFormController.$inject = ['$scope', '$translate', '$window'];

export let illRequestFormConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: illRequestFormController,
    template: illRequestFormHTML
}
