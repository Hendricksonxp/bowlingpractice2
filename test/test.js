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
    describe('all  gutter balls', function () {
        it('should return 0', function () {

            let game;
            game = new BowlingGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            assert.equal(game.score(), 0);
        });
    });

    describe('open frames', function () {
        it('should return 60', function () {

            let game;
            game = new BowlingGame([3,3, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3, 3,3]);
            assert.equal(game.score(), 60);
        });
        it('should return 12', function () {

            let game;
            game = new BowlingGame([3,3, 0,0, 3,3, 0,0, 3,3, 0,0, 0,0, 0,0, 0,0, 0,0]);
            assert.equal(game.score(), 18);
        });
    });
    describe('Spare', function () {
        it('should add the next ball', function () {
            let game;
            game = new BowlingGame([6,4, 1,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
            assert.equal(game.score(), 12);
        });
    });
});
