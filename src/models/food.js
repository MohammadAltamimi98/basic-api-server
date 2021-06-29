'use strict';
const uuid = require('uuid').v4; // we require the uuid version 4 to give an id to each instance

class Food {
  constructor() {
    //initialize food memory
    this.foodMemo = [];
    //{id, data:{name,cuisine}}
  }



  read(id) {
    if (id) {
      return this.foodMemo.find((record) => record.id === id);
    } else {
      return this.foodMemo;
    }
  }


  create(obj) {
    const record = {
      id: uuid(),
      data: obj,
    };
    this.foodMemo.push(record);
    return this.foodMemo;
  }


  update(id, obj) {
    for (let i = 0; i < this.foodMemo.length; i++) {
      if (this.foodMemo[i].id === id) {
        this.foodMemo[i].data = obj;
        return this.foodMemo[i];
      }
    }
  }


  delete(id) {
    this.foodMemo = this.foodMemo.filter((record) => record.id !== id);
    return 'food is deleted';
  }


}

module.exports = Food;
