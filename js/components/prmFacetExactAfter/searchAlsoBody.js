import searchAlsoBodyHTML from './searchAlsoBody.html'

class SearchAlsoBodyController {
  constructor($location){
    this.location = $location;
    let url ="";
    Primo.user.then(user => {
      let campus = '';
      campus = user.isOnCampus();
      if(!campus){
        url = 'http://kuleuven.ezproxy.kuleuven.be/login?url=';
      }
      this.targets = this._targets(url);
    });
  }

  get search() {
    return this.location.search().query || '';
  }

  get name() {
    return this.parentCtrl.parentCtrl.facetGroup.name;
  }

  _targets(url) {

    return [{
      "name": "UniCat",
      "url": url + "https://unicat.be/uniCat?func=search&uiLanguage=en&query=",
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
