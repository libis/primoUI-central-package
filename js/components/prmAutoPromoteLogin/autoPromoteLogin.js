import autoLoginCheckboxHTML from './autoLoginCheckbox.html'

class AutoLoginCheckboxController {
  constructor($scope) {
    var self = this;
    /* Remove the localStorage parameter primoPromoteLogin if the url contains clearLogin */
    var url = window.location.href;
    var urlParam = "clearLogin";
    urlParam = urlParam.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + urlParam + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (results) {
      if (decodeURIComponent(results[2].replace(/\+/g, " "))) {
        localStorage.removeItem('primoPromoteLogin');
      }
    }

    self.alwaysSigninCheckBox = false;
    self.alwaysSignin = localStorage.getItem("primoPromoteLogin");
    if (self.alwaysSignin) {
      self.alwaysSigninCheckBox = true;
    }

    $scope.alwaysSigninChecked = function () {
      if (self.alwaysSigninCheckBox) {
        localStorage.setItem('primoPromoteLogin', 'alwaysSignin');
      } else {
        localStorage.removeItem('primoPromoteLogin');
      }
    };
  }
}

class PromoteLoginController {
  constructor($scope, $element, $mdDialog) {

    let self = this;
    let parentCtrl =  self.parentCtrl.parentCtrl
    //console.log (self)
    var locale = parentCtrl.primolyticsService.userSessionManagerService.i18nService.getLanguage();
   
    parentCtrl.primolyticsService.userSessionManagerService.signInObservable.subscribe(()=> {
      if (this.parentCtrl.parentCtrl.isLoggedIn  == true){
        $mdDialog.hide();
      }
    });


    $scope.primoPromoteLogin = '';
    $scope.showSignInPopup = function () {
        var parentEl = angular.element(document.body);

        $mdDialog.show({
            parent: parentEl,
            templateUrl: 'custom/CENTRAL_PACKAGE/html/templates/promote_login_' + locale + '.html',
            locals: {
                primoPromoteLogin:  $scope.primoPromoteLogin
            },
            controller: DialogController
        });

    }

    function DialogController($scope, $mdDialog) {
        $scope.loginDialog = function () {
            parentCtrl.loginService.handleLoginClick();
        };

        $scope.closeDialog = function () {
            $mdDialog.hide();
        };
        $scope.changePromoteOption = function () {
            if ($scope.primoPromoteLogin === 'neverSignin' || $scope.primoPromoteLogin === 'alwaysSignin') {
                localStorage.setItem('primoPromoteLogin', $scope.primoPromoteLogin);
            } else {
                localStorage.removeItem('primoPromoteLogin');
                //sessionStorage.setItem('primoPromoteLogin', $scope.primoPromoteLogin);
            }
        };
    }
  
    /* Ignore this in prm-login-alma-mashup, only if parent is prm-user-area*/
    if ( ($element.nativeElement).closest('prm-user-area') ) {
        if (!parentCtrl.isLoggedIn) {
            if (localStorage['primoPromoteLogin'] === 'alwaysSignin') {
                /* Sreiderict to login */;
                parentCtrl.loginService.handleLoginClick();
            } else {
                if (!sessionStorage['primoPromoteLogin'] && !localStorage['primoPromoteLogin']) {
                    $scope.showSignInPopup();
                    sessionStorage.setItem('primoPromoteLogin', 'SignInPopup');
                }
            }
        }
     }

  }
}

class AutoLoginController {
  constructor($element) {
    var self = this;
    let parentCtrl =  self.parentCtrl.parentCtrl
    // Ignore this in prm-login-alma-mashup, only if parent is prm-user-area
    if (($element.nativeElement).closest('prm-user-area')) {
        if (!parentCtrl.isLoggedIn) {
            var auth = window.appConfig.authentication[0];
            var loginUrl = parentCtrl.loginService.loginUrl(auth['profile-name'], auth['authentication-system']);
            document.location.href = loginUrl.replace(/institution=([^&])*/, "institution=KUL");
        }
    }
  }
}

export let autoLoginCheckboxConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: AutoLoginCheckboxController,
  template: autoLoginCheckboxHTML
}

export let promoteLoginConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: PromoteLoginController,
  template: ''
}


export let autoLoginConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: AutoLoginController,
  template: ''
}
