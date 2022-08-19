//import BowlingGame from '../src/bowling-game.js';

var assert = require('assert');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

//describe('Bowling Game', function () {
 //   describe('all  gutter balls scores 0', function () {
 //       it( 'shouild return 0', function () {
//
//             var game;
//             game = new BowlingGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
//             assert.equal(game.score(), 0);
//         });
//     });
// });
