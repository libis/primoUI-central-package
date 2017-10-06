import feedbackAnnouncementHTML from './feedbackAnnouncement.html'
import feedbackAnnouncementDialogHTML from './feedbackAnnouncementDialog.html'
import feedbackAnnouncementDialogController from './feedbackAnnouncementDialog'

class FeedbackAnnouncementController {
  constructor($scope, FeedbackService, MessageService, actionIcons) {
    MessageService.show(feedbackAnnouncementHTML,
                        {scope: $scope, hideDelay:0, actionLabel:'Feedback', action:
                          ($event) => {
                            FeedbackService.show($event, feedbackAnnouncementDialogHTML, feedbackAnnouncementDialogController);
                          }
                        }
                       );
  }
}

FeedbackAnnouncementController.$inject = ['$scope', 'FeedbackService', 'MessageService', 'actionIcons'];

export let feedbackAnnouncementConfig = {
  bindings: {parentCtrl: '<'},
  controller: FeedbackAnnouncementController,
  template: ''
}
