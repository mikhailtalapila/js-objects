let john = { name: "John", last: "Smith", age: 31, id: 1, totalPoints: 2345 };
let joe = { name: "Joe", last: "test", age: 43, id: 2, totalPoints: 4323 };
let mike = { name: "Mike", last: "test2", age: 13, id: 3, totalPoints: 2341 };

let users = [john, joe, mike];

function sortByAge(people) {
  return people.sort((a, b) => a.age - b.age);
}

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

function getTotalPoints(users) {
  return users.reduce((prev, user) => prev + user.totalPoints, 0);
}
console.log(getAverageAge(users));

console.log(`Total points: ${getTotalPoints(users)}`);
