let question = confirm('Do you want to play a game?');

if (question) {
    let playGameFromStart = false;
    let playСontinue = false;

    do {
        let randomNumber = 0;
        let enteredNumber = '';
        let enteredNumberInt = 0;
        let attempt = 0;
        let totalPrize = 0;
        let prizeAttempt = 0;

        let randomRange = 9;
        let prizeAttempt1 = 100;
        let prizeAttempt2 = 50;
        let prizeAttempt3 = 25;

        let NumberIsWin = false;

        playGameFromStart = false;
        playСontinue = false;

        let number0 = 0;
        let number1 = 1;
        let number2 = 2;
        let number3 = 3;
        let number4 = 4;

        do {
            playСontinue = false;
            attempt = number0;

            if (totalPrize === number0) {
                randomNumber = parseInt(Math.random() * randomRange);
            } else {
                randomRange = randomRange + number4;
                randomNumber = parseInt(Math.random() * randomRange);
                prizeAttempt1 = prizeAttempt1 * number2;
                prizeAttempt2 = prizeAttempt2 * number2;
                prizeAttempt3 = prizeAttempt3 * number2;
            }

            do {

                if (attempt === number0) {
                    prizeAttempt = prizeAttempt1;
                }
                if (attempt === number1) {
                    prizeAttempt = prizeAttempt2;
                }
                if (attempt === number2) {
                    prizeAttempt = prizeAttempt3;
                }

                let textChooseNumber = 'Choose a roulette pocket number from 0 то ' + (randomRange - number1),
                    textAttemptsLeft = '\nAttempts left: ' + (number3 - attempt),
                    textTotalPrize = '\nTotal prize: ' + totalPrize + '$',
                    textPossiblePrize = '\nPossible prize on current attempt: ' + prizeAttempt + '$';
                enteredNumber = prompt(textChooseNumber
                    + textAttemptsLeft
                    + textTotalPrize
                    + textPossiblePrize);
                enteredNumberInt = parseInt(enteredNumber);

                attempt++;

                if (enteredNumberInt !== randomNumber || !enteredNumber) {
                    NumberIsWin = false;
                } else if (enteredNumberInt === randomNumber) {
                    NumberIsWin = true;

                    if (attempt === number1) {
                        totalPrize = totalPrize + prizeAttempt1;
                        alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
                    }
                    if (attempt === number2) {
                        totalPrize = totalPrize + prizeAttempt2;
                        alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
                    }
                    if (attempt === number3) {
                        totalPrize = totalPrize + prizeAttempt3;
                        alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
                    }
                }
            } while (attempt < number3 && enteredNumberInt !== randomNumber && !!enteredNumber);

            if (NumberIsWin) {
                playСontinue = confirm('Do you want to continue?');
            }
            if (!NumberIsWin) {
                alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
            }
            if (!playСontinue || !NumberIsWin) {
                playGameFromStart = confirm('Do you want to play a game again?');
            }

        } while (playСontinue);

    } while (playGameFromStart)

} else if (!question) {
    alert('You did not become a billionaire, but can');
}