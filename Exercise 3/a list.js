//create a list from an array
function arrayToList(arr){

// variable to hold the list
var list = "";

// loop through the array length from the last value
for(var i = arr.length-1; i >= 0;  i--){
	   list = {value: arr[i], rest: list};
	}
 	return list;
}
console.log(arrayToList([10, 20]));



//create an array from a list
function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest){
  	 array.push(node.value);
  }
  return array;
}
console.log(listToArray(arrayToList([10, 20, 30])));


//takes an element and a list and create a new list that adds elements to the front
function prepend(value, list) {
  return {value: value, rest: list};
}
console.log(prepend(10, prepend(20, "")));



//takes a list and a number and returns the element at the given position
function nth(list, num) {
  if (!list)
    return undefined;
  else if (num == 0)
    return list.value;
  else
    return nth(list.rest, num - 1);
}
console.log(nth(arrayToList([10, 20, 30]), 2));