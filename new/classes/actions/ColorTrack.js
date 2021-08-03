import Action from "../action.js";
import Color from "../color.js";

/**
 * Class for storing values of ColorTrack action.
 *
 * DO NOT MANUALLY USE STRING IN `trackColorType`, `trackColorPulse`, `trackStyle` PROPERTY.
 */
export default class extends Action {
    /**
     * Create a ColorTrack event using these parameters.
     * @param {number} floor
     * @param {TrackColorType} trackColorType Please use enum instead of manually typing the string. Enum's filename is `trackcolortype.js`.
     * @param {Color} trackColor 1st Color of the track. The Color class is in `color.js`.
     * @param {Color} secondaryTrackColor 2nd Color of the track. The Color class is in `color.js`.
     * @param {number} trackColorAnimDuration The duration of the color animation.
     * @param {TrackColorPulse} trackColorPulse Please use enum instead of manually typing the string. Enum's filename is `trackcolorpulse.js`.
     * @param {number} trackPulseLength The tile length of track pulse.
     * @param {TrackStyle} trackStyle Please use enum instead of manually typing the string. Enum's filename is `trackstyle.js`.
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
}