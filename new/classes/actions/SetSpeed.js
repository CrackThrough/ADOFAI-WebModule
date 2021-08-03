import Action from "../action.js";

/**
 * Class for storing values of SetSpeed action.
 */
export default class extends Action {
    /**
     * Create a SetSpeed event using these parameters.
     * @param {number} floor floor
     * @param {SpeedType} speedType
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
     *
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
