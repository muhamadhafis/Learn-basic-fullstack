import { doSomething } from "./data-kasus-1.js";

async function promiseWithAsyncAwait() {
  try {
    console.log("Start.");

    const result = await doSomething();
    console.log(result);

    console.log("End.");
  } catch (error) {
    console.log(error.message);
  }
}

promiseWithAsyncAwait();
