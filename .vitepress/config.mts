import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Centipede-RTK Docs",
  description: "Documentation",
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Main website', link: 'https://www.centipede-rtk.org/' },
    ],
    search: {
      provider: 'local'
    },
    logo: '/logo.svg',
    sidebar: [
      {
        text: 'The Centipede-RTK Network',
        link: '/intro',
        items: [
          { text: 'Access corrections', link: '/access' },
          { text: 'RTK explained', link: '/rtk' },
          { text: 'Coordinate systems', link: '/coordinate-systems' },
          { text: 'Frequently Asked Questions', link: '/faq' },
        ]
      },
      {
        text: 'Build a base station',
        link: '/build-base',
        collapsed: true,
        items: [
          { text: 'Antenna location', link: '/build-base/antenna-location' },
          {
            text: 'Hardware & Assembly',
            link: '/build-base/hardware-assembly',
            items: [
              { text: 'Mosaic-X5 receiver', link: '/build-base/hardware-assembly/receivers/septentrio-mosaic-x5' },
              { text: 'UM98x receiver', link: '/build-base/hardware-assembly/receivers/unicore-um98x' },
              { text: 'F9P receiver', link: '/build-base/hardware-assembly/receivers/u-blox-f9p' },
              // { text: 'X20P/F20P receiver', link: '/build-base/hardware-assembly/receivers/u-blox-x20p-f20p' },
            ]
          },
          {
            text: 'Software',
            items: [
              { text: 'Installation', link: '/build-base/software/installation' },
              { text: 'Configuration', link: '/build-base/software/configuration' },
              { text: 'Update', link: '/build-base/update' },
            ],
          },
          {
            text: 'Positioning',
            link: '/build-base/positioning',
            items: [
              { text: 'France & DROM', link: '/build-base/positioning/france-drom' },
              { text: 'Europe', link: '/build-base/positioning/europe' },
              { text: 'North America', link: '/build-base/positioning/north-america' },
              { text: 'Rest of the World', link: '/build-base/positioning/rest-of-the-world' },
            ],
          },
          { text: 'Setting base coordinates', link: '/build-base/setting-base-coordinates' },
          { text: 'Declaration', link: '/build-base/declaration' },
          { text: 'Troubleshooting', link: '/build-base/troubleshooting' },
        ]
      },
      {
        text: 'Connect my existing base station',
        link: '/connect-base',
      },
      {
        text: 'Use a rover',
        collapsed: true,
        items: [
          { text: 'Build an RTK rover', link: '/rover/build-rover' },
          { text: 'Buy an RTK rover', link: '/rover/buy-rover' },
          { text: 'Smartphone rover apps', link: '/rover/smartphone-rover-apps' },
          {
            text: 'Proprietary hardware',
            collapsed: true,
            items: [
              {
                text: 'Agriculture',
                link: '/rover/proprietary-hardware/agriculture',
                items: [
                  { text: 'John Deere', link: '/rover/proprietary-hardware/agriculture/john-deere' },
                  { text: 'Case IH', link: '/rover/proprietary-hardware/agriculture/case-ih' },
                  { text: 'Fendt', link: '/rover/proprietary-hardware/agriculture/fendt' },
                ],
              },
              { text: 'Emlid', link: '/rover/proprietary-hardware/emlid' },
              { text: 'Trimble', link: '/rover/proprietary-hardware/trimble' },
              { text: 'Spectra', link: '/rover/proprietary-hardware/spectra' },
              { text: 'Known issues', link: '/rover/proprietary-hardware/known-issues' },
            ]
          },
          { text: 'PC rover', link: '/rover/pc-rover' },
        ]
      },
      {
        text: 'Scientific publications',
        link: '/publications',
      },
      {
        text: 'Advanced topics',
        collapsed: true,
        items: [
          { text: 'Tools and resources', link: '/advanced-topics/tools' },
          { text: 'Institutional streams integration', link: '/advanced-topics/institutional-streams' },
          { text: 'NEAR mountpoint', link: '/advanced-topics/near' },
        ]
      },
      { text: 'Telegram', link: 'https://t.me/Centipede_RTK' },
      { text: 'Forum', link: 'https://forum.geocommuns.fr/c/rtk-centipede/18' },
      { text: 'Terms and Conditions', link: 'https://www.centipede-rtk.org/terms-conditions' },
      { text: 'License', link: '/license' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Centipede-rtk' },
    ],
    footer: {
      message: 'CC BY-SA 4.0 - INRAE & contributors. Centipede-RTK database is provided under Open Database License (ODbL) v1.0.',
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    fr: {
      label: 'French',
      lang: 'fr',
      themeConfig: {
        nav: [
          { text: 'Site principal', link: 'https://www.centipede-rtk.org/fr' },
        ],
      }
    }
  },
})
