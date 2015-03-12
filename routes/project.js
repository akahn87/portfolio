var data = require('../data');

module.exports = {
    method: 'GET',
    path: '/project/{slug}',
    handler: function (request, reply) {

        var project = data.getProject(request.params.slug);

        if ( project ) {
            reply.view('project', {
                project: project,
                subtitle: project.title + ' Project'
            });
        } else {
            reply.redirect('/');
        }
    }
};
