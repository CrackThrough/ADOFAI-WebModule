import ActionValue from "../ActionValue.js";

/**
 * Class for storing values of HallOfMirrors action.
 */
class MapEvent_HallOfMirrors extends ActionValue {
    /**
     * Enabled / Disabled status of the event.
     */
    enabled = true;

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = String();

    /**
     * Create a HallOfMirrors event using these parameters.
     * @param {boolean} enabled Enabled / Disabled status of the event.
     * @param {Number} angleOffset Angle offset of the event.
     * @param {String} eventTag A tag of the event.
     */
    constructor(enabled, angleOffset, eventTag) {
        super();
        this.enabled = enabled ?? this.enabled;
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
        )}, "angleOffset": ${JSON.stringify(
            params[1] ?? this.angleOffset
        )}, "eventTag": ${JSON.stringify(
            params[2] ?? this.eventTag
        )}`;
    }
}

export default MapEvent_HallOfMirrors;
