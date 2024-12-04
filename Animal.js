export class Animal {
  #weight;

  constructor(weight) {
    this.#weight = weight;
  }

  get weight() {
    return this.#weight;
  }

  display() {}

  feed() {}
}
