import Action from "../action.js";

/**
 * Class for storing values of HallOfMirrors action.
 */
export default class extends Action {
    /**
     * Create a HallOfMirrors event using these parameters.
     * @param {number} floor
     * @param {boolean} enabled Enabled / Disabled status of the event.
     * @param {number} angleOffset Angle offset of the event.
     * @param {string} eventTag A tag of the event.
     */
    constructor(floor, enabled, angleOffset, eventTag) {
        super(floor, "HallOfMirrors");
        this.enabled = enabled;
        this.angleOffset = angleOffset;
        this.eventTag = eventTag;
    }

    /**
     * Enabled / Disabled status of the event.
     */
    enabled = true;

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = "";
}