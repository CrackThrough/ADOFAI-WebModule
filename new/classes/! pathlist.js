import PathData from "./pathdata.js";

/**
 * .
 */
class PathList {
    /**
     * Creates .
     * @param {PathData[]} floors A collection with utilities of `Pathdata`
     */
    constructor(floors = []) {
        this.floors = floors;
    }
    
    /**
     * Actual list of `PathData`.
     * @type {PathData[]}
     */ 
    floors = [];

    /**
     * Converts this instance into string
     * @returns {string}
     */
    toString() {
        return this.floors.map(x => x.code).join('');
    }

    // /**
    //  * Returns a relative angle of a tile.
    //  * @param {number} index index of a tile to get relative angle
    //  */
    // getRelativeAngle(index) {
    //     if (this.floors.length <= index || index < 0) throw new Error(`Index is out of bounds: Index ${index} out of bounds for length ${this.floors.length}`);

    //     if (!index) return this.floors[0].angle % 360;
    //     let latestIndex = index,
    //         latestFloor = this.floors[0],
    //         prevAngle = 0;

    //     while ((latestFloor = this.floors[--latestIndex]).isAlwaysRelative) {
    //         if (latestFloor) {
    //             prevAngle += 540 - latestFloor.angle;
    //         } else break;
    //     }

    //     prevAngle += latestFloor?.angle ?? 180;
    //     prevAngle %= 360;

    // }

    // /**
    //  * Converts this instance into an milliseconds array.
    //  */
    // toMsArray() {
        
    // }
}

export default PathList;