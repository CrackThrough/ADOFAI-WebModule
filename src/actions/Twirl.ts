import { Action } from "../classes";

export class Twirl extends Action {
    constructor(floor: number, public doubleTwirled: boolean = false) {
        super(floor, "Twirl");
    }
}
