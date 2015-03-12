var Twit = require('twit');

module.exports = TwitterService;

function TwitterService () {
}

TwitterService.prototype.init = function (ops) {

    this.ops = ops;

    this.twit = new Twit({
        consumer_key: ops.consumerKey,
        consumer_secret: ops.consumerSecret,
        access_token: ops.token,
        access_token_secret: ops.tokenSecret
    });

    this.endpoint = 'statuses/user_timeline';
    this.params = {
        'screen_name': this.ops.user,
        count: '1',
        exclude_replies: 'true'
    };
};

TwitterService.prototype.call = function (cb) {

    this.twit.get(this.endpoint, this.params, cb);
};
