import ADOFAI from "./ADOFAI-WebModule.js";

window.tempClass = ADOFAI;

const ready = () => {
  var m = new ADOFAI(); // create a level instance.

  m.pathData.push(new ADOFAI.PathData("L")); // create a tile with code 'L'.
  m.settings.levelDesc = "Hello world!"; // change the setting of a level.
  m.actions.push(new ADOFAI.Action(0, "AddDecoration")); // create a action and push it.

  return console.log(m.actions);
};

if (
  document.readyState == "complete" ||
  (document.readyState != "loading" && !document.documentElement.doScroll)
)
  ready();
else document.addEventListener("DOMContentLoaded", ready);
