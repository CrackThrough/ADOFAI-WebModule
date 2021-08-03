import Color from "./color.js";

/**
 * Class representing level's settings.
 */
class Settings {
    version = 4;
    artist = "Artist";
    specialArtistType = "None";
    artistPermission = "";
    song = "Song";
    author = "Author";
    separateCountdownTime = "Enabled";
    previewImage = "";
    previewIcon = "";
    previewIconColor = Color.FromString("003f52");
    previewSongStart = 0;
    previewSongDuration = 10;
    seizureWarning = "Disabled";
    levelDesc = "Say something about your level!";
    levelTags = "";
    artistLinks = "";
    difficulty = 1;
    songFilename = "";
    bpm = 100;
    volume = 100;
    offset = 0;
    pitch = 100;
    hitsound = "Kick";
    hitsoundVolume = 100;
    countdownTicks = 4;
    trackColorType = "Single";
    trackColor = Color.FromString("debb7b");
    secondaryTrackColor = Color.FromString("ffffff");
    trackColorAnimDuration = 2;
    trackColorPulse = "None";
    trackPulseLength = 10;
    trackStyle = "Standard";
    trackAnimation = "None";
    beatsAhead = 3;
    trackDisappearAnimation = "None";
    beatsBehind = 4;
    backgroundColor = Color.FromString("000000");
    showDefaultBGIfNoImage = "Enabled";
    bgImage = "";
    bgImageColor = Color.FromString("ffffff");
    parallax = [100, 100];
    bgDisplayMode = "FitToScreen";
    lockRot = "Disabled";
    loopBG = "Disabled";
    unscaledSize = 100;
    relativeTo = "Player";
    position = [0, 0];
    rotation = 0;
    zoom = 100;
    bgVideo = "";
    loopVideo = "Disabled";
    vidOffset = 0;
    floorIconOutlines = "Disabled";
    stickToFloors = "Disabled";
    planetEase = "Linear";
    planetEaseParts = 1;
    legacyFlash = "Disabled";
}

export default Settings;
