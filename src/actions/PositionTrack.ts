import { Position } from "../types";
import { Action } from "../classes";

export class PositionTrack extends Action {
    constructor(
        floor: number,
        positionOffset: Position = [0, 0],
        editorOnly: boolean = false
    ) {
        super(floor, "PositionTrack");
    }
}
