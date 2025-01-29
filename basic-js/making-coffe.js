export function makeCoffee(callback) {
  const estimationTime = 5000;

  const inSec = estimationTime / 1000;
  console.log(`Please wait, our barista making coffee in ${inSec} second`);

  setTimeout(() => {
    console.log("Our barista finished make coffee");

    callback();
  }, estimationTime);
}

export function sendCoffee(callback) {
  const estimationTime = 3000;

  console.log("Waiter driving coffee into your table");

  setTimeout(() => {
    console.log("The waiter has reached the table!");

    callback();
  }, estimationTime);
}
