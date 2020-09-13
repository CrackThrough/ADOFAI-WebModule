import ActionEventType from "../ActionEventType.js";
import DECO_RELATIVE_TO from "../data_types/deco_relativeto.js";

/**
 * Class for storing values of AddDecoration action.
 *
 * DO NOT MANUALLY USE STRING IN `relativeTo` PARAMETER.
 */
class MapEvent_AddDecoration extends ActionEventType {
  /**
   * Create a AddDecoration event using these parameters.
   * @param {String} decorationImage Image file location relative to map file.
   * @param {[Number, Number]} position Position of the decoration.
   * @param {String} relativeTo Please use enum instead of manually typing the string. Enum's filename is `deco_relativeto.js`.
   * @param {[Number, Number]} pivotOffset Pivot offset of the decoration.
   * @param {Number} rotation Rotation for the decoration.
   * @param {Number} scale Scale of the decoration.
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
    depth,
    tag
  ) {
    super();
    this.decorationImage =
      decorationImage == null ? this.decorationImage : decorationImage;
    this.position = position == null ? this.position : position;
    this.relativeTo = relativeTo == null ? this.relativeTo : relativeTo;
    this.pivotOffset = pivotOffset == null ? this.pivotOffset : pivotOffset;
    this.rotation = rotation == null ? this.rotation : rotation;
    this.scale = scale == null ? this.scale : scale;
    this.depth = depth == null ? this.depth : depth;
    this.tag = tag == null ? this.tag : tag;
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
  scale = 1;

  /**
   * Depth of the decoration. (Similar to z-order.)
   */
  depth = 0;

  /**
   * A tag of the decoration.
   */
  tag = "";

  /**
   * Returns a json part of this event.
   */
  asJsonPart() {
    return `, "decorationImage": "${this.decorationImage}", "position": [${
      this.position[0]
    }, ${this.position[1]}], "relativeTo": "${
      this.relativeTo
    }", "pivotOffset": [${this.pivotOffset[0]}, ${
      this.pivotOffset[1]
    }], "rotation": ${this.rotation}, "scale": ${this.scale * 100}, "depth": ${
      this.depth
    }, "tag": "${this.tag}"`;
  }
}

export default MapEvent_AddDecoration;
