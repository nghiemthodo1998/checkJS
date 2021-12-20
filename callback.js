// Hàm thông thường
function doHomework(subject) {
  console.log(`Bắt đầu làm bài tập ${subject}.`);
}
doHomework('Toán'); // Bắt đầu làm bài tập Toán.

// truyền 1 hàm callback vào làm đối số
function startWork(work, callback) {
  console.log(`Start to ${work}`);
  callback();
}

startWork('wash clothes', function () {
  console.log('Finish working!');
});
// Start to wask closthes
// Finish working

function doHomeWork(subject, callback) {
  setTimeout(function () {
    console.log(`Bắt đầu làm bài tập ${subject}.`);
    callback();
  }, 5000);
}

function alertFinished() {
  console.log('Làm bài tập xong!');
}
doHomeWork('Toán', alertFinished);
