import {
    endianness
} from "os";

class filterFacetValuesController {
    constructor($scope) {
        const facetsFilters = [{
            vid: "JESUITS",
            filters: [{
                name: "library",
                type: "include",
                values: ["KUL_GOSA_LIB", "KUL_GBIB_LIB", "KUL_GPAR_LIB", "ANET_UA-CST"]
            }, {
                name: "domain",
                type: "include",
                values: ["LIBISnet Catalogue", "Ruusbroecgenootschap"]
            }]
        }];

        let vidfacetsFilters = facetsFilters.filter(f => {
            return f.vid == this.parentCtrl.parentCtrl.vid
        });
        if (vidfacetsFilters.length == 1) {
            let vidfacetsFilter = vidfacetsFilters[0]

            $scope.$watch(() => {
                return this.parentCtrl.parentCtrl.facetService.results;
            }, (n, o) => {
//                if (n != o) {
                    var vidfacetsresults;
                    vidfacetsFilter.filters.forEach(vidFacet => {
                        vidfacetsresults = this.parentCtrl.parentCtrl.facetService.results.map(facet => {
                            if (facet.name == vidFacet.name) {
                                facet.values = facet.values.filter(facetVal => {
                                    if (vidFacet.type === 'include') {
                                        return vidFacet.values.includes(facetVal.value);
                                    }
                                    if (vidFacet.type === 'exclude') {
                                        return !vidFacet.values.includes(facetVal.value);
                                    }
                                    return true
                                })
                            }
                            return facet;
                        });
                    });
                // }
            });
        }
    }
}

filterFacetValuesController.$inject = ['$scope'];

export let filterFacetValuesConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: filterFacetValuesController
}