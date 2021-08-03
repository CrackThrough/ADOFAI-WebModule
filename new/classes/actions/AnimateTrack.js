import Action from "../action.js";

/**
 * Class for storing values of AnimateTrack action.
 */
export default class extends Action {
    /**
     * Create a AnimateTrack event using these parameters.
     * @param {number} floor
     * @param {TrackAppearAnimation} trackAnimation
     * @param {number} beatsAhead Beats ahead to show track appearing animation.
     * @param {TrackDisappearAnimation} trackDisappearAnimation
     * @param {number} beatsBehind Beats behind to show track disappearing animation.
     */
    constructor(
        floor,
        trackAnimation,
        beatsAhead,
        trackDisappearAnimation,
        beatsBehind
    ) {
        super(floor, "AnimateTrack");
        this.trackAnimation = trackAnimation;
        this.beatsAhead = beatsAhead;
        this.trackDisappearAnimation = trackDisappearAnimation;
        this.beatsBehind = beatsBehind;
    }

    /**
     *
     */
    trackAnimation = "None";

    /**
     * Beats ahead to show track appearing animation.
     */
    beatsAhead = 8;

    /**
     *
     */
    trackDisappearAnimation = "None";

    /**
     * Beats behind to show track disappearing animation.
     */
    beatsBehind = 1;
}
