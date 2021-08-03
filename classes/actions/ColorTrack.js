import Action from "../action.js";
import Color from "../color.js";

/**
 * Class for storing values of ColorTrack action.
 */
export default class extends Action {
    /**
     * Create a ColorTrack event using these parameters.
     * @param {number} floor
     * @param {TrackColorType} trackColorType 
     * @param {Color} trackColor 1st Color of the track.
     * @param {Color} secondaryTrackColor 2nd Color of the track.
     * @param {number} trackColorAnimDuration The duration of the color animation.
     * @param {TrackColorPulse} trackColorPulse 
     * @param {number} trackPulseLength The tile length of track pulse.
     * @param {TrackStyle} trackStyle 
     */
    constructor(
        floor,
        trackColorType,
        trackColor,
        secondaryTrackColor,
        trackColorAnimDuration,
        trackColorPulse,
        trackPulseLength,
        trackStyle
    ) {
        super(floor, "ColorTrack");
        this.trackColorType = trackColorType;
        this.trackColor = trackColor;
        this.secondaryTrackColor = secondaryTrackColor;
        this.trackColorAnimDuration = trackColorAnimDuration;
        this.trackColorPulse = trackColorPulse;
        this.trackPulseLength = trackPulseLength;
        this.trackStyle = trackStyle;
    }

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
}