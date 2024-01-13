# Array methods in Javascript

JavaScript gives us several tools for iterating over the items in an array. We could have used a for loop, and it's arguably much simpler. There are no complicated callback functions.

Taken as a whole, this family of array methods allows us to do all sorts of amazing things, like finding a particular item in the array, filtering a list, and much more.

All of the methods in this family follow the same basic structure. For example, they all support the **optional index parameter** to obtain the index of the current element of the array.

This repository contains exercises and docs for using javascript array methods.

## Index

1. [some](#some)
2. [every](#every)
3. [map](#map)
4. [filter](#filter)
5. [reduce](#reduce)
6. [forEach](#forEach)
7. [sort](#sort)
8. [includes](#find)
9. [find](#includes)
10. [indexOf](#indexOf)
11. [concat](#concat)
12. [slice](#slice)
13. [splice](#splice)
14. [push](#push)
15. [pop](#pop)
16. [shift](#shift)
17. [unshift](#unshift)
18. [reverse](#reverse)
19. [keys](#keys)
20. [fill](#fill)

## .some()

The [`some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) method _tests whether at least one element in the array passes the test implemented by the provided callback function_. It returns `true` if, in the array, it finds an element for which the provided function returns true; otherwise, it returns `false`.

###### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

// Checks whether a number is even
console.log(
	numbers.some((number) => {
		number % 2 === 0;
	})
);
// Expected output: true

console.log([1, 13, 3, 7, 5].some((number) => number % 2 === 0));
// Expected output: false
```

---

## .every()

The [`every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) method _tests whether all elements in the array pass the test implemented by the provided callback function_. It returns `false` if, in the array, it finds an element for which the provided function returns false; otherwise, it returns `true`.

###### Example

```javascript
const numbers = [1, 30, 39, 29];

// Checks whether all numbers are below a threshold
console.log(numbers.every((number) => number < 40));
// Expected output: true

console.log([1, 100, 39, 29].every((number) => number < 40));
// Expected output: false
```

---

## .map()

The [`map()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map) _creates a new array populated with the results of calling a provided function_ on every element in the calling array.

###### Example

```javascript
const people = [
	{ name: 'Aisha', grade: 89 },
	{ name: 'Bruno', grade: 55 },
	{ name: 'Carlos', grade: 68 },
	{ name: 'Dacian', grade: 71 },
	{ name: 'Esther', grade: 40 },
];

// Pass a callback function to map
const resultArray = array1.map((number) => number * 2);

const screamedNames = people.map((person) => {
	return person.name.toUpperCase();
});

console.log(screamedNames); // Expected output: Array ['AISHA', 'BRUNO','CARLOS', 'DACIAN', 'ESTHER']
```

---

## .filter()

The [`filter()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) _creates a referenced copy of a given array, removing the elements that do not pass the test_ implemented on the provided callback function. That callback function will be called once per item in the array and should return `true` or `false`. Based on that result, the element will be or not in the new array.

###### Example

```javascript
const words = [
	'spray',
	'limit',
	'elite',
	'exuberant',
	'destruction',
	'present',
];

const result = words.filter((word) => word.length > 6);

console.log(result); // Expected output: Array ["exuberant", "destruction", "present"]
```

---

## .reduce()

The [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method _executes a user-supplied callback function on each element of the array passing in the return value from the calculation on the preceding element_. The final result of running the reducer across all elements of the array is a single value.
The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0)

###### Example

```javascript
const numbers = [15.5, 2.3, 1.1, 4.7];
const initialValue = 0

const sum = numbers.reduce((total, num) {
	return total + Math.round(num);
}, initialValue)

console.log(sum); // Expected output: 24

```

---

## .forEach()

The [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method _executes a provided function (callback) once for each array element_. In many ways, is quite a lot like `map()`, the difference is that `map()` produces a new array with the transformed values and `forEach()` not (always returns undefined).

###### Example

```javascript
const items = ['item1', 'item2', 'item3'];
const itemsCopy = [];

items.forEach((item) => {
	copyItems.push(item);
});
```

---

## .sort()

The [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method _sorts the elements of an array_ and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

###### Example

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers);
// Expected output: Array [1, 100000, 21, 30, 4]
```

---

## .includes()

The [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method determines whether an array _includes a certain value among its entries_, returning `true` or `false` as appropriate.

###### Example

```javascript
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); // Expected output: true
console.log(pets.includes('at')); // Expected output: false
```

---

## .find()

---

## .indexOf()

---

## .concat()

---

## .slice()

---

## .splice()

---

## .push()

The [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method _adds the specified element/s to the end of an array_ and _returns the new length of the array_

###### Example

```javascript
const animals = ['pigs', 'goats', 'sheep'];

let length = animals.push('cows');
console.log(length); // Expected output: 4
console.log(animals); // Expected output: Array ["pigs", "goats", "sheep", "cows"]

length = animals.push('chickens', 'cats', 'dogs');
console.log(length); // Expected output: 7
console.log(animals); // Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

---

## .pop()

The [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method _removes the last element_ from an array and _returns that element_. This method changes the length of the array.

###### Example

```javascript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop()); // Expected output: "tomato"

console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

---

## .shift()

---

## .unshift()

---

## .reverse()

The [`reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) method _reverses an array in place and returns the original array modified (a reference to it)_. The first array element now becomes the last, and the last array element becomes the first. <br> <br>
To reverse the elements in an array _without mutating the original array_, use [`toReversed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)

###### Example

```javascript
const array> = ['one', 'two', 'three'];
console.log('array:', array); // Expected output: "array:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log('reversed:', reversed); // Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: array.reverse() is destructive -- it changes the original array.
console.log('array:', array); // Expected output: "array:" Array ["three", "two", "one"]
```

---

## .keys()

---

## .fill()
