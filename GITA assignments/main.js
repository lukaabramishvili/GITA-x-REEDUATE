// 1) ცელსიუსიდან ფარენჰეიტში
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(25)); 
// 77



// 2) სტრინგის შებრუნება
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 
// olleh



// 3) სიტყვების დათვლა
function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}

console.log(countWords("Hello world from JS")); 
// 4



// 4) ხმოვნების დათვლა
function countVowels(word) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of word) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("programming")); 
// 3



// 5) ფაქტორიალი
function factorial(n) {
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); 
// 120



// 6) ლუწი რიცხვების ჯამი
function sumEvenNumbers(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumEvenNumbers(10)); 
// 30



// 7) შეფასება
function getGrade(score) {
  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 60) return 'E';
  else return 'F';
}

console.log(getGrade(85)); 
// B



// 8) პაროლის შემოწმება
function validatePassword(password) {
  const hasMinLength = password.length > 8;
  const hasNumber = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);

  return hasMinLength && hasNumber && hasUpperCase;
}

console.log(validatePassword("Test12345")); 
// true