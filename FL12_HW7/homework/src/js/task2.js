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

        let numberIsWin = false;

        playGameFromStart = false;
        playСontinue = false;

        const NUMBER_0 = 0,
        NUMBER_1 = 1,
        NUMBER_2 = 2,
        NUMBER_3 = 3,
        NUMBER_4 = 4;

        do {
            playСontinue = false;
            attempt = NUMBER_0;

            if (totalPrize === NUMBER_0) {
                randomNumber = parseInt(Math.random() * randomRange);
            } else {
                randomRange = randomRange + NUMBER_4;
                randomNumber = parseInt(Math.random() * randomRange);
                prizeAttempt1 = prizeAttempt1 * NUMBER_2;
                prizeAttempt2 = prizeAttempt2 * NUMBER_2;
                prizeAttempt3 = prizeAttempt3 * NUMBER_2;
            }

            do {
                if (attempt === NUMBER_0) {
                    prizeAttempt = prizeAttempt1;
                }
                if (attempt === NUMBER_1) {
                    prizeAttempt = prizeAttempt2;
                }
                if (attempt === NUMBER_2) {
                    prizeAttempt = prizeAttempt3;
                }

                let textChooseNumber = 'Choose a roulette pocket number from 0 то ' + (randomRange - NUMBER_1),
                    textAttemptsLeft = '\nAttempts left: ' + (NUMBER_3 - attempt),
                    textTotalPrize = '\nTotal prize: ' + totalPrize + '$',
                    textPossiblePrize = '\nPossible prize on current attempt: ' + prizeAttempt + '$';
                enteredNumber = prompt(textChooseNumber
                    + textAttemptsLeft
                    + textTotalPrize
                    + textPossiblePrize);
                enteredNumberInt = parseInt(enteredNumber);

                attempt++;

                if (enteredNumberInt !== randomNumber || !enteredNumber) {
                    numberIsWin = false;
                } else if (enteredNumberInt === randomNumber) {
                    numberIsWin = true;

                    if (attempt === NUMBER_1) {
                        totalPrize += prizeAttempt1;
                        alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
                    }
                    if (attempt === NUMBER_2) {
                        totalPrize += prizeAttempt2;
                        alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
                    }
                    if (attempt === NUMBER_3) {
                        totalPrize += prizeAttempt3;
                        alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
                    }
                }
            } while (attempt < NUMBER_3 && enteredNumberInt !== randomNumber && !!enteredNumber);

            if (numberIsWin) {
                playСontinue = confirm('Do you want to continue?');
            }
            if (!numberIsWin) {
                alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
            }
            if (!playСontinue || !numberIsWin) {
                playGameFromStart = confirm('Do you want to play a game again?');
            }

        } while (playСontinue);

    } while (playGameFromStart)

} else if (!question) {
    alert('You did not become a billionaire, but can');
}