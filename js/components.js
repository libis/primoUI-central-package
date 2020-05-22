/*
  Declare your components here.

  Rewrite this when imports can be done dynamically
  http://2ality.com/2017/01/import-operator.html

  KULeuven/LIBIS (c) 2017
  Mehmet Celik
*/
import './utils';
/* import your component configuration*/
import {experimentConfig} from './components/general/experiment'
import {homeIconConfig} from './components/prmLogoAfter/homeIcon'

import {newSearchButtonConfig} from './components/prmLogoAfter/newSearchButton'
import {languageDependentLogoConfig} from './components/prmLogoAfter/languageDependentLogo'
import {viewLogoConfig} from './components/prmLogoAfter/viewLogo'

import {searchCollectionsConfig} from './components/prmCollectionGalleryHeaderAfter/exploreSearchCollections'

import {betaSwitchConfig} from './components/prmLogoAfter/betaSwitch'
import {sourceIconConfig} from './components/prmBriefResultAfter/sourceIcon'
import {altmetricConfig} from './components/prmBriefResultAfter/altmetric'
import {altmetricsBadgeConfig} from './components/prmFullViewAfter/altmetricsBadge'

import {pnxXmlConfig} from './components/prmSearchResultThumbnailContainerAfter/pnxXml'
import {payMyFinesConfig} from './components/prmFinesOverviewAfter/payMyFines'
import {feedbackConfig} from './components/prmMainMenuAfter/feedback'
import {searchTipConfig} from './components/general/searchTip'
import {disclaimerConfig} from './components/general/disclaimer'

import {exposeJwtConfig} from './components/general/exposeJwt'

import {LanguageSelectionConfig} from './components/general/ConfigLanguageSelection'
import {DeprecatedViewsConfig} from './components/general/deprecatedViews'

import {reportAProblemConfig} from './components/prmServiceHeaderAfter/reportAProblem'
import {requestACopyConfig} from './components/prmServiceHeaderAfter/requestACopy'
import {requestACopyOfEsDocConfig} from './components/prmServiceHeaderAfter/requestACopyOfEsDoc'

import {finesMessageConfig as payMyFinesMessageConfig} from './components/prmTopBarBefore/finesMessage'
import {announcementsConfig} from './components/prmTopBarBefore/announcements'
import {autoLoginCheckboxConfig,autoLoginConfig,promoteLoginConfig} from './components/prmAutoPromoteLogin/autoPromoteLogin'

import {feedbackAnnouncementConfig} from './components/prmTopBarBefore/feedbackAnnouncement'
import {staticFooterConfig} from './components/general/staticFooter'
import {removeAlertsConfig} from './components/general/removeAlerts'
import {removeCheckLocationsConfig} from './components/general/removeCheckLocations'
import {illRequestFormConfig} from './components/prmRequestsAfter/illRequestForm'
import {recommendationItemConfig} from './components/prmRecommendationItemAfter/recommendationItem'

import {databaseLinkConfig} from './components/general/databaseLink'
//import {removeOpenAccessConfig} from './components/prmFacetAfter/removeOpenAccess'

import {searchAlsoConfig} from './components/prmFacetAfter/searchAlso'
import {searchAlsoBodyConfig} from './components/prmFacetExactAfter/searchAlsoBody'
import {searchAlsoBodyBibConfig} from './components/prmFacetExactAfter/searchAlsoBodyBib'
import {searchAlsoBodyGoogleConfig} from './components/prmFacetExactAfter/searchAlsoBodyGoogle'
import {searchAlsoBodyWorldcatConfig} from './components/prmFacetExactAfter/searchAlsoBodyWorldcat'
import {browzineConfig} from './components/prmSearchResultAvailabilityLineAfterController/browzine'
import {filterFacetValuesConfig} from './components/prmFacetAfter/filterFacetValues'

import {locationsForBibliographicViewConfig} from './components/prmFullViewAfter/locationsForBibliographicView'
import {briefLocationsForBibliographicViewConfig} from './components/prmBriefResultAfter/briefLocationsForBibliographicView'
import {URLDecodeLinkLabelControllerConfig} from './components/prmFullViewServiceContainerAfter/URLDecodeLinkLabel'


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

      {name: 'home-icon', config: homeIconConfig, enabled: false, appendTo: null, enableInView: ''},
      {name: 'beta-switch', config: betaSwitchConfig, enabled: false, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)'},

      {name: 'language-dependent-logo', config: languageDependentLogoConfig, enabled: false, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)'},
      {name: 'view-logo', config: viewLogoConfig, enabled: true, appendTo: 'prm-logo-after', enableInView: '^(?!ECB)'},

      {name: 'source-icon', config: sourceIconConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^(?!Lirias)'},
      {name: 'altmetric', config: altmetricConfig, enabled: true, appendTo: 'prm-brief-result-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB'},

      {name: 'altmetrics-badge', config: altmetricsBadgeConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '^Lirias|^KULeuven|^VDIC|^UCLL|^TMOREAM|^TMOREK|^SERV|^NBB'},

      {name: 'locations-for-bibliographic-view', config: locationsForBibliographicViewConfig, enabled: true, appendTo: 'prm-full-view-after', enableInView: '^JESUITS'},
      {name: 'brief-locations-for-bibliographic-view', config: briefLocationsForBibliographicViewConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '^JESUITS'},

      {name: 'pnx-xml', config: pnxXmlConfig, enabled: true, appendTo: 'prm-brief-result-container-after', enableInView: '.*'},
      {name: 'pay-my-fines', config: payMyFinesConfig, enabled: true, appendTo: 'prm-fines-overview-after', enableInView: '.*'},
      {name: 'feedback', config: feedbackConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!(ECB|SYNTRA))'},
      {name: 'language-selection', config: LanguageSelectionConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)'},
      {name: 'deprecated-vids', config: DeprecatedViewsConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^(?!ECB)'},
      
      {name: 'new-search-button', config: newSearchButtonConfig, enabled: true, appendTo: 'prm-top-nav-bar-links-after', enableInView: '^(?!ECB)'},
      {name: 'report-a-problem', config: reportAProblemConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '.*'},
      
      {name: 'request-a-copy-head', config: requestACopyConfig, enabled: true, appendTo: 'prm-service-header-after', enableInView: '^Lirias'},
      //{name: 'request-a-copy', config: requestACopyConfig, enabled: true, appendTo: 'prm-full-view-service-container-after', enableInView: '^Lirias'},
      {name: 'request-a-copy-es-doc', config: requestACopyOfEsDocConfig, enabled: false, appendTo: 'prm-full-view-service-container-after', enableInView: '^VLP'},

      {name: 'user-jwt', config: exposeJwtConfig, enabled: true, appendTo: 'prm-main-menu-after', enableInView: '^VLP|^ECB'},

      {name: 'prm-searchtips', config: searchTipConfig, enabled: true, appendTo: null, enableInView: '.*'},
      {name: 'prm-disclaimer', config: disclaimerConfig, enabled: true, appendTo: null, enableInView: '.*'},
            {name: 'static-footer', config: staticFooterConfig, enabled: true, appendTo: 'prm-explore-footer-after', enableInView: '.*'},
      //{name: 'static-footer-account', config: staticFooterConfig, enabled: true, appendTo: 'prm-account-after', enableInView: '.*'},
      {name: 'remove-alerts', config: removeAlertsConfig, enabled: false, appendTo: 'prm-add-query-to-saved-searches-after', enableInView: '.*'},
      {name: 'remove-check-locations', config: removeCheckLocationsConfig, enabled: false, appendTo: 'prm-search-result-availability-line-after', enableInView: 'Lirias'},
      {name: 'prm-dblink', config: databaseLinkConfig, enabled: false, appendTo: null, enableInView: '.*'},

      /* lbs-components used in html-templates of the package */
      {name: 'auto-login-static-footer', config: autoLoginCheckboxConfig, enabled: true, appendTo: 'lbs-promote-login', enableInView:  '^KULeuven|^UCLL'},
      {name: 'promote-login', config: promoteLoginConfig, enabled: true, appendTo: 'prm-authentication-after', enableInView:  '^KULeuven|^UCLL'},
      {name: 'auto-login', config: autoLoginConfig, enabled: true, appendTo: 'prm-authentication-after', enableInView:  'KULeuven_LUCA|KULeuven_ODISEE|KULeuven_TMOREK|KULeuven_TMOREM|KULeuven_UCLL'},

      {name: 'ill-request-form-overview', config: illRequestFormConfig, enabled:false, appendTo: 'prm-requests-overview-after', enableInView: '.*'},
      {name: 'ill-request-form', config: illRequestFormConfig, enabled:false, appendTo: 'prm-requests-after', enableInView: '^KULeuven|^VIVES'},

      {name: 'announcement-feedback', config: feedbackAnnouncementConfig, enabled:false, appendTo: 'prm-top-bar-before', enableInView: '.*'},

      {name: 'override-getlink-recommendation', config: recommendationItemConfig, enabled: true, appendTo: 'prm-recomendation-item-after', enableInView: '.*'},

      {name: 'announcement', config: announcementsConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '.*'},
      {name: 'pay-my-fines-message', config: payMyFinesMessageConfig, enabled: true, appendTo: 'prm-top-bar-before', enableInView: '^KULeuven'},
     //  {name: 'remove-open-access', config: removeOpenAccessConfig, enabled: false, appendTo: 'prm-facet-after', enableInView: '.*'},
     {name: 'search-also', config: searchAlsoConfig, enabled: true, appendTo: 'prm-facet-after', enableInView: '^KULeuven|^VIVES|^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL'},
     {name: 'search-also-body', config: searchAlsoBodyConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^KULeuven|^VIVES|^ODISEE|^FARO'},
     {name: 'search-also-body-bib', config: searchAlsoBodyBibConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^VIVES|^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL'},
     {name: 'search-also-body-google', config: searchAlsoBodyGoogleConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^ODISEE|^FARO|^TMOREK|^TMOREMA|^UCLL'},
     {name: 'search-also-body-worldcat', config: searchAlsoBodyWorldcatConfig, enabled: true, appendTo: 'prm-facet-exact-after', enableInView: '^KULeuven'},

     {name: 'browzine', config: browzineConfig, enabled: true, appendTo: 'prm-search-result-availability-line-after', enableInView: '^KULeuven|^ECB'},
     
     {name: 'filter-facet-values', config: filterFacetValuesConfig, enabled: false, appendTo: 'prm-facet-after', enableInView: '^JESUITS'},

     {name: 'search-collections', config: searchCollectionsConfig, enabled: true, appendTo: 'prm-collection-gallery-header-after', enableInView: '^KULeuven'},
     {name: 'url-decode-link-label', config: URLDecodeLinkLabelControllerConfig, enabled: true, appendTo: 'prm-service-links-after', enableInView: '^KADOC'}



    ].filter( (component) => ( component.enabled && new RegExp(component.enableInView).test(window.appConfig.vid) ) );
  }
}