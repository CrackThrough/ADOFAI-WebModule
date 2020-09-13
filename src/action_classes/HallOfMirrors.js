import ActionEventType from "../ActionEventType.js";
/**
 * Class for storing values of HallOfMirrors action.
 */
class MapEvent_HallOfMirrors extends ActionEventType {
  /**
   * Create a HallOfMirrors event using these parameters.
   * @param {Boolean} enabled Enabled / Disabled status of the event.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(enabled, angleOffset, eventTag) {
    super();
    this.enabled = enabled == null ? this.enabled : enabled;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.eventTag = eventTag == null ? this.eventTag : enaeventTagbled;
  }

  /**
   * Enabled / Disabled status of the event.
   */
  enabled = true;

  /**
   * Angle offset of the event.
   */
  angleOffset = 0;

  /**
   * A tag of the event.
   */
  eventTag = new String();

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "enabled": ${JSON.stringify(
      (params[0] == null ? this.enabled : params[0]) ? "Enabled" : "Disabled"
    )}, "angleOffset": ${JSON.stringify(
      params[1] == null ? this.angleOffset : params[1]
    )}, "eventTag": ${JSON.stringify(
      params[2] == null ? this.eventTag : params[2]
    )}`;
  }
}

export default MapEvent_HallOfMirrors;
