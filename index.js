const Hapi = require('hapi');
const Vision = require('vision');
const Inert = require('inert');
require('dotenv').config();

const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 3000;
const RADIX = 10;

const server = Hapi.server({
  host: process.env.HOST || DEFAULT_HOST,
  port: parseInt(process.env.PORT, RADIX) || DEFAULT_PORT,
});

const start = async () => {
  try {
    await server.register(Vision); // template rendering
    await server.register(Inert); // static file and directory handlers

    server.views({
      engines: {
        hbs: require('handlebars')
      },
      relativeTo: __dirname,
      path: './views',
      layout: true,
      layoutPath: './views/layout'
    });

    server.route(require('./routes/index'));
    server.route(require('./routes/project'));
    server.route(require('./routes/static-files'));
    server.route(require('./routes/twitter'));
    server.route(require('./routes/lastfm'));
    server.route(require('./routes/github'));

    await server.start();
    console.log(`Hapi server running at ${server.info.uri}`);
  }catch (err) {
    console.log('Hapi error starting server', err);
  }
};

start();
