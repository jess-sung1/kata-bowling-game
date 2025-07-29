export class Frame {
    private currentRoll: number = 1;
    private firstRoll: number = 0;
    private score: number = 0;
    private isStrike: boolean = false;
    private isSpare: boolean = false;


    roll(pins: number): void {
        if(this.score + pins > 10) {
            throw new Error('Score in a frame cannot be greater than 10');
        }
        if (pins == 10) {
            this.isStrike = true;
        }
        if (this.currentRoll == 1) {
            this.firstRoll = pins;
        }
        this.score += pins;
        if(this.score===10){
            this.isSpare=true;
        }
        this.currentRoll++;
    }

    getFirstRoll(): number {
        return this.firstRoll;
    }

    isStrikeFrame(): boolean {
        return this.isStrike;
    }

    isSpareFrame(): boolean {
        return this.isSpare;
    }

    getScore(): number {
        return this.score;
    }

    isComplete(): boolean {
        return this.currentRoll > 2 || this.score === 10;
    }
}