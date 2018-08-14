
class LanguageSelectionConfigController {
    constructor($scope) {
        let self = this;
        let scope = $scope;
        var onlyshow_fr_FR_in_vid = ['ACV', 'BPB', 'FARO', 'FODFIN', 'KBC', 'RBINS', 'RMCA', 'KMKG', 'LIBAR', 'NBB', 'OFO', 'VDIC'];
        let parentEl = angular.element(document.querySelector('primo-explore'));
        if (! onlyshow_fr_FR_in_vid.includes( window.appConfig.vid  ) ) {
            parentEl.append( "<style>prm-language-selection md-list-item[value='fr_FR']{display:none!important;}</style>" );
        }

    }
}

LanguageSelectionConfigController.$inject = ['$scope']

export let LanguageSelectionConfig = {
    bindings: {
        parentCtrl: '<'
    },
    controller: LanguageSelectionConfigController,
    template: '',
}
