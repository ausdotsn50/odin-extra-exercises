// Create keyed object from array
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(users) {
    // acc as obj
    return users.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
    }, {});
} 

console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

/*
// Get average age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
    const total = arr.reduce((accumulator, currValue) => 
        accumulator + currValue.age, 0
    );

    return total / arr.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

/*
// Sort users by age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
*/

/*
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => {
    return {
        fullName: user["name"] + " " + user["surname"],
        id: user["id"],
    }
});


usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]

console.log(usersMapped);
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
/*

/* better sol 
// map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = [];

for(u of users) {
    names.push(u.name);
}

alert( names ); // John, Pete, Mary


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary
*/

