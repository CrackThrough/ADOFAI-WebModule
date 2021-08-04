import { Action } from "..";

export class Twirl extends Action {
    constructor(floor: number, public doubleTwired: boolean = false) {
        super(floor, "Twirl");
    }
}
