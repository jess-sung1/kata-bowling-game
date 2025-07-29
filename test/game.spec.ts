import { Game } from '../src/game';

describe('Game', () => {
    let game;
    beforeEach(() => {
        game = new Game();
    });
    
    it('should throw error if pins is null', () => {
        expect(() => game.roll(null)).toThrow('Pins cannot be null');
    });

    it('should throw error if pins is <0', () => {
        expect(() => game.roll(-1)).toThrow('Pins cannot be less than 0');
    });

    it('should throw error if pins is >10', () => {
        expect(() => game.roll(11)).toThrow('Pins cannot be greater than 10');
    });

    it('should initialize score to 0', () => {
        expect(game.score()).toBe(0);
    });

    it('should increment score after roll', () => {
        game.roll(5);
        expect(game.score()).toBe(5);
    });

    it('total score of one frame should not be greater than 10 without bonus', () => {
        game.roll(5);
        expect(() => game.roll(6)).toThrow('Score cannot be greater than 10'); 
    });

    

    
});