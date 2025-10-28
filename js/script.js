const modifyArr = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		arr[i] *= 3;
	}
};

const tab = [1, 2, 3, 4, 5, 6, 7];
modifyArr(tab);
console.log(tab);
