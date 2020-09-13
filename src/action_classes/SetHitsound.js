import ActionEventType from "./../ActionEventType.js";
import HITSOUNDS from "../data_types/hitsound.js";

/**
 * Class for storing values of SetHitsound action.
 *
 * DO NOT MANUALLY USE STRING IN `hitsound` PARAMETER.
 */
class MapEvent_SetHitsound extends ActionEventType {
  /**
   * Create a SetHitsound event using these parameters.
   * @param {String} hitsound Type of hitsound. Please use enum instead of manually typing the string. Enum is saved at `hitsound.js`.
   * @param {Number} hitsoundVolume Volume of hitsound.
   */
  constructor(hitsound, hitsoundVolume) {
    super();
    this.hitsound = hitsound == null ? this.hitsound : hitsound;
    this.hitsoundVolume =
      hitsoundVolume == null ? this.hitsoundVolume : hitsoundVolume;
  }

  /**
   * Type of hitsound. Please use enum instead of manually typing the string. Enum is saved at `hitsound.js`.
   */
  hitsound = HITSOUNDS.KICK;

  /**
   * Volume of hitsound.
   */
  hitsoundVolume = 1;

  /**
   * Returns a json part of this event.
   */
  asJsonPart() {
    return `, "hitsound": "${this.hitsound}", "hitsoundVolume": ${this.hitsoundVolume}`;
  }
}

export default MapEvent_SetHitsound;
