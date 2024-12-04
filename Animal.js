export class Animal {

  _weight

  constructor(weight) {
    this._weight = weight;
  }

  get weight() {
    return this._weight;
  }

  set weight(newWeight){
    this._weight = newWeight;
    console.log("Weight changed");
  }

  display() {} 

  feed() {}


}