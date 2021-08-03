import Action from "../action.js";

/**
 * Class for storing values of AnimateTrack action.
 *
 * DO NOT MANUALLY USE STRING IN `trackAnimation`, `trackDisappearAnimation` PROPERTY.
 */
export default class extends Action {
    /**
     * Create a AnimateTrack event using these parameters.
     * @param {number} floor
     * @param {TrackAppearAnimation} trackAnimation Please use enum instead of manually typing the string. Enum's filename is `trackappearanim.js`.
     * @param {number} beatsAhead Beats ahead to show track appearing animation.
     * @param {TrackDisappearAnimation} trackDisappearAnimation Please use enum instead of manually typing the string. Enum's filename is `trackdisappearanim.js`.
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
     * Please use enum instead of manually typing the string. Enum's filename is `trackappearanim.js`.
     */
    trackAnimation = "None";

    /**
     * Beats ahead to show track appearing animation.
     */
    beatsAhead = 8;

    /**
     * Please use enum instead of manually typing the string. Enum's filename is `trackdisappearanim.js`.
     */
    trackDisappearAnimation = "None";

    /**
     * Beats behind to show track disappearing animation.
     */
    beatsBehind = 1;
}