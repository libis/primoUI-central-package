import viewLogoHTML from './viewLogo.html'

class ViewLogoController {
  constructor($scope, $translate, $element, $compile, $http, $rootScope) {
    let self = this;
    self.scope = $scope;
    self.rootScope = $rootScope;
    //$element.parent().parent()[0].firstChild.parentNode.removeChild($element.parent().parent()[0].firstChild);

    Primo.view.then((view) => {
      //let vid = view.code;
      let vid = window.appConfig.vid;
      let locale = view.interfaceLanguage;

      let localeLibraryLogo = 'custom/' + vid + '/img/library-logo-' + locale + '.png';
      $translate('limo.instituteUrl').then(
        (instituteUrl) => {
          if (instituteUrl == 'http://www.libis.be/') {
            self.homePageLink = '/primo-explore/search?vid=' + vid + "&lang=" + locale;
          } else {
            self.homePageLink = instituteUrl
          }
        });
      self.localeLibraryLogo = window.appConfig.customization.libraryLogo;

      if (self.localeLibraryLogo !== localeLibraryLogo) {
        $http({
          method: 'GET',
          url: localeLibraryLogo,
        }).then(function (response) {
          window.appConfig.customization.libraryLogo = localeLibraryLogo;
          self.localeLibraryLogo = localeLibraryLogo
        }, function (error) {
          self.localeLibraryLogo;
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
