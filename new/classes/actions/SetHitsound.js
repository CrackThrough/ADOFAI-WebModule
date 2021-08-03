import Action from "../action.js";

/**
 * Class for storing values of SetHitsound action.
 *
 * DO NOT MANUALLY USE STRING IN `hitsound` PROPERTY.
 */
export default class extends Action {
    /**
     * Create a SetHitsound event using these parameters.
     * @param {number} floor
     * @param {Hitsound} hitsound Type of hitsound. Please use enum instead of manually typing the string. Enum is saved at `hitsound.js`.
     * @param {number} hitsoundVolume Volume of hitsound.
     */
    constructor(floor, hitsound, hitsoundVolume) {
        super(floor, "SetHitsound");
        this.hitsound = hitsound;
        this.hitsoundVolume = hitsoundVolume;
    }

    /**
     * Type of hitsound. Please use enum instead of manually typing the string. Enum is saved at `hitsound.js`.
     */
    hitsound = "Kick";

    /**
     * Volume of hitsound.
     */
    hitsoundVolume = 100;
}