import ActionValue from "../ActionValue.js";

/**
 * Class for storing values of ScreenScroll action.
 */
class MapEvent_ScreenScroll extends ActionValue {
  /**
   * Position of the text.
   */
  scroll = [0, 0];
  /**
   * Angle offset of the event.
   */
  angleOffset = 0;
  /**
   * A tag of the event.
   */
  eventTag = String();

  /**
   * Create a ScreenScroll event using these parameters.
   * @param {[Number, Number]} scroll Speed of the scroll.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    scroll,
    angleOffset,
    eventTag
  ) {
    super();
    this.scroll = Scroll ?? this.scroll;
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
    return `, "scroll": [${JSON.stringify(
      (params[0] ?? this.scroll)[0]
    )}, ${JSON.stringify(
      (params[0] ?? this.scroll)[1]
    )}], "angleOffset": ${JSON.stringify(
      params[1] ?? this.angleOffset
    )}, "eventTag": ${JSON.stringify(
      params[2] ?? this.eventTag
    )}`;
  }
}

export default MapEvent_ScreenScroll;
