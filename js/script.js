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
book2.getSummary()
