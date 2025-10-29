function Magazin(title) {
	this.title = title;
	this.adverts = [];

	this.addAdvert = function (name, page) {
		let obj = {
			name: name,
			page: page,
		};
		this.adverts.push(obj);
	};
	this.printAdverts = function () {
		for (let i = 0; i < this.adverts.length; i++) {
			const mag = this.adverts[i];

			console.log(`Advert: ${mag.name}, ${mag.page}`);
		}
	};
}

let magazine = new Magazin("WP");
console.log(magazine);

magazine.addAdvert("laptop", 2);
magazine.addAdvert("Console", 5);
magazine.addAdvert("PC", 15);

magazine.printAdverts();
