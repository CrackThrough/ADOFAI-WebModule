import {
    TrackColorType,
    TrackColorPulse,
    TrackStyle,
    TrackAppearAnimation,
    TrackDisappearAnimation,
} from "../typings";
import { Action, Color } from "../classes";

export class ChangeTrack extends Action {
    constructor(
        floor: number,
        public trackColorType: TrackColorType = "Single",
        public trackColor: Color = Color.FromString("debb7b"),
        public secondaryTrackColor: Color = Color.FromString("ffffff"),
        public trackColorAnimDuration: number = 2,
        public trackColorPulse: TrackColorPulse = "None",
        public trackPulseLength: number = 10,
        public trackStyle: TrackStyle = "Standard",
        public trackAnimation: TrackAppearAnimation = "None",
        public beatsAhead: number = 3,
        public trackDisappearAnimation: TrackDisappearAnimation = "None",
        public beatsBehind: number = 4
    ) {
        super(floor, "ChangeTrack");
    }
}
