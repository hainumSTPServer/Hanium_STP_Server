import { Router } from 'express';
import middlewares from '../middlewares/index.js';

const route = Router();

export default app => {
  app.use('/emergency-alert', route);

  route.get(
    '/',
    middlewares.getMostRecentTweet,
    middlewares.isTweetUpdated,
    middlewares.hasEmergencyKeywords,
    middlewares.manufactureEmergencyAlertText,
    async (req, res) => {
      const alertMessage = {
        isUpdated: req.isUpdated,
        emergencyAlertText: req.emergencyAlertText,
      };
      res.json(alertMessage);
    },
  );
};
