import ActionValue from "../ActionValue.js";
import Color from "../data_types/color.js";
import PLANE from "../data_types/plane.js";

/**
 * Class for storing values of Flash action.
 */
class MapEvent_Flash extends ActionValue {
    /**
     * Duration of flash effect.
     */
    duration = 1;

    /**
     * 
     */
    plane = PLANE.BACKGROUND;

    /**
     * Color of the flash when the effect starts.
     */
    startColor = new Color(undefined);

    /**
     * Opacity of the flash when the effect starts.
     */
    startOpacity = 100;

    /**
     * Color of the flash when the effect ends.
     */
    endColor = new Color(undefined);

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
    eventTag = String();

    /**
     * Create a Flash event using these parameters.
     * @param {Number} duration Duration of flash effect.
     * @param {String} plane 
     * @param {Color} startColor Color of the flash when the effect starts.
     * @param {Number} startOpacity Opacity of the flash when the effect starts.
     * @param {Color} endColor Color of the flash when the effect ends.
     * @param {Number} endOpacity Opacity of the flash when the effect ends.
     * @param {Number} angleOffset Angle offset of the event.
     * @param {String} eventTag A tag of the event.
     */
    constructor(
        duration,
        plane,
        startColor,
        startOpacity,
        endColor,
        endOpacity,
        angleOffset,
        eventTag
    ) {
        super();
        this.duration = duration ?? this.duration;
        this.plane = plane ?? this.plane;
        this.startColor = startColor ?? this.startColor;
        this.startOpacity = startOpacity ?? this.startOpacity;
        this.endColor = endColor ?? this.endColor;
        this.endOpacity = endOpacity ?? this.endOpacity;
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
        )}, "plane": ${JSON.stringify(
            params[1] ?? this.plane
        )}, "startColor": ${JSON.stringify(
            (params[2] ?? this.startColor).toString()
        )}, "startOpacity": ${JSON.stringify(
            params[3] ?? this.startOpacity
        )}, "endColor": ${JSON.stringify(
            (params[4] ?? this.endColor).toString()
        )}, "endOpacity": ${JSON.stringify(
            params[5] ?? this.endOpacity
        )}, "angleOffset": ${JSON.stringify(
            params[6] ?? this.angleOffset
        )}, "eventTag": ${JSON.stringify(
            params[7] ?? this.eventTag
        )}`;
    }
}

export default MapEvent_Flash;
