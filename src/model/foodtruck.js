import mongoose from 'mongoose';
import Review from './review';

const Schema = mongoose.Schema;

let FoodTruck = new Schema({
  name: {
    type: String,
    required: true
  },
  foodtype: {
    type: String,
    required: true
  },
  avgcost: Number,
  geometry: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      "lat": Number,
      "lng": Number
    }
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

export default mongoose.model('FoodTruck', FoodTruck);
