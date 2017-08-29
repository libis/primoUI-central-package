import promoteLoginHTML from './promoteLoginConfig.html'

class PromoteLoginController {
  constructor($scope) {
    var self = this;
    this.showAutomaticLogin = false;  

    this.alwaysSignin = localStorage.getItem("primoPromoteLogin");
    this.alwaysSigninCheckBox = true;
    $scope.alwaysSigninChecked = function() {
      if ( this.alwaysSigninCheckBox ){
        localStorage.setItem('primoPromoteLogin', 'alwaysSignin');
      } else {
        localStorage.removeItem('primoPromoteLogin');
      }
    };
  }

  $onInit() {
    Primo.view.then(view => {
      if (/^KULeuven/.test(view.code)) {
        Primo.user.then(user => {
            this.showAutomaticLogin = true;
        });
      }
    });
  }
}

export let promoteLoginConfig = {
  bindings:{
    parentCtrl: '<'
  },
  controller: PromoteLoginController,
  template: promoteLoginHTML
}
