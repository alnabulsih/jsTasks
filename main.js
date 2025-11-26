let myName= "Mohammad Alnabulsieh";
console.log(myName);
//o	String trim()
console.log(myName.trim().toUpperCase());
//o	String trimStart()
let myNameWithSpaceF= "  Mohammad Alnabulsieh";
console.log(myNameWithSpaceF.trimStart());
//o	String trimEnd()
let myNameWithSpaceEnd= "Mohammad Alnabulsieh.  ";
console.log(myNameWithSpaceEnd.trimEnd());
//6.	String charAt()
console.log(myName.charAt(1))
//7.	String charCodeAt()
console.log(myName.charCodeAt(1));
//8.	String split()
console.log(myName.split(" "));
//9.	String length
console.log(myName.length);
//10.	String slice()
console.log(myName.slice(5, 9));
// 11. String substring()
console.log(myName.substring(0, 8)); 

// 12. String substr()  (note: substr is deprecated but still works)
console.log(myName.substr(0, 8)); 

// 13. String replace()
console.log(myName.replace("Mohammad", "Ahmad")); 

// 14. String replaceAll()
let text = "Hello world, world!";
console.log(text.replaceAll("world", "JS"));

// 15. String toUpperCase()
console.log(myName.toUpperCase()); 

// 16. String toLowerCase()
console.log(myName.toLowerCase()); 

// 17. String concat()
let lastName = " Alnabulsieh";
console.log("Mohammad".concat(lastName)); 

// 18. String indexOf()
console.log(myName.indexOf("Al")); 

// 19. String lastIndexOf()
console.log(myName.lastIndexOf("a")); 

// 20. String search()
console.log(myName.search("Al")); 

// 21. String match()
console.log(myName.match(/a/g)); 

// 22. String matchAll()
let matches = myName.matchAll(/a/g);
console.log(Array.from(matches)); 

// 23. String includes()
console.log(myName.includes("Mohammad")); 

// 24. String startsWith()
console.log(myName.startsWith("Moh")); 

// 25. String endsWith()
console.log(myName.endsWith("ieh")); 


