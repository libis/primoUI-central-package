/* component to do all your experimental stuff */
/* [en|dis]able in components*/

class RecommendationItemController {
  constructor($scope, $element) {
    let self = this;
    this.$scope = $scope;
    this.$element = $element;
/*
    console.log(self)
    console.log( self.parentCtrl.parentCtrl.primolyticsService.configurationUtil.vid );
    console.log( self.parentCtrl.parentCtrl.primolyticsService.userSessionManagerService.vid );
    console.log( self.parentCtrl.parentCtrl.primolyticsService.userSessionManagerService.inst );
    console.log( self.parentCtrl.parentCtrl.primolyticsService.userSessionManagerService.userInstitution );
*/
    this.parentCtrl.parentCtrl.orgGetLink = this.parentCtrl.parentCtrl.getLink;
    this.parentCtrl.parentCtrl.getLink = function() { 
      var getItLink = self.parentCtrl.parentCtrl.orgGetLink();
      return getItLink.replace(/\/openurl\/[^/]*\/[^?]*/, "/openurl\/"+ self.parentCtrl.parentCtrl.primolyticsService.userSessionManagerService.userInstitution +"\/"+ self.parentCtrl.parentCtrl.primolyticsService.configurationUtil.vid) 
    } ;
  }
}

RecommendationItemController.$inject = ['$scope', '$element']

export let recommendationItemConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: RecommendationItemController,
  template: ''
}
