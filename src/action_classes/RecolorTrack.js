import ActionValue from "../ActionValue.js";
import Color from "../data_types/color.js";
import TILE_RANGE from "../data_types/tilerange.js";
import TRACK_COLOR_TYPE from "../data_types/trackcolortype.js";
import TRACK_COLOR_PULSE from "../data_types/trackcolorpulse.js";
import TRACK_STYLE from "../data_types/trackstyle.js";

/**
 * Class for storing values of RecolorTrack action.
 *
 * DO NOT MANUALLY USE STRING IN `trackColorType`, `trackColorPulse`, `trackStyle` PROPERTY.
 */
class MapEvent_RecolorTrack extends ActionValue {
    /**
     * Start of the tile selection. Enum's filename is `tilerange.js`.
     */
    startTile = [0, TILE_RANGE.THIS];

    /**
     * End of the tile selection. Enum's filename is `tilerange.js`.
     */
    endTile = [0, TILE_RANGE.THIS];

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
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = String();

    /**
     * Create a RecolorTrack event using these parameters.
     * @param {[Number, String]} startTile Unlike offset-related parameters, this one uses 1st item for offsetting tile and 2nd item for tile range.
     *
     * DO NOT MANUALLY INPUT NUMBER ON INDEX 1. USE ENUM INSTEAD, FILENAME IS `tilerange.js`.
     *
     * ex) `[0, TILE_RANGE.FIRST]`, `[-2, TILE_RANGE.THIS]`, `[20, TILE_RANGE.LAST]`
     * @param {[Number, String]} endTile Usage is same with startTile. USE ENUM ON INDEX 1.
     * @param {String} trackColorType Please use enum instead of manually typing the string. Enum's filename is `trackcolortype.js`.
     * @param {Color} trackColor 1st Color of the track. The Color class is in `color.js`.
     * @param {Color} secondaryTrackColor 2nd Color of the track. The Color class is in `color.js`.
     * @param {Number} trackColorAnimDuration The duration of the color animation.
     * @param {String} trackColorPulse Please use enum instead of manually typing the string. Enum's filename is `trackcolorpulse.js`.
     * @param {Number} trackPulseLength The tile length of track pulse.
     * @param {String} trackStyle Please use enum instead of manually typing the string. Enum's filename is `trackstyle.js`.
     * @param {Number} angleOffset Angle offset of the event.
     * @param {String} eventTag A tag of the event.
     */
    constructor(
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
        super();
        this.startTile = startTile ?? this.startTile;
        this.endTile = endTile ?? this.endTile;
        this.trackColorType = trackColorType ?? this.trackColorType;
        this.trackColor = trackColor ?? this.trackColor;
        this.secondaryTrackColor = secondaryTrackColor ?? this.secondaryTrackColor;
        this.trackColorAnimDuration = trackColorAnimDuration ?? this.trackColorAnimDuration;
        this.trackColorPulse = trackColorPulse ?? this.trackColorPulse;
        this.trackPulseLength = trackPulseLength ?? this.trackPulseLength;
        this.trackStyle = trackStyle ?? this.trackStyle;
        this.angleOffset = angleOffset ?? this.angleOffset;
        this.eventTag = eventTag ?? this.eventTag;
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
        return `, "startTile": [${JSON.stringify(
            (params[0] ?? this.startTile)[0]
        )}, ${JSON.stringify(
            (params[0] ?? this.startTile)[1]
        )}], "endTile": [${JSON.stringify(
            (params[1] ?? this.endTile)[0]
        )}, ${JSON.stringify(
            (params[1] ?? this.endTile)[1]
        )}], "trackColorType": ${JSON.stringify(
            params[2] ?? this.trackColorType
        )}, "trackColor": ${JSON.stringify(
            (params[3] ?? this.trackColor).toString()
        )}, "secondaryTrackColor": ${JSON.stringify(
            (params[4] ?? this.secondaryTrackColor).toString()
        )}, "trackColorAnimDuration": ${JSON.stringify(
            params[5] ?? this.trackColorAnimDuration
        )}, "trackColorPulse": ${JSON.stringify(
            params[6] ?? this.trackColorPulse
        )}, "trackPulseLength": ${JSON.stringify(
            params[7] ?? this.trackPulseLength
        )}, "trackStyle": ${JSON.stringify(
            params[8] ?? this.trackStyle
        )}, "angleOffset": ${JSON.stringify(
            params[9] ?? this.angleOffset
        )}, "eventTag": ${JSON.stringify(
            params[10] ?? this.eventTag
        )}`;
    }
}

export default MapEvent_RecolorTrack;
