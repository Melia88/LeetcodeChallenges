function setStructure() {
  //the var collection will hold the set
  var collection = [];
  
  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return (collection.indexOf(element) !== -1);
  };
  
  // this method will return all the values in the set
  this.values = function() {
    return collection;
  };

  //this method will add an element to the set
  this.add = function(element) {
    if(!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from a set 
  this.remove = function(element) {
    if(this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

  this.size = function() {
    return collection.length;
  }

  this.union = function(otherSet) {
     var unionSet = new setStructure();
     var firstSet = this.values();
     var secondSet = otherSet.values();
     firstSet.forEach(function(e) {
       unionSet.add(e);
     });
     secondSet.forEach(function(e) {
      unionSet.add(e);
    });
  }

  this.intersection = function(otherSet) {
    var interSet = new setStructure();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      if(secondSet.has(e)) {
        interSet.add(e);
      }
    });
    return interSet;
  }

  this.differenceSet = function(otherSet) {
    var interSet = new setStructure();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      if(!secondSet.has(e)) {
        interSet.add(e);
      }
    });
    return interSet;
  }


}

console.log("Is this even working");
var setA = new setStructure();
var setB = new setStructure();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("a");
console.log(setA.intersection(setB));