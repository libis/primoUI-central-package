import sourceIconHTML from './sourceIcon.html'

class SourceIconController {
  constructor($scope, $element, $compile) {
    var self = this;
    var parentCtrl = $scope.$parent.$ctrl.parentCtrl;
    var iconConf = [{
      'sourceid': 'lirias',
      'iconUrl': '//limo.libis.be/primo_library/libweb/libis/images/lirias.jpg',
      'iconText': 'Lirias'
    }];

    var iconConfSources = iconConf.map(obj => obj.sourceid);

    self.sourceid = null;
    if ('sourceid' in parentCtrl.item.pnx.control) {
      self.sourceid = parentCtrl.item.pnx.control.sourceid[0].toLowerCase();

      if (iconConfSources.includes(self.sourceid)) {
        self.icon = iconConf.find(function(x) {
          return x.sourceid === self.sourceid;
        });
      }
    }

    $element.parent().parent().parent().find('div').append($compile(sourceIconHTML)($scope));

  }
}

SourceIconController.$inject = ['$scope', '$element', '$compile'];

export let sourceIconConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: SourceIconController,
  template: ''
}
