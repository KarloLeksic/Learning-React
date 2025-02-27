// Govori nam za parametre u funkciji kojeg tipa podataka moraju biti, baca gresku ako stavimo krivi
// Normalna funkcija
function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);
console.log(result);

// Arrow Function
// Po defaultu on nam da type any
const double = (x: number, y: number) => x * y;

const res = double(2, 10);
console.log(res);

// Isto ce nam vikati ako damo vise parametara ili manje
