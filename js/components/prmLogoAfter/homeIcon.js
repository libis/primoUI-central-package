import homeIconHTML from './homeIcon.html'

class HomeIconController {
  constructor($scope, $element, $compile, $http) {
    let ctrl = this;

    Primo.view.then((view) => {
      let vid = view.code;
      let locale = view.interfaceLanguage; //window.Primo.explore.helper.userSessionManagerService().i18nService.getLanguage();

      let libraryLogo = window.appConfig.customization.libraryLogo;
      let localeLibraryLogo = 'custom/' + vid + '/img/library-logo-' + locale + '.png';

      if (libraryLogo !== localeLibraryLogo) {
        $http({
          method: 'GET',
          url: localeLibraryLogo,
        }).then(function(response) {
          window.appConfig.customization.libraryLogo = localeLibraryLogo;
          $compile($element.parent().parent())($scope);
        }, function(response) {
          window.appConfig.customization.libraryLogo = libraryLogo;
        });

      }

      ctrl.homePageLink = '/primo-explore/search?vid=' + vid + "&lang=" + locale;
    });
  }
}

HomeIconController.$inject = ['$scope', '$element', '$compile', '$http'];

export let homeIconConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: HomeIconController,
  template: homeIconHTML
}