const a = [
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2 },
];

const c = [1, 2, 3, 4, 5, 6, 7, 8];

const d = [10, 11, 12, 13, 14, 15, 16, 17];

let result = [];

for (let i = 0; i < c.length; i++) {
  result.push({ x: c[i], y: d[i] });
}

console.log(result);
