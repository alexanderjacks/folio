const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Alexander Jacks Apps', // Navigation and Site Title
  siteTitleAlt: 'AlexJacksApps', // Alternative Site title for SEO
  siteTitleShort: 'AlexJacksApps', // short_name for manifest
  siteHeadline: 'PWAs, AWS, etc', // Headline for schema.org JSONLD
  siteUrl: 'https://www.alexanderjacks.info', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'SPA with parallax',
  author: 'AlexJacksApps', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@archdukejacks', // Twitter Username
  ogSiteName: 'alexjacksapps', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-138437830-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
