function unique(arr) {
    arr.filter(currValue => arr.reduce((acc, curr) => acc[curr] || 0 + 1));
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );