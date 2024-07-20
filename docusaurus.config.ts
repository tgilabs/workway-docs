import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'מדריך למשתמש',
  tagline: 'כל מה שצריך לדעת על הפלטפורמה שלנו',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://docs.workway.co.il',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tgilabs', // Usually your GitHub org/user name.
  projectName: 'workway-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'he',
    locales: ['he'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/background.png',
    navbar: {
      title: 'מדריך למשתמש',
      logo: {
        alt: 'WorkWay Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://updates.workway.co.il',
          label: 'עדכונים',
          position: 'left',
        },
        {
          href: 'https://workway.co.il',
          label: 'פלטפרומת WorkWay',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `כל הזכויות שמורות © ${new Date().getFullYear()} TeGriAi<br>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
