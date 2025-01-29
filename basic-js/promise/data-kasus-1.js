function promiseExecutor(berhasil, gagal) {
  setTimeout(() => {
    console.log("Melakukan hal-hal sebelum Promise diselesaikeun!");

    const number = Math.random();

    if (number > 0.3) {
      console.log("Berhasil-berhasil yeah!");
    } else {
      console.log("Yah kapan-kapan deh berhasilnya!");
    }
  }, 2000);
}

export function doSomething() {
  return new Promise(promiseExecutor);
}
