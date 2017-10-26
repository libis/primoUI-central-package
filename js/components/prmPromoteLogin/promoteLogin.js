import promoteLoginHTML from './promoteLoginConfig.html'

class PromoteLoginController {
  constructor($scope) {
    var self = this;
    this.showAutomaticLogin = false;  

    self.alwaysSigninCheckBox = false;
    self.alwaysSignin = localStorage.getItem("primoPromoteLogin");
    if (self.alwaysSignin) {
      self.alwaysSigninCheckBox = true;
    }

    $scope.alwaysSigninChecked = function() {
      if ( self.alwaysSigninCheckBox ){
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
    this.showAutomaticLogin = true;
  }
}

export let promoteLoginConfig = {
  bindings:{
    parentCtrl: '<'
  },
  controller: PromoteLoginController,
  template: promoteLoginHTML
}
