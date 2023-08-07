import { homePage } from "./homePage"
import { addMenuCards } from "./menuPage"

const makeEvent = function (buttonID, makingFx) {
    const centerContent = document.querySelector('.center-content')
    const button = document.querySelector(`#${buttonID}`)
    button.onclick = function () {
        centerContent.innerHTML = ''
        makingFx()
    }
    return
}

export default function () {
    makeEvent('menu', addMenuCards)
    makeEvent('home', homePage)
}