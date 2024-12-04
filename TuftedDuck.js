import Duck from "./Duck.js";

export class TuftedDuck extends Duck {
  constructor(weight) {
    super(weight);
  }

  display() {
    return "I'm a real Tufted duck";
  }

  feed() {
    return "I dive to feed.";
  }
}
