import MallardDuck from './MallardDuck.js';
import TuftedDuck from './TuftedDuck.js';


const duck1 = new MallardDuck(334);
const duck2 = new TuftedDuck(256);


console.log(duck1.weight);
console.log(duck2.weight);
console.log(duck1.display());
console.log(duck2.display());
console.log(duck1.feed());
console.log(duck2.feed());


