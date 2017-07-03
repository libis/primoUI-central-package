app.factory('sectionOrdering', function () {
    return function (sections) {
        if (!sections) return false;

        var numSections = sections.length;
        if (!(numSections > 0)) return false;

        var sectionToRemoveArray = [];

        var sectionOrderArray = [
          'brief',
          'citationTrails',
          'activate',
          'display',
          'getit_link2',
          'links',
          'virtualBrowse',
          'action_list',
          'details',
          'tags',
          'altmetrics',
          'journaltoc'
        ];

        /* 
         * brief          : top description
         * activate       : View Online
         * 
         * citationTrails : Citation Trail
         * action_list    : exports-options, citation, mail, pnx/xml (send To)
         * links          : links
         * virtualBrowse  : virtualBrowse
         * details        : details
         * display        : More ??? getit_link1_0 ???
         * tags           : tags
         */

        for (var serviceName in sectionOrderArray) {
            //            console.log(sectionOrderArray[serviceName]);
            var section = sections.filter(function (s) {
                return s.serviceName == sectionOrderArray[serviceName];
            });
            // console.log(section)
            if (section.length >= 1) {
               section.forEach( function (sec) {
                   // console.log(sec);
                   sections.splice(sections.indexOf(sec), 1); //remove
                   sections.splice(sections.length, 0, sec); //add to the end
                });
            }
        }

        for (var serviceName in sectionToRemoveArray) {
            //            console.log(sectionOrderArray[serviceName]);
            var section = sections.filter(function (s) {
                return s.serviceName == sectionToRemoveArray[serviceName];
            });
            // console.log(section)
            if (section.length >= 1) {
                sections.splice(sections.indexOf(section[0]), 1); //remove
            }
        }

        /*
        // Move the 'links' section.
        var linksSection = sections.filter(function (s) {
            return s.serviceName === 'links';
        });
        if (linksSection.length >= 1) {
            sections.splice(sections.indexOf(linksSection[0]), 1); //remove
            sections.splice(numSections, 0, linksSection[0]); //add to the end
        }

        // Move the 'details' section.
        var detailsSection = sections.filter(function (s) {
            return s.serviceName === 'details';
        });
        if (detailsSection.length >= 1) {
            sections.splice(sections.indexOf(detailsSection[0]), 1); //remove
            sections.splice(numSections, 0, detailsSection[0]); //add to the end
        }

        // Move the 'action_list' section.
        var detailsSection = sections.filter(function (s) {
            return s.serviceName === 'action_list';
        });
        if (detailsSection.length >= 1) {
            sections.splice(sections.indexOf(detailsSection[0]), 1); //remove
            sections.splice(numSections, 0, detailsSection[0]); //add to the end
        }

        // Move the 'virtualBrowse' section.
        var browseSection = sections.filter(function (s) {
            return s.serviceName === 'virtualBrowse';
        });
        if (browseSection.length >= 1) {
            sections.splice(sections.indexOf(browseSection[0]), 1); //remove
            sections.splice(numSections, 0, browseSection[0]); //add to the end
        }

        // drop the 'more' section.
        var displayResult = sections.filter(function (s) {
            return s.serviceName === 'display';
        });
        if (displayResult.length >= 1) {
            sections.splice(sections.indexOf(displayResult[0]), 1); //remove 'more' section
        }
        */
        return true;
    };
});