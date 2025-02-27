// Any type
// postoji i ovo ako nam treba bilo koji tip podataka, ali je pozeljno izbjegavati jer gubi smisao ako cemo uvijek to koristiti posto je typescript sve o tipovima podataka
let color: any = "blue";
color = 20;
color = true;
//color();
//color.toUpperCase();

console.log(color);
