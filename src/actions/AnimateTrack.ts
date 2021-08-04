import { TrackAppearAnimation, TrackDisappearAnimation } from "../typings";
import { Action } from "..";

export class AnimateTrack extends Action {
    constructor(
        floor: number,
        public trackAnimation: TrackAppearAnimation = "None",
        public beatsAhead: number = 8,
        public trackDisappearAnimation: TrackDisappearAnimation = "None",
        public beatsBehind: number = 1
    ) {
        super(floor, "AnimateTrack");
    }
}
