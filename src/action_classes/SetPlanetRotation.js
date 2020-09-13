import ActionEventType from "../ActionEventType.js";
import EASE from "../data_types/ease.js";

/**
 * Class for storing values of SetPlanetRotation action.
 *
 * DO NOT MANUALLY USE STRING IN `ease` PARAMETER.
 */
class MapEvent_SetPlanetRotation extends ActionEventType {
  /**
   * Create a SetPlanetRotation event using these parameters.
   * @param {String} ease Please use enum instead of manually typing the string. Enum is saved at `ease.js`.
   * @param {Number} easeParts Planet's easing part.
   */
  constructor(ease, easeParts) {
    super();
    this.ease = ease == null ? this.ease : ease;
    this.easeParts = easeParts == null ? this.easeParts : easeParts;
  }

  /**
   * Please use enum instead of manually typing the string. Enum is saved at `ease.js`.
   */
  ease = EASE.LINEAR;

  /**
   * Planet's easing part.
   */
  easeParts = 1;

  /**
   * Returns a json part of this event.
   */
  asJsonPart() {
    return `, "ease": "${this.ease}", "easeParts": ${this.easeParts}`;
  }
}

export default MapEvent_SetPlanetRotation;
