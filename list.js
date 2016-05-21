(function () {
  'use strict';

  function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.currPos = currPos;
    this.getElement = getElement;
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.contains = contains;
  }

  function currPos() {
    return this.pos;
  }

  function getElement() {
    return this.dataStore[this.pos];
  }

  function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }

  function toString() {
    return this.dataStore;
  }

  function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  function append(element) {
    this.dataStore[this.listSize++] = element;
  }

  function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  function front() {
    this.pos = 0;
  }

  function end() {
    this.pos = this.listSize - 1;
  }

  function prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  function next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  function moveTo(position) {
    this.pos = position;
  }

  function length() {
    return this.listSize;
  }

  function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

  var names = new List();

  names.append('Clayton');
  names.append('Cynthia');
  names.append('Raymond');
  names.append('Barbara');
  names.append('Jennifer');
  names.append('Bryan');
  names.append('Danny');

  names.front();
  console.log(names.getElement());

  names.next();
  console.log(names.getElement());

  names.next();
  names.next();
  names.prev();
  console.log(names.getElement());

  console.log(names.toString());
  names.remove('Raymond');
  console.log(names.toString());
}());
