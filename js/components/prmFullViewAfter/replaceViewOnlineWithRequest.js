
class ReplaceViewOnlineWithRequestController {
    constructor($scope, $window, $http, $element, angularLoad) {
        this.$http = $http;
        this.$scope = $scope;
        this.angularLoad = angularLoad;
        this.$element = $element;
    }

    $onchange() {
        console.log('something has changed for ReplaceViewOnlineWithRequestControllerter');
    }
    $onInit() {
        try {
            this.services = this.parentCtrl.parentCtrl.services;
        } catch (e) {
            console.log(e.message);
        };

        let parentCtrl = this.parentCtrl.parentCtrl;
        let pnx = parentCtrl.item.pnx;
        //console.log ( parentCtrl.item.delivery.link )
        let recordData = self.currentRecord;
        // console.log ( pnx.control.sourceid )

        if (pnx.control.sourceid.includes("ESVLP_scopeArchiv")) {

            var getit_link1_0_link = parentCtrl.item.delivery.link.filter(link => link.linkType == "http://purl.org/pnx/linkType/lln02");

            let requestDate = {
                title: "nui.getit.tab1_requestacopy",
                serviceName: "display",
                linkElement: {
                    category: "Remote Search Resource",
                    links: [{
                        displayText: "openurl_request",
                        getItTabText: "tab1_requestacopy",
                        hyperlinkText: "tab1_requestacopy",
                        isLinktoOnline: false,
                        link: getit_link1_0_link[0].linkURL
                    }
                    ]
                }
            }

            let unbindReplaceSectionWatcher = this.$scope.$watch(() =>
                parentCtrl.services,
                (newVal, oldVal) => {
                    /*
                    console.log('new services');
                    console.log(newVal)
                    console.log('old services');
                    console.log(oldVal);
                    */
                    if (newVal) {
                        // console.log('watch unbindReplaceSectionWatcher');
                        var getit_link1_0_service = parentCtrl.services.filter(service => service.scrollId == "getit_link1_0");
                        //console.log(getit_link1_0_service);
                        //console.log(getit_link1_0_service[0].serviceName);
                        getit_link1_0_service[0].title       = requestDate.title;
                        getit_link1_0_service[0].serviceName = requestDate.serviceName;
                        getit_link1_0_service[0].linkElement = Object.assign(getit_link1_0_service[0].linkElement,  requestDate.linkElement);
                        unbindReplaceSectionWatcher();
                    }
                }
            );
        }

        return
    }

    /**
     *  Method to load the altmetrics badge.
     *  @return {Promise} A Promise to be fulfilled if the badge is loaded, 
     *  and to be rejected if it could not be loaded.
     */

    $onDestroy() {
    };
}

ReplaceViewOnlineWithRequestController.$inject = ['$scope', '$window', '$http', '$element', 'angularLoad'];

export let replaceViewOnlineWithRequestConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: ReplaceViewOnlineWithRequestController,
    template: ''
}