const createTv = (brand, screeSize, color) => {
	if (color != "white" && color != "black" && color != "silver") return null;

	const obj = {
		brand: brand,
		screeSize: screeSize,
		color: color,
	};
	return obj;
};

console.log(createTv("Sony", 42, "black"));
console.log(createTv("Sharp", 32, "white"));
console.log(createTv("Lenovo", 50, "silver"));
console.log(createTv("Lenovo", 42, "green"));
