class Mark {
  toString() {
    return "Mark";
  }
}

class Dot extends Mark {
  toString() {
    return "Dot";
  }
}

const dot = new Dot();

console.log(dot.plot());
