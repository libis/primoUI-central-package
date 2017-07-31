class GeneralMessageController {
  constructor(MessageService) {
    MessageService.show();
  }
}

GeneralMessageController.$inject = ['MessageService'];

export let generalMessageConfig = {
  bindings: {parentCtrl: '<'},
  controller: GeneralMessageController,
  template: ''
}
