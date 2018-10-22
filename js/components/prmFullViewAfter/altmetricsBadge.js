/**
 * The altmetrics component controller. (https://github.com/Det-Kongelige-Bibliotek/primo-explore-rex/blob/master/js/altmetrics.component.js)
 *
 */
import AltmetricsBadgeHTML from './altmetricsBadge.html'

class AltmetricsBadgeController {

  constructor($scope, $element, $compile, $rootScope, $window, $timeout, AltmetricsService) {
    let self = this;
    self.$element = $element;
    self.$scope = $scope;
    self.AltmetricsService = AltmetricsService;
  }

  $onInit() {
    let self = this;
    self.parentCtrl = this.parentCtrl.parentCtrl;
    self.item = self.parentCtrl.item;
    self.recordid = self.item.pnx.control.recordid[0];
    self.doi = '';

    //polyfill
    if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
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
    //end polyfill

    if (self.item && self.item.pnx && self.item.pnx.addata && self.item.pnx.addata.doi) {
        self.doi = self.item.pnx.addata.doi[0];
        self.AltmetricsService.addAltmetrics('#full_altmetrics_' + self.recordid).then(function (result) {

        if (result) {
          var altmetricsSection = {
            scrollId: "altmetrics",
            serviceName: "altmetrics",
            title: "brief.results.tabs.Altmetrics"
          };

          Promise.resolve( self.parentCtrl.fullViewService.getServices( self.parentCtrl.item, self.parentCtrl.originator) ).then(
            function(services) {
              // Add to services if not alread in the list
              if ( services.findIndex(service => service.scrollId === "altmetrics") < 0 ){
                services.splice(services.length, 10, altmetricsSection);              
              }
          })
        }
      });
    }
    
    if ( self.doi !== '' ) {
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
            window._altmetric_embed_init(altmetricsContainer);
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
