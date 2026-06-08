const N = 1000000;
const arr = Array.from({ length: N }, (_, i) => ({ id: i }));
const map = new Map(arr.map((u) => [u.id, u]));
const target = N - 1;

console.time("array.find");
arr.find((u) => u.id === target);
console.timeEnd("array.find");

console.time("map.get");
map.get(target);
console.timeEnd("map.get");

console.time("arr[10]");
const x = arr[10]
console.timeEnd("arr[10]");
