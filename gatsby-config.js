module.exports = {
    siteMetadata: {
        siteUrl: 'https://martin-fieber.de'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: 'https://martin-fieber.de'
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-remove-trailing-slashes',
        {
            resolve: 'gatsby-plugin-sitemap'
        }
    ]
};
