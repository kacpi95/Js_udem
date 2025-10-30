const user = {
	_name: null,

	set name(newValue) {
		if (newValue.length > 2) {
			this._name = newValue;
		} else {
			console.log("Name to short");
		}
	},

	get name() {
		return this._name;
	},
};

user.name = "Kacper";
console.log(user.name);
user.name = "Adam";
console.log(user.name);
