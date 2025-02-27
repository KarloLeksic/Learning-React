// Never se koristi kad nam funkcija nece vratiti nista il kad varijabla nikad nece imati vrijednost
// Koristi se recimo u funkciji koja uvijek baca gresku
// Funkcija koja ima beskonacnu petlju
// Varijabla koja nikad nema vrijednost
function throwError(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while (true) {}
}

let x: never;

function neverReturns(): never {
  while (true) {}
}

// Ovo nikako nevalja, baci greskku
x = neverReturns();
