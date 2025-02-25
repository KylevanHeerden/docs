const sidebar = [
    {
        title: "Getting Started",
        collapsable: false,
        children: [
            "/getting-started/introduction",
            "/getting-started/quick-start",
        ]
    },
    {
    title: 'Guides',
    collapsable: false, 
    children: [
        '/guides/make-your-first-request',
        "/getting-started/command-line-interface"
    ]
    },
    {
    title: 'References',
    collapsable: false,
    children: [
        '/references/resource-oriented-design',
        '/references/core-concepts'
    ],
    },
    {
        title: "Other Resources",
        path: "/other-resources/other-resources",
        collapsable: false,
    }
];

module.exports = {
    // site config
    base: "/",
    lang: 'en-UK',
    title: 'alis.exchange',
    description: 'This is my first VuePress site',
    head: [
        ['link', { rel: 'icon', href: '../.vuepress/public/assets/images/_EX.png' }]
      ],
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      repo: "alis-x/docs",
      docsDir: 'docs',
      docsBranch: 'main',
      editLinks: true,
      logo: "https://github.com/alis-x/docs/blob/main/docs/.vuepress/public/assets/images/alis_exchange.png?raw=true",
      displayAllHeaderLinks: true,
      sidebar: sidebar,
      nextLinks: false,
      prevLinks: false,
    },
  }