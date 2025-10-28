const createComputer = (cpu, gpu, ram, disk) => {
	let pc = {
		cpu: cpu,
		gpu: gpu,
		ram: ram,
		disk: disk,
	};
	return pc;
};

const createLaptop = (obj) => {
	let lap = {
		...obj,
		type: "laptop",
		weight: 2.5,
	};
	return lap;
};

const myPc = createComputer("amd", "nvidia", "32gp", "1tb");

console.log(myPc);
console.log(createLaptop(myPc));
