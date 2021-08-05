import { Action } from "../classes";

export class HallOfMirrors extends Action {
    constructor(
        floor: number,
        public enabled: boolean = true,
        public angleOffset: number = 0,
        public eventTag: string = ""
    ) {
        super(floor, "HallOfMirrors");
    }
}
