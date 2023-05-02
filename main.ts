import { error } from "console";

function floor(min: number, max: number, accuuracy: number) {
  let Acc: number = 10 ** accuuracy;
  return (Math.floor(Math.random() * (max - min) * Acc + min * Acc)) / Acc;
}



/*  RISISKO FIGHT  Battle(12,10)

function Battle(attackers:number, defenders:number) {
  console.log(`l'attaccante attacca con ${attackers} VS ${defenders} del Dinfensore`)
  let throwAttackers: number[] = [];
  let throwDefenders: number[] = [];
  throwResults(attackers,throwAttackers);
  throwResults(defenders,throwDefenders);
  for(let i:number=0; i<3 && throwDefenders[i]!=undefined && throwAttackers[i]!=undefined; i++) {
  if((throwAttackers[i]??0)>(throwDefenders[i]??0)) {
    defenders=defenders-1
    console.log(`l'attaccante vince ${throwAttackers[i]}-${throwDefenders[i]}! Attaccanti rimanenti: ${attackers} VS ${defenders} :Difensori rimanenti `)
  } else {
    attackers=attackers-1
    console.log(`Il difensore vince ${throwDefenders[i]}-${throwAttackers[i]}! Attaccanti rimanenti: ${attackers} VS ${defenders} :Difensori rimanenti `)
  }
  }
  if (attackers>0 && defenders>0){
    Battle(attackers, defenders)
  } else if(attackers>0) {
    console.log(`L'attaccante ha vinto con ${attackers} truppe rimanenti`)
  } else {
    console.log(`Il Difensore ha vinto con ${defenders} truppe rimanenti`)
  }
}


function throwResults(units:number, throwUnits:number[]){
  for(let i:number = 0; i<units && throwUnits.length<3; i++){
    throwUnits.push(floor(1,6,0));
  };
  throwUnits.sort((a,b)=>b-a);
  console.log(throwUnits);
}
 */


let myArray: number[] = [];
//dichiarazione array vuoto contenente i risultati non ripetuti

for (let i = myArray.length; myArray.length < 5; i++) {
  //impostando i= alla lungezza dell'array con i risultati otteniamo che verrà iterato finche la lunghezza raggiungerà il 6
  let result = floor(0, 100, 0);
  // richiamiamo la funzione random tra 0 e 100
  let dup = (element: number) => element !== result
  //definiamo un ulteriore funzione alla quale passando un elemento dovrà controllare che tale elemento sia diverso dal risultato
  if (myArray.every(dup)) {
    //utilizzando il metodo .every è possibile controllare ogni elemento dell'array in modo che sia diverso dai risultati
    myArray.push(result)
    //se la righa sopra risulta vera allora aggiungi il risultato unico all'array
  }
}
console.log(myArray)


function RNGsequence(min: number, max: number, accuracy: number, NumberOfResults: number) {
  let mySet = new Set
  for (let i = 0; mySet.size < NumberOfResults; i++) {
    if(accuracy<0) {
      throw new Error(`Accuracy must be a positive number! (you set ${accuracy})`)
    } else if (!Number.isInteger(accuracy)) {
      throw new Error(`Accuracy must be a integer number!  (you set ${accuracy})`)
    } 
    mySet.add(floor(min, max, accuracy))
  }
  return [...mySet]
}

const City:string[] = ["Bari", "Cagliari", "Firenze", "Geneova", "Milano", "Napoli", "Palermo", "Roma", "Torino", "Venezia", "NAZIONALE"]

const Estrazioni = new Map()

for(const ruote of City) {
  Estrazioni.set(ruote,RNGsequence(0,100,0,5))
}
console.log(Estrazioni)