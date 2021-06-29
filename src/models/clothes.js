'use strict';
const uuid = require('uuid').v4; // we require the uuid version 4 to give an id to each instance

class Clothes {
  constructor() {
    //initialize food memory
    this.clothesMemo = [];
    //{id, data:{name,cuisine}}
  }



  read(id) {
    if (id) {
      return this.clothesMemo.find((record) => record.id === id);
    } else {
      return this.clothesMemo;
    }
  }


  create(obj) {
    const record = {
      id: uuid(),
      data: obj,
    };
    this.clothesMemo.push(record);
    return record;
  }


  update(id, obj) {
    for (let i = 0; i < this.clothesMemo.length; i++) {
      if (this.clothesMemo.id[i] === id) {
        this.clothesMemo.data = obj;
        return this.clothesMemo;
      }
    }
  }


  delete(id) {
    return this.clothesMemo = this.clothesMemo.filter((record) => record.id !== id);
  }


}

module.exports = Clothes;