// Array sa fiksnim brojem elementa
// Cijela struktura je specificirana
let myTuple: [string, number] = ["hello", 24];
// Nemoze 3 podatka i moraju bit tim redosljedu kak su definirani
// Nemoze niti jedan podatak bit, bas mora tocno 2

// Descructuring
const [first, second] = myTuple;

console.log(first);
console.log(second);
