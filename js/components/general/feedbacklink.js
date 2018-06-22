import feedbackHTML from '../../../html/templates/feedbacklink.html'
import feedbackDialogHTML from '../prmMainMenuAfter/feedbackDialog.html'

class FeedbackLinkController {
  constructor($element, $compile, $scope, FeedbackService){
    let scope = $scope;
    var templateUrl = 'custom/CENTRAL_PACKAGE/html/templates/feedbacklink.html';

    if ($scope.$ctrl.linktemplate) {
      templateUrl = $scope.$ctrl.linktemplate;
    }

    $scope.getTemplateUrl = function () {
      return templateUrl;
    }
    this.feedbackService = FeedbackService;
  }

  showFeedbackForm($event) {
    this.feedbackService.show($event, feedbackDialogHTML);
  }

}

FeedbackLinkController.$inject = ['$element', '$compile', '$scope', 'FeedbackService'];

export let feedbackLinkConfig = {
  bindings: {
    parentCtrl: '<',
    linktemplate: '@'
  },
  controller: FeedbackLinkController,
  template: '<ng-include src="getTemplateUrl()"/>'
}
