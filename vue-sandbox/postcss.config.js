module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: [
          "./public/**/*.html",
          "./assets/**/*.css",
          "./src/**/*.vue",
          "./src/**/*.js"
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
  ]
};
