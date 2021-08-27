import { Level, PathData } from "../../dist";

let level = new Level();

level.pathData = PathData.createPathList("!RRRD!URRURDUUURRRRRVBLBVR!!!");

console.log("Original data", level.pathData);

let angles = PathData.toAngleArray();

console.log("New data", angles)