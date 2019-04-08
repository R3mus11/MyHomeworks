//1, 2

//3
var day = prompt("Введите номер дня недели: ");
if (day = 1) {
	alert('Понедельник');
}
else if (day = 2) {
	alert('Вторник');
}
else if (day = 3) {
	alert('Среда');
}
else if (day = 4) {
	alert('Четверг');
}
else if (day = 5) {
	alert('Пятница');
}
else if (day = 6) {
	alert('Суббота');
}
else if (day = 7) {
	alert('Воскресенье');
}
else{
	console.log('Дня недели под этим номером не сущевствует!')
}

//4, 5

var num1 = prompt("Введите первое число: ");
var num2 = prompt("Введите второе число: ");
if(num1 > num2){
	alert('num1' + ' больше ' + 'num2');
} 
else if(num1 < num2){
	alert('num1' + ' меньше ' + 'num2');
} 
else{
	alert('num1' + ' равно ' + 'num2');
}

//6

var padik = prompt("Введите номер квартиры: ");
if(padik <= 20 && padik >= 1){
	alert("Это квартира первого подъезда!");
}
else if(padik <= 48 && padik >= 21){
	alert("Это квартира второго подъезда!");
}
else if(padik <= 90 && padik >= 49){
	alert("Это квартира третьего подъезда!");
}
else{
	alert("Это квартира не с этого подъезда!");
}

//7

var login = prompt("Введите Ваш логин: "); 
if(login = 'ivan'){
	let password = prompt("Введите Ваш пароль: ");
	if(password = '334455'){
		alert("Добро пожаловать!");
	}
	else{
		alert("Ошибка входа!");
	}
}
else if(login = 'alex'){
	let password = prompt("Введите Ваш пароль: ");
	if(password = '777'){
		alert("Добро пожаловать!");
	}
	else{
		alert("Ошибка входа!");
	}
}

else if(login = 'petr'){
	let password = prompt("Введите Ваш пароль: ");
	if(password = 'b5678'){
		alert("Добро пожаловать!");
	}
	else{
		alert("Ошибка входа!");
	}
}

//8

var person = prompt("Введите Ваш год рождения: ");
if(2019 - person >= 16){
	alert("Добро пожаловать!");
}
else{
	alert("Вход воспрещен!");
}

//9

var stazh = prompt("Введите Ваш стаж: ");
if (stazh >= 0 && <= 3){
	alert("Ваша надбавка составляет 0%!");
}
else if(stazh >= 3 && <= 10){
	alert("Ваша надбавка составляет 10%!");
}
else if(stazh >= 10 && <= 20){
	alert("Ваша надбавка составляет 20%!");
}
else{
	alert("Ваша надбавка составляет 25%");
}

//10

var tovar = prompt("Введите кол-во товаров: ");
if(tovar >= 5 && tovar <= 20){
	alert("В Вашей корзине " + tovar + " товаров!");
}
else if(tovar == 1){
alert("В Вашей корзине " + tovar + " товар!");
}
else if(tovar >= 2 && <= 4){
alert("В Вашей корзине " + tovar + " товара!");
}
else{
alert("В Вашей корзине " + tovar + " товаров!");
}
















