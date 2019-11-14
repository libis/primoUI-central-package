import LocationsForBibliographicViewHTML from './locationsForBibliographicView.html'

class LocationsForBibliographicViewController {
    constructor($element, $compile, $scope, FilterLocationsService) {
        self = this
        this.$element = $element;
        this.$scope = $scope;
        this.vid = window.appConfig.vid;
        this.FilterLocationsService = FilterLocationsService;
    }

    $onInit() {
        this.parentCtrl = this.parentCtrl.parentCtrl;
        this.item = this.parentCtrl.item;
        this.pnx = this.item.pnx;
       
        this.delivery_library =  this.FilterLocationsService.filterLocations(this.pnx);

        // console.log ( this.delivery_library)

     
        this.parentElement = this.$element.parent().parent()[0];
        this.insertLocationsLinksSection()
    }

    insertLocationsLinksSection() {
        if (typeof this.delivery_library !== 'undefined' && this.delivery_library.length > 0) {
            // the array is defined and has at least one element

            let locationsLinksSectionData = {
                scrollId: "locationsLinks",
                serviceName: "locationsLinks",
                title: "brief.results.tabs.LocationsLinks"
            };
            let locationsLinksSectionElement = this.$element //.find('locations-for-bibliographic-view')[0];
            this.insertSection(locationsLinksSectionData, locationsLinksSectionElement);
        }
    }

    insertSection(sectionData, sectionElement) {
        // The title of the new section is used to idenitfy the section
        // element.
        let sectionTitleSelector = 'h4[translate="' + sectionData.title + '"]';

        // We set up the watcher before inserting the section data,
        // to ensure that the watcher catches the change.
        this.waitForfullViewService(sectionData)
        this.waitForTargetThenMoveSection(sectionTitleSelector, sectionElement);
    }

    // Wait for the target element to be created.
    waitForTargetThenMoveSection(sectionTitleSelector, sectionElement) {
        let unbindWatcher = this.$scope.$watch(() =>
            this.parentElement.querySelector(sectionTitleSelector),
            (newVal, oldVal) => {
                if (newVal) {
                    this.moveSectionElement(newVal, sectionElement);
                    unbindWatcher();
                }
            }
        );
    }

    moveSectionElement(identifierElement, sectionElement) {
        let targetElement = identifierElement.parentElement.parentElement.parentElement.parentElement.children[1];
        // Move the section into the target element.
        if (targetElement && targetElement.appendChild) {
            targetElement.appendChild(sectionElement[0]);
        }
    }

    waitForfullViewService(sectionData) {
        let unbindWatcher = this.$scope.$watch(() =>
            this.parentCtrl.fullViewService.servicesArray,
            (newVal, oldVal) => {
                if (newVal) {
                    this.insertSectionData(sectionData);
                    unbindWatcher();
                }
            }
        );
    }

    insertSectionData(sectionData) {
        this.parentCtrl.services.splice(this.parentCtrl.services.length - 1, 0, sectionData);
    }
}

LocationsForBibliographicViewController.$inject = ['$element', '$compile', '$scope', 'FilterLocationsService'];

export let locationsForBibliographicViewConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: LocationsForBibliographicViewController,
    template: LocationsForBibliographicViewHTML
}