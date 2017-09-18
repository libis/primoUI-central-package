export default class DialogController {
  constructor($scope, $mdDialog, $http, feedbackServiceURL) {
    this.scope = $scope;
    this.mdDialog = $mdDialog;
    this.http = $http;
    this.feedbackServiceURL = feedbackServiceURL;

    let self = this;

    $scope.cancelFeedback = () => {
      this.mdDialog.cancel();
    }



    $scope.sendFeedback = this.sendFeedback;
    $scope.sendFeedback = (answer) => {
      let self = this;

      Primo.user.then(user => {
        self.user = user;
        Primo.view.then(view => {
          self.view = view;

          let data = {
            subject: $scope.feedback.subject,
            view: self.view.code,
            inst: self.view.institution.code,
            loggedIn: self.user.isLoggedIn(),
            onCampus: self.user.isOnCampus(),
            user: self.user.name,
            ip: self.view.ip.address,
            type: 'feedback',
            feedback: $scope.feedback.message,
            email: $scope.feedback.replyTo || self.user.email,
            userAgent: navigator.userAgent
          };
          if ($scope.feedback.replyTo.length > 0 && $scope.feedback.message.length > 0) {
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

    Primo.user.then(user => {
      self.user = user;
      Primo.view.then(view => {
        self.view = view;
        $scope.feedback = {
          replyTo: self.user.email,
          message: '',
          subject: 'feedback'
        }
      });
    });
  }

}

DialogController.$inject = ['$scope', '$mdDialog', '$http', 'feedbackServiceURL'];
