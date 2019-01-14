const service = require('../services').twitter;
const moment = require('moment');
const twitterText = require('twitter-text');

module.exports = {
  method: 'GET',
  path: '/api/twitter',
  /* jshint ignore:start */
  handler: async (request, h) => {
    const res = await service.call();
    if (!res) return {};

    const tweet = res.data[0];

    return {
      text: twitterText.autoLink(tweet.text),
      time: moment(new Date(tweet.created_at)).fromNow(),
      link: `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
    };
  }
  /* jshint ignore:end */
};
