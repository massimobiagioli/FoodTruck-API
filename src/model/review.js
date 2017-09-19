import mongoose from 'mongoose';
import FoodTruck from './foodtruck';

const Schema = mongoose.Schema;

let Review = new Schema({
  title: {
    type: String,
    required: true
  },
  text: String,
  foodtruck: {
    type: Schema.Types.ObjectId,
    ref: 'FoodTruck',
    required: true
  }
});

export default mongoose.model('Review', Review);
