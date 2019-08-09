import requestACopyOfEsDocHTML from './requestACopyOfEsDoc.html'

class RequestACopyOfEsDocController {
    constructor($element, $compile, $scope, requestACopyOfEsDocURL, $window, WindowEventListener) {
        let self = this;
        self.$rootScope = self.parentCtrl.parentCtrl.$rootScope;
        self.WindowEventListener = WindowEventListener;
        // If you want to add the button to the title (like report a problem)
        //let serviceTitleCode = self.parentCtrl.parentCtrl.title
        //let appendButtonTo = $element.parent().parent().find('h4');

        let serviceTitleCode = self.parentCtrl.parentCtrl.service.title;
        let appendButtonTo = $element.parent();
        let recordData = self.currentRecord;

        /*
        let TypesShowRequestACopyOfEsDoc = ['chapter', 'journal-article', 'thesis-dissertation', 'conference', 'report', 'dataset', 'c-bookreview', 'media', 'software'];
        let StatusShowRequestACopyOfEsDoc = ['published'];
        */

        if (/^nui\.getit\./.test(serviceTitleCode)) {
            //console.log( self )
            //console.log($scope)
            let primoExploreJwt = self.$rootScope.$$childHead.$ctrl.jwtUtilService.storageUtil.sessionStorage.primoExploreJwt;
            // console.log(self.$rootScope.$$childHead.$ctrl.jwtUtilService.storageUtil.sessionStorage.primoExploreJwt)

            Primo.user.then(user => {
                self.user = user;
                /*
                self.onCampus = self.user.isOnCampus();
                self.isLoggedIn = self.user.isLoggedIn();
                self.display_name = self.user.display_name
                self.email = self.user.email
*/


                if (user.isOnCampus || user.isLoggedIn) {
                    // console.log(user)
                    /* #### Check for  <scopeArchiv_fulltext>restricted</scopeArchiv_fulltext> ### */
                    var pnx = recordData.pnx
                    appendButtonTo.after($compile(requestACopyOfEsDocHTML)($scope));
                }

                self.openUrlToILL = ($event) => {
                    /*
                    http://services.libis.be/illform/32KUL_SERV?rft.genre=book&rft.advisor=&rft.au=&rft.aucorp=&rft.aufirst=&rft.aulast=&rft.contributor=&rft.creator=&rft.atitle=&rft.btitle=Wood&rft.jtitle=&rft.stitle=&rft.title=Wood&rft.series=&rft.degree=&rft.description=&rft.edition=&rft.identifier=&rft.eisbn=&rft.eissn=&rft.isbn=9780714873480&rft.issn=&rft.pages=&rft.part=&rft.epage=&rft.spage=&rft.ssn=&rft.tpages=&rft.year=&rft.month=&rft.day=&rft.volume=&rft.issue=&rft.date=&rft.place=&rft.pub=&rft.pubdate=2017&rft.pubday=&rft.publisher=&rft.pubyear=&locale=nl_BE
                    sid/primo.exlibrisgroup.com:primo3-Article-ESVLP_scopeArchiv&rft_val_fmt=info:ofi/fmt:kev:mtx:
                    */

                    var openurl = ""
                    if (pnx.display.type) {
                        openurl += "&rft.genre=" + encodeURI(pnx.display.type[0])
                    }
                    if (pnx.display.type[0] === "article") {
                        if (pnx.display.title) {
                            openurl += "&rft.atitle=" + encodeURI(pnx.display.title[0])
                        }
                        if (pnx.display.ispartof) {
                            openurl += "&rft.jtitle=" + encodeURI(pnx.display.ispartof[0])
                        }
                    } else {
                        if (pnx.display.title) {
                            openurl += "&rft.btitle=" + encodeURI(pnx.display.title[0])
                        }
                    }
                    if (pnx.display.title) {
                        openurl += "&rft.btitle=" + encodeURI(pnx.display.title[0])
                    }
                    if (pnx.display.lds26) {
                        openurl += "&rft.au=" + encodeURI(pnx.display.lds26[0])
                    }
                    if (pnx.display.creationdate) {
                        openurl += "&rft.date=" + encodeURI(pnx.display.creationdate[0])
                    }

                    /*
                    &rft.pages=
                    &rft.artnum=
                    &rft.issn=
                    &rft.eissn=
                    &rft.isbn=
                    &rft.sici=
                    &rft.eisbn=
                    &rft.coden=
                    &rft_id=info:doi/
                    &rft.object_id=
                    */
                    if (pnx.control) {
                        openurl += "&rft_dat=%3C" + encodeURI(pnx.control.sourceid[0]) + "%3E" + encodeURI(pnx.control.sourcerecordid[0]) + "%3C/" + encodeURI(pnx.control.sourceid[0]) + "%3E"
                    }

                    openurl = requestACopyOfEsDocURL + "/32KUL_VLP?" + openurl + "&access_token=" + primoExploreJwt
                    $window.open(openurl, '_blank');
                    
                }
            })
        }
    }

    get currentRecord() {
        let selector = 'prm-full-view-service-container'; //'prm-full-view-service-container'
        let element = angular.element(document.querySelector(selector));
        if (element) {
            let elementCtrl = element.controller(selector);
            // console.log(elementCtrl);
            return elementCtrl.item;
        }
        return null;
    }
}

RequestACopyOfEsDocController.$inject = ['$element', '$compile', '$scope', 'requestACopyOfEsDocURL', '$window', 'WindowEventListener'];

export let requestACopyOfEsDocConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: RequestACopyOfEsDocController,
    template: ''
}