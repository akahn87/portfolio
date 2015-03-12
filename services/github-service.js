var request = require('request');
var util = require('util');

module.exports = GitHubService;

function GitHubService () {
}

GitHubService.prototype.init = function (ops) {

    this.ops = ops;

    this.endpoint = util.format(
        '%s%s/users/%s/events/public',
        'https://',
        'api.github.com',
        this.ops.user
    );
};

GitHubService.prototype.call = function (cb) {

    request({
        url: this.endpoint,
        headers: {'User-Agent': 'request'},
        json: true
    }, function (err, res, body) {

        if ( err ) return cb(err);

        var event;

        for ( var i=0; i<body.length; i++ ) {
            if ( body[i].type === 'PushEvent' ) {
                event = body[i];
                break;
            }
        }

        cb(event === undefined, event);
    });
};
