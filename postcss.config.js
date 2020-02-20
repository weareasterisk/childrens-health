const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

const isProd = process.env.NODE_ENV === "production"

const browsers = isProd ? [
  ">0.2%",
  "not dead",
  "not op_mini all"
] : [
  "last 1 chrome version",
  "last 1 firefox version",
  "last 1 safari version"
]

module.exports = {
  modules: true,
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')({
      "grid": true
    }),
    require('postcss-url'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      autoprefixer: { grid: true },
      features: {
          'nesting-rules': true
      },
      browsers: browsers
    }),

    isProd 
    ? cssnano({preset: 'default'}) 
    : null,

    isProd
    ? purgecss({
      content: ['./public/**/*.html', './src/**/*.tsx'],
      defaultExtractor: content => content.match(/[\w-/:%.]+(?<!:)/g) || []
    }) : null
  ],
};