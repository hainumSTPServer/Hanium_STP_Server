import { Router } from 'express';
import user from './routes/user.js';
import station from './routes/station.js';
import bookmarkedStation from './routes/bookmarkedStation.js';
import recentlyUsedStation from './routes/recentlyUsedStation.js';
import emergencyAlert from './routes/emergencyAlert.js';

export default () => {
  const app = Router();
  user(app);
  station(app);
  bookmarkedStation(app);
  recentlyUsedStation(app);
  emergencyAlert(app);
  return app;
};
