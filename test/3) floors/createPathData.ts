import { Level, PathData } from "../../dist";

let level = new Level();

console.log("Create good path data");
level.pathData = [
    PathData.createPath(180)
];

level.pathData.push(...PathData.createPathList("RRRDURDUUURRRRRVBLBVR"));

console.log("oh yes the value is", level.pathData);