import feedbackServiceHTML from './feedbackService.html'
import DialogController from '../components/general/dialog'


export default class FeedbackService {
  constructor($mdDialog) {
    this.mdDialog = $mdDialog;
  }

  show($event = null, feedbackDialogHTML = null, data = {}) {
    let self = this;
    if (feedbackDialogHTML == null) {
      console.log('default dialog instantiated');
      feedbackDialogHTML = feedbackServiceHTML;
    }

    this.mdDialog.show({
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: false,
      targetEvent: $event,
      template: feedbackDialogHTML,
      controller: DialogController
    });
  }
}

FeedbackService.$inject = ['$mdDialog'];
