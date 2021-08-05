import { RelativeTo, Position, Ease } from "../typings";
import { Action } from "../classes";

export class MoveCamera extends Action {
    constructor(
        floor: number,
        public duration: number = 1,
        public relativeTo: RelativeTo = "Player",
        public position: Position = [0, 0],
        public rotation: number = 0,
        public zoom: number = 160,
        public angleOffset: number = 0,
        public ease: Ease = "Linear",
        public eventTag: string = ""
    ) {
        super(floor, "MoveCamera");
    }
}
