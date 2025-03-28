/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles', 'sass')],
    prependData: `@import 'abstracts/_index.scss';`
  },
  compiler: {
    styledComponents: true,
    removeConsole: false
  },
  output: 'export'
  // distDir: 'build',
  // trailingSlash: true
}

module.exports = nextConfig
