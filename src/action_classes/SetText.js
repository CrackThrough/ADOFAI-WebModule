import ActionValue from "../ActionValue.js";

/**
 * Class for storing values of SetText action.
 */
class MapEvent_SetText extends ActionValue {
  /**
   * Image file location relative to map file.
   */
  decText = "";
  /**
   * A tag of the text.
   */
  tag = "";
  /**
   * Angle offset of the event.
   */
  angleOffset = 0;
  /**
   * A tag of the event.
   */
  eventTag = String();

  /**
   * Create a SetText event using these parameters.
   * @param {String} decText Image file location relative to map file.
   * @param {String} tag A tag of the text.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    decText,
    tag,
    angleOffset,
    eventTag
  ) {
    super();
    this.decText = decText ?? this.decText;
    this.tag = tag ?? this.tag;
    this.angleOffset = angleOffset ?? this.angleOffset;
    this.eventTag = eventTag ?? this.eventTag;
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
    )}, "tag": ${JSON.stringify(
      params[1] ?? this.tag
    )}, "angleOffset": ${JSON.stringify(
      params[2] ?? this.angleOffset
    )}, "eventTag": ${JSON.stringify(
      params[3] ?? this.eventTag
    )}`;
  }
}

export default MapEvent_SetText;
