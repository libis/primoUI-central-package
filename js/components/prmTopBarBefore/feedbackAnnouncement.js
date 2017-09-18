import feedbackAnnouncementHTML from './feedbackAnnouncement.html'
import feedbackAnnouncementDialogHTML from './feedbackAnnouncementDialog.html'

class FeedbackAnnouncementController {
  constructor($scope, FeedbackService, MessageService, actionIcons) {
    MessageService.show(feedbackAnnouncementHTML,
                        {scope: $scope, hideDelay:0, actionLabel:'Feedback', action:
                          ($event) => {
                            FeedbackService.show($event, feedbackAnnouncementDialogHTML);
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
