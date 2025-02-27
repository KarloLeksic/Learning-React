// Za forsiranje da neka klasa ima neke propertije ili objekti
// Moze i za funkcije
interface Person {
  firstName: string;
  lastName?: string; // nemora imat to recimo
  age: number;
}

const examplePerson: Person = {
  firstName: "Karlito",
  lastName: "Leksic",
  age: 5,
};

// za funkciju
interface MathOperation {
  (x: number, y: number): number;
}

// Za klase je kljucna rijec implements

// Interfejsi se isto mogu nasljedivati ko klase
