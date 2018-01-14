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
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: process.env.TRACKING_ID,
                anonymize: true
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-remove-trailing-slashes',
        'gatsby-plugin-netlify'
    ]
};
