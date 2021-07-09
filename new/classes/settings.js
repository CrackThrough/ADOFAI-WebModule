import Color from './color.js';

/**
 * Level Settings
 */
class Settings {
    version = 4;
    artist = "Composer";
    specialArtistType = "None";
    artistPermission = "";
    song = "Music";
    author = "Creator";
    separateCountdownTime = true;
    previewImage = "";
    previewIcon = "";
    previewIconColor = new Color();
    previewSongStart = 0;
    previewSongDuration = 10;
    seizureWarning = false;
    levelDesc = "Your level's description!";
    levelTags = "";
    artistLinks = "";
    difficulty = 1;
    songFilename = "";
    bpm = 120;
    volume = 100;
    offset = 0;
    pitch = 100;
    hitsound = "Kick";
    hitsoundVolume = 100;
    countdownTicks = 4;
    trackColorType = "Single";
    trackColor = new Color();
    secondaryTrackColor = new Color();
    trackColorAnimDuration = 2;
    trackColorPulse = "None";
    trackPulseLength = 10;
    trackStyle = "Standard";
    trackAnimation = "None";
    beatsAhead = 8;
    trackDisappearAnimation = "None";
    beatsBehind = 1;
    backgroundColor = new Color();
    showDefaultBGIfNoImage = false;
    bgImage = "";
    bgImageColor = new Color();
    parallax = [100, 100];
    bgDisplayMode = "FitToScreen";
    lockRot = false;
    loopBG = false;
    unscaledSize = 100;
    relativeTo = "Player";
    position = [0, 0];
    rotation = 0;
    zoom = 160;
    bgVideo = "";
    loopVideo = false;
    vidOffset = 0;
    floorIconOutlines = false;
    stickToFloors = false;
    planetEase = "Linear";
    planetEaseParts = 1;
    legacyFlash = false;
}

export default Settings;