import ActionEventType from "./../ActionEventType.js";
import FILTER from "../data_types/filter.js";

/**
 * Class for storing values of SetFilter action.
 *
 * DO NOT MANUALLY USE STRING IN `filter` PARAMETER.
 */
class MapEvent_SetFilter extends ActionEventType {
  /**
   * Create a SetFilter event using these parameters.
   * @param {String} filter Type of filter. Please use enum instead of manually typing the string. Enum is saved at `filter.js`.
   * @param {Boolean} enabled Whether enable or disable the filter.
   * @param {Number} intensity Intensity of the filter.
   * @param {Boolean} disableOthers Disable other filters when this event occurs.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    filter,
    enabled,
    intensity,
    disableOthers,
    angleOffset,
    eventTag
  ) {
    super();
    this.filter = filter == null ? this.filter : filter;
    this.enabled = enabled == null ? this.enabled : enabled;
    this.intensity = intensity == null ? this.intensity : intensity;
    this.disableOthers =
      disableOthers == null ? this.disableOthers : disableOthers;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Type of filter. Please use enum instead of manually typing the string. Enum is saved at `filter.js`.
   */
  filter = FILTER.GRAYSCALE;

  /**
   * Whether enable or disable the filter.
   */
  enabled = true;

  /**
   * Intensity of the filter.
   */
  intensity = 1;

  /**
   * Disable other filters when this event occurs.
   */
  disableOthers = false;

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
  asJsonPart() {
    return `, "filter": "${this.filter}", "enabled": "${
      this.enabled ? "Enabled" : "Disabled"
    }", "intensity": ${this.intensity * 100}, "disableOthers": "${
      this.disableOthers ? "Enabled" : "Disabled"
    }", "angleOffset": ${this.angleOffset}, "eventTag": "${this.eventTag}"`;
  }
}

export default MapEvent_SetFilter;
