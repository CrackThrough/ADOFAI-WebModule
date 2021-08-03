import ActionValue from "../ActionValue.js";

/**
 * Class for storing values of PositionTrack action.
 */
class MapEvent_PositionTrack extends ActionValue {
    /**
     * Offset of the tile's position.
     */
    positionOffset = [0, 0];

    /**
     * Whether apply it for editor only or not.
     */
    editorOnly = false;

    /**
     * Create a PositionTrack event using these parameters.
     * @param {[Number, Number]} positionOffset Offset of the tile's position.
     * @param {boolean} editorOnly Whether apply it for editor only or not.
     */
    constructor(positionOffset, editorOnly) {
        super();
        this.positionOffset = positionOffset ?? this.positionOffset;
        this.editorOnly = editorOnly ?? this.editorOnly;
    }

    /**
     * Create value by converting from object
     * @param {Object} obj
     */
    static fromObject(obj) {
        const res = new this();
        Object.keys(obj).forEach((key) => {
            res[key] = obj[key];
        });
        return res;
    }

    /**
     * Returns a json part of this event.
     */
    asJsonPart(...params) {
        return `, "positionOffset": [${JSON.stringify(
            (params[0] ?? this.positionOffset)[0]
        )}, ${JSON.stringify(
            (params[0] ?? this.positionOffset)[1]
        )}], "editorOnly": ${JSON.stringify(
            (params[1] ?? this.editorOnly) ? "Enabled" : "Disabled"
        )}`;
    }
}

export default MapEvent_PositionTrack;
