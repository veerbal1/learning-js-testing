var expect = require('chai').expect;

describe('CheckForShip', () => {
  var checkForShip = require('../game_logic/ship_methods.js').checkForShip;

  it("should correctly report no ship at a given player's coordinate", () => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };

    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("should correctly report ship at a given player's coordinate", () => {
    player = {
      ships: [
        {
          locations: [[9, 9]],
        },
      ],
    };

    expect(checkForShip(player, [9, 9])).to.be.true;
  });

  it('should handle ships located at more than one coordinate', () => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
            [0, 2],
          ],
        },
      ],
    };

    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 2])).to.be.true;
    expect(checkForShip(player, [0, 5])).to.be.false;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it('should handle checking multiple ships', () => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [1, 1],
          ],
        },
        {
          locations: [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
          ],
        },
      ],
    };

    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [1, 0])).to.be.true;
    expect(checkForShip(player, [1, 1])).to.be.true;
    expect(checkForShip(player, [2, 0])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});
