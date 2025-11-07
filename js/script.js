class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
	getSummary() {
		console.log(
			`Tytuł: ${this.title}, Autor: ${this.author}, Rok: ${this.year}`
		);
	}
	updateYear(newYear) {
		this.year = newYear;
	}
}

const book1 = new Book("Harry Potter", "Rowling", 2005);
const book2 = new Book("The Lord Of the Rings", "Tolkien", 2002);
book1.getSummary();
book2.getSummary();
book2.updateYear(1992);
book2.getSummary();

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	set fullName(name) {
		const fullName = name;
		this.firstName = fullName;
		this.lastName = fullName;
	}
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

const person = new Person("Jan", "Kowalski");
console.log(person.fullName);

class BankAccount {
	constructor(balance) {
		this.balance = balance;
	}

	deposit(amount) {}
	withdraw(amount) {
		if (this.balance >= amount) {
			console.log(`Możliwa wypłata środków`);
		} else {
			console.log(`Brak środków na koncie `);
		}
	}
	getBalance() {
		console.log(`Saldo ${this.balance}`);
	}
}

const account = new BankAccount(10);

account.getBalance();
account.withdraw(9);

class Rectangle {
	constructor(witdh, height) {
		this.width = witdh;
		this.height = height;
	}
	getArea() {
		if (this.width <= 0 || this.height <= 0) {
			console.log(`Błędne dane`);
		} else {
			const sum = this.width * this.height;
			console.log(`Pole prostokąta ${sum}`);
		}
	}
	getPerimeter() {
		if (this.width <= 0 || this.height <= 0) {
			console.log(`Błędne dane`);
		} else {
			const sum = this.width * 2 + this.height * 2;
			console.log(`Obwód prostokąta ${sum}`);
		}
	}
}

const rectangle = new Rectangle(2, 2);
rectangle.getPerimeter();
