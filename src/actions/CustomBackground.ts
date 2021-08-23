import { Position, BGDisplayMode } from "../types";
import { Action, Color } from "../classes";

export class CustomBackground extends Action {
    constructor(
        floor: number,
        public color: Color = new Color(),
        public bgImage: string = "",
        public imageColor: Color = new Color(),
        public parallax: Position = [0, 0],
        public bgDisplayMode: BGDisplayMode = "FitToScreen",
        public lockRot: boolean = false,
        public loopBG: boolean = false,
        public unscaledSize: number = 100,
        public angleOffset: number = 0,
        public eventTag: string = ""
    ) {
        super(floor, "CustomBackground");
    }
}
