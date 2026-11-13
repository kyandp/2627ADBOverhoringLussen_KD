// Niveau 1

// Oefening 1

console.log("------ Oefening 1 --------");

let leeftijd = 18

if (leeftijd < 16){
    console.log("Geen Toegang");
    
} else if(leeftijd >= 18){
    console.log("Volledige toegang");
    
} else{
    console.log("Toegang onder begeleiding.");
    
}

// Oefening 2

console.log("------ Oefening 2 --------");


let gemetenTemperaturen = [19, 22, 26, 21, 29, 18];

for (let i = 0; i < gemetenTemperaturen.length; i++) {
    if(gemetenTemperaturen[i] >= 25){
        console.log(`WAARSCHUWING: Hoge temperatuur (${gemetenTemperaturen[i]}°C)`);
        
    } else{
        console.log(`Temperatuur normaal ${gemetenTemperaturen[i]}°C`);
        
    }
}


// Oefening 3
console.log("------ Oefening 3 --------");

const getallen = [12, -5, 8, -3, 0, 19, -11];
let positief = []
let negatief = []


for(let i = 0; i < getallen.length; i++){
    if(getallen[i] > 0) {
        positief.push(getallen[i])
    } else if(getallen[i] < 0){
        negatief.push(getallen[i])
    }
}

console.log(positief);
console.log(negatief);

// Oefening 4
console.log("------ Oefening 4 --------");

const prijsLaptop = 1200;
let spaargeld = 250
let maanden = 0

while(spaargeld < prijsLaptop){
    maanden++
    spaargeld = spaargeld + 150
}

console.log(`Je hebt ${maanden} maanden nodig voor je de laptop kan kopen.`);

// Oefening 5
console.log("------ Oefening 5 --------");

let pogingen = 0
let dobbelsteenAantal = 0

do while (dobbelsteenAantal =! 6) {
    pogingen++
    dobbelsteenAantal = Math.floor(Math.random() * 6) + 1
}