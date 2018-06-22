/*
  Replece templates.

  Replace the default primo templates http://localhost:8003/primo-explore/lib/templates.js
  with custom templates

  KULeuven/LIBIS (c) 2018
  Tom Vanmechelen
*/
import './utils'

/* import your templates */

import userAreaHTML from '../html/templates/user-area.html'
import libraryCardMenuHTML from '../html/templates/library-card-menu.html'
import changeLangHTML from '../html/templates/change-lang.html'
import authenticationHTML from '../html/templates/authentication.html'

export default class Templates {
    static get all() {
        /*
          id = templateId in the templateCache 
          template = the imported tempalte
          enabled = true/false should the component be created
          enableInView = regex to define in which views the template has to be replaced.
    
          ex. {id: 'components/search/topbar/userArea/user-area.html', template: userAreaHTML, enabled: true, enableInView: '.*'}
          results in:
            $templateCache.put('components/search/topbar/userArea/user-area.html',userAreaHTML);
        */
        return [{
                id: 'components/search/topbar/userArea/user-area.html',
                template: userAreaHTML,
                enabled: true,
                enableInView: '.*'
            },
            {
                id: 'components/search/topbar/userArea/libraryCard/library-card-menu.html',
                template: libraryCardMenuHTML,
                enabled: true,
                enableInView: '.*'
            },
            {
                id: 'components/search/topbar/userArea/authentication.html',
                template: authenticationHTML,
                enabled: true,
                enableInView: '.*'
            },
            {
                id: 'components/infra/lang/change-lang.htm',
                template: changeLangHTML,
                enabled: true,
                enableInView: '.*'
            }
        ].filter((template) => (template.enabled && new RegExp(template.enableInView).test(window.appConfig.vid)));
    }
}