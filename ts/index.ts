// 1.

let a: string = "Red";
let b: number = 2023;
let c: boolean = true;

// 2.

function calculateArea(radius: number) {
  let pi: number = 3.14;
  let area: number;
  return (area = pi * Math.pow(radius, 2));
}
console.log(calculateArea(4));

function calculateDensity(m: number, v: number) {
  let density: number;
  return (density = m / v);
}
console.log(calculateDensity(45, 5));

// 3.

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};
const products: Product[] = [
  {
    id: 1,
    title: "dress",
    description: "silk dress",
    price: 40000,
    colors: ["red", "black"],
  },
  {
    id: 2,
    title: "T-shirt",
    description: "silk T-shirt",
    price: 15000,
    colors: ["blue", "red", "black"],
  },
  {
    id: 3,
    title: "pants",
    description: "silk pants",
    price: 20000,
    colors: ["black", "white", "grey"],
  },
];
console.log(products);
