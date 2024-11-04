import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  future: {
    experimental_faster: true,
  },
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
    prism: {
      additionalLanguages: ['csharp'],
    },
    navbar: {
      title: 'Create Intility App',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo192.png',
      },
      items: [
        {
          href: '/react',
          label: 'React',
          position: 'left',
        },
        {
          href: '/dotnet',
          label: '.NET API',
          position: 'left',
        },
        {
          href: '/fastapi',
          label: 'FastAPI',
          position: 'left',
        },
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
              label: 'Vite',
              href: 'https://vitejs.dev/',
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
              label: 'Backstage',
              href: 'https://backstage.apps.aa.intility.com/',
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
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: undefined,
          id: 'react',
          path: 'react',
          routeBasePath: 'react',
          // Please change this to your repo.
          editUrl: 'https://github.com/Intility/templates/tree/main/docusaurus',
          sidebarCollapsible: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
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
        sidebarPath: undefined,
        editUrl: 'https://github.com/Intility/templates/tree/main/docusaurus',
        sidebarCollapsible: false,

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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'fastapi',
        path: 'fastapi',
        routeBasePath: 'fastapi',
        sidebarPath: undefined,
        editUrl: 'https://github.com/Intility/templates/tree/main/docusaurus',
        sidebarCollapsible: false,
        // ... other options
      },
    ],
  ],
};

export default config;
