

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  "A": 2,
  "B": 4,
  "C": 6,
  "D": 8
}

const SYMBOL_VALUES = {
  "A": 5,
  "B": 4,
  "C": 3,
  "D": 2
}


const deposit = () => {
  while (true){
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <=0){
      console.log("Invalid deposit amount, try again.");
    } else{
      return numberDepositAmount;
    }
  }
};

// This function will get the number of lines a user wants to bet on
const getNumberOfLines = () => { 
  while (true){
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberLines = parseFloat(lines);
    if (isNaN(numberLines) || numberLines > 3 || numberLines <= 0){
      console.log("Invalid number of lines, try again.");
    } else{
      return numberLines;
    }
  }
}

const getBet = (balance, lines) => {

  while (true){
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);
    if (isNaN(numberBet) || numberBet > (balance / lines) || numberBet <= 0){
      console.log("Invalid bet amount broke boy, try again.");
    } else{
      return numberBet;
    }
  }
}

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
    // console.log(symbol, count);
      for (let i = 0; i <count; i++){
        symbols.push(symbol); 
      }
  }
  const reels = [];
  for(i = 0; i < COLS; i++){
    reels.push([]);
    reelSymbols = [...symbols];
    for (j=0; j < ROWS; j++){
      const randomIndex = Math.floor(reelSymbols.length * Math.random()) // selecting a random value
      const selectedSymbol = reelSymbols[randomIndex] //assinging a var to the random value we selected
      reels[i].push(selectedSymbol); // taking assinged random val and inserting it into reel
      reelSymbols.splice(randomIndex, 1); //remove the value we just inserted from the array that held initial values
    }
  }

  return reels;
}

const transpose = (reels) => { // taking our columns and flipping them with our rows
 const rows = [];
 for(i = 0; i <ROWS; i++){
  rows.push([]);
  for (j = 0; j < COLS; j ++){
    rows[i].push(reels[j][i]);
  }
 }
 return rows;
}

spin();


let balance = deposit();
const numberLines = getNumberOfLines();
const bet = getBet(balance, numberLines);
const reels = spin();
const rows = transpose(reels);

// console.log(depositAmount);


