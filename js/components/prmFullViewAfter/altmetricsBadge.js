/**
 * The altmetrics component controller. (https://github.com/Det-Kongelige-Bibliotek/primo-explore-rex/blob/master/js/altmetrics.component.js)
 *
 */
import AltmetricsBadgeHTML from './altmetricsBadge.html'

class AltmetricsBadgeController {

  constructor($scope, $element, $compile, $rootScope, $window, $timeout, AltmetricsService) {
    let self = this;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$element = $element;
    this.$window = $window;
    this.$timeout = $timeout;
    this.$scope = $scope;
//    this.AltmetricsService = AltmetricsService;
    var parentCtrl = this.parentCtrl.parentCtrl;
    let item = parentCtrl.item;
    self.recordid = item.pnx.control.recordid[0];
    self.doi = '';

    if (item && item.pnx && item.pnx.addata && item.pnx.addata.doi) {
      self.doi = self.parentCtrl.parentCtrl.item.pnx.addata.doi[0];
      AltmetricsService.addAltmetrics('#full_altmetrics_' + self.recordid).then(function (result) {
        if (result) {
          var altmetricsSection = {
            scrollId: "altmetrics",
            serviceName: "altmetrics",
            title: "brief.results.tabs.Altmetrics"
          };
          Promise.resolve(  parentCtrl.fullViewService.getServices(parentCtrl.item, parentCtrl.originator) ).then(function(services) {
            services.splice(services.length, 10, altmetricsSection);
          })
        }
      });
    }
  }

  $onInit() {
    //polyfill
    if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                Element.prototype.webkitMatchesSelector;

    if (!Element.prototype.closest)
        Element.prototype.closest = function(s) {
            var el = this;
            if (!document.documentElement.contains(el)) return null;
            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };

    let doi = this.doi
    let self = this;
    if (doi !== '') {
      var unbindWatcher = this.$scope.$watch(function () {
        //return self.$element[0].parentElement.parentElement.querySelector('h4[translate="brief.results.tabs.Altmetrics"]');
        return self.$element[0].closest('#fullView').querySelector('h4[translate="brief.results.tabs.Altmetrics"]')
      }, function (newVal, oldVal) {
        if (newVal) {
          //Get the section body associated with the value we're watching
          let altmetricsContainer = newVal.closest('prm-full-view-service-container').querySelector('div.section-body');
          let altmetricsResult = self.$element[0];

          if (altmetricsContainer && altmetricsContainer.appendChild && altmetricsResult) {
            altmetricsContainer.appendChild(altmetricsResult);
          }
          unbindWatcher();
        }
      });
    }
  }
};

export let altmetricsBadgeConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: AltmetricsBadgeController,
  template: AltmetricsBadgeHTML
}
