import Action from "../action.js";

/**
 * Class for storing values of MoveCamera action.
 */
export default class extends Action {
    /**
     * Create a MoveCamera event using these parameters.
     * @param {number} floor
     * @param {number} duration Duration of the camera movement.
     * @param {RelativeTo} relativeTo
     * @param {Position} position Position of the camera's destination.
     * @param {number} rotation Rotation of the camera's destination.
     * @param {number} zoom Zoom of the camera's destination.
     * @param {number} angleOffset Angle offset of the event.
     * @param {Ease} ease
     * @param {string} eventTag A tag of the event.
     */
    constructor(
        floor,
        duration,
        relativeTo,
        position,
        rotation,
        zoom,
        angleOffset,
        ease,
        eventTag
    ) {
        super(floor, "MoveCamera");
        this.duration = duration;
        this.relativeTo = relativeTo;
        this.position = position;
        this.rotation = rotation;
        this.zoom = zoom;
        this.angleOffset = angleOffset;
        this.ease = ease;
        this.eventTag = eventTag;
    }

    /**
     * Duration of the camera movement.
     */
    duration = 1;

    /**
     *
     */
    relativeTo = "Player";

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
     *
     */
    ease = "Linear";

    /**
     * A tag of the event.
     */
    eventTag = "";
}
