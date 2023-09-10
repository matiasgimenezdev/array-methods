// Write a JavaScript function to check whether an `input` is an array or not

function isArray(input: any): boolean {
	return Array.isArray(input);
}

console.log(isArray('Hello'));
console.log(isArray(123));
console.log(isArray(['Hello']));
console.log(isArray([]));
console.log(isArray([1, 2, 3]));
