import { Level } from "../../dist";

// @ts-ignore Get last saved level
let level: Level = global["__currentTestLevel"] as Level;

console.log("Exporting Level..");
console.log(level.export());