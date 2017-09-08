/*
  Declare your components here.

  Rewrite this when imports can be done dynamically
  http://2ality.com/2017/01/import-operator.html

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
import './utils'

/* import your component configuration*/
import {experimentConfig} from './components/prmLogoAfter/experiment'
import {homeIconConfig} from './components/prmLogoAfter/homeIcon'
import {betaSwitchConfig} from './components/prmLogoAfter/betaSwitch'
import {sourceIconConfig} from './components/prmBriefResultAfter/sourceIcon'
import {pnxXmlConfig} from './components/prmSearchResultThumbnailContainerAfter/pnxXml'
import {payMyFinesConfig} from './components/prmFinesOverviewAfter/payMyFines'
import {feedbackConfig} from './components/prmMainMenuAfter/feedback'
import {searchTipConfig} from './components/general/searchTip'
import {reportAProblemConfig} from './components/prmServiceHeaderAfter/reportAProblem'
import {finesMessageConfig} from './components/prmTopBarBefore/finesMessage'
import {announcementsConfig} from './components/prmTopBarBefore/announcements'
import {promoteLoginConfig} from './components/prmPromoteLogin/PromoteLogin'

export default class AfterComponents {

  static get all() {
    /*
      name = the sub element in the after element
      config = the imported configuration object
      enabled = true/false should the component be created
      appendTo = The component should be created in this after component.

      ex. {name: 'home-icon', config: homeIconConfig, enabled: true, appendTo: 'prm-logo-after'}
      results in:
        <prm-logo-after parentCtrl='$ctrl'>
          <home-icon parentCtrl='$ctrl'></home-icon>
        </prm-logo-after>
    */
    return [
      {name: 'libis-experiment', config: experimentConfig, enabled: false, appendTo: 'prm-logo-after'},
      {name: 'home-icon', config: homeIconConfig, enabled: true, appendTo: 'prm-logo-after'},
      {name: 'beta-switch', config: betaSwitchConfig, enabled: true, appendTo: 'prm-logo-after'},
      {name: 'source-icon', config: sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after'},
      {name: 'pnx-xml', config: pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after'},
      {name: 'pay-my-fines', config: payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after'},
      {name: 'feedback', config: feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after'},      
      {name: 'report-a-problem', config: reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after'},
      {name: 'prm-searchtips', config: searchTipConfig, enabled: true, appendTo: null},
      {name: 'fines-message', config: finesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before'},
      {name: 'promote-login', config: promoteLoginConfig, enabled: true, appendTo: 'prm-personal-info-after'},
      {name: 'announcement', config: announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before'}
    ].filter((m) => m.enabled);
  }
}
