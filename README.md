# Array methods in Javascript

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

## .some()

The [`some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) method _tests whether at least one element in the array passes the test implemented by the provided callback function_. It returns `true` if, in the array, it finds an element for which the provided function returns true; otherwise, it returns `false`.

###### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

// Checks whether a number is even
console.log(numbers.some((number) => {
    number % 2 === 0
}));
// Expected output: true

console.log([1, 13, 3, 7, 5].some((number) => number % 2 === 0))
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

console.log([1, 100, 39, 29].every((number) => number < 40))
// Expected output: false
```
---

## .map()

---

## .filter()

The [`filter()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) _creates a referenced copy of a given array, removing the elements that do not pass the test_ implemented on the provided callback function.

###### Example

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

---

## .reduce()

---

## .forEach()

The [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method _executes a provided function (callback) once for each array element_.

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

---

## .includes()

The  [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method determines whether an array _includes a certain value among its entries_, returning `true` or `false` as appropriate.

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
console.log(length);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

length = animals.push('chickens', 'cats', 'dogs');
console.log(length);
// Expected output: 7
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

---

## .pop()

The [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method _removes the last element_ from an array and _returns that element_. This method changes the length of the array.

###### Example

```javascript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
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
console.log('array:', array);
// Expected output: "array:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: array.reverse() is destructive -- it changes the original array.
console.log('array:', array);
// Expected output: "array:" Array ["three", "two", "one"]
```

---

## .keys()
