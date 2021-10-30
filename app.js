//Week 3 Coding Assignment//

//Questioin 1 //

let ages = [3,9,23,64,2,8,28,93];

// 1(a)
let lastIndex = ages.length-1;
let firstIndex = 0;

console.log(ages[lastIndex]-ages[firstIndex]);

// 1(b)
ages.push (41);

console.log(ages);

// 1(c)
let total = 0;
for(let i = 0; i < ages.length; i++) {
    total += ages[i];
}
let avg = total / ages.length;

console.log(avg)


 //Question 2 //

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2(a)
let namesCharTotal = 0 
for (let name of names) {
    namesCharTotal += name.length; 
}

console.log(namesCharTotal/names.length);

// 2(b)
let contactNames = "";
for (let name of names) {
    contactNames += name; 
}

console.log(contactNames);


// Question 3
//access the last element which is arr[-1]


// Question 4
// access the first element which is arr[0] because the first element is always o


// Question 5

let nameLengths = [];
for (let index = 0; index < names.length; index++){
  nameLengths[index] = names[index].length; 
}

console.log(nameLengths);


// Question 6

/**
 * define a accumulator for the sum
 * write a for loop that goes over nameLengths array
 * access each element in the nameLenghts array
 * assign the accessed element to the accumulator
 * 
 * finally print the accumulator
 */

let totalNameLengths = 0;
for (let nameLength of nameLengths){
    totalNameLengths += nameLength;
}
console.log(totalNameLengths);


// Question 7

/**
 * define accumulator that will store the concatenated word
 * write a function and have 2 params (word, and number)
 *  write a loop or any condition that loops until the number chosen
 *  returns concatenate the word itself as long as the loop runs
 */


function concatWordnTimes(word, number){
  let concatWord = "";
  for (let i= 1; i<=number; i++){
    concatWord +- word;
  }
  return concatWord;
}


//Question 8

/**
 * write a function and have 2 params (first name, last name)
 * returns full name seperated with a space
 */

function createFullName(firstName, lastName){
  return firstName + ' ' + lastName;
}


//Question 9 

function isSumOfArrayGreaterThan100(array){
  let sum =0
  for (let element of array){
      sum += element;
  }

  //check for boolean operation
  if (sum >100){
      return true;
  }
  return false;
}

let testArr = [1, 2, 35, 68, 9]
console.log(isSumOfArrayGreaterThan100(testArr));


//Question 10

/**
 * write a function that takes an array of numbers
 * returns average of all elements in array
 */

 function calculateAverageOfArray(array) {
   let total = 0

   for (let element of array){
        total += element;
   }
   return total/array.length;
 }
     
 let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 console.log(calculateAverageOfArray(arry));


//Question 11

/**
 * function signature with 2 arrays as arguments
 * calculate an average of first array
 * need to store average value into the variable
 * calculate an average of second array
 * need to store average value into the variable
 * compare average of bvoth arrays as specified by question
 */

function isFirstAvgGreaterThabSecondAvg(array1, array2){

  let avgArray1 = calculateAverageOfArray(array1);

  let avgArray2 = calculateAverageOfArray(array2);

  return (avgArray1 > avgArray2);
}

// Question 12 

/**
 * function willBuyDrink with 2 arguments (boolean isHotOutside and a number moneyInPocket)
 */

    // return if it is hot outside AND moneyInPocket is >=10.50

function willBuyDrink(isHotOutside, moneyInPocket){
  if(isHotOutside && (moneyInPocket > 10.50)){
    return true;
  }
  return false;
}

//Question 13

