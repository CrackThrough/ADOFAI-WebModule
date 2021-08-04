import { Action } from "..";

export class Checkpoint extends Action {
    constructor(floor: number) {
        super(floor, "Checkpoint");
    }
}
