import {
    FloorRange,
    TrackColorType,
    TrackColorPulse,
    TrackStyle,
} from "../typings";
import { Action, Color } from "../classes";

export class RecolorTrack extends Action {
    constructor(
        floor: number,
        public startTile: FloorRange = [0, "ThisTile"],
        public endTile: FloorRange = [0, "ThisTile"],
        public trackColorType: TrackColorType = "Single",
        public trackColor: Color = Color.FromString("debb7b"),
        public secondaryTrackColor: Color = Color.FromString("ffffff"),
        public trackColorAnimDuration: number = 2,
        public trackColorPulse: TrackColorPulse = "None",
        public trackPulseLength: number = 10,
        public trackStyle: TrackStyle = "Standard",
        public angleOffset: number = 0,
        public eventTag: string = ""
    ) {
        super(floor, "RecolorTrack");
    }
}
