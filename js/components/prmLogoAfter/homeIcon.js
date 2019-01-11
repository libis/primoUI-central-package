import homeIconHTML from './homeIcon.html'

class HomeIconController {
  constructor($scope, $element, $compile, $http, $rootScope) {
    let self = this;
    self.scope = $scope;
    self.rootScope = $rootScope;
    self.linktype = 'homeIcon';

    Primo.view.then((view) => {
      let vid = view.code;
      if (vid == "ECB") {
        self.linktype = "newSearchButton";
      }
      let locale = view.interfaceLanguage; //window.Primo.explore.helper.userSessionManagerService().i18nService.getLanguage();

      let libraryLogo = window.appConfig.customization.libraryLogo;
      let localeLibraryLogo = 'custom/' + vid + '/img/library-logo-' + locale + '.png';

      if (libraryLogo !== localeLibraryLogo) {
        $http({
          method: 'GET',
          url: localeLibraryLogo,
        }).then(
          function (response) {
            window.appConfig.customization.libraryLogo = localeLibraryLogo;
            $compile($element.parent().parent())($scope);
          }, function (error) {
            window.appConfig.customization.libraryLogo = libraryLogo;
          }
        );
      }
      self.homePageLink = '/primo-explore/search?vid=' + vid + "&lang=" + locale;

      $scope.removeStickyFacets = function () {
        var facets = Primo.explore.components.get('prm-facet');
        if (facets) {
          var stickyFacets = facets[0].ctrl().facetService.getStickyFacets()
          for (var i = 0; i < stickyFacets.length; i++) {
            facets[0].ctrl().facetService.removeStickyFacet(stickyFacets[i]);
          }
        }
      }
    });
  }
}

HomeIconController.$inject = ['$scope', '$element', '$compile', '$http', '$rootScope'];

export let homeIconConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: HomeIconController,
  template: homeIconHTML
}