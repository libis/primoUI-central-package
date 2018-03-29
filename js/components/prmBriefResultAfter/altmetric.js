import altmetricHTML from './altmetric.html'

class AltMetricController {
  constructor() {
    var self = this;
    let item = self.parentCtrl.parentCtrl.item;

    self.doi = '';
    if (item && item.pnx && item.pnx.addata && item.pnx.addata.doi) {
      self.doi = self.parentCtrl.parentCtrl.item.pnx.addata.doi[0];
    }
  }
}

export let altmetricConfig = {
  bindings: {parentCtrl: '<'},
  controller: AltMetricController,
  template: altmetricHTML
}
