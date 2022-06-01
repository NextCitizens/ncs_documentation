


// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NextCitizens',
  tagline: 'NextCitizens is a powerful and optimized core for your FiveM server based on RolePlay.',
  url: 'https://NextCitizens.github.io/', // Your website URL
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NextCitizens', // Usually your GitHub org/user name.
  projectName: 'ncs_documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "framework",
          routeBasePath: "framework"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [[
    "@docusaurus/plugin-content-docs",
    {
      id: "exampleserver",
      path: "exampleserver",
      routeBasePath: "exampleserver"
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "txrecipe",
      path: "txrecipe",
      routeBasePath: "txrecipe"
    },
  ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark"
      },
      navbar: {
        items: [

          {
            href: '/',
            label: 'Home',
            position: 'left',
          },

          {
            type : 'doc',
            docId: 'home',
            label: 'Framework', 
            position: 'left'
          },

          // {
          //   type : 'doc',
          //   docId: 'home',
          //   docsPluginId: "exampleserver",
          //   label: 'Example Server', 
          //   position: 'left'
          // },

          // {
          //   type : 'doc',
          //   docId: 'home',
          //   docsPluginId: "txrecipe",
          //   label: 'TxRecipe', 
          //   position: 'left'
          // },

          {
            href: 'https://discord.gg/N6f7Cejn9Q',
            label: 'Official Discord',
            position: 'right',
          },

          {
            href: 'https://github.com/NextCitizens',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;