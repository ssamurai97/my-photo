// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.

require('dotenv').config({path: '.env'})


module.exports = {
  siteMetadata: {
    title: `photos`,
    siteUrl: 'https://gatsby.photo',
    description: 'awesome photos',
    twitter: '@kuchlongphoto',
  },

  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '5zk6nmkl',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
