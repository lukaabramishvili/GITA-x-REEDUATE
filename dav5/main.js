// 1
// function removeProperty(obj, prop) {
//     delete obj[prop];
//     return obj;
// }

// console.log(removeProperty({
//     name: 'luka',
//     lastName: 'abramishvili',
//     year: 2005
// }, 'year'));



// 2
// function leaderboard(users) {
//     return users
//         .sort((a, b) => b.score - a.score)
//         .map((user, index) =>({
//                 ...user,
//                 rank: index + 1
//         }));
// }

// console.log(leaderboard([
//     { name: "Ana", score: 50 },
//     { name: "Nika", score: 80 },
//     { name: "Luka", score: 70 }
// ]));



// 3
// function longTitle(obj) {
//     return obj.reduce((longest, current) => {
//         return longest.title.length > current.title.length ? longest : current;
//     },);

// }

// console.log(longTitle([
//     { title: "Up", year: 2009 },
//     { title: "The Lord of the Rings", year: 2001 },
//     { title: "The Shawshank Redemption", year: 1994 },
//     { title: "The Godfather", year: 1972 },
//     { title: "The Dark Knight", year: 2008 }
// ]));



// 4
// function averageAge(users) {
//     const result = {}

//     users.forEach(user => {
//         if (!result[user.dept]) {
//             result[user.dept] = {
//                 totalAge: 0,
//                 count: 0
//             }
//         }

//         result[user.dept].totalAge += user.age;
//         result[user.dept].count++;
//     });

//     // Calculate averages
//     for (const dept in result) {
//         result[dept].averageAge = result[dept].totalAge / result[dept].count;
//     }

//     return result;
// }

// const users = [
//     { name: "Ana", dept: "HR", age: 25 },
//     { name: "Nika", dept: "IT", age: 30 },
//     { name: "Luka", dept: "IT", age: 22 },
//     { name: "Giorgi", dept: "HR", age: 28 },
//     { name: "lasha", dept: "IT", age: 35 },
//     { name: "Giorgi", dept: "HR", age: 28 }
// ];

// console.log(averageAge(users));



// 5
// function countWorlds(words) {
//     const eachWordCount = {};
//     let wordCount = 0;

//     words.forEach(word => {
//         const comments = word.comment.split(' ');
//         comments.forEach(comment => {
//             wordCount++;
//         });
//         comments.forEach(comment => {
//             if (comment) {
//                 eachWordCount[comment] = (eachWordCount[comment] || 0) + 1;
//             }
//         });
//     });

//     return { eachWordCount, wordCount };
// }

// console.log(countWorlds([{
//     id: 1,
//     comment: "Hello world"
// }, {
//     id: 2,
//     comment: "This is great!"
// }, {
//     id: 3,
//     comment: ""
// }]));



// 6
// function groupByDepartment(users) {
//   const grouped = {};

//   users.forEach(user => {
//     if (!grouped[user.department]) {
//       grouped[user.department] = [];
//     }

//     grouped[user.department].push(user);
//   });

//   for (const department in grouped) {
//     grouped[department].sort((a, b) => b.salary - a.salary);
//   }

//   return grouped;
// }

// console.log(
//   groupByDepartment([
//     { name: "Ana", department: "HR", salary: 2000 },
//     { name: "Nika", department: "IT", salary: 5000 },
//     { name: "Luka", department: "IT", salary: 3500 },
//     { name: "Mariam", department: "HR", salary: 3000 }
//   ])
// );



// 7
// function finalPrice(cart) {
//   return cart.reduce((sum, item) => {
//     const discountedPrice =
//       item.price - (item.price * item.discountPercent) / 100;

//     return sum + discountedPrice * item.quantity;
//   }, 0);
// }

// console.log(
//   finalPrice([
//     { title: "Laptop", price: 2000, quantity: 1, discountPercent: 10 },
//     { title: "Mouse", price: 50, quantity: 2, discountPercent: 0 },
//     { title: "Keyboard", price: 100, quantity: 1, discountPercent: 20 }
//   ])
// );



// 8
// function usersToObject(users) {
//   return users.reduce((obj, user) => {
//     obj[user.id] = user;
//     return obj;
//   }, {});
// }

// console.log(
//   usersToObject([
//     { id: 1, name: "Ana", age: 25 },
//     { id: 2, name: "Nika", age: 30 },
//     { id: 3, name: "Luka", age: 22 }
//   ])
// );