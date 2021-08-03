import { Action } from "../classes/Action";

export class Twirl extends Action {
    constructor(floor: number, public doubleTwired = false) {
        super(floor, "Twirl");
    }
}
