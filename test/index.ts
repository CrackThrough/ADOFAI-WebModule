import { walk } from "walk";

// Starting directory
const TEST_DIR = ".\\test";

// Logging timestamp format
const LOG_TIME_FORMAT: Intl.DateTimeFormatOptions[] = [
    // YYYY-MM-DD
    { year: "numeric" },
    { month: "2-digit" },
    { day: "2-digit" },

    // hh:mm:ss
    { hour: "numeric", hourCycle: "h24" },
    { minute: "2-digit" },
    { second: "2-digit" }
];

// Logging timestamp separators
const LOG_TIME_SEPARATORS = [
    "-",
    "-",
    " ",
    ":",
    ":",
    ".",
];

// Join an DateTimeFormatOptions[] into timestamp
function getTimestamp(time = new Date()): string {
    // Get the format and map through
    const formatList = LOG_TIME_FORMAT
        .map((e, i) =>
            // Format the timestamp and add additional separator as suffix
            new Intl.DateTimeFormat('en', e)
                .format(time) + LOG_TIME_SEPARATORS[i] ?? LOG_TIME_SEPARATORS[0]);
    
    // Why does DateTimeFormatOptions not have milliseconds
    // This is a pure pain to organize
    formatList.push(time.getMilliseconds().toString());

    // Finally, join the string and return
    return formatList.join("");
}

// Walk through all the nested files
walk(TEST_DIR).on("files", (base, fileStats, next) => {
    const isFirstDirectory = base === TEST_DIR;

    fileStats.forEach(fileStat => {
        // Ignore files
        if (isFirstDirectory && fileStat.name === "index.js") return;
        if (!fileStat.name.endsWith(".ts")) return;

        // Load each test file
        const fileFullDirectory = base + "\\" + fileStat.name,
            fileDirectory = base.replace(TEST_DIR, ".") + "\\" + fileStat.name;
        console.log(`${getTimestamp()} | Testing "${fileFullDirectory}"..`);

        // Require the test file for file execution
        require(fileDirectory);
    });

    // Go to next directory
    next();
});