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
8. [includes](#includes)
9. [find](#find)
10. [findIndex](#findIndex)
11. [indexOf](#indexOf)
12. [concat](#concat)
13. [slice](#slice)
14. [splice](#splice)
15. [push](#push)
16. [pop](#pop)
17. [shift](#shift)
18. [unshift](#unshift)
19. [reverse](#reverse)
20. [keys](#keys)
21. [fill](#fill)

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

The [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) _returns the first element in the provided array that satisfies the provided testing function_.If no values satisfy the testing function, undefined is returned.

###### Example

```javascript
const numbers = [5, 12, 8, 130, 44];

const found = numbers.find((element) => element > 10);

console.log(found); // Expected output: 12
```

---

## .findIndex()

The [`findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) _returns the index of the first element in an array that satisfies the provided testing function_.If no elements satisfy the testing function, -1 is returned.

###### Example

```javascript
const numbers = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(numbers.findIndex(isLargeNumber)); // Expected output: 3
```

---

## .indexOf()

The [`indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) _returns the first index at which a given element can be found in the array_ or -1 if it is not present. You can also define a starting index.

###### Example

```javascript
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // Expected output: 1

const fromIndex = 2;
console.log(beasts.indexOf('bison', fromIndex)); // Expected output: 4

console.log(beasts.indexOf('giraffe')); // Expected output: -1
```

---

## .concat()

The [`concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method is used to _merge two or more arrays_. This method does not change the existing arrays, but instead returns a new array.

###### Example

```javascript
const firstArray = ['a', 'b', 'c'];
const secondArray = ['d', 'e', 'f'];
const thirdArray = firstArray.concat(secondArray);

console.log(thirdArray);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```

---

## .slice()

The [`slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method returns a [shallow copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) of a _portion of an array into a new array object_ selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

###### Example

```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
```

---

## .splice()

The [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method _changes the contents of an array_ by removing or replacing existing elements and/or adding new elements.

###### Example

```javascript
const months = ['Jan', 'March', 'April', 'June'];
// Inserts at index 1
months.splice(1, 0, 'Feb');
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// Replaces 1 element at index 4
months.splice(4, 1, 'May');
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

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

The [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method _removes the first element from an array_ and _returns that removed element_. This method changes the length of the array.

###### Example

```javascript
const numbers = [1, 2, 3];

const firstElement = numbers.shift();

console.log(numbers);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1
```

---

## .unshift()

The [`unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) method _adds the specified elements to the beginning of an array_ and _returns the new length of the array_.

###### Example

```javascript
const numbers = [1, 2, 3];

console.log(numbers.unshift(4, 5)); // Expected output: 5

console.log(numbers);
// Expected output: Array [4, 5, 1, 2, 3]
```

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

The [`keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys) method _returns a new array [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) object_ that _contains the keys for each index in the array_.

###### Example

```javascript
const numbers = ['a', 'b', 'c'];
const iterator = numbers.keys();

for (const key of iterator) {
	console.log(key);
}
// Expected output: 0
// Expected output: 1
// Expected output: 2
```

---

## .fill()

The [`fill()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) method _changes all elements within a range of indices in an array_ to a static value. It returns the modified array. If you call the method without specifying start & end index, it will fill the entire array with the specified value.

###### Example

```javascript
const numbers = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(numbers.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(numbers.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

// Replace all the elements of the array
console.log(numbers.fill(6));
// Expected output: Array [6, 6, 6, 6]
```
