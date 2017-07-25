function countBS(str) {

	var character = "B";
	var count = 0;

	for(var i = 0; i < str.length; i++){
		if(str[i] == character) {
			count++;
		}
	}
	return count;
} 
console.log(countBS("BbbbbC")); 

// another function that specifies the char 

function countChar(str, ch){
	var count = 0;

	for(var i = 0; i < str.length; i++){
		if(str[i] == ch) {
			count++;
		}
	}
	return count;
}

// modifying the function so that it takes CountBs too
function countBS(str) {
	return countChar(str, "B");
}

document.write(countChar("helllo", "l"));
document.write(countBS("BbbbbC")); 