module.exports = {
    title: "Leonids Blog",
    description: "Ich schreibe hier nach Lust und Laune...",
    
    themeConfig:{
            displayAllHeaders: true,
            nav: [
                { text: 'Impressum', link: '/impressum.html' },
                { text: 'Mitmachen', link: '/contribute.html' },
            ],
            sidebar: [
                {
                    title: 'Wissenswert',
                    collapsable: false,
                    children: [
                        '/blog/',
                        '/toolbox/',
                    ]
                },
                {
                    title: 'Lesezeichen',
                    collapsable: false,
                    children: [
                    '/quellen/'
                    ]
                },
                ]
        }
};
