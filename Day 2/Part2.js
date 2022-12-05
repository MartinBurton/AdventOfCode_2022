// Opponent:
// A = Rock, B = Paper, C = Scissors
// Player:
// X = Rock, Y = Paper, Z = Scissors
// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper
//
// Score = Player input (X=1, Y=2, Z=3) + Outcome (0=Loss, 3=Draw, 6=Win)

const fs = require('fs');

const rounds = fs.readFileSync('input.txt')
  .toString()
  .split('\n')

const WIN = 6;
const DRAW = 3;
const LOSS = 0;

const PLAY_ROCK = 1;
const PLAY_PAPER = 2;
const PLAY_SCISSORS = 3;


// X = LOSS, Y = DRAW, Z=WIN
const decrypt = (opponent, player) => {
  let newPlay = '';
  if (player === 'X') { //Lose
    if (opponent === 'A') { // Rock
      newPlay = 'Z';
    } else if (opponent === 'B') { // Paper
      newPlay = 'X';
    } else if (opponent === 'C') { // Scissors
      newPlay = 'Y';
    }
  } else if (player === 'Y') { //DRAW
    if (opponent === 'A') { // Rock
      newPlay = 'X';
    } else if (opponent === 'B') { // Paper
      newPlay = 'Y';
    } else if (opponent === 'C') { // Scissors
      newPlay = 'Z';
    }
  } else if (player === 'Z') { //WIN
    if (opponent === 'A') { // Rock
      newPlay = 'Y';
    } else if (opponent === 'B') { // Paper
      newPlay = 'Z';
    } else if (opponent === 'C') { // Scissors
      newPlay = 'X';
    }
  }
  return newPlay;
}

const playRound = (opponent, player) => {
  let score = 0;
  switch (opponent) {
    case 'A': // ROCK
      if (decrypt('A', player) === 'X') {
        score = PLAY_ROCK + DRAW; // DRAW
      } else if (decrypt('A', player) === 'Y') {
        score = PLAY_PAPER + WIN; // PAPER BEATS ROCK
      } else if (decrypt('A', player) === 'Z') {
        score = PLAY_SCISSORS + LOSS; // ROCK BEATS SCISSORS
      }
      break;
  
    case 'B': // PAPER
      if (decrypt('B', player) === 'X') {
        score = PLAY_ROCK + LOSS; //PAPER BEATS ROCK
      } else if (decrypt('B', player) === 'Y') {
        score = PLAY_PAPER + DRAW; // DRAW
      } else if (decrypt('B', player) === 'Z') {
        score = PLAY_SCISSORS + WIN; // SCISSORS BEATS ROCK
      }
      break
    
    case 'C': //SCISSORS
      if (decrypt('C', player) === 'X') {
        score = PLAY_ROCK + WIN; //ROCK BEATS SCISSORS
      } else if (decrypt('C', player) === 'Y') {
        score = PLAY_PAPER + LOSS; //SCISSORS BEATS ROCK
      } else if (decrypt('C', player) === 'Z') {
        score = PLAY_SCISSORS + DRAW; // DRAW
      }
      break

    default:
      console.error(`Unkown input, ${opponent}`);
      break;
  }

  return score;
}

// Main Execution
let totalScore = 0;

rounds.forEach((round) => {
  let plays = round.split(' ');
  totalScore += playRound(plays[0], plays[1]);
});

console.log(`Total Score: ${totalScore}`);