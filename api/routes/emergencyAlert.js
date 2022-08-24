import { Router } from 'express';
import middlewares from '../middlewares/index.js';

const route = Router();

export default app => {
  app.use('/emergency-alert', route);

  route.get('/', middlewares.getMostRecentTweet, async (req, res) => {
    // res.send(req.recentTweet);
    res.end();
  });
};
