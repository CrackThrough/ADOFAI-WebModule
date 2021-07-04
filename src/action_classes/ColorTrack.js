import ActionValue from "../ActionValue.js";
import Color from "../data_types/color.js";
import TRACK_COLOR_TYPE from "../data_types/trackcolortype.js";
import TRACK_COLOR_PULSE from "../data_types/trackcolorpulse.js";
import TRACK_STYLE from "../data_types/trackstyle.js";

/**
 * Class for storing values of ColorTrack action.
 *
 * DO NOT MANUALLY USE STRING IN `trackColorType`, `trackColorPulse`, `trackStyle` PROPERTY.
 */
class MapEvent_ColorTrack extends ActionValue {
    /**
     * Please use enum instead of manually typing the string. Enum's filename is `trackcolortype.js`.
     */
    trackColorType = TRACK_COLOR_TYPE.SINGLE;

    /**
     * 1st Color of the track. The Color class is in `color.js`
     */
    trackColor = new Color(undefined);

    /**
     * 2nd Color of the track. The Color class is in `color.js`
     */
    secondaryTrackColor = new Color(undefined);

    /**
     * The duration of the color animation.
     */
    trackColorAnimDuration = 1;

    /**
     * Please use enum instead of manually typing the string. Enum's filename is `trackcolorpulse.js`.
     */
    trackColorPulse = TRACK_COLOR_PULSE.NONE;

    /**
     * The tile length of track pulse.
     */
    trackPulseLength = 1;

    /**
     * Please use enum instead of manually typing the string. Enum's filename is `trackstyle.js`.
     */
    trackStyle = TRACK_STYLE.STANDARD;

    /**
     * Create a ColorTrack event using these parameters.
     * @param {String} trackColorType Please use enum instead of manually typing the string. Enum's filename is `trackcolortype.js`.
     * @param {Color} trackColor 1st Color of the track. The Color class is in `color.js`.
     * @param {Color} secondaryTrackColor 2nd Color of the track. The Color class is in `color.js`.
     * @param {Number} trackColorAnimDuration The duration of the color animation.
     * @param {String} trackColorPulse Please use enum instead of manually typing the string. Enum's filename is `trackcolorpulse.js`.
     * @param {Number} trackPulseLength The tile length of track pulse.
     * @param {String} trackStyle Please use enum instead of manually typing the string. Enum's filename is `trackstyle.js`.
     */
    constructor(
        trackColorType,
        trackColor,
        secondaryTrackColor,
        trackColorAnimDuration,
        trackColorPulse,
        trackPulseLength,
        trackStyle
    ) {
        super();
        this.trackColorType = trackColorType ?? this.trackColorType;
        this.trackColor = trackColor ?? this.trackColor;
        this.secondaryTrackColor = secondaryTrackColor ?? this.secondaryTrackColor;
        this.trackColorAnimDuration = trackColorAnimDuration ?? this.trackColorAnimDuration;
        this.trackColorType = trackColorPulse ?? this.trackColorPulse;
        this.trackColorType = trackPulseLength ?? this.trackPulseLength;
        this.trackColorType = trackStyle ?? this.trackStyle;
    }

    /**
     * Create value by converting from object
     * @param {Object} obj
     */
    static fromObject(obj) {
        const res = new this();
        Object.keys(obj).forEach((key) => {
            res[key] = obj[key];
        });
        return res;
    }

    /**
     * Returns a json part of this event.
     */
    asJsonPart(...params) {
        return `, "trackColorType": ${JSON.stringify(
            params[0] ?? this.trackColorType
        )}, "trackColor": ${JSON.stringify(
            (params[1] ?? this.trackColor).toString()
        )}, "secondaryTrackColor": ${JSON.stringify(
            (params[2] ?? this.secondaryTrackColor).toString()
        )}, "trackColorAnimDuration": ${JSON.stringify(
            params[3] ?? this.trackColorAnimDuration
        )}, "trackColorPulse": ${JSON.stringify(
            params[4] ?? this.trackColorPulse
        )}, "trackPulseLength": ${JSON.stringify(
            params[5] ?? this.trackPulseLength
        )}, "trackStyle": ${JSON.stringify(
            params[6] ?? this.trackStyle
        )}`;
    }
}

export default MapEvent_ColorTrack;
