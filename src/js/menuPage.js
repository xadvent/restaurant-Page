import { makeElementWithClass } from './easyFx'
import Pizza from '../img/pizza.png'
import Pasta from '../img/pasta.png'
import Stick from '../img/cheeseSticks.jpg'

const makeCard = function (img, name, description) {
    const newCard = makeElementWithClass('div', 'card')

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

export const addMenuCards = function () {
    const centerContent = document.querySelector('.center-content')

    const pizzaDescr = 'This is a famous dish equivalent to that of lorem ipsum. Everybody loves pizza. Including your mother. You would think my dick was made out of pizza. you stupid hoe.'
    const pizzaCard = makeCard(Pizza, 'Italian Pizza', pizzaDescr)
    const pastaDescr = 'Pasta is a versatile and beloved staple of Italian cuisine, consisting of dough made from wheat flour, water, and sometimes eggs. It comes in various shapes and sizes, each tailored to complement different sauces and dishes.'
    const pastaCard = makeCard(Pasta, 'Pasta', pastaDescr)
    const stickDescr = 'The cheese stick is typically seasoned  With its irresistible combination of textures and flavors, the cheese stick is a popular and indulgent treat enjoyed by people of all ages.'
    const stickCard = makeCard(Stick, 'Cheese Stick', stickDescr)


    centerContent.appendChild(pizzaCard);
    centerContent.appendChild(pastaCard);
    centerContent.appendChild(stickCard)
    return
}