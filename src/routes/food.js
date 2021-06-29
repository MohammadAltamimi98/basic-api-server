'use strict';
const express = require('express');
const validatorFood = require('../middleware/validatorFood');
const Food = require('../models/food');
const router = express.Router();
const food = new Food();

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', validatorFood, createFood);
router.put('/:id', validatorFood, updateFood);
router.delete('/:id', validatorFood, deleteFood);


function getFood(req, res) {
  const resObj = food.read(req.params.id);
  res.status(200).json(resObj);
}

function createFood(req, res) {
  const resObj = food.create(req.body);
  res.status(200).json(resObj);
}

function updateFood(req, res) {
  const resObj = food.update(req.params.id, req.body);
  res.status(200).json(resObj);
}

function deleteFood(req, res) {
  const resObj = food.delete(req.params.id);
  res.status(200).json(resObj);
}

module.exports = router;