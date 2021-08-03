import ActionValue from "../ActionValue.js";

/**
 * Class for storing values of SetConditionalEvents action.
 */
class MapEvent_SetConditionalEvents extends ActionValue {
    /**
     * Event to execute with certain tag when input judgement is "Perfect".
     */
    perfectTag = String();

    /**
     * Event to execute with certain tag when input judgement is "EPerfect" / "LPerfect".
     */
    hitTag = String();

    /**
     * Event to execute with certain tag when input judgement is "Early!" / "Late!".
     */
    barelyTag = String();

    /**
     * Event to execute with certain tag when input judgement is "Early!!" / "Late!!".
     */
    missTag = String();

    /**
     * Event to execute with certain tag when player is "Dead".
     */
    lossTag = String();

    /**
     * Create a SetConditionalEvents event using these parameters.
     * @param {String} perfectTag Event to execute with certain tag when input judgement is "Perfect".
     * @param {String} hitTag Event to execute with certain tag when input judgement is "EPerfect" / "LPerfect".
     * @param {String} barelyTag Event to execute with certain tag when input judgement is "Early!" / "Late!".
     * @param {String} missTag Event to execute with certain tag when input judgement is "Early!!" / "Late!!".
     * @param {String} lossTag Event to execute with certain tag when player is "Dead".
     */
    constructor(perfectTag, hitTag, barelyTag, missTag, lossTag) {
        super();
        this.perfectTag = perfectTag ?? this.perfectTag;
        this.hitTag = hitTag ?? this.hitTag;
        this.barelyTag = barelyTag ?? this.barelyTag;
        this.missTag = missTag ?? this.missTag;
        this.lossTag = lossTag ?? this.lossTag;
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
        return `, "perfectTag": ${JSON.stringify(
            params[0] ?? this.perfectTag
        )}, "hitTag": ${JSON.stringify(
            params[1] ?? this.hitTag
        )}, "barelyTag": ${JSON.stringify(
            params[2] ?? this.barelyTag
        )}, "missTag": ${JSON.stringify(
            params[3] ?? this.missTag
        )}, "lossTag": ${JSON.stringify(
            params[4] ?? this.lossTag
        )}`;
    }
}

export default MapEvent_SetConditionalEvents;
