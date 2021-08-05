import { Action } from "../classes";

export class SetConditionalEvents extends Action {
    constructor(
        floor: number,
        public perfectTag: string = "",
        public hitTag: string = "",
        public barelyTag: string = "",
        public missTag: string = "",
        public lossTag: string = ""
    ) {
        super(floor, "SetConditionalEvents");
    }
}
