import ActionValue from "../ActionValue.js";
import HITSOUNDS from "../data_types/hitsound.js";

/**
 * Class for storing values of SetHitsound action.
 *
 * DO NOT MANUALLY USE STRING IN `hitsound` PROPERTY.
 */
class MapEvent_SetHitsound extends ActionValue {
    /**
     * Type of hitsound. Please use enum instead of manually typing the string. Enum is saved at `hitsound.js`.
     */
    hitsound = HITSOUNDS.KICK;

    /**
     * Volume of hitsound.
     */
    hitsoundVolume = 100;

    /**
     * Create a SetHitsound event using these parameters.
     * @param {String} hitsound Type of hitsound. Please use enum instead of manually typing the string. Enum is saved at `hitsound.js`.
     * @param {Number} hitsoundVolume Volume of hitsound.
     */
    constructor(hitsound, hitsoundVolume) {
        super();
        this.hitsound = hitsound ?? this.hitsound;
        this.hitsoundVolume = hitsoundVolume ?? this.hitsoundVolume;
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
        return `, "hitsound": ${JSON.stringify(
            params[0] ?? this.hitsound
        )}, "hitsoundVolume": ${JSON.stringify(
            params[1] ?? this.hitsoundVolume
        )}`;
    }
}

export default MapEvent_SetHitsound;
