var service = require('../services').lastFm;
var moment = require('moment');

module.exports = {
    method: 'GET',
    path: '/api/lastfm',
    handler: function (request, reply) {

        service.call(function (err, res) {

            if ( err ) return reply.code(500);

            var track;

            if ( Array.isArray(res.recenttracks.track) ) {
                track = res.recenttracks.track[0];
            } else {
                track = res.recenttracks.track;
            }

            var time;

            if ( track['@attr'] && track['@attr'].nowplaying === 'true' ) {
                time = 'now';
            } else {
                time = moment(new Date(track.date['#text'])).fromNow();
            }

            reply({
                track: track.name,
                artist: track.artist['#text'],
                link: track.url,
                time: time
            });
        });
    }
};
