import feedbackAnnouncementHTML from './feedbackAnnouncement.html'
import feedbackAnnouncementDialogHTML from './feedbackAnnouncementDialog.html'
import feedbackAnnouncementDialogController from './feedbackAnnouncementDialog'

class FeedbackAnnouncementController {
  constructor($scope, $translate, $timeout, FeedbackService, MessageService, actionIcons) {

    $timeout(() => {
      let message = $translate.instant('lbs.nui.survey.announcement');

      MessageService.show(feedbackAnnouncementHTML.replace('{{message}}', message), {
        scope: $scope,
        hideDelay: 0,
        actionLabel: $translate.instant('mainmenu.label.feedback') || 'Feedback',
        action:
          ($event) => {
            FeedbackService.show($event, feedbackAnnouncementDialogHTML, feedbackAnnouncementDialogController);
          }
      });
    }, 2000);

  }
}

FeedbackAnnouncementController.$inject = ['$scope', '$translate', '$timeout', 'FeedbackService', 'MessageService', 'actionIcons'];

export let feedbackAnnouncementConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: FeedbackAnnouncementController,
  template: ''
}
