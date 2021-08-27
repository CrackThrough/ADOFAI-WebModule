import { Level, Types } from "../../dist";

let level: Level = new Level();

// load from default settings
let settings: Types.Settings = Level.DEFAULT_SETTINGS;
settings.artist = "sussssy boi";
settings.author = "uwu???????#@?#$?%";
settings.bpm = 1200;
settings.pitch = 23;
settings.stickToFloors = true;
settings.song = "testing is hard";

level.settings = settings;

console.log("Changed level settings:", level.settings);
console.log("Default Settings:", Level.DEFAULT_SETTINGS);