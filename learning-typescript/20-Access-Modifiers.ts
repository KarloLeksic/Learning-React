// U javascriptu ovo nemamo
// Public mozemo pristupiti svugdje
// Protected - u klasama i onim klasama koje nasljeduju
// Private - samo u onoj klasi di je definirana

class Animal {
  public _name: string;
  private _age: number;
  protected _location: string;

  // ...

  // Getteri i setteri
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

// Sa extends se nasljeduje
