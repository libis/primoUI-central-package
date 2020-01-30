import { searchAlsoBodyBibConfig } from "../prmFacetExactAfter/searchAlsoBodyBib";

class URLDecodeLinkLabelController {
  constructor($scope) {
    let self = this;
    self.scope = $scope;
    var parentCtrl = self.parentCtrl.parentCtrl

    if (parentCtrl.item.pnx.control.sourceid.includes("KADOC_PAROCHIEBLADEN") ) {
      parentCtrl.item.delivery.link.forEach(function (l) {
        if ( l.linkType == "http://purl.org/pnx/linkType/addlink" && l.displayLabel.startsWith("In ODIS:") ){
          l.displayLabel = decodeURIComponent ( l.displayLabel.replace(/\+/g, '%20') ); 
        }
      });
    }
  }
}

URLDecodeLinkLabelController.$inject = ['$scope'];

export let URLDecodeLinkLabelControllerConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: URLDecodeLinkLabelController,
  template: ''
}
