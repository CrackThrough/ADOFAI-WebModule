import ActionValue from "../ActionValue.js";

/**
 * Class for storing values of ShakeScreen action.
 */
class MapEvent_ShakeScreen extends ActionValue {
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
    eventTag = String();

    /**
     * Create a ShakeScreen event using these parameters.
     * @param {Number} duration Duration of this action.
     * @param {Number} strength Strength of the shake.
     * @param {Number} intensity Intensity of the shake.
     * @param {boolean} fadeOut Whether to fade out the shake effect (<-- true) or just cut it plain (<-- false).
     * @param {Number} angleOffset Angle offset of the event.
     * @param {String} eventTag A tag of the event.
     */
    constructor(duration, strength, intensity, fadeOut, angleOffset, eventTag) {
        super();
        this.duration = duration ?? this.duration;
        this.strength = strength ?? this.strength;
        this.intensity = intensity ?? this.intensity;
        this.fadeOut = fadeOut ?? this.fadeOut;
        this.angleOffset = angleOffset ?? this.angleOffset;
        this.eventTag = eventTag ?? this.eventTag;
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
        return `, "duration": ${JSON.stringify(
            params[0] ?? this.duration
        )}, "strength": ${JSON.stringify(
            params[1] ?? this.strength
        )}, "intensity": ${JSON.stringify(
            params[2] ?? this.intensity
        )}, "fadeOut": ${JSON.stringify(
            (params[3] ?? this.fadeOut) ? "Enabled" : "Disabled"
        )}, "angleOffset": ${JSON.stringify(
            params[4] ?? this.angleOffset
        )}, "eventTag": ${JSON.stringify(
            params[5] ?? this.eventTag
        )}`;
    }
}

export default MapEvent_ShakeScreen;
