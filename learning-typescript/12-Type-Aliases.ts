// Nacin na koji mozemo napraviti svoje ime za neki tip
// To je da nemoramo prethodnu stvar readiti vise puta, samo napravimo jednom ovo
// Konvencija je da je prvo slovo veliko
type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  console.log(`Person: ${person.name}, Age: ${person.age}`);
}

const myPerson: Person = { name: "Karlito", age: 24 };
printPerson(myPerson);
