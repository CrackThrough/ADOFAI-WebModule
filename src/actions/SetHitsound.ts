import { Hitsound } from "../types";
import { Action } from "../classes";

export class SetHitsound extends Action {
    constructor(
        floor: number,
        public hitsound: Hitsound = "Kick",
        public hitsoundVolume: number = 100
    ) {
        super(floor, "SetHitsound");
    }
}
