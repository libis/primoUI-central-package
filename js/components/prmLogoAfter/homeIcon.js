import homeIconHTML from './homeIcon.html'

class HomeIconController {
  constructor($scope, $element, $compile, $http) {
    let ctrl = this;
    ctrl.linktype = 'homeIcon';

    Primo.view.then((view) => {
      let vid = view.code;
      if ( vid == "ECB" ){
        ctrl.linktype = "newSearchButton";
      }
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

      $scope.removeStickyFacets = function () {
        var stickyFacets = $scope.$parent.$parent.$parent.$parent.$ctrl.searchService.facetService.getStickyFacets();
        for (var i = 0; i < stickyFacets.length; i++) {
          $scope.$parent.$parent.$parent.$parent.$ctrl.searchService.facetService.removeStickyFacet(stickyFacets[i]);
        }
      }
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