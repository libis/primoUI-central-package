class FinesMessageController {
  constructor(MessageService, $translate, $rootScope) {
    let self = this;
    Primo.user.then(user => {
      self.user = user;
      if (user.fines.length > 0) {
        //TODO:extract html to its own file. find out how to resolve {{}}

        let message = $translate.instant('lbs.nui.youHaveFines');
        message = message.replace(/\$0/, user.fines.length);

        let pay = $translate.instant('lbs.nui.youHaveFines.pay');
        
        MessageService.show(`
            <span style="align-self:center;">${message}</span>
            <a style="background-color: tomato;color: white;"
               class="md-button md-raised md-secundary" target='_blank'
               href='https://services.libis.be/pay_my_fines'>${pay}</a>
          `);
      }
    });
  }
}

FinesMessageController.$inject = ['MessageService', '$translate', '$rootScope'];

export let finesMessageConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: FinesMessageController,
  template: ''
}
