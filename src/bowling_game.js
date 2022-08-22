class BowlingGame {
    constructor(input) {
        this.rolls = input;
    }

    score() {
        let sum = 0;
        let rollTracker = 0
        for (let frame = 0; frame < 10; frame++) {
            let currentRoll = this.rolls[rollTracker]
            let nextRoll = this.rolls[rollTracker + 1];
            let followingNextRoll = this.rolls[rollTracker + 2];
            if (currentRoll === 10) {
                sum = sum + 10 + nextRoll + followingNextRoll;
                rollTracker += 1;
            }
            else if (currentRoll + nextRoll === 10) {
                sum = sum + 10 + followingNextRoll;
                rollTracker = rollTracker + 2;
            }
            else {
                sum = sum + currentRoll + nextRoll
                rollTracker += 2;
            }
        }
        return sum;
    }
}

module.exports = BowlingGame
