export class Animal {
  #weight;

  constructor(weight) {
    this.#weight = weight;
  }

  get weight() {
    return this.#weight;
  }
  set weight(newWeight){
    this.#weight = newWeight;
  }
  display() {}

  feed() {}
}
