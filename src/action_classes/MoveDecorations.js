import ActionEventType from "../ActionEventType.js";
import EASE from "../data_types/ease.js";

/**
 * Class for storing values of MoveDecoration action.
 *
 * DO NOT MANUALLY USE STRING IN `ease` PARAMETER.
 */
class MapEvent_MoveDecoration extends ActionEventType {
  /**
   * Create a MoveDecoration event using these parameters.
   * @param {Number} duration Duration of decoration movement.
   * @param {String} tag Tag of the decoration.
   * @param {[Number, Number]} positionOffset Decoration's destinated position.
   * @param {Number} rotationOffset Decoration's destinated rotation.
   * @param {Number} scale Scale of the decoration.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} ease Please use enum instead of manually typing the string. Enum's filename is `ease.js`.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    duration,
    tag,
    positionOffset,
    rotationOffset,
    scale,
    angleOffset,
    ease,
    eventTag
  ) {
    super();
    this.duration = duration == null ? this.duration : duration;
    this.tag = tag == null ? this.tag : tag;
    this.positionOffset =
      positionOffset == null ? this.positionOffset : positionOffset;
    this.rotationOffset =
      rotationOffset == null ? this.rotationOffset : rotationOffset;
    this.scale = scale == null ? this.scale : scale;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.ease = ease == null ? this.ease : ease;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Duration of decoration movement.
   */
  duration = 1;

  /**
   * Tag of the decoration.
   */
  tag = new String();

  /**
   * Decoration's destinated position.
   */
  positionOffset = [0, 0];

  /**
   * Decoration's destinated rotation.
   */
  rotationOffset = 0;

  /**
   * Scale of the decoration.
   */
  scale = 1;

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
    return `, "duration": ${this.duration}, "tag": "${this.tag}", "positionOffset": [${this.positionOffset[0]}, ${this.positionOffset[1]}], "rotationOffset": ${this.rotationOffset}, "scale": ${this.scale}, "angleOffset": ${this.angleOffset}, "ease": "${this.ease}", "eventTag": "${this.eventTag}"`;
  }
}

export default MapEvent_MoveDecoration;
