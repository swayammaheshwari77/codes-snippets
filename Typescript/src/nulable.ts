function greet(name?: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}

greet(null);

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());
