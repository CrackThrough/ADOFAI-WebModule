import ActionEventType from "../ActionEventType.js";
import EASE from "../data_types/ease.js";
import RELATIVE_TO from "../data_types/relativeto.js";

/**
 * Class for storing values of MoveCamera action.
 *
 * DO NOT MANUALLY USE STRING IN `relativeTo`, `ease` PARAMETER.
 */
class MapEvent_MoveCamera extends ActionEventType {
  /**
   * Create a MoveCamera event using these parameters.
   * @param {Number} duration Duration of the camera movement.
   * @param {String} relativeTo Please use enum instead of manually typing the string. Enum's filename is `relativeto.js`.
   * @param {[Number, Number]} position Position of the camera's destination.
   * @param {Number} rotation Rotation of the camera's destination.
   * @param {Number} zoom Zoom of the camera's destination.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} ease Please use enum instead of manually typing the string. Enum's filename is `ease.js`.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    duration,
    relativeTo,
    position,
    rotation,
    zoom,
    angleOffset,
    ease,
    eventTag
  ) {
    super();
    this.duration = duration == null ? this.duration : duration;
    this.relativeTo = relativeTo == null ? this.relativeTo : relativeTo;
    this.position = position == null ? this.position : position;
    this.rotation = rotation == null ? this.rotation : rotation;
    this.zoom = zoom == null ? this.zoom : zoom;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
    this.ease = ease == null ? this.ease : ease;
    this.eventTag = eventTag == null ? this.eventTag : eventTag;
  }

  /**
   * Duration of the camera movement.
   */
  duration = 1;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `relativeto.js`.
   */
  relativeTo = RELATIVE_TO.PLAYER;

  /**
   * Position of the camera's destination.
   */
  position = [0, 0];

  /**
   * Rotation of the camera's destination.
   */
  rotation = 0;

  /**
   * Zoom of the camera's destination.
   */
  zoom = 1;

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
    return `, "duration": ${this.duration}, "relativeTo": "${
      this.relativeTo
    }", "position": [${this.position[0]}, ${this.position[1]}], "rotation": ${
      this.rotation
    }, "zoom": ${this.zoom * 100}, "angleOffset": ${
      this.angleOffset
    }, "ease": "${this.ease}", "eventTag": "${this.eventTag}"`;
  }
}

export default MapEvent_MoveCamera;
