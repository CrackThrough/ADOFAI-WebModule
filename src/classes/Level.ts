import type { Settings } from "../typings";
import { Action, Color, PathData } from "..";

/**
 * Class representing a custom level
 */
export class Level {
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
     * Create an instance of `Level`.
     * @param pathData list of path
     * @param settings level settings
     * @param actions level actions
     */
    constructor(public pathData: PathData[] = [], public settings: Settings = Level.DEFAULT_SETTINGS, public actions: Action[] = []) {}
}
