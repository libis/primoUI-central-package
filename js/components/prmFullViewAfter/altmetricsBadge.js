/**
 * The altmetrics component controller. (https://github.com/Det-Kongelige-Bibliotek/primo-explore-rex/blob/master/js/altmetrics.component.js)
 */
import AltmetricsBadgeHTML from './altmetricsBadge.html'

class AltmetricsBadgeController {

  constructor($scope, $window, $http, $element, angularLoad, FullViewSectionService) {
    console.log('AltmetricsBadgeController + constructor')
    this.$http = $http;
    this.$scope = $scope;
    this.angularLoad = angularLoad;
    this.FullViewSectionService = FullViewSectionService;
    this.$element = $element;
  }


  $onchange(){
    console.log('something has changed for AltmetricsBadgeController');
  }
  $onInit() {
    try {
      console.log('AltmetricsBadgeController + onInit')
      this.doi = this.parentCtrl.parentCtrl.item.pnx.addata.doi ? this.parentCtrl.parentCtrl.item.pnx.addata.doi[0] : '';
      this.services = this.parentCtrl.parentCtrl.services;
    } catch (e) {
      console.log(e.message);
    };



    let fullViewElement = this.$element.parent().parent()[0]

    this.altmetricsSectionData = {
      scrollId: "altmetrics",
      serviceName: "altmetrics",
      title: "nui.brief.results.tabs.altmetrics"
    };

    // alert ('A potpourri of pediatric urology Wilcox, Duncan')
    let sectionTitleSelector = 'h4[translate="' + this.altmetricsSectionData.title + '"]';
    let unbindWatcher = this.$scope.$watch(() =>
      fullViewElement.querySelector(sectionTitleSelector),
      (newVal, oldVal) => {
        if (newVal) {
          let sectionBody = newVal.parentElement.parentElement.parentElement.parentElement.querySelector('div.section-body');
          sectionBody.appendChild(this.$element[0]);
          unbindWatcher();
        }
      }
    );
    /*
    if (this.doi) {
      this.FullViewSectionService.insertSectionData(this.services, altmetricsSectionData);
    }
    //this.$scope.$apply();
    */
    return this.loadBadge().then(this.onLoad).catch((e) => console.log(e));
  }

  /**
   *  Method to load the altmetrics badge.
   *  @return {Promise} A Promise to be fulfilled if the badge is loaded, 
   *  and to be rejected if it could not be loaded.
   */
  loadBadge() {
    let ctrl = this;
    console.log (ctrl.services);
    return new Promise(function (resolve, reject) {
      if (ctrl.doi) {
        ctrl.$http.get('https://api.altmetric.com/v1/doi/' + ctrl.doi).then(() => {
          try {
            ctrl.loadBadgeScript();
            console.log("ctrl.FullViewSectionService.insertSectionData");
            ctrl.FullViewSectionService.insertSectionData(ctrl.services, ctrl.altmetricsSectionData);
            console.log (ctrl.services);
          } catch (e) {
            console.log(e);
            reject('Altmetrics onLoad error.');
            return;
          }
          resolve();
        }).catch((e) =>
          reject('Altmetrics badge cannot be loaded.')
          );
      } else {
        reject('Altmetrics badge cannot be loaded as no DOI is present.');
      }
    });
  };

  loadBadgeScript() {
    return this.angularLoad.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () { });
  };
  
  $onDestroy() {
    if (this.$window.AltmetricsBadge) {
      delete this.$window.AltmetricsBadge;
    }

    // TODO: Remove any other JS or CSS files that are loaded. The URLs below may change!
    /*
    this.scriptLoaderService.unload('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js', 'js');
    this.scriptLoaderService.unload('https://d1bxh8uas1mnw7.cloudfront.net/assets/altmetric_badges-8f271adb184c21cc5169a7f67f7fe5ab.js', 'js');
    this.scriptLoaderService.unload('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed-2c47105b6381604898bbf8ae8a680350.css', 'css');
   */
    console.log('Altmetrics badge is destroyed!.');
  };
};

AltmetricsBadgeController.$inject = ['$scope', '$window', '$http', '$element', 'angularLoad', 'FullViewSectionService'];

export let altmetricBadgeConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: AltmetricsBadgeController,
  template: AltmetricsBadgeHTML
}
