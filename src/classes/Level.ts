import type { Settings, JSONLevelStructure, PathCode } from "../typings";
import { Action, Color, PathData } from "..";
import * as ALL_ACTIONS from "../actions";

/**
 * Class representing a custom level
 */
export class Level {
    /**
     * Exports this level into a json string which ADOFAI can read.
     * @param releaseNumber ADOFAI's release number to export with specific version
     */
    Export(releaseNumber: number = 75): string {
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

    SortAction(): this {
        return this;
    }

    /**
     * Create an instance of `Level`.
     * @param pathData list of path
     * @param settings level settings
     * @param actions level actions
     */
    constructor(
        public pathData: PathData[] = new Array(10).fill(new PathData("R")),
        public settings: Settings = Level.DEFAULT_SETTINGS,
        public actions: Action[] = []
    ) {}

    /**
     * Default settings which ADOFAI provides
     */
    static readonly DEFAULT_SETTINGS: Settings = {
        version: 4,
        artist: "Artist",
        specialArtistType: "None",
        artistPermission: "",
        song: "Song",
        author: "Author",
        separateCountdownTime: true,
        previewImage: "",
        previewIcon: "",
        previewIconColor: Color.FromString("003f52"),
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
        trackColor: Color.FromString("debb7b"),
        secondaryTrackColor: Color.FromString("ffffff"),
        trackColorAnimDuration: 2,
        trackColorPulse: "None",
        trackPulseLength: 10,
        trackStyle: "Standard",
        trackAnimation: "None",
        beatsAhead: 3,
        trackDisappearAnimation: "None",
        beatsBehind: 4,
        backgroundColor: Color.FromString("000000"),
        showDefaultBGIfNoImage: true,
        bgImage: "",
        bgImageColor: Color.FromString("ffffff"),
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
    };

    /**
     *
     * @param fileContent the .adofai file content to import level data from
     * @returns instance of the `Level`.
     */
    static Import(fileContent: string): Level {
        // Backup strings to remove all whitespaces for easier parsing
        let strings = fileContent.match(/"([^"]|\")*"/g) ?? [];

        // Fix fileContent to be parsable with JSON.parse()
        fileContent = fileContent
            .replace(/"([^"]|\")*"/g, "__String__") // replace string to "__String__"
            .replace(/\s/g, "") // remove whitespace
            .replace(/,,/g, ",") // remove repeating comma
            .replace(/,}/g, "}") // remove trailing comma on curly brackets
            .replace(/,\]/g, "]"); // remove trailing comma on square brackets

        // Revert original strings
        fileContent = fileContent.replace(/__String__/g, () => {
            return strings.shift() ?? "";
        });

        //
        let parsedLevelData: JSONLevelStructure | null = null;
        try {
            parsedLevelData = JSON.parse(fileContent) as JSONLevelStructure;
        } catch (err) {
            throw new Error(
                "Could not parse the level successfully.\n\n" +
                    (err as Error).message
            );
        }

        let result = new Level();

        if (parsedLevelData) {
            let { pathData, settings, actions } = parsedLevelData;

            let newPathData: PathData[] = [],
                newActions: Action[] = [];

            // Append data to PathData array
            pathData.split("").forEach((p) => {
                let tile = new PathData(p as PathCode);
                newPathData.push(tile);
            });

            // Replace pathData and settings
            result.pathData = newPathData;
            result.settings = settings;

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
                            action[k] = a[k];
                        }
                    }
                } else {
                    // Store rawData
                    action.rawData = a;
                }

                newActions.push(action);
            });

            result.actions = newActions;
        }

        return result;
    }
}
