# nuxt-netlify-demo

> Splendid project with Nuxt.js + Netlify

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## [Netlify](https://docs.netlify.com/cli/get-started/)
``` bash
# Install the Netlify CLI
$ npm install netlify-cli -g

# Netlify login
$ netlify login

# Netlify Automated setup
$ netlify init

# Start Netlify dev
$ netlify dev
```

# Install the Netlify CLI
npm install netlify-cli -g

# Start Netlify dev
netlify dev
- Sync repository with project netlify.com
- In Netlify Project > configure Build & Deploy > Edit Settings
    - Build command: `npm run generate`
    - Publish directory: `dist`



For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
