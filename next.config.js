const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    cssModules: true,
    exportPathMap: () => ({
        '/': { page: '/' },
        '/legal-notice': { page: '/legalNotice' },
        '/privacy-policy': { page: '/privacyPolicy' }
    })
});
