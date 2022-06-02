<!-- API -->

Fake Store API

// object , new Map

const obj = { a: 1, b: 2, c: 3 };
const arr = Object.entries(obj);
// ['a', 1] , ['b', 2] , ['c', 3]

const map = new Map([
["a", 1],
["b", 2],
["c", 3],
]);
console.log(...map);
// ['a', 1] , ['b', 2] , ['c', 3]
// 이터러블 프로토콜을 가지고있다.
// 어떤값이든 넘길 수 있다.
