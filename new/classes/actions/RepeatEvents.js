import Action from "../action.js";

/**
 * Class for storing values of RepeatEvents action.
 */
export default class extends Action {
    /**
     * Create a RepeatEvents event using these parameters.
     * @param {number} floor
     * @param {number} repetitions Repetitions (Repeating count) of the events.
     * @param {number} interval Interval of each events.
     * @param {string} tag Tag of the events.
     */
    constructor(floor, repetitions, interval, tag) {
        super(floor, "RepeatEvents");
        this.repetitions = repetitions;
        this.interval = interval;
        this.tag = tag;
    }

    /**
     * Repetitions (Repeating count) of the events.
     */
    repetitions = 1;

    /**
     * Interval of each events.
     */
    interval = 1;

    /**
     * Tag of the events.
     */
    tag = "";
}