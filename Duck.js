import { Bird } from "./Bird.js";

export class Duck extends Bird {
  constructor(weight) {
    super(weight);
  }

  fly() {
    return "I'm flying like a duck";
  }

  quack() {
    return "Quack quack!";
  }

  swim() {
    return "All ducks float";
  }
}
