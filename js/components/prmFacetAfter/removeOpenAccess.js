class RemoveOpenAccessController {
  constructor($scope) {
    let removeOpenAccess = $scope.$watch(() => {
      return this.parentCtrl.parentCtrl.facetService.results;
    }, (n,o) => {
      if (n != o) {
        if (this.parentCtrl.parentCtrl.facetService.results.filter(f => {return f.name == 'tlevel'}).length > 0) {
          removeOpenAccess();
          this.parentCtrl.parentCtrl.facetService.results = this.parentCtrl.parentCtrl.facetService.results.map(a => {
            if (a.name == 'tlevel') {
               a.values = a.values.filter(t => { return t.value !== 'open_access'})
            }
            return a;
          });
        }
      }
    });
  }
}

RemoveOpenAccessController.$inject = ['$scope'];

export let removeOpenAccessConfig = {
  bindings: {parentCtrl: '<'},
  controller: RemoveOpenAccessController
}
