// While Loops

// var num = -10;
//
// console.log("All numbers between -10 and 19");
// while (num < 20) {
//   console.log(num);
//   num++;
// }
//
// var num = 10;
//
// console.log("All even numbers between 10 and 40");
// while (num < 40) {
//   if (num % 2 === 0){
//     console.log(num);
//   }
//   num++;
// }
//
// var num = 300;
//
// console.log("All odd numbers between 300 and 333");
// while (num < 333) {
//   if (num % 2 !== 0){
//   console.log(num);
//   }
//   num++;
// }
//
// var num = 5;
//
// console.log("All numbers divisible by 5 and 3 between 5 and 50");
// while (num < 50) {
//   if (num % 5 == 0 && num % 3 == 0){
//       console.log(num);
//     }
//   num++;
// }

// For Loops

console.log("all numbers between -10 and 19");

for (var i = -10; i < 19; i++){
  console.log(i);
}

console.log("all even numbers between 10 and 40");

for (var i = 10; i < 40; i++){
  if (i % 2 === 0){
    console.log(i);
  }
}

console.log("all odd numbers between 300 and 333");

for (var i = 300; i < 333; i++){
  if (i % 2 !== 0)
    console.log(i);
}

console.log("all numbers divisible by 5 and 3 between 5 and 50");

for (var i = 5; i < 50; i++){
  if (i % 5 ===0 && i % 3 ===0)
    console.log(i);
}
