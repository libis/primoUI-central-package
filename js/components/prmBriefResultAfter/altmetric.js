import altmetricHTML from './altmetric.html'

class AltMetricController {
  constructor(angularLoad) {
    var self = this;
    let item = self.parentCtrl.parentCtrl.item;

    self.doi = '';
    if (item && item.pnx && item.pnx.addata && item.pnx.addata.doi) {
      self.doi = self.parentCtrl.parentCtrl.item.pnx.addata.doi[0];
    }
  
    self.$onInit = function () {
        angularLoad.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {

        });
    };
  }
}

AltMetricController.$inject = ['angularLoad'];


export let altmetricConfig = {
  bindings: {parentCtrl: '<'},
  controller: AltMetricController,
  template: altmetricHTML
}
