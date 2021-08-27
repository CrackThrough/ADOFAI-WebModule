import { Level } from "../../dist";
import { level as modifiedLevel, loadedLevelDict } from "../modules";

let level = new Level();

console.log("Exporting Default Level..");
console.log(level.export());

console.log("Exporting Modified Level..");
console.log(modifiedLevel.export());

console.log("Loading and Exporting :D");
for (let levelName in loadedLevelDict) {
    let curLevel = loadedLevelDict[levelName];

    console.log("Exported level data of " + levelName);
    console.log(curLevel.export());
}