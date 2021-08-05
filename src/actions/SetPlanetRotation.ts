import { Ease } from "../typings";
import { Action } from "../classes";

export class SetPlanetRotation extends Action {
    constructor(
        floor: number,
        public ease: Ease = "Linear",
        public easeParts: number = 1
    ) {
        super(floor, "SetPlanetRotation");
    }
}
