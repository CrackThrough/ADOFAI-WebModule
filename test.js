import ADOFAI from "./ADOFAI-WebModule.js";

window.tempClass = ADOFAI;

const ready = () => {
  var m = new ADOFAI(); // create a level instance.

  m.pathData.push(new ADOFAI.PathData("L")); // create a tile with code 'L'.
  m.settings.levelDesc = "Hello world!"; // change the setting of a level.
  m.actions.push(
    new ADOFAI.Action(
      4,
      "SetSpeed",
      new ADOFAI.Action.ACTIONS_LIST.SetSpeed(true, 200, 1)
    )
  ); // create a action and push it.

  return console.log(m.Export());
};

if (
  document.readyState == "complete" ||
  (document.readyState != "loading" && !document.documentElement.doScroll)
)
  ready();
else document.addEventListener("DOMContentLoaded", ready);
