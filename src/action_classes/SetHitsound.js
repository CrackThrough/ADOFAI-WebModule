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
  asJsonPart(...params) {
    return `, "hitsound": ${JSON.stringify(
      params[0] == null ? this.hitsound : params[0]
    )}, "hitsoundVolume": ${JSON.stringify(
      (params[1] == null ? this.hitsoundVolume : params[1]) * 100
    )}`;
  }
}

export default MapEvent_SetHitsound;
