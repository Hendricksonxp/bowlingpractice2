const BowlingGame = require('../src/bowling_game.js');
var assert = require('chai').assert

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});


describe('Bowling Game', function () {
    describe('all  gutter balls scores 0', function () {
        it('should return 0', function () {

            let game;
            game = new BowlingGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            assert.equal(game.score(), 0);
        });
    });

    describe('all  3 balls scores 60', function () {
        it('should return 0', function () {

            let game;
            game = new BowlingGame([3,3, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3]);
            assert.equal(game.score(), 60);
        });
    });
});
