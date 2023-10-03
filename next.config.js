/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/')],
    prependData: `@use 'shared/styles/mixins.module.scss' as *;
    @use 'shared/styles/variables.module.scss' as *;`
  },
};
