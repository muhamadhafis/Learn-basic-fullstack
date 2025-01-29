import { doSomething } from "./data-kasus-1.js";

function onFulfilled(doSomethingData) {
  console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);
