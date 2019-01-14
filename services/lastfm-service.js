const fetch = require('node-fetch');
const util = require('util');

class LastFmService {
  init(ops) {
    this.ops = ops;

    this.endpoint = util.format(
      '%s%s/2.0/?method=user.getrecenttracks&user=%s&api_key=%s&format=json&limit=1"',
      'https://',
      'ws.audioscrobbler.com',
      this.ops.user,
      this.ops.key
    );
  }

  async call() { // jshint ignore:line
    try {
      const res = await fetch(this.endpoint); // jshint ignore:line
      const json = await res.json(); // jshint ignore:line

      return json;
    } catch(err) {
      return err;
    }
  }
}

module.exports = LastFmService;
