import Action from "../action.js";
import Color from "../color.js";

/**
 * Class for storing values of Bloom action.
 */
export default class extends Action {
    /**
     * Create a Bloom event using these parameters.
     * @param {number} floor
     * @param {TextBoolean} enabled Enabled / Disabled status of the event.
     * @param {number} threshold Area (threshold) of the bloom effect.
     * @param {number} intensity Intensity of the event.
     * @param {Color} color Color of the bloom.
     * @param {number} angleOffset Angle offset of the event.
     * @param {string} eventTag A tag of the event.
     */
    constructor(floor, enabled, threshold, intensity, color, angleOffset, eventTag) {
        super(floor, "Bloom");
        this.enabled = enabled;
        this.threshold = threshold;
        this.intensity = intensity;
        this.color = color;
        this.angleOffset = angleOffset;
        this.eventTag = eventTag;
    }

    /**
     * Enabled / Disabled status of the event.
     */
    enabled = true;

    /**
     * Area (threshold) of the bloom effect.
     */
    threshold = 50;

    /**
     * Intensity of the event.
     */
    intensity = 100;

    /**
     * Color of the bloom. The Color class is in `color.js`
     */
    color = new Color();

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = "";
}