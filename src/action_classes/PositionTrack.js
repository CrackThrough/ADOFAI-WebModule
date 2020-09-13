import ActionEventType from "./../ActionEventType.js";

/**
 * Class for storing values of PositionTrack action.
 */
class MapEvent_PositionTrack extends ActionEventType {
  /**
   * Create a PositionTrack event using these parameters.
   * @param {[Number, Number]} positionOffset Offset of the tile's position.
   * @param {Boolean} editorOnly Whether apply it for editor only or not.
   */
  constructor(positionOffset, editorOnly) {
    super();
    this.positionOffset =
      positionOffset == null ? this.positionOffset : positionOffset;
    this.editorOnly = editorOnly == null ? this.editorOnly : editorOnly;
  }

  /**
   * Offset of the tile's position.
   */
  positionOffset = [0, 0];

  /**
   * Whether apply it for editor only or not.
   */
  editorOnly = false;

  /**
   * Returns a json part of this event.
   */
  asJsonPart(...params) {
    return `, "positionOffset": [${JSON.stringify(
      (params[0] == null ? this.positionOffset : params[0])[0]
    )}, ${JSON.stringify(
      (params[0] == null ? this.positionOffset : params[0])[1]
    )}], "editorOnly": ${JSON.stringify(
      (params[1] == null ? this.editorOnly : params[1]) ? "Enabled" : "Disabled"
    )}`;
  }
}

export default MapEvent_PositionTrack;
