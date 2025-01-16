import { Bird } from "./Bird.js";

export class Ostrich extends Bird {
  constructor(weight) {
    super(weight);
  }

  display() {
    return "I'm a pink Ostrich!";
  }

  feed() {
    return "I poke in the water to feed.";
  }
}
