import Action from "../action.js";

/**
 * Class for storing values of SetFilter action.
 */
export default class extends Action {
    /**
     * Create a SetFilter event using these parameters.
     * @param {number} floor
     * @param {Filter} filter Type of filter.  
     * @param {TextBoolean} enabled Whether enable or disable the filter.
     * @param {number} intensity Intensity of the filter.
     * @param {TextBoolean} disableOthers Disable other filters when this event occurs.
     * @param {number} angleOffset Angle offset of the event.
     * @param {string} eventTag A tag of the event.
     */
    constructor(
        floor,
        filter,
        enabled,
        intensity,
        disableOthers,
        angleOffset,
        eventTag
    ) {
        super(floor, "SetFilter");
        this.filter = filter;
        this.enabled = enabled;
        this.intensity = intensity;
        this.disableOthers = disableOthers;
        this.angleOffset = angleOffset;
        this.eventTag = eventTag;
    }

    /**
     * Type of filter.  
     */
    filter = "Grayscale";

    /**
     * Whether enable or disable the filter.
     */
    enabled = true;

    /**
     * Intensity of the filter.
     */
    intensity = 100;

    /**
     * Disable other filters when this event occurs.
     */
    disableOthers = false;

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = "";
}