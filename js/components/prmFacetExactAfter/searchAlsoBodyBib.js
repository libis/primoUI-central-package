import searchAlsoBodyHTML from './searchAlsoBody.html'

class SearchAlsoBodyBibController {
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
      "name": "Bibliotheek.be",
      "url": "https://www.bibliotheek.be/catalogus?q=",
      "img": "/primo-explore/custom/CENTRAL_PACKAGE/img/bib_be.png",
      "tooltip": "lbs.nui.search_also.tooltip.deBib",
      mapping: function mapping(search) {
        var terms = search.split(",");
        return terms[2] || "";
      }
    }
    ];
  }
}

SearchAlsoBodyBibController.$inject = ['$location'];

export let searchAlsoBodyBibConfig = {
  bindings: {parentCtrl: '<'},
  controller: SearchAlsoBodyBibController,
  template: searchAlsoBodyHTML
}
