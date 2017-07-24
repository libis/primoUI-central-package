import messageServiceHTML from './messageService.html'

export let messageService = ['$mdToast', '$sce', ($mdToast, $sce) => {
  return {
    show: (message, hideDelay = 0) => {
      let toastConfig = {
        controllerAs: 'ctrl',
        controller: function() {
          this.onClose = () => {
            $mdToast.hide();
          };

          this.message = $sce.trustAsHtml(message);
        },
        template: messageServiceHTML,
        position: 'top center',
        hideDelay: hideDelay
      }

      console.log(toastConfig);

      return $mdToast.show(toastConfig);
    }
  }
}];
