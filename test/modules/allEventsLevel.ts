import { Actions, Level, PathData } from "../../dist";

const level = new Level();

// Replace pathData
level.pathData =
    PathData.createPathList("RRRRRRRRRRRRRRRRRRRRRULLLLURRULURULLLURRRRRRRUURRUURRUULLDDRRRYTR");

// Change settings
level.settings.artist = "Hello World!";

// Push every actions
level.actions.push(
    new Actions.$UNKNOWN_ACTION(0, { c: "cccccccccccccccccccccc" }),
    new Actions.AddDecoration(0),
    new Actions.AddText(0),
    new Actions.AnimateTrack(0),
    new Actions.Bloom(0),
    new Actions.ChangeTrack(0),
    new Actions.Checkpoint(0),
    new Actions.ColorTrack(0),
    new Actions.CustomBackground(0),
    new Actions.Flash(0),
    new Actions.HallOfMirrors(0),
    new Actions.MoveCamera(0),
    new Actions.MoveDecoration(0),
    new Actions.MoveTrack(0),
    new Actions.PositionTrack(0),
    new Actions.RecolorTrack(0),
    new Actions.RepeatEvents(0),
    new Actions.ScreenScroll(0),
    new Actions.ScreenTile(0),
    new Actions.SetConditionalEvents(0),
    new Actions.SetFilter(0),
    new Actions.SetHitsound(0),
    new Actions.SetPlanetRotation(0),
    new Actions.SetSpeed(0),
    new Actions.SetText(0),
    new Actions.ShakeScreen(0),
    new Actions.Twirl(0),
);

export { level };