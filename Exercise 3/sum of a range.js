
//return an array containing all the numbers from start up and including end
function range(start, end) {
	var arr = [];

	for (var i = start; i <= end; i++) {
		arr.push(i);
	}

	return arr;
}
console.log(range(1,10));


//takes the array numbers and return the sum
function sum(arr) {
	var result = 0;

	for(var i = 0; i < arr.length; i++) {
		result += arr[i];
	}

	return result;
}

console.log(sum([1,2,3,4,5,6,7,8,9,10]));


//return an array containing all the numbers from start up and including end
function range(start, end, step) {
	var arr = [];


}

console.log(range(5, 2, -1));