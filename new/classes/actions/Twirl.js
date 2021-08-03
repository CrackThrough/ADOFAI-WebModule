import Action from "../action.js";

/**
 * Class for storing values of Twirl action.
 */
export default class extends Action {
    /**
     * Create a Twirl event using these parameters.
     * @param {number} floor
     * @param {boolean} doubleTwirled Whether to twirl it twice so planet does not actually get twirled but the tile has twirl icon.
     */
    constructor(doubleTwirled = false) {
        super(floor, "Twirl");
        this.doubleTwirled = doubleTwirled;
    }

    /**
     * Whether to twirl it twice so planet does not actually get twirled but the tile has twirl icon.
     */
    doubleTwirled = false;
}
