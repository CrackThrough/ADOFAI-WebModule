import { EventType } from "../typings";

/**
 * Abstract class representing a single action(level event).
 */
export abstract class Action {
    /**
     * Create instance of an `Action`.
     * @param floor floor index
     * @param eventType type string of event
     */
    constructor(public floor: number, public eventType: EventType) {}
}
