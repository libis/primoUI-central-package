import requestACopyOfEsDocHTML from './requestACopyOfEsDoc.html'

class RequestACopyOfEsDocController {
    constructor($element, $compile, $scope, requestACopyOfEsDocURL, $window, WindowEventListener) {
        let self = this;
        self.$rootScope = self.parentCtrl.parentCtrl.$rootScope;
        self.WindowEventListener = WindowEventListener;
        // If you want to add the button to the title (like report a problem)
        //let serviceTitleCode = self.parentCtrl.parentCtrl.title
        //let appendButtonTo = $element.parent().parent().find('h4');

        if (self.parentCtrl.parentCtrl.service) {
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

                    var primo_inst_code = window.appConfig['primo-view']['institution']['institution-code'] 
                    var alma_inst_mapping =  window.appConfig['mapping-tables']['Alma Institution Codes']
                    var alma_code = (alma_inst_mapping.filter(function (obj) { return obj.target == primo_inst_code; }) )[0].source1;
                    var pnx = recordData.pnx;
                    var appendButton = false;

                    /* Request button only for Archiv-material from ESVLP and available 'oncampus' OR Signed in 
                    *  Only physical or Restricted Online material can be requested
                    */
                    if ( (user.isOnCampus() || user.isLoggedIn() ) && pnx.control.sourceid.includes("ESVLP_scopeArchiv") )  {
                       
                        if (pnx.facets.toplevel.includes("print_copies") ) {
                            appendButton =true
                        }else {
                            if (pnx.delivery.resdelscope) {
                                if (pnx.delivery.resdelscope.includes("RESVLP") ) {
                                    appendButton =true
                                }
                            }
                        }
                    }

                    if (appendButton) {
                        appendButtonTo.after($compile(requestACopyOfEsDocHTML)($scope));
                    }


                    self.openUrlToILL = ($event) => {
                        /*
                        http://services.libis.be/illform/32KUL_SERV?rft.genre=book&rft.advisor=&rft.au=&rft.aucorp=&rft.aufirst=&rft.aulast=&rft.contributor=&rft.creator=&rft.atitle=&rft.btitle=Wood&rft.jtitle=&rft.stitle=&rft.title=Wood&rft.series=&rft.degree=&rft.description=&rft.edition=&rft.identifier=&rft.eisbn=&rft.eissn=&rft.isbn=9780714873480&rft.issn=&rft.pages=&rft.part=&rft.epage=&rft.spage=&rft.ssn=&rft.tpages=&rft.year=&rft.month=&rft.day=&rft.volume=&rft.issue=&rft.date=&rft.place=&rft.pub=&rft.pubdate=2017&rft.pubday=&rft.publisher=&rft.pubyear=&locale=nl_BE
                        sid/primo.exlibrisgroup.com:primo3-Article-ESVLP_scopeArchiv&rft_val_fmt=info:ofi/fmt:kev:mtx:
                        */
                        var config = {
                            "rft.genre": pnx.display.type,
                            "rft.part": pnx.display.ispartof,
                            "rft.date": pnx.display.creationdate,
                            "rft.au": pnx.addata.au,
                            "rft.rights": pnx.display.rights
                        }
                    
                    
/*

rft.atitle={{addata/atitle}}& => pnx.display.title[0]
rft.jtitle={{addata/jtitle}}& => pnx.display.ispartof[0]
rft.btitle={{addata/btitle}}& => pnx.display.ispartof[0]
rft.btitle={{addata/adtitle}}& => pnx.addata/adtitle[0]


rft.genre={{addata/genre}}& => pnx.display.type[0]
rft.part={{addata/part}}& => pnx.display.ispartof[0]
rft.date={{addata/date}}& => pnx.display.creationdate[0]
rft.au={{addata/au}}& => pnx.addata.au[0]
rft.dat=<{{control/sourceid}}>{{control/sourcerecordid}}</{{control/sourceid}}> => < pnx.control.sourceid[0] > pnx.control.sourcerecordid  </ pnx.control.sourceid[0] >


??? rft.rights = pnx.display.rights[0]
*/

/*
rft.aulast={{addata/aulast}}&
rft.auinit={{addata/auinit}}&
rft.auinit1={{addata/auinit1}}&
rft.auinitm={{addata/auinitm}}&
rft.ausuffix={{addata/ausuffix}}&

rft.aucorp={{addata/aucorp}}&
rft.volume={{addata/volume}}&
rft.issue={{addata/issue}}&
rft.quarter={{addata/quarter}}&
rft.ssn={{addata/ssn}}&
rft.spage={{addata/spage}}&
rft.epage={{addata/epage}}&
rft.pages={{addata/pages}}&
rft.artnum={{addata/artnum}}&
rft.issn={{addata/issn}}&
rft.eissn={{addata/eissn}}&
rft.isbn={{addata/isbn}}&
rft.sici={{addata/sici}}&
rft.coden={{addata/coden}}&
rft.id=info:doi/{{addata/doi}}&
rft.object_id={{addata/objectid}};&
rft.eisbn={{addata/eisbn}}&
rft.edition={{display/edition}}&
rft.pub={{addata/pub}}&
rft.place={{addata/cop}}&
rft.series={{addata/seriestitle}}&
rft.stitle={{addata/stitle}}&
rft.bici={{addata/bici}}&
rft.id=info:bibcode/{{addata/bibcode}}&
rft.id=info:hdl/{{addata/hdlid}}&
rft.id=info:lccn/{{addata/lccn}}&
rft.id=info:oclcnum/{{addata/oclcid}}&
rft.id=info:pmid/{{addata/pmid}}&
rft.id=info:eric/((addata/eric}}&

*/


                        var openurl = ""

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
                            }else{
                                if (pnx.addate.adtitle[0]) {
                                    openurl += "&rft.btitle=" + encodeURI(pnx.addate.adtitl[0])
                                }
                            }
                        }

                        for (var param in config) {
                            if (config[param]) {
                                   openurl += "&" +param +"=" + encodeURI( config[param][0] )
                           }
                        }

                        openurl += "&rft_dat=" + "%3C" + encodeURI(pnx.control.sourceid[0]) + "%3E" + encodeURI(pnx.control.sourcerecordid[0]) + "%3C/" + encodeURI(pnx.control.sourceid[0]) + "%3E"

                        openurl = requestACopyOfEsDocURL + "/"+ alma_code +"?" + openurl 
                        $window.open(openurl, '_blank');

                    }
                })
            }
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