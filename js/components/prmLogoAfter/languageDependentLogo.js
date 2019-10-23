class LanguageDependentLogoController {
  constructor($scope, $element, $compile, $http, $rootScope) {
    let self = this;
    self.scope = $scope;
    self.rootScope = $rootScope;

    Primo.view.then((view) => {
      //let vid = view.code;
      let vid =  window.appConfig.vid;

      let locale = view.interfaceLanguage; //window.Primo.explore.helper.userSessionManagerService().i18nService.getLanguage();

      let libraryLogo = window.appConfig.customization.libraryLogo;
      let localeLibraryLogo = 'custom/' + vid + '/img/library-logo-' + locale + '.png';

      if (libraryLogo !== localeLibraryLogo) {
        $http({
          method: 'GET',
          url: localeLibraryLogo,
        }).then(function (response) {
          window.appConfig.customization.libraryLogo = localeLibraryLogo;
          $compile($element.parent().parent())($scope);
        }, function (response) {
          window.appConfig.customization.libraryLogo = libraryLogo;
        });

      }
    });
  }
}

LanguageDependentLogoController.$inject = ['$scope', '$element', '$compile', '$http', '$rootScope'];

export let languageDependentLogoConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: LanguageDependentLogoController,
  template: ''
}