class FinesMessageController{
  constructor(MessageService) {
    let self = this;
    Primo.user.then(user => {
      self.user = user;
      if (user.fines.length > 0){
        //TODO:extract html to its own file. find out how to resolve {{}}
        MessageService.show(`
          <span style="align-self:center;">You have ${user.fines.length} unpayed fine(s).</span>
          <a style="background-color: tomato;color: white;" class="md-button md-raised md-secundary" target='_blank' href='https://services.libis.be/pay_my_fines'>Pay fine(s)</a>
        `);

      }
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
