class AnnouncementsController {
  constructor(MessageService) {
    MessageService.show();
  }
}

AnnouncementsController.$inject = ['MessageService'];

export let announcementsConfig = {
  bindings: {parentCtrl: '<'},
  controller: AnnouncementsController,
  template: ''
}
