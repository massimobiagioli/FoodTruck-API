import mongoose from 'mongoose';
import { Router } from 'express';
import FoodTruck from '../model/foodtruck';

export default ({ config, db }) => {
  let api = Router();

  // CRUD

  // /v1/FoodTruck/add (Create)
  api.post('/add', (req, res) => {
    let newFoodTruck = new FoodTruck();
    newFoodTruck.name = req.body.name;
    newFoodTruck.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ "message": "FoodTruck was saved succesfully" });
    });
  });

  // /v1/FoodTruck (Read)
  api.get('/', (req, res) => {
    FoodTruck.find({}, (err, foodtrucks) => {
      if (err) {
        res.send(err);
      }
      res.json(foodtrucks);
    });
  });

  // /v1/FoodTruck/:id (Read 1)
  api.get('/:id', (req, res) => {
    FoodTruck.findById(req.params.id, (err, foodtruck) => {
      if (err) {
        res.send(err);
      }
      res.json(foodtruck);
    });
  });

  // /v1/FoodTruck/:id (Update)
  api.put('/:id', (req, res) => {
    FoodTruck.findById(req.params.id, (err, foodtruck) => {
      if (err) {
        res.send(err);
      }
      FoodTruck.name = req.body.name;
      FoodTruck.save(err => {
        if (err) {
          res.send(err);
        }
        res.json({ "message": "FoodTruck info updated" });
      });
    });
  });

  // /v1/FoodTruck/:id (Delete)
  api.delete('/:id', (req, res) => {
    FoodTruck.remove({
      _id: req.params.id
    }, (err, foodtruck) => {
      if (err) {
        res.send(err);
      }
      res.json({ "message": "FoodTruck successfully removed" });
    });
  });

  return api;
}