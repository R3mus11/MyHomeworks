//Arrays and Functions:

//1

function massiv('x' , 5){
	var mass = [];
	for(i = 0; i < 5; i++){
		mass.push('x');
	}
	return mass;
}
console.log(massiv('x',5));

//2
var plus = 0;
 var arr1 = [
 [1,2,3],
 [4,5,6]
 ];
 for(i = 0; i < arr1.length; i++){
 	for(j = 0; j < arr1[i].length; j++){
 		plus += arr[i][j];
 	}
 }
console.log(plus);

//3

var plus2 = 0;
var arr2 = [
[1,2,3],
[4,5,6],
[7,8,9]
];
 for(i = 0; i < arr2.length; i++){
 	for(j = 0; j < arr2[i].length; j++){
 		for(g = 0; g < arr2[i][j].length; g++){
 			plus2 += arr2[i][j][g];
 		}
 	}
 }
console.log(plus2);


//4

var num1 = 5;
function isNumberRange(num1){
	if(num1 > 0 || num1 < 10){
		return true;
	}
	else{
		return false;
	}
}

//5

var num2 = 5;
function isEven(num2){
	if(num2 % 2 == 0){
		return true;
	}
	else{
		return false;
	}
}

//6

var mass1 = [1,2,3,4,5,6];
var finish = [];
for(var i = 0; i < mass1.length; i++){
	if(isEven(mass1[i])){
		finish.push(mass1[i]);
	}
}
console.log(finish);

//7

function getDivisors(number1){
	var array1 = [];
	for(i = 1; i <=number1; i++){
		if(num%i == 0){
			array1.push(i);
		}
	}
	return array1;
}
alert (getDivisors(28));

//9

var num = 4;
function MathPow(x,n){
	var res = x;
	for(i = 0; i < n; i++){
		res *= x;
	}
	return res;
}

//10, 11

var age = prompt("Paste ur name here: ");
function Age(age){
 	if(age >= 16){
 		alert("Welcome!");
 	}
 	else if(age < 16){
 		alert("You so young!");
 	}
 	else if(age == "" || age = undefined){
 		alert("Paste your name!");
 	}
 	else{
 		return age;
 	}
}

//12

 var mass12 = [1, true, "hello", 'number'];
function len(mass12){
	return mass12.length;
}

//13

var num = 5;
function vr(num){
	if(num > 10){
		return num*num;
	}
	else if(num < 7){
		alert("Число меньше семи!");
	}
	else if(num == 8){
	return 8;
	}
	else if(num == 9){
	return 9;
	}
}

//14

var str = "today I going to supermarket!"
function ucfirst(){
	str.toUpperCase();
}

//15

var string = 'var_text_hello';
var newString = str.replace('_', '').toUpperCase();

//16

var main = '214365';
var res1 = main.split('').reverse().join('');
alert(res1);
