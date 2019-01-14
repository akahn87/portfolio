const service = require('../services').github;
const moment = require('moment');

module.exports = {
  method: 'GET',
  path: '/api/github',
  handler: async (request, h) => {
    const res = await service.call();
    if (!res) return {};

    const commits = res.payload.commits;

    return {
      time: moment(new Date(res.created_at)).fromNow(),
      repo: res.repo.name,
      sha: commits[0].sha.substring(0,5),
      link: `https://github.com/${res.repo.name}/commit/${commits[0].sha}`
    };
  }
};
