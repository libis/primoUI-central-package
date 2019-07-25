import searchAlsoBodyHTML from './searchAlsoBody.html'

class SearchAlsoBodyGoogleController {
  constructor($location){
    this.location = $location;
    this.targets = this._targets();
  }

  get search() {
    return this.location.search().query || '';
  }

  get name() {
    return this.parentCtrl.parentCtrl.facetGroup.name;
  }

  _targets() {
    return [{
       "name": "Google Scholar",
       "url": "https://scholar.google.com/scholar?q=",
       "img": "/primo-explore/custom/CENTRAL_PACKAGE/img/google_icon.png",
       "tooltip": "lbs.nui.search_also.tooltip.google_scolar",
       mapping: function mapping(search) {
         var terms = search.split(",");
         return terms[2] || "";
       }
     },
    ];
  }
}

SearchAlsoBodyGoogleController.$inject = ['$location'];

export let searchAlsoBodyGoogleConfig = {
  bindings: {parentCtrl: '<'},
  controller: SearchAlsoBodyGoogleController,
  template: searchAlsoBodyHTML
}
