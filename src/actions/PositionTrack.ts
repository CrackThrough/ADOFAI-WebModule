import { Position } from "../typings";
import { Action } from "..";

export class PositionTrack extends Action {
    constructor(
        floor: number,
        positionOffset: Position = [0, 0],
        editorOnly: boolean = false
    ) {
        super(floor, "PositionTrack");
    }
}
