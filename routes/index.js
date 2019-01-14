var projects = require('../data/projects');

module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, h) => h.view('index', {
    subtitle: 'Home',
    projects
  })
};
