import Action from "../action.js";

/**
 * Class for storing values of ShakeScreen action.
 */
export default class extends Action {
    /**
     * Create a ShakeScreen event using these parameters.
     * @param {number} floor
     * @param {number} duration Duration of this action.
     * @param {number} strength Strength of the shake.
     * @param {number} intensity Intensity of the shake.
     * @param {TextBoolean} fadeOut Whether to fade out the shake effect (<-- true) or just cut it plain (<-- false).
     * @param {number} angleOffset Angle offset of the event.
     * @param {string} eventTag A tag of the event.
     */
    constructor(
        floor,
        duration,
        strength,
        intensity,
        fadeOut,
        angleOffset,
        eventTag
    ) {
        super(floor, "ShakeScreen");
        this.duration = duration;
        this.strength = strength;
        this.intensity = intensity;
        this.fadeOut = fadeOut;
        this.angleOffset = angleOffset;
        this.eventTag = eventTag;
    }

    /**
     * Duration of this action.
     */
    duration = 1;

    /**
     * Strength of the shake.
     */
    strength = 100;

    /**
     * Intensity of the shake.
     */
    intensity = 100;

    /**
     * Whether to fade out the shake effect (<-- true) or just cut it plain (<-- false).
     */
    fadeOut = true;

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = "";
}
