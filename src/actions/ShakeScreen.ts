import { Action } from "..";

export class ShakeScreen extends Action {
    constructor(
        floor: number,
        public duration: number = 1,
        public strength: number = 100,
        public intensity: number = 100,
        public fadeOut: boolean = true,
        public angleOffset: number = 0,
        public eventTag: string = ""
    ) {
        super(floor, "ShakeScreen");
    }
}
