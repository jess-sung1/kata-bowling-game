export class Frame {
    private currentRoll: number = 1;
    private score: number = 0;

    roll(pins: number): void {
        if(this.score + pins > 10) {
            throw new Error('Score in a frame cannot be greater than 10');
        }
        this.score += pins;
        this.currentRoll++;

    }

    getScore(): number {
        return this.score;
    }

    isComplete(): boolean {
        return this.currentRoll > 2 || this.score === 10;
    }
}