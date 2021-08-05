import { Action } from "../classes";

export class Checkpoint extends Action {
    constructor(floor: number) {
        super(floor, "Checkpoint");
    }
}
