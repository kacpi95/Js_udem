function Car(brand, name, color) {
	this.brand = brand;
	this.name = name;
	this.color = color;
	this.year = 2010;

	this.printData = function () {
		console.log(this.brand, this.name, this.color, this.year);
	};
}

let car1 = new Car("BMW", "X1", "black");
let car2 = new Car("Audi", "A8", "white");

console.log(car1);
car1.printData();
console.log(car2);
car2.printData();
