import newSearchButtonHTML from './newSearchButton.html'

class NewSearchButtonController {
  constructor($scope, $element, $compile, $http, $rootScope) {
    let self = this;
    self.scope = $scope;
    self.rootScope = $rootScope;
    $element.parent().parent().prepend($compile(newSearchButtonHTML)($scope));

    Primo.view.then((view) => {
      let vid = view.code;
      if (vid == "ECB") {
        self.linktype = "newSearchButton";
      }
      let locale = view.interfaceLanguage; //window.Primo.explore.helper.userSessionManagerService().i18nService.getLanguage();

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

NewSearchButtonController.$inject = ['$scope', '$element', '$compile', '$http', '$rootScope'];

export let newSearchButtonConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: NewSearchButtonController,
  template: ''
}