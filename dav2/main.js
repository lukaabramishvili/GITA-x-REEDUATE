function getAbbr(abbr){
    let abbrs = abbr.split(' ');
    let result = '';
    for(let i = 0; i < abbrs.length; i++){
        result += abbrs[i][0].toUpperCase() + ".";
    }

    return result.slice(0, -1);
}

console.log(getAbbr("luka abramisvhili"));


function getSumOfDigit(number){
    let sum = 0;
    let numbers = number.toString().split('');
    for(let i = 0; i < numbers.length; i++){
        sum += parseInt(numbers[i]);
    }    

    return sum;
}

console.log(getSumOfDigit(123));


function removeDuplicates(word){
    let result = '';
    for(let i = 0; i < word.length; i++){
        if(result.indexOf(word[i]) === -1){
            result += word[i];
        }
    }

    return result;
}

console.log(removeDuplicates("banana"));


function  removeSpaces(string){
    let result = '';
    for(let i = 0; i < string.length; i++){
        if(string[i] !== ' '){
            result += string[i];
        }
    }

    return result;
} 

console.log(removeSpaces("lu k a ab ramis   vhili"));


function reverseString(str){
    let result = '';

    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }

    return result;
}

console.log(reverseString("luka abramisvhili"));