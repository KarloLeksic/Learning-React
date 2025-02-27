// Nije obavezno unijeti taj parametar
type Person = {
  name: string;
  age: number;
  readonly email?: string; // mozemo samo citati ovo, a nemozemo mijenjati
};
// U ovom slucaju email je opcionalan

const alice: Person = { name: "Alice", age: 20 }; // nemramo unijeti email
const bob: Person = { name: "Bob", age: 20, email: "bob@gmail.com" };
