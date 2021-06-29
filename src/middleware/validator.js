'use strict';
module.exports = (req, res, next) => {
  if (!req.body.name || !req.body.role) {
    next('Invalid request data.');
  } else {
    next();
  }
};