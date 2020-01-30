/* component to do all your experimental stuff */
/* [en|dis]able in components*/

class ExperimentController {
 
  constructor($scope, $element,$templateCache, $compile,$injector,$rootScope,$translate, $window) {
    console.log('Experiment:');
    let self = this;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$element = $element;
    this.$templateCache = $templateCache;
    this.$compile = $compile;
    this.translate = $translate;
    this.window = $window;
    this.illRequestUrl = ''; 

    console.log(self)
    console.log('rootScope:')
    console.log($rootScope)
    console.log('templateCache')
    console.log($templateCache)   
    var template = $templateCache.get('components/account/overview/requestsOverview/requests-overview.html');
    // var template = template + "<H1 id='omtelachten'>LALALA<ill-request-form-overview></ill-request-form-overview></H1>";
    var template = template + "<H1 id='omtelachten'>LALALA</H1>";
    $templateCache.put('components/account/overview/requestsOverview/requests-overview.html', template);
    console.log($templateCache.get('components/account/overview/requestsOverview/requests-overview.html'))
};

  toIllRequestUrl() {
      var institutionCode = this.parentCtrl.parentCtrl.requestsService.accountService.linkedUserSelectorService.selectedInstitution.institutionCode;
      //console.log('institutionCode:' + institutionCode)
      this.illRequestUrl = 'https://leuven-primo.hosted.exlibrisgroup.com/pds?func=sso&url=https://eu.alma.exlibrisgroup.com/view/uresolver/'+ institutionCode +'/openurl?svc_dat=getit&svc.profile=getit&directResourceSharingRequest=true&newUI=true'
      this.window.open(this.illRequestUrl, '_freeIll');
  };
    
  $onInit() {  
    
    console.log ('newElement:')
  //  console.log (angular.element( '#omtelachten').length)
   // if ( angular.element( 'H1').length == 0 ) {
      console.log ('\'t Is ni om te lachten')
       var elementName = 'prm-requests-overview'
       //let element = $element.parentElement.parentElement
       let element = angular.element(document.querySelector(elementName));
       if (element) {
         let elementScope = element.scope();
         console.log (elementScope)
         this.$compile(element)(elementScope);
         //elementScope.$apply()
       }     
  //   }
    }
}

ExperimentController.$inject = ['$scope', '$element',  '$templateCache', '$compile','$injector','$rootScope','$translate', '$window']

export let experimentConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: ExperimentController,
  template: ''
}
