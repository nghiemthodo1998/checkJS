// sync
function test() {
  console.log(1);
  console.log(2);
  console.log(3);
}
test(); // 1 2 3

// async
function check() {
  console.log(1);
  setTimeout(function timeout() {
    console.log(2);
  }, 0);
  console.log(3);
}
check();
// GIẢI THÍCH:
// đầu tiên chạy console.log(1) ---> 1
// tiếp đó chạy setTimeOut --> đẩy hàm timeout() xuống callback queue và đợi
// chạy tiếp console.log(3) ---> 3
// khi đã kết thúc tiến trình, hàm timeout() ở callback queue được gọi lại
// chạy console.log(2) ---> 2
// ---> 1 3 2
// Link tham khảo chi tiết: https://viblo.asia/p/tai-sao-code-khong-chay-ngay-lap-tuc-voi-settimeoutcallback-0-3P0lP2NgKox
