# www.andykahn.net

![Codeship Badge](https://codeship.com/projects/4a8a22f0-aa84-0132-a1e7-1ec81ced6103/status?branch=master)

My personal portfolio site.

## Technologies

- Node.js [Hapi](https://github.com/hapijs/hapi) server
- [Dokku](http://progrium.viewdocs.io/dokku/) Docker hosting
- [Codeship](https://codeship.com) continuous deployment

## Development

Interact with this project via `npm run`. The following npm scripts comprise the main API (check `package.json` for more):

Name | Description
--- | ---
`start` | Starts the server in production mode. Dokku runs this script automatically after deployment to start the app.
`start:dev` | Starts the server in development mode, restarting the server and rebuilding when local files change.

## Deployment

This app conforms to the Heroku Node.js buildpack format, and is therefore deployable on Dokku.

Successfull builds on the `master` branch will trigger Codeship to deploy to a Dokku host and make the changes live.

## App components

### Entry point

The server entry point is `index.js`, which is where Hapi is configured.

### Views

The views are Handlebars templates contained in `views/`.

### Routes

Server route configuration is in `routes/`.

### CSS

CSS is currently not pre or post compiled and served directly from `public/css/styles.css`.

### Client JS

Client JS source code is in `client-js/` and is bundled into `public/js/index.js` using Browserify during a build.

### Data

App data and content is contained in hardcoded JSON in `data/`, no database is currently used. Project descriptions are contained in markdown files in `data/md/` and converted into HTML on demand.
