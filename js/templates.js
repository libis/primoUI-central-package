/*
  Replace templates.

  Replace the default primo templates http://localhost:8003/primo-explore/lib/templates.js
  with custom templates

  KULeuven/LIBIS (c) 2018
  Tom Vanmechelen
*/
import './utils'

/* import your templates */

import changeLangWithoutUserAreaHTML from '../html/templates/change-lang-without-user-area.html'
import prmLoanBugFixHTML from '../html/templates/prm-loan-bug-fix.html'
import prmLiriasBriefResultContainerHTML from '../html/templates/prm-lirias-brief-result-container.html'

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
                template: changeLangWithoutUserAreaHTML,
                enabled: true,
                enableInView: 'VDIC'
            },
            {
                id: 'components/account/loans/loan.html',
                template: prmLoanBugFixHTML,
                enabled: true,
                enableInView: '.*'
            },
            {
                id: 'components/search/briefResult/briefResultContainer.html',
                template: prmLiriasBriefResultContainerHTML,
                enabled: true,
                enableInView: 'Lirias'
            }
        ].filter((template) => (template.enabled && new RegExp(template.enableInView).test(window.appConfig.vid)));
    }
}
