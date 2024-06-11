//break/continue ga oid masalalar
//1-masala
// for (let i = 1; i <= 50; i++) {
//   if (i == 30) {
//     break;
//   }
//   console.log(i);
// }

//2-masala
// for (let i = 1; i <= 50; i++) {
//   if ((a = i % 5 == 0)) {
//     continue;
//   }
//   console.log(i);
// }

//3-masala
// for (let i = 1; i <= 50; i++) {
//   if (i == 75) {
//     break;
//   }
//   console.log(i);
// }

//4-masala
// for (let i = 1; i <= 50; i++) {
//   if ((a = i % 3 == 0)) {
//     continue;
//   }
//   console.log(i);
// }

// While hamda do…while yordamida ishlanadigan masalalar
// 1-masala
// let i = 1;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// 2-masala

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// 3-masala
// let i = 1;
// while (i <= 50) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// 4-masala
// let i = 1;
// while (i <= 50) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
//   i++;
// }

// 5-masala
// let soni = 0;
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   soni++;
// }

// 6-masala
// let i = 1;
// while (i <= 10) {
//   if ((i = i * i)) {
//     console.log(i);
//   }
//   i++;
// }

// 7-masala
// let i = +prompt("sonni kiriting");
// while (i <= n) {
//   if (i > 0) {
//     console.log(i);
//   }
//   i++;
// }

//8-masala
// let soni = 1;
// let i = 2;
// while (i <= 1024) {
//   if (i * i) {
//     console.log(i);
//   }
//   soni * i;
// }

//9-masala

//10-masala
// let i = 1;
// while (i <= 20) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
//   i++;
// }

//`do...while` sikl operatoriga oid masalalar\

//1-masala
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//2-masala
// let i = 20;
// do {
//   console.log(i);
//   i++;
// } while (i >= 1);

//3-masala
// let i = 1;
// do {
//   console.log(i);

//   if (a % 2 == 0);

//   i++;
// } while (i <= 100);
// {
//   if (a % 2 == 0);
// }

//Umumiy masalalar.

//1-masala
// for (let i = 1; i <= 50; i++) {
//   if (i % 5 == 0) {
//     console.log("5 ga karrali");
//   }
//   if (i % 7 == 0) {
//     console.log("7 ga karrali");
//   } else i % 5 == 0 && i % 7 == 0;
//   {
//     console.log("5 va 7 ga karrali");
//   }
// }

//2-masala
// for (let i = 1; i <= 12; i++) {
//   switch (i) {
//     case 1:
//       console.log("yanvar");
//       break;
//     case 2:
//       console.log("fevral");
//       break;
//     case 3:
//       console.log("mart");
//       break;
//     case 4:
//       console.log("aprel");
//       break;
//     case 5:
//       console.log("may");
//       break;
//     case 6:
//       console.log("iyun");
//       break;
//     case 7:
//       console.log("iyul");
//       break;
//     case 8:
//       console.log("avgust");
//       break;
//     case 9:
//       console.log("sentabr");
//       break;
//     case 10:
//       console.log("oktabr");
//       break;
//     case 11:
//       console.log("noyabr");
//       break;
//     case 12:
//       console.log("dekabr");
//       break;

//     default:
//       console.log("Bunday oy mavjud emas");

//       break;
//   }
// }

//3-masala
// let i = 1;
// while (i <= 100) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   if (i == 77) {
//     break;
//   }
//   i++;
// }

//4-masala
// let i = 1;
// while (i <= 7) {
//   switch (a) {
//     case 1:
//       console.log("dushanba");
//       break;
//     case 2:
//       console.log("seshanba");
//       break;
//     case 3:
//       console.log("chorshanba");
//       break;
//     case 4:
//       console.log("payshanba");
//       break;
//     case 5:
//       console.log("juma");
//       break;
//     case 6:
//       console.log("shanba");
//       break;
//     case 7:
//       console.log("yakshanba");
//       break;
//     default:
//       console.log("Bunday hafta kuni mavjud emas");
//       break;
//   }
//   i++;
// }

//5-masala
// let i = +prompt('sonni kirting');
// do {
//   console.log(i);

//   if (a > 0) {
//     console.log("musbat");
//   }

//   i++;
// } while (i <= 100);
// {
//   if (a < 0) {
//     console.log("manfiy");
//   } else {
//     console.log("nol");
//   }
// }

//6-masala
let i = +prompt("sonni kirting");

//7-masala
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
  if (i % 3 == 0) {
    console.log("Fizz");
  }
  if (i % 5 == 0) {
    console.log("Buzz");
  }
}
