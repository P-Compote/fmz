module.exports = {
  siteMetadata: {
    title: `Fiatalok a Magyar Zenéért`,
    siteUrl: 'https://fmz.thinkaholists.com',
    description: 'a Fiatalok a Magyar Zenéért Egyesület (FMZ) honlapja.',
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`alegreya sans\:300,400,400i,700`, `roboto`],
        display: 'swap',
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
