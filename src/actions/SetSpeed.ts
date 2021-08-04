import { SpeedType } from "../typings";
import { Action } from "..";

export class SetSpeed extends Action {
    constructor(
        floor: number,
        public speedType: SpeedType = "Bpm",
        public beatsPerMinute: number = 100,
        public bpmMultiplier: number = 1
    ) {
        super(floor, "SetSpeed");
    }
}
