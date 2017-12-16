/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */

function doubleArray(arr) {
  var double = [];
   for (var i=0; i<arr.length;i++) {
    double.push(arr[i] * 2);
   }
   return double;
}
/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
function sumArrays(arr1,arr2) {
  var sum1 = 0;;
  var sum2 = 0;
  for (var i =0; i<arr1.length; i++) {
 sum1 += arr1[i];
  };
   for (var i =0; i<arr2.length; i++) {
    sum2 += arr2[i];
  };
  return sum1 + sum2;
};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */

function stringCount(string) {
 return string.length;
}
/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */

function arrayLength(string){
return string.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
function countAll(arr) {
  var sum = 0;
  for (var i=0; i<arr.length; i++) {
    sum += arr[i];
  }
 return sum;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
function countStrings(arr) {
  var stringLength = [];
  for (var i=0; i<arr.length; i++) {
 stringLength.push(arr[i].length); //for every "length, push to stringLength arr
  }
return stringLength;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
function countAllStrings(arr) {
  var sum = 0;
  for (var i=0; i <arr.length;i++) {
    sum += arr[i].length;
  }
return sum;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
function convertToArray(object) {
  var result = Object.values(object);
  return result;

}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
function objectSize(object) {
  var count = Object.values(object);
  return count.length;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
function createZeroFilledArray(number) {
var arr = []; //create array
for (var i=0; i<number; i++){ //iterate through on number, add 0s
  arr.push(0);
}
return arr;
}
 
  


/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
function poppedArray (arr) {
  arr.pop();
  return arr;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
function splitString(String) {
  var Arr = String.split("");
  return Arr;
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
function lengthOfLast(String) {
  var last = String.pop();
  return last.length
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
function sumBelowTen(arr) {
   var sum = 0;
   for (var i = 0; i < arr.length;i++) { 
    if(arr[i] <= 10) {
 sum += arr[i]; //add to arr
    }
   }
   return sum;
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
function moreThanTenLetters(str) {
  var moreTen = [];
for (var i = 0; i < str.length; i++) {
  if(str[i].length > 10)
    moreTen++
}
return moreTen;
}
/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
function multiplyAll(arr) {
  return arr.reduce((acc, cur) => acc * cur);
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
function getKeys(Obj) {
  var result = Object.keys(Obj);
  return result;
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
function sumAllPositive(str) {
 var sum = 0;
 for (var i = 0;i<str.length; i++){
  if (str[i] > 0) {
    sum +=str[i];
  
}
 }
 return sum;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
function stringCountBelowThree(arr) {
  var count = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].length <= 3 ) 
      count++;
  }
  return count;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
function countObjects(array) {
  return array.length; }

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
function getObjectKeys(obj) {
  return Object.keys(obj);
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
function getObjectValues(obj) {
  return Object.values(obj);
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
function makeObject(str1, str2) {
  var newObj = {[str1] : str2};
  return newObj;
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
function makeObjectReverse(str1, str2) {
  var newObj = {[str2] : str1};
  return newObj;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
function tupleToObject(arr) {
  var newObj = {[arr[0]] : arr[1]}
  return newObj; 
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
function tupleToObjectReverse(arr) {
  var newObj = {[arr[1]] : arr[0]};
  return newObj;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
function strToKeys(arr) {
  var newObj = {};
  for (var i = 0; i < arr.length; i++) {
    newObj[arr[i]] = 0;
  }
  return newObj;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
function getValues(arr) {
  return Object.values(arr);

}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
function getKeys(obj) {
  return Object.keys(obj);
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
function objectToArray(obj) {
  var arr = [];
  for (key in obj) {
    key = 0;
    arr.push;
  }
  for (val in obj) {
    val = 1;
    arr.push;
  }
return arr;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
function arrayToObject(arr) {
 var newObj = {};
 for (var i=0; i < arr.length; i++) {
    newObj[arr[i]] = false;
 }
 return newObj;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
function arraysToObject(arr1, arr2) {
  var newObj = {};
  for (var i = 0; i < arr1.length; i++) {
    newObj[arr1[i]] = arr2[i];
  }
  return newObj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
function objectsToTuples(obj1, obj2) {
  var arr = [];
  var tup1 = [];
  var tup2 = [];
  for (key in obj1) {
    tup1.push(obj1)
  };
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
function mapArrayValues(arr) {
  var newObj = {};
  for (var i=0; i < arr.length; i++) {
    newObj[arr[i]] = true;
  }
  return newObj;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
function mapStringCounts(arr) {
  var newObj = {};
  for (var i=0; i < arr.length; i++) {
    
    if (arr[i].length >= 5) {
      newObj[arr[i]] = true;
     } else { newObj[arr[i]] = false;
  }
}
  return newObj;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
 function arrayToObjectNums(arr) {
  var newObj = {};
  for (var i=0; i < arr.length; i++ ){
    newObj[arr[i]] = true;
  }
  return newObj;
 }

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */



function stringToKeys(str) {
  var result = {};
  var splitted = str.split("");
  for (var i =0; i< splitted.length; i++) { //iteration, acess to each letter
    result[splitted[i]] = true; //create object "result" with all letters in i are true
  }
  return result;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
function charCountMap(arr) {
  var newObj = {};
  var count = 0;
  for (var i = 0; i<arr.length; i++) {
    var count = newObj[arr[i]].length; //find char count
    newObj[arr[i]] = count;
  }
  return newObj;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
function frequencyMap(arr) {
  var newObj = {};
for (var i=0; i < arr.length; i++) {
  
}
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}