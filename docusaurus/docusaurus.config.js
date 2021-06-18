module.exports = {
  title: 'Create Intility App',
  tagline: 'Easy to use templates for Intility developers',
  url: 'https://create.intility.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'intility', // Usually your GitHub org/user name.
  projectName: 'templates', // Usually your repo name.
  themeConfig: {
    defaultMode: 'dark',
    sidebarCollapsible: false,
    navbar: {
      title: 'Create Intility App',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo192.png',
      },
      items: [
        {
          href: '/cra',
          label: 'React',
          position: 'left',
        },
        {
          href: '/dotnet',
          label: '.NET API',
          position: 'left',
        },
        // PYTHON
        // {
        //   href: '/python',
        //   label: 'python',
        //   position: 'left',
        // },
        // EXPRESS
        // {
        //   href: '/express',
        //   label: 'express',
        //   position: 'left',
        // },
        // METROWORKER
        // {
        //   href: '/metroworker',
        //   label: 'metroworker',
        //   position: 'left',
        // },
        // BLAZOR
        // {
        //   href: '/blazor',
        //   label: 'blazor',
        //   position: 'left',
        // },
        {
          href: 'https://github.com/Intility/templates',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Bifrost',
              href: 'https://bifrost.intility.com/',
            },
            {
              label: 'React',
              href: 'https://reactjs.org/',
            },
            {
              label: 'Create React App',
              href: 'https://create-react-app.dev/',
            },
          ],
        },
        {
          title: 'Channels',
          items: [
            {
              label: '#programming',
              href: 'https://intility.slack.com/archives/CRTT6METE',
            },
            {
              label: '#frontend',
              href: 'https://intility.slack.com/archives/CRVGGS6R1',
            },
            {
              label: 'developers.intility.no',
              href: 'https://developers.intility.com/',
            },
          ],
        },
        {
          title: 'Intility Services',
          items: [
            {
              label: 'GitLab',
              href: 'https://gitlab.intility.com/',
            },
            {
              label: 'SonarQube',
              href: 'https://sonarqube.intility.no/',
            },
            {
              label: 'Sentry',
              href: 'https://sentry.intility.no/',
            },
            {
              label: 'OpenShift',
              href: 'https://console.apps.openshift.intility.com/',
            },
            {
              label: 'Azure Portal',
              href: 'https://portal.azure.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intility AS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebarsCra.js'),
          id: 'cra',
          path: 'cra',
          routeBasePath: 'cra',
          // Please change this to your repo.
          editUrl: 'https://github.com/Intility/templates/tree/main/docusaurus',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dotnet',
        path: 'dotnet',
        routeBasePath: 'dotnet',
        sidebarPath: require.resolve('./sidebarsDotnet.js'),
        editUrl: 'https://github.com/Intility/templates/tree/main/docusaurus',

        /**
         * Filters any pages on 2nd level if the label starts with underscore (_).
         * This sidebar plugin is currently not in use and should be refactored into
         * a proper front matter plugin with property to indicate if article is hidden.
         * @param {*} param0
         * @returns
         */
        sidebarItemsGenerator: async function ({
          defaultSidebarItemsGenerator,
          ...args
        }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          for (let category of sidebarItems) {
            if (category.items) {
              category.items = category.items.filter(
                (i) => !i.label || !i.label.startsWith('_'),
              );
            }
          }
          return sidebarItems.filter(
            (c) => !c.label || !c.label.startsWith('_'),
          );
        },
        // ... other options
      },
    ],
    // PYTHON
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'python',
    //     path: 'python',
    //     routeBasePath: 'python',
    //     sidebarPath: require.resolve('./sidebarsPython.js'),
    //     editUrl: 'https://github.com/Intility/templates/tree/main/docusaurus',
    //     // ... other options
    //   },
    // ],
    // EXPRESS
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'express',
    //     path: 'express',
    //     routeBasePath: 'express',
    //     sidebarPath: require.resolve('./sidebarsExpress.js'),
    //     editUrl: 'https://github.com/Intility/templates/tree/main/docusaurus',
    //     // ... other options
    //   },
    // ],
    // METROWORKER
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'metroworker',
    //     path: 'metroworker',
    //     routeBasePath: 'metroworker',
    //     sidebarPath: require.resolve('./sidebarsMetroworker.js'),
    //     editUrl: 'https://github.com/Intility/templates/tree/main/docusaurus',
    //     // ... other options
    //   },
    // ],
    // BLAZOR
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'blazor',
    //     path: 'blazor',
    //     routeBasePath: 'blazor',
    //     sidebarPath: require.resolve('./sidebarsBlazor.js'),
    //     editUrl: 'https://github.com/Intility/templates/tree/main/docusaurus',
    //     // ... other options
    //   },
    // ],
  ],
};
