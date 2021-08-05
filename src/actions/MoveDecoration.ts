import { Position, Ease } from "../typings";
import { Action, Color } from "../classes";

export class MoveDecoration extends Action {
    constructor(
        floor: number,
        public duration: number = 1,
        public tag: string = "",
        public positionOffset: Position = [0, 0],
        public rotationOffset: number = 0,
        public scale: number = 100,
        public color: Color = Color.fromString("ffffff"),
        public angleOffset: number = 0,
        public ease: Ease = "Linear",
        public eventTag: string = ""
    ) {
        super(floor, "MoveDecoration");
    }
}
