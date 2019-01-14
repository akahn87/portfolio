'use strict';

const xhr = require('xhr');
const dom = require('ampersand-dom');

const twitterEl = document.querySelector('.js-twitter');
const githubEl = document.querySelector('.js-github');
const lastFmEl = document.querySelector('.js-lastfm');

xhr({uri: '/api/twitter', json: true}, makeHandler(twitterEl, updateTweet));
xhr({uri: '/api/lastfm', json: true}, makeHandler(lastFmEl, updateLastFm));
xhr({uri: '/api/github', json: true}, makeHandler(githubEl, updateGitHub));

function makeHandler (el, f) {
  return (err, res, body) => {
    if ( err ) return;

    dom.removeClass(el, 'u-hidden');

    f(el, body);
  };
}

function updateGitHub (el, body) {
  const shaEl = el.querySelector('.js-sha');
  const repoEl = el.querySelector('.js-repo');
  const timeEl = el.querySelector('.js-time');

  if (Object.keys(body).length === 0) {
    timeEl.textContent = 'nowhere public recently...';
  }else {
    shaEl.href = body.link;
    repoEl.href = body.link;

    shaEl.textContent = body.sha;
    repoEl.textContent = body.repo;
    timeEl.textContent = body.time;
  }
}

function updateLastFm(el, {link, time, track, artist}) {
  const verbStemEl = el.querySelector('.js-verb-stem');
  const trackEl = el.querySelector('.js-track');
  const artistEl = el.querySelector('.js-artist');
  const timeEl = el.querySelector('.js-time');

  trackEl.href = link;
  artistEl.href = link;

  verbStemEl.textContent = time === 'now' ? 'ing' : 'ed';
  trackEl.textContent = track;
  artistEl.textContent = artist;
  timeEl.textContent = time;
}

function updateTweet(el, {link, text, time}) {
  const twitterTweetLinkEl = el.querySelector('.js-link');
  const twitterTextEl = el.querySelector('.js-text');
  const twitterTimeEl = el.querySelector('.js-time');

  twitterTweetLinkEl.href = link;
  twitterTextEl.innerHTML = `“${text}”`;
  twitterTimeEl.textContent = time;
}
