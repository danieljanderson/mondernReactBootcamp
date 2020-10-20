import foods from './foods'
import {choice,removes} from './helpers'
console.log(foods)
const myFruit = choice(foods)
console.log(`I'd like one ${myFruit}, please`)
console.log(`Here you go:${myFruit}`)
console.log('Delicious! May I have another?')
let newfoods
newfoods = removes(foods,myFruit)
console.log(`I'm sorry, we're all out. We have ${newfoods.length} left`)

