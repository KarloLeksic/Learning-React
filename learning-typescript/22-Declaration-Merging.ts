// Kada zelimo prosiriti postojeci interface ili izmjeniti

// Original
interface Car {
  brand: string;
  start(): void;
}

// Zelimo dodati nesta - PONOVIMO ISTU SINTAKSU
interface Car {
  model: string;
  stop(): void;
}

// On sad ima oboje od toga jer se ovo merga
const myCar: Car = {
  brand: "opel",
  model: "astra",

  start() {
    console.log("trn trn trn trn");
  },

  stop() {
    console.log("stoped");
  },
};
