import {Game} from '../src/bowling/game'

describe("Bowling Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  function rollMany(n: number, pins: number) {
    for (let i=0; i<n; i++){
      game.roll(pins);
    }
  }

  it("should score 0 when is a gutter game", () => {
    rollMany(20, 0);
    expect(game.score()).toEqual(0)
  })

  it("should score 20 when is a strike", () => {
    rollMany(20, 1);
    expect(game.score()).toEqual(20)
  })

  it("spare", () => {
    rollMany(2, 5);
    game.roll(7);
    rollMany(17, 0);
    expect(game.score()).toEqual(24);
  })
})