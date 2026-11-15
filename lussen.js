/**
 * Je toont met deze toets dat je de nodige inzichten bevat om problemen op te lossen
 * met behult van lussen. Zeer goed gewerkt.
 */

// Niveau 1

// Oefening 1

console.log("------ Oefening 1 --------");

let leeftijd = 18;

if (leeftijd < 16) {
  console.log("Geen Toegang");
} else if (leeftijd >= 18) {
  console.log("Volledige toegang");
} else {
  console.log("Toegang onder begeleiding.");
}

// Oefening 2

console.log("------ Oefening 2 --------");

let gemetenTemperaturen = [19, 22, 26, 21, 29, 18];

for (let i = 0; i < gemetenTemperaturen.length; i++) {
  if (gemetenTemperaturen[i] >= 25) {
    console.log(`WAARSCHUWING: Hoge temperatuur (${gemetenTemperaturen[i]}°C)`);
  } else {
    console.log(`Temperatuur normaal ${gemetenTemperaturen[i]}°C`);
  }
}

// Oefening 3
console.log("------ Oefening 3 --------");

const getallen = [12, -5, 8, -3, 0, 19, -11];
let positief = [];
let negatief = [];

for (let i = 0; i < getallen.length; i++) {
  if (getallen[i] > 0) {
    positief.push(getallen[i]);
  } else if (getallen[i] < 0) {
    negatief.push(getallen[i]);
  }
}

console.log(positief);
console.log(negatief);

// Oefening 4
console.log("------ Oefening 4 --------");

let prijsLaptop = 1200;
let spaargeld = 250;
let maanden = 0;

while (spaargeld < prijsLaptop) {
  maanden++;
  spaargeld = spaargeld + 150;
}

console.log(`Je hebt ${maanden} maanden nodig voor je de laptop kan kopen.`);

// Oefening 5
console.log("------ Oefening 5 --------");
// hier hof je dobbelsteenAantal niet te onthoude -- je moest enkel weten hoeveel pogingen je nodig had.
// dobbelsteenAantal is op het einde ALTIJD 6

let dobbelsteenPogingen = 0;
let dobbelsteenAantal = 0;

do {
  dobbelsteenPogingen++;
  dobbelsteenAantal = Math.floor(Math.random() * 6) + 1;
  console.log(dobbelsteenAantal);
} while (dobbelsteenAantal != 6);

console.log(
  `Aantal pogingen: ${dobbelsteenPogingen} om ${dobbelsteenAantal} te gooien`,
);

// Oefening 6
console.log("------ Oefening 6 --------");

let ingevoerdePincodes = ["1111", "2222", "3333", "4567"];
let pincodePogingen = 0;
const juistePincode = "4567";

while (pincodePogingen < 3) {
  if (ingevoerdePincodes[pincodePogingen] === juistePincode) {
    console.log("Toegang Verleend");
    break;
  } else if (pincodePogingen == 2) {
    console.log("Kaart geblokkeerd!");
    break;
  }
  pincodePogingen++;
}

// Oefening 7
console.log("------ Oefening 7 --------");

let gebruikersInvoer = [15, 20, 5, 0, 100, 50];
let totaal = 0;
let b = 0;

do {
  totaal = totaal + gebruikersInvoer[b];
  b++;
} while (gebruikersInvoer[b] != 0);

console.log(totaal);

// Oefening 8
console.log("------ Oefening 8 --------");

let prijzenWinkelmandje = [120, 45, 210, 15, 85];

for (let i = 0; i < prijzenWinkelmandje.length; i++) {}
