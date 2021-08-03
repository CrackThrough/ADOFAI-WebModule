import Action from "../action.js";

/**
 * Class for storing values of SetPlanetRotation action.
 */
export default class extends Action {
    /**
     * Create a SetPlanetRotation event using these parameters.
     * @param {number} floor
     * @param {Ease} ease  
     * @param {number} easeParts Planet's easing part.
     */
    constructor(floor, ease, easeParts) {
        super(floor, "SetPlanetRotation");
        this.ease = ease;
        this.easeParts = easeParts;
    }

    /**
     *  
     */
    ease = "Linear";

    /**
     * Planet's easing part.
     */
    easeParts = 1;
}