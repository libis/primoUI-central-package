import feedbackHTML from './feedback.html'
import feedbackDialogHTML from './feedbackDialog.html'

class FeedbackController {
  constructor(FeedbackService){
    this.feedbackService = FeedbackService;
  }

  showFeedbackForm($event) {
    this.feedbackService.show($event, feedbackDialogHTML);
  }

}

FeedbackController.$inject = ['FeedbackService'];

export let feedbackConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: FeedbackController,
  template: feedbackHTML
}
