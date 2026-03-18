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
              { text: 'Select a receiver', link: '/build-base/hardware-assembly/select-receiver' },
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
              { text: 'Update', link: '/build-base/software/update' },
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
        text: 'Connect existing base station',
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
        text: 'Access RINEX files',
        link: '/rinex',
      },
      {
        text: 'Scientific publications',
        link: '/publications',
      },
      {
        text: 'Advanced topics',
        collapsed: true,
        items: [
          { text: 'NEAR mountpoint', link: '/advanced-topics/near' },
          { text: 'Bands & signals', link: '/advanced-topics/bands-signals' },
          { text: 'Tools and resources', link: '/advanced-topics/tools' },
          { text: 'Institutional streams integration', link: '/advanced-topics/institutional-streams' },
        ]
      },
      { text: 'Telegram', link: 'https://t.me/Centipede_RTK' },
      { text: 'Forum', link: 'https://forum.geocommuns.fr/c/rtk-centipede/18' },
      { text: 'Terms and Conditions', link: 'https://www.centipede-rtk.org/terms-conditions' },
      { text: 'License', link: '/license' },
      { text: 'Old version (FR)', link: 'https://docs.centipede.fr' },
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
        search: {
          provider: 'local'
        },
        logo: '/logo.svg',
        sidebar: [
          {
            text: 'Le Réseau Centipede-RTK',
            link: '/fr/intro',
            items: [
              { text: 'Accéder aux corrections', link: '/fr/access' },
              { text: 'Le RTK', link: '/fr/rtk' },
              { text: 'Systèmes de coordonnées', link: '/fr/coordinate-systems' },
              { text: 'Questions fréquentes', link: '/fr/faq' },
            ]
          },
          {
            text: 'Construire une base',
            link: '/fr/build-base',
            collapsed: true,
            items: [
              { text: 'Emplacement de l\'antenne', link: '/fr/build-base/antenna-location' },
              {
                text: 'Matériel & Assemblage',
                link: '/fr/build-base/hardware-assembly',
                items: [
                  { text: 'Sélection d\'un récepteur', link: '/fr/build-base/hardware-assembly/select-receiver' },
                  { text: 'Récepteur Mosaic-X5', link: '/fr/build-base/hardware-assembly/receivers/septentrio-mosaic-x5' },
                  { text: 'Récepteur UM98x', link: '/fr/build-base/hardware-assembly/receivers/unicore-um98x' },
                  { text: 'Récepteur F9P', link: '/fr/build-base/hardware-assembly/receivers/u-blox-f9p' },
                  // { text: 'Récepteur X20P/F20P', link: '/fr/build-base/hardware-assembly/receivers/u-blox-x20p-f20p' },
                ]
              },
              {
                text: 'Logiciel',
                items: [
                  { text: 'Installation', link: '/fr/build-base/software/installation' },
                  { text: 'Configuration', link: '/fr/build-base/software/configuration' },
                  { text: 'Mise à jour', link: '/fr/build-base/software/update' },
                ],
              },
              {
                text: 'Positionnement',
                link: '/fr/build-base/positioning',
                items: [
                  { text: 'France & DROM', link: '/fr/build-base/positioning/france-drom' },
                  { text: 'Europe', link: '/fr/build-base/positioning/europe' },
                  { text: 'Amérique du Nord', link: '/fr/build-base/positioning/north-america' },
                  { text: 'Reste du monde', link: '/fr/build-base/positioning/rest-of-the-world' },
                ],
              },
              { text: 'Configuration des coordonnées de la base', link: '/fr/build-base/setting-base-coordinates' },
              { text: 'Déclaration', link: '/fr/build-base/declaration' },
              { text: 'Dépannage', link: '/fr/build-base/troubleshooting' },
            ]
          },
          {
            text: 'Connecter une base existante',
            link: '/fr/connect-base',
          },
          {
            text: 'Utiliser un rover',
            collapsed: true,
            items: [
              { text: 'Construire un rover', link: '/fr/rover/build-rover' },
              { text: 'Acheter un rover RTK', link: '/fr/rover/buy-rover' },
              { text: 'Applications mobiles pour rover', link: '/fr/rover/smartphone-rover-apps' },
              {
                text: 'Matériel propriétaire',
                collapsed: true,
                items: [
                  {
                    text: 'Agriculture',
                    link: '/fr/rover/proprietary-hardware/agriculture',
                    items: [
                      { text: 'John Deere', link: '/fr/rover/proprietary-hardware/agriculture/john-deere' },
                      { text: 'Case IH', link: '/fr/rover/proprietary-hardware/agriculture/case-ih' },
                      { text: 'Fendt', link: '/fr/rover/proprietary-hardware/agriculture/fendt' },
                    ],
                  },
                  { text: 'Emlid', link: '/fr/rover/proprietary-hardware/emlid' },
                  { text: 'Trimble', link: '/fr/rover/proprietary-hardware/trimble' },
                  { text: 'Spectra', link: '/fr/rover/proprietary-hardware/spectra' },
                  { text: 'Problèmes connus', link: '/fr/rover/proprietary-hardware/known-issues' },
                ]
              },
              { text: 'PC rover', link: '/fr/rover/pc-rover' },
            ]
          },
          {
            text: 'Accéder aux fichiers RINEX',
            link: '/fr/rinex',
          },
          {
            text: 'Publications scientifiques',
            link: '/fr/publications',
          },
          {
            text: 'Sujets avancés',
            collapsed: true,
            items: [
              { text: 'NEAR mountpoint', link: '/fr/advanced-topics/near' },
              { text: 'Bandes & Signaux', link: '/fr/advanced-topics/bands-signals' },
              { text: 'Outils et ressources', link: '/fr/advanced-topics/tools' },
              { text: 'Intégration des flux institutionnels', link: '/fr/advanced-topics/institutional-streams' },
            ]
          },
          { text: 'Telegram', link: 'https://t.me/Centipede_RTK' },
          { text: 'Forum', link: 'https://forum.geocommuns.fr/c/rtk-centipede/18' },
          { text: 'Termes et Conditions', link: 'https://www.centipede-rtk.org/fr/terms-conditions' },
          { text: 'Licence', link: '/fr/license' },
          { text: 'Ancienne version', link: 'https://docs.centipede.fr' },
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/Centipede-rtk' },
        ],
        footer: {
          message: 'CC BY-SA 4.0 - INRAE & contributeurs. La base de données Centipede-RTK est fournie sous la licence Open Database License (ODbL) v1.0.',
        },
      }
    }
  },
})
