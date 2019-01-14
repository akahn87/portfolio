const service = require('../services').lastFm;
const moment = require('moment');

module.exports = {
  method: 'GET',
  path: '/api/lastfm',
  /* jshint ignore:start */
  handler: async (request, h) => {
    const res = await service.call();
    if (!res) return {};

    let track;

    if ( Array.isArray(res.recenttracks.track) ) {
      track = res.recenttracks.track[0];
    } else {
      track = res.recenttracks.track;
    }

    let time;

    if ( track['@attr'] && track['@attr'].nowplaying === 'true' ) {
      time = 'now';
    } else {
      time = moment(new Date(track.date['#text'])).fromNow();
    }

    return {
      track: track.name,
      artist: track.artist['#text'],
      link: track.url,
      time
    };
  }
  /* jshint ignore:end */
};
