import { Level, Actions } from "../dist";

const level = new Level();

level.actions.push(new Actions.PositionTrack(2, [0, 1], false));
level.actions.push(new Actions.PositionTrack(1, [0, 1], false));

console.log(level.actions);

level.sortActions();

console.log(level);
