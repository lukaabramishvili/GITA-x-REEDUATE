// 1) რა თანმიმდევრობით დაილოგება

console.log("1");

setTimeout(() => console.log("2"), 100);

setTimeout(() => console.log("3"), 0);

Promise.resolve().then(() => console.log("4"));

console.log("5");

// შედეგი:
// 1
// 5
// 4
// 3
// 2



// =======================================================



// 2) რა თანმიმდევრობით დაილოგება

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => {
  console.log("3");

  setTimeout(() => console.log("4"), 0);
});

console.log("5");

// შედეგი:
// 1
// 5
// 3
// 2
// 4



// =======================================================



// 3) sleep ფუნქცია

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function testSleep() {
  console.log("დაიწყო");

  await sleep(1000);

  console.log("1 წამის შემდეგ");
}

testSleep();



// =======================================================



// 4) რენდომ რიცხვის გენერაცია სანამ არ დაემთხვევა

function randomUntilMatch(target) {
  const interval = setInterval(() => {

    const randomNum = Math.floor(Math.random() * 20) + 1;

    console.log("რენდომ რიცხვი:", randomNum);

    if (randomNum === target) {
      console.log("დაემთხვა:", target);

      clearInterval(interval);
    }

  }, 1000);
}

randomUntilMatch(7);



// =======================================================



// 5) უკუთვლა 0-მდე

function countdown(number, time) {

  const interval = setInterval(() => {

    console.log(number);

    number--;

    if (number < 0) {
      clearInterval(interval);

      console.log("დასრულდა");
    }

  }, time);
}

countdown(10, 1000);