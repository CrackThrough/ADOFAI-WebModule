import Action from "../action.js";

/**
 * Class for storing values of ScreenTile action.
 */
export default class extends Action {
    /**
     * Create a ScreenTile event using these parameters.
     * @param {number} floor
     * @param {Position} tile number of tiles to split.
     * @param {number} angleOffset Angle offset of the event.
     * @param {string} eventTag A tag of the event.
     */
    constructor(floor, tile, angleOffset, eventTag) {
        super(floor, "ScreenTile");
        this.tile = tile;
        this.angleOffset = angleOffset;
        this.eventTag = eventTag;
    }

    /**
     * number of tiles to split.
     */
    tile = [0, 0];

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = "";
}
