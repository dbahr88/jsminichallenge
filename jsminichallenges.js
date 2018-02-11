// Create a script with two variables, each assigned to a number. Add them together 
// and output the result to the console. Now do the same with two strings.

x = 4;
y = 5;

a = "apple";
b = "banana";


console.log(x+y);

console.log(a+ " " + b);

// Create a multidimensional array related to a subject that interests you. Output 
// two of the items in sub-arrays to the console.

var multiDimensional = [["poodle", "pug", "cavapoo"], ["maltese","bulldog"]];

console.log(multiDimensional[0]);
console.log(multiDimensional[1]);
// Write a script that checks if a variable is less than 100. If it is, alert the 
// user that their variable is less than 100. If it is not alert the user of what 
// the value was and that it was greater than 100. 

for(var i=0; i <= 200; i++){
	onetoonehundred.push(i);
console.log(onetoonehundred);

var random = onetoonehundred[Math.floor(Math.random() * onetoonehundred.length)]
console.log(random);

if(random > 100) {
	alert(random +" " + "is less than 100")
} else
	alert(random + "is greater than 100");

// Declare a function that takes a name as an argument and tells the user what 
// name they've entered. Try running it after it has been declared.

var me = "David"

function namePrompter(name){
	alert("you have entered" + " " + name)
}

namePrompter(me);


// Declare a function that depending upon which virtual 'door' was entered tells
 // the user they've received a different 'prize' in an alert. After declaring 
 // the function, try running it with different options. There must be at least 
 // 3 doors.


function doorPicker(choice){
	if (choice == 1){
		alert("you picked door " + choice + " , you have won a baby dog")
	} else if (choice == 2){
		alert("you picked door " + choice + " , a boxer will come punch you in the face")
	}
	else if (choice == 3){
		alert("you picked door " + choice + " , you have won a new car")
	} else {
		alert("please enter 1, 2, or 3")
	}
}

// doorPicker(1);

var promptDoor = prompt("Enter 1, 2, or 3 to see what's behind that door")

doorPicker(promptDoor)

