import ActionValue from "../ActionValue.js";
import EASE from "../data_types/ease.js";
import RELATIVE_TO from "../data_types/relativeto.js";

/**
 * Class for storing values of MoveCamera action.
 *
 * DO NOT MANUALLY USE STRING IN `relativeTo`, `ease` PROPERTY.
 */
class MapEvent_MoveCamera extends ActionValue {
    /**
     * Duration of the camera movement.
     */
    duration = 1;

    /**
     * Please use enum instead of manually typing the string. Enum's filename is `relativeto.js`.
     */
    relativeTo = RELATIVE_TO.PLAYER;

    /**
     * Position of the camera's destination.
     */
    position = [0, 0];

    /**
     * Rotation of the camera's destination.
     */
    rotation = 0;

    /**
     * Zoom of the camera's destination.
     */
    zoom = 160;

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * Please use enum instead of manually typing the string. Enum's filename is `ease.js`.
     */
    ease = EASE.LINEAR;

    /**
     * A tag of the event.
     */
    eventTag = String();

    /**
     * Create a MoveCamera event using these parameters.
     * @param {Number} duration Duration of the camera movement.
     * @param {String} relativeTo Please use enum instead of manually typing the string. Enum's filename is `relativeto.js`.
     * @param {[Number, Number]} position Position of the camera's destination.
     * @param {Number} rotation Rotation of the camera's destination.
     * @param {Number} zoom Zoom of the camera's destination.
     * @param {Number} angleOffset Angle offset of the event.
     * @param {String} ease Please use enum instead of manually typing the string. Enum's filename is `ease.js`.
     * @param {String} eventTag A tag of the event.
     */
    constructor(
        duration,
        relativeTo,
        position,
        rotation,
        zoom,
        angleOffset,
        ease,
        eventTag
    ) {
        super();
        this.duration = duration ?? this.duration;
        this.relativeTo = relativeTo ?? this.relativeTo;
        this.position = position ?? this.position;
        this.rotation = rotation ?? this.rotation;
        this.zoom = zoom ?? this.zoom;
        this.angleOffset = angleOffset ?? this.angleOffset;
        this.ease = ease ?? this.ease;
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
        )}, "relativeTo": ${JSON.stringify(
            params[1] ?? this.relativeTo
        )}, "position": [${JSON.stringify(
            (params[2] ?? this.position)[0]
        )}, ${JSON.stringify(
            (params[2] ?? this.position)[1]
        )}], "rotation": ${JSON.stringify(
            params[3] ?? this.rotation
        )}, "zoom": ${JSON.stringify(
            params[4] ?? this.zoom
        )}, "angleOffset": ${JSON.stringify(
            params[5] ?? this.angleOffset
        )}, "ease": ${JSON.stringify(
            params[6] ?? this.ease
        )}, "eventTag": ${JSON.stringify(
            params[7] ?? this.eventTag
        )}`;
    }
}

export default MapEvent_MoveCamera;
