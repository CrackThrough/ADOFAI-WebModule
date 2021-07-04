import ActionValue from "../ActionValue.js";
import Color from "../data_types/color.js";
import BG_DISPLAY_MODE from "../data_types/bgdisplaymode.js";

/**
 * Class for storing values of CustomBackground action.
 *
 * DO NOT MANUALLY USE STRING IN `bgDisplayMode` PROPERTY.
 */
class MapEvent_CustomBackground extends ActionValue {
    /**
     * Color of the background (without image). The Color class is in `color.js`.
     */
    color = new Color(undefined);

    /**
     * Location of the image file relative to the map file.
     */
    bgImage = String();

    /**
     * Color of the background (with image). The Color class is in `color.js`.
     */
    imageColor = new Color(undefined);

    /**
     * Parallax of the image.
     */
    parallax = [0, 0];

    /**
     * Please use enum instead of manually typing the string. Enum's filename is `bgdisplaymode.js`.
     */
    bgDisplayMode = BG_DISPLAY_MODE.FIT_TO_SCREEN;

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
    eventTag = String();

    /**
     * Create a CustomBackground event using these parameters.
     * @param {Color} color Color of the background (without image). The Color class is in `color.js`.
     * @param {String} bgImage Location of the image file relative to the map file.
     * @param {Color} imageColor Color of the background (with image). The Color class is in `color.js`.
     * @param {[Number, Number]} parallax Parallax of the image.
     * @param {String} bgDisplayMode Please use enum instead of manually typing the string. Enum's filename is `bgdisplaymode.js`.
     * @param {Boolean} lockRot Whether lock rotation of an image or not.
     * @param {Boolean} loopBG Whether looping a background image or not.
     * @param {Number} unscaledSize Size of an image when unscaled.
     * @param {Number} angleOffset Angle offset of the event.
     * @param {String} eventTag A tag of the event.
     */
    constructor(
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
        super();
        this.color = color ?? this.color;
        this.bgImage = bgImage ?? this.bgImage;
        this.imageColor = imageColor ?? this.imageColor;
        this.parallax = parallax ?? this.parallax;
        this.bgDisplayMode = bgDisplayMode ?? this.bgDisplayMode;
        this.lockRot = lockRot ?? this.lockRot;
        this.loopBG = loopBG ?? this.loopBG;
        this.unscaledSize = unscaledSize ?? this.unscaledSize;
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
        return `, "color": ${JSON.stringify(
            (params[0] ?? this.color).toString()
        )}, "bgImage": ${JSON.stringify(
            params[1] ?? this.bgImage
        )}, "imageColor": ${JSON.stringify(
            (params[2] ?? this.imageColor).toString()
        )}, "parallax": [${JSON.stringify(
            (params[3] ?? this.parallax)[0]
        )}, ${JSON.stringify(
            (params[3] ?? this.parallax)[1]
        )}], "bgDisplayMode": ${JSON.stringify(
            params[4] ?? this.bgDisplayMode
        )}, "lockRot": ${JSON.stringify(
            (params[5] ?? this.lockRot) ? "Enabled" : "Disabled"
        )}, "loopBG": ${JSON.stringify(
            (params[6] ?? this.loopBG) ? "Enabled" : "Disabled"
        )}, "unscaledSize": ${JSON.stringify(
            params[7] ?? this.unscaledSize
        )}, "angleOffset": ${JSON.stringify(
            params[8] ?? this.angleOffset
        )}, "eventTag": ${JSON.stringify(
            params[9] ?? this.eventTag
        )}`;
    }
}

export default MapEvent_CustomBackground;
