import mongoose from 'mongoose';
import config from './config';

export default callback => {
  //mongoose.Promise = global.promise;  // For promise use
  let db = mongoose.connect(config.mongoUrl);
  callback(db);
}
