//Week 3 Coding Assignment//

//Questioin 1 //

let ages = [3,9,23,64,2,8,28,93];
let lastIndex = ages.length-1;
let firstIndex = 0;

console.log(ages[lastIndex]-ages[firstIndex]);

ages.push (41);

console.log(ages);

var total = 0;
for(var i = 0; i < ages.length; i++) {
    total += ages[i];
}
var avg = total / ages.length;

console.log(avg)
  

  