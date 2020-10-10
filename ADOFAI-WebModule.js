/**
 * This API uses MIT License.
 *
 * Copyright ⓒ CrackThrough 2020.
 * All rights reserved.
 *
 * ===================================================== [ WARNING ] =====================================================
 * BASED ON v1.10.6 (r66) VERSION OF "A DANCE OF FIRE AND ICE". (BETA BUILD)
 * USING THE LATER VERSION MIGHT MAKE BIG DIFFERECE BETWEEN ORIGINAL ADOFAI'S DATA AND THE DATA GENERATED FROM THIS API.
 * USING THE OLDER VERSION MIGHT CAUSE SOME ISSUES, BUT I WILL NOT SUPPORT IT.
 * ===================================================== [ WARNING ] =====================================================
 *
 * Missing a value? Contact to @CrackThrough#5067 (OR USER ID "543672901585469441") on Discord or post a issue on github.
 *
 * Pull requests are ALWAYS appreciated.
 */

import AdofaiMapPathData from "./src/AdofaiMapPathData.js";
import AdofaiMapSettings from "./src/AdofaiMapSettings.js";
import AdofaiMapAction from "./src/AdofaiMapAction.js";
import Enums from "./src/data_types/_init.js";
import Color from "./src/data_types/color.js";

function nthIndexOf(str, s, n) {
  return str.split(s, n).join(s).length;
}

/**
 * A class holding the entire ADOFAI map data.
 */
class ADOFAI {
  /**
   * Create a map data by using a constructor.
   * @param {AdofaiMapPathData[]} pathData An array of pathData.
   * @param {Object} settings A settings object.
   * @param {AdofaiMapAction[]} actions An array of actions (or events).
   */
  constructor(
    pathData = [
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
      new AdofaiMapPathData("R"),
    ],
    settings = AdofaiMapSettings,
    actions = []
  ) {
    this.pathData = pathData == null ? this.pathData : pathData;
    this.settings = settings == null ? this.settings : settings;
    this.actions = actions == null ? this.actions : actions;
  }

  /**
   * An array of pathData.
   */
  pathData = [new AdofaiMapPathData()];

  /**
   * A settings object.
   */
  settings = AdofaiMapSettings;

  /**
   * An array of actions (or events).
   */
  actions = [new AdofaiMapAction()];

  /**
   * Converts the entire map to string and returns it.
   *
   * @returns {String} String(As file content).
   */
  Export() {
    var res = "";
    var path = "";
    this.pathData.forEach((p) => {
      path += p.code;
    });

    var stg = "";
    Object.keys(this.settings).forEach((k, i) => {
      var multiply = [
        "volume",
        "pitch",
        "hitsoundVolume",
        "unscaledSize",
        "zoom",
      ].includes(k);
      var v = this.settings[k];
      switch (typeof v) {
        case "object":
          if (Array.isArray(v)) {
            var s = "";
            v.forEach((_v, _i) => {
              var isLast = _i + 1 == v.length;
              switch (typeof _v) {
                case "string":
                  s += '"' + JSON.stringify(_v) + (isLast ? '"' : '", ');
                  break;
                case "undefined":
                  s += isLast ? "null" : "null, ";
                  break;
                default:
                  s += JSON.stringify(_v) + (isLast ? "" : ", ");
                  break;
              }
            });
            v = `[ ${s} ]`;
          } else v = `"${v.toString()}"`;
          break;
        case "number":
        case "string":
          v = JSON.stringify(multiply ? v * 100 : v);
          break;
        case "boolean":
          v = `"${v ? "Enabled" : "Disabled"}"`;
          break;
        case "undefined":
          v = null;
          break;
      }
      stg += `"${k}": ${v}${
        i + 1 == Object.keys(this.settings).length ? "" : ", \n\t\t"
      }`;
    });

    stg = `\n\t"settings": {\n\t\t${stg}\n\t}, `;

    var ats = `\n\t"actions": [\n\t`;

    for (var i = 0; i < this.actions.length; i++) {
      if (!this.actions[i].eventType) this.actions[i] = null;
    }

    this.actions = this.actions.filter((x) => x);

    this.actions.forEach((e, i) => {
      var isLast = i == this.actions.length - 1;
      if (e.eventType == "Twirl") {
        ats += e.eventValue.DoubleTwirled
          ? `\t{ "floor": ${e.floor}, "eventType": "${
              e.eventType
            }" }, \n\t\t{ "floor": ${e.floor}, "eventType": "${e.eventType}" }${
              isLast ? "\n\t" : ", \n\t"
            }`
          : `\t{ "floor": ${e.floor}, "eventType": "${e.eventType}" }${
              isLast ? "\n\t" : ", \n\t"
            }`;
      } else {
        ats += `\t{ "floor": ${e.floor}, "eventType": "${
          e.eventType
        }"${e.eventValue.asJsonPart()} }${isLast ? "\n\t" : ", \n\t"}`;
      }
    });
    res = `{\n\t"pathData": "${path}", ${stg}${ats}]\n}`;
    return res;
  }

  /**
   * Converts a map value from String and returns instance of this class.
   *
   * Might throw an Error trying to parse. Use this in trycatch or tryfinally block.
   *
   * @param {String} str Content of the .adofai file.
   *
   * @returns {ADOFAI} Class(As ADOFAI Class).
   */
  static Import(str) {
    var res = new ADOFAI([], {}, []);
    var lines = str.split("\n");
    var location = "path";
    var f = false;
    lines.forEach((line, index) => {
      index++;
      switch (location) {
        case "path":
          if (line.includes("pathData")) {
            var val = line
              .substr(
                line.indexOf(":") + 1,
                line.lastIndexOf(",") - line.indexOf(":") - 1
              )
              .trim();
            val = val.substr(1, val.length - 2);
            if (typeof val != "string")
              throw new Error(
                `Expected pathData value to be a string in line ${index} but recieved: '${val}'.`
              );
            location = "stg";
            val.split("").forEach((p, i) => {
              if (AdofaiMapPathData.PATH_LIST.includes(p)) {
                res.pathData.push(new AdofaiMapPathData(p));
              } else
                throw new Error(
                  `Unknown path type in line ${index}: '${p}' in index ${i} of "${val}".`
                );
            });
          }
          break;
        case "stg":
          if (f) {
            if (line.includes(":") && line.includes('"')) {
              if (line.replace(/[ \t]/g, "").endsWith("},")) {
                location = "ats";
              } else {
                if (line.includes(","))
                  line = line.substr(0, line.lastIndexOf(","));
                var i = line.indexOf(":");
                var s = [line.substr(0, i), line.substr(i + 1, Infinity)];
                i = s[0].indexOf('"');
                var k = s[0].substr(i + 1, s[0].lastIndexOf('"') - i - 1);
                try {
                  var v = new Function(`return ${s[1].trim()};`);
                  res.settings[k] =
                    [
                      "separateCountdownTime",
                      "seizureWarning",
                      "lockRot",
                      "loopBG",
                      "loopVideo",
                      "floorIconOutlines",
                      "stickToFloors",
                    ].includes(k) && ["Enabled", "Disabled"].includes(v())
                      ? v() == "Enabled"
                      : typeof v() == "string"
                      ? [
                          "previewIconColor",
                          "trackColor",
                          "secondaryTrackColor",
                          "backgroundColor",
                          "bgImageColor",
                        ].includes(k)
                        ? new Color(v())
                        : v()
                      : v();
                } catch (err) {
                  throw new Error(
                    `An error occurred in line ${index} while parsing the value:\n\n${err.message}`
                  );
                }
              }
            }
          } else {
            if (line.includes("settings")) f = true;
          }
          break;
        case "ats":
          if (line.includes("{")) {
            if (line.includes("}"))
              line = line.substr(0, line.lastIndexOf("}"));
            i = line.indexOf(":");
            var sfloor = line.substr(i + 1, line.indexOf(",") - i - 1);
            if (sfloor.replace(/\D+/g, "") == "")
              throw new Error(
                `Expected a number in line ${index} on 'floor' property, but found something else or nothing.`
              );
            var floor = Number(sfloor);
            i = line.indexOf(":", i + 1);
            var _i = line.indexOf(",", i + 1);
            if (_i < 0) _i = line.lastIndexOf('"'); // this should fix the problem on Twirl and other events
            var eType = line.substr(i + 1, _i - i - 1).replace(/[ \"]/g, "");
            if (Object.keys(AdofaiMapAction.ACTIONS_LIST).includes(eType)) {
              var action = new AdofaiMapAction(floor, eType);
              var value = line
                .substr(
                  _i + 1,
                  Math.max(line.lastIndexOf("}"), line.lastIndexOf('"')) - i - 1
                )
                .split(",");
              // console.log(`Init value`, value)
              for (var ind = 0; ind < value.length; ind++) {
                if (
                  (value[ind]
                    .replace(/[^\\\"]/g, "")
                    .replace(/(\\\\)/g, "\\")
                    .replace(/(\\\")/g, "").length %
                    2 !=
                    0 ||
                    (value[ind].replace(/[^\[]/g, "").length !=
                      value[ind].replace(/[^\]]/g, "").length &&
                      value[ind]
                        .replace(/[^\\\"]/g, "")
                        .replace(/(\\\\)/g, "\\")
                        .replace(/(\\\")/g, "").length %
                        2 ==
                        0)) &&
                  value.length - 1 != i
                ) {
                  value[ind] += "," + value[ind + 1];
                  value[ind + 1] = null;
                  ind++;
                }
              }
              value = value.filter((_v) => _v != null);
              // console.log(`value filtered`, value)

              var values = [];
              value.forEach((va) => {
                va = va.substr(va.indexOf(":") + 1, Infinity).trim();
                try {
                  values.push(new Function(`return ${va};`)());
                } catch (err) {
                  throw new Error(
                    `An error occurred in line ${index} while parsing the value:\n\n${err.message}`
                  );
                }
              });

              var ev = AdofaiMapAction.ACTIONS_LIST[eType];
              var evalue = new ev(...values);

              action.eventValue = evalue;
              res.actions.push(action);
            } else
              throw new Error(
                `Invalid action type '${eType}' in line ${index}.`
              );
          }
          break;
      }
    });
    if (!f) {
      throw new Error(`Could not find any settings object in the map file.`);
    }
    return res;
  }

  /**
   * Class for managing customizable hexadecimal color.
   */
  static Color = Color;

  /**
   * This contains every enums needed for you.
   *
   * This is supposed to be read-only but if I create this property by `Object.defineProperty()`, I cannot create this comment.
   *
   * So please avoid making any changes into this if you don't know what you are doing.
   */
  static Enums = Enums;

  /**
   * Class for easy manipulation of paths.
   *
   * Used directly in `pathData: "..."`.
   *
   * Contains every types of path. Do `Object.keys(AdofaiMapPathData.PATH_LIST)` to get all list of Path in String.
   */
  static PathData = AdofaiMapPathData;

  /**
   * This is default settings for an ADOFAI Map.
   */
  static Settings = AdofaiMapSettings;

  /**
   * Class for easy manipulation of events.
   *
   * Used directly in `actions: [ ... ]`.
   *
   * Contains every actions. Do `AdofaiMapAction.ACTIONS_LIST` to get all list of classes.
   *
   * AdofaiEventType is in `AdofaiEventType.js`.
   */
  static Action = AdofaiMapAction;
}

export default ADOFAI;
