import databaseLinkHTML from './databaseLink.html'

class DatabaseLinkController {
  constructor($scope, $http, $mdDialog) {
    let self = this;
    $scope.title = 'databases';
    $scope.title_label = 'search databases';
    $scope.databaseLink = function() {
        console.log("--------------database")
        console.log($scope);
        console.log($scope.$parent.$parent.$parent.$parent.$ctrl)

        var databaseFacet = {
            "name":"rtype",
            "type":"include",
            "value":"databases",
            "displayValue":"databases",
            "displayedType":"exact",
            "label":"Databanken",
            "isMultiFacet":false,
            "tooltip":"Verwijder Type bron Databanken",
            "$$hashKey":"object:2808"
        }
        console.log( $scope.$parent.$parent.$parent.$parent.$ctrl.searchStateService.searchObject )

        /********************************************** */
        https://github.com/mehmetc/primo-explore-collection-viewer/blob/master/js/ng-primo.js
        /********************************************** */

        $scope.$parent.$parent.$parent.$parent.$ctrl.searchService.setSortBy('title');
        $scope.$parent.$parent.$parent.$parent.$ctrl.searchService.facetService.addStickyFacet(databaseFacet);
        console.log( $scope.$parent.$parent.$parent.$parent.$ctrl.searchStateService.searchObject )
        $scope.$parent.$parent.$parent.$parent.$ctrl.searchService.search();
/*
        sessionStorage.setItem("stickyFacets",
       '[{"name":"rtype","type":"include","value":"databases","displayValue":"databases","displayedType":"exact","label":"Databanken","isMultiFacet":false,"tooltip":"Verwijder Type bron Databanken","$$hashKey":"object:2808","persistent":true,"operation":"add"}]');
       */
     //   document.location.href = "http://localhost:8003/primo-explore/search?query=any,contains,databases&tab=all_content_tab&search_scope=ALL_CONTENT&"
    }
  }
}

DatabaseLinkController.$inject = ['$scope', '$http', '$mdDialog']

export let databaseLinkConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: DatabaseLinkController,
  template: databaseLinkHTML
}
