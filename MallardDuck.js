import { Duck } from './Duck.js';

export class MallardDuck extends Duck {

    constructor(weight) {
      super(weight);
    }
    
    display() {
      return "I'm a real Mallard duck";
    }

    feed() {
      return "I dabble to feed.";
    }


}