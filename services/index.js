const CachedService = require('./cached-service');
const TwitterService = require('./twitter-service');
const LastFmService = require('./lastfm-service');
const GitHubService = require('./github-service');

const twitter = new TwitterService();
twitter.init({
  user: process.env.TWITTER_USER,
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  token: process.env.TWITTER_TOKEN,
  tokenSecret: process.env.TWITTER_TOKEN_SECRET
});

const twitterCached = new CachedService();
twitterCached.init(twitter);

const lastFm = new LastFmService();
lastFm.init({
  user: process.env.LASTFM_USER,
  key: process.env.LASTFM_KEY
});

const lastFmCached = new CachedService();
lastFmCached.init(lastFm);

const github = new GitHubService();
github.init({
  user: process.env.GITHUB_USER
});

const githubCached = new CachedService();
githubCached.init(github);

module.exports = {
  twitter: twitterCached,
  lastFm: lastFmCached,
  github: githubCached
};
