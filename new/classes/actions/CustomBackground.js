import Action from "../action.js";
import Color from "../color.js";

/**
 * Class for storing values of CustomBackground action.
 */
export default class extends Action {
    /**
     * Create a CustomBackground event using these parameters.
     * @param {number} floor
     * @param {Color} color Color of the background (without image).
     * @param {string} bgImage Location of the image file relative to the map file.
     * @param {Color} imageColor Color of the background (with image).
     * @param {Position} parallax Parallax of the image.
     * @param {BGDisplayMode} bgDisplayMode
     * @param {TextBoolean} lockRot Whether lock rotation of an image or not.
     * @param {TextBoolean} loopBG Whether looping a background image or not.
     * @param {number} unscaledSize Size of an image when unscaled.
     * @param {number} angleOffset Angle offset of the event.
     * @param {string} eventTag A tag of the event.
     */
    constructor(
        floor,
        color,
        bgImage,
        imageColor,
        parallax,
        bgDisplayMode,
        lockRot,
        loopBG,
        unscaledSize,
        angleOffset,
        eventTag
    ) {
        super(floor, "CustomBackground");
        this.color = color;
        this.bgImage = bgImage;
        this.imageColor = imageColor;
        this.parallax = parallax;
        this.bgDisplayMode = bgDisplayMode;
        this.lockRot = lockRot;
        this.loopBG = loopBG;
        this.unscaledSize = unscaledSize;
        this.angleOffset = angleOffset;
        this.eventTag = eventTag;
    }

    /**
     * Color of the background (without image). The Color class is in `color.js`.
     */
    color = new Color();

    /**
     * Location of the image file relative to the map file.
     */
    bgImage = "";

    /**
     * Color of the background (with image). The Color class is in `color.js`.
     */
    imageColor = new Color();

    /**
     * Parallax of the image.
     */
    parallax = [0, 0];

    /**
     *
     */
    bgDisplayMode = "FitToScreen";

    /**
     * Whether lock rotation of an image or not.
     */
    lockRot = false;

    /**
     * Whether looping a background image or not.
     */
    loopBG = false;

    /**
     * Size of an image when unscaled.
     */
    unscaledSize = 100;

    /**
     * Angle offset of the event.
     */
    angleOffset = 0;

    /**
     * A tag of the event.
     */
    eventTag = "";
}
