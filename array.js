console.log('Here is : ', 'array');

/* 1. Correct the syntax errors */
let arr1 = [1, 7, 9, 45];
let arr2 = ["Str", "alex", "moh"];
let arr3 = ['the','fox','over','lazy','dog'];

console.log(arr1);
console.log(arr2);
console.log(arr3);

/* 2. Index of "Banana" and "Tomato" */
let fruits = ["Tomato", "Banana", "Watermelon"];
console.log(fruits.indexOf("Banana")); 
console.log(fruits.indexOf("Tomato")); 

/* 3. Create arrays for favorite things */
let favoriteFood = ["Pizza", "Burger", "Pasta", "Sushi", "Ice cream"];
let favoriteSport = ["Football", "Basketball", "Tennis"];
let favoriteMovie = ["Inception", "Avengers", "Titanic", "Joker"];

console.log(favoriteFood);
console.log(favoriteSport);
console.log(favoriteMovie);

/* 4. Function firstOfArray */
function firstOfArray(arr) {
  return arr[0];
}

console.log(firstOfArray([1,4,5]));           
console.log(firstOfArray(["t","u","g","x"])); 

/* 5. Function lastOfArray */
function lastOfArray(arr) {
  return arr[arr.length - 1];
}

console.log(lastOfArray([1,4,5]));           
console.log(lastOfArray(["t","u","g","x"])); 

/* 6. Modify array using push, unshift, shift, pop */
let array = [0,5,7,9];
array.shift();       
array.unshift(1,3,4,6,8); 
array.push(10);      
console.log(array);  

/* 7. What do push, unshift, shift, pop return? */
let array2 = [5,9,-7,3.5];
console.log(array2.push(10));    
console.log(array2.unshift(1)); 
console.log(array2.shift());     
console.log(array2.pop());       

/* 8. Function middleOfArray */
function middleOfArray(arr) {
  let len = arr.length;
  if (len % 2 === 1) {
    return arr[Math.floor(len / 2)];
  } else {
    return [arr[len/2 -1], arr[len/2]];
  }
}

console.log(middleOfArray([1,4,5]));           
console.log(middleOfArray(["t","u","g","x"])); 

/* 9. Assign values to arrays */
let animals = ['cat', 'ele', 'bird'];
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.length = 2; 
console.log(animals); 

let nums = [1,2,3,8,9];
nums = [5,-22,3.5,44,98,44];
console.log(nums); 

/* 10. Function indexOfArray */
function indexOfArray(arr, index) {
  return arr[index];
}

let nums2 = [1,2,3,8,9];
console.log(indexOfArray(nums2,3)); 
console.log(indexOfArray(nums2,1)); 
console.log(indexOfArray(nums2,4));

/* 11. Function arrayExceptLast */
function arrayExceptLast(arr) {
  return arr.slice(0, arr.length - 1);
}

let nums3 = [1,2,3,8,9];
console.log(arrayExceptLast(nums3)); 

/* 12. Function addToEnd */
function addToEnd(arr, value) {
  arr.push(value);
  return arr;
}

console.log(addToEnd([1,2,3,8,9], 55)); 

/* 13. Function sumArray */
// Using for loop
function sumArrayFor(arr) {
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArrayFor([1,2,3,8,9])); 

// Using while loop
function sumArrayWhile(arr) {
  let sum = 0, i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}
console.log(sumArrayWhile([1,2,3,8,9]));
/* 14. Function minInArray */
// Using for loop
function minInArrayFor(arr) {
  let min = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
console.log(minInArrayFor([1,2,3,8,9])); 

// Using while loop
function minInArrayWhile(arr) {
  let min = arr[0], i = 1;
  while (i < arr.length) {
    if (arr[i] < min) min = arr[i];
    i++;
  }
  return min;
}
console.log(minInArrayWhile([1,2,3,8,9])); 

/* 15. Function removeFromArray */
// Using for loop
function removeFromArrayFor(arr, elem) {
  let result = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] !== elem) result.push(arr[i]);
  }
  return result;
}
console.log(removeFromArrayFor([1,2,3,8,9], 8)); 

// Using while loop
function removeFromArrayWhile(arr, elem) {
  let result = [], i = 0;
  while (i < arr.length) {
    if (arr[i] !== elem) result.push(arr[i]);
    i++;
  }
  return result;
}
console.log(removeFromArrayWhile([1,2,3,8,9], 8)); 
/* 16. Function oddArray */
// Using for loop
function oddArrayFor(arr) {
  let result = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] % 2 !== 0) result.push(arr[i]);
  }
  return result;
}
console.log(oddArrayFor([1,2,3,8,9]));

// Using while loop
function oddArrayWhile(arr) {
  let result = [], i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 !== 0) result.push(arr[i]);
    i++;
  }
  return result;
}
console.log(oddArrayWhile([1,2,3,8,9])); 

/* 17. Function aveArray */
// Using for loop
function aveArrayFor(arr) {
  let sum = 0;
  for (let i=0; i<arr.length; i++) sum += arr[i];
  return sum / arr.length;
}
console.log(aveArrayFor([1,2,3,8,9]));       
console.log(aveArrayFor([1,2,3,8,9,77]));    

// Using while loop
function aveArrayWhile(arr) {
  let sum = 0, i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum / arr.length;
}
console.log(aveArrayWhile([1,2,3,8,9]));   
console.log(aveArrayWhile([1,2,3,8,9,77]));  

/* 18. Function shorterInArray */
// Using for loop
function shorterInArrayFor(arr) {
  let shortest = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i].length < shortest.length) shortest = arr[i];
  }
  return shortest;
}
console.log(shorterInArrayFor(["alex","mercer","madrasa","rashed2","emad","hala"])); 

// Using while loop
function shorterInArrayWhile(arr) {
  let shortest = arr[0], i=1;
  while (i < arr.length) {
    if (arr[i].length < shortest.length) shortest = arr[i];
    i++;
  }
  return shortest;
}
console.log(shorterInArrayWhile(["alex","mercer","madrasa","rashed2","emad","hala"])); 

/* 19. Function repeatChar */
// Using for loop
function repeatCharFor(str, char) {
  let count = 0;
  for (let i=0; i<str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}
console.log(repeatCharFor("alex mercer madrasa rashed2 emad hala","a")); 
console.log(repeatCharFor("alex mercer madrasa rashed2 emad hala","z")); 

// Using while loop
function repeatCharWhile(str, char) {
  let count = 0, i = 0;
  while (i < str.length) {
    if (str[i] === char) count++;
    i++;
  }
  return count;
}
console.log(repeatCharWhile("alex mercer madrasa rashed2 emad hala","a")); 
console.log(repeatCharWhile("alex mercer madrasa rashed2 emad hala","z")); 

/* 20. Function evenIndexOddLength */
// Using for loop
function evenIndexOddLengthFor(arr) {
  let result = [];
  for (let i=0; i<arr.length; i+=2) { 
    if (arr[i].length % 2 !== 0) result.push(arr[i]);
  }
  return result;
}
console.log(evenIndexOddLengthFor(["alex","mercer","madrasa","rashed2","emad","hala"])); 

// Using while loop
function evenIndexOddLengthWhile(arr) {
  let result = [], i = 0;
  while (i < arr.length) {
    if (i % 2 === 0 && arr[i].length % 2 !== 0) result.push(arr[i]);
    i++;
  }
  return result;
}
console.log(evenIndexOddLengthWhile(["alex","mercer","madrasa","rashed2","emad","hala"]));
function powerElementIndexFor(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] ** i);
  }
  return result;
}

console.log(powerElementIndexFor([44, 5, 4, 3, 2, 10]));
function powerElementIndexWhile(arr) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    result.push(arr[i] ** i);
    i++;
  }
  return result;
}

console.log(powerElementIndexWhile([44, 5, 4, 3, 2, 10]));


function evenNumberEvenIndexFor(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(evenNumberEvenIndexFor([5,2,2,1,8,66,55,77,34,9,55,1]));

function evenNumberEvenIndexWhile(arr) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    if (i % 2 === 0 && arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
}

console.log(evenNumberEvenIndexWhile([5,2,2,1,8,66,55,77,34,9,55,1]));



