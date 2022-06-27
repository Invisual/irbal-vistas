module.exports = {
  siteMetadata: {
    title: 'Irbal',
    titleTemplate: '%s · Irbal',
    description: 'Para grandes e pequenas obras',
    url: 'https://vistas.irbal.pt',
    siteUrl: 'https://vistas.irbal.pt',
    image:
      'https://irbal.pt/wp-content/uploads/2022/04/logotipo-para-site-02.png',
    defaultImage:
      'https://irbal.pt/wp-content/uploads/2022/04/logotipo-para-site-02.png',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-breakpoints',
    'gatsby-plugin-htaccess',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'ID-AQUI',
        includeInDevelopment: false,
        defaultDataLayer: {
          platform: 'gatsby',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['ID-AQUI'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ['/404/**'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [`Archivo:300,400,500,600,700`],
        },
      },
    },
  ],
}
