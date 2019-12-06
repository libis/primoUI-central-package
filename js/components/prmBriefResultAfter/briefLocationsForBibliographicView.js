import briefLocationsForBibliographicViewHTML from './briefLocationsForBibliographicView.html'

class BriefLocationsForBibliographicViewController {
    constructor($element, $compile, $scope, FilterLocationsService) {
        var self = this;
        this.$element = $element;
        this.$scope = $scope;
        this.vid = window.appConfig.vid;
        this.FilterLocationsService = FilterLocationsService;
    }

    $onInit() {
        this.parentCtrl = this.parentCtrl.parentCtrl;
        this.item = this.parentCtrl.result;
        this.pnx = this.item.pnx;
       
        this.delivery_library =  this.FilterLocationsService.filterLocations(this.pnx);

        // console.log (  this.delivery_library )
        this.parentElement = this.$element.parent().parent()[0];
    }
  
}

BriefLocationsForBibliographicViewController.$inject = ['$element', '$compile', '$scope', 'FilterLocationsService'];

export let briefLocationsForBibliographicViewConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: BriefLocationsForBibliographicViewController,
    template: briefLocationsForBibliographicViewHTML
}



