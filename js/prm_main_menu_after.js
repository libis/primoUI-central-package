app.component('prmMainMenuAfter', {
    bindings: {
        parentCtrl: '<'
    },
    templateUrl: 'main_menu_after.html',
    controller: function($mdDialog, $mdToast, $http) {
        let self = this;

        this.$onInit = function() {
            if (typeof feedbackServiceURL === 'undefined') {
                self.showFeedbackForm = function() {
                    alert('Please set the "feedbackServiceURL" variable');
                }
            } else {
                Primo.user.then(user => {
                    self.user = user;
                    Primo.view.then(view => {
                      self.view = view;
                      self.showFeedbackForm = showFeedbackForm;
                    });
                });
            }
        }

        let showFeedbackForm = function($event) {
            $mdDialog.show({
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: false,
                targetEvent: $event,
                templateUrl: 'feedback.html',
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
        }
    }
});
