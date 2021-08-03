import ALL_ACTIONS from "./actions/__import__.js";

/**
 * Class representing a single action(event).
 */
class Action {
    /**
     * Create instance of action.
     * @param {number} floor floor index
     * @param {EventType} eventType type string of event
     */
    constructor(floor, eventType) {
        this.floor = floor;
        this.eventType = eventType;
    }
}

for (let i in ALL_ACTIONS) {
    Object.defineProperty(Action, i, {
        configurable: true,
        writable: false,
        enumerable: true,
        value: ALL_ACTIONS[i],
    });
}

export default Action;
