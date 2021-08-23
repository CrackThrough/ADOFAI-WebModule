import { Plane } from "../types";
import { Action, Color } from "../classes";

export class Flash extends Action {
    constructor(
        floor: number,
        public duration: number = 1,
        public plane: Plane = "Background",
        public startColor: Color = new Color(),
        public startOpacity: number = 100,
        public endColor: Color = new Color(),
        public endOpacity: number = 0,
        public angleOffset: number = 0,
        public eventTag: string = ""
    ) {
        super(floor, "Flash");
    }
}
