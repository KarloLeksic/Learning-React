// Samo da kazemo sta ce funkcija vracati
// Za regularne funkcije
function double(x: number): number {
  return x * 2;
}

const res = double(5);
console.log(res);

// Arrow function
const double2 = (x: number): number => x * 2;

const res2 = double2(5);
console.log(res2);
