// /**
//  * Class for easy manipulation of paths.
//  *
//  * Used directly in `pathData: "..."`.
//  *
//  * Contains every types of path. Do `Object.keys(AdofaiMapPathData.PATH_LIST)` to get all list of Path in String.
//  */

// class AdofaiMapPathData {
//     /**
//      * List of the path type as String.
//      */
//     static PATH_LIST = [
//         "U",
//         "R",
//         "L",
//         "D",
//         "E",
//         "C",
//         "Q",
//         "Z",
//         "H",
//         "G",
//         "T",
//         "J",
//         "M",
//         "B",
//         "F",
//         "N",
//         "!",
//         "5",
//         "6",
//         "7",
//         "8",
//         "q",
//         "W",
//         "x",
//         "V",
//         "Y",
//         "A",
//         "p",
//         "o",
//     ];

//     /**
//      * List of the path's absolute angle as Number. (Use same index with PATH_LIST to get the path key)
//      */
//     static ABSOLUTE_ANGLE_LIST = [
//         90,
//         180,
//         360,
//         270,
//         135,
//         225,
//         45,
//         315,
//         30,
//         60,
//         120,
//         150,
//         210,
//         240,
//         300,
//         330,
//         0,
//         108,
//         252,
//         900 / 7,
//         1620 / 7,
//         75,
//         15,
//         345,
//         285,
//         255,
//         195,
//         165,
//         105,
//     ];

//     /**
//      * Code of the path.
//      */
//     code = String();

//     /**
//      * Absolute angle of the path.
//      */
//     absoluteAngle = NaN;

//     /**
//      * Create a path using a constructor.
//      * @param {String | Number} val Base value to create a instance of.
//      *
//      * When you input String: You are creating a path using a **Tile Code**.
//      *
//      * When you input Number: You are creating a path using a **Absolute Angle of the tile**. If you want to get a twirled one's angle, input `360 - angle`.
//      *
//      * Inputting number might return instance with empty values when no corresponding tile is found.
//      *
//      * @param {{findNearestTileByAngle: boolean, useSmallerAngleOnOverlapping: boolean, fallback: String | null}} settings Customizable settings to generate a tile.
//      */
//     constructor(
//         val,
//         settings = {
//             /**
//              * Whether to try to find the most closest angle when the given angle does not exist
//              */
//             findNearestTileByAngle: false,

//             /**
//              * Whether to use the tile with a higher (<-- false) or smaller (<-- true) angle when difference of nearest angle is both the same.
//              */
//             useSmallerAngleOnOverlapping: true,

//             /**
//              * Use this to return a specific tile as a "fallback tile" instead of empty class.
//              *
//              * You should input a tile code here.
//              */
//             fallback: null,
//         }
//     ) {
//         if (!settings || Object.keys(settings || {}).length !== 3)
//             settings = {
//                 findNearestTileByAngle: false,
//                 useSmallerAngleOnOverlapping: true,
//                 fallback: null,
//             };

//         if (
//             settings.fallback &&
//             !AdofaiMapPathData.PATH_LIST.includes(settings.fallback)
//         ) {
//             settings.fallback = null;
//         }

//         switch (typeof val) {
//             case "string":
//                 const tileCode = val[0];

//                 if (AdofaiMapPathData.PATH_LIST.includes(tileCode)) {
//                     this.code = tileCode;
//                     this.absoluteAngle =
//                         AdofaiMapPathData.ABSOLUTE_ANGLE_LIST[
//                             AdofaiMapPathData.PATH_LIST.indexOf(tileCode)
//                         ];
//                     if (this.code == null || this.absoluteAngle == null)
//                         return new AdofaiMapPathData(settings.fallback);
//                 } else if (settings.fallback != null) {
//                     return new AdofaiMapPathData(settings.fallback);
//                 }

//                 break;
//             case "number":
//                 if (AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.includes(val)) {
//                     this.absoluteAngle = val;
//                     this.code =
//                         AdofaiMapPathData.PATH_LIST[
//                             AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.indexOf(val)
//                         ];
//                     if (this.code == null || this.absoluteAngle == null)
//                         return new AdofaiMapPathData(settings.fallback);
//                 } else {
//                     if (settings.findNearestTileByAngle) {
//                         const sorted =
//                             AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.sort();
//                         let nearest = 0;
//                         let dist = Infinity;
//                         sorted.forEach((n) => {
//                             const d = Math.abs(nearest - val);
//                             if (d < dist) {
//                                 dist = d;
//                                 nearest = n;
//                             } else if (d === dist && n !== nearest)
//                                 nearest = settings.useSmallerAngleOnOverlapping
//                                     ? n > nearest
//                                         ? nearest
//                                         : n
//                                     : n < nearest
//                                     ? nearest
//                                     : n;
//                         });
//                         const index =
//                             AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.indexOf(
//                                 nearest
//                             );
//                         if (index != null) {
//                             this.code = AdofaiMapPathData.PATH_LIST[index];
//                             this.absoluteAngle = nearest;
//                             if (this.code == null || this.absoluteAngle == null)
//                                 return new AdofaiMapPathData(settings.fallback);
//                         } else return new AdofaiMapPathData(settings.fallback);
//                     } else {
//                         if (settings.fallback != null) {
//                             return new AdofaiMapPathData(settings.fallback);
//                         }
//                     }
//                 }
//                 break;
//         }
//     }

//     /**
//      * Calculate the Angle between tiles. THIS IS NOT FOR ! TILES.
//      * ! Tile can be calculated differently rather than getting relative angle.
//      * For example, String `RD!R`'s R.A is 180, 270, (0, ) 270.
//      * You can do `360 - TileD.absoluteAngle` and use its angle to create and use a temporary tile to calculate angle between `D!` and `R`.
//      *
//      * Correct Usage:
//      * GetRelativeAngle(tileA, tileB, false);
//      * GetRelativeAngle(tileA.code + "5768888755786", tileB, true);
//      *
//      * @param {AdofaiMapPathData | String} thisTile First tile to be a base for second tile's angle. (Input String when calculating all of 5, 6, 7, 8. They should be calculated at once)
//      * @param {AdofaiMapPathData} nextTile Second tile to base on the first tile
//      * @param {boolean} twirled Whether the planet is twirled or not
//      */
//     static GetRelativeAngle(thisTile, nextTile, twirled) {
//         let absTiles = ["5", "6", "7", "8"];
//         let t, n;
//         if (absTiles.includes(nextTile.code)) {
//             n = nextTile.absoluteAngle;
//         } else {
//             // normal calculation
//             if (typeof thisTile == "string") {
//                 // calc as 5 6 7 8 str
//                 const lastChar = thisTile[thisTile.length - 1];
//                 if (absTiles.includes(lastChar)) {
//                     // it ends with 5 6 7 8
//                     const numbers = [];
//                     for (let i = 0; i < 4; i++) {
//                         const regex = new RegExp(`[^${i + 5}]`, "g");
//                         numbers.push(thisTile.replace(regex, "").length);
//                     }
//                     t =
//                         (72 * numbers[0] + // 180 - 108
//                             288 * numbers[1] + // 252 
//                             (900 / 7) * numbers[2] +
//                             (1620 / 7) * numbers[3]) %
//                         360;
//                 } else {
//                     // it does not end with 5 6 7 8
//                     const simulatedTile = new this(lastChar);
//                     if (isNaN(simulatedTile.absoluteAngle)) {
//                         // fallback, return NaN
//                         return NaN;
//                     } else t = simulatedTile.absoluteAngle;
//                 }
//             } else t = thisTile.absoluteAngle;
//         }
//         let result = (n - t + 540) % 360;
//         if (twirled) result = 360 - result;
//         if (result === 0) result = 360;
//         return result;
//     }

//     /**
//      * Calculate the milliseconds between 2 tiles.
//      * @param {Number} Angle Angle between 2 tiles
//      * @param {Number} BPM BPM on that specific tile
//      */
//     static GetMsBetweenTile(Angle, BPM) {
//         return (1000 * Angle) / (3 * BPM);
//     }
// }

import { PathCode } from "../typings";

/**
 * Class representing a single path tile.
 */
export default class PathData {
    /**
     * Creates PathData from 'code' or 'angle'.
     * @param {PathCode | number} v the angle or path code
     */
    constructor(v: PathCode | number) {
        let [code, angle] = PathData.FindTileFromDict(v);
        if (code && angle) {
            this.code = code;
            this.angle = angle;
        }
    }

    /**
     * The code of this tile.
     */
    code: PathCode = 'R';

    /**
     * The absolute angle of this tile.
     */
    angle: number = NaN;

    /**
     * Whether this path instance is actually a valid value.
     */
    get isValid(): boolean {
        let dictValue = PathData.FindTileFromDict(this.code);
        return dictValue[0] === this.code && dictValue[1] === this.angle;
    }

    /**
     * Whether the `angle` property is actually always relative.
     */
    get isAlwaysRelative(): boolean {
        return this.isValid && PathData.ALWAYS_RELATIVE_TILE_CODES.includes(this.code);
    }

    static readonly TileDictionary: { [key in PathCode]: number } = {
        // * NORMAL TILES
        'W': 15,
        'H': 30,
        'Q': 45,
        'G': 60,
        'q': 75,
        'U': 90,
        'o': 105,
        'T': 120,
        'E': 135,
        'J': 150,
        'p': 165,
        'R': 180,
        'A': 195,
        'M': 210,
        'C': 225,
        'B': 240,
        'Y': 255,
        'D': 270,
        'V': 285,
        'F': 300,
        'Z': 315,
        'N': 330,
        'x': 345,
        'L': 360,
        // * ABSOLUTE ANGLE TILES
        '5': 108,
        '6': 252,
        '7': 900 / 7,
        '8': 1620 / 7,
        '9': 210,
        't': 60,
        'h': 120,
        'j': 240,
        'y': 300,
        '!': 0,
    };

    static readonly ALWAYS_RELATIVE_TILE_CODES = "56789thjy!";
    static readonly ALWAYS_RELATIVE_TILE_OFFSETS = [
        72,       // '5'
        288,      // '6'
        360 / 7,  // '7'
        2160 / 7, // '8'
        330,      // '9'
        60,       // 't'
        120,      // 'h'
        240,      // 'j'
        300,      // 'y'
    ];

    /**
     * Finds element inside the `PathData.TileDictionary`.
     * @param {string | number} v the code or angle for finding element
     * @returns {[PathCode, number, true?] | []} [PathCode, angle]
     */
    static FindTileFromDict(
        v: PathCode | number
    ): [PathCode, number, true?] | [] {
        let result: [PathCode, number] = ['R', NaN];

        // Find w/ PathCode
        if (typeof v === 'string') {
            if (!this.TileDictionary[v]) return [];
            result[0] = v;
            result[1] = this.TileDictionary[v];
            return result;
        }

        // Find w/ result number
        let dictValues: number[] = Object.values(this.TileDictionary);
        if (dictValues.includes(v)) {
            result[0] = Object.keys(this.TileDictionary)[dictValues.indexOf(v)] as PathCode;
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
     * @param twirled if the planets are twirled
     * @returns relative angle between two tiles
     */
    static GetRelativeAngle(prevTile: PathData[] | PathData, thisTile: PathData, twirled = false): number {
        // Pass generated parameters to GetRelativeAngleByCode and then give back the results
        let params: [string, string] = [ "", "" ];

        // Stringify previous tile(s)
        if (Array.isArray(prevTile)) {
            prevTile.forEach(t => {
                params[0] += t.code;
            });
        } else params[0] = prevTile.code;

        // Stringify this tile
        params[1] = thisTile.code;

        // Return the calculation result
        return this.GetRelativeAngleByCode(...params, twirled);
    }

    /**
     * Calculates relative angle between two tiles using path codes
     * @param prevTile previous tile(s) to get offset angle from
     * @param thisTile current tile to get actual angle from
     * @param twirled if the planets are twirled
     * @returns relative angle between two tiles
     */
    static GetRelativeAngleByCode(prevTile: string, thisTile: string, twirled = false): number {
        let prevAngle = this.GetRelativeAngleOffset(prevTile);

    }

    /**
     * Calculates special relative angle
     * @param tileCodes list of tile codes
     * @param twirled whether the planets are twirled
     * @returns relative angle offset
     */
    private static GetRelativeAngleOffset(tileCodes: string, twirled = false): number {
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
        let startingAngle = this.FindTileFromDict(tileCodes[0] as PathCode)[1] ?? NaN;

        // Filter out length 1 string and NaN
        if (!(tileCodes.length - 1) || isNaN(startingAngle)) return startingAngle;

        // True offset from R to add to calculated value
        startingAngle = 180 - startingAngle;

        // If there's any midspin tile inside
        if (tileCodes.includes('!')) {
            // For easier calculation of midspin tiles we just split it to '!' first
            let tileCodesSplit = tileCodes.split('!');
            tileCodesSplit.forEach(t => {
                // TODO: Write a code that 
            });
        }
    }

    private static GetRelativeMidspinAngle(prevAngle: number, nextAngle: number, twirled = false): number {
        // Middle angle to append
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