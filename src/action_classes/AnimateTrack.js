import ActionEventType from "../ActionEventType.js";
import APPEAR_ANIM from "../data_types/trackappearanim.js";
import DISAPPEAR_ANIM from "../data_types/trackdisappearanim.js";

/**
 * Class for storing values of AnimateTrack action.
 *
 * DO NOT MANUALLY USE STRING IN `trackAnimation`, `trackDisappearAnimation` PARAMETER.
 */
class MapEvent_AnimateTrack extends ActionEventType {
  /**
   * Create a AnimateTrack event using these parameters.
   * @param {String} trackAnimation Please use enum instead of manually typing the string. Enum's filename is `trackappearanim.js`.
   * @param {Number} beatsAhead Beats ahead to show track appearing animation.
   * @param {String} trackDisappearAnimation Please use enum instead of manually typing the string. Enum's filename is `trackdisappearanim.js`.
   * @param {Number} beatsBehind Beats behind to show track disappearing animation.
   */
  constructor(
    trackAnimation,
    beatsAhead,
    trackDisappearAnimation,
    beatsBehind
  ) {
    super();
    this.trackAnimation =
      trackAnimation == null ? this.trackAnimation : trackAnimation;
    this.beatsAhead = beatsAhead == null ? this.beatsAhead : beatsAhead;
    this.trackDisappearAnimation =
      trackDisappearAnimation == null
        ? this.trackDisappearAnimation
        : trackDisappearAnimation;
    this.beatsBehind = beatsBehind == null ? this.beatsBehind : beatsBehind;
  }

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `trackappearanim.js`.
   */
  trackAnimation = APPEAR_ANIM.NONE;

  /**
   * Beats ahead to show track appearing animation.
   */
  beatsAhead = 8;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `trackdisappearanim.js`.
   */
  trackDisappearAnimation = DISAPPEAR_ANIM.NONE;

  /**
   * Beats behind to show track disappearing animation.
   */
  beatsBehind = 1;

  /**
   * Returns a json part of this event.
   */
  asJsonPart() {
    return `, "trackAnimation": "${this.trackAnimation}", "beatsAhead": ${this.beatsAhead}, "trackDisappearAnimation": "${this.trackDisappearAnimation}", "beatsBehind": ${this.beatsBehind}`;
  }
}

export default MapEvent_AnimateTrack;
