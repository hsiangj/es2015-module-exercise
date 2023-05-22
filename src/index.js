import {choice, remove} from './helpers';
import foods from './foods';

let RANDOMFRUIT = choice(foods);

console.log(`I'd like one ${RANDOMFRUIT}, please`)
console.log(`Here you go: ${RANDOMFRUIT}`)
console.log(`Delicious! May I have another?`)

remove(foods, RANDOMFRUIT);
let FRUITSLEFT = foods.length;

console.log(`I'm sorry, we're all out. We have ${FRUITSLEFT} left.`)
