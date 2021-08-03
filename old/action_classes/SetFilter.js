import ActionValue from "../ActionValue.js";
import FILTER from "../data_types/filter.js";

/**
 * Class for storing values of SetFilter action.
 */
class MapEvent_SetFilter extends ActionValue {
    /**
     * Type of filter.  
     */
    filter = FILTER.GRAYSCALE;

    /**
     * Whether enable or disable the filter.
     */
    enabled = true;

    /**
     * Intensity of the filter.
     */
    intensity = 100;

    /**
     * Disable other filters when this event occurs.
     */
    disableOthers = false;

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = String();

    /**
     * Create a SetFilter event using these parameters.
     * @param {String} filter Type of filter.  
     * @param {boolean} enabled Whether enable or disable the filter.
     * @param {Number} intensity Intensity of the filter.
     * @param {boolean} disableOthers Disable other filters when this event occurs.
     * @param {Number} angleOffset Angle offset of the event.
     * @param {String} eventTag A tag of the event.
     */
    constructor(
        filter,
        enabled,
        intensity,
        disableOthers,
        angleOffset,
        eventTag
    ) {
        super();
        this.filter = filter ?? this.filter;
        this.enabled = enabled ?? this.enabled;
        this.intensity = intensity ?? this.intensity;
        this.disableOthers = disableOthers ?? this.disableOthers;
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
        return `, "filter": ${JSON.stringify(
            params[0] ?? this.filter
        )}, "enabled": ${JSON.stringify(
            (params[1] ?? this.enabled) ? "Enabled" : "Disabled"
        )}, "intensity": ${JSON.stringify(
            params[2] ?? this.intensity
        )}, "disableOthers": ${JSON.stringify(
            (params[3] ?? this.disableOthers) ? "Enabled" : "Disabled"
        )}, "angleOffset": ${JSON.stringify(
            params[4] ?? this.angleOffset
        )}, "eventTag": ${JSON.stringify(
            params[5] ?? this.eventTag
        )}`;
    }
}

export default MapEvent_SetFilter;
