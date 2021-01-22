import {getMainContainer,getCounterDom,changeMargin,containerWidth} from './javascripts/dom'
import {clickTossHandler,setNumberOfDicesHandler} from './javascripts/handlers'
import {getRand,getTotal} from './javascripts/math'
import {Game} from './javascripts/gameObjects'
import './styles/style.css'

const container = getMainContainer();
const select = document.querySelector("#dices")

container.onclick = clickTossHandler;
select.onchange = setNumberOfDicesHandler;

const game = Game();

export function render() {
  
    const currentGame = game.getObjects();
    const counterDom = getCounterDom();
    
    currentGame.forEach(die=>die.value(getRand(1,6)));
    const sum = getTotal(currentGame);
   
    counterDom.innerHTML = sum;
}

export function renderDices (number) {
    changeMargin(number)
    containerWidth(number)
    game.renderObjects(number)
}

(function initialRender()  {
    const INTIAL_VALUE = 1
    renderDices(INTIAL_VALUE)

})()

