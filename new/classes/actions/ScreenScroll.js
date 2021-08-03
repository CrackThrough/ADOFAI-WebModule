import Action from "../action.js";

/**
 * Class for storing values of ScreenScroll action.
 */
export default class extends Action {
    /**
     * Create a ScreenScroll event using these parameters.
     * @param {number} floor
     * @param {Position} scroll Speed of the scroll.
     * @param {number} angleOffset Angle offset of the event.
     * @param {string} eventTag A tag of the event
     */
    constructor(floor, scroll, angleOffset, eventTag) {
        super(floor, "ScreenScroll");
        this.scroll = scroll ?? this.scroll;
        this.angleOffset = angleOffset ?? this.angleOffset;
        this.eventTag = eventTag ?? this.eventTag;
    }

    /**
     * Position of the text.
     */
    scroll = [0, 0];

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = "";
}
