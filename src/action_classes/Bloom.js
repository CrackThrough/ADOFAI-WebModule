import ActionValue from "../ActionValue.js";
import Color from "../data_types/color.js";

/**
 * Class for storing values of Bloom action.
 */
class MapEvent_Bloom extends ActionValue {
    /**
     * Enabled / Disabled status of the event.
     */
    enabled = true;

    /**
     * Area (threshold) of the bloom effect.
     */
    threshold = 50;

    /**
     * Intensity of the event.
     */
    intensity = 100;

    /**
     * Color of the bloom. The Color class is in `color.js`
     */
    color = new Color(undefined);

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = "";

    /**
     * Create a Bloom event using these parameters.
     * @param {Boolean} enabled Enabled / Disabled status of the event.
     * @param {Number} threshold Area (threshold) of the bloom effect.
     * @param {Number} intensity Intensity of the event.
     * @param {Color} color Color of the bloom. The Color class is in `color.js`.
     * @param {Number} angleOffset Angle offset of the event.
     * @param {String} eventTag A tag of the event.
     */
    constructor(enabled, threshold, intensity, color, angleOffset, eventTag) {
        super();
        this.enabled = enabled ?? this.enabled;
        this.threshold = threshold ?? this.threshold;
        this.intensity = intensity ?? this.intensity;
        this.color = color ?? this.color;
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
        return `, "enabled": ${JSON.stringify(
            (params[0] ?? this.enabled) ? "Enabled" : "Disabled"
        )}, "threshold": ${JSON.stringify(
            params[1] ?? this.threshold
        )}, "intensity": ${JSON.stringify(
            params[2] ?? this.intensity
        )}, "color": ${JSON.stringify(
            (params[3] ?? this.color).toString()
        )}, "angleOffset": ${JSON.stringify(
            params[4] ?? this.angleOffset
        )}, "eventTag": ${JSON.stringify(
            params[5] ?? this.eventTag
        )}`;
    }
}

export default MapEvent_Bloom;
