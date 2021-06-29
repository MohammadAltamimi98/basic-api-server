'use strict';
const express = require('express');
const validator = require('../middleware/validator');
const Clothes = require('../models/clothes');
const router = express.Router();
const clothes = new Clothes();


router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', validator, createClothes);
router.put('/:id', validator, updateClothes);
router.delete('/:id', validator, deleteClothes);


function getClothes(req, res) {
  const resObject=clothes.read(req.params.id);
  res.json(resObject) ;
}


function createClothes(req, res) {
  const resObject=clothes.create(req.body);
  res.json(resObject) ;
}


function updateClothes(req, res) {
  const resObject=clothes.update(req.params.id,req.body);
  res.json(resObject) ;

}


function deleteClothes(req, res) {
  const resObject=clothes.delete(req.params.id);
  res.json(resObject) ;
}


module.exports = router;