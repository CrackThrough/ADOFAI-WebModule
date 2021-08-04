import { Position } from "../typings";
import { Action } from "..";

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
