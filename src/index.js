import './style.css';
import Logo from './restaurantLogo.png'
import Pizza from './Pizza.png'

const content = document.querySelector('#content')

const makeElementClass = function (element, selectedClass) {
    const newElement = document.createElement(element);
    newElement.classList.add(selectedClass)
    return newElement
}

const makeHeader = (function () {

    const header = document.createElement('div');
    header.id = 'header'
    content.append(header)

    const leftHeader = makeElementClass('div', 'left-header')
    header.appendChild(leftHeader)

    const restaurantLogo = new Image()
    restaurantLogo.src = Logo
    restaurantLogo.classList.add('restaurant-logo')
    leftHeader.appendChild(restaurantLogo)

    const restaurantName = document.createElement('h1')
    restaurantName.textContent = 'Derogatory Danny'
    leftHeader.appendChild(restaurantName)

})()

const centerContent = makeElementClass('div', 'center-content')
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

const makeCard = function(img, name, description) {
    const newCard = makeElementClass('div', 'card')

    const newImg = new Image()
    newImg.src = img
    newImg.classList.add('card-img')

    const title = document.createElement('h2')
    title.textContent = name
    title.classList.add('card-title')

    const newDescription = document.createElement('p')
    newDescription.textContent = description 
    newDescription.classList.add('card-description')

    newCard.appendChild(newImg)
    newCard.appendChild(title)
    newCard.appendChild(newDescription)

    return newCard
}

const middleContent = document.querySelector('.center-content')

const pizzaDescr = 'This is a famous dish equivalent to that of lorem ipsum. Everybody loves pizza. Including your mother. You would think my dick was made out of pizza. you stupid hoe.'
const pizzaCard = makeCard(Pizza, 'Italian Pizza', pizzaDescr)
centerContent.appendChild(pizzaCard);
