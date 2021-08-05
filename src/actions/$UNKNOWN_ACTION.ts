import { Action } from "../classes";

export class $UNKNOWN_ACTION extends Action {
    constructor(floor: number, public rawData: any = null) {
        super(floor, "$UNKNOWN_ACTION");
    }
}
