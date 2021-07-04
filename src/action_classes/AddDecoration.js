import ActionValue from "../ActionValue.js";
import DECO_RELATIVE_TO from "../data_types/deco_relativeto.js";
import Color from "../data_types/color.js";

/**
 * Class for storing values of AddDecoration action.
 *
 * DO NOT MANUALLY USE STRING IN `relativeTo` PROPERTY.
 */
class MapEvent_AddDecoration extends ActionValue {
    /**
     * Image file location relative to map file.
     */
    decorationImage = "";

    /**
     * Position of the decoration.
     */
    position = [0, 0];

    /**
     * Please use enum instead of manually typing the string. Enum's filename is `deco_relativeto.js`.
     */
    relativeTo = DECO_RELATIVE_TO.TILE;

    /**
     * Pivot offset of the decoration.
     */
    pivotOffset = [0, 0];

    /**
     * Rotation for the decoration.
     */
    rotation = 0;

    /**
     * Scale of the decoration.
     */
    scale = 100;

    /**
     * Color of the decoration
     */
    color = new Color(undefined);

    /**
     * Depth of the decoration. (Similar to z-order.)
     */
    depth = 0;

    /**
     * A tag of the decoration.
     */
    tag = "";

    /**
     * Create a AddDecoration event using these parameters.
     * @param {String} decorationImage Image file location relative to map file.
     * @param {[Number, Number]} position Position of the decoration.
     * @param {String} relativeTo Please use enum instead of manually typing the string. Enum's filename is `deco_relativeto.js`.
     * @param {[Number, Number]} pivotOffset Pivot offset of the decoration.
     * @param {Number} rotation Rotation for the decoration.
     * @param {Number} scale Scale of the decoration.
     * @param {Color} color Color of the decoration.
     * @param {Number} depth Depth of the decoration. (Similar to z-order.)
     * @param {String} tag A tag of the decoration.
     */
    constructor(
        decorationImage,
        position,
        relativeTo,
        pivotOffset,
        rotation,
        scale,
        color,
        depth,
        tag
    ) {
        super();
        this.decorationImage = decorationImage ?? this.decorationImage;
        this.position = position ?? this.position;
        this.relativeTo = relativeTo ?? this.relativeTo;
        this.pivotOffset = pivotOffset ?? this.pivotOffset;
        this.rotation = rotation ?? this.rotation;
        this.scale = scale ?? this.scale;
        this.color = color ?? this.color;
        this.depth = depth ?? this.depth;
        this.tag = tag ?? this.tag;
    }

    /**
     * Create value by converting from object
     * @param {Object} obj
     */
    static fromObject(obj) {
        const res = new this();
        Object.keys(obj).forEach((key) => {
            res[key !== "decText" ? key : "decorationImage"] = obj[key];
        });
        return res;
    }

    /**
     * Returns a json part of this event.
     */
    asJsonPart(...params) {
        return `, "decorationImage": ${JSON.stringify(
            params[0] ?? this.decorationImage
        )}, "position": [${JSON.stringify(
            (params[1] ?? this.position)[0]
        )}, ${JSON.stringify(
            (params[1] ?? this.position)[1]
        )}], "relativeTo": ${JSON.stringify(
            params[2] ?? this.relativeTo
        )}, "pivotOffset": [${JSON.stringify(
            (params[3] ?? this.pivotOffset)[0]
        )}, ${JSON.stringify(
            (params[3] ?? this.pivotOffset)[1]
        )}], "rotation": ${JSON.stringify(
            params[4] ?? this.rotation
        )}, "scale": ${JSON.stringify(
            params[5] ?? this.scale
        )}, "color": ${JSON.stringify(
            (params[6] ?? this.color).toString()
        )}, "depth": ${JSON.stringify(
            params[7] ?? this.depth
        )}, "tag": ${JSON.stringify(
            params[8] ?? this.tag
        )}`;
    }
}

export default MapEvent_AddDecoration;
