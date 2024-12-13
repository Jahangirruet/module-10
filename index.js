//1) Write a function named calculateDifference that takes two arguments and
//  returns the difference between the first and second arguments.

calculateDifference = (a, b) => {
  return a - b;
};

console.log("Difference between 10 and 5 is " + calculateDifference(10, 5));

//2) Write a function named isOdd that takes one argument and
//  returns true if the number is odd, and false if it is not.

isOdd = (num) => {
  return num % 2 !== 0;
};

console.log(" Is 6 odd? : ", isOdd(6));

//3) Write a function named findMin that takes an array of numbers and
//  returns the smallest number from the array.

findMin = (arr) => {
  return Math.min(...arr);
};

console.log(" Smallest number in [1, 2, 3, 4, 5] : ", findMin([1, 2, 3, 4, 5]));

//4) Write a function named filterEvenNumbers that takes an array of numbers and
//  returns a new array containing only the even numbers.

filterEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

console.log(
  " Even numbers in [1, 2, 3, 4, 5] : ",
  filterEvenNumbers([1, 2, 3, 4, 5])
);

//5) Write a function named sortArrayDescending that takes an array of numbers and
//  returns a new array sorted in descending order.

sortArrayDescending = (arr) => {
  return arr.sort((a, b) => b - a);
};

console.log(
  " Descending order of [5, 3, 1, 4, 2] : ",
  sortArrayDescending([5, 3, 1, 4, 2])
);

//6) Write a function named lowercaseFirstLetter that takes a string and
//  returns the same string with the first letter lowercased.

lowercaseFirstLetter = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

console.log(
  " Hello World in lowercase : ",
  lowercaseFirstLetter("Hello World")
);

//7) Write a function named findAverage that takes an array of numbers and
//  returns the average of all elements.

findAverage = (arr) => {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
};

console.log(" Average of [1, 2, 3, 4, 5] : ", findAverage([1, 2, 3, 4, 5]));

//8) Write a function named isLeapYear that takes a year as an argument and
//  returns true if the year is a leap year, and false if it is not.

isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(" Is 2100 a leap year? : ", isLeapYear(2100));
