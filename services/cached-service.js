class CachedService {
  init(service, ttl) {
    this.service = service;
    this.ttl = typeof ttl === 'undefined' ? 1000 * 60 * 2.5 : ttl;
  }

  async call(cb) {
    const self = this;
    const now = new Date().getTime();

    if ( this.res && (this.lastReqTime + this.ttl) > now ) {
      return this.res.then(r => r.clone());
    }

    this.lastReqTime = now;

    self.res = await this.service.call();

    return self.res;
  }
}

module.exports = CachedService;
