class BowlingGame {
    constructor(input) {
        this.rolls = input;
    }

    score() {

        let sum;
        sum = this.rolls.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        })
        return sum;
    }
}
module.exports = BowlingGame
