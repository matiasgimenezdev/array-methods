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

## .some()

Some works by taking a function that returns true or false. If any of the elements in the array return true, then the entire statement returns true. Another way to think of `some` is that it checks that _any_ value passes the conditional provided by the function.

[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

###### Example

Imagine we have a group of users that are the following age who have all signed up for some sort of tour through our application.

```javascript
const ages = [23, 32, 17, 19, 34];
```

We want to show an ad that displays delicious beer but don't want to do so if any of the group members are under 21. A function that just tests whether or not a value is less than 21 might look like this:

```javascript
const lessThan21 = (age) => {
	return age < 21;
};

// lessThan21(20) >> true
// lessThan21(30) >> false
```

We can use `some` to check if any of the values are less than 21 in just one go:

```javascript
const anyLessThan21 = (ages) => {
	return ages.some((age) => {
		return age < 21;
	});
};

// anyLessThan21(ages) >> true
```

Alternatively, you could simply use the named function with `.some()`.

```javascript
ages.some(lessThan21); // true
```

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

---

## .sort()

---

## .includes()

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

---

## .pop()

---

## .shift()

---

## .unshift()
