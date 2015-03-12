var request = require('request');
var util = require('util');

module.exports = FoursquareService;

function FoursquareService () {
}

FoursquareService.prototype.init = function (ops) {
    this.ops = ops;

    this.endpoint = util.format(
        '%s%s/v2/users/self/checkins?oauth_token=%s&limit=1&v=20140131',
        'https://',
        'api.foursquare.com',
        this.ops.token
    );
};

FoursquareService.prototype.call = function (cb) {

    request({
        url: this.endpoint,
        json: true
    }, function (err, res, body) {

        if ( err ) return cb(err);

        cb(null, body);
    });
};
