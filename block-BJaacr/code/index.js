/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"

console.log(got.houses)

// 2. Log the length of the "houses" key

console.log(got.houses.length)

// 3. Log the name of all houses in got one by one

for(let i = 0; i < got.houses.length; i++){
  console.log(got.houses[i].name);

}

// 4. Log the name of all the people in house Starks (index 0) one by one

for(let i = 0; i < got.houses[0].people.length; i++){
  console.log(got.houses[0].people[i].name);
}

// 5. Log the name of all the people in house Lannisters (index 1) one by one

for(let i = 0; i < got.houses[1].people.length; i++){
  console.log(got.houses[1].people[i].name);
}

// 6. Log the description of all the people in house Lannisters (index 1) one by one

for(let i = 0; i < got.houses[1].people.length; i++){
  console.log(got.houses[1].people[i].description);
}

// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`

for(let i = 0; i < got.houses[1].people.length; i++){
  console.log(`I am ${got.houses[1].people[i].name} and my bio is ${got.houses[1].people[i].description}`);
}

// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`

for(let i = 0; i < got.houses[0].people.length; i++){
  console.log(`I am ${got.houses[0].people[i].name} and my bio is ${got.houses[0].people[i].description}`);
}

// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`

for(let i = 0; i < got.houses[0].people.length; i++){
  if(got.houses[0].people[i].name == "Robb Stark")
  console.log(`${got.houses[0].people[i].name}, ${got.houses[0].people[i].description}`);
}

// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`

for(let i = 0; i < got.houses[1].people.length; i++){
  if(got.houses[1].people[i].name == "Tywin Lannister")
  console.log(`${got.houses[1].people[i].name}, ${got.houses[1].people[i].description}`);
}

// 11. Push the name of the houses in an array named `houseNames` and Log the array

let houseNames = [];
for(i=0; i < got.houses.length; i++){
houseNames[i] = got.houses[i].name;
}
console.log(houseNames);

// 12. Log the size of people in Starks house

console.log(got.houses[0].people.length)

// 13. Log the size of people in Lannisters house

console.log(got.houses[1].people.length)

// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object

let houseSize = {name: [],size: []};
for(i=0; i < got.houses.length; i++){
houseSize.name[i] = got.houses[i].name;
houseSize.size[i] = got.houses[i].people.length
console.log(houseSize.name[i], houseSize.size[i]);
}


// 15. Log the name of all the people of all the houses in got one by one

for(let k = 0; k < got.houses.length; k++){
  for(let i = 0; i < got.houses[k].people.length; i++){
    console.log(got.houses[k].people[i].name);
  }
}


// 16. Push all names into a new array named `allPeople` and log the value array.

let allPeople = [];
for(let k = 0; k < got.houses.length; k++){
  for(let i = 0; i < got.houses[k].people.length; i++){
    allPeople[i] = got.houses[k].people[i].name;
  }
}
console.log(allPeople);

// 17. Log the value and length of `allPeople` array created above


for(let k = 0; k < got.houses.length; k++){
  for(let i = 0; i < got.houses[k].people.length; i++){
    allPeople[i] = got.houses[k].people[i].name;
    console.log(allPeople[i]);
  }
}
console.log(allPeople.length);

// 18. Push all descriptions into an array named `allDescription`

let allDescription = [];
for(let k = 0; k < got.houses.length -1; k++){
  for(let i = 0; i < got.houses[k].people.length; i++){
  allDescription[i] = got.houses[k].people[i].description;
  }
}
console.log(allDescription)

// 19. Log the value and length `allDescription`

for(let k = 0; k < got.houses.length; k++){
  for(let i = 0; i < got.houses[k].people.length; i++){
    allDescription[i] = got.houses[k].people[i].description;
    console.log(allDescription[i]);
  }
}
console.log(allDescription.length);

// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)

for(let k = 0; k < got.houses.length; k++){
  for(let i = 0; i < got.houses[k].people.length; i++){
    allDescription[i] = got.houses[k].people[i].description;
    if(allDescription[i].length > 30)
    console.log(allDescription[i]);
  }
}
