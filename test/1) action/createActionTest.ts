import { Level, Action, Actions, Color } from "../../dist";

// Level instance
let level = new Level();

// Action instance
let currentAction: Action;

// Shorthand function for logging
const log = console.log;

// Shorthand function for pushing and logging action
function p() {
    console.log(currentAction);
    level.actions.push(currentAction);
}

// Now we test action constructors
//#region Instance Creation Test
// ---------------------------------
log("Create instance of: $UNKNOWN_ACTION (+ one argument)");

currentAction = new Actions.$UNKNOWN_ACTION(0);
p();

// ---------------------------------
log("Create instance of: $UNKNOWN_ACTION");

currentAction = new Actions.$UNKNOWN_ACTION(0, { "⚡": "very c" });
p();

// ---------------------------------
log("Create instance of: AddDecoration");

currentAction = new Actions.AddDecoration(
    3,
    "decoratin image good.png",
    [10, -9.344],
    "RedPlanet",
    [0, 1],
    222.222,
    111,
    Color.fromString("abcdef"),
    1,
    "my very tag"
);

p();

// ---------------------------------
log("Create instance of: AddText");

currentAction = new Actions.AddText(
    -Infinity,
    "my text decoration",
    "CourierNew",
    [1, -49],
    "BluePlanet",
    [NaN, NaN],
    1,
    3,
    Color.fromString("000000"),
    0,
    "ta?"
);

p();

// ---------------------------------
log("Create instance of: Bloom");

currentAction = new Actions.Bloom(
    NaN,
    false,
    50,
    10,
    Color.fromString("ffffff"),
    33,
    "eventtag asd gsadd gdgdyud gu dghfiufgy fugdfsad"
);

p();

// ---------------------------------
log("Create instance of: ChangeTrack");

currentAction = new Actions.ChangeTrack(
    0,
    "Stripes",
    Color.fromNumber(0),
    Color.fromString("fff"),
    1,
    "Backward",
    0,
    "Basic",
    "None",
    1,
    "Fade",
    0
);

p();

// ---------------------------------
log("Create instance of: Checkpoint");

currentAction = new Actions.Checkpoint(
    128
);

p();

// ---------------------------------
log("Create instance of: ColorTrack");

currentAction = new Actions.ColorTrack(
    0,
    "Stripes",
    Color.fromNumber(34),
    Color.fromNumber(0),
    123,
    "None",
    234,
    "Gems"
);

p();

// ---------------------------------
log("Create instance of: CustomBackground");

currentAction = new Actions.CustomBackground(
    1,
    Color.fromString("fff"),
    "sadfsad",
    Color.fromString("fff"),
    [0, 0],
    "Unscaled",
    false,
    true,
    13,
    3,
    "C"
);

p();

// ---------------------------------
log("Create instance of: Flash");

currentAction = new Actions.Flash(
    0,
    1,
    "Background",
    Color.red,
    100,
    Color.clear,
    0,
    1,
    "c"
);

p();

// ---------------------------------
log("Create instance of: HallOfMirrors");

currentAction = new Actions.HallOfMirrors(
    1,
    false,
    1,
    "adfgsdgfgs"
);

p();

// ---------------------------------
log("Create instance of: MoveCamera");

currentAction = new Actions.MoveCamera(
    3,
    3,
    "LastPosition",
    [1, 0],
    4,
    120,
    14,
    "InOutCubic",
    ""
);

p();

// ---------------------------------
log("Create instance of: MoveDecoration");

currentAction = new Actions.MoveDecoration(
    34345342342342,
    0,
    "pleas send help why are there so much evenst i want to die",
    [1, 3.326324],
    -0.94,
    -9000,
    Color.white,
    69,
    "OutSine",
    "free event tag download 2021/???????????????????????????????????????"
);

p();

// ---------------------------------
log("Create instance of: MoveTrack");

currentAction = new Actions.MoveTrack(
    1,
    [3, "ThisTile"],
    [0, "End"],
    4,
    [0, 0],
    123,
    4,
    0,
    214,
    "Linear",
    "dfdsdfdfs"
);

p();

// ---------------------------------
log("Create instance of: PositionTrack");

currentAction = new Actions.PositionTrack(
    1,
    [3, 4],
    true
);

p();

// ---------------------------------
log("Create instance of: RecolorTrack");

currentAction = new Actions.RecolorTrack(
    1,
    [0, "Start"],
    [0, "End"],
    "Glow",
    Color.blue,
    Color.clear,
    3,
    "None",
    10,
    "Neon",
    0,
    ""
);

p();

// ---------------------------------
log("Create instance of: RepeatEvents");

currentAction = new Actions.RepeatEvents(
    3,
    4,
    1,
    "E"
);

p();

// ---------------------------------
log("Create instance of: ScreenScroll");

currentAction = new Actions.ScreenScroll(
    3,
    [1, 0],
    0,
    "ligma balls"
);

p();

// ---------------------------------
log("Create instance of: ScreenTile");

currentAction = new Actions.ScreenTile(
    0,
    [-1, -1],
    0,
    "sda"
);

p();

// ---------------------------------
log("Create instance of: SetConditionalEvents");

currentAction = new Actions.SetConditionalEvents(
    0,
    "a",
    "B",
    "ccccccccccccccccccccccc",
    "E",
    "h"
);

p();

// ---------------------------------
log("Create instance of: SetFilter");

currentAction = new Actions.SetFilter(
    5,
    "Neon",
    true,
    100,
    false,
    0,
    "cccccccccccdddcdddddcddcd"
);

p();

// ---------------------------------
log("Create instance of: SetHitsound");

currentAction = new Actions.SetHitsound(
    1,
    "Chunk",
    100
);

p();

// ---------------------------------
log("Create instance of: SetPlanetRotation");

currentAction = new Actions.SetPlanetRotation(
    99,
    "OutQuad",
    4
);

p();

// ---------------------------------
log("Create instance of: SetSpeed");

currentAction = new Actions.SetSpeed(
    4,
    "Bpm",
    300,
    1
);

p();

// ---------------------------------
log("Create instance of: SetText");

currentAction = new Actions.SetText(
    4,
    "its time",
    "tO STOP",
    3,
    "when the the so the that you see the so funny LOL HAAHHAAHAAHAHAASgffdsaafuas6fsaudyvahsbasfjk"
);

p();

// ---------------------------------
log("Create instance of: ShakeScreen");

currentAction = new Actions.ShakeScreen(
    8,
    16,
    40,
    500,
    true,
    0,
    "Man, I definitely have some psychological issues :)"
);

p();

// ---------------------------------
log("Create instance of: Twirl");

currentAction = new Actions.Twirl(
    0,
    false
);

p();
//#endregion

// @ts-ignore Cache level in dirty way
global["__currentTestLevel"] = level;