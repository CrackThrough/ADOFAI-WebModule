import ActionEventType from "./../ActionEventType.js";

/**
 * Class for storing values of Twirl action.
 */
class MapEvent_Twirl extends ActionEventType {
  /**
   * Create a Twirl event using these parameters.
   * @param {Boolean} DoubleTwirled Whether to twirl it twice so planet does not actually get twirled but the tile has twirl icon.
   */
  constructor(DoubleTwirled) {
    super();
    this.DoubleTwirled =
      DoubleTwirled == null ? this.DoubleTwirled : DoubleTwirled;
  }

  /**
   * Whether to twirl it twice so planet does not actually get twirled but the tile has twirl icon.
   */
  DoubleTwirled = false;

  /**
   * Returns a json part of this event.
   *
   * USING THIS METHOD HERE WILL THROW AN ERROR.
   */
  asJsonPart() {
    throw new Error("Cannot use asJsonPart method on Twirl action.");
  }
}

export default MapEvent_Twirl;
