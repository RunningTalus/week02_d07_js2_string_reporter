var input = prompt("Enter a word five charcters or longer here.");
	var length = input.length;
	var character = input.charAt(2);
	var lowCase = input.toLowerCase();
	var upCase = input.toUpperCase();
	var subStr = input.substring(2,4);
	//combine declared variables and string methods into a large, sensible, alert as strings.  
	var reportInput = "Your word is " + input + "." + "\n";
	var reportLength = "Your word is " + length + " character(s) long." + "\n";
	var reportCharacter = "The third character in your word is " + character + "." + "\n";
	var reportLowCase = "Your word with no capitalization: " + lowCase + "." + "\n";
	var reportUpCase = "Your word will all letters capitalized: " + upCase + "." + "\n";
	var reportSubStr = "These are the 3rd and 4th letters of your word: " + subStr + "." + "\n";
	alert(reportInput + reportLength + reportCharacter + reportLowCase + reportUpCase + reportSubStr);