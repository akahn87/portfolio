var service = require('../services').github;
var moment = require('moment');

module.exports = {
    method: 'GET',
    path: '/api/github',
    handler: function (request, reply) {

        service.call(function (err, res) {

            if ( err ) return reply.code(500);

            var commits = res.payload.commits;

            reply({
                time: moment(new Date(res.created_at)).fromNow(),
                repo: res.repo.name,
                sha: commits[0].sha.substring(0,5),
                link: 'https://github.com/' + res.repo.name + '/commit/' + commits[0].sha
            });
        });
    }
};
