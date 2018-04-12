export default class AltmetricsService {
    constructor($rootScope, $compile, $mdToast, $timeout, $window) {
        this.rootScope = $rootScope;
        this.compile = $compile;
        this.mdToast = $mdToast;
        this.timeout = $timeout;
        this.window = $window;
        let counter = 0;

        this.checkAltmetricscripts = function () {
            var interval = 200;
            var endTime = Number(new Date()) + 15000; // stop control after 5 seconds

            var wait_until_altmetrics_loaded = function (resolve, reject) {
                // If the condition is met, we're done! 
                var result = typeof window._altmetric_embed_init === 'function';
                if (result) {
                    resolve(result);
                }
                // If the condition isn't met but the timeout hasn't elapsed, go again
                else if (Number(new Date()) < endTime) {
                    setTimeout(wait_until_altmetrics_loaded, interval, resolve, reject);
                }
                // Didn't match and too much time, reject!
                else {
                    reject(new Error('Wait until altmetrics is loaded timed out'));
                }
            };
            return new Promise(wait_until_altmetrics_loaded);
        }
    }

    addAltmetrics(altmetricsElementSelector) {
        return this.checkAltmetricscripts().then(function (result) {
          //  console.log('Loading altmetrics: We kunnen starten');
            window._altmetric_embed_init(altmetricsElementSelector);
            return result;
        });
    }

};

AltmetricsService.$inject = ['$rootScope', '$compile', '$mdToast', '$timeout', '$window'];
