/**
 * The altmetrics component controller. (https://github.com/Det-Kongelige-Bibliotek/primo-explore-rex/blob/master/js/altmetrics.component.js)
 */
import staticAfterHTML from './staticAfter.html'

class staticAfterController {

  constructor($scope, $window, $http, $element, angularLoad, FullViewSectionService) {
    console.log('staticAfterController + constructor')
    this.$http = $http;
    this.$scope = $scope;
    this.angularLoad = angularLoad;
    this.FullViewSectionService = FullViewSectionService;
    this.$element = $element;
  }

  $onchange(){
    console.log('something has changed for staticAfterController');
  }
  $onInit() {
    try {
      console.log('staticAfterController + onInit')
      this.doi = this.parentCtrl.parentCtrl.item.pnx.addata.doi ? this.parentCtrl.parentCtrl.item.pnx.addata.doi[0] : '';
      this.services = this.parentCtrl.parentCtrl.services;
     
    } catch (e) {
      console.log(e.message);
    };


    let fullViewElement = this.$element.parent().parent()[0];

    this.staticAfterSectionData = {
      scrollId: "staticInt",
      serviceName: "staticInt",
      title: "Static Insertion"
    };

    // alert ('A potpourri of pediatric urology Wilcox, Duncan')
    let sectionTitleSelector = 'h4[translate="' + this.staticAfterSectionData.title + '"]';
    
    let unbindStaticWatcher = this.$scope.$watch(() =>
      fullViewElement.querySelector(sectionTitleSelector),
    //  fullViewElement.querySelector('div#services-index'),
      (newVal, oldVal) => {
        console.log('new ' + sectionTitleSelector);
        console.log(newVal)
        console.log('old' +sectionTitleSelector );
        console.log(oldVal);
        if (newVal) {
          let sectionBody = newVal.parentElement.parentElement.parentElement.parentElement.querySelector('div.section-body');
          console.log('watch sectionTitleSelector');
          console.log(this.$element);
          sectionBody.appendChild(this.$element[0]);
          unbindStaticWatcher();
        }
      }
    );
  
    /*
    if (this.doi) {
      this.FullViewSectionService.insertSectionData(this.services, altmetricsSectionData);
    }
    //this.$scope.$apply();
    */
    this.FullViewSectionService.insertSectionData(this.services, this.staticAfterSectionData);

    return 
  }

  /**
   *  Method to load the altmetrics badge.
   *  @return {Promise} A Promise to be fulfilled if the badge is loaded, 
   *  and to be rejected if it could not be loaded.
   */
  
  $onDestroy() {
    if (this.$window.staticAfter) {
      delete this.$window.staticAfter;
    }

    // TODO: Remove any other JS or CSS files that are loaded. The URLs below may change!
    /*
    this.scriptLoaderService.unload('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js', 'js');
    this.scriptLoaderService.unload('https://d1bxh8uas1mnw7.cloudfront.net/assets/altmetric_badges-8f271adb184c21cc5169a7f67f7fe5ab.js', 'js');
    this.scriptLoaderService.unload('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed-2c47105b6381604898bbf8ae8a680350.css', 'css');
   */
    console.log('staticAfter is destroyed!.');
  };
};

staticAfterController.$inject = ['$scope', '$window', '$http', '$element', 'angularLoad', 'FullViewSectionService'];

export let staticAfterConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: staticAfterController,
  template: staticAfterHTML
}
