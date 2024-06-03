class Mark {
  toString() {
    return "Mark";
  }
}

function plot({marks = []} = {}) {
  return `plot(${marks})`;
}

class Dot extends Mark {
  toString() {
    return "Dot";
  }
}

Mark.prototype.plot = function () {
  return plot({marks: [this]});
};

const dot = new Dot();

console.log(dot.plot());
