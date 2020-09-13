import ActionEventType from "./../ActionEventType.js";

/**
 * Class for storing values of RepeatEvents action.
 */
class MapEvent_RepeatEvents extends ActionEventType {
  /**
   * Create a RepeatEvents event using these parameters.
   * @param {Number} repetitions Repetitions (Repeating count) of the events.
   * @param {Number} interval Interval of each events.
   * @param {String} tag Tag of the events.
   */
  constructor(repetitions, interval, tag) {
    super();
    this.repetitions = repetitions == null ? this.repetitions : repetitions;
    this.interval = interval == null ? this.interval : interval;
    this.tag = tag == null ? this.tag : tag;
  }

  /**
   * Repetitions (Repeating count) of the events.
   */
  repetitions = 1;

  /**
   * Interval of each events.
   */
  interval = 1;

  /**
   * Tag of the events.
   */
  tag = new String();

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "repetitions": ${JSON.stringify(
      params[0] == null ? this.repetitions : params[0]
    )}, "interval": ${JSON.stringify(
      params[1] == null ? this.interval : params[1]
    )}, "tag": ${JSON.stringify(params[2] == null ? this.tag : params[2])}`;
  }
}

export default MapEvent_RepeatEvents;
