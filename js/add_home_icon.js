﻿/*
 * Add Home Icon after the library logo 
 * And Language dependant library logo
 * add library-logo-<locale>.png to the custom/<view>/img directory
 * Tom vanmechelen
 */

app.controller('prmLogoAfterController', ['$scope', '$element', '$compile', '$http', function ($scope, $element, $compile, $http) {

    var self = this;
    var vid = window.appConfig['vid'];
    var libraryLogo = window.appConfig.customization.libraryLogo;
    var locale = window.Primo.explore.helper.userSessionManagerService().i18nService.getLanguage();
    var localeLibraryLogo = 'custom/' + vid + '/img/library-logo-' + locale + '.png';

    if (libraryLogo !== localeLibraryLogo) {
        window.appConfig.customization.libraryLogo = localeLibraryLogo;
        $http({
            method: 'GET',
            url: localeLibraryLogo,
        }).then(function (response) {
            $compile($element.parent())($scope)
        }, function (response) {
            // console.log('keep using original img')
        });

    }

    self.getHomePageLink = getHomePageLink;
    function getHomePageLink() {
        return '/primo-explore/search?vid=' + vid;
    }

    self.goToHomePage = goToHomePage;
    function goToHomePage() {
        document.location.href = '/primo-explore/search?vid=' + vid;
    }


}]);
 
app.component('prmLogoAfter',{
    bindings: {parentCtrl: '<'},
    controller: 'prmLogoAfterController',
    template: `
<div id="home-buttons-holder"
    ng-class ="{'fixed-to-top': $ctrl.fixedToTop()}"
    layout="row"
    layout-align="center center"
    class ="layout-align-center-center layout-row"
>
<a class ="md-icon-button button-over-dark md-button md-primoExplore-theme" id="home-button" aria-label="Go to startpage" ng-click='$ctrl.goToHomePage()'  href="{{$ctrl.getHomePageLink()}}" >
<md-icon class ="md-primoExplore-theme">
<svg id="prm_home" width="100%" height="100%" viewBox="0 0 24 24" y="0" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
    <path d="M10,20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
    </md-icon>
</a>
</div>
`
});