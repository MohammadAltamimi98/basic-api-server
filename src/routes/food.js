'use strict';
const express = require('express');
const validator = require('../middleware/validator');
const Food = require('../models/food');
const router = express.Router();
const food = new Food();

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', validator, createFood);
router.put('/:id', validator, updateFood);
router.delete('/:id', validator, deleteFood);


function getFood(req, res) {
  const resObj = food.read(req.params.id);
  res.json(resObj);
}

function createFood(req, res) {
  const resObj = food.read(req.params.id, req.body);
  res.json(resObj);
}

function updateFood(req, res) {
  const resObj = food.read(req.body);
  res.json(resObj);
}

function deleteFood(req, res) {
  const resObj = food.read(req.params.id);
  res.json(resObj);
}

module.exports = router;