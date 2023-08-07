import { makeElementWithClass } from './easyFx';
import Logo from './restaurantLogo.png'
export default (function () {
    const makeHeader = (function () {

        const header = document.createElement('div');
        header.id = 'header'
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
            const listButton = document.createElement('button')
            listButton.classList.add('header-button')
            listButton.id = name.toLowerCase()
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
        const footer = document.createElement('div')
        footer.id = 'footer'
        const linkFooter = document.createElement('a')
        linkFooter.href = './https://www.youtube.com/watch?v=hxGOiiR9ZKg&ab_channel=CodeAesthetic'
        linkFooter.textContent = 'Pierce Strutt | Github Repo'
        content.appendChild(footer)
        footer.appendChild(linkFooter)
    })();

})