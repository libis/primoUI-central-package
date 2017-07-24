import payMyFinesHTML from './payMyFines.html'

class PayMyFinesController {
  constructor() {
    var self = this;
    this.showPayMyFines = false;
  }

  $onInit() {
    Primo.view.then(view => {
      if (/^KULeuven/.test(view.code)) {
        Primo.user.then(user => {
          if (user.fines.length > 0) {
            this.showPayMyFines = true;
          }
        });
      }
    });
  }
}


export let payMyFinesConfig = {
  bindings:{
    parentCtrl: '<'
  },
  controller: PayMyFinesController,
  template: payMyFinesHTML
}
