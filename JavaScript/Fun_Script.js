// gup() - Get URL Param
function gup(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(window.location.href);
            if (results === null) {
                return '';
            } else {
                return results[1];
            }
} 

//Source: https://gist.github.com/EvanHahn/2587465
var caesarShift = function(str, amount) {

	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);
	// Make an output variable
	var output = '';
	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];
		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
		// Append
		output += c;

	}
	// All done!
	return output;
};
    
    var bodyFed = "Error";
    $.get('JavaScript/Federalist10.txt', function(data) {
        bodyFed = data.toString();
    });
                    
function showLetters(myvar, myvar2) {
    $('#Body1').html(myvar);
    $('#Heading1').html(myvar2);
}

function switchLetters(thisVar, thisVar2, shiftby) {
    thisVar = caesarShift(thisVar, shiftby);
    $('#Body1').html(thisVar);
    
    thisVar2 = caesarShift(thisVar2, shiftby);
    $('#Heading1').html(thisVar2);
}



