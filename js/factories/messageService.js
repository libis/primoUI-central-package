import messageServiceHTML from './messageService.html'

export default class MessageService {
  constructor($rootScope, $compile, $mdToast, $sce, $translate, $timeout) {
    this.mdToast = $mdToast;
    this.sce = $sce;
    this.translate = $translate;
    this.timeout = $timeout;
    this.compile = $compile;
    this.rootScope = $rootScope;

    // this.messageServiceEventHandler = this.rootScope.$on('$translateLoadingEnd', (event) => {
       // console.log("=========> translation loaded <==========");
    // });
  }

  show(message = '', options = {}) {
    let self = this;
    let scope = options.scope || null;
    let hideDelay = options.hideDelay || 0;
    let action = options.action || null;
    let actionLabel = options.actionLabel || 'unknown';
    let messageKey = 'lbs.generalMessage';

    if (message.length > 0) {
      self.__show({
        message: message,
        scope: scope,
        hideDelay: hideDelay,
        action: action,
        actionLabel: actionLabel
      });      
    }

    self.translate(messageKey).then((m) => {
      message = (m == messageKey || m <= 1) ? '' : m;

      self.__show({
        message: message,
        scope: scope,
        hideDelay: hideDelay,
        action: action,
        actionLabel: actionLabel
      });
    });
  }

  __show(options = {}) {
    let self = this;
    let scope = options.scope;
    let hideDelay = options.hideDelay;
    let action = options.action;
    let actionLabel = options.actionLabel;
    let message = options.message;

    // if (message.length == 0) {
    //   // code table entries can not have empty descriptions.
    //   // message <= 1 will not be displayed!!!!
    //   let messageKey = 'lbs.generalMessage';
    //   message = self.translate.instant(messageKey);
    //   message = (message == messageKey || message <= 1) ? '' : message;
    // }

    if (message.length > 0) {
      let toastConfig = {
        parent: document.body,
        controllerAs: 'ctrl',
        controller: function() {
          this.actionLabel = actionLabel;

          this.onClose = () => {
            self.mdToast.hide();
          };

          if (action) {
            this.onAction = ($event = null) => {
              action.call(this);
              self.mdToast.hide();
            }
          }

          if (scope) {
            //this.message = self.sce.trustAsHtml(self.compile(`<span>${message}</span>`)(self.rootScope).html());
            this.message = self.sce.trustAsHtml(self.compile(`<span>${message}</span>`)(scope).html());
          } else {
            this.message = self.sce.trustAsHtml(message);
          }

        },
        template: messageServiceHTML,
        position: 'top center',
        hideDelay: hideDelay
      }

      self.mdToast.show(toastConfig);
    } else {
      console.log('No message to display');
    }
  }

}

MessageService.$inject = ['$rootScope', '$compile', '$mdToast', '$sce', '$translate', '$timeout'];
