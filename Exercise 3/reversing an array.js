//pass in an array as an argument
function reverseArray(arr){

	//set an array for the reverse order
   var newArray = [];
   // run through the array length
   for(var i = 0; i < arr.length; i++){
   	// add the to the new array from the last index
   	newArray.push(arr[arr.length-i-1]);
   }
	return newArray;
}
console.log(reverseArray([1,2,3,4,5]));


//reverse the array in place
function reverseArrayInPlace(newArray) {

	for(var i = 0; i < newArray.length; i++){
		newArray[i] = newArray.length-i;
	}

	 return newArray;
}
var arr = [1,2,3,4,5];
console.log(reverseArrayInPlace(arr));