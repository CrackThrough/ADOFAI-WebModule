import { Position } from "../typings";
import { Action } from "../classes";

export class ScreenTile extends Action {
    constructor(
        floor: number,
        public tile: Position = [1, 1],
        public angleOffset: number = 0,
        public eventTag: string = ""
    ) {
        super(floor, "ScreenTile");
    }
}
