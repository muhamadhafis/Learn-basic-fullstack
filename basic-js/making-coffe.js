export function makeCoffe() {
  const timeMakeCoffe = 5000;
  const inSec = 5000 / 1000;

  console.log(`Our waiter will deliver your coffe in ${inSec} second`);

  setTimeout(() => {
    console.log(".");
  }, 1000);

  setTimeout(() => {
    console.log("..");
  }, 2000);

  setTimeout(() => {
    console.log("...");
  }, 3000);

  setTimeout(() => {
    console.log("...");
  }, 4000);

  setTimeout(() => {
    console.log("Your Coffe is ready right now");
  }, timeMakeCoffe);
}
