angular.module('centralCustom').run(['$templateCache', function($templateCache) {$templateCache.put('footer_en_US.html','<style>\r\n\r\nprm-facet [sticky].is-stuck {\r\n    max-height: calc(100% - 65px);\r\n}\r\n\r\n.__gt-md prm-page-nav-menu {\r\n    bottom: 55px\r\n}\r\n\r\n\r\n    div#footer,\r\n    div#footer a {\r\n        color: #a9cdd6;\r\n    }\r\n\r\n    div#footer {\r\n        height: 35px;\r\n        width: 100%;\r\n        background-color: #4d6b82;\r\n\r\n        padding: 0 1em;\r\n        font-size: small;\r\n       align-items: center;\r\n    }\r\n\r\n    div#footer div#disclaimer {\r\n        display:flex;\r\n        flex-direction: row;\r\n        justify-content: space-around;\r\n    }\r\n\r\n    div#lbs-promote-login {\r\n        text-align: right;\r\n        align-items: center;\r\n    }\r\n\r\n    div#lbs-promote-login md-checkbox ._md-icon {\r\n        transform: scale(.7);\r\n    }\r\n\r\n    div#lbs-promote-login md-checkbox ._md-container {\r\n        top: 0px\r\n    }\r\n</style>\r\n\r\n<div id="footer" class="layout-row">\r\n    <div class="hide-xs layout-row" style="align-items: center"  style=\'flex:1 auto\'>\r\n        <div class="hide-xs" style="flex: 0 1 auto; margin-right:1em">\r\n            <a href="http://www.libis.be" target="libis">Copyright \xA9 LIBIS</a>\r\n\r\n        </div>\r\n        <div style="flex: 0 1 auto;">\r\n            <img id="limo_logo" src="https://limo.libis.be/primo_library/libweb/libis/images/limo.png" alt="Limo" height="30px" \r\n            style="padding-top:4px; padding-left:6px; display:inline-block;">\r\n            <!--\r\n            <br>\r\n            <span style="font-size: xx-small">\r\n                Based on Primo from\r\n                \r\n                <a href="http://www.exlibrisgroup.com/"  target="exl">Ex Libris</a>\r\n            </span>\r\n        -->                \r\n   \r\n        </div>\r\n    </div>\r\n    <div style=\'flex:1 auto\'>\r\n        <div id="disclaimer">\r\n            <a href="http://www.kuleuven.be/kuleuven/disclaimer.html" target="kuleuven">Disclaimer</a>\r\n            <a href="https://admin.kuleuven.be/icts/cookiebeleid/" target="kuleuven">Cookiebeleid</a>\r\n        </div>\r\n\r\n    </div>\r\n    <div class="hide-xs" id="lbs-promote-login"  style=\'flex:2 auto\'>\r\n        <lbs-promote-login></lbs-promote-login>\r\n    </div>\r\n\r\n\r\n</div>');
$templateCache.put('footer_nl_BE.html','<style>\r\n\r\nprm-facet [sticky].is-stuck {\r\n    max-height: calc(100% - 65px);\r\n}\r\n\r\n.__gt-md prm-page-nav-menu {\r\n    bottom: 55px\r\n}\r\n\r\n\r\n    div#footer,\r\n    div#footer a {\r\n        color: #a9cdd6;\r\n    }\r\n\r\n    div#footer {\r\n        height: 35px;\r\n        width: 100%;\r\n        background-color: #4d6b82;\r\n        padding: 0 1em;\r\n        font-size: small;\r\n       align-items: center;\r\n    }\r\n\r\n\r\n        div#footer div#disclaimer {\r\n            display:flex;\r\n            flex-direction: row;\r\n            justify-content: space-around;\r\n        }\r\n    \r\n        div#lbs-promote-login {\r\n            text-align: right;\r\n            align-items: center;\r\n        }\r\n    \r\n        div#lbs-promote-login md-checkbox ._md-icon {\r\n            transform: scale(.7);\r\n        }\r\n    \r\n        div#lbs-promote-login md-checkbox ._md-container {\r\n            top: 0px\r\n        }\r\n    </style>\r\n    \r\n    <div id="footer" class="layout-row">\r\n        <div class="hide-xs layout-row" style="align-items: center"  style=\'flex:1 auto\'>\r\n            <div class="hide-xs" style="flex: 0 1 auto; margin-right:1em">\r\n                <a href="http://www.libis.be" target="libis">Copyright \xA9 LIBIS</a>\r\n    \r\n            </div>\r\n            <div style="flex: 0 1 auto;">\r\n                <img id="limo_logo" src="https://limo.libis.be/primo_library/libweb/libis/images/limo.png" alt="Limo" height="30px" \r\n                style="padding-top:4px; padding-left:6px; display:inline-block;">\r\n                <!--\r\n                <br>\r\n                <span style="font-size: xx-small">\r\n                    Based on Primo from\r\n                    \r\n                    <a href="http://www.exlibrisgroup.com/"  target="exl">Ex Libris</a>\r\n                </span>\r\n            -->                \r\n       \r\n            </div>\r\n        </div>\r\n        <div style=\'flex:1 auto\'>\r\n            <div id="disclaimer">\r\n                <a href="http://www.kuleuven.be/kuleuven/disclaimer.html" target="kuleuven">Disclaimer</a>\r\n                <a href="https://admin.kuleuven.be/icts/cookiebeleid/" target="kuleuven">Cookiebeleid</a>\r\n            </div>\r\n    \r\n        </div>\r\n        <div class="hide-xs" id="lbs-promote-login"  style=\'flex:2 auto\'>\r\n            <lbs-promote-login></lbs-promote-login>\r\n        </div>\r\n    \r\n    \r\n    </div>');
$templateCache.put('promote_login_en_US.html','\r\n<md-dialog aria-label=Aanmelden">\r\n    <md-dialog-content id="Aanmelden">\r\n\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Sign in</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n\r\n        <md-content style="padding:1em;">\r\n\r\n            <div class="flexbox-parent">\r\n                <div layout="row" layout-align="left center">\r\n                    <div class="md-title">\r\n                        <md-button md-autofocus class="md-raised md-primary"\r\n                        ng-click="loginDialog()"\r\n                        id="mimic_signin" style="box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); margin-right: 0;">Sign In</md-button>\r\n                    to get complete results and to request items </div>\r\n                </div>\r\n\r\n                <div layout="row" layout-align="left center" style="padding:14px;">\r\n                    <!--\r\n                    <md-radio-group ng-model="primoPromoteLogin" ng-change="changePromoteOption()">\r\n                        <md-radio-button value="alwaysSignin" aria-label="Always Sign In automaticaly">\r\n                            Next time, bring me to the Sign In page and do not show this message again\r\n                            (I will be automatically signed in when I am already logged in via the KU Leuven Central Login.) \r\n                        </md-radio-button>\r\n                    </md-radio-group>\r\n                -->\r\n\r\n                    <md-checkbox ng-change="changePromoteOption()" ng-model="primoPromoteLogin" ng-true-value="\'alwaysSignin\'" aria-label="Always Sign In automaticaly?">\r\n                        Next time, bring me to the Sign In page and do not show this message again.<br/>\r\n                        (I will be automatically signed in when I am already logged in via the KU Leuven Central Login.) \r\n                    </md-checkbox>\r\n\r\n\r\n\r\n                      </div>\r\n                          <div>\r\n                    <md-button  md-autofocus flex class="md-primary" ng-click="closeDialog()"    style="box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); margin-right: 0;">\r\n                      Continue as guest\r\n                    </md-button>\r\n                     \u2013 Limited access for non-KU Leuven users\r\n                </div>\r\n\r\n                <md-dialog-actions>\r\n                    <div layout="row" class="demo-dialog-button">\r\n                        <md-button md-autofocus class="md-primary" ng-click="closeDialog()">\r\n                            Close\r\n                        </md-button>\r\n                    </div>\r\n                </md-dialog-actions>\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n');
$templateCache.put('promote_login_nl_BE.html','\r\n<md-dialog aria-label=Aanmelden">\r\n    <md-dialog-content id="Aanmelden">\r\n\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Aanmelden</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n\r\n        <md-content style="padding:1em;">\r\n\r\n            <div class="flexbox-parent">\r\n                <div layout="row" layout-align="left center">\r\n                    <div class="md-title">\r\n                        <md-button md-autofocus class="md-raised md-primary"\r\n                        ng-click="loginDialog()"\r\n                        id="mimic_signin" style="box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); margin-right: 0;">Meld aan</md-button>\r\n om volledige resultaten te vinden en om documenten aan te vragen.\r\n\r\n</div>\r\n\r\n                </div>\r\n\r\n                <div layout="row" layout-align="left center" style="padding:14px;">\r\n\r\n                        <md-checkbox ng-change="changePromoteOption()" ng-model="primoPromoteLogin" ng-true-value="\'alwaysSignin\'" aria-label="Always Sign In automaticaly?">\r\n                                Breng me volgende keer onmiddellijk naar de login pagina en toon deze boodschap niet meer.<br/>\r\n                                (Ik zal automatisch aangemeld zijn als ik reed ben ingelogd via de KU Leuven Central Login.)\r\n                        </md-checkbox>\r\n\r\n                </div>\r\n                <div>\r\n                  <md-button  md-autofocus flex class="md-primary" ng-click="closeDialog()"    style="box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); margin-right: 0;">\r\n                    Gebruik Limo als gast\r\n                  </md-button>\r\n                    - Beperkte toegang voor niet-KU Leuvengebruikers\r\n                </div>\r\n\r\n                <md-dialog-actions>\r\n                    <div layout="row" class="demo-dialog-button">\r\n                        <md-button md-autofocus class="md-primary" ng-click="closeDialog()">\r\n                            Sluiten\r\n                        </md-button>\r\n                    </div>\r\n                </md-dialog-actions>\r\n\r\n\r\n\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n');}]);