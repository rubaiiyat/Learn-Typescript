const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2020,
};
console.log(car);

const bike: { type: string; mileage?: string } = {
  type: "Honda",
};
bike.type = "Yamaha";
bike.mileage = "50km/l";
console.log(bike);

const user: { [key: string]: number } = {};
user.abir = 30;
console.log(user);
