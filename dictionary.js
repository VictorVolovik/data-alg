(function () {
  'use strict';

  function Dictionary() {
    this.datastore = new Array();
    this.add = add;
    this.remove = remove;
    this.clear = clear;
    this.find = find;
    this.showAll = showAll;
    this.count = count;
  }

  function add(key, value) {
    this.datastore[key] = value;
  }

  function find(key) {
    return this.datastore[key];
  }

  function remove(key) {
    delete this.datastore[key];
  }

  function clear() {
    for (var key in this.datastore) {
      delete this.datastore[key];
    }
  }

  function showAll() {
    for (var key in this.datastore) {
      console.log(key + ' -> ' + this.datastore[key]);
    }
  }

  function count() {
    var n = 0;
    for (var key in this.datastore) {
      n += 1;
    }
    return n;
  }

  var pbook = new Dictionary();

  pbook.add('Mike', '123');
  pbook.add('David', '345');
  pbook.add('Cynthia', '777');
  console.log('Number of entries: ' + pbook.count());
  console.log("David's extension: " + pbook.find('David'));
  pbook.remove('David');
  pbook.showAll();
  pbook.clear();
  console.log('Number of entries: ' + pbook.count());
}());
