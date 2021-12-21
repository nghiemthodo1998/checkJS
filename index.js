var arr = [1, 2, 3, 4, 5];

arr.forEach((num, index) => (arr[index] = num * 3));
var bien = arr;
console.log(bien);

console.log(arr);

var arr2 = [2, 4, 6, 8];

arr2.map((num, index) => {
  arr2[index] = num * 3;
});
var bien2 = arr2;
console.log(bien2);
console.log(arr2);
