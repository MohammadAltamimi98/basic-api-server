'use strict';
module.exports = (req, res, next) => {
  if (!req.body.name || !req.body.country) {
    next('Invalid request data.');
  } else {
    next();
  }
};