import Action from "../action.js";
import Color from "../color.js";

/**
 * Class for storing values of RecolorTrack action.
 */
export default class extends Action {
    /**
     * Create a RecolorTrack event using these parameters.
     * @param {number} floor
     * @param {FloorRange} startTile Unlike offset-related parameters, this one uses 1st item for offsetting tile and 2nd item for tile range.
     * @param {FloorRange} endTile Usage is same with startTile. USE ENUM ON INDEX 1.
     * @param {TrackColorType} trackColorType 
     * @param {Color} trackColor 1st Color of the track.
     * @param {Color} secondaryTrackColor 2nd Color of the track.
     * @param {number} trackColorAnimDuration The duration of the color animation.
     * @param {TrackColorPulse} trackColorPulse 
     * @param {number} trackPulseLength The tile length of track pulse.
     * @param {TrackStyle} trackStyle 
     * @param {number} angleOffset Angle offset of the event.
     * @param {string} eventTag A tag of the event.
     */
    constructor(
        floor,
        startTile,
        endTile,
        trackColorType,
        trackColor,
        secondaryTrackColor,
        trackColorAnimDuration,
        trackColorPulse,
        trackPulseLength,
        trackStyle,
        angleOffset,
        eventTag
    ) {
        super(floor, "RecolorTrack");
        this.startTile = startTile;
        this.endTile = endTile;
        this.trackColorType = trackColorType;
        this.trackColor = trackColor;
        this.secondaryTrackColor = secondaryTrackColor;
        this.trackColorAnimDuration = trackColorAnimDuration;
        this.trackColorPulse = trackColorPulse;
        this.trackPulseLength = trackPulseLength;
        this.trackStyle = trackStyle;
        this.angleOffset = angleOffset;
        this.eventTag = eventTag;
    }

    /**
     * Start of the tile selection.
     */
    startTile = [0, "ThisTile"];

    /**
     * End of the tile selection.
     */
    endTile = [0, "ThisTile"];

    /**
     * 
     */
    trackColorType = "Single";

    /**
     * 1st Color of the track. The Color class is in `color.js`
     */
    trackColor = new Color();

    /**
     * 2nd Color of the track. The Color class is in `color.js`
     */
    secondaryTrackColor = new Color();

    /**
     * The duration of the color animation.
     */
    trackColorAnimDuration = 1;

    /**
     * 
     */
    trackColorPulse = "None";

    /**
     * The tile length of track pulse.
     */
    trackPulseLength = 1;

    /**
     * 
     */
    trackStyle = "Standard";

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = "";
}