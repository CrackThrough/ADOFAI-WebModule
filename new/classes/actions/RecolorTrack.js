import Action from "../action.js";
import Color from "../color.js";

/**
 * Class for storing values of RecolorTrack action.
 *
 * DO NOT MANUALLY USE STRING IN `trackColorType`, `trackColorPulse`, `trackStyle` PROPERTY.
 */
export default class extends Action {
    /**
     * Create a RecolorTrack event using these parameters.
     * @param {number} floor
     * @param {FloorRange} startTile Unlike offset-related parameters, this one uses 1st item for offsetting tile and 2nd item for tile range.
     * @param {FloorRange} endTile Usage is same with startTile. USE ENUM ON INDEX 1.
     * @param {TrackColorType} trackColorType Please use enum instead of manually typing the string. Enum's filename is `trackcolortype.js`.
     * @param {Color} trackColor 1st Color of the track. The Color class is in `color.js`.
     * @param {Color} secondaryTrackColor 2nd Color of the track. The Color class is in `color.js`.
     * @param {number} trackColorAnimDuration The duration of the color animation.
     * @param {TrackColorPulse} trackColorPulse Please use enum instead of manually typing the string. Enum's filename is `trackcolorpulse.js`.
     * @param {number} trackPulseLength The tile length of track pulse.
     * @param {TrackStyle} trackStyle Please use enum instead of manually typing the string. Enum's filename is `trackstyle.js`.
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
     * Start of the tile selection. Enum's filename is `tilerange.js`.
     */
    startTile = [0, "ThisTile"];

    /**
     * End of the tile selection. Enum's filename is `tilerange.js`.
     */
    endTile = [0, "ThisTile"];

    /**
     * Please use enum instead of manually typing the string. Enum's filename is `trackcolortype.js`.
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
     * Please use enum instead of manually typing the string. Enum's filename is `trackcolorpulse.js`.
     */
    trackColorPulse = "None";

    /**
     * The tile length of track pulse.
     */
    trackPulseLength = 1;

    /**
     * Please use enum instead of manually typing the string. Enum's filename is `trackstyle.js`.
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