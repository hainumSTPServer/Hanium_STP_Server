import Twitter from 'twitter-lite';
import config from '../config/index.js';

const client = new Twitter({
  version: '2',
  extension: false,
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessTokenKey,
  access_token_secret: config.accessTokenSecret,
});

let previousTweetId = null;

let twitterScrapping = {
  client: client,
  recentTweetId: previousTweetId,
};

export default twitterScrapping;
