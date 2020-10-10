/**
 * Class for easy manipulation of paths.
 *
 * Used directly in `pathData: "..."`.
 *
 * Contains every types of path. Do `Object.keys(AdofaiMapPathData.PATH_LIST)` to get all list of Path in String.
 */

class AdofaiMapPathData {
  /**
   * Create a path using a constructor.
   * @param {String | Number} val Base value to create a instance of.
   *
   * When you input String: You are creating a path using a **Tile Code**.
   *
   * When you input Number: You are creating a path using a **Absolute Angle of the tile**. If you want to get a twirled one's angle, input `360 - angle`.
   *
   * Inputting number might return instance with empty values when no corresponding tile is found.
   *
   * @param {Object} settings Customizable settings to generate a tile.
   */
  constructor(
    val,
    settings = {
      /**
       * Whether to try to find the most closest angle when the given angle does not exist
       */
      findNearestTileByAngle: false,

      /**
       * Whether to use the tile with higher (<-- false) or smaller (<-- true) angle when difference of nearest angle is both the same.
       */
      useSmallerAngleOnOverlapping: true,

      /**
       * Use this to return a specific tile as a "fallback tile" instead of empty class.
       *
       * You should input a tile code here.
       */
      fallback: null,
    }
  ) {
    if (!settings || Object.keys(settings || {}).length != 3)
      settings = {
        findNearestTileByAngle: false,
        useSmallerAngleOnOverlapping: true,
        fallback: null,
      };

    if (settings.fallback) {
      if (!AdofaiMapPathData.PATH_LIST.includes(settings.fallback)) {
        settings.fallback = null;
      }
    }

    switch (typeof val) {
      case "string":
        var tilecode = val.toUpperCase()[0];

        if (AdofaiMapPathData.PATH_LIST.includes(tilecode)) {
          this.code = tilecode;
          this.absoluteAngle =
            AdofaiMapPathData.ABSOLUTE_ANGLE_LIST[
              AdofaiMapPathData.PATH_LIST.indexOf(tilecode)
            ];
          if (this.code == null || this.absoluteAngle == null)
            return new AdofaiMapPathData(settings.fallback);
        } else if (settings.fallback != null) {
          return new AdofaiMapPathData(settings.fallback);
        }

        break;
      case "number":
        if (AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.includes(val)) {
          this.absoluteAngle = val;
          this.code =
            AdofaiMapPathData.PATH_LIST[
              AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.indexOf(val)
            ];
          if (this.code == null || this.absoluteAngle == null)
            return new AdofaiMapPathData(settings.fallback);
        } else {
          if (settings.findNearestTileByAngle) {
            var sorted = AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.sort();
            var nearest = 0;
            var dist = Infinity;
            sorted.forEach((n) => {
              var d = Math.abs(nearest - val);
              if (d < dist) {
                dist = d;
                nearest = n;
              } else if (d == dist && n != nearest)
                nearest = settings.useSmallerAngleOnOverlapping
                  ? n > nearest
                    ? nearest
                    : n
                  : n < nearest
                  ? nearest
                  : n;
            });
            var index = AdofaiMapPathData.ABSOLUTE_ANGLE_LIST.indexOf(nearest);
            if (index != null) {
              this.code = AdofaiMapPathData.PATH_LIST[index];
              this.absoluteAngle = nearest;
              if (this.code == null || this.absoluteAngle == null)
                return new AdofaiMapPathData(settings.fallback);
            } else return new AdofaiMapPathData(settings.fallback);
          } else {
            if (settings.fallback != null) {
              return new AdofaiMapPathData(settings.fallback);
            }
          }
        }
        break;
    }
  }

  /**
   * Code of the path.
   */
  code = new String();

  /**
   * Absolute angle of the path.
   */
  absoluteAngle = NaN;

  /**
   * List of the path type as String.
   */
  static PATH_LIST = [
    "U",
    "R",
    "L",
    "D",
    "E",
    "C",
    "Q",
    "Z",
    "H",
    "G",
    "T",
    "J",
    "M",
    "B",
    "F",
    "N",
    "5",
    "6",
    "7",
    "8",
    "!",
  ];

  /**
   * List of the path's absolute angle as Number.
   *
   * In most cases, you do not need this one.
   */
  static ABSOLUTE_ANGLE_LIST = [
    90,
    180,
    360,
    270,
    135,
    225,
    45,
    315,
    30,
    60,
    120,
    150,
    210,
    240,
    300,
    330,
    108,
    252,
    900 / 7,
    1620 / 7,
    0,
  ];

  /**
   * Calculate the Angle between tiles. THIS IS NOT FOR ! TILES.
   * ! Tile can be calculated differently rather than getting relative angle.
   * For example, String `RD!R`'s R.A is 180, 270, (0, ) 270.
   * You can do `360 - TileD.absoluteAngle` and use its angle to create and use a temporary tile to calculate angle between `D!` and `R`.
   *
   * Correct Usage:
   * GetRelativeAngle(tileA, tileB, false);
   * GetRelativeAngle(tileA.code + "5768888755786", tileB, true);
   *
   * @param {AdofaiMapPathData | String} ThisTile First tile to be a base for B. (Input String when calculating all of 5, 6, 7, 8. They should be calculated at once)
   * @param {AdofaiMapPathData} NextTile Second tile to base on A.
   * @param {Boolean} Twirled Whether the planet is twirled or not.
   */
  static GetRelativeAngle(ThisTile, NextTile, Twirled) {
    var t = new Number();
    switch (typeof ThisTile) {
      case "string":
        var str = ThisTile.replace(/[ \t]/g, "").toUpperCase();
        var sp = str.split(/[^5-8]/gi);
        var laststr = sp[sp.length - 1];
        var angle = NaN;
        if (laststr.length != 0) {
          var _5 = laststr.replace(/[^5]/g, "").length;
          var _6 = laststr.replace(/[^6]/g, "").length;
          var _7 = laststr.replace(/[^7]/g, "").length;
          var _8 = laststr.replace(/[^8]/g, "").length;

          angle = (72 * _5 + 288 * _6 + (900 / 7) * _7 + (1620 / 7) * _8) % 360;
        } else {
          if (!AdofaiMapPathData.PATH_LIST.includes(str[str.length - 1]))
            throw new Error(`Invalid tile "${ThisTile}"`);
          angle = new AdofaiMapPathData(str[str.length - 1]).absoluteAngle;
        }
        t = angle;
        break;
      default:
        t = ThisTile.absoluteAngle;
        break;
    }
    var n = NextTile.absoluteAngle;

    var result = (n - t + 540) % 360;
    result = result == 0 ? 360 : result;
    result = Twirled ? 360 - result : result;

    return result;
  }

  /**
   * Calculate the milliseconds between 2 tiles.
   * @param {Number} Angle Angle between 2 tiles.
   * @param {Number} BPM BPM on that specific tile.
   */
  static GetMsBetweenTile(Angle, BPM) {
    return (1000 * Angle) / (3 * BPM);
  }
}

export default AdofaiMapPathData;
