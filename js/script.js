const name = document.querySelector("#full-name");
const surname = document.querySelector("#username");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const img = document.querySelector("#avatar-img");

const dataApi = () => {
	fetch("https://randomuser.me/api")
		.then((res) => res.json())
		.then((res) => getData(res));
};

const getData = (data) => {
	let result = data.results.map((el) => {
		let obj = {
			name: el.name.first,
			surname: el.name.last,
			email: el.email,
			country: el.location.country,
			img: el.picture.medium,
		};

		name.textContent = obj.name;
		surname.textContent = obj.surname;
		email.textContent = obj.email;
		country.textContent = obj.country;
		img.src = obj.img;
		return obj;
	});

	console.log(result);
};
dataApi();
