import { Font, Position, DecoRelativeTo } from "../typings";
import { Action, Color } from "..";

export class AddText extends Action {
    constructor(
        floor: number,
        public decText: string = "",
        public font: Font = "Default",
        public position: Position = [0, 0],
        public relativeTo: DecoRelativeTo = "Tile",
        public pivotOffset: Position = [0, 0],
        public rotation: number = 0,
        public scale: number = 100,
        public color: Color = new Color(),
        public depth: number = 0,
        public ta: string = ""
    ) {
        super(floor, "AddText");
    }
}
