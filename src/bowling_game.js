class BowlingGame {
    constructor(input) {
        this.rolls = input;
    }

    score() {
        let sum = 0;
        let numberOfRolls = this.rolls.length
        for (let i = 0; i < numberOfRolls; i++) {
            sum = sum + this.rolls[i] + this.rolls[i + 1]
            i = i + 1
        }
        return sum;
    }
}

module.exports = BowlingGame
