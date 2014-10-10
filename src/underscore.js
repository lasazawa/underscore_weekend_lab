var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    // check and see if n is undefined
    // if n is greater than the length of the array, return the whole array
    // (else) use splice to return a new array starting from the beginning and going till n
    if (n === undefined) {
      return array[0];
    }
    else if (n > array.length) {
      return array;
    }
    else {
      // return array.splice(array.length, array.length - n);
      return array.splice(0,n);
    }
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    if (n === undefined) {
      return array[array.length-1];
    }
    else if (n === 0) {
      return [];
    }
    else if (n > array.length) {
      return array;
    }
    else {
      return array.splice(n, array.length - 1);
    }
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    array.sort();
    for (var i = 0; i < array.length; i++) {
      if (array[i] === array[i+1]) {
        array.splice(array[i],1);
      }
    }
    return array;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
      newArr.push(array[i].name);
    }
    return newArr;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    if (array.indexOf(target) != -1) {
      return true;
    }
    else {
      return false;
    }
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
    var newArr = [];
    array.forEach(function(value) {
      if (value.constructor.name === "Array") {
        newArr = newArr.concat(myFunctions.flatten(value));
      }
      else {
        newArr.push(value);
      }
    });
    return newArr;
  }
};


module.exports = myFunctions;
