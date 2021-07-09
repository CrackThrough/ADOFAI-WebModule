import ActionValue from "../ActionValue.js";
import TILE_RANGE from "../data_types/tilerange.js";
import EASE from "../data_types/ease.js";

/**
 * Class for storing values of MoveTrack action.
 *
 * DO NOT MANUALLY USE STRING IN `startTile`, `endTile`, `ease` PROPERTY.
 */
class MapEvent_MoveTrack extends ActionValue {
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
    scale = 100;

    /**
     * Opacity of the track.
     */
    opacity = 100;

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
    eventTag = String();

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
        this.startTile = startTile ?? this.startTile;
        this.endTile = endTile ?? this.endTile;
        this.duration = duration ?? this.duration;
        this.positionOffset = positionOffset ?? this.positionOffset;
        this.rotationOffset = rotationOffset ?? this.rotationOffset;
        this.scale = scale ?? this.scale;
        this.opacity = opacity ?? this.opacity;
        this.angleOffset = angleOffset ?? this.angleOffset;
        this.ease = ease ?? this.ease;
        this.eventTag = eventTag ?? this.eventTag;
    }

    /**
     * Create value by converting from object
     * @param {Object} obj
     */
    static fromObject(obj) {
        const res = new this();
        Object.keys(obj).forEach((key) => {
            res[key] = obj[key];
        });
        return res;
    }

    /**
     * Returns a json part of this event.
     */
    asJsonPart(...params) {
        return `, "startTile": [${JSON.stringify(
            (params[0] ?? this.startTile)[0]
        )}, ${JSON.stringify(
            (params[0] ?? this.startTile)[1]
        )}], "endTile": [${JSON.stringify(
            (params[1] ?? this.endTile)[0]
        )}, ${JSON.stringify(
            (params[1] ?? this.endTile)[1]
        )}], "duration": ${JSON.stringify(
            params[2] ?? this.duration
        )}, "positionOffset": [${JSON.stringify(
            (params[3] ?? this.positionOffset)[0]
        )}, ${JSON.stringify(
            (params[3] ?? this.positionOffset)[1]
        )}], "rotationOffset": ${JSON.stringify(
            params[4] ?? this.rotationOffset
        )}, "scale": ${JSON.stringify(
            params[5] ?? this.scale
        )}, "opacity": ${JSON.stringify(
            params[6] ?? this.opacity
        )}, "angleOffset": ${JSON.stringify(
            params[7] ?? this.angleOffset
        )}, "ease": ${JSON.stringify(
            params[8] ?? this.ease
        )}, "eventTag": ${JSON.stringify(
            params[9] ?? this.eventTag
        )}`;
    }
}

export default MapEvent_MoveTrack;
