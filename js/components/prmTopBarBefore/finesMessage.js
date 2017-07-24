class FinesMessageController{
  constructor(MessageService) {
    let self = this;
    Primo.user.then(user => {
      self.user = user;
      //TODO:extract html to its own file. find out how to resolve {{}}
      MessageService.show(`
        <span style="align-self:center;">You have ${user.fines.length} unpayed fine(s).</span>
        <a id='payFinesNow' class="md-button md-raised md-secundary" target='_blank' href='https://services.libis.be/pay_my_fines'>Pay fine(s)</a>
      `);
    });
  }
}

FinesMessageController.$inject = ['MessageService'];

export let finesMessageConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: FinesMessageController,
  template:''
}
