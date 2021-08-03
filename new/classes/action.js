import Actions from "./actions/__import__.js";

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

for (let i in Actions) {
    Object.defineProperty(Action, i, {
        configurable: true,
        writable: false,
        enumerable: true,
        value: Actions[i],
    })
}

export default Action;