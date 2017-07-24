import feedbackHTML from './feedback.html'
import feedbackDialogHTML from './feedbackDialog.html'

//TODO:Separate feedbackDialogController
class FeedbackController {
  constructor($element, $compile, $scope, $mdDialog, $mdToast, $http, feedbackServiceURL) {
    let self = this;

    self.$element = $element;
    self.$compile = $compile;
    self.$scope = $scope;

    $element.parent().parent().find('div').append($compile(feedbackHTML)($scope));

    if (typeof feedbackServiceURL === 'undefined') {
      this.showFeedbackForm = function() {
        alert('Please set the "feedbackServiceURL" variable');
      }
    } else {
      Primo.user.then(user => {
        self.user = user;
        Primo.view.then(view => {
          self.view = view;
          self.showFeedbackForm = ($event) => {
            $mdDialog.show({
              parent: angular.element(document.body),
              clickOutsideToClose: true,
              fullscreen: false,
              targetEvent: $event,
              template: feedbackDialogHTML,
              controller: function($scope, $mdDialog) {
                $scope.feedback = {
                  replyTo: self.user.email,
                  message: '',
                  subject: 'feedback'
                }
                $scope.cancelFeedback = function() {
                  $mdDialog.cancel();
                }
                $scope.sendFeedback = function(answer) {
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
                    $mdDialog.hide();

                    $http({
                      method: 'POST',
                      url: feedbackServiceURL,
                      headers: {
                        'Content-Type': 'application/json',
                        'X-From-ExL-API-Gateway': undefined
                      },
                      cache: false,
                      data: data
                    }).then(function(response) {
                      $mdToast.showSimple('Thank you for your feedback!');
                    }, function(response) {
                      $mdToast.showSimple('Unable to submit feedback.');
                    });
                  }
                }
              }
            });
          };
        });
      });
    }
  }

//  $onInit(){
//    this.$element.parent().find('div').append(this.$compile(feedbackDialogHTML)(this.$scope));
//  }
}

FeedbackController.$inject = ['$element', '$compile', '$scope', '$mdDialog', '$mdToast', '$http', 'feedbackServiceURL'];

export let feedbackConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: FeedbackController,
  template: ''
}
