const assert = require("assert");
const { deepCopy } = require("./ex4");

const arr = [1, 2, 3];
const hong = { id: 1, name: "Hong", city: "Busan", dept: 1 };

const kim = {
  nid: 3,
  addr: "Pusan",
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: { id: 1, name: "Hong", addr: { city: "Seoul" } },
  xx: null,
  yy: function () {
    console.log(this.oo);
  },
  yyy() {
    console.log(this.oo);
  },
  [Symbol()]: 9,
  [Symbol()]: Symbol("symbol2"),
  zs: new Set([arr, hong]),
  zws: new WeakSet([arr, hong]),
  zm: new Map([[hong, arr]]),
  zwm: new WeakMap([[hong, arr]]),
};

// 추가 테스트 코드 짜면 가산점
const newKim = deepCopy(kim);
assert.deepStrictEqual(newKim, kim);
newKim.addr = "Daegu";
newKim.oo.name = "Kim";
assert.notDeepStrictEqual(newKim, kim);

newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = "Daejeon";

assert.notStrictEqual(kim.arr[4][1], newKim.arr[4][1]);
assert.notStrictEqual(kim.oo.addr.city, newKim.oo.addr.city);
