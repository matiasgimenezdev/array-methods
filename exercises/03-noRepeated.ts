// Write a function that returns an array with unique elements.

function noRepeated(array: Array<any>): Array<any> {
	const noRepeated: any[] = [];

	array.forEach((element) => {
		if (!noRepeated.includes(element)) noRepeated.push(element);
	});
	return noRepeated;
}

console.log(noRepeated(['a', 'b', 'b', 'c', 'c', 'c']));
console.log(noRepeated(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
console.log(noRepeated([]));
