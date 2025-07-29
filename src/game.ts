import { GameInterface } from "./game.interface";

export class Game implements GameInterface {
    scoreValue: number = 0;

    roll(pins:number): void {
        if (pins === null) {
            throw new Error('Roll cannot be null');
        }
        if (pins < 0) {
            throw new Error('Roll cannot be less than 0');
        }
        if (pins > 10) {
            throw new Error('Roll cannot be greater than 10');
        }
        this.scoreValue+= pins;
    }

    score(): number {
        return this.scoreValue;
    }
}