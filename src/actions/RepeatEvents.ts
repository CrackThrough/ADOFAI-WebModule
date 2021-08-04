import { Action } from "..";

export class RepeatEvents extends Action {
    constructor(
        floor: number,
        public repetitions: number = 1,
        public interval: number = 1,
        public tag: string = ""
    ) {
        super(floor, "RepeatEvents");
    }
}
