class AnnouncementsController {
  constructor($scope, MessageService) {
    MessageService.show('', $scope);
  }
}

AnnouncementsController.$inject = ['$scope', 'MessageService'];

export let announcementsConfig = {
  bindings: {parentCtrl: '<'},
  controller: AnnouncementsController,
  template: ''
}
