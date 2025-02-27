// Koriste se [] ko i inace + anotacija na ovaj nacin
// Nemogu stringovi, objekti, bool, samo brojevi
const numbers: number[] = [1, 2, 3, 4, 5];
// const err: number[] = [1, 2, 3,  'This cant be here', false];

// Ovo kaze da je stara sintaksa
const names: Array<string> = ["Karlito", "Bob"];

// Ovo je za stringove
const str: string[] = ["one", "two", "three"];

// Nece nam raditi push ako pokusamo neki dodati koji nije string
// Zato se i zove typescript, mora sve biti tocno odredeni tipovi
