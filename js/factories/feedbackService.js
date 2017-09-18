import feedbackServiceHTML from './feedbackService.html'

class DialogController {
  constructor($scope, $mdDialog, $http, feedbackServiceURL) {
    this.scope = $scope;
    this.mdDialog = $mdDialog;
    this.http = $http;
    this.feedbackServiceURL = feedbackServiceURL;

    let self = this;

    Primo.user.then(user => {
      self.user = user;
      Primo.view.then(view => {
        self.view = view;
        self.feedback = {
          replyTo: self.user.email,
          message: '',
          subject: 'feedback'
        }
      });
    });
  }

  cancelFeedback() {
    this.mdDialog.cancel();
  }

  sendFeedback(answer) {
    let self = this;

    Primo.user.then(user => {
      self.user = user;
      Primo.view.then(view => {
        self.view = view;

        let data = {
          subject: self.feedback.subject,
          view: self.view.code,
          inst: self.view.institution.code,
          loggedIn: self.user.isLoggedIn(),
          onCampus: self.user.isOnCampus(),
          user: self.user.name,
          ip: self.view.ip.address,
          type: 'feedback',
          feedback: self.feedback.message,
          email: self.feedback.replyTo || self.user.email,
          userAgent: navigator.userAgent
        };
        if (self.feedback.replyTo.length > 0 && self.feedback.message.length > 0) {
          self.mdDialog.hide();

          self.http({
            method: 'POST',
            url: this.feedbackServiceURL,
            headers: {
              'Content-Type': 'application/json',
              'X-From-ExL-API-Gateway': undefined
            },
            cache: false,
            data: data
          }).then(function(response) {
            self.mdToast.showSimple('Thank you for your feedback!');
          }, function(response) {
            self.mdToast.showSimple('Unable to submit feedback.');
          });
        }
      });
    });
  }
}

DialogController.$inject = ['$scope', '$mdDialog', '$http', 'feedbackServiceURL'];


export default class FeedbackService {
  constructor($mdDialog) {
    this.mdDialog = $mdDialog;
  }

  show($event = null, feedbackDialogHTML = null, data = {}) {    
    let self = this;
    if (feedbackDialogHTML == null) {
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
