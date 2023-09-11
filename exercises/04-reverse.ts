// Write a function that reverts the input array. Please, do not use array.reverse();

function reverse(array: Array<any>): Array<any> {
	const reversedArray: Array<any> = [];

	while (array.length > 0) {
		reversedArray.push(array.pop());
	}

	return reversedArray;
}

console.log(reverse(['a', 'b', 'c']));
console.log(reverse([1, 2, 4, 5, 6]));
console.log(['a', 'b', 'c'].reverse());
