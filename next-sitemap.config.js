// next-sitemap.config.js
module.exports = {
  siteUrl: "https://grow-wise-farm.netlify.app",
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: path, // generated url
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    };
  },
};
