const fetch = require('node-fetch');
const util = require('util');

class GitHubService {
  init(ops) {
    this.ops = ops;

    this.endpoint = util.format(
      '%s%s/users/%s/events/public',
      'https://',
      'api.github.com',
      this.ops.user
    );
  }

  async call() { // jshint ignore:line
    try {
      const res = await fetch(this.endpoint); // jshint ignore:line
      const json = await res.json(); // jshint ignore:line

      let event;

      for ( let i=0; i < json.length; i++ ) {
        if ( json[i].type === 'PushEvent' ) {
          event = json[i];
          break;
        }
      }

      return event;
    } catch(err) {
      return err;
    }
  }
}

module.exports = GitHubService;
