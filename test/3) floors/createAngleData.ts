import { Level, AngleData } from "../../dist";

let level = new Level();

console.log("Create good angle data");
level.angleData = new AngleData(0, 0, 0, 0, 90, 90, 0, 0, 0, -90, -45, 22.5);

console.log("oh yes the value is", level.angleData);