# dVideo dApp

This is the main javascript application you can use on dVideo. This is probably the starting point for anyone wanting to contribute to d.tube.

## Preview

![dVideo Homepage Preview](https://i.imgur.com/kKeS77i.png)

## Install

### Install Meteor
* Linux and Mac: `curl https://install.meteor.com/ | sh`
* Windows: [link](https://www.meteor.com/install)

### Install the app

Clone this repository and `meteor npm install` in it. This will install all dependencies coming from npm including the ones required for development.

### Start the app
Finally, do `meteor` in the folder to start the app in development mode.
##### Options:
* `-p 3456` for running on a different port than the default 3000.
* `--production` will minify and merge the javascript and css files.

Meteor will automatically push any change on the code to the browser while you keep the meteor dev server running.

## Going in-depth
### Working with Uploads

For doing anything on the upload side, it is strongly recommended to run your own [dvideo/ipfs-uploader](https://github.com/dvideo/ipfs-uploader). Once running, simply turn the `localhost` setting to `true` in `client/settings.js` and it will upload locally instead of our production servers.

### Working on the Player

As you can see, we use the embed directly available on get.dvideo.io. This is the [dvideo/embed](https://github.com/dvideo/embed) repository. Feel free to clone it and directly point the `client/views/commons/videos/player.js` to your file:// version of the player if you want to make changes that include the player.

### Working with pre-rendering for bots

The [dvideo/minidvideo](https://github.com/dvideo/minidvideo) repository is responsible for all the pre-rendering and serving a decent version of d.tube to bots which normally wouldn't be able to.

## Structure

 - `.meteor` meteor files, don't touch unless you know what you are doing.
 - `.vscode` if you use visual studio code.
 - `public` all the static files like pictures, fonts and translations.
 - `client` all the app code
 - - `client/collections` minimongo collections that templates feed from
 - - `client/css` css files.
 - - `client/lib` semantic ui related code.
 - - `client/views` templates, each has 2 files, html and js, a handlebar template and associated logic.
 - - - `client/views/commons` all the re-used templates
 - - - `client/views/pages` all the templates matching a route in `router.js`
 - - - `client/views/topbar` the fixed menu on top of the app
 - - - `client/views/sidebar` the sidebar menu

## Roadmap
The plan is to keep on pushing key features of traditional video platforms to d.tube, and decentralizing it all over time. Our roadmap shows what is centralized / decentralized at the moment in the project and where work needs to be put.
https://docs.google.com/presentation/d/10JjkCmQjKCo0p4wObrffcmApA9JwNpdMkpIfmEnir-U/edit?usp=sharing

## Common Issues

If you are using windows, the `meteor npm` seems to be buggy at times. You can try using the normal `npm` instead if you have that installed.

After each meteor or package.json update, you will need to re-run `meteor npm install`

For any help, feel free to join us in our [Discord Channel](https://discord.gg/dvideo)
