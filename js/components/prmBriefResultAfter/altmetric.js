import altmetricHTML from './altmetric.html'

class AltMetricController {
  constructor($scope, $element, $compile, $window, $timeout, AltmetricsService) {
    var self = this;
    let item = self.parentCtrl.parentCtrl.item;
    /*
        this.element = $element;
        this.window = $window;
    */
    self.doi = '';
    self.recordid = self.parentCtrl.parentCtrl.item.pnx.control.recordid[0];
    if (item && item.pnx && item.pnx.addata && item.pnx.addata.doi) {
      self.doi = self.parentCtrl.parentCtrl.item.pnx.addata.doi[0];

      this.recordid = self.recordid;
      AltmetricsService.addAltmetrics('#altmetrics_' + self.recordid).then(function (result) {
      });
    }
  }
}

export let altmetricConfig = {
  bindings: { parentCtrl: '<' },
  controller: AltMetricController,
  template: altmetricHTML
}
