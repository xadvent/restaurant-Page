import { makeElementWithClass } from './easyFx';
import { makeElementWithID } from './easyFx';

export const homePage = function () {
    const centerContent = document.querySelector('.center-content')

    const homeContent = makeElementWithID('div', 'home-page')
    const homeName = document.createElement('div')
    homeName.id = 'home-name'

    const welcome = document.createElement('h1')
    const welcomeEnd = document.createElement('h1')
    const welcomeSpan = document.createElement('span')
    welcome.textContent =  `Welcome to` 
    welcomeSpan.textContent = "Derogatory Danny's"
    welcomeEnd.textContent = 'Pizzeria'
    
    homeName.appendChild(welcome)
    homeName.appendChild(welcomeSpan)
    homeName.appendChild(welcomeEnd)
    homeContent.appendChild(homeName)
    
    const description = document.createElement('h3')
    description.textContent =  `Here at Danny's, we provide you the best service through our business practices. You will love all of our food.`
    const newline = document.createElement('br')
    const seperateDescription = document.createElement('h3')
    seperateDescription.textContent = "Making the best Pizza's since 1991. Come check us out!"

    const descriptionBox = makeElementWithID('div', 'home-description')
    descriptionBox.appendChild(description)
    descriptionBox.appendChild(newline)
    descriptionBox.appendChild(seperateDescription)
    homeContent.appendChild(descriptionBox)

    centerContent.appendChild(homeContent)
    return
}