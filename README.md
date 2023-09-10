# Array methods in Javascript

This repository contains exercises for using javascript array methods.

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


## .some()

Some works by taking a function that returns true or false. If any of the elements in the array return true, then the entire statement returns true. Another way to think of `some` is that it checks that _any_ value passes the conditional provided by the function.

[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

###### Example

Imagine we have a group of users that are the following age who have all signed up for some sort of tour through our application.

```javascript
var ages = [23, 32, 17, 19, 34];
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

Some works by taking a function that returns true or false. If all of the elements in the array return true, _only then_ will the entire statement return true.

[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

###### Example

Consider the same example above, but instead of checking if any of the values are less than 21, we want to check that all of the values are equal to or greater than 21. A simple function to return if a single age is 21 or older would look like:

```javascript
const twentyOneOrAbove = (age) => {
	return age >= 21;
};

// twentyOneOrAbove(20) >> false
// twentyOneOrAbove(30) >> true
```

We can use `every` to check for all the values in the array.

```javascript
const twentyOneOrAbove = (ages) => {
	return ages.every((age) => {
		return age >= 21;
	});
};

// twentyOneOrAbove(ages) >> false
```

Again, we can alternatively use the named function with `.every()`.

```js
ages.every(twentyOneOrAbove); // false
```

---

## .map()

Map works by returning a new array after a function has been applied to every single element in the array.

[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

###### Example

Imagine we have a group of users with multiple attributes.

```javascript
const users = [
	{ firstName: 'Homer', lastName: 'Simpson' },
	{ firstName: 'Marge', lastName: 'Simpson' },
	{ firstName: 'Bart', lastName: 'Simpson' },
	{ firstName: 'Lisa', lastName: 'Simpson' },
	{ firstName: 'Maggie', lastName: 'Simpson' },
];
```

We're going to send out a message to all our users but just need their first name in order to personalize it. We can use `.map()` to quickly return an array of just their first names.

```javascript
users.map((user) => {
	return user.firstName;
});

// [
//   'Homer',
//   'Marge',
//   'Bart',
//   'Lisa',
//   'Maggie'
// ]
```

It's important to take note of the `return` inside of the anonymous function that is passed into `.map()`. Without that, our array of first names will not be quite what we expect.

```javascript
users.map((user) => {
	user.firstName;
});

// [
//   undefined,
//   undefined,
//   undefined,
//   undefined,
//   undefined
// ]
```

Calling `return` is _crucial_ when using all of these higher order functions. `.map()` also takes additional arguments, so make sure to check out the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) Docs!

---

## .filter()

Filter allows us to remove elements that don't fit certain criteria. It's incredibly useful for whittling down large arrays so that we only pick out those items we want!

[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

###### Example

Imagine we have a group of users with multiple attributes.

```javascript
const users = [
	{ character: 'Superman', hero: true },
	{ character: 'Sinestro', hero: false },
	{ character: 'Wonder Woman', hero: true },
	{ character: 'Lex Luthor', hero: false },
	{ character: 'Ares', hero: false },
	{ character: 'Green Lantern', hero: true },
];
```

We want to send out a message to just the heroes, telling them what a wonderful job they're doing. We can use `.filter()` to return just those users who fit the right role.

```javascript
users.filter((user) => {
	return user.hero;
});

// [{ character: 'Superman', hero: true },
//  { character: 'Wonder Woman', hero: true },
//  { character: 'Green Lantern', hero: true }]
```

Just like the other functions here, `.filter()` also takes additional arguments, so make sure to check out the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) Docs!

---

## .reduce()

Reduce is an incredibly powerful method that allows us to combine all of the result in an array into a single result. There are a few different ways we can use it, so it's important to read the documentation carefully!

[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

###### Example

To start, let's take this array of words and phrases.

```javascript
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
```

With `.reduce()`, we can combine all of these into a single string! You'll typically use reduce with two arguments: previous and current. In this case, reduce starts with given you access to the first two elements of the array (i.e. 'a' and 'long'). You then return a _single_ value which becomes previous in the next iteration while current changes to be the next item in the array (i.e. 'time');

```javascript
epic.reduce((previous, current) => {
	return previous + ' ' + current;
});

// 'a long time ago in a galaxy far far away'
```

It may take a minute to get your mind wrapped around what's happening. However, by simply logging the values it (hopefully!) becomes much more clear what's going on.

```javascript
epic.reduce((previous, current) => {
	console.log(
		'logging -- current: "' +
			current +
			'", ' +
			'previous: "' +
			previous +
			'"'
	);
	return previous + ' ' + current;
});

// logging -- current: "long",    previous: "a"
// logging -- current: "time",    previous: "a long"
// logging -- current: "ago",     previous: "a long time"
// logging -- current: "in a",    previous: "a long time ago"
// logging -- current: "galaxy",  previous: "a long time ago in a"
// logging -- current: "far far", previous: "a long time ago in a galaxy"
// logging -- current: "away",    previous: "a long time ago in a galaxy far far"
// >> 'a long time ago in a galaxy far far away'
```

Let's get back to our users and see how we can actually set the initial value for our reduce method!

```javascript
const users = [
	{ fullName: 'George Washington', email: 'george@us.gov' },
	{ fullName: 'John Adams', email: 'john@us.gov' },
	{ fullName: 'Thomas Jefferson', email: 'thomas@us.gov' },
	{ fullName: 'James Madison', email: 'james@us.gov' },
];
```

We want to change up the structure of our users so that we can use the users' full name as the key and have their email as the value. Normally, this would take a lot of looping and initializing some variables. However, with reduce we can set an empty object as our starting point (i.e. previous) and do it all in a single go!

```javascript
users.reduce((usersObj, user) => {
	usersObj[user.fullName] = user.email;
	return usersObj;
}, {});

// { 'George Washington': 'george@us.gov',
//   'John Adams': 'john@us.gov',
//   'Thomas Jefferson': 'thomas@us.gov',
//   'James Madison': 'james@us.gov' }
```

Notice the empty object as the second argument in reduce, as well as the fact that we're constantly returning our `usersObj` on each iteration.

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
