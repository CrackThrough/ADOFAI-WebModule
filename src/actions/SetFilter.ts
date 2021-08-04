import { Filter } from "../typings";
import { Action } from "..";

export class SetFilter extends Action {
    constructor(
        floor: number,
        public filter: Filter = "Grayscale",
        public enabled: boolean = true,
        public intensity: number = 100,
        public disableOthers: boolean = false,
        public angleOffset: number = 0,
        public eventTag: string = ""
    ) {
        super(floor, "SetFilter");
    }
}
