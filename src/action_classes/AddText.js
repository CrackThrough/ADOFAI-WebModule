import ActionValue from "../ActionValue.js";
import DECO_RELATIVE_TO from "../data_types/deco_relativeto.js";
import Color from "../data_types/color";
import FONT from "../data_types/font";

/**
 * Class for storing values of AddText action.
 *
 * DO NOT MANUALLY USE STRING IN `relativeTo` PROPERTY.
 */
class MapEvent_AddText extends ActionValue {
  /**
   * Image file location relative to map file.
   */
  decText = "";
  /**
   * Please use enum instead of manually typing the string. Enum's file name is `font.js`.
   */
  font = FONT.DEFAULT;
  /**
   * Position of the text.
   */
  position = [0, 0];
  /**
   * Please use enum instead of manually typing the string. Enum's filename is `deco_relativeto.js`.
   */
  relativeTo = DECO_RELATIVE_TO.TILE;
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

  /**
   * Create a AddText event using these parameters.
   * @param {String} decText Image file location relative to map file.
   * @param {String} font Please use enum instead of manually typing the string. Enum's file name is `font.js`.
   * @param {[Number, Number]} position Position of the text.
   * @param {String} relativeTo Please use enum instead of manually typing the string. Enum's filename is `deco_relativeto.js`.
   * @param {[Number, Number]} pivotOffset Pivot offset of the text.
   * @param {Number} rotation Rotation for the text.
   * @param {Number} scale Scale of the text.
   * @param {Color} color Color of the text.
   * @param {Number} depth Depth of the text. (Similar to z-order.)
   * @param {String} tag A tag of the text.
   */
  constructor(
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
    super();
    this.decText = decText ?? this.decText;
    this.font = font ?? this.font;
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
    var res = new this();
    Object.keys(obj).forEach((key) => {
      res[key] = obj[key];
    });
    return res;
  }

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "decText": ${JSON.stringify(
      params[0] ?? this.decText
    )}, "font": [${JSON.stringify(
      (params[1] ?? this.font)[0]
    )}, "position": [${JSON.stringify(
      (params[2] ?? this.position)[0]
    )}, ${JSON.stringify(
      (params[2] ?? this.position)[1]
    )}], "relativeTo": ${JSON.stringify(
      params[3] ?? this.relativeTo
    )}, "pivotOffset": [${JSON.stringify(
      (params[4] ?? this.pivotOffset)[0]
    )}, ${JSON.stringify(
      (params[4] ?? this.pivotOffset)[1]
    )}], "rotation": ${JSON.stringify(
      params[5] ?? this.rotation
    )}, "scale": ${JSON.stringify(
      params[6] ?? this.scale
    )}, "color": ${JSON.stringify(
      (params[7] ?? this.color).toString()
    )}, "depth": ${JSON.stringify(
      params[8] ?? this.depth
    )}, "tag": ${JSON.stringify(
      params[9] ?? this.tag
    )}`;
  }
}

export default MapEvent_AddText;
