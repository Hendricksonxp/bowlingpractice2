
var assert = import('assert');
// var BowlingGame = require("../src/bowling_game.js");

import {BowlingGame} from "../src/bowling_game.js";

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('Bowling Game', function () {
   describe('all  gutter balls scores 0', function () {
       it( 'should return 0', function () {

            var game = new BowlingGame(12);
            // game = new BowlingGame();
            // game = new BowlingGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            console.log(game.score());
        });
    });
});
