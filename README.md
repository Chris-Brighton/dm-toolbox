# DM's Toolbox

## Install Setup

Install the version of node relevant to your operating system > [Node Website](https://nodejs.org/en/download/)

Download the zip folder from git for the project > [Download Link version-0.0.1](https://github.com/Chris-Brighton/dm-toolbox/archive/refs/heads/version-0.0.1.zip)

Unzip the folder after downloading

Open a windows command prompt and navigate to the unzipped folder using `cd` > [Microsoft Help Website](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd)

Once you have navigated to the `dm-toolbox` folder you will need to run 2 commands.
First run `npm install`
When that has finished run `npm run start` and leave the terminal running you can minimize it just don't close it (this will close the application)

When the application starts it should say the address of the website you need to go to in your browser,
if not you can click hear > [DM's Toolbox Site](http://localhost:3000)

---

## Everything Below This Pint Is For Developers

---

## Info

The application makes use of the nuxt `server` dir and has a connection to a local sqlite database.
The server makes use of 2 of my other git repos.

### [nuxt-serve](https://github.com/Chris-Brighton/nuxt-serve)

Controls the services and the express app

### [sequelize-handlers](https://github.com/Chris-Brighton/sequelize-handlers)

Just to parse queries from the front end ready for sequelize, sequelize-handlers is an updated fork of [botter-workshop/sequelize-handlers](https://github.com/botter-workshop/sequelize-handlers)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
