import Action from "../action.js";
import Color from "../color.js";

/**
 * Class for storing values of MoveDecoration action.
 */
export default class extends Action {
    /**
     * Create a MoveDecoration event using these parameters.
     * @param {number} floor
     * @param {number} duration Duration of decoration movement.
     * @param {string} tag Tag of the decoration.
     * @param {Position} positionOffset Decoration's destinated position.
     * @param {number} rotationOffset Decoration's destinated rotation.
     * @param {number} scale Scale of the decoration.
     * @param {Color} color Color of the decoration.
     * @param {number} angleOffset Angle offset of the event.
     * @param {Ease} ease
     * @param {string} eventTag A tag of the event.
     */
    constructor(
        floor,
        duration,
        tag,
        positionOffset,
        rotationOffset,
        scale,
        color,
        angleOffset,
        ease,
        eventTag
    ) {
        super(floor, "MoveDecoration");
        this.duration = duration;
        this.tag = tag;
        this.positionOffset = positionOffset;
        this.rotationOffset = rotationOffset;
        this.scale = scale;
        this.color = color;
        this.angleOffset = angleOffset;
        this.ease = ease;
        this.eventTag = eventTag;
    }

    /**
     * Duration of decoration movement.
     */
    duration = 1;

    /**
     * Tag of the decoration.
     */
    tag = "";

    /**
     * Decoration's destinated position.
     */
    positionOffset = [0, 0];

    /**
     * Decoration's destinated rotation.
     */
    rotationOffset = 0;

    /**
     * Scale of the decoration.
     */
    scale = 100;

    /**
     * Color of the decoration
     */
    color = new Color();

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
