import Action from "../action.js";

/**
 * Class for storing values of MoveTrack action.
 */
export default class extends Action {
    /**
     * Create a MoveTrack event using these parameters.
     * @param {number} floor
     * @param {FloorRange} startTile Unlike offset-related parameters, this one uses 1st item for offsetting tile and 2nd item for tile range.
     * @param {FloorRange} endTile Usage is same with startTile. USE ENUM ON INDEX 1.
     * @param {number} duration Duration of track(tiles'/tile's) movement.
     * @param {Position} positionOffset Track's destinated position.
     * @param {number} rotationOffset Track's destinated rotation.
     * @param {number} scale Scale of the track.
     * @param {number} opacity Opacity of the track.
     * @param {number} angleOffset Angle offset of the event.
     * @param {Ease} ease 
     * @param {string} eventTag A tag of the event.
     */
    constructor(
        floor,
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
        super(floor, "MoveTrack");
        this.startTile = startTile;
        this.endTile = endTile;
        this.duration = duration;
        this.positionOffset = positionOffset;
        this.rotationOffset = rotationOffset;
        this.scale = scale;
        this.opacity = opacity;
        this.angleOffset = angleOffset;
        this.ease = ease;
        this.eventTag = eventTag;
    }

    /**
     * Start of the tile selection.
     */
    startTile = [0, "ThisTile"];

    /**
     * End of the tile selection.
     */
    endTile = [0, "ThisTile"];

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
     * 
     */
    ease = "Linear";

    /**
     * A tag of the event.
     */
    eventTag = "";
}