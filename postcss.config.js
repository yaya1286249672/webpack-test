module.exports = ctx => ({
  parser: ctx.parser ? "sugarss" : false,
  map: ctx.env === "development" ? ctx.map : false,
  plugins: {
   'postcss-preset-env':{},
   'autoprefixer': {},
    cssnano: ctx.env === "production" ? {} : false
  }
});
