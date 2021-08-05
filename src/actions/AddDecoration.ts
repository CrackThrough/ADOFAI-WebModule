import { Position, DecoRelativeTo } from "../typings";
import { Action, Color } from "../classes";

export class AddDecoration extends Action {
    constructor(
        floor: number,
        public decorationImage: string = "",
        public position: Position = [0, 0],
        public relativeTo: DecoRelativeTo = "Tile",
        public pivotOffset: Position = [0, 0],
        public rotation: number = 0,
        public scale: number = 100,
        public color: Color = new Color(),
        public depth: number = 0,
        public tag: string = ""
    ) {
        super(floor, "AddDecoration");
    }
}
