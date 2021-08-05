import { EventType } from "../typings";

/**
 * Abstract class representing a single action(level event).
 */
export abstract class Action {
    get eventType(): EventType {
        return this._eventType;
    }

    /**
     * Store custom data without any type restriction.
     */
    [key: string]: any;

    /**
     * Create instance of an `Action`.
     * @param floor floor index
     * @param _eventType type string of event
     */
    protected constructor(
        public floor: number,
        private _eventType: EventType
    ) {}
}
