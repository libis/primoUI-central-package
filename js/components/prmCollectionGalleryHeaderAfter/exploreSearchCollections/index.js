import searchCollectionsHTML from './html/search-collections.html'

class SearchCollectionsController {
  constructor($scope) {
    let self = this;
    //might be needed after next release
    /*self.$scope = $scope;
    this.isGalleryLobby= this.parentCtrl.parentCtrl.isGalleryLobby;
    this.getCollection = this.getCollection;*/
  }

  $onInit() {

  }

  /*getCollection() {
    if(!this.isGalleryLobby && this.parentCtrl.parentCtrl.currentCollection != undefined){
      return this.parentCtrl.parentCtrl.currentCollection.name;
    }
  };*/

}

SearchCollectionsController.$inject = ['$scope'];

export let searchCollectionsConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: SearchCollectionsController,
  template: searchCollectionsHTML
}
