const names: string[] = ["John"];

names.push("Bob");
names.push("Alice");
names.push("Dylan");

names.map((arr) => console.log(arr));

// names.push(10)

console.log(names);

const numbers: readonly number[] = [10, 20];
// numbers.push(10) push does not work on readonly arrays

console.log(numbers);

const values = [1, 2, 3];
values.push(4);
console.log(values);

const person = ["John"];
person.push("Doe");

console.log(person);
