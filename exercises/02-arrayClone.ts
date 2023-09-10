// Write a JavaScript function to clone an array.

function cloneArray(array: Array<any>) {
	return array.map((element) => element);
}

console.log(cloneArray(['a', 'b', 'c']));
console.log(cloneArray([]));
console.log(cloneArray([1, 2, [1, 2, 3]]));
