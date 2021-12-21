// promise là khái niệm sinh ra để giúp xử lý thao tác bất đồng bộ ( callback hell)

let promise = new Promise(
  // executor
  function (resolve, reject) {
    //Thành công: resolve()
    resolve(); //      ---> chạy vào promise.then().finally()
    //Thất bại: reject()
    reject(); //      ---> chạy vào promise.catch().finally()
  }
);

promise
  .then(() => console.log('Thành công'))
  .catch(() => console.log('Thất bại'))
  .finally(() => console.log('Kết thúc'));
