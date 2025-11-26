/*function doubleNumbers(arr){
  return arr.map(num => num*2);
}
console.log(doubleNumbers([5,2,100]));*/
//------------------------------------------------------
/*function stringItUp(arr){
  return arr.map(num => String(num));
}
console.log(stringItUp([5,2,10]));*/
//------------------------------------------------------
/*function capitalizeNames(arr){
  return arr.map(name=>{
    let lower = name.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  )
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));*/
//------------------------------------------------------
/*function namesOnly(arr){
  return arr.map(person => person.name);
}
console.log(namesOnly([
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
]));*/
//------------------------------------------------------
/*function readyToPutInTheDOM(arr){
  return arr.map(person => {
    return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
  });
}

console.log(readyToPutInTheDOM([
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
]));*/
//------------------------------------------------------
/*function doubleValues(arr){
  return arr.map(num => num * 2);
}
console.log(doubleValues([1,2,3]));     
console.log(doubleValues([1,-2,-3]));  */
//------------------------------------------------------
/*function valTimesIndex(arr){
  return arr.map((value, index) => value * index);
}
console.log(valTimesIndex([1,2,3]));     
console.log(valTimesIndex([1,-2,-3])); */
//------------------------------------------------------
/*function extractKey(arr,key){
  return arr.map(opj=>opj[key]);
}
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));*/
//------------------------------------------------------
function extractFullName(arr){
  return arr.map(obj => obj.first + " " + obj.last);
}
console.log(extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])); 

