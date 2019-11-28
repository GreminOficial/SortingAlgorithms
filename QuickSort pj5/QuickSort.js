



let values = [];
let w = 0.5;

let states = [];

comparations = 0;

function setup() {
	createCanvas(windowWidth - 100, windowHeight - 100);
	values = new Array(floor(width / w));
	for (let i = 0; i < values.length; i++) {
		values[i] = random(height);
		states[i] = -1;
	}
	quickSort(values, 0, values.length - 1);
}

async function quickSort(arr, start, end) {
	if (start >= end) {
		return;
	}
	let index = await partition(arr, start, end);
	states[index] = -1;

	await Promise.all([
		quickSort(arr, start, index - 1),
		quickSort(arr, index + 1, end)
	]);
}

async function partition(arr, start, end) {
	for (let i = start; i < end; i++) {
		states[i] = 1;
	}

	let pivotValue = arr[end];
	let pivotIndex = start;
	states[pivotIndex] = 0;
	for (let i = start; i < end; i++) {
		if (arr[i] < pivotValue) {
			await swap(arr, i, pivotIndex);
			states[pivotIndex] = -1;
			pivotIndex++;
			states[pivotIndex] = 0;

			comparations + 1;
			console.log(comparations)
		}
	}
	await swap(arr, pivotIndex, end);

	for (let i = start; i < end; i++) {
		if (i != pivotIndex) {
			states[i] = -1;
		}
	}

	return pivotIndex;
}

function draw() {
	background(0);

	for (let i = 0; i < values.length; i++) {
		noStroke();
		if (states[i] == 0) {
			fill('#E0777D');
		} else if (states[i] == 1) {
			fill('#D6FFB7');
		} else {
			fill(255);
		}
		rect(i * w, height - values[i], w, values[i]);
	}
}

async function swap(arr, a, b) {
	await sleep(0);
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}












function QuickSort(array = []) {


	console.log("La data es: ", array)

	let less = [], equal = [], greater = [];
	let len = array.length;


	if (len > 0) {

		let pivot = array[Math.floor(Math.random() * len)];

		array.forEach(element => {

			if (element < pivot) {
				less.push(element);
			} else if (element == pivot) {
				equal.push(element);
			} else if (element > pivot) {
				greater.push(element);
			}
		});
		return [].concat(QuickSort(less), equal, QuickSort(greater));

	} else {
		return array;
	}

}
