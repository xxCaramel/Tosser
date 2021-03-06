import {render,renderDices} from '../index'
import {clearParent,gameArea} from './dom'
import {buildCoin,coin_flip,resetAnimationCount,restartAnimation} from './Coin'
import {Game} from './gameObjects'


const diceRadio = document.querySelector("#dice")
const coinRadio = document.querySelector("#coin")
const menu = document.querySelector(".side-menu");

diceRadio.onclick= () => {

    document.querySelector("#dices").selectedIndex = "0" //Resets select dropdown
    clearParent(gameArea())
    document.body.style.backgroundColor = "#eb5661fc";
    menu.style.backgroundColor = "coral";
    document.querySelector("#dices").style.display = "block"
    const game = Game()
    game.diceContainerDOM()

    renderDices(1)
}



coinRadio.onclick = () => {
    clearParent(gameArea())
    document.body.style.backgroundColor = "cornflowerblue";
    document.querySelector("#dices").style.display = "none"
    menu.style.backgroundColor = "#edbc64";
    buildCoin()
}

const clickTossHandler = (event) => {
    render()
}

const setNumberOfDicesHandler = (event) => {
    const numberOfDices = event.target.value;
    renderDices(numberOfDices)
    
}

const sideBar = document.querySelector(".header")


const select = document.querySelector("#dices")
select.addEventListener('change',setNumberOfDicesHandler);

let current = false;
sideBar.onclick = () => {
    const sideMenu = document.querySelector(".side-menu");
    current = !current;
    
    (current)? sideMenu.style.display = "block" :sideMenu.style.display = "none"

}

document.addEventListener('click',(event)=> {
    const DICE_AROUND = 'dice-game'; const DICE_BODY = 'dice game'; const DICE_GAPS = 'container center'
    const COIN = 'main-block'; const TAILS = 'coin-image2'; const HEADS = 'coin-image'
    const target = event.target.className
    const targetID = event.target.id

   
    if(target === DICE_AROUND || target === DICE_BODY || target === DICE_GAPS) {
        clickTossHandler()
    }else if(target === COIN || targetID === TAILS || targetID === HEADS){
        //resetAnimationCount()
        coin_flip()
    }
})
gameArea().addEventListener('animationend',restartAnimation)

export {clickTossHandler,setNumberOfDicesHandler}