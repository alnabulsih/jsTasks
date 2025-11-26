/*const month_as_nuber = parseInt(prompt("Enter your birth month"));
let monthName = "";

switch (month_as_nuber){
  case 1: monthName = "January" ; break
  case 2: monthName = "February" ; break
  case 3: monthName = "March" ; break
  case 4: monthName = "April" ; break
  case 5: monthName = "May" ; break
  case 6: monthName = "June" ; break
  case 7: monthName = "July" ; break
  case 8: monthName = "August" ; break
  case 9: monthName = "September" ; break
  case 10: monthName = "October" ; break
  case 11: monthName = "nov" ; break
  case 12: monthName = "December" ; break
}
console.log(monthName);*/

//------------------------------------------------------------------------
/*let count = 1;
let rows =4 ;

for(let i =1;i<=rows;i++){
  let output= "";
  for(let j =1;j<=i;j++){
    output += count+ " ";
    count++;
  }
  console.log(output);
}*/
//--------------------------------------------------------------------------
/*for(let i=1;i<=1000;i++){
  if(i%13==0)console.log(i);
}*/
//--------------------------------------------------------------------------
/*function multiplication2(a,b){
  let sum=0;
  for(let i=1;i<=b;i++){
    sum+=a;
  }
  return sum;
}
console.log(multiplication2(3,3));*/
//--------------------------------------------------------------------------
/*function triangleArea(base,height){
  return 0.5 * base * height;
}
console.log(triangleArea(10, 20));*/
//--------------------------------------------------------------------------
/*function isPandigital(num) {
    let str = num.toString();
    for (let digit = 0; digit <= 9; digit++) {
        if (!str.includes(digit.toString())) {
            return false; 
        }
    }
    return true;
}
console.log(isPandigital(1023456789)); 
console.log(isPandigital(123456789));*/
//--------------------------------------------------------------------------
/*const drink = prompt("enter your favorite drink");
let price = "";

switch (drink){
  case "banana": price = "The price of a banana drink is 20 dollars" ; break
  case "orange": price = "The price of a orang drink is 30 dollars"; break
  case "apple": price = "The price of a apple drink is 40 dollars" ; break
  default:
    price = "Sorry, we don't have the price for that drink."; 
}
console.log(price);*/
//--------------------------------------------------------------------------
function fullName(fName, lName){
  let fullName = fName+" "+lName;
  return fullName;
}
console.log(fullName("mohammad", "alnabulsieh"));