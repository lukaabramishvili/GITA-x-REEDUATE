const fs = require("fs");
const path = require("path");

function countTxtFiles(dir) {
  let totalWords = 0;
  let totalVowels = 0;

  const vowels = "აეიოუAEIOUaeiou";

  function readDirectory(currentPath) {
    const files = fs.readdirSync(currentPath);

    files.forEach((file) => {
      const filePath = path.join(currentPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        readDirectory(filePath);
      } else if (path.extname(file) === ".txt") {
        const content = fs.readFileSync(filePath, "utf8");

        const words = content
          .trim()
          .split(/\s+/)
          .filter(Boolean);

        totalWords += words.length;

        for (const char of content) {
          if (vowels.includes(char)) {
            totalVowels++;
          }
        }
      }
    });
  }

  readDirectory(dir);

  console.log("სულ სიტყვები:", totalWords);
  console.log("სულ ხმოვნები:", totalVowels);
}

countTxtFiles(__dirname);