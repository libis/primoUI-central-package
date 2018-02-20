/*
  Declare your components here.

  Rewrite this when imports can be done dynamically
  http://2ality.com/2017/01/import-operator.html

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
import './utils'

/* import your component configuration*/
import {experimentConfig} from './components/general/experiment'

import {homeIconConfig} from './components/prmLogoAfter/homeIcon'
import {betaSwitchConfig} from './components/prmLogoAfter/betaSwitch'
import {sourceIconConfig} from './components/prmBriefResultAfter/sourceIcon'
import {pnxXmlConfig} from './components/prmSearchResultThumbnailContainerAfter/pnxXml'
import {payMyFinesConfig} from './components/prmFinesOverviewAfter/payMyFines'
import {feedbackConfig} from './components/prmMainMenuAfter/feedback'
import {searchTipConfig} from './components/general/searchTip'
import {disclaimerConfig} from './components/general/disclaimer'
import {reportAProblemConfig} from './components/prmServiceHeaderAfter/reportAProblem'
import {finesMessageConfig as payMyFinesMessageConfig} from './components/prmTopBarBefore/finesMessage'
import {announcementsConfig} from './components/prmTopBarBefore/announcements'
import {promoteLoginConfig} from './components/prmPromoteLogin/PromoteLogin'
import {feedbackAnnouncementConfig} from './components/prmTopBarBefore/feedbackAnnouncement'
import {staticFooterConfig} from './components/general/staticFooter'
import {removeAlertsConfig} from './components/general/removeAlerts'
import {illRequestFormConfig} from './components/prmRequestsAfter/illRequestForm'
import {recommendationItemConfig} from './components/prmRecommendationItemAfter/recommendationItem'

import {databaseLinkConfig} from './components/general/databaseLink'


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
      {name: 'libis-experiment', config: experimentConfig, enabled: false, appendTo: 'prm-messages-and-blocks-overview-after', enableInView: '.*'},
      {name: 'home-icon', config: homeIconConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '.*'},
      {name: 'beta-switch', config: betaSwitchConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '.*'},
      {name: 'source-icon', config: sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '.*'},
      {name: 'pnx-xml', config: pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after', enableInView: '.*'},
      {name: 'pay-my-fines', config: payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after', enableInView: '.*'},
      {name: 'feedback', config: feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '.*'},
      {name: 'report-a-problem', config: reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '.*'},
      {name: 'prm-searchtips', config: searchTipConfig, enabled: true, appendTo: null, enableInView: '.*'},
      {name: 'prm-disclaimer', config: disclaimerConfig, enabled: true, appendTo: null, enableInView: '.*'},
      {name: 'static-footer', config: staticFooterConfig, enabled: true, appendTo: 'prm-explore-main-after', enableInView: '.*'},
      {name: 'static-footer-account', config: staticFooterConfig, enabled: true, appendTo: 'prm-account-after', enableInView: '.*'},
      {name: 'remove-alerts', config: removeAlertsConfig, enabled: true, appendTo: 'prm-add-query-to-saved-searches-after', enableInView: '.*'},
      {name: 'prm-dblink', config: databaseLinkConfig, enabled: false, appendTo: null, enableInView: '.*'},

      /* lbs-components used in html-templates of the package */
      {name: 'promote-login-static-footer', config: promoteLoginConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView:  '^KULeuven'},
     
      {name: 'ill-request-form-overview', config: illRequestFormConfig, enabled:false, appendTo: 'prm-requests-overview-after', enableInView: '.*'},
      {name: 'ill-request-form', config: illRequestFormConfig, enabled:true, appendTo: 'prm-requests-after', enableInView: '^KULeuven|^VIVES'},

      {name: 'announcement-feedback', config: feedbackAnnouncementConfig, enabled:false, appendTo: 'prm-top-bar-before', enableInView: '.*'},

      {name: 'override-getlink-recommendation', config: recommendationItemConfig, enabled: true, appendTo: 'prm-recomendation-item-after', enableInView: '.*'},

      {name: 'announcement', config: announcementsConfig, enabled: false, appendTo: 'prm-top-bar-before', enableInView: '.*'},      
      {name: 'pay-my-fines-message', config: payMyFinesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven'}
    ].filter( (component) => ( component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid) ) );
  }
}
