export default class feedbackAnnouncementDialogController {
  constructor($scope, $mdDialog, $mdToast, $translate, $http, feedbackServiceURL, MessageService) {
    this.scope = $scope;
    this.mdDialog = $mdDialog;
    this.mdToast = $mdToast;
    this.http = $http;
    this.translate = $translate;
    this.feedbackServiceURL = feedbackServiceURL;

    let self = this;

    $scope.cancelFeedback = () => {
      this.mdDialog.cancel();
    }

    $scope.sendFeedback = (answer) => {
      let data = {
        subject: $scope.feedback.subject,
        view: self.view.code,
        inst: self.view.institution.code,
        loggedIn: self.user.isLoggedIn(),
        onCampus: self.user.isOnCampus(),
        user: self.user.name,
        ip: self.view.ip.address,
        type: 'survey',
        feedback: $scope.feedback.answers,
        email: $scope.feedback.replyTo || self.user.email,
        userId: self.user.id || '',
        userAgent: navigator.userAgent
      };

      if ($scope.feedback.replyTo.length > 0) {
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
          let message = self.translate.instant('lbs.nui.feedback.success') || 'Thank you for your feedback!';
          MessageService.show(message, {scope:$scope, hideDelay: 5000});
          //self.mdToast.showSimple('Thank you for your feedback!');
        }, function(response) {
          let message = self.translate.instant('lbs.nui.feedback.fail') || 'Unable to submit feedback.';
          MessageService.show(message, {scope:$scope, hideDelay: 5000});
          //self.mdToast.showSimple('Unable to submit feedback.');
        });
      }
    }

    Primo.user.then(user => {
      self.user = user;
      Primo.view.then(view => {
        self.view = view;
        $scope.feedback = {
          replyTo: self.user.email,
          answers: [],
          subject: 'feedback'
        }
      });
    });
  }
}

feedbackAnnouncementDialogController.$inject = ['$scope', '$mdDialog', '$mdToast', '$http', 'feedbackServiceURL', 'MessageService'];
