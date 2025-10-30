const truck = {
	_brand: null,
	_model: null,
	_topSpeed: 0,

	set brand(newValue) {
		this._brand = newValue;
	},
	get brand() {
		return this._brand;
	},

	set model(newValue) {
		this._model = newValue;
	},

	get model() {
		return this._model;
	},
	set topSpeed(newValue) {
		if (newValue >= 0) {
			this._topSpeed = newValue;
		} else {
			console.log("Speed to low");
		}
	},

	get topSpeed() {
		return console.log(`${this._brand} ${this._model} ${this._topSpeed}`);
	},
};

truck.brand = "Kenworth";
truck.model = "w800";
truck.topSpeed = 120;

console.log(truck);
