import ActionValue from "../ActionValue.js";

/**
 * Class for storing values of Twirl action.
 */
class MapEvent_Twirl extends ActionValue {
    /**
     * Whether to twirl it twice so planet does not actually get twirled but the tile has twirl icon.
     */
    DoubleTwirled = false;

    /**
     * Create a Twirl event using these parameters.
     * @param {boolean} DoubleTwirled Whether to twirl it twice so planet does not actually get twirled but the tile has twirl icon.
     */
    constructor(DoubleTwirled = false) {
        super();
        this.DoubleTwirled = DoubleTwirled;
    }

    /**
     * Create value by converting from object
     * @param {Object} obj
     */
    static fromObject(obj) {
        return new this();
    }

    /**
     * Returns a json part of this event.
     *
     * USING THIS METHOD HERE WILL THROW AN ERROR.
     */
    asJsonPart() {
        throw new Error("Cannot use asJsonPart method on Twirl action.");
    }
}

export default MapEvent_Twirl;
