import library from '../../library/index.js';
import config from '../../config/index.js';

const getMostRecentTweet = async (req, res, next) => {
  const first = 0;
  try {
    const client = library.twitterScrapping.client;
    const tweets = await client.get(`users/${config.seoulMetroId}/tweets`, {
      max_results: 100,
    });
    req.recentTweet = tweets.data[first];
  } catch (err) {
    console.log(err);
  }
  next();
};

export default getMostRecentTweet;
