import foods from './foods';
import { choice, remove } from './helpers';

function App() {
    while (foods.length > 0) {
        let chosenOne = choice(foods);
        if(foods.indexOf(chosenOne) !== -1){
            console.log(`I'd like one ${chosenOne} please.`);
            console.log(`Here you go: ${chosenOne}`);

            let foodLeft = remove(foods, chosenOne);

            console.log('Delicious, may I have another?');
            console.log(`I'm sorry, we're all out. We have ${foodLeft.length} others left.`);
        } else if(foods.indexOf(chosenOne) === -1) {
            console.log(`we're all out of ${chosenOne}s. Please come back tomorrow`);
        }
        foods = remove(foods, chosenOne);
    } 
}
  
export default App;