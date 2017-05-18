app.component('prmFinesOverviewAfter', {
    bindings: {
        parentCtrl: '<'
    },
    templateUrl: 'pay_my_fines.html',
    controller: function() {
      var self = this;
      this.showPayMyFines = false;

      this.$onInit = () => {
        Primo.view.then(view => {
          if (/^KULeuven/.test(view.code)) {
            Primo.user.then(user => {
              console.log(user);
              if (user.fines.length > 0) {
                  this.showPayMyFines = true;
              }
            });
          }
        });
      }
    }
  });
