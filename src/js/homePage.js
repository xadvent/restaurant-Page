import { makeElementWithClass } from './easyFx';

export const homePage = function () {
    const centerContent = document.querySelector('.center-content')

    const homeContent = makeElementWithClass('div', 'home-page')
    const homeName = document.createElement('div')
    homeName.id = 'home-name'

    const welcome = document.createElement('h1')
    welcome.textContent = `Welcome to Derogatory Danny's`
    homeContent.appendChild(homeName)
    homeName.appendChild(welcome)
    
    const description = document.createElement('h3')
    description.textContent =  `Here at Danny's, we provide you the best service through our business practices. You will love all of our food.`
    const newline = document.createElement('br')
    const seperateDescription = document.createElement('h3')
    seperateDescription.textContent = 'We have been in business since 1602. There is a reason why we have stayed around for so long.'

    const descriptionBox = document.createElement('div')
    descriptionBox.id = 'home-description'
    descriptionBox.appendChild(description)
    descriptionBox.appendChild(newline)
    descriptionBox.appendChild(seperateDescription)
    homeContent.appendChild(descriptionBox)

    centerContent.appendChild(homeContent)
    return
}