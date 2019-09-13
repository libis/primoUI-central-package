import requestACopyHTML from './requestACopy.html'
import requestACopyDialogHTML from './requestACopyDialog.html'

class RequestACopyController {
  constructor($element, $compile, $scope, $mdDialog, $http, $rootScope, requestACopyURL, MessageService) {
    let self = this;
    self.$rootScope = $rootScope;
    // If you want to add the button to the title (like report a problem)
    //let serviceTitleCode = self.parentCtrl.parentCtrl.title
    //let appendButtonTo = $element.parent().parent().find('h4');

    // full // let serviceTitleCode = self.parentCtrl.parentCtrl.service.title;
    // full // let appendButtonTo = $element.parent();

    let serviceTitleCode = self.parentCtrl.parentCtrl.title;
    //let appendButtonTo = $element.parent().parent().parent().parent();
    let appendButtonTo = angular.element( ($element.nativeElement).closest('prm-full-view-service-container').querySelector('prm-full-view-service-container-after') )
    
    let recordData = self.currentRecord;
       /* captcha implementation (Already used in )
        https://github.com/VividCortex/angular-recaptcha
        */
    let capchaPublicKey = window.appConfig["system-configuration"]["Public Captcha Key"];

    let TypesShowRequestACopy = ['chapter','journal-article','thesis-dissertation','conference','report','dataset','c-bookreview','media','software'];
    let StatusShowRequestACopy = ['published'];

    if (/^nui\.getit\./.test(serviceTitleCode)) {
      var ShowRequestACopyType = recordData.pnx.facets.lfc16.filter(value => -1 !== TypesShowRequestACopy.indexOf(value));
      var ShowRequestACopyStatus = recordData.pnx.facets.lfc12.filter(value => -1 !== StatusShowRequestACopy.indexOf(value));

      if ((!/^nui\.getit\.tab1_onl_norestrict/.test(serviceTitleCode)) && ShowRequestACopyType.length > 0 && ShowRequestACopyStatus.length > 0) {


        Primo.user.then(user => {
          self.user = user;
          Primo.view.then(view => {
            self.view = view;

            self.onCampus = self.user.isOnCampus();
            console.log( serviceTitleCode )
            if ( ! /^nui\.getit\.tab1_onl_mayrestrict/.test(serviceTitleCode)  || /^nui\.getit\.tab1_onl_mayrestrict/.test(serviceTitleCode) && ! self.onCampus ) {
              appendButtonTo.after($compile(requestACopyHTML)($scope));
            }


            self.showRequestACopyForm = ($event) => {
              $mdDialog.show({
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: false,
                targetEvent: $event,
                template: requestACopyDialogHTML,
                controller: function ($scope, $mdDialog) {

                  let pnxDisplay =  recordData.pnx.display;
                  $scope.gCaptchaResponse = '';
                  $scope.capchaPublicKey = capchaPublicKey;
                  $scope.request = {
                    replyTo: self.user.email,
                    motivation: '',
                    title: pnxDisplay.title[0],
                    contributor: (() => { ( pnxDisplay.contributor ? pnxDisplay.contributor[0] : '' ) })(),
                    creator: pnxDisplay.creator ? pnxDisplay.creator[0] : '',
                    ispartof: pnxDisplay.ispartof ? pnxDisplay.ispartof[0] : '',
                    subject: 'request a copy'
                  }

                  $scope.setWidgetId = function (widgetId) {
                    console.info('Created widget ID: %s', widgetId);
                    $scope.widgetId = widgetId;
                  };
                  $scope.setResponse = function (response) {
                    console.log("Get response from capture:" + response);
                    $scope.gCaptchaResponse = response;
                  };
                  $scope.cbExpiration = function () {
                    console.info('Expiration Disable Submit');
                    $scope.gCaptchaResponse = '';
                  };

                  $scope.cancelRequest = function () {
                    $mdDialog.cancel();
                  }

                  $scope.sendRequest = function (answer) {

                    let data = {
                      'g-recaptcha-response': $scope.gCaptchaResponse,
                      sessionId: user.id,
                      sourceId: recordData.pnx.control.sourceid[0],
                      recordId: recordData.pnx.control.recordid[0],
                      sourceRecordId: recordData.pnx.control.sourcerecordid[0],
                      title: pnxDisplay.title[0],
                      contributor: (() => { ( pnxDisplay.contributor ? pnxDisplay.contributor[0] : '' ) })(),
                      creator: pnxDisplay.creator ? pnxDisplay.creator[0] : '',
                      ispartof: pnxDisplay.ispartof ? pnxDisplay.ispartof[0] : '',

                      replyTo: $scope.request.replyTo || self.user.email,
                      motivation: $scope.request.motivation
                    };

                  //  console.log ( data )


                    if ($scope.request.replyTo.length > 0 && $scope.request.motivation.length > 0) {
                      $mdDialog.hide();

                      $http({
                        method: 'POST',
                        url:requestACopyURL,
                        headers: {
                          'Content-Type': 'application/json',
                          'X-From-ExL-API-Gateway': undefined
                        },
                        cache: false,
                        data: data
                      }).then(function (response) {
                        let message = self.$rootScope.$$childHead.$ctrl.$translate.instant('lbs.nui.request_a_copy.success') || 'Thank you the request had been send!';
                        MessageService.__show({
                          message: message,
                          scope: $scope,
                          hideDelay: 5000
                        });
                      }, function (response) {
                        let message = self.$rootScope.$$childHead.$ctrl.$translate.instant('lbs.nui.request_a_copy.fail') || 'Unable to submit the request.';
                        console.log( message )
                        MessageService.__show({
                          message: message,
                          scope: $scope,
                          hideDelay: 5000
                        });
                      });
                    }
                  }
                }
              });
            }; //showRequestACopyForm
          });
        });
      } //if ( ( ! /^nui\.getit\.tab1_onl_norestrict/.test(serviceTitleCode)  ) ){
    } // if (/^nui\.getit\./.test(serviceTitleCode))  
  }

  get currentRecord() {
    let selector = 'prm-full-view-service-container'; //'prm-full-view-service-container'
    let element = angular.element(document.querySelector(selector));
    if (element) {
      let elementCtrl = element.controller(selector);
      // console.log(elementCtrl);
      return elementCtrl.item;
    }
    return null;
  }
}

RequestACopyController.$inject = ['$element', '$compile', '$scope', '$mdDialog', '$http', '$rootScope', 'requestACopyURL', 'MessageService'];

export let requestACopyConfig = {
  bindings: {
    parentCtrl: '<'
  },
  controller: RequestACopyController,
  template: ''
}