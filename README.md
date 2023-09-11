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

---

## .every()

---

## .map()

---

## .filter()

---

## .reduce()

---

## .forEach()

The `forEach()` method _executes a provided function (callback) once for each array element_.
[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

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

The `includes()` method determines whether an array _includes a certain value among its entries_, returning `true` or `false` as appropriate.
[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

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

The `pop()` method _removes the last element_ from an array and _returns that element_. This method changes the length of the array.
[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

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

The `reverse()` method _reverses an array in place and returns the original array modified (a reference to it)_. The first array element now becoming the last, and the last array element becoming the first. To reverse the elements in an array _without mutating the original array_, use `toReversed()`.
[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

```javascript
const array> = ['one', 'two', 'three'];
console.log('array:', array);
// Expected output: "array:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array:', array);
// Expected output: "array:" Array ["three", "two", "one"]
```

---

## .keys()
