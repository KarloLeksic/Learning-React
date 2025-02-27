// To je kada neka varijabla moze imati vise tipova
let myVar: number | string;

// Isto se moze koristiti kao parametre za funkcije
function foo(param: string | string[]) {
  // function body
}

// Takoder za interface-e i bilo sta di god su tipovi podataka

const items: (number | string)[] = [1, 5, 9, "hello"];
