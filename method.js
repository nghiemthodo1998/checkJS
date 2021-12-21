const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2);

console.log(array1); // [ 1, 4, 9, 16 ] ---> vì map() trả về 1 mảng mới nên mảng ban đầu không đổi
console.log(map1); // [ 2, 8, 18, 32 ] ---> mảng mới có độ dài bằng với mảng ban đầu

//-----------

const array2 = [1, 2, 3, 4, 5];

var bien2 = array2.forEach((x, index) => {
  return (array2[index] = x * 2);
});

console.log(bien2); // undefined ---> vì forEach() trả về undefined nên biến được gán bằng giá trị undefined

const arr = [1, 2, 3, 4, 5];

arr.forEach((x, index) => {
  return (arr[index] = x * 2);
});

console.log(arr); // [ 2, 4, 6, 8, 10 ] ---> forEach() thay đổi trực tiếp mảng ban đầu

//------------------

const words = ['elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]
// ---> filter() trả về mảng mới gồm các phần tử thỏa mãn điều kiện hoặc 1 mảng trống

//-------------------
const array5 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array5.reduce(reducer)); // 10

// 5 + 1 + 2 + 3 + 4
console.log(array5.reduce(reducer, 5)); //15
// ---> thực thi 1 hàm callback lên các phần tử của mảng và trả về giá trị tích lũy duy nhất

//---------------
const array6 = [5, 12, 8, 130, 44];

const found = array6.find((element) => element > 10);

console.log(found); // 12
// ---> trả về giá trị của phần tử đầu tiên thỏa mãn điều kiện hoặc undefined

//-----------------

const array7 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array7.findIndex(isLargeNumber)); // 3
// ---> trả về chỉ số của phần tử đầu tiên thỏa mãn điều kiện hoặc -1
