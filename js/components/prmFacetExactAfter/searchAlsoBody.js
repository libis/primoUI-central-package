import searchAlsoBodyHTML from './searchAlsoBody.html'

class SearchAlsoBodyController {
  constructor($location){
    this.location = $location;
    this.targets = this._targets();
  }

  get search() {
    return this.location.search().query;
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
    }, {
      "name": "Google Scholar",
      "url": "https://scholar.google.com/scholar?q=",
      "img": "/primo-explore/custom/CENTRAL_PACKAGE/img/google_icon.png",
      "tooltip": "lbs.nui.search_also.tooltip.google_scolar",
      mapping: function mapping(search) {
        var terms = search.split(",");
        return terms[2] || "";
      }
    }, {
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
    }];
  }
}

SearchAlsoBodyController.$inject = ['$location'];

export let searchAlsoBodyConfig = {
  bindings: {parentCtrl: '<'},
  controller: SearchAlsoBodyController,
  template: searchAlsoBodyHTML
}
