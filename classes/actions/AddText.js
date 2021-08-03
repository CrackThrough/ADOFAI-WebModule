import Action from "../action.js";
import Color from "../color.js"


/**
 * Class for storing values of AddText action.
 */
export default class extends Action {
    /**
     * Create a AddText event using these parameters.
     * @param {number} floor
     * @param {string} decText Content of the text.
     * @param {Font} font Font of the text.
     * @param {Position} position Position of the text.
     * @param {DecoRelativeTo} relativeTo Text's relativity.
     * @param {Position} pivotOffset Pivot offset of the text.
     * @param {number} rotation Rotation for the text.
     * @param {number} scale Scale of the text.
     * @param {Color} color Color of the text.
     * @param {number} depth Depth of the text. (Similar to z-order.)
     * @param {string} tag A tag of the text.
     */
    constructor(
        floor,
        decText,
        font,
        position,
        relativeTo,
        pivotOffset,
        rotation,
        scale,
        color,
        depth,
        tag
    ) {
        super(floor, "AddText");
        this.decText = decText;
        this.font = font;
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
     * Content of the text.
     */
    decText = "";

    /**
     *  Enum's file name is `font.js`.
     */
    font = "Default";

    /**
     * Position of the text.
     */
    position = [0, 0];

    /**
     * 
     */
    relativeTo = "Tile";

    /**
     * Pivot offset of the text.
     */
    pivotOffset = [0, 0];

    /**
     * Rotation for the text.
     */
    rotation = 0;

    /**
     * Scale of the text.
     */
    scale = 100;

    /**
     * Color of the text
     */
    color = new Color();

    /**
     * Depth of the text. (Similar to z-order.)
     */
    depth = 0;

    /**
     * A tag of the text.
     */
    tag = "";
}