import { Level, AngleData } from "../../dist";

let level = new Level();

console.log("Original angles:");

level.angleData = new AngleData(999, 0, 0, 0, 0, 90, 999, 90, 0, 0, 0, -90, -45, 22.5, 999, 999, 999);
console.log(level.angleData);

console.log("Relative angles:");

let angles = level.angleData.toAngleArray();
console.log(angles);