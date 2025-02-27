// Kombinacija tipova na nacin da spojimo vise tipova
// Koristi se & znak
type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  role: string;
};

type PersonAndEmployee = Person & Employee;

// I dalje sve kao i prije, mora imati i jedno i drugo
