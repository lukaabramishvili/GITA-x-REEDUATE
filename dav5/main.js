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
function countWorlds(words) {
    const wordCount = {};

    words.forEach(word => {
        
    });
}