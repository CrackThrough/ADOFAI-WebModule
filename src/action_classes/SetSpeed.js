import ActionEventType from "./../ActionEventType.js";

/**
 * Class for storing values of SetSpeed action.
 */
class MapEvent_SetSpeed extends ActionEventType {
  /**
   * Create a SetSpeed event using these parameters.
   * @param {Boolean} isSpeedTypeBPM Whether to use speed type as BPM or BPM Multiplication.
   * @param {Number} BPM BPM to change as.
   * @param {Number} BPM_Multiplier BPM to multiply with previous BPM (Not BPM in this class).
   */
  constructor(isSpeedTypeBPM, BPM, BPM_Multiplier) {
    super();
    this.isSpeedTypeBPM =
      isSpeedTypeBPM == null ? this.isSpeedTypeBPM : isSpeedTypeBPM;
    this.BPM = BPM == null ? this.BPM : BPM;
    this.BPM_Multiplier =
      BPM_Multiplier == null ? this.BPM_Multiplier : BPM_Multiplier;
  }

  /**
   * Whether to use speed type as BPM or BPM Multiplication.
   */
  isSpeedTypeBPM = true;

  /**
   * BPM to change as.
   */
  BPM = 120;

  /**
   * BPM to multiply with previous BPM (Not BPM in this class).
   */
  BPM_Multiplier = 1;

  /**
   * Returns a json part of this event.
   */
  asJsonPart() {
    return `, "speedType": "${
      this.isSpeedTypeBPM ? "Bpm" : "Multiplier"
    }", "beatsPerMinute": ${this.BPM}, "bpmMultiplier": ${this.BPM_Multiplier}`;
  }
}

export default MapEvent_SetSpeed;
