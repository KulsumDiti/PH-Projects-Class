// console.log("Explore API");

const person = {
  name: "selim",
  fruit: "dalim",
  dish: "halim",
  friends: ["alim", "kolim", "lamim"],
  isRich: false,
  money: 34000,
};
console.log(person, typeof person);

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);

/*
Note:
JSON ->  JS object with Notation
JSON.stringify -> JSON (String e convert kore normal object k jai-tak JSON hisabe dora hoi),
JSON.parse -> object (Json file k Normal object e convert kore).
*/
