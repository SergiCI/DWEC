const temperaturas = [12, 5, 32, 100, 28, 0, -5];

const tempord = [...temperaturas].sort();

console.log(tempord)

const tempord2 = [...temperaturas].sort((a, b) => a - b);

console.log(tempord2)