import Action from "../action.js";

/**
 * Class for storing values of SetSpeed action.
 *
 * DO NOT MANUALLY USE STRING IN `speedType` PROPERTY.
 */
export default class extends Action {
    /**
     * Create a SetSpeed event using these parameters.
     * @param {number} floor
     * @param {SpeedType} speedType Please use enum instead of manually typing the string. Enum is saved at `speedtype.js`.
     * @param {number} beatsPerMinute BPM to change as.
     * @param {number} bpmMultiplier BPM to multiply with previous BPM (Not BPM in this class).
     */
    constructor(floor, speedType, beatsPerMinute, bpmMultiplier) {
        super(floor, "SetSpeed");
        this.speedType = speedType;
        this.beatsPerMinute = beatsPerMinute;
        this.bpmMultiplier = bpmMultiplier;
    }

    /**
     * Please use enum instead of manually typing the string. Enum is saved at `speedtype.js`.
     */
    speedType = "Bpm";

    /**
     * BPM to change as.
     */
    beatsPerMinute = 120;

    /**
     * BPM to multiply with previous BPM (Not this BPM).
     */
    bpmMultiplier = 1;
}