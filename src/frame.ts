export class Frame {
    private currentRoll: number = 1;
    private score: number = 0;
    private isStrike: boolean = false;
    private isSpare: boolean = false;

    rolls(pins: number): void {
        if (this.currentRoll > 2) {
            throw new Error('Cannot roll more than 2 times in a frame');
        }
        if(this.currentRoll === 2 && this.score + pins > 10) {
            throw new Error('Score cannot be greater than 10');
        }
        this.score += pins;
        this.currentRoll++;

    }

    getScore(): number {
        return this.score;
    }

    isComplete(): boolean {
        return this.currentRoll === 2 || this.rolls[0] === 10;
    }
}