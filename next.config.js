/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/')],
    prependData: `@use 'shared/styles/_mixins.module.scss' as *;
    @use 'shared/styles/_variables.module.scss' as *;`
  },
};
