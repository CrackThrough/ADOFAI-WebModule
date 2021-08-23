import { Level, Types } from "../../dist";

// @ts-ignore Get last saved level
let level: Level = global["__currentTestLevel"] as Level;

let settings: Types.Settings = Level.DEFAULT_SETTINGS;
settings.artist = "sussssy boi";
settings.author = "uwu???????#@?#$?%";
settings.bpm = 1200;
settings.pitch = 23;
settings.stickToFloors = true;
settings.song = "testing is hard";

level.settings = settings;

console.log("Changed level settings");
console.log(level.settings);