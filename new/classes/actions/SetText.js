import Action from "../action.js";

/**
 * Class for storing values of SetText action.
 */
export default class extends Action {
    /**
     * Create a SetText event using these parameters.
     * @param {number} floor
     * @param {string} decText Content of the text.
     * @param {string} tag A tag of the text.
     * @param {number} angleOffset Angle offset of the event.
     * @param {string} eventTag A tag of the event.
     */
    constructor(floor, decText, tag, angleOffset, eventTag) {
        super(floor, "SetText");
        this.decText = decText;
        this.tag = tag;
        this.angleOffset = angleOffset;
        this.eventTag = eventTag;
    }

    /**
     * Content of the text.
     */
    decText = "";

    /**
     * A tag of the text.
     */
    tag = "";

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = "";
}
