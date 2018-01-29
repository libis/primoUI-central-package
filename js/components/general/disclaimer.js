import disclaimerDialogHTML from '../../../html/templates/disclaimerDialog.html'
import disclaimerLinkHTML from 'disclaimer.html'

class disclaimerController {
  constructor($scope, $http, $mdDialog) {
    let self = this;

    Primo.view.then(view => {
      let locale = view.interfaceLanguage;
      let vid = view.code;

      let locale_text = {
        'nl_BE': {
          'title': 'Cookiebeleid',
          'title_label': "Cookiebeleid"
        },
        'en_US': {
          'title': 'Cookie Policy',
          'title_label': "Cookie Policy"
        },
        'fr_FR': {
          'title': 'Cookie Policy',
          'title_label': "Cookie Policy"
        },
      }

      let disclaimerDialog = disclaimerDialogHTML;
      /*
      switch (locale) {
        case 'fr_FR':
        disclaimerDialog = disclaimerDialog_frFR_HTML;
          break;
        case 'nl_BE':
        disclaimerDialog = disclaimerDialog_nlBE_HTML;
          break;
        default:
        disclaimerDialog = disclaimerDialog_enUS_HTML;
      }
*/
      $scope.title = locale_text[locale]['title'];
      $scope.title_label = locale_text[locale]['title_label'];

      $scope.showDisclaimerDialog = function($event) {
        let parentEl = angular.element(document.body);
        $mdDialog.show({
          parent: parentEl,
          targetEvent: $event,
          template: disclaimerDialog,
          locals: {
            items: $scope.items
          },
          controller: DialogController
        });
      }

      function DialogController($scope, $mdDialog, items) {
        $scope.items = items;
        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
      }
    });
  }
}

disclaimerController.$inject = ['$scope', '$http', '$mdDialog']

export let disclaimerConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: disclaimerController,
  template: disclaimerLinkHTML
}
