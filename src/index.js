import {Dice} from './dice'
import {getMainContainer,appendToParent,clearParent} from './dom'


const button = document.querySelector('.click')

let toggle=false;
button.onclick = () => {
    toggle = !toggle;
    render(toggle);
}

function render(toggle) {
    clearParent(getMainContainer())
    if(toggle){
        const newDice = Dice(5)
        appendToParent(getMainContainer(),newDice.DOM)
    } else {
        const newDice = Dice(6)
        appendToParent(getMainContainer(),newDice.DOM)
    }   
    
}


