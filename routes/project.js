const data = require('../data');

module.exports = {
  method: 'GET',
  path: '/project/{slug}',
  handler({params}, reply) {
    const project = data.getProject(params.slug);

    if ( project ) {
      reply.view('project', {
        project,
        subtitle: `${project.title} Project`
      });
    } else {
      reply.redirect('/');
    }
  }
};
