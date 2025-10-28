const greatThan = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		let index = arr[i];
		if (index > 6) {
			callback(index);
		}
	}
};

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

greatThan(tab, function (data) {
	console.log("Data :", data);
});
