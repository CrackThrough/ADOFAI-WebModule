import ActionValue from "../ActionValue.js";

/**
 * Class for storing values of RepeatEvents action.
 */
class MapEvent_RepeatEvents extends ActionValue {
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
    tag = String();

    /**
     * Create a RepeatEvents event using these parameters.
     * @param {Number} repetitions Repetitions (Repeating count) of the events.
     * @param {Number} interval Interval of each events.
     * @param {String} tag Tag of the events.
     */
    constructor(repetitions, interval, tag) {
        super();
        this.repetitions = repetitions ?? this.repetitions;
        this.interval = interval ?? this.interval;
        this.tag = tag ?? this.tag;
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
        return `, "repetitions": ${JSON.stringify(
            params[0] ?? this.repetitions
        )}, "interval": ${JSON.stringify(
            params[1] ?? this.interval
        )}, "tag": ${JSON.stringify(
            params[2] ?? this.tag
        )}`;
    }
}

export default MapEvent_RepeatEvents;
