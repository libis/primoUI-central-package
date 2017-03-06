insertActions([{
        name: "PNX",
        type: 'template',
        icon: {
            set: 'action',
            name: 'ic_stars_24px'
        },
        action: "/primo_library/libweb/jqp/record/{pnx.control.recordid}.pnx"
    },
    {
        name: "XML",
        type: 'template',
        templateVar: ['.xml'],
        icon: {
            set: 'action',
            name: 'ic_stars_24px'
        },
        action: "/primo_library/libweb/jqp/record/{pnx.control.recordid}.xml"
    }
]);
