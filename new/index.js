/**
 * Class representing the ADOFAI level.
 */
class Level {
    /**
     * The path data of the level.
     * @type {LevelPathCode[]}
     */
    pathData;

    /**
     * The settings of the level.
     * @type {LevelSettings}
     */
    settings;

    /**
     * The actions of the level
     * @type {LevelAction[]}
     */
    actions;
}

export default Level;

// ! For testing purposes, delete before release!
let level = new Level();
