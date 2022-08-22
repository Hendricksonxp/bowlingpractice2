class BowlingGame {
    constructor(input) {
        this.rolls = input;
    }

    score() {
        let sum = 0;
        let rollTracker = 0
        for (let frame = 1; frame <= 10; frame++) {
            let firstRoll = this.rolls[rollTracker]
            let secondRoll = this.rolls[rollTracker + 1];
            let nextRoll = this.rolls[rollTracker + 2];
            if (firstRoll === 10) {
                sum += 10 + secondRoll + nextRoll;
                rollTracker += 1;
            }
            else if (firstRoll + secondRoll === 10) {
                sum += 10 + nextRoll;
                rollTracker += 2;
            }
            else {
                sum += firstRoll + secondRoll
                rollTracker += 2;
            }
        }
        return sum;
    }
}

module.exports = BowlingGame
