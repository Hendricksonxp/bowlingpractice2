class BowlingGame {
    constructor(input) {
        this.rolls = input;
    }

    score() {
        let sum = 0;
        let rollTracker = 0
        let currentRoll = 0;
        for (let frame = 0; frame < 10; frame++) {
            currentRoll = this.rolls[rollTracker]
            if (currentRoll === 10) {
                sum = sum + 10 + this.rolls[rollTracker + 1] + this.rolls[rollTracker + 2];
                rollTracker += 1;
            }
            else if (currentRoll + this.rolls[rollTracker + 1] === 10) {
                sum = sum + 10 + this.rolls[rollTracker + 2];
                rollTracker = rollTracker + 2;
            }
            else {
                sum = sum + currentRoll + this.rolls[rollTracker + 1]
                rollTracker += 2;
            }
        }
        return sum;
    }
}

module.exports = BowlingGame
