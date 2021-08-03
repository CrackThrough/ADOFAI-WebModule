import ActionValue from "../ActionValue.js";
import EASE from "../data_types/ease.js";

/**
 * Class for storing values of SetPlanetRotation action.
 */
class MapEvent_SetPlanetRotation extends ActionValue {
    /**
     *  
     */
    ease = EASE.LINEAR;

    /**
     * Planet's easing part.
     */
    easeParts = 1;

    /**
     * Create a SetPlanetRotation event using these parameters.
     * @param {String} ease  
     * @param {Number} easeParts Planet's easing part.
     */
    constructor(ease, easeParts) {
        super();
        this.ease = ease ?? this.ease;
        this.easeParts = easeParts ?? this.easeParts;
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
        return `, "ease": ${JSON.stringify(
            params[0] ?? this.ease
        )}, "easeParts": ${JSON.stringify(
            params[1] ?? this.easeParts
        )}`;
    }
}

export default MapEvent_SetPlanetRotation;
