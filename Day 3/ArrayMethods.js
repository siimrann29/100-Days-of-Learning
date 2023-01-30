//Why do arrays have methods?

//Methods are functions that we can call on objects,
//if they are attached to arrays , then we can say that they are also objects.

//Methods:
let arr = ["1", "2", "3", "4", "5", "6", "7", "8"];

//SLICE
console.log(arr.slice(2));
//creates the copy of the array and sends us output from 3 to 8

console.log(arr.slice(2, 4));
//output 3 and 4

console.log(arr.slice(-1));
//output is last element

//SPLICE
//slice cretes a copy
//splice mutuates the actual array
console.log(arr.splice(2, 2));
//output - deletes 3 and 4

//other methods concat join and reverse
// at method

//console.log(arr.at(0));
//output - 1

//getting the last element
//arr.at(-1);
