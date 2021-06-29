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
    return this.clothesMemo;
  }


  update(id, obj) {
    for (let i = 0; i < this.clothesMemo.length; i++) {
      if (this.clothesMemo[i].id === id) {
        this.clothesMemo[i].data = obj;
        return this.clothesMemo[i];
      }
    }
  }


  delete(id) {
    this.clothesMemo = this.clothesMemo.filter((record) => record.id !== id);
    return 'object deleted.';
  }


}

module.exports = Clothes;