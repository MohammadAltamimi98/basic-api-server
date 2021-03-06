'use strict';
const express = require('express');
const validatorClothes = require('../middleware/validatorClothes');
const Clothes = require('../models/clothes');
const router = express.Router();
const clothes = new Clothes();


router.get('/', getClothes);
router.get('/:id', validatorClothes, getClothes);
router.post('/', createClothes);
router.put('/:id', validatorClothes, updateClothes);
router.delete('/:id', validatorClothes, deleteClothes);


function getClothes(req, res) {
  const resObject = clothes.read(req.params.id);
  res.status(200).json(resObject);
}


function createClothes(req, res) {
  const resObject = clothes.create(req.body);
  res.status(200).json(resObject);
}


function updateClothes(req, res) {
  const resObject = clothes.update(req.params.id, req.body);
  res.status(200).json(resObject);
}


function deleteClothes(req, res) {
  const resObject = clothes.delete(req.params.id);
  res.send('clothes gone.');
}


module.exports = router;