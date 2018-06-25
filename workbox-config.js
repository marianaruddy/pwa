module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{ico,png,html,js,css}"],
  swDest: "build/sw.js",
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  runtimeCaching: [
    {
      urlPattern: new RegExp(
        "^https://use.fontawesome.com/releases/v5.0.7/js/all.js"
      ),
      handler: "staleWhileRevalidate"
    }
  ]
};
