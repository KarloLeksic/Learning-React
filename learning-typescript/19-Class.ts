// Klasa ko klasa samo definiramo tipove
class Person {
  name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("Karlito", 24);
console.log(person);
