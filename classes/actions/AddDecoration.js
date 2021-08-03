import Action from "../action.js";
import Color from "../color.js";

/**
 * Class for storing values of AddDecoration action.
 */
export default class extends Action {
    /**
     * Create a AddDecoration event using these parameters.
     * @param {number} floor Floor number
     * @param {string} decorationImage Image file location relative to map file.
     * @param {Position} position Position of the decoration.
     * @param {DecoRelativeTo} relativeTo Decoration's relativity
     * @param {Position} pivotOffset Pivot offset of the decoration.
     * @param {number} rotation Rotation for the decoration.
     * @param {number} scale Scale of the decoration.
     * @param {Color} color Color of the decoration.
     * @param {number} depth Depth of the decoration. (Similar to z-order.)
     * @param {string} tag A tag of the decoration.
     */
    constructor(
        floor,
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
        super(floor, "AddDecoration");
        this.decorationImage = decorationImage;
        this.position = position;
        this.relativeTo = relativeTo;
        this.pivotOffset = pivotOffset;
        this.rotation = rotation;
        this.scale = scale;
        this.color = color;
        this.depth = depth;
        this.tag = tag;
    }

    /**
     * Image file location relative to map file.
     */
    decorationImage = "";

    /**
     * Position of the decoration.
     */
    position = [0, 0];

    /**
     * 
     */
    relativeTo = "Tile";

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
    color = new Color();

    /**
     * Depth of the decoration. (Similar to z-order.)
     */
    depth = 0;

    /**
     * A tag of the decoration.
     */
    tag = "";
}