Array.prototype.sortBy = function (sortProp = "") {
  // name | name:desc | name:asc
  if (sortProp.includes(",")) {
    const [...condition] = sortProp.split(",");
    console.log("🚀   condition1:", condition);
    // console.log("🚀   condition2:", condition2);
  } else {
    console.log("🚀   condition0:", sortProp);
    const [key, direction = "asc"] = sortProp?.split(":");
    const dir = direction.toLowerCase() === "desc" ? -1 : 1;
    return console.log(this.sort((a, b) => (a[key] > b[key] ? dir : -dir)));
  }
};
const hong = { id: 1, name: "Hong", city: "Busan", dept: 1 };
const kim = { id: 2, name: "Kim", city: "Seoul", dept: 2 };
const lee = { id: 3, name: "Lee", city: "Daegu", dept: 2 };
const users = [lee, hong, kim];

users.sortBy("id"); // [hong, kim, lee]
users.sortBy("name:desc,id:,dept:desc"); // [lee, kim, hong];

// const hong = { id: 1, name: "Hong", city: "Busan", dept: 1 };
// const kim = { id: 2, name: "Kim", city: "Seoul", dept: 2 };
// const lee = { id: 3, name: "Lee", city: "Daegu", dept: 2 };
// const users = [lee, hong, kim];

// const assert = require("assert");

// assert.deepStrictEqual(users.sortBy("id"), [hong, kim, lee]);
// assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);
// assert.deepStrictEqual(users.sortBy("dept:desc,city:asc"), [lee, kim, hong]);
// assert.deepStrictEqual(users.sortBy("dept:desc,city:desc"), [kim, lee, hong]);
// assert.deepStrictEqual(users.sortBy("name:desc,id:,dept:desc"), [lee, kim, hong]);
// assert.deepStrictEqual(users.sortBy("dept:desc,id"), [kim, lee, hong]);
