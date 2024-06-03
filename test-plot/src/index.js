import {Mark} from "./mark.js";
import {plot} from "./plot.js";

Mark.prototype.plot = function () {
  return plot({marks: [this]});
};

export {plot} from "./plot.js";
export {Mark} from "./mark.js";
export {Dot} from "./dot.js";
