import messageServiceHTML from './messageService.html'

export default class MessageService {
  constructor($mdToast, $sce, $translate, $timeout) {
    this.mdToast = $mdToast;
    this.sce = $sce;
    this.translate = $translate;
    this.timeout = $timeout;
  }

  show(message = '', hideDelay = 0) {
    let self = this;

    this.timeout(function(){
    if (message.length == 0) {
      // code table entries can not have empty descriptions.
      // message <= 1 will not be displayed!!!!
      let messageKey = 'lbs.generalMessage';
      message = self.translate.instant(messageKey);
      message = (message == messageKey || message <= 1) ? '' : message;
    }

    if (message.length > 0) {
      let toastConfig = {
        parent: document.body,
        controllerAs: 'ctrl',
        controller: function() {
          this.onClose = () => {
            self.mdToast.hide();
          };

          this.message = self.sce.trustAsHtml(message);
        },
        template: messageServiceHTML,
        position: 'top center',
        hideDelay: hideDelay
      }

      self.mdToast.show(toastConfig);
    } else {
      console.log('No message to display');
    }
  }, 2000);
  }

}

MessageService.$inject = ['$mdToast', '$sce', '$translate', '$timeout'];
