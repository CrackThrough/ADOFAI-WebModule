import { Action } from "..";

export class HallOfMirrors extends Action {
    constructor(
        floor: number,
        public enabled: boolean,
        public angleOffset: number,
        public eventTag: string
    ) {
        super(floor, "HallOfMirrors");
    }
}
