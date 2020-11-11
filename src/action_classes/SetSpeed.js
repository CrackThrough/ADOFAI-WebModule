import ActionValue from "../ActionValue.js";
import SPEEDTYPE from "../data_types/speedtype.js";

/**
 * Class for storing values of SetSpeed action.
 *
 * DO NOT MANUALLY USE STRING IN `speedType` PROPERTY.
 */
class MapEvent_SetSpeed extends ActionValue {
  /**
   * Create a SetSpeed event using these parameters.
   * @param {String} speedType Please use enum instead of manually typing the string. Enum is saved at `speedtype.js`.
   * @param {Number} BPM BPM to change as.
   * @param {Number} BPM_Multiplier BPM to multiply with previous BPM (Not BPM in this class).
   */
  constructor(speedType, BPM, BPM_Multiplier) {
    super();
    this.speedType = speedType == null ? this.speedType : speedType;
    this.BPM = BPM == null ? this.BPM : BPM;
    this.BPM_Multiplier =
      BPM_Multiplier == null ? this.BPM_Multiplier : BPM_Multiplier;
  }

  /**
   * Please use enum instead of manually typing the string. Enum is saved at `speedtype.js`.
   */
  speedType = SPEEDTYPE.BPM;

  /**
   * BPM to change as.
   */
  BPM = 120;

  /**
   * BPM to multiply with previous BPM (Not this BPM).
   */
  BPM_Multiplier = 1;

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "speedType": ${JSON.stringify(
      (params[0] == null ? this.isSpeedTypeBPM : params[0])
        ? "Bpm"
        : "Multiplier"
    )}, "beatsPerMinute": ${JSON.stringify(
      params[1] == null ? this.BPM : params[1]
    )}, "bpmMultiplier": ${JSON.stringify(
      params[2] == null ? this.BPM_Multiplier : params[2]
    )}`;
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
}

export default MapEvent_SetSpeed;
