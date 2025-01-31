export function makeCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimatTime = 2000;
    let isSuccess = false;

    const inSecond = Math.ceil(estimatTime / 1000);
    console.log(
      `Mohon tunggu. Pramusaki kami sedang membuat kopi dalam ${inSecond} detik`
    );

    setTimeout(() => {
      const number = Math.random();

      if (number > 0.3) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error("Maaf, kopi gagal dibuat"));
        return;
      }

      console.log("Pramusaji selesai membuat kopi");
      resolve(name);
    }, estimatTime);
  });
}

export function sendCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimatTime = 1000;
    let isSuccess = false;

    console.log("Pramusaji sedang mengatarkan kopi pesanan");

    setTimeout(() => {
      const number = Math.random();
      if (number > 0.1) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error("Maaf, kopi gagal diantarkan"));
        return;
      }

      console.log("Pramusaji sudah sampai meja.");
      resolve(name);
    }, estimatTime);
  });
}
