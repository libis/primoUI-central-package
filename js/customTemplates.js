angular.module('centralCustom').run(['$templateCache', function($templateCache) {$templateCache.put('promote_login_en_US.html','\r\n<md-dialog aria-label=Aanmelden">\r\n    <md-dialog-content id="Aanmelden">\r\n\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Sign in</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n\r\n        <md-content style="padding:1em;">\r\n\r\n            <div class="flexbox-parent">\r\n                <div layout="row" layout-align="left center">\r\n                    <div class="md-title">\r\n                      <md-button md-autofocus class="md-raised md-primary"\r\n                                 onclick="javascript:angular.element(document.querySelectorAll(\'prm-authentication button\')[0]).triggerHandler(\'click\');" id="mimic_signin"\r\n                                 style="box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); margin-right: 0;">Sign In</md-button>\r\n                    to get complete results and to request items </div>\r\n                    <!--\r\n                    <div>\r\n                        <md-button md-autofocus class="md-raised md-primary"\r\n                                   onclick="javascript:angular.element(document.querySelectorAll(\'prm-authentication button\')[0]).triggerHandler(\'click\');" id="mimic_signin"\r\n                                   style="box-shadow: 0 2px 5px 0 rgba(0,0,0,.26)">Sign In</md-button>\r\n\r\n                    </div>\r\n                  -->\r\n                </div>\r\n\r\n                <div class="md-title" style="margin-top:0.7em">\r\n                    Do not show this message again:\r\n                </div>\r\n\r\n\r\n                <div>\r\n                    <md-radio-group ng-model="primoPromoteLogin" ng-change="changePromoteOption()">\r\n                        <md-radio-button value="alwaysSignin" aria-label="Always Sign In automaticaly">\r\n                          Redirect me to the Sign In page. I will be automatically signed in when I am already\r\n                          authenticated via the KU Leuven Central Login.\r\n                        </md-radio-button>\r\n                        <!--\r\n                        <md-radio-button value="neverSignin" aria-label="Never Sign In automaticaly">\r\n                            I will use the sign in option when I think it\'s relevant\r\n                        </md-radio-button>\r\n                        <md-radio-button value="maybeSignin" aria-label="Ask again next time">\r\n                            I don\'t know yet. Show this message the next time I use Limo.\r\n                        </md-radio-button>\r\n                      -->\r\n                    </md-radio-group>\r\n                      </div>\r\n                          <div>\r\n                    <md-button  md-autofocus flex class="md-primary" ng-click="closeDialog()"    style="box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); margin-right: 0;">\r\n                      Continue as guest\r\n                    </md-button>\r\n                     \u2013 Limited access for non-KU Leuven users\r\n\r\n                </div>\r\n\r\n                <md-dialog-actions>\r\n                    <div layout="row" class="demo-dialog-button">\r\n                        <md-button md-autofocus class="md-primary" ng-click="closeDialog()">\r\n                            Close\r\n                        </md-button>\r\n                    </div>\r\n                </md-dialog-actions>\r\n\r\n\r\n\r\n</md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n');
$templateCache.put('promote_login_nl_BE.html','\r\n<md-dialog aria-label=Aanmelden">\r\n    <md-dialog-content id="Aanmelden">\r\n\r\n        <md-toolbar>\r\n            <div class="md-toolbar-tools">\r\n                <h2>Aanmelden</h2>\r\n                <span flex></span>\r\n                <md-button class="md-icon-button" ng-click="closeDialog()">\r\n                    <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n\r\n        <md-content style="padding:1em;">\r\n\r\n            <div class="flexbox-parent">\r\n                <div layout="row" layout-align="left center">\r\n                    <div class="md-title">\r\n                                    <md-button md-autofocus class="md-raised md-primary"\r\n                                               onclick="javascript:angular.element(document.querySelectorAll(\'prm-authentication button\')[0]).triggerHandler(\'click\');" id="mimic_signin"\r\n                                               style="box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); margin-right: 0;">Meld aan</md-button>\r\n om volledige resultaten te vinden en om documenten aan te vragen.\r\n\r\n</div>\r\n\r\n\r\n\r\n                <!--\r\n                    <div class="md-title">Bedankt om me hierop te attenderen. Ik zal onmiddellijk </div>\r\n                    <div>\r\n                        <md-button md-autofocus class="md-raised md-primary"\r\n                                   onclick="javascript:angular.element(document.querySelectorAll(\'prm-authentication button\')[0]).triggerHandler(\'click\');" id="mimic_signin"\r\n                                   style="box-shadow: 0 2px 5px 0 rgba(0,0,0,.26)">Aanmelden</md-button>\r\n\r\n                    </div>\r\n                  -->\r\n                </div>\r\n\r\n                <div class="md-title" style="margin-top:0.7em">\r\n                      Toon deze boodschap niet meer:\r\n                </div>\r\n                <div>\r\n                    <md-radio-group ng-model="primoPromoteLogin" ng-change="changePromoteOption()">\r\n                        <md-radio-button value="alwaysSignin" aria-label="Always Sign In automaticaly">\r\n                          Ga meteen naar de loginpagina bij starten van Limo. Wanneer ik al aangemeld ben via de\r\n                          Centrale KU Leuven loginpagina ben ik automatisch ook aangemeld in Limo.\r\n                        </md-radio-button>\r\n                        <!--\r\n                        <md-radio-button value="neverSignin" aria-label="Never Sign In automaticaly">\r\n                            Ik weet de aanmeldknop wel te vinden in deze interface en beslis zelf wanneer ik zal aanmelden.\r\n                        </md-radio-button>\r\n                        <md-radio-button value="maybeSignin" aria-label="Ask again next time">\r\n                            Ik weet het nog niet zeker. Toon deze boodschap volgende keer opnieuw.\r\n                        </md-radio-button>\r\n                      -->\r\n                    </md-radio-group>\r\n                </div>\r\n                <div>\r\n                  <md-button  md-autofocus flex class="md-primary" ng-click="closeDialog()"    style="box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); margin-right: 0;">\r\n                    Gebruik Limo als gast\r\n                  </md-button>\r\n                    - Beperkte toegang voor niet-KU Leuvengebruikers\r\n                </div>\r\n\r\n                <md-dialog-actions>\r\n                    <div layout="row" class="demo-dialog-button">\r\n                        <md-button md-autofocus class="md-primary" ng-click="closeDialog()">\r\n                            Sluiten\r\n                        </md-button>\r\n                    </div>\r\n                </md-dialog-actions>\r\n\r\n\r\n\r\n        </md-content>\r\n    </md-dialog-content>\r\n</md-dialog>\r\n');}]);