import { Action } from "./Action";
import { Twirl } from "../actions";

//! WARNING: This class is not tested yet!!!

/**
 * Class representing `angleData` section inside the level.
 */
export class AngleData extends Array<number> {
    /**
     * Converts current array to list of relative angles
     * @param actions list of actions to get twirls from
     * @returns list of relative angles
     */
    toAngleArray(actions: Action[] | undefined = undefined): number[] {
        let result: number[] = []; // result to return
        let twirled = false; // twirled status
        let prev = 180; // previous angle

        // Filter out except twirl events
        let _actions = actions?.slice().filter(a => a.eventType === "Twirl");

        this.forEach((e, i) => {
            // Get the twirl event to toggle twirl status
            let twirlEvent = _actions?.find(a => a.eventType === "Twirl" && a.floor === i) as Twirl | undefined;
            if (twirlEvent && !twirlEvent.doubleTwirled) {
                twirled = !twirled;
            }

            // The previous value in array
            let arrPrev: number | [number, 999] = this[--i] ?? 180;

            if (e === 999) {
                e = this[i] ?? 180;
                arrPrev ??= [prev ?? this[--i], 999];
            }

            prev = AngleData.getRelativeAngle(arrPrev, e, twirled);
        });

        return result;
    }

    /**
     * Calculates relative angle between two angles
     * @param prevAngle previous tile to calculate angle from
     * @param thisAngle current tile to calculate angle from
     * @param twirled whether the planets are twirled
     * @returns relative angle between two tiles
     */
    static getRelativeAngle(
        prevAngle: number | [number, 999],
        thisAngle: number,
        twirled = false
    ): number {
        // Make sure to do midspin calculations on previous angles
        if (Array.isArray(prevAngle)) {
            prevAngle = this.getRelativeMidspinAngle(prevAngle[0], thisAngle);
        }

        // If current tile is the first tile, reset previous angle and calculate as R tile
        let isFirstTile = false;
        if (isNaN(prevAngle)) {
            prevAngle = 0;
            isFirstTile = true;
        }

        // Return 0 if current tile is midspin
        if (thisAngle == 999) return 0;

        // Calculate angle between two angles
        let result = (thisAngle - prevAngle + 540) % 360;
        if (twirled) result = 360 - result;
        if (result == 0 && !isFirstTile) result = 360;

        return result;
    }

    /**
     * Calculates midspin angle
     * @param prevAngle previous tile angle
     * @param nextAngle next tile angle
     * @param twirled whether the planets are twirled
     * @returns relative angle after midspin tile
     */
    private static getRelativeMidspinAngle(
        prevAngle: number,
        nextAngle: number,
        twirled = false
    ): number {
        // Middle angle to append to result
        let midAngle: number,
            diff: number = Math.abs(prevAngle - nextAngle);

        // Find the middle angle
        switch (true) {
            case diff < 180:
                midAngle = prevAngle - nextAngle;
                break;
            case diff > 180:
                midAngle = 360 - diff;
                break;
            default:
                midAngle = 360;
                break;
        }

        // Twirl difference
        midAngle *= twirled ? -1 : 1;

        // Calculate final result
        switch (true) {
            case diff < 180:
            case nextAngle - prevAngle > 180:
                return 180 - midAngle;
            case prevAngle - nextAngle > 180:
                return 180 + midAngle;
            default:
                return 360;
        }
    }
}