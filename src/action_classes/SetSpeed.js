import ActionEventType from "./../ActionEventType.js";

/**
 * Class for storing values of SetSpeed action.
 */
class MapEvent_SetSpeed extends ActionEventType {
  /**
   * Create a SetSpeed event using these parameters.
   * @param {Boolean | String} isSpeedTypeBPM Whether to use speed type as BPM or BPM Multiplication.
   * @param {Number} BPM BPM to change as.
   * @param {Number} BPM_Multiplier BPM to multiply with previous BPM (Not BPM in this class).
   */
  constructor(isSpeedTypeBPM, BPM, BPM_Multiplier) {
    super();
    this.isSpeedTypeBPM =
      isSpeedTypeBPM == null ? this.isSpeedTypeBPM : (typeof isSpeedTypeBPM == 'string' ? (isSpeedTypeBPM == 'Bpm') : isSpeedTypeBPM);
    this.BPM = BPM == null ? this.BPM : BPM;
    this.BPM_Multiplier =
      BPM_Multiplier == null ? this.BPM_Multiplier : BPM_Multiplier;
  }

  /**
   * Whether to use speed type as BPM or BPM Multiplication. (Always boolean)
   */
  isSpeedTypeBPM = true;

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
}

export default MapEvent_SetSpeed;
