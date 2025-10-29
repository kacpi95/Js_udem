function Library(name) {
	this.name = name;
	this.books = [];
	this.addBook = function (title, author) {
		const obj = {
			title: title,
			author: author,
			isBorrowed: false,
		};
		this.books.push(obj);
	};
	this.showBooks = function () {
		if (this.books.length === 0) {
			console.log("Brak książek w bibliotece");
		}

		for (let i = 0; i < this.books.length; i++) {
			const book = this.books[i];

			console.log(
				`Title: ${book.title}, Author ${book.author}, Borrowed: ${book.isBorrowed}`
			);
		}
	};
	this.borrowBook = function (title) {
		let findTitle = this.books.find((el) => el.title === title);

		if (!findTitle) {
			console.log(`Nie znaleziono ksiązki o tytule ${findTitle}`);
			return;
		}

		if (findTitle.isBorrowed) {
			console.log(`Książka jest już wypożyczona`);
		} else {
			findTitle.isBorrowed = true;
			console.log(`Wypożyczono książkę: ${findTitle.title}`);
		}
	};
}

let lib = new Library("Biblioteka");

lib.addBook("Wiedźmin", "Andrzej Sapkowski");
lib.addBook("Harry Potter", "J.K. Rowling");
lib.addBook("Dziady", "Adam Mickiewicz");

lib.showBooks();
lib.borrowBook("Wiedźmin");
lib.borrowBook("Wiedźmin");
lib.showBooks();
