let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let index = 0;
let sum = 0;

while (index < nums.length) {
	if (nums[index] > 5) {
		sum += nums[index];
	}
	index++;
}
console.log(sum);
