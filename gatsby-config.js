
module.exports = {
  siteMetadata: {
      title: '#Caslify Studio',
      author: 'caslify creative studio'
  },
  plugins: [
        'gatsby-plugin-sass',
        {

          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'src',
            path: `${__dirname}/src/`
          }
        },
        'gatsby-transformer-remark'
  ]
}
