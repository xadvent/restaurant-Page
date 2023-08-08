import { makeElementWithClass } from "./easyFx"
import { makeElementWithID } from "./easyFx"
import PizzaMan from "../img/pizzaboy.jpeg"

const pizzaboy = new Image()
pizzaboy.src = PizzaMan
pizzaboy.id = 'pizza-boy'

export const makeContact =  function () {
    const centerContent = document.querySelector('.center-content')
    const contactBox = makeElementWithID('div', 'contact-page')

    const contactUs = makeElementWithClass('h1', 'contact-greet')
    contactUs.textContent = 'Contact us now!'
    const phoneNumber = makeElementWithClass('h2', 'contact-phone')
    phoneNumber.textContent = '+1 123-999-9999'

    contactBox.appendChild(contactUs)
    contactBox.appendChild(pizzaboy)
    contactBox.appendChild(phoneNumber)


    centerContent.appendChild(contactBox)
    return
}