import { FloorRange, Position, Ease } from "../typings";
import { Action } from "../classes";

export class MoveTrack extends Action {
    constructor(
        floor: number,
        public startTile: FloorRange = [0, "ThisTile"],
        public endTile: FloorRange = [0, "ThisTile"],
        public duration: number = 1,
        public positionOffset: Position = [0, 0],
        public rotationOffset: number = 0,
        public scale: number = 100,
        public opacity: number = 100,
        public angleOffset: number = 0,
        public ease: Ease = "Linear",
        public eventTag: string = ""
    ) {
        super(floor, "MoveTrack");
    }
}
