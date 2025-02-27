// Mozemo predati defaultnu vrijednost ako zelimo na ovaj nacin
function greet(person: string = "Anonymous") {
  return `Hello ${person}`;
}

const res = greet();
console.log(res);

const res2 = greet("Karlito");
console.log(res2);
