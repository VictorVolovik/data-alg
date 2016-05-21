(function () {
  'use strict';

  function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
  }

  function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  function betterHash(string) {
    var H = 31;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length - 1;
    }
    return parseInt(total);
  }

  function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        console.log(i + ": " + this.table[i]);
      }
    }
  }

  function put(key, data) {
    var pos = this.betterHash(key);
    this.table[pos] = data;
  }

  function get(key) {
    return this.table[this.betterHash(key)];
  }

  var princes = [{
    name: "Eric",
    trait: "power"
  }, {
    name: "Corwin",
    trait: "perseverance"
  }, {
    name: "Bleys",
    trait: "duplicity"
  }, {
    name: "Random",
    trait: "cunning"
  }, {
    name: "Caine",
    trait: "craft"
  }, {
    name: "Benedict",
    trait: "strategy"
  }, {
    name: "Brand",
    trait: "madness"
  }, {
    name: "Gerard",
    trait: "kind"
  }, {
    name: "Julian",
    trait: "honor"
  }];

  var hTable = new HashTable();

  for (var i = 0; i < princes.length; ++i) {
    var prince = princes[i];
    hTable.put(prince.name, prince.trait);
  }

  hTable.showDistro();

  console.log(hTable.get("Eric"));
  console.log(hTable.get("Corwin"));

}());
