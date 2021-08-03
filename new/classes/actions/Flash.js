import Action from "../action.js";
import Color from "../color.js";

/**
 * Class for storing values of Flash action.
 */
export default class extends Action {
    /**
     * Create a Flash event using these parameters.
     * @param {number} floor
     * @param {number} duration Duration of flash effect.
     * @param {Plane} plane
     * @param {Color} startColor Color of the flash when the effect starts.
     * @param {number} startOpacity Opacity of the flash when the effect starts.
     * @param {Color} endColor Color of the flash when the effect ends.
     * @param {number} endOpacity Opacity of the flash when the effect ends.
     * @param {number} angleOffset Angle offset of the event.
     * @param {string} eventTag A tag of the event.
     */
    constructor(
        floor,
        duration,
        plane,
        startColor,
        startOpacity,
        endColor,
        endOpacity,
        angleOffset,
        eventTag
    ) {
        super(floor, "Flash");
        this.duration = duration;
        this.plane = plane;
        this.startColor = startColor;
        this.startOpacity = startOpacity;
        this.endColor = endColor;
        this.endOpacity = endOpacity;
        this.angleOffset = angleOffset;
        this.eventTag = eventTag;
    }

    /**
     * Duration of flash effect.
     */
    duration = 1;

    /**
     *
     */
    plane = "Background";

    /**
     * Color of the flash when the effect starts.
     */
    startColor = new Color();

    /**
     * Opacity of the flash when the effect starts.
     */
    startOpacity = 100;

    /**
     * Color of the flash when the effect ends.
     */
    endColor = new Color();

    /**
     * Opacity of the flash when the effect ends.
     */
    endOpacity = 0;

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = "";
}
