export default class FilterLocationsService {
    constructor($rootScope, $compile, $mdToast, $sce, $translate, $timeout) {
        this.mdToast = $mdToast;
        this.sce = $sce;
        this.translate = $translate;
        this.timeout = $timeout;
        this.compile = $compile;
        this.rootScope = $rootScope;
        this.vid = window.appConfig.vid;
        // this.messageServiceEventHandler = this.rootScope.$on('$translateLoadingEnd', (event) => {
           // console.log("=========> translation loaded <==========");
        // });
      }

    filterLocations(pnx_record) {
        var availlibrary = pnx_record.display.availlibrary.map((lib) => { return lib.split("$$"); })

        availlibrary = availlibrary.map((lib) => {
            lib.shift();
            lib = lib.map((s) => {
                return {
                    [s.charAt(0)]: s.substr(1)
                }
            });
            lib = lib.reduce((tag, field) => {
                tag[Object.keys(field)[0]] = Object.values(field)[0];
                return tag
            }, {});
            return lib
        });

        // console.log ( this.vid )

        if (this.vid == "JESUITS") {
            const library_filter_array = {
                "KUL_GBIB_LIB": {
                    "id" : function (lib) { 
                        if (lib["O"]) {
                            return lib["O"] 
                        }else{
                            return pnx_record.control.recordid
                        }
                    },
                    "name": "KU Leuven Maurits Sabbe Library",
                    "url": "https://"+document.location.host+"/primo-explore/fulldisplay?docid=<#recordid>&context=L&vid=KULeuven&search_scope=ALL_CONTENT&isFrbr=true&tab=all_content_tab&noLogin=true"
                },
                "KADOC_KADOC_LIB": {
                    "id" : function (lib) { 
                        if (lib["O"]) {
                            return lib["O"] 
                        }else{
                            return pnx_record.control.recordid
                        }
                    },
                    "name": "KADOC",
                    "url":  "https://"+document.location.host+"/primo-explore/fulldisplay?docid=<#recordid>&context=L&vid=KADOC&search_scope=ALL_CONTENT&isFrbr=true&tab=all_content_tab"
                },
                "ANET_UA-CST": {
                    "id" : function (lib) { return pnx_record.search.addsrcrecordid },
                    "name": "Ruusbroec Institute Library – University of Antwerp",
                    //"url": "https://anet.be/record/opacanet/<#recordid>"
                    "url": "https://anet.be/record/uantwerpen/opacuantwerpen/<#recordid>/N"
                }

            }

            availlibrary = availlibrary.filter((library) => {
                //console.log(library["L"]);
                //console.log ( Object.keys(library_filter_array) )
                return Object.keys(library_filter_array).includes(library["L"]) 
                        && pnx_record.facets.lfc10.includes(library["L"]);
            })

            availlibrary = availlibrary.map( (library) => {
                var recordid =  (library_filter_array[library["L"]]["id"])(library);
                var url = library_filter_array[library["L"]]["url"].replace("<#recordid>", recordid );
                var name = library_filter_array[library["L"]]["name"];
                library = { "url": url, "name": name, "code":library["L"] };
                return library;
            });

            var resArr = [];
            availlibrary.filter(function(lib){
              // var i = resArr.findIndex(x => (x.name == lib.name && x.code == lib.code  && x.url == lib.url ) );
              var i = resArr.findIndex(x => (x.name == lib.name && x.code == lib.code) );
              if(i <= -1){
                    resArr.push(lib);
              }
              return null;
            });

            availlibrary = resArr
        } else {
            availlibrary = []
        }

        return availlibrary
    }

};

FilterLocationsService.$inject = ['$rootScope', '$compile', '$window'];
