var size = 8;

for(var i = 0; i < size; i++) {
	 var board = "";
	for (var j = 0; j < size; j++) {
		if((i+j) % 2 == 0) {
			board += "&nbsp";
		} else {
			board += "#";
		}
	}
	console.log("<br>" + board);
} 