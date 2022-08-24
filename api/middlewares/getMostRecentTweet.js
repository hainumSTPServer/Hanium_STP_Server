import library from '../../library/index.js';
import config from '../../config/index.js';

const getMostRecentTweet = async (req, res, next) => {
  try {
    library.createNewTwitterClient.recentTweetId =
      library.createNewTwitterClient.recentTweetId + 1;
    const client = library.createNewTwitterClient.client;
    const tweets = await client.get(`users/${config.seoulMetroId}/tweets`);
    req.recentTweet = tweets.data[7];
    console.log(req.recentTweet.text);
    console.log(library.createNewTwitterClient.recentTweetId);
  } catch (err) {
    console.log(err);
  }
  next();
};

export default getMostRecentTweet;
