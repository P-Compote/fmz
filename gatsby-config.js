module.exports = {
  siteMetadata: {
    title: `Fiatalok a Magyar Zenéért`,
    siteUrl: 'https://fmz.ngo',
    description: 'a Fiatalok a Magyar Zenéért Egyesület (FMZ) honlapja.',
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `@slixites/gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:300,400,400i,500,600,700`],
        display: 'swap',
        preconnect: true,
        attributes: {
          rel: 'stylesheet preload prefetch',
          as: 'style',
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-smoothscroll`,
      options: {
        behavior: 'smooth',
      },
    },
  ],
};
