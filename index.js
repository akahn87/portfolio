var hapi = require('hapi');

var server = new hapi.Server();

server.connection({
  port: process.env.PORT || 3000
});

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
//server.route(require('./routes/foursquare'));
server.route(require('./routes/github'));

server.start(function () {
  console.log('Server started', server.info.uri);
});
