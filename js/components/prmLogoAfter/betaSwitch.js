import betaSwitchHTML from './betaSwitch.html'

class BetaSwitchController {
  constructor($scope) {
    let self = this;
    self.$scope = $scope;

    $scope.showBetaSwitch = true;
    $scope.useBeta = true;

    $scope.onChangeUseBeta = function () {
      if (! $scope.useBeta){
        self.goToOldUI();
      }
    };
  }

  goToOldUI() {
    document.location.href='/primo_library/libweb/action/search.do?vid='+ this.oldVid;
  }

  $onInit() {
    var LinkToBetaViews = {
      'ACV':'ACV',
      'BPB':'BPB',
      'FARO':'FARO',
      'FODFIN':'FODFIN' ,
      'GCLD':'GCLD',
      'GSB':'GSB',
      'GSG':'GSG',
      'IMEC':'IMEC',
      'KADOC':'KADOC',
      'KBC':'KBC',
      'KMKG':'KMKG',
      'KULeuven':'KULeuven_UX',
      'LIBAR':'LIBAR',
      'LUCA':'LUCA_UX',
      'NBB':'NBB',
      'ODISEE':'ODISEE_UX',
      'OFO':'OFO',
      'RBINS':'RBINS',
      'RELI':'RELI',
      'RMCA':'RMCA',
      'SERV':'SERV',
      'TMOREK':'TMOREK_UX',
      'TMOREM':'TMOREMA_UX',
      'VDIC':'VDIC',
      'VIVES_KATHO':'VIVES_KATHO_UX',
      'VIVES_KHBO':'VIVES_KHBO_UX',
      'VLP':'VLP',
      'KULeuven_TMOREM':'KULeuven_TMOREM_UX',
      'KULeuven_UCLL':'KULeuven_UCLL_UX',
      'KULeuven_TMOREK':'KULeuven_TMOREK_UX',
      'KULeuven_LUCA':'KULeuven_LUCA_UX',
      'KULeuven_VIVES_KHBO':'KULeuven_VIVES_KHBO_UX',
      'KULeuven_ODISEE':'KULeuven_ODISEE_UX',
      'KHLIM':'UCLL_LIMBURG_UX',
      'KHL':'UCLL_LEUVEN_UX'
    }

    Primo.view.then(view => {
      if (/^ECB/.test(view.code)) {
        this.showBetaSwitch = false;
      }
      this.oldVid = Object.keys(LinkToBetaViews).find(key => LinkToBetaViews[key] === view.code);
    });
  }

}

export let betaSwitchConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: BetaSwitchController,
  template: betaSwitchHTML
}
