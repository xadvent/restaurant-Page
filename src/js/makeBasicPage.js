import { makeElementWithClass } from './easyFx';
import { makeElementWithID } from './easyFx';
import { homePage } from './homePage';
import Logo from '../img/restaurantLogo.png'

export default (function () {
    const makeHeader = (function () {

        const header = makeElementWithID('div', 'header')
        content.append(header)

        const leftHeader = makeElementWithClass('div', 'left-header')
        header.appendChild(leftHeader)

        const restaurantLogo = new Image()
        restaurantLogo.src = Logo
        restaurantLogo.classList.add('restaurant-logo')
        leftHeader.appendChild(restaurantLogo)

        const restaurantName = document.createElement('h1')
        restaurantName.textContent = 'Derogatory Danny'
        leftHeader.appendChild(restaurantName)

        const headerList = document.createElement('ul')

        const makeLi = function (name) {
            const listItem = document.createElement('li')
            const listButton = makeElementWithID('button', name.toLowerCase())
            listButton.classList.add('header-button')
            listButton.textContent = name[0].toUpperCase() + name.substr(1).toLowerCase()
            listItem.appendChild(listButton)
            headerList.appendChild(listItem)
        }
        makeLi('Home')
        makeLi('Menu')
        makeLi('Contact')
        header.appendChild(headerList)
    })()

    const centerContent = makeElementWithClass('div', 'center-content')
    content.appendChild(centerContent)

    const makeFooter = (function () {
        const footer = makeElementWithID('div', 'footer')
        const linkFooter = document.createElement('a')
        linkFooter.href = './https://www.youtube.com/watch?v=hxGOiiR9ZKg&ab_channel=CodeAesthetic'
        linkFooter.textContent = 'Pierce Strutt | Github Repo'
        content.appendChild(footer)
        footer.appendChild(linkFooter)
    })();
})