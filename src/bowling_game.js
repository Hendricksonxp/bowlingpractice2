class BowlingGame {
    constructor(input) {
        this.rolls = input;
    }

    score() {
        let sum = 0;
        let numberOfRolls = this.rolls.length
        for (let i = 0; i < numberOfRolls; i++) {
            if (this.rolls[i] + this.rolls[i + 1] === 10) {
                sum = sum + this.rolls[i + 2]
            }
            sum = sum + this.rolls[i] + this.rolls[i + 1]
            i = i + 1
        }
        return sum;
    }
}

module.exports = BowlingGame
