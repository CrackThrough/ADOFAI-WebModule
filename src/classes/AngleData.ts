/**
 * Class representing `angleData` section inside the level.
 */
export class AngleData extends Array<number> {
    /**
     * Create instance of `AngleData`.
     * @param v the length of an array or elements to push inside
     */
    constructor(...v: number[]) {
        if (typeof v[0] === "number") {
            super(v[0]);
        } else {
            super(...v);
        }
    }

    /**
     * Calculates relative angle between two angles
     * @param prevAngle previous tile to calculate angle from
     * @param thisAngle current tile to calculate angle from
     * @param twirled whether the planets are twirled
     * @returns relative angle between two tiles
     */
    static GetRelativeAngle(prevAngle: number | [number, 999], thisAngle: number, twirled = false): number {
        // Make sure to do midspin calculations on previous angles
        if (Array.isArray(prevAngle)) {
            prevAngle = this.GetRelativeMidspinAngle(prevAngle[0], thisAngle);
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
    private static GetRelativeMidspinAngle(prevAngle: number, nextAngle: number, twirled = false): number {
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