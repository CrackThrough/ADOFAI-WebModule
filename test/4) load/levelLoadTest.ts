import { readdirSync, readFileSync } from "fs";
import { Level } from "../../dist";

let loadedLevel: Level;

const TARGET_DIR = "./test/custom_levels/";

let files = readdirSync(TARGET_DIR);
console.log(`Directory contents (${files.length}):`, files);

files.forEach(filename => {
    let filedir = TARGET_DIR + filename;
    console.log(`Reading "${filedir}"..`);

    let fileContent = readFileSync(filedir).toString();
    console.log(`File content:\n${fileContent}`);
    console.log("----- End of file content -----");

    loadedLevel = Level.import(fileContent);
    console.log("Level instance:");
    console.log(loadedLevel);
});