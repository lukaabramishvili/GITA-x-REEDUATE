const fs = require('fs');

const content = fs.readFileSync('random.txt', 'utf8');

const chars = content.length;
const words = content.trim().split(/\s+/).filter(w => w.length > 0).length;
const vowels = (content.match(/[aeiouAEIOU]/g) || []).length;

const result = { word: words, vowel: vowels, chars };

fs.writeFileSync('result.json', JSON.stringify(result, null, 2));
console.log('Analysis complete. Result saved to result.json');
console.log(result);