import { Router } from 'express';
import middlewares from '../middlewares/index.js';
const route = Router();

export default app => {
  app.use('/stations', route);

  //도착정보 확인
  route.get(
    '/arrive-info/:stationId',
    middlewares.requestArriveTimeOpenApi,
    middlewares.getRealTime,
    async (req, res) => {
      const station = {
        arriveInfo: req.realTimeArray,
      };

      return res.json(station);
    },
  );

  app.use((error, req, res, next) => {
    return res.json({ errorMessage: error.message });
  });
};
