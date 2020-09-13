import ActionEventType from "./../ActionEventType.js";
import Color from "../data_types/color.js";
import TILE_RANGE from "../data_types/tilerange.js";
import TRACK_COLOR_TYPE from "../data_types/trackcolortype.js";
import TRACK_COLOR_PULSE from "../data_types/trackcolorpulse.js";
import TRACK_STYLE from "../data_types/trackstyle.js";

/**
 * Class for storing values of RecolorTrack action.
 *
 * DO NOT MANUALLY USE STRING IN `trackColorType`, `trackColorPulse`, `trackStyle` PARAMETER.
 */
class MapEvent_RecolorTrack extends ActionEventType {
  /**
   * Create a RecolorTrack event using these parameters.
   * @param {[Number, String]} startTile Unlike offset-related parameters, this one uses 1st item for offsetting tile and 2nd item for tile range.
   *
   * DO NOT MANUALLY INPUT NUMBER ON INDEX 1. USE ENUM INSTEAD, FILENAME IS `tilerange.js`.
   *
   * ex) `[0, TILE_RANGE.FIRST]`, `[-2, TILE_RANGE.THIS]`, `[20, TILE_RANGE.LAST]`
   * @param {[Number, String]} endTile Usage is same with startTile. USE ENUM ON INDEX 1.
   * @param {String} trackColorType Please use enum instead of manually typing the string. Enum's filename is `trackcolortype.js`.
   * @param {Color} trackColor 1st Color of the track. The Color class is in `color.js`.
   * @param {Color} secondaryTrackColor 2nd Color of the track. The Color class is in `color.js`.
   * @param {Number} trackColorAnimDuration The duration of the color animation.
   * @param {String} trackColorPulse Please use enum instead of manually typing the string. Enum's filename is `trackcolorpulse.js`.
   * @param {Number} trackPulseLength The tile length of track pulse.
   * @param {String} trackStyle Please use enum instead of manually typing the string. Enum's filename is `trackstyle.js`.
   * @param {Number} angleOffset Angle offset of the event.
   * @param {String} eventTag A tag of the event.
   */
  constructor(
    startTile,
    endTile,
    trackColorType,
    trackColor,
    secondaryTrackColor,
    trackColorAnimDuration,
    trackColorPulse,
    trackPulseLength,
    trackStyle,
    angleOffset,
    eventTag
  ) {
    super();
    this.startTile = startTile == null ? this.startTile : startTile;
    this.endTile = endTile == null ? this.endTile : endTile;
    this.trackColorType =
      trackColorType == null ? this.trackColorType : trackColorType;
    this.trackColor = trackColor == null ? this.trackColor : trackColor;
    this.secondaryTrackColor =
      secondaryTrackColor == null
        ? this.secondaryTrackColor
        : secondaryTrackColor;
    this.trackColorAnimDuration =
      trackColorAnimDuration == null
        ? this.trackColorAnimDuration
        : trackColorAnimDuration;
    this.trackColorPulse =
      trackColorPulse == null ? this.trackColorPulse : trackColorPulse;
    this.trackPulseLength =
      trackPulseLength == null ? this.trackPulseLength : trackPulseLength;
    this.trackStyle = trackStyle == null ? this.trackStyle : trackStyle;
    this.angleOffset = angleOffset == null ? this.angleOffset : angleOffset;
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
   * Please use enum instead of manually typing the string. Enum's filename is `trackcolortype.js`.
   */
  trackColorType = TRACK_COLOR_TYPE.SINGLE;

  /**
   * 1st Color of the track. The Color class is in `color.js`
   */
  trackColor = new Color();

  /**
   * 2nd Color of the track. The Color class is in `color.js`
   */
  secondaryTrackColor = new Color();

  /**
   * The duration of the color animation.
   */
  trackColorAnimDuration = 1;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `trackcolorpulse.js`.
   */
  trackColorPulse = TRACK_COLOR_PULSE.NONE;

  /**
   * The tile length of track pulse.
   */
  trackPulseLength = 1;

  /**
   * Please use enum instead of manually typing the string. Enum's filename is `trackstyle.js`.
   */
  trackStyle = TRACK_STYLE.STANDARD;

  /**
   * Angle offset of the event.
   */
  angleOffset = 0;

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
    }"], "endTile": [${this.endTile[0]}, "${
      this.endTile[1]
    }"], "trackColorType": "${
      this.trackColorType
    }", "trackColor": "${this.trackColor.toString()}", "secondaryColor": "${this.secondaryTrackColor.toString()}", "trackColorAnimDuration": ${
      this.trackColorAnimDuration
    }, "trackColorPulse": "${this.trackColorPulse}", "trackPulseLength": ${
      this.trackPulseLength
    }, "trackStyle": "${this.trackStyle}", "angleOffset": ${
      this.angleOffset
    }, "eventTag": "${this.eventTag}"`;
  }
}

export default MapEvent_RecolorTrack;
