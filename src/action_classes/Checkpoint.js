import ActionValue from "../ActionValue.js";

/**
 * A checkpoint event.
 */
class MapEvent_Checkpoint extends ActionValue {
    /**
     * Create value by converting from object
     * @param {Object} obj
     */
    static fromObject(obj) {
        return new this();
    }

    /**
     * Returns a json part of this event.
     */
    asJsonPart() {
        return ``;
    }
}

export default MapEvent_Checkpoint;
