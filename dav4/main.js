// function removeLastChar(str) {
//     return str.map(s => s.slice(0, -1));
// }

// console.log(removeLastChar(['yellow', 'blue', 'red']));



// function sumTwoSmallestNumbers(numbers) {
//     let sortedNumbers = numbers.sort((a, b) => a - b);
//     return sortedNumbers[0] + sortedNumbers[1];
// }

// console.log(sumTwoSmallestNumbers([1, 23, 42, 5, 53, 2, 34, 5,]));



// function sumNumbers(numbers) {
//     let sum = 0;
//     numbers.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }

// console.log(sumNumbers([1, 2, 3, 4, 5]));



// function longWords(arr) {
//   return arr
//     .filter(word => word.length > 5)
//     .map(word => word.toUpperCase())
//     .join("#");
// }

// console.log(longWords(["cat","parrot","dog","elephant"]));



// function averageByClass(arr) {
//   const result = {};

//   arr.forEach(student => {
//     if (!result[student.cls]) {
//       result[student.cls] = {
//         sum: 0,
//         count: 0
//       };
//     }

//     result[student.cls].sum += student.grade;
//     result[student.cls].count++;
//   });

//   for (let key in result) {
//     result[key] = result[key].sum / result[key].count;
//   }

//   return result;
// }



// const students = [
//   { name: "Ann", cls: "A", grade: 90 },
//   { name: "Ben", cls: "B", grade: 75 },
//   { name: "Cara", cls: "A", grade: 80 }
// ];

// console.log(averageByClass(students));