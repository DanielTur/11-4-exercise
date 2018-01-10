// scripts.js

function Phone(brand, price, color, ram) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.ram = ram;
}

Phone.prototype.printInfo = function () {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and price is ' + this.price + '.');
}

Phone.prototype.printRam = function () {
	console.log('There is ' + this.ram + ' amount of ram onboard of ' + this.brand + '.');
}

var iphone6s = new Phone('Apple', 2250, 'silver', '2 GB');
var samsungGalaxyS6 = new Phone('Samsung', 1999, 'black', '3 GB');
var onePlusOne = new Phone('OnePlus', 1500, 'white', '3GB');


iphone6s.printInfo();
iphone6s.printRam();
samsungGalaxyS6.printInfo();
samsungGalaxyS6.printRam();
onePlusOne.printInfo();
onePlusOne.printRam();

