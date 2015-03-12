var markdown = require('markdown').markdown;
var projects = require('./projects');
var fs = require('fs');

module.exports = {
    getProject: getProject
};

function getProject (slug) {

    var project = projects[slug];

    if ( !project ) return;

    if ( !project.description ) {
        var description = fs.readFileSync(__dirname + '/md/' + slug + '.md', {encoding: 'utf8'});
        project.description = markdown.toHTML(description);
    }

    return project;
}
