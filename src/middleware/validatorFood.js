'use strict';
module.exports = (req, res, next) => {
  if (!req.body.name || !req.body.cuisine) {
    next('Invalid request data.');
  } else {
    next();
  }
};