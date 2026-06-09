let users = [
  { id: "John", name: "John Smith", age: 20 },
  { id: "Joe", name: "Joe Shmoe", age: 22 },
  { id: "Mike", name: "Mike Last", age: 24 },
];

function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

console.log(groupById(users));
