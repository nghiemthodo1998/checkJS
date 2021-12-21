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
