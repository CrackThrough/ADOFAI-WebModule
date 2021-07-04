import ActionValue from "../ActionValue.js";

/**
 * Class for storing values of ScreenTile action.
 */
class MapEvent_ScreenTile extends ActionValue {
  /**
   * Number of tiles to split.
   */
  tile = [0, 0];
  /**
   * Angle offset of the event.
   */
  angleOffset = 0;
  /**
   * A tag of the event.
   */
  eventTag = String();

  /**
   * Create a ScreenTile event using these parameters.
   * @param {[Number, Number]} tile Number of tiles to split.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    tile,
    angleOffset,
    eventTag
  ) {
    super();
    this.tile = tile ?? this.tile;
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
    return `, "tile": [${JSON.stringify(
      (params[0] ?? this.tile)[0]
    )}, ${JSON.stringify(
      (params[0] ?? this.tile)[1]
    )}], "angleOffset": ${JSON.stringify(
      params[1] ?? this.angleOffset
    )}, "eventTag": ${JSON.stringify(
      params[2] ?? this.eventTag
    )}`;
  }
}

export default MapEvent_ScreenTile;
