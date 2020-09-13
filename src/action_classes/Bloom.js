import ActionEventType from "../ActionEventType.js";
import Color from "../data_types/color.js";

/**
 * Class for storing values of Bloom action.
 */
class MapEvent_Bloom extends ActionEventType {
  /**
   * Create a Bloom event using these parameters.
   * @param {Boolean} enabled Enabled / Disabled status of the event.
   * @param {Number} threshold Area (threshold) of the bloom effect.
   * @param {Number} intensity Intensity of the event.
   * @param {Color} color Color of the bloom. The Color class is in `color.js`.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(enabled, threshold, intensity, color, angleOffset, eventTag) {
    super();
    this.enabled = enabled == null ? this.enabled : enabled;
    this.threshold = threshold == null ? this.threshold : threshold;
    this.intensity = intensity == null ? this.intensity : intensity;
    this.color = color == null ? this.color : color;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Enabled / Disabled status of the event.
   */
  enabled = true;

  /**
   * Area (threshold) of the bloom effect.
   */
  threshold = 0.5;

  /**
   * Intensity of the event.
   */
  intensity = 1;

  /**
   * Color of the bloom. The Color class is in `color.js`
   */
  color = new Color();

  /**
   * Angle offset of the event.
   */
  angleOffset = 0;

  /**
   * A tag of the event.
   */
  eventTag = "";

  /**
   * Returns a json part of this event.
   */
  asJsonPart() {
    return `, "enabled": "${
      this.enabled ? "Enabled" : "Disabled"
    }", "threshold": ${this.threshold * 100}, "intensity": ${
      this.intensity * 100
    }, "color": "${this.color.toString()}", "angleOffset": ${
      this.angleOffset
    }, "eventTag": "${this.eventTag}"`;
  }
}

export default MapEvent_Bloom;
