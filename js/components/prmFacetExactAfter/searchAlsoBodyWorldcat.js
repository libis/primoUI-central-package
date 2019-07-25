import searchAlsoBodyHTML from './searchAlsoBody.html'

class SearchAlsoBodyWorldcatController {
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
      "name": "Worldcat",
      "url": "https://www.worldcat.org/search?q=",
      "img": "/primo-explore/custom/CENTRAL_PACKAGE/img/worldcat_icon.png",
      "tooltip": "lbs.nui.search_also.tooltip.worldcat",
      mapping: function mapping(search) {
        var type_mappings = {
          "any": "kw",
          "title": "ti",
          "creator": "au",
          "subject": "su"
        };
        var terms = search.split(",");
        var type = type_mappings[terms[0]] || "kw";
        var query = terms[2] || "";
        return type + ':' + query;

      }
    }
    ];
  }
}

SearchAlsoBodyWorldcatController.$inject = ['$location'];

export let searchAlsoBodyWorldcatConfig = {
  bindings: {parentCtrl: '<'},
  controller: SearchAlsoBodyWorldcatController,
  template: searchAlsoBodyHTML
}
