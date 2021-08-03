import Action from "../action.js";

/**
 * Class for storing values of SetConditionalEvents action.
 */
export default class extends Action {
    /**
     * Create a SetConditionalEvents event using these parameters.
     * @param {number} floor
     * @param {string} perfectTag Event to execute with certain tag when input judgement is "Perfect".
     * @param {string} hitTag Event to execute with certain tag when input judgement is "EPerfect" / "LPerfect".
     * @param {string} barelyTag Event to execute with certain tag when input judgement is "Early!" / "Late!".
     * @param {string} missTag Event to execute with certain tag when input judgement is "Early!!" / "Late!!".
     * @param {string} lossTag Event to execute with certain tag when player is "Dead".
     */
    constructor(floor, perfectTag, hitTag, barelyTag, missTag, lossTag) {
        super(floor, "SetConditionalEvents");
        this.perfectTag = perfectTag;
        this.hitTag = hitTag;
        this.barelyTag = barelyTag;
        this.missTag = missTag;
        this.lossTag = lossTag;
    }

    /**
     * Event to execute with certain tag when input judgement is "Perfect".
     */
    perfectTag = "";

    /**
     * Event to execute with certain tag when input judgement is "EPerfect" / "LPerfect".
     */
    hitTag = "";

    /**
     * Event to execute with certain tag when input judgement is "Early!" / "Late!".
     */
    barelyTag = "";

    /**
     * Event to execute with certain tag when input judgement is "Early!!" / "Late!!".
     */
    missTag = "";

    /**
     * Event to execute with certain tag when player is "Dead".
     */
    lossTag = "";
}
