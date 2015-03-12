var request = require('request');
var util = require('util');

module.exports = LastFmService;

function LastFmService () {
}

LastFmService.prototype.init = function (ops) {

    this.ops = ops;

    this.endpoint = util.format(
        '%s%s/2.0/?method=user.getrecenttracks&user=%s&api_key=%s&format=json&limit=1"',
        'https://',
        'ws.audioscrobbler.com',
        this.ops.user,
        this.ops.key
    );
};

LastFmService.prototype.call = function (cb) {

    request({
        uri: this.endpoint,
        json: true
    }, function (err, res, body) {

        if ( err ) return cb(err);

        cb(null, body);
    });
};
