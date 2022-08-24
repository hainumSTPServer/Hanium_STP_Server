import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config();

export default {
  //port number
  port: parseInt(process.env.PORT, 10),

  //DB
  databaseURL: process.env.SQL_URI,

  //Open API Key
  arriveTimeKey: process.env.ARRIVE_TIME_KEY,
  rideAlightKey: process.env.RIDE_ALIGHT_KEY,

  //Twitter API Key
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  accessTokenKey: process.env.ACCESS_TOKEN_KEY,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  seoulMetroId: process.env.SEOUL_METRO_ID,

  //default api
  api: {
    prefix: '/api',
  },
};
