function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.contains = contains;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function size() {
    return this.dataStore.length;
}

function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}

function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.size(); ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.size(); ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.size(); ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    } else {
        for (var i = 0; i < this.size(); ++i) {
            if (!set.contains(this.dataStore[i])) {
                return false;
            }
        }
        return true;
    }
}

function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.size(); ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function show() {
    return this.dataStore;
}

var avengers = new Set();

avengers.add("Captain America");
avengers.add("Iron Man");
avengers.add("Hawkeye");
avengers.add("Natasha Romanova");
avengers.add("Thor");
avengers.add("Hulk");

if (avengers.add("Hulk")) {
    console.log("Hulk added.");
} else {
    console.log("Avengers assemble!");
}

console.log(avengers.show());

var removed = "Thor";
if (avengers.remove(removed)) {
    console.log(removed + " removed.");
} else {
    console.log("Already in Valhalla.");
}

avengers.add("Hank Pym");
console.log(avengers.show());

removed = "Natasha Romanova";
if (avengers.remove(removed)) {
    console.log(removed + " removed.");
} else {
    console.log(removed + " not removed");
}

var xmen = new Set();

xmen.add("Cyclops");
xmen.add("Beast");
xmen.add("Iceman");
xmen.add("Phoenix");
xmen.add("Angel");

console.log(xmen.show());

var heroes = new Set();
heroes = avengers.union(xmen);
console.log(heroes.show());

avengers.add("Beast");
var inter = avengers.intersect(xmen);
console.log(inter.show());

if (inter.subset(avengers)) {
    console.log("Is a subset.");
} else {
    console.log("Not a subset");
}

var diff = avengers.difference(inter);
console.log(diff.show());
