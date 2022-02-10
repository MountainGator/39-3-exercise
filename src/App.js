import foods from './foods';
import { choice, remove } from './helpers';

function App() {
    
    let chosenOne = choice(foods);
    
    console.log(`I'd like one ${chosenOne} please.`);
    console.log(`Here you go: ${chosenOne}`);

    let fruitsLeft = remove(foods, chosenOne);

    console.log('Delicious, may I have another?');
    console.log(`I'm sorry, we're all out. We have ${fruitsLeft.length} left.`);
    
}
  
export default App;