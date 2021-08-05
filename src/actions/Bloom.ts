// import { TextBoolean } from "../typings";
import { Action, Color } from "../classes";

export class Bloom extends Action {
    constructor(
        floor: number,
        public enabled: boolean = true,
        public threshold: number = 50,
        public intensity: number = 100,
        public color: Color = new Color(),
        public angleOffset: number = 0,
        public eventTag: string = ""
    ) {
        super(floor, "Bloom");
    }
}
