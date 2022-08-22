class BowlingGame {
    constructor(input) {
        this.rolls = input;
    }

    score() {

        var sum = 0;
        sum = this.rolls.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        })
        return sum;
    }
}
module.exports = BowlingGame
