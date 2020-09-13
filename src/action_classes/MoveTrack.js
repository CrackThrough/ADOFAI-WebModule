import ActionEventType from "../ActionEventType.js";
import TILE_RANGE from "../data_types/tilerange.js";
import EASE from "../data_types/ease.js";

/**
 * Class for storing values of MoveTrack action.
 *
 * DO NOT MANUALLY USE STRING IN `startTile`, `endTile`, `ease` PARAMETER.
 */
class MapEvent_MoveTrack extends ActionEventType {
  /**
   * Create a MoveTrack event using these parameters.
   * @param {[Number, String]} startTile Unlike offset-related parameters, this one uses 1st item for offsetting tile and 2nd item for tile range.
   *
   * DO NOT MANUALLY INPUT NUMBER ON INDEX 1. USE ENUM INSTEAD, FILENAME IS `tilerange.js`.
   *
   * ex) `[0, TILE_RANGE.FIRST]`, `[-2, TILE_RANGE.THIS]`, `[20, TILE_RANGE.LAST]`
   * @param {[Number, String]} endTile Usage is same with startTile. USE ENUM ON INDEX 1.
   * @param {Number} duration Duration of track(tiles'/tile's) movement.
   * @param {[Number, Number]} positionOffset Track's destinated position.
   * @param {Number} rotationOffset Track's destinated rotation.
   * @param {Number} scale Scale of the track.
   * @param {Number} opacity Opacity of the track.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} ease Please use enum instead of manually typing the string. Enum's filename is `ease.js`.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    startTile,
    endTile,
    duration,
    positionOffset,
    rotationOffset,
    scale,
    opacity,
    angleOffset,
    ease,
    eventTag
  ) {
    super();
    this.startTile = startTile == null ? this.startTile : startTile;
    this.endTile = endTile == null ? this.endTile : endTile;
    this.duration = duration == null ? this.duration : duration;
    this.positionOffset =
      positionOffset == null ? this.positionOffset : positionOffset;
    this.rotationOffset =
      rotationOffset == null ? this.rotationOffset : rotationOffset;
    this.scale = scale == null ? this.scale : scale;
    this.opacity = opacity == null ? this.opacity : opacity;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.ease = ease == null ? this.ease : ease;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Start of the tile selection. Enum's filename is `tilerange.js`.
   */
  startTile = [0, TILE_RANGE.THIS];

  /**
   * End of the tile selection. Enum's filename is `tilerange.js`.
   */
  endTile = [0, TILE_RANGE.THIS];

  /**
   * Duration of track(tiles'/tile's) movement.
   */
  duration = 1;

  /**
   * Track's destinated position.
   */
  positionOffset = [0, 0];

  /**
   * Track's destinated rotation.
   */
  rotationOffset = 0;

  /**
   * Scale of the track.
   */
  scale = 1;

  /**
   * Opacity of the track.
   */
  opacity = 1;

  /**
   * Angle offset of the event.
   */
  angleOffset = 0;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `ease.js`.
   */
  ease = EASE.LINEAR;

  /**
   * A tag of the event.
   */
  eventTag = new String();

  /**
   * Returns a json part of this event.
   */
  asJsonPart() {
    return `, "startTile": [${this.startTile[0]}, "${
      this.startTile[1]
    }"], "endTile": [${this.endTile[0]}, "${this.endTile[1]}"], "duration": ${
      this.duration
    }, "positionOffset": [${this.positionOffset[0]}, ${
      this.positionOffset[1]
    }], "rotationOffset": ${this.rotationOffset}, "scale": ${
      this.scale * 100
    }, "opacity": ${this.opacity * 100}, "angleOffset": ${
      this.angleOfffset
    }, "ease": "${this.ease}", "eventTag": "${this.eventTag}"`;
  }
}

export default MapEvent_MoveTrack;
