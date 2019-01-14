const markdown = require('markdown').markdown;
const projects = require('./projects');
const fs = require('fs');

module.exports = {
  getProject: getProject
};

function getProject (slug) {
  const project = projects[slug];

  if ( !project ) return;

  if ( !project.description ) {
    const description = fs.readFileSync(`${__dirname}/md/${slug}.md`, {encoding: 'utf8'});
    project.description = markdown.toHTML(description);
  }

  return project;
}
