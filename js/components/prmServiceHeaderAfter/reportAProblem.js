import reportAProblemHTML from './reportAProblem.html'
import reportAProblemDialogHTML from './reportAProblemDialog.html'

class ReportAProblemController {
  constructor($element, $compile, $scope, $mdDialog, $mdToast, $http,reportAProblemURL) {
    let self = this;
    if (/^nui\.getit\./.test(this.parentCtrl.parentCtrl.title)) {
      $element.parent().parent().find('h4').after($compile(reportAProblemHTML)($scope));

      let recordData = self.currentRecord;

      Primo.user.then(user => {
        self.user = user;
        Primo.view.then(view => {
          self.view = view;

          self.showReportAProblemForm = ($event) => {
            $mdDialog.show({
              parent: angular.element(document.body),
              clickOutsideToClose: true,
              fullscreen: false,
              targetEvent: $event,
              template: reportAProblemDialogHTML,
              controller: function($scope, $mdDialog) {
                $scope.report = {
                  replyTo: self.user.email,
                  message: '',
                  subject: 'report a problem'
                }
                $scope.cancelReport = function() {
                  $mdDialog.cancel();
                }
                $scope.sendReport = function(answer) {
                  let data = {
                    recordId: recordData.pnx.control.recordid[0],
                    index: 0,
                    page: 0,
                    scope: '',
                    query: '',
                    searchType: '',
                    sessionId: user.id,
                    tab: '',
                    title: recordData.pnx.display.title[0],
                    type: 'resource_problem',
                    subject: $scope.report.subject,
                    view: self.view.code,
                    inst: self.view.institution.code,
                    loggedIn: self.user.isLoggedIn(),
                    onCampus: self.user.isOnCampus(),
                    user: self.user.name,
                    fe: '',
                    ip: self.view.ip.address,
                    message: $scope.report.message,
                    replyTo: $scope.report.replyTo || self.user.email,
                    userAgent: navigator.userAgent
                  };
                  if ($scope.report.replyTo.length > 0 && $scope.report.message.length > 0) {
                    $mdDialog.hide();

                    $http({
                      method: 'POST',
                      url: reportAProblemURL,
                      headers: {
                        'Content-Type': 'application/json',
                        'X-From-ExL-API-Gateway': undefined
                      },
                      cache: false,
                      data: data
                    }).then(function(response) {
                      let message = self.translate.instant('lbs.nui.feedback.success') || 'Thank you for your feedback!';
                      MessageService.show(message, {scope:$scope, hideDelay: 5000});
                    }, function(response) {
                      let message = self.translate.instant('lbs.nui.feedback.fail') || 'Unable to submit feedback.';
                      MessageService.show(message, {scope:$scope, hideDelay: 5000});                      
                    });
                  }
                }
              }
            });
          }; //showReportAProblemForm
        });
      });
    }
  }

  get currentRecord() {
    let selector = 'prm-full-view-service-container'; //'prm-full-view-service-container'
    let element = angular.element(document.querySelector(selector));
    if (element) {
      let elementCtrl = element.controller(selector);
     // console.log(elementCtrl);
      return elementCtrl.item;
    }
    return null;
  }
}

ReportAProblemController.$inject = ['$element', '$compile', '$scope', '$mdDialog', '$mdToast', '$http','reportAProblemURL'];

export let reportAProblemConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: ReportAProblemController,
  template: ''
}
