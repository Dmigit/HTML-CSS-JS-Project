let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (num1, num2) => {
   return Math.abs(num1 - num2);
}


const compareGuesses = (userGuess, computerGuess, target) => {

    if (userGuess < 0 || userGuess > 9) {
        alert('Your number is out of range! Enter a number from 0 to 9.');
    }
    if (userGuess === computerGuess) {
        return true;
    } else if ((getAbsoluteDistance(userGuess, target)) < (getAbsoluteDistance(computerGuess, target))) {
        return true;
    } else if ((getAbsoluteDistance(userGuess, target)) > (getAbsoluteDistance(computerGuess, target))) {
        return false;
    }
};

const updateScore = winner => {

    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};
