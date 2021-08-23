import type { Settings, JSONLevelStructure, PathCode } from "../types";
import { AngleData, Action, Color, PathData } from ".";
import * as ALL_ACTIONS from "../actions";

/**
 * Class representing a custom level
 */
export class Level {
    /**
     * List of angles (replaces pathData).
     */
    angleData: AngleData | undefined;

    /**
     * Converts this level's path.
     * @param convertTo convert to pathData or angleData
     */
    convertPath(convertTo: "pathData" | "angleData"): void {
        // TODO: Write a code here
    }

    /**
     * Exports this level into a json string which ADOFAI can read.
     * @param releaseNumber ADOFAI's release number to export with specific version
     * @param useAngleData whether to use angleData instead of pathData when exporting
     */
    export(releaseNumber: number = 75, useAngleData = false): string {
        // Convert pathData to angleData
        // Only use angleData if releaseNumber is greater than 75 (the version right before mesh system is added)
        if (releaseNumber > 75 && useAngleData) {
            // If there is no angleData defined in the instance
            if (!this.angleData) {
                this.convertPath("angleData");
            }
        } else if (!this.pathData) {
            // Add empty pathData just in case
            this.pathData = [];
        }

        return JSON.stringify(
            this,
            (key, value) => {
                // TODO: Implement a feature to disable specific keys / values from being exported by game's release version
                switch (releaseNumber) {
                    case 75:
                        break;
                    default:
                        break;
                }

                // Export as string instead of actual boolean value
                if (typeof value === "boolean") {
                    return (value = value ? "Enabled" : "Disabled");
                }

                // Export as string instead of actual PathData instance
                if (value instanceof PathData) {
                    return value.code;
                }

                // Export as string instead of actual Color instance
                if (value instanceof Color) {
                    return value.toString();
                }

                return value;
            },
            "\t"
        );
    }

    /**
     * Sorts action by floor number and eventType.
     * @returns current instance
     */
    sortActions(): this {
        // Sort by floor number and eventType
        this.actions.sort(
            (a, b) => a.floor - b.floor || (a.eventType > b.eventType ? 1 : -1)
        );

        // Return the current instance
        return this;
    }

    /**
     * Create an instance of `Level`.
     * @param pathData list of path
     * @param settings level settings
     * @param actions level actions
     */
    constructor(
        public pathData: PathData[] | undefined = new Array(10).fill(
            new PathData("R")
        ),
        public settings: Settings = Level.DEFAULT_SETTINGS,
        public actions: Action[] = []
    ) {}

    /**
     * Default settings which ADOFAI provides
     */
    static get DEFAULT_SETTINGS(): Settings {
        return {
            version: 4,
            artist: "Artist",
            specialArtistType: "None",
            artistPermission: "",
            song: "Song",
            author: "Author",
            separateCountdownTime: true,
            previewImage: "",
            previewIcon: "",
            previewIconColor: Color.fromString("003f52"),
            previewSongStart: 0,
            previewSongDuration: 10,
            seizureWarning: false,
            levelDesc: "Say something about your level!",
            levelTags: "",
            artistLinks: "",
            difficulty: 1,
            songFilename: "",
            bpm: 100,
            volume: 100,
            offset: 0,
            pitch: 100,
            hitsound: "Kick",
            hitsoundVolume: 100,
            countdownTicks: 4,
            trackColorType: "Single",
            trackColor: Color.fromString("debb7b"),
            secondaryTrackColor: Color.fromString("ffffff"),
            trackColorAnimDuration: 2,
            trackColorPulse: "None",
            trackPulseLength: 10,
            trackStyle: "Standard",
            trackAnimation: "None",
            beatsAhead: 3,
            trackDisappearAnimation: "None",
            beatsBehind: 4,
            backgroundColor: Color.fromString("000000"),
            showDefaultBGIfNoImage: true,
            bgImage: "",
            bgImageColor: Color.fromString("ffffff"),
            parallax: [100, 100],
            bgDisplayMode: "FitToScreen",
            lockRot: false,
            loopBG: false,
            unscaledSize: 100,
            relativeTo: "Player",
            position: [0, 0],
            rotation: 0,
            zoom: 100,
            bgVideo: "",
            loopVideo: false,
            vidOffset: 0,
            floorIconOutlines: false,
            stickToFloors: false,
            planetEase: "Linear",
            planetEaseParts: 1,
            legacyFlash: false,
        }
    }

    /**
     *
     * @param fileContent the .adofai file content to import level data from
     * @returns instance of the `Level`.
     */
    static import(fileContent: string): Level {
        // Backup strings to remove all whitespaces for easier parsing
        let strings = fileContent.match(/"([^"]|\")*"/g) ?? [];

        // Fix fileContent to be parsable with JSON.parse()
        // (because ADOFAI's old json formatting was a complete mess)
        fileContent = fileContent
            .replace(/"([^"]|\")*"/g, "__String__") // replace entire string to "__String__"
            .replace(/\s/g, "") // remove whitespace
            .replace(/,,/g, ",") // remove repeating comma
            .replace(/,}/g, "}") // remove trailing comma on curly brackets
            .replace(/,\]/g, "]"); // remove trailing comma on square brackets

        // Revert original strings from "__String__"
        fileContent = fileContent.replace(/__String__/g, () => {
            return strings.shift() ?? "";
        });

        // Try to parse data from JSON
        let parsedLevelData: JSONLevelStructure | null = null;
        try {
            parsedLevelData = JSON.parse(fileContent) as JSONLevelStructure;
        } catch (err) {
            console.error(
                "Could not parse the level successfully.\n\n" +
                    (err as Error).message
            );
        }

        // Create instance of a Level
        let result = new Level();

        // Return parsed level data if the data is available.
        if (parsedLevelData) {
            let { angleData, pathData, settings, actions } = parsedLevelData;

            let newPathData: PathData[] = [],
                newActions: Action[] = [];

            // Append data to PathData array
            pathData?.split("").forEach((p) => {
                let tile = new PathData(p as PathCode);
                newPathData.push(tile);
            });

            // Backup default pathData just in case
            let defaultPathData = result.pathData;

            // Replace angleData or pathData and settings
            result.pathData = newPathData.length ? newPathData : undefined;
            result.angleData = angleData?.length ? angleData : undefined;
            result.settings = settings;

            // Use default pathData if no tile data is found
            if (!result.pathData && !result.angleData) {
                result.pathData = defaultPathData;
            }

            // Append data to Actions array
            actions.forEach((a) => {
                let curEventType = a.eventType;
                if (!Object.keys(ALL_ACTIONS).includes(curEventType))
                    curEventType = "$UNKNOWN_ACTION";

                // Create a action safely
                let action: Action = new ALL_ACTIONS[curEventType](a.floor);

                // Append all data except for unknown action
                if (action.eventType != "$UNKNOWN_ACTION") {
                    for (let k in a) {
                        if (!["floor", "_eventType", "eventType"].includes(k)) {
                            // @ts-ignore
                            action[k] = a[k];
                        }
                    }
                } else {
                    // @ts-ignore Store the event value in rawData
                    action.rawData = a;
                }

                // Append action data
                newActions.push(action);
            });

            // Replace actions
            result.actions = newActions;
        }

        return result;
    }
}
