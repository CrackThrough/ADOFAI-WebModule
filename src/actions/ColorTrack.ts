import { TrackColorType, TrackColorPulse, TrackStyle } from "../typings";
import { Action, Color } from "..";

export class ColorTrack extends Action {
    constructor(
        floor: number,
        public trackColorType: TrackColorType = "Single",
        public trackColor: Color = new Color(),
        public secondaryTrackColor: Color = new Color(),
        public trackColorAnimDuration: number = 1,
        public trackColorPulse: TrackColorPulse = "None",
        public trackPulseLength: number = 1,
        public trackStyle: TrackStyle = "Standard"
    ) {
        super(floor, "ColorTrack");
    }
}
