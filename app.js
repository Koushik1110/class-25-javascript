// "use strict";

// //simple array method
// const numbers = [10, 20, 30, 40];

// //push()
// numbers.push(50);

// //pop()
// numbers.pop();

// //shift
// numbers.shift();

// //unshift
// numbers.unshift(5);

// //at
// console.log(numbers.at(-4));

// //indexOf()
// console.log(numbers.indexOf(40));

// //includes()
// console.log(numbers.includes(60));

// //slice()
// const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// const slicedArr = arr.slice(0, -2); // [2,4,6]

// console.log(slicedArr);
// console.log(arr);

// //splice()
// const splicedArr1 = arr.splice(0, 3); //delete
// const splicedArr2 = arr.splice(3, 4); //delete

// console.log(splicedArr1, splicedArr2);
// console.log(arr);

//forEach
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum =0;

// for (const num of numbers) {
//   sum += num;
// }

// console.log(sum);

//using forEach makes the equation much shorter

// let sum = 0;

// numbers.forEach(el => (sum += el));

// console.log(sum);

//map
// const areas = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// const result = areas.map((area) => area * area);

// console.log(result);

//filter
// const myArr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// const odds = myArr.filter((el) => el % 2 !== 0);
// const evens = myArr.filter((el) => el % 2 === 0);

// console.log(evens);
// console.log(odds);

//find

// const winterVegetables = [
//   "cabbage",
//   "cauliflower",
//   "eggplant",
//   "beans",
//   "peas",
// ];

// const winterVegetable = winterVegetables.find((winterVegetable) =>
//   winterVegetable.endsWith("s")
// ); // beans

// // console.log(winterVegetable);

// const winterVegetableIndex = winterVegetables.findIndex((winterVegetable) =>
//   winterVegetable.startsWith("e")
// ); //

// console.log(winterVegetableIndex);

//some

// const classmates = ["Ebrahim", "Tahia", "Jubaer", "Ariful"];

// const output = classmates.some((classmate) => classmate.endsWith("a"));

// // console.log(output);

// //every

// const output2 = classmates.every((classmate) => classmate.endsWith("a"));

// console.log(output2);

// chaining method

// const newArr = [2, 6, 10, 15, 25, 27, 30];

// let sum = 0;

// newArr
//   .map((number) => number * 2)
//   .filter((number) => number > 15)
//   .forEach((number) => (sum += number));

//   console.log(sum);

//reduce

// const myNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const sum2 = myNumbers.reduce((sum, num) => (sum += num))

// console.log(sum2);

//sort()

// const foods = ["noodles", "burger", "pizza", "soup", "wanton"];

// foods.sort((x,y) => x.localeCompare(y)); //asc
// foods.sort((x,y) => y.localeCompare(x)); //dsc

// console.log(foods);

// const shoppingCart = [
//   { id: 1, title: "Shirt", price: 1000, rating: 4.7},
//   { id: 2, title: "T-Shirt", price: 350, rating: 4.2},
//   { id: 3, title: "Jeans", price: 1500, rating: 3.5},
//   { id: 4, title: "Hoodie", price: 850, rating: 4.0},
//   { id: 5, title: "Belt", price: 250, rating: 3.2},
//   { id: 6, title: "Shoe", price: 500, rating: 4.5},
// ]

// const sortedCart = shoppingCart.sort((x,y) => y.title.localeCompare(x.title)); //dsc

// console.log(sortedCart);

//flat
// const nestedArr = [1, 2, [3, 4], [5, 6, [7, 8, [9, 10]]]];

// const flattenedArr = nestedArr.flat(3).flatMap((el) => el + 4);

// console.log(flattenedArr);