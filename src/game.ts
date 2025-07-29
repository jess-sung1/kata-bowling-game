import { GameInterface } from "./game.interface";
import { Frame } from "./frame";

export class Game implements GameInterface {
    private frames: Frame[] = [];
    private currentFrameIndex: number = -1;

    roll(pins: number): void {
        if (pins === null) {
            throw new Error('Pins cannot be null');
        }
        if (pins < 0) {
            throw new Error('Pins cannot be less than 0');
        }
        if (pins > 10) {
            throw new Error('Pins cannot be greater than 10');
        }
        if (this.frames.length === 10) {
            throw new Error('Game is already complete');
        }
        if (this.frames.length === 0 || this.frames[this.currentFrameIndex].isComplete()) {
            this.frames.push(new Frame());
            this.currentFrameIndex++;
        }
        let currentFrame=this.frames[this.currentFrameIndex];
        
        currentFrame.roll(pins);
         
    }

    score(): number {
        let totalScore = 0;
        for (let i = 0; i < this.frames.length; i++) {
            if (i > 0 && this.frames[i - 1].isStrikeFrame()) {
                totalScore += 2 * this.frames[i].getScore();
            } else {
                totalScore += this.frames[i].getScore();
            }
        }
        return totalScore;
    }

    getFrames(): number {
        return this.frames.length ? this.frames.length : 0;
    }

}