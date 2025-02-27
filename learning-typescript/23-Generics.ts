// to nam je da se moze vracati vise tipova ili da moze biti vise tipova neka varijabla, ali nije isto kao ANY

// Primjer normalne funkcije
const printString = (x: string) => console.log(x);
const printNumber = (x: number) => console.log(x);
const printBoolean = (x: boolean) => console.log(x);

// Upotreba generica
function printInfo<Type>(x: Type): Type {
  return x;
}

// Ili skraceno
function printInfo2<T>(x: T): T {
  return x;
}

// Radi istu stvar ko gore, a koristimo ga ovako
const str = printInfo<string>("Hello");
const num = printInfo<number>(2);
const bool = printInfo2<boolean>(true);

// Mozemo predati i svoj interface u generic funkciju zato jer je interface samo kombinacija tipova i gleda se ko zaseban tip podataka

// Kad imamo vise tipova podataka
function twoTypes<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}

// Imamo i generic clase
class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(value: T): void {
    this.content = value;
  }
}
