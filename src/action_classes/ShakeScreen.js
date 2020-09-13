import ActionEventType from "./../ActionEventType.js";

/**
 * Class for storing values of ShakeScreen action.
 */
class MapEvent_ShakeScreen extends ActionEventType {
  /**
   * Create a ShakeScreen event using these parameters.
   * @param {Number} duration Duration of this action.
   * @param {Number} strength Strength of the shake.
   * @param {Number} intensity Intensity of the shake.
   * @param {Boolean} fadeOut Whether to fade out the shake effect (<-- true) or just cut it plain (<-- false).
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(duration, strength, intensity, fadeOut, angleOffset, eventTag) {
    super();
    this.duration = duration == null ? this.duration : duration;
    this.strength = strength == null ? this.strength : strength;
    this.intensity = intensity == null ? this.intensity : intensity;
    this.fadeOut = fadeOut == null ? this.fadeOut : fadeOut;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Duration of this action.
   */
  duration = 1;

  /**
   * Strength of the shake.
   */
  strength = 1;

  /**
   * Intensity of the shake.
   */
  intensity = 1;

  /**
   * Whether to fade out the shake effect (<-- true) or just cut it plain (<-- false).
   */
  fadeOut = true;

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
    return `, "duration": ${this.duration}, "strength": ${
      this.strength * 100
    }, "intensity": ${this.intensity * 100}, "fadeOut": "${
      this.fadeOut ? "Enabled" : "Disabled"
    }", "angleOffset": ${this.angleOffset}, "eventTag": "${this.eventTag}"`;
  }
}

export default MapEvent_ShakeScreen;
