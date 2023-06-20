"use strict";
let sales = 123456;
let course = "typescript";
let is_published = true;
let numbers = [1, 2, 3];
let user = [1, "swayam"];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income;
}
console.log(calculateTax(10000, 2021));
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
