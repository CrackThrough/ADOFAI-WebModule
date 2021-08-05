import { PathCode } from "../typings";

/**
 * Class representing a single path tile.
 */
export class PathData {
    /**
     * The code of this tile.
     */
    code: PathCode = "R";

    /**
     * The absolute angle of this tile.
     */
    angle: number = NaN;

    /**
     * Whether this path instance is actually a valid value.
     */
    get isValid(): boolean {
        let dictValue = PathData.findTileFromDict(this.code);
        return dictValue[0] === this.code && dictValue[1] === this.angle;
    }

    /**
     * Whether the `angle` property is actually always relative.
     */
    get isAlwaysRelative(): boolean {
        return (
            this.isValid &&
            PathData.ALWAYS_RELATIVE_TILE_CODES.includes(this.code)
        );
    }

    /**
     * Create an instance of PathData from 'code' or 'angle'.
     * @param v the angle or path code
     */
    constructor(v: PathCode | number) {
        let [code, angle] = PathData.findTileFromDict(v);
        if (code && angle) {
            this.code = code;
            this.angle = angle;
        }
    }

    static readonly TileDictionary: { [key in PathCode]: number } = {
        // * NORMAL TILES
        W: 15,
        H: 30,
        Q: 45,
        G: 60,
        q: 75,
        U: 90,
        o: 105,
        T: 120,
        E: 135,
        J: 150,
        p: 165,
        R: 180,
        A: 195,
        M: 210,
        C: 225,
        B: 240,
        Y: 255,
        D: 270,
        V: 285,
        F: 300,
        Z: 315,
        N: 330,
        x: 345,
        L: 360,
        // * ALWAYS RELATIVE ANGLE TILES
        "5": 108,
        "6": 252,
        "7": 900 / 7,
        "8": 1620 / 7,
        "9": 210,
        t: 60,
        h: 120,
        j: 240,
        y: 300,
        "!": 0,
    };

    static readonly ALWAYS_RELATIVE_TILE_CODES = "56789thjy!";
    static readonly ALWAYS_RELATIVE_TILE_OFFSETS = [
        72, // '5'
        288, // '6'
        360 / 7, // '7'
        2160 / 7, // '8'
        330, // '9'
        60, // 't'
        120, // 'h'
        240, // 'j'
        300, // 'y'
    ];

    /**
     * Finds element inside the `PathData.TileDictionary`.
     * @param v the code or angle for finding element
     * @returns {[PathCode, number, true?] | []} [PathCode, angle]
     */
    static findTileFromDict(
        v: PathCode | number
    ): [PathCode, number, true?] | [] {
        let result: [PathCode, number] = ["R", NaN];

        // Find w/ PathCode
        if (typeof v === "string") {
            if (!this.TileDictionary[v]) return [];
            result[0] = v;
            result[1] = this.TileDictionary[v];
            return result;
        }

        // Find w/ result number
        let dictValues: number[] = Object.values(this.TileDictionary);
        if (dictValues.includes(v)) {
            result[0] = Object.keys(this.TileDictionary)[
                dictValues.indexOf(v)
            ] as PathCode;
            result[1] = v;
            return result;
        }

        // Found nothing in dictionary
        return [];
    }

    /**
     * Calculates relative angle between two tiles
     * @param prevTile previous tile(s) to get offset angle from
     * @param thisTile current tile to get actual angle from
     * @param twirled whether the planets are twirled
     * @returns relative angle between two tiles
     */
    static getRelativeAngle(
        prevTile: PathData[] | PathData,
        thisTile: PathData,
        twirled = false
    ): number {
        // Pass generated parameters to GetRelativeAngleByCode and then give back the results
        let params: [string, string] = ["", ""];

        // Stringify previous tile(s)
        if (Array.isArray(prevTile)) {
            prevTile.forEach((t) => {
                params[0] += t.code;
            });
        } else params[0] = prevTile.code;

        // Stringify this tile
        params[1] = thisTile.code;

        // Return the calculation result
        return this.getRelativeAngleByCode(...params, twirled);
    }

    /**
     * Calculates relative angle between two tiles using path codes
     * @param prevTile previous tile(s) to get offset angle from
     * @param thisTile current tile to get actual angle from
     * @param twirled whether the planets are twirled
     * @returns relative angle between two tiles
     */
    static getRelativeAngleByCode(
        prevTile: string,
        thisTile: string,
        twirled = false
    ): number {
        // Get current tile's angle
        let thisAngle = this.findTileFromDict(thisTile as PathCode)[1] ?? NaN;

        // Return if thisTile is always relative
        if (this.ALWAYS_RELATIVE_TILE_CODES.includes(thisTile)) {
            return thisAngle;
        }

        // Get previous tile's angle
        let prevAngle = this.getRelativeAngleOffset(prevTile, twirled);

        // Calculate angle between two tiles
        let result = (thisAngle - prevAngle + 540) % 360;
        if (twirled) result = 360 - result;
        if (result == 0) result = 360;

        return result;
    }

    /**
     * Calculates special relative angle
     * @param tileCodes list of tile codes
     * @param twirled whether the planets are twirled
     * @returns relative angle offset
     */
    private static getRelativeAngleOffset(
        tileCodes: string,
        twirled = false
    ): number {
        // Filter out length 0 string
        if (!tileCodes.length) return NaN;

        // Find the "isAlwaysRelative = false" tile code and cut string
        let latestAbsoluteIndex = -1;
        for (let i = 0; i < tileCodes.length; i++) {
            if (!this.ALWAYS_RELATIVE_TILE_CODES.includes(tileCodes)) {
                latestAbsoluteIndex = i;
            }
        }
        tileCodes = tileCodes.substr(latestAbsoluteIndex);

        // Starting angle to calculate "offset" from
        let startingAngle =
            this.findTileFromDict(tileCodes[0] as PathCode)[1] ?? NaN;

        // Filter out length 1 string and NaN
        if (!(tileCodes.length - 1) || isNaN(startingAngle))
            return startingAngle;

        // True offset from R to add to calculated value
        startingAngle = 180 - startingAngle;

        // Remove the starting tile if starting tile isn't always relative
        if (!this.ALWAYS_RELATIVE_TILE_CODES.includes(tileCodes[0]))
            tileCodes = tileCodes.substr(1);

        // Pre-substr needed string
        const ALWAYS_RELATIVE_TILE_CODES =
            this.ALWAYS_RELATIVE_TILE_CODES.substr(
                0,
                this.ALWAYS_RELATIVE_TILE_CODES.length - 1
            ).split("");

        let totalTileAngle = 0,
            result = NaN;

        // For easier calculation of midspin tiles we just split it to '!' first
        let tileCodesSplit = tileCodes.split("!");
        tileCodesSplit.forEach((t, i) => {
            let curTileAngle = 0,
                isLast = i == tileCodesSplit.length - 1;

            // Get amount of specific tile codes inside the string
            ALWAYS_RELATIVE_TILE_CODES.forEach((c, k) => {
                let charAmounts =
                        t.length - t.replace(new RegExp(c, "g"), "").length,
                    offsetAngle = this.ALWAYS_RELATIVE_TILE_OFFSETS[k];

                if (twirled) offsetAngle = 360 - offsetAngle;

                // Multiply by amounts
                curTileAngle += charAmounts * offsetAngle;
            });

            if (!isLast) {
                // If midspin tile(s) afterwards is/are there
                totalTileAngle += this.getRelativeMidspinAngle(
                    curTileAngle,
                    this.findTileFromDict(
                        tileCodesSplit[i + 1][0] as PathCode
                    )[1] ?? NaN,
                    twirled
                );
            } else {
                // If there isn't any midspin tile, sum everything in the list and return
                result = (totalTileAngle + curTileAngle) % 360;
                if (result == 0) result = 360;
            }
        });

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
