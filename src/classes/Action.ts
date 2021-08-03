import { EventType } from "../typings";

/**
 * Class representing a single action(event).
 */
export abstract class Action {
    /**
     * Create instance of an action.
     * @param {number} floor floor index
     * @param {EventType} eventType type string of event
     */
    constructor(public floor: number, public eventType: EventType) {}
}
