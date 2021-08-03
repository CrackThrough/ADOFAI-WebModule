import Action from "../action.js";

/**
 * Class for storing values of SetPlanetRotation action.
 *
 * DO NOT MANUALLY USE STRING IN `ease` PROPERTY.
 */
export default class extends Action {
    /**
     * Create a SetPlanetRotation event using these parameters.
     * @param {number} floor
     * @param {Ease} ease Please use enum instead of manually typing the string. Enum is saved at `ease.js`.
     * @param {number} easeParts Planet's easing part.
     */
    constructor(floor, ease, easeParts) {
        super(floor, "SetPlanetRotation");
        this.ease = ease;
        this.easeParts = easeParts;
    }

    /**
     * Please use enum instead of manually typing the string. Enum is saved at `ease.js`.
     */
    ease = "Linear";

    /**
     * Planet's easing part.
     */
    easeParts = 1;
}