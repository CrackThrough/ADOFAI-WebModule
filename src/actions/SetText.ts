import { Action } from "../classes";

export class SetText extends Action {
    constructor(
        floor: number,
        public decText: string = "Text",
        public tag: string = "",
        public angleOffset: number = 0,
        public eventTag: string = ""
    ) {
        super(floor, "SetText");
    }
}
