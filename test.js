import ADOFAI from "./ADOFAI-WebModule.js";

window.tempClass = ADOFAI;

const ready = () => {
  var m = new ADOFAI(); // create a level instance.

  // m = ADOFAI.Import(``); // you can also import from a string

  let arr = [];

  m.actions.forEach((a) => {
    if (["SetSpeed", "Twirl"].includes(a.eventType)) {
      arr.push(a);
    }
  });
  m.actions = arr;

  return console.log(m.Export());
};

if (
  document.readyState == "complete" ||
  (document.readyState != "loading" && !document.documentElement.doScroll)
)
  ready();
else document.addEventListener("DOMContentLoaded", ready);
