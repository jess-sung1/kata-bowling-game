import { Game } from '../src/game';

describe('Game', () => {
    let game;
    beforeEach(() => {
        game = new Game();
    });
    
    it('should throw error if roll is null', () => {
        expect(() => game.roll(null)).toThrow('Roll cannot be null');
    });

    it('should throw error if roll is <0', () => {
        expect(() => game.roll(-1)).toThrow('Roll cannot be less than 0');
    });

    it('should throw error if roll is >10', () => {
        expect(() => game.roll(11)).toThrow('Roll cannot be greater than 10');
    });

    it('should increment score after roll', () => {
        game.roll(5);
        expect(game.score()).toBe(5);
    });
});