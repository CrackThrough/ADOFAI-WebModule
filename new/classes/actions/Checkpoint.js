import Action from "../action.js";

/**
 * A checkpoint event.
 */
export default class extends Action {
    /**
     * @param {number} floor
     */
    constructor(floor) {
        super(floor, "Checkpoint");
    }
}
