/* component to do all your experimental stuff */
/* [en|dis]able in components*/

class ExperimentController {
  constructor($scope, $element, $compile,$injector,$rootScope) {
    console.log('Experiment:');
    let self = this;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$element = $element;
    this.$compile = $compile;

    console.log(self)
    console.log('rootScope:')
    console.log($rootScope)
    //this.$injector = $injector;
    /*
    console.log(this)
    console.log($scope)
    */
    console.log('scope:')
    console.log($scope)
    console.log( self.parentCtrl.parentCtrl.primolyticsService.configurationUtil.vid );
    console.log( self.parentCtrl.parentCtrl.primolyticsService.userSessionManagerService.vid );
    console.log( self.parentCtrl.parentCtrl.primolyticsService.userSessionManagerService.inst );
    console.log( self.parentCtrl.parentCtrl.primolyticsService.userSessionManagerService.userInstitution );
        
    this.parentCtrl.parentCtrl.orgGetLink = this.parentCtrl.parentCtrl.getLink;
    this.parentCtrl.parentCtrl.getLink = function() { 
      var getItLink = self.parentCtrl.parentCtrl.orgGetLink();  
      return getItLink.replace(/KULeuven_UX/i, self.parentCtrl.parentCtrl.primolyticsService.configurationUtil.vid) 
    } ;
  }
    
  $onInit() {
    var containsWrongVid = false
    console.log ( this.parentCtrl.parentCtrl.getLink() );
    //var getItLink = this.parentCtrl.parentCtrl.getLink();
    //this.parentCtrl.parentCtrl.getLink = function() { return getItLink.replace(/KUL/i, "LALALALALALALALALAL")  } ;


    if (this.parentCtrl.parentCtrl.pnx.delivery){
      /* Check pnx.delivery..getIt1.getItTabsData */
      /*
      var ItTabData = this.parentCtrl.parentCtrl.pnx.delivery.getIt1.getItTabsData['Remote Search Resource']
      if (ItTabData) {
        if ( ItTabData.getItLinks[0].linkUrl.includes('KUL') ){
          console.log ('CONATINS WRONG !!!!!!!!!!!!!!!!!!!!!')
          containsWrongVid =true;
        }
        var url = ItTabData.getItLinks[0].linkUrl.replace(/KUL/i, "Remote Search Resource");
        ItTabData.getItLinks[0].linkUrl = url;
      }
      var ItTabData = this.parentCtrl.parentCtrl.pnx.delivery.getIt1.getItTabsData['Remote Search Resource:Alma']
      if (ItTabData){
        if ( ItTabData.getItLinks[0].linkUrl.includes('KUL') ){
          console.log ('CONATINS WRONG !!!!!!!!!!!!!!!!!!!!!')
          containsWrongVid =true;
        }
        var url = ItTabData.getItLinks[0].linkUrl.replace(/KUL/i, "Remote Search Resource:ALAM");
        ItTabData.getItLinks[0].linkUrl = url;
      }
      */
      /* Check pnx.delivery.availabilityLink */
      /*
      var availabilityLinks = this.parentCtrl.parentCtrl.pnx.delivery.availabilityLink;
      availabilityLinks.forEach( function(availabilityLink) {
        if ( availabilityLink.availabilityLinkUrl.includes('KUL') ){
          console.log ('CONATINS WRONG !!!!!!!!!!!!!!!!!!!!!')
          containsWrongVid =true;
        }
        var url = availabilityLink.availabilityLinkUrl.replace(/KUL/i, "PRIMO");
        availabilityLink.availabilityLinkUrl = url;
      });
      */

      console.log ( this.parentCtrl.parentCtrl.getLink() );
      /* recompile parent if necessary */      
      /*
      var parent = this.$element.parent().parent()
      var pinjector = parent.injector();
      if ( containsWrongVid ) {
        pinjector.invoke( function($compile){ $compile(parent)( parent.scope() ) }) // CAN CREATES A LOOP !!!!!!!!!!!!!!!!
      }
      */
    }
  }
}

ExperimentController.$inject = ['$scope', '$element', '$compile','$injector','$rootScope']

export let experimentConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: ExperimentController,
  template: ''
}
