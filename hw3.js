//1
var i = 4;
for (i = 4; i < 400; i++) {
	console.log(i);
}

//2
var j = [4, 7, 10, 13];
for(i = 0; i < j.length; i++){
	i += 3;
}

//3
var x = 654
while(x < 0){
	x--;
}

//4
var a, b;
a = 1983;
b = 2017;
while(a<b){
	var n = a++;
	console.log(n);
}

//5
 for (var i = -4; i <= 100; i++) {
  if (i%2 == 0){
  	console.log(i);
  }
 }

//6

var mass = [1,2,3,4,5,6,7,8,9];
mass.forEach(function(element, index, mass){
	console.log(element * 7);
});

//7

var d, c;
d = 1000;
c = 2000;
while(d<c){
	d++;
	console.log('&#'+d);
}

//8

var sum = 0;
for(i = 0; i <= 100; i++){
	sum += i;
	return sum;
}

//9

var res = 1;
for (var i = 1; i <= 50; i++) {
	res *= i;
}
