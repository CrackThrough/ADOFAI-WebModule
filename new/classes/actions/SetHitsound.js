import Action from "../action.js";

/**
 * Class for storing values of SetHitsound action.
 */
export default class extends Action {
    /**
     * Create a SetHitsound event using these parameters.
     * @param {number} floor
     * @param {Hitsound} hitsound Type of hitsound.
     * @param {number} hitsoundVolume Volume of hitsound.
     */
    constructor(floor, hitsound, hitsoundVolume) {
        super(floor, "SetHitsound");
        this.hitsound = hitsound;
        this.hitsoundVolume = hitsoundVolume;
    }

    /**
     * Type of hitsound.
     */
    hitsound = "Kick";

    /**
     * Volume of hitsound.
     */
    hitsoundVolume = 100;
}
