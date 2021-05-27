const array1 = ["String One", "String Two", "String Three"];
const array2 = ["Again a string", 9, true];
const array3 = [[], [], []];

const emptyObject = {};
const anotherObject = {
  id: 94773672,
  email: "random@gmail.com",
  password: "secret",
};

const arrayWithObjects = [
  {
    width: 10,
    height: 10,
  },
  {
    width: 30,
    height: 50,
  },
  {
    width: 100,
    height: 90,
  },
];

//  7. Create an object that contains three properties: a string, an array and an object.
const yetAnotherObject = {
  name: "A string",
  food: [" strawberry"],
  fruit: { fruit: "maracuja" },
};

console.log(typeof array1);
console.log(typeof emptyObject);

//  10.
const randomArray = [8, 9, 65, 23, 91];

randomArray.push(0);
randomArray.unshift(9);
randomArray.pop();
console.log(randomArray.length);
randomArray.pop();
console.log(randomArray);
randomArray.splice(1, 1);
console.log(randomArray);
