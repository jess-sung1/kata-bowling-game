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
        expect(() => game.roll(6)).toThrow('Score in a frame cannot be greater than 10'); 
    });

    it('should allow three rolls in a row', () => {
        game.roll(3);
        game.roll(4);
        game.roll(6);
        expect(game.score()).toBe(13);
    });

    it('strike should end the frame', () => {
        game.roll(10);
        game.roll(5);
        expect(game.score()).toBe(15);
        expect(game.getFrames()).toBe(2);
    });

   it('should end the game after 10 frames', () => {
        for (let i = 0; i < 10; i++) {
            game.roll(10);
        }
        expect(() => game.roll(1)).toThrow('Game is already complete');
        expect(game.getFrames()).toBe(10);
   });

   it ('should add bonus for strike based on next two rolls', () => {
        game.roll(10); // Strike
        game.roll(3);
        game.roll(4);
        expect(game.score()).toBe(24); // 10 + 3 + 4 + 7 (bonus)
    });

    it ('should add bonus for strike for consecutive strikes', () => {
        game.roll(10); // Strike
        game.roll(10); // Strike
        game.roll(10); // Strike
        expect(game.score()).toBe(50); 
    });

    it('should add bonus for spare based on next roll', () => {
        game.roll(5);
        game.roll(5); // Spare
        game.roll(4);
        game.roll(2);
        expect(game.score()).toBe(20); // 5 + 5 + 4 + 4 + 2(bonus)
    });
});