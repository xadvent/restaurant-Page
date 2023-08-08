import { homePage } from "./homePage"
import { addMenuCards } from "./menuPage"
import { makeContact } from "./makeContact"

const makeEvent = function (buttonID, makingFx) {
    const centerContent = document.querySelector('.center-content')
    const button = document.querySelector(`#${buttonID}`)
    button.onclick = function () {
        centerContent.innerHTML = ''
        const getRidActive = (function () {
            const listButton = document.querySelectorAll('.header-button')
            listButton.forEach(x => x.id = '')
            return
        })()
        this.id = 'active'
        makingFx()

    }
    return
}
const addActive = function () {
    const activeHome = document.querySelector('#home')
    return activeHome.id = 'active'
}

export default function () {
    makeEvent('menu', addMenuCards)
    makeEvent('home', homePage)
    makeEvent('contact', makeContact)
    addActive()
    return
}