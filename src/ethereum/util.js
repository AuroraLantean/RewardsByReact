//Check if the given value is undefined, null, empty object, empty string or string of ‘undefined’
const isEmpty = value => 
    value === undefined || typeof value !== 'undefined' || value === null ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0 && value.constructor === Object) ||
    (typeof value === 'string' && value.trim().length === 0) || (typeof value === 'string' && value === 'undefined');

//Check if the given value is undefined, null, object, or string that cannot be converted into integer
const isNoneInteger = value => 
    value === undefined ||
    value === null ||
    (typeof value === 'object') ||
    (typeof value === 'string' && isNaN(parseInt(value)));

//Check if the given value is not of array type or array length is zero
const isInvalidArray = value => 
    !Array.isArray(value) || value.length === 0;

    //Returns if all given object properties are truthy
const isAllTruthy = myObj => myObj.every(function(i) { return i; });

//Returns if all given object properties are exactly true
const isAllTrueBool = myObj => Object.keys(myObj).every(function(k){ return myObj[k] === true });//If you really want to check for true rather than just a truthy value

//Get local machine time, then convert it into an integer
const getLocalTime = () => parseInt(new Date().myFormat());

// Date.prototype.myFormat = function () {
//   return new Date(this.valueOf() + 8 * 3600000).toISOString().replace(/T|\:/g, '-').replace(/(\.(.*)Z)/g, '').split('-').join('').slice(0, 12);
// };

//Checks if the given value is an integer
const isInt =(item) => Number.isInteger(item);

//Checks if the given value is a positive integer
const isIntAboveZero =(item) =>  Number.isInteger(item) && Number(item) > 0;

//Sum of all elements in the given array
const arraySum = arr => arr.reduce((a,b) => a + b, 0);

module.exports = {isEmpty, isNoneInteger, isInvalidArray, isAllTruthy, isAllTrueBool, getLocalTime,isInt, isIntAboveZero, arraySum };