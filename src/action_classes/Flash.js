import ActionEventType from "../ActionEventType.js";
import Color from "../data_types/color.js";
import PLANE from "../data_types/plane.js";

/**
 * Class for storing values of Flash action.
 *
 * DO NOT MANUALLY USE STRING IN `plane` PARAMETER.
 */
class MapEvent_Flash extends ActionEventType {
  /**
   * Create a Flash event using these parameters.
   * @param {Number} duration Duration of flash effect.
   * @param {String} plane Please use enum instead of manually typing the string. Enum's filename is `plane.js`.
   * @param {Color} startColor Color of the flash when the effect starts.
   * @param {Number} startOpacity Opacity of the flash when the effect starts.
   * @param {Color} endColor Color of the flash when the effect ends.
   * @param {Number} endOpacity Opacity of the flash when the effect ends.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    duration,
    plane,
    startColor,
    startOpacity,
    endColor,
    endOpacity,
    angleOffset,
    eventTag
  ) {
    super();
    this.duration = duration == null ? this.duration : duration;
    this.plane = plane == null ? this.plane : plane;
    this.startColor = startColor == null ? this.startColor : startColor;
    this.startOpacity = startOpacity == null ? this.startOpacity : startOpacity;
    this.endColor = endColor == null ? this.endColor : endColor;
    this.endOpacity = endOpacity == null ? this.endOpacity : endOpacity;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Duration of flash effect.
   */
  duration = 1;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `plane.js`.
   */
  plane = PLANE.BACKGROUND;

  /**
   * Color of the flash when the effect starts.
   */
  startColor = new Color();

  /**
   * Opacity of the flash when the effect starts.
   */
  startOpacity = 1;

  /**
   * Color of the flash when the effect ends.
   */
  endColor = new Color();

  /**
   * Opacity of the flash when the effect ends.
   */
  endOpacity = 0;

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
    return `, "duration": ${this.duration}, "plane": "${
      this.plane
    }", "startColor": "${this.startColor.toString()}", "startOpacity": ${
      this.startOpacity * 100
    }, "endColor": "${this.endColor.toString()}", "endOpacity": ${
      this.endOpacity * 100
    }, "angleOffset": ${this.angleOffset}, "eventTag": "${this.eventTag}"`;
  }
}

export default MapEvent_Flash;
