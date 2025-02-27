// Bitno je napomenuti da ovdje idu ; umjesto zareza za objekte
// Ako jedan fali on ce vikat
// Isto ako ih bude previse
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Karlito",
  lastName: "Leksic",
  age: 24,
};

function printUser(): { name: string; lastName: string; age: number } {
  return {
    name: "Karlo",
    lastName: "Leksic",
    age: 24,
  };
}

console.log(person);
console.log(printUser());
