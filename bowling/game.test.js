const Game = require('./game.js');

let game;

const setUp = () => {
    game = new Game();
}

const rollMany = (n, pins) => {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
}

const rollSpare = () => {
    game.roll(5)
    game.roll(5)
}

test('it instances the game class', () => {
    setUp();
})

test('it scores 0 with 0 pins down in 10 frames', () => {
    setUp();

    rollMany(20,0);

    expect(game.score()).toBe(0);
})

test('it scores 20 points with 1 pins down every roll', () => {
    setUp();

    rollMany(20, 1);

    expect(game.score()).toBe(20);
})

test('it scores one spare', () => {
    setUp();
    rollSpare();
    game.roll(3)
    rollMany(17, 0)

    expect(game.score()).toBe(16)
})

test('one strike', () => {
    setUp();
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(16, 0)

    expect(game.score()).toBe(24);
})

test('perfect game', () => {
    setUp();
    rollMany(20, 10)

    expect(game.score()).toBe(300)
})