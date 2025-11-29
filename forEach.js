/*function doubleValues(arr){
  let result = [];

  arr.forEach (
    function(num)
    {result.push(num*2);}
  );

  return result;
}

console.log(doubleValues([1,2,3]));
console.log(doubleValues([5,3,7,10]));*/
//-------------------------------------------------------------------------------
/*function onlyEvenValues(arr){
  let result = [];

  arr.forEach(
    function(num){
      if(num%2===0){result.push(num);}
    }
  );
  
  return result;
}

console.log(onlyEvenValues([1,2,5,8]));
console.log(onlyEvenValues([5,6,7,8,2]));*/
//-------------------------------------------------------------------------------
/*function showFirstAndLast(arr){
  let result = [];

  arr.forEach(function(str){
    let first = str[0];
    let last = str[str.length - 1];
    result.push(first + last);
  });

  return result;
}

console.log(showFirstAndLast(['lgdj','bhfd','shfui','hrik']));*/
//-------------------------------------------------------------------------------
/*function addKeyAndValue(arr, key, value){
  arr.forEach(function(obj){
    obj[key] = value;
  });

  return arr;
}
console.log(
  addKeyAndValue(
    [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}],
    'title',
    'instructor'
  )
);*/
//-------------------------------------------------------------------------------
function vowelCount(str){
  let result = {};
  let vowels = "aeiou";

  str.toLowerCase().split("").forEach(function(char){
    if (vowels.includes(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  });

  return result;
}
console.log(vowelCount('Elie')); 
console.log(vowelCount('Tim')); 