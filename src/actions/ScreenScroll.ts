import { Position } from "../types";
import { Action } from "../classes";

export class ScreenScroll extends Action {
    constructor(
        floor: number,
        public scroll: Position = [0, 0],
        public angleOffset: number = 0,
        public eventTag: string = ""
    ) {
        super(floor, "ScreenScroll");
    }
}
