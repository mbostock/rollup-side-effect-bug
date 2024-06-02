import {Mark} from "./mark.js";

export function plot({marks = []} = {}) {
  return `plot(${marks})`;
}

Mark.prototype.plot = function () {
  return plot({marks: [this]});
};
