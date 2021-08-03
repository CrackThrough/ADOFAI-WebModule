import ActionValue from "../ActionValue.js";
import SPEEDTYPE from "../data_types/speedtype.js";

/**
 * Class for storing values of SetSpeed action.
 */
class MapEvent_SetSpeed extends ActionValue {
    /**
     *  
     */
    speedType = SPEEDTYPE.BPM;

    /**
     * BPM to change as.
     */
    beatsPerMinute = 120;

    /**
     * BPM to multiply with previous BPM (Not this BPM).
     */
    bpmMultiplier = 1;

    /**
     * Create a SetSpeed event using these parameters.
     * @param {String} speedType  
     * @param {Number} beatsPerMinute BPM to change as.
     * @param {Number} bpmMultiplier BPM to multiply with previous BPM (Not BPM in this class).
     */
    constructor(speedType, beatsPerMinute, bpmMultiplier) {
        super();
        this.speedType = speedType ?? this.speedType;
        this.beatsPerMinute = beatsPerMinute ?? this.beatsPerMinute;
        this.bpmMultiplier = bpmMultiplier ?? this.bpmMultiplier;
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
        return `, "speedType": ${JSON.stringify(
            params[0] ?? this.speedType
        )}, "beatsPerMinute": ${JSON.stringify(
            params[1] ?? this.beatsPerMinute
        )}, "bpmMultiplier": ${JSON.stringify(
            params[2] ?? this.bpmMultiplier
        )}`;
    }
}

export default MapEvent_SetSpeed;
