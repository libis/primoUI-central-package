import searchAlsoBodyHTML from './searchAlsoBody.html'

class SearchAlsoBodyController {
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
      "name": "UniCat",
      "url": "https://unicat.be/uniCat?func=search&uiLanguage=en&query=",
      "img": "/primo-explore/custom/CENTRAL_PACKAGE/img/unicat_icon.png",
      "tooltip": "lbs.nui.search_also.tooltip.unicat",
      mapping: function mapping(search) {
        var terms = search.split(",");
        return terms[2] || "";
      }
    }
    ];
  }
}

SearchAlsoBodyController.$inject = ['$location'];

export let searchAlsoBodyConfig = {
  bindings: {parentCtrl: '<'},
  controller: SearchAlsoBodyController,
  template: searchAlsoBodyHTML
}
