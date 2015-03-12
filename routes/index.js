var projects = require('../data/projects');

module.exports = {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        reply.view('index', {
            subtitle: 'Home',
            projects: projects
        });
    }
};
