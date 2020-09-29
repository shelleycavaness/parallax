const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Shelley Cavaness', // Navigation and Site Title
  siteTitleAlt: 'shelley cavaness', // Alternative Site title for SEO
  siteTitleShort: 'Shelley Cavaness', // short_name for manifest
  siteHeadline: 'shelley cavaness', // Headline for schema.org JSONLD
  siteUrl: 'https://shelleycavaness.github.io/gatbsy', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'shellyeah!',
  author: 'Shelley Cavaness', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@shelleycavaness', // Twitter Username
  ogSiteName: 'shelley cavaness', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.pink,
  backgroundColor: tailwind.colors.blue,
}
