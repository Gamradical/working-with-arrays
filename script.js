//Create & Modifying an Array

var hobbies = [
  "sewing",
  "knitting",
  "gardening",
  "singing",
  "building",
  "cooking"
];
//console.log(hobbies.length);

hobbies.push("eating");
//console.log(hobbies[2]);
hobbies.pop();

hobbies.splice(1, 0, "eating", "weight-training");
//console.log(hobbies);

hobbies.shift();
hobbies.unshift("dancing");
//console.log(hobbies);

//Create a New Array & Combine Arrays
var goals = ["traveling", "be fulfilled", "supporting my family"];
var allTheThings = [...hobbies, ...goals];
console.log(allTheThings);

var things = allTheThings.indexOf("gardening");
console.log(things);
allTheThings.splice(4, 1);
console.log(allTheThings);

//Map Over an Array
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});
console.log(plans);
