import { readdirSync, readFileSync } from "fs";
import { Level } from "../../dist";

const loadedLevelDict: { [key: string]: Level } = {};

const TARGET_DIR = "./test/custom_levels/";

let files = readdirSync(TARGET_DIR);
console.log(`Directory contents (${files.length}):`, files);

files.forEach(filename => {
    let filedir = TARGET_DIR + filename;
    let fileContent = readFileSync(filedir).toString();

    loadedLevelDict[filename] =
        Level.import(fileContent);
});

export { loadedLevelDict };