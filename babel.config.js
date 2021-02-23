process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;
module.exports = {
  presets: [
    [
      '@vue/app', {
        polyfills: [
          'es.promise',
          'es.symbol'
        ],
      }
    ],
    [
      "@babel/preset-env", {
        modules: false,
        useBuiltIns: "entry",
        targets: "> 0.25%, last 2 versions, ie >= 11"
      }
    ]
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    '@babel/plugin-transform-block-scoping',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-proposal-object-rest-spread'
  ]
}
