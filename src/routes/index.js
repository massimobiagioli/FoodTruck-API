import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import account from '../controller/account';
import foodtruck from '../controller/foodtruck';

let router = express();

// connect to db
initializeDb(db => {

  // internal middlewares
  router.use(middleware({ config, db }));

  // api routes (/v1)
  router.use('/account', account({ config, db }));
  router.use('/foodtruck', foodtruck({ config, db }));

});

export default router;
