// console.log("hello");

// let age: number = 22;

// if (age < 15) age += 10;

let sales: number = 123_456;
let course: string = "typescript";
let is_published: boolean = true;

let numbers: number[] = [1, 2, 3];

let user: [number, string] = [1, "swayam"];

const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;

console.log(mySize);

function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income;
}

console.log(calculateTax(10_000, 2021));

type Employee = {
  readonly id: number;
  name: string;
  faxNumber?: number;
  retire: (date: Date) => void;
};

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");
