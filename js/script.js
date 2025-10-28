const createUser = (name, contact) => {
	let user = {
		name: name,
		email: null,
		telephone: null,
	};
	if (typeof contact == "string") {
		user.email = contact;
	} else if (typeof contact == "number") {
		user.telephone = contact;
	}
	return user;
};

let user1 = createUser("Kacper", "kacper@example.pl");
let user2 = createUser("Ola", 88888888);

console.log(user1);
console.log(user2);
