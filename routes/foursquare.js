var service = require('../services').foursquare;
var moment = require('moment');

module.exports = {
    method: 'GET',
    path: '/api/foursquare',
    handler: function (request, reply) {

        service.call(function (err, res) {

            if ( err ) return reply.code(500);

            var checkin = res.response.checkins.items[0];

            reply({
                venue: checkin.venue.name,
                time: moment(parseInt(checkin.createdAt, 10)*1000).fromNow(),
                city: checkin.venue.location.city,
                link: 'https://foursquare.com/v/'+checkin.venue.id
            });
        });
    }
};
