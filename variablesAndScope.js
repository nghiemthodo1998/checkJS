// Var
// global-scope
var language = 'JavaScript';

function checkName() {
  // function-scope
  var language = 'ReactJs';

  console.log(language); // ReactJs     ---> biến thuộc function-scope
}
checkName(); // ReactJs
console.log(language); //JavaScript     ---> biến thuộc global-scope

//----------------------------------

if (true) {
  //block-scope
  var test = true;
}
console.log(test); // true       ---> biến không thuộc block-scope

//----------------------------------

for (var i = 0; i < 10; i++) {
  //loop-local
  var one = 1;
}
console.log(one); // 1        ---> biến không thuộc loop-local

//----------------------------------

//global-scope
var language = 'Java';
console.log(language); // Java      ---> có thể khai báo lại 1 biến với var
language = 'Python';
console.log(language); // Python        ---> có thể gán cho biến 1 giá trị khác

// KẾT LUẬN về var
// các biến được khai báo với var có phạm vi hàm hoặc phạm vi toàn cục
// biến được khai báo với var thì có thể được khai báo lại với var
// biến được khai báo với var có thể được gán 1 giá trị khác với giá trị ban đầu

//Let
{
  //block-scope
  let language = 'React';
  console.log(language); // React       ---> biến thuộc block-scope
}

// console.log(language); // error     ---> biến được khai báo bởi let không thể truy cập bên ngoài khối

//------------------------

function foo() {
  //function-scope
  let language = 'Python';
  console.log(language); // Python      ---> biến thuộc function-scope
}

foo(); // Python
// console.log(language); // error...       ---> biến được khai báo bởi let không thể truy cập bên ngoài hàm

// ------------------------

let name = 'Nghiem Tho Do';
//let name = 'ReactPlus'; // error      ---> biến được khai báo bởi let thì không thể được khai báo lại
name = 'React+';
console.log('name', name); // React+        ---> biến được khai báo bới let có thể được gán giá trị khác giá trị bạn đầu

// KẾT LUÂN về let
// biến được khai báo bới let có phạm vi khối
// biến được khai báo bởi let có thể gán lại nhưng không thể khai báo lại

// Const
const language2 = 'JavaScript';

{
  const language2 = 'React';
  console.log(language2); // React     ---> biến có phạm vi khối
}

console.log(language2); // "JavaScript"

//---------------------------

// const language2 = "Java"; // error       ---> biến khai báo bởi const không thể được khai báo lại
// language2 = "Java"; // error         ---> biến được khai báo bởi const thông thể được gán lại

// KẾT LUẬN về const
// biến được khai báo bởi const có phạm vi khối
// biến được khai báo bởi const không thể gán lại cũng không thể khai báo lại
