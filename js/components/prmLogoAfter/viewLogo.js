import viewLogoHTML from './viewLogo.html'

class ViewLogoController {
  constructor($scope, $translate, $element, $compile, $http, $rootScope) {
    let self = this;
    self.scope = $scope;
    self.rootScope = $rootScope;
    $element.parent().parent()[0].firstChild.remove()

    $translate('limo.instituteUrl').then(
    (message) => {
      self.homePageLink = message
    });

    Primo.view.then((view) => {
      let vid = view.code;
      let locale = view.interfaceLanguage; //window.Primo.explore.helper.userSessionManagerService().i18nService.getLanguage();
      let localeLibraryLogo = 'custom/' + vid + '/img/library-logo-' + locale + '.png';
      self.homePageLink = '/primo-explore/search?vid=' + vid + "&lang=" + locale;
      self.localeLibraryLogo = window.appConfig.customization.libraryLogo;

       if ( self.localeLibraryLog !== localeLibraryLogo) {
        $http({
          method: 'GET',
          url: localeLibraryLogo,
        }).then(function (response) {
          window.appConfig.customization.libraryLogo = localeLibraryLogo;
          self.localeLibraryLogo =  localeLibraryLogo
        });
      }
    });
  }
}

ViewLogoController.$inject = ['$scope', '$translate', '$element', '$compile', '$http', '$rootScope'];

export let viewLogoConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: ViewLogoController,
  template: viewLogoHTML
}