import { makeCoffee, sendCoffee } from "./making-coffe.js";

console.log("I'm order a cup coffee");

makeCoffee(() => {
  sendCoffee(() => {
    console.log("Waiter giving the coffee");
    console.log("I drink that coffee");
  });
});
