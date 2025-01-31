import { makeCoffee, sendCoffee } from "./data-kasus-1.js";

const order = "Kopi Espresso";

console.log(`Saya memesan ${order} di kafe.`);

// makeCoffee(order)
//   .then(
//     (value) => {
//       return sendCoffee(value);
//     },
//     (error) => {
//       console.error(error.message);
//       throw error;
//     }
//   )
//   .then(
//     (value) => {
//       console.log(`Pramusaji memberikan ${value} pesanan.`);
//       console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
//     },
//     (error) => {
//       console.error(error.message);
//       throw error;
//     }
//   );

makeCoffee(order)
  .then((value) => {
    return sendCoffee(value);
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
  });
