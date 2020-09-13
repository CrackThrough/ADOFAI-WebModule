import ActionEventType from "./../ActionEventType.js";

/**
 * Class for storing values of SetConditionalEvents action.
 */
class MapEvent_SetConditionalEvents extends ActionEventType {
  /**
   * Create a SetConditionalEvents event using these parameters.
   * @param {String} perfectTag Event to execute with certain tag when input judgement is "Perfect".
   * @param {String} hitTag Event to execute with certain tag when input judgement is "EPerfect" / "LPerfect".
   * @param {String} barelyTag Event to execute with certain tag when input judgement is "Early!" / "Late!".
   * @param {String} missTag Event to execute with certain tag when input judgement is "Early!!" / "Late!!".
   * @param {String} lossTagEvent Event to execute with certain tag when player is "Dead".
   */
  constructor(perfectTag, hitTag, barelyTag, missTag, lossTag) {
    super();
    this.perfectTag = perfectTag == null ? this.perfectTag : perfectTag;
    this.hitTag = hitTag == null ? this.hitTag : hitTag;
    this.barelyTag = barelyTag == null ? this.barelyTag : barelyTag;
    this.missTag = missTag == null ? this.missTag : missTag;
    this.lossTag = lossTag == null ? this.lossTag : lossTag;
  }

  /**
   * Event to execute with certain tag when input judgement is "Perfect".
   */
  perfectTag = new String();

  /**
   * Event to execute with certain tag when input judgement is "EPerfect" / "LPerfect".
   */
  hitTag = new String();

  /**
   * Event to execute with certain tag when input judgement is "Early!" / "Late!".
   */
  barelyTag = new String();

  /**
   * Event to execute with certain tag when input judgement is "Early!!" / "Late!!".
   */
  missTag = new String();

  /**
   * Event to execute with certain tag when player is "Dead".
   */
  lossTag = new String();

  /**
   * Returns a json part of this event.
   */
  asJsonPart() {
    return `, "perfectTag": "${this.perfectTag}", "hitTag": "${this.hitTag}", "barelyTag": "${this.lossTag}", "missTag": "${this.missTag}", "lossTag": "${this.lossTag}"`;
  }
}

export default MapEvent_SetConditionalEvents;
