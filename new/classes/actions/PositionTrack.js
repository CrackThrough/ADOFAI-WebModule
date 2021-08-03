import Action from "../action.js";

/**
 * Class for storing values of PositionTrack action.
 */
export default class extends Action {
    /**
     * Create a PositionTrack event using these parameters.
     * @param {number} floor
     * @param {Position} positionOffset Offset of the tile's position.
     * @param {boolean} editorOnly Whether apply it for editor only or not.
     */
    constructor(floor, positionOffset, editorOnly) {
        super(floor, "PositionTrack");
        this.positionOffset = positionOffset;
        this.editorOnly = editorOnly;
    }

    /**
     * Offset of the tile's position.
     */
    positionOffset = [0, 0];

    /**
     * Whether apply it for editor only or not.
     */
    editorOnly = false;
}
