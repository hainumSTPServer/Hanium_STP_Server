import library from '../../library/index.js';

const isTweetUpdated = async (req, res, next) => {
  const recentTweet = req.recentTweet;
  if (recentTweet.id == library.twitterScrapping.previousTweetId) {
    req.isUpdated = false;
  } else {
    req.isUpdated = true;
    library.twitterScrapping.previousTweetId = recentTweet.id;
  }
  next();
};

export default isTweetUpdated;
