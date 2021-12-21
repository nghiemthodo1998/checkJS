// async đặt trước 1 hàm ---> hàm luôn trả về 1 promise
// await đặt trước Promise sẽ làm hàm đợi ở Promise
//      cho đến khi kết thúc và trả về kết quả
// await chỉ hoạt động với promise. không hoạt động với callback
// await chỉ hoạt động bên trong async function

async function getABC() {
  let A = await getValueA(); // getValueA takes 2 second to finish
  let B = await getValueB(); // getValueB takes 4 second to finish
  let C = await getValueC(); // getValueC takes 3 second to finish

  return A * B * C;
}
