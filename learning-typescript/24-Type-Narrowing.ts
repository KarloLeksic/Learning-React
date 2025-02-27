// To je proces koji omogucuje izvrsavanje razlicitih funkcionalnosti za razlicite tipove podataka

// Type guards
// Mehanizam koji pomaze typescriptu da razumije tipove precizno - jako je cest

// Definiranje unije
type MyType = string | number;

// primjer sa type guardom
function exampleFunction(value: MyType): void {
  // type guard using typeof
  if (typeof value === "string") {
    // nestaaa
    // On sad zna da je tu sigurno string
  } else {
    // nesta drugo
  }
}

// Instace of operator - deugi nacin za istu stvar
// samo provjeravamo jel je nesta instanca od necega - instance su objekti napravljeni od nekih klasa

// Intersection types
// To je ono kad spojimo 2 tipa sa & znakom (ima lekcija 14)
