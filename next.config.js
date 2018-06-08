const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    cssModules: true,
    exportPathMap: () => ({
        '/': { page: '/' },
        '/legal-notice': { page: '/legal-notice' },
        '/privacy-policy': { page: '/privacy-policy' }
    })
});
