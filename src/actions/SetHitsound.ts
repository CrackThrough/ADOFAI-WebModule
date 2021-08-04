import { Hitsound } from "../typings";
import { Action } from "..";

export class SetHitsound extends Action {
    constructor(
        floor: number,
        public hitsound: Hitsound = "Kick",
        public hitsoundVolume: number = 100
    ) {
        super(floor, "SetHitsound");
    }
}
