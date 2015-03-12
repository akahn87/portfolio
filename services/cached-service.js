module.exports = CachedService;

function CachedService () {
}

CachedService.prototype.init = function (service, ttl) {

    this.service = service;
    this.ttl = typeof ttl === 'undefined' ? 1000*60*2.5 : ttl;
};

CachedService.prototype.call = function (cb) {

    var self = this;
    var now = new Date().getTime();

    if ( this.res && (this.lastReqTime + this.ttl) > now ) {
        return cb(null, this.res);
    }

    this.lastReqTime = now;

    this.service.call(function (err, res) {

        if ( err ) {
            self.res = null;
            cb(err);
        } else {
            self.res = res;
            cb(null, res);
        }
    });
};
